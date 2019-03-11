<template>
  <div class="my-footer">
    <p class="tc"> ⓒ Copyright 2017 Thougthworks</p>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Footer extends Vue {}
</script>
<style lang="less">
.my-footer {
  p {
    line-height: 30px;
    font-size: 14px;
  }
}
</style>

