"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[8488],{7363:(e,n,t)=>{t.d(n,{kt:()=>k});var r=t(959);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),l=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),k=a,g=u["".concat(s,".").concat(k)]||u[k]||m[k]||p;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function k(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=u;var i={};for(var s in n)hasOwnProperty.call(n,s)&&(i[s]=n[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var l=2;l<p;l++)o[l]=t[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},2364:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>p,metadata:()=>i,toc:()=>l});var r=t(1163),a=(t(959),t(7363));const p={},o="pnpm workspace monorepo \u5b9e\u8df5",i={unversionedId:"business/fe-engineering/pnpm-workspace",id:"business/fe-engineering/pnpm-workspace",title:"pnpm workspace monorepo \u5b9e\u8df5",description:"\u4e3a\u4ec0\u4e48\u4f7f\u7528",source:"@site/docs/business/fe-engineering/pnpm-workspace.md",sourceDirName:"business/fe-engineering",slug:"/business/fe-engineering/pnpm-workspace",permalink:"/docs/business/fe-engineering/pnpm-workspace",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/business/fe-engineering/pnpm-workspace.md",tags:[],version:"current",lastUpdatedAt:1691028252,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{},sidebar:"Business",previous:{title:"\u6027\u80fd\u4f18\u5316",permalink:"/docs/business/fe-engineering/performance-optimization"},next:{title:"webpack",permalink:"/docs/business/fe-engineering/webpack"}},s={},l=[{value:"\u4e3a\u4ec0\u4e48\u4f7f\u7528",id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528",level:2},{value:"\u5c06\u539f\u6765\u7684\u9879\u76ee\u8c03\u6574\u81f3 monorepo",id:"\u5c06\u539f\u6765\u7684\u9879\u76ee\u8c03\u6574\u81f3-monorepo",level:2},{value:"Reference",id:"reference",level:2}],c={toc:l},m="wrapper";function u(e){let{components:n,...t}=e;return(0,a.kt)(m,(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"pnpm-workspace-monorepo-\u5b9e\u8df5"},"pnpm workspace monorepo \u5b9e\u8df5"),(0,a.kt)("h2",{id:"\u4e3a\u4ec0\u4e48\u4f7f\u7528"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528"),(0,a.kt)("p",null,"workspace \u5c06 \u4e00\u4e2a\u4ed3\u5e93\u5206\u6210\u4e0d\u540c\u7684\u5de5\u4f5c\u7a7a\u95f4\u3002\u5728\u6839\u76ee\u5f55\u4e0b\u6267\u884c pnpm install \uff0c\u4f1a\u5c06 workspace \u5185\u6240\u6709\u7684\u4f9d\u8d56\u90fd\u4e0b\u8f7d\u5230 node_modules/.pnpm \u76ee\u5f55\u4e0b\uff0c\u800c\u5404\u4e2a\u5b50\u5305\u7684 workspace \u7684\u4f9d\u8d56\uff0c\u5bf9\u5e94\u76ee\u5f55\u4e0b\u5c06\u901a\u8fc7\u8f6f\u94fe\u63a5\u7684\u65b9\u5f0f\u6dfb\u52a0\u3002"),(0,a.kt)("p",null,"\u6240\u6709\u7684\u4f9d\u8d56\u53ea\u4f1a\u4e0b\u8f7d\u4e00\u6b21\uff0c\u4e0b\u8f7d\u5feb\uff0c\u4f53\u79ef\u4e5f\u5c0f\u3002"),(0,a.kt)("p",null,"monorepo \u9002\u7528\u4e8e\u51e0\u4e2a\u9879\u76ee\u4e92\u76f8\u4f9d\u8d56\uff0c\u5171\u540c\u5f00\u53d1\u7684\u573a\u666f\uff0c\u89e3\u51b3\u4e0d\u540c\u9879\u76ee\u4e2d\u4ee3\u7801\u590d\u7528\u7684\u95ee\u9898\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u4e92\u76f8\u4f9d\u8d56\uff0c\u53ef\u4ee5\u5b9e\u65f6\u66f4\u65b0\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u9879\u76ee\u5b89\u88c5\u65f6\u95f4\uff0c\u51cf\u5c11\u7a7a\u95f4\u5360\u7528\uff0c\u76f8\u540c\u7684\u7b2c\u4e09\u65b9\u4f9d\u8d56\u4e0d\u4f1a\u88ab\u591a\u6b21\u5b89\u88c5\u3002")),(0,a.kt)("h2",{id:"\u5c06\u539f\u6765\u7684\u9879\u76ee\u8c03\u6574\u81f3-monorepo"},"\u5c06\u539f\u6765\u7684\u9879\u76ee\u8c03\u6574\u81f3 monorepo"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://github.com/brightzoe/transfer-file"},"brightzoe/transfer-file"))),(0,a.kt)("p",null,"\u7ed3\u6784\u8c03\u6574\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 packages\n\u2502\xa0\xa0 \u251c\u2500\u2500 pkg1\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 pnpm-lock.yaml\n\u2502\xa0\xa0 \u251c\u2500\u2500 pkg2\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u251c\u2500\u2500 package.json\n\u2502\xa0\xa0 \u2502\xa0\xa0 \u2514\u2500\u2500 pnpm-lock.yaml\n\u2502\xa0\xa0 \u2514\u2500\u2500 app\n\u2502\xa0\xa0     \u251c\u2500\u2500 package.json\n\u2502\xa0\xa0     \u2514\u2500\u2500 pnpm-lock.yaml\n\u251c\u2500\u2500 package.json # \u516c\u7528\u4f9d\u8d56\n\u251c\u2500\u2500 pnpm-lock.yaml\n\u2514\u2500\u2500 pnpm-workspace.yaml\n\n")),(0,a.kt)("p",null,"\u6dfb\u52a0",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml"),"\u6587\u4ef6\uff0c\u914d\u7f6e workspace"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:"title='pnpm-workspace.yaml'",title:"'pnpm-workspace.yaml'"},"packages:\n  # root directory\n  - '.'\n  # all packages in subdirs of packages/\n  - 'packages/**'\n  # exclude packages that are inside test/ directories\n  - '!**/test/**' # '!' means exclude\n")),(0,a.kt)("p",null,"\u6267\u884c",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," \u5c06\u4e0b\u8f7d\u6240\u6709\u7684\u4f9d\u8d56\uff0c\u5305\u62ec\u5b50\u5305\u7684\u4f9d\u8d56\u3002"),(0,a.kt)("p",null,"\u5728\u5916\u5c42\u7684 package.json \u914d\u7f6e\u5e38\u7528\u6307\u4ee4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='package.json'",title:"'package.json'"},'// --filter \u662f\u8fc7\u6ee4\u5668\uff0c\u53ef\u4ee5\u8fdb\u884c\u7b5b\u9009\u64cd\u4f5c\n{\n  "scripts": {\n    "dev:server": "cross-env nodemon --icu-data-dir=node_modules/full-icu \'./packages/server/index.js\'",\n    "dev:client": "pnpm run --filter=\\"./packages/client\\" start", //\u6267\u884cclient \u5305\u7684start\u547d\u4ee4\n    "dev": "pnpm run --filter=\\"./packages/*\\" start" //\u6267\u884c\u6240\u6709\u5b50\u5305\u7684start\n  }\n}\n')),(0,a.kt)("p",null,"\u590d\u7528\u540c\u4ed3\u5e93\u4f9d\u8d56\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json",metastring:"title='packages/pkg1/package.json'",title:"'packages/pkg1/package.json'"},'{\n  "dependencies": {\n    "pkg3": "workspace:1.5.1"\n  }\n}\n')),(0,a.kt)("h2",{id:"reference"},"Reference"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://juejin.cn/post/7084582387060834340#heading-3"},"\u57fa\u4e8e pnpm \u642d\u5efa monorepo \u9879\u76ee - \u6398\u91d1")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://mp.weixin.qq.com/s/U8_30S9B0S_SU3jdgUxFGQ"},"\u3010\u5fae\u4fe1\u516c\u4f17\u53f7\uff1acode \u79d8\u5bc6\u82b1\u56ed 2022-04-28 09:37\u3011Monorepo \u7684\u8fc7\u53bb\u3001\u73b0\u5728\u3001\u548c\u672a\u6765"))))}u.isMDXComponent=!0}}]);