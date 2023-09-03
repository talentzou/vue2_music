<template>
    <div class="root">
      <el-footer class="el-footer">
        <footerChilds></footerChilds>
      </el-footer>
    </div>
  </template>
  
  <script>
  import footerChilds from "@/components/footer_child/index"
  export default {
  name:'footerView',
  components:{footerChilds}
  }
  </script>
  
  <style scoped>
  .root{
    background: rgb(233, 236, 237);
  }
   .el-footer {
    display: flex;
    justify-content: space-between;
  }
  .el-footer {
    height: 80px;
  }
  </style>