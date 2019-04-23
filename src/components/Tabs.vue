<template>
  <div>
    <ul class="tabs grid"
        :style="{ 'grid-template-columns': `repeat(${tabs.length}, 1fr)` }">
      <li v-for="(tab, index) in tabs"
          :key="index"
          @click="change(index)"
          :class="{ active: index === active }">
        {{ tab.text }}
      </li>
    </ul>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({
  props: ['tabs', 'active'],
})
class Tabs extends Vue {
  change(index) {
    this.$emit('update:active', index);
  }
}
export default Tabs;
</script>
<style lang="less">
@import '~@/less/variable.less';
.tabs.grid {
  height: 100%;
  li {
    height: 100%;
    text-align: center;
    box-sizing: border-box;
    border-bottom: 3px solid @color-white-3;
    cursor: pointer;
    &.active {
      border-bottom: 3px solid @color-blue-1;
    }
    &:before{
      content: '';
      display: inline-block;
      width: 0;
      height: 100%;
      vertical-align: middle;
    }
  }
}
</style>
