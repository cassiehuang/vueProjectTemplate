import BScroll from 'better-scroll';

const focus = {
  inserted: function(el) {
    el.focus();
  }
}

const scrollOption = {
  scrollbar: {
    fade: true,
    interactive: false,
  },
  mouseWheel: {
    speed: 20
  },
}
const scroll = {
  bind: function(el, binding, vnode) {
    const option = Object.assign(binding.arg || {}, scrollOption);
    new BScroll(el, option);
  },
}

export default {
  scroll,
  focus,
}
