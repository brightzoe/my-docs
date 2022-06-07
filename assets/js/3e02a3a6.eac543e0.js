"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[4219],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(n),d=r,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||i;return n?a.createElement(f,l(l({ref:t},s),{},{components:n})):a.createElement(f,l({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6122:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return u}});var a=n(7462),r=n(3366),i=(n(7294),n(4137)),l=["components"],o={},c="\u9ad8\u9636\u51fd\u6570",p={unversionedId:"javascript/basic/higher-order-function",id:"javascript/basic/higher-order-function",title:"\u9ad8\u9636\u51fd\u6570",description:"forEach\u3001filter\u3001map\u3001some\u3001every\u3001find\u3001findIndex\u3001reduce \u7b49\u3002",source:"@site/docs/javascript/basic/higher-order-function.md",sourceDirName:"javascript/basic",slug:"/javascript/basic/higher-order-function",permalink:"/docs/javascript/basic/higher-order-function",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/javascript/basic/higher-order-function.md",tags:[],version:"current",lastUpdatedAt:1654575843,formattedLastUpdatedAt:"6/7/2022",frontMatter:{},sidebar:"JavaScript",previous:{title:"\u6267\u884c\u4e0a\u4e0b\u6587\u548c\u4f5c\u7528\u57df",permalink:"/docs/javascript/basic/execution-context-and-scope"},next:{title:"\u6a21\u5757\u5316",permalink:"/docs/javascript/basic/module"}},s={},u=[{value:"\u600e\u4e48\u7406\u89e3\u9ad8\u9636\u51fd\u6570",id:"\u600e\u4e48\u7406\u89e3\u9ad8\u9636\u51fd\u6570",level:2},{value:"\u5e38\u7528\u9ad8\u9636\u51fd\u6570",id:"\u5e38\u7528\u9ad8\u9636\u51fd\u6570",level:2},{value:"forEach",id:"foreach",level:3},{value:"map",id:"map",level:3},{value:"reduce",id:"reduce",level:3},{value:"filter,every,some",id:"filtereverysome",level:3},{value:"\u5982\u4f55\u9009\u62e9\u5408\u9002\u7684\u65b9\u6cd5",id:"\u5982\u4f55\u9009\u62e9\u5408\u9002\u7684\u65b9\u6cd5",level:2},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"Reference",id:"reference",level:2}],m={toc:u};function d(e){var t=e.components,n=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u9ad8\u9636\u51fd\u6570"},"\u9ad8\u9636\u51fd\u6570"),(0,i.kt)("p",null,"forEach\u3001filter\u3001map\u3001some\u3001every\u3001find\u3001findIndex\u3001reduce \u7b49\u3002"),(0,i.kt)("h2",{id:"\u600e\u4e48\u7406\u89e3\u9ad8\u9636\u51fd\u6570"},"\u600e\u4e48\u7406\u89e3\u9ad8\u9636\u51fd\u6570"),(0,i.kt)("p",null,"\u64cd\u4f5c\u5176\u4ed6\u51fd\u6570\uff0c\u5c06\u5176\u4ed6\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\u6216\u8fd4\u56de\u503c\u3002"),(0,i.kt)("p",null,"\u7279\u70b9:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5bf9\u67d0\u79cd\u7279\u5b9a\u7684\u52a8\u4f5c\u8fdb\u884c\u62bd\u8c61\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u63d0\u9ad8\u4ee3\u7801\u53ef\u8bfb\u6027/\u53ef\u7ef4\u62a4\u6027\uff0c\u5bb9\u6613\u907f\u514d\u9519\u8bef\u3002")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u51fd\u6570\u5c31\u662f\u4e00\u4e2a\u666e\u901a\u7684\u503c."),(0,i.kt)("p",{parentName:"div"},"\u7eaf\u51fd\u6570:\u4e00\u4e2a\u51fd\u6570\u7684\u8fd4\u56de\u7ed3\u679c\u53ea\u4f9d\u8d56\u4e8e\u5b83\u7684\u53c2\u6570\uff0c\u5e76\u4e14\u5728\u6267\u884c\u8fc7\u7a0b\u91cc\u9762\u6ca1\u6709\u526f\u4f5c\u7528\uff0c\u6211\u4eec\u5c31\u628a\u8fd9\u4e2a\u51fd\u6570\u53eb\u505a\u7eaf\u51fd\u6570\u3002 i.e. \u9760\u8c31\u7684\u51fd\u6570"))),(0,i.kt)("h2",{id:"\u5e38\u7528\u9ad8\u9636\u51fd\u6570"},"\u5e38\u7528\u9ad8\u9636\u51fd\u6570"),(0,i.kt)("h3",{id:"foreach"},"forEach"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ary.forEach(action)")," \u5bf9\u6570\u7ec4\u7684\u6bcf\u4e2a\u5143\u7d20\u6267\u884c\u4e00\u6b21\u7ed9\u5b9a\u7684\u51fd\u6570\u3002"),(0,i.kt)("p",null,"\u7279\u70b9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u6570\u7ec4\u8fdb\u884c\u8fed\u4ee3\uff0c\u76f4\u63a5\u64cd\u4f5c\u539f\u6709\u6570\u7ec4\uff0c\u6ca1\u6709\u8fd4\u56de\u503c\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u9664\u4e86\u629b\u51fa\u5f02\u5e38\u4ee5\u5916\uff0c",(0,i.kt)("strong",{parentName:"li"},"\u6ca1\u6709\u529e\u6cd5\u4e2d\u6b62\u6216\u8df3\u51fa forEach() \u5faa\u73af"),"\u3002")),(0,i.kt)("p",null,"\u7b80\u5355\u5b9e\u73b0\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'Array.prototype._forEach = function (callback, thisArg) {\n  if (typeof callback !== "function") {\n    throw "\u53c2\u6570\u5fc5\u987b\u4e3a\u51fd\u6570";\n  }\n  if (!Array.isArray(this)) {\n    throw "\u53ea\u80fd\u5bf9\u6570\u7ec4\u5e94\u7528\u6b64\u65b9\u6cd5";\n  }\n  if (!thisArg) thisArg = this;\n  for (let i = 0; i < this.length; i++) {\n    // callback(this[i], i, this);\n    callback.call(thisArg, this[i], i, this);\n  }\n};\n')),(0,i.kt)("p",null,"\u6709\u53ef\u80fd\u72af\u7684\u9519\u8bef:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u5f15\u7528\u6570\u636e\u7c7b\u578b\uff0c\u57fa\u672c\u6570\u636e\u7c7b\u578b")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const arr = [1, 3, 5];\narr.forEach((item, index) => {\n    item = item + 10;\n});\n// arr:[1,3,5]\n//\u91cc\u9762\u662f\u57fa\u672c\u6570\u636e\u7c7b\u578b\uff0c\u5e76\u6ca1\u6709\u6539\u53d8arr \u91cc\u7684\u5143\u7d20\n\nconst foo = [{ a: 1 }, { a: 2 }];\nfoo.forEach((item, index) => {\n    item.a = item.a + 10;\n//  [{ a: 11 }, { a: 12 }];\n")),(0,i.kt)("p",null,"forEach \u53ef\u4ee5\u6539\u53d8\u539f\u6570\u7ec4\u5417\uff1f \u8981\u770b\u6570\u7ec4\u4e2d\u5143\u7d20\u7684\u6570\u636e\u7c7b\u578b\u6765\u51b3\u5b9a\u3002\u57fa\u672c\u6570\u636e\u7c7b\u578b\u53ef\u4ee5\u901a\u8fc7 arr","[idx]"," = newVal \u6765\u6539\u53d8\u3002"),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"\u5728 forEach \u4e2d\u4f7f\u7528 await \u5f02\u6b65\u7684\u7406\u89e3"),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6999795230430461966#heading-4"},"await \u5728 forEach \u4e2d\u65e0\u6548 - \u6398\u91d1")))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"function api(i) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      const n = Math.random();\n      resolve(n);\n    }, 1000);\n  });\n}\nconst list = [1, 2, 3, 4, 5];\n\nasync function fn() {\n  // \u6570\u7ec4forEach\u904d\u5386\u65b9\u6cd5 await\u65e0\u6548\n  list.forEach(async (item, index) => {\n    const n = await api(item);\n    console.log(n, index);\n  });\n}\nfn();\n")),(0,i.kt)("p",null,"\u5e0c\u671b\u5f97\u5230\u7684\u662f\u6bcf\u8fc7\u4e00\u79d2\u8f93\u51fa\u4e00\u6b21\uff0c\u7ed3\u679c\u4ee5\u4e0a\u4ee3\u7801\u8f93\u51fa\u662f\u5728 1s \u540e\u540c\u65f6\u8f93\u51fa 5 \u4e2a\u7ed3\u679c\u3002"),(0,i.kt)("p",null,"\u901a\u8fc7 for \u5faa\u73af\u53ef\u4ee5\u8fbe\u5230\u60f3\u8981\u7684\u6548\u679c\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'async function fn() {\n  for (let i = 0; i < list.length; i++) {\n    const n = await api(list[i]);\n    console.log("for--------", n, i);\n  }\n}\nfn();\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u5982\u4f55\u7406\u89e3\u4e0a\u8ff0 forEach \u5e76\u6ca1\u6709\u7b49\u5f85\u524d\u9762\u4ee3\u7801\uff1f"),(0,i.kt)("ol",{parentName:"div"},(0,i.kt)("li",{parentName:"ol"},"forEach \u672c\u8eab\u5c31\u662f\u9700\u8981\u5185\u90e8\u5faa\u73af\u5b8c\u6bd5\u540e\u624d\u629b\u51fa\u7ed3\u679c\uff0c\u5c31\u50cf\u4f60\u5728 forEach \u4e2d return\uff0cbreak \u4e5f\u662f\u4e00\u6837\u5931\u6548\uff0c\u662f\u7528\u6cd5\u672c\u8eab\u7684\u95ee\u9898\u3002"),(0,i.kt)("li",{parentName:"ol"},"await \u53ea\u5728",(0,i.kt)("strong",{parentName:"li"},"\u6240\u5728\u7684 async \u51fd\u6570\u5185"),"\u6709\u6548\uff0c\u63a7\u5236\u7684\u662f\u51fd\u6570\u5185\u7684\u5f02\u6b65\u987a\u5e8f\u3002forEach \u7684 async \u51fd\u6570\u56de\u8c03\u88ab\u6267\u884c\u65f6\u662f\u4e0d\u540c\u7684 async \u51fd\u6570\u8c03\u7528\uff0c\u5e76\u6ca1\u6709 async \u5305\u88f9\u4f4f\u591a\u4e2a\u51fd\u6570\uff0cforeach \u76f8\u5f53\u4e8e\u662f\u7acb\u5373\u8c03\u7528\u4e86\u591a\u4e2a await\uff0c\u4ed6\u4eec\u7684\u8c03\u7528\u662f\u540c\u6b65\u7684\uff0c\u4f46\u662f\u4ed6\u4eec\u5185\u90e8\u662f\u5f02\u6b65\u63a7\u5236\u7684\u3002\u540c\u6b65\u8c03\u7528\u6bcf\u4e2a async ,\u6bcf\u4e2a async \u5185\u90e8\u7684 await \u662f\u5f02\u6b65\u7684\u3002")))),(0,i.kt)("h3",{id:"map"},"map"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ary.map(mapper)")," //mapper"),(0,i.kt)("p",null,"\u7279\u70b9\uff1a"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u5bf9\u539f\u6570\u7ec4\u8fdb\u884c\u4e00\u4e2a\u6620\u5c04\uff0c\u5bf9\u6bcf\u4e2a\u5143\u7d20\u6267\u884c\u6620\u5c04\u51fd\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u6570\u7ec4\uff0c\u4e0d\u6539\u53d8\u539f\u6709\u6570\u7ec4\u3002")),(0,i.kt)("h3",{id:"reduce"},"reduce"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"ary.reduce(reducer,[initialValue])")," //\u5f52\u5e76\u51fd\u6570\uff0c\u6298\u53e0\u6570\u7ec4\uff0c\u6839\u636e\u6574\u4e2a\u6570\u7ec4\u8ba1\u7b97\u4e00\u4e2a\u503c(\u63d0\u4f9b\u521d\u59cb\u503c\u6bd4\u8f83\u5b89\u5168)"),(0,i.kt)("h3",{id:"filtereverysome"},"filter,every,some"),(0,i.kt)("p",null,"filter: \u521b\u5efa\u4e00\u4e2a\u65b0\u6570\u7ec4\uff0c\u5176\u5305\u542b\u901a\u8fc7\u6240\u63d0\u4f9b\u51fd\u6570\u5b9e\u73b0\u7684\u6d4b\u8bd5\u7684\u6240\u6709\u5143\u7d20."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u6539\u53d8\u539f\u6570\u7ec4\uff0c\u5b83\u8fd4\u56de\u8fc7\u6ee4\u540e\u7684\u65b0\u6570\u7ec4\u3002")),(0,i.kt)("h2",{id:"\u5982\u4f55\u9009\u62e9\u5408\u9002\u7684\u65b9\u6cd5"},"\u5982\u4f55\u9009\u62e9\u5408\u9002\u7684\u65b9\u6cd5"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903870154588168#heading-0"},"\u751f\u52a8\u5f62\u8c61\u89e3\u91ca forEach\u3001filter\u3001map\u3001some\u3001every\u3001find\u3001findIndex\u3001reduce \u95f4\u7684\u533a\u522b - \u6398\u91d1")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"\u4ece\u8bed\u4e49\u4e0a\u5206\u6790\uff1a"),(0,i.kt)("p",{parentName:"li"},"forEach\uff1a\u5bf9\u6570\u7ec4\u8fdb\u884c\u6279\u91cf\u64cd\u4f5c"),(0,i.kt)("p",{parentName:"li"},"map\uff1a\u6620\u5c04\uff0c\u751f\u6210\u539f\u59cb\u6570\u636e\u7684\u7279\u5f81\u4fe1\u606f\u7684 map"),(0,i.kt)("p",{parentName:"li"},"filter\uff1a\u7b5b\u9009\uff0c\u8fc7\u6ee4"),(0,i.kt)("p",{parentName:"li"},"some\uff1a\u6709\u6ca1\u6709\u7b26\u5408\u6761\u4ef6\u7684\uff1f\u53ea\u8981\u627e\u5230\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684\uff0c\u5c31\u56de\u6765\u62a5\u544a true \u6240\u4ee5\u5e76\u4e0d\u4f1a\u5168\u90e8\u904d\u5386\uff0c\u4e0d\u505a\u591a\u4f59\u7684\u6d3b\uff08\u6027\u80fd\u4f18\u826f\uff09"),(0,i.kt)("p",{parentName:"li"},"every\uff1a\u5168\u7b26\u5408\u6761\u4ef6\u5417\uff1fevery \u5bf9\u6bcf\u4e00\u4e2a\u5143\u7d20\u6267\u884c\u4e00\u4e2a callback\uff0c\u76f4\u5230\u5b83\u627e\u5230\u4e00\u4e2a\u4f7f callback \u8fd4\u56de false \u7684\u5143\u7d20\uff0c\u5c31\u8fd4\u56de false\uff0c\u76f4\u5230\u904d\u5386\u5b8c\u6210\u4e5f\u6ca1\u6709\u8fd4\u56de false \u7684\u8bdd\uff0c\u5c31\u8fd4\u56de true"),(0,i.kt)("p",{parentName:"li"},"find\uff1a \u8fd4\u56de\u4e00\u4e2a\u7b26\u5408\u7684\u3002 find \u548c some \u5f88\u7c7b\u4f3c\uff0c\u90fd\u662f\u5bfb\u627e\u7b26\u5408\u6761\u4ef6\u7684\uff0c\u6709\u4e00\u4e2a\u5c31\u53ef\u4ee5 \u4e0d\u8fc7 some \u8fdb\u53bb\u641c\u7f57\u4e86\u4e00\u5708\u56de\u6765\u62a5\u4e86\u4e2a\u201c\u6709\u201d\uff08true\uff09\uff0c\u800c find \u5219\u628a\u90a3\u4e2a\u571f\u8c46\u62b1\u4e86\u51fa\u6765\uff08\u8fd4\u56de\u7b2c\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684\u5bf9\u8c61\uff09"),(0,i.kt)("p",{parentName:"li"},"findIndex\uff1a \u8fd4\u56de\u7b2c\u4e00\u4e2a\u7b26\u5408\u6761\u4ef6\u7684\u7d22\u5f15\u53f7"),(0,i.kt)("p",{parentName:"li"},"reduce\uff1a \u5f52\u5e76"))),(0,i.kt)("h2",{id:"\u6ce8\u610f\u4e8b\u9879"},"\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("p",null,"forEach \u904d\u5386\u7684\u8303\u56f4\u5728\u7b2c\u4e00\u6b21\u8c03\u7528 callback \u524d\u5c31\u4f1a\u786e\u5b9a\u3002\u8c03\u7528 forEach \u540e\u6dfb\u52a0\u5230\u6570\u7ec4\u4e2d\u7684\u9879\u4e0d\u4f1a\u88ab callback \u8bbf\u95ee\u5230\u3002\u5982\u679c\u5df2\u7ecf\u5b58\u5728\u7684\u503c\u88ab\u6539\u53d8\uff0c\u5219\u4f20\u9012\u7ed9 callback \u7684\u503c\u662f forEach \u904d\u5386\u5230\u4ed6\u4eec\u90a3\u4e00\u523b\u7684\u503c\u3002\u5df2\u5220\u9664\u7684\u9879\u4e0d\u4f1a\u88ab\u904d\u5386\u5230\u3002\u5982\u679c\u5df2\u8bbf\u95ee\u7684\u5143\u7d20\u5728\u8fed\u4ee3\u65f6\u88ab\u5220\u9664\u4e86(\u4f8b\u5982\u4f7f\u7528 shift()) \uff0c\u4e4b\u540e\u7684\u5143\u7d20\u5c06\u88ab\u8df3\u8fc7\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"map,filter \u7b49\u4e5f\u662f\u5982\u6b64\u3002")),(0,i.kt)("p",null,"\u4f7f\u7528\u7bad\u5934\u51fd\u6570\uff0cthisArg \u53c2\u6570\u4f1a\u88ab\u5ffd\u7565\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"var arr1 = [1, 2, 3];\nvar arr2 = [7, 8, 9];\n\narr1.forEach(function (v, i, arr) {\n  console.log(this);\n}, arr2);\n// [7, 8, 9]\n// [7, 8, 9]\n// [7, 8, 9]\n\narr1.forEach((v, i, arr) => {\n  console.log(this);\n}, arr2);\n// window\n// window\n// window\n")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903807176933384#heading-2"},"JavaScript \u4e2d forEach\u3001map\u3001filter \u8be6\u7ec6 - \u6398\u91d1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903870154588168#heading-0"},"\u751f\u52a8\u5f62\u8c61\u89e3\u91ca forEach\u3001filter\u3001map\u3001some\u3001every\u3001find\u3001findIndex\u3001reduce \u95f4\u7684\u533a\u522b - \u6398\u91d1")," ","[\u63a8\u8350]")))}d.isMDXComponent=!0}}]);