<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
class App extends Vue {
  data = {
    test: false,
    test1: true,
  }
}
export default App;
</script>

<style lang="less">
@import '~@/less/reset.less';
html, body {
  height: 100%;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
}
</style>
