<template>
  <layout class="agent">
    <template slot="content">
      <section class="grid sec-1 mt-15">
        <div class="box tc">
          <span class="white name">Building</span>
          <span class="white number">3</span>
          <i class="icon-cog icon"></i>
        </div>
        <div class="box tc">
          <span class="white name">Idle</span>
          <span class="white number">5</span>
          <i class="icon-coffee icon"></i>
        </div>
        <div class="box grid">
          <p>ALL</p>
          <p>PHYSICAL</p>
          <p>VIRTUAL</p>
          <p class="bold">8</p>
          <p class="bold">4</p>
          <p class="bold">4</p>
        </div>
      </section>
      <section class="sec-2 grid mt-15">
        <tabs :active.sync="active" :tabs="tabs"></tabs>
        <div class="search">
          <i class="icon-search"></i>
          <input type="text" v-model="searchValue" />
        </div>
        <div class="colType">
          <div class="col-item" :class="{ active: type === 0 }" @click="type = 0"><i class="icon-th-card fs-18"></i></div>
          <div class="col-item" :class="{ active: type === 1 }" @click="type = 1"><i class="icon-th-list fs-18"></i></div>
        </div>
      </section>
      <section class="sec-3 mt-15" :class="{ colList: !type, rowList: type }">
        <div class="item mt-15" v-for="(agent, idx) in agents" :key="idx">
          <div class="box">
            <img :src="`/public/os-icons/${agent.os}.png`" />
          </div>
        </div>
      </section>
    </template>
    <template slot="aside-bottom">
      <h1 class="mt-15">History</h1>
      <ul class="history">
        <li v-for="(agent, idx) in agents" :key="idx">
          {{ agent.name }}
        </li>
      </ul>
    </template>
  </layout>
</template>

<script>
import Vue from 'vue';
import Component from 'vue-class-component';
import Layout from '@/viewComponents/Layout.vue';
import Tabs from '@/components/Tabs.vue';
import { getAgents } from '@/api/agent.js';

@Component({
  components:{
    Layout,
    Tabs,
  },
  watch: {
    active (self, newVal) {
      // self.tabs[newVal]();
    }
  }
})
export default class Agent extends Vue {
  tabs = [
    { text: 'All', action: 'all', },
    { text: 'Physical', action: 'physical', },
    { text: 'Virtual', action: 'virtual', },
  ];
  searchValue = '';
  active = 0;
  agents = [];

  type = 1;

  mounted() {
    this.getAgents();
  }

  getAgents() {
    getAgents()
      .then(({ data }) => {
        this.agents = data;
      })
      .catch((err) => {
        console.log(err);
      })
  }

  refresh() {
    this.getAgents();
  }
}

</script>
<style lang="less">
@import '~@/less/variable.less';
.agent {
  .sec-1.grid {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    .box {
      height: 120px;
      position: relative;
      .name {
        position: absolute;
        top: 10px;
        left: 5px;
        .fs(18);
      }
      .number {
        position: absolute;
        bottom: 15px;
        right: 10px;
        .fs(45);
      }
      .icon {
        .fs(144);
        opacity: 0.2;
        position: relative;
        top: -14px;
        color: @color-white-3;
      }
      &:nth-child(1) { background-color: @color-orange; }
      &:nth-child(2) { background-color: @color-green; }
      &:nth-child(3) {
        background-color: @color-white-3;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        justify-items: center;
        .bold {
          .fs(20);
          font-weight: bold;
        }
      }
    }
  }
  .sec-2.grid {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 30px;
    height: 60px;
    background: @color-white-3;
    .search {
      align-self: center;
      position: relative;
      input {
        width: 150px;
        border: none;
        background: #eeeeee;
        padding: 0 15px 0 32px;
        height: 35px;
        line-height: 35px;
      }
      .icon-search {
        position: absolute;
        top: 8px;
        left: 10px;
        width: 30px;
        color: @color-grey-4;
        .fs(18);
      }
    }
    .colType {
      text-align: right;
      .col-item {
        margin-right: 20px;
        height: 60px;
        line-height: 60px;
        text-align: center;
        display: inline-block;
      }
    }
  }
  .sec-3.rowList {
    .item {
      min-height: 120px;
      padding: 20px 20px;
      box-sizing: border-box;
    }
  }
  .sec-3 {
    .item {
      background: @color-white-3;
    }
    overflow-y: scroll;
  }
  .aside-bottom {
    h1 {
      .fs(24);
      color: @color-grey-3;
      padding: 0 0 15px 15px;
    }
    .history {
      .fs(12);
      color: @color-grey-4;
      padding: 0 30px 20px 28px;
      li {
        height: 30px;
        line-height: 30px;
        list-style: disc outside;
        padding-left: 12px;
        cursor: pointer;
        &:hover {
          color: @color-blue-1;
        }
      }
    }
  }
}
</style>

