<template >
    <div class="distance">
        <div> 
       <el-table
    :data="tableData"
    stripe
    style="width: 100%"
    :key="itemKey"
    >
    
    <el-table-column
      type="index"
      label="#"
      width="150"
      align="center"
      :index="indexMethod">
    </el-table-column>
   
    <el-table-column
      label="播放"
      width="150"
      align="center">
      <i class=" el-icon-video-play"></i> 
    </el-table-column>
    
     <el-table-column
      prop="songsName"
      label="歌名"
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
      prop="album"
      label="专辑"
      width="200"
      align="center">
    </el-table-column>
   
    <el-table-column
      prop="time"
      label="时长"
      width="300"
      align="center">
    </el-table-column> 
   
    
 
  </el-table>
  
     </div>
    </div>
</template>
<script>
export default{
    name:'tableData',
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
.distance{
  margin: 10px 0;
}
el-table{
    padding: 20px;
}
.el-icon-video-play{
 font-size: 25px;
}

</style> -->