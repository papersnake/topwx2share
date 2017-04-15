<template>
<div class="clock">
<div id="dates">{{dates}}</div>
<ul>
  <li id="hours">11</li>
    <li id="point">:</li>
    <li id="min">20</li>
    <li id="point">:</li>
    <li id="sec">{{sec}}</li>
</ul>
</div>
</template>
<script>
import moment from 'moment'
export default {
  data () {
    return {
      dates: '',
      hours: '',
      min: '',
      sec: ''
    }
  },
  created () {
    moment.locale('zh-cn')
    this.getTime()
  },
  methods: {
    getTime () {
      setInterval(() => {
        this.dates = moment().format('MMMM Do YYYY, dddd')
        this.hours = moment().hours()
        this.min = moment().minutes()
        this.sec = moment().seconds()
      }, 1000)
    }
  }
}
</script>
<style>
@font-face {
    font-family: 'BebasNeueRegular';
    src: url('/static/font/BebasNeue-webfont.eot');
    src: url('/static/font/BebasNeue-webfont.eot?#iefix') format('embedded-opentype'),
         url('/static/font/BebasNeue-webfont.woff') format('woff'),
         url('/static/font/BebasNeue-webfont.ttf') format('truetype'),
         url('/static/font/BebasNeue-webfont.svg#BebasNeueRegular') format('svg');
    font-weight: normal;
    font-style: normal;
}
.clock {margin:0 auto; padding:30px; color:#fff; font-size: 0.5rem; line-height: 0.8rem;}

#Date { font-family:'BebasNeueRegular', Arial, Helvetica, sans-serif; font-size:36px; text-align:center; text-shadow:0 0 5px #00c6ff; }

ul {  margin:0 auto; padding:0px; list-style:none; text-align:center; }
ul li { display:inline; font-size:1.1rem; text-align:center; font-family:'BebasNeueRegular', Arial, Helvetica, sans-serif; text-shadow:0 0 5px #00c6ff; }
#detes {
  text-align: right;
}
#point { position:relative; -moz-animation:mymove 1s ease infinite; -webkit-animation:mymove 1s ease infinite; padding-left:10px; padding-right:10px; }

@-webkit-keyframes mymove
{
0% {opacity:1.0; text-shadow:0 0 20px #00c6ff;}
50% {opacity:0; text-shadow:none; }
100% {opacity:1.0; text-shadow:0 0 20px #00c6ff; }
}


@-moz-keyframes mymove
{
0% {opacity:1.0; text-shadow:0 0 20px #00c6ff;}
50% {opacity:0; text-shadow:none; }
100% {opacity:1.0; text-shadow:0 0 20px #00c6ff; }
}
</style>
