<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class App extends Vue { }
</script>

<style lang="less">
@import '~@/less/reset.less';
html, body {
  height: 100%;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
