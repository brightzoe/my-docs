"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[2738],{4387:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var t=s(1527),r=s(4744);const a={},c="\u53c2\u6570\u4f20\u9012",i={id:"fe-basic/javascript/basic/parameter-passing",title:"\u53c2\u6570\u4f20\u9012",description:"JS \u4e2d\u7684\u53d8\u91cf\u5206\u4e3a\u539f\u59cb\u7c7b\u578b\u548c\u5f15\u7528\u7c7b\u578b\u3002\u8c03\u7528\u53d8\u91cf\uff0c\u8d4b\u503c\uff0c\u539f\u59cb\u7c7b\u578b\u6309\u503c\u8c03\u7528\uff0c\u5f15\u7528\u7c7b\u578b\u6309\u5f15\u7528\u8c03\u7528\u3002 JavaScript \u53c2\u6570\u4f20\u9012\u7684\u6df1\u5165\u7406\u89e3 - \u6398\u91d1",source:"@site/docs/fe-basic/javascript/basic/parameter-passing.md",sourceDirName:"fe-basic/javascript/basic",slug:"/fe-basic/javascript/basic/parameter-passing",permalink:"/docs/fe-basic/javascript/basic/parameter-passing",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/javascript/basic/parameter-passing.md",tags:[],version:"current",lastUpdatedAt:1701221101,formattedLastUpdatedAt:"2023\u5e7411\u670829\u65e5",frontMatter:{},sidebar:"FE",previous:{title:"\u6a21\u5757\u5316",permalink:"/docs/fe-basic/javascript/basic/module"},next:{title:"\u539f\u578b\u548c\u539f\u578b\u94fe",permalink:"/docs/fe-basic/javascript/basic/prototype"}},o={},l=[{value:"Reference",id:"reference",level:2}];function p(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u53c2\u6570\u4f20\u9012",children:"\u53c2\u6570\u4f20\u9012"}),"\n",(0,t.jsxs)(n.p,{children:["JS \u4e2d\u7684\u53d8\u91cf\u5206\u4e3a\u539f\u59cb\u7c7b\u578b\u548c\u5f15\u7528\u7c7b\u578b\u3002\u8c03\u7528\u53d8\u91cf\uff0c\u8d4b\u503c\uff0c\u539f\u59cb\u7c7b\u578b\u6309\u503c\u8c03\u7528\uff0c\u5f15\u7528\u7c7b\u578b\u6309\u5f15\u7528\u8c03\u7528\u3002 ",(0,t.jsx)(n.a,{href:"https://juejin.cn/post/6844903495976386573",children:"JavaScript \u53c2\u6570\u4f20\u9012\u7684\u6df1\u5165\u7406\u89e3 - \u6398\u91d1"})]}),"\n",(0,t.jsxs)(n.p,{children:["JS \u4e2d\u7684",(0,t.jsx)(n.strong,{children:"\u53c2\u6570\u4f20\u9012\u90fd\u662f\u6309\u503c\u4f20\u9012"}),"\uff0c\u4e0d\u53ef\u80fd\u6309\u5f15\u7528\u4f20\u9012\u53c2\u6570\u3002\u5982\u679c\u628a\u5bf9\u8c61\u4f5c\u4e3a\u53c2\u6570\u4f20\u9012\uff0c\u90a3\u4e48\u4f20\u9012\u7684\u503c\u5c31\u662f\u8fd9\u4e2a\u5bf9\u8c61\u7684\u5f15\u7528\u3002\uff08\u5bf9\u5bf9\u8c61\u7684\u5f15\u7528\u4f5c\u4e3a\u4f20\u9012\u7684\u503c\uff0c\u6216\u8005\u8bf4\u4f20\u9012\u7684\u503c\u662f\u8fd9\u4e2a\u5bf9\u8c61\u7684\u5730\u5740\uff09"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"//\u539f\u59cb\u7c7b\u578b\u6309\u503c\u4f20\u9012\nfunction addTen(num) {\n  num += 10;\n  return num;\n}\nlet count = 20;\nlet result = addTen(count);\nconsole.log(count); // 20\uff0c\u6ca1\u6709\u53d8\u5316,\u53ea\u662f\u628a20\u4f20\u9012\u7ed9\u4e86\u51fd\u6570\u53c2\u4e0e\u8fd0\u7b97\uff0c\u5e76\u6ca1\u6709\u6539\u53d8count \u8fd9\u4e2a\u53d8\u91cf\nconsole.log(result); // 30\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-js",children:"//\u5bf9\u8c61\u4e5f\u662f\u6309\u503c\u4f20\u9012\u7684\nfunction setName(obj) {\n  obj.name = 'Nicholas';\n  obj = { name: 'Greg' }; //obj\u6307\u5411\u4e86\u65b0\u5bf9\u8c61\uff0c\u5df2\u7ecf\u4e0d\u6307\u5411person\u4e86\u3002\n  //\u5982\u679c\u662f\u6309\u5bf9person\u7684\u5f15\u7528\u4f20\u9012\uff0c\u8fd9\u91cc\u4e5f\u4f1a\u628aperson\u6539\u4e3a{ name: \"Greg\" }\uff0c\u800c\u8fd9\u91cc\u5b9e\u9645\u662f\u628aperson\u7684\u5f15\u7528\u5f53\u4f5c\u503c\u7ed9\u4e86obj,\u7136\u540e\u628a\u65b0\u7684\u5bf9\u8c61\u7ed9\u4e86obj,\u6254\u4e86person\u7684\u5f15\u7528 \u4e0d\u8981\u4e86\uff0c\u503c\u53d8\u6210\u4e86\u4e00\u4e2a\u65b0\u5bf9\u8c61\u7684\u5f15\u7528\uff0c\u800cperson \u662f\u4e0d\u53d8\u7684\n}\nlet person = { name: 'alan' };\nsetName(person);\nconsole.log(person.name); // \"Nicholas\"\n"})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/40261600",children:"JS \u51fd\u6570\u53c2\u6570\u662f\u6309\u5730\u5740\u4f20\u9012\u8fd8\u662f\u6309\u503c\u4f20\u9012\uff1f - \u77e5\u4e4e"})}),"\n",(0,t.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://weread.qq.com/web/reader/751326d0720befab7514782ke2c32140247e2c420d92577",children:"10.3 \u7406\u89e3\u53c2\u6570 JavaScript \u9ad8\u7ea7\u7a0b\u5e8f\u8bbe\u8ba1\uff08\u7b2c 4 \u7248\uff09-\u9a6c\u7279\xb7\u5f17\u91cc\u65af\u6bd4-\u5fae\u4fe1\u8bfb\u4e66"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://zhuanlan.zhihu.com/p/40261600",children:"JS \u51fd\u6570\u53c2\u6570\u662f\u6309\u5730\u5740\u4f20\u9012\u8fd8\u662f\u6309\u503c\u4f20\u9012\uff1f - \u77e5\u4e4e"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://juejin.cn/post/6844903495976386573",children:"JavaScript \u53c2\u6570\u4f20\u9012\u7684\u6df1\u5165\u7406\u89e3 - \u6398\u91d1"})}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(p,{...e})}):p(e)}},4744:(e,n,s)=>{s.d(n,{Z:()=>i,a:()=>c});var t=s(959);const r={},a=t.createContext(r);function c(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);