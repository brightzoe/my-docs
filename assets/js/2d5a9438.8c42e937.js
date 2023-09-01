"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[9450],{9613:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>k});var l=n(9496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,r=function(e,t){if(null==e)return{};var n,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=l.createContext({}),s=function(e){var t=l.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return l.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},m=l.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,k=c["".concat(p,".").concat(m)]||c[m]||f[m]||a;return n?l.createElement(k,i(i({ref:t},u),{},{components:n})):l.createElement(k,i({ref:t},u))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<a;s++)i[s]=n[s];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6881:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>f,frontMatter:()=>a,metadata:()=>o,toc:()=>s});var l=n(7366),r=(n(9496),n(9613));const a={},i="flex \u5e03\u5c40",o={unversionedId:"fe-basic/css/flex",id:"fe-basic/css/flex",title:"flex \u5e03\u5c40",description:"\u5e38\u7528\u7684\u4e00\u5957\u89c4\u5219\uff1a",source:"@site/docs/fe-basic/css/flex.md",sourceDirName:"fe-basic/css",slug:"/fe-basic/css/flex",permalink:"/docs/fe-basic/css/flex",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/css/flex.md",tags:[],version:"current",lastUpdatedAt:1693563941,formattedLastUpdatedAt:"2023\u5e749\u67081\u65e5",frontMatter:{},sidebar:"FE",previous:{title:"\u5e03\u5c40",permalink:"/docs/fe-basic/css/layout"},next:{title:"\u5b57\u4f53\u8bbe\u7f6e\u4ee5\u53ca\u5b57\u4f53\u4f18\u5316",permalink:"/docs/fe-basic/css/font-and-font-optimization"}},p={},s=[{value:"\u5404\u4e2a\u5c5e\u6027\u89c4\u5219",id:"\u5404\u4e2a\u5c5e\u6027\u89c4\u5219",level:2},{value:"\u9488\u5bf9\u4e8e flex-container \u7684\u5c5e\u6027",id:"\u9488\u5bf9\u4e8e-flex-container-\u7684\u5c5e\u6027",level:3},{value:"\u9488\u5bf9\u4e8e flex-item \u7684\u5c5e\u6027",id:"\u9488\u5bf9\u4e8e-flex-item-\u7684\u5c5e\u6027",level:3},{value:"Reference",id:"reference",level:2}],u={toc:s},c="wrapper";function f(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,l.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flex-\u5e03\u5c40"},"flex \u5e03\u5c40"),(0,r.kt)("p",null,"\u5e38\u7528\u7684\u4e00\u5957\u89c4\u5219\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"display: flex;\nflex-direction: row;\njustify-content: center;\nalign-items: center;\n")),(0,r.kt)("h2",{id:"\u5404\u4e2a\u5c5e\u6027\u89c4\u5219"},"\u5404\u4e2a\u5c5e\u6027\u89c4\u5219"),(0,r.kt)("h3",{id:"\u9488\u5bf9\u4e8e-flex-container-\u7684\u5c5e\u6027"},"\u9488\u5bf9\u4e8e flex-container \u7684\u5c5e\u6027"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"flex-direction"))," \u8bbe\u7f6e\u4e3b\u8f74\u65b9\u5411\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"row"),(0,r.kt)("li",{parentName:"ul"},"column"),(0,r.kt)("li",{parentName:"ul"},"row-reverse"),(0,r.kt)("li",{parentName:"ul"},"column-reverse")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"justify-content"))," \u4e3b\u8f74\u65b9\u5411\u4e0a\u989d\u5916\u7a7a\u95f4\u7684\u5206\u914d\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"flex-start"),(0,r.kt)("li",{parentName:"ul"},"flex-end"),(0,r.kt)("li",{parentName:"ul"},"center"),(0,r.kt)("li",{parentName:"ul"},"space-between"),(0,r.kt)("li",{parentName:"ul"},"space-around"),(0,r.kt)("li",{parentName:"ul"},"space-evenly")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u4e0d\u80fd\u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-grow")," \u4e00\u8d77\u4f7f\u7528\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"align-items"))," \u4fa7\u8f74\u65b9\u5411\u5143\u7d20\u5728",(0,r.kt)("strong",{parentName:"p"},"\u6bcf\u4e2a flex \u884c"),"\u4e2d\u7684\u6446\u653e\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"flex-start"),(0,r.kt)("li",{parentName:"ul"},"flex-end"),(0,r.kt)("li",{parentName:"ul"},"center"),(0,r.kt)("li",{parentName:"ul"},"baseline \u6bcf\u4e00\u884c\u6587\u672c\u57fa\u7ebf\u5bf9\u9f50\u3002"),(0,r.kt)("li",{parentName:"ul"},"stretch \u4ec5\u5b50\u5143\u7d20\u9ad8\u5ea6\u4e3a auto \u65f6\u751f\u6548\u3002")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"align-content"))," \u4fa7\u8f74\u65b9\u5411\u7684\u989d\u5916\u7a7a\u95f4\u5982\u4f55\u5206\u7ed9\u6bcf\u4e00\u4e2a flex \u884c\u3002\uff08\u4e0e",(0,r.kt)("inlineCode",{parentName:"p"},"justify-content"),"\u5bf9\u5e94\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"flex-start"),(0,r.kt)("li",{parentName:"ul"},"flex-end"),(0,r.kt)("li",{parentName:"ul"},"center"),(0,r.kt)("li",{parentName:"ul"},"space-between"),(0,r.kt)("li",{parentName:"ul"},"space-around"),(0,r.kt)("li",{parentName:"ul"},"space-evenly"),(0,r.kt)("li",{parentName:"ul"},"stretch")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u53ea\u9002\u7528\u4e8e\u591a\u884c\u7684 flex-box\uff0c\u4e14 flex-container \u8981\u6709\u9ad8\u5ea6\uff0c\u6709\u591a\u4f59\u7684\u7a7a\u95f4\u3002")),(0,r.kt)("p",null,"\u4e00\u79cd\u7279\u6b8a\u60c5\u51b5 ",(0,r.kt)("a",{parentName:"p",href:"https://codesandbox.io/s/flex-te-shu-qing-kuang-8pkmw?file=/src/App.js"},"https://codesandbox.io/s/flex-te-shu-qing-kuang-8pkmw?file=/src/App.js")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"flex-wrap"))," \u5728\u4e3b\u8f74\u65b9\u5411\u4e0a\u662f\u5426\u6298\u884c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"nowrap"),(0,r.kt)("li",{parentName:"ul"},"wrap"),(0,r.kt)("li",{parentName:"ul"},"wrap-reverse")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"flex-flow"))," ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-direction")," \u4e0e ",(0,r.kt)("inlineCode",{parentName:"p"},"flex-wrap"),"\u7684\u7b80\u5199\u3002 \u6309\u4ec0\u4e48\u65b9\u5411\uff0c\u662f\u5426\u6298\u884c\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"flex-flow: column wrap;"))),(0,r.kt)("h3",{id:"\u9488\u5bf9\u4e8e-flex-item-\u7684\u5c5e\u6027"},"\u9488\u5bf9\u4e8e flex-item \u7684\u5c5e\u6027"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"align-self"))," \u5f53\u524d\u5143\u7d20\u5728\u4fa7\u8f74\u65b9\u5411\u4e0a\u7684\u6446\u653e\uff0c\u7528\u4e8e\u8986\u76d6\u9488\u5bf9\u4e8e\u6240\u6709\u5143\u7d20\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"align-items"),"\u5c5e\u6027\u3002\uff08\u7ed9\u81ea\u5df1\u5f00\u5c0f\u7076\uff0c\u8bbe\u7f6e\u4e2a\u7279\u6b8a\u60c5\u51b5~\uff09"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"auto"),(0,r.kt)("li",{parentName:"ul"},"flex-start"),(0,r.kt)("li",{parentName:"ul"},"flex-end"),(0,r.kt)("li",{parentName:"ul"},"center"),(0,r.kt)("li",{parentName:"ul"},"baseline"),(0,r.kt)("li",{parentName:"ul"},"stretch")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"flex-basis"))),(0,r.kt)("p",null,"\u5728\u5206\u914d\u591a\u4f59\u7a7a\u95f4\u4e4b\u524d\uff0c\u9879\u76ee\u5360\u636e\u7684\u4e3b\u8f74\u7a7a\u95f4\u3002"),(0,r.kt)("p",null,"flex-basis \u4e0d\u4e3a auto\uff0c\u4e3a\u5177\u4f53\u503c\u65f6\uff0cflex-basis \u7684\u4f18\u5148\u7ea7\u6bd4\u5bbd\u9ad8\u7684\u4f18\u5148\u7ea7\u9ad8 (flex-basis:100px; width:200px\uff0c\u524d\u8005\u751f\u6548\uff09"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"flex-grow"))),(0,r.kt)("p",null,"\u4e3b\u8f74\u65b9\u5411\u4e0a\u7684\u6269\u5c55\u7cfb\u6570\uff0c\u76f4\u63a5\u4f7f\u7528\uff0c\u6309\u6bd4\u4f8b\u5206\u5269\u4f59\u7684\u90e8\u5206"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"flex-shink"))),(0,r.kt)("p",null,"\u4e3b\u8f74\u65b9\u5411\u4e0a\u7684\u6536\u7f29\u7cfb\u6570\uff0c\u9700\u8981\u4e0e\u5bbd\u5ea6/\u9ad8\u5ea6\u76f8\u4e58\u3002\u7a7a\u95f4\u4e0d\u8db3\u65f6\u624d\u751f\u6548\uff0c\u8d1f\u503c\u65e0\u6548\u3002\u7f29\u5c0f\u7684\u8ddd\u79bb\u5373\u4e3a\u8be5 item \u6240\u5360\u7684\u6743\u91cd\u6bd4\u4f8b\u4e58\u4ee5\u6574\u4f53\u7684\u7f29\u5c0f\u8ddd\u79bb\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"flex"))),(0,r.kt)("p",null,"\u662f flex-grow, flex-shrink \u548c flex-basis \u7684\u7b80\u5199\uff0c\u9ed8\u8ba4\u503c\u4e3a 0 1 auto\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("inlineCode",{parentName:"strong"},"order"))),(0,r.kt)("p",null,"\u9879\u76ee\u7684\u6392\u5217\u987a\u5e8f\uff0c\u9ed8\u8ba4\u4e3a 0\u3002\u6570\u503c\u8d8a\u5c0f\u8d8a\u524d\u9762\u3002"),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox#%E7%AE%80%E5%86%99%E5%B1%9E%E6%80%A7_flex-flow"},"flex \u5e03\u5c40\u7684\u57fa\u672c\u6982\u5ff5 - CSS\uff08\u5c42\u53e0\u6837\u5f0f\u8868\uff09 | MDN")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.csdn.net/cc18868876837/article/details/88138057"},"align-items \u548c align-content \u7684\u533a\u522b","_","\u7801\u98de","_","CC \u7684\u535a\u5ba2-CSDN \u535a\u5ba2","_","align items"))))}f.isMDXComponent=!0}}]);