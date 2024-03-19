"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[7465],{3308:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>a,contentTitle:()=>t,default:()=>o,frontMatter:()=>l,metadata:()=>c,toc:()=>d});var i=r(1527),s=r(8672);const l={},t="\u6570\u636e\u7ed3\u6784",c={id:"algorithm/data-structure",title:"\u6570\u636e\u7ed3\u6784",description:"Array",source:"@site/docs/algorithm/data-structure.md",sourceDirName:"algorithm",slug:"/algorithm/data-structure",permalink:"/docs/algorithm/data-structure",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/algorithm/data-structure.md",tags:[],version:"current",lastUpdatedAt:1710843898,formattedLastUpdatedAt:"2024\u5e743\u670819\u65e5",frontMatter:{},sidebar:"DataStructure",next:{title:"\u6570\u636e\u7ed3\u6784\u4e0e\u7b97\u6cd5",permalink:"/docs/algorithm/"}},a={},d=[{value:"Array",id:"array",level:2},{value:"Stack \u6808",id:"stack-\u6808",level:2},{value:"Queue \u961f\u5217",id:"queue-\u961f\u5217",level:2},{value:"\u94fe\u8868",id:"\u94fe\u8868",level:2},{value:"\u94fe\u8868\u7684\u63d2\u5165\u4e0e\u5220\u9664",id:"\u94fe\u8868\u7684\u63d2\u5165\u4e0e\u5220\u9664",level:3},{value:"Tree \u6811",id:"tree-\u6811",level:2},{value:"\u4e8c\u53c9\u6811",id:"\u4e8c\u53c9\u6811",level:3}];function h(n){const e={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"\u6570\u636e\u7ed3\u6784",children:"\u6570\u636e\u7ed3\u6784"}),"\n",(0,i.jsx)(e.h2,{id:"array",children:"Array"}),"\n",(0,i.jsx)(e.p,{children:"\u521b\u5efa\u6570\u7ec4"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"const arr = new Array(10);\nconst arr = new Array(10).fill(1);\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u6570\u7ec4\u7684\u8bbf\u95ee\u4e0e\u904d\u5386"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"arr[0];\nfor (let i = 0; i < arr.length; i++) {}\narr.forEach((item, index) => {});\narr.map((item, index) => {});\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u4e8c\u4f4d\u6570\u7ec4\u521d\u59cb\u5316"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"const arr = new Array(10).fill([]); // !error \u4f1a\u53d8\u6210\u5341\u4e2a\u4e00\u6837\u7684\u5f15\u7528\u3002 fill\u7684\u673a\u5236\uff1a\u5165\u53c2\u4e3a\u5f15\u7528\u7c7b\u578b\u65f6\u586b\u5145\u7684\u662f\u5f15\u7528\n\nconst arr = new Array(10);\nfor (let i = 0; i < arr.length; i++) {\n  arr[i] = [];\n}\n\nconst arr = new Array(10).fill(0).map(() => []);\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u589e\u52a0\u5143\u7d20"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"arr.push(1);\narr.unshift(1);\nconst arr = [1,2]  arr.splice(1, 0, 3); //start,delete,add [1,3,2]\n"})}),"\n",(0,i.jsx)(e.p,{children:"\u5220\u9664\u5143\u7d20"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"arr.pop();\narr.shift();\narr.splice(1, 1);\n"})}),"\n",(0,i.jsx)(e.h2,{id:"stack-\u6808",children:"Stack \u6808"}),"\n",(0,i.jsx)(e.p,{children:"\u540e\u8fdb\u5148\u51fa\uff08LIFO,Last In First Out\uff09"}),"\n",(0,i.jsxs)(e.p,{children:["\u4f8b\u5b50\uff1a\u5f80\u51b0\u7bb1\u653e\u4e1c\u897f\u548c\u53d6\u4e1c\u897f\n",(0,i.jsx)(e.img,{src:"https://s2.loli.net/2024/03/19/28YveMibPwp3Zau.png",alt:"image.png"}),"\n\u7279\u5f81\uff1a"]}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u53ea\u5141\u8bb8\u4ece\u5c3e\u90e8\u6dfb\u52a0\u5143\u7d20 push"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u53ea\u5141\u8bb8\u4ece\u5c3e\u90e8\u5220\u9664\u5143\u7d20 pop"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"queue-\u961f\u5217",children:"Queue \u961f\u5217"}),"\n",(0,i.jsx)(e.p,{children:"\u5148\u8fdb\u5148\u51fa\uff08FIFO,First In First Out\uff09"}),"\n",(0,i.jsx)(e.p,{children:"\u4f8b\u5b50\uff1a\u6392\u961f\u4e70\u4e1c\u897f"}),"\n",(0,i.jsx)(e.p,{children:"\u7279\u5f81\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u53ea\u5141\u8bb8\u4ece\u5c3e\u90e8\u6dfb\u52a0\u5143\u7d20 push"}),"\n",(0,i.jsx)(e.li,{children:"\u53ea\u5141\u8bb8\u4ece\u5934\u90e8\u79fb\u9664\u5143\u7d20 shift"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u94fe\u8868",children:"\u94fe\u8868"}),"\n",(0,i.jsx)(e.p,{children:"\u94fe\u8868\u4e5f\u662f\u6709\u5e8f\u7684\u5217\u8868\uff0c\u7c7b\u4f3c\u6570\u7ec4\u4e5f\u662f\u7ebf\u6027\u7ed3\u6784\uff0c\u6bcf\u4e2a\u5143\u7d20\u79f0\u4e3a\u4e00\u4e2a\u8282\u70b9\uff0c\u6709\u4e00\u4e2a\u524d\u9a71\u548c\u4e00\u4e2a\u540e\u7ee7\u3002\u4e0d\u540c\u7684\u662f\u94fe\u8868\u8282\u70b9\u5728\u5185\u5b58\u4e2d\u53ef\u4ee5\u662f\u79bb\u6563\u4e0d\u8fde\u7eed\u7684\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6570\u7ec4\uff1a\u6570\u7ec4\u5728\u5185\u5b58\u4e2d\u4e00\u822c\u5bf9\u5e94\u4e00\u6bb5\u8fde\u7eed\u7684\u5185\u5b58\u7a7a\u95f4\u3002\u6240\u6709\u6bcf\u4e2a\u5143\u7d20\u7684\u5185\u5b58\u5730\u5740\u53ef\u4ee5\u6839\u636e\u7d22\u5f15\u8ddd\u79bb\u6570\u7ec4\u5934\u90e8\u8ddd\u79bb\u8ba1\u7b97\u51fa\u6765\uff0c\u6bcf\u4e2a\u5143\u7d20\u90fd\u53ef\u4ee5\u901a\u8fc7\u6570\u7ec4\u7684\u7d22\u5f15\u4e0b\u6807\u5b9a\u4f4d\u3002\n\u94fe\u8868\uff1a\u8282\u70b9\u4e0d\u8fde\u7eed\u3002\u6240\u4ee5\u9700\u8981\u8282\u70b9\u4e0e\u8282\u70b9\u95f4\u7684\u5173\u8054\u3002\u65e0\u6cd5\u901a\u8fc7\u7d22\u5f15\u76f4\u63a5\u8bbf\u95ee\u94fe\u8868\u4e2d\u7684\u5143\u7d20\u3002\u5982\u679c\u8981\u8bbf\u95ee\u67d0\u4e2a\u8282\u70b9\uff0c\u9700\u8981\u4ece\u5934\u5f00\u59cb\u9010\u4e2a\u8bbf\u95eenext\uff0c\u76f4\u5230\u627e\u5230\u8be5\u8282\u70b9\u3002\u4e3a\u4e86\u786e\u4fdd\u8d77\u70b9\u8282\u70b9\u662f\u53ef\u62b5\u8fbe\u7684\uff0c\u6211\u4eec\u6709\u65f6\u8fd8\u4f1a\u8bbe\u5b9a\u4e00\u4e2a head \u6307\u9488\u6765\u4e13\u95e8\u6307\u5411\u94fe\u8868\u7684\u5f00\u59cb\u4f4d\u7f6e\uff1a"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-ts",children:"{\n  val:1,\n  next: {\n    val:2,\n    next:...\n  }\n}\n"})}),"\n",(0,i.jsx)(e.h3,{id:"\u94fe\u8868\u7684\u63d2\u5165\u4e0e\u5220\u9664",children:"\u94fe\u8868\u7684\u63d2\u5165\u4e0e\u5220\u9664"}),"\n",(0,i.jsx)(e.p,{children:"\u5c3e\u90e8\u63d2\u5165"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6700\u540e\u4e00\u4e2a\u8282\u70b9\u7684next\u6307\u5411\u65b0\u8282\u70b9"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u4e2d\u95f4\u8282\u70b9\u63d2\u5165\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6784\u5efa\u65b0\u8282\u70b9"}),"\n",(0,i.jsx)(e.li,{children:"\u65b0\u8282\u70b9\u7684next\u6307\u5411\u540e\u9762\u7684\u8282\u70b9"}),"\n",(0,i.jsxs)(e.li,{children:["\u524d\u4e00\u4e2a\u8282\u70b9\u7684next\u6307\u5411\u65b0\u8282\u70b9\n",(0,i.jsx)(e.img,{src:"https://s2.loli.net/2024/03/19/XFi6Cn7DymkfJcb.png",alt:"image.png"})]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5220\u9664\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u524d\u4e00\u4e2a\u8282\u70b9\u7684next\u6307\u5411\u8981\u5220\u9664\u8282\u70b9\u7684\u4e0b\u4e00\u4e2a\u8282\u70b9\uff08\u8df3\u8fc7\u8981\u5220\u9664\u7684\u8282\u70b9\u5373\u53ef\uff09"}),"\n"]}),"\n",(0,i.jsxs)(e.admonition,{title:"\u94fe\u8868\u4e0e\u6570\u7ec4\u5bf9\u6bd4",type:"tip",children:[(0,i.jsx)(e.p,{children:"\u5927\u591a\u6570\u8ba1\u7b97\u673a\u8bed\u8a00\u4e2d\uff0c\u6570\u7ec4\u90fd\u5bf9\u5e94\u7740\u4e00\u6bb5\u8fde\u7eed\u7684\u5185\u5b58\u7a7a\u95f4\uff0c\u800c\u94fe\u8868\u5219\u4e0d\u5bf9\u5e94\u8fde\u7eed\u7684\u5185\u5b58\u7a7a\u95f4\u3002JS \u4e2d\u4e0d\u4e00\u5b9a\u662f\uff0c\u5982\u679c\u6570\u7ec4\u4e2d\u5143\u7d20\u5b58\u5728\u4e0d\u540c\u7684\u7c7b\u578b\uff0c\u5bf9\u5e94\u7684\u5c31\u662f\u975e\u8fde\u7eed\u7684\u5185\u5b58\u3002\u6b64\u65f6 JS \u6570\u7ec4\u4e0d\u518d\u5177\u6709\u6570\u7ec4\u7684\u7279\u5f81\uff0c\u5176\u5e95\u5c42\u4f7f\u7528\u54c8\u5e0c\u6620\u5c04\u5206\u914d\u5185\u5b58\u7a7a\u95f4\uff0c\u662f\u7531\u5bf9\u8c61\u94fe\u8868\u6765\u5b9e\u73b0\u7684\u3002"}),(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u6570\u7ec4\u7684\u5b9a\u4e49\uff1a\u5b58\u50a8\u5728\u8fde\u7eed\u5185\u5b58\u7a7a\u95f4\u7684\u76f8\u540c\u7c7b\u578b\u7684\u5143\u7d20\u96c6\u5408\u3002 JS\u6570\u7ec4\u672a\u5fc5\u662f\u771f\u6b63\u7684\u6570\u7ec4\u3002"}),"\n"]}),(0,i.jsx)(e.p,{children:"\u5047\u8bbe\u6570\u7ec4\u7684\u957f\u5ea6\u662f n\uff0c\u90a3\u4e48\u56e0\u589e\u52a0/\u5220\u9664\u64cd\u4f5c\u5bfc\u81f4\u9700\u8981\u79fb\u52a8\u7684\u5143\u7d20\u6570\u91cf\uff0c\u5c31\u4f1a\u968f\u7740\u6570\u7ec4\u957f\u5ea6 n \u7684\u589e\u5927\u800c\u589e\u5927\uff0c\u5448\u4e00\u4e2a\u7ebf\u6027\u5173\u7cfb\u3002\u6240\u4ee5\u8bf4\u6570\u7ec4\u589e\u52a0/\u5220\u9664\u64cd\u4f5c\u5bf9\u5e94\u7684\u590d\u6742\u5ea6\u5c31\u662f O(n)\u3002\n\u94fe\u8868\u589e\u52a0/\u5220\u9664\u64cd\u4f5c\u5bf9\u5e94\u7684\u590d\u6742\u5ea6\u662f O(1)\u3002\u53ea\u9700\u8981\u6539\u53d8\u76ee\u6807\u8282\u70b9/\u524d\u9a71\u8282\u70b9/\u540e\u7ee7\u8282\u70b9\u7684\u6307\u9488\u6307\u5411\uff0c\u6240\u4ee5\u662f\u5e38\u6570\u7ea7\u522b\u590d\u6742\u5ea6\u3002"}),(0,i.jsx)(e.p,{children:"\u6570\u7ec4\u7684\u8bbf\u95ee\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee\u7d22\u5f15\uff0c\u590d\u6742\u5ea6\u662fO(1)\u3002\n\u94fe\u8868\u7684\u8bbf\u95ee\u5fc5\u987b\u904d\u5386\u6574\u4e2a\u94fe\u8868\uff0c\u904d\u5386\u7684\u590d\u6742\u5ea6\u662fO(n)\u3002"})]}),"\n",(0,i.jsx)(e.h2,{id:"tree-\u6811",children:"Tree \u6811"}),"\n",(0,i.jsx)(e.p,{children:"\u6811\u662f\u4e00\u79cd\u975e\u7ebf\u6027\u7ed3\u6784\uff0c\u6811\u8282\u70b9\u53ef\u4ee5\u6709\u591a\u4e2a\u5b50\u8282\u70b9\uff0c\u6bcf\u4e2a\u5b50\u8282\u70b9\u53ef\u4ee5\u7ee7\u7eed\u62e5\u6709\u5b50\u8282\u70b9\u3002"}),"\n",(0,i.jsx)(e.p,{children:(0,i.jsx)(e.img,{src:"https://s2.loli.net/2024/03/19/LU1iX3mxJn6Agav.png",alt:"image.png"})}),"\n",(0,i.jsx)(e.p,{children:"\u6811\u7684\u5c42\u6b21\uff1a\u6839\u8282\u70b9\u6240\u5728\u7684\u90a3\u4e00\u5c42\u8bb0\u4e3a\u7b2c\u4e00\u5c42\uff0c\u5176\u5b50\u8282\u70b9\u6240\u5728\u7684\u5c31\u662f\u7b2c\u4e8c\u5c42\uff0c\u4ee5\u6b64\u7c7b\u63a8\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u8282\u70b9\u7684\u9ad8\u5ea6\u4e0e\u6811\u7684\u9ad8\u5ea6\uff1a\u53f6\u5b50\u8282\u70b9\u9ad8\u5ea6\u8bb0\u4e3a1\uff0c\u6bcf\u5411\u4e0a\u4e00\u5c42\u9ad8\u5ea6\u52a01\uff0c\u76f4\u81f3\u76ee\u6807\u8282\u70b9\u5373\u4e3a\u8282\u70b9\u7684\u9ad8\u5ea6\u3002\u6811\u4e2d\u8282\u70b9\u7684\u6700\u5927\u9ad8\u5ea6\u88ab\u79f0\u4e3a\u6811\u7684\u9ad8\u5ea6\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5ea6\u7684\u6982\u5ff5\uff1a\u4e00\u4e2a\u8282\u70b9\u5f00\u53c9\u51fa\u53bb\u591a\u5c11\u4e2a\u5b50\u6811\uff0c\u88ab\u8bb0\u4e3a\u8282\u70b9\u7684\u201c\u5ea6\u201d\u3002\u6bd4\u5982\u6211\u4eec\u4e0a\u56fe\u4e2d\uff0c\u6839\u8282\u70b9\u7684\u201c\u5ea6\u201d\u5c31\u662f3\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u53f6\u5b50\u8282\u70b9\uff1a\u53f6\u5b50\u8282\u70b9\u5c31\u662f\u5ea6\u4e3a0\u7684\u8282\u70b9\u3002\u5728\u4e0a\u56fe\u4e2d\uff0c\u6700\u540e\u4e00\u5c42\u7684\u8282\u70b9\u7684\u5ea6\u5168\u90e8\u4e3a0\uff0c\u6240\u4ee5\u8fd9\u4e00\u5c42\u7684\u8282\u70b9\u90fd\u662f\u53f6\u5b50\u8282\u70b9\u3002"}),"\n",(0,i.jsx)(e.h3,{id:"\u4e8c\u53c9\u6811",children:"\u4e8c\u53c9\u6811"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5982\u679c\u6ca1\u6709\u6839\u8282\u70b9\uff0c\u53ef\u4ee5\u662f\u4e00\u68f5\u7a7a\u6811"}),"\n",(0,i.jsxs)(e.li,{children:["\u5982\u679c\u4e0d\u662f\u7a7a\u6811\uff0c\u5fc5\u987b",(0,i.jsx)(e.strong,{children:"\u7531\u6839\u8282\u70b9\u3001\u5de6\u5b50\u6811\u3001\u53f3\u5b50\u6811\u7ec4\u6210\uff0c\u4e14\u5de6\u53f3\u5b50\u6811\u90fd\u662f\u4e8c\u53c9\u6811"}),"\u3002\uff08\u666e\u901a\u7684\u6811\u4e0d\u4f1a\u533a\u5206\u5de6\u5b50\u6811\u548c\u53f3\u5b50\u6811\u3002\u4f46\u5728\u4e8c\u53c9\u6811\u4e2d\u5de6\u53f3\u5b50\u6811\u7684\u4f4d\u7f6e\u662f\u4e25\u683c\u7ea6\u5b9a\u3001\u4e0d\u80fd\u4ea4\u6362\u7684\uff09"]}),"\n"]})]})}function o(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(h,{...n})}):h(n)}},8672:(n,e,r)=>{r.d(e,{Z:()=>c,a:()=>t});var i=r(959);const s={},l=i.createContext(s);function t(n){const e=i.useContext(l);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function c(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:t(n.components),i.createElement(l.Provider,{value:e},n.children)}}}]);