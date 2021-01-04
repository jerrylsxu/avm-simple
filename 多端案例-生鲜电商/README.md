## 介绍

本源码为仿某生鲜电商平台，包含前后端，其中前端代码使用 avm.js 多端技术开发，可同时编译为 Android & iOS App 以及微信小程序；后端使用 APICloud 数据云 3.0 云函数自定义接口。

### 源码目录结构介绍

目录结构延续 widget 代码包的目录结构，在 widget 根目录下新增 pages 目录，该目录下用于创建符合 avm.js 语法规范的 stml 文件，stml 文件可用于编译为 App 和小程序代码。

```js
|---widget             // widget代码根目录
|    |---components    // stml组件目录。该目录下stml文件仅被pages目录下页面引用，不单独编译
|    |---css		   // 外置引用的css文件存放目录
|    |---image         // 图片资源文件目录
|    |---pages         // stml页面代码文件目录。该目录中每个文件对应一个页面，将被编译为js或者小程序的3个代码片段
|       |---about      // stml页面代码文件子目录。如果您希望您的App能够兼容微信小程序，需按照微信小程序目录结构，新增一层子目录，并将stml文件置于该目录下
|    |---html          // 标准html页面代码文件目录
|    |---res           // res目录
|    |---script        // 外置引用的js文件存放目录
|    |---config.xml    // app配置文件
|
```

### 兼容微信小程序特别说明

avm.js 基于函数映射机制，将微信小程序的 wx.fun_xx 系列 api 映射至 APICloud 的已有的 api 或者模块中。例如本案例中，api.ajax，在运行于微信小程序时，将会使用 wx.request 进行请求。因此开发者无需做额外的适配。
如果您仅需开发小程序，则可以在代码中直接使用 wx.fun_xx 系列 api，编译环境将保留代码，不做映射处理。

### 使用步骤

1. 使用 [APICloud Studio 3](https://www.apicloud.com/studio3?uzchannel=30) 作为开发工具。
2. 下载本源码。
3. 在开发工具中新建项目，并将本源码导入新建的项目中，注意更新 config.xml 中的 appid 为你项目的 appid。
4. 使用 AppLoader 进行真机同步调试预览。
5. 或者提交项目源码，并为当前项目云编译自定义 Loader 进行真机同步调试预览。
6. [云编译](https://www.apicloud.com/appoverview?uzchannel=30) 生成 Android & iOS App 以及微信小程序源码包。

## License

MIT © [APICloud](https://www.apicloud.com/?uzchannel=30)