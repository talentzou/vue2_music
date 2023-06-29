<template>
    <div id="rootLayout">
    
          <div class="main_container">
              <div class="header">
                  <!-- 头部 -->
                  <headerView ></headerView>
               </div>
               <!-- 中间部分 -->
           <div class="main">
                    <div class="asider">
                           <!-- 侧部导航栏 -->
                           <asiderView class="asiderAA"></asiderView>
                    </div>
                    <div class="writerMain">
                      <!-- 路由切换页面 -->
                  <keep-alive>
                    <router-view></router-view>
                  </keep-alive>
                     
                    </div>
            </div>
               <div class="footer">
              <!-- 二级路由 -->
                 <footerView></footerView>
              </div> 
          </div>
    </div>
  </template>
  
  <script>
  import asiderView from '@/layout/childern/asider.vue'
   import headerView  from '@/layout/childern/header.vue'
   import footerView from '@/layout/childern/footer.vue'
   //import containView from '@/layout/childern/container.vue'
  export default {
  name:'indexMain',
  components:{ headerView,asiderView,footerView,}
  }
  </script>
  
  <style scoped>
  #rootLayout{
    margin: 0 5px;
    overflow: hidden;
  }
.header{
    height: 65px;
    width: inherit;
}
.main{
    display: flex;
    background-color: white;
   
}
.asider{
    width: 200px;
    background-color: white;
    height: 100%;
  
}
.writerMain{
    flex: 1;
    background-color: rgb(240, 246, 246);
    overflow: auto;
     
}

.footer{
    background-color: rgb(171, 129, 65);
    height: 80px;
    margin: 0 10px;
    align-content: center;
    align-content: center;
} 

  </style>