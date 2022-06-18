"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[2153],{4137:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(o,".").concat(m)]||d[m]||u[m]||i;return r?n.createElement(k,l(l({ref:t},s),{},{components:r})):n.createElement(k,l({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5271:function(e,t,r){r.r(t),r.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return p},metadata:function(){return c},toc:function(){return u}});var n=r(7462),a=r(3366),i=(r(7294),r(4137)),l=["components"],p={title:"\u8c08\u8c08Script \u6807\u7b7e"},o=void 0,c={unversionedId:"fe-basic/attributes-and-usage-of-the-script-tag",id:"fe-basic/attributes-and-usage-of-the-script-tag",title:"\u8c08\u8c08Script \u6807\u7b7e",description:"\u8bf4\u8bf4``\u6807\u7b7e\uff0c\u901a\u5e38\u7528\u4f5c\u5d4c\u5165\u6216\u5f15\u7528\u53ef\u6267\u884c\u811a\u672c\u3002",source:"@site/docs/fe-basic/attributes-and-usage-of-the-script-tag.md",sourceDirName:"fe-basic",slug:"/fe-basic/attributes-and-usage-of-the-script-tag",permalink:"/docs/fe-basic/attributes-and-usage-of-the-script-tag",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/attributes-and-usage-of-the-script-tag.md",tags:[],version:"current",lastUpdatedAt:1655529387,formattedLastUpdatedAt:"6/18/2022",frontMatter:{title:"\u8c08\u8c08Script \u6807\u7b7e"},sidebar:"FE",previous:{title:"\u524d\u7aef\u5de5\u7a0b\u5e08\u8fdb\u9636 10 \u65e5\u8c08",permalink:"/docs/fe-basic/advanced"},next:{title:"\u6d4f\u89c8\u5668",permalink:"/docs/fe-basic/browser"}},s={},u=[{value:"script \u6807\u7b7e\u7684\u5c5e\u6027",id:"script-\u6807\u7b7e\u7684\u5c5e\u6027",level:2},{value:"\u4e00\u4e9b\u5c5e\u6027",id:"\u4e00\u4e9b\u5c5e\u6027",level:3},{value:"async \u4e0e defer \u5c5e\u6027",id:"async-\u4e0e-defer-\u5c5e\u6027",level:3},{value:"\u666e\u901a\u7684 script \u6807\u7b7e\u52a0\u8f7d\u4e0e\u6267\u884c\u5747\u4f1a\u5835\u585e DOM \u89e3\u6790\u3002",id:"\u666e\u901a\u7684-script-\u6807\u7b7e\u52a0\u8f7d\u4e0e\u6267\u884c\u5747\u4f1a\u5835\u585e-dom-\u89e3\u6790",level:4},{value:"\u5e26\u6709 async \u5c5e\u6027\u7684 script \u6807\u7b7e\u52a0\u8f7d\u4e0d\u5835\u585e DOM \u89e3\u6790\uff0c\u6267\u884c\u5835\u585e DOM \u89e3\u6790\u3002(\u5f02\u6b65\u6267\u884c)",id:"\u5e26\u6709-async-\u5c5e\u6027\u7684-script-\u6807\u7b7e\u52a0\u8f7d\u4e0d\u5835\u585e-dom-\u89e3\u6790\u6267\u884c\u5835\u585e-dom-\u89e3\u6790\u5f02\u6b65\u6267\u884c",level:4},{value:"\u5e26\u6709 defer \u5c5e\u6027\u7684 script \u6807\u7b7e\u4e0d\u5835\u585e DOM \u89e3\u6790\uff0c\u5e76\u884c\u52a0\u8f7d\uff0c\u5ef6\u8fdf\u6267\u884c\u3002(\u63a8\u8fdf\u6267\u884c)",id:"\u5e26\u6709-defer-\u5c5e\u6027\u7684-script-\u6807\u7b7e\u4e0d\u5835\u585e-dom-\u89e3\u6790\u5e76\u884c\u52a0\u8f7d\u5ef6\u8fdf\u6267\u884c\u63a8\u8fdf\u6267\u884c",level:4},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",level:4},{value:"\u52a8\u6001\u52a0\u8f7d\u811a\u672c",id:"\u52a8\u6001\u52a0\u8f7d\u811a\u672c",level:3},{value:"\u5185\u5bb9\u9884\u52a0\u8f7d(rel=&quot;preload&quot;)",id:"\u5185\u5bb9\u9884\u52a0\u8f7drelpreload",level:3},{value:"\u884c\u5185\u4ee3\u7801\u4e0e\u5916\u90e8\u6587\u4ef6",id:"\u884c\u5185\u4ee3\u7801\u4e0e\u5916\u90e8\u6587\u4ef6",level:3},{value:"<code>&lt;noscript&gt;</code>\u5143\u7d20",id:"noscript\u5143\u7d20",level:3},{value:"\u5176\u4ed6\u7684\u6ce8\u610f\u4e8b\u9879",id:"\u5176\u4ed6\u7684\u6ce8\u610f\u4e8b\u9879",level:3},{value:"Reference",id:"reference",level:2}],d={toc:u};function m(e){var t=e.components,r=(0,a.Z)(e,l);return(0,i.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"\u8bf4\u8bf4",(0,i.kt)("inlineCode",{parentName:"p"},"<script>"),"\u6807\u7b7e\uff0c\u901a\u5e38\u7528\u4f5c\u5d4c\u5165\u6216\u5f15\u7528\u53ef\u6267\u884c\u811a\u672c\u3002"),(0,i.kt)("h2",{id:"script-\u6807\u7b7e\u7684\u5c5e\u6027"},"script \u6807\u7b7e\u7684\u5c5e\u6027"),(0,i.kt)("h3",{id:"\u4e00\u4e9b\u5c5e\u6027"},"\u4e00\u4e9b\u5c5e\u6027"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"src:\u8fd9\u4e2a\u5c5e\u6027\u5b9a\u4e49\u5f15\u7528\u5916\u90e8\u811a\u672c\u7684 URI\uff0c\u8fd9\u53ef\u4ee5\u7528\u6765\u4ee3\u66ff\u76f4\u63a5\u5728\u6587\u6863\u4e2d\u5d4c\u5165\u811a\u672c\u3002\u6307\u5b9a\u4e86 src \u5c5e\u6027\u7684 script \u5143\u7d20\u6807\u7b7e\u5185\u4e0d\u5e94\u8be5\u518d\u6709\u5d4c\u5165\u7684\u811a\u672c\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"type:\u8be5\u5c5e\u6027\u5b9a\u4e49 script \u5143\u7d20\u5305\u542b\u6216 src \u5f15\u7528\u7684\u811a\u672c\u8bed\u8a00(text/javascript)\u3002\u5982\u679c type \u5c5e\u6027\u4e3a module\uff0c\u4ee3\u7801\u4f1a\u88ab\u5f53\u4f5c JavaScript \u6a21\u5757\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},'crossorigin:\u9ed8\u8ba4\u4e0d\u4f7f\u7528 CORS\u3002"anonymous"\u914d\u7f6e\u6587\u4ef6\u8bf7\u6c42\u4e0d\u5fc5\u8bbe\u7f6e\u51ed\u636e\u6807\u5fd7\u3002"use-credentials"\u8bbe\u7f6e\u51ed\u636e\u6807\u5fd7\uff0c\u610f\u5473\u7740\u51fa\u7ad9\u8bf7\u6c42\u4f1a\u5305\u542b\u51ed\u636e\u3002'),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/06/29/Est72uLzZgnA9Qp.png",alt:null})))),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u5173\u4e8e\u8de8\u57df")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"\u901a\u8fc7 script \u6807\u7b7e\u76f4\u63a5\u5f15\u5165\u7684\u5916\u90e8\u8d44\u6e90\uff0c\u662f\u4e0d\u53d7\u8de8\u57df\u9650\u5236\u7684\u3002\u901a\u8fc7 html \u539f\u59cb\u6807\u7b7e\u7684 src \u5c5e\u6027\u5f15\u5165\u4e5f\u4e00\u6837\uff0c\u6bd4\u5982\uff08img/video/script\uff09\uff0c\u4e0d\u53d7\u8de8\u57df\u9650\u5236\u3002"),(0,i.kt)("p",{parentName:"div"},"\u540c\u65f6\uff0c\u901a\u8fc7 script \u5f15\u5165\u7684\u5176\u4ed6\u57df\u7684\u8d44\u6e90\uff0c\u4f1a\u81ea\u52a8\u6267\u884c\uff0c\u800c\u4e0d\u80fd\u62ff\u5230\u5bf9\u5e94\u7684\u8d44\u6e90\u6e90\u7801\u3002"),(0,i.kt)("p",{parentName:"div"},"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff08\u5373\u672a\u6307\u5b9a crossOrigin \u5c5e\u6027\u65f6\uff09\uff0cCORS \u6839\u672c\u4e0d\u4f1a\u4f7f\u7528\uff0c\u7f51\u7edc\u8bf7\u6c42\u7684\u8bf7\u6c42\u5934\u662f\u6ca1\u6709 origin \u5b57\u6bb5\u7684\u3002"))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"integrity:\u5141\u8bb8\u6bd4\u5bf9\u63a5\u6536\u5230\u7684\u8d44\u6e90\u548c\u6307\u5b9a\u7684\u52a0\u5bc6\u7b7e\u540d\u4ee5\u9a8c\u8bc1\u5b50\u8d44\u6e90\u5b8c\u6574\u6027\uff08SRI,Subresource Integrity\uff09\u3002\u53ef\u4ee5\u7528\u4e8e\u786e\u4fdd\u5185\u5bb9\u5206\u53d1\u7f51\u7edc\uff08CDN, Content Delivery Network\uff09\u4e0d\u4f1a\u63d0\u4f9b\u6076\u610f\u5185\u5bb9\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"type:MIME \u7c7b\u578b\uff0c\u901a\u5e38\u4e3a",(0,i.kt)("inlineCode",{parentName:"p"},"type=application/javascript"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"application/javascript")),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"type=module"),"\u4ee3\u7801\u4f1a\u88ab\u5f53\u6210 ES6 \u6a21\u5757\uff0c\u800c\u4e14\u53ea\u6709\u8fd9\u65f6\u5019\u4ee3\u7801\u4e2d\u624d\u80fd\u51fa\u73b0 import \u548c export \u5173\u952e\u5b57\u3002")))),(0,i.kt)("h3",{id:"async-\u4e0e-defer-\u5c5e\u6027"},"async \u4e0e defer \u5c5e\u6027"),(0,i.kt)("p",null,"async \u4e0e defer \u5c5e\u6027\u53ea\u5bf9\u5916\u90e8\u811a\u672c\u6709\u6548\u3002"),(0,i.kt)("h4",{id:"\u666e\u901a\u7684-script-\u6807\u7b7e\u52a0\u8f7d\u4e0e\u6267\u884c\u5747\u4f1a\u5835\u585e-dom-\u89e3\u6790"},"\u666e\u901a\u7684 script \u6807\u7b7e\u52a0\u8f7d\u4e0e\u6267\u884c\u5747\u4f1a\u5835\u585e DOM \u89e3\u6790\u3002"),(0,i.kt)("p",null,"\u6d4f\u89c8\u5668\u5bf9 HTML \u7684\u89e3\u6790\u662f\u4ece\u4e0a\u5230\u4e0b\u7684\uff0c\u9047\u5230\u6ca1\u6709 async \u6216 defer \u5c5e\u6027\u7684 script \u6807\u7b7e\uff0c\u4f1a\u6682\u505c\u5bf9 HTML \u7684\u89e3\u6790\uff0c\u53bb\u8bf7\u6c42\u52a0\u8f7d js \u7684\u5185\u5bb9\uff0c\u52a0\u8f7d\u5b8c\u6bd5\u8bf7\u6c42 JS \u5f15\u64ce\u6267\u884c\u8be5\u6bb5\u4ee3\u7801\uff0c\u6267\u884c\u5b8c\u6bd5\u540e\u6062\u590d\u89e3\u6790 HTML\u3002"),(0,i.kt)("p",null,"\u9047\u5230\u666e\u901a script \u6807\u7b7e\u65f6\u7684 DOM \u6267\u884c\u987a\u5e8f\u56fe\uff1a"),(0,i.kt)("img",{src:"https://i.loli.net/2021/06/30/18pQLdCr9bFxg46.png",width:"800"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u591a\u4e2a script \u6807\u7b7e\u4e25\u683c\u6309\u987a\u5e8f\u6267\u884c\u3002\u5982\u679c\u52a0\u8f7d js \u7684\u8bf7\u6c42\u54cd\u5e94\u5f88\u6162\uff0c\u6216\u8005 JS \u6267\u884c\u65f6\u95f4\u8f83\u957f\uff0c\u4f1a\u5bfc\u81f4\u767d\u5c4f\uff0c\u5f71\u54cd\u7528\u6237\u4f53\u9a8c\u3002\uff08//TODO:\u6d4f\u89c8\u5668\u5bf9 dom \u7684\u89e3\u6790\u8fc7\u7a0b\uff0c\u6e32\u67d3\u8fc7\u7a0b\uff09")),(0,i.kt)("h4",{id:"\u5e26\u6709-async-\u5c5e\u6027\u7684-script-\u6807\u7b7e\u52a0\u8f7d\u4e0d\u5835\u585e-dom-\u89e3\u6790\u6267\u884c\u5835\u585e-dom-\u89e3\u6790\u5f02\u6b65\u6267\u884c"},"\u5e26\u6709 async \u5c5e\u6027\u7684 script \u6807\u7b7e\u52a0\u8f7d\u4e0d\u5835\u585e DOM \u89e3\u6790\uff0c\u6267\u884c\u5835\u585e DOM \u89e3\u6790\u3002(\u5f02\u6b65\u6267\u884c)"),(0,i.kt)("p",null,"async:\u5e76\u884c\u8bf7\u6c42\uff0c\u5e76\u5c3d\u5feb\u89e3\u6790\u548c\u6267\u884c.\u5e76\u884c\u8bf7\u6c42\u4ece\u800c\u6d88\u9664\u89e3\u6790\u963b\u585e\u3002"),(0,i.kt)("p",null,"\u9047\u5230 async \u6807\u7b7e\u7684 DOM \u6267\u884c\u987a\u5e8f\u56fe\uff1a"),(0,i.kt)("img",{src:"https://i.loli.net/2021/06/30/HhnVkjQDleB2GRS.png",width:"800"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u6709\u53ef\u80fd\u5728\u52a0\u8f7d js \u7684\u65f6\u5019\uff0chtml \u5df2\u7ecf\u52a0\u8f7d\u5b8c\u4e86,\u5982\u4e0b\u56fe\uff0c\u5c31\u4e0d\u5b58\u5728\u5835\u585e DOM \u4e86\u3002")),(0,i.kt)("img",{src:"https://i.loli.net/2021/06/30/KqlVkNiBPmhgzDr.png",width:"800"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u5b58\u5728\u591a\u4e2a async \u7684\u65f6\u5019\uff0c\u5b83\u4eec\u4e4b\u95f4\u7684\u6267\u884c\u987a\u5e8f\u4e0d\u786e\u5b9a\uff0c\u5b8c\u5168\u4f9d\u8d56\u4e8e\u7f51\u7edc\u4f20\u8f93\u7ed3\u679c\uff0c\u8c01\u5148\u5230\u6267\u884c\u8c01\u3002")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5f02\u6b65\u811a\u672c\u4e0d\u5e94\u8be5\u5728\u52a0\u8f7d\u671f\u95f4\u4fee\u6539 DOM\u3002\n\u5f02\u6b65\u811a\u672c\u4fdd\u8bc1\u4f1a\u5728\u9875\u9762\u7684 load \u4e8b\u4ef6\u524d\u6267\u884c\uff0c\u4f46\u53ef\u80fd\u4f1a\u5728 DOMContentLoaded\uff08\u53c2\u89c1\u7b2c 17 \u7ae0\uff09\u4e4b\u524d\u6216\u4e4b\u540e\u3002","[\u6765\u81ea\u7ea2\u5b9d\u4e66]")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/06/29/whkljaHErv38XTi.png",alt:"async"})),(0,i.kt)("h4",{id:"\u5e26\u6709-defer-\u5c5e\u6027\u7684-script-\u6807\u7b7e\u4e0d\u5835\u585e-dom-\u89e3\u6790\u5e76\u884c\u52a0\u8f7d\u5ef6\u8fdf\u6267\u884c\u63a8\u8fdf\u6267\u884c"},"\u5e26\u6709 defer \u5c5e\u6027\u7684 script \u6807\u7b7e\u4e0d\u5835\u585e DOM \u89e3\u6790\uff0c\u5e76\u884c\u52a0\u8f7d\uff0c\u5ef6\u8fdf\u6267\u884c\u3002(\u63a8\u8fdf\u6267\u884c)"),(0,i.kt)("p",null,"defer: \u5e76\u884c\u8bf7\u6c42\uff0c\u7b49 HTML \u52a0\u8f7d\u5b8c\u518d\u6267\u884c\u3002"),(0,i.kt)("p",null,"\u9047\u5230 defer \u6807\u7b7e\u7684 DOM \u6267\u884c\u987a\u5e8f\u56fe\uff1a"),(0,i.kt)("img",{src:"https://i.loli.net/2021/06/30/XjimSPQscuy9eMp.png",width:"800"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u5b58\u5728\u591a\u4e2a defer script \u6807\u7b7e\uff0c\u6d4f\u89c8\u5668\uff08IE9 \u53ca\u4ee5\u4e0b\u9664\u5916\uff09\u4f1a\u4fdd\u8bc1\u5b83\u4eec\u6309\u7167\u5728 HTML \u4e2d\u51fa\u73b0\u7684\u987a\u5e8f\u6267\u884c\uff0c\u4e0d\u4f1a\u7834\u574f JS \u811a\u672c\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb\u3002")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"HTML5 \u89c4\u8303\u8981\u6c42\u811a\u672c\u5e94\u8be5\u6309\u7167\u5b83\u4eec\u51fa\u73b0\u7684\u987a\u5e8f\u6267\u884c\uff0c\u56e0\u6b64\u7b2c\u4e00\u4e2a defer \u7684\u811a\u672c\u4f1a\u5728\u7b2c\u4e8c\u4e2a defer \u7684\u811a\u672c\u4e4b\u524d\u6267\u884c\uff0c\u800c\u4e14\u4e24\u8005\u90fd\u4f1a\u5728 DOMContentLoaded \u4e8b\u4ef6\u4e4b\u524d\u6267\u884c\uff08\u5173\u4e8e\u4e8b\u4ef6\uff0c\u8bf7\u53c2\u8003\u7b2c 17 \u7ae0\uff09\u3002\u4e0d\u8fc7\u5728\u5b9e\u9645\u5f53\u4e2d\uff0c\u63a8\u8fdf\u6267\u884c\u7684\u811a\u672c\u4e0d\u4e00\u5b9a\u603b\u4f1a\u6309\u987a\u5e8f\u6267\u884c\u6216\u8005\u5728 DOMContentLoaded \u4e8b\u4ef6\u4e4b\u524d\u6267\u884c\uff0c\u56e0\u6b64\u6700\u597d\u53ea\u5305\u542b\u4e00\u4e2a\u8fd9\u6837\u7684\u811a\u672c\u3002","[\u6765\u81ea\u7ea2\u5b9d\u4e66]")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/06/29/6eGygP7tkXLOuAx.png",alt:"defer"})),(0,i.kt)("h4",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"script \u6807\u7b7e"),(0,i.kt)("th",{parentName:"tr",align:null},"JS \u6267\u884c\u987a\u5e8f"),(0,i.kt)("th",{parentName:"tr",align:null},"\u662f\u5426\u963b\u585e\u89e3\u6790 HTML"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<script>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5728 HTML \u4e2d\u7684\u987a\u5e8f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u963b\u585e(\u52a0\u8f7d\u4e0e\u6267\u884c\u5747\u963b\u585e)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<script async>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u7f51\u7edc\u8bf7\u6c42\u8fd4\u56de\u987a\u5e8f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u53ef\u80fd\u963b\u585e\uff0c\u4e5f\u53ef\u80fd\u4e0d\u963b\u585e(\u5e76\u884c\u52a0\u8f7d\uff0c\u6267\u884c\u963b\u585e)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"<script defer>")),(0,i.kt)("td",{parentName:"tr",align:null},"\u5728 HTML \u4e2d\u7684\u987a\u5e8f"),(0,i.kt)("td",{parentName:"tr",align:null},"\u4e0d\u963b\u585e(\u5e76\u884c\u52a0\u8f7d\uff0c\u5ef6\u8fdf\u6267\u884c)")))),(0,i.kt)("h3",{id:"\u52a8\u6001\u52a0\u8f7d\u811a\u672c"},"\u52a8\u6001\u52a0\u8f7d\u811a\u672c"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'let script = document.createElement("script");\nscript.src = "lodash.js";\ndocument.body.append(script);\n')),(0,i.kt)("p",null,"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u4ee5\u8fd9\u79cd\u65b9\u5f0f\u521b\u5efa\u7684",(0,i.kt)("inlineCode",{parentName:"p"},"<script>"),"\u5143\u7d20\u662f\u4ee5\u5f02\u6b65\u65b9\u5f0f\u52a0\u8f7d\u7684\uff0c\u76f8\u5f53\u4e8e\u6dfb\u52a0\u4e86 async \u5c5e\u6027\uff0c\u4f46 async \u53ef\u80fd\u5b58\u5728\u517c\u5bb9\u6027\u95ee\u9898\uff0c\u7edf\u4e00\u52a8\u6001\u811a\u672c\u7684\u52a0\u8f7d\u884c\u4e3a\uff0c\u6700\u597d\u6dfb\u52a0",(0,i.kt)("inlineCode",{parentName:"p"},"script.async=false"),"[\u7ea2\u5b9d\u4e66]"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u52a8\u6001\u52a0\u8f7d\u811a\u672c\u83b7\u53d6\u7684\u8d44\u6e90\u5bf9\u6d4f\u89c8\u5668\u9884\u52a0\u8f7d\u5668\u662f\u4e0d\u53ef\u89c1\u7684\u3002\u8fd9\u4f1a\u4e25\u91cd\u5f71\u54cd\u5b83\u4eec\u5728\u8d44\u6e90\u83b7\u53d6\u961f\u5217\u4e2d\u7684\u4f18\u5148\u7ea7\u3002\u6839\u636e\u5e94\u7528\u7a0b\u5e8f\u7684\u5de5\u4f5c\u65b9\u5f0f\u4ee5\u53ca\u600e\u4e48\u4f7f\u7528\uff0c\u8fd9\u79cd\u65b9\u5f0f\u53ef\u80fd\u4f1a\u4e25\u91cd\u5f71\u54cd\u6027\u80fd\u3002\u8981\u60f3\u8ba9\u9884\u52a0\u8f7d\u5668\u77e5\u9053\u8fd9\u4e9b\u52a8\u6001\u8bf7\u6c42\u6587\u4ef6\u7684\u5b58\u5728\uff0c\u53ef\u4ee5\u5728\u6587\u6863\u5934\u90e8\u663e\u5f0f\u58f0\u660e\u5b83\u4eec\uff1a ",(0,i.kt)("inlineCode",{parentName:"p"},'<link rel="preload" src="lodash.js">'),"\u3002")),(0,i.kt)("h3",{id:"\u5185\u5bb9\u9884\u52a0\u8f7drelpreload"},'\u5185\u5bb9\u9884\u52a0\u8f7d(rel="preload")'),(0,i.kt)("p",null,"\u7528\u6237\u5341\u5206\u6709\u53ef\u80fd\u9700\u8981\u5728\u5f53\u524d\u6d4f\u89c8\u4e2d\u52a0\u8f7d\u76ee\u6807\u8d44\u6e90\uff0c\u6240\u4ee5\u6d4f\u89c8\u5668\u5fc5\u987b\u9884\u5148\u83b7\u53d6\u548c\u7f13\u5b58\u5bf9\u5e94\u8d44\u6e90\u3002\u5bf9\u4e8e\u8fd9\u79cd\u5373\u523b\u9700\u8981\u7684\u8d44\u6e90\uff0c\u4f60\u53ef\u80fd\u5e0c\u671b\u5728\u9875\u9762\u52a0\u8f7d\u7684\u751f\u547d\u5468\u671f\u7684\u65e9\u671f\u9636\u6bb5\u5c31\u5f00\u59cb\u83b7\u53d6\uff0c\u5728\u6d4f\u89c8\u5668\u7684\u4e3b\u6e32\u67d3\u673a\u5236\u4ecb\u5165\u524d\u5c31\u8fdb\u884c\u9884\u52a0\u8f7d\u3002\u8fd9\u4e00\u673a\u5236\u4f7f\u5f97\u8d44\u6e90\u53ef\u4ee5\u66f4\u65e9\u7684\u5f97\u5230\u52a0\u8f7d\u5e76\u53ef\u7528\uff0c\u4e14\u66f4\u4e0d\u6613\u963b\u585e\u9875\u9762\u7684\u521d\u6b65\u6e32\u67d3\uff0c\u8fdb\u800c\u63d0\u5347\u6027\u80fd\u3002","[MDN]"),(0,i.kt)("p",null,"\u901a\u8fc7 href \u548c as \u5c5e\u6027\u6307\u5b9a\u9700\u8981\u88ab\u9884\u52a0\u8f7d\u8d44\u6e90\u7684\u8d44\u6e90\u8def\u5f84\u53ca\u5176\u7c7b\u578b.",(0,i.kt)("inlineCode",{parentName:"p"},'<link rel="preload" href="font.woff" as="font">')),(0,i.kt)("h3",{id:"\u884c\u5185\u4ee3\u7801\u4e0e\u5916\u90e8\u6587\u4ef6"},"\u884c\u5185\u4ee3\u7801\u4e0e\u5916\u90e8\u6587\u4ef6"),(0,i.kt)("p",null,"\u6700\u4f73\u5b9e\u8df5\u662f\u5c3d\u53ef\u80fd\u5c06 JavaScript \u4ee3\u7801\u653e\u5728\u5916\u90e8\u6587\u4ef6\u4e2d\uff0c\u539f\u56e0\u5982\u4e0b\uff1a"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"\u53ef\u7ef4\u62a4\u6027\u3002JavaScript \u4ee3\u7801\u5982\u679c\u5206\u6563\u5230\u5f88\u591a HTML \u9875\u9762\uff0c\u4f1a\u5bfc\u81f4\u7ef4\u62a4\u56f0\u96be\u3002\u800c\u7528\u4e00\u4e2a\u76ee\u5f55\u4fdd\u5b58\u6240\u6709 JavaScript \u6587\u4ef6\uff0c\u5219\u66f4\u5bb9\u6613\u7ef4\u62a4\uff0c\u8fd9\u6837\u5f00\u53d1\u8005\u5c31\u53ef\u4ee5\u72ec\u7acb\u4e8e\u4f7f\u7528\u5b83\u4eec\u7684 HTML \u9875\u9762\u6765\u7f16\u8f91\u4ee3\u7801\u3002"),(0,i.kt)("li",{parentName:"ol"},"\u7f13\u5b58\u3002\u6d4f\u89c8\u5668\u4f1a\u6839\u636e\u7279\u5b9a\u7684\u8bbe\u7f6e\u7f13\u5b58\u6240\u6709\u5916\u90e8\u94fe\u63a5\u7684 JavaScript \u6587\u4ef6\uff0c\u8fd9\u610f\u5473\u7740\u5982\u679c\u4e24\u4e2a\u9875\u9762\u90fd\u7528\u5230\u540c\u4e00\u4e2a\u6587\u4ef6\uff0c\u5219\u8be5\u6587\u4ef6\u53ea\u9700\u4e0b\u8f7d\u4e00\u6b21\u3002\u8fd9\u6700\u7ec8\u610f\u5473\u7740\u9875\u9762\u52a0\u8f7d\u66f4\u5feb\u3002")),(0,i.kt)("p",null,"\u5728 SPDY/HTTP2 \u4e2d\uff0c\u9884\u8bf7\u6c42\u7684\u6d88\u8017\u5df2\u663e\u8457\u964d\u4f4e\uff0c\u4ee5\u8f7b\u91cf\u3001\u72ec\u7acb JavaScript \u7ec4\u4ef6\u5f62\u5f0f\u5411\u5ba2\u6237\u7aef\u9001\u8fbe\u811a\u672c\u66f4\u5177\u4f18\u52bf\u3002(\u63a8\u8350\u628a\u6587\u4ef6\u62c6\u5c0f)","[\u7ea2\u5b9d\u4e66]"),(0,i.kt)("h3",{id:"noscript\u5143\u7d20"},(0,i.kt)("inlineCode",{parentName:"h3"},"<noscript>"),"\u5143\u7d20"),(0,i.kt)("p",null,"\u57fa\u672c\u5df2\u7ecf\u6ca1\u6709\u6d4f\u89c8\u5668\u4e0d\u652f\u6301",(0,i.kt)("inlineCode",{parentName:"p"},"<script>"),",\u4f46\u662f\u5bf9\u4e8e\u7981\u7528 JavaScript \u7684\u6d4f\u89c8\u5668\u6765\u8bf4,\u4ecd\u7136\u6709\u7528\u3002"),(0,i.kt)("h3",{id:"\u5176\u4ed6\u7684\u6ce8\u610f\u4e8b\u9879"},"\u5176\u4ed6\u7684\u6ce8\u610f\u4e8b\u9879"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u884c\u5185 JavaScript \u4ee3\u7801\u65f6\uff0c\u8981\u6ce8\u610f\u4ee3\u7801\u4e2d\u4e0d\u80fd\u51fa\u73b0\u5b57\u7b26\u4e32",(0,i.kt)("inlineCode",{parentName:"li"},"<\/script>"),',\u8981\u52a0"',"\\",'"\u8fdb\u884c\u8f6c\u4e49\u3002HTML \u4e2d\u7684\u7279\u6b8a\u5b57\u7b26\u90fd\u8981\u8f6c\u4e49'),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"script"),"\u6807\u7b7e\u53ef\u4ee5\u52a0\u8f7d\u4e0d\u540c\u57df\u7684 js \u6587\u4ef6\uff0c\u4e0d\u53d7\u540c\u6e90\u7b56\u7565\u9650\u5236\uff0c\u53ef\u4ee5\u5b8c\u6210\u8de8\u57df\uff0c\u8fd9\u79cd\u65b9\u5f0f\u88ab\u79f0\u4f5c jsonp\u3002"),(0,i.kt)("li",{parentName:"ul"},"\u901a\u5e38\u5c06\u6240\u6709 JavaScript \u5f15\u7528\u653e\u5728",(0,i.kt)("inlineCode",{parentName:"li"},"<body>"),"\u5143\u7d20\u4e2d\u7684\u9875\u9762\u5185\u5bb9\u540e\u9762\u3002\u9875\u9762\u4f1a\u5728\u5904\u7406 JavaScript \u4ee3\u7801\u4e4b\u524d\u5b8c\u5168\u6e32\u67d3\u9875\u9762\u3002\u7528\u6237\u4f1a\u611f\u89c9\u9875\u9762\u52a0\u8f7d\u66f4\u5feb\u4e86\uff0c\u56e0\u4e3a\u6d4f\u89c8\u5668\u663e\u793a\u7a7a\u767d\u9875\u9762\u7684\u65f6\u95f4\u77ed\u4e86\u3002")),(0,i.kt)("h2",{id:"reference"},"Reference"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script"},(0,i.kt)("inlineCode",{parentName:"a"},"<script>")," - HTML\uff08\u8d85\u6587\u672c\u6807\u8bb0\u8bed\u8a00\uff09 | MDN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6894629999215640583"},"\u56fe\u89e3 script \u6807\u7b7e\u4e2d\u7684 async \u548c defer \u5c5e\u6027 - \u6398\u91d1")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.growingwiththeweb.com/2014/02/async-vs-defer-attributes.html"},"async vs defer attributes - Growing with the Web")),(0,i.kt)("li",{parentName:"ul"},"JavaScript \u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1(\u7b2c\u56db\u7248) - 2 .1",(0,i.kt)("inlineCode",{parentName:"li"},"<script>"),"\u5143\u7d20"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/Security/Subresource_Integrity"},"Subresource Integrity - Web \u5b89\u5168 | MDN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLScriptElement"},"HTMLScriptElement - Web API \u63a5\u53e3\u53c2\u8003 | MDN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Link_types/preload"},"\u94fe\u63a5\u7c7b\u578b\uff1apreload - HTML\uff08\u8d85\u6587\u672c\u6807\u8bb0\u8bed\u8a00\uff09 | MDN")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6969825311361859598"},"script crossorigin \u5c5e\u6027 - \u6398\u91d1"))))}m.isMDXComponent=!0}}]);