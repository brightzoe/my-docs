"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[7111],{9126:(n,e,l)=>{l.r(e),l.d(e,{assets:()=>h,contentTitle:()=>r,default:()=>t,frontMatter:()=>c,metadata:()=>d,toc:()=>a});var i=l(1527),s=l(8672);const c={},r="webpack",d={id:"fe-basic/fe-engineering/webpack",title:"webpack",description:"\u4f5c\u7528",source:"@site/docs/fe-basic/fe-engineering/webpack.md",sourceDirName:"fe-basic/fe-engineering",slug:"/fe-basic/fe-engineering/webpack",permalink:"/docs/fe-basic/fe-engineering/webpack",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/fe-engineering/webpack.md",tags:[],version:"current",lastUpdatedAt:1711965777,formattedLastUpdatedAt:"2024\u5e744\u67081\u65e5",frontMatter:{},sidebar:"FE",previous:{title:"pnpm workspace monorepo \u5b9e\u8df5",permalink:"/docs/fe-basic/fe-engineering/pnpm-workspace"},next:{title:"\u5bf9\u8def\u7531\u7684\u7406\u89e3",permalink:"/docs/fe-basic/how-to-understand-router"}},h={},a=[{value:"\u4f5c\u7528",id:"\u4f5c\u7528",level:2},{value:"\u6784\u5efa\u6d41\u7a0b",id:"\u6784\u5efa\u6d41\u7a0b",level:2},{value:"loader \u4e0e plugin",id:"loader-\u4e0e-plugin",level:2},{value:"complier \u548c compilation",id:"complier-\u548c-compilation",level:2},{value:"sourceMap",id:"sourcemap",level:2},{value:"\u6587\u4ef6\u7f13\u5b58",id:"\u6587\u4ef6\u7f13\u5b58",level:2},{value:"tree shaking",id:"tree-shaking",level:2},{value:"code spliting",id:"code-spliting",level:2},{value:"bundle \u4e0e chunk",id:"bundle-\u4e0e-chunk",level:2},{value:"webpack optimization",id:"webpack-optimization",level:2},{value:"Reference",id:"reference",level:2}];function p(n){const e={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...n.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(e.h1,{id:"webpack",children:"webpack"}),"\n",(0,i.jsx)(e.h2,{id:"\u4f5c\u7528",children:"\u4f5c\u7528"}),"\n",(0,i.jsx)(e.p,{children:"\u6a21\u5757\u6253\u5305\u3002\u6574\u5408\u6587\u4ef6\uff0c\u4fdd\u8bc1\u5f15\u7528\u6b63\u786e\u548c\u6267\u884c\u987a\u5e8f\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u7f16\u8bd1\u517c\u5bb9\u3002\u901a\u8fc7\u5404\u79cd loader \u53ef\u4ee5\u4f7f\u7528\u6d4f\u89c8\u5668\u4e0d\u652f\u6301\u7684\u65b0\u7279\u6027\uff0c\u65b0\u8bed\u6cd5\uff0c\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u80fd\u529b\u6269\u5c55\u3002\u901a\u8fc7 plugin \u673a\u5236\uff0c\u5b9e\u73b0\u6bd4\u5982\u4ee3\u7801\u538b\u7f29\uff0c\u6309\u9700\u52a0\u8f7d\u7b49\u529f\u80fd\uff0c\u63d0\u5347\u529f\u80fd\u5de5\u7a0b\u6548\u7387\u548c\u6253\u5305\u8d28\u91cf\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"\u6784\u5efa\u6d41\u7a0b",children:"\u6784\u5efa\u6d41\u7a0b"}),"\n",(0,i.jsx)(e.p,{children:"\u521d\u59cb\u5316"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u521d\u59cb\u5316\u53c2\u6570 option"}),"\n",(0,i.jsx)(e.li,{children:"\u89e3\u6790\u9879\u76ee\u3002\u521b\u5efa Compiler \u5bf9\u8c61\u5e76\u5f00\u59cb\u89e3\u6790\u9879\u76ee"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u7f16\u8bd1\u6784\u5efa"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u786e\u5b9a\u5165\u53e3\u3002\u4ece\u5165\u53e3\u6587\u4ef6\uff08entry\uff09\u5f00\u59cb\u89e3\u6790\uff0c\u5e76\u4e14\u627e\u5230\u5176\u5bfc\u5165\u7684\u4f9d\u8d56\u6a21\u5757\uff0c\u9012\u5f52\u904d\u5386\u5206\u6790\uff0c\u5f62\u6210\u4f9d\u8d56\u5173\u7cfb\u6811"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u8bd1\u6a21\u5757\u3002\u6839\u636e\u5165\u53e3\u7684\u4f9d\u8d56\uff0c\u8c03\u7528 loader \u8fdb\u884c\u8f6c\u6362"}),"\n",(0,i.jsx)(e.li,{children:"\u5b8c\u6210\u7f16\u8bd1\u8fdb\u884c\u8f93\u51fa\uff0c\u5f62\u6210\u4e0d\u540c\u7684 chunk"}),"\n",(0,i.jsx)(e.li,{children:"\u8f93\u51fa\u5b8c\u6210\u3002\u5c06 chunk \u8f93\u51fa\u5230\u6587\u4ef6\u7cfb\u7edf"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u6574\u4e2a\u8fc7\u7a0b\u4e2d webpack \u4f1a\u901a\u8fc7\u53d1\u5e03\u8ba2\u9605\u6a21\u5f0f\uff0c\u5411\u5916\u629b\u51fa\u4e00\u4e9b hooks\uff0c\u800c webpack \u7684\u63d2\u4ef6\u5373\u53ef\u901a\u8fc7\u76d1\u542c\u8fd9\u4e9b\u5173\u952e\u7684\u4e8b\u4ef6\u8282\u70b9\uff0c\u6267\u884c\u63d2\u4ef6\u4efb\u52a1\u8fdb\u800c\u8fbe\u5230\u5e72\u9884\u8f93\u51fa\u7ed3\u679c\u7684\u76ee\u7684\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"loader-\u4e0e-plugin",children:"loader \u4e0e plugin"}),"\n",(0,i.jsx)(e.p,{children:"loader:"}),"\n",(0,i.jsx)(e.p,{children:"\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u63a5\u6536\u5339\u914d\u5230\u7684\u5185\u5bb9\uff0c\u5bf9\u5185\u5bb9\u8fdb\u884c\u8f6c\u6362\uff0c\u5c06\u8f6c\u6362\u540e\u7684\u5185\u5bb9\u8fd4\u56de\u3002\u7b97\u662f\u4e00\u4e2a\u6587\u4ef6\u8f6c\u6362\u5668\u7684\u89d2\u8272\uff0c\u5728 modules.rules \u91cc\u914d\u7f6e\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5bf9\u8d44\u6e90\u9884\u5904\u7406\uff0c\u5c06\u4e0d\u662f js \u7684\u8d44\u6e90\u8f6c\u6362\u4e3a js"}),"\n",(0,i.jsx)(e.li,{children:"\u6267\u884c\u6709\u987a\u5e8f\uff0c\u652f\u6301\u94fe\u5f0f\u8c03\u7528"}),"\n",(0,i.jsx)(e.li,{children:"\u4e00\u4e2a loader \u804c\u8d23\u662f\u5355\u4e00\u7684"}),"\n",(0,i.jsx)(e.li,{children:"webpack \u9ed8\u8ba4\u4f1a\u7f13\u5b58 loader \u7684\u6267\u884c\u7ed3\u679c"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u5e38\u89c1 loader:"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6837\u5f0f\u7c7b css-loader\uff0cstyle-loader\uff0cless-loader postcss-loader"}),"\n",(0,i.jsx)(e.li,{children:"\u6587\u4ef6\u7c7b url-loader file-loader image-loader"}),"\n",(0,i.jsx)(e.li,{children:"\u7f16\u8bd1\u7c7b babel-loader ts-loader"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"plugin\uff1a"}),"\n",(0,i.jsx)(e.p,{children:"\u63d2\u4ef6\u3002\u5728\u521d\u59cb\u5316\u53c2\u6570\u540e\u5c31\u52a0\u8f7d\u6240\u6709\u63d2\u4ef6\uff0c\u521b\u5efa\u63d2\u4ef6\u7684\u5b9e\u4f8b\u3002\u4e0d\u76f4\u63a5\u5904\u7406\u6587\u4ef6\uff0c\u901a\u8fc7\u94a9\u5b50\u6d89\u53ca webpack \u6574\u4e2a\u4e8b\u4ef6\u6d41\u7a0b\uff0c\u76d1\u542c\u751f\u547d\u5468\u671f\u7684\u94a9\u5b50\u5728\u5408\u9002\u7684\u65f6\u673a\u4f7f\u7528 webpack \u63d0\u4f9b\u7684 api \u505a\u4e00\u4e9b\u4e8b\u60c5\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5e38\u89c1 plugin\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"html-webpack-plugin \u6253\u5305\u540e\u81ea\u52a8\u751f\u6210 html \u6587\u4ef6\uff0c\u5c06\u6253\u5305\u540e\u7684 js \u5f15\u5165\u5230 html \u6587\u4ef6\u5185\u3002"}),"\n",(0,i.jsx)(e.li,{children:"mini-css-extract-plugin \u5c06 style \u5185\u7684 css \u62bd\u79bb\u6210 link \u5bfc\u5165\u7684 css \u6587\u4ef6\u3002"}),"\n",(0,i.jsx)(e.li,{children:"hot-module-replacement-plugin \u70ed\u66f4\u65b0\uff0c\u53ea\u914d\u7f6e\u5728\u5f00\u53d1\u9636\u6bb5\uff0c\u63d0\u9ad8\u91cd\u65b0\u6784\u5efa\u65f6\u95f4"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u7f16\u5199 plugin\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u662f\u4e00\u4e2a\u7c7b\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u6709\u4e00\u4e2a apply \u65b9\u6cd5\uff0c\u7ed1\u5b9a complier.hooks \u4e8b\u4ef6\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u5904\u7406 webpack \u5185\u90e8\u5b9e\u4f8b\u7684\u7279\u5b9a\u6570\u636e\u3002"}),"\n",(0,i.jsx)(e.li,{children:"\u529f\u80fd\u5904\u7406\u5b8c\u540e\u8c03\u7528 webpack \u63d0\u4f9b\u7684\u56de\u8c03\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"loader \u8d1f\u8d23\u6587\u4ef6\u8f6c\u6362\uff0cplugin \u8d1f\u8d23\u529f\u80fd\u6269\u5c55\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"complier-\u548c-compilation",children:"complier \u548c compilation"}),"\n",(0,i.jsx)(e.p,{children:"\u6587\u4ef6\u7684\u89e3\u6790\u4e0e\u6784\u5efa\u662f\u4e00\u4e2a\u6bd4\u8f83\u590d\u6742\u7684\u8fc7\u7a0b\uff0c\u5728 webpack \u6e90\u7801\u4e2d\u4e3b\u8981\u4f9d\u8d56\u4e8e compiler \u548c compilation \u4e24\u4e2a\u6838\u5fc3\u5bf9\u8c61\u5b9e\u73b0\u3002"}),"\n",(0,i.jsx)(e.p,{children:"complier \u5bf9\u8c61\u66b4\u9732 webpack \u6574\u4e2a\u751f\u547d\u5468\u671f\u76f8\u5173\u7684\u94a9\u5b50\uff0c\u662f\u521d\u59cb\u5316\u53c2\u6570\u7684\u4ea7\u7269\uff0c\u5305\u542b options, entry, plugins \u7b49\u5c5e\u6027\u53ef\u4ee5\u7b80\u5355\u7684\u7406\u89e3\u4e3a webpack \u7684\u4e00\u4e2a\u5b9e\u4f8b\u3002"}),"\n",(0,i.jsx)(e.p,{children:"compilation \u5bf9\u8c61\u662f complier \u7684\u5b9e\u4f8b\uff0c\u662f\u6bcf\u4e00\u6b21\u6784\u5efa\u7684\u4e0a\u4e0b\u6587\u5bf9\u8c61\uff0c\u5b83\u5305\u542b\u4e86\u5f53\u6b21\u6784\u5efa\u6240\u9700\u8981\u7684\u6240\u6709\u4fe1\u606f\uff0c\u6bcf\u6b21\u70ed\u66f4\u65b0\u548c\u91cd\u65b0\u6784\u5efa\uff0ccompiler \u90fd\u4f1a\u91cd\u65b0\u751f\u6210\u4e00\u4e2a\u65b0\u7684 compilation \u5bf9\u8c61\uff0c\u8d1f\u8d23\u6b64\u6b21\u66f4\u65b0\u7684\u6784\u5efa\u8fc7\u7a0b\u3002"}),"\n",(0,i.jsx)(e.h2,{id:"sourcemap",children:"sourceMap"}),"\n",(0,i.jsx)(e.p,{children:"\u5c06\u7f16\u8bd1\uff0c\u6253\u5305\uff0c\u538b\u7f29\u540e\u7684\u4ee3\u7801\u6620\u5c04\u56de\u6e90\u4ee3\u7801\u7684\u6280\u672f\uff0c\u65b9\u4fbf\u5b9a\u4f4d\u5f00\u53d1\u4e2d\u9047\u5230\u7684\u95ee\u9898\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u5206\u4e3a\u5185\u8054\u65b9\u5f0f\u548c\u5916\u90e8\u65b9\u5f0f\uff0c\u5916\u90e8\u65b9\u5f0f\u6709\u4e00\u4efd\u6620\u5c04\u7684\u6587\u4ef6\u4ee5.map \u7ed3\u5c3e\uff0c\u6807\u8bb0\u6e90\u7801\u4f4d\u7f6e\uff0c\u5185\u8054\u65b9\u5f0f\u4e0d\u751f\u6210\u6587\u4ef6\uff0c\u6784\u5efa\u901f\u5ea6\u66f4\u5feb\u3002"}),"\n",(0,i.jsxs)(e.p,{children:[(0,i.jsx)(e.code,{children:"devtool:source-map/eval-source-map/cheap-module-source-map"}),"\u7b49"]}),"\n",(0,i.jsxs)(e.table,{children:[(0,i.jsx)(e.thead,{children:(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.th,{children:"\u53c2\u6570"}),(0,i.jsx)(e.th,{children:"\u53c2\u6570\u89e3\u91ca"})]})}),(0,i.jsxs)(e.tbody,{children:[(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"eval"}),(0,i.jsx)(e.td,{children:"\u6253\u5305\u540e\u7684\u6a21\u5757\u90fd\u4f7f\u7528 eval() \u6267\u884c\uff0c\u884c\u6620\u5c04\u53ef\u80fd\u4e0d\u51c6\uff1b\u4e0d\u4ea7\u751f\u72ec\u7acb\u7684 map \u6587\u4ef6"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"cheap"}),(0,i.jsx)(e.td,{children:"map \u6620\u5c04\u53ea\u663e\u793a\u884c\u4e0d\u663e\u793a\u5217\uff0c\u5ffd\u7565\u6e90\u81ea loader \u7684 source map"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"inline"}),(0,i.jsx)(e.td,{children:"\u6620\u5c04\u6587\u4ef6\u4ee5 base64 \u683c\u5f0f\u7f16\u7801\uff0c\u52a0\u5728 bundle \u6587\u4ef6\u6700\u540e\uff0c\u4e0d\u4ea7\u751f\u72ec\u7acb\u7684 map \u6587\u4ef6"})]}),(0,i.jsxs)(e.tr,{children:[(0,i.jsx)(e.td,{children:"module"}),(0,i.jsx)(e.td,{children:"\u589e\u52a0\u5bf9 loader source map \u548c\u7b2c\u4e09\u65b9\u6a21\u5757\u7684\u6620\u5c04"})]})]})]}),"\n",(0,i.jsx)(e.p,{children:"\u751f\u4ea7\u73af\u5883\u52ff\u7528\u5185\u8054\u65b9\u5f0f\uff0c\u4f1a\u589e\u5927\u4ee3\u7801\u4f53\u79ef\uff0c\u53ef\u4ee5\u914d\u7f6e cheap-module-source-map\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://www.cnblogs.com/skychx/p/webpack-sourse-map-eval-cheap-inline-module.html",children:"webpack \u7684 sourse-map \u4e2d eval\u3001cheap\u3001inline \u548c module \u5404\u662f\u4ec0\u4e48\u610f\u601d\uff1f - \u5364\u86cb\u5b9e\u9a8c\u5ba4 - \u535a\u5ba2\u56ed"})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"\u6587\u4ef6\u7f13\u5b58",children:"\u6587\u4ef6\u7f13\u5b58"}),"\n",(0,i.jsx)(e.p,{children:"\u4e09\u79cd\u7c7b\u578b\uff1a"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"hash\uff1a\u6bcf\u6b21\u90fd\u662f\u7528\u540c\u4e00\u4e2a\u5168\u5c40\u552f\u4e00\u7684 hash \u503c\u3002\u5982\u679c\u91cd\u65b0\u6253\u5305\u4f1a\u4f7f\u6240\u6709\u7684\u7f13\u5b58\u90fd\u5931\u6548\u3002"}),"\n",(0,i.jsx)(e.li,{children:"chunkhash\uff1a\u540c\u4e00\u4e2a chunk \u751f\u6210\u540c\u4e00\u4e2a hash\u3002"}),"\n",(0,i.jsx)(e.li,{children:"contenthash\uff1a \u6839\u636e\u6587\u4ef6\u5185\u5bb9\u751f\u6210 hash\uff0c\u4e0d\u540c\u6587\u4ef6 hash \u503c\u4e0d\u4e00\u6837\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'output: {\n  filename: "js/built.[contenthash:10].js",\n  path: resolve(__dirname, "build"),\n},\nplugins: [\n  new MiniCssExtractPlugin({\n    filename: "css/built.[contenthash:10].css",\n  })\n]\n\n'})}),"\n",(0,i.jsx)(e.p,{children:"\u4e00\u822c\u4f7f\u7528 contenthash \u6bd4\u8f83\u597d\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://www.cnblogs.com/skychx/p/webpack-hash-chunkhash-contenthash.html",children:"webpack \u4e2d\uff0chash\u3001chunkhash\u3001contenthash \u7684\u533a\u522b\u662f\u4ec0\u4e48\uff1f - \u5364\u86cb\u5b9e\u9a8c\u5ba4 - \u535a\u5ba2\u56ed"})}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"tree-shaking",children:"tree shaking"}),"\n",(0,i.jsx)(e.p,{children:"\u4e0d\u9700\u8981\u7528\u5230\u7684\u4ee3\u7801\u5c06\u4e0d\u4f1a\u8fdb\u5165\u5230\u6253\u5305\u7ed3\u679c\u4e2d\uff0c\u51cf\u5c11\u6253\u5305\u4f53\u79ef\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6b64\u529f\u80fd\u4e3b\u8981\u4f9d\u8d56 es module \u8bed\u6cd5\uff0c\u56e0\u4e3a\u5b83\u63d0\u4f9b\u9759\u6001\u5206\u6790\uff08\u5373\u4e0d\u8fd0\u884c\u4ee3\u7801\u5bf9\u4ee3\u7801\u8fdb\u884c\u5206\u6790\uff0c\u4e0d\u4f1a\u56e0\u4e3a\u903b\u8f91\u6210\u7acb\u4e0e\u5426\u800c\u5f15\u5165\u6216\u5bfc\u51fa\u67d0\u4e2a\u6a21\u5757\uff0cimport/export \u4e0d\u4f1a\u5b58\u5728 if \u91cc\u9762\uff09\u7684\u53ef\u80fd\u6027\u3002\u5176\u4ed6\u65b9\u5f0f\u4e66\u5199\u7684\u6a21\u5757\u5f88\u96be\u53bb\u505a tree shaking \u5206\u6790\u3002"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5728\u5f00\u53d1\u73af\u5883\u5f00\u542f"}),"\n",(0,i.jsx)(e.li,{children:"\u6ce8\u610f\u526f\u4f5c\u7528\u7684\u95ee\u9898\u3002\u6bd4\u5982 polyfill/css \u7b49\u6709\u526f\u4f5c\u7528\u7684\u6587\u4ef6\u53ef\u80fd\u88ab\u5220\u9664\u6389\uff0c\u9700\u8981\u5728 package.json \u4e2d\u914d\u7f6e"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"code-spliting",children:"code spliting"}),"\n",(0,i.jsx)(e.p,{children:"\u4ee3\u7801\u5206\u5272\uff0c\u53ef\u4ee5\u5b9e\u73b0\u6309\u9700\u52a0\u8f7d\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u6bd4\u5982\u7f51\u7edc\u5e94\u7528\uff0c\u4e00\u6b21\u6027\u4e0b\u8f7d\u6240\u6709\u529f\u80fd\u7684\u4ee3\u7801\u662f\u4e0d\u5fc5\u8981\u7684\u3002code spliting \u7528\u6237\u5728\u6253\u5f00\u754c\u9762\u7684\u65f6\u5019\uff0c\u53ea\u52a0\u8f7d\u57fa\u672c\u529f\u80fd/\u5165\u53e3\u9875\u9762\u7684\u529f\u80fd\uff0c\u968f\u7740\u7528\u6237\u7684\u4ea4\u4e92\u80fd\u66f4\u5feb\u6253\u5f00\u5165\u53e3\u9875\u9762\u3002"}),"\n",(0,i.jsx)(e.p,{children:"\u914d\u7f6e\u65b9\u5f0f"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u914d\u7f6e\u591a\u5165\u53e3"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:'// \u5355\u5165\u53e3\n// entry: \'./src/js/index.js\',\nentry: {\n  // \u591a\u5165\u53e3\uff1a\u6709\u4e00\u4e2a\u5165\u53e3\uff0c\u6700\u7ec8\u8f93\u51fa\u5c31\u6709\u4e00\u4e2abundle\n  index: "./src/js/index.js",\n  test: "./src/js/test.js",\n},\noutput: {\n  // [name]\uff1a\u53d6\u6587\u4ef6\u540d\n  filename: "js/[name].[contenthash:10].js",\n  path: resolve(__dirname, "build"),\n}\n\n'})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"optimization"}),"\n",(0,i.jsx)(e.pre,{children:(0,i.jsx)(e.code,{className:"language-js",children:"optimization: {\n  splitChunks: {\n    chunks: 'all'; //\u81ea\u52a8\u5206\u6790\u591a\u5165\u53e3chunk\u4e2d\u6709\u6ca1\u6709\u516c\u5171\u7684\u6587\u4ef6\uff0c\u516c\u5171\u6587\u4ef6\u4f1a\u751f\u6210\u5355\u72ec\u7684chunk\n  }\n}\n"})}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u52a8\u6001 import \u8fd4\u56de promise"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"bundle-\u4e0e-chunk",children:"bundle \u4e0e chunk"}),"\n",(0,i.jsx)(e.p,{children:"chunk \u6570\u636e\u5757"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u88ab\u5206\u5272\u7684\u4ee3\u7801\u6587\u4ef6\u3002\u53ef\u80fd\u662f\u516c\u7528\u7684\u4ee3\u7801\uff0c\u4e5f\u53ef\u80fd\u662f\u7b2c\u4e09\u65b9\u5e93\uff0c\u88ab webpack \u5206\u5272\u51fa\u6765\u7684\u6570\u636e\u5757\uff0c\u4e0d\u662f\u6700\u7ec8\u4ea7\u7269\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"bundle"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u6700\u7ec8\u8f93\u51fa\u7684\u6587\u4ef6\uff0c\u4e00\u5806 chunk \u7684\u96c6\u5408\uff0c\u7ecf\u5386\u4e86\u52a0\u8f7d\u548c\u7f16\u8bd1\u7684\u73af\u8282\u6700\u540e\u8f93\u51fa\u7684\u6587\u4ef6\uff0c\u53ef\u4ee5\u5728\u6d4f\u89c8\u5668\u4e2d\u8fd0\u884c\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.blockquote,{children:["\n",(0,i.jsx)(e.p,{children:"\u6211\u4eec\u76f4\u63a5\u5199\u51fa\u6765\u7684\u662f module\uff0cwebpack \u5904\u7406\u65f6\u662f chunk\uff0c\u6700\u540e\u751f\u6210\u6d4f\u89c8\u5668\u53ef\u4ee5\u76f4\u63a5\u8fd0\u884c\u7684 bundle\u3002"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"webpack-optimization",children:"webpack optimization"}),"\n",(0,i.jsx)(e.p,{children:"\u6784\u5efa\u65f6\u95f4\u4f18\u5316"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"speed-measure-webpack-plugin \u5206\u6790\u6253\u5305\u8017\u65f6"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u6bd4\u8f83\u8017\u65f6\u7684\u5305\u53ef\u4ee5\u4f7f\u7528 cdn \u5206\u5305\u3002\u6216\u8005\u9884\u7f16\u8bd1\u8d44\u6e90\u4e3a dll"}),"\n",(0,i.jsx)(e.p,{children:"dll \u601d\u60f3\u4e5f\u5c31\u662f\u7f13\u5b58\uff0c\u5df2\u7ecf\u4e0d\u63a8\u8350\u4f7f\u7528\u3002webpack5 \u4e2d\u5185\u7f6e HardSourceWebpackPlugin \u63d0\u5347\u7b2c\u4e8c\u6b21\u6784\u5efa\u901f\u5ea6\u3002"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"thread-loader \u5e76\u884c\u6784\u5efa\uff0c\u653e\u5728\u8d39\u65f6\u95f4\u7684 loader \u4e4b\u524d\u3002\uff08\u5f00\u542f worker\uff0c\u4e5f\u6709\u5f00\u9500\uff0c\u4ec5\u5728\u8017\u65f6\u7684\u64cd\u4f5c\u4e2d\u4f7f\u7528\uff09"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"\u5e76\u884c\u538b\u7f29 terser-webpack-plugin \u7684\u4e00\u4e2a\u9009\u9879"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"cache-loader \u7f13\u5b58\uff0c\u63d0\u9ad8\u4e8c\u6b21\u6784\u5efa\u901f\u5ea6\uff08webpack5 \u5df2\u5185\u7f6e cache \u6a21\u5757\u53ef\u4e0d\u6dfb\u52a0\u6b64 loader\uff09"}),"\n"]}),"\n",(0,i.jsxs)(e.li,{children:["\n",(0,i.jsx)(e.p,{children:"hot-module-replacement-plugin \u70ed\u66f4\u65b0\uff0c\u4fee\u6539\u4e00\u4e2a\u6587\u4ef6\u4e0d\u5237\u65b0\u6574\u4e2a\u9879\u76ee"}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u533a\u5206\u6784\u5efa\u73af\u5883"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"\u5f00\u53d1\u73af\u5883\uff1a\u4e0d\u9700\u8981\u4ee3\u7801\u538b\u7f29\uff0cgzip\uff0c\u4f53\u79ef\u4f18\u5316\uff0c\u63d0\u9ad8\u6784\u5efa\u901f\u5ea6"}),"\n",(0,i.jsx)(e.li,{children:"\u751f\u4ea7\u73af\u5883\uff1a\u4ee3\u7801\u538b\u7f29\uff0cgzip\uff0c\u4f53\u79ef\u4f18\u5316"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u6253\u5305\u4f53\u79ef\u4f18\u5316"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"webpack-bundle-analyzer \u6253\u5305\u4f53\u79ef\u5206\u6790\uff0c\u5b9a\u4f4d\u95ee\u9898"}),"\n",(0,i.jsx)(e.li,{children:"\u6bd4\u8f83\u5927\u7684\u5305\u4f7f\u7528 cdn \u5f15\u5165\u6216\u8005\u6309\u9700\u52a0\u8f7d\u3002 \u4f7f\u7528 cdn \u5f15\u5165\u7684\uff0c\u5728\u914d\u7f6e\u4e2d\u8981\u5728\u6253\u5305\u65f6\u6392\u9664\u6389\u3002"}),"\n",(0,i.jsx)(e.li,{children:"css-minimizer-webpack-plugin \u538b\u7f29 CSS\uff0c\u53bb\u91cd"}),"\n",(0,i.jsx)(e.li,{children:"mini-css-extract-plugin \u62bd\u79bb CSS \u6587\u4ef6 \u53ea\u5728\u751f\u4ea7\u73af\u5883"}),"\n",(0,i.jsx)(e.li,{children:"purgecss-webpack-plugin \u79fb\u9664\u65e0\u7528 CSS \u53ea\u5728\u751f\u4ea7\u73af\u5883"}),"\n",(0,i.jsx)(e.li,{children:"terser-webpack-plugin \u6253\u5305\u540e js \u538b\u7f29"}),"\n",(0,i.jsx)(e.li,{children:"tree-shaking \u9ed8\u8ba4\u5f00\u542f\u7684\uff0c\u53ea\u6253\u5305\u6709\u7528\u7684\u4ee3\u7801"}),"\n",(0,i.jsx)(e.li,{children:"source-map \u65b9\u4fbf\u5b9a\u4f4d\u4ee3\u7801\u4f4d\u7f6e\uff0c\u4e0d\u540c\u73af\u5883\u4e0d\u540c\u9009\u9879\uff0c\u751f\u4ea7\u73af\u5883\u53ef\u4ee5\u4e0d\u5f00"}),"\n",(0,i.jsx)(e.li,{children:"compression-webpack-plugin \u5c06\u8d44\u6e90\u538b\u7f29\u4e3a gzip \uff0c\u914d\u5408\u670d\u52a1\u7aef\u5f00\u542f\u9759\u6001\u538b\u7f29"}),"\n"]}),"\n",(0,i.jsx)(e.p,{children:"\u76d1\u63a7\u9762\u677f"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:"speed-measure-webpack-plugin \u5206\u6790\u6253\u5305\u8017\u65f6\uff0c\u6bcf\u4e2a loader \uff0cplugin \u6784\u5efa\u8017\u8d39\u7684\u65f6\u95f4"}),"\n",(0,i.jsx)(e.li,{children:"webpack-dashboard \u4e86\u89e3\u5f53\u524d\u6784\u5efa\u73b0\u72b6\uff0c\u8fdb\u5ea6\uff0c\u6bcf\u4e2a chunk \u5927\u5c0f\u7b49"}),"\n"]}),"\n",(0,i.jsx)(e.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(e.ul,{children:["\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://juejin.cn/post/6943468761575849992#heading-0",children:"\u5f53\u9762\u8bd5\u5b98\u95ee webpack \u7684\u65f6\u5019\u4ed6\u60f3\u77e5\u9053\u4ec0\u4e48 - \u6398\u91d1"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://juejin.cn/post/6971220402466979848#heading-8",children:"\u5173\u4e8e loader \u548c plugins - \u6398\u91d1"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://juejin.cn/post/7046616302521155614#heading-1",children:"\u4e00\u5957\u9a9a\u64cd\u4f5c\u4e0b\u6765\uff0cwebpack \u9879\u76ee\u6253\u5305\u901f\u5ea6\u98de\u5347 \ud83d\ude80\u3001\u4f53\u79ef\u9aa4\u51cf \u2193 - \u6398\u91d1"})}),"\n",(0,i.jsx)(e.li,{children:(0,i.jsx)(e.a,{href:"https://juejin.cn/post/7017775849818554376#heading-0",children:"\u3010webpack\u3011\u6027\u80fd\u4f18\u5316\u914d\u7f6e - HMR - \u7f13\u5b58 -tree shaking - \u4ee3\u7801\u5206\u5272 - \u61d2\u52a0\u8f7d - \u9884\u52a0\u8f7d - PWA - \u591a\u8fdb\u7a0b\u6253\u5305 - \u6398\u91d1"})}),"\n"]})]})}function t(n={}){const{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,i.jsx)(e,{...n,children:(0,i.jsx)(p,{...n})}):p(n)}},8672:(n,e,l)=>{l.d(e,{Z:()=>d,a:()=>r});var i=l(959);const s={},c=i.createContext(s);function r(n){const e=i.useContext(c);return i.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(s):n.components||s:r(n.components),i.createElement(c.Provider,{value:e},n.children)}}}]);