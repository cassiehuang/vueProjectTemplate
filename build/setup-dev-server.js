const path = require('path');
const webpack = require('webpack');
const config = require('./webpack.config.js');

module.exports = function setUpDevServer(app) {
  //dev-hot server配置
  config.entry = {
    app: [
      'webpack-hot-middleware/client?noInfo=true&reload=true',
      path.resolve(__dirname, '../src/main.js'),
    ],
  };
  config.output.filename = '[name].js';
  config.plugins.push(new webpack.HotModuleReplacementPlugin());

  let r;
  const p = new Promise(resolve => {
    r = resolve;
  });
  //通过定义的webpack.config配置, webpack梳理出entry和output模块的关系脉络，生成一个complier实例
  //webpack-dev-middleware在此基础上形成一个文件映射系统，当文件做出改动，webpack就重新编译（类似调用complier.watch()监听）
  const s = Date.now();
  const complier = webpack(config);
  const devMiddleware = require('webpack-dev-middleware')(complier, {
    publicPath: config.output.publicPath,
  });
  app.use(devMiddleware);
  app.use(require('webpack-hot-middleware')(complier));
  complier.plugin('done', stats => {
    console.log(`complier ${Date.now() - s}ms`);
    r(devMiddleware.fileSystem.readFileSync(path.join(__dirname, '../dist/index.html'), 'utf-8'));
  });
  return p;
};
