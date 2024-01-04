"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[8782],{5841:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var r=t(1527),l=t(4744);const o={},s="\u53d7\u63a7\u7ec4\u4ef6\u4e0e\u975e\u53d7\u63a7\u7ec4\u4ef6",c={id:"react/controlled-and-uncontrolled-components",title:"\u53d7\u63a7\u7ec4\u4ef6\u4e0e\u975e\u53d7\u63a7\u7ec4\u4ef6",description:"\u53d7\u63a7\u7ec4\u4ef6",source:"@site/docs/react/controlled-and-uncontrolled-components.md",sourceDirName:"react",slug:"/react/controlled-and-uncontrolled-components",permalink:"/docs/react/controlled-and-uncontrolled-components",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/react/controlled-and-uncontrolled-components.md",tags:[],version:"current",lastUpdatedAt:1704360381,formattedLastUpdatedAt:"2024\u5e741\u67084\u65e5",frontMatter:{},sidebar:"React",previous:{title:"useEffect",permalink:"/docs/react/advanced-react/useeffect"},next:{title:"React \u8bbe\u8ba1\u6a21\u5f0f\u548c\u6700\u4f73\u5b9e\u8df5",permalink:"/docs/react/design-pattern-and-best-practices"}},a={},i=[{value:"\u53d7\u63a7\u7ec4\u4ef6",id:"\u53d7\u63a7\u7ec4\u4ef6",level:2},{value:"\u975e\u53d7\u63a7\u7ec4\u4ef6",id:"\u975e\u53d7\u63a7\u7ec4\u4ef6",level:2},{value:"\u4e0d\u8981\u4ee5\u975e\u53d7\u63a7\u7684\u7ec4\u4ef6\u7684\u4f7f\u7528\u65b9\u5f0f\u8c03\u7528\u53d7\u63a7\u7ec4\u4ef6",id:"\u4e0d\u8981\u4ee5\u975e\u53d7\u63a7\u7684\u7ec4\u4ef6\u7684\u4f7f\u7528\u65b9\u5f0f\u8c03\u7528\u53d7\u63a7\u7ec4\u4ef6",level:2},{value:"Reference",id:"reference",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"\u53d7\u63a7\u7ec4\u4ef6\u4e0e\u975e\u53d7\u63a7\u7ec4\u4ef6",children:"\u53d7\u63a7\u7ec4\u4ef6\u4e0e\u975e\u53d7\u63a7\u7ec4\u4ef6"}),"\n",(0,r.jsx)(n.h2,{id:"\u53d7\u63a7\u7ec4\u4ef6",children:"\u53d7\u63a7\u7ec4\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"\u4ece input \u8bf4\u8d77"})}),"\n",(0,r.jsx)(n.p,{children:"HTML \u4e2d\u539f\u751f\u7684 input\uff0c\u968f\u7740\u7528\u6237\u7684\u8f93\u5165\u53ef\u4ee5\u6539\u53d8 UI \u7684\u663e\u793a\uff0c\u5185\u90e8\u6709\u4e00\u4e2a\u6211\u4eec\u770b\u4e0d\u89c1\u7684\u72b6\u6001\u8fdb\u884c\u63a7\u5236\u3002\u5982\u679c\u6211\u4eec\u8981\u63a7\u5236\u8fd9\u4e2a input \u7684\u5185\u5bb9\uff0c\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a state\uff1aname\uff0c\u5e76\u5728 input \u7684 value \u8bbe\u7f6e\u4e3a this.state.name\uff0c\u8fd9\u6837 input \u7684\u5185\u5bb9\u4e0d\u4f1a\u968f\u7740\u7528\u6237\u7684\u8f93\u5165\u800c\u6539\u53d8\uff0cvalue \u5b8c\u5168\u53d6\u51b3\u4e8e state\uff0c\u4f46\u76ee\u524d input \u662f\u53ea\u8bfb\u7684\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u73b0\u5728\u8981\u63a7\u5236 input\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u4e00\u4e2a onChange \u4e8b\u4ef6\uff0c\u901a\u8fc7 onChange \u4e8b\u4ef6\u76d1\u542c\u8f93\u5165\u5185\u5bb9\uff0c\u5e76 setState \u66f4\u65b0 state\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u6211\u4eec\u8bbe\u7f6e input.value \u5b8c\u5168\u53d6\u51b3\u4e8e state\uff0c\u518d\u901a\u8fc7\u4e8b\u4ef6\u66f4\u65b0 state,\u63a7\u5236\u7528\u6237\u7684\u8f93\u5165\u8fc7\u7a0b\u4e2d\uff0cinput \u7684\u6570\u636e\u5982\u4f55\u663e\u793a\uff0cstate \u662f\u552f\u4e00\u7684\u6570\u636e\u6e90\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u975e\u53d7\u63a7\u7ec4\u4ef6",children:"\u975e\u53d7\u63a7\u7ec4\u4ef6"}),"\n",(0,r.jsx)(n.p,{children:"\u6700\u597d\u662f\u7528\u53d7\u63a7\u7ec4\u4ef6\u6765\u5904\u7406\u8868\u5355\u6570\u636e\uff0c\u53d7\u63a7\u7ec4\u4ef6\u4e2d\uff0c\u8868\u5355\u6570\u636e\u5b8c\u5168\u7531 React \u7ec4\u4ef6\u7ba1\u7406\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u800c\u975e\u53d7\u63a7\u7ec4\u4ef6\uff0c\u8868\u5355\u6570\u636e\u662f\u7531 DOM \u8282\u70b9\u5904\u7406\u7684\u3002\u8981\u62ff\u5230\u8868\u5355\u4e2d\u7684\u6570\u636e\uff0c\u9700\u8981\u901a\u8fc7 ref \u83b7\u53d6\u3002\u975e\u53d7\u63a7\u7ec4\u4ef6\u4e2d\u5982\u679c\u9700\u8981\u9ed8\u8ba4\u503c\uff0c\u53ef\u4ee5\u8bbe\u7f6e defaultValue \u5c5e\u6027\u6765\u6307\u5b9a\u8868\u5355\u5143\u7d20\u7684\u9ed8\u8ba4\u503c\u3002"}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"file \u7c7b\u578b\u7684\u8868\u5355\u63a7\u4ef6\u59cb\u7ec8\u662f\u4e00\u4e2a\u4e0d\u53d7\u63a7\u5236\u7684\u7ec4\u4ef6\uff0c\u53ea\u80fd\u7531\u7528\u6237\u8bbe\u7f6e\u3002"}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"\u4e0d\u8981\u4ee5\u975e\u53d7\u63a7\u7684\u7ec4\u4ef6\u7684\u4f7f\u7528\u65b9\u5f0f\u8c03\u7528\u53d7\u63a7\u7ec4\u4ef6",children:"\u4e0d\u8981\u4ee5\u975e\u53d7\u63a7\u7684\u7ec4\u4ef6\u7684\u4f7f\u7528\u65b9\u5f0f\u8c03\u7528\u53d7\u63a7\u7ec4\u4ef6"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live noInline",live:!0,children:"// \u7ec4\u4ef6\u63d0\u4f9b\u65b9\nfunction Input({ defaultValue }) {\n  const [value, setValue] = React.useState(defaultValue);\n  return <input value={value} onChange={(e) => setValue(e.target.value)} />;\n}\n\n// \u8c03\u7528\u65b9\nfunction Demo() {\n  return <Input defaultValue={1} />;\n}\nrender(<Demo />);\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u6b64\u65f6 Input \u7ec4\u4ef6\u672c\u8eab\u662f\u4e00\u4e2a\u53d7\u63a7\u7ec4\u4ef6, \u4f46\u4e0e\u4e4b\u76f8\u5bf9\u7684\u8c03\u7528\u65b9\u5931\u53bb\u4e86\u66f4\u6539 Input \u7ec4\u4ef6\u503c\u7684\u63a7\u5236\u6743, \u6240\u4ee5\u5bf9\u8c03\u7528\u65b9\u800c\u8a00, Input \u7ec4\u4ef6\u662f\u4e00\u4e2a\u975e\u53d7\u63a7\u7ec4\u4ef6\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5e94\u6539\u4e3a\uff1a"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-jsx",metastring:"live noInline",live:!0,children:"// \u7ec4\u4ef6\u63d0\u4f9b\u65b9\nfunction Input({ value, onChange }) {\n  return <input value={value} onChange={onChange} />;\n}\n\n// \u8c03\u7528\u65b9\nfunction Demo() {\n  const [value, setValue] = React.useState(1);\n  return <Input value={value} onChange={(e) => setValue(e.target.value)} />;\n}\nrender(<Demo />);\n"})}),"\n",(0,r.jsx)(n.p,{children:"\u5b50\u7ec4\u4ef6\u4ea4\u51fa\u63a7\u5236\u6743\uff0c\u901a\u8fc7\u7236\u7ec4\u4ef6\u5b9e\u73b0\u63a7\u5236\u7ec4\u4ef6\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u53d7\u63a7\u4ee5\u53ca\u975e\u53d7\u63a7\u7ec4\u4ef6\u7684\u8fb9\u754c\u5212\u5206\u53d6\u51b3\u4e8e**\u5f53\u524d\u7ec4\u4ef6\u5bf9\u4e8e\u5b50\u7ec4\u4ef6\u503c\u7684\u53d8\u66f4\u662f\u5426\u62e5\u6709\u63a7\u5236\u6743\u3002**\u5982\u82e5\u6709\u5219\u8be5\u5b50\u7ec4\u4ef6\u662f\u5f53\u524d\u7ec4\u4ef6\u7684\u53d7\u63a7\u7ec4\u4ef6\uff1b\u5982\u82e5\u6ca1\u6709\u5219\u8be5\u5b50\u7ec4\u4ef6\u662f\u5f53\u524d\u7ec4\u4ef6\u7684\u975e\u53d7\u63a7\u7ec4\u4ef6\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://zh-hans.reactjs.org/docs/forms.html#controlled-components",children:"\u53d7\u63a7\u7ec4\u4ef6"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://zh-hans.reactjs.org/docs/uncontrolled-components.html",children:"\u975e\u53d7\u63a7\u7ec4\u4ef6"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://goshakkk.name/controlled-vs-uncontrolled-inputs-react/",children:"\u4f55\u65f6\u4f7f\u7528\u53d7\u63a7\u7ec4\u4ef6\uff0c\u4f55\u65f6\u4f7f\u7528\u975e\u53d7\u63a7\u7ec4\u4ef6"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://muyunyun.cn/posts/8bdf2cdf/",children:"\u91cd\u65b0\u8ba4\u8bc6\u53d7\u63a7\u7ec4\u4ef6\u548c\u975e\u53d7\u63a7\u7ec4\u4ef6"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html#common-bugs-when-using-derived-state",children:"\u6d3e\u751f\u72b6\u6001\u4e2d\u9047\u5230\u7684\u95ee\u9898"})}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},4744:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>s});var r=t(959);const l={},o=r.createContext(l);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);