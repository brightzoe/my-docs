"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[7082],{8374:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>r,contentTitle:()=>c,default:()=>j,frontMatter:()=>o,metadata:()=>d,toc:()=>t});var i=l(1527),s=l(4744);const o={},c="\u66f4\u597d\u5730\u4f7f\u7528 Chrome DevTools",d={id:"tools/chrome-devtools",title:"\u66f4\u597d\u5730\u4f7f\u7528 Chrome DevTools",description:"\u5b66\u4e60\u6398\u91d1\u5c0f\u518c\uff1a \u4f60\u4e0d\u77e5\u9053\u7684 Chrome \u8c03\u8bd5\u6280\u5de7",source:"@site/docs/tools/chrome-devtools.mdx",sourceDirName:"tools",slug:"/tools/chrome-devtools",permalink:"/docs/tools/chrome-devtools",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/tools/chrome-devtools.mdx",tags:[],version:"current",lastUpdatedAt:1703064501,formattedLastUpdatedAt:"2023\u5e7412\u670820\u65e5",frontMatter:{},sidebar:"Tools",next:{title:"\u8c03\u8bd5\u524d\u7aef\u9879\u76ee",permalink:"/docs/tools/debug-in-project"}},r={},t=[{value:"\u901a\u7528",id:"\u901a\u7528",level:2},{value:"\u5bf9\u6570\u636e\u8fdb\u884c\u590d\u5236\u548c\u4fdd\u5b58",id:"\u5bf9\u6570\u636e\u8fdb\u884c\u590d\u5236\u548c\u4fdd\u5b58",level:3},{value:"debug()",id:"debug",level:3},{value:"monitor \u76d1\u542c\u65b9\u6cd5\u8c03\u7528",id:"monitor-\u76d1\u542c\u65b9\u6cd5\u8c03\u7528",level:3},{value:"monitorEvents(object[, events]) \u76d1\u542c\u4e8b\u4ef6\u8c03\u7528",id:"monitoreventsobject-events-\u76d1\u542c\u4e8b\u4ef6\u8c03\u7528",level:3},{value:"\u5feb\u6377\u952e",id:"\u5feb\u6377\u952e",level:3},{value:"\u4e00\u4e9b\u547d\u4ee4",id:"\u4e00\u4e9b\u547d\u4ee4",level:3},{value:"snippets",id:"snippets",level:3},{value:"Elements \u9762\u677f",id:"elements-\u9762\u677f",level:2},{value:"hide element",id:"hide-element",level:3},{value:"\u62d6\u52a8\u3001\u653e\u7f6e\u5143\u7d20",id:"\u62d6\u52a8\u653e\u7f6e\u5143\u7d20",level:3},{value:"\u540c\u7ea7\u8282\u70b9\u4e0a\u79fb\u6216\u4e0b\u79fb",id:"\u540c\u7ea7\u8282\u70b9\u4e0a\u79fb\u6216\u4e0b\u79fb",level:3},{value:"\u64a4\u9500\u64cd\u4f5c",id:"\u64a4\u9500\u64cd\u4f5c",level:3},{value:"\u5bf9\u5143\u7d20\u7684\u9634\u5f71\u7f16\u8f91",id:"\u5bf9\u5143\u7d20\u7684\u9634\u5f71\u7f16\u8f91",level:3},{value:"\u5bf9\u5143\u7d20\u7684\u989c\u8272\u8fdb\u884c\u7f16\u8f91",id:"\u5bf9\u5143\u7d20\u7684\u989c\u8272\u8fdb\u884c\u7f16\u8f91",level:3},{value:"\u5bf9\u5143\u7d20\u7684\u52a8\u753b\u8fdb\u884c\u7f16\u8f91",id:"\u5bf9\u5143\u7d20\u7684\u52a8\u753b\u8fdb\u884c\u7f16\u8f91",level:3},{value:"\u76d1\u542c\u5bf9 DOM \u5143\u7d20\u7684\u4fee\u6539",id:"\u76d1\u542c\u5bf9-dom-\u5143\u7d20\u7684\u4fee\u6539",level:3},{value:"Console \u9762\u677f",id:"console-\u9762\u677f",level:2},{value:"console \u4e2d\u7684<code>$</code>",id:"console-\u4e2d\u7684",level:3},{value:"console.log",id:"consolelog",level:3},{value:"console \u4e2d\u7684\u5f02\u6b65",id:"console-\u4e2d\u7684\u5f02\u6b65",level:3},{value:"console.dir",id:"consoledir",level:3},{value:"console.table",id:"consoletable",level:3},{value:"\u8ba1\u65f6\u76f8\u5173",id:"\u8ba1\u65f6\u76f8\u5173",level:3},{value:"\u5b9e\u65f6\u8868\u8fbe\u5f0f",id:"\u5b9e\u65f6\u8868\u8fbe\u5f0f",level:3},{value:"Network \u9762\u677f",id:"network-\u9762\u677f",level:2},{value:"\u8c03\u7528\u4fe1\u606f",id:"\u8c03\u7528\u4fe1\u606f",level:3},{value:"\u7b5b\u9009\u8bf7\u6c42",id:"\u7b5b\u9009\u8bf7\u6c42",level:3},{value:"\u81ea\u5b9a\u4e49\u663e\u793a\u7684\u5217",id:"\u81ea\u5b9a\u4e49\u663e\u793a\u7684\u5217",level:3},{value:"\u7981\u7528\u8bf7\u6c42",id:"\u7981\u7528\u8bf7\u6c42",level:3},{value:"\u91cd\u65b0\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42",id:"\u91cd\u65b0\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42",level:3},{value:"Source \u9762\u677f",id:"source-\u9762\u677f",level:2},{value:"\u6761\u4ef6\u65ad\u70b9 Conditional breakpoints",id:"\u6761\u4ef6\u65ad\u70b9-conditional-breakpoints",level:3},{value:"\u8bf7\u6c42\u65ad\u70b9 XHR/fetch breakpoints",id:"\u8bf7\u6c42\u65ad\u70b9-xhrfetch-breakpoints",level:3},{value:"Source \u91cc\u7684 WorkSpace",id:"source-\u91cc\u7684-workspace",level:3},{value:"\u4e00\u4e9b\u5b9e\u9645\u573a\u666f",id:"\u4e00\u4e9b\u5b9e\u9645\u573a\u666f",level:2},{value:"Reference",id:"reference",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u66f4\u597d\u5730\u4f7f\u7528-chrome-devtools",children:"\u66f4\u597d\u5730\u4f7f\u7528 Chrome DevTools"}),"\n",(0,i.jsxs)(n.p,{children:["\u5b66\u4e60\u6398\u91d1\u5c0f\u518c\uff1a ",(0,i.jsx)(n.a,{href:"https://juejin.cn/book/6844733783166418958/section/6844733783187390477",children:"\u4f60\u4e0d\u77e5\u9053\u7684 Chrome \u8c03\u8bd5\u6280\u5de7"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u901a\u7528",children:"\u901a\u7528"}),"\n",(0,i.jsx)(n.h3,{id:"\u5bf9\u6570\u636e\u8fdb\u884c\u590d\u5236\u548c\u4fdd\u5b58",children:"\u5bf9\u6570\u636e\u8fdb\u884c\u590d\u5236\u548c\u4fdd\u5b58"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"copy(a)"}),"\u8fd9\u6837\u5c31\u53ef\u4ee5\u590d\u5236\u5230\u526a\u8d34\u677f\u4e0a\u5566,\u53ef\u4ee5 copy \u4efb\u4f55\u53ef\u4ee5\u62ff\u5230\u7684\u8d44\u6e90\u3002\u4e0d\u77e5\u9053\u8fd9\u79cd\u65b9\u5f0f\u7684\u65f6\u5019\uff0c\u590d\u5236\u4e00\u4e2a\u5bf9\u8c61\u7684\u65b9\u6cd5\u53ef\u592a\u8822\u4e86= = ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/09/26/ukqnwjolXrTbQx7.gif",alt:""})]}),"\n",(0,i.jsx)(n.h3,{id:"debug",children:"debug()"}),"\n",(0,i.jsxs)(n.p,{children:["\u60f3\u8c03\u8bd5\u4e00\u4e2a\u65b9\u6cd5\u53ef\u4ee5\u4f7f\u7528 ",(0,i.jsx)(n.code,{children:"debug(add)"}),",\u5f53\u518d\u6b21\u8c03\u7528\u8be5\u65b9\u6cd5\uff0c\u6bd4\u5982\uff1a",(0,i.jsx)(n.code,{children:"add(1,2)"}),"\uff0c\u5c31\u53ef\u4ee5\u8fdb\u5165\u8c03\u8bd5\u9762\u677f\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"monitor-\u76d1\u542c\u65b9\u6cd5\u8c03\u7528",children:"monitor \u76d1\u542c\u65b9\u6cd5\u8c03\u7528"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"monitor(add)"}),",\u76d1\u542c\u4e00\u4e2a\u65b9\u6cd5\u7684\u6267\u884c\uff1a\u662f\u5426\u88ab\u8c03\u7528\uff0c\u5165\u53c2\u662f\u4ec0\u4e48"]}),"\n",(0,i.jsx)(n.h3,{id:"monitoreventsobject-events-\u76d1\u542c\u4e8b\u4ef6\u8c03\u7528",children:"monitorEvents(object[, events]) \u76d1\u542c\u4e8b\u4ef6\u8c03\u7528"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:'monitorEvents(window, "resize");'})}),"\n",(0,i.jsx)(n.h3,{id:"\u5feb\u6377\u952e",children:"\u5feb\u6377\u952e"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Ctrl + 1/2/3 \u5207\u6362\u4e0d\u540c devtools \u9762\u677f"}),"\n",(0,i.jsx)(n.li,{children:"Ctrl + [/] \u5207\u6362\u4e0d\u540c devtools \u9762\u677f"}),"\n",(0,i.jsx)(n.li,{children:"F1 \u6253\u5f00\u8bbe\u7f6e"}),"\n",(0,i.jsx)(n.li,{children:"Ctrl + Shift + P \u8f93\u5165\u547d\u4ee4"}),"\n",(0,i.jsx)(n.li,{children:"Ctrl + P \u5bfb\u627e\u6587\u4ef6"}),"\n",(0,i.jsx)(n.li,{children:"Esc \u5728\u4efb\u4f55\u4e00\u4e2a\u9762\u677f\u90fd\u53ef\u4ee5\u6253\u5f00\u4e00\u4e2a Drawer ,\u8c03\u51fa\u4e00\u4e2a Console \u62bd\u5c49"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"\u4e00\u4e9b\u547d\u4ee4",children:"\u4e00\u4e9b\u547d\u4ee4"}),"\n",(0,i.jsx)(n.p,{children:"\u9996\u5148\u8981\u901a\u8fc7 Ctrl +Shift + P \u6253\u5f00\u547d\u4ee4\u884c\u7a97\u53e3"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["screenShot \u622a\u56fe","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Capture area screenshot: \u9009\u62e9\u4e00\u4e2a\u77e9\u5f62\u533a\u57df\u5e76\u622a\u56fe"}),"\n",(0,i.jsx)(n.li,{children:"Capture full size screenshot: \u6574\u4e2a\u7f51\u9875\u622a\u56fe"}),"\n",(0,i.jsxs)(n.li,{children:["Capture node screenshot: \u5355\u72ec\u622a\u56fe",(0,i.jsx)(n.strong,{children:"\u67d0\u4e2a\u8282\u70b9"}),"\u533a\u57df\uff0c\u9700\u8981\u5148\u53bb Elements \u9762\u677f\u9009\u4e2d\u8282\u70b9\u518d\u6267\u884c\u6307\u4ee4\u3002"]}),"\n",(0,i.jsx)(n.li,{children:"Capture screenshot: \u622a\u56fe\u5f53\u524d\u7f51\u9875\u53ef\u89c6\u533a\u57df"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["Drawer \u53ef\u4ee5\u76f4\u63a5\u6309 Esc \u6253\u5f00\uff0c\u4e5f\u53ef\u901a\u8fc7\u547d\u4ee4\u884c\u7a97\u53e3\u4f7f\u7528","\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Animations"}),"\n",(0,i.jsx)(n.li,{children:"Changes"}),"\n",(0,i.jsx)(n.li,{children:"Console : diff \uff0c\u68c0\u67e5\u5728\u63a7\u5236\u53f0\u4fee\u6539\u8fc7\u7684\u4e1c\u897f\u6709 diff : \u7ea2\u7eff\u5bf9\u6bd4\u5dee\u5f02\u5316\u663e\u793a\u53ef\u4ee5\u64a4\u9500\u4fee\u6539"}),"\n",(0,i.jsx)(n.li,{children:"Coverage : \u68c0\u67e5\u4ee3\u7801\uff0c\u6709\u591a\u5c11\u88ab\u4f7f\u7528\uff0c\u591a\u5c11\u6ca1\u88ab\u4f7f\u7528\u8ddf\u8e2a\u5f53\u524d\u52a0\u8f7d\u7684 JS \u548c CSS \u6587\u4ef6\u7684 \u54ea\u4e9b\u884c\u6b63\u5728\u88ab\u6267\u884c \uff0c\u5e76\u663e\u793a \u672a\u4f7f\u7528\u5b57\u8282\u7684\u767e\u5206\u6bd4 \u3002\u5b83\u7528 \u7eff\u8272 \u7684\u7ebf\u6761\u6807\u8bb0 \u8fd0\u884c \u548c\u7528 \u7ea2\u8272 \u7684\u7ebf\u6761\u6807\u8bb0 \u672a\u8fd0\u884c"}),"\n",(0,i.jsx)(n.li,{children:"Network conditions :\u6a21\u62df\u7f51\u7edc\u72b6\u6001\uff0c\u4e5f\u53ef\u4ee5\u6a21\u62df\u7279\u5b9a\u7528\u6237\u4ee3\u7406"}),"\n",(0,i.jsx)(n.li,{children:"Performance monitor"}),"\n",(0,i.jsx)(n.li,{children:"Quick source :\u5feb\u901f\u67e5\u770b\u6e90\u7801\uff0c\u6216\u8bbe\u7f6e\u65ad\u70b9"}),"\n",(0,i.jsx)(n.li,{children:"Remote devices"}),"\n",(0,i.jsx)(n.li,{children:"Rendering"}),"\n",(0,i.jsx)(n.li,{children:"Request blocking"}),"\n",(0,i.jsx)(n.li,{children:"Search"}),"\n",(0,i.jsx)(n.li,{children:"Sensors : \u4f20\u611f\u5668\uff0c\u6a21\u62df\u7279\u5b9a\u7684\u4f4d\u7f6e"}),"\n",(0,i.jsx)(n.li,{children:"What\u2019s new"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"snippets",children:"snippets"}),"\n",(0,i.jsx)(n.p,{children:"\u9884\u8bbe\u4ee3\u7801\u5757\uff0c\u7c7b\u4f3c vscode snippets"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Snippets \u5141\u8bb8\u4f60\u5b58\u653e JavaScript \u4ee3\u7801\u5230 DevTools \u4e2d\uff0c\u65b9\u4fbf\u4f60\u590d\u7528\u8fd9\u4e9b JavaScript \u4ee3\u7801\u5757\uff1a"}),"\n",(0,i.jsx)(n.li,{children:"sources \u9762\u677f snippets \u4e2d new snippet\u3002\u53ef\u4ee5\u76f4\u63a5\u53f3\u952e run \u8fd0\u884c\u4e5f\u53ef\u4ee5\u7528[Ctrl] + [enter]"}),"\n",(0,i.jsx)(n.li,{children:"\u5728 command menu(Ctrl + P) \u7528\uff01+ \u4ee3\u7801\u5757\u540d \u67e5\u627e\u9884\u8bbe\u4ee3\u7801\u5757"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"elements-\u9762\u677f",children:"Elements \u9762\u677f"}),"\n",(0,i.jsx)(n.h3,{id:"hide-element",children:"hide element"}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u822c\u662f\u901a\u8fc7\u70b9\u51fb\u4e00\u4e2a\u5143\u7d20\uff0c\u53f3\u952e\u9009\u62e9 hide element."}),"\n",(0,i.jsx)(n.p,{children:"\u4f60\u53ef\u4ee5\u76f4\u63a5\u9009\u62e9\u5143\u7d20\uff0c\u5e76\u6309 H \u952e\uff0c\u5373\u53ef\u9690\u85cf\u5bf9\u5e94\u5143\u7d20\uff0c\u518d\u6b21\u6309\u4e0b\u5373\u53ef\u53d6\u6d88\u9690\u85cf"}),"\n",(0,i.jsx)(n.h3,{id:"\u62d6\u52a8\u653e\u7f6e\u5143\u7d20",children:"\u62d6\u52a8\u3001\u653e\u7f6e\u5143\u7d20"}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u76f4\u63a5\u62d6\u52a8\u5143\u7d20\uff0c\u79fb\u52a8\u5143\u7d20\u7684\u4f4d\u7f6e\uff01\u563f\u563f\uff0c\u597d\u7528\uff0c\u597d\u65b9\u4fbf\uff01"}),"\n",(0,i.jsx)(n.h3,{id:"\u540c\u7ea7\u8282\u70b9\u4e0a\u79fb\u6216\u4e0b\u79fb",children:"\u540c\u7ea7\u8282\u70b9\u4e0a\u79fb\u6216\u4e0b\u79fb"}),"\n",(0,i.jsx)(n.p,{children:"\u9009\u4e2d\u8282\u70b9\uff0c\u7136\u540e[Ctrl] + [\u2b06] / [Ctrl] + [\u2b07]"}),"\n",(0,i.jsx)(n.h3,{id:"\u64a4\u9500\u64cd\u4f5c",children:"\u64a4\u9500\u64cd\u4f5c"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u4eec\u53ef\u4ee5\u62d6\u52a8\uff0c\u653e\u7f6e\uff0c\u7f16\u8f91\uff0c\u590d\u5236(\u5f53\u7136\uff0c\u4ee5\u53ca\u4f7f\u7528 [Ctrl] + [v] \u6765\u7c98\u8d34)\uff0c \u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u5728\u5143\u7d20\u9762\u677f\u91cc\u628a HTML \u7ed3\u6784\u641e\u5f97\u4e00\u56e2\u7cdf\u3002"}),"\n",(0,i.jsx)(n.p,{children:"[Ctrl] + [z]: \u64a4\u9500\u6211\u4eec\u7684\u4efb\u4f55\u6539\u52a8\u3002 [Ctrl] + [Shift] + [Z]: \u64a4\u9500\u6240\u6709\u4fee\u6539"}),"\n",(0,i.jsx)(n.h3,{id:"\u5bf9\u5143\u7d20\u7684\u9634\u5f71\u7f16\u8f91",children:"\u5bf9\u5143\u7d20\u7684\u9634\u5f71\u7f16\u8f91"}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u7f16\u8f91\u4e00\u4e2a\u5143\u7d20\u7684 css ,\u5bf9\u4e8e box-shadow/text-shadow \u53ef\u4ee5\u8c03\u8282\u65f6\u67e5\u770b\u6548\u679c\u3002 ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/07/20/yU9FiZ15gco7K6h.png",alt:""})]}),"\n",(0,i.jsx)(n.h3,{id:"\u5bf9\u5143\u7d20\u7684\u989c\u8272\u8fdb\u884c\u7f16\u8f91",children:"\u5bf9\u5143\u7d20\u7684\u989c\u8272\u8fdb\u884c\u7f16\u8f91"}),"\n",(0,i.jsx)(n.p,{children:"\u989c\u8272\u9009\u62e9\u5668\uff0c\u529f\u80fd\u76f8\u5f53\u4e30\u5bcc\u3002"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/09/26/A8tZJjOoDkW6Iyv.png",alt:""})}),"\n",(0,i.jsx)(n.h3,{id:"\u5bf9\u5143\u7d20\u7684\u52a8\u753b\u8fdb\u884c\u7f16\u8f91",children:"\u5bf9\u5143\u7d20\u7684\u52a8\u753b\u8fdb\u884c\u7f16\u8f91"}),"\n",(0,i.jsxs)(n.p,{children:["Timing function editor \u5b9a\u65f6\u51fd\u6570\u7f16\u8f91\u5668/Cubic bezier(\u8d1d\u585e\u5c14) \u7f16\u8f91\u5668 ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/09/26/NS4k67ZLY9mFMcU.gif",alt:""})]}),"\n",(0,i.jsx)(n.h3,{id:"\u76d1\u542c\u5bf9-dom-\u5143\u7d20\u7684\u4fee\u6539",children:"\u76d1\u542c\u5bf9 DOM \u5143\u7d20\u7684\u4fee\u6539"}),"\n",(0,i.jsx)(n.p,{children:'\u70b9\u51fb"..." \u7b26\u53f7\u6216\u8005\u53f3\u51fb\u4f60\u60f3\u6dfb\u52a0\u76d1\u542c\u7684\u5143\u7d20'}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u9009\u62e9 subtree modifications :\u76d1\u542c\u4efb\u4f55\u5b83\u5185\u90e8\u7684\u8282\u70b9\u88ab \u79fb\u9664 \u6216\u8005 \u6dfb\u52a0\u7684\u4e8b\u4ef6"}),"\n",(0,i.jsx)(n.li,{children:"\u9009\u62e9 attribute modifications :\u76d1\u542c\u4efb\u4f55\u5f53\u524d\u9009\u4e2d\u7684\u8282\u70b9\u88ab \u6dfb\u52a0\uff0c\u79fb\u9664 \u6216\u8005 \u88ab\u4fee\u6539\u503c\u7684\u4e8b\u4ef6"}),"\n",(0,i.jsx)(n.li,{children:"\u9009\u62e9 node removal :\u76d1\u542c\u88ab\u9009\u4e2d\u7684\u5143\u7d20\u88ab \u79fb\u9664 \u7684\u4e8b\u4ef6"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/09/26/bqyYD1gmPzaduSC.png",alt:""})}),"\n",(0,i.jsx)(n.p,{children:"\u9875\u9762\u91cd\u65b0\u52a0\u8f7d\u65f6\u4f1a\u8bb0\u4f4f\u65ad\u70b9\u3002\u5f53\u4f60\u8bbe\u7f6e\u4e86\u4e00\u4e2a\u6216\u591a\u4e2a\u65ad\u70b9\u7684\u65f6\u5019\uff0c\u53ef\u80fd\u90fd\u5fd8\u4e86\u5b83\u4eec\u6240\u6807\u8bb0\u7684\u4f4d\u7f6e\u4e86\u3002\u600e\u4e48\u627e\u5b83\u4eec\u5462\uff1f"}),"\n",(0,i.jsx)(n.p,{children:"\u5728 Elements \u89c6\u56fe\u4e2d\u6709\u89c6\u89c9\u63d0\u793a\uff0cSources \u4e2d\u4e5f\u6709\u4e13\u7528\u5217\u8868\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u6709\u65f6\u4f60\u6dfb\u52a0\u4e86\u65ad\u70b9\u7684\u5143\u7d20\u88ab\u9690\u85cf\u5728\u4e00\u4e9b\u6298\u53e0\u8d77\u6765\u7684\u7236\u7ea7\u5143\u7d20\u4e2d\uff0c\u4e0d\u8981\u62c5\u5fc3 - \u4ed6\u4eec\u4f1a\u5728 Element \u4e2d\u7528\u9ad8\u4eae\u5c55\u793a\u51fa\u6765\u3002 ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/09/26/y18tn2eDwPquREm.png",alt:""})]}),"\n",(0,i.jsx)(n.h2,{id:"console-\u9762\u677f",children:"Console \u9762\u677f"}),"\n",(0,i.jsxs)(n.h3,{id:"console-\u4e2d\u7684",children:["console \u4e2d\u7684",(0,i.jsx)(n.code,{children:"$"})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$0"})," - ",(0,i.jsx)(n.code,{children:"$4"})," ",(0,i.jsx)(n.code,{children:"$0"})," :\u62ff\u5230\u5f53\u524d\u9009\u4e2d\u7684\u5143\u7d20\uff0c",(0,i.jsx)(n.code,{children:"$1"})," \u62ff\u5230\u4e0a\u4e00\u4e2a\u9009\u62e9\u7684\u5143\u7d20\u3002"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4ece",(0,i.jsx)(n.code,{children:"$0"})," -",(0,i.jsx)(n.code,{children:"$4"})," \u662f\u6700\u8fd1\u9009\u4e2d\u7684\u51e0\u4e2a\u5143\u7d20\uff0c\u53ef\u4ee5\u65b9\u4fbf\u5730\u9009\u4e2d\u67d0\u4e9b\u5143\u7d20\uff0c\u76f4\u63a5\u8fdb\u884c dom \u64cd\u4f5c\u3002"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$"})," \u548c ",(0,i.jsx)(n.code,{children:"$$"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$"})," \u76f8\u5f53\u4e8e",(0,i.jsx)(n.code,{children:"document.querySelector"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$$"})," \u7c7b\u4f3c\u4e8e ",(0,i.jsx)(n.code,{children:"document.querySelectorAll"})," \uff0c\u4f46\u662f\u8fd4\u56de\u7684\u662f\u8282\u70b9\u6570\u7ec4\uff0c\u800c\u4e0d\u662f NodeList \u7c7b\u6570\u7ec4\u5bf9\u8c61"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"$"})," \u548c ",(0,i.jsx)(n.code,{children:"$$"})," \u8fd8\u652f\u6301\u7b2c\u4e8c\u4e2a\u53c2\u6570 startNode \u5373\u67e5\u8be2\u8d77\u70b9\u7531 document \u6539\u4e3a startNode ",(0,i.jsx)(n.code,{children:'$("div",$("div"))'})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"$_"})," \u5bf9\u4e0a\u6b21\u6267\u884c\u7684\u7ed3\u679c\u7684\u5f15\u7528 ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/09/26/EYG1I4obhrzWCkP.png",alt:""})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"consolelog",children:"console.log"}),"\n",(0,i.jsxs)(n.p,{children:["\u6253\u5370\u7684\u5bf9\u8c61\u662f\u5bf9\u5bf9\u8c61\u7684\u5f15\u7528\u3002 ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/07/20/n5us8aTDAofyO4L.png",alt:""})]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u589e\u5f3a console.log \u7684\u4f53\u9a8c\uff1a\u53ef\u4ee5\u7528\u5927\u62ec\u53f7\u628a\u5bf9\u8c61\u5305\u8d77\u6765"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"console.log({dad,kids})"})," ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/07/20/HePtCsviKQBwdlR.png",alt:""})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["\u81ea\u5b9a\u4e49 console.log \u7684\u6837\u5f0f\u7ed9\u6253\u5370\u6587\u672c\u52a0\u4e0a %c \u90a3\u4e48 console.log \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u5c31\u53d8\u6210\u4e86 CSS \u89c4\u5219\u3002 ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/07/20/Dko51asCHqjpNlm.png",alt:""})]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u5728\u56de\u8c03\u51fd\u6570\u4e2d\u68c0\u67e5\u4f20\u9012\u7684\u53c2\u6570\uff0c\u53ef\u4ee5\u76f4\u63a5\u4f20\u9012 console.log \u65b9\u6cd5"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"getLocation(console.log)"})," \uff0c\u4e0d\u8981 ",(0,i.jsx)(n.code,{children:"getLocation((v)=>console.log(v))"})," ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/09/26/dmzIkDnThp5HUPW.png",alt:""})]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"console-\u4e2d\u7684\u5f02\u6b65",children:"console \u4e2d\u7684\u5f02\u6b65"}),"\n",(0,i.jsx)(n.p,{children:"console \u9762\u677f\u4e2d\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 promise,\u4e14\u76f4\u63a5\u4f7f\u7528 await,\u4e0d\u4f1a\u6253\u5370\u51fa pending \u72b6\u6001"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"response = await fetch('https://jsonplaceholder.typicode.com/todos/1');\njson = await response.json();\n"})}),"\n",(0,i.jsx)(n.h3,{id:"consoledir",children:"console.dir"}),"\n",(0,i.jsx)(n.p,{children:"\u4e00\u822c\u6253\u5370\u4e00\u4e2a DOM \u5143\u7d20\uff0c\u6253\u5370\u7684\u662f DOM \u8282\u70b9\u3002\u5982\u679c\u60f3\u67e5\u770b\u8fd9\u4e2a\u8282\u70b9\u5173\u8054\u7684\u771f\u5b9e JS \u5bf9\u8c61\uff0c\u67e5\u770b\u5c5e\u6027\u7b49\uff0c\u53ef\u4ee5\u4f7f\u7528 console.dir()"}),"\n",(0,i.jsx)(n.h3,{id:"consoletable",children:"console.table"}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u4ee5\u8868\u683c\u7684\u5f62\u5f0f\u6253\u5370\u4e00\u4e2a\u6570\u7ec4\u6216\u5bf9\u8c61\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5b83\u4e0d\u4ec5\u4f1a\u6839\u636e\u6570\u7ec4\u4e2d\u5305\u542b\u7684\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027\uff0c\u53bb\u8ba1\u7b97\u51fa\u8868\u4e2d\u7684\u5217\u540d\uff0c\u800c\u4e14\u8fd9\u4e9b\u5217\u90fd\u662f\u53ef\u4ee5 \u7f29\u653e \u751a\u81f3 \u8fd8\u53ef\u4ee5\u6392\u5e8f!"}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4f60\u89c9\u5f97\u5c55\u793a\u7684\u5217\u592a\u591a\u4e86\uff0c\u4f7f\u7528\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff0c\u4f20\u5165\u4f60\u60f3\u8981\u5c55\u793a\u7684\u5217\u7684\u540d\u5b57\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u6bd4\u5982\u5904\u7406\u4e0a\u9762\u5f02\u6b65\u8bf7\u6c42\u7684\u7ed3\u679c\uff1a ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/07/20/FLJ7pi3qdTxoh1X.png",alt:""})]}),"\n",(0,i.jsxs)(n.p,{children:["\u524d\u9762\u63d0\u5230\u7684",(0,i.jsx)(n.code,{children:"console.log({dad,kids})"}),",\u589e\u5f3a\u5bf9\u8c61\u5b57\u9762\u91cf(enhanced object literal),\u4e5f\u53ef\u4ee5\u76f4\u63a5\u6362\u6210 console.table ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/09/26/fwpIWgHnm9KOxDL.png",alt:""})]}),"\n",(0,i.jsx)(n.h3,{id:"\u8ba1\u65f6\u76f8\u5173",children:"\u8ba1\u65f6\u76f8\u5173"}),"\n",(0,i.jsx)(n.p,{children:"console \u9762\u677f\u7684\u6bcf\u4e00\u884c\u8f93\u51fa\u53ef\u4ee5\u6dfb\u52a0\u65f6\u95f4\u6233\uff0c\u53ef\u4ee5 F1 \u5728\u8bbe\u7f6e\u91cc\u5f00\u542f\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u547d\u4ee4 show timestamps"}),"\n",(0,i.jsx)(n.p,{children:"\u811a\u672c\u4e2d\u7684\u7279\u6b8a\u7684\u8282\u70b9\u4e4b\u95f4\u6267\u884c\u7684\u65f6\u95f4\u8de8\u5ea6\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u4e00\u5bf9\u8ba1\u65f6\u65b9\u6cd5\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"console.time() \u2014 \u5f00\u542f\u4e00\u4e2a\u8ba1\u65f6\u5668"}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"console.timeEnd() \u2014 \u7ed3\u675f\u8ba1\u65f6\u5e76\u4e14\u5c06\u7ed3\u679c\u5728 console \u4e2d\u6253\u5370\u51fa\u6765"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u60f3\u4e00\u6b21\u8bb0\u5f55\u591a\u4ef6\u4e8b\uff0c\u53ef\u4ee5\u5f80\u8fd9\u4e9b\u51fd\u6570\u4e2d\u4f20\u5165\u4e0d\u540c\u7684\u6807\u7b7e\u503c\u3002(\u4f8b\u5982: console.time('loading') \uff0c console.timeEnd('loading') ) ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/09/26/Qrua1wkKWXLlBEj.png",alt:""})]}),"\n",(0,i.jsx)(n.h3,{id:"\u5b9e\u65f6\u8868\u8fbe\u5f0f",children:"\u5b9e\u65f6\u8868\u8fbe\u5f0f"}),"\n",(0,i.jsxs)(n.p,{children:["Live expression \u529f\u80fd\uff0c\u53ef\u4ee5\u5b9a\u4e49\u4efb\u4f55 JS \u8868\u8fbe\u5f0f\uff0c\u4f1a\u4e0d\u65ad\u8fdb\u884c\u66f4\u65b0\u3002\u5e76\u4e14\u53ef\u4ee5\u540c\u65f6\u5199\u591a\u4e2a\u5b9e\u65f6\u8868\u8fbe\u5f0f\uff0c\u5bf9\u4e0d\u540c\u7684\u503c\u8fdb\u884c\u5b9e\u65bd\u7684\u76d1\u542c\u3002 ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/07/20/1bM8nsp9Bwc6Liz.png",alt:""})]}),"\n",(0,i.jsx)(n.h2,{id:"network-\u9762\u677f",children:"Network \u9762\u677f"}),"\n",(0,i.jsx)(n.h3,{id:"\u8c03\u7528\u4fe1\u606f",children:"\u8c03\u7528\u4fe1\u606f"}),"\n",(0,i.jsxs)(n.p,{children:["Network \u9762\u677f\u4e2d\u7684 initiator \u8fd9\u4e00\u5217\u663e\u660e\u4e86\u662f\u54ea\u4e2a\u811a\u672c\u7684\u54ea\u4e00\u884c\u89e6\u53d1\u4e86\u8bf7\u6c42\u3002\u5b83\u663e\u793a\u4e86\u5728\u8c03\u7528\u5806\u6808\u4e2d\u89e6\u53d1\u8bf7\u6c42\u7684\u6700\u540e\u4e00\u6b65\u3002 ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/07/20/VoWOMZwdPKyCr12.png",alt:""})," \u60ac\u6d6e\u6216\u70b9\u51fb\u4e00\u4e2a\u5177\u4f53\u7684\u8bf7\u6c42\u53ef\u4ee5\u67e5\u770b\u5b8c\u6574\u7684\u8c03\u7528\u5806\u6808\u4fe1\u606f\u3002 ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/07/20/c9u7kMWEYqDQfsh.png",alt:""})]}),"\n",(0,i.jsx)(n.h3,{id:"\u7b5b\u9009\u8bf7\u6c42",children:"\u7b5b\u9009\u8bf7\u6c42"}),"\n",(0,i.jsx)(n.p,{children:"Network \u9762\u677f\u4e2d\u7684\u8fc7\u6ee4\u5668\u8f93\u5165\u6846\u63a5\u53d7\u5b57\u7b26\u4e32\u6216\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5bf9\u5e94\u663e\u793a\u5339\u914d\u7684\u8bf7\u6c42\u3002 \u4f46\u662f\u4f60\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u8fc7\u6ee4\u5f88\u591a\u5c5e\u6027\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\u53cd\u8fc7\u6ee4\uff1a\u8fc7\u6ee4\u8bf7\u6c42\u524d\u9762\u52a0\u4e0a-\u53f7\uff0c\u5982-method",":OPTIONS","\uff0c\u5c31\u53ef\u4ee5\u8fc7\u6ee4 OPTIONS \u8bf7\u6c42\u4e86\u3002 ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/09/26/7OydwU2nGfESmZt.gif",alt:""})]}),"\n",(0,i.jsx)(n.h3,{id:"\u81ea\u5b9a\u4e49\u663e\u793a\u7684\u5217",children:"\u81ea\u5b9a\u4e49\u663e\u793a\u7684\u5217"}),"\n",(0,i.jsxs)(n.p,{children:["\u5728 Network \u9762\u677f\uff0c\u4f60\u53ef\u4ee5\u81ea\u5b9a\u4e49\u8fd9\u4e2a\u8868\u683c\u90fd\u663e\u793a\u54ea\u4e9b\u5217\uff0c\u5728\u8868\u5934\u4e0a\u6216\u8005\u4efb\u4f55\u4e00\u4e2a\u8bf7\u6c42\u4e0a\u53f3\u952e\u5373\u53ef\u3002\u5927\u6982\u6709\u5982\u4e0b\u4e00\u4e9b\uff1a ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/09/26/nb7CkDtmfErHoSd.png",alt:""})," ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/09/26/SVkamH7tKAOBgFz.gif",alt:""})]}),"\n",(0,i.jsx)(n.h3,{id:"\u7981\u7528\u8bf7\u6c42",children:"\u7981\u7528\u8bf7\u6c42"}),"\n",(0,i.jsxs)(n.p,{children:["\u60f3\u770b\u770b\u5f53\u67d0\u4e9b\u811a\u672c\u3001\u6837\u5f0f\u6587\u4ef6\u7f3a\u5c11\u6216\u8005\u5176\u4ed6\u8d44\u6e90\u52a0\u8f7d\u5931\u8d25\u65f6\uff0c\u7f51\u9875\u7684\u6837\u5b50\u5417\uff1f\u5728 Network \u9762\u677f\u5bf9\u67d0\u6761\u8bf7\u6c42\u53f3\u51fb\u9009\u62e9 Block Request URL\u3002\u4e00\u4e2a\u65b0\u7684 \u7981\u7528\u8bf7\u6c42 \u9762\u677f\u4f1a\u88ab\u547c\u51fa\uff0c\u5728\u8fd9\u91cc\u53ef\u4ee5\u7ba1\u7406\u88ab\u7981\u7528\u7684\u8bf7\u6c42\u3002 ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/09/26/wK8I7TEcHanfLrm.png",alt:""})]}),"\n",(0,i.jsx)(n.h3,{id:"\u91cd\u65b0\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42",children:"\u91cd\u65b0\u53d1\u9001\u4e00\u4e2a\u8bf7\u6c42"}),"\n",(0,i.jsx)(n.p,{children:'\u5bf9\u4e8e Network \u9762\u677f\u4e0a\u7684\u4efb\u4f55\u4e00\u4e2a\u8bf7\u6c42\uff0c\u4e0d\u9700\u8981\u5237\u65b0\u9875\u9762\uff0c\u53f3\u952e\u9009\u62e9"Replay XHR"\u5373\u53ef\u91cd\u65b0\u5237\u65b0\u3002'}),"\n",(0,i.jsx)(n.h2,{id:"source-\u9762\u677f",children:"Source \u9762\u677f"}),"\n",(0,i.jsx)(n.p,{children:"\u57fa\u672c\u662f\u7528\u6765 debug ,\u6dfb\u52a0\u65ad\u70b9"}),"\n",(0,i.jsx)(n.h3,{id:"\u6761\u4ef6\u65ad\u70b9-conditional-breakpoints",children:"\u6761\u4ef6\u65ad\u70b9 Conditional breakpoints"}),"\n",(0,i.jsx)(n.p,{children:"\u4ec5\u5f53\u6ee1\u8db3\u67d0\u4e2a\u8868\u8fbe\u5f0f\u624d\u8fdb\u5165\u65ad\u70b9\uff0c\u5f88\u9002\u5408\u5728\u5faa\u73af\u4ee3\u7801\u4e2d\u6309\u6761\u4ef6\u8fdb\u884c\u65ad\u70b9\u8c03\u8bd5"}),"\n",(0,i.jsx)(n.p,{children:"\u64cd\u4f5c\uff1a"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u53f3\u51fb\u884c\u53f7\uff0c\u9009\u62e9 Add conditional breakpoint...(\u6dfb\u52a0\u6761\u4ef6\u65ad\u70b9) \u6216\u8005\u5728\u4f60\u6240\u6dfb\u52a0\u7684\u65ad\u70b9\u5904\uff0cedit breakpoint"}),"\n",(0,i.jsxs)(n.li,{children:["\u586b\u5165\u8868\u8fbe\u5f0f\uff0c\u8fd4\u56de\u7ed3\u679c\u4e3a falsy \u65f6\u4e0d\u4f1a\u6682\u505c.(\u4f1a\u901a\u8fc7\u6267\u884c\u8868\u8fbe\u5f0f\u83b7\u5f97 true/false \u6765\u51b3\u5b9a\u662f\u5426\u6682\u505c) ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/09/26/hwulUkrDgzOHPMT.gif",alt:""})]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"?> \u586b\u5165\u7684\u8868\u8fbe\u5f0f\u4e5f\u53ef\u4ee5\u4f7f\u7528 console.log\uff0c\u800c\u4e0d\u5fc5\u5728\u6e90\u7801\u4e2d\u5199 console.log \uff0c\u65b9\u4fbf\u8c03\u8bd5"}),"\n",(0,i.jsx)(n.h3,{id:"\u8bf7\u6c42\u65ad\u70b9-xhrfetch-breakpoints",children:"\u8bf7\u6c42\u65ad\u70b9 XHR/fetch breakpoints"}),"\n",(0,i.jsxs)(n.p,{children:["\u5bf9\u5df2\u7ecf\u53d1\u9001\u7684\u8bf7\u6c42\u8fdb\u884c\u65ad\u70b9\u8c03\u8bd5,\u53ef\u4ee5\u6dfb\u52a0\u90e8\u5206 URL \u4f5c\u4e3a\u89e6\u53d1\u5668\u6216\u76d1\u542c\u4efb\u4f55\u8bf7\u6c42: ",(0,i.jsx)(n.img,{src:"https://i.loli.net/2021/09/26/W8j9dZKCsQ3gYLR.png",alt:""})]}),"\n",(0,i.jsx)(n.h3,{id:"source-\u91cc\u7684-workspace",children:"Source \u91cc\u7684 WorkSpace"}),"\n",(0,i.jsx)(n.p,{children:"\u53ef\u4ee5\u76f4\u63a5\u628a\u6587\u4ef6\u5939\u62d6\u52a8\u5230 source \u91cc\u9762\uff0c\u76f4\u63a5\u5728\u91cc\u9762\u8fdb\u884c\u7f16\u8f91\u3002\u4fdd\u5b58\u7f16\u8f91\u540e\uff0c\u53ef\u4ee5\u76f4\u63a5\u540c\u6b65\u7f16\u8f91\u5230\u672c\u5730\u7684\u6587\u4ef6\u5939\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["workSpace \u76f8\u5173\uff1a\u5728 DevTools \u76f4\u63a5\u7f16\u8f91\uff0c\u5e76\u540c\u6b65\u53d8\u5316\u5230\u672c\u5730\uff1a ",(0,i.jsx)(n.a,{href:"https://juejin.cn/book/6844733783166418958/section/6844733783225139214",children:"https://juejin.cn/book/6844733783166418958/section/6844733783225139214"})]}),"\n",(0,i.jsx)(n.h2,{id:"\u4e00\u4e9b\u5b9e\u9645\u573a\u666f",children:"\u4e00\u4e9b\u5b9e\u9645\u573a\u666f"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u8c03\u8bd5\u67d0\u4e9b\u60c5\u51b5\u4e0b\u7684\u6d6e\u7a97(",(0,i.jsx)(n.a,{href:"https://juejin.cn/post/6867099026995560455#heading-3",children:"https://juejin.cn/post/6867099026995560455#heading-3"}),") \u9f20\u6807\u79fb\u52a8\u5230\u67d0\u4e2a\u533a\u57df\u65f6\u51fa\u73b0\u4e00\u4e2a\u6d6e\u7a97\uff0c\u79fb\u5f00\u65f6\u6d6e\u7a97\u6d88\u5931\u3002","\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"\u53ef\u4ee5\u901a\u8fc7\u63d0\u524d\u5207\u51fa Command \u9762\u677f\uff0c\u7126\u70b9\u5904\u4e8e\u8f93\u5165\u6846\u4e2d\uff0c\u6b64\u65f6\u9f20\u6807\u79fb\u52a8\u5230\u76f8\u5e94\u533a\u57df\u663e\u793a\u6d6e\u7a97\u3002\u53e6\u4e00\u65b9\u9762\uff0c Command \u9762\u677f\u8f93\u5165 Disable JavaScript \u5e76\u56de\u8f66\u7981\u7528 js"}),"\n",(0,i.jsx)(n.li,{children:"settimeout debugger"}),"\n",(0,i.jsx)(n.li,{children:"\u7236\u5143\u7d20\u65ad\u70b9\u8c03\u8bd5\uff1aElements \u9762\u677f -> \u7236\u5143\u7d20\u53f3\u952e Break on -> subtree modifications"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.chrome.com/docs/devtools/shortcuts/",children:"\u5feb\u6377\u952e-developer.chrome.com"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://juejin.cn/book/6844733783166418958/section/6844733783187390477",children:"\u4f60\u4e0d\u77e5\u9053\u7684 Chrome \u8c03\u8bd5\u6280\u5de7"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://github.com/dendoink/FrontendWingman/blob/master/Chrome_Devtools_Tricks",children:"FrontendWingman -github"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://juejin.cn/post/6867099026995560455#heading-9",children:"\u901a\u8bfb\u300c\u4f60\u4e0d\u77e5\u9053\u7684 Chrome \u8c03\u8bd5\u6280\u5de7\u300d"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://developer.chrome.com/docs/devtools/console/",children:"console-developer.chrome.com"})}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},4744:(e,n,l)=>{l.d(n,{Z:()=>d,a:()=>c});var i=l(959);const s={},o=i.createContext(s);function c(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),i.createElement(o.Provider,{value:n},e.children)}}}]);