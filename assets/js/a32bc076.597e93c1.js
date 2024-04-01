"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[1207],{2900:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>a,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var t=r(1527),s=r(8672);const i={sidebar_position:5},l="\u4e8c\u53c9\u6811\u7684\u904d\u5386",o={id:"algorithm/traverse-of-tree",title:"\u4e8c\u53c9\u6811\u7684\u904d\u5386",description:"\u9012\u5f52\uff1a\u76f4\u63a5\u6216\u8005\u95f4\u63a5\u5730\u8c03\u7528\u51fd\u6570\u672c\u8eab\u3002\u9012\u5f52\u610f\u5473\u7740\u53cd\u590d\u3002",source:"@site/docs/algorithm/traverse-of-tree.md",sourceDirName:"algorithm",slug:"/algorithm/traverse-of-tree",permalink:"/docs/algorithm/traverse-of-tree",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/algorithm/traverse-of-tree.md",tags:[],version:"current",lastUpdatedAt:1711965777,formattedLastUpdatedAt:"2024\u5e744\u67081\u65e5",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"DataStructure",previous:{title:"\u5b57\u7b26\u4e32\u95ee\u9898",permalink:"/docs/algorithm/string-problem"},next:{title:"\u9012\u5f52\u4e0e\u56de\u6eaf",permalink:"/docs/algorithm/backtracking"}},c={},d=[{value:"\u524d\u5e8f\u904d\u5386",id:"\u524d\u5e8f\u904d\u5386",level:2},{value:"\u8fed\u4ee3\u5f0f",id:"\u8fed\u4ee3\u5f0f",level:3},{value:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22 DFS",id:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22-dfs",level:2},{value:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22 BFS",id:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22-bfs",level:2},{value:"Reference",id:"reference",level:2}];function h(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"\u4e8c\u53c9\u6811\u7684\u904d\u5386",children:"\u4e8c\u53c9\u6811\u7684\u904d\u5386"}),"\n",(0,t.jsx)(n.p,{children:"\u9012\u5f52\uff1a\u76f4\u63a5\u6216\u8005\u95f4\u63a5\u5730\u8c03\u7528\u51fd\u6570\u672c\u8eab\u3002\u9012\u5f52\u610f\u5473\u7740\u53cd\u590d\u3002\n\u4e8c\u53c9\u6811\u7684\u904d\u5386\uff1a\u524d\u5e8f\u904d\u5386\u3001\u4e2d\u5e8f\u904d\u5386\u3001\u540e\u5e8f\u904d\u5386\u3001\u5c42\u5e8f\u904d\u5386"}),"\n",(0,t.jsx)(n.p,{children:"\u4fdd\u8bc1\u201c\u5de6\u5b50\u6811\u4e00\u5b9a\u5148\u4e8e\u53f3\u5b50\u6811\u904d\u5386\u201d\u8fd9\u4e2a\u524d\u63d0\uff0c\u90a3\u4e48\u904d\u5386\u7684\u53ef\u80fd\u987a\u5e8f\u4e5f\u4e0d\u8fc7\u4e09\u79cd\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6839\u7ed3\u70b9 -> \u5de6\u5b50\u6811 -> \u53f3\u5b50\u6811"}),"\n",(0,t.jsx)(n.li,{children:"\u5de6\u5b50\u6811 -> \u6839\u7ed3\u70b9 -> \u53f3\u5b50\u6811"}),"\n",(0,t.jsx)(n.li,{children:"\u5de6\u5b50\u6811 -> \u53f3\u5b50\u6811 -> \u6839\u7ed3\u70b9"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6240\u8c13\u524d\u5e8f/\u4e2d\u5e8f/\u540e\u5e8f\u904d\u5386\uff0c\u6307\u7684\u662f\u6839\u8282\u70b9\u7684\u904d\u5386\u65f6\u673a\u3002"}),"\n",(0,t.jsx)(n.h2,{id:"\u524d\u5e8f\u904d\u5386",children:"\u524d\u5e8f\u904d\u5386"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u9012\u5f52\u5f0f"}),"\n",(0,t.jsx)(n.li,{children:"\u9012\u5f52\u8fb9\u754c"}),"\n"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"const root = {\n  val: 'A',\n  left: {\n    val: 'B',\n    left: {\n      val: 'D',\n    },\n    right: {\n      val: 'E',\n    },\n  },\n  right: {\n    val: 'C',\n    right: {\n      val: 'F',\n    },\n  },\n};\n\nfunction preorder(root) {\n  // \u9012\u5f52\u8fb9\u754c\uff1a\u5230\u4e00\u4e2a\u7a7a\u8282\u70b9\n  if (!root) return;\n  console.log(root.val);\n  preorder(root.left);\n  preorder(root.right);\n}\npreorder(root);\n"})}),"\n",(0,t.jsx)(n.h3,{id:"\u8fed\u4ee3\u5f0f",children:"\u8fed\u4ee3\u5f0f"}),"\n",(0,t.jsx)(n.p,{children:"\u662f\u6808\u7684\u601d\u60f3.\u51fa\u6808\u987a\u5e8f\u4e3a \u6839-\u5de6-\u53f3."}),"\n",(0,t.jsx)(n.p,{children:"\u51fa\u5165\u6808\u987a\u5e8f\u5e94\u8be5\u662f\u8fd9\u6837\u7684\uff1a"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"\u5c06\u6839\u7ed3\u70b9\u5165\u6808"}),"\n",(0,t.jsx)(n.li,{children:"\u53d6\u51fa\u6808\u9876\u7ed3\u70b9\uff0c\u5c06\u7ed3\u70b9\u503c push \u8fdb\u7ed3\u679c\u6570\u7ec4"}),"\n",(0,t.jsx)(n.li,{children:"\u82e5\u6808\u9876\u7ed3\u70b9\u6709\u53f3\u5b69\u5b50\uff0c\u5219\u5c06\u53f3\u5b69\u5b50\u5165\u6808"}),"\n",(0,t.jsx)(n.li,{children:"\u82e5\u6808\u9876\u7ed3\u70b9\u6709\u5de6\u5b69\u5b50\uff0c\u5219\u5c06\u5de6\u5b69\u5b50\u5165\u6808"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u91cd\u590d 2\u30013\u30014 \u6b65\u9aa4\uff0c\u76f4\u81f3\u6808\u7a7a\uff0c\u6211\u4eec\u5c31\u80fd\u5f97\u5230\u4e00\u4e2a\u5148\u5e8f\u904d\u5386\u5e8f\u5217\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"function preOrderTraversal(root: TreeNode) {\n  const res: string[] = [];\n  // \u8fb9\u754c\u6761\u4ef6\n  if (!root) {\n    return res;\n  }\n  const stack = [];\n  // \u6839\u8282\u70b9\u5165\u6808\n  stack.push(root);\n  // \u82e5\u6808\u4e0d\u4e3a\u7a7a\u5219\u91cd\u590d\u51fa\u6808\u5165\u6808\u64cd\u4f5c\n  while (stack.length) {\n    // \u6808\u9876\u4e3a\u5f53\u524d\u5904\u7406\u7684\u8282\u70b9\n    const top: TreeNode = stack.pop()!;\n    // \u5f53\u524d\u8282\u70b9\u5c31\u662f\u5f53\u524d\u5b50\u6811\u7684\u6839\u8282\u70b9,\u51fa\u6808\n    res.push(top.val!);\n    // \u53f3\u5b50\u6811\u5165\u6808\n    if (top.right) {\n      stack.push(top.right);\n    }\n    // \u5de6\u5b50\u6811\u5165\u6808\n    if (top.left) {\n      stack.push(top.left);\n    }\n  }\n  return res;\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22-dfs",children:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22 DFS"}),"\n",(0,t.jsx)(n.p,{children:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u7684\u6838\u5fc3\u601d\u60f3\uff0c\u662f\u8bd5\u56fe\u7a77\u4e3e\u6240\u6709\u7684\u5b8c\u6574\u8def\u5f84\u3002"}),"\n",(0,t.jsx)(n.p,{children:"\u6df1\u5ea6\u4f18\u5148\u641c\u7d22\u7684\u8fc7\u7a0b\u53ef\u4ee5\u8f6c\u5316\u4e3a\u4e00\u7cfb\u5217\u7684\u5165\u6808\u3001\u51fa\u6808\u64cd\u4f5c\u3002DFS \u4e2d\uff0c\u6211\u4eec\u5f80\u5f80\u4f7f\u7528\u9012\u5f52\u6765\u6a21\u62df\u5165\u6808\u3001\u51fa\u6808\u7684\u903b\u8f91\u3002"}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"\u9012\u5f52\u5f0f\u5c31\u662f\u6211\u4eec\u9009\u62e9\u9053\u8def\u7684\u8fc7\u7a0b\uff0c\u800c\u9012\u5f52\u8fb9\u754c\u5c31\u662f\u6b7b\u80e1\u540c\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u9012\u5f52\u7684\u672c\u8d28\u5c31\u662f\u6808\uff1a"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u51fd\u6570\u8c03\u7528\u7684\u5e95\u5c42\u662f\u7528\u6808\u5b9e\u73b0\u7684\uff0c\u6240\u8c13\u51fd\u6570\u8c03\u7528\u6808\u3002preorder\u8c03\u7528\u4e00\u6b21\u81ea\u5df1\uff0c\u76f8\u5173\u7684\u51fd\u6570\u4e0a\u4e0b\u6587\u5c31\u4f1a\u88abpush\u8fdb\u51fd\u6570\u8c03\u7528\u6808\uff1b\u51fd\u6570\u6267\u884c\u5b8c\u6bd5\u540e\u5bf9\u5e94\u7684\u4e0a\u4e0b\u6587\u5c31\u4f1a\u51b2\u8c03\u7528\u6808\u88abpop\u51fa\u6765\u3002"}),"\n",(0,t.jsx)(n.li,{children:"DFS\u662f\u4e00\u79cd\u601d\u60f3\uff0c\u89e3\u9898\u573a\u666f\u6709\u5f88\u591a\u3002\u6709\u4e00\u7c7b\u8981\u6c42\u6211\u4eec\u8bb0\u5f55\u6bcf\u4e00\u5c42\u9012\u5f52\u5f0f\u91cc\u8def\u5f84\u7684\u72b6\u6001\uff0c\u6b64\u65f6\u5c31\u4f1a\u5f3a\u4f9d\u8d56\u6808\u7ed3\u6784\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22-bfs",children:"\u5e7f\u5ea6\u4f18\u5148\u641c\u7d22 BFS"}),"\n",(0,t.jsx)(n.p,{children:"\u4e8c\u53c9\u6811\u5c42\u6b21\u904d\u5386"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\u6bcf\u8bbf\u95ee\u5b8c\u4e00\u4e2a\u5750\u6807\u540e\uff0c\u8fd9\u4e2a\u5750\u6807\u5728\u540e\u7eed\u7684\u904d\u5386\u4e2d\u90fd\u4e0d\u4f1a\u518d\u7528\u5230\u4e86\u3002\u53ef\u4ee5\u88ab\u4e22\u5f03\u6389\u3002"}),"\n",(0,t.jsx)(n.li,{children:"\u7ad9\u5728\u67d0\u4e2a\u786e\u5b9a\u7684\u5750\u6807\u4e0a\uff0c\u6211\u4eec\u6240\u89c2\u5bdf\u5230\u7684\u53ef\u4ee5\u76f4\u63a5\u62b5\u8fbe\u7684\u5750\u6807\u662f\u9700\u8981\u88ab\u8bb0\u5f55\u4e0b\u6765\u7684\uff0c\u540e\u9762\u8fd8\u9700\u8981\u7528\u5230\u3002"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"\u6240\u4ee5\u662f\u5148\u5165\u5148\u51fa\u7684\u89c4\u5219\uff0cBFS\u7b97\u6cd5\u7684\u6838\u5fc3\u662f\u961f\u5217\u3002"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ts",children:"// \u5c42\u6b21\u904d\u5386\u626b\u63cf\nfunction bfs(root: TreeNode) {\n  const queue = [];\n  queue.push(root);\n\n  while (queue.length) {\n    const top: TreeNode = queue[0];\n    console.log(top.val);\n    top.left && queue.push(top.left);\n    top.right && queue.push(top.right);\n    queue.shift();\n  }\n}\n"})}),"\n",(0,t.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://juejin.cn/book/6844733800300150797/section/6844733800346288142#heading-4",children:"\u4e8c\u53c9\u6811\u904d\u5386"})}),"\n"]})]})}function a(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8672:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>l});var t=r(959);const s={},i=t.createContext(s);function l(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);