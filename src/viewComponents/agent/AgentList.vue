<template>
  <div class="wrapper mt-15">
    <div class="item mt-15"
         v-for="(agent, idx) in agents"
         :key="idx">
      <div class="box">
        <img :src="`/public/os-icons/${agent.os}.png`"
             class="os" />
        <div class="details">
          <span class="name"><i class="icon-desktop icon"></i>{{ agent.name }}</span>
          <span class="status"
                :class="agent.status">{{ agent.status }}</span>
          <span class="info"><i class="icon-info icon"></i>{{ agent.ip }}</span>
          <span><i class="icon-folder icon"></i>{{ agent.location }}</span>
        </div>
        <div class="operate">
          <btn type="add" class="mt-15"
               text=''
               @click.native="showModal(agent)"></btn>
          <btn type="del"
               :text="resource"
               class="btn-2 mt-15"
               v-for="(resource, index) in agent.resources"
               :key="index"
               @click.native="$emit('delResource',agent, index)">
          </btn>
          <btn type="deny" class="deny"
               text='deny'
               @click.native="showModal(agent)"></btn>
        </div>
        <add-modal v-if="expended === agent.id" @close="close" @addResource="addResource"></add-modal>
      </div>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import Btn from '@/components/Botton.vue';
import AddModal from '@/viewComponents/agent/AddModal.vue';

@Component({
  components: {
    Btn,
    AddModal,
  },
  props: ['agents', 'expended']
})
export default class AgentList extends Vue {
  showModal(agent) {
    this.$emit('update:expended', agent.id);
  }

  close() {
    this.$emit('update:expended', null);
  }


  addResource(values) {
    this.$emit('addResource', this.agents.find(value => this.expended === value.id), values);
  }

}
</script>
<style lang="less">
@import '~@/less/variable.less';
.wrapper.rowList {
  height: 100%;
  width: calc(100% + 15px);
  overflow-y: scroll;
  .item:first-child {
    margin-top: 0;
  }
  .item {
    min-height: 120px;
    padding: 20px 20px;
    box-sizing: border-box;
    position: relative;
    .fs(14);
    .os {
      float: left;
    }
    .details {
      margin-left: 110px;
      display: grid;
      grid-template-columns: 33% 13% 18% 25%;
      justify-items: start;
      grid-column-gap: 15px;
      .icon {
        margin-right: 10px;
        line-height: 20px;
      }
      .name {
        color: @color-blue-1;
      }
      .status {
        padding: 0 5px;
        display: inline-block;
        &.building {
          background: @color-orange;
        }
        &.idle {
          background: @color-green;
        }
      }
    }
    .operate {
      margin: 5px 130px 0 110px;
      .btn {
        margin-right: 8px;
      }
      .deny {
        position: absolute;
        right: 20px;
        bottom: 25px;
      }
    }
  }
}
.wrapper.colList {
  height: 100%;
  width: calc(100% + 15px);
  overflow-y: scroll;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
  .mt-15 {
    margin-top: 0;
  }
  .item:first-child {
    margin-top: 0;
  }
  .item {
    padding: 20px 20px;
    box-sizing: border-box;
    text-align: center;
    .fs(14);
    .details {
      .icon {
        margin-right: 10px;
        line-height: 20px;
      }
      .name {
        color: @color-blue-1;
      }
      .status {
        padding: 0 5px;
        display: inline-block;
        &.building {
          background: @color-orange;
        }
        &.idle {
          background: @color-green;
        }
      }
      .info {
        display: block;
      }
    }
    .operate {
      .btn {
        margin-right: 8px;
        margin-top: 10px;
      }
    }
  }
}
</style>

