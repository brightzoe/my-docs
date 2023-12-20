"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[5013],{8897:(e,n,l)=>{l.r(n),l.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>t});var s=l(1527),r=l(4744);const i={},c="\u6570\u636e\u7c7b\u578b",o={id:"fe-basic/javascript/basic/data-types",title:"\u6570\u636e\u7c7b\u578b",description:"\u57fa\u672c\u6570\u636e\u7c7b\u578b",source:"@site/docs/fe-basic/javascript/basic/data-types.md",sourceDirName:"fe-basic/javascript/basic",slug:"/fe-basic/javascript/basic/data-types",permalink:"/docs/fe-basic/javascript/basic/data-types",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/javascript/basic/data-types.md",tags:[],version:"current",lastUpdatedAt:1703064501,formattedLastUpdatedAt:"2023\u5e7412\u670820\u65e5",frontMatter:{},sidebar:"FE",previous:{title:"\u95ed\u5305",permalink:"/docs/fe-basic/javascript/basic/closure"},next:{title:"\u9632\u6296\u548c\u8282\u6d41",permalink:"/docs/fe-basic/javascript/basic/debounce-and-throttle"}},d={},t=[{value:"\u57fa\u672c\u6570\u636e\u7c7b\u578b",id:"\u57fa\u672c\u6570\u636e\u7c7b\u578b",level:2},{value:"Boolean",id:"boolean",level:3},{value:"String",id:"string",level:3},{value:"number",id:"number",level:3},{value:"bigInt",id:"bigint",level:3},{value:"symbol",id:"symbol",level:3},{value:"\u5f15\u7528\u6570\u636e\u7c7b\u578b",id:"\u5f15\u7528\u6570\u636e\u7c7b\u578b",level:2},{value:"\u5224\u65ad\u6570\u636e\u7c7b\u578b",id:"\u5224\u65ad\u6570\u636e\u7c7b\u578b",level:2},{value:"\u5176\u4ed6\u76f8\u5173\u6570\u636e\u7c7b\u578b\uff0c\u6570\u636e\u7ed3\u6784",id:"\u5176\u4ed6\u76f8\u5173\u6570\u636e\u7c7b\u578b\u6570\u636e\u7ed3\u6784",level:2},{value:"JSON\uff08\u6587\u4ef6\u683c\u5f0f\uff09",id:"json\u6587\u4ef6\u683c\u5f0f",level:3},{value:"\u6570\u636e\u7c7b\u578b\u8f6c\u6362",id:"\u6570\u636e\u7c7b\u578b\u8f6c\u6362",level:2},{value:"\u57fa\u672c\u7c7b\u578b\u4e0e\u5f15\u7528\u7c7b\u578b\u7684\u533a\u522b",id:"\u57fa\u672c\u7c7b\u578b\u4e0e\u5f15\u7528\u7c7b\u578b\u7684\u533a\u522b",level:2},{value:"Reference",id:"reference",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u6570\u636e\u7c7b\u578b",children:"\u6570\u636e\u7c7b\u578b"}),"\n",(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u6570\u636e\u7c7b\u578b",children:"\u57fa\u672c\u6570\u636e\u7c7b\u578b"}),"\n",(0,s.jsx)(n.p,{children:"string,number,boolean,undefined,null,symbol,bigInt"}),"\n",(0,s.jsx)(n.h3,{id:"boolean",children:"Boolean"}),"\n",(0,s.jsxs)(n.p,{children:["\u88ab\u5f53\u4f5c falsy \u7684\u503c\uff1a",(0,s.jsx)(n.code,{children:"false"})," ",(0,s.jsx)(n.code,{children:"null"})," ",(0,s.jsx)(n.code,{children:"''"})," ",(0,s.jsx)(n.code,{children:"0"})," ",(0,s.jsx)(n.code,{children:"NaN"})," ",(0,s.jsx)(n.code,{children:"undefined"})]}),"\n",(0,s.jsx)(n.p,{children:"\u8f6c\u6362\u4e3a\u5e03\u5c14\u7c7b\u578b"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"!0; //true\n![]; //false\n!![]; //true\n"})}),"\n",(0,s.jsx)(n.h3,{id:"string",children:"String"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"//\u4e00\u4e9b\u65b9\u6cd5\nlet str = 'gdagffasd';\nstr.indexOf('d');\nstr.lastIndexOf('g');\n\nstr.split(''); //\u8f6c\u4e3a\u6570\u7ec4\nstr.split('g'); //['', 'da', 'ffasd']\n"})}),"\n",(0,s.jsx)(n.h3,{id:"number",children:"number"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"typeof NaN === 'number'; // true\n\nNaN !== NaN; //true\n\nNumber.isNaN(NaN); // true\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Number.MAX_SAFE_INTEGER"})," \uff1a2^53 -1 \u3002\u5927\u4e8e\u8fd9\u4e2a\u8303\u56f4\u7684\u6570\u662f\u53ef\u4ee5\u8868\u793a\u7684\uff0c\u4f46\u4e0d\u80fd\u4fdd\u8bc1\u7cbe\u786e\uff0c\u6ea2\u51fa\u7684\u4f4d\u4f1a\u88ab\u622a\u65ad\u3002"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5224\u65ad\u662f\u6574\u6570","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Number.isInteger"}),"\n",(0,s.jsx)(n.li,{children:"number % 1"}),"\n",(0,s.jsx)(n.li,{children:"Math.floor/Math.ceil/Math.round \u4e4b\u540e\u4e0e\u539f\u503c\u662f\u5426\u76f8\u7b49"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"bigint",children:"bigInt"}),"\n",(0,s.jsx)(n.p,{children:"\u8868\u793a\u4efb\u610f\u5927\u7684\u6574\u6570\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const a = BigInt(9007199254740991);\nconst b = 9007199254740991n;\nconst hugeHex = BigInt('0x1fffffffffffff');\n"})}),"\n",(0,s.jsx)(n.h3,{id:"symbol",children:"symbol"}),"\n",(0,s.jsx)(n.p,{children:"\u57fa\u672c\u6570\u636e\u7c7b\u578b\u3002 \u521b\u5efa\u540e\u72ec\u4e00\u65e0\u4e8c\u4e0d\u53ef\u53d8\uff0c\u53ef\u4ee5\u89e3\u51b3\u5168\u5c40\u53d8\u91cf\u51b2\u7a81\u7684\u95ee\u9898\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const a = Symbol('\u8fd9\u662f\u63cf\u8ff0\u7b26');\nconst b = Symbol();\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Symbol()"}),"\u51fd\u6570\u4f1a\u8fd4\u56de",(0,s.jsx)(n.code,{children:"symbol"}),"\u7c7b\u578b\u7684\u503c\uff0c\u8be5\u7c7b\u578b\u5177\u6709\u9759\u6001\u5c5e\u6027\u548c\u9759\u6001\u65b9\u6cd5\u3002\u5b83\u7684\u9759\u6001\u5c5e\u6027\u4f1a\u66b4\u9732\u51e0\u4e2a\u5185\u5efa\u7684\u6210\u5458\u5bf9\u8c61\uff1b\u5b83\u7684\u9759\u6001\u65b9\u6cd5\u4f1a\u66b4\u9732\u5168\u5c40\u7684",(0,s.jsx)(n.code,{children:"symbol"}),"\u6ce8\u518c\uff0c\u4e14\u7c7b\u4f3c\u4e8e\u5185\u5efa\u5bf9\u8c61\u7c7b\uff0c\u4f46\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\u6765\u8bf4\u5b83\u5e76\u4e0d\u5b8c\u6574\uff0c\u56e0\u4e3a\u5b83\u4e0d\u652f\u6301\u8bed\u6cd5\uff1a",(0,s.jsx)(n.code,{children:"new Symbol()"}),"\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["\u6bcf\u4e2a\u4ece ",(0,s.jsx)(n.code,{children:"Symbol()"}),"\u8fd4\u56de\u7684 ",(0,s.jsx)(n.code,{children:"symbol"})," \u503c\u90fd\u662f\u552f\u4e00\u7684\u3002\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"symbol"})," \u503c\u80fd\u4f5c\u4e3a\u5bf9\u8c61\u5c5e\u6027\u7684\u6807\u8bc6\u7b26\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"//\u552f\u4e00\u7684\uff0c\u6bcf\u6b21\u521b\u5efa\u7684\u90fd\u662f\u65b0\u7684symbol\u7c7b\u578b\nSymbol('foo') === Symbol('foo'); // false\n\nconst sym = new Symbol(); // TypeError \u4e0d\u80fdnew,\u8bed\u6cd5\u9519\u8bef\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5171\u4eab Symbol"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"Symbol()"})," \u51fd\u6570\u7684\u8bed\u6cd5\uff0c\u4e0d\u4f1a\u5728\u4f60\u7684\u6574\u4e2a\u4ee3\u7801\u5e93\u4e2d\u521b\u5efa\u4e00\u4e2a\u53ef\u7528\u7684\u5168\u5c40\u7684 symbol \u7c7b\u578b\u3002 \u8981\u521b\u5efa\u8de8\u6587\u4ef6\u53ef\u7528\u7684 symbol\uff0c\u751a\u81f3\u8de8\u57df\uff08\u6bcf\u4e2a\u90fd\u6709\u5b83\u81ea\u5df1\u7684\u5168\u5c40\u4f5c\u7528\u57df\uff09\uff0c \u4f7f\u7528 ",(0,s.jsx)(n.code,{children:"Symbol.for()"})," \u65b9\u6cd5\u548c ",(0,s.jsx)(n.code,{children:"Symbol.keyFor()"})," \u65b9\u6cd5\u4ece\u5168\u5c40\u7684 symbol \u6ce8\u518c\u8868\u8bbe\u7f6e\u548c\u53d6\u5f97 symbol\u3002"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["symbol \u6ce8\u518c\u8868\u901a\u5e38\u6784\u5efa\u5728 JavaScript \u7f16\u8bd1\u5668\u57fa\u7840\u8bbe\u65bd\uff0c\u6240\u4ee5 symbol \u6ce8\u518c\u8868\u7684\u5185\u5bb9\u4e0d\u4f1a\u51fa\u73b0 JavaScript \u8fd0\u884c\u65f6\u73af\u5883\uff0c\u9664\u4e86\u901a\u8fc7\u5b83\u4eec\u7684\u53cd\u5c04\u65b9\u6cd5\u3002",(0,s.jsx)(n.code,{children:'Symbol.for("tokenString")'})," \u65b9\u6cd5\u4ece\u6ce8\u518c\u8868\u8fd4\u56de\u4e00\u4e2a symbol \u503c\uff0c",(0,s.jsx)(n.code,{children:"Symbol.keyFor(symbolValue)"}),' \u65b9\u6cd5\u4ece\u6ce8\u518c\u8868\u8fd4\u56de"tokenString"\uff1b']}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"Symbol.keyFor(Symbol.for('tokenString')) == 'tokenString'; // true\n\nlet a = Symbol.for('\u552f\u4e00\u7684');\nSymbol.keyFor(a); // \u552f\u4e00\u7684\n\nSymbol.for('foo'); //\u5411\u5168\u5c40\u641c\u5bfb\u662f\u5426\u6709\u901a\u8fc7Symbol.for('foo') \u5168\u5c40\u6ce8\u518c\u7684symbol \uff0c\u6ca1\u6709\u7684\u8bdd\u5c31\u6ce8\u518c\u4e00\u4e2a\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Symbol",children:"Symbol - \u672f\u8bed\u8868 | MDN"})}),"\n",(0,s.jsx)(n.p,{children:"\u5e94\u7528"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["\u907f\u514d\u5bf9\u8c61\u7684 key \u88ab\u8986\u76d6\uff0c\u7528\u6765\u6269\u5c55\u5bf9\u8c61\u7684\u5c5e\u6027\u3002\u5bf9\u4e8e\u4e00\u4e2a\u5bf9\u8c61\u7531\u591a\u4e2a\u6a21\u5757\u6784\u6210\u7684\u60c5\u51b5\u5f88\u6709\u7528\u3002 ",(0,s.jsx)(n.strong,{children:"Symbol \u4f5c\u4e3a\u5bf9\u8c61\u5c5e\u6027\u540d\u65f6\u8bfb\u53d6\u65f6\u4e0d\u80fd\u7528.\u8fd0\u7b97\u7b26\uff0c\u8981\u7528\u65b9\u62ec\u53f7\u3002"})]}),"\n",(0,s.jsx)(n.p,{children:"Symbol \u503c\u4f5c\u4e3a\u5c5e\u6027\u540d\u65f6\uff0c\u8be5\u5c5e\u6027\u662f\u516c\u6709\u5c5e\u6027\u4e0d\u662f\u79c1\u6709\u5c5e\u6027\uff0c\u4f46 for in \u4e0d\u80fd\u904d\u5386 Symbol \u5c5e\u6027\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const foo = Symbol('a');\nconst obj = {};\nobj[foo] = 'xx';\n\nfoo in obj; //true\n\nfor (let t in obj) {\n  console.log(t); //\u6ca1\u6709symbol\n}\n\nObject.keys(obj); //[]\n\nobj.hasOwnProperty(foo); //true\n\nReflect.ownKeys(obj); //[Symbol(a)]\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5f15\u7528\u6570\u636e\u7c7b\u578b",children:"\u5f15\u7528\u6570\u636e\u7c7b\u578b"}),"\n",(0,s.jsx)(n.p,{children:"object,array,function"}),"\n",(0,s.jsx)(n.h2,{id:"\u5224\u65ad\u6570\u636e\u7c7b\u578b",children:"\u5224\u65ad\u6570\u636e\u7c7b\u578b"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"typeof"})," \u4e00\u5143\u8fd0\u7b97\u7b26\uff0c\u8fd4\u56de\u7c7b\u578b"]}),"\n",(0,s.jsxs)(n.p,{children:["\u8fd4\u56de\u503c\uff1a",(0,s.jsx)(n.code,{children:"string"}),"/",(0,s.jsx)(n.code,{children:"number"}),"/",(0,s.jsx)(n.code,{children:"boolean"}),"/",(0,s.jsx)(n.code,{children:"undefined"}),"/",(0,s.jsx)(n.code,{children:"object"}),"/",(0,s.jsx)(n.code,{children:"function"}),"/",(0,s.jsx)(n.code,{children:"symbol"}),"/",(0,s.jsx)(n.code,{children:"bigInt"})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u65e0\u6cd5\u533a\u5206 array \u548c\u666e\u901a\u5bf9\u8c61"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"typeof null "}),"=> ",(0,s.jsx)(n.code,{children:"object"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"instanceof"})," \u4e8c\u5143\u8fd0\u7b97\u7b26\uff0c\u5224\u65ad\u67d0\u4e2a\u5bf9\u8c61\u662f\u5426\u7ee7\u627f\u81ea\u67d0\u4e2a\u7279\u5b9a\u7684\u6784\u9020\u51fd\u6570\uff0c\u4e0d\u80fd\u5224\u65ad\u57fa\u672c\u6570\u636e\u7c7b\u578b\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"[1] instanceof Array; //true\n'str' instanceof String; // false\ntrue instanceof Boolean; // false\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"Object.prototype.toString"})," \u53ef\u4ee5\u51c6\u786e\u5224\u65ad\u6240\u6709\u7684\u7c7b\u578b\uff0cArray\u3001String \u7b49\u90fd\u91cd\u5199\u4e86\u8be5\u65b9\u6cd5\uff0c\u56e0\u6b64\u5c31\u9700\u8981\u501f\u52a9 call/apply \u6765\u8c03\u7528 Object.prototype \u4e0a\u7684\u65b9\u6cd5\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"Object.prototype.toString.call([1, 2, 3]) === '[object Array]';\nObject.prototype.toString.call('foo') === '[object String]';\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/toString",children:"Object.prototype.toString() - JavaScript | MDN"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u5224\u65ad\u662f\u4e0d\u662f\u6570\u7ec4\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"Array.isArray(ary)\nObject.prototype.toString.call(ary)==='[object Array]'\nary.instanceof Array\nary.__proto__ === Array.prototype;\n\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u5176\u4ed6\u76f8\u5173\u6570\u636e\u7c7b\u578b\u6570\u636e\u7ed3\u6784",children:"\u5176\u4ed6\u76f8\u5173\u6570\u636e\u7c7b\u578b\uff0c\u6570\u636e\u7ed3\u6784"}),"\n",(0,s.jsx)(n.h3,{id:"json\u6587\u4ef6\u683c\u5f0f",children:"JSON\uff08\u6587\u4ef6\u683c\u5f0f\uff09"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\u5e8f\u5217\u5316\u6570\u636e(e.g. yaml)\uff0c\u65b9\u4fbf\u4f20\u8f93\u6570\u636e\uff0c\u6216\u8005\u4f5c\u4e3a\u914d\u7f6e\u6587\u4ef6\u3002","\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u5e8f\u5217\u5316:\u628a\u4e00\u4e2a\u4e1c\u897f\u5728\u4e0d\u635f\u5931\u4fe1\u606f\u91cf\u7684\u524d\u63d0\u4e0b\uff0c\u8f6c\u6362\u4e3a\u7531\u8fde\u7eed\u5b57\u8282\u8868\u793a\u7684\u6570\u636e\uff0c\u6bd4\u5982\u5b57\u7b26\u4e32\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.li,{children:"\u770b\u8d77\u6765\u5f88\u50cf JS \u7684\u6570\u7ec4\u548c\u5bf9\u8c61\u7684\u8868\u793a\u65b9\u5f0f\uff0c\u4f46\u6709\u4e00\u4e9b\u9650\u5236\u3002\u6240\u6709 key \u90fd\u8981\u6709\u53cc\u5f15\u53f7\u3002\u53ea\u5141\u8bb8\u4f7f\u7528\u7b80\u5355\u7684\u6570\u636e\u683c\u5f0f\uff0c\u4e0d\u80fd\u6709\u51fd\u6570\u8c03\u7528/\u7ed1\u5b9a\u6216\u6d89\u53ca\u5b9e\u9645\u8ba1\u7b97\u3002\u53ea\u652f\u6301\u6570\u7ec4\u3001\u5bf9\u8c61\u3001string\u3001number\u3001boolean\u3001null\u3002\u652f\u6301\u8f6c\u4e49\uff0c\u4e0d\u652f\u6301\u660e\u6587\u7a7a\u683c\u3002\u4e0d\u80fd\u6709\u591a\u4f59\u7684\u9017\u53f7\u3002"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JSON.stringify()"}),"//\u5e8f\u5217\u5316\u63a5\u53d7 JavaScript \u503c\u5e76\u8fd4\u56de JSON \u7f16\u7801\u7684\u5b57\u7b26\u4e32"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"JSON.parse()"}),"//\u53cd\u5e8f\u5217\u5316"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6570\u636e\u7c7b\u578b\u8f6c\u6362",children:"\u6570\u636e\u7c7b\u578b\u8f6c\u6362"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"number to string"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"String(233);\n(233).toString(); // \u6216 233..toString()  //\u9047\u5230null\uff0cundefined\u4f1a\u62a5\u9519\uff0c\u4e0d\u5b89\u5168\n\n'' + 233;\n\n233 + '';\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u5b70\u4f18\u5b70\u52a3\u89c1 reference\u3002 \u4e2a\u4eba\u4e00\u822c\u91c7\u7528 String()\uff0c\u6bd4\u8f83\u660e\u786e\uff0c\u5b58\u5728 null,undefined \u7b49\u4e0d\u4f1a\u62a5\u9519\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"parseInt(string,radix) \u89e3\u6790\u4e00\u4e2a\u5b57\u7b26\u4e32\u5e76\u8fd4\u56de\u6307\u5b9a\u57fa\u6570\u7684\u5341\u8fdb\u5236\u6574\u6570\u3002\u89e3\u6790\u5931\u8d25\u8fd4\u56de NaN"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"parseFloat(string) \u5c06\u5b57\u7b26\u4e32\u8f6c\u6362\u4e3a\u6d6e\u70b9\u6570\uff0c\u89e3\u6790\u5931\u8d25\u8fd4\u56de NaN\u3002"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"number.toFixed(n) \u56db\u820d\u4e94\u5165\u4fdd\u7559 n \u4f4d\u5c0f\u6570"}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"=="})," \u9690\u542b\u5f3a\u5236\u7c7b\u578b\u8f6c\u6362 ",(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/Equality",children:"\u76f8\u7b49\uff08==\uff09 - JavaScript | MDN"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"NaN == NaN; //false\nnull == undefined; //true\n[] == 0; //\u8f6c\u6362\u4e3a\u6570\u5b57\n'' == 0; //true\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u903b\u8f91\u8fd0\u7b97\u7b26"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4f18\u5148\u7ea7\uff1a ! > && > ||"}),"\n",(0,s.jsx)(n.li,{children:"\u77ed\u8def\u7279\u6027\u3002\u53f3\u8fb9\u7684\u503c\u53ea\u5728\u5fc5\u8981\u65f6\u8ba1\u7b97"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"//\u524d\u9762\u7684\u5224\u65ad\u8f6c\u6362\u4e3a\u5e03\u5c14\u7c7b\u578b\n2 && 3; //3\n1 && null && 2; //null \u4ece\u5de6\u5230\u53f3\u8fd4\u56de\u7b2c\u4e00\u4e2a\u4e3a falsy \u7684\u503c\nfalse || null || '' || 0 || NaN || 'Hello' || undefined; // \"Hello\"\n\nnull || false || undefined; //undefined\n0 || 2 || alert(3); //2  \u4ece\u5de6\u5230\u53f3\u8fd4\u56de\u7b2c\u4e00\u4e2a\u4e3a true \u7684\u503c\n1 && [] && {} && true && 'World' && null && 2010; // null\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u57fa\u672c\u7c7b\u578b\u4e0e\u5f15\u7528\u7c7b\u578b\u7684\u533a\u522b",children:"\u57fa\u672c\u7c7b\u578b\u4e0e\u5f15\u7528\u7c7b\u578b\u7684\u533a\u522b"}),"\n",(0,s.jsx)(n.p,{children:"\u5f15\u7528\u7c7b\u578b\u7684\u672c\u8d28\u662f\u76f8\u540c\u7684\u5185\u5b58\u5730\u5740"}),"\n",(0,s.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Symbol",children:"Symbol - JavaScript | MDN"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Glossary/Symbol",children:"Symbol - \u672f\u8bed\u8868 | MDN"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stackoverflow.com/questions/5765398/whats-the-best-way-to-convert-a-number-to-a-string-in-javascript",children:"What's the best way to convert a number to a string in JavaScript? - Stack Overflow"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://stackoverflow.com/questions/1133770/how-to-convert-a-string-to-an-integer-in-javascript",children:"How to convert a string to an integer in JavaScript? - Stack Overflow"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},4744:(e,n,l)=>{l.d(n,{Z:()=>o,a:()=>c});var s=l(959);const r={},i=s.createContext(r);function c(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);