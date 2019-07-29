1.使用antd

初始化项目，使用官方的例子：

https://github.com/zeit/next.js/tree/canary/examples/with-ant-design

npx create-next-app --example with-ant-design with-ant-design-app
# or
yarn create next-app --example with-ant-design with-ant-design-app


2.使用sass

先导入依赖

const withSass = require('@zeit/next-sass')
再写入webpack设置---------->next.config.js

注意：对sass进行模块化加载



3.使用dva

参考dva官方文档中对于next的例子

https://github.com/dvajs/dva/tree/master/examples/with-nextjs

4.next中需要注意的点

获取数据

在dva+react的使用中我们经常会有以下的情况：

在componentDidMount中调用dva中的Effect，触发put更新state的数据

然后在组件中使用model中的数据用来渲染视图

问题： 在next的机制中是错误的

需要使用next推荐使用的方法

 static async getInitialProps
获取到异步数据之后返回，

在组件中的this.props中获取返回数据

对<Head>进行合理的封装

...
