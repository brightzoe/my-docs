"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[9449],{1836:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var i=t(1527),s=t(4744);const c={},l="this,call,apply,bind",r={id:"fe-basic/javascript/basic/this-and-related",title:"this,call,apply,bind",description:"this",source:"@site/docs/fe-basic/javascript/basic/this-and-related.md",sourceDirName:"fe-basic/javascript/basic",slug:"/fe-basic/javascript/basic/this-and-related",permalink:"/docs/fe-basic/javascript/basic/this-and-related",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/javascript/basic/this-and-related.md",tags:[],version:"current",lastUpdatedAt:1703064501,formattedLastUpdatedAt:"2023\u5e7412\u670820\u65e5",frontMatter:{},sidebar:"FE",previous:{title:"\u5b9a\u65f6\u5668\uff1a setTimeout \u4e0e setInterval",permalink:"/docs/fe-basic/javascript/basic/settimeout-and-setinterval"},next:{title:"\u4e00\u4e9b\u8bed\u6cd5",permalink:"/docs/fe-basic/javascript/es6/"}},o={},d=[{value:"this",id:"this",level:2},{value:"this \u662f\u4ec0\u4e48",id:"this-\u662f\u4ec0\u4e48",level:3},{value:"this \u7684\u6307\u5411",id:"this-\u7684\u6307\u5411",level:3},{value:"call,apply,bind",id:"callapplybind",level:2},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:3},{value:"\u95ee\u9898",id:"\u95ee\u9898",level:2},{value:"Reference",id:"reference",level:2}];function a(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"thiscallapplybind",children:"this,call,apply,bind"}),"\n",(0,i.jsx)(e.h2,{id:"this",children:"this"}),"\n",(0,i.jsx)(e.h3,{id:"this-\u662f\u4ec0\u4e48",children:"this \u662f\u4ec0\u4e48"}),"\n",(0,i.jsx)(e.p,{children:"\u8c03\u7528\u51fd\u6570\u65f6\uff0c\u89e3\u6790\u5668\u5411\u51fd\u6570\u5185\u90e8\u4f20\u9012\u7684\u4e00\u4e2a\u53c2\u6570\uff0c\u6307\u5411\u51fd\u6570\u6267\u884c\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61\u3002**this \u53d6\u51b3\u4e8e\u51fd\u6570\u7684\u8c03\u7528\u5f62\u5f0f,**\u4e0e\u5728\u54ea\u8c03\u7528,\u5728\u54ea\u5b9a\u4e49\u6ca1\u6709\u5173\u7cfb\u3002"}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u4e0e\u4f5c\u7528\u57df\u4e0d\u540c\uff0c\u4f5c\u7528\u57df\u53d6\u51b3\u4e8e\u51fd\u6570\u5728\u54ea\u5b9a\u4e49\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h3,{id:"this-\u7684\u6307\u5411",children:"this \u7684\u6307\u5411"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\u4ee5\u5bf9\u8c61\u7684\u65b9\u6cd5\u7684\u5f62\u5f0f\u8c03\u7528\u65f6\uff0c\u51fd\u6570\u7684 ",(0,i.jsx)(e.code,{children:"this"})," \u5c31\u662f\u8c03\u7528\u5b83\u7684\u5bf9\u8c61\u3002(\u5982 ",(0,i.jsx)(e.code,{children:"array.length"}),")"]}),"\n",(0,i.jsxs)(e.li,{children:["\u4ee5\u666e\u901a\u51fd\u6570\u5f62\u5f0f\u8c03\u7528\u65f6\uff0c\u5728\u6d4f\u89c8\u5668\u4e2d",(0,i.jsx)(e.code,{children:"this"})," \u662f ",(0,i.jsx)(e.code,{children:"window"})]}),"\n",(0,i.jsxs)(e.li,{children:["\u7528 ",(0,i.jsx)(e.code,{children:"new"})," \u6765\u8c03\u7528 ",(0,i.jsx)(e.code,{children:"this"})," \u65f6\uff0c",(0,i.jsx)(e.code,{children:"this"})," \u5c31\u662f\u90a3\u4e2a\u65b0\u5efa\u7684\u5bf9\u8c61\u3002(\u5982\u6784\u9020\u51fd\u6570)"]}),"\n",(0,i.jsxs)(e.li,{children:["\u7528 ",(0,i.jsx)(e.code,{children:"call"})," \u548c ",(0,i.jsx)(e.code,{children:"apply"})," \u8c03\u7528\u65f6\uff0c",(0,i.jsx)(e.code,{children:"this"})," \u662f\u6307\u5b9a\u7684\u90a3\u4e2a\u5bf9\u8c61\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u51fd\u6570\u53ef\u4ee5\u7528 ",(0,i.jsx)(e.code,{children:"bind()"})," \u7ed1\u5b9a ",(0,i.jsx)(e.code,{children:"this"})," \u7684\u6307\u5411\u3002"]}),"\n",(0,i.jsxs)(e.li,{children:["\u7bad\u5934\u51fd\u6570\u4e0d\u4f1a\u521b\u5efa\u81ea\u5df1\u7684 ",(0,i.jsx)(e.code,{children:"this"}),", \u5b83\u53ea\u4f1a\u7ee7\u627f\u81ea\u5df1\u7684\u4f5c\u7528\u57df\u94fe\u7684\u4e0a\u4e00\u5c42\u4f5c\u7528\u57df\u7684 ",(0,i.jsx)(e.code,{children:"this"})," \u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(e.admonition,{type:"note",children:[(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"this"})," \u6c38\u8fdc\u4e0d\u80fd\u88ab\u8d4b\u503c\uff0c\u5373 ",(0,i.jsx)(e.code,{children:"this"})," \u4e0d\u80fd\u5199\u5728\u7b49\u53f7\u5de6\u8fb9\u3002"]}),(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"this"})," \u6c38\u8fdc\u6307\u5411\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5982\u679c\u6307\u5411\u4e86\u4e00\u4e2a\u539f\u59cb\u6570\u636e\u7c7b\u578b\u4f1a\u5c06\u539f\u59cb\u6570\u636e\u7c7b\u578b\u5305\u88c5\u6210\u5bf9\u8c61\u3002"]}),(0,i.jsxs)(e.p,{children:["this \u7684\u4e22\u5931\u95ee\u9898\uff1a",(0,i.jsx)(e.code,{children:"this"})," \u6307\u5411\u8c03\u7528\u7684\u5bf9\u8c61\u4e0e\u51fd\u6570\u58f0\u660e\u7684\u4f4d\u7f6e\u65e0\u5173\uff0c\u53ea\u4e0e\u8c03\u7528\u4f4d\u7f6e\u6709\u5173\uff0c\u5982\u679c\u5728\u8c03\u7528\u4f4d\u7f6e\u8fd8\u4f7f\u7528\u58f0\u660e\u4f4d\u7f6e\u7684 ",(0,i.jsx)(e.code,{children:"this"}),"\uff0c",(0,i.jsx)(e.code,{children:"this"})," \u4f1a\u4e22\u5931\uff1b\u89e3\u51b3\u65b9\u6cd5\u901a\u8fc7 ",(0,i.jsx)(e.code,{children:"bind"})," \u7ed1\u5b9a ",(0,i.jsx)(e.code,{children:"this"})," \u6216\u8005\u901a\u8fc7\u7bad\u5934\u51fd\u6570\u3002"]}),(0,i.jsxs)(e.p,{children:["\u7bad\u5934\u51fd\u6570\u7684 ",(0,i.jsx)(e.code,{children:"this"})," \uff0c\u603b\u662f\u7ee7\u627f\u5916\u5c42\u51fd\u6570\u7684\u5bf9\u8c61\uff0c\u5728\u5b9a\u4e49\u65f6\u5c31\u786e\u5b9a\uff0c\u4e0e\u8c03\u7528\u65e0\u5173\u3002 :::"]}),(0,i.jsxs)(e.p,{children:["\u7406\u89e3 this \u7684\u5f88\u591a\u6817\u5b50\uff1a",(0,i.jsx)(e.a,{href:"https://juejin.cn/post/6844903496253177863#heading-0",children:"this\u3001apply\u3001call\u3001bind - \u6398\u91d1"})]}),(0,i.jsx)(e.h2,{id:"callapplybind",children:"call,apply,bind"}),(0,i.jsx)(e.p,{children:"call\uff0capply \u7528\u6765\u5728\u51fd\u6570\u8c03\u7528\u65f6\u7ed9\u51fd\u6570\u7ed1\u5b9a this\uff0c\u5e76\u6267\u884c\u8be5\u51fd\u6570\u3002\u4e8c\u8005\u4f5c\u7528\u76f8\u540c\uff0c\u4f20\u53c2\u65b9\u5f0f\u4e0d\u540c\u3002"}),(0,i.jsxs)(e.p,{children:["=> ",(0,i.jsx)(e.code,{children:"fn.call(obj,xx,xx,xx)"})," \u540e\u9762\u662f\u53c2\u6570"]}),(0,i.jsxs)(e.p,{children:["=> ",(0,i.jsx)(e.code,{children:"fn.apply(obj,[xx,xx,xx])"})," \u53c2\u6570\u4ee5\u6570\u7ec4\u4f20\u5165"]}),(0,i.jsx)(e.p,{children:"bind\uff1a\u7ed1\u5b9a this \u4ee5\u53ca\u90e8\u5206\u53c2\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\u3002 \u8fd9\u4e2a\u65b0\u51fd\u6570\u7684 this \u88ab\u6307\u5b9a\u4e3a bind() \u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u800c\u5176\u4f59\u53c2\u6570\u5c06\u4f5c\u4e3a\u65b0\u51fd\u6570\u7684\u53c2\u6570\uff0c\u4f9b\u8c03\u7528\u65f6\u4f7f\u7528\u3002"}),(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"call,apply \u662f\u76f4\u63a5\u6267\u884c\u8be5\u51fd\u6570\uff0cbind \u662f\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u51fd\u6570\uff0c\u4e0d\u76f4\u63a5\u6267\u884c\u3002"}),"\n"]}),(0,i.jsx)(e.h3,{id:"\u5b9e\u73b0",children:"\u5b9e\u73b0"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"//call\n//\u4e0d\u4f20\u5165\u7b2c\u4e00\u4e2a\u53c2\u6570\uff0c\u90a3\u4e48\u5728\u6d4f\u89c8\u5668\u9ed8\u8ba4\u4e3a window\n//\u6539\u53d8\u4e86 this \u6307\u5411\uff0c\u8ba9\u65b0\u7684\u5bf9\u8c61\u53ef\u4ee5\u6267\u884c\u8be5\u51fd\u6570\u3002\u90a3\u4e48\u601d\u8def\u662f\u7ed9\u65b0\u7684\u5bf9\u8c61\u6dfb\u52a0\u8fd9\u4e2a\u51fd\u6570\u65b9\u6cd5\uff0c\u7136\u540e\u5728\u6267\u884c\u5b8c\u4ee5\u540e\u5220\u9664\n//// fn.call(obj,xx,xx,xx)=>obj.fn(xx,xx,xx)\nFunction.prototype.myCall = function (context = window) {\n  //obj.fn = fn\n  context.fn = this; //\u628a\u8c03\u7528\u65f6\u7684this(fn) \u6302\u5728\u65b0\u5bf9\u8c61context\u4e0a\n  // \u83b7\u53d6\u5269\u4f59\u53c2\u6570\n  const otherArg = [...arguments].slice(1);\n  // \u5c06\u8fd9\u4e2a\u65b9\u6cd5\u7684\u6267\u884c\u7ed3\u679c\u4f20\u7ed9 result\n  const result = context.fn(...otherArg);\n  // \u5220\u9664\u8fd9\u4e2a\u53d8\u91cf\n  delete context.fn;\n  // \u8fd4\u56de result \u7ed3\u679c\n  return result;\n};\n\n//apply\n//fn.apply(context,[args])=>context.fn(...args)\nFunction.prototype.myApply = function (context = window) {\n  context.fn = this;\n  //\u7b2c\u4e8c\u4e2a\u53c2\u6570\u662f\u6570\u7ec4\n  const args = arguments[1];\n  let res;\n  //\u662f\u5426\u5b58\u5728\u53c2\u6570\uff0c\u5b58\u5728\u5c31\u5c55\u5f00\u5904\u7406\n  if (args) {\n    res = context.fn(...args);\n  } else {\n    res = context.fn();\n  }\n  delete context.fn;\n  return res;\n};\n\n//bind\n//fn.bind(context,...args) \u7ed1\u5b9athis,\u56fa\u5b9a\u90e8\u5206\u53c2\u6570\nFunction.prototype.bind1 = function (context = window) {\n  if (typeof this !== 'function') {\n    throw new Error(\n      'Function.prototype.bind - what is trying to be bound is not callable',\n    );\n  }\n  const _this = this;\n  const args = [...arguments].slice(1); //bind \u7684\u53c2\u6570\n  return function () {\n    return _this.apply(context, [...args, ...arguments]); //arguments=>bind\u8fd4\u56de\u7684\u51fd\u6570\u8c03\u7528\u65f6\u4f20\u5165\u7684\u53c2\u6570\n  };\n};\n//bind \u5b8c\u6574\u7248\n//fn.bind(context,...args)\nFunction.prototype.myBind = function (context = window) {\n  if (typeof this !== 'function') {\n    throw new Error(\n      'Function.prototype.bind - what is trying to be bound is not callable',\n    );\n  }\n  var _this = this;\n  var args = [...arguments].slice(1);\n  // \u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\n  return function F() {\n    // \u56e0\u4e3a\u8fd4\u56de\u4e86\u4e00\u4e2a\u51fd\u6570\uff0c\u6211\u4eec\u53ef\u4ee5 new F()\uff0c\u6240\u4ee5\u9700\u8981\u5224\u65ad\n    if (this instanceof F) {\n      return new _this(...args, ...arguments);\n    }\n    return _this.apply(context, [...args, ...arguments]);\n  };\n};\n"})}),(0,i.jsx)(e.h2,{id:"\u95ee\u9898",children:"\u95ee\u9898"}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"const zhangsan = {\n  name: 'zhangsan',\n  sayHi() {\n    console.log(this); //\u5f53\u524d\u5bf9\u8c61\n  },\n  wait() {\n    setTimeout(function () {\n      console.log(this); //\u6d4f\u89c8\u5668\u4e2d\u4e3awindow\n    });\n  },\n};\n"})}),(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"const zhangsan2 = {\n  name: 'zhangsan',\n  sayHi() {\n    console.log(this); //\u5f53\u524d\u5bf9\u8c61\n  },\n  wait() {\n    setTimeout(() => {\n      console.log(this); //\u5f53\u524d\u5bf9\u8c61\n    });\n  },\n};\n"})}),(0,i.jsx)(e.h2,{id:"reference",children:"Reference"}),(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://juejin.cn/post/6844903496253177863#heading-2",children:"this\u3001apply\u3001call\u3001bind - \u6398\u91d1"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://yuchengkai.cn/docs/frontend/#this",children:"JS | \u524d\u7aef\u8fdb\u9636\u4e4b\u9053"})}),"\n"]})]})]})}function h(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(a,{...n})}):a(n)}},4744:(n,e,t)=>{t.d(e,{Z:()=>r,a:()=>l});var i=t(959);const s={},c=i.createContext(s);function l(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:l(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);