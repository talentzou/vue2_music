<template >
    <div>
        <div>
            
       <el-table
    :data="dataSong"
    stripe
    style="width: 100%"
    :key="itemKey"
    >
    <!-- 排序 -->
    <el-table-column
      type="index"
      label="#"
      width="100"
      align="center"
      :index="indexMethod">
    </el-table-column>
    <!-- 播放按钮 -->
    <el-table-column
      label="播放"
      width="100"
      align="center">
      <i class=" el-icon-video-play"></i> 
    </el-table-column>
    
    
    <el-table-column
      prop="album"
      label="专辑"
      width="200"
      align="center">
    </el-table-column>
    <el-table-column
      prop="artists"
      label="歌手"
      width="200"
      align="center">
    </el-table-column>
    <el-table-column
      prop="times"
      label="发布时间"
      width="300"
      align="center">
    </el-table-column> 
  </el-table>
  
     </div>
    </div>
</template>
<script>
export default{
    name:'table_',
    props:{
    tableData:{
      type:Array
    }
    },
    data() {
        return {
           dataSong:[],
           itemKey:1111
        }
    },
    methods:{
        //自定义索引号
        indexMethod(index){
           return index+1
        },

    },
    watch:{
      tableData(){
        this.dataSong = []
        // this.datasong=''
        console.log('数据更新了:')
        this.itemKey=Math.random()
        this.dataSong=this.tableData
      }
    }
}
</script>
<style scoped>
el-table{
    padding: 20px;
}
.el-icon-video-play{
 font-size: 25px;
}

</style>