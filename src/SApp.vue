<template>
<div class="page-main">
<div class="page-header">
    <md-whiteframe md-tag="md-toolbar" md-elevation="1" class="main-header">
    <div class="logo">
      <img :src="logo" />
    </div>
    <h2 class="main-title" style="flex: 1">北厍世纪汉庭宾馆</h2>
  </md-whiteframe>
</div>
<div class="page-content">
<div class="page-left">
<md-card>
  <md-card-content>
    <md-table v-once>
      <md-table-header>
        <md-table-row>
          <md-table-head>房型</md-table-head>
          <md-table-head>门市价</md-table-head>
          <md-table-head>会员价</md-table-head>
          <md-table-head><div class="spec">午夜价<div>时间：1：00-5：00</div></div></md-table-head>
          <md-table-head>说明</md-table-head>
        </md-table-row>
      </md-table-header>
      <md-table-body>
        <md-table-row v-for="(item, index) in fj" :key="index">
          <md-table-cell>{{item.name}}</md-table-cell>
          <md-table-cell>{{item.price.msj}}</md-table-cell>
          <md-table-cell>{{item.price.hyj}}</md-table-cell>
          <md-table-cell>{{item.price.wyj}}</md-table-cell>
          <md-table-cell>{{item.price.desc}}</md-table-cell>
        </md-table-row>
      </md-table-body>
    </md-table>
  </md-card-content>
</md-card>
</div>
<div class="page-right">
  <md-card>
    <md-card-content>
      <weather></weather>

    </md-card-content>
  </md-card>
</div>
</div>
</div>
</template>
<script>
import weather from './components/weather'
export default {
  name: 'app',
  created () {

  },
  components: {
    weather
  },
  data () {
    return {
      logo: './static/img/logo.png',
      fj: [{
        name: '豪华标准电脑房',
        price: {
          msj: '218元',
          hyj: '175元',
          wyj: '153元',
          desc: ''
        }
      },
      {
        name: '豪华家庭房',
        price: {
          msj: '198元',
          hyj: '158元',
          wyj: '138元',
          desc: ''
        }
      },
      {
        name: '豪华大床房A',
        price: {
          msj: '188元',
          hyj: '150元',
          wyj: '132元',
          desc: ''
        }
      },
      {
        name: '豪华大床房B',
        price: {
          msj: '178元',
          hyj: '142元',
          wyj: '125元',
          desc: ''
        }
      },
      {
        name: '标准房',
        price: {
          msj: '188元',
          hyj: '150元',
          wyj: '132元',
          desc: ''
        }
      },
      {
        name: '大床房',
        price: {
          msj: '188元',
          hyj: '150元',
          wyj: '132元',
          desc: ''
        }
      },
      {
        name: '4小时钟点房',
        price: {
          msj: '80元',
          hyj: '',
          wyj: '',
          desc: '会员开8送1'
        }
      }]
    }
  }
}
</script>
<style>
body {
  font:1rem/1.3 Microsoft YaHei,Helvetica,sans-serif;
  background-color: #fefefe;
}
.logo{
  width: 4rem;
  margin: .2rem;
}
.main-title{
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.5rem;
  margin: 0 .2rem;
}
.page-content{
  display: flex;
  padding: 0.8rem 0.2rem;
}
.page-left {
  width: 66.66%;
}
.md-table .md-table-head-container{
  padding: 0;
  height: 1.8rem;
  line-height: 1rem;
  text-align: right;
}
.md-table .md-table-cell .md-table-cell-container{
  text-align: right;
}
.md-table .md-table-head-text{
  height: 1rem;
  line-height: 1rem;
  font-size: 0.6rem;
}
.md-table tbody .md-table-row {
  border-top: 0.05rem solid #e0e0e0;
}
.md-table .md-table-cell {
  height: 2rem;
  line-height: 1rem;
  font-size: 0.8rem;
}
.page-right {
  width: 33.33%;
  padding-left: 0.5rem;
}
</style>
