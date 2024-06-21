"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[7221],{9821:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>a,toc:()=>d});var r=t(1527),s=t(8672);const c={},i="React \u65b0\u52a8\u6001",a={id:"react/new",title:"React \u65b0\u52a8\u6001",description:"React 18",source:"@site/docs/react/new.md",sourceDirName:"react",slug:"/react/new",permalink:"/docs/react/new",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/react/new.md",tags:[],version:"current",lastUpdatedAt:1718964328,formattedLastUpdatedAt:"2024\u5e746\u670821\u65e5",frontMatter:{},sidebar:"React",previous:{title:"React \u8bbe\u8ba1\u6a21\u5f0f\u548c\u6700\u4f73\u5b9e\u8df5",permalink:"/docs/react/design-pattern-and-best-practices"},next:{title:"react-router \u524d\u7aef\u8def\u7531\u4f20\u53c2\u65b9\u5f0f",permalink:"/docs/react/pass-params-in-react"}},l={},d=[{value:"React 18",id:"react-18",level:2},{value:"flushSync",id:"flushsync",level:3},{value:"Concurrent Mode",id:"concurrent-mode",level:3},{value:"\u5e76\u53d1\u7279\u6027",id:"\u5e76\u53d1\u7279\u6027",level:3},{value:"useTransition",id:"usetransition",level:4},{value:"useDeferredValue",id:"usedeferredvalue",level:4},{value:"Strict Mode",id:"strict-mode",level:3},{value:"useSyncExternalStore",id:"usesyncexternalstore",level:3},{value:"React Compiler",id:"react-compiler",level:2},{value:"React Server Components",id:"react-server-components",level:2},{value:"\u56f4\u7ed5\u5f02\u6b65\u7f16\u7a0b\u7684\u5f00\u53d1\u4f53\u9a8c\u63d0\u5347",id:"\u56f4\u7ed5\u5f02\u6b65\u7f16\u7a0b\u7684\u5f00\u53d1\u4f53\u9a8c\u63d0\u5347",level:2},{value:"form \u76f8\u5173hooks",id:"form-\u76f8\u5173hooks",level:2},{value:"useOptimistic",id:"useoptimistic",level:2},{value:"References",id:"references",level:2}];function o(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"react-\u65b0\u52a8\u6001",children:"React \u65b0\u52a8\u6001"}),"\n",(0,r.jsx)(n.h2,{id:"react-18",children:"React 18"}),"\n",(0,r.jsx)(n.h3,{id:"flushsync",children:"flushSync"}),"\n",(0,r.jsx)(n.p,{children:"React18\u4e2d\u6240\u6709\u7684 setState \u90fd\u662f\u6279\u5904\u7406\u66f4\u65b0\u3002\u4f7f\u7528 flushSync \u53ef\u4ee5\u9000\u51fa\u6279\u91cf\u66f4\u65b0\uff0c\u76f4\u63a5\u8fdb\u884c\u5f3a\u5236\u66f4\u65b0\u3002\u4f46flushSync\u51fd\u6570\u5185\u90e8\u7684\u591a\u4e2asetState\u4ecd\u7136\u4e3a\u6279\u91cf\u66f4\u65b0\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"concurrent-mode",children:"Concurrent Mode"}),"\n",(0,r.jsx)(n.p,{children:"\u5e76\u53d1\u6a21\u5f0f\uff0c\u901a\u8fc7\u6e32\u67d3\u53ef\u4e2d\u65ad\u6765\u4fee\u590d\u963b\u585e\u6e32\u67d3\u7684\u9650\u5236\uff0c\u5141\u8bb8React\u5728\u6d4f\u89c8\u5668\u7a7a\u95f2\u65f6\u6267\u884c\u6e32\u67d3\u66f4\u65b0\uff0c\u4f9d\u8d56 requestIdleCallback \u5b9e\u73b0\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u4f7f\u7528 createRoot \u624d\u80fd\u542f\u7528\u5e76\u53d1\u6e32\u67d3\u6a21\u5f0f\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"\u5e76\u53d1\u7279\u6027",children:"\u5e76\u53d1\u7279\u6027"}),"\n",(0,r.jsx)(n.p,{children:"\u5f00\u542f\u5e76\u53d1\u6a21\u5f0f\u540e\u624d\u80fd\u4f7f\u7528\u7684\u7279\u6027\u3002"}),"\n",(0,r.jsx)(n.h4,{id:"usetransition",children:"useTransition"}),"\n",(0,r.jsxs)(n.p,{children:["\u5ef6\u8fdf\u66f4\u65b0\uff0c\u8fd4\u56de",(0,r.jsx)(n.code,{children:"[isPending, startTransition]"}),"\u7528\u4e8e\u6539\u5584\u7528\u6237\u4ea4\u4e92\u3002\u88ab ",(0,r.jsx)(n.code,{children:"startTransition"}),"\u5305\u88f9\u7684\u4ee3\u7801\u89e6\u53d1\u7684\u6e32\u67d3\u88ab\u6807\u8bb0\u4e3a\u4e0d\u7d27\u6025\u6e32\u67d3\uff0c\u53ef\u80fd\u88ab\u5176\u4ed6\u7d27\u6025\u6e32\u67d3\u62a2\u5360\n\u3002\n\u628a\u66f4\u65b0\u4efb\u52a1\u53d8\u6210\u5ef6\u8fdf\u66f4\u65b0\u4efb\u52a1\u3002"]}),"\n",(0,r.jsx)(n.h4,{id:"usedeferredvalue",children:"useDeferredValue"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a\u5ef6\u8fdf\u503c\uff0c\u8ba9\u4e00\u4e2astate\u5ef6\u8fdf\u6e32\u67d3\u3002\u5f53\u6ca1\u6709\u7d27\u6025\u66f4\u65b0\u65f6\uff0c\u8be5state\u624d\u4f1a\u66f4\u65b0\u3002"}),"\n",(0,r.jsx)(n.p,{children:"\u5305\u88f9\u4e00\u4e2astate\uff0c\u4ea7\u751f\u4e00\u4e2a\u65b0\u7684\u503c\uff0c\u8fd9\u4e2a\u503c\u4f5c\u4e3a\u5ef6\u8fdf\u72b6\u6001\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"strict-mode",children:"Strict Mode"}),"\n",(0,r.jsx)(n.p,{children:"\u91c7\u7528\u4e25\u683c\u6a21\u5f0f\uff0cReact \u5bf9\u6bcf\u4e2a\u7ec4\u4ef6\u90fd\u4f1a\u6267\u884c\u4e24\u6b21\u6e32\u67d3\u3002"}),"\n",(0,r.jsx)(n.h3,{id:"usesyncexternalstore",children:"useSyncExternalStore"}),"\n",(0,r.jsx)(n.p,{children:"\u5c06\u5916\u90e8\u6570\u636e\u540c\u6b65\u5230React\u4e2d\uff0c\u4e00\u822c\u662f\u7b2c\u4e09\u65b9\u72b6\u6001\u7ba1\u7406\u5e93\u4f7f\u7528\u3002"}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.p,{children:"\u4ee5\u4e0b\u4e3aReact 19\u4e2d\u65b0\u7279\u6027\uff1a"}),"\n",(0,r.jsx)(n.h2,{id:"react-compiler",children:"React Compiler"}),"\n",(0,r.jsx)(n.p,{children:"\u8fd1\u51e0\u5e74\uff0c\u8bb8\u591a\u524d\u7aef\u6846\u67b6\u62e5\u62b1\u57fa\u4e8e Signal \u7684\u7ec6\u7c92\u5ea6\u66f4\u65b0\uff0c\u7528\u4e8e\u4f18\u5316\u524d\u7aef\u6846\u67b6\u7684\u6027\u80fd\u95ee\u9898\u3002\u800cReact \u57fa\u4e8e Fiber \u7684diff \u66f4\u65b0\u6210\u4e3a\u4e86\u6700\u5927\u7684\u77ed\u677f\uff0c\u5927\u91cf re-render \u9020\u6210\u7684\u6027\u80fd\u635f\u8017\uff0c\u662f\u4e0d\u5f97\u4e0d\u9762\u5bf9\u7684\u6311\u6218\u3002\uff08\u7ec6\u7c92\u5ea6\u66f4\u65b0\u5e76\u975e\u6240\u6709\u573a\u666f\u90fd\u6709\u660e\u663e\u4f18\u52bf\uff09"}),"\n",(0,r.jsx)(n.p,{children:"React \u63d0\u4f9b\u4e86 memo/useMemo/useCallback \u4f9b\u5f00\u53d1\u8005\u4f18\u5316\u9879\u76ee\u6027\u80fd\uff0c\u4f46\u4e0a\u624b\u96be\u5ea6\u4e0d\u4f4e\u3002"}),"\n",(0,r.jsx)(n.p,{children:"React 19 \u5c06\u4f1a\u63a8\u51fa React Compiler\uff0c\u5728\u5f00\u53d1\u8005\u4e0d\u8c03\u6574\u4efb\u4f55\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\uff0c\u81ea\u52a8\u4f18\u5316\u9879\u76ee\u6027\u80fd\u3002\u5e2e\u52a9\u6211\u4eec\u4e0d\u4f7f\u7528\u4e0a\u9762\u51e0\u4e2aapi\u7684\u60c5\u51b5\u4e0b\u4f18\u5316re-render\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"react-server-components",children:"React Server Components"}),"\n",(0,r.jsx)(n.p,{children:"\u5728Next.js\u4e2d\u5f97\u5230\u843d\u5730\u7684\u5b9e\u73b0\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"\u56f4\u7ed5\u5f02\u6b65\u7f16\u7a0b\u7684\u5f00\u53d1\u4f53\u9a8c\u63d0\u5347",children:"\u56f4\u7ed5\u5f02\u6b65\u7f16\u7a0b\u7684\u5f00\u53d1\u4f53\u9a8c\u63d0\u5347"}),"\n",(0,r.jsx)(n.p,{children:"\u51cf\u5c11\u4f7f\u7528useEffect\u3002\n\u4f7f\u7528\u65b0\u7684use Api,\u53ef\u4ee5\u4ecePromise/context\u4e2d\u8bfb\u53d6\u503c\uff0c\u4e0d\u662f\u4e00\u4e2ahook\uff0c\u53ef\u4ee5\u5728\u5faa\u73af\u4e2d\u6216\u8005\u6761\u4ef6\u8bed\u53e5\u4e2d\u4f7f\u7528\u3002\u4f46\u5fc5\u987b\u5728\u7ec4\u4ef6\u6216hook\u4e2d\u4f7f\u7528\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"form-\u76f8\u5173hooks",children:"form \u76f8\u5173hooks"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["useFormStatus ",(0,r.jsx)(n.a,{href:"https://react.dev/reference/react-dom/hooks/useFormStatus",children:"useFormStatus \u2013 React"})]}),"\n",(0,r.jsx)(n.p,{children:"\u589e\u5f3a\u8868\u5355\u63d0\u4ea4\u4f53\u9a8c\u3002\u5728\u6570\u636e\u63d0\u4ea4\u671f\u95f4\u663e\u793a\u52a0\u8f7d\u52a8\u753b\u3002"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"useFormState"}),"\n",(0,r.jsx)(n.p,{children:"\u7b80\u5316\u670d\u52a1\u5668\u4ea4\u4e92\uff0c\u7ba1\u7406\u8868\u5355\u63d0\u4ea4\u72b6\u6001\u5e76\u6355\u83b7\u670d\u52a1\u5668\u54cd\u5e94\u3002\u4e0d\u9700\u8981\u901a\u5e38\u7684 useEffect + setMessage\u3002"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"useoptimistic",children:"useOptimistic"}),"\n",(0,r.jsx)(n.p,{children:"\u4e50\u89c2\u66f4\u65b0\uff0c\u4e3a\u9884\u671f\u6210\u529f\u7684\u573a\u666f\u8bbe\u8ba1\uff0c\u9884\u671f\u7684\u53cd\u9988\u4f7f\u4ea4\u4e92\u611f\u89c9\u66f4\u5feb\u3002"}),"\n",(0,r.jsx)(n.h2,{id:"references",children:"References"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://mp.weixin.qq.com/s?__biz=MzI4NjE3MzQzNg==&mid=2649868281&idx=1&sn=034c7a5b4696e70326d351c21ebabb37&chksm=f23a65a3bad3ded1696a5ad8e360c8741a0e0c5fe5845fe036146a14a7f22aaf9ffef7857a73&scene=132&exptype=timeline_recommend_article_extendread_samebiz&show_related_article=1&subscene=0&scene=132#wechat_redirect",children:"\u88ab\u4e25\u91cd\u4f4e\u4f30\uff01React 19 \u53c8\u662f\u4e00\u6b21\u5f00\u53d1\u65b9\u5f0f\u7684\u53d8\u9769\uff0cuseEffect \u5c06\u4f1a\u9010\u6e10\u9000\u51fa\u5386\u53f2\u821e\u53f0"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},8672:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(959);const s={},c=r.createContext(s);function i(e){const n=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(c.Provider,{value:n},e.children)}}}]);