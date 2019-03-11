<template>
  <button class="btn" :class="type">
    <i :class="icon" class="icon"></i>{{ text }}
  </button>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: ['type', 'text'],
})
export default class Btn extends Vue {
  get icon() {
    switch (this.type) {
      case 'add':
        return 'icon-plus';
      case 'deny':
        return 'icon-deny';
      case 'del':
        return 'icon-trash';
    }
  }
}
</script>
<style lang="less">
@import '~@/less/variable.less';
.btn {
  background: @color-blue-1;
  color: @color-white-3;
  .fs(16);
  line-height: 30px;
  padding: 0 15px;
  &.add {
    .fs(18);
    padding: 0 8px;
  }
  &.btn-2 {
    background: #EFEFEF;
    color: @color-grey-1;
    .icon {
      float: right;
      line-height: 30px;
      margin-left: 8px;
    }
  }
}
</style>

