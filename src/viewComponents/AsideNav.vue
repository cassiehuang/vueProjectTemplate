<template>
  <nav>
    <ul>
      <template v-for="(nav, idx) in navs">
        <router-link :to="nav.link"
                     :key="idx"
                     active-class="active"
                     class="mt-15 white"
                     tag="li">
          <i :class="nav.icon"
             class="icon"></i>
          <span>{{ nav.text }}</span>
        </router-link>
      </template>
    </ul>
  </nav>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Header extends Vue {
  navs = [
    {
      text: 'DASHBOARD',
      link: '/dashboard',
      icon: 'icon-dashboard',
    },
    {
      text: 'AGENT',
      link: '/agent',
      icon: 'icon-sitemap',
    },
    {
      text: 'MY CRUISE',
      link: '/my',
      icon: 'icon-boat',
    },
    {
      text: 'HELP',
      link: '/help',
      icon: 'icon-life-bouy',
    },
  ]
}
</script>
<style lang="less">
@import '~@/less/variable.less';
nav {
  li {
    height: 45px;
    line-height: 45px;
    cursor: pointer;
    .fs(14);
    &.active {
      background: @color-grey-2;
      color: @color-blue-1;
    }
    &:hover {
      color: @color-blue-1;
    }
    .icon {
      display: inline-block;
      padding: 0 20px 0 30px;
      .fs(20);
    }
  }
}
</style>

