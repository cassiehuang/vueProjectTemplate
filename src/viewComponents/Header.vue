<template>
  <div class="top-header grid center">
    <div class="logo tc"><img src="/public/logo/logo.svg" /></div>
    <div class="user">
      <div class="avator"></div>
      <i class="icon-angle-down angle"></i>
      <div class="drop-list">
        <div><i class="icon-id-card icon"></i> Profile</div>
        <div><i class="icon-sign-in icon"></i> Sign Out</div>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Header extends Vue { }
</script>
<style lang="less" scoped>
@import '~@/less/variable.less';
.top-header {
  width: 1200px;
  height: 80px;
  grid-template-columns: 1fr 80px;
  .logo {
    padding: 20px 0;
    margin-right: -80px;
    img {
      height: 40px;
    }
  }
  .user {
    position: relative;
    padding: 20px 0;
    .angle {
      .fs(18);
      margin-left: 10px;
      color: @color-grey-3;
    }
    .avator {
      width: 40px;
      height: 40px;
      display: inline-block;
      border-radius: 50%;
      background: @color-grey-3;
      vertical-align: middle;
    }
    .drop-list {
      position: absolute;
      width: 110px;
      background: @color-white-3;
      right: 0;
      top: 80px;
      box-shadow: 0 3px 4px @color-grey-3;
      z-index: 100;
      padding:  10px 0;
      display: none;
      div {
        height: 30px;
        line-height: 30px;
        padding: 0 15px;
        .fs(12);
        .icon {
          margin-right: 10px;
        }
        &:hover {
          background: #EFEFEF;
          cursor: pointer;
        }
      }
    }
    &:hover .drop-list {
      display: block;
    }
  }
}
</style>
