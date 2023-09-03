const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    proxy:{
      '/api':{
        //target:'http://localhost:3000',
             target:'http://121.43.147.196:4000/',
             changeOrigin:true,
             pathRewrite:{'^/api':''}
      }
    }
  },
  css: {

    loaderOptions: {

        postcss: {
          postcssOptions:{
            plugins: [

              require('postcss-pxtorem')({
                 
                  rootValue : 148.8, 

                  propList  : ["*"],

              }),

          ]
          }

          
        }

    }

},

})
