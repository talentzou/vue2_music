<template>
    <div class="root">
      <el-footer height="80px">
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
  
   .el-footer {
    background-color: #bacbbc;
    display: flex;
    justify-content: space-between;
    /* align-content: center; */
    
  }
  </style>