<template>
    <div>      <!-- 标签导航区 -->
     <tags @tag="tagChange" :tags="tags" class="distance"/>
      <!-- 表格展示 -->
      <TableView class="padding"/>
    </div>
     
  </template>
  
  <script>
  import tags from '@/components/Tags/index.vue'
  import TableView from '@/components/table/index.vue'
  export default {
  name:'newSong',
  components:{tags,TableView},
  data() {
    return {
      tags:["全部", "华语","日本" ,"欧美","韩国"],
      title:['']
    }
  },
  methods: {
    tagChange(val) {
      console.log("tag更改为:", val);
    },
  },
 
  }
  </script>
  
  <style scoped>
   .distance{
    margin-bottom: 25px;
   }
   /* .padding{
     padding: 20px;
   } */
  </style>