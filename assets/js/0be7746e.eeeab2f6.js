"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[9449],{4137:function(n,e,t){t.d(e,{Zo:function(){return c},kt:function(){return h}});var i=t(7294);function a(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function r(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(n);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,i)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?r(Object(t),!0).forEach((function(e){a(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,i,a=function(n,e){if(null==n)return{};var t,i,a={},r=Object.keys(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||(a[t]=n[t]);return a}(n,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);for(i=0;i<r.length;i++)t=r[i],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(a[t]=n[t])}return a}var s=i.createContext({}),p=function(n){var e=i.useContext(s),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},c=function(n){var e=p(n.components);return i.createElement(s.Provider,{value:e},n.children)},d={inlineCode:"code",wrapper:function(n){var e=n.children;return i.createElement(i.Fragment,{},e)}},u=i.forwardRef((function(n,e){var t=n.components,a=n.mdxType,r=n.originalType,s=n.parentName,c=o(n,["components","mdxType","originalType","parentName"]),u=p(t),h=a,m=u["".concat(s,".").concat(h)]||u[h]||d[h]||r;return t?i.createElement(m,l(l({ref:e},c),{},{components:t})):i.createElement(m,l({ref:e},c))}));function h(n,e){var t=arguments,a=e&&e.mdxType;if("string"==typeof n||a){var r=t.length,l=new Array(r);l[0]=u;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=n,o.mdxType="string"==typeof n?n:a,l[1]=o;for(var p=2;p<r;p++)l[p]=t[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3410:function(n,e,t){t.r(e),t.d(e,{assets:function(){return c},contentTitle:function(){return s},default:function(){return h},frontMatter:function(){return o},metadata:function(){return p},toc:function(){return d}});var i=t(7462),a=t(3366),r=(t(7294),t(4137)),l=["components"],o={},s="this,call,apply,bind",p={unversionedId:"fe-basic/javascript/basic/this-and-related",id:"fe-basic/javascript/basic/this-and-related",title:"this,call,apply,bind",description:"this",source:"@site/docs/fe-basic/javascript/basic/this-and-related.md",sourceDirName:"fe-basic/javascript/basic",slug:"/fe-basic/javascript/basic/this-and-related",permalink:"/docs/fe-basic/javascript/basic/this-and-related",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/javascript/basic/this-and-related.md",tags:[],version:"current",lastUpdatedAt:1655529387,formattedLastUpdatedAt:"6/18/2022",frontMatter:{},sidebar:"FE",previous:{title:"\u5b9a\u65f6\u5668\uff1a setTimeout \u4e0e setInterval",permalink:"/docs/fe-basic/javascript/basic/settimeout-and-setinterval"},next:{title:"\u4e00\u4e9b\u8bed\u6cd5",permalink:"/docs/fe-basic/javascript/es6/"}},c={},d=[{value:"this",id:"this",level:2},{value:"this \u662f\u4ec0\u4e48",id:"this-\u662f\u4ec0\u4e48",level:3},{value:"this \u7684\u6307\u5411",id:"this-\u7684\u6307\u5411",level:3},{value:"call,apply,bind",id:"callapplybind",level:2},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:3},{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"Reference",id:"reference",level:2}],u={toc:d};function h(n){var e=n.components,t=(0,a.Z)(n,l);return(0,r.kt)("wrapper",(0,i.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"thiscallapplybind"},"this,call,apply,bind"),(0,r.kt)("h2",{id:"this"},"this"),(0,r.kt)("h3",{id:"this-\u662f\u4ec0\u4e48"},"this \u662f\u4ec0\u4e48"),(0,r.kt)("p",null,"\u8c03\u7528\u51fd\u6570\u65f6\uff0c\u89e3\u6790\u5668\u5411\u51fd\u6570\u5185\u90e8\u4f20\u9012\u7684\u4e00\u4e2a\u53c2\u6570\uff0c\u6307\u5411\u51fd\u6570\u6267\u884c\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61\u3002",(0,r.kt)("strong",{parentName:"p"},"this \u53d6\u51b3\u4e8e\u51fd\u6570\u7684\u8c03\u7528\u5f62\u5f0f,"),"\u4e0e\u5728\u54ea\u8c03\u7528,\u5728\u54ea\u5b9a\u4e49\u6ca1\u6709\u5173\u7cfb\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0e\u4f5c\u7528\u57df\u4e0d\u540c\uff0c\u4f5c\u7528\u57df\u53d6\u51b3\u4e8e\u51fd\u6570\u5728\u54ea\u5b9a\u4e49\u3002")),(0,r.kt)("h3",{id:"this-\u7684\u6307\u5411"},"this \u7684\u6307\u5411"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u5bf9\u8c61\u7684\u65b9\u6cd5\u7684\u5f62\u5f0f\u8c03\u7528\u65f6\uff0c\u51fd\u6570\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"this")," \u5c31\u662f\u8c03\u7528\u5b83\u7684\u5bf9\u8c61\u3002(\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"array.length"),")"),(0,r.kt)("li",{parentName:"ul"},"\u4ee5\u666e\u901a\u51fd\u6570\u5f62\u5f0f\u8c03\u7528\u65f6\uff0c\u5728\u6d4f\u89c8\u5668\u4e2d",(0,r.kt)("inlineCode",{parentName:"li"},"this")," \u662f ",(0,r.kt)("inlineCode",{parentName:"li"},"window")),(0,r.kt)("li",{parentName:"ul"},"\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"new")," \u6765\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"this")," \u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"this")," \u5c31\u662f\u90a3\u4e2a\u65b0\u5efa\u7684\u5bf9\u8c61\u3002(\u5982\u6784\u9020\u51fd\u6570)"),(0,r.kt)("li",{parentName:"ul"},"\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"call")," \u548c ",(0,r.kt)("inlineCode",{parentName:"li"},"apply")," \u8c03\u7528\u65f6\uff0c",(0,r.kt)("inlineCode",{parentName:"li"},"this")," \u662f\u6307\u5b9a\u7684\u90a3\u4e2a\u5bf9\u8c61\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u51fd\u6570\u53ef\u4ee5\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"bind()")," \u7ed1\u5b9a ",(0,r.kt)("inlineCode",{parentName:"li"},"this")," \u7684\u6307\u5411\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u7bad\u5934\u51fd\u6570\u4e0d\u4f1a\u521b\u5efa\u81ea\u5df1\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"this"),", \u5b83\u53ea\u4f1a\u7ee7\u627f\u81ea\u5df1\u7684\u4f5c\u7528\u57df\u94fe\u7684\u4e0a\u4e00\u5c42\u4f5c\u7528\u57df\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"this")," \u5bf9\u8c61\u3002")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"this")," \u6c38\u8fdc\u4e0d\u80fd\u88ab\u8d4b\u503c\uff0c\u5373 ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," \u4e0d\u80fd\u5199\u5728\u7b49\u53f7\u5de6\u8fb9\u3002"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"this")," \u6c38\u8fdc\u6307\u5411\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5982\u679c\u6307\u5411\u4e86\u4e00\u4e2a\u539f\u59cb\u6570\u636e\u7c7b\u578b\u4f1a\u5c06\u539f\u59cb\u6570\u636e\u7c7b\u578b\u5305\u88c5\u6210\u5bf9\u8c61\u3002"),(0,r.kt)("p",{parentName:"div"},"this \u7684\u4e22\u5931\u95ee\u9898\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"this")," \u6307\u5411\u8c03\u7528\u7684\u5bf9\u8c61\u4e0e\u51fd\u6570\u58f0\u660e\u7684\u4f4d\u7f6e\u65e0\u5173\uff0c\u53ea\u4e0e\u8c03\u7528\u4f4d\u7f6e\u6709\u5173\uff0c\u5982\u679c\u5728\u8c03\u7528\u4f4d\u7f6e\u8fd8\u4f7f\u7528\u58f0\u660e\u4f4d\u7f6e\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"this")," \u4f1a\u4e22\u5931\uff1b\n\u89e3\u51b3\u65b9\u6cd5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"bind")," \u7ed1\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," \u6216\u8005\u901a\u8fc7\u7bad\u5934\u51fd\u6570\u3002"),(0,r.kt)("p",{parentName:"div"},"\u7bad\u5934\u51fd\u6570\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," \uff0c\u603b\u662f\u7ee7\u627f\u5916\u5c42\u51fd\u6570\u7684\u5bf9\u8c61\uff0c\u5728\u5b9a\u4e49\u65f6\u5c31\u786e\u5b9a\uff0c\u4e0e\u8c03\u7528\u65e0\u5173\u3002"))),(0,r.kt)("p",null,"\u7406\u89e3 this \u7684\u5f88\u591a\u6817\u5b50\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6844903496253177863#heading-0"},"this\u3001apply\u3001call\u3001bind - \u6398\u91d1")),(0,r.kt)("h2",{id:"callapplybind"},"call,apply,bind"),(0,r.kt)("p",null,"call\uff0capply \u7528\u6765\u5728\u51fd\u6570\u8c03\u7528\u65f6\u7ed9\u51fd\u6570\u7ed1\u5b9a this\uff0c\u5e76\u6267\u884c\u8be5\u51fd\u6570\u3002\u4e8c\u8005\u4f5c\u7528\u76f8\u540c\uff0c\u4f20\u53c2\u65b9\u5f0f\u4e0d\u540c\u3002"),(0,r.kt)("p",null,"=> ",(0,r.kt)("inlineCode",{parentName:"p"},"fn.call(obj,xx,xx,xx)")," \u540e\u9762\u662f\u53c2\u6570"),(0,r.kt)("p",null,"=> ",(0,r.kt)("inlineCode",{parentName:"p"},"fn.apply(obj,[xx,xx,xx])")," \u53c2\u6570\u4ee5\u6570\u7ec4\u4f20\u5165"),(0,r.kt)("p",null,"bind\uff1a\u7ed1\u5b9a this \u4ee5\u53ca\u90e8\u5206\u53c2\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\u3002 \u8fd9\u4e2a\u65b0\u51fd\u6570\u7684 this \u88ab\u6307\u5b9a\u4e3a bind() \u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u800c\u5176\u4f59\u53c2\u6570\u5c06\u4f5c\u4e3a\u65b0\u51fd\u6570\u7684\u53c2\u6570\uff0c\u4f9b\u8c03\u7528\u65f6\u4f7f\u7528\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"call,apply \u662f\u76f4\u63a5\u6267\u884c\u8be5\u51fd\u6570\uff0cbind \u662f\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\uff0c\u4e0d\u76f4\u63a5\u6267\u884c\u3002")),(0,r.kt)("h3",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'//call\n//\u4e0d\u4f20\u5165\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u90a3\u4e48\u5728\u6d4f\u89c8\u5668\u9ed8\u8ba4\u4e3a window\n//\u6539\u53d8\u4e86 this \u6307\u5411\uff0c\u8ba9\u65b0\u7684\u5bf9\u8c61\u53ef\u4ee5\u6267\u884c\u8be5\u51fd\u6570\u3002\u90a3\u4e48\u601d\u8def\u662f\u7ed9\u65b0\u7684\u5bf9\u8c61\u6dfb\u52a0\u8fd9\u4e2a\u51fd\u6570\u65b9\u6cd5\uff0c\u7136\u540e\u5728\u6267\u884c\u5b8c\u4ee5\u540e\u5220\u9664\n//// fn.call(obj,xx,xx,xx)=>obj.fn(xx,xx,xx)\nFunction.prototype.myCall = function (context = window) {\n  //obj.fn = fn\n  context.fn = this; //\u628a\u8c03\u7528\u65f6\u7684this(fn) \u6302\u5728\u65b0\u5bf9\u8c61context\u4e0a\n  // \u83b7\u53d6\u5269\u4f59\u53c2\u6570\n  const otherArg = [...arguments].slice(1);\n  // \u5c06\u8fd9\u4e2a\u65b9\u6cd5\u7684\u6267\u884c\u7ed3\u679c\u4f20\u7ed9 result\n  const result = context.fn(...otherArg);\n  // \u5220\u9664\u8fd9\u4e2a\u53d8\u91cf\n  delete context.fn;\n  // \u8fd4\u56de result \u7ed3\u679c\n  return result;\n};\n\n//apply\n//fn.apply(context,[args])=>context.fn(...args)\nFunction.prototype.myApply = function (context = window) {\n  context.fn = this;\n  //\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u6570\u7ec4\n  const args = arguments[1];\n  let res;\n  //\u662f\u5426\u5b58\u5728\u53c2\u6570\uff0c\u5b58\u5728\u5c31\u5c55\u5f00\u5904\u7406\n  if (args) {\n    res = context.fn(...args);\n  } else {\n    res = context.fn();\n  }\n  delete context.fn;\n  return res;\n};\n\n//bind\n//fn.bind(context,...args) \u7ed1\u5b9athis,\u56fa\u5b9a\u90e8\u5206\u53c2\u6570\nFunction.prototype.bind1 = function (context = window) {\n  if (typeof this !== "function") {\n    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");\n  }\n  const _this = this;\n  const args = [...arguments].slice(1); //bind \u7684\u53c2\u6570\n  return function () {\n    return _this.apply(context, [...args, ...arguments]); //arguments=>bind\u8fd4\u56de\u7684\u51fd\u6570\u8c03\u7528\u65f6\u4f20\u5165\u7684\u53c2\u6570\n  };\n};\n//bind \u5b8c\u6574\u7248\n//fn.bind(context,...args)\nFunction.prototype.myBind = function (context = window) {\n  if (typeof this !== "function") {\n    throw new Error("Function.prototype.bind - what is trying to be bound is not callable");\n  }\n  var _this = this;\n  var args = [...arguments].slice(1);\n  // \u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\n  return function F() {\n    // \u56e0\u4e3a\u8fd4\u56de\u4e86\u4e00\u4e2a\u51fd\u6570\uff0c\u6211\u4eec\u53ef\u4ee5 new F()\uff0c\u6240\u4ee5\u9700\u8981\u5224\u65ad\n    if (this instanceof F) {\n      return new _this(...args, ...arguments);\n    }\n    return _this.apply(context, [...args, ...arguments]);\n  };\n};\n')),(0,r.kt)("h2",{id:"\u95ee\u9898"},"\u95ee\u9898"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const zhangsan = {\n  name: "zhangsan",\n  sayHi() {\n    console.log(this); //\u5f53\u524d\u5bf9\u8c61\n  },\n  wait() {\n    setTimeout(function () {\n      console.log(this); //\u6d4f\u89c8\u5668\u4e2d\u4e3awindow\n    });\n  },\n};\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const zhangsan2 = {\n  name: "zhangsan",\n  sayHi() {\n    console.log(this); //\u5f53\u524d\u5bf9\u8c61\n  },\n  wait() {\n    setTimeout(() => {\n      console.log(this); //\u5f53\u524d\u5bf9\u8c61\n    });\n  },\n};\n')),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844903496253177863#heading-2"},"this\u3001apply\u3001call\u3001bind - \u6398\u91d1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://yuchengkai.cn/docs/frontend/#this"},"JS | \u524d\u7aef\u8fdb\u9636\u4e4b\u9053"))))}h.isMDXComponent=!0}}]);