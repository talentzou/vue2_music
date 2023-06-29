<template>
    <div>
        <div class="block">
  
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-sizes="[25, 35, 45,55]"
      :page-size="queryInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </div>
    </div>
</template>
<script>
export default{
    name:'pagination_',
    props:{
     total:{
        type:Number,
        default: 0
     },
     queryInfo: {
      type: Object,    
          // 当前的页数
          pagenum: 1,
          // 当前每次显示多少条数据
          pagesize: 5
        }
      
    
    },
    data() {
        return {
            queryInfoValue:{
                  // 当前的页数
              pagenum: 1,
               // 当前每次显示多少条数据
              pagesize: 5
            },
        
        }

    },
    methods: {
      handleSizeChange(newPage) {

             // 当前的页数
        this.queryInfoValue.pagesize = newPage
        console.log(`每新页 ${newPage} 条`);
        this.$emit('updataData', this.queryInfoValue)
        console.log('新queryInfoValue:',this.queryInfoValue);
      },
      handleCurrentChange(newPage) {
        //页码改变重获取数据 // 当前每次显示多少条数据
        this.queryInfoValue.pagenum = newPage
        console.log(`当前新页: ${newPage}`);
        this.$emit('updataData', this.queryInfoValue)
        console.log('新queryInfoValue:',this.queryInfoValue);
      }
    },
}
</script>
<style scoped>
</style>