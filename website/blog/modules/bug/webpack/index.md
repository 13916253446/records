#  `babel-loader`不编译`node_modules`下面的`ES6`

-   通过配置`configFile`来指定`babel.config.js`配置项，而不是`.babelrc`文件
    
    `babel7`默认的编译顺序，是寻找文件最近的`.babelrc`配置来编译[babel解释](https://babeljs.io/blog/2018/06/26/on-consuming-and-publishing-es2015+-packages)
    
    ```javascript
    project
    └── .babelrc // 最近的文件
    └── a.js
    └── node_modules
        └── package
            └── .babelrc // 最近的文件
            └── b.js
    ```
    
-   设置`webpack`读取`npm`包的时候，不从`module`指向去解析，而是从`main`指向去解析文件
    
    ```javascript
    resolve: {
     mainFields: ['browser', 'main']
    }
    // 默认是
    resolve: {
     mainFields: ['browser', 'module', 'main']
    }
    ```
    
-  设置`alias`
    
    ```javascript
    let alias = {
      'vue$': 'vue/dist/vue.esm.js',
      'vuex$': 'vuex/dist/vuex.esm.js',
      'vue-router$': 'vue-router/dist/vue-router.esm.js',
      //? 站点根节点的别名
      '@': path.resolve(__dirname, '../src'),
      //? 整个项目公共目录
      'common': path.resolve(__dirname, '../common')
    }
    ```

# `vw`适配方案

-   要求边框是2两个像素，当转换成`vw`的时候，就是**0.266667vw**，在安卓手机上面360px的手机上面就是0.97px没有1个像素就显示不出来