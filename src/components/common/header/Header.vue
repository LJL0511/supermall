<!-- 整体封装一个header插槽 -->
<template>
  <div class="header">
    <slot name="MainHeader">
      <MainHeader></MainHeader>
    </slot>
  </div>
</template>

<script>
  import MainHeader from "../../content/MainHeader/MainHeader";
  export default {
    name: "Header",
    components:{
      MainHeader
    }
  }
</script>

<style>
</style>
