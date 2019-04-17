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
  navs = []
}
</script>
<style lang="less">
</style>

