"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[1410],{4137:function(e,t,l){l.d(t,{Zo:function(){return s},kt:function(){return d}});var n=l(7294);function i(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function a(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?a(Object(l),!0).forEach((function(t){i(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function u(e,t){if(null==e)return{};var l,n,i=function(e,t){if(null==e)return{};var l,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||(i[l]=e[l]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)l=a[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(i[l]=e[l])}return i}var p=n.createContext({}),o=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},s=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,i=e.mdxType,a=e.originalType,p=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),m=o(l),d=i,c=m["".concat(p,".").concat(d)]||m[d]||k[d]||a;return l?n.createElement(c,r(r({ref:t},s),{},{components:l})):n.createElement(c,r({ref:t},s))}));function d(e,t){var l=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=l.length,r=new Array(a);r[0]=m;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u.mdxType="string"==typeof e?e:i,r[1]=u;for(var o=2;o<a;o++)r[o]=l[o];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},1830:function(e,t,l){l.r(t),l.d(t,{assets:function(){return s},contentTitle:function(){return p},default:function(){return d},frontMatter:function(){return u},metadata:function(){return o},toc:function(){return k}});var n=l(3117),i=l(102),a=(l(7294),l(4137)),r=["components"],u={},p="CSS",o={unversionedId:"fe-basic/css/index",id:"fe-basic/css/index",title:"CSS",description:"\u9009\u62e9\u5668\u4f18\u5148\u7ea7",source:"@site/docs/fe-basic/css/index.md",sourceDirName:"fe-basic/css",slug:"/fe-basic/css/",permalink:"/docs/fe-basic/css/",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/fe-basic/css/index.md",tags:[],version:"current",lastUpdatedAt:1665323814,formattedLastUpdatedAt:"Oct 9, 2022",frontMatter:{},sidebar:"FE",previous:{title:"HTML",permalink:"/docs/fe-basic/html"},next:{title:"\u76d2\u6a21\u578b",permalink:"/docs/fe-basic/css/box-model"}},s={},k=[{value:"\u9009\u62e9\u5668\u4f18\u5148\u7ea7",id:"\u9009\u62e9\u5668\u4f18\u5148\u7ea7",level:2},{value:"css \u9009\u62e9\u5668\u4f18\u5148\u7ea7",id:"css-\u9009\u62e9\u5668\u4f18\u5148\u7ea7",level:3},{value:"\u4f2a\u5143\u7d20\u4e0e\u4f2a\u7c7b",id:"\u4f2a\u5143\u7d20\u4e0e\u4f2a\u7c7b",level:3},{value:"\u53ef\u7ee7\u627f\u5c5e\u6027",id:"\u53ef\u7ee7\u627f\u5c5e\u6027",level:2},{value:"display",id:"display",level:2},{value:"\u9690\u85cf\u5143\u7d20",id:"\u9690\u85cf\u5143\u7d20",level:2},{value:"display:none \u4e0e visibility:hidden",id:"displaynone-\u4e0e-visibilityhidden",level:3},{value:"transition \u4e0e animation",id:"transition-\u4e0e-animation",level:2},{value:"transform \u4e0e\u7edd\u5bf9\u5b9a\u4f4d",id:"transform-\u4e0e\u7edd\u5bf9\u5b9a\u4f4d",level:2},{value:"\u76d2\u6a21\u578b",id:"\u76d2\u6a21\u578b",level:2},{value:"\u56fe\u7247\u683c\u5f0f",id:"\u56fe\u7247\u683c\u5f0f",level:2},{value:"CSS Sprites",id:"css-sprites",level:2},{value:"\u7279\u70b9",id:"\u7279\u70b9",level:3},{value:"\u7269\u7406\u50cf\u7d20 \u903b\u8f91\u50cf\u7d20",id:"\u7269\u7406\u50cf\u7d20-\u903b\u8f91\u50cf\u7d20",level:2},{value:"\u5e38\u89c1\u5355\u4f4d",id:"\u5e38\u89c1\u5355\u4f4d",level:2},{value:"\u79fb\u52a8\u7aef\u9002\u914d",id:"\u79fb\u52a8\u7aef\u9002\u914d",level:3},{value:"CSS \u63d0\u5347\u6027\u80fd",id:"css-\u63d0\u5347\u6027\u80fd",level:2},{value:"\u52a0\u8f7d",id:"\u52a0\u8f7d",level:3},{value:"\u9009\u62e9\u5668",id:"\u9009\u62e9\u5668",level:3},{value:"\u6e32\u67d3",id:"\u6e32\u67d3",level:3},{value:"\u53ef\u7ef4\u62a4\u6027",id:"\u53ef\u7ef4\u62a4\u6027",level:3},{value:"\u9884\u5904\u7406\u5668 \u4e0e \u540e\u5904\u7406\u5668",id:"\u9884\u5904\u7406\u5668-\u4e0e-\u540e\u5904\u7406\u5668",level:2},{value:"PostCSS",id:"postcss",level:3},{value:"\u6d6e\u52a8",id:"\u6d6e\u52a8",level:2},{value:"\u5b9a\u4f4d",id:"\u5b9a\u4f4d",level:2}],m={toc:k};function d(e){var t=e.components,l=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,n.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"css"},"CSS"),(0,a.kt)("h2",{id:"\u9009\u62e9\u5668\u4f18\u5148\u7ea7"},"\u9009\u62e9\u5668\u4f18\u5148\u7ea7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"!important \u6700\u4f18\u5148"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u8054\u6837\u5f0f")),(0,a.kt)("h3",{id:"css-\u9009\u62e9\u5668\u4f18\u5148\u7ea7"},"css \u9009\u62e9\u5668\u4f18\u5148\u7ea7"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1\uff0c1\uff0c1\uff0c1 \u4ece\u5927\u5230\u5c0f\u4f9d\u6b21\uff1a",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"id \u9009\u62e9\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u9009\u62e9\u5668/\u5c5e\u6027\u9009\u62e9\u5668/\u4f2a\u7c7b\u9009\u62e9\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u6807\u7b7e/\u4f2a\u5143\u7d20\u9009\u62e9\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u8fde\u63a5\u7b26\u9009\u62e9\u5668\uff1a\u76f8\u90bb\u5143\u7d20/\u540e\u4ee3\u5143\u7d20/"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u914d\u7b26\u9009\u62e9\u5668"),(0,a.kt)("li",{parentName:"ul"},"\u7ee7\u627f\u9009\u62e9\u5668 0\uff0c0\uff0c0\uff0c0")))),(0,a.kt)("p",null,"\u4f2a\u7c7b\uff1a :last-chid\uff0c :hover"),(0,a.kt)("p",null,"\u4f2a\u5143\u7d20\uff1a::after"),(0,a.kt)("h3",{id:"\u4f2a\u5143\u7d20\u4e0e\u4f2a\u7c7b"},"\u4f2a\u5143\u7d20\u4e0e\u4f2a\u7c7b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4f2a\u5143\u7d20\uff1a \u4e0d\u5b58\u5728\u6587\u6863\u4e2d\u3002 \u4f8b\u5982\uff1a::after"),(0,a.kt)("li",{parentName:"ul"},"\u4f2a\u7c7b\uff1a \u5b58\u5728\u6587\u6863\u4e2d\u3002 \u4f8b\u5982\uff1a :last-child")),(0,a.kt)("h2",{id:"\u53ef\u7ee7\u627f\u5c5e\u6027"},"\u53ef\u7ee7\u627f\u5c5e\u6027"),(0,a.kt)("p",null,"\u5b57\u4f53\u5c5e\u6027 font-family font-weight font-size"),(0,a.kt)("p",null,"\u6587\u672c\u5c5e\u6027 color line-height"),(0,a.kt)("p",null,"\u53ef\u89c1\u5c5e\u6027 visibility"),(0,a.kt)("h2",{id:"display"},"display"),(0,a.kt)("p",null,"display:inline \u6c34\u5e73\u65b9\u5411\u7684 margin\uff0cpadding \u6709\u6548\uff0c\u5782\u76f4\u65b9\u5411\u65e0\u6548\u3002"),(0,a.kt)("h2",{id:"\u9690\u85cf\u5143\u7d20"},"\u9690\u85cf\u5143\u7d20"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"display: none")," \u4e0d\u4f1a\u6e32\u67d3\u8be5\u5143\u7d20\uff0c\u4e0d\u5360\u636e\u9875\u9762\u7a7a\u95f4\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"visibility: hidden")," \u4f1a\u6e32\u67d3\uff0c\u4ecd\u5360\u636e\u9875\u9762\u7a7a\u95f4\uff0c\u4e0d\u54cd\u5e94\u7ed1\u5b9a\u7684\u76d1\u542c\u4e8b\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"opacity: 0")," \u4f1a\u6e32\u67d3\uff0c\u5360\u636e\u7a7a\u95f4\uff0c\u54cd\u5e94\u7ed1\u5b9a\u7684\u76d1\u542c\u4e8b\u4ef6\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7edd\u5bf9\u5b9a\u4f4d\u5230\u89c6\u53e3\u4e4b\u5916\u3002")),(0,a.kt)("h3",{id:"displaynone-\u4e0e-visibilityhidden"},"display:none \u4e0e visibility:hidden"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u662f\u5426\u6e32\u67d3"),(0,a.kt)("li",{parentName:"ul"},"\u4fee\u6539\u662f\u5426\u4f1a\u5f15\u53d1\u56de\u6d41\u4e0e\u91cd\u7ed8"),(0,a.kt)("li",{parentName:"ul"},"\u662f\u5426\u88ab\u7ee7\u627f\u3002display:none \u4f1a\u4f7f\u4ed6\u4ee5\u53ca\u540e\u4ee3\u5728\u9875\u9762\u90fd\u4e0d\u80fd\u51fa\u73b0\uff0c\u800c hidden \u5bf9\u4e8e\u672a\u8bbe\u7f6e visible \u7684\u5b50\u4ee3\u7ee7\u627f\uff0c\u8bbe\u7f6e\u4e86\u5219\u53ef\u4ee5\u663e\u793a\u3002")),(0,a.kt)("h2",{id:"transition-\u4e0e-animation"},"transition \u4e0e animation"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"transition \u8fc7\u6e21\u6548\u679c\u3002\u9700\u8981\u4e8b\u4ef6\u89e6\u53d1\uff0c\u6bd4\u5982 hover\uff0cfocus \u7b49\uff0c\u9700\u8981\u8bbe\u7f6e\u5f00\u59cb\u6548\u679c\u548c\u7ed3\u675f\u6548\u679c\u3002"),(0,a.kt)("li",{parentName:"ul"},"animation \u52a8\u753b\u6548\u679c\u3002\u4e0d\u9700\u8981\u89e6\u53d1\uff0c\u8bbe\u5b9a\u597d\u4e8b\u4ef6\u540e\u53ef\u4ee5\u81ea\u5df1\u6267\u884c\u3002\u4f46\u53ef\u4ee5\u8bbe\u7f6e\u591a\u4e2a\u5173\u952e\u5e27\uff08@keyframe\uff09\u3002")),(0,a.kt)("p",null,"\u4e86\u89e3\u66f4\u591a\uff1a",(0,a.kt)("a",{parentName:"p",href:"/docs/fe-basic/css/simple-anime"},"transform,translation")),(0,a.kt)("h2",{id:"transform-\u4e0e\u7edd\u5bf9\u5b9a\u4f4d"},"transform \u4e0e\u7edd\u5bf9\u5b9a\u4f4d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"transform\uff1a\u4e0d\u89e6\u53d1\u6d4f\u89c8\u5668\u56de\u6d41\u548c\u91cd\u7ed8\uff0c\u5229\u7528 GPU\uff0c\u6548\u7387\u9ad8\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7edd\u5bf9\u5b9a\u4f4d\uff1a \u89e6\u53d1\u56de\u6d41\u548c\u91cd\u7ed8\uff0c\u5229\u7528 CPU\uff0c\u6548\u7387\u4f4e\u3002")),(0,a.kt)("h2",{id:"\u76d2\u6a21\u578b"},(0,a.kt)("a",{parentName:"h2",href:"/docs/fe-basic/css/box-model"},"\u76d2\u6a21\u578b")),(0,a.kt)("h2",{id:"\u56fe\u7247\u683c\u5f0f"},"\u56fe\u7247\u683c\u5f0f"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"gif \u52a8\u56fe\uff0c\u53ea\u6709 256 \u8272"),(0,a.kt)("li",{parentName:"ul"},"jpeg/jpg \u6709\u635f\u538b\u7f29\uff0c\u8272\u5f69\u4e30\u5bcc\uff0c\u9002\u5408\u5b58\u50a8\u7167\u7247"),(0,a.kt)("li",{parentName:"ul"},"png \u65e0\u635f\u538b\u7f29\uff0c\u652f\u6301\u900f\u660e\u5ea6\uff0c\u9002\u5408\u5927\u5757\u76f8\u540c\u989c\u8272\u533a\u57df\u7684\u56fe\u50cf"),(0,a.kt)("li",{parentName:"ul"},"webp \u6709\u635f\u538b\u7f29\uff0c\u4f53\u79ef\u5c0f"),(0,a.kt)("li",{parentName:"ul"},"bmp \u65e0\u635f\uff0c\u4e0d\u538b\u7f29\uff0c\u4f53\u79ef\u5927\uff0c\u4e0d\u9002\u5408\u7f51\u9875")),(0,a.kt)("h2",{id:"css-sprites"},"CSS Sprites"),(0,a.kt)("p",null,"\u96ea\u78a7\u56fe\uff0c\u8fc7\u65f6\u6280\u672f\u3002\u5c06\u4e00\u4e2a\u9875\u9762\u6d89\u53ca\u5230\u7684\u6240\u6709\u56fe\u7247\u90fd\u5305\u542b\u5230\u4e00\u5f20\u5927\u56fe\uff0c\u5229\u7528 background-repeat\uff0cbackground-position \u5b9e\u73b0\u56fe\u7247\u7684\u91cd\u590d\u5229\u7528\u3002"),(0,a.kt)("h3",{id:"\u7279\u70b9"},"\u7279\u70b9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u7f51\u9875 http \u8bf7\u6c42\uff0c\u63d0\u9ad8\u9875\u9762\u6027\u80fd\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7ef4\u62a4\u9ebb\u70e6\uff0c\u9700\u8981\u624b\u52a8\u66f4\u65b0\u96ea\u78a7\u56fe\uff0c\u7ef4\u62a4\u4f4d\u7f6e\u3002")),(0,a.kt)("h2",{id:"\u7269\u7406\u50cf\u7d20-\u903b\u8f91\u50cf\u7d20"},"\u7269\u7406\u50cf\u7d20 \u903b\u8f91\u50cf\u7d20"),(0,a.kt)("p",null,"\u624b\u673a\u4e0a\u50cf\u7d20\u5bc6\u5ea6\uff08DPR\uff09\u4e00\u822c\u4e3a 3\u3002\u4e00\u4e2a\u903b\u8f91\u50cf\u7d20\uff08CSS \u50cf\u7d20\uff09=3 \u4e2a\u7269\u7406\u50cf\u7d20"),(0,a.kt)("h2",{id:"\u5e38\u89c1\u5355\u4f4d"},"\u5e38\u89c1\u5355\u4f4d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u767e\u5206\u6bd4\uff1a\u76f8\u5bf9\u7236\u5143\u7d20\u7684\u767e\u5206\u6bd4\u3002"),(0,a.kt)("li",{parentName:"ul"},"em \uff1a\u76f8\u5bf9\u7236\u5143\u7d20\u7684\u6587\u672c\u7684\u500d\u6570\u3002\u5982\u679c\u7236\u5143\u7d20\u6ca1\u6709 font-size\uff0c\u5219\u76f8\u5bf9\u6d4f\u89c8\u5668\u9ed8\u8ba4\u5b57\u4f53\u7684\u500d\u6570\u3002"),(0,a.kt)("li",{parentName:"ul"},"rem\uff1a\u76f8\u5bf9\u6839\u5143\u7d20\u7684\u500d\u6570\u3002\u53ef\u4ee5\u5b9e\u73b0\u7b80\u5355\u54cd\u5e94\u5f0f\u5e03\u5c40\u3002"),(0,a.kt)("li",{parentName:"ul"},"vw/vh/vmax/vmin")),(0,a.kt)("h3",{id:"\u79fb\u52a8\u7aef\u9002\u914d"},"\u79fb\u52a8\u7aef\u9002\u914d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u9002\u914d\u4e0d\u540c\u50cf\u7d20\u5bc6\u5ea6 \u5a92\u4f53\u67e5\u8be2\u56fe\u7247\u5207\u6362\u4e0d\u540c\u7cbe\u5ea6"),(0,a.kt)("li",{parentName:"ul"},"\u9002\u914d\u4e0d\u540c\u5c4f\u5e55\u5927\u5c0f rem/vw \u7b49\u76f8\u5bf9\u5355\u4f4d\u6216\u5a92\u4f53\u67e5\u8be2")),(0,a.kt)("h2",{id:"css-\u63d0\u5347\u6027\u80fd"},"CSS \u63d0\u5347\u6027\u80fd"),(0,a.kt)("h3",{id:"\u52a0\u8f7d"},"\u52a0\u8f7d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"CSS \u6587\u4ef6\u538b\u7f29\uff0c\u51cf\u5c0f\u4f53\u79ef\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u4f7f\u7528 @import\uff0c\u4f7f\u7528 link \u6548\u7387\u66f4\u9ad8\u3002link \u5728\u9875\u9762\u52a0\u8f7d\u65f6\u4e00\u8d77\u52a0\u8f7d\uff0cimport \u5728\u9875\u9762\u52a0\u8f7d\u5b8c\u6210\u540e\u518d\u52a0\u8f7d\u3002")),(0,a.kt)("h3",{id:"\u9009\u62e9\u5668"},"\u9009\u62e9\u5668"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u9009\u62e9\u5668\u5c42\u7ea7"),(0,a.kt)("li",{parentName:"ul"},"\u5c11\u7528\u540e\u4ee3\u9009\u62e9\u5668 \uff0c\u901a\u914d\u7b26\u9009\u62e9\u5668")),(0,a.kt)("h3",{id:"\u6e32\u67d3"},"\u6e32\u67d3"),(0,a.kt)("p",null,"\u51cf\u5c11\u9875\u9762\u56de\u6d41\u4e0e\u91cd\u7ed8\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u5c11\u7528\u6d6e\u52a8\uff0c\u5b9a\u4f4d")),(0,a.kt)("h3",{id:"\u53ef\u7ef4\u62a4\u6027"},"\u53ef\u7ef4\u62a4\u6027"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6837\u5f0f\u4e0e\u5185\u5bb9\u62bd\u79bb\u3002")),(0,a.kt)("h2",{id:"\u9884\u5904\u7406\u5668-\u4e0e-\u540e\u5904\u7406\u5668"},"\u9884\u5904\u7406\u5668 \u4e0e \u540e\u5904\u7406\u5668"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u9884\u5904\u7406\u5668\uff1a less\uff0csass \u7528\u4e8e\u9884\u7f16\u8bd1\u3002"),(0,a.kt)("p",{parentName:"li"},"\u589e\u5f3a CSS \u590d\u7528\u6027\u3002"),(0,a.kt)("p",{parentName:"li"},"\u4f7f\u7528\u5c42\u7ea7\uff0c\u5faa\u73af\uff0c\u53d8\u91cf\u7b49\u66f4\u6613\u4e8e\u5f00\u53d1\uff0c\u6613\u4e8e\u7ef4\u62a4\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u540e\u5904\u7406\u5668\uff1apostCSS"))),(0,a.kt)("h3",{id:"postcss"},"PostCSS"),(0,a.kt)("p",null,"\u4f9d\u8d56\u5404\u79cd\u63d2\u4ef6\u8f6c\u6362 CSS \u7684\u5de5\u5177\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Autoprefixer \uff1a\u4e3a css \u6dfb\u52a0\u7279\u5b9a\u524d\u7f00\u3002\u6bd4\u5982\u6d4f\u89c8\u5668\u76f8\u5173\uff1a",(0,a.kt)("inlineCode",{parentName:"li"},":-webkit-full-screen"),"\uff0c\u89e3\u51b3\u6d4f\u89c8\u5668\u517c\u5bb9\u95ee\u9898\u3002"),(0,a.kt)("li",{parentName:"ul"},"PostCSS Preset Env\uff1a\u5c06\u6700\u65b0 CSS \u8bed\u6cd5\u8f6c\u6362\u6210\u66f4\u591a\u6d4f\u89c8\u5668\u652f\u6301\u7684\u8bed\u6cd5\u3002"),(0,a.kt)("li",{parentName:"ul"},"CSS modules\uff1a\u89e3\u51b3\u5168\u5c40\u547d\u540d\u51b2\u7a81\uff0c\u547d\u540d\u4f1a\u88ab\u7f16\u8bd1\u3002 PostCSS \u6216 css loader \u90fd\u53ef\u4ee5\u5f00\u542f css-modules\u3002"),(0,a.kt)("li",{parentName:"ul"},"postcss-px-to-viewport-8-plugin\uff1a \u79fb\u52a8\u7aef\u9002\u914d\u3002\u5199 px \u81ea\u52a8\u8f6c\u6362\u4e3a vw/vh"),(0,a.kt)("li",{parentName:"ul"},"stylelint\uff1a\u68c0\u67e5 CSS \u8bed\u6cd5\u3002")),(0,a.kt)("h2",{id:"\u6d6e\u52a8"},"\u6d6e\u52a8"),(0,a.kt)("p",null,"\u6d6e\u52a8\u5143\u7d20\u8131\u79bb\u6b63\u5e38\u6d41\uff0c\u4e0d\u5360\u636e\u7a7a\u95f4\uff08\u5f15\u8d77\u9ad8\u5ea6\u584c\u9677\uff09\uff0c\u5438\u9644\u5230\u7236\u5143\u7d20\u7684\u5de6\u8fb9\u6216\u53f3\u8fb9\u3002"),(0,a.kt)("p",null,"\u6d6e\u52a8\u5143\u7d20\u53ef\u4ee5\u5de6\u53f3\u79fb\u52a8\uff0c\u76f4\u5230\u9047\u5230\u53e6\u4e00\u4e2a\u6d6e\u52a8\u5143\u7d20\u6216\u8005\u9047\u5230\u5b83\u5916\u8fb9\u7f18\u7684\u5305\u542b\u6846\u3002"),(0,a.kt)("p",null,"\u6d6e\u52a8\u5143\u7d20\u4f1a\u89e6\u53d1 BFC\u3002"),(0,a.kt)("p",null,"\u6d6e\u52a8\u4e0d\u5f71\u54cd\u5757\u5143\u7d20\uff0c\u53ea\u5f71\u54cd\u884c\u5185\u5143\u7d20\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u6e05\u9664\u6d6e\u52a8\nclear:left/right/both\uff0c\u7528\u4e8e\u5757\u5143\u7d20\uff0c\u4f7f\u5176\u4e0b\u79fb\u5230\u4e24\u8fb9\u6ca1\u6709\u6d6e\u52a8\u5143\u7d20\u3002\u5757\u5143\u7d20\u7684 border box \u548c\u6d6e\u52a8\u5143\u7d20\u7684 margin box \u7d27\u6328\u7740\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/CSS/float"},"float - CSS\uff08\u5c42\u53e0\u6837\u5f0f\u8868\uff09 | MDN")))),(0,a.kt)("h2",{id:"\u5b9a\u4f4d"},"\u5b9a\u4f4d"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"absolute \u4e0e fixed"),(0,a.kt)("p",{parentName:"li"},"\u90fd\u8131\u79bb\u666e\u901a\u6587\u6863\u6d41\u3002"),(0,a.kt)("p",{parentName:"li"},"absolute\uff1a\u53ef\u4ee5\u8bbe\u7f6e\u6839\u5143\u7d20\uff0c\u662f\u76f8\u5bf9\u6839\u5143\u7d20\u7684\u4f4d\u7f6e\u3002\u4ee5\u6839\u5143\u7d20\u7684 padding \u4e3a\u6807\u51c6\u8fdb\u884c\u4f4d\u79fb\u3002"),(0,a.kt)("p",{parentName:"li"},"fixed\uff1a \u76f8\u5bf9\u89c6\u53e3\u7684\u4f4d\u7f6e\uff0c\u4e0d\u968f\u6eda\u52a8\u6761\u6eda\u52a8\u3002")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"sticky"),(0,a.kt)("p",{parentName:"li"},"\u7c98\u8fde\u5b9a\u4f4d\u3002\u7c98\u6027\u5b9a\u4f4d\u53ef\u4ee5\u88ab\u8ba4\u4e3a\u662f\u76f8\u5bf9\u5b9a\u4f4d\u548c\u56fa\u5b9a\u5b9a\u4f4d\u7684\u6df7\u5408\u3002\u5143\u7d20\u5728\u8de8\u8d8a\u7279\u5b9a\u503c\u524d\u4e3a\u76f8\u5bf9\u5b9a\u4f4d\uff0c\u4e4b\u540e\u4e3a\u56fa\u5b9a\u5b9a\u4f4d,\u56fa\u5b9a\u5b9a\u4f4d\u76f8\u5bf9\u4e8e\u4ed6\u7684\u5305\u542b\u5757\u3002"))))}d.isMDXComponent=!0}}]);