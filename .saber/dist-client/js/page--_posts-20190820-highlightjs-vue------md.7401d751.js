(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{108:function(t,s,a){"use strict";a.r(s);var n=a(0),e=function(t){var s,a,n,e,p=(n="post",e="解决方法",(s={}).internal=a=void 0,s.contentType="markdown",s.slug="20190820-highlightjs在vue中使用的坑",s.content=a,s.title="highlightjs在vue中使用的坑",s.layout=n,s.markdownHeadings=[{text:"highlight.js",slug:"highlight-js",level:3},{text:e,slug:e,level:3}],s.excerpt="<p>之前在弄博客的代码高亮的时候, 使用的是highlight.js这个插件, 当时用的挺好</p>\n",s.createdAt=new Date(15662592e5),s.updatedAt=new Date(1569313095010),s.type=n,s.permalink="/posts/20190820-highlightjs在vue中使用的坑.html",s.assets={},s.attributes=s,s.prevPost={title:"vue首屏加载速度优化",permalink:"/posts/20190812-vue首屏加载速度优化.html"},s.nextPost={title:"Vue面试题",permalink:"/posts/20190823-Vue面试题.html"},s),r=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=p}].concat(r);["layout","transition"].forEach((function(s){var a=t.options.PageComponent;a&&(t.options[s]=a[s]),void 0===t.options[s]&&(t.options[s]=p[s])})),t.options.name="page-wrapper-"+p.slug.replace(/[^0-9a-z\-]/i,"-")},p=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("layout-manager",[a("h3",{attrs:{id:"highlight-js"}},[t._v("highlight.js")]),t._v(" "),a("p",[t._v("之前在弄博客的代码高亮的时候, 使用的是highlight.js这个插件, 当时用的挺好")]),t._v(" "),a("p",[t._v("最近换了一个博客系统, 使用的是 Vue 框架, 但是 highlight.js 这个插件在 Vue 中使用会有一个坑")]),t._v(" "),a("p",[t._v("根据官方文档中说的 在页面引入:")]),t._v(" "),a("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"html"}},[a("pre",{pre:!0,attrs:{class:"saber-highlight-code language-html"}},[a("code",{pre:!0,attrs:{class:"language-html"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token attr-name"}},[t._v("src")]),a("span",{pre:!0,attrs:{class:"token attr-value"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')]),t._v("/path/to/highlight.pack.js"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}}),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{pre:!0,attrs:{class:"token script"}},[a("span",{pre:!0,attrs:{class:"token language-javascript"}},[t._v("hljs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initHighlightingOnLoad")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")])])]),a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token tag"}},[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])])])])]),a("p",[t._v("这种引入是在首页的加载完成后就初始化 highlight.js.")]),t._v(" "),a("p",[t._v("而我在博客中, 是在文章页面才需要 初始化 highlight.js, 不需要在首页进行初始化(因为首页没有代码块), 所以我使用了 initHighlighting 方法.")]),t._v(" "),a("p",[t._v("然后我就遇到了一个奇怪的问题, 只有在刷新后第一次进入文章页的时候, 代码高亮能正常显示, 第二次, 返回首页后再点击文章进入 页面代码高亮功能就不正常了.")]),t._v(" "),a("p",[t._v("遂去查询解决办法, 花了几个小时, 发现网上说的情况对我来说都不怎么适用, 当时有几篇文章给了我一些思路, 说: vue-router 在路由进行切换的时候 会调用 initHighlighting 方法, 此方法有一段逻辑是判断之前是否被调用过, 如果被调用过, 直接 return, (我判断是因为浏览器的后退事件触发的时候, highlight.js 的实例没有销毁), 所以再次调用的时候, 直接return掉了.")]),t._v(" "),a("h3",{attrs:{id:"解决方法"}},[t._v("解决方法")]),t._v(" "),a("p",[t._v("直接修改 highlight.js 源码的 initHighlighting 方法:")]),t._v(" "),a("div",{pre:!0,attrs:{class:"saber-highlight","data-lang":"js"}},[a("pre",{pre:!0,attrs:{class:"saber-highlight-code language-js"}},[a("code",{pre:!0,attrs:{class:"language-js"}},[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("initHighlighting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("initHighlighting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("called"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  initHighlighting"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("called "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" blocks "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" document"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("querySelectorAll")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'pre code'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  ArrayProto"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("forEach")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("call")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("blocks"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" highlightBlock"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")])])])]),a("p",[t._v("if (initHighlighting.called) return; 这行注释掉, 直接执行后面的代码即可.")])])}),[],!1,null,null,null);"function"==typeof e&&e(p);s.default=p.exports}}]);