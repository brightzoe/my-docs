"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[9431],{9083:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>l,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var s=n(1527),a=n(4744);const r={},c="useState",o={id:"react/advanced-react/useState",title:"useState",description:"const [state, setState] = useState(initState);",source:"@site/docs/react/advanced-react/useState.md",sourceDirName:"react/advanced-react",slug:"/react/advanced-react/useState",permalink:"/docs/react/advanced-react/useState",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/react/advanced-react/useState.md",tags:[],version:"current",lastUpdatedAt:1703064501,formattedLastUpdatedAt:"2023\u5e7412\u670820\u65e5",frontMatter:{},sidebar:"React",previous:{title:"React Hooks",permalink:"/docs/react/hooks"},next:{title:"useEffect",permalink:"/docs/react/advanced-react/useeffect"}},i={},d=[{value:"useState \u7b80\u6613\u539f\u7406",id:"usestate-\u7b80\u6613\u539f\u7406",level:2},{value:"\u652f\u6301\u4f7f\u7528\u591a\u4e2a useState",id:"\u652f\u6301\u4f7f\u7528\u591a\u4e2a-usestate",level:3},{value:"useState vs useReducer",id:"usestate-vs-usereducer",level:2},{value:"Reference",id:"reference",level:2}];function u(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"usestate",children:"useState"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"const [state, setState] = useState(initState);"})}),"\n",(0,s.jsx)(t.p,{children:"\u8c03\u7528 useState \u65f6\uff0c\u8fd4\u56de\u4e00\u4e2a\u6570\u7ec4\uff0cstate \u521d\u59cb\u503c\u4e3a\u5916\u90e8\u8c03\u7528 useState \u65f6\u4f20\u5165\u7684\u53c2\u6570\u3002"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"initState \u53ea\u4f1a\u5728\u7ec4\u4ef6\u7684\u521d\u59cb\u5316\u6e32\u67d3\u4e2d\u8d77\u4f5c\u7528\uff0c\u540e\u7eed\u6e32\u67d3\u4f1a\u88ab\u5ffd\u7565\u3002initState \u53ef\u4ee5\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u51fd\u6570\u7684\u8fd4\u56de\u503c\u4f1a\u4f5c\u4e3a initState \u7684\u503c,\u8fd9\u88ab\u79f0\u4e3a\u60f0\u6027\u521d\u59cb\u5316\u3002"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\u5f53\u6267\u884c setState \u65f6 state \u503c\u88ab\u66f4\u65b0\uff0cUI \u89c6\u56fe\u4e5f\u5c06\u88ab\u66f4\u65b0\u3002\u5373 useState \u8fd4\u56de\u7684 setState \u65e2\u66f4\u6539\u4e86 state \u7684\u503c\uff0c\u4e5f\u81ea\u52a8\u8c03\u7528\u4e86 render \u65b9\u6cd5\u89e6\u53d1\u89c6\u56fe\u66f4\u65b0\u3002"}),"\n",(0,s.jsx)(t.h2,{id:"usestate-\u7b80\u6613\u539f\u7406",children:"useState \u7b80\u6613\u539f\u7406"}),"\n",(0,s.jsx)(t.p,{children:"\u5229\u7528\u95ed\u5305\u5c01\u88c5\u7b80\u6613 useState \u96cf\u5f62\uff1a"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"const rootElement = document.getElementById('root');\nconst root = createRoot(rootElement);\nfunction render() {\n  root.render(<App />);\n}\n\nlet state;\nfunction useState<T>(initialState: T): [T, (newState: T) => void] {\n  let state = state || initialState;\n  function setState(newState: T) {\n    state = newState;\n    render();\n  }\n  return [state, setState];\n}\n\nrender(); // \u9996\u6b21\u6e32\u67d3\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\u4ee5\u4e0a useState \u5728\u540c\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\u65e0\u6cd5\u4f7f\u7528\u591a\u4e2a\u3002\u5728\u4e00\u4e2a\u7ec4\u4ef6\u4e2d\u591a\u6b21\u4f7f\u7528\uff0c\u53ea\u6709\u4e00\u4e2a state \u662f\u751f\u6548\u7684\u3002"}),"\n"]}),"\n",(0,s.jsx)(t.h3,{id:"\u652f\u6301\u4f7f\u7528\u591a\u4e2a-usestate",children:"\u652f\u6301\u4f7f\u7528\u591a\u4e2a useState"}),"\n",(0,s.jsx)(t.p,{children:"\u7528\u5168\u5c40\u6570\u7ec4\u4fdd\u5b58\u6bcf\u4e2a state \u7684\u987a\u5e8f\uff0c\u6bcf\u6b21\u66f4\u65b0 state\uff0c\u90fd\u4f1a\u66f4\u65b0\u6570\u7ec4\u4e2d\u7684\u5bf9\u5e94\u4f4d\u7f6e\u7684 state\u3002"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-ts",children:"function render() {\n  cursor = 0;\n  root.render(<App />);\n}\n\nconst state: any[] = [];\nlet cursor: number = 0;\nfunction useState<T>(initialState: T): [T, (newState: T) => void] {\n  const curCursor = cursor;\n  if (!state[curCursor]) {\n    state[curCursor] = initialState;\n  }\n  function setState(newState: T) {\n    state[curCursor] = newState;\n    render();\n  }\n  cursor++;\n  return [state[curCursor], setState];\n}\n"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"hooks \u5e95\u5c42\u4f7f\u7528\u94fe\u8868\u5b9e\u73b0\uff0c\u4f46\u4e0e\u4e0a\u9762\u7684\u601d\u60f3\u4e00\u81f4\uff0c\u6bcf\u4e2a useState \u6709\u4e25\u683c\u7684\u987a\u5e8f\u3002"}),"\n"]}),"\n",(0,s.jsxs)(t.admonition,{type:"caution",children:[(0,s.jsx)(t.p,{children:"\u4e0d\u80fd\u5728\u5faa\u73af/\u6761\u4ef6\u5224\u65ad/\u5d4c\u5957\u51fd\u6570\u4e2d\u4f7f\u7528 hook\uff0c\u8981\u4fdd\u8bc1\u6bcf\u4e2a hook \u7684\u8c03\u7528\u987a\u5e8f\u7a33\u5b9a\u3002"}),(0,s.jsx)(t.p,{children:"\u6bcf\u4e00\u4e2a hook \u90fd\u662f\u6709\u5e8f\u7684\u5b58\u5728 fiber \u4e0a\u7684\uff0c\u5982\u679c\u5728 if \u91cc\u7528 hook\uff0c\u53ef\u80fd\u4f1a\u5bfc\u81f4\u65b0\u7684 hook \u4f4d\u7f6e\u548c\u4e4b\u524d\u8bb0\u5f55\u7684\u4e0d\u4e00\u81f4\uff0c\u8fd9\u6837\u5c31\u4e0d\u77e5\u9053\u8981\u8ddf\u8c01\u5bf9\u6bd4\u4e86\uff0c\u5bfc\u81f4 hook \u529f\u80fd\u65e0\u6548\u3002"})]}),"\n",(0,s.jsx)(t.h2,{id:"usestate-vs-usereducer",children:"useState vs useReducer"}),"\n",(0,s.jsx)(t.p,{children:"useState \u662f\u7528 useReducer \u5b9e\u73b0\u7684\uff0cuseState \u8fd4\u56de\u7684\u51fd\u6570\u5185\u90e8\u5c01\u88c5\u4e86\u4e00\u4e2a dispatch\u3002"}),"\n",(0,s.jsx)(t.p,{children:"useState\uff1a\u7ec6\u7c92\u5ea6\u7684\u72b6\u6001\u7ba1\u7406\u3002 \u7ec4\u4ef6\u5185\u539f\u5b50\u7ea7\u6570\u636e\u72b6\u6001\u7ba1\u7406"}),"\n",(0,s.jsx)(t.p,{children:"useReducer\uff1a\u4f4e\u6210\u672c\u7684\u6570\u636e\u6d41\u3002\u7ec4\u4ef6\u95f4\u8f7b\u91cf\u6570\u636e\u7ba1\u7406"}),"\n",(0,s.jsx)(t.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://juejin.cn/post/6844903975838285838?share_token=d898bae0-23c6-4467-80f6-b41a345732d2#heading-1",children:"\u4e00\u6587\u5f7b\u5e95\u641e\u61c2 react hooks \u7684\u539f\u7406\u548c\u5b9e\u73b0 - \u6398\u91d1"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://gist.github.com/dongyuanxin/4281ee21eafdc0197d6ddea27bfbdbfd",children:"ReactHook \u7684\u539f\u7406\u548c TS \u5b9e\u73b0"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://medium.com/@ryardley/react-hooks-not-magic-just-arrays-cd4f1857236e",children:"React hooks: not magic, just arrays | by Rudi Yardley | Medium"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://github.com/brickspert/blog/issues/26",children:"React Hooks \u539f\u7406 \xb7 Issue #26 \xb7 brickspert/blog"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://www.yuque.com/lxylona/note/knwwpt",children:"React Hooks: useState \u548c useReducer \u6709\u4ec0\u4e48\u533a\u522b\uff1f \xb7 \u8bed\u96c0"})}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},4744:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>c});var s=n(959);const a={},r=s.createContext(a);function c(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);