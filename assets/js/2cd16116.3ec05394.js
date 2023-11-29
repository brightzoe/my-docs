"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[8005],{7981:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>t});var s=r(1527),l=r(4744);const i={},o="Promise",c={id:"fe-basic/javascript/es6/promise",title:"Promise",description:"\u4e3a\u4ec0\u4e48\u4ea7\u751f",source:"@site/docs/fe-basic/javascript/es6/promise.md",sourceDirName:"fe-basic/javascript/es6",slug:"/fe-basic/javascript/es6/promise",permalink:"/docs/fe-basic/javascript/es6/promise",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/javascript/es6/promise.md",tags:[],version:"current",lastUpdatedAt:1701221101,formattedLastUpdatedAt:"2023\u5e7411\u670829\u65e5",frontMatter:{},sidebar:"FE",previous:{title:"\u4e00\u4e9b\u8bed\u6cd5",permalink:"/docs/fe-basic/javascript/es6/"},next:{title:"Set \u548c Map",permalink:"/docs/fe-basic/javascript/es6/set-and-map"}},a={},t=[{value:"\u4e3a\u4ec0\u4e48\u4ea7\u751f",id:"\u4e3a\u4ec0\u4e48\u4ea7\u751f",level:2},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:2},{value:"\u8bed\u6cd5",id:"\u8bed\u6cd5",level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",level:2},{value:"API",id:"api",level:2},{value:"Promise.resolve",id:"promiseresolve",level:3},{value:"Promise.reject",id:"promisereject",level:3},{value:"Promise.all",id:"promiseall",level:3},{value:"Promise.race",id:"promiserace",level:3},{value:"Promise.finally",id:"promisefinally",level:3},{value:"Promise.allSettled",id:"promiseallsettled",level:3},{value:"\u8bf7\u6c42\u5e76\u53d1",id:"\u8bf7\u6c42\u5e76\u53d1",level:2},{value:"\u4e3a\u4ec0\u4e48\u9700\u8981",id:"\u4e3a\u4ec0\u4e48\u9700\u8981",level:3},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:3},{value:"async await",id:"async-await",level:2},{value:"Reference",id:"reference",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"promise",children:"Promise"}),"\n",(0,s.jsx)(n.h2,{id:"\u4e3a\u4ec0\u4e48\u4ea7\u751f",children:"\u4e3a\u4ec0\u4e48\u4ea7\u751f"}),"\n",(0,s.jsx)(n.p,{children:"\u5f02\u6b65\u64cd\u4f5c\uff0c\u901a\u8fc7\u56de\u8c03\u51fd\u6570\u5b9e\u73b0\uff0c\u4e0b\u9762\u7684\u64cd\u4f5c\u4f9d\u8d56\u4e0a\u4e00\u4e2a\u56de\u8c03\u7684\u7ed3\u679c\u3002\u5219\u4e0b\u9762\u7684\u64cd\u4f5c\u90fd\u8981\u5199\u5728\u4e0a\u9762\u7684\u56de\u8c03\u91cc\u9762\uff0c\u56de\u8c03\u91cc\u9762\u5d4c\u5957\u56de\u8c03\uff0c\u4ee5\u81f4\u4ea7\u751f\u56de\u8c03\u5730\u72f1\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"\u7279\u70b9",children:"\u7279\u70b9"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Promise \u5bf9\u8c61\u4ee3\u8868\u4e00\u4e2a\u5f02\u6b65\u64cd\u4f5c\uff0c\u5305\u542b\u4e09\u79cd\u72b6\u6001\uff1apending fulfilled rejected\u3002\u53ea\u6709\u5f02\u6b65\u64cd\u4f5c\u7684\u7ed3\u679c\u624d\u53ef\u4ee5\u51b3\u5b9a\u5f53\u524d promise \u7684\u72b6\u6001\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u72b6\u6001\u5df2\u7ecf\u6539\u53d8\u5c31\u4e0d\u4f1a\u53d8\u3002\u7531 pending->fulfilled \u6216\u8005 pending->rejected\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u8bed\u6cd5",children:"\u8bed\u6cd5"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const p = new Promise((resolve, reject) => {});\n"})}),"\n",(0,s.jsx)(n.p,{children:"Promise \u63a5\u6536\u4e00\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u8be5\u51fd\u6570\u4e2d\u7684\u4e24\u4e2a\u53c2\u6570\u4e3a\u51fd\u6570\uff0c\u5206\u522b\u4e3a resolve\uff0creject\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u901a\u8fc7\u8c03\u7528 resolve/reject \u51fd\u6570 \u6765\u6539\u53d8 Promise \u7684\u72b6\u6001\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const p = new Promise((resolve, reject) => {\n  // reject();\n  resolve(); //\u6210\u529f\u65f6\u8c03\u7528\uff0c\u72b6\u6001\u6539\u4e3a fulfilled\n});\n\nconst p = new Promise((resolve, reject) => {\n  resolve('\u6210\u529f\u7684\u7ed3\u679c'); //\u6539\u53d8\u5f53\u524d promise \u5bf9\u8c61\u7684\u7ed3\u679c\n  //reject(\"\u5931\u8d25\u7684\u7ed3\u679c\");\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"then \u65b9\u6cd5\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5728 Promise.prototype \u4e0a \u3002then \u65b9\u6cd5\u63a5\u6536\u4e24\u4e2a\u51fd\u6570\u4f5c\u4e3a\u53c2\u6570\uff0c\u8fd4\u56de\u503c\u662f\u4e00\u4e2a\u65b0\u7684 promise \u5b9e\u4f8b\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"p.then(\n  (value) => {\n    console.log(value); // p \u7684\u72b6\u6001\u4e3a fulfilled \u65f6\u6267\u884c\u3002value \u662f\u4e0a\u9762resolve \u7684\u53c2\u6570\n  },\n  (reason) => {\n    console.log(reason); // p \u7684\u72b6\u6001\u4e3a rejected \u65f6\u6267\u884c\n  },\n);\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u524d\u9762 promise \u7684\u72b6\u6001\u4e0d\u6539\u53d8\uff0c\u540e\u9762\u7684 then \u65b9\u6cd5\u5c31\u4e0d\u4f1a\u6267\u884c\u3002\u5728 then \u65b9\u6cd5\u4e2d\uff0c\u901a\u8fc7 return \u5c06\u8fd4\u56de\u7684 promise \u5b9e\u4f8b\u6539\u4e3a fulfilled \u72b6\u6001\u3002\u5982\u679c\u5728 then \u65b9\u6cd5\u4e2d\u51fa\u73b0\u9519\u8bef\uff0c\u4f1a\u5c06\u8fd4\u56de\u7684 promise \u5b9e\u4f8b\u6539\u4e3a rejected \u72b6\u6001\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new Promise((resolve, reject) => {\n  resolve('\u7ed9then \u7684\u53c2\u6570');\n})\n  .then(\n    (value) => {\n      console.log(value);\n      return '123'; //\u6539\u53d8\u8fd9\u4e2a promise \u7684\u72b6\u6001\u4e3afulfilled\uff0c\u7ed9\u4e0b\u4e00\u4e2apromise \u7684\u53c2\u6570\n      // throw error \u5982\u679c\u8fd9\u91cc\u7684\u4ee3\u7801\u51fa\u9519\uff0c\u5f53\u524d promise \u7684\u72b6\u6001\u5c31\u53d8\u4e3a rejected\n    },\n    (error) => {\n      console.log(error);\n    },\n  )\n  .then(\n    (value) => {\n      console.log(value);\n    },\n    (error) => {\n      console.log(error);\n    },\n  );\n"})}),"\n",(0,s.jsx)(n.p,{children:"catch \u65b9\u6cd5\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u5728 Promise.prototype \u4e0a\u3002catch \u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e0e then \u65b9\u6cd5\u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e00\u81f4\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5f53 promise \u7684\u72b6\u6001\u4e3a rejected \u6216\u4ee3\u7801\u51fa\u9519\u65f6\uff0c\u4f1a\u6267\u884c catch \u91cc\u7684\u7b2c\u4e00\u4e2a\u53c2\u6570\u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'new Promise((res, rej) => {\n  // rej("rej");\n  throw error;\n}).catch((error) => {\n  //\u4e0a\u9762promise rejected \u6216\u51fa\u9519\u65f6\uff0c\u4f1a\u6267\u884c\u8fd9\u91cc\n  console.log(error);\n});\n'})}),"\n",(0,s.jsx)(n.p,{children:"\u7a7f\u900f"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"new Promise((resolve, reject) => {\n  resolve();\n})\n  .then((value) => {\n    //\u6210\u529f\u65f6\u88ab\u6267\u884c\n    console.log(value);\n  })\n  .catch((error) => {\n    //\u5931\u8d25\u65f6\u88ab\u6267\u884c\n    console.log(error);\n  });\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u4f7f\u7528",children:"\u4f7f\u7528"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function request(method, url, data) {\n  return new Promise((res, rej) => {\n    const xhr = new XMLHttpRequest();\n    xhr.open(method, url);\n    xhr.send(data);\n    xhr.onreadystateChange = function () {\n      if (xhr.readyState !== 4) {\n        return;\n      }\n      if (xhr.status === 200) {\n        res(xhr.responseText);\n      } else {\n        rej(xhr.statusText);\n      }\n    };\n  });\n}\n\nrequest('GET', '../data.json')\n  .then((val) => {\n    return request('GET', `../data.json`, val);\n  })\n  .then((val) => {\n    return request('GET', `../data.json`, val);\n  })\n  .then((val) => {\n    console.log(val);\n  });\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5c06\u73b0\u6709\u5bf9\u8c61\u8f6c\u4e3a promise"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const a = Promise.resolve('foo');\n// \u7b49\u540c\u4e8e\nconst a = new Promise((resolve) => resolve('foo'));\n\nconst p = Promise.reject('\u51fa\u9519\u4e86');\n// \u7b49\u540c\u4e8e\nconst p = new Promise((resolve, reject) => reject('\u51fa\u9519\u4e86'));\n"})}),"\n",(0,s.jsx)(n.h2,{id:"api",children:"API"}),"\n",(0,s.jsx)(n.h3,{id:"promiseresolve",children:"Promise.resolve"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"Promise.resolve(value);\n\nPromise.resolve(Promise.reject(1)).catch((err) => console.log(err));\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a promise \uff0c\u5982\u679c value \u4e3a thenable \uff0c\u5219\u8ddf\u8e2a\u8fd9\u4e2a thenable \u7684\u72b6\u6001\uff0c\u91c7\u7528\u5b83\u7684\u6700\u7ec8\u72b6\u6001\uff0c\u5426\u5219\u8fd4\u56de\u4e00\u4e2a\u4ee5 value \u503c\u4e3a\u7ed3\u679c\u7684 promise\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"promisereject",children:"Promise.reject"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"Promise.reject(error);\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a reject \u72b6\u6001\u7684 promise\uff0c\u503c\u4e3a error"}),"\n",(0,s.jsx)(n.h3,{id:"promiseall",children:"Promise.all"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"Promise.all(promises: Iterable<Promise>): Promise<Array>\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u63a5\u6536 ",(0,s.jsx)(n.code,{children:"Iterable<promise>"})," \u7c7b\u578b\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 promise \u5b9e\u4f8b\u3002"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"iterable: array, map, set \u7b49\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\u5f53\u6240\u6709 promise \u90fd\u6210\u529f\u65f6 resolve\uff0cvalue \u4e3a\u6240\u6709 promise \u7684 value \u6570\u7ec4\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u6709\u4e00\u4e2a\u5931\u8d25\u65f6\u5219 reject\uff0cerror \u4e3a\u7b2c\u4e00\u4e2a reject \u7684 promise \u7684 error\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u53c2\u6570\u4e3a\u7a7a\u6570\u7ec4\u65f6\uff0c\u7acb\u523b resolve\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const promises = [\n  Promise.resolve('a'),\n  Promise.resolve('b'),\n  Promise.reject('c'),\n];\nPromise.all(promises)\n  .then((val) => console.log(val))\n  .catch((err) => console.log(err));\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u7ed3\u5408 map\nfunction timesTwoAsync(x) {\n  return new Promise((resolve) => resolve(x * 2));\n}\nconst arr = [1, 2, 3];\nconst promiseArr = arr.map(timesTwoAsync);\nPromise.all(promiseArr).then((result) => {\n  console.log(res);\n});\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7b80\u6613\u5b9e\u73b0\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u5f02\u6b65\u8fd4\u56de\u7684promise \u8981\u786e\u5b9a\u6240\u6709promise\u90fd\u8fd4\u56de\u4e86\u624d\u6700\u7ec8resolve\n// \u53c2\u6570\u53ef\u80fd\u4e0d\u662fpromise\u8981\u7528promise \u5305\u4e00\u5c42\nfunction all(promises) {\n  return new Promise((resolve, reject) => {\n    const res = [];\n    let count = 0;\n    if (promises.length === 0) {\n      resolve(res);\n      return;\n    }\n    promises.forEach((p, i) => {\n      Promise.resolve(p)\n        .then((val) => {\n          res[i] = val;\n          count++;\n          if (count === promises.length) {\n            resolve(res);\n          }\n        })\n        .catch((error) => {\n          reject(error);\n        });\n    });\n  });\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"promiserace",children:"Promise.race"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"Promise.race(promises: Iterable<Promise>): Promise\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u8fd4\u56de\u4e00\u4e2a promise\uff0c\u662f\u7b2c\u4e00\u4e2a\u7ed3\u675f(resolve/reject)\u7684 promise\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u867d\u7136\u53ea\u8fd4\u56de\u7b2c\u4e00\u4e2a\u7ed3\u675f\u7684 promise\uff0c\u5176\u4ed6\u8dd1\u7684\u6162\u7684 promise \u4e5f\u90fd\u4f1a\u6267\u884c\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u53c2\u6570\u4e3a\u7a7a\u6570\u7ec4\u65f6\uff0c\u8fd4\u56de\u7684 promise \u7684\u72b6\u6001\u6c38\u8fdc\u4e3a pending\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528\uff1a"}),"\n",(0,s.jsx)(n.p,{children:"\u53ef\u4ee5\u7528\u4e8e\u8d85\u65f6\u63a7\u5236\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function resolveAfter(ms, value) {\n  return new Promise((resolve) => {\n    setTimeout(() => {\n      resolve(value);\n    }, ms);\n  });\n}\n\nfunction timeout(ms, promise) {\n  return Promise.race([\n    promise,\n    resolveAfter(ms, Promise.reject('(\u2299o\u2299)\u8d85\u65f6\u4e86')),\n  ]);\n}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://juejin.cn/post/6844903912592375821#heading-7",children:"Promise \u4e2d\u7684\u4e09\u5144\u5f1f .all(), .race(), .allSettled() - \u6398\u91d1"})}),"\n",(0,s.jsx)(n.p,{children:"\u7b80\u6613\u5b9e\u73b0\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function race(promises) {\n  return new Promise((resolve, reject) => {\n    promises.forEach((p) => {\n      Promise.resolve(p).then(\n        (value) => {\n          resolve(value);\n        },\n        (error) => {\n          reject(error);\n        },\n      );\n    });\n  });\n}\n"})}),"\n",(0,s.jsx)(n.h3,{id:"promisefinally",children:"Promise.finally"}),"\n",(0,s.jsx)(n.p,{children:"\u5728 promise \u7ed3\u675f\u65f6\uff0c\u65e0\u8bba\u6210\u529f\u6216\u8005\u5931\u8d25\u90fd\u4f1a\u6267\u884c\u7684\u6307\u5b9a\u7684\u56de\u8c03\u51fd\u6570\u3002\u907f\u514d\u4e86\u76f8\u540c\u7684\u8bed\u53e5\u9700\u8981\u5728 then()\u548c catch()\u4e2d\u5404\u5199\u4e00\u6b21\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"promiseallsettled",children:"Promise.allSettled"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"Promise.allSettled(promises: Iterable<Promise>):  Promise<Array<SettlementObject>>\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u6240\u6709 promise \u90fd\u7ed3\u675f\u4e86\uff0c\u8fd4\u56de\u4e00\u4e2a resolve \u72b6\u6001\u7684 promise\uff0cvalue \u4e3a promises \u7684\u72b6\u6001\u6570\u7ec4\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"Promise.allSettled([Promise.reject(1), Promise.resolve(2)]).then((res) =>\n  console.log(res),\n);\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u8bf7\u6c42\u5e76\u53d1",children:"\u8bf7\u6c42\u5e76\u53d1"}),"\n",(0,s.jsx)(n.h3,{id:"\u4e3a\u4ec0\u4e48\u9700\u8981",children:"\u4e3a\u4ec0\u4e48\u9700\u8981"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4e00\u6b21\u6027\u53d1\u9001\u8fc7\u591a\u8bf7\u6c42\uff0c\u6d4f\u89c8\u5668\u6709\u8bf7\u6c42\u5e76\u53d1\u63a7\u5236\uff0c\u8d85\u51fa\u5e76\u53d1\u6570\uff0c\u540e\u9762\u8bf7\u6c42\u4f1a\u6392\u961f\u7b49\u5019\uff0c\u8bf7\u6c42\u7b49\u5019\u8fc7\u4e45\uff0c\u53ef\u80fd\u4f1a\u8d85\u65f6\uff0c\u6216\u8005\u5bfc\u81f4\u6d4f\u89c8\u5668\u5361\u6b7b"}),"\n",(0,s.jsx)(n.li,{children:"\u4e00\u6b21\u53ea\u53d1\u4e00\u4e2a\u8bf7\u6c42\uff0c\u5219\u6dfb\u52a0\u6b21\u6570\u8fc7\u591a\uff0c\u6548\u7387\u5f88\u4f4e"}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"\u5b9e\u73b0",children:"\u5b9e\u73b0"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"function poolLimit(limit, urls, callback) {\n  //\u5148\u5e76\u53d1limit \u4e2a\u8bf7\u6c42\uff0c\u5f53\u6709\u8bf7\u6c42\u56de\u6765\u65f6\uff0c\u53d1\u9001\u4e00\u4e2a\u65b0\u7684\u8bf7\u6c42\n  let index = limit; //\u901a\u8fc7\u95ed\u5305\u7ef4\u62a4\u6dfb\u52a0\u8bf7\u6c42\u7684index\n  for (let i = 0; i < index; i++) {\n    addRequest(i);\n  }\n\n  // \u6dfb\u52a0\u7b2c\u51e0\u4e2a\u8bf7\u6c42\uff0c\u8bf7\u6c42\u5b8c\u6210\u540e\u53d1\u8d77\u65b0\u7684\u4e00\u4e2a\u8bf7\u6c42\n  function addRequest(i) {\n    console.log('\u6dfb\u52a0\u4efb\u52a1', i);\n    request(urls[i]).then((res) => {\n      callback(res);\n      if (index < urls.length - 1) {\n        index++;\n        addRequest(index); //\u6709\u5b8c\u6210\u4e86\u7684\uff0c\u4ece\u4e4b\u524d\u6dfb\u52a0\u5230\u7684\u7d22\u5f15 index \u5f00\u59cb\u53d6\u65b0\u7684 url \u53d1\u8d77\u8bf7\u6c42\n      }\n    });\n  }\n\n  //\u8bf7\u6c42\u51fd\u6570\n  function request(url) {\n    return new Promise((res, rej) => {\n      setTimeout(() => {\n        res(`\u4efb\u52a1${url} \u5b8c\u6210`);\n      }, Math.random() * 2000);\n    });\n  }\n}\n\nconst urls = [\n  'bytedance.com',\n  'tencent.com',\n  'alibaba.com',\n  'microsoft.com',\n  'apple.com',\n  'hulu.com',\n  'amazon.com',\n];\npoolLimit(3, urls, (data) => console.log(data));\n"})}),"\n",(0,s.jsx)(n.h2,{id:"async-await",children:"async await"}),"\n",(0,s.jsx)(n.p,{children:"async/await \u53ea\u662f promise \u7684\u8bed\u6cd5\u7cd6\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u4efb\u4f55\u51fd\u6570\u524d\u9762\u6dfb\u52a0 async\uff0c\u8be5\u51fd\u6570\u7684\u8fd4\u56de\u503c\u4e00\u5b9a\u4e3a promise\uff0c\u4e0d\u662f promise \u7684\u503c\u5c06\u88ab\u5305\u88f9\u5728 resolved \u7684 promise \u4e2d\u3002"}),"\n",(0,s.jsx)(n.p,{children:"await \u53ea\u5728 async \u51fd\u6570\u5185\u5de5\u4f5c\u3002"}),"\n",(0,s.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://juejin.cn/post/6844903912592375821#heading-7",children:"Promise \u4e2d\u7684\u4e09\u5144\u5f1f .all(), .race(), .allSettled() - \u6398\u91d1"})}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4744:(e,n,r)=>{r.d(n,{Z:()=>c,a:()=>o});var s=r(959);const l={},i=s.createContext(l);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);