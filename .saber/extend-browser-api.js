
      var _saber_browser_js_0 = require("/Users/huangkun/Saber/saber-browser.js").default
var _saber_browser_js_1 = require("/Users/huangkun/Saber/node_modules/saber-plugin-feed/lib/saber-browser.js").default

      var themeBrowserApi
      var rTheme = require.context('#theme', false, /\.\/saber-browser\.[jt]s$/)
      rTheme.keys().forEach(function (k) {
        themeBrowserApi = rTheme(k).default
      })

      export default function (context) {
        typeof _saber_browser_js_0 === 'function' && _saber_browser_js_0(context)
typeof _saber_browser_js_1 === 'function' && _saber_browser_js_1(context)
        typeof themeBrowserApi === 'function' && themeBrowserApi(context)
      }