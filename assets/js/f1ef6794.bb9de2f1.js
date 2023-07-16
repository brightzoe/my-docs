"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[3388],{7363:(e,t,n)=>{n.d(t,{kt:()=>d});var a=n(959);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||l;return n?a.createElement(f,i(i({ref:t},m),{},{components:n})):a.createElement(f,i({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},4749:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(1163),r=(n(959),n(7363));const l={},i="\u4e00\u4e9b\u7b80\u5355\u7684\u52a8\u753b\u6548\u679c",o={unversionedId:"fe-basic/css/simple-anime",id:"fe-basic/css/simple-anime",title:"\u4e00\u4e9b\u7b80\u5355\u7684\u52a8\u753b\u6548\u679c",description:"\u5305\u62ec animation\uff0ctranslation\uff0ctransform \u7b49\u7684\u57fa\u7840\u4f7f\u7528\u3002",source:"@site/docs/fe-basic/css/simple-anime.md",sourceDirName:"fe-basic/css",slug:"/fe-basic/css/simple-anime",permalink:"/docs/fe-basic/css/simple-anime",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/css/simple-anime.md",tags:[],version:"current",lastUpdatedAt:1689478844,formattedLastUpdatedAt:"Jul 16, 2023",frontMatter:{},sidebar:"FE",previous:{title:"\u9879\u76ee\u4e2d\u7684 CSS \u65b9\u6848",permalink:"/docs/fe-basic/css/scheme-of-css"},next:{title:"zoom \u548c transform\uff1ascale",permalink:"/docs/fe-basic/css/zoom-and-transform"}},s={},p=[{value:"\u5e38\u7528\u7684 hover \u72b6\u6001\u5207\u6362",id:"\u5e38\u7528\u7684-hover-\u72b6\u6001\u5207\u6362",level:2},{value:"\u80cc\u666f\uff1a",id:"\u80cc\u666f",level:3},{value:"\u53d1\u751f\u7684\u95ee\u9898\uff1a",id:"\u53d1\u751f\u7684\u95ee\u9898",level:3},{value:"\u4e3a\u4ec0\u4e48\uff1a",id:"\u4e3a\u4ec0\u4e48",level:3},{value:"\u5982\u4f55\u89e3\u51b3\uff1a",id:"\u5982\u4f55\u89e3\u51b3",level:3},{value:"transform,translation,translate \u7684\u533a\u522b",id:"transformtranslationtranslate-\u7684\u533a\u522b",level:2},{value:"translation \u8fc7\u6e21\u52a8\u753b",id:"translation-\u8fc7\u6e21\u52a8\u753b",level:3},{value:"transform \u8f6c\u6362",id:"transform-\u8f6c\u6362",level:3},{value:"translation \u4e0e transform \u5bf9\u6587\u6863\u6d41\u7684\u5f71\u54cd",id:"translation-\u4e0e-transform-\u5bf9\u6587\u6863\u6d41\u7684\u5f71\u54cd",level:3},{value:"\u5b9e\u4f8b",id:"\u5b9e\u4f8b",level:2},{value:"\u6dfb\u52a0\u52a8\u753b\u7684\u597d\u7528\u7684\u5e93",id:"\u6dfb\u52a0\u52a8\u753b\u7684\u597d\u7528\u7684\u5e93",level:2},{value:"Reference",id:"reference",level:2}],m={toc:p},c="wrapper";function u(e){let{components:t,...n}=e;return(0,r.kt)(c,(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4e00\u4e9b\u7b80\u5355\u7684\u52a8\u753b\u6548\u679c"},"\u4e00\u4e9b\u7b80\u5355\u7684\u52a8\u753b\u6548\u679c"),(0,r.kt)("p",null,"\u5305\u62ec animation\uff0ctranslation\uff0ctransform \u7b49\u7684\u57fa\u7840\u4f7f\u7528\u3002"),(0,r.kt)("h2",{id:"\u5e38\u7528\u7684-hover-\u72b6\u6001\u5207\u6362"},"\u5e38\u7528\u7684 hover \u72b6\u6001\u5207\u6362"),(0,r.kt)("h3",{id:"\u80cc\u666f"},"\u80cc\u666f\uff1a"),(0,r.kt)("p",null,"\u5e38\u89c1\u7684\u4e1a\u52a1\u9700\u6c42\uff0c\u6309\u94ae\u5728 hover \u65f6\u5207\u6362\u6548\u679c\u3002\u6211\u5199\u4e86\u8fd9\u6837\u7684\u6837\u5f0f\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},'.prev {\n  background: no-repeat url("https://i.loli.net/2021/08/24/kglaB1zyCs5ZvJw.png");\n}\n/* \u7b2c\u4e00\u6b21\u9875\u9762\u52a0\u8f7d\uff0chover\u4e0a\u53bb\u4f1a\u95ea\u70c1\uff0c\u56e0\u4e3a\u4e0b\u9762\u7684\u56fe\u7247\u5730\u5740\u4f1a\u5728hover\u7684\u65f6\u5019\u624d\u52a0\u8f7d\n  \u89e3\u51b3\u65b9\u5f0f\uff1a \u53ef\u4ee5\u73b0\u5728\u9875\u9762\u5b9e\u4f8b\u5316\u8fd9\u4e2a\u56fe\u7247\n  */\n.prev:hover {\n  background: no-repeat url("https://i.loli.net/2021/08/24/PucWs9XmoknV7yF.png");\n}\n')),(0,r.kt)("h3",{id:"\u53d1\u751f\u7684\u95ee\u9898"},"\u53d1\u751f\u7684\u95ee\u9898\uff1a"),(0,r.kt)("p",null,"\u5728\u9875\u9762\u7b2c\u4e00\u6b21\u52a0\u8f7d\u7684\u65f6\u5019\uff0chover \u4e0a\u53bb\u80cc\u666f\u56fe\u4f1a\u95ea\u70c1\u4e00\u4e0b\u624d\u4f1a\u663e\u793a\u65b0\u7684\u56fe\u7247\u3002"),(0,r.kt)("h3",{id:"\u4e3a\u4ec0\u4e48"},"\u4e3a\u4ec0\u4e48\uff1a"),(0,r.kt)("p",null,"\u5728\u9875\u9762\u52a0\u8f7d\u540e\u672a hover \u65f6\uff0c\u6ca1\u6709\u52a0\u8f7d hover \u65f6\u9700\u8981\u7684\u56fe\u7247\uff0c\u5728 hover \u4e4b\u540e\u624d\u52a0\u8f7d\u65b0\u7684\u56fe\u7247\uff0c\u52a0\u8f7d\u7684\u65f6\u95f4\u4f1a\u4f7f\u56fe\u6807\u95ea\u70c1\u3002"),(0,r.kt)("h3",{id:"\u5982\u4f55\u89e3\u51b3"},"\u5982\u4f55\u89e3\u51b3\uff1a"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u4e0d\u4f7f\u7528\u8fd9\u79cd\u65b9\u5f0f\uff0c\u4f7f\u7528\u4e24\u5f20\u56fe\u7247\uff0c\u90fd\u653e\u5728 img \u6807\u7b7e\u91cc\uff0c\u4f7f\u7528\u4e24\u5f20\u56fe\u7247\u7684 display \u6765\u5207\u6362\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 svg \uff0c\u6bd4\u5982 iconfont\uff0c\u5982\u679c\u53ea\u662f\u989c\u8272\u7684\u6539\u53d8\u53ef\u4ee5\u76f4\u63a5\u6539\u53d8\u989c\u8272\u4e0d\u7528\u6539\u53d8\u56fe\u7247\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5982\u679c\u8981\u4f7f\u7528 background-image \u7684\u53d8\u5316\u6765\u8bbe\u7f6e\uff0c\u53ef\u4ee5\u628a hover \u540e\u7684\u56fe\u7247\u63d0\u524d\u52a0\u8f7d\uff0c\u5728\u9875\u9762\u4e2d\u5148\u628a\u8d44\u6e90\u5b9e\u4f8b\u5316\uff0c\u5c31\u4e0d\u4f1a\u95ea\u70c1\u5566\u3002",(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},'//https://codesandbox.io/s/hover-backgroundshan-shuo-de-wen-ti-11yv5?file=/index.js\nlet img = new Image();\nimg.src = "https://i.loli.net/2021/08/24/PucWs9XmoknV7yF.png";\n')))),(0,r.kt)("h2",{id:"transformtranslationtranslate-\u7684\u533a\u522b"},"transform,translation,translate \u7684\u533a\u522b"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"transform \u662f\u8f6c\u6362\uff0c\u6307\u7684\u662f\u6539\u53d8\u6240\u5728\u5143\u7d20\u7684\u5916\u89c2\uff0c\u5b83\u6709\u5f88\u591a\u79cd\u624b\u6bb5(\u8f6c\u6362\u51fd\u6570)\u6765\u6539\u53d8\u5916\u89c2\uff0c\u4f8b\u5982 \u4f4d\u79fb\u3001\u7f29\u653e\u3001\u65cb\u8f6c \u7b49\uff0c\u800c\u5176\u4e2d\u7684\u4f4d\u79fb\u7684\u51fd\u6570\u540d\u5c31\u53eb translate\uff0c\u6240\u4ee5\u8bf4\uff0ctranslate \u662f transform \u7684\u4e00\u90e8\u5206\u3002"),(0,r.kt)("li",{parentName:"ul"},"transition \u662f\u8fc7\u6e21\uff0c\u6307\u7684\u662f\u67d0\u4e2a CSS \u5c5e\u6027\u503c\u5982\u4f55\u5e73\u6ed1\u7684\u8fdb\u884c\u6539\u53d8\uff0c\u5c31\u662f\u5e73\u5e38\u8bf4\u7684 \u52a8\u6548\u3002\u800c transform \u662f\u6ca1\u6709\u52a8\u753b\u6548\u679c\uff0c\u4f60\u6539\u53d8\u4e86\u5b83\u7684\u503c\uff0c\u5143\u7d20\u7684\u6837\u5b50\u5c31\u5530\u7684\u6539\u53d8\u4e86\u3002")),(0,r.kt)("h3",{id:"translation-\u8fc7\u6e21\u52a8\u753b"},"translation \u8fc7\u6e21\u52a8\u753b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"transition: [\u5c5e\u6027\u540d] [\u6301\u7eed\u65f6\u95f4] [\u901f\u5ea6\u66f2\u7ebf] [\u5ef6\u8fdf\u65f6\u95f4];\ntransition: height 2s ease 0.5s;\n\n//\u591a\u4e2a\u5c5e\u6027\u6307\u5b9a\u591a\u4e2a\u8fc7\u6e21\ntransition: height 2s, width 3s;\n")),(0,r.kt)("h3",{id:"transform-\u8f6c\u6362"},"transform \u8f6c\u6362"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"//\u63a5\u53d7\u4e00\u4e2a\u8f6c\u6362\u51fd\u6570\u3002\ntransform:translate(x, y); //\u4f4d\u79fb\ntransform:scale(x, y)//\u7f29\u653e\ntransform:rotate(angle)//\u987a\u65f6\u9488\u65cb\u8f6c\ntransform: translate(10px, 10px) rotate(10deg);//\u7ed9\u4e00\u4e2a\u5143\u7d20\u914d\u7f6e\u591a\u4e2a\u8f6c\u6362\u51fd\u6570\n\n")),(0,r.kt)("h3",{id:"translation-\u4e0e-transform-\u5bf9\u6587\u6863\u6d41\u7684\u5f71\u54cd"},"translation \u4e0e transform \u5bf9\u6587\u6863\u6d41\u7684\u5f71\u54cd"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-css"},"//transition:\u5bbd\u9ad8\u53d8\u5316\uff0c\u4ee5\u5de6\u4e0a\u89d2\u4e3a\u4e2d\u5fc3\uff0c\u4f1a\u628a\u5176\u4ed6\u5143\u7d20\u6324\u5f00\u3002\u5360\u7684\u5b9e\u9645\u5730\u65b9\u4f1a\u53d8\u5927\u3002\n.box {\n  width: 100px;\n  height: 100px;\n  transition: all 0.4s ease;\n}\n\n.box:hover {\n  width: 120px;\n  height: 120px;\n}\n\n//transform: \u4ee5\u5143\u7d20\u4e2d\u5fc3\u4e3a\u53d8\u5316\uff0c\u53ea\u5f71\u54cd\u5f53\u524d\u5143\u7d20\u72b6\u6001\uff0c\u4e0d\u4f1a\u5f71\u54cd\u5176\u4ed6\u5143\u7d20\u3002\u4e5f\u53ef\u4ee5\u6539\u53d8\u4e2d\u5fc3\u4f4d\u7f6e\u3002\n.box {\n  width: 100px;\n  height: 100px;\n  transition: all 0.4s ease;\n}\n\n.box:hover {\n  transform: scale(1.2, 1.2);\n}\n")),(0,r.kt)("h2",{id:"\u5b9e\u4f8b"},"\u5b9e\u4f8b"),(0,r.kt)("p",null,"\u4e00\u4e9b\u597d\u7528\u7684\u52a8\u753b:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5361\u7247\u805a\u7126\u7684\u6548\u679c\uff1a ",(0,r.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/08/02/JjqbUf2lTtm7YSw.gif",alt:null})),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-css"},".wrapper {\n  transition: all 0.2s ease-in-out;\n}\n.wrapper:hover {\n  transform: scale(1.05, 1.05);\n}\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u5411\u5f80\u5916\u9762\u7684\u56fe\u7247\uff0c\u4e0d\u80fd\u51fa\u5708\u5708\u3002\u6548\u679c\u5c55\u793a\uff1a ",(0,r.kt)("img",{parentName:"p",src:"https://i.loli.net/2021/08/02/PETa1dcnrYyAitS.gif",alt:null})),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://codepen.io/brightzoe/pen/dyWOEBp"},"\u5916\u6846\u4e0d\u53d8\uff0c\u91cc\u9762\u52a8\u753b demo"))),(0,r.kt)("p",{parentName:"li"},"\u6838\u5fc3\u662f\uff1a\u91cc\u9762\u7684\u5143\u7d20",(0,r.kt)("inlineCode",{parentName:"p"},"transition: all 0.4s ease-in-out;"),",\u8bbe\u5b9a\u52a8\u753b\u6548\u679c\u3002"),(0,r.kt)("p",{parentName:"li"},"\u5916\u9762\u7684 hover \u65f6\uff0c\u91cc\u9762",(0,r.kt)("inlineCode",{parentName:"p"},"transform: scale(1.1, 1.1);"),",\u53d8\u6362\u6210\u4ec0\u4e48\u6837\u5b50\u3002"),(0,r.kt)("p",{parentName:"li"},"\u540c\u65f6\u5916\u9762",(0,r.kt)("inlineCode",{parentName:"p"},"overflow:hidden"),",\u4e0d\u80fd\u8d8a\u8fc7\u6211\u753b\u7684\u5708\u5708\uff01")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"translation \u63a7\u5236\u53d8\u5316\u7684\u65b9\u5411"),(0,r.kt)("p",{parentName:"li"},"\u4e00\u4e2a 100px \u5757\u5143\u7d20\uff0c\u5982\u4f55\u8ba9\u9ad8\u5ea6\u4ece 100px \u53d8\u5230 0\uff1f"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-css"},".red {\n  height: 200px;\n  width: 100px;\n  background: red;\n  transition: height ease-in-out 5s;\n  /* \u4ee5\u4e0a\u662f\u9ad8\u5ea6\u4ece\u4e0b\u5230\u4e0a\u6d88\u5931\uff0c\u5982\u4f55\u4ece\u4e0a\u5230\u4e0b\u6d88\u5931\u5462\uff1f\u6839\u636e\u6d41\u5f0f\u5e03\u5c40\uff0c\u8131\u79bb\u6b63\u5e38\u6d41\u7528\u7edd\u5bf9\u5b9a\u4f4d\u5c31\u53ef\u4ee5\u4e86 */\n  /* position:absolute; */\n  /* bottom:0; */\n}\n.red:hover {\n  height: 0px;\n}\n")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://codepen.io/brightzoe/pen/wvyzWPG"},"css translation \u9ad8\u5ea6\u6d88\u5931\u65b9\u5411 demo"))))),(0,r.kt)("h2",{id:"\u6dfb\u52a0\u52a8\u753b\u7684\u597d\u7528\u7684\u5e93"},"\u6dfb\u52a0\u52a8\u753b\u7684\u597d\u7528\u7684\u5e93"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Animate.css"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://animate.style/"},"https://animate.style/")),(0,r.kt)("p",{parentName:"li"},"\u7b80\u5355\u597d\u7528\uff0c\u6dfb\u52a0\u4e86\u4e00\u4e9b\u5e38\u7528\u7684\u52a8\u753b,\u4f7f\u7528\u7b80\u5355\uff0c\u5728\u4e0a\u9762\u4e3b\u9875\u4e0a\u6709\u4f7f\u7528\u65b9\u5f0f\u3002"))),(0,r.kt)("h2",{id:"reference"},"Reference"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.jianshu.com/p/80f6051389bd"},"\u63a2\u7a76 CSS3 \u4e2d\u7684 transition \u548c transform \u5c5e\u6027"))))}u.isMDXComponent=!0}}]);