<template >
    <div>
        <div>
            
       <el-table
    :data="tableData"
    stripe
    style="width: 100%"
    type="index"
      :index="indexMethod">
    <el-table-column
      prop="date"
      label="歌名"
      width="300"
      header-align="center"
    >
      <template slot-scope="scope">
         <img :src="scope.row.img" width="40" height="40" class="head_pic"/>
      </template>
    </el-table-column>
    <el-table-column
      prop="name"
      label="歌手"
      width="300"
      header-align="center">
    </el-table-column>
    <el-table-column
      prop="address"
      label="专辑"
      width="300"
      header-align="center">
    </el-table-column>
    <el-table-column
      prop="address"
      label="时长"
      width="300"
      header-align="center">
    </el-table-column>
  </el-table>
  
     </div>
    </div>
</template>
<script>
export default{
    name:'table_',
    data() {
        return {
            count:0
        }
    },
    methods:{
        //自定义索引号
        indexMethod(index){
           return index++
        }
    }
}
</script>
<style scoped>
el-table{
    padding: 20px;
}
</style>