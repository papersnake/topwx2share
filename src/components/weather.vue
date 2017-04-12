/* eslint-disable*/
<template>
<div class="weather-warp">
<h2>吴江,江苏</h2>
<div class="wiToday">
  <div class="wiIconGrop">
    <div class="wi wi520">
    </div>
    <p class="wiText">晴转多云</p>
  </div>
  <p class="wiTemperature">7<sup>°C</sup></p>
  <div class="wiDetail">
    <p class="wiDay">星期二</p>
  </div>
</div>
</div>
</template>
<script>
/* eslint-disable */
import Api from '../api'
export default {
  created () {
    this.getWeather()
  },
  methods: {
    getWeather () {
      Api.getWeather('吴江').then((data) => {
        console.log(data)
      })
    }
  }
}
</script>
<style>
.weather-warp{
  width: 100%;
  color: #fff;
}
.weather-warp h2 {
  font-size: 0.5rem;
}
.weather-warp .wiToday{
  width: 100%;
  overflow: hidden;
}
.weather-warp .wiToday>.wiIconGrop{
  float: right;
  width: 50%;
  text-align: center;
}
.weather-warp .wiToday>p.wiTemperature{
  font-size: 2rem;
  line-height: 1.45em;
  float:left;
  width: 50%;
  text-align: center;
  color: inherit;
  margin: 0;
}
</style>
