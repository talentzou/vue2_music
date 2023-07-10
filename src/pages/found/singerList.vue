<template>
    <div class="space">
   <!-- 语种 -->
   <navbar title="语种" :list="languages "  @changeIndex="alterOne" />
   <!-- 分类 -->
   <navbar title="分类" :list="classify" @changeIndex="alterTwo" />
   <!-- 歌手列表 -->
   <singerImg :dataImg="listData" />
   <!-- 分页 -->
   <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="info.offset"
      :page-sizes="[30, 40, 50, 60]"
      :page-size="info.limit"
      layout="sizes, prev, pager, next"
      :total="1000">
    </el-pagination>
    </div>
  </template>
  
  <script>
  import singer from '@/api/singerList'
  import navbar from '@/components/navbar/index.vue'
  import singerImg from '@/components/signerList/index.vue'
  export default {
  name:'singerList',
  components:{navbar,singerImg},
  data() {
    return {
        listData:[],
       
        languages:['全部','华语','欧美','日本','韩国'],
        classify:['全部','男歌手','女歌手','乐队',],
          // 语言index
        languageCount: [-1, 7, 96, 8, 16,],
         // 、男女分类
        classifyCount: [-1, 1, 2, 3],
        info:{
          type:-1,
          area: -1,
          limit: 30, // 每页数据条数
           offset: 1 // 页码
        },
       
    }
  },
  methods:{
    //获取数据
   async getSinger(info){
    console.log('当前info为',this.info)
    const res=await singer(info)
      this.listData=res.data.artists
      console.log(this.listData)
    
      },
//alterTwo
//alterTwo
   // 男女歌手分类索引改变
   alterTwo(index){
    this.info.type=this.classifyCount[index]
    console.log('歌曲语言为：',this.info.type)
    this.getSinger(this.info)
    console.log('男女歌手分类当前info改变为',this.info)
  },
  
    // 歌曲语言索引改变
 alterOne(index){
    this.info.area=this. languageCount [index]
    console.log('歌手分类为：',this.info.area)
    this.getSinger(this.info)
    console.log('歌曲语言当前info改变为',this.info)
  },
   // pageSize 每页条数 改变时会触发回调
//   // 重新选择 每页显示的条数
  handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.info.limit=val
      this.getSinger(this.info)
    },
//      // currentPage 当前页数改变时会触发回调
//   // 跳转页面
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.info.offset=val
      this.getSinger(this.info)
    },
  },
  created(){
    this.getSinger(this.info)
    
  }
  }
  </script>
  
  <style scoped>
   .space{
    padding-top: 15px;
    overflow: auto;
    height: 500px;
   }
  </style>