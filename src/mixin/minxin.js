// alterOne(index){
//     // this.listData=[]
  
//     this.info.type=this.languageCount[index]
//     console.log('歌曲语言为：',this.info.type)
//     this.getSingerList(this.info)
//     console.log('当前info改变为',this.info)
//   },
//   // 歌曲歌手分类索引改变
//   alterTwo(index){
   
//     this.info.area=this.classifyCount[index]
//     console.log('歌手分类为：',this.info.area)
//     this.getSingerList(this.info)
//     console.log('当前info改变为',this.info)
//   },
//   // pageSize 每页条数 改变时会触发回调
//   // 重新选择 每页显示的条数
//   handleSizeChange(val) {
//       console.log(`每页 ${val} 条`);
//       this.info.limit=val
//       this.getSingerList(this.info)
//     },
//      // currentPage 当前页数改变时会触发回调
//   // 跳转页面
//     handleCurrentChange(val) {
//       console.log(`当前页: ${val}`);
//       this.info.offset=val
//       this.getSingerList(this.info)
//     },
//     changeDATA(res){
//       this.listData=res.data
//     }