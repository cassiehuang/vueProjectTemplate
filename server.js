const fs = require('fs');
const path = require('path');
const async = require('async');
const favicon = require('serve-favicon');
const proxy = require('http-proxy-middleware');
const express = require('express');

const app = express();

const isProd = process.env.NODE_ENV === 'production';
const resolve = file => path.resolve(__dirname, file);

let template = null;
let devServerComplier;
if (!isProd) {
  devServerComplier = require('./build/setup-dev-server')(app);
}

const serve = (urlPath, cache) => {
  return express.static(resolve(urlPath), {
    maxAge: cache && isProd ? 60 * 60 * 24 * 30 : 0,
  });
};

const registerApiRoute = () => {
  app.use(
    '/api/*',
    proxy({
      target: 'http://localhost:3001/',
      changeOrigin: true,
      pathRewrite: { '^/api': '' },
    }),
  );
};

const registerDefaultMiddleware = () => {
  app.use(favicon('./public/favicon.png'));
  app.use('/dist', serve('./dist/', true));
  app.use('/public', serve('./public/', true));
  app.get('*', (req, res, next) => {
    if (req.path === '/' || !/(dashboard|agent|my|help)/.test(req.path)) {
      return res.redirect('/agent');
    }
    next();
  });
};

async.waterfall(
  [
    function(cb) {
      registerDefaultMiddleware();
      registerApiRoute();

      app.get('*', (req, res) => {
        res.end(template);
      });

      if (devServerComplier) {
        devServerComplier.then(data => {
          template = data;
          cb();
        });
      } else {
        template = fs.readFileSync(resolve('./dist/index.html'), 'utf-8');
        cb();
      }
    },
  ],
  function() {
    const port = process.env.PORT || 5656;
    app.listen(port, () => {
      console.log(
        `${isProd ? 'server' : 'dev server'} is listening on:${port}`,
      );
    });
  },
);
