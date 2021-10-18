"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[4095],{4137:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return f}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(r),f=o,m=s["".concat(l,".").concat(f)]||s[f]||d[f]||a;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=s;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},8381:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return s}});var n=r(7462),o=r(3366),a=(r(7294),r(4137)),i=["components"],c={},l="\u9632\u6296\u548c\u8282\u6d41",u={unversionedId:"JavaScript/debounceAndThrottle",id:"JavaScript/debounceAndThrottle",isDocsHomePage:!1,title:"\u9632\u6296\u548c\u8282\u6d41",description:"- \u63cf\u8ff0\u9632\u6296\u548c\u8282\u6d41",source:"@site/docs/JavaScript/debounceAndThrottle.md",sourceDirName:"JavaScript",slug:"/JavaScript/debounceAndThrottle",permalink:"/docs/JavaScript/debounceAndThrottle",editUrl:"https://github.com/brightzoe/brightzoe.github.io/docs/JavaScript/debounceAndThrottle.md",tags:[],version:"current",lastUpdatedAt:1634553585,formattedLastUpdatedAt:"10/18/2021",frontMatter:{},sidebar:"JavaScript",previous:{title:"\u524d\u7aef\u6570\u636e\u5b58\u50a8",permalink:"/docs/JavaScript/cachingInBrowser"},next:{title:"dom",permalink:"/docs/JavaScript/dom"}},p=[{value:"\u7406\u89e3",id:"\u7406\u89e3",children:[]}],d={toc:p};function s(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u9632\u6296\u548c\u8282\u6d41"},"\u9632\u6296\u548c\u8282\u6d41"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\u9632\u6296\u548c\u8282\u6d41"),(0,a.kt)("li",{parentName:"ul"},"\u5982\u4f55\u5b9e\u73b0"),(0,a.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u573a\u666f")),(0,a.kt)("h2",{id:"\u7406\u89e3"},"\u7406\u89e3"),(0,a.kt)("p",null,"\u9632\u6296\uff1a\u5728\u4e8b\u4ef6\u88ab\u89e6\u53d1\u7684\u4e00\u6bb5\u65f6\u95f4\u540e\u518d\u6267\u884c\u56de\u8c03\uff0c\u5982\u679c\u5728\u8fd9\u6bb5\u65f6\u95f4\u5185\u53c8\u88ab\u89e6\u53d1\uff0c\u5219\u91cd\u65b0\u8ba1\u65f6\u3002"),(0,a.kt)("p",null,"\u8282\u6d41\uff1a\u5728\u4e00\u4e2a\u5355\u4f4d\u65f6\u95f4\u5185\uff0c\u53ea\u80fd\u89e6\u53d1\u4e00\u6b21\u51fd\u6570\u3002\u5982\u679c\u8fd9\u4e2a\u5355\u4f4d\u65f6\u95f4\u5185\u89e6\u53d1\u591a\u6b21\u51fd\u6570\uff0c\u53ea\u6709\u4e00\u6b21\u751f\u6548\u3002"),(0,a.kt)("p",null,"\u6817\u5b50\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9632\u6296\uff1a\u641c\u7d22\uff0c\u8f93\u5165\u5173\u952e\u8bcd\u641c\u7d22\u3002\u8f93\u5165\u4e86\uff0c\u7136\u540e\u4e00\u6bb5\u65f6\u95f4\u5185(1s)\u6ca1\u6709\u518d\u8f93\u5165\uff0c\u6267\u884c\u76f8\u5e94\u64cd\u4f5c\uff0c\u82e5 1s \u5185\u91cd\u65b0\u8f93\u5165\u4e86\uff0c\u91cd\u65b0\u8ba1\u65f6\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8282\u6d41\uff1a\u9f20\u6807\u4e0d\u65ad\u70b9\u51fb\u89e6\u53d1\uff0cmousedown(\u5355\u4f4d\u65f6\u95f4\u5185\u53ea\u89e6\u53d1\u4e00\u6b21)"))),(0,a.kt)("p",null,"\u4e8c\u8005\u5171\u540c\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u51fd\u6570\u9632\u6296\u548c\u51fd\u6570\u8282\u6d41\u90fd\u662f\u9632\u6b62\u67d0\u4e00\u65f6\u95f4\u9891\u7e41\u89e6\u53d1\uff0c\u4f46\u662f\u8fd9\u4e24\u5144\u5f1f\u4e4b\u95f4\u7684\u539f\u7406\u5374\u4e0d\u4e00\u6837\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u51fd\u6570\u9632\u6296\u662f\u67d0\u4e00\u6bb5\u65f6\u95f4\u5185\u53ea\u6267\u884c\u4e00\u6b21\uff0c\u800c\u51fd\u6570\u8282\u6d41\u662f\u95f4\u9694\u65f6\u95f4\u6267\u884c\u3002")))}s.isMDXComponent=!0}}]);