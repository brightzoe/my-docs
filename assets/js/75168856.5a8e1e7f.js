"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[6094],{3940:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var s=r(1527),t=r(4744);const l={},c="\u4e00\u4e9b\u8bed\u6cd5",i={id:"fe-basic/javascript/es6/index",title:"\u4e00\u4e9b\u8bed\u6cd5",description:"- symbol bigInt",source:"@site/docs/fe-basic/javascript/es6/index.md",sourceDirName:"fe-basic/javascript/es6",slug:"/fe-basic/javascript/es6/",permalink:"/docs/fe-basic/javascript/es6/",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/javascript/es6/index.md",tags:[],version:"current",lastUpdatedAt:1703064501,formattedLastUpdatedAt:"2023\u5e7412\u670820\u65e5",frontMatter:{},sidebar:"FE",previous:{title:"this,call,apply,bind",permalink:"/docs/fe-basic/javascript/basic/this-and-related"},next:{title:"Promise",permalink:"/docs/fe-basic/javascript/es6/promise"}},a={},o=[{value:"\u6269\u5c55\u8fd0\u7b97\u7b26",id:"\u6269\u5c55\u8fd0\u7b97\u7b26",level:2},{value:"\u89e3\u6784\u8d4b\u503c",id:"\u89e3\u6784\u8d4b\u503c",level:2},{value:"\u7bad\u5934\u51fd\u6570",id:"\u7bad\u5934\u51fd\u6570",level:2},{value:"Array API",id:"array-api",level:2},{value:"Object API",id:"object-api",level:2},{value:"Class",id:"class",level:2},{value:"getter setter",id:"getter-setter",level:3},{value:"static",id:"static",level:3},{value:"extends",id:"extends",level:3},{value:"Proxy",id:"proxy",level:2},{value:"Reflect",id:"reflect",level:2},{value:"Proxy and Reflect",id:"proxy-and-reflect",level:2},{value:"Reference",id:"reference",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components},{Details:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"\u4e00\u4e9b\u8bed\u6cd5",children:"\u4e00\u4e9b\u8bed\u6cd5"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"symbol bigInt"}),"\n",(0,s.jsx)(n.li,{children:"Map Set WeakMap WeakSet WeakRef"}),"\n",(0,s.jsx)(n.li,{children:"const/let"}),"\n",(0,s.jsx)(n.li,{children:"\u6269\u5c55\u8fd0\u7b97\u7b26\uff0c\u5269\u4f59\u53c2\u6570 ..."}),"\n",(0,s.jsx)(n.li,{children:"class"}),"\n",(0,s.jsx)(n.li,{children:"Promise async await"}),"\n",(0,s.jsx)(n.li,{children:"generator iterator"}),"\n",(0,s.jsx)(n.li,{children:"Proxy/Reflect"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"\u6269\u5c55\u8fd0\u7b97\u7b26",children:"\u6269\u5c55\u8fd0\u7b97\u7b26"}),"\n",(0,s.jsx)(n.p,{children:"\u62f7\u8d1d\u53ef\u904d\u5386\u7684\u5c5e\u6027\uff0c\u6d45\u62f7\u8d1d\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"let bar = { a: 1, b: 2 };\nlet baz = { ...bar }; // { a: 1, b: 2 } \u4e0eObject.assign \u4e00\u81f4\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u89e3\u6784\u8d4b\u503c",children:"\u89e3\u6784\u8d4b\u503c"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const { a, b: y } = { a: 3, b: 4 };\n//a :3 y:4  y \u662f\u5bf9 b \u7684\u91cd\u547d\u540d\u3002\u5916\u8fb9\u58f0\u660e\u7684\u662fy\uff0c\u53d6\u503c\u53d6 b \u7684\u503c\u3002\n\nlet { foo, bar } = { foo: 'aaa', bar: 'bbb' };\nfoo; // \"aaa\"\nbar; // \"bbb\"\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u63d0\u53d6\u9ad8\u5ea6\u5d4c\u5957\u5bf9\u8c61\u91cc\u7684\u6307\u5b9a\u5c5e\u6027\uff1a"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const school = {\n  classes: {\n    stu: {\n      name: 'Bob',\n      age: 24,\n    },\n  },\n};\n\nconst {\n  classes: {\n    stu: { name },\n  },\n} = school;\nconsole.log(name); // 'Bob'\n"})}),"\n",(0,s.jsx)(n.h2,{id:"\u7bad\u5934\u51fd\u6570",children:"\u7bad\u5934\u51fd\u6570"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u7b80\u6d01"}),"\n",(0,s.jsx)(n.li,{children:"\u6ca1\u6709\u81ea\u5df1\u7684 this\uff0c\u7ee7\u627f\u4e0a\u5c42\u4f5c\u7528\u57df\u7684 this\uff0c\u6c38\u8fdc\u4e0d\u4f1a\u6539\u53d8\u3002\u4e0d\u80fd\u901a\u8fc7 call\uff0capply\uff0cbind \u7b49\u53bb\u6539\u53d8\u3002"}),"\n",(0,s.jsx)(n.li,{children:"\u4e0d\u80fd\u4f5c\u4e3a\u6784\u9020\u51fd\u6570\uff0c\u56e0\u4e3a this \u7684\u95ee\u9898\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"array-api",children:"Array API"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u6269\u5c55\u8fd0\u7b97\u7b26\u3002 \u662f\u6d45\u62f7\u8d1d"}),"\n",(0,s.jsx)(n.li,{children:"Array.from"}),"\n",(0,s.jsx)(n.li,{children:"array.find array.findIndex"}),"\n",(0,s.jsx)(n.li,{children:"array.fill(value,[from],[to])"}),"\n",(0,s.jsx)(n.li,{children:"array.includes"}),"\n",(0,s.jsx)(n.li,{children:"array.flat \u9ed8\u8ba4\u53ea\u62cd\u5e73\u4e00\u5c42"}),"\n",(0,s.jsx)(n.li,{children:"array.flatMap"}),"\n",(0,s.jsx)(n.li,{children:"array.at(index)"}),"\n"]}),"\n",(0,s.jsxs)(r,{children:[(0,s.jsx)("summary",{children:" \u5b9e\u73b0 flat"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"//flat \u5b9e\u73b0 \u4e0d\u5e26\u5c42\u7ea7\nfunction flatDeep(arr) {\n  return arr.reduce(\n    (acc, curr) =>\n      Array.isArray(curr) ? [...acc, ...flatDeep(curr)] : [...acc, curr],\n    [],\n  );\n}\n\n//flat \u5e26\u5c42\u7ea7\u5c55\u5f00\n//1 \u501f\u52a9\u5916\u90e8\u51fd\u6570\u9012\u5f52\nconst flat = (arr, level = 1) => {\n  return helper(arr, level, []);\n};\nconst helper = (arr, level = 1, res = []) => {\n  for (let item of arr) {\n    if (Array.isArray(item) && level > 0) {\n      res = [...res, ...flat(item, level - 1)];\n    } else {\n      res = [...res, item];\n    }\n  }\n  return res;\n};\nconsole.log(flat([1, 2, 3, [1, 2, [1, 2, 3]]], 2));\n\n//2 reduce \u9012\u5f52\nfunction flat(arr, level = 1) {\n  return arr.reduce(\n    (acc, curr) =>\n      Array.isArray(curr) && level > 0\n        ? [...acc, ...flat(curr, level - 1)]\n        : [...acc, curr],\n    [],\n  );\n}\n"})}),(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Array/flat#try_it",children:"Array.prototype.flat() - JavaScript | MDN"})}),"\n"]})]}),"\n",(0,s.jsx)(n.h2,{id:"object-api",children:"Object API"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Object.is"}),"\n",(0,s.jsxs)(n.p,{children:["\u4f7f\u7528\u540c\u503c\u76f8\u7b49\u7684\u7b97\u6cd5\u3002\u57fa\u672c\u4e0e\u4e25\u683c\u76f8\u7b49",(0,s.jsx)(n.code,{children:"==="}),"\u4e00\u81f4\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"Object.is('foo', 'foo'); //true\nObject.is({}, {}); //false\n\n//\u4e0e\u4e25\u683c\u76f8\u7b49\u4e0d\u540c\uff1a\nObject.is(+0, -0); // false\nObject.is(NaN, NaN); // true\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Object.assign"}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u8c61\u5408\u5e76\uff0c\u5c06\u6e90\u5bf9\u8c61\u7684\u6240\u6709\u53ef\u679a\u4e3e\u5c5e\u6027\u590d\u5236\u5230\u76ee\u6807\u5bf9\u8c61\u3002\u8fd4\u56de\u7684\u662f\u76ee\u6807\u5bf9\u8c61\u672c\u8eab\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const target = { a: 1 };\n\nconst source1 = { b: 2 };\nconst source2 = { c: 3 };\n\nObject.assign(target, source1, source2);\n"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"\u8be5\u65b9\u6cd5\u662f\u6d45\u62f7\u8d1d\u3002\u590d\u5236\u5230\u76ee\u6807\u5bf9\u8c61\u4e0a\u7684\u5c5e\u6027\u5982\u679c\u662f\u4e00\u4e2a\u5bf9\u8c61\uff0c\u662f\u5bf9\u539f\u6765\u5bf9\u8c61\u7684\u5f15\u7528\u3002"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u904d\u5386\u76f8\u5173 Object.keys\uff0cObject.values \uff0cObject.entries"}),"\n",(0,s.jsx)(n.p,{children:"\u4ee5\u4e0a\u90fd\u662f\u904d\u5386\u5bf9\u8c61\u81ea\u8eab\uff08\u4e0d\u542b\u7ee7\u627f\u7684\uff09\uff0c\u6240\u6709\u53ef\u904d\u5386\u5c5e\u6027\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'const obj = { foo: \'bar\', baz: 42 };\nObject.entries(obj);\n// [ ["foo", "bar"], ["baz", 42] ]\n'})}),"\n",(0,s.jsx)(n.p,{children:"Object.fromEntries()\u65b9\u6cd5\u662f Object.entries()\u7684\u9006\u64cd\u4f5c."}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Object.setPrototypeOf"}),"\n",(0,s.jsxs)(n.p,{children:["Object.setPrototypeOf \u65b9\u6cd5\u7684\u4f5c\u7528\u4e0e",(0,s.jsx)(n.strong,{children:"proto"}),"\u76f8\u540c\uff0c\u7528\u6765\u8bbe\u7f6e\u4e00\u4e2a\u5bf9\u8c61\u7684\u539f\u578b\u5bf9\u8c61\uff08prototype\uff09\uff0c\u8fd4\u56de\u53c2\u6570\u5bf9\u8c61\u672c\u8eab"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"Object.getPrototypeOf"}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"class",children:"Class"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"//es5\nfunction Point(x, y) {\n  this.x = x;\n  this.y = y;\n}\nPoint.prototype.toString = function () {\n  return '(' + this.x + ', ' + this.y + ')';\n};\nvar p = new Point(1, 2);\n\n//es6\nclass Point {\n  constructor(x, y) {\n    //\u6784\u9020\u65b9\u6cd5\n    this.x = x;\n    this.y = y;\n  }\n  toString() {\n    return '(' + this.x + ', ' + this.y + ')';\n  }\n}\nconst p = new Point(1, 2);\nPoint === Point.prototype.constructor; // true\np.constructor === Point.prototype.constructor; // true\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7c7b\u7684\u5e95\u5c42\u8fd8\u662f\u901a\u8fc7\u6784\u9020\u51fd\u6570\u5b9e\u73b0\u7684\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"//\u4e0a\u9762\u7684\u7c7b\u7b49\u540c\u4e8e\nPoint.prototype = {\n  constructor() {},\n  toString() {},\n};\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u7c7b\u7684\u5185\u90e8\u6240\u6709\u5b9a\u4e49\u7684\u65b9\u6cd5\uff0c\u90fd\u662f\u4e0d\u53ef\u679a\u4e3e\u7684\uff08non-enumerable\uff09,\u800c es5 \u7684\u6784\u9020\u51fd\u6570\u4e0a\u5b9a\u4e49\u7684\u65b9\u6cd5\u53ef\u679a\u4e3e\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"Object.keys(Point.prototype); //[]\n"})}),"\n",(0,s.jsx)(n.h3,{id:"getter-setter",children:"getter setter"}),"\n",(0,s.jsx)(n.p,{children:"\u5bf9\u67d0\u4e2a\u5c5e\u6027\u8bbe\u7f6e\u5b58\u503c\u51fd\u6570\u548c\u53d6\u503c\u51fd\u6570\uff0c\u62e6\u622a\u8be5\u5c5e\u6027\u7684\u5b58\u53d6\u884c\u4e3a\u3002"}),"\n",(0,s.jsx)(n.p,{children:"getter setter \u5fc5\u987b\u540c\u65f6\u51fa\u73b0\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"class MyClass {\n  constructor() {\n    // ...\n  }\n  get a() {\n    return 'getter';\n  }\n  set a(value) {\n    console.log('setter: ' + value);\n    //  this.a = a; // \u81ea\u8eab\u9012\u5f52\u8c03\u7528 \u274c\u274c\u274c \u4e0d\u80fd\u8fd9\u6837\u5199\uff01\n  }\n}\n\nlet inst = new MyClass();\n\ninst.a = 123;\n// setter: 123\n\ninst.a;\n// 'getter'\n"})}),"\n",(0,s.jsx)(n.h3,{id:"static",children:"static"}),"\n",(0,s.jsx)(n.p,{children:"\u9759\u6001\u65b9\u6cd5\uff0c\u4e0d\u80fd\u5728\u7c7b\u7684\u5b9e\u4f8b\u4e0a\u8c03\u7528\u9759\u6001\u65b9\u6cd5\uff0c\u800c\u5e94\u8be5\u901a\u8fc7\u7c7b\u672c\u8eab\u8c03\u7528\uff0c\u9759\u6001\u65b9\u6cd5\u4e0d\u4f1a\u88ab\u5b9e\u4f8b\u7ee7\u627f\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"class Foo {\n  static classMethod() {\n    return 'hello';\n  }\n}\n\nFoo.classMethod(); // 'hello'\n\nvar foo = new Foo();\nfoo.classMethod();\n// TypeError: foo.classMethod is not a function\n"})}),"\n",(0,s.jsx)(n.p,{children:"\u5982\u679c\u9759\u6001\u65b9\u6cd5\u5305\u542b this \u5173\u952e\u5b57\uff0c\u8fd9\u4e2a this \u6307\u7684\u662f\u7c7b\uff0c\u800c\u4e0d\u662f\u5b9e\u4f8b\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u7236\u7c7b\u7684\u9759\u6001\u65b9\u6cd5\uff0c\u53ef\u4ee5\u88ab\u5b50\u7c7b\u7ee7\u627f\u3002"}),"\n",(0,s.jsx)(n.h3,{id:"extends",children:"extends"}),"\n",(0,s.jsx)(n.p,{children:"super \u7528\u6765\u8bbf\u95ee\u548c\u8c03\u7528\u4e00\u4e2a\u5bf9\u8c61\u7684\u7236\u5bf9\u8c61\u4e0a\u7684\u51fd\u6570\u3002"}),"\n",(0,s.jsx)(n.p,{children:"super \u5fc5\u987b\u5728 this \u5173\u952e\u5b57\u4e4b\u524d\u4f7f\u7528\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"class Father {\n  constructor(x, y) {\n    this.x = x;\n    this.y = y;\n  }\n}\nclass Child extends Father {\n  // \u7ee7\u627f\u7236\u7c7b\u6240\u6709\u5c5e\u6027\u548c\u65b9\u6cd5\n  constructor(a) {\n    super(x, y);\n    this.a = a;\n  }\n}\nlet test = new Child();\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://juejin.cn/post/7021069095336411166",children:"ES6 \u65b0\u7279\u6027 Class \u7c7b\u7684\u5168\u65b9\u9762\u7406\u89e3 - \u6398\u91d1"})}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"proxy",children:"Proxy"}),"\n",(0,s.jsx)(n.p,{children:"\u4fee\u6539\u67d0\u4e9b\u64cd\u4f5c\u7684\u9ed8\u8ba4\u884c\u4e3a\uff0c\u5728\u8bed\u8a00\u5c42\u9762\u7684\u4fee\u6539\uff0c\u5c5e\u4e8e\u5143\u7f16\u7a0b\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u5728\u76ee\u6807\u5bf9\u8c61\u524d\u7684\u62e6\u622a\uff0c\u53ef\u4ee5\u5916\u754c\u8bbf\u95ee\u76ee\u6807\u5bf9\u8c61\u65f6\u8fdb\u884c\u8fc7\u6ee4\u6216\u6539\u5199\u3002\u652f\u6301 13 \u79cd\u62e6\u622a\u64cd\u4f5c\u3002"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"\u4ee3\u7406\u5c5e\u6027\u65f6\u8981\u8003\u8651\u8be5\u5c5e\u6027\u662f\u5426 configurable \uff0c\u662f\u5426 writable\u3002"}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Proxy.revocable() \u65b9\u6cd5\u8fd4\u56de\u4e00\u4e2a\u5bf9\u8c61\uff0c\u8be5\u5bf9\u8c61\u7684 proxy \u5c5e\u6027\u662f Proxy \u5b9e\u4f8b\uff0crevoke \u5c5e\u6027\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u53ef\u4ee5\u53d6\u6d88 Proxy \u5b9e\u4f8b\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"let target = {};\nlet handler = {};\n\nlet { proxy, revoke } = Proxy.revocable(target, handler);\n\nproxy.foo = 123;\nproxy.foo; // 123\n\nrevoke();\nproxy.foo; // TypeError: Cannot perform 'get' on a proxy that has been revoked\ntarget; //{foo: 123}\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"https://juejin.cn/post/6844904200971747335#heading-16",children:"ES6 \u5e38\u7528\u4f46\u88ab\u5ffd\u7565\u7684\u65b9\u6cd5\uff08\u7b2c\u56db\u5f39 Proxy \u548c Reflect\uff09 - \u6398\u91d1"})}),"\n",(0,s.jsx)(n.h2,{id:"reflect",children:"Reflect"}),"\n",(0,s.jsx)(n.p,{children:"Reflect \u5bf9\u8c61\u7684\u65b9\u6cd5\u4e0e Proxy \u5bf9\u8c61\u7684\u65b9\u6cd5\u4e00\u4e00\u5bf9\u5e94\uff0c\u53ea\u8981\u662f Proxy \u5bf9\u8c61\u7684\u65b9\u6cd5\uff0c\u5c31\u80fd\u5728 Reflect \u5bf9\u8c61\u4e0a\u627e\u5230\u5bf9\u5e94\u7684\u65b9\u6cd5\u3002\u6bcf\u4e00\u4e2a Proxy \u5bf9\u8c61\u7684\u62e6\u622a\u64cd\u4f5c\uff08get\u3001delete\u3001has...\uff09\uff0c\u5185\u90e8\u90fd\u8c03\u7528\u5bf9\u5e94\u7684 Reflect \u65b9\u6cd5\u3002"}),"\n",(0,s.jsx)(n.p,{children:"\u8ba9 Object \u64cd\u4f5c\u90fd\u53d8\u6210\u51fd\u6570\u884c\u4e3a\u3002"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u8001\u5199\u6cd5\n'assign' in Object; // true\n\n// \u65b0\u5199\u6cd5\nReflect.has(Object, 'assign'); // true\n"})}),"\n",(0,s.jsx)(n.h2,{id:"proxy-and-reflect",children:"Proxy and Reflect"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4ee3\u7406\u5bf9\u8c61\u7684\u5c5e\u6027"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const jay = {\n  name: 'jay',\n  phone: '188888888',\n  age: '30',\n};\n\nconst handler = {\n  get(target, key, receiver) {\n    console.log('hh', target, key, receiver);\n    if (key === 'phone') {\n      return '\u4ee3\u7406\u7684\u7535\u8bdd12222';\n    }\n    //return target[key] //\u6709\u53ef\u80fd\u8fd8\u662f\u88ab\u4ee3\u7406\u4e86\uff0c\u4ee3\u7406\u9677\u9631\n    return Reflect.get(target, key, receiver);\n  },\n};\nconst proxy = new Proxy(jay, handler);\n\nproxy.phone; //\u4ee3\u7406\u7684\u7535\u8bdd12222\nproxy.name; // \u2019jay\u2018\n"})}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"\u4f7f\u7528 Proxy Reflect \u5b9e\u73b0\u901a\u8fc7\u590d\u6570\u6570\u7ec4\u4e0b\u6807\u8bbf\u95ee\u6570\u7ec4\u5143\u7d20"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"let arr = [1, 2, 3, 4];\n\narr = new Proxy(arr, {\n  get: function (target, key, receiver) {\n    let idx = Number(key);\n    if (key < 0) {\n      return target[target.length + idx];\n    }\n    return Reflect.get(target, key, receiver);\n  },\n});\n\narr[-1];\n"})}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"https://es6.ruanyifeng.com/#docs/object-methods",children:"\u5bf9\u8c61\u7684\u65b0\u589e\u65b9\u6cd5 - ECMAScript 6 \u5165\u95e8"})}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},4744:(e,n,r)=>{r.d(n,{Z:()=>i,a:()=>c});var s=r(959);const t={},l=s.createContext(t);function c(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);