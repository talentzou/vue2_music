<template>
    <div class="root">
      <el-footer height="80px">
        <left_childs></left_childs>
        <center_childs></center_childs>
        <right_childs></right_childs>
      </el-footer>
    </div>
  </template>
  
  <script>
  import left_childs from "@/components/footer_child/Left"
  import right_childs from "@/components/footer_child/Right"
  import center_childs from "@/components/footer_child/Center"
  export default {
  name:'footerView',
  components:{left_childs,right_childs,center_childs}
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