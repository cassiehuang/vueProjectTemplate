<template>
  <div class="layout">
    <header class="header">
      <slot name="header">
        <my-header></my-header>
      </slot>
    </header>
    <main class="grid main center">
      <aside class="aside">
        <my-nav></my-nav>
        <div class="aside-bottom">
          <slot name="aside-bottom"></slot>
        </div>
      </aside>
      <section class="content">
        <slot name="content"></slot>
      </section>
    </main>
    <footer class="footer">
      <slot name="footer">
        <my-footer></my-footer>
      </slot>
    </footer>
  </div>
</template>
<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import MyHeader from '@/viewComponents/Header.vue';
import MyFooter from '@/viewComponents/Footer.vue';
import MyNav from '@/viewComponents/AsideNav';

@Component({
  components: {
    MyHeader,
    MyFooter,
    MyNav,
  }
})
export default class Layout extends Vue { }
</script>
<style lang="less">
@import '~@/less/variable.less';
.layout {
  height: 100%;
  background: @color-white-1;
  .header {
    background: #fff;
  }
  .main.grid {
    max-width: 1200px;
    background: @color-white-1;
    height: calc(100% - 110px);
    grid-template-columns: 1fr 3fr;
    grid-column-gap: 30px;
    overflow: hidden;
    .aside {
      background: @color-grey-1;
      position: relative;
      .aside-bottom{
        position: absolute;
        bottom: 0;
        width: 100%;
      }
    }
    .content {
      position: relative;
    }
  }
  .footer {
    height: 30px;
    background: #fff;
  }
}
</style>

