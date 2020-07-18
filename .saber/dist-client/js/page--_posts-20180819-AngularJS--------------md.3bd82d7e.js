(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{79:function(t,l,v){"use strict";v.r(l);var e=v(0),_=function(t){var l,v,e,_,i,o,n,r,s,a,u=(e="post",_="维护阶段",i="带来的沉思",o="基本行为的抽象",n="常用功能的封装",r="不用职责和功能组件的组合",s="通过事件机制完成模块间的数据通信和交流",a="业务组件的复用",(l={}).internal=v=void 0,l.contentType="markdown",l.slug="20180819-AngularJS复杂业务系统的代码架构探索",l.content=v,l.title="AngularJS复杂业务系统的代码架构探索",l.layout=e,l.markdownHeadings=[{text:'模型系统的前世 -- "模糊系统"',slug:"模型系统的前世----quot模糊系统quot",level:2},{text:"开发阶段: controller里面的代码",slug:"开发阶段-controller里面的代码",level:3},{text:_,slug:_,level:3},{text:i,slug:i,level:3},{text:"模型系统的初现 -- 面向对象程序设计",slug:"模型系统的初现----面向对象程序设计",level:2},{text:"面向对象程序设计的手段(方法)是什么 ?",slug:"面向对象程序设计的手段方法是什么-",level:3},{text:o,slug:o,level:3},{text:n,slug:n,level:3},{text:r,slug:r,level:3},{text:s,slug:s,level:3},{text:a,slug:a,level:3}],l.excerpt="初始化视图模型, 视图展示元素的文字及显示影藏等等属性(ng-show/ng-if)",l.createdAt=new Date(15346368e5),l.updatedAt=new Date(1569160345028),l.type=e,l.permalink="/posts/20180819-AngularJS复杂业务系统的代码架构探索.html",l.assets={},l.attributes=l,l.prevPost={title:"redux入门",permalink:"/posts/20180819-redux入门.html"},l.nextPost={title:"git的一些命令",permalink:"/posts/20180820-git一些命令.html"},l),p=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=u}].concat(p);["layout","transition"].forEach((function(l){var v=t.options.PageComponent;v&&(t.options[l]=v[l]),void 0===t.options[l]&&(t.options[l]=u[l])})),t.options.name="page-wrapper-"+u.slug.replace(/[^0-9a-z\-]/i,"-")},i=Object(e.a)({},(function(){var t=this,l=t.$createElement,v=t._self._c||l;return v("layout-manager",[v("h2",{attrs:{id:"模型系统的前世----quot模糊系统quot"}},[t._v('模型系统的前世 -- "模糊系统"')]),t._v(" "),v("h3",{attrs:{id:"开发阶段-controller里面的代码"}},[t._v("开发阶段: controller里面的代码")]),t._v(" "),v("ul",[v("li",[t._v("初始化视图模型, 视图展示元素的文字及显示影藏等等属性(ng-show/ng-if)")]),t._v(" "),v("li",[t._v("定义事件响应函数, 处理UI交互逻辑(ng-click/ng-change)")]),t._v(" "),v("li",[t._v("定义scope中, 指令需要的配置参数")]),t._v(" "),v("li",[t._v("指令和controller的作用域的数据传递")]),t._v(" "),v("li",[t._v("作用域内部属性变动的监听")]),t._v(" "),v("li",[t._v("作用域之间的数据通信")]),t._v(" "),v("li",[t._v("业务逻辑")])]),t._v(" "),v("h3",{attrs:{id:"维护阶段"}},[t._v("维护阶段")]),t._v(" "),v("p",[t._v("上面那样写出来的代码, 在维护的时候就是一团糟")]),t._v(" "),v("p",[t._v("测量代码质量的标准是, 在代码reveive每分钟WTF(what the fuck)的数量")]),t._v(" "),v("h3",{attrs:{id:"带来的沉思"}},[t._v("带来的沉思")]),t._v(" "),v("ul",[v("li",[v("p",[t._v("代码级别的重构解决不了问题 每个人开发的项目不同,思路不同,所有优化和重构的策略也不同,导致重构后的代码风格不同,甚至,重构优化过的代码在面临需求变更的时候出现反复")])]),t._v(" "),v("li",[v("p",[t._v("不是哪个程序员的问题 不是因为某个程序员或者某几个程序员故意那样写,而是因为简单项目中,使用angularjs那样写就是快,就是简单,产品经理规定的一周的工作说不定你3天就做完了")])]),t._v(" "),v("li",[v("p",[t._v("是发展中的问题 两个维度: (1)一个复杂的业务系统,从最初的0.0版本的需求到最终多次需求迭代变更之后,系统自然而然的会出现这样的问题,初期写的很简单的代码在后期需要加需求是带来很多困扰. (2)从项目组来说,这种问题存在于整个项目组的成长期,不是突然冒出来的,也不会突然消失,必须认真对待,合理规划")])]),t._v(" "),v("li",[v("p",[t._v("产品规模化以后是最大的问题 某一个项目存在这样的问题不可怕,可怕的是大部分项目都存在这样的问题,当产品规模化了以后,项目越来越多,只有最开始的开发者才能做维护,那么后期维护和需求迭代的投入只会让团队积重难返")])])]),t._v(" "),v("h2",{attrs:{id:"模型系统的初现----面向对象程序设计"}},[t._v("模型系统的初现 -- 面向对象程序设计")]),t._v(" "),v("h3",{attrs:{id:"面向对象程序设计的手段方法是什么-"}},[t._v("面向对象程序设计的手段(方法)是什么 ?")]),t._v(" "),v("ul",[v("li",[t._v("继承/组合")]),t._v(" "),v("li",[t._v("封装")]),t._v(" "),v("li",[t._v("多态")])]),t._v(" "),v("p",[t._v("这些都是被说烂了的概念 不是因为你写了个prototype扩展一下就是面向对象了,或许真实情况是, 你仅仅是代码用了继承的写法而已 而是一个设计过程, 也就是说, 在写代码之前, 你设计了一套东西, 不管是框架也好, 是一个小功能也好, 是一个组件也好, 这个东西符合面向对象的思维, 然后你为了实现这套东西, 使用了继承/组合,封装,多态等等写代码的手法")]),t._v(" "),v("p",[t._v("面向对象程序设计的精粹(预算)是什么 ?")]),t._v(" "),v("ol",[v("li",[v("p",[t._v("职责单一: 一个类, 只承担它应该处理的职责, 其他相关的事物可以通过不同职责的类之间的组合或聚合来完成")])]),t._v(" "),v("li",[v("p",[t._v("开放封闭: 对扩展开放, 对修改封闭, 如果你的代码在增加一个新功能的时候, 只用新增一个文件, 就能将功能加上去, 而不用去修改原有的逻辑, 就是符合开放的原则的")])]),t._v(" "),v("li",[v("p",[t._v("依赖倒转: (非常关键) 依赖抽象, 而不是依赖实现, 抽象就是传说中的接口, 实现就是接口的具体逻辑, 改了具体的实现, 不会波及到其他模块的相关类, 这就是开放封闭原则成为可能")])]),t._v(" "),v("li",[v("p",[t._v("里氏替换: 继承必须确保超类所拥有的性质在子类中仍然成立, 换言之, 程序中, 所有使用了超类的地方, 都可以使用子类去替代而不引发任何错误")])])]),t._v(" "),v("p",[t._v("如何解决controller当前面临的问题(最大的问题, 什么都在controller里面写)\n职责单一 controller职责梳理")]),t._v(" "),v("ul",[v("li",[t._v("负责UI相关的数据初始化")]),t._v(" "),v("li",[t._v("负责不同模块之间的数据通信")]),t._v(" "),v("li",[t._v("负责UI交互的逻辑处理")]),t._v(" "),v("li",[t._v("不负责业务逻辑")])]),t._v(" "),v("h3",{attrs:{id:"基本行为的抽象"}},[t._v("基本行为的抽象")]),t._v(" "),v("ul",[v("li",[t._v("可以利用模板方法模式将常用的controller初始化过程抽象为一系列标准的初始化方法, 子类根据实际类型去做不同方法的复写")])]),t._v(" "),v("h3",{attrs:{id:"常用功能的封装"}},[t._v("常用功能的封装")]),t._v(" "),v("ul",[v("li",[t._v("在原有的基础上做功能行的封装")]),t._v(" "),v("li",[t._v("提供全局事件注册, 销毁快速接口")]),t._v(" "),v("li",[t._v("提供模型获取的快速接口等等")]),t._v(" "),v("li",[t._v("提供内部的注册属性, 方法等机制")])]),t._v(" "),v("h3",{attrs:{id:"不用职责和功能组件的组合"}},[t._v("不用职责和功能组件的组合")]),t._v(" "),v("ul",[v("li",[t._v("业务组件")]),t._v(" "),v("li",[t._v("UI组件")]),t._v(" "),v("li",[t._v("Directive 等等")])]),t._v(" "),v("p",[t._v("如何解决业务逻辑膨胀式增长的问题 ?")]),t._v(" "),v("p",[t._v("可扩展性 按照业务逻辑划分模块")]),t._v(" "),v("ul",[v("li",[t._v("明确模块职责")]),t._v(" "),v("li",[t._v("对业务模块进行建模")]),t._v(" "),v("li",[t._v("业务模块根据配置或者运行时,自助注入controller")])]),t._v(" "),v("h3",{attrs:{id:"通过事件机制完成模块间的数据通信和交流"}},[t._v("通过事件机制完成模块间的数据通信和交流")]),t._v(" "),v("ul",[v("li",[t._v("业务模块之间的业务关系及监护,尽量采用事件机制和promise配合")])]),t._v(" "),v("h3",{attrs:{id:"业务组件的复用"}},[t._v("业务组件的复用")]),t._v(" "),v("ul",[v("li",[t._v("同一个系统内部多次出现的跟某个业务相关的组件可以作为公用的业务组件提取出来, 不单交互是一致的, 而且内部的业务逻辑也是一致的")])])])}),[],!1,null,null,null);"function"==typeof _&&_(i);l.default=i.exports}}]);