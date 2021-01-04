# APICloud多端技术简介

&emsp;APICloud多端技术提供一套代码同时开发原生Android & iOS App以及小程序的能力。多端技术使用avm.js语法进行代码编写，通过APICloud Studio3或云编译生成App以及小程序代码。

&emsp;avm.js(APICloud-View-Model)是一个跨端的高性能JavaScript框架，专注于移动端，提供更趋近于原生的编程体验。它提供简洁的模型来分离应用的用户界面、业务逻辑和数据模型，适合高度定制化的项目。

> avm.js语法基于标准<a href='https://developer.mozilla.org/zh-CN/docs/Web/Web_Components' target='_blank'>Web Components</a>组件化思想，兼容<a href='https://vue-loader.vuejs.org/zh/spec.html' target='_blank'>Vue</a> / <a href='https://reactjs.org/' target='_blank'>React</a>语法特性，通过一次编码，分别编译为APP、小程序代码，实现多端开发。

> 其中App代码基于DeepEngine3.0运行，全翻译式的运行原理提供完全原生的体验和性能。小程序代码被编译为符合微信小程序<a href='https://developers.weixin.qq.com/miniprogram/dev/extended/kbone/' target='_blank'>多端统一开发工具——kbone</a>标准的代码，可直接在微信开发者工具中进行预览以及发布到微信小程序平台。

# avm-simple

avm-simple是avm.js语法及DeepEngine3.0的使用用例，它可以帮助您快速了解和学习avm.js、DeepEngine3.0以及多端技术的使用。


## 如何使用本源码

1. 使用Git工具检出本源码。

2. 导入[APICloud Studio 3](https://www.apicloud.com/studio3/?uzchannel=30) 开发工具，并使用工具内置功能进行实时/真机预览，或编译为小程序在微信开发者工具中预览

3. 通过开发工具提交代码至云端，并在[APICloud控制台](https://www.apicloud.com/appoverview?uzchannel=30) 进行云编译生成Android和iOS App。

## 关于开发环境

如果您希望使用多端技术一次编码同时生成Android & iOS App以及微信小程序，或者仅开发App但希望使用性能更好的原生App引擎DeepEngine3.0，那么您必须使用[APICloud Studio 3](https://www.apicloud.com/studio3?uzchannel=30)运行以上案例源码。

其余情况下，APICloud始终坚持多开发工具支持策略，您可以使用任意一款自己喜欢的主流编码工具开发APICloud App，只需要在这些工具中安装相应的APICloud插件即可，目前APICloud支持的开发工具包括：Atom、Sublime Text、Eclipse、WebStorm等。

## 联系我们

APICloud多端技术正在蓬勃发展中，如果您在使用过程中遇到了问题，或者有更多的宝贵意见，欢迎到APICloud社区和QQ群与我们进行互动讨论。

官方技术交流群：339762594

官方社区：<a href='https://community.apicloud.com/?uzchannel=30' target='_blank'>https://community.apicloud.com/</a>

## License

MIT © [APICloud](https://www.apicloud.com/?uzchannel=30)
