"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[1957],{1670:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>x,frontMatter:()=>l,metadata:()=>r,toc:()=>t});var d=i(1527),s=i(4744);const l={sidebar_position:1,description:"css box-model",keywords:["css","box-model"]},c="\u76d2\u6a21\u578b",r={id:"fe-basic/css/box-model",title:"\u76d2\u6a21\u578b",description:"css box-model",source:"@site/docs/fe-basic/css/box-model.md",sourceDirName:"fe-basic/css",slug:"/fe-basic/css/box-model",permalink:"/docs/fe-basic/css/box-model",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/css/box-model.md",tags:[],version:"current",lastUpdatedAt:1704360381,formattedLastUpdatedAt:"2024\u5e741\u67084\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"css box-model",keywords:["css","box-model"]},sidebar:"FE",previous:{title:"CSS",permalink:"/docs/fe-basic/css/"},next:{title:"\u5e03\u5c40",permalink:"/docs/fe-basic/css/layout"}},o={},t=[{value:"\u83b7\u53d6\u76d2\u6a21\u578b\u5bf9\u5e94\u7684\u5bbd\u548c\u9ad8",id:"\u83b7\u53d6\u76d2\u6a21\u578b\u5bf9\u5e94\u7684\u5bbd\u548c\u9ad8",level:2},{value:"\u5757\u5143\u7d20\u5782\u76f4\u683c\u5f0f\u5316",id:"\u5757\u5143\u7d20\u5782\u76f4\u683c\u5f0f\u5316",level:2},{value:"\u8fb9\u6846\u5408\u5e76",id:"\u8fb9\u6846\u5408\u5e76",level:3},{value:"\u5916\u8fb9\u8ddd\u91cd\u53e0\u95ee\u9898",id:"\u5916\u8fb9\u8ddd\u91cd\u53e0\u95ee\u9898",level:3},{value:"BFC \u5757\u7ea7\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587",id:"bfc-\u5757\u7ea7\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587",level:3},{value:"Reference",id:"reference",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"\u76d2\u6a21\u578b",children:"\u76d2\u6a21\u578b"}),"\n",(0,d.jsxs)(n.p,{children:["\u4ece\u5916\u5230\u5185\uff1a",(0,d.jsx)(n.code,{children:"margin-box"}),",",(0,d.jsx)(n.code,{children:"border-box"}),",",(0,d.jsx)(n.code,{children:"padding-box"}),",",(0,d.jsx)(n.code,{children:"content-box"}),"\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"margin"})," \u53ef\u4ee5\u4e3a\u8d1f\u503c\uff0c",(0,d.jsx)(n.code,{children:"padding"})," \u4e0d\u80fd\u4e3a\u8d1f\u503c\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"background-color"})," \u4f1a\u5145\u6ee1 ",(0,d.jsx)(n.code,{children:"content"}),"\uff0c",(0,d.jsx)(n.code,{children:"padding"}),"\uff0c",(0,d.jsx)(n.code,{children:"border"}),"\u3002"]}),"\n",(0,d.jsxs)(n.p,{children:["\u6807\u51c6\u76d2\u6a21\u578b\u548c IE \u76d2\u6a21\u578b\uff1a\u6807\u51c6\u76d2\u6a21\u578b",(0,d.jsx)(n.code,{children:"box-sizing"})," \u9ed8\u8ba4\u4e3a",(0,d.jsx)(n.code,{children:"content-box"}),"\uff0c\u800c IE \u76d2\u6a21\u578b",(0,d.jsx)(n.code,{children:"box-sizing"})," \u9ed8\u8ba4\u4e3a",(0,d.jsx)(n.code,{children:"border-box"}),"\u3002"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u82e5\u4e0d\u58f0\u660e DOCTYPE \u7c7b\u578b\uff0cIE \u6d4f\u89c8\u5668\u4f1a\u5c06\u76d2\u5b50\u6a21\u578b\u89e3\u91ca\u4e3a IE \u76d2\u5b50\u6a21\u578b."}),"\n"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"box-sizing: content-box"})," : \u8bbe\u7f6e\u7684 ",(0,d.jsx)(n.code,{children:"width"}),"\uff0c",(0,d.jsx)(n.code,{children:"height"})," \u4e3a ",(0,d.jsx)(n.code,{children:"content-box"})," \u7684\u5bbd\u9ad8\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"box-sizing: border-box"})," : \u8bbe\u7f6e\u7684 ",(0,d.jsx)(n.code,{children:"width"}),"\uff0c",(0,d.jsx)(n.code,{children:"height"})," \u4e3a ",(0,d.jsx)(n.code,{children:"border-box "}),"\u7684\u5bbd\u9ad8\u3002(",(0,d.jsx)(n.code,{children:"content"}),"+",(0,d.jsx)(n.code,{children:"padding"}),"+",(0,d.jsx)(n.code,{children:"border"}),")"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u83b7\u53d6\u76d2\u6a21\u578b\u5bf9\u5e94\u7684\u5bbd\u548c\u9ad8",children:"\u83b7\u53d6\u76d2\u6a21\u578b\u5bf9\u5e94\u7684\u5bbd\u548c\u9ad8"}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"element.offsetWidth/offsetHeight"})," \u5305\u62ec\u9ad8\u5ea6\uff08\u5bbd\u5ea6\uff09\u3001\u5185\u8fb9\u8ddd\u548c\u8fb9\u6846\uff0c\u4e0d\u5305\u62ec\u5916\u8fb9\u8ddd\u3002\u6700\u5e38\u7528\uff0c\u517c\u5bb9\u6027\u6700\u597d\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"element.getBoundingClientRect().width/height"})," \u5f97\u5230\u6700\u7ec8\u6e32\u67d3\u540e\u7684\u5bbd\u548c\u9ad8\uff0c\u5927\u591a\u6d4f\u89c8\u5668\u652f\u6301\uff0cIE9 \u4ee5\u4e0a\u652f\u6301\u3002\u9664\u6b64\u5916\u8fd8\u53ef\u4ee5\u53d6\u5230\u76f8\u5bf9\u4e8e\u89c6\u7a97\u7684\u4e0a\u4e0b\u5de6\u53f3\u7684\u8ddd\u79bb\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"window.getComputedStyle(element).width/height"})," \u5f97\u5230\u6700\u7ec8\u6e32\u67d3\u540e\u7684\u5bbd\u548c\u9ad8\uff0c\u591a\u6d4f\u89c8\u5668\u652f\u6301\uff0cIE9 \u4ee5\u4e0a\u652f\u6301\u3002"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.code,{children:"element.style.width/height"})," \u53ea\u80fd\u53d6\u5230\u884c\u5185\u6837\u5f0f\u7684\u5bbd\u548c\u9ad8\uff0cstyle \u6807\u7b7e\u4e2d\u548c link \u5916\u94fe\u7684\u6837\u5f0f\u53d6\u4e0d\u5230\u3002"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"\u5757\u5143\u7d20\u5782\u76f4\u683c\u5f0f\u5316",children:"\u5757\u5143\u7d20\u5782\u76f4\u683c\u5f0f\u5316"}),"\n",(0,d.jsx)(n.h3,{id:"\u8fb9\u6846\u5408\u5e76",children:"\u8fb9\u6846\u5408\u5e76"}),"\n",(0,d.jsx)(n.p,{children:"\u8fb9\u6846\u5408\u5e76\uff1a\u5982\u679c\u4e00\u4e2a\u5305\u542b\u5757\u9ad8\u5ea6\u4e3a auto, \u6ca1\u6709 border\uff0cpadding\uff0c\u4e14\u53ea\u6709\u5757\u7ea7\u5b50\u5143\u7d20\uff0c\u5176\u9ed8\u8ba4\u9ad8\u5ea6\u4e3a\u6700\u9ad8\u5757\u7ea7\u5b50\u5143\u7d20\u7684\u8fb9\u6846\u8fb9\u754c\u5230\u6700\u4f4e\u5757\u7ea7\u5b50\u5143\u7d20\u8fb9\u6846\uff0c\u4e5f\u5c31\u662f\u8bf4\u4e0d\u5305\u542b\u5b50\u5143\u7d20\u4e0a\u4e0b\u7684 margin, \u5b50\u5143\u7d20 margin \u4f1a\u6210\u4e3a\u5305\u542b\u5757 margin\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u8fb9\u6846\u4e0d\u5408\u5e76\uff1a\u4f46\u662f\u5982\u679c\u5305\u542b\u5757\u6709 padding \u6216 border\uff0c \u5219\u5305\u542b\u5b50\u5143\u7d20\u4e0a\u4e0b\u7684 margin\uff0c \u662f\u4ece\u6700\u9ad8\u5b50\u5143\u7d20\u7684\u4e0a\u5916\u8fb9\u8ddd\u8fb9\u754c\u5230\u6700\u4f4e\u5b50\u5143\u7d20\u4e0b\u5916\u8fb9\u8ddd\u8fb9\u754c\u7684\u8ddd\u79bb\u3002\u5982\u679c\u5b50\u5143\u7d20 margin \u4e3a\u8d1f\uff0c\u5305\u542b\u5757\u9ad8\u5ea6\u8d8a\u6765\u8d8a\u5c0f\uff0c\u4f46\u6700\u4f4e\u4e3a 0, \u4e0d\u4f1a\u4e3a\u8d1f\u503c\u3002"}),"\n",(0,d.jsx)(n.h3,{id:"\u5916\u8fb9\u8ddd\u91cd\u53e0\u95ee\u9898",children:"\u5916\u8fb9\u8ddd\u91cd\u53e0\u95ee\u9898"}),"\n",(0,d.jsx)(n.p,{children:"\u5728 CSS \u4e2d\uff0c\u4e24\u4e2a\u6216\u591a\u4e2a\u6bd7\u90bb\uff08\u7236\u5b50\u5143\u7d20\u6216\u5144\u5f1f\u5143\u7d20\uff09\u7684\u666e\u901a\u6d41\u4e2d\u7684\u5757\u5143\u7d20\u5782\u76f4\u65b9\u5411\u4e0a\u7684 margin \u4f1a\u53d1\u751f\u53e0\u52a0\u3002\u8fd9\u79cd\u65b9\u5f0f\u5f62\u6210\u7684\u5916\u8fb9\u8ddd\u5373\u53ef\u79f0\u4e3a\u5916\u8fb9\u8ddd\u53e0\u52a0 (collapsed margin)\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u53e0\u52a0\u540e\u7684\u8ba1\u7b97:"}),"\n",(0,d.jsx)(n.p,{children:"\u4e24\u4e2a\u76d2\u5b50\u76f8\u90bb\uff0c\u4e24\u4e2a\u6b63 margin \u91cd\u5408\uff0c\u53d6\u5176\u4e2d\u6700\u5927\u7684 margin \u4e3a\u5408\u5e76\u540e\u5171\u7528\u7684 margin."}),"\n",(0,d.jsx)(n.p,{children:"\u4e24\u4e2a\u76d2\u5b50\u76f8\u90bb\uff0c\u4e24\u4e2a\u8d1f margin \u91cd\u5408\uff0c\u53d6\u5176\u4e2d\u7edd\u5bf9\u503c\u6700\u5927\u7684 margin \u4e3a\u5408\u5e76\u540e\u5171\u7528\u7684 margin."}),"\n",(0,d.jsx)(n.p,{children:"\u4e24\u4e2a\u76d2\u5b50\u76f8\u90bb\uff0c\u4e24\u4e2a\u6b63\u8d1f margin \u91cd\u5408\uff0c\u53d6\u6b63\u8d1f\u76f8\u52a0\u7684\u503c\u4e3a\u5408\u5e76\u540e\u5171\u7528\u7684 margin."}),"\n",(0,d.jsx)(n.p,{children:"\u89e3\u51b3 margin \u91cd\u53e0\u95ee\u9898\uff1a \u521b\u5efa BFC\uff0c\u6216\u901a\u8fc7\u5bf9\u7236\u5143\u7d20\u5efa\u7acb border\uff0cpadding\uff0c\u6216\u8005\u95f4\u9694\u53ef\u4ee5\u4f7f\u5916\u8fb9\u8ddd\u4e0d\u5408\u5e76\u3002"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://codepen.io/SHERlocked93/pen/eVOevN",children:"CSS \u4f7f\u7528 BFC \u963b\u6b62 margin \u5408\u5e76"})}),"\n"]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsx)(n.p,{children:"\u6c34\u5e73\u65b9\u5411 margin \u4e0d\u4f1a\u5408\u5e76\uff0c\u5de6\u53f3 margin \u4f1a\u7d27\u6328\u7740\u6392\u5217"}),"\n"]}),"\n",(0,d.jsx)(n.h3,{id:"bfc-\u5757\u7ea7\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587",children:"BFC \u5757\u7ea7\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587"}),"\n",(0,d.jsx)(n.p,{children:"\u6982\u5ff5\uff1a \u5757\u7ea7\u683c\u5f0f\u5316\u4e0a\u4e0b\u6587\u3002\u81ea\u8eab\u5f62\u6210\u4e00\u4e2a\u5e03\u5c40\u5355\u5143\uff1a\u5e03\u5c40\u6b64\u5143\u7d20\u5185\u90e8\u65f6\u4e0d\u7528\u8003\u8651\u5176\u5916\u90e8\uff0c\u53ef\u4ee5\u7406\u89e3\u4e3a\u5b8c\u5168\u9694\u79bb\u7684\u72ec\u7acb\u5bb9\u5668\uff0c\u5bb9\u5668\u91cc\u9762\u7684\u5143\u7d20\u4e0d\u4f1a\u5728\u5e03\u5c40\u4e0a\u5f71\u54cd\u5230\u5916\u9762\u7684\u5143\u7d20\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u521b\u5efa BFC\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"html/body \u5143\u7d20"}),"\n",(0,d.jsx)(n.li,{children:"overflow \u503c\u4e0d\u4e3a visible \u7684\u5757\u5143\u7d20 hidden/auto/scroll"}),"\n",(0,d.jsx)(n.li,{children:"\u6d6e\u52a8\u5143\u7d20\uff08\u5143\u7d20\u7684 float \u4e0d\u662f none\uff09"}),"\n",(0,d.jsx)(n.li,{children:"\u5b9a\u4f4d\u5143\u7d20\uff08position \u4e0d\u662f static/relative) absolute/fixed"}),"\n",(0,d.jsx)(n.li,{children:"display \u503c\u4e3a flow-root \u7684\u5143\u7d20\uff1a \u6210\u4e3a\u5757\u7ea7\u5143\u7d20\uff0c\u5e76\u521b\u5efa BFC"}),"\n",(0,d.jsxs)(n.li,{children:["display",":inline-block","/table-cell/table"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"https://codepen.io/brightzoe/pen/LYjVbee",children:"\u521b\u5efa BFC"})}),"\n",(0,d.jsx)(n.p,{children:"\u4f7f\u7528\u573a\u666f\uff1a"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u6e05\u9664\u6d6e\u52a8"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u89e3\u51b3\u5916\u8fb9\u6846\u6298\u53e0"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u5e03\u5c40 \u5b50\u5143\u7d20\u8bbe\u7f6e\u6d6e\u52a8\u7684\u9ad8\u5ea6\u584c\u9677\u95ee\u9898"}),"\n",(0,d.jsx)(n.p,{children:"BFC \u5143\u7d20\u7684\u5b50\u5143\u7d20\u5373\u4f7f\u662f float\uff0c\u4e5f\u4f1a\u53c2\u4e0e\u7236\u5143\u7d20\u9ad8\u5ea6\u8ba1\u7b97\u3002"}),"\n",(0,d.jsx)(n.p,{children:"\u6d6e\u52a8\u5143\u7d20\u4e00\u822c\u4e0d\u53c2\u4e0e\u7236\u5143\u7d20\u9ad8\u5ea6\u8ba1\u7b97\uff0c\u5982\u679c\u7ed9\u7236\u5143\u7d20\u521b\u5efa\u4e86 BFC,\u6d6e\u52a8\u5143\u7d20\u7684\u9ad8\u5ea6\u4e5f\u4f1a\u53c2\u4e0e\u7236\u5143\u7d20\u9ad8\u5ea6\u8ba1\u7b97\uff0c\u89e3\u51b3\u201c\u9ad8\u5ea6\u584c\u9677\u201d\u7684\u95ee\u9898\u3002 BFC \u5143\u7d20\u4e0d\u4f1a\u4e0e\u6d6e\u52a8\u7684\u5143\u7d20\u53d1\u751f\u91cd\u53e0\u3002"}),"\n"]}),"\n",(0,d.jsxs)(n.li,{children:["\n",(0,d.jsx)(n.p,{children:"\u4e24\u680f\u81ea\u9002\u5e94\u5e03\u5c40 float + BFC"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-html",children:'<style>\n  .left {\n    width: 100px;\n    height: 200px;\n    background: red;\n    float: left;\n  }\n  .right {\n    height: 300px;\n    background: blue;\n    overflow: hidden;\n  }\n</style>\n<div class="left"></div>\n<div class="right"></div>\n'})}),"\n"]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:(0,d.jsxs)(n.a,{href:"https://www.zhangxinxu.com/wordpress/2020/05/css-display-flow-root/",children:["\u5feb\u901f\u4e86\u89e3 CSS display",":flow-root"," \u58f0\u660e \xab \u5f20\u946b\u65ed-\u946b\u7a7a\u95f4-\u946b\u751f\u6d3b"]})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://juejin.cn/post/6844903641485148173#heading-8",children:"CSS \u4e2d\u91cd\u8981\u7684 BFC - \u6398\u91d1"})}),"\n",(0,d.jsx)(n.li,{children:(0,d.jsx)(n.a,{href:"https://codepen.io/SHERlocked93/pen/eVOevN",children:"CSS \u4f7f\u7528 BFC \u963b\u6b62 margin \u5408\u5e76"})}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},4744:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>c});var d=i(959);const s={},l=d.createContext(s);function c(e){const n=d.useContext(l);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);