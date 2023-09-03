<template>
    <div id="rootLayout">   
           
              <div class="header">
            
                  <headerView ></headerView>
               </div>
             
           <div class="container">
          
              <asideView class="aside"></asideView>  
                  <keep-alive>
                    <router-view ></router-view>
                  </keep-alive>                    
         
           
            </div>    
            
            <footerView class="footer"></footerView>
    </div>
  </template>
  
  <script>
import asideView from '@/layout/childern/asider.vue'
import headerView  from '@/layout/childern/header.vue'
import footerView from '@/layout/childern/footer.vue'
  export default {
  name:'indexMain',
  components:{ headerView,asideView,footerView}
  }
  </script>
  
  <style scoped lang="scss">
  #rootLayout{
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    padding: 0 10px;
  }
  
.header{
    height: 200px;
    width: 100%;
    overflow: hidden;
    box-sizing: border-box;
}
.container{
    display: flex;
    width: 100%;
    background-color: rgb(240, 233, 233);
    height: calc(100% - 300px);  
}

.aside{
    width: 400px;
    background-color: #ffffff;
}
.footer{
    background-color: rgb(237, 234, 229);
    height: 200px;
    align-content: center;
} 

  </style>