<template>
  <div>
    <i class="icon-search"></i>
    <slot name="input"></slot>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';

@Component
export default class Search extends Vue {}
</script>
