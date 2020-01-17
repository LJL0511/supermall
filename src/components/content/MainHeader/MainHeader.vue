<template>
  <div id="header" slot="MainHeader">
    <div class="head_left">
      <p>您好，欢迎来到洪雨家教网！</p>
    </div>
    <div class="head_right">
        <a  href="" @mouseover="mouseOver()" @mouseleave="mouseLeave()"
           :style='active'>请登录</a>
        |
        <a  href="" @mouseover="mouseOver1()" @mouseleave="mouseLeave1()"
           :style='active1'>免费注册</a>

    </div>
  </div>
</template>

<script>
  export default {
    name:'MainHeader',
    data() {
      return{
        active:'',
        active1:''
      }
    },
    methods:{
      mouseOver() {
        this.active = 'color:#FE9901';
      },
      mouseLeave() {
        this.active = '';
      },
      mouseOver1() {
        this.active1 = 'color:#FE9901';
      },
      mouseLeave1() {
        this.active1 = '';
      },
    }
    }
</script>

<style>
@import "../../../assets/css/base.css";
@import "../../../assets/css/header.css";
</style>
