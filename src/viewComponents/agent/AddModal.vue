<template>
  <div class="modal-wrapper">
    <section class="agent-add-modal">
      <div class="arrow-up"><i class="icon-angle-up"></i></div>
      <div class="box">
        <span class="close" @click="close"><i class="icon-close"></i></span>
        <h4>Separate multiple resource name with commas</h4>
        <input type="text" placeholder="input value" v-model="value"/>
        <btn text="Add Resource" @click.native="add"></btn>
        <btn text="Cancel" @click.native="close"></btn>
      </div>
    </section>
    <div class="modal-mask" @click="close"></div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import Btn from '@/components/Botton.vue';

@Component({
  components: {
    Btn,
  }
})
export default class AddModal extends Vue {
  value = '';

  close() {
    this.$emit('close')
  }

  add() {
    if (this.value === '') return;
    const values = this.value.split(',');
    this.$emit('addResource', values);
  }
}
</script>
<style lang="less">
@import '~@/less/variable.less';
.modal-wrapper {
  .modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 99;
  }
}
.agent-add-modal {
  position: absolute;
  top: 70px;
  left: 110px;
  width: 570px;
  box-sizing: border-box;
  z-index: 100;
  .arrow-up {
    margin-left: 20px;
    display: inline-block;
    color: @color-blue-1;
    .fs(40);
    position: relative;
    top: 20px;
    z-index: 101;
    background: @color-white-3;
  }
  .box {
    border-top: 2px solid @color-blue-1;
    border-left: 2px solid @color-blue-1;
    box-shadow: 0px 3px 5px rgba(0,0,0,0.3);
    padding: 15px;
    background: @color-white-3;
    position: relative;
    h4 {
      .fs(14);
      margin: 15px 0;
    }
    input {
      width: 100%;
      box-sizing: border-box;
      border-radius: 3px;
      height: 40px;
      line-height: 40px;
      padding: 0 15px;
      margin-bottom: 30px;
    }
    .icon-close {
      .fs(18);
      color: @color-blue-1;
      position: absolute;
      top: 10px;
      right: 15px;
    }
  }
}
</style>

