"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[6091],{2570:(n,e,r)=>{r.r(e),r.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>c,metadata:()=>l,toc:()=>u});var t=r(1527),s=r(8672);const c={},i="\u9012\u5f52\u4e0e\u56de\u6eaf",l={id:"algorithm/backtracking",title:"\u9012\u5f52\u4e0e\u56de\u6eaf",description:"\u56de\u6eaf\u7b97\u6cd5\u7684\u57fa\u672c\u601d\u60f3\u662f\uff1a\u4ece\u4e00\u6761\u8def\u5f80\u524d\u8d70\uff0c\u80fd\u8fdb\u5219\u8fdb\uff0c\u4e0d\u80fd\u8fdb\u5219\u9000\u56de\u6765\uff0c\u6362\u4e00\u6761\u8def\u518d\u8bd5\u3002",source:"@site/docs/algorithm/backtracking.md",sourceDirName:"algorithm",slug:"/algorithm/backtracking",permalink:"/docs/algorithm/backtracking",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/algorithm/backtracking.md",tags:[],version:"current",lastUpdatedAt:1711965777,formattedLastUpdatedAt:"2024\u5e744\u67081\u65e5",frontMatter:{},sidebar:"DataStructure",previous:{title:"\u4e8c\u53c9\u6811\u7684\u904d\u5386",permalink:"/docs/algorithm/traverse-of-tree"},next:{title:"\u94fe\u8868\u95ee\u9898",permalink:"/docs/algorithm/list-problem"}},o={},u=[];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.h1,{id:"\u9012\u5f52\u4e0e\u56de\u6eaf",children:"\u9012\u5f52\u4e0e\u56de\u6eaf"}),"\n",(0,t.jsx)(e.p,{children:"\u56de\u6eaf\u7b97\u6cd5\u7684\u57fa\u672c\u601d\u60f3\u662f\uff1a\u4ece\u4e00\u6761\u8def\u5f80\u524d\u8d70\uff0c\u80fd\u8fdb\u5219\u8fdb\uff0c\u4e0d\u80fd\u8fdb\u5219\u9000\u56de\u6765\uff0c\u6362\u4e00\u6761\u8def\u518d\u8bd5\u3002"}),"\n",(0,t.jsx)(e.p,{children:"\u4ec0\u4e48\u65f6\u5019\u7528\u56de\u6eaf\uff1f"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u9898\u76ee\u4e2d\u6697\u793a\u4e86\u4e00\u4e2a\u6216\u591a\u4e2a\u89e3,\u9700\u8981\u5217\u4e3e\u6bcf\u4e00\u4e2a\u89e3\u7684\u5185\u5bb9,\u4e00\u5b9a\u8981\u60f3\u5230DFS,\u9012\u5f52\u548c\u56de\u6eaf."}),"\n",(0,t.jsx)(e.li,{children:"\u9898\u76ee\u53ef\u4ee5\u8f6c\u5316\u4e3a\u6811\u5f62\u903b\u8f91."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u4e3a\u4ec0\u4e48\u7528?"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["\u9012\u5f52\u4e0e\u56de\u6eaf\u672c\u5c31\u662f\u7a77\u4e3e\u7684\u8fc7\u7a0b.\u5217\u4e3e\u6bcf\u4e00\u4e2a\u89e3\u7684\u5185\u5bb9,\u89e3\u662f\u57fa\u4e8e\u7a77\u4e3e\u601d\u60f3,\u5e76\u5bf9\u641c\u7d22\u6811\u8fdb\u884c\u6070\u5f53\u526a\u679d.","\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"\u53e6\u4e00\u79cd\u95ee\u9898,\u4e0d\u95ee\u89e3\u7684\u5185\u5bb9,\u53ea\u95ee\u89e3\u7684\u4e2a\u6570.\u901a\u5e38\u4e0d\u9002\u7528 DFS \u800c\u662f\u52a8\u6001\u89c4\u5212."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u600e\u4e48\u7528?"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u4e00\u4e2a\u6a21\u578b:\u6811\u5f62\u903b\u8f91\u6a21\u578b.\u4e24\u4e2a\u8981\u70b9:\u9012\u5f52\u5f0f\u548c\u9012\u5f52\u8fb9\u754c"}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"\u627e\u5751\u4f4d.\u4e00\u4e2a\u5751\u4f4d\u5bf9\u5e94\u6811\u4e2d\u7684\u4e00\u5c42."}),"\n",(0,t.jsx)(e.p,{children:"\u6bcf\u4e00\u5c42\u7684\u5904\u7406\u903b\u8f91\u4e00\u81f4,\u8fd9\u4e2a\u903b\u8f91\u5c31\u662f\u9012\u5f52\u5f0f\u7684\u5185\u5bb9.\u800c\u9012\u5f52\u8fb9\u754c\u8981\u4e48\u5728\u9898\u76ee\u4e2d\u7ea6\u675f\u597d\u4e86,\u8981\u4e48\u9ed8\u8ba4\u662f\u5751\u4f4d\u7684\u6570\u76ee\u8fb9\u754c."}),"\n",(0,t.jsx)(e.p,{children:"\u4f2a\u4ee3\u7801:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"function xxx(\u5165\u53c2) {\n  //\u524d\u671f\u7684\u53d8\u91cf\u5b9a\u4e49\u3001\u7f13\u5b58\u7b49\u51c6\u5907\u5de5\u4f5c\n\n  // \u5b9a\u4e49\u8def\u5f84\u6808\n  const path = []\n  // \u8fdb\u5165 dfs\n  dfs(\u8d77\u70b9)\n  // \u5b9a\u4e49 dfs\n  dfs(\u9012\u5f52\u53c2\u6570) {\n    if(\u5230\u8fbe\u4e86\u9012\u5f52\u8fb9\u754c) {\n      //\u7ed3\u5408\u9898\u610f\u5904\u7406\u8fb9\u754c\u903b\u8f91\uff0c\u5f80\u5f80\u548c path \u5185\u5bb9\u6709\u5173\n      return\n    }\n    // \u6ce8\u610f\u8fd9\u91cc\u4e5f\u53ef\u80fd\u4e0d\u662f for\uff0c\u89c6\u9898\u610f\u51b3\u5b9a\n    for(\u904d\u5386\u5751\u4f4d\u7684\u53ef\u9009\u503c) {\n      path.push(\u5f53\u524d\u9009\u4e2d\u503c)\n     // \u5904\u7406\u5751\u4f4d\u672c\u8eab\u7684\u76f8\u5173\u903b\u8f91\n      path.pop()\n    }\n  }\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/permutations",children:"46. \u5168\u6392\u5217 - \u529b\u6263\uff08LeetCode\uff09"}),"\u2b50\u2b50\u2b50\u2728"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u6392\u5217\u95ee\u9898\u3002\u9012\u5f52\u4e0e\u56de\u6eaf"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"function permute(nums: number[]): number[][] {\n  const res: number[][] = [];\n  // \u4ece\u521d\u59cb\u7ed3\u6784\u5f00\u59cb\n  dfs([]);\n  return res;\n  function dfs(path: number[]) {\n    // \u5230\u9012\u5f52\u8fb9\u754c\u4e86\uff0c\u751f\u6210\u4e00\u7ec4\u7ed3\u679c\uff0c\u7ed3\u675f\n    if (path.length === nums.length) {\n      res.push([...path]);\n      return;\n    }\n    for (let i = 0; i < nums.length; i++) {\n      // \u7ed9\u4e0b\u4e00\u4e2a\u5751\u4f4d\u586b\u5165\u4e00\u4e2a\u6570\n      if (!path.includes(nums[i])) {\n        path.push(nums[i]);\n        dfs(path);\n        // \u56de\u6eaf\n        path.pop();\n      }\n    }\n  }\n}\nconsole.log(permute([1, 2, 3]));\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/subsets/description/",children:"78. \u5b50\u96c6 - \u529b\u6263\uff08LeetCode\uff09"}),"\u2b50\u2b50\u2b50\u2728"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7ec4\u5408\u95ee\u9898\u3002\u9012\u5f52\u4e0e\u56de\u6eaf\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u6df1\u5ea6\u4f18\u5148\u904d\u5386\u3002\u5bfb\u627e\u53d8\u4e0e\u4e0d\u53d8\u3002\u53d8\u7684\u662f\u6bcf\u4e2a\u7ec4\u5408\u7684\u957f\u5ea6\uff0c\u4e0d\u53d8\u7684\u662f\u53ef\u4ee5\u9009\u62e9\u7684\u5143\u7d20\u3002\u6240\u4ee5"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"function subsets(nums: number[]): number[][] {\n  const res: number[][] = [];\n  const curr = [];\n  backtrack(0);\n  return res;\n  // nums\u7684\u6bcf\u4e2a\u4f4d\u7f6e \u90fd\u53ef\u4ee5\u4f5c\u4e3a\u8d77\u70b9\uff0c\u5206\u522b\u4e3a\u53d6\u6216\u4e0d\u53d6\u5f53\u524d\u5143\u7d20\n  function backtrack(start: number) {\n    // \uff08\u7ec8\u6b62\u6761\u4ef6\uff09\uff0c\u5b58\u653e\u7ed3\u679c\n    res.push([...curr]);\n    for (let i = start; i < nums.length; i++) {\n      // \u53d6\u4e86\n      curr.push(nums[i]);\n      // \u9012\u5f52\n      backtrack(i + 1);\n      // \u56de\u6eaf\n      curr.pop();\n    }\n  }\n}\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"https://leetcode.cn/problems/combinations/description/",children:"77. \u7ec4\u5408 - \u529b\u6263\uff08LeetCode\uff09"}),"\u2b50\u2b50\u2b50\u2728"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"\u7ec4\u5408\u3002\u9012\u5f52\u4e0e\u56de\u6eaf\uff0c\u5e76\u63d0\u524d\u526a\u679d\u3002"}),"\n",(0,t.jsx)(e.li,{children:"\u867d\u7136\u7ed9\u51fa\u7684\u4e0d\u662fnumber[]\uff0c\u4f46\u662f\u7ea6\u5b9a\u4e86\u6570\u5b57\u8303\u56f4\u4e3a1~n\uff0c\u672c\u8d28\u662f\u4e00\u6837\u7684\u3002"}),"\n"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-ts",children:"function combine(n: number, k: number) {\n  const res: number[][] = [];\n  const curr: number[] = [];\n  dfs(1);\n  return res;\n  // \u4ece\u5f53\u524d\u904d\u5386\u5230\u7684\u6570\u5b57\u5f00\u59cb\n  function dfs(idx: number) {\n    // \u6ee1\u8db3\u4e00\u7ec4\u6761\u4ef6,\u526a\u679d.\u66f4\u65b0\u7ed3\u679c\n    if (curr.length === k) {\n      res.push([...curr]);\n      return;\n    }\n    // \u4ece\u5f53\u524d\u6570\u5b57\u5f00\u59cb\u5411\u540e\u904d\u5386\n    for (let i = idx; i <= n; i++) {\n      curr.push(i);\n      dfs(i + 1);\n      curr.pop();\n    }\n  }\n}\n"})})]})}function d(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},8672:(n,e,r)=>{r.d(e,{Z:()=>l,a:()=>i});var t=r(959);const s={},c=t.createContext(s);function i(n){const e=t.useContext(c);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:i(n.components),t.createElement(c.Provider,{value:e},n.children)}}}]);