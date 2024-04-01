"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[3113],{3790:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>c,default:()=>o,frontMatter:()=>l,metadata:()=>a,toc:()=>h});var i=s(1527),r=s(8672);const l={sidebar_position:2,keywords:["upload files \u6587\u4ef6\u4e0a\u4f20 \u5206\u7247\u4e0a\u4f20"]},c="\u6587\u4ef6\u4e0a\u4f20",a={id:"business/specific/upload-files",title:"\u6587\u4ef6\u4e0a\u4f20",description:"\u4e0a\u4f20\u6d41\u7a0b",source:"@site/docs/business/specific/upload-files.md",sourceDirName:"business/specific",slug:"/business/specific/upload-files",permalink:"/docs/business/specific/upload-files",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/business/specific/upload-files.md",tags:[],version:"current",lastUpdatedAt:1711965777,formattedLastUpdatedAt:"2024\u5e744\u67081\u65e5",sidebarPosition:2,frontMatter:{sidebar_position:2,keywords:["upload files \u6587\u4ef6\u4e0a\u4f20 \u5206\u7247\u4e0a\u4f20"]},sidebar:"Business",previous:{title:"\u6587\u4ef6\u4e0b\u8f7d",permalink:"/docs/business/specific/download-files"},next:{title:"\u524d\u7aef\u6362\u80a4\uff0c\u4e00\u952e\u5207\u6362\u4e3b\u9898\u7684\u5b9e\u73b0",permalink:"/docs/business/specific/change-themes-dynamic"}},t={},h=[{value:"\u8ba1\u7b97\u6587\u4ef6 hash",id:"\u8ba1\u7b97\u6587\u4ef6-hash",level:2},{value:"\u4f7f\u7528<code>spark-md5</code>\u8ba1\u7b97\u4e00\u4e2a\u6587\u4ef6\u7684 hash",id:"\u4f7f\u7528spark-md5\u8ba1\u7b97\u4e00\u4e2a\u6587\u4ef6\u7684-hash",level:3},{value:"\u6587\u4ef6\u5207\u7247",id:"\u6587\u4ef6\u5207\u7247",level:2},{value:"\u65ad\u70b9\u7eed\u4f20",id:"\u65ad\u70b9\u7eed\u4f20",level:2},{value:"Reference",id:"reference",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"\u6587\u4ef6\u4e0a\u4f20",children:"\u6587\u4ef6\u4e0a\u4f20"}),"\n",(0,i.jsx)(n.p,{children:"\u4e0a\u4f20\u6d41\u7a0b"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u8ba1\u7b97 hash \u5224\u65ad\u662f\u5426\u9700\u8981\u4e0a\u4f20\uff0c\u5982\u679c\u670d\u52a1\u7aef\u5b58\u5728\u8be5\u6587\u4ef6\u5219\u79d2\u4f20\u6210\u529f"}),"\n",(0,i.jsx)(n.li,{children:"\u5927\u6587\u4ef6\u6309\u4e00\u5b9a\u5927\u5c0f\u8fdb\u884c\u5206\u5757"}),"\n",(0,i.jsx)(n.li,{children:"\u6309\u4e00\u5b9a\u7b56\u7565\u53d1\u9001\u5404\u4e2a\u5206\u7247\u6570\u636e\u5757\uff08\u4e32\u884c\u3001\u5e76\u884c\uff09"}),"\n",(0,i.jsx)(n.li,{children:"\u670d\u52a1\u7aef\u5224\u65ad\u6570\u636e\u4e0a\u4f20\u662f\u5426\u5b8c\u6210\uff0c\u5b8c\u6574\u5219\u8fdb\u884c\u6570\u636e\u5408\u6210\u5f97\u5230\u539f\u59cb\u6587\u4ef6"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u8ba1\u7b97\u6587\u4ef6-hash",children:"\u8ba1\u7b97\u6587\u4ef6 hash"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsx)(n.p,{children:"\u4e3a\u4ec0\u4e48\u9700\u8981\u8ba1\u7b97\u6587\u4ef6\u54c8\u5e0c\u503c\uff1f"}),"\n",(0,i.jsx)(n.p,{children:"\u76f8\u540c\u6587\u4ef6\u4e0d\u91cd\u590d\u4e0a\u4f20\uff0c\u8282\u7701\u6570\u636e\u5e93\u8d44\u6e90\uff0c\u4ee5\u53ca\u91cd\u590d\u4e0a\u4f20\u65f6\u8282\u7701\u65f6\u95f4\u3002\u6587\u4ef6\u7684 hash \u53ef\u4ee5\u7406\u89e3\u4e3a\u4e00\u4e2a\u6587\u4ef6\u7684\u6307\u7eb9\u3002\u540e\u7aef\u5b58\u50a8\u6587\u4ef6\u4f7f\u7528\u6587\u4ef6\u540d\u6216\u6587\u4ef6\u7684\u5927\u5c0f\u7b49\u90fd\u4e0d\u79d1\u5b66\uff0c\u5bb9\u6613\u4ea7\u751f\u540c\u540d\u8986\u76d6\u6216\u591a\u6b21\u5b58\u50a8\u76f8\u540c\u7684\u6587\u4ef6\u6d6a\u8d39\u8d44\u6e90\u7684\u95ee\u9898\u3002\u6240\u4ee5\u5728\u6587\u4ef6\u4e0a\u4f20\u65f6\uff0c\u9700\u8981\u5148\u8ba1\u7b97\u6587\u4ef6\u7684 hash\uff0c\u5224\u65ad\u540e\u53f0\u662f\u5426\u5df2\u7ecf\u5b58\u5728\u6b64\u6587\u4ef6\uff0c\u5982\u679c\u4e0d\u5b58\u5728\u518d\u91cd\u65b0\u4e0a\u4f20\uff0c\u5b58\u5728\u7684\u6b64\u6587\u4ef6\u65f6\u76f4\u63a5\u63d0\u793a\u79d2\u4f20\u6210\u529f\u3002"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"\u4f7f\u7528spark-md5\u8ba1\u7b97\u4e00\u4e2a\u6587\u4ef6\u7684-hash",children:["\u4f7f\u7528",(0,i.jsx)(n.code,{children:"spark-md5"}),"\u8ba1\u7b97\u4e00\u4e2a\u6587\u4ef6\u7684 hash"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"npm install --save spark-md5"})}),"\n",(0,i.jsxs)(n.p,{children:["\u53ef\u4ee5\u4f7f\u7528",(0,i.jsx)(n.code,{children:"SparkMD5.hashBinary(str, raw)"}),"\u76f4\u63a5\u5bf9\u6587\u4ef6\u7684\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u8ba1\u7b97 hash ,\u4f46\u5728\u6587\u4ef6\u4f53\u79ef\u6bd4\u8f83\u5927\u65f6\uff0c\u5b58\u5728\u5361\u987f\u7b49\u95ee\u9898\u3002\u4e00\u822c\u91c7\u7528\u5bf9\u6587\u4ef6\u8fdb\u884c\u5206\u7247\uff0c\u7136\u540e\u8fdb\u884c\u589e\u91cf\u8ba1\u7b97 hash\uff0c\u76f8\u5bf9\u7a33\u5b9a\uff0c\u540c\u65f6\u53ef\u4ee5\u7edf\u8ba1\u5f53\u524d\u8ba1\u7b97 hash \u7684\u8fdb\u5ea6\u3002"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import SparkMd5 from 'spark-md5';\n//[spark-md5 - npm](https://www.npmjs.com/package/spark-md5)\n// \u589e\u91cf\u8ba1\u7b97 hash\nconst calculateHash = (file, chunkSize) =>\n  new Promise((resolve, reject) => {\n    let blobSlice =\n        File.prototype.slice ||\n        File.prototype.mozSlice ||\n        File.prototype.webkitSlice,\n      chunks = Math.ceil(file.size / chunkSize),\n      currentChunk = 0,\n      spark = new SparkMd5.ArrayBuffer(),\n      fileReader = new FileReader();\n\n    fileReader.onload = function (e) {\n      spark.append(e.target.result); // Append array buffer\n      console.log('current chunk index', currentChunk);\n      currentChunk++;\n      if (currentChunk < chunks) {\n        loadNext();\n      } else {\n        let fileHash = spark.end(); //compute hash\n        resolve(fileHash);\n      }\n    };\n\n    fileReader.onerror = function (e) {\n      reject(e);\n    };\n\n    function loadNext() {\n      const start = currentChunk * chunkSize,\n        end = start + chunkSize >= file.size ? file.size : start + chunkSize;\n\n      fileReader.readAsArrayBuffer(blobSlice.call(file, start, end));\n    }\n\n    loadNext();\n  });\n\n//usage:\n//chunkSize = 2097152, // Read in chunks of 2MB\ncalculateHash(file, chunkSize)\n  .then((res) => {\n    console.log('computed hash', res);\n  })\n  .catch((e) => {\n    console.log(e);\n  });\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"\u6269\u5c55\uff1a\u53ef\u4ee5\u5728\u4e0a\u8ff0\u903b\u8f91\u4e2d\u6dfb\u52a0\u8ba1\u7b97 hash \u7684\u8fdb\u5ea6\uff1a\u5f53\u524d\u8ba1\u7b97\u5230\u7684\u5206\u7247\u6570/\u603b\u5206\u7247\u6570"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u63d0\u5347\u8ba1\u7b97\u901f\u5ea6\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"web worker \u8ba1\u7b97"}),"\n",(0,i.jsx)(n.li,{children:"\u6587\u4ef6\u5207\u5206\uff0c\u62bd\u6837\u8ba1\u7b97\uff0c\u4f46\u6709\u4e00\u5b9a\u6982\u7387\u9047\u5230\u4e0d\u540c\u7684\u6587\u4ef6\u8ba1\u7b97 hash \u503c\u76f8\u540c\u7684\u60c5\u51b5"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"\u6587\u4ef6\u5207\u7247",children:"\u6587\u4ef6\u5207\u7247"}),"\n",(0,i.jsx)(n.p,{children:"file.slice"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"function createChunks(file, size = 5 * 1024 * 1024) {\n  const res = [];\n  let cur = 0;\n  while (cur < file.size) {\n    res.push(file.slice(cur, cur + size));\n    cur += size;\n  }\n  return res;\n}\n"})}),"\n",(0,i.jsx)(n.h2,{id:"\u65ad\u70b9\u7eed\u4f20",children:"\u65ad\u70b9\u7eed\u4f20"}),"\n",(0,i.jsx)(n.p,{children:"\u78b0\u5230\u7f51\u7edc\u6545\u969c\u7b49\u60c5\u51b5\uff0c\u53ef\u4ee5\u4ece\u5df2\u7ecf\u4e0a\u4f20\u7684\u90e8\u5206\u5f00\u59cb\u7ee7\u7eed\u4e0a\u4f20\u672a\u5b8c\u6210\u7684\u90e8\u5206\uff0c\u800c\u6ca1\u5fc5\u8981\u4ece\u5934\u5f00\u59cb\u4e0a\u4f20\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u5b9e\u73b0\u65b9\u5f0f\u5206\u4e24\u79cd\uff1a"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"\u670d\u52a1\u5668\u544a\u77e5\u4ece\u54ea\u91cc\u5f00\u59cb\u3002\u518d\u6b21\u4e0a\u4f20\u65f6\uff0c\u670d\u52a1\u5668\u8fd4\u56de\u662f\u5426\u4e0a\u4f20\u8fc7\u5b8c\u6574\u6587\u4ef6/\u5207\u7247\u6587\u4ef6\uff0c\u5b58\u5728\u7684\u5207\u7247\u6570\u636e\u3002"}),"\n",(0,i.jsx)(n.li,{children:"\u6d4f\u89c8\u5668\u7aef\u81ea\u884c\u5904\u7406"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"\u5982\u679c\u4e0a\u4f20\u4e2d\u65ad\u4e86\uff0c\u670d\u52a1\u5668\u5148\u5c06\u8be5\u6587\u4ef6\u5199\u4e3a\u4e34\u65f6\u6587\u4ef6\uff0c\u7b49\u5168\u90e8\u4e0a\u4f20\u5b8c\u518d\u91cd\u547d\u540d\u4e3a\u6b63\u5f0f\u6587\u4ef6\u3002\u4e2d\u65ad\u540e\u518d\u6b21\u4e0a\u4f20\uff0c\u6839\u636e\u4e34\u65f6\u6587\u4ef6\u7684\u5927\u5c0f\uff0c\u4f5c\u4e3a\u5728\u5ba2\u6237\u7aef\u8bfb\u53d6\u6587\u4ef6\u7684\u504f\u79fb\u91cf\uff0c\u91cd\u65b0\u5206\u7247\u4e0a\u4f20\u3002"}),"\n",(0,i.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/spark-md5",children:"spark-md5 - npm"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://juejin.cn/post/6844903641527091208",children:"\u524d\u7aef\u901a\u8fc7 spark-md5.js \u8ba1\u7b97\u672c\u5730\u6587\u4ef6 md5 - \u6398\u91d1"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://zhangkai.pro/2020/09/09/binary-data-in-javascript",children:"JavaScript \u4e2d\u7684\u4e8c\u8fdb\u5236\u6570\u636e"})," ArrayBuffer with BinaryString"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://juejin.cn/post/6919690643136577550#heading-4",children:"\u3010\u6587\u4ef6\u4e0a\u4f20\u90a3\u4e9b\u4e8b\u513f\u3011- 03 \u4e24\u79cd\u8ba1\u7b97 hash \u7684\u65b9\u5f0f - \u6398\u91d1"})," \u8ba1\u7b97 hash \u8fdb\u4e00\u6b65\u9605\u8bfb"]}),"\n"]})]})}function o(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8672:(e,n,s)=>{s.d(n,{Z:()=>a,a:()=>c});var i=s(959);const r={},l=i.createContext(r);function c(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);