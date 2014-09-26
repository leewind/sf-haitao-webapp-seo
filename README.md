Webapp SEO方案实践
================================

简介
----

在制定网站的整体框架时候，非常强调架构的上的前后端分离。这种分离意味着数据层、复杂业务逻辑与前端展现和交互的层次分离。

WHY (为什么要这么做)
--------------------

+ 清晰的结构。前后端的融合是通过一套中间层的协议来完成的，实现上是后端对前端只露出API接口。在软件设计层面，流动的数据，让前后端可以独立的专注的做自己，而不是被对方所绑架。
+ 同步开发。不被对方所绑架，就意味着，在开发时，通过事先的约定，前端和后端可以同步进行。而交接层通过单元测试保证交付。可以缩短项目进度


在做这次设计之前，着重参考了淘宝大牛们的[中途岛](http://ued.taobao.org/blog/2014/04/full-stack-development-with-nodejs/)方案。感谢他们让我走出了**一套代码吃遍前后端的理想**回归了现实。

REQUIREMENT (需求)
-----------

在做`url`设计的时候，提出了这样一个概念：

> 当浏览以服务端渲染页面为主时，`url`的`path`部分由服务端负责解析、渲染最后输出页面，当到达浏览器端，`js`负责渲染`hash`部分的数据和视图

> 当页面的形式以webaap为主时，`url`的`path`和`hash`部分都由`js`负责渲染

在这样的过程中，力图解决两个问题：

+ webapp的seo问题
+ url追溯问题

TODO (做了什么)
---------------

与淘宝`Midway`的思想一致，在浏览器端和服务端，共享是模板，基于此也参考低版本浏览器的一些性能问题，前端选型上，使用了[CanJS](http://canjs.com/index.html)，因为其模板引擎是`ejs`可以被`expressjs`兼容，同时`CanJS`在低版本浏览器上的新能是非突出，所以选型用了`CanJS`

`CanJS`中`View`的生命周期扩展

![](http://mdocshare.qiniudn.com/43fc8f0bc7b02c2c16768e4dd7cdb657.png)

如上图所示，默认的生命周期只有`start`和`end`两个阶段，我们显示的加入了`render`和`supplement`两个阶段。

+ `render`定义为主渲染阶段，这部分可以在浏览器端进行渲染，也可以在服务端端进行渲染，服务端渲染完成之后，会在根节点上加入`data-status="ready"`的属性，来标示渲染完毕，当浏览器检测到这个属性时，就不会重复渲染。
+ `supplement`定义为补充渲染阶段，这部分在浏览器端进行渲染，其数据参数通过`hash`被传入

EXAMPLE (案例)
-------

`sf-haitao-webapp-seo`这个项目的代码就是具体的案例，由于在实践初期，代码变动会非常快。

启动代码之后，分别访问两个链接：

+ 由服务端进行渲染: [http://127.0.0.1:3000/paint/2023013](http://127.0.0.1:3000/paint/2023013)
+ 由浏览器负责渲染: [http://127.0.0.1:3000/render/2023013](http://127.0.0.1:3000/render/2023013)

注：这里的2023013是豆瓣里面唯一可以随意访问的，请不要用其他的id吧，见谅

两个链接访问之后，在尾巴后加入如下hash，看看会有什么结果

```
#!case/29
```

HOWTO (如何去做)
----

0. 需要安装NodeJS环境和Bower加载器
1. Clone代码到本，默认目录为`sf-haitao-webapp-seo`
2. 进入目录，安装依赖库

    ```
    npm install
    ```

    ```
    bower install
    ```

3. 在根目录上运行

    ```
    node bin\www
    ```

**项目地址**： [https://github.com/leewind/sf-haitao-webapp-seo](https://github.com/leewind/sf-haitao-webapp-seo)

DISCUSS (讨论)
--------------

思考这样一个问题：**既然不纠结于服务端和浏览器端代码一致，那么是不是有可能用其他的替代Nodejs来做服务端渲染的工作，比如：Sprint MVC、.Net MVC、Python Tornado？**

在`CanJS`中默认推荐两种模板：`ejs`和`mustache`。我没有找到其他语言对于`ejs`模板的支持，但是`mustache`在其他语言上的应用做的非常的好，具体可以参考[mustache官方站点](http://mustache.github.io/)

那反过来想，有没有其他的语言模板可以在Nodejs环境下可以使用的，然后我找到了[Velocity.js](http://git.shepherdwind.com/velocity.js/)，我想如果前端CanJS可以兼容`Velocity.js`的模板，那么在做渲染的时候，可能我有第二套方案：用Java Velocity去做`render`逻辑的渲染！

对于`mustache`用于多语言平台的拓展和`Velocity`对`CanJS`的扩展是我下一步的实践目标

REFERENCE (参考)
----------------

+ [深入详解前端轻量级MVC框架新贵CanJS(1)](http://www.iunbug.com/archives/2012/06/14/360.html)
+ [也谈基于NodeJS的全栈式开发（基于NodeJS的前后端分离）](http://ued.taobao.org/blog/2014/04/full-stack-development-with-nodejs/)
+ [前后端分离模式下的安全解决方案](http://ued.taobao.org/blog/2014/05/midway-security/)