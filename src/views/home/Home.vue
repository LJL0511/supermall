<template>
  <div>
    <el-container>
      <!-- 头部 -->
      <el-header style="height: 40px"><Header></Header></el-header>
      <!-- 主体 -->
      <el-main>Main</el-main>
      <!-- 底部 -->
      <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
  import Header from "components/common/header/Header";
  export default {
    name:'Home',
    components:{
      Header
    }
  }
</script>

<style>
  .el-header{
    background-color: #F7F7F7;
  }

</style>
