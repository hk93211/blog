(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{83:function(t,o,e){"use strict";e.r(o);var i=e(0),n=function(t){var o,e,i,n,s=(i="git hook",n="post",(o={}).internal=e=void 0,o.contentType="markdown",o.slug="20180925-git hook",o.content=e,o.title=i,o.layout=n,o.markdownHeadings=[{text:i,slug:"git-hook",level:2}],o.excerpt="<p>有时候, 在使用git提交代码的时候, 需要先用语法检查工具来检查项目中是否有不符合规范的语法, 如果有, 就不能提交代码</p>\n",o.createdAt=new Date(15378336e5),o.updatedAt=new Date(1569294653245),o.type=n,o.permalink="/posts/20180925-git hook.html",o.assets={},o.attributes=o,o.prevPost={title:"封装",permalink:"/posts/20180917-封装.html"},o.nextPost={title:"dva",permalink:"/posts/20180925-dva.html"},o),a=t.options.beforeCreate||[];t.options.beforeCreate=[function(){this.$page=s}].concat(a);["layout","transition"].forEach((function(o){var e=t.options.PageComponent;e&&(t.options[o]=e[o]),void 0===t.options[o]&&(t.options[o]=s[o])})),t.options.name="page-wrapper-"+s.slug.replace(/[^0-9a-z\-]/i,"-")},s=Object(i.a)({},(function(){var t=this.$createElement,o=this._self._c||t;return o("layout-manager",[o("h2",{attrs:{id:"git-hook"}},[this._v("git hook")]),this._v(" "),o("p",[this._v("有时候, 在使用git提交代码的时候, 需要先用语法检查工具来检查项目中是否有不符合规范的语法, 如果有, 就不能提交代码")]),this._v(" "),o("p",[this._v("所以就要 git hook 比如commit 前执行 eslint的检测操作, 如果eslint的语法检查没有校验通过则不能进行提交")]),this._v(" "),o("p",[this._v("要安装 husky 依赖, 注意安装依赖的时候 目录一定是要初始化好的 git 仓库, 不然此依赖找不到对应的git 进行hook")])])}),[],!1,null,null,null);"function"==typeof n&&n(s);o.default=s.exports}}]);