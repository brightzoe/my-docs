"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[111],{9461:(n,e,i)=>{i.r(e),i.d(e,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>d});var s=i(1527),l=i(4744);const r={},c="JavaScript",t={id:"fe-basic/javascript/index",title:"JavaScript",description:"\u4e00\u4e9b\u95ee\u9898\u3002",source:"@site/docs/fe-basic/javascript/index.md",sourceDirName:"fe-basic/javascript",slug:"/fe-basic/javascript/",permalink:"/docs/fe-basic/javascript/",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/javascript/index.md",tags:[],version:"current",lastUpdatedAt:1701221101,formattedLastUpdatedAt:"2023\u5e7411\u670829\u65e5",frontMatter:{},sidebar:"FE",previous:{title:"zoom \u548c transform\uff1ascale",permalink:"/docs/fe-basic/css/zoom-and-transform"},next:{title:"\u95ed\u5305",permalink:"/docs/fe-basic/javascript/basic/closure"}},o={},d=[{value:"0.1+0.2!==0.3",id:"010203",level:2},{value:"\u76f8\u7b49\u5224\u65ad",id:"\u76f8\u7b49\u5224\u65ad",level:2},{value:"\u6df1\u62f7\u8d1d\u6d45\u62f7\u8d1d",id:"\u6df1\u62f7\u8d1d\u6d45\u62f7\u8d1d",level:2},{value:"\u624b\u5199\u6df1\u62f7\u8d1d",id:"\u624b\u5199\u6df1\u62f7\u8d1d",level:3},{value:"\u7eaf\u51fd\u6570",id:"\u7eaf\u51fd\u6570",level:2},{value:"\u4e3a\u4ec0\u4e48\u7528\u7eaf\u51fd\u6570",id:"\u4e3a\u4ec0\u4e48\u7528\u7eaf\u51fd\u6570",level:3},{value:"for in \u4e0e for of",id:"for-in-\u4e0e-for-of",level:2},{value:"js \u5185\u5b58\u673a\u5236",id:"js-\u5185\u5b58\u673a\u5236",level:2},{value:"\u5185\u5b58\u56de\u6536",id:"\u5185\u5b58\u56de\u6536",level:3},{value:"\u6808\u5185\u5b58\u56de\u6536",id:"\u6808\u5185\u5b58\u56de\u6536",level:4},{value:"\u5806\u5185\u5b58\u56de\u6536",id:"\u5806\u5185\u5b58\u56de\u6536",level:4},{value:"\u5185\u5b58\u6cc4\u6f0f",id:"\u5185\u5b58\u6cc4\u6f0f",level:4},{value:"\u57fa\u7840\u7efc\u5408\u9898",id:"\u57fa\u7840\u7efc\u5408\u9898",level:2}];function j(n){const e={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...n.components},{Details:i}=e;return i||function(n,e){throw new Error("Expected "+(e?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"javascript",children:"JavaScript"}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u4e9b\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"010203",children:"0.1+0.2!==0.3"}),"\n",(0,s.jsx)(e.p,{children:"\u6d4f\u89c8\u5668\u5bf9\u4e8e 64 \u4f4d\u53cc\u7cbe\u5ea6\u6d6e\u70b9\u6570\u7684\u5904\u7406\uff0c1 \u4f4d\u7b26\u53f7\u4f4d\uff0c11 \u4f4d\u6307\u6570\u4f4d\uff0c52 \u4f4d\u5c3e\u6570\u3002\u8868\u73b0\u4e3a\u4e8c\u8fdb\u5236\u65f6\u8d85\u51fa 53 \u4f4d\u540e\u88ab\u820d\u5f03\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5bf9\u4e8e 2 \u7684\u500d\u6570\u4e0d\u5b58\u5728\u7cbe\u5ea6\u95ee\u9898\uff0c1/2\uff0c1/4 \u8fd9\u79cd\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u76f8\u7b49\u5224\u65ad",children:"\u76f8\u7b49\u5224\u65ad"}),"\n",(0,s.jsx)(e.p,{children:"Object.is() \u4e0e\u6bd4\u8f83\u64cd\u4f5c\u7b26 \u201c===\u201d\u3001\u201c==\u201d"}),"\n",(0,s.jsx)(e.p,{children:"== \u8fdb\u884c\u76f8\u7b49\u5224\u65ad\u65f6\uff0c\u5982\u679c\u4e24\u8fb9\u7684\u7c7b\u578b\u4e0d\u4e00\u81f4\uff0c\u5219\u4f1a\u8fdb\u884c\u5f3a\u5236\u7c7b\u578b\u8f6c\u5316\u540e\u518d\u8fdb\u884c\u6bd4\u8f83\u3002"}),"\n",(0,s.jsx)(e.p,{children:"=== \u8fdb\u884c\u76f8\u7b49\u5224\u65ad\u65f6\uff0c\u7c7b\u578b\u4e0d\u4e00\u81f4\u65f6\uff0c\u4e0d\u4f1a\u505a\u5f3a\u5236\u7c7b\u578b\u51c6\u6362\uff0c\u76f4\u63a5\u8fd4\u56de false\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u4f7f\u7528 Object.is \u6765\u8fdb\u884c\u76f8\u7b49\u5224\u65ad\u65f6\uff0c\u4e00\u822c\u60c5\u51b5\u4e0b\u548c === \u7684\u5224\u65ad\u76f8\u540c\uff0c\u5b83\u5904\u7406\u4e86\u4e00\u4e9b\u7279\u6b8a\u7684\u60c5\u51b5\uff0c\u6bd4\u5982 -0 \u548c +0 \u4e0d\u518d\u76f8\u7b49\uff0c\u4e24\u4e2a NaN \u662f\u76f8\u7b49\u7684\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"\u6df1\u62f7\u8d1d\u6d45\u62f7\u8d1d",children:"\u6df1\u62f7\u8d1d\u6d45\u62f7\u8d1d"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6d45\u62f7\u8d1d\u53ea\u590d\u5236\u5bf9\u8c61\u7684\u7b2c\u4e00\u5c42\u3002\u7b2c\u4e00\u5c42\u7684\u503c\u5982\u679c\u662f\u5bf9\u8c61\uff0c\u62f7\u8d1d\u7684\u662f\u5bf9\u8c61\u7684\u5f15\u7528\u3002"}),"\n",(0,s.jsxs)(e.p,{children:["\u6d45\u62f7\u8d1d\uff1a\u6269\u5c55\u8fd0\u7b97\u7b26\uff0c",(0,s.jsx)(e.code,{children:"Object.assign({}, obj)"}),"\u3002"]}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"Object.assign(targetObj, obj1,[obj2])"})," \u5c06\u6e90\u5bf9\u8c61\u7684\u6240\u6709\u53ef\u679a\u4e3e\u5c5e\u6027\u590d\u5236\u5230\u76ee\u6807\u5bf9\u8c61\u3002\u8fd4\u56de\u7684\u662f\u76ee\u6807\u5bf9\u8c61\u672c\u8eab\u3002\u53ef\u4ee5\u6709\u591a\u4e2a\u6e90\u5bf9\u8c61\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"let outObj = {\n  inObj: { a: 1, b: 2 },\n};\nlet newObj = { ...outObj };\nnewObj.inObj.a = 2;\nconsole.log(outObj); // {inObj: {a: 2, b: 2}}\n\nlet outObj = {\n  inObj: { a: 1, b: 2 },\n};\nlet newObj = Object.assign({}, outObj);\nnewObj.inObj.a = 2;\nconsole.log(outObj); // {inObj: {a: 2, b: 2}}\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6df1\u62f7\u8d1d\u590d\u5236\u5bf9\u8c61\u7684\u6240\u6709\u5c42\u7ea7\u3002"}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"JSON.parse(JSON.stringify(data))"})," \u662f\u6df1\u62f7\u8d1d\u3002\u4f46\u4e0d\u80fd\u62f7\u8d1d ",(0,s.jsx)(e.code,{children:"function"}),"\uff0c\u4e0d\u80fd\u62f7\u8d1d\u5faa\u73af\u5f15\u7528\u7684\u5bf9\u8c61\u7b49\u3002"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h3,{id:"\u624b\u5199\u6df1\u62f7\u8d1d",children:"\u624b\u5199\u6df1\u62f7\u8d1d"}),"\n",(0,s.jsx)(e.p,{children:"\u5bf9\u8c61/\u539f\u59cb\u6570\u636e\u7c7b\u578b\uff1a\u9012\u5f52\u590d\u5236\u4e00\u4efd\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u5e26\u73af\u5f15\u7528\uff1a\u7528 map \u5efa\u7acb\u6620\u5c04\u505a\u7f13\u5b58\uff0c\u9632\u6b62\u5faa\u73af\u5f15\u7528\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6b63\u5219\u7c7b/Date \u7c7b\u5355\u72ec\u5904\u7406\u3002"}),"\n",(0,s.jsxs)(i,{children:[(0,s.jsx)("summary",{children:" \u624b\u5199\u4ee3\u7801 "}),(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"//\u5982\u679c\u5e26\u73af\uff0c\u9700\u8981\u7f13\u5b58\uff0c\u786e\u8ba4\u5f53\u524d\u5bf9\u8c61\u662f\u5426\u590d\u5236\u8fc7\uff0c\u5982\u679c\u590d\u5236\u8fc7\uff0c\u5c31\u76f4\u63a5\u6307\u5411\u5b83\u3002\u7528map\u9632\u6b62\u5faa\u73af\u5f15\u7528\nfunction cloneDeep(obj) {\n  let cache = new Map(); //\u7531\u539f\u5bf9\u8c61\u6620\u5c04\u5230\u5176\u590d\u5236\u54c1\n  function clone(obj) {\n    if (cache.has(obj)) {\n      return cache.get(obj);\n    }\n    let res;\n    if (obj && typeof obj === 'object') {\n      //\u5f15\u7528\u6570\u636e\u7c7b\u578b\uff0c\u4e14\u4e0d\u662fnull\n      if (Array.isArray(obj)) {\n        //\u6570\u7ec4\n        res = [];\n      } else {\n        res = {};\n      }\n      cache.set(obj, res);\n      for (let key in obj) {\n        if (obj.hasOwnProperty(key)) {\n          res[key] = clone(obj[key]);\n        }\n      }\n      return res;\n    } else {\n      return obj;\n    }\n  }\n  return clone(obj);\n}\n"})})]}),"\n",(0,s.jsx)(e.h2,{id:"\u7eaf\u51fd\u6570",children:"\u7eaf\u51fd\u6570"}),"\n",(0,s.jsx)(e.p,{children:"\u4e00\u4e2a\u51fd\u6570\u7684\u8fd4\u56de\u7ed3\u679c\u53ea\u4f9d\u8d56\u5b83\u7684\u53c2\u6570\uff0c\u5e76\u5728\u6267\u884c\u8fc7\u7a0b\u4e2d\u6ca1\u6709\u4efb\u4f55\u7684\u526f\u4f5c\u7528\uff0c\u88ab\u79f0\u4e3a\u7eaf\u51fd\u6570\u3002"}),"\n",(0,s.jsx)(e.h3,{id:"\u4e3a\u4ec0\u4e48\u7528\u7eaf\u51fd\u6570",children:"\u4e3a\u4ec0\u4e48\u7528\u7eaf\u51fd\u6570"}),"\n",(0,s.jsx)(e.p,{children:"\u7eaf\u51fd\u6570\u975e\u5e38\u9760\u8c31\uff0c\u7a33\u5b9a\uff0c\u4e0d\u4f1a\u4ea7\u751f\u4e0d\u53ef\u9884\u6599\u7684\u884c\u4e3a\uff0c\u4e0d\u4f1a\u5bf9\u5916\u90e8\u4ea7\u751f\u5f71\u54cd\u3002"}),"\n",(0,s.jsx)(e.h2,{id:"for-in-\u4e0e-for-of",children:"for in \u4e0e for of"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsx)(e.li,{children:"for in \u4e3b\u8981\u7528\u4e8e\u904d\u5386\u5bf9\u8c61\u6240\u6709\u53ef\u679a\u4e3e\u5c5e\u6027\uff0c\u4e14\u4f1a\u904d\u5386\u5bf9\u8c61\u539f\u578b\u94fe\u4e0a\u7684\u5c5e\u6027\uff0c\u6027\u80fd\u8f83\u4f4e\u3002\u4e5f\u53ef\u904d\u5386\u6570\u7ec4\uff0c\u4f46\u662f\u904d\u5386\u51fa\u6765\u7684\u662f\u6570\u7ec4\u7684\u7d22\u5f15\u3002"}),"\n",(0,s.jsxs)(e.li,{children:["for of \u7528\u4e8e\u904d\u5386\u6240\u6709\u6709 iterator \u63a5\u53e3\u7684\u6570\u636e\u7ed3\u6784\u3002\u53ef\u4ee5\u904d\u5386\u6570\u7ec4\uff0c\u7c7b\u6570\u7ec4\u5bf9\u8c61\u3001Map\uff0cSet\uff0c\u5b57\u7b26\u4e32\u7b49\uff0c\u4e0d\u4f1a\u904d\u5386\u539f\u578b\u94fe\u3002\u666e\u901a\u7684\u5bf9\u8c61\u4f7f\u7528 for of \u4f1a\u62a5\u9519\uff0c\u5982\u679c\u9700\u8981\u53ef\u4ee5\u81ea\u5df1\u5b9a\u4e49\u76f8\u5e94\u7684 Iterator \u63a5\u53e3\uff0c\u9ed8\u8ba4\u7684 Iterator \u63a5\u53e3\u90e8\u7f72\u5728\u6570\u636e\u7ed3\u6784\u7684 ",(0,s.jsx)(e.code,{children:"Symbol.iterator"})," \u5c5e\u6027\u3002"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"js-\u5185\u5b58\u673a\u5236",children:"js \u5185\u5b58\u673a\u5236"}),"\n",(0,s.jsx)(e.h3,{id:"\u5185\u5b58\u56de\u6536",children:"\u5185\u5b58\u56de\u6536"}),"\n",(0,s.jsx)(e.h4,{id:"\u6808\u5185\u5b58\u56de\u6536",children:"\u6808\u5185\u5b58\u56de\u6536"}),"\n",(0,s.jsx)(e.p,{children:"\u51fd\u6570\u8c03\u7528\u7ed3\u675f\uff0c\u8be5\u51fd\u6570\u7684\u6267\u884c\u4e0a\u4e0b\u6587\u6240\u5728\u7684\u6808\u5185\u5b58\u4f1a\u81ea\u5b9a\u88ab\u56de\u6536\u3002\u5982\u679c\u51fa\u73b0\u95ed\u5305\u7684\u60c5\u51b5\uff0c\u95ed\u5305\u7684\u6570\u636e\u4f1a\u7ec4\u6210\u4e00\u4e2a\u5bf9\u8c61\u4fdd\u5b58\u5728\u5806\u7a7a\u95f4\u5185\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"\u5806\u5185\u5b58\u56de\u6536",children:"\u5806\u5185\u5b58\u56de\u6536"}),"\n",(0,s.jsxs)(e.admonition,{title:"\u5783\u573e\u56de\u6536\u65b9\u5f0f\uff1a",type:"tip",children:[(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5f15\u7528\u8ba1\u6570\u3002\u6709\u53ef\u80fd\u5faa\u73af\u5f15\u7528\u65e0\u6cd5\u88ab\u56de\u6536\u3002"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6807\u8bb0\u6e05\u9664\uff1a\u8fd0\u884c\u65f6\u7ed9\u53d8\u91cf\u548c\u503c\u8bbe\u7f6e\u6807\u8bb0\uff0c\u5982\u679c\u6ca1\u6709\u88ab\u5f15\u7528\u7684\u53d8\u91cf\u5c06\u88ab\u5783\u573e\u56de\u6536\u5668\u6e05\u9664\uff0c\u91ca\u653e\u76f8\u5e94\u7684\u5185\u5b58\u3002"}),"\n"]}),"\n"]}),(0,s.jsx)(e.p,{children:"\u5783\u573e\u56de\u6536\u4e00\u822c\u90fd\u6709\u76f8\u540c\u7684\u6267\u884c\u6d41\u7a0b\uff08\u6807\u8bb0\u6e05\u9664\uff09\uff1a"}),(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u6807\u8bb0\u7a7a\u95f4\u4e2d\u6d3b\u52a8\u5bf9\u8c61\u548c\u975e\u6d3b\u52a8\u5bf9\u8c61"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u56de\u6536\u975e\u6d3b\u52a8\u5bf9\u8c61\u6240\u5360\u636e\u7684\u5185\u5b58"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u5185\u5b58\u6574\u7406\uff0c\u8fd9\u6b65\u662f\u53ef\u9009\u7684\uff0c\u56e0\u4e3a\u6709\u7684\u5783\u573e\u56de\u6536\u5668\u5de5\u4f5c\u8fc7\u7a0b\u4f1a\u4ea7\u751f\u5185\u5b58\u788e\u7247\uff0c\u8fd9\u65f6\u5c31\u9700\u8981\u5185\u5b58\u6574\u7406\u9632\u6b62\u4e0d\u591f\u8fde\u7eed\u7a7a\u95f4\u5206\u914d\u7ed9\u5927\u6570\u636e"}),"\n"]}),"\n"]})]}),"\n",(0,s.jsx)(e.p,{children:"JS \u628a\u5806\u7a7a\u95f4\u5206\u6210\u65b0\u751f\u4ee3\u548c\u8001\u751f\u4ee3\u4e24\u4e2a\u533a\u57df\uff0c\u65b0\u751f\u4ee3\u4e2d\u5b58\u653e\u7684\u662f\u751f\u5b58\u65f6\u95f4\u77ed\u7684\u5bf9\u8c61\uff0c\u901a\u5e38\u53ea\u652f\u6301 1 \uff5e 8M \u7684\u5bb9\u91cf\uff1b\u8001\u751f\u4ee3\u4e2d\u5b58\u653e\u7684\u751f\u5b58\u65f6\u95f4\u957f\u7684\u5bf9\u8c61\uff0c\u4e00\u4e9b\u5927\u7684\u6570\u636e\u4e5f\u4f1a\u88ab\u76f4\u63a5\u5206\u914d\u5230\u8001\u751f\u533a\u4e2d\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u9488\u5bf9\u8fd9\u4e24\u4e2a\u533a\u57df\uff0cJS \u5b58\u5728\u4e24\u4e2a\u5783\u573e\u56de\u6536\u5668\uff1a\u4e3b\u5783\u573e\u5904\u7406\u5668\u548c\u526f\u5783\u573e\u5904\u7406\u5668\u3002"}),"\n",(0,s.jsx)(e.p,{children:"\u6808\u5185\u5b58\u4f1a\u968f\u7740\u51fd\u6570\u8c03\u7528\u7ed3\u675f\u800c\u88ab\u91ca\u653e(\u8986\u76d6)\uff0c\u6240\u4ee5 JS \u4e2d\u7684\u5185\u5b58\u6cc4\u6f0f\u4e00\u822c\u53d1\u751f\u5728\u5806\u4e2d\u3002"}),"\n",(0,s.jsx)(e.h4,{id:"\u5185\u5b58\u6cc4\u6f0f",children:"\u5185\u5b58\u6cc4\u6f0f"}),"\n",(0,s.jsx)(e.p,{children:"\u4ec0\u4e48\u662f\u5185\u5b58\u6cc4\u6f0f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u7a0b\u5e8f\u4e2d\u52a8\u6001\u5206\u914d\u7684\u5806\u5185\u5b58\u7531\u4e8e\u67d0\u4e9b\u539f\u56e0\u6ca1\u6709\u91ca\u653e\u3002"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u5185\u5b58\u6cc4\u6f0f\u7684\u573a\u666f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"\u4f7f\u7528\u672a\u58f0\u660e\u7684\u53d8\u91cf\u5bfc\u81f4\u610f\u5916\u521b\u5efa\u5168\u5c40\u53d8\u91cf"}),"\n",(0,s.jsx)(e.li,{children:"\u6ca1\u6709\u53d6\u6d88\u7684\u5b9a\u65f6\u5668\uff0c\u5b9a\u65f6\u5668\u5185\u90e8\u6709\u5bf9\u5916\u90e8\u53d8\u91cf\u7684\u5f15\u7528"}),"\n",(0,s.jsx)(e.li,{children:"\u83b7\u53d6\u4e86 DOM \u7684\u5f15\u7528\u4f46\u5220\u9664 DOM \u540e\uff0c\u8be5\u5f15\u7528\u5b58\u5728\u5c31\u4e0d\u4f1a\u56de\u6536 DOM"}),"\n",(0,s.jsx)(e.li,{children:"\u4e0d\u5408\u7406\u7684\u95ed\u5305"}),"\n"]}),"\n",(0,s.jsx)(e.p,{children:"\u6392\u67e5\u5185\u5b58\u6cc4\u6f0f"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"window \u5bf9\u8c61\u4e0a\u7684\u5c5e\u6027\u6570\u91cf"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"fps \u662f\u5426\u7a33\u5b9a\uff0c\u8bf7\u6c42\u8d44\u6e90\u5927\u5c0f\uff0cDOM \u5c42\u7ea7\u6df1\u5ea6\uff0chttp \u8bf7\u6c42\u65f6\u957f"}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://juejin.cn/post/6844903997615128583#heading-0",children:"JS \u53d8\u91cf\u5b58\u50a8\uff1f\u6808 & \u5806\uff1fNONONO! - \u6398\u91d1"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://mp.weixin.qq.com/s/dtEciFpNSrPGR63aScaoww",children:"\u3010\u5fae\u4fe1\u516c\u4f17\u53f7\uff1a\u5947\u821e\u7cbe\u9009 2022-04-20 19:00\u3011\u6d45\u8c08 JS \u5185\u5b58\u673a\u5236"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://mp.weixin.qq.com/s/wT8_cz82Y5Ur74xGKpPgtQ",children:"\u3010\u5fae\u4fe1\u516c\u4f17\u53f7\uff1aELab \u56e2\u961f 2022-04-26 22:02\u3011\u6d45\u8c08 V8 \u5783\u573e\u56de\u6536\u673a\u5236"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://juejin.cn/post/6981467496742125604#heading-1",children:"\u90a3\u4e9b\u8d44\u6df1/\u4e13\u5bb6\u7684\u524d\u7aef\u662f\u5982\u4f55\u56de\u7b54 JavaScript \u9762\u8bd5\u9898\u7684 \uff08\u4e00\uff09 - \u6398\u91d1"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(e.h2,{id:"\u57fa\u7840\u7efc\u5408\u9898",children:"\u57fa\u7840\u7efc\u5408\u9898"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:"\u4ee5\u4e0b\u51fd\u6570\u7684\u8f93\u51fa\u7ed3\u679c?"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"for (var i = 0; i < 5; i++) {\n  setTimeout(() => {\n    console.log(i);\n  }, 1000);\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5982\u4f55\u6539\u4e3a\u6bcf\u9694\u4e00\u79d2\uff0c\u9012\u589e?"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"for (let i = 0; i < 5; i++) {\n  setTimeout(() => {\n    console.log(i);\n  }, 1000 * (i + 1));\n}\n"})}),"\n",(0,s.jsx)(e.p,{children:"\u5b9e\u73b0 sleep"}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-js",children:"// sleep(1000).then(x=>console.log(x))\nfunction sleep(time) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      resolve();\n    }, time);\n  });\n}\n\n//\u901a\u8fc7 sleep \u5b9e\u73b0\u6bcf\u4e00\u79d2\u8f93\u51fa\u9012\u589e\u6570\u5b57\nfor (let i = 0; i < 5; i++) {\n  sleep(1000 * i).then(() => {\n    console.log(i);\n  });\n}\n\n//\u6539\u6210async await\n(async () => {\n  for (let i = 0; i < 5; i++) {\n    await sleep(1000);\n    console.log(i);\n  }\n})();\n"})}),"\n"]}),"\n",(0,s.jsxs)(e.li,{children:["\n",(0,s.jsx)(e.p,{children:(0,s.jsx)(e.a,{href:"https://juejin.cn/post/6949518756141875231#heading-0",children:"JS - \u7eaf\u51fd\u6570 - \u6398\u91d1"})}),"\n"]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,l.a)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(j,{...n})}):j(n)}},4744:(n,e,i)=>{i.d(e,{Z:()=>t,a:()=>c});var s=i(959);const l={},r=s.createContext(l);function c(n){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function t(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(l):n.components||l:c(n.components),s.createElement(r.Provider,{value:e},n.children)}}}]);