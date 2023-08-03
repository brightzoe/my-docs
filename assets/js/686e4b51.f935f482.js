"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[7966],{7363:(n,e,t)=>{t.d(e,{kt:()=>d});var a=t(959);function r(n,e,t){return e in n?Object.defineProperty(n,e,{value:t,enumerable:!0,configurable:!0,writable:!0}):n[e]=t,n}function s(n,e){var t=Object.keys(n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(n);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable}))),t.push.apply(t,a)}return t}function l(n){for(var e=1;e<arguments.length;e++){var t=null!=arguments[e]?arguments[e]:{};e%2?s(Object(t),!0).forEach((function(e){r(n,e,t[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))}))}return n}function o(n,e){if(null==n)return{};var t,a,r=function(n,e){if(null==n)return{};var t,a,r={},s=Object.keys(n);for(a=0;a<s.length;a++)t=s[a],e.indexOf(t)>=0||(r[t]=n[t]);return r}(n,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(n);for(a=0;a<s.length;a++)t=s[a],e.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(n,t)&&(r[t]=n[t])}return r}var i=a.createContext({}),c=function(n){var e=a.useContext(i),t=e;return n&&(t="function"==typeof n?n(e):l(l({},e),n)),t},u="mdxType",p={inlineCode:"code",wrapper:function(n){var e=n.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(n,e){var t=n.components,r=n.mdxType,s=n.originalType,i=n.parentName,u=o(n,["components","mdxType","originalType","parentName"]),m=c(t),d=r,g=m["".concat(i,".").concat(d)]||m[d]||p[d]||s;return t?a.createElement(g,l(l({ref:e},u),{},{components:t})):a.createElement(g,l({ref:e},u))}));function d(n,e){var t=arguments,r=e&&e.mdxType;if("string"==typeof n||r){var s=t.length,l=new Array(s);l[0]=m;var o={};for(var i in e)hasOwnProperty.call(e,i)&&(o[i]=e[i]);o.originalType=n,o[u]="string"==typeof n?n:r,l[1]=o;for(var c=2;c<s;c++)l[c]=t[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4904:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(1163),r=(t(959),t(7363));const s={tags:["typescript","ts"]},l="TS \u57fa\u7840",o={unversionedId:"fe-basic/typescript-basic",id:"fe-basic/typescript-basic",title:"TS \u57fa\u7840",description:"\u80cc\u666f",source:"@site/docs/fe-basic/typescript-basic.md",sourceDirName:"fe-basic",slug:"/fe-basic/typescript-basic",permalink:"/docs/fe-basic/typescript-basic",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/typescript-basic.md",tags:[{label:"typescript",permalink:"/docs/tags/typescript"},{label:"ts",permalink:"/docs/tags/ts"}],version:"current",lastUpdatedAt:1691028252,formattedLastUpdatedAt:"Aug 3, 2023",frontMatter:{tags:["typescript","ts"]},sidebar:"FE",previous:{title:"\u7f51\u7edc\u57fa\u7840",permalink:"/docs/fe-basic/network"},next:{title:"Web workers",permalink:"/docs/fe-basic/web-workers"}},i={},c=[{value:"\u80cc\u666f",id:"\u80cc\u666f",level:2},{value:"TS \u7279\u6027",id:"ts-\u7279\u6027",level:2},{value:"Flow",id:"flow",level:2},{value:"tsc \u547d\u4ee4",id:"tsc-\u547d\u4ee4",level:2},{value:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93",id:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93",level:2},{value:"\u7c7b\u578b\u58f0\u660e",id:"\u7c7b\u578b\u58f0\u660e",level:3},{value:"TS \u8bed\u6cd5",id:"ts-\u8bed\u6cd5",level:2},{value:"\u6570\u636e\u7c7b\u578b",id:"\u6570\u636e\u7c7b\u578b",level:3},{value:"\u51fd\u6570",id:"\u51fd\u6570",level:4},{value:"\u4f5c\u7528\u57df\u95ee\u9898",id:"\u4f5c\u7528\u57df\u95ee\u9898",level:3},{value:"\u7c7b\u578b\u6ce8\u89e3\u4e0e\u7c7b\u578b\u63a8\u65ad",id:"\u7c7b\u578b\u6ce8\u89e3\u4e0e\u7c7b\u578b\u63a8\u65ad",level:3},{value:"\u7c7b\u578b\u522b\u540d",id:"\u7c7b\u578b\u522b\u540d",level:3},{value:"\u7c7b\u578b\u65ad\u8a00",id:"\u7c7b\u578b\u65ad\u8a00",level:3},{value:"\u975e\u7a7a\u65ad\u8a00",id:"\u975e\u7a7a\u65ad\u8a00",level:3},{value:"\u7c7b\u578b\u4fdd\u62a4",id:"\u7c7b\u578b\u4fdd\u62a4",level:3},{value:"\u63a5\u53e3 interface",id:"\u63a5\u53e3-interface",level:3},{value:"\u7c7b",id:"\u7c7b",level:3},{value:"\u5355\u4f8b\u6a21\u5f0f",id:"\u5355\u4f8b\u6a21\u5f0f",level:4},{value:"\u7c7b\u4e0e\u63a5\u53e3",id:"\u7c7b\u4e0e\u63a5\u53e3",level:3},{value:"\u62bd\u8c61\u7c7b",id:"\u62bd\u8c61\u7c7b",level:3},{value:"\u6cdb\u578b",id:"\u6cdb\u578b",level:3},{value:"\u51fd\u6570\u4e2d\u7684\u6cdb\u578b",id:"\u51fd\u6570\u4e2d\u7684\u6cdb\u578b",level:4},{value:"\u7c7b\u4e2d\u7684\u6cdb\u578b",id:"\u7c7b\u4e2d\u7684\u6cdb\u578b",level:4},{value:"keyof",id:"keyof",level:4},{value:"\u88c5\u9970\u5668",id:"\u88c5\u9970\u5668",level:3},{value:"Reference",id:"reference",level:2}],u={toc:c},p="wrapper";function m(n){let{components:e,...t}=n;return(0,r.kt)(p,(0,a.Z)({},u,t,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"ts-\u57fa\u7840"},"TS \u57fa\u7840"),(0,r.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u5f3a\u7c7b\u578b vs \u5f31\u7c7b\u578b \uff1a"),(0,r.kt)("p",{parentName:"li"},"\u7c7b\u578b\u5b89\u5168\uff0c\u66f4\u5f3a\u7684\u7c7b\u578b\u7ea6\u675f\u3002 ",(0,r.kt)("strong",{parentName:"p"},"\u5f3a\u7c7b\u578b\u4e0d\u5141\u8bb8\u4efb\u610f\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362\uff0c\u5f31\u7c7b\u578b\u5141\u8bb8\u4efb\u610f\u7c7b\u578b\u8f6c\u6362\u3002"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u9759\u6001\u7c7b\u578b\u8bed\u8a00 vs \u52a8\u6001\u7c7b\u578b\u8bed\u8a00\uff1a"),(0,r.kt)("p",{parentName:"li"},"\u7c7b\u578b\u68c0\u67e5\u7684\u65f6\u673a\u4e0d\u540c\u3002\u9759\u6001\u7c7b\u578b\u5728\u7f16\u8bd1\u9636\u6bb5\u5c31\u786e\u5b9a\u6bcf\u4e2a\u53d8\u91cf\u7684\u7c7b\u578b\uff0c\u800c\u52a8\u6001\u7c7b\u578b\u5728\u8fd0\u884c\u9636\u6bb5\u624d\u786e\u5b9a\u6bcf\u4e2a\u53d8\u91cf\u7684\u7c7b\u578b\u3002"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/07/23/NdEFO2ryn5ReHic.png",alt:null,title:":size=50%"})))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"JS\uff1a\u52a8\u6001\u7c7b\u578b\u8bed\u8a00\uff0c\u5f31\u7c7b\u578b\u3002 \u88ab\u8bbe\u8ba1\u65f6\uff0c\u5c0f\u89c4\u6a21\u811a\u672c\uff0c\u4e14\u4e0d\u9700\u8981\u7f16\u8bd1\u3002TS \u4e5f\u662f\u5f31\u7c7b\u578b\uff0c\u4e0d\u4f1a\u4fee\u6539 JS \u8fd0\u884c\u65f6\u7684\u7279\u6027\u3002")),(0,r.kt)("p",null,"\u5f3a\u7c7b\u578b\uff1a\u9519\u8bef\u66f4\u65e9\u66b4\u9732\u3002\u4ee3\u7801\u66f4\u667a\u80fd\u3002\u91cd\u6784\u66f4\u7262\u9760\u3002"),(0,r.kt)("h2",{id:"ts-\u7279\u6027"},"TS \u7279\u6027"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u578b\u7cfb\u7edf\u662f\u6838\u5fc3\u7279\u6027\u3002\u7c7b\u578b\u5b89\u5168\uff0c\u5b9a\u4e49\u4e86\u7c7b\u578b\u540e\u7684\u65b9\u6cd5\u63d0\u793a\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u9759\u6001\u7c7b\u578b\u7684\u5f31\u7c7b\u578b\u3002")),(0,r.kt)("h2",{id:"flow"},"Flow"),(0,r.kt)("details",null,(0,r.kt)("summary",null,(0,r.kt)("b",null,"Flow (\u70b9\u51fb\u5c55\u5f00)")),(0,r.kt)("p",null,"JS \u7684\u7c7b\u578b\u68c0\u67e5,\u662f\u4e00\u4e2a\u5c0f\u5de5\u5177\uff0c\u5728\u9700\u8981\u7684\u65f6\u5019\u6dfb\u52a0\u7c7b\u578b,\u5b66\u4e60\u6210\u672c\u8f83\u5c0f\u3002"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u4f7f\u7528\u65b9\u5f0f"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"yarn add flow-bin")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"yarn flow init")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"yarn flow")),(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("p",{parentName:"blockquote"},"\u5de5\u5177\u63a8\u8350\uff1a vscode \u63d2\u4ef6 Flow Language Support"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u79fb\u9664\u7c7b\u578b\u6ce8\u89e3"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"yarn add flow-remove-types")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"yarn flow-remove-types . -d dist")," //\u8f6c\u6362\u5230\u67d0\u4e2a\u76ee\u5f55\u4e0b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"yarn add @babel/core @babel/cli @babel/preset-flow --dev")),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},'{"presets":["@babel/preset/preset-flow"]}')," //.babelrc"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"yarn babel src -d dist")))))),(0,r.kt)("p",null,"\u7c7b\u578b\u63a8\u65ad\uff1a\u5982\u679c\u672a\u6dfb\u52a0\u7c7b\u578b\u6ce8\u89e3\uff0c\u5219\u81ea\u52a8\u63a8\u65ad\u7c7b\u578b\u7684\u7279\u6027\uff0c\u4f46\u5c3d\u53ef\u80fd\u8fd8\u662f\u6dfb\u52a0\u7c7b\u578b\u6ce8\u89e3\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u601d\u8def\uff1a\u7f16\u5199\u7684\u4ee3\u7801\u548c\u5b9e\u9645\u8fd0\u884c\u7684\u4ee3\u7801\u5206\u5f00\uff0c\u6dfb\u52a0\u4e86\u7f16\u8bd1\u7684\u73af\u8282\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// @flow  \u52a0\u5728\u5f00\u5934\u4f7f\u7528flow\u68c0\u6d4b\u7c7b\u578b.\u4e5f\u53ef\u7528 /* @flow */\n\nfunction sum(a: number, b: number) {\n    //\u7c7b\u578b\u6ce8\u89e3\n    return a + b;\n}\n\nfunction foo(): void {\n    //\u8fd4\u56de\u503c\u7684\u6ce8\u89e3\n    //\u7c7b\u578b\u6ce8\u89e3\uff1a\u51fd\u6570\u8fd4\u56de\u503c\u4e3a\u7a7a\n    //no return\n}\n\n//\u6807\u8bc6\u6570\u7ec4\u7c7b\u578b\n\n//\u7531\u6570\u5b57\u7ec4\u6210\u7684\u6570\u7ec4\nconst arr1: Array<number> = [1, 2, 3];\nconst arr2: number[] = [1, 2, 3];\n\n//\u5143\u7ec4\uff1a\u56fa\u5b9a\u957f\u5ea6\uff0c\u56fa\u5b9a\u7c7b\u578b\u7684\u6570\u7ec4\nconst foo: [string, number] = ["foo", 1];\n\n//\u6807\u8bc6\u5bf9\u8c61\u7c7b\u578b\n\nconst obj1: { foo: string, bar: number } = { foo: "string", bar: 1 }; //\u81f3\u5c11\u6709foo,bar\u8fd9\u4e24\u4e2a\u6210\u5458\nconst obj2: { foo?: string, bar: number } = { foo: "string", bar: 1 }; //\u6dfb\u52a0?\u8868\u793a\u53ef\u9009\u7684\n\nconst obj3: { [string]: string } = {}; //k\u9650\u5236key\u548c\u503c\u7684\u7c7b\u578b,\u4e0d\u9650\u5236key\u7684\u4e2a\u6570\n\n//\u6807\u8bc6\u51fd\u6570\u7c7b\u578b\nfunction foo(callback: (string, number) => void) {\n    //\u56de\u8c03\u51fd\u6570\u7684\u53c2\u6570\u4ee5\u53ca\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u6ce8\u89e3\n    callback("string", 1);\n}\n\n//\u7279\u6b8a\u7c7b\u578b\nconst a: "foo" = "foo"; //\u5b57\u9762\u91cf\u7c7b\u578b\uff0c\u53ea\u80fd\u662f\'foo\'\nconst type: "success" | "warning" | "danger" = "success"; //\u8054\u5408\u7c7b\u578b\uff0c\u53ea\u80fd\u662f\u5176\u4e2d\u4e4b\u4e00\nconst b: string|number //string \u6216\u8005\u5b57\u7b26\u4e32\n\nconst StringOrNumber = string |number //\u7ed9\u7c7b\u578b\u5b9a\u4e49\u522b\u540d\uff0c\u53ef\u590d\u7528\u4e86\nconst b: StringOrNumber\n\nconst gender:?number = null  //\u52a0?\u5219\u53ef\u4ee5\u4f7f\u7528null/undefined\nconst gender: number | null | undefined //\u4e0e\u4e0a\u9762\u4e00\u81f4\n\n\n//mixed any \u6240\u6709\u7c7b\u578b\u90fd\u53ef\n//mixed :\u5f3a\u7c7b\u578b\uff0c\u4e0d\u80fd\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362\n//any \uff1a\u4e0d\u9650\u5236\uff0c\u53ef\u4ee5\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362\uff0c\u53ef\u4ee5\u517c\u5bb9\u8001\u4ee3\u7801\uff0c\u4e00\u822c\u4e0d\u8981\u4f7f\u7528\nfunction passMixed (value:mixed){\n  //...\n}\nfunction passMixed (value:any){\n  //...\n}\n')),(0,r.kt)("p",null,"\u66f4\u591a\u7c7b\u578b\u67e5\u8be2\uff1a ",(0,r.kt)("a",{parentName:"p",href:"https://www.saltycrane.com/cheat-sheets/flow-type/latest/"},"https://www.saltycrane.com/cheat-sheets/flow-type/latest/"))),(0,r.kt)("h2",{id:"tsc-\u547d\u4ee4"},"tsc \u547d\u4ee4"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},".ts"),"\u6587\u4ef6\u4e0d\u80fd\u76f4\u63a5\u5728 node/\u6d4f\u89c8\u5668\u73af\u5883\u4e2d\u6267\u884c\uff0c\u9700\u8981\u5148\u7f16\u8bd1\u4e3a js \u6587\u4ef6\u3002\u5982\u679c\u5e0c\u671b\u5728 node \u73af\u5883\u76f4\u63a5\u8fd0\u884c ts \uff0c\u53ef\u4ee5\u4f7f\u7528",(0,r.kt)("a",{parentName:"p",href:"https://www.npmjs.com/package/ts-node"},(0,r.kt)("inlineCode",{parentName:"a"},"ts-node")),"\u5305 \uff0c\u5168\u5c40\u5b89\u88c5\u540e\uff0c\u547d\u4ee4\u884c\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"ts-node hello.ts"),"\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tsc hello.ts")," \u4ee5\u4e0a\u547d\u4ee4\u53ef\u4ee5\u7f16\u8bd1 ",(0,r.kt)("inlineCode",{parentName:"p"},"hello.ts"),"\u6587\u4ef6\u5230 js,\u4f1a\u5728\u540c\u4e00\u4e2a\u76ee\u5f55\u4e0b\u751f\u6210\u540c\u540d js \u6587\u4ef6\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tsc xx -w ")," watch mode \uff0c\u5185\u5bb9\u6539\u53d8\u5219\u91cd\u65b0\u7f16\u8bd1\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yarn tsc --init")," \u751f\u6210",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"tsc")," \u76f4\u63a5\u8fd0\u884c\uff0c\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"tsconfig.json"),"\u914d\u7f6e\u6587\u4ef6\uff0c\u4f1a\u7f16\u8bd1\u5f53\u524d\u76ee\u5f55\u6240\u6709 ts \u6587\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js",metastring:"title='tsconfig.json'",title:"'tsconfig.json'"},'{\n  "include": [ //\u5305\u542b\u7684\u6587\u4ef6\n    "**/*.ts"\n  ],\n  "compilerOptions": {\n    "target": "es5",\n    "module": "commonjs",\n    "moduleResolution": "node",\n    "sourceMap": true,\n    "declaration": true,\n    "outDir": "./dist",\n    "rootDir": "./src",\n    "lib": [\n      "es2015",\n      "dom",\n      "es2016",\n      "es2017",\n      "esnext"\n    ],\n    "types": [\n      "node"\n    ]\n  }\n}\n')),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/tsconfig-json.html"},"TypeScript: Documentation - What is a tsconfig.json")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"yarn tsc --local zh-CN")," \u4e2d\u6587\u9519\u8bef\u6d88\u606f\u3002"),(0,r.kt)("p",null,"TypeScript \u53ea\u4f1a\u5728\u7f16\u8bd1\u65f6\u5bf9\u7c7b\u578b\u8fdb\u884c\u9759\u6001\u68c0\u67e5\uff0c\u5982\u679c\u53d1\u73b0\u6709\u9519\u8bef\uff0c\u7f16\u8bd1\u7684\u65f6\u5019\u5c31\u4f1a\u62a5\u9519\u3002\u800c\u5728\u8fd0\u884c\u65f6\uff0c\u4e0e\u666e\u901a\u7684 JavaScript \u6587\u4ef6\u4e00\u6837\uff0c\u4e0d\u4f1a\u5bf9\u7c7b\u578b\u8fdb\u884c\u68c0\u67e5\u3002"),(0,r.kt)("p",null,"TypeScript \u7f16\u8bd1\u7684\u65f6\u5019\u5373\u4f7f\u62a5\u9519\u4e86\uff0c\u8fd8\u662f\u4f1a\u751f\u6210\u7f16\u8bd1\u7ed3\u679c\uff0c\u6211\u4eec\u4ecd\u7136\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u7f16\u8bd1\u4e4b\u540e\u7684\u6587\u4ef6\u3002"),(0,r.kt)("p",null,"\u5982\u679c\u8981\u5728\u62a5\u9519\u7684\u65f6\u5019\u7ec8\u6b62 js \u6587\u4ef6\u7684\u751f\u6210\uff0c\u53ef\u4ee5\u5728 tsconfig.json \u4e2d\u914d\u7f6e noEmitOnError"),(0,r.kt)("h2",{id:"\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93"},"\u4f7f\u7528\u7b2c\u4e09\u65b9\u5e93"),(0,r.kt)("p",null,"\u5f88\u591a\u7b2c\u4e09\u65b9\u5e93\u539f\u751f\u652f\u6301 TS\uff0c\u5728\u4f7f\u7528\u65f6\u5c31\u80fd\u83b7\u5f97\u4ee3\u7801\u8865\u5168\u548c\u63d0\u793a\u3002"),(0,r.kt)("p",null,"\u800c\u6709\u4e9b\u7b2c\u4e09\u65b9\u5e93\u539f\u751f\u4e0d\u652f\u6301 TS \uff0c\u53ef\u4ee5\u5b89\u88c5\u793e\u533a\u7ef4\u62a4\u7684\u7c7b\u578b\u58f0\u660e\u5e93\u6765\u83b7\u5f97\u4ee3\u7801\u8865\u5168\u7684\u80fd\u529b\u3002\u6bd4\u5982\u4f7f\u7528",(0,r.kt)("inlineCode",{parentName:"p"},"npm install --save-dev @types/react"),"\u5b89\u88c5 React \u7684\u7c7b\u578b\u58f0\u660e\u5e93\u3002 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/DefinitelyTyped/DefinitelyTyped"},"DefinitelyTyped/DefinitelyTyped: The repository for high quality TypeScript type definitions.")),(0,r.kt)("h3",{id:"\u7c7b\u578b\u58f0\u660e"},"\u7c7b\u578b\u58f0\u660e"),(0,r.kt)("p",null,"\u6ca1\u6709\u7c7b\u578b\u58f0\u660e\u6587\u4ef6\u7684\u5e93\uff0c\u6216\u8005\u81ea\u5df1\u5199\u7c7b\u578b\u58f0\u660e\u5bf9\u5168\u5c40\u6587\u4ef6\u8fdb\u884c\u7c7b\u578b\u5b9a\u4e49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="xx.d.ts"',title:'"xx.d.ts"'},"declare function replace(input: string): string; //\u5982\u679c\u6ca1\u6709\u7c7b\u578b\u58f0\u660e\uff0c\u81ea\u5df1\u58f0\u660e\u4e00\u4e0b\u7c7b\u578b\u3002\ndeclare function replace(input: number): number; //\u53ef\u4ee5\u76f8\u540c\u7684\u51fd\u6570\u540d\u5b57\uff0c\u53c2\u6570\u4e0d\u540c\uff0c\u51fd\u6570\u91cd\u8f7d\n\n// \u547d\u540d\u7a7a\u95f4\u7684\u5d4c\u5957\ndeclare namespace $$ {\n  namespace hh {\n    function getName(): string;\n  }\n  namespace fn {\n    class init {}\n  }\n}\n\n//\u58f0\u660e\u6a21\u5757\ndeclare module 'xx' {\n  export function getName(): string;\n}\n")),(0,r.kt)("p",null,"\u6709\u7c7b\u578b\u58f0\u660e\u7684\u5e93\uff0c\u5982\u679c\u58f0\u660e\u7f3a\u5931\u5185\u5bb9\u4e0d\u7b26\u5408\u5f53\u524d\u4e1a\u52a1\u573a\u666f\uff0c\u53ef\u4ee5\u6269\u5c55\u7c7b\u578b\u58f0\u660e\u6587\u4ef6\uff0c\u5b9e\u73b0\u7c7b\u578b\u878d\u5408\u7684\u7279\u6027\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts",metastring:"title='custom.d.ts'",title:"'custom.d.ts'"},"declare module Express {\n  export interface Request {\n    user: {\n      name: string;\n    };\n  }\n}\n")),(0,r.kt)("h2",{id:"ts-\u8bed\u6cd5"},"TS \u8bed\u6cd5"),(0,r.kt)("h3",{id:"\u6570\u636e\u7c7b\u578b"},"\u6570\u636e\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const a: string = 'foo';\nconst b: number = 100; //NaN,Infinity\nconst c: boolean = true;\nconst d: string = null; //\u4e25\u683c\u6a21\u578b\u4e0d\u884c\nconst e: void = undefined; //null/undefined\nconst f: null = null;\nconst g: undefined = undefined;\nconst h: symbol = Symbol();\nlet myFavoriteNumber: any = 'seven'; //\u4efb\u610f\u7c7b\u578b\u7684\u503c\u5e76\u4e14\u53ef\u4ee5\u6539\u53d8\uff0c\u4e00\u822c\u4e0d\u8981\u4f7f\u7528\uff0c\u517c\u5bb9\u8001\u4ee3\u7801\u4f7f\u7528\u3002\nmyFavoriteNumber = 7;\n\n//Object\nconst foo: object = function () {}; // \u4e5f\u53ef\u4ee5\u662f[] // {}\nconst obj: { foo: number; bar: string } = { foo: 123, bar: 'foo' }; //\u5b9a\u4e49\u666e\u901a\u7684\u5bf9\u8c61,key\u8981\u5b8c\u5168\u4e00\u81f4,\u4e0d\u80fd\u591a\u4e5f\u4e0d\u80fd\u5c11\n\n//Array\nconst arr1: Array<number> = [1, 2];\nconst arr2: number[] = [1, 2];\nconst arr3: (string | number)[] = [1, '2'];\n\n//Tuple \u5143\u7ec4\u7c7b\u578b\uff1a\u56fa\u5b9a\u957f\u5ea6\uff0c\u56fa\u5b9a\u7c7b\u578b\u7684\u6570\u7ec4\n//\u5e94\u7528\uff1a React\u7684useState, es2017\u7684Object.entries({foo:123})\nconst tuple: [number, string] = [18, 'foo'];\nconst age = tuple[0];\nconst [age, name] = tuple;\n\n//Enum \u679a\u4e3e\u7c7b\u578b\uff1a\u53ea\u5b58\u5728\u51e0\u4e2a\u56fa\u5b9a\u7684\u503c\n// const postStatus ={Draft:0,Unpublished:1,Published:2} //js\u6a21\u62df\u679a\u4e3e\u7c7b\u578b\nenum postStatus { //\u679a\u4e3e\u7c7b\u578b\n  Draft = 0, //\u4e0d\u6307\u5b9a\u503c\u7684\u8bdd\uff0c\u4ece0\u5f00\u59cb\u7d2f\u52a0\u3002\u53ea\u6307\u5b9a\u7b2c\u4e00\u4e2a\u5219\u4ece\u6307\u5b9a\u7684\u503c\u5f00\u59cb\u7d2f\u52a0\u3002\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5b57\u7b26\u4e32\u3002\n  Unpublished = 1,\n  Published = 5,\n}\nconsole.log(postStatus[5]); //\u4e5f\u53ef\u4ee5\u901a\u8fc7 value \u62ff\u5230 key\nconst post = {\n  status: postStatus.Draft,\n};\n//\u679a\u4e3e\u7c7b\u578b\u4f1a\u5165\u4fb5\u5230\u7f16\u8bd1\u540e\u7684\u4ee3\u7801\u3002\n//\u4f1a\u88ab\u7f16\u8bd1\u6210\u53cc\u5411\u952e\u503c\u5bf9\u7684\u5bf9\u8c61\uff1a\u53ef\u4ee5\u901a\u8fc7key\u8bfb\u53d6\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7value\u8bfb\u53d6\u3002\n\n//\u5e38\u91cf\u679a\u4e3e\n//\u5982\u679c\u4e0d\u901a\u8fc7\u7d22\u5f15\u503c\u7684\u65b9\u5f0f\u8bfb\u53d6\u679a\u4e3e\u7c7b\u578b\uff0c\u63a8\u8350\u4f7f\u7528\u5e38\u91cf\u679a\u4e3e\u3002\u7f16\u8bd1\u540e\u679a\u4e3e\u7c7b\u578b\u4f1a\u88ab\u79fb\u9664\uff0c\u4f7f\u7528\u7684\u679a\u4e3e\u503c\u4f1a\u88ab\u66ff\u6362\u6389\uff0c\u4ee5\u6ce8\u91ca\u7684\u5f62\u5f0f\u6807\u6ce8\u3002\nconst enum postStatus {}\n//...\n")),(0,r.kt)("h4",{id:"\u51fd\u6570"},"\u51fd\u6570"),(0,r.kt)("p",null,"\u51fd\u6570\u7684\u6570\u636e\u7c7b\u578b\u5b9a\u4e49\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"//\u51fd\u6570\u58f0\u660e\u5f0f\nfunction func1(a: string, b?: number): string {\n  //\u6dfb\u52a0\u53c2\u6570\u548c\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u6ce8\u89e3\n  //\u53c2\u6570\u4e2a\u6570\u4e5f\u5fc5\u987b\u4e00\u81f4\uff0c\u4e0d\u80fd\u591a\u6216\u5c11\u3002\n  //\u53ef\u9009\u53c2\u6570\uff1a\u6dfb\u52a0\u95ee\u53f7\u6216\u8005\u4f7f\u7528\u53c2\u6570\u9ed8\u8ba4\u503c\uff0c\u5fc5\u987b\u5728\u53c2\u6570\u7684\u6700\u540e\u4e00\u4f4d\n  //\u4e0d\u9650\u5236\u53c2\u6570\u4e2a\u6570 \uff1a...rest:number\n  return 'foo';\n}\n\n//\u6709\u4ec0\u4e48\u597d\u5904\uff1f\nfunction sum(...args: number[]) {\n  //\u786e\u4fdd\u4f20\u8fc7\u6765\u7684\u53c2\u6570\u90fd\u662f\u6570\u5b57\uff0c\u4e0d\u7528\u5355\u72ec\u8fdb\u884c\u7c7b\u578b\u5224\u65ad\u3002\u53ef\u9760\u3002\n  return args.reduce((prev, curr) => prev + curr, 0);\n}\n\nconst func = (str: string): number => {\n  return parseInt(str);\n};\n\nconst func: (str: string) => number = (str) => {\n  return parseInt(str);\n};\n")),(0,r.kt)("p",null,"\u51fd\u6570\u91cd\u8f7d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"")),(0,r.kt)("h3",{id:"\u4f5c\u7528\u57df\u95ee\u9898"},"\u4f5c\u7528\u57df\u95ee\u9898"),(0,r.kt)("p",null,"\u5982\u679c\u4ec0\u4e48\u4e5f\u4e0d\u505a\uff0c\u5728\u4e24\u4e2a\u6587\u4ef6\u58f0\u660e\u540c\u540d\u7684\u53d8\u91cf\uff0c\u5219\u4f1a\u4ea7\u751f\u51b2\u7a81\uff0c\u9700\u8981\u58f0\u660e\u4e3a\u6a21\u5757\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"//\u4e00\u4e2a\u6587\u4ef6\u52a0\u4e0aexport\nexport {}; //\u4ee5\u6a21\u5757\u5f62\u5f0f\u5bfc\u51fa\uff0c\u4e00\u822c\u4e0d\u8fd9\u6837\u505a\uff0c\u56e0\u4e3a\u4e00\u822c\u6bcf\u4e2a\u6587\u4ef6\uff08\u7ec4\u4ef6\uff09\u4f1a\u4ee5\u6a21\u5757\u5f62\u5f0f\u4f7f\u7528\nconst a = 123;\n")),(0,r.kt)("h3",{id:"\u7c7b\u578b\u6ce8\u89e3\u4e0e\u7c7b\u578b\u63a8\u65ad"},"\u7c7b\u578b\u6ce8\u89e3\u4e0e\u7c7b\u578b\u63a8\u65ad"),(0,r.kt)("p",null,"type annotation \u7c7b\u578b\u6ce8\u89e3\uff0c\u544a\u8bc9 ts \u662f\u4ec0\u4e48\u7c7b\u578b"),(0,r.kt)("p",null,"type inference \u7c7b\u578b\u63a8\u65ad\uff0cts \u4f1a\u81ea\u52a8\u63a8\u65ad\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"let count: number; //\u7c7b\u578b\u6ce8\u89e3\ncount = 123;\n\nlet age = 18;\nage = 'foo'; //\u62a5\u9519,\u88ab\u63a8\u65ad\u4e3anumber\n\nlet foo; //\u88ab\u63a8\u65ad\u4e3aany\nfoo = 100;\nfoo = 'foo';\n")),(0,r.kt)("h3",{id:"\u7c7b\u578b\u522b\u540d"},"\u7c7b\u578b\u522b\u540d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"//\u987e\u540d\u601d\u4e49\u5c31\u662f\u81ea\u5b9a\u4e49\u4e00\u4e2a\u7c7b\u578b\uff0c\u4e00\u822c\u7528\u4e8e\u8054\u5408\u7c7b\u578b\uff0c\u7ed9\u4f60\u60f3\u8981\u7684\u7c7b\u578b\u53d6\u4e00\u4e2a\u522b\u540d\ntype person = 'man' | 'woman';\ntype TUser = string | number;\ntype User = {\n  number: string;\n  age: number;\n};\n")),(0,r.kt)("h3",{id:"\u7c7b\u578b\u65ad\u8a00"},"\u7c7b\u578b\u65ad\u8a00"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const num = [11, 12, 14];\nconst res = num.find((i) => i > 0); //\u88ab\u63a8\u65ad\u4e3anumber/undefined\n\n//\u53ef\u4ee5\u65ad\u8a00res\u4e00\u5b9a\u662fnumber\u3002\nconst num1 = res as number;\nconst num2 = <number>res; //JSX\u4e0d\u80fd\u4f7f\u7528\uff0c\u4f1a\u4ea7\u751f\u51b2\u7a81\n//\u65ad\u8a00\u4e0e\u8f6c\u6362\u7684\u533a\u522b\uff1a\u65ad\u8a00\u662f\u5728\u7f16\u8bd1\u65f6\u7684\u6982\u5ff5\uff0c\u8f6c\u6362\u662f\u5728\u8fd0\u884c\u65f6\u7684\u6982\u5ff5\u3002\u5728\u7f16\u8bd1\u540e\uff0c\u65ad\u8a00\u5c31\u4e0d\u5b58\u5728\u4e86\u3002\n")),(0,r.kt)("h3",{id:"\u975e\u7a7a\u65ad\u8a00"},"\u975e\u7a7a\u65ad\u8a00"),(0,r.kt)("p",null,"t tells the TypeScript compiler to assume that the value before the operator is not null or undefined\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"dragObj!;\n")),(0,r.kt)("h3",{id:"\u7c7b\u578b\u4fdd\u62a4"},"\u7c7b\u578b\u4fdd\u62a4"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Bird {\n  fly: boolean;\n  sing: () => {};\n}\ninterface Fish {\n  fly: boolean;\n  swim: () => {};\n}\n\nfunction train(animal: Bird | Fish) {\n  if (animal.fly) {\n    (animal as Bird).sing(); // \u901a\u8fc7\u7c7b\u578b\u65ad\u8a00\u5b9e\u73b0\u7c7b\u578b\u4fdd\u62a4\n  } else {\n    (animal as Fish).swim();\n  }\n}\n\nfunction train(animal: Bird | Fish) {\n  if ('sing' in animal) {\n    //in \u65b9\u6cd5\u5b9e\u73b0\u7c7b\u578b\u4fdd\u62a4 animal \u6709 sing \u65b9\u6cd5\n    animal.sing();\n  } else {\n    animal.swim();\n  }\n}\n\nclass NumberObj {\n  count: number = 1;\n}\nfunction add(first: object | NumberObj, second: object | NumberObj) {\n  // class \u7684 instanceof \u8bed\u6cd5\u5b9e\u73b0\u7c7b\u578b\u4fdd\u62a4\n  if (first instanceof NumberObj && second instanceof NumberObj) {\n    return { count: first.count + second.count };\n  }\n}\n")),(0,r.kt)("h3",{id:"\u63a5\u53e3-interface"},"\u63a5\u53e3 interface"),(0,r.kt)("p",null,"\u7ea6\u5b9a\u4e00\u4e2a\u5bf9\u8c61\u7684\u7ed3\u6784\u3002"),(0,r.kt)("p",null,"\u4e3a\u6709\u7ed3\u6784\u7684\u6570\u636e\u8fdb\u884c\u7c7b\u578b\u7ea6\u675f\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u7f16\u8bd1\u540e\u5c31\u6ca1\u6709\u4e86"),"\u3002\u5728\u8fd0\u884c\u9636\u6bb5\u6ca1\u6709\u610f\u4e49\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Person {\n  name: string;\n  age?: number;\n}\n\nfunction getName(person: Person): string {\n  return person.name;\n}\nconst lily = { name: 'lily', gender: 'female' };\nconsole.log(getName(lily)); //\u4e0d\u4f1a\u62a5\u9519\uff0c\u6709\u591a\u7684\u5c5e\u6027\u4e5f\u53ef\u4ee5\uff0c\u5f31\u6821\u9a8c\n\nconsole.log(getName({ name: 'hh', gender: 'female' })); //\u4f1a\u62a5\u9519\uff0c\u5bf9\u8c61\u5b57\u9762\u91cf\u662f\u5f3a\u6821\u9a8c\uff0c\u5fc5\u987b\u5b8c\u5168\u7b26\u5408\n\ninterface Post {\n  title: string;\n  content: string;\n  subtitle?: string; //\u53ef\u9009\u6210\u5458\n  readonly summary: string; //\u53ea\u8bfb\u6210\u5458\uff0c\u521d\u59cb\u5316\u540e\u4fbf\u4e0d\u53ef\u4fee\u6539\n  sayHi(): string; //\u63a5\u53e3\u91cc\u9762\u53ef\u4ee5\u5b9a\u4e49\u51fd\u6570\n}\n\n//\u52a8\u6001\u63a5\u53e3\ninterface Cache {\n  // title: string;\n  // content: string;\n  [key: string]: any; //\u52a8\u6001\u5c5e\u6027\n}\n\ninterface Teacher extends Person {\n  //\u7ee7\u627f\u63a5\u53e3\n  teach(): string;\n}\n\ninterface SayHi {\n  //\u53ef\u4ee5\u5b9a\u4e49\u51fd\u6570\n  (word: string): string;\n}\n\nconst funcSay: SayHi = (word) => {\n  return word;\n};\n")),(0,r.kt)("h3",{id:"\u7c7b"},"\u7c7b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Person {\n  // public name: string='init';//\u5728\u8fd9\u91cc\u6216\u6784\u9020\u51fd\u6570\u4e2d\u58f0\u660e\u521d\u59cb\u503c\u3001\u7c7b\u578b\u3001\u8bbf\u95ee\u4fee\u9970\u7b26\n  // protected readonly gender: boolean;\n  // public/private/protected \u8bbf\u95ee\u4fee\u9970\u7b26,\u63a7\u5236\u53ef\u8bbf\u95ee\u7ea7\u522b\uff0c\u4e0d\u5199\u9ed8\u8ba4\u4e3a public\n  // private \u79c1\u6709\u5c5e\u6027,\u53ea\u80fd\u5728\u7c7b\u5185\u90e8\u4f7f\u7528\n  // protected \u53ea\u80fd\u5728\u7c7b\u5185\u90e8/\u7ee7\u627f\u7684\u5b50\u7c7b\u4e2d\u8bbf\u95ee\n  // readonly \u4e0d\u80fd\u518d\u4fee\u6539\n\n  constructor(public name: string = 'init', private age: number) {\n    this.name = name;\n    this.age = age;\n  }\n  getName(): string {\n    return this.name;\n  }\n  sayHi(msg: string) {\n    console.log(`I am ${this.name},${msg}`);\n  }\n}\nconst person = new Person('lily', 18);\n// person.age = 20 //\xd7\xd7\xd7\u5916\u90e8\u4e0d\u80fd\u8bbf\u95ee\n\nclass Teacher extends Person {\n  constructor(public gender: string) {\n    super('tea', 25); // \u8c03\u7528\u7236\u7c7b\u6784\u9020\u51fd\u6570\u3002\u5b50\u7c7b\u6709 constructor \u5219\u5fc5\u987b\u8c03\u7528super\n  }\n\n  sayHi(msg: string) {\n    //\u91cd\u5199\u7236\u7c7b\u65b9\u6cd5\n    return super.getName() + msg; // \u8c03\u7528\u7236\u7c7b\u65b9\u6cd5\n  }\n}\nconst teacher = new Teacher('male');\nconsole.log(teacher.name, teacher.gender);\n")),(0,r.kt)("h4",{id:"\u5355\u4f8b\u6a21\u5f0f"},"\u5355\u4f8b\u6a21\u5f0f"),(0,r.kt)("p",null,"\u5f53\u524d\u7c7b\u53ea\u80fd\u6709\u4e00\u4e2a\u7c7b\u7684\u5b9e\u4f8b\u3002"),(0,r.kt)("p",null,"\u5229\u7528\u9759\u6001\u5c5e\u6027\u4ee5\u53ca private \u4fee\u9970\u6784\u9020\u51fd\u6570\u5b9e\u73b0\u5355\u4f8b\u6a21\u5f0f\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Demo {\n  private static instance: Demo; // \u7f13\u5b58\u521b\u5efa\u7684\u5b9e\u4f8b\n\n  //\u6784\u9020\u51fd\u6570\u88abprivate\u4e86\uff0c\u4e0d\u80fd\u5728\u5916\u90e8\u901a\u8fc7 new \u5b9e\u4f8b\u5316\u8fd9\u4e2a\u7c7b\u4e86\uff0c\u548b\u529e\u634f\n  //\u5728\u7c7b\u578b\u5185\u90e8\u4f7f\u7528\u9759\u6001\u65b9\u6cd5\u521b\u5efa\u5b9e\u4f8b\uff01\n  private constructor(public name: string) {}\n\n  static create(name: string) {\n    if (!this.instance) {\n      this.instance = new Demo(name);\n    }\n    return this.instance;\n  }\n}\n\nconst demo1 = Demo.create('danny');\nconst demo2 = Demo.create('jan');\nconsole.log(demo1.name, demo2.name, demo1 === demo2);\n")),(0,r.kt)("h3",{id:"\u7c7b\u4e0e\u63a5\u53e3"},"\u7c7b\u4e0e\u63a5\u53e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface EatAndRun {\n  //\u90fd\u6709\u8fd9\u4e9b\u80fd\u529b\n  eat(food: string): void;\n  run(distance: number): void;\n}\n\n//\u7c7b\u662f\u8fd9\u4e2a\u63a5\u53e3\u7684\u5b9e\u73b0\nclass Person implements EatAndRun {\n  eat(food: string): void {\n    console.log(`\u4f18\u96c5\u5730\u5403\u996d\u996d\uff1a${food}`);\n  }\n  run(distance: number): void {\n    console.log(`\u8dd1\u6b65\uff1a${distance}`);\n  }\n}\n\nclass Animal implements EatAndRun {\n  eat(food: string): void {\n    console.log(`\u547c\u565c\u547c\u565c\u4e86\uff1a${food}`);\n  }\n  run(distance: number): void {\n    console.log(`\u722c\u4e86\uff1a${distance}`);\n  }\n}\n\n//\u5728\u4e00\u4e9b\u8bed\u8a00\u4e2d\uff0c\u63a8\u5d07\u4e00\u4e2a\u63a5\u53e3\u5b9e\u73b0\u4e00\u4e2a\u80fd\u529b\u3002\u4e00\u4e2a\u7c7b\u53ef\u4ee5\u4f7f\u7528\u591a\u4e2a\u63a5\u53e3\nclass AutoMan implements Eat, Run {\n  //...\n}\n")),(0,r.kt)("h3",{id:"\u62bd\u8c61\u7c7b"},"\u62bd\u8c61\u7c7b"),(0,r.kt)("p",null,"\u62bd\u8c61\u7c7b\u4e0d\u5141\u8bb8\u88ab\u5b9e\u4f8b\u5316\u3002"),(0,r.kt)("p",null,"\u62bd\u8c61\u7c7b\u4e2d\u7684\u62bd\u8c61\u65b9\u6cd5\u5fc5\u987b\u88ab\u5b50\u7c7b\u5b9e\u73b0\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"//\u52a8\u7269\u662f\u732b\u732b\uff0c\u72d7\u72d7\u7684\u62bd\u8c61\nabstract class Animal {\n  //\u62bd\u8c61\u7c7b\u53ea\u80fd\u88ab\u7ee7\u627f\uff0c\u4e0d\u80fd\u5b9e\u4f8b\u5316\n  eat(food: string): void {\n    console.log(`\u547c\u565c\u547c\u565c\u4e86\uff1a${food}`);\n  }\n  abstract run(distance: number): void; //\u62bd\u8c61\u65b9\u6cd5\uff0c\u4e0d\u9700\u8981\u5177\u4f53\u5b9e\u73b0\n}\n\nclass Dog extends Animal {\n  run(distance: number): void {\n    //\u5fc5\u987b\u5728\u5b50\u7c7b\u5b9e\u73b0\u62bd\u8c61\u65b9\u6cd5\n    console.log('...');\n  }\n}\n")),(0,r.kt)("h3",{id:"\u6cdb\u578b"},"\u6cdb\u578b"),(0,r.kt)("p",null,"generic type"),(0,r.kt)("p",null,"\u5728\u5b9a\u4e49\u51fd\u6570\u63a5\u53e3\u6216\u7c7b\u7684\u65f6\u5019\uff0c\u4e0d\u5b9a\u4e49\u5177\u4f53\u7684\u7c7b\u578b\u3002\u5728\u4f7f\u7528\u7684\u65f6\u5019\u518d\u53bb\u6307\u5b9a\u5177\u4f53\u7c7b\u578b\u3002"),(0,r.kt)("p",null,"\u76ee\u7684\uff1a\u66f4\u5927\u7a0b\u5ea6\u5730\u590d\u7528\u4ee3\u7801\uff0c\u63d0\u5347\u4ee3\u7801\u7075\u6d3b\u6027\u3002"),(0,r.kt)("h4",{id:"\u51fd\u6570\u4e2d\u7684\u6cdb\u578b"},"\u51fd\u6570\u4e2d\u7684\u6cdb\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function createArray<T>(length: number, value: T): T[] {\n  //T \u6cdb\u578b\uff0c\u4e0d\u660e\u786e\u7c7b\u578b\uff0c\u628a\u7c7b\u578b\u53d8\u6210\u4e00\u4e2a\u53c2\u6570\uff0c\u5728\u8c03\u7528\u7684\u65f6\u5019\u4f20\u9012\n  const arr = Array<T>(length).fill(value);\n  return arr;\n}\nconst res = createArray<string>(3, 'foo'); //\u8c03\u7528\u7684\u65f6\u5019\u660e\u786e\u7c7b\u578b\nconst res = createArray<number>(3, 1);\nconsole.log(res);\n\n//\u591a\u4e2a\u6cdb\u578b\u53c2\u6570\nfunction join<T, P>(first: T, second: P) {\n  return `${first}${second}`;\n}\nconsole.log(join<number, string>(1, 'gg'));\n\n//\u4f7f\u7528\u6cdb\u578b\u4f5c\u4e3a\u51fd\u6570\u7684\u7c7b\u578b\u6ce8\u89e3\nconst func: <T>(params: T) => T = <T>(params: T) => {\n  return params;\n};\nconsole.log(func(1));\n")),(0,r.kt)("h4",{id:"\u7c7b\u4e2d\u7684\u6cdb\u578b"},"\u7c7b\u4e2d\u7684\u6cdb\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class DataManager<T> {\n  constructor(private data: T[]) {}\n  getData(idx: number): T {\n    return this.data[idx];\n  }\n}\nconst data = new DataManager(['a', 'b', 'c']);\nconsole.log(data.getData(0));\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Item {\n  name: string;\n}\nclass DataManager<T extends Item> {\n  //\u6cdb\u578b\u7ee7\u627f\u63a5\u53e3\n  constructor(private data: T[]) {}\n  getData(idx: number): string {\n    return this.data[idx].name;\n  }\n}\nconst data = new DataManager([{ name: '1' }, { name: 'hh' }]);\nconsole.log(data.getData(1));\n")),(0,r.kt)("h4",{id:"keyof"},"keyof"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface Person {\n  name: string;\n  age: number;\n  gender: string;\n}\nclass Teacher {\n  constructor(private info: Person) {}\n  getInfo<T extends keyof Person>(key: T): Person[T] {\n    // \u63a5\u6536Person \u4e2d\u7684 key,\u8fd4\u56de Person \u7684 value\n    return this.info[key];\n  }\n}\nconst teacher = new Teacher({\n  name: 'dell',\n  age: 18,\n  gender: 'male',\n});\n\nconst test = teacher.getInfo('gender');\nconsole.log(test);\n")),(0,r.kt)("h3",{id:"\u88c5\u9970\u5668"},"\u88c5\u9970\u5668"),(0,r.kt)("p",null,"\u7c7b\u7684\u88c5\u9970\u5668\uff1a\u5bf9\u7c7b\u7684\u4fee\u9970\uff0c\u5728\u7c7b\u521b\u5efa\u65f6\u6267\u884c\u3002\u63a5\u6536\u7c7b\u7684 constructor"),(0,r.kt)("p",null,"\u7b80\u5355\u88c5\u9970\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u591a\u4e2a\u88c5\u9970\u5668\u6267\u884c\u987a\u5e8f\uff1a\u4ece\u4e0b\u5230\u4e0a\uff0c\u4ece\u53f3\u5230\u5de6\nfunction testDecoractor(constructor: any) {\n  console.log('testDecoractor');\n  // \u53ef\u4ee5\u62ff\u5230\u88c5\u9970\u7684\u7c7b\u7684constructor\n  constructor.prototype.getName = function () {\n    console.log('get test');\n  };\n}\n\nfunction testDecoractor1(constructor: any) {\n  console.log('testDecoractor1');\n}\n\n@testDecoractor\n@testDecoractor1\nclass Test {}\n\nconst test1 = new Test();\n(test1 as any).getName();\n")),(0,r.kt)("p",null,"\u590d\u6742\u6807\u51c6\u88c5\u9970\u5668"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"function testDecoractor() {\n  // \u5de5\u5382\u6a21\u5f0f\uff0c\u53ef\u4ee5\u63a5\u4e0d\u540c\u53c2\u6570\uff0c\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u7c7b\n  return function <T extends new (...args: any[]) => any>(constructor: T) {\n    console.log('testDecoractor');\n    return class extends constructor {\n      name = 'zzz';\n      getName() {\n        console.log(this.name);\n        return this.name;\n      }\n    };\n  };\n}\n\nconst Test = testDecoractor()(\n  class {\n    constructor(public name: string) {}\n  },\n);\n\nconst test1 = new Test('hh');\ntest1.getName();\n")),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://ts.xcatliu.com/"},"ts \u5165\u95e8\u6559\u7a0b")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://flow.org/en/docs/usage/"},"flow")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://fettblog.eu/typescript-react/hooks/#useref"},"TypeScript and React: Hooks"))))}m.isMDXComponent=!0}}]);