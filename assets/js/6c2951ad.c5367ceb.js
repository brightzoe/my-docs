"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[645],{4137:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(7294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),k=p(n),m=l,d=k["".concat(c,".").concat(m)]||k[m]||u[m]||r;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,o=new Array(r);o[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},3774:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var a=n(7462),l=n(3366),r=(n(7294),n(4137)),o=["components"],i={},c="\u6267\u884c\u4e0a\u4e0b\u6587\u548c\u4f5c\u7528\u57df",p={unversionedId:"fe-basic/javascript/basic/execution-context-and-scope",id:"fe-basic/javascript/basic/execution-context-and-scope",title:"\u6267\u884c\u4e0a\u4e0b\u6587\u548c\u4f5c\u7528\u57df",description:"\u6458\u8981\uff08\u603b\u7ed3\uff09\uff1a",source:"@site/docs/fe-basic/javascript/basic/execution-context-and-scope.md",sourceDirName:"fe-basic/javascript/basic",slug:"/fe-basic/javascript/basic/execution-context-and-scope",permalink:"/docs/fe-basic/javascript/basic/execution-context-and-scope",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/javascript/basic/execution-context-and-scope.md",tags:[],version:"current",lastUpdatedAt:1660270864,formattedLastUpdatedAt:"8/12/2022",frontMatter:{},sidebar:"FE",previous:{title:"\u4e8b\u4ef6\u5faa\u73af",permalink:"/docs/fe-basic/javascript/basic/event-loop"},next:{title:"\u9ad8\u9636\u51fd\u6570",permalink:"/docs/fe-basic/javascript/basic/higher-order-function"}},s={},u=[{value:"\u6267\u884c\u4e0a\u4e0b\u6587",id:"\u6267\u884c\u4e0a\u4e0b\u6587",level:2},{value:"\u4f5c\u7528\u57df",id:"\u4f5c\u7528\u57df",level:2},{value:"\u4f5c\u7528\u57df\u5d4c\u5957",id:"\u4f5c\u7528\u57df\u5d4c\u5957",level:3},{value:"\u5757\u7ea7\u4f5c\u7528\u57df ES6",id:"\u5757\u7ea7\u4f5c\u7528\u57df-es6",level:3},{value:"IIFE",id:"iife",level:4},{value:"\u5982\u4f55\u521b\u5efa/\u6539\u53d8\u4f5c\u7528\u57df",id:"\u5982\u4f55\u521b\u5efa\u6539\u53d8\u4f5c\u7528\u57df",level:3},{value:"\u4f5c\u7528\u57df\u7684\u5e94\u7528\u573a\u666f",id:"\u4f5c\u7528\u57df\u7684\u5e94\u7528\u573a\u666f",level:3},{value:"\u4e00\u4e9b\u95ee\u9898",id:"\u4e00\u4e9b\u95ee\u9898",level:2},{value:"var,let,const",id:"varletconst",level:3},{value:"let \u4e0e var",id:"let-\u4e0e-var",level:4},{value:"const",id:"const",level:4},{value:"JS \u91cc\u53d8\u91cf\u7684\u5b58\u50a8",id:"js-\u91cc\u53d8\u91cf\u7684\u5b58\u50a8",level:3},{value:"Reference",id:"reference",level:2}],k={toc:u};function m(e){var t=e.components,n=(0,l.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6267\u884c\u4e0a\u4e0b\u6587\u548c\u4f5c\u7528\u57df"},"\u6267\u884c\u4e0a\u4e0b\u6587\u548c\u4f5c\u7528\u57df"),(0,r.kt)("p",null,"\u6458\u8981\uff08\u603b\u7ed3\uff09\uff1a"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6765\u6e90\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844904165672484871#heading-3"},"\u9762\u8bd5\u5b98\uff1a\u8bf4\u8bf4\u4f5c\u7528\u57df\u548c\u95ed\u5305\u5427 - \u6398\u91d1"))),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"javascript \u8bed\u8a00\u5c42\u9762\u53ea\u539f\u751f\u652f\u6301\u4e24\u79cd\u4f5c\u7528\u57df\u7c7b\u578b\uff1a\u5168\u5c40\u4f5c\u7528\u57df \u548c \u51fd\u6570\u4f5c\u7528\u57df \u3002\u5168\u5c40\u4f5c\u7528\u57df\u7a0b\u5e8f\u8fd0\u884c\u5c31\u6709\uff0c\u51fd\u6570\u4f5c\u7528\u57df\u53ea\u6709\u5b9a\u4e49\u51fd\u6570\u7684\u65f6\u5019\u624d\u6709\uff0c\u5b83\u4eec\u4e4b\u95f4\u662f\u5305\u542b\u7684\u5173\u7cfb\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f5c\u7528\u57df\u4e4b\u95f4\u662f\u53ef\u4ee5\u5d4c\u5957\u7684\uff0c\u6211\u4eec\u628a\u8fd9\u79cd\u5d4c\u5957\u5173\u7cfb\u79f0\u4e3a",(0,r.kt)("strong",{parentName:"li"},"\u4f5c\u7528\u57df\u94fe"),"\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u53ef\u6267\u884c\u4ee3\u7801\u5728\u4f5c\u7528\u57df\u4e2d\u67e5\u8be2\u53d8\u91cf\u65f6\uff0c\u53ea\u80fd\u67e5\u8be2 \u672c\u5730\u4f5c\u7528\u57df \u53ca \u4e0a\u5c42\u4f5c\u7528\u57df\uff0c\u4e0d\u80fd\u67e5\u627e\u5185\u90e8\u7684\u51fd\u6570\u4f5c\u7528\u57df\u3002JS \u5f15\u64ce\u641c\u7d22\u53d8\u91cf\u65f6\uff0c\u4f1a\u5148\u8be2\u95ee\u672c\u5730\u4f5c\u7528\u57df\uff0c\u627e\u5230\u5373\u8fd4\u56de\uff0c\u627e\u4e0d\u5230\u518d\u53bb\u8be2\u95ee\u4e0a\u5c42\u4f5c\u7528\u57df...\u5c42\u5c42\u5f80\u4e0a\uff0c\u76f4\u5230\u5168\u5c40\u4f5c\u7528\u57df\u3002"),(0,r.kt)("li",{parentName:"ol"},"javascript \u4e2d\u4f7f\u7528\u7684\u662f \u201c\u8bcd\u6cd5\u4f5c\u7528\u57df\u201d\uff08\u9759\u6001\u4f5c\u7528\u57df\uff09\uff0c\u56e0\u6b64",(0,r.kt)("strong",{parentName:"li"},"\u51fd\u6570\u4f5c\u7528\u57df\u7684\u8303\u56f4\u5728\u51fd\u6570\u5b9a\u4e49\u65f6\u5c31\u5df2\u7ecf\u88ab\u786e\u5b9a"),"\uff0c\u548c\u51fd\u6570\u5728\u54ea\u6267\u884c\u6ca1\u6709\u5173\u7cfb\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6709\u6743\u8bbf\u95ee\u53e6\u4e00\u4e2a\u51fd\u6570\u5185\u90e8\u53d8\u91cf\u7684\u51fd\u6570\uff0c\u6211\u4eec\u79f0\u4e3a \u95ed\u5305\u3002\u95ed\u5305\u7684\u672c\u8d28\u662f\u5229\u7528\u4e86\u4f5c\u7528\u57df\u7684\u673a\u5236\uff0c\u6765\u8fbe\u5230\u5916\u90e8\u4f5c\u7528\u57df\u8bbf\u95ee\u5185\u90e8\u4f5c\u7528\u57df\u7684\u76ee\u7684\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u95ed\u5305\u7684\u4f7f\u7528\u573a\u666f\u975e\u5e38\u5e7f\u6cdb\uff0c\u7136\u800c\u8fc7\u5ea6\u4f7f\u7528\u4f1a\u5bfc\u81f4\u95ed\u5305\u5185\u7684\u53d8\u91cf\u6240\u5360\u7528\u7684\u5185\u5b58\u7a7a\u95f4\u65e0\u6cd5\u91ca\u653e\uff0c\u5e26\u6765",(0,r.kt)("strong",{parentName:"li"},"\u5185\u5b58\u6cc4\u9732"),"\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6211\u4eec\u53ef\u4ee5\u501f\u52a9\u4e8e chrome \u5f00\u53d1\u8005\u5de5\u5177\u67e5\u627e\u4ee3\u7801\u4e2d\u5bfc\u81f4\u4e86\u5185\u5b58\u6cc4\u9732\u7684\u4ee3\u7801\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u907f\u514d\u5185\u5b58\u6cc4\u9732\u7684\u51e0\u79cd\u65b9\u6cd5\uff1a\u907f\u514d\u4f7f\u7528\u5168\u5c40\u53d8\u91cf\u3001\u8c28\u614e\u5730\u4e3a DOM \u7ed1\u5b9a\u4e8b\u4ef6\u3001\u907f\u514d\u8fc7\u5ea6\u4f7f\u7528\u95ed\u5305\u3002\u6700\u91cd\u8981\u7684\uff0c\u8fd8\u662f\u4ee3\u7801\u89c4\u8303\u3002")),(0,r.kt)("p",null,"\u6267\u884c\u8bed\u53e5\u524d\u521b\u5efa\u7684\u73af\u5883\u53ef\u4ee5\u8fd9\u6837\u7c7b\u6bd4\uff1a"),(0,r.kt)("img",{src:"https://i.loli.net/2021/09/26/kFej7CAxVTsW42v.png",width:"80%"}),(0,r.kt)("h2",{id:"\u6267\u884c\u4e0a\u4e0b\u6587"},"\u6267\u884c\u4e0a\u4e0b\u6587"),(0,r.kt)("p",null,"var \u548c function \u58f0\u660e\u521b\u5efa\u7684\u53d8\u91cf\u548c\u51fd\u6570\u5728\u5168\u5c40\u5bf9\u8c61\u4e2d\uff08\u6d4f\u89c8\u5668\u73af\u5883\u662f window \u5bf9\u8c61\uff09\uff0c\u800c let,const,class \u58f0\u660e\u7684\u53d8\u91cf\u521b\u5efa\u5728\u5168\u5c40 scope \u4e2d\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let a = "a";\nconsole.log(a);\nconsole.log(window.a); //\u6ca1\u6709\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var a = "a";\nconsole.log(a);\nconsole.log(window.a); //a\n')),(0,r.kt)("p",null,"\u521b\u5efa\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/09/26/Rr63yYwAt4DMJx2.png",alt:"\u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587"})),(0,r.kt)("p",null,"\u6682\u65f6\u6027\u6b7b\u533a\uff1a"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/09/26/tRu9X2mKk4HpFNq.png",alt:"\u6682\u65f6\u6027\u6b7b\u533a"})),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var a = \"123\";\nfunction foo() {\n  console.log(a);\n  let a;\n}\nfoo(); //Uncaught ReferenceError: Cannot access 'a' before initialization\n")),(0,r.kt)("h2",{id:"\u4f5c\u7528\u57df"},"\u4f5c\u7528\u57df"),(0,r.kt)("p",null,"\u4f5c\u7528\u57df\uff1a\u5f53\u524d\u6267\u884c\u4e0a\u4e0b\u6587\u6216\u5f53\u524d\u4e0a\u4e0b\u6587\u7684\u8bcd\u6cd5\u73af\u5883\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5168\u5c40\u4f5c\u7528\u57df\uff1a \u5168\u5c40\u6267\u884c\u4e0a\u4e0b\u6587\u3002\u5168\u5c40\u4f5c\u7528\u57df\u4e3a\u7a0b\u5e8f\u7684\u6700\u5916\u5c42\u4f5c\u7528\u57df\uff0c\u4e00\u76f4\u5b58\u5728\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\u4f5c\u7528\u57df\uff1a \u51fd\u6570\u6267\u884c\u4e0a\u4e0b\u6587\u3002\u53ea\u6709\u51fd\u6570\u88ab\u5b9a\u4e49\u65f6\u624d\u4f1a\u521b\u5efa\uff0c\u5305\u542b\u5728\u7236\u7ea7\u51fd\u6570\u4f5c\u7528\u57df / \u5168\u5c40\u4f5c\u7528\u57df\u5185\u3002")),(0,r.kt)("p",null,"\u51fd\u6570\u8c03\u7528\u65f6\u7684\u6267\u884c\u4e0a\u4e0b\u6587\uff1a \u51fd\u6570\u5728\u54ea\u91cc\u521b\u5efa\uff0c\u4ed6\u5c31\u5904\u4e8e\u54ea\u4e2a\u6267\u884c\u4e0a\u4e0b\u6587\u3002"),(0,r.kt)("p",null,"\u51fd\u6570\u7684\u4f5c\u7528\u57df\u5728\u51fd\u6570\u521b\u5efa\u65f6\u51b3\u5b9a(\u8bcd\u6cd5\u4f5c\u7528\u57df):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var a = 2;\nfunction foo() {\n  console.log(a);\n}\n\nfunction bar() {\n  var a = 3;\n  foo();\n}\n\nbar(); //2 \u6267\u884c\u7684foo \u4f5c\u7528\u57df\u5728\u5168\u5c40\uff0c\u5219a \u4e3a\u5168\u5c40\u7684a\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u8bcd\u6cd5\u4f5c\u7528\u57df\uff08Lexical Scopes\uff09\u662f javascript \u4e2d\u4f7f\u7528\u7684\u4f5c\u7528\u57df\u7c7b\u578b\uff0c\u8bcd\u6cd5\u4f5c\u7528\u57df \u4e5f\u53ef\u4ee5\u88ab\u53eb\u505a \u9759\u6001\u4f5c\u7528\u57df\uff0c\u4e0e\u4e4b\u76f8\u5bf9\u7684\u8fd8\u6709 \u52a8\u6001\u4f5c\u7528\u57df\u3002 \u610f\u5473\u7740\u51fd\u6570\u88ab\u5b9a\u4e49\u7684\u65f6\u5019\uff0c\u5b83\u7684\u4f5c\u7528\u57df\u5c31\u5df2\u7ecf\u786e\u5b9a\u4e86\uff0c\u548c\u62ff\u5230\u54ea\u91cc\u6267\u884c\u6ca1\u6709\u5173\u7cfb\uff0c\u56e0\u6b64\u8bcd\u6cd5\u4f5c\u7528\u57df\u4e5f\u88ab\u79f0\u4e3a \u201c\u9759\u6001\u4f5c\u7528\u57df\u201d\u3002")),(0,r.kt)("h3",{id:"\u4f5c\u7528\u57df\u5d4c\u5957"},"\u4f5c\u7528\u57df\u5d4c\u5957"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/10/22/YT4vOU6dL9QgCi3.png",alt:"\u4f5c\u7528\u57df\u5d4c\u5957"}),"\n\u7528\u56fe\u7247\u8868\u793a\uff0c\u4e0a\u8ff0\u4ee3\u7801\u4e00\u5171\u6709\u4e09\u5c42\u4f5c\u7528\u57df\u5d4c\u5957\uff0c\u5206\u522b\u662f\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5168\u5c40\u4f5c\u7528\u57df"),(0,r.kt)("li",{parentName:"ol"},"foo \u4f5c\u7528\u57df"),(0,r.kt)("li",{parentName:"ol"},"bar \u4f5c\u7528\u57df")),(0,r.kt)("p",null,"\u5f53\u53ef\u6267\u884c\u4ee3\u7801\u5185\u90e8\u8bbf\u95ee\u53d8\u91cf\u65f6\uff0c\u4f1a\u5148\u67e5\u627e\u672c\u5730\u4f5c\u7528\u57df\uff0c\u5982\u679c\u627e\u5230\u76ee\u6807\u53d8\u91cf\u5373\u8fd4\u56de\uff0c\u5426\u5219\u4f1a\u53bb\u7236\u7ea7\u4f5c\u7528\u57df\u7ee7\u7eed\u67e5\u627e...\u4e00\u76f4\u627e\u5230\u5168\u5c40\u4f5c\u7528\u57df\u3002\u6211\u4eec\u628a\u8fd9\u79cd\u4f5c\u7528\u57df\u7684\u5d4c\u5957\u673a\u5236\uff0c\u79f0\u4e3a \u201c\u4f5c\u7528\u57df\u94fe\u201d\u3002"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844904165672484871#heading-3"},"\u9762\u8bd5\u5b98\uff1a\u8bf4\u8bf4\u4f5c\u7528\u57df\u548c\u95ed\u5305\u5427 - \u6398\u91d1")),(0,r.kt)("h3",{id:"\u5757\u7ea7\u4f5c\u7528\u57df-es6"},"\u5757\u7ea7\u4f5c\u7528\u57df ES6"),(0,r.kt)("p",null,"\u5728 ES5 \u53ca\u4e4b\u524d\u5e76\u6ca1\u6709\u5757\u7ea7\u4f5c\u7528\u57df\u7684\u6982\u5ff5\u3002"),(0,r.kt)("p",null,"\u4e3a\u4ec0\u4e48\u9700\u8981\u5757\u7ea7\u4f5c\u7528\u57df\uff1f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5185\u5c42\u53d8\u91cf\u53ef\u80fd\u8986\u76d6\u5916\u5c42\u53d8\u91cf"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6765\u8ba1\u6570\u7684\u5faa\u73af\u53d8\u91cf\u6cc4\u9732\u4e3a\u5168\u5c40\u53d8\u91cf")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if (true) {\n  var a = 1;\n}\n\nconsole.log(a); // \u7ed3\u679c??? 1\n")),(0,r.kt)("p",null,"ES6 \u4f7f\u7528 let \u548c const \u4ee3\u66ff var \u5173\u952e\u5b57\uff0c\u548c\u5b83\u6700\u8fd1\u7684{}\u5c31\u4f1a\u521b\u5efa\u5757\u7ea7\u4f5c\u7528\u57df\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if (true) {\n  let a = 1;\n}\n\nconsole.log(a); // ReferenceError\n")),(0,r.kt)("p",null,"ES6 \u65b0\u589e\u7684 let \u5173\u952e\u5b57\u8ddf var \u5f88\u76f8\u4f3c\uff0c\u4f46\u5b83\u7684\u4f5c\u7528\u57df\u662f\u5757\u7ea7\u7684\u3002\u5757\u7ea7\u4f5c\u7528\u57df\u7531\u6700\u8fd1\u7684\u4e00\u5bf9\u5305\u542b\u82b1\u62ec\u53f7{}\u754c\u5b9a\u3002\u6362\u53e5\u8bdd\u8bf4\uff0cif \u5757\u3001while \u5757\u3001function \u5757\uff0c\u751a\u81f3\u8fde\u5355\u72ec\u7684\u5757\u4e5f\u662f let \u58f0\u660e\u53d8\u91cf\u7684\u4f5c\u7528\u57df\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"if (true) {\n  let a;\n}\nconsole.log(a); // ReferenceError: a\u6ca1\u6709\u5b9a\u4e49\n\nwhile (true) {\n  let b;\n}\nconsole.log(b); // ReferenceError: b\u6ca1\u6709\u5b9a\u4e49\n\nfunction foo() {\n  let c;\n}\nconsole.log(c); // ReferenceError: c\u6ca1\u6709\u5b9a\u4e49\n// \u8fd9\u6ca1\u4ec0\u4e48\u53ef\u5947\u602a\u7684\uff0cvar\u58f0\u660e\u4e5f\u4f1a\u5bfc\u81f4\u62a5\u9519\n// \u8fd9\u4e0d\u662f\u5bf9\u8c61\u5b57\u9762\u91cf\uff0c\u800c\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u5757\n// JavaScript\u89e3\u91ca\u5668\u4f1a\u6839\u636e\u5176\u4e2d\u5185\u5bb9\u8bc6\u522b\u51fa\u5b83\u6765\n\n{\n  let d;\n} //\u5355\u72ec\u7684\u5757\u4e5f\u662f let \u58f0\u660e\u53d8\u91cf\u7684\u4f5c\u7528\u57df\u3002\nconsole.log(d); // ReferenceError: d\u6ca1\u6709\u5b9a\u4e49\n")),(0,r.kt)("h4",{id:"iife"},"IIFE"),(0,r.kt)("p",null,"ES5 \u4f7f\u7528 IIFE \u53ef\u4ee5\u6a21\u62df\u5757\u7ea7\u4f5c\u7528\u57df\uff0c\u5373\u5728\u4e00\u4e2a\u51fd\u6570\u8868\u8fbe\u5f0f\u5185\u90e8\u58f0\u660e\u53d8\u91cf\uff0c\u7136\u540e\u7acb\u5373\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\u3002\u8fd9\u6837\u4f4d\u4e8e\u51fd\u6570\u4f53\u4f5c\u7528\u57df\u7684\u53d8\u91cf\u5c31\u50cf\u662f\u5728\u5757\u7ea7\u4f5c\u7528\u57df\u4e2d\u4e00\u6837\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// module1.js\n(function () {\n  //\u5185\u5d4c\u5757\u7ea7\u4f5c\u7528\u57df\n  var a = 1;\n  console.log(a);\n})();\n\n// module2.js\n(function () {\n  var a = 2;\n  console.log(a);\n})();\n")),(0,r.kt)("p",null,"\u6a21\u62df\u5757\u7ea7\u4f5c\u7528\u57df\u9501\u5b9a\u503c\uff08\u95ed\u5305+IIFE\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let divs = document.querySelectorAll("div");\nfor (var i = 0; i < divs.length; i++) {\n  divs[i].addEventListener(\n    "click",\n    (function (frozenCounter) {\n      return function () {\n        console.log(frozenCounter);\n      };\n    })(i)\n  );\n}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5ef6\u7533\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Closures"},"\u95ed\u5305 - JavaScript | MDN")," \u63d0\u4f9b\u4e86\u66f4\u591a\u89e3\u51b3\u904d\u5386\u95ee\u9898\u7684\u65b9\u5f0f\u3002\n\u53ef\u4ee5\u4f7f\u7528 forEach")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"\u901a\u8fc7 IIFE \u5b9e\u73b0 UMD \u6a21\u5757\u5316")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("ol",{parentName:"div"},(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 IIFE \u5b8c\u6210\u5c01\u88c5\uff0c\u89e3\u51b3\u4e86\u6a21\u5757\u540d\u6c61\u67d3\u5168\u5c40\u4f5c\u7528\u57df\u7684\u95ee\u9898\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u8d4b\u4e88\u9009\u62e9\u7684\u6743\u529b\uff0c\u6839\u636e\u4e0d\u540c\u7684\u73af\u5883\u6761\u4ef6\u9009\u62e9\u4e0d\u540c\u7684\u6267\u884c")),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// UMD \u6a21\u5757\u5316\n(function (root, factory) {\n  if (typeof define === "function" && define.amd) {\n    // AMD\n    define(["jquery"], factory);\n  } else if (typeof exports === "object") {\n    // Node, CommonJS-like\n    module.exports = factory(require("jquery"));\n  } else {\n    // Browser globals (root is window)\n    root.returnExports = factory(root.jQuery);\n  }\n})(this, function ($) {\n  // methods\n  function myFunc() {}\n  // exposed public method\n  return myFunc;\n});\n')))),(0,r.kt)("h3",{id:"\u5982\u4f55\u521b\u5efa\u6539\u53d8\u4f5c\u7528\u57df"},"\u5982\u4f55\u521b\u5efa/\u6539\u53d8\u4f5c\u7528\u57df"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u4e00\u4e2a\u51fd\u6570\uff0c\u521b\u5efa\u51fd\u6570\u4f5c\u7528\u57df")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function foo() {}\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"\u521b\u5efa\u4e00\u4e2a\u5757\u7ea7\u4f5c\u7528\u57df\uff0c\u4f7f\u7528 let/const")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u5185\u5d4c\u5757\u7ea7\u4f5c\u7528\u57df\n{\n  let i;\n  for (i = 0; i < 5; i++) {\n    console.log(i);\n  }\n}\nconsole.log(i); // \u629b\u51fa\u9519\u8bef\n\n// \u5faa\u73af\u7684\u5757\u7ea7\u4f5c\u7528\u57df\nfor (let i = 0; i < 5; i++) {\n  console.log(i);\n}\nconsole.log(i); // \u629b\u51fa\u9519\u8bef\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 eval/with \u4fee\u6539\u4f5c\u7528\u57df\uff0c\u4e0d\u63a8\u8350\u3002")),(0,r.kt)("h3",{id:"\u4f5c\u7528\u57df\u7684\u5e94\u7528\u573a\u666f"},"\u4f5c\u7528\u57df\u7684\u5e94\u7528\u573a\u666f"),(0,r.kt)("p",null,"\u6a21\u5757\u5316\u3002\n",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844904165672484871#heading-8"},"\u9762\u8bd5\u5b98\uff1a\u8bf4\u8bf4\u4f5c\u7528\u57df\u548c\u95ed\u5305\u5427 - \u6398\u91d1")),(0,r.kt)("h2",{id:"\u4e00\u4e9b\u95ee\u9898"},"\u4e00\u4e9b\u95ee\u9898"),(0,r.kt)("p",null,"\u5bf9\u8c61\u91cc\u5199\u51fd\u6570\uff0c\u5bf9\u8c61\u7684 fn \u5c5e\u6027\u6307\u5411\u8fd9\u4e2a\u51fd\u6570\uff0c\u4f46\u662f\u51fd\u6570\u5e76\u4e0d\u5c5e\u4e8e\u8fd9\u4e2a\u5bf9\u8c61\uff0c\u76f8\u5bf9\u72ec\u7acb\u3002"),(0,r.kt)("p",null,"\u8fd9\u4e2a\u51fd\u6570\u662f\u5168\u5c40\u7684\uff0c\u5bf9\u8c61\u4e0d\u662f\u8bed\u53e5\u5757\uff0c\u4e0d\u4f1a\u4ea7\u751f\u4f5c\u7528\u57df\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"var obj = {\n  val: 3,\n  fn: function () {\n    return this.val;\n  },\n};\nobj.fn(); //this=>obj, 3\n")),(0,r.kt)("h3",{id:"varletconst"},"var,let,const"),(0,r.kt)("h4",{id:"let-\u4e0e-var"},"let \u4e0e var"),(0,r.kt)("p",null,"\u90fd\u662f\u7528\u4e8e\u58f0\u660e\u53d8\u91cf\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"var \u58f0\u660e\u7684\u53d8\u91cf\u4f1a\u88ab\u63d0\u5347\u5230\u5f53\u524d\u6240\u5728\u4f5c\u7528\u57df\u6700\u524d\u9762\uff0c\u4f46\u4e0d\u8d4b\u503c\uff0c\u5230\u8d4b\u503c\u7684\u884c\u624d\u4f1a\u8d4b\u503c\u3002"),(0,r.kt)("p",{parentName:"li"},"let \u5728 JavaScript \u8fd0\u884c\u65f6\u4e2d\u4e5f\u4f1a\u88ab\u63d0\u5347\uff0c\u4f46\u7531\u4e8e\u201c\u6682\u65f6\u6027\u6b7b\u533a\u201d\uff08temporal dead zone\uff09\u7684\u7f18\u6545\uff0c\u5b9e\u9645\u4e0a\u4e0d\u80fd\u5728\u58f0\u660e\u4e4b\u524d\u4f7f\u7528 let \u53d8\u91cf\u3002\u56e0\u6b64\uff0clet \u7684\u63d0\u5347\u8ddf var \u662f\u4e0d\u4e00\u6837\u7684\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// TDZ \u5757\u7ea7\u4f5c\u7528\u57df\u4e2d\u4e5f\u4e0d\u80fd\u4f7f\u7528\u5916\u90e8\u4f5c\u7528\u57df\u7684\u540c\u540d\u53d8\u91cf\nvar a = 8;\n{\n  console.log(a); //ReferenceError: Cannot access 'a' before initialization\n  let a = 9;\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"let \u4e0e var \u7684\u4e00\u4e2a\u4e0d\u540c\u4e4b\u5904\u662f\u5728\u540c\u4e00\u4f5c\u7528\u57df\u5185\u4e0d\u80fd\u58f0\u660e\u4e24\u6b21\u3002\u91cd\u590d\u7684 var \u58f0\u660e\u4f1a\u88ab\u5ffd\u7565\uff0c\u800c\u91cd\u590d\u7684 let \u58f0\u660e\u4f1a\u629b\u51fa SyntaxError\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"let \u7684\u884c\u4e3a\u975e\u5e38\u9002\u5408\u5728\u5faa\u73af\u4e2d\u58f0\u660e\u8fed\u4ee3\u53d8\u91cf\u3002",(0,r.kt)("strong",{parentName:"p"},"\u4f7f\u7528 var \u58f0\u660e\u7684\u8fed\u4ee3\u53d8\u91cf\u4f1a\u6cc4\u6f0f\u5230\u5faa\u73af\u5916\u90e8"),"\uff0c\u8fd9\u79cd\u60c5\u51b5\u5e94\u8be5\u907f\u514d\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"for (var i = 0; i < 10; ++i) {}\nconsole.log(i); // 10\n\nfor (let j = 0; j < 10; ++j) {}\nconsole.log(j); // ReferenceError: j\u6ca1\u6709\u5b9a\u4e49\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5982\u679c\u5728\u6d4f\u89c8\u5668\u7684\u5168\u5c40\u4f5c\u7528\u57df\u4e2d\uff0c\u4f7f\u7528 var \u58f0\u660e\u7684\u53d8\u91cf\u4f1a\u4f5c\u4e3a window \u7684\u5c5e\u6027\uff0c\u800c let \u58f0\u660e\u7684\u53d8\u91cf\u4e0d\u4f1a\u3002"))),(0,r.kt)("h4",{id:"const"},"const"),(0,r.kt)("p",null,"\u4f7f\u7528 const \u58f0\u660e\u7684\u53d8\u91cf\u5fc5\u987b\u540c\u65f6\u521d\u59cb\u5316\u4e3a\u67d0\u4e2a\u503c\u3002\u4e00\u7ecf\u58f0\u660e\uff0c\u5728\u5176\u751f\u547d\u5468\u671f\u7684\u4efb\u4f55\u65f6\u5019\u90fd\u4e0d\u80fd\u518d\u91cd\u65b0\u8d4b\u4e88\u65b0\u503c."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const a; //Uncaught SyntaxError: Missing initializer in const declaration,\u5b9a\u4e49\u65f6\u6ca1\u6709\u521d\u59cb\u5316\n")),(0,r.kt)("p",null,"\u9664\u4e86\u4ee5\u4e0a\u8fd9\u70b9\uff0c\u5176\u4ed6\u4e0e let \u76f8\u540c\uff0c\u5efa\u7acb\u5757\u7ea7\u4f5c\u7528\u57df\uff0c\u5b58\u5728\u6682\u65f6\u6027\u6b7b\u533a\u7684\u95ee\u9898\uff0c\u4e0d\u80fd\u5728\u540c\u4e00\u4f5c\u7528\u57df\u58f0\u660e\u4e24\u6b21\u3002"),(0,r.kt)("h3",{id:"js-\u91cc\u53d8\u91cf\u7684\u5b58\u50a8"},"JS \u91cc\u53d8\u91cf\u7684\u5b58\u50a8"),(0,r.kt)("p",null,"\u7406\u60f3\u60c5\u51b5\u4e0b\u4f1a\u8ba4\u4e3a\u539f\u59cb\u6570\u636e\u7c7b\u578b\u5b58\u50a8\u5728\u6808\u5185\uff0c\u5f15\u7528\u6570\u636e\u7c7b\u578b\u5b58\u50a8\u5728\u5806\u5185\uff0c\u6808\u5185\u5b58\u50a8\u7684\u662f\u5806\u5185\u5730\u5740\u7684\u5f15\u7528\uff0c\u4f46\u8fd9\u4e0d\u51c6\u786e\u7684\u3002"),(0,r.kt)("p",null,"\u5b9e\u9645\u4e0a\uff1a"),(0,r.kt)("p",null,"\u5c40\u90e8\u53d8\u91cf\u4e2d\u672a\u6355\u83b7\u7684\u57fa\u7840\u53d8\u91cf\u4f1a\u5b58\u50a8\u5728\u6808\u5185\uff0c\u5176\u4ed6\u5728\u6808\u5185\u5b58\u50a8\u7684\u90fd\u662f\u5730\u5740\u3002"),(0,r.kt)("p",null,"\u88ab\u6355\u83b7\u7684\u53d8\u91cf\u6bd4\u5982\u95ed\u5305\u4e2d\u5f15\u7528\u7684\u53d8\u91cf\u4f1a\u5b58\u5728\u7279\u6b8a\u7684\u5bf9\u8c61 Scope \u4e2d\u3002"),(0,r.kt)("p",null,"\u5168\u5c40\u53d8\u91cf global\uff0cvar/let \u4e0d\u4e00\u81f4\uff0clet \u58f0\u660e\u7684\u53d8\u91cf\u662f\u653e\u5728\u5168\u5c40\u7684 Scope \u4e2d\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u6808\uff1a \u5148\u8fdb\u540e\u51fa\uff0c\u5360\u7528\u7a7a\u95f4\u5c0f\uff0c\u8bfb\u53d6\u901f\u5ea6\u5feb\u3002\n\u5806\uff1a \u5360\u7528\u7a7a\u95f4\u5927\uff0c\u5927\u5c0f\u4e0d\u56fa\u5b9a\u3002")),(0,r.kt)("p",null,"\u4e86\u89e3\u66f4\u591a\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903997615128583#heading-0"},"JS \u53d8\u91cf\u5b58\u50a8\uff1f\u6808 & \u5806\uff1fNONONO! - \u6398\u91d1")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.bilibili.com/video/BV1wD4y1D7Pp?from=search&seid=2212534765957722610"},"js \u6267\u884c\u4e0a\u4e0b\u6587\u4e0e\u4f5c\u7528\u57df","_","\u54d4\u54e9\u54d4\u54e9","_","bilibili")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844904165672484871#heading-3"},"\u9762\u8bd5\u5b98\uff1a\u8bf4\u8bf4\u4f5c\u7528\u57df\u548c\u95ed\u5305\u5427 - \u6398\u91d1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://weread.qq.com/web/reader/751326d0720befab7514782k182326e0221182be0c5ca23"},"4.2 \u6267\u884c\u4e0a\u4e0b\u6587\u4e0e\u4f5c\u7528\u57df JavaScript \u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1\uff08\u7b2c 4 \u7248\uff09-\u9a6c\u7279\xb7\u5f17\u91cc\u65af\u6bd4-\u5fae\u4fe1\u8bfb\u4e66")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://weread.qq.com/web/reader/751326d0720befab7514782kfe932230253fe9fc289c8a3"},"10.15 \u7acb\u5373\u8c03\u7528\u8868\u8fbe\u5f0f JavaScript \u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1\uff08\u7b2c 4 \u7248\uff09-\u9a6c\u7279\xb7\u5f17\u91cc\u65af\u6bd4-\u5fae\u4fe1\u8bfb\u4e66"))))}m.isMDXComponent=!0}}]);