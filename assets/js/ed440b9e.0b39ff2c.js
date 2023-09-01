"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[4818],{9613:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var n=a(9496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(a),k=r,g=u["".concat(p,".").concat(k)]||u[k]||m[k]||l;return a?n.createElement(g,o(o({ref:t},c),{},{components:a})):n.createElement(g,o({ref:t},c))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},7786:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=a(7366),r=(a(9496),a(9613));const l={},o="\u6d4f\u89c8\u5668\u672c\u5730\u5b58\u50a8",i={unversionedId:"fe-basic/caching-in-browser",id:"fe-basic/caching-in-browser",title:"\u6d4f\u89c8\u5668\u672c\u5730\u5b58\u50a8",description:"\u6570\u636e\u5b58\u50a8\u7684\u7c7b\u578b",source:"@site/docs/fe-basic/caching-in-browser.md",sourceDirName:"fe-basic",slug:"/fe-basic/caching-in-browser",permalink:"/docs/fe-basic/caching-in-browser",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/caching-in-browser.md",tags:[],version:"current",lastUpdatedAt:1693563941,formattedLastUpdatedAt:"2023\u5e749\u67081\u65e5",frontMatter:{},sidebar:"FE",previous:{title:"\u6d4f\u89c8\u5668",permalink:"/docs/fe-basic/browser"},next:{title:"\u5bf9\u8def\u7531\u7684\u7406\u89e3",permalink:"/docs/fe-basic/how-to-understand-router"}},p={},s=[{value:"\u6570\u636e\u5b58\u50a8\u7684\u7c7b\u578b",id:"\u6570\u636e\u5b58\u50a8\u7684\u7c7b\u578b",level:3},{value:"\u4e00\u822c\u4f7f\u7528 webStorage \u5f88\u5c11\u4f7f\u7528 cookie",id:"\u4e00\u822c\u4f7f\u7528-webstorage-\u5f88\u5c11\u4f7f\u7528-cookie",level:3},{value:"\u4f7f\u7528\u672c\u5730\u5b58\u50a8\u9047\u5230\u7684\u95ee\u9898",id:"\u4f7f\u7528\u672c\u5730\u5b58\u50a8\u9047\u5230\u7684\u95ee\u9898",level:3},{value:"\u4f7f\u7528 webStorage \u7684\u6ce8\u610f\u4e8b\u9879",id:"\u4f7f\u7528-webstorage-\u7684\u6ce8\u610f\u4e8b\u9879",level:3},{value:"\u573a\u666f",id:"\u573a\u666f",level:3},{value:"\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u5c01\u88c5\u597d\u7684\u5e93",id:"\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u5c01\u88c5\u597d\u7684\u5e93",level:3},{value:"Reference",id:"reference",level:2}],c={toc:s},u="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u6d4f\u89c8\u5668\u672c\u5730\u5b58\u50a8"},"\u6d4f\u89c8\u5668\u672c\u5730\u5b58\u50a8"),(0,r.kt)("h3",{id:"\u6570\u636e\u5b58\u50a8\u7684\u7c7b\u578b"},"\u6570\u636e\u5b58\u50a8\u7684\u7c7b\u578b"),(0,r.kt)("p",null,"localStorage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5927\u5c0f 5M\uff0c\u6587\u4ef6\u5b58\u50a8\u7ea7\u522b\uff0c\u4e0d\u6e05\u7406\u6d4f\u89c8\u5668\u7f13\u5b58\u4e0d\u6d88\u5931")),(0,r.kt)("p",null,"sessionStorage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5927\u5c0f 5M\uff0c\u5185\u5b58\u7ea7\u522b\uff0c\u4f46\u662f\u5f53\u524d\u6807\u7b7e\u9875\u5173\u95ed\u5219\u4e22\u5931")),(0,r.kt)("p",null,"Cookie"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5927\u5c0f 4kb\uff0c\u524d\u7aef\u53ef\u4ee5\u64cd\u4f5c\uff08\u540e\u7aef\u53ef\u4ee5\u5b9a\u4e49\u4e0d\u53ef\u64cd\u4f5c\u7684\u6570\u636e\uff09\uff0c\u4f46\u662f\u4e00\u822c\u7531\u540e\u7aef\u5b9a\u4e49\uff0c\u5e76\u4e14\u73b0\u5728\u65b0\u7248\u7684\u6d4f\u89c8\u5668\u5728\u9010\u6b65\u7684\u629b\u5f03\u8be5\u529f\u80fd\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u751f\u6210\uff0c\u4ea7\u751f\u539f\u56e0\u662f HTTP \u65e0\u72b6\u6001\uff0ccookie \u7528\u6765\u8bb0\u5f55\u6570\u636e\u72b6\u6001\u3002")),(0,r.kt)("p",null,"IndexedDB"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6700\u5c0f 250M\uff0c\u6587\u4ef6\u7ea7\u522b\uff08\u652f\u6301\u4e8b\u52a1\uff0c\u5c5e\u4e8e websql \u7684\u66ff\u4ee3\u54c1\uff09\uff0c\u9700\u8981\u6e05\u7406\u6d4f\u89c8\u5668\u7f13\u5b58\u624d\u53ef\u4ee5\u3002\u4e00\u822c\u7528\u4e0d\u5230\uff0c\u4e3b\u8981\u662f\u56e0\u4e3a\u6d4f\u89c8\u5668\u4e0d\u505a\u5ba2\u6237\u7aef\u7684\u8bdd\u90a3\u4e48\u5c31\u6ca1\u4ec0\u4e48\u7528\uff0c\u505a\u672c\u5730\u5ba2\u6237\u7aef\u53ef\u4ee5\u7528\uff0c\u6bd4\u5982 electron")),(0,r.kt)("p",null,"\u5185\u5b58\u5b58\u50a8"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5c31\u662f\u53d8\u91cf\u5b58\u50a8\uff0c\u53ef\u4ee5\u8bf4\u662f\u6ca1\u6709\u4e0a\u9650\uff0c\u53d6\u51b3\u4e8e\u4f60\u7684\u5185\u5b58")),(0,r.kt)("h3",{id:"\u4e00\u822c\u4f7f\u7528-webstorage-\u5f88\u5c11\u4f7f\u7528-cookie"},"\u4e00\u822c\u4f7f\u7528 webStorage \u5f88\u5c11\u4f7f\u7528 cookie"),(0,r.kt)("p",null,"\u4f7f\u7528 cookie \u7684\u95ee\u9898\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b58\u653e\u6570\u636e\u592a\u5c11\uff0c4kb\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u6bcf\u6b21\u90fd\u4f1a\u643a\u5e26\u5728 HTTP \u8bf7\u6c42\u5934\uff0c\u4f1a\u4e0e\u670d\u52a1\u7aef\u8fdb\u884c\u4ea4\u4e92\uff0c\u5982\u679c\u53ea\u662f\u4e3a\u4e86\u5b58\u50a8\u672c\u5730\u6570\u636e\uff0c\u4f1a\u9020\u6210\u6027\u80fd\u6d6a\u8d39\u3002")),(0,r.kt)("p",null,"webStorage\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5728\u5ba2\u6237\u7aef\u8fdb\u884c\u4e34\u65f6\u6216\u6c38\u4e45\u6027\u7684\u6570\u636e\u5b58\u50a8\uff0c\u4e0d\u76f4\u63a5\u53c2\u4e0e\u670d\u52a1\u7aef\u901a\u4fe1\u7684\u4ea4\u4e92\uff0c\u80fd\u591f\u907f\u514d\u4e00\u4e9b\u52ab\u6301\u7684\u5b89\u5168\u98ce\u9669\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b58\u50a8\u5bb9\u91cf 5M \uff0c\u6ee1\u8db3\u5927\u591a\u6570\u5e94\u7528\u573a\u666f\uff0c\u4e14\u6bcf\u4e2a\u5b58\u50a8\u6709\u5bf9\u5e94\u7684 key,\u53ef\u4ee5\u72ec\u7acb\u7684\u7ba1\u7406\u5bf9\u5e94\u7684\u6570\u636e\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53ea\u652f\u6301\u5b57\u7b26\u4e32\u7c7b\uff0c\u9700\u8981\u624b\u52a8 JSON.stringify()\u3002"))),(0,r.kt)("h3",{id:"\u4f7f\u7528\u672c\u5730\u5b58\u50a8\u9047\u5230\u7684\u95ee\u9898"},"\u4f7f\u7528\u672c\u5730\u5b58\u50a8\u9047\u5230\u7684\u95ee\u9898"),(0,r.kt)("p",null,"\u76ee\u524d\u5728\u5b9e\u9645\u9879\u76ee\u4e2d\uff0c\u5f88\u5bb9\u6613\u51fa\u73b0\uff0c\u9700\u8981\u5b58\u50a8\u4ec0\u4e48\uff0c\u5c31\u76f4\u63a5\u5b58\u50a8\u5230 localStorage/sessionStorage \u91cc\u3002\u54ea\u91cc\u9700\u8981\u5c31\u6dfb\u52a0\u4e00\u4e2a\uff0c\u968f\u7740\u9879\u76ee\u590d\u6742\u5ea6\u63d0\u5347\uff0c\u5df2\u7ecf\u4e0d\u8bb0\u5f97\u5199\u4e86\u591a\u5c11\u4e2a\u5b58\u50a8\u7684 value,\u4e5f\u5bb9\u6613\u51fa\u73b0\u9876\u6389\u524d\u9762\u8bbe\u7f6e\u7684 key,\u4ece\u800c\u5bfc\u81f4\u4e00\u4e9b bug\u3002\u9879\u76ee\u53d8\u5927\u540e\uff0c\u540e\u671f\u4e0d\u597d\u7ef4\u62a4\u6574\u4f53\u7684\u5b58\u50a8\u72b6\u6001\u3002\u9700\u8981\u7edf\u4e00\u7ba1\u7406\u5b58\u50a8\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u7ed9\u4f7f\u7528\u7684\u672c\u5730\u5b58\u50a8\u6dfb\u52a0\u524d\u7f00\uff0c\u9879\u76ee\u524d\u7f00\u6216\u4f5c\u8005\u7b49\uff0c\u5bf9\u4f7f\u7528\u672c\u5730\u5b58\u50a8\u505a\u4e00\u5c42\u5c01\u88c5\uff0c\u7edf\u4e00\u7ba1\u7406\u672c\u5730\u5b58\u50a8\u3002\u5728 config \u7edf\u4e00\u6ce8\u518c\u9700\u8981\u5b58\u50a8\u7684 key,\u53ea\u6709\u6ce8\u518c\u4e86\u624d\u80fd\u64cd\u4f5c\uff0c\u6ca1\u6ce8\u518c\u7684\u63d0\u9192\u5148\u53bb\u6ce8\u518c\u518d\u8fdb\u884c\u5b58\u53d6\u5220\u7684\u64cd\u4f5c\u3002config \u4e2d\u89c4\u8303\u6240\u6709\u672c\u5730\u5b58\u50a8\u4e2d\u7684\u503c\uff0c\u5206\u522b\u4ee3\u8868\u4ec0\u4e48\u3002"),(0,r.kt)("p",{parentName:"li"},"\u8fd9\u4e2a\u601d\u8def\u4e0d\u9519\uff0c\u6765\u6e90\u4e8e\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://juejin.cn/post/6919376014867070989#heading-0"},"\u9879\u76ee\u4f18\u5316\u2014\u2014localStorage|sessionStorage \u7edf\u4e00\u7ba1\u7406\u65b9\u6848 - \u6398\u91d1")))),(0,r.kt)("h3",{id:"\u4f7f\u7528-webstorage-\u7684\u6ce8\u610f\u4e8b\u9879"},"\u4f7f\u7528 webStorage \u7684\u6ce8\u610f\u4e8b\u9879"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u73af\u5883\u68c0\u67e5 ",(0,r.kt)("inlineCode",{parentName:"p"},"window && window.localStorage && window.sessionStorage"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53ea\u80fd\u5b58\u50a8\u5b57\u7b26\u4e32\u3002\u5b58\u50a8\u4e00\u4e9b\u5f15\u7528\u7c7b\u578b\u7684\u6570\u636e\uff0c\u9700\u8981\u533a\u5206\u662f\u5426\u53ef\u4ee5\u88ab JSON.stringify\u3002\u6bd4\u5982 undefined\uff0cfunction\uff0csymbol \u7b49\u4e0d\u53ef\u7528\u3002")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5b58\u5165\u6570\u636e\u65f6\u53ef\u4ee5\u6dfb\u52a0\u65f6\u95f4\u6233\uff0c\u65b9\u4fbf\u7ef4\u62a4\u548c\u8c03\u8bd5\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n* \u8bbe\u7f6e\u5f53\u524d\n* @param key \u8bbe\u7f6e\u5f53\u524d\u5b58\u50a8key\n* @param value \u8bbe\u7f6e\u5f53\u524d\u5b58\u50a8value\n*/\nsetItem(key: string, value) {\n  if (hasStringify(value)) {//\u80fd\u88ab\u5e8f\u5217\u5316\n    const saveData: StorageSaveFormat = {\n      timestamp: new Date().getTime(),\n      data: value\n    }\n    console.log(saveData, 'saveData')\n    this.readStorage.setItem(key, JSON.stringify(saveData))\n  } else {\n    throwErrorMessage('\u9700\u8981\u5b58\u50a8\u7684data\u4e0d\u652f\u6301JSON.stringify\u65b9\u6cd5\uff0c\u8bf7\u68c0\u67e5\u5f53\u524d\u6570\u636e')\n  }\n}\n\n// \u4f7f\u7528\ncustomStorage.setItem('setItem', [1])\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u8fc7\u671f\u65f6\u95f4\u3002localStorage \u4e0d\u624b\u52a8\u6e05\u9664\u662f\u4e0d\u4f1a\u8fc7\u671f\u7684\uff0c\u4e0a\u9762\u8bbe\u7f6e\u5728\u5b58\u50a8\u65f6\u8bbe\u7f6e\u4e86\u65f6\u95f4\u6233\uff0c\u63a7\u5236\u4e00\u4e2a\u8fc7\u671f\u65f6\u95f4\uff0c\u5728\u8bfb\u53d6\u7684\u65f6\u5019\u6dfb\u52a0\u662f\u5426\u8fc7\u671f\u7684\u5224\u65ad\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n* \u83b7\u53d6\u6570\u636e\n* @param key \u83b7\u53d6\u5f53\u524d\u6570\u636ekey\n* @returns \u5b58\u50a8\u6570\u636e\n*/\ngetItem<T = any>(key: string): T | null {\n  const content: StorageSaveFormat | null = JSON.parse(this.readStorage.getItem(key))\n  if (content?.timestamp && new Date().getTime() - content.timestamp >= this.config.timeout) {\n    this.removeItem(key)\n    return null//(\u2299o\u2299)\uff0c\u5b58\u50a8\u8fc7\u671f\u4e86\n  }\n  return content?.data || null\n}\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u53ef\u4ee5\u76d1\u542c webStorage \u7684\u53d8\u5316"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent"},"https://developer.mozilla.org/en-US/docs/Web/API/StorageEvent")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5c01\u88c5\u4e00\u4e2a\u4fee\u6539\u7684\u65b9\u6cd5.\u628a\u65e7\u7684\u503c\u53d8\u6210\u65b0\u7684\u503c\u3002\u4e0e setItem \u7684\u533a\u522b\u662f\u662f\u4e0d\u662f\u9700\u8981\u65e7\u7684\u503c\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"/**\n* \u4fee\u6539\u5f53\u524d\u5b58\u50a8\u5185\u5bb9\u6570\u636e\n* @param key \u5f53\u524d\u5b58\u50a8key\n* @param onChange \u4fee\u6539\u51fd\u6570\n* @param baseValue \u57fa\u7840\u6570\u636e\n*/\nchangeItem<S = any>(\n  key: string,\n  onChange: (oldValue: S) => S | null, baseValue?: any\n) {\n  const data = this.getItem<S>(key)\n  this.setItem(key, onChange(data || baseValue))\n}\n\n// # \u4f7f\u7528\ncustomStorage.changeItem('key', (oldValue) => {\n    return oldValue + 'newUpdate'\n})\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u6ea2\u51fa\u95ee\u9898\u3002\u4ee5\u4e0b api \u53ef\u4ee5\u83b7\u53d6\u5b58\u50a8\u603b\u91cf\uff0c\u4ee5\u53ca\u4f7f\u7528\u4e86\u591a\u5c11\u3002"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"navigator.storage.estimate().then((estimate) => {\n  console.log(estimate);\n});\n")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u9700\u8981\u5728 https \u4e14\u6d4f\u89c8\u5668\u652f\u6301\u7684\u60c5\u51b5\u4e0b\uff0c\u5b58\u5728\u517c\u5bb9\u6027\u95ee\u9898\u3002 ",(0,r.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/StorageManager"},"https://developer.mozilla.org/zh-CN/docs/Web/API/StorageManager"))))),(0,r.kt)("p",null,"\u5982\u679c\u6fd2\u4e34\u6ea2\u51fa\uff0c\u53ef\u4ee5\u5bf9\u5b58\u50a8\u65f6\u95f4\u6233\u8fdb\u884c\u6392\u5e8f\uff0c\u628a\u65e7\u7684\u6e05\u9664\u6389\u3002"),(0,r.kt)("h3",{id:"\u573a\u666f"},"\u573a\u666f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u641c\u7d22\u5386\u53f2\uff1a\u9891\u7e41\u4fee\u6539 storage \uff0c\u53ef\u4ee5\u4f7f\u7528 changeItem \u65b9\u6cd5\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5927\u91cf\u7684\u8d44\u6e90\u8def\u5f84\uff0c\u5982\u4e00\u5806 emoji \u53ef\u4ee5\u5148\u5b58\u5728 storage\uff0c\u4e0d\u9700\u8981\u6bcf\u6b21\u5237\u65b0\u90fd\u53bb\u8bf7\u6c42\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u8de8\u6807\u7b7e\u901a\u4fe1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u7a97\u53e3\u767b\u51fa\uff0c\u6240\u6709\u7a97\u53e3\u767b\u51fa"),(0,r.kt)("li",{parentName:"ul"},"\u7f16\u8f91\u6570\u636e\uff0c\u6240\u6709\u7a97\u53e3\u6570\u636e\u90fd\u66f4\u65b0")))),(0,r.kt)("h3",{id:"\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u5c01\u88c5\u597d\u7684\u5e93"},"\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e9b\u5c01\u88c5\u597d\u7684\u5e93"),(0,r.kt)("p",null,"\u6bd4\u5982 ",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/store2"},"store2")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6955672622587707428/"},"\u524d\u7aef\u6570\u636e\u7f13\u5b58\uff08\u524d\u7aef\u6570\u636e\u5e93\uff09\u7684\u4e00\u4e9b\u89c1\u89e3\uff0c\u5229\u7528\u5185\u5b58\u5b58\u50a8\u5e2e\u4f60\u4f18\u5316\u63a5\u53e3\u8bf7\u6c42 - \u6398\u91d1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6984908770149138446#heading-13"},"\u3010\u6536\u85cf\u5c31\u4f1a\u3011\u6d4f\u89c8\u5668 WebStorage \u7f13\u5b58\u4f7f\u7528\u6307\u5357 - \u6398\u91d1"))))}m.isMDXComponent=!0}}]);