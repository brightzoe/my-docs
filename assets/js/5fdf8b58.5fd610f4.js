"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[1343],{9553:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>o,contentTitle:()=>r,default:()=>t,frontMatter:()=>d,metadata:()=>c,toc:()=>p});var l=s(1527),i=s(8672);const d={},r="\u5305\u7ba1\u7406\u5668",c={id:"fe-basic/fe-engineering/package-manager",title:"\u5305\u7ba1\u7406\u5668",description:"npm\uff0cyarn\uff0cpnpm",source:"@site/docs/fe-basic/fe-engineering/package-manager.md",sourceDirName:"fe-basic/fe-engineering",slug:"/fe-basic/fe-engineering/package-manager",permalink:"/docs/fe-basic/fe-engineering/package-manager",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/fe-engineering/package-manager.md",tags:[],version:"current",lastUpdatedAt:1712829706,formattedLastUpdatedAt:"2024\u5e744\u670811\u65e5",frontMatter:{},sidebar:"FE",previous:{title:"\u5fae\u524d\u7aef\u6280\u672f",permalink:"/docs/fe-basic/fe-engineering/micro-frontends"},next:{title:"\u6027\u80fd\u4f18\u5316",permalink:"/docs/fe-basic/fe-engineering/performance-optimization"}},o={},p=[{value:"npm",id:"npm",level:2},{value:"npm scripts \u5de5\u4f5c\u539f\u7406",id:"npm-scripts-\u5de5\u4f5c\u539f\u7406",level:3},{value:"\u6307\u4ee4\u94a9\u5b50",id:"\u6307\u4ee4\u94a9\u5b50",level:4},{value:"npx",id:"npx",level:3},{value:"node_modules \u7ed3\u6784",id:"node_modules-\u7ed3\u6784",level:3},{value:"yarn",id:"yarn",level:2},{value:"npm \u548c yarn \u5b58\u5728\u7684\u95ee\u9898",id:"npm-\u548c-yarn-\u5b58\u5728\u7684\u95ee\u9898",level:2},{value:"phantom dependencies",id:"phantom-dependencies",level:3},{value:"\u4f9d\u8d56\u591a\u6b21\u91cd\u590d\u5b89\u88c5",id:"\u4f9d\u8d56\u591a\u6b21\u91cd\u590d\u5b89\u88c5",level:3},{value:"pnpm",id:"pnpm",level:2},{value:"lockfiles",id:"lockfiles",level:2},{value:"\u9879\u76ee\u4f9d\u8d56\u51fa\u73b0\u95ee\u9898\uff0c\u76f4\u63a5\u5220\u9664 lockfiles",id:"\u9879\u76ee\u4f9d\u8d56\u51fa\u73b0\u95ee\u9898\u76f4\u63a5\u5220\u9664-lockfiles",level:3},{value:"\u4f55\u65f6\u63d0\u4ea4 lock \u6587\u4ef6",id:"\u4f55\u65f6\u63d0\u4ea4-lock-\u6587\u4ef6",level:3},{value:"some questions",id:"some-questions",level:2},{value:"\u955c\u50cf\u5207\u6362",id:"\u955c\u50cf\u5207\u6362",level:3},{value:"\u5207\u6362 node \u7248\u672c",id:"\u5207\u6362-node-\u7248\u672c",level:3},{value:"node \u7684\u8def\u5f84\u5206\u6790\u89c4\u5219",id:"node-\u7684\u8def\u5f84\u5206\u6790\u89c4\u5219",level:3},{value:"\u9879\u76ee\u4e2d\u7684\u5305\u7ea6\u675f\u7ba1\u7406",id:"\u9879\u76ee\u4e2d\u7684\u5305\u7ea6\u675f\u7ba1\u7406",level:3},{value:"dependencies",id:"dependencies",level:3},{value:"Reference",id:"reference",level:2}];function h(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,i.a)(),...n.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(e.h1,{id:"\u5305\u7ba1\u7406\u5668",children:"\u5305\u7ba1\u7406\u5668"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"npm"}),"\uff0c",(0,l.jsx)(e.code,{children:"yarn"}),"\uff0c",(0,l.jsx)(e.code,{children:"pnpm"})]}),"\n",(0,l.jsx)(e.h2,{id:"npm",children:"npm"}),"\n",(0,l.jsxs)(e.p,{children:["npm \u4f7f\u7528\u6700\u591a\u7684\u529f\u80fd\u662f\u4f5c\u4e3a\u4e00\u4e2a\u5728\u7ebf\u7684\u5305\u7ba1\u7406\u5de5\u5177\u3002npm \u672c\u8eab\u4e0d\u80fd\u6267\u884c\u4efb\u4f55\u5305\uff0c\u5bf9\u4e8e\u672c\u5730\u9879\u76ee\u7684\u5305\uff0c\u9700\u8981\u5199\u5165 ",(0,l.jsx)(e.code,{children:"package.json"})," \u6587\u4ef6\uff0c\u7136\u540e\u901a\u8fc7 npm \u89e3\u6790 ",(0,l.jsx)(e.code,{children:"package.json"})," \u6587\u4ef6\uff0c\u89e3\u6790\u5230\u5305\u7684 ",(0,l.jsx)(e.code,{children:".bin"})," \u76ee\u5f55\u4e0b\uff0c\u5728 bash \u4e2d\u6267\u884c\u3002"]}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:".bin"}),"\u6587\u4ef6\u5939\u5b58\u50a8\u4e86\u5f53\u524d\u9879\u76ee\u91cc\u4f7f\u7528\u7684\u6240\u6709\u6a21\u5757\u7684\u8f6f\u94fe\u63a5\uff0c\u8fde\u63a5\u5230\u5bf9\u5e94\u6a21\u5757\u7684\u5b89\u88c5\u76ee\u5f55\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"npm-scripts-\u5de5\u4f5c\u539f\u7406",children:"npm scripts \u5de5\u4f5c\u539f\u7406"}),"\n",(0,l.jsx)(e.p,{children:"\u81ea\u5b9a\u4e49\u811a\u672c\u547d\u4ee4\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5c40\u90e8\u5b89\u88c5\u7684\u5305\uff0c\u76f4\u63a5\u5728 terminal \u4e2d\u4f7f\u7528\u4f1a\u65e0\u6cd5\u627e\u5230\u3002"}),"\n",(0,l.jsx)(e.p,{children:"npm run \u547d\u4ee4\uff0c\u4f1a\u65b0\u5efa\u4e00\u4e2a shell \uff0c\u5c06\u5f53\u524d\u9879\u76ee\u4e2d node_modules/.bin \u7684\u7edd\u5bf9\u8def\u5f84\u52a0\u5165\u73af\u5883\u53d8\u91cf\u4e2d\uff0c\u6267\u884c\u5b8c\u8bed\u53e5\u518d\u5220\u6389\u65b0\u52a0\u7684\u73af\u5883\u53d8\u91cf\u3002"}),"\n",(0,l.jsx)(e.h4,{id:"\u6307\u4ee4\u94a9\u5b50",children:"\u6307\u4ee4\u94a9\u5b50"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u6267\u884c npm scripts \u547d\u4ee4\uff08\u65e0\u8bba\u662f\u81ea\u5b9a\u4e49\u8fd8\u662f\u5185\u7f6e\uff09\u65f6\uff0c\u90fd\u7ecf\u5386\u4e86 pre \u548c post \u4e24\u4e2a\u94a9\u5b50\uff0c\u5728\u8fd9\u4e24\u4e2a\u94a9\u5b50\u4e2d\u53ef\u4ee5\u5b9a\u4e49\u67d0\u4e2a\u547d\u4ee4\u6267\u884c\u524d\u540e\u7684\u547d\u4ee4\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u6bd4\u5982\u5728\u6267\u884c npm run serve \u547d\u4ee4\u65f6\uff0c\u4f1a\u4f9d\u6b21\u6267\u884c npm run preserve\u3001npm run serve\u3001npm run postserve\u3002\u5982\u679c\u6ca1\u6709\u6307\u5b9a\u5219\u4f1a\u8df3\u8fc7\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",children:'"scripts": {\n  "preserve": "xxxxx",\n  "serve": "vue-cli-service serve",\n  "postserve": "xxxxxx"\n}\n\n'})}),"\n",(0,l.jsx)(e.h3,{id:"npx",children:"npx"}),"\n",(0,l.jsx)(e.p,{children:"npm \u5185\u7f6e\u4e86 npx \u7684\u5305\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u3002"}),"\n",(0,l.jsx)(e.p,{children:"npx \u7b97\u662f\u4e00\u4e2a\u7b80\u5355\u7684 cli \u5de5\u5177\uff0c\u53ef\u4ee5\u66f4\u65b9\u4fbf\u5730\u6267\u884c\u4e00\u4e9b npm \u7684\u5305\uff0c\u4e5f\u53ef\u4ee5\u51cf\u5c11\u5bf9\u73af\u5883\u53d8\u91cf\u7684\u6c61\u67d3\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["npx \u539f\u7406\uff1a\u8fd0\u884c\u65f6\u68c0\u67e5",(0,l.jsx)(e.code,{children:"node_modules/.bin"}),"\u8def\u5f84\u4ee5\u53ca\u73af\u5883\u53d8\u91cf\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"npx \u529f\u80fd\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u4e0d\u5b89\u88c5\u5305\u7684\u60c5\u51b5\u4e0b\u76f4\u63a5\u6267\u884c\u4e00\u4e9b\u5305\uff0c\u51cf\u5c11\u5bf9\u78c1\u76d8\u7684\u4f7f\u7528\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4e0b\u8f7d\u5230\u4e34\u65f6\u76ee\u5f55\uff0c\u8fc7\u4e00\u6bb5\u65f6\u95f4\u4f1a\u81ea\u52a8\u6e05\u9664\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u65b9\u4fbf\u5207\u6362 node \u7248\u672c\uff0c\u4e34\u65f6\u6267\u884c\u4e00\u4e9b\u547d\u4ee4\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsxs)(e.p,{children:["\u53ef\u4ee5\u76f4\u63a5\u6267\u884c GitHub \u7684\u6a21\u5757\u6e90\u7801\u3002\uff08\u5fc5\u987b\u662f\u5305\u542b",(0,l.jsx)(e.code,{children:"package.json"}),"\u548c\u5165\u53e3\u7684\u6a21\u5757\u4ee3\u7801\uff09"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"npx https://gist.github.com/zkat/4bc19503fe9e9309e2bfaa2c58074d32\n"})}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"node_modules-\u7ed3\u6784",children:"node_modules \u7ed3\u6784"}),"\n",(0,l.jsx)(e.p,{children:"npm@3 \u4e4b\u524d\uff0cnode_modules \u7ed3\u6784\u662f\u5e72\u51c0\u3001\u53ef\u9884\u6d4b\u7684\u3002node_modules \u4e0b\u7684\u6bcf\u4e2a\u4f9d\u8d56\u90fd\u6709\u81ea\u5df1\u7684 node_modules \u6587\u4ef6\u5939\uff0c\u4e14\u5728 package.json \u4e2d\u6307\u5b9a\u4e86\u6240\u6709\u7684\u4f9d\u8d56\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"node_modules\n\u2514\u2500 foo\n   \u251c\u2500 index.js\n   \u251c\u2500 package.json\n   \u2514\u2500 node_modules\n      \u2514\u2500 bar\n         \u251c\u2500 index.js\n         \u2514\u2500 package.json\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u4ea7\u751f\u7684\u95ee\u9898\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u5d4c\u5957\u5b89\u88c5\uff0cnode_modules \u4f9d\u8d56\u5c42\u7ea7\u8fc7\u6df1\uff0c\u53ef\u80fd\u8d85\u51fa\u64cd\u4f5c\u7cfb\u7edf\u6700\u957f\u8def\u5f84\u9650\u5236\u3002\u4f9d\u8d56\u5c42\u7ea7\u8fc7\u6df1\u4e5f\u5bfc\u81f4\u6587\u4ef6\u67e5\u627e\u590d\u6742\u5ea6\u4e0a\u5347\uff0c\u5f71\u54cd\u6027\u80fd\u3002"}),"\n",(0,l.jsx)(e.li,{children:"\u5f53\u591a\u4e2a\u4e0d\u540c\u7684\u4f9d\u8d56\u4f9d\u8d56\u540c\u4e00\u4e2a\u4f9d\u8d56\u65f6\uff0c\u76f8\u540c\u7684\u4f9d\u8d56\u4f1a\u88ab\u591a\u6b21\u5b89\u88c5\uff0c\u5360\u7528\u5927\u91cf\u7684\u7a7a\u95f4\u8d44\u6e90\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["npm@3+ \u548c yarn \u4e4b\u540e\uff0cnode_modules \u7ed3\u6784\u53d1\u751f\u4e86\u53d8\u5316\uff0c\u53d8\u6210\u4e86\u6241\u5e73\u5316\u7ed3\u6784\uff0c\u4f46\u4ea7\u751f\u4e86",(0,l.jsx)("a",{href:"#phantom-dependencies",children:"\u5e7d\u7075\u4f9d\u8d56"}),"\u7684\u95ee\u9898\u3002"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"node_modules\n\u251c\u2500 foo\n|  \u251c\u2500 index.js\n|  \u2514\u2500 package.json\n\u2514\u2500 bar\n   \u251c\u2500 index.js\n   \u2514\u2500 package.json\n\n"})}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u4e00\u4e2a\u5305\u7684\u591a\u4e2a\u7248\u672c\u5728\u9879\u76ee\u4e2d\u88ab\u4f9d\u8d56\uff0cnode_modules \u4f1a\u63d0\u5347\u8be5\u5305\u7b2c\u4e00\u4e2a\u5b89\u88c5\u7684\u7248\u672c\u5230\u9876\u5c42\uff0c\u800c\u5176\u4ed6\u7684\u7248\u672c\u8fd8\u662f\u6309\u7167\u4e4b\u524d\u7684\u65b9\u5f0f\u4f1a\u88ab\u653e\u5728\u5404\u81ea\u7684\u4f9d\u8d56\u91cc\u3002"}),"\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.img,{src:"https://s2.loli.net/2022/04/16/ZgfXIxde7v6qJTj.png",alt:""})}),"\n",(0,l.jsx)(e.p,{children:"\u8fd9\u79cd\u63d0\u5347\u7b2c\u4e00\u4e2a\u5b89\u88c5\u7684\u5305\u5230\u9876\u5c42\u7684\u65b9\u5f0f\u4f1a\u5bfc\u81f4\u4f9d\u8d56\u7ed3\u6784\u4e0d\u786e\u5b9a\u7684\u95ee\u9898\uff0c\u4e5f\u662f\u540e\u9762 lock \u6587\u4ef6\u8bde\u751f\u7684\u539f\u56e0\u3002"}),"\n",(0,l.jsx)(e.p,{children:"npm@5+\u4e4b\u540e\uff0c\u6dfb\u52a0 lock \u6587\u4ef6\u8bb0\u5f55\u4f9d\u8d56\u6811\u4fe1\u606f\uff0c\u8fdb\u884c\u4f9d\u8d56\u9501\u5b9a\uff0c\u4fdd\u8bc1\u4f9d\u8d56\u5b89\u88c5\u786e\u5b9a\u6027\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"yarn",children:"yarn"}),"\n",(0,l.jsx)(e.p,{children:"yarn \u4e5f\u662f\u5305\u7ba1\u7406\u5668\uff0c\u4e0e npm \u6ca1\u6709\u672c\u8d28\u7684\u533a\u522b\uff0c\u90fd\u662f\u7ba1\u7406\u548c\u5b89\u88c5\u5305\u7684\uff0c\u89e3\u51b3\u4e86\u65e9\u671f npm \u7684\u4e00\u4e9b\u95ee\u9898\u5e76\u63d0\u5347\u4e86\u7ba1\u7406\u5305\u7684\u6548\u7387\u3002\u4f46\u5728\u6700\u65b0\u7248\u7684 npm \u548c yarn \u5b89\u88c5\u901f\u5ea6\u548c\u4f7f\u7528\u4f53\u9a8c\u5e76\u6ca1\u6709\u592a\u5927\u7684\u5dee\u8ddd\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u65e9\u671f\u7684 yarn \u76f8\u5bf9\u4e8e npm \u6bd4\u8f83\u5927\u7684\u4f18\u52bf\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsx)(e.li,{children:"\u91c7\u7528\u7f13\u5b58\u673a\u5236\uff0c\u652f\u6301\u79bb\u7ebf\u5b89\u88c5\uff08npm@5 \u5df2\u652f\u6301\uff09"}),"\n",(0,l.jsx)(e.li,{children:"\u4f9d\u8d56\u6241\u5e73\u5316\u7ed3\u6784\uff08npm@3 \u5df2\u652f\u6301\uff09"}),"\n",(0,l.jsx)(e.li,{children:"\u4f9d\u8d56\u5b89\u88c5\u786e\u5b9a\u6027 yarn.lock\uff08npm@5 \u589e\u52a0\u4e86 package-lock.json\uff09"}),"\n",(0,l.jsx)(e.li,{children:"\u5b89\u88c5\u901f\u5ea6\u5feb\uff0c\u5e76\u884c\u4e0b\u8f7d"}),"\n",(0,l.jsx)(e.li,{children:"\u5b89\u88c5\u5931\u8d25\u81ea\u52a8\u91cd\u8bd5"}),"\n"]}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-bash",children:"yarn add [pkg]\n\nyarn remove [pkg]\n"})}),"\n",(0,l.jsx)(e.h2,{id:"npm-\u548c-yarn-\u5b58\u5728\u7684\u95ee\u9898",children:"npm \u548c yarn \u5b58\u5728\u7684\u95ee\u9898"}),"\n",(0,l.jsx)(e.h3,{id:"phantom-dependencies",children:"phantom dependencies"}),"\n",(0,l.jsxs)(e.p,{children:["phantom dependencies (\u5e7d\u7075\u4f9d\u8d56)\uff1a \u67d0\u4e2a\u5305\u6ca1\u6709\u5728 ",(0,l.jsx)(e.code,{children:"package.json"}),"\u4e2d\u88ab\u4f9d\u8d56\uff0c\u4f46\u7528\u6237\u8fd8\u662f\u53ef\u4ee5\u5f15\u7528\u5230\u8fd9\u4e2a\u5305\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u539f\u56e0\u662f",(0,l.jsx)(e.code,{children:"node_modules"}),"\u7684\u6241\u5e73\u7ed3\u6784\u3002\u5982\u679c\u4f7f\u7528 npm \u6216 yarn \u5b89\u88c5\u9879\u76ee\u4f9d\u8d56\uff0c\u95f4\u63a5\u4f9d\u8d56\uff08\u7b2c\u4e09\u65b9\u5305\u7684\u4f9d\u8d56\uff09\u4f1a\u88ab\u63d0\u5347\u5728",(0,l.jsx)(e.code,{children:"node_modules"}),"\u9876\u5c42\u76ee\u5f55\u4e0b\u3002"]}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://nodejs.org/api/modules.html#loading-from-the-global-folders",children:"nodejs \u7684\u5bfb\u5740\u65b9\u5f0f"})}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u4f9d\u8d56\u591a\u6b21\u91cd\u590d\u5b89\u88c5",children:"\u4f9d\u8d56\u591a\u6b21\u91cd\u590d\u5b89\u88c5"}),"\n",(0,l.jsx)(e.p,{children:"\u65e0\u8bba\u5728 node_modules \u7684\u5d4c\u5957\u7ed3\u6784\uff0c\u6216\u662f\u6539\u8fdb\u540e\u7684\u6241\u5e73\u5316\u7ed3\u6784\uff0c\u5927\u91cf\u7684\u5305\u90fd\u4f1a\u88ab\u91cd\u590d\u5b89\u88c5\u591a\u6b21\uff0c\u5360\u7528\u5927\u91cf\u7684\u7a7a\u95f4\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"pnpm",children:"pnpm"}),"\n",(0,l.jsx)(e.p,{children:"\u4e00\u4e2a\u66f4\u65b0\u7684\u5305\u7ba1\u7406\u5668\uff0c\u4f7f\u7528\u8f6f\u94fe\u4e0e\u5e73\u94fa\u76ee\u5f55\u6784\u5efa\u7684\u5d4c\u5957\u7ed3\u6784\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4e0d\u4f1a\u91cd\u590d\u5b89\u88c5\u4f9d\u8d56\uff1a\u57fa\u4e8e\u5185\u5bb9\u5bfb\u5740\u7684\u5b58\u50a8\uff0c\u6240\u6709\u4f9d\u8d56\u90fd\u4f1a\u5b89\u88c5\u5728\u78c1\u76d8\u4e00\u4e2a\u5355\u72ec\u7684\u76ee\u5f55\u4e0b\uff0c\u5f53\u4f9d\u8d56\u88ab\u5b89\u88c5\u65f6\uff0c\u5176\u4e2d\u7684\u6587\u4ef6\u4f1a\u786c\u94fe\u63a5\u5230\u8fd9\u4e00\u4f4d\u7f6e\uff0c\u4e0d\u4f1a\u5360\u7528\u989d\u5916\u7684\u78c1\u76d8\u7a7a\u95f4\u3002"}),"\n",(0,l.jsx)(e.p,{children:"pnpm \u7684 node_modules \u7ed3\u6784\uff1a"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{children:"node_modules\n\u251c\u2500\u2500 foo -> ./.pnpm/foo@1.0.0/node_modules/foo  //\u8f6f\u94fe\u63a5\uff0c\u7c7b\u4f3c\u4e8e\u5feb\u6377\u65b9\u5f0f\n\u2514\u2500\u2500 .pnpm\n    \u251c\u2500\u2500 bar@1.0.0\n    \u2502   \u2514\u2500\u2500 node_modules\n    \u2502       \u2514\u2500\u2500 bar -> <store>/bar //\u786c\u94fe\u63a5\n    \u2514\u2500\u2500 foo@1.0.0\n        \u2514\u2500\u2500 node_modules\n            \u251c\u2500\u2500 foo -> <store>/foo\n            \u2514\u2500\u2500 bar -> ../../bar@1.0.0/node_modules/bar\n"})}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:".pnpm"})," \u6587\u4ef6\u5939\u4e2d\u4fdd\u5b58\u7740\u6bcf\u4e2a\u5305\u7684\u865a\u62df\u5b58\u50a8\u76ee\u5f55\uff1a\u57fa\u4e8e\u5185\u5bb9\u53ef\u5bfb\u5740\u5b58\u50a8\u7684\u786c\u94fe\u63a5\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u5305\u7684\u4f9d\u8d56\u9879\u4e0e\u4f9d\u8d56\u5305\u7684\u5b9e\u9645\u4f4d\u7f6e\u4f4d\u4e8e\u540c\u4e00\u76ee\u5f55\u7ea7\u522b\uff1a\u5982 ",(0,l.jsx)(e.code,{children:"node_modules/.pnpm/foo@1.0.0/node_modules"})," \u3002\u6240\u6709\u4f9d\u8d56\u90fd\u8f6f\u94fe\u63a5\u5230 ",(0,l.jsx)(e.code,{children:"node_modules/.pnpm/"})," \u4e0b\u5bf9\u5e94\u7684\u76ee\u5f55\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u4f18\u52bf\uff1a"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5305\u5b89\u88c5\u901f\u5ea6\u5feb\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u78c1\u76d8\u7a7a\u95f4\u5229\u7528\u975e\u5e38\u9ad8\u6548\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u4e0d\u4f1a\u91cd\u590d\u5b89\u88c5\u540c\u4e00\u4e2a\u5305\uff0c\u5373\u4f7f\u6709\u4e00\u4e2a\u5305\u7684\u4e0d\u540c\u7248\u672c\uff0cpnpm \u4e5f\u4f1a\u6781\u5927\u7a0b\u5ea6\u5730\u590d\u7528\u4e4b\u524d\u7248\u672c\u7684\u4ee3\u7801\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u652f\u6301 monorepo\u3002"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"pnpm workspace\uff0cyarn workspace\uff0clerna \u7b49\u591a\u79cd monorepo \u7b56\u7565\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u7ee7\u627f\u4e86 npm \u4e0e yarn \u7684\u5176\u4ed6\u4f18\u52bf\uff0c\u6bd4\u5982\u5b89\u88c5\u786e\u5b9a\u6027\u4e0e\u79bb\u7ebf\u6a21\u5f0f\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5b89\u5168\u6027\u9ad8\uff0c\u53ef\u4ee5\u89c4\u907f\u975e\u6cd5\u8bbf\u95ee\u4f9d\u8d56\u7684\u98ce\u9669\uff0c\u6bd4\u5982\u5e7d\u7075\u4f9d\u8d56\u3002"}),"\n"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"\u4e86\u89e3\u66f4\u591a\uff1a"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://www.kochan.io/nodejs/why-should-we-use-pnpm.html",children:"Why should we use pnpm? by @ZoltanKochan"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://pnpm.io/zh/blog/2020/05/27/flat-node-modules-is-not-the-only-way",children:"\u5e73\u94fa\u7684\u7ed3\u6784\u4e0d\u662f node_modules \u7684\u552f\u4e00\u5b9e\u73b0\u65b9\u5f0f | pnpm"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://pnpm.io/zh/symlinked-node-modules-structure",children:"\u57fa\u4e8e\u7b26\u53f7\u94fe\u63a5\u7684 node_modules \u7ed3\u6784 | pnpm"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://segmentfault.com/a/1190000039157365",children:"All in one\uff1a\u9879\u76ee\u7ea7 monorepo \u7b56\u7565\u6700\u4f73\u5b9e\u8df5 - SegmentFault \u601d\u5426"})}),"\n"]}),"\n",(0,l.jsx)(e.h2,{id:"lockfiles",children:"lockfiles"}),"\n",(0,l.jsx)(e.h3,{id:"\u9879\u76ee\u4f9d\u8d56\u51fa\u73b0\u95ee\u9898\u76f4\u63a5\u5220\u9664-lockfiles",children:"\u9879\u76ee\u4f9d\u8d56\u51fa\u73b0\u95ee\u9898\uff0c\u76f4\u63a5\u5220\u9664 lockfiles"}),"\n",(0,l.jsx)(e.p,{children:"\u4e0d\u63a8\u8350\uff01 \u4e0d\u8981\u8f7b\u6613\u5220\u9664 lockfiles \uff0c\u5982\u679c\u539f\u6765\u7684\u4f9d\u8d56\u6709\u4e86\u66f4\u65b0\u7684\u7248\u672c\uff0c\u53ef\u80fd\u5bfc\u81f4\u65e0\u6cd5\u542f\u52a8\u3002\u5220\u9664 node_modules \u7136\u540e\u91cd\u65b0 install \u5373\u53ef\uff0c\u6709\u95ee\u9898\u53ef\u4ee5\u66f4\u65b0\u62a5\u9519\u7684\u5177\u4f53 package\u3002\u6709\u4e9b\u5305\u9700\u8981\u7279\u5b9a\u7684 node \u7248\u672c\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u5207\u6362 node \u7248\u672c\u3002"}),"\n",(0,l.jsx)(e.p,{children:"lockfiles \u4f5c\u7528\uff1a\u786e\u5b9a\u4f9d\u8d56\u7684\u5b89\u88c5\u7ed3\u6784\uff0c\u5728\u4efb\u610f\u7684\u673a\u5668\u4e0a\u90fd\u80fd\u5f97\u5230\u5b8c\u5168\u76f8\u540c\u7684 node_modules \u7ed3\u6784\u3002"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u4efb\u4f55\u65f6\u5019\u90fd\u4e0d\u8981\u76f4\u63a5\u64cd\u4f5c lock \u6587\u4ef6\u3002"}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u4f55\u65f6\u63d0\u4ea4-lock-\u6587\u4ef6",children:"\u4f55\u65f6\u63d0\u4ea4 lock \u6587\u4ef6"}),"\n",(0,l.jsx)(e.p,{children:"\u5f00\u53d1\u4e00\u4e2a\u5e94\u7528\u65f6\uff0c\u5efa\u8bae\u63d0\u4ea4 lock \u6587\u4ef6\uff0c\u4fdd\u8bc1\u6240\u6709\u56e2\u961f\u5f00\u53d1\u8005\u4ee5\u53ca CI \u73af\u8282\u5b89\u88c5\u7684\u4f9d\u8d56\u7248\u672c\u90fd\u4e00\u81f4\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u5f00\u53d1\u4e00\u4e2a npm \u5305\u65f6\uff0c\u5305\u662f\u9700\u8981\u88ab\u5176\u4ed6\u4ed3\u5e93\u4f9d\u8d56\u7684\uff0c\u5982\u679c\u53d1\u5e03\u4e86 lock \u6587\u4ef6\uff0c\u4f9d\u8d56\u5305\u5c31\u4e0d\u80fd\u548c\u5176\u4ed6\u4f9d\u8d56\u5171\u4eab\u540c\u610f\u8303\u56f4\u7684\u4f9d\u8d56\u3002\u662f\u4e0d\u5e94\u8be5\u53d1\u5e03 lock \u6587\u4ef6\u7684\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"some-questions",children:"some questions"}),"\n",(0,l.jsx)(e.h3,{id:"\u955c\u50cf\u5207\u6362",children:"\u955c\u50cf\u5207\u6362"}),"\n",(0,l.jsxs)(e.ol,{children:["\n",(0,l.jsxs)(e.li,{children:[(0,l.jsx)(e.code,{children:"npm config set registry https://registry.npmmirror.com"})," //\u6dd8\u5b9d\u6e90"]}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"npm config set registry https://registry.npmjs.org/"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"yarn config set registry https://registry.npmmirror.com"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.code,{children:"yarn config set registry http://registry.npmjs.org/"})}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["node_mirror: ",(0,l.jsx)(e.a,{href:"https://npmmirror.com/mirrors/node/",children:"https://npmmirror.com/mirrors/node/"})," npm_mirror: ",(0,l.jsx)(e.a,{href:"https://npmmirror.com/mirrors/npm/",children:"https://npmmirror.com/mirrors/npm/"})]}),"\n",(0,l.jsx)(e.h3,{id:"\u5207\u6362-node-\u7248\u672c",children:"\u5207\u6362 node \u7248\u672c"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u591a\u4e2a\u9879\u76ee\u4e4b\u95f4\u5207\u6362\uff0c\u4f1a\u9047\u5230\u4e0d\u540c\u7684\u9879\u76ee\u6240\u9700\u8981\u7684 node \u7248\u672c\u4e0d\u4e00\u81f4\uff0c\u4f1a\u6709\u5207\u6362 node \u7248\u672c\u7684\u9700\u6c42\u3002"}),"\n",(0,l.jsx)(e.p,{children:"linux/Mac OS \u53ef\u4ee5\u4f7f\u7528 n /nvm ,\u4ec5\u9650\u4e86\u89e3\u3002"}),"\n",(0,l.jsxs)(e.p,{children:["\u591a\u5e73\u53f0\u4f7f\u7528\u4e5f\u53ef\u4ee5\u4f7f\u7528 ",(0,l.jsx)(e.a,{href:"https://docs.volta.sh/reference/install",children:"volta"}),"\u3002\u8de8\u5e73\u53f0\uff0c\u636e\u8bf4\u5f88\u597d\u7528\uff0c\u4f46 install \u6ca1\u54cd\u5e94\uff0c\u6709\u7a7a\u518d\u5c1d\u8bd5\u3002"]}),"\n",(0,l.jsxs)(e.p,{children:["\u4e2a\u4eba\u76ee\u524d\u8fd8\u662f\u4f7f\u7528 windows \u6bd4\u8f83\u591a\uff0c\u53ef\u4ee5\u4f7f\u7528 nvm ",(0,l.jsx)(e.a,{href:"https://github.com/coreybutler/nvm-windows",children:"coreybutler/nvm-windows: A node.js version management utility for Windows. Ironically written in Go."}),"\u8fdb\u884c\u7ba1\u7406\u3002\u4f46\u662f\u4f7f\u7528 nvm \u4e4b\u524d\u9700\u8981\u5378\u8f7d\u7535\u8111\u4e0a\u5df2\u6709\u7684\u6240\u6709\u7248\u672c\u7684 node\uff0c\u6709\u70b9\u9ebb\u70e6\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"\u4e5f\u53ef\u4ee5\u4f7f\u7528 npx \u8fdb\u884c node \u7248\u672c\u5207\u6362\u3002"}),"\n",(0,l.jsx)(e.p,{children:"\u9488\u5bf9\u4e00\u4e2a\u9879\u76ee\uff0c\u4e34\u65f6\u4f7f\u7528\u53e6\u4e00\u4e2a\u7248\u672c\u7684 node \uff0c\u5e76\u6267\u884c\u4e00\u4e9b\u547d\u4ee4\u3002"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"npx -p node@16 yarn start"})," // \u4e34\u65f6\u4f7f\u7528 node v16+ \u7684\u7248\u672c\uff0c\u5e76\u542f\u52a8\u9879\u76ee"]}),"\n",(0,l.jsx)(e.h3,{id:"node-\u7684\u8def\u5f84\u5206\u6790\u89c4\u5219",children:"node \u7684\u8def\u5f84\u5206\u6790\u89c4\u5219"}),"\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"require(X)"}),"\u662f\u5982\u4f55\u627e\u5230\u9700\u8981\u7684\u6587\u4ef6\u7684\uff1f"]}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5982\u679c X \u662f\u5185\u7f6e\u6a21\u5757\uff0c\u76f4\u63a5\u8fd4\u56de\u5185\u7f6e\u6a21\u5757"}),"\n"]}),"\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5982\u679c X \u662f\u8def\u5f84\uff0c\u76f4\u63a5\u52a0\u8f7d\u5bf9\u5e94\u8def\u5f84\u7684\u6587\u4ef6"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsxs)(e.li,{children:["\n",(0,l.jsx)(e.p,{children:"\u5728\u5f53\u524d\u6587\u4ef6\u5939\u7684 node_modules \u6587\u4ef6\u5939\u91cc\u9762\u627e\u5230\u540d\u4e3a X \u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u6b64\u6587\u4ef6\u5939\u91cc\u9762\u6709 package.json, \u5219\u52a0\u8f7d main \u5b57\u6bb5\u6307\u5411\u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(e.p,{children:"\u5982\u679c\u6b64\u6587\u4ef6\u5939\u91cc\u9762\u6ca1\u6709 package.json\uff0c\u5219\u52a0\u8f7d\u6b64\u6587\u4ef6\u5939\u91cc\u9762\u7684 index.js \u6587\u4ef6"}),"\n",(0,l.jsx)(e.p,{children:"\u5728\u5f53\u524d\u6587\u4ef6\u5939\u7684 node_modules \u6587\u4ef6\u5939\u91cc\u9762\u627e\u4e0d\u5230\u540d\u4e3a X \u7684\u6587\u4ef6"}),"\n",(0,l.jsx)(e.p,{children:"\u5219\u5f80\u5176\u7236\u6587\u4ef6\u5939\u627e node_modules, \u987a\u7740\u5f80\u4e0a\u627e\uff0c\u50cf\u539f\u578b\u94fe\u7684\u67e5\u627e"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:(0,l.jsx)(e.a,{href:"https://nodejs.org/api/modules.html#all-together",children:"Modules: CommonJS modules | Node.js v18.0.0 Documentation"})}),"\n"]}),"\n",(0,l.jsx)(e.h3,{id:"\u9879\u76ee\u4e2d\u7684\u5305\u7ea6\u675f\u7ba1\u7406",children:"\u9879\u76ee\u4e2d\u7684\u5305\u7ea6\u675f\u7ba1\u7406"}),"\n",(0,l.jsx)(e.p,{children:"\u5f3a\u5236\u7ea6\u675f\u9879\u76ee\u4f7f\u7528\u540c\u4e00\u4e2a\u5305\u7ba1\u7406\u5668\u3002"}),"\n",(0,l.jsx)(e.pre,{children:(0,l.jsx)(e.code,{className:"language-json",metastring:"title='package.json'",children:'{\n  "scripts": {\n    "preinstall": "npx only-allow pnpm" // \u53ea\u5141\u8bb8\u4f7f\u7528 pnpm \u5b89\u88c5\u5305\n  }\n}\n'})}),"\n",(0,l.jsx)(e.h3,{id:"dependencies",children:"dependencies"}),"\n",(0,l.jsx)(e.p,{children:"dependencies\uff1a\u6700\u5e38\u7528\uff0c\u4f9d\u8d56\u4f1a\u88ab\u6700\u7ec8\u6784\u5efa\u5230\u90e8\u7f72\u73af\u5883\u3002"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsxs)(e.p,{children:[(0,l.jsx)(e.code,{children:"npm install --production"}),"\uff1a \u53ea\u5b89\u88c5 dependencies\uff0c\u751f\u4ea7\u73af\u5883\uff08dependencies\uff09\u4e0d\u9700\u8981\u5f00\u53d1\u73af\u5883\uff08devDependencies\uff09\u7684\u4f9d\u8d56\u3002 \u82e5\u662f\u628a\u67d0\u4e2a\u751f\u4ea7\u73af\u5883\u7684\u4f9d\u8d56\u5199\u5230 devDependencies\uff0c\u53d1\u5e03\u4e4b\u540e\u5219\u5f15\u7528\u4e0d\u5230\u8fd9\u4e2a\u4f9d\u8d56\u3002"]}),"\n"]}),"\n",(0,l.jsx)(e.p,{children:"devDependencies\uff1a\u5f00\u53d1\u8fc7\u7a0b\u7684\u4f9d\u8d56\uff0c\u6bd4\u5982 eslint \uff0cprettier\uff0cwebpack\uff0cbabel \u7b49\uff0c\u7ebf\u4e0a\u538b\u7f29\u7684\u4ee3\u7801\u4e0d\u9700\u8981\u3002"}),"\n",(0,l.jsx)(e.p,{children:"peerDependencies\uff1a\u6bd4\u5982\u4e00\u4e9b\u63d2\u4ef6\u7684\u4f9d\u8d56\uff0c\u9700\u8981\u6307\u5b9a\u5b83\u4f9d\u8d56\u7684\u5bbf\u4e3b\u7684\u7248\u672c\u53f7\u3002\u8be5\u63d2\u4ef6\u4e0d\u80fd\u5355\u72ec\u88ab\u4f9d\u8d56\u4f7f\u7528\uff0c\u4f7f\u7528\u7684\u524d\u63d0\u65f6\u5fc5\u987b\u5df2\u7ecf\u6709\u6838\u5fc3\u4f9d\u8d56\u5e93\u3002"}),"\n",(0,l.jsxs)(e.blockquote,{children:["\n",(0,l.jsx)(e.p,{children:"\u6bd4\u5982\u5f00\u53d1\u4e00\u4e2a\u7ec4\u4ef6\u7528\u5230 react \uff0c\u7ec4\u4ef6\u53d1\u5e03\u6253\u5305\u65f6\uff0c\u4e0d\u9700\u8981\u628a react \u6253\u5305\u8fdb\u53bb\uff0c\u5bbf\u4e3b\u9879\u76ee\u5f00\u53d1\u65f6\u9700\u8981\u5f15\u5165 react\uff0c\u901a\u8fc7 peerDependencies \u6821\u9a8c react \u5305\u7248\u672c\u662f\u5426\u7b26\u5408\u8981\u6c42\u3002"}),"\n"]}),"\n",(0,l.jsxs)(e.p,{children:["bundledDependencies\uff1a\u4e0e",(0,l.jsx)(e.code,{children:"npm pack"}),"\u6253\u5305\u547d\u4ee4\u6709\u5173,\u5728 bundledDependencies \u4e2d\u6307\u5b9a\u7684\u4f9d\u8d56\u5305, \u5fc5\u987b\u5148\u5728 dependencies \u548c devDependencies \u58f0\u660e\u8fc7\u3002"]}),"\n",(0,l.jsx)(e.p,{children:"optionalDependencies\uff1a\u53ef\u9009\u4f9d\u8d56\uff0c\u4e0d\u5efa\u8bae\u4f7f\u7528\uff0c\u589e\u52a0\u9879\u76ee\u4e0d\u786e\u5b9a\u6027\u548c\u590d\u6742\u6027\u3002"}),"\n",(0,l.jsx)(e.h2,{id:"reference",children:"Reference"}),"\n",(0,l.jsxs)(e.ul,{children:["\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://juejin.cn/post/6844903870578032647#heading-0",children:"\u524d\u7aef\u5de5\u7a0b\u5316\uff085\uff09\uff1a\u4f60\u6240\u9700\u8981\u7684 npm \u77e5\u8bc6\u50a8\u5907\u90fd\u5728\u8fd9\u4e86 - \u6398\u91d1"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"http://www.ruanyifeng.com/blog/2019/02/npx.html",children:"npx \u4f7f\u7528\u6559\u7a0b - \u962e\u4e00\u5cf0\u7684\u7f51\u7edc\u65e5\u5fd7"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://juejin.cn/post/6886818067913900046#heading-3",children:"\u7b80\u5355\u804a\u804a npx \u548c npm - \u6398\u91d1"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://juejin.cn/post/6932046455733485575#comment",children:"\u5173\u4e8e\u73b0\u4ee3\u5305\u7ba1\u7406\u5668\u7684\u6df1\u5ea6\u601d\u8003\u2014\u2014\u4e3a\u4ec0\u4e48\u73b0\u5728\u6211\u66f4\u63a8\u8350 pnpm \u800c\u4e0d\u662f npm/yarn? - \u6398\u91d1"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://pnpm.io/zh/motivation",children:"\u9879\u76ee\u521d\u8877 | pnpm"})}),"\n",(0,l.jsx)(e.li,{children:(0,l.jsx)(e.a,{href:"https://juejin.cn/post/7043998041786810398",children:"One For All\uff1a\u57fa\u4e8e pnpm + lerna + typescript \u7684\u6700\u4f73\u9879\u76ee\u5b9e\u8df5 - \u7406\u8bba\u7bc7 - \u6398\u91d1"})}),"\n"]})]})}function t(n={}){const{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,l.jsx)(e,{...n,children:(0,l.jsx)(h,{...n})}):h(n)}},8672:(n,e,s)=>{s.d(e,{Z:()=>c,a:()=>r});var l=s(959);const i={},d=l.createContext(i);function r(n){const e=l.useContext(d);return l.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),l.createElement(d.Provider,{value:e},n.children)}}}]);