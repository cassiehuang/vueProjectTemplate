<template>
  <layout class="agent"></layout>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import Layout from '@/viewComponents/Layout.vue';

@Component({
  components:{
    Layout,
  },
})
export default class Agent extends Vue { }

</script>
