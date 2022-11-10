"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[4071],{4137:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),p=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(h,o(o({ref:t},u),{},{components:n})):r.createElement(h,o({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5224:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(3117),a=n(102),l=(n(7294),n(4137)),o=["components"],s={tags:["dev","usage","linux"]},i="\u7f51\u7ad9\u6784\u5efa",p={unversionedId:"tools/website-construction",id:"tools/website-construction",title:"\u7f51\u7ad9\u6784\u5efa",description:"Linux \u57fa\u7840",source:"@site/docs/tools/website-construction.md",sourceDirName:"tools",slug:"/tools/website-construction",permalink:"/docs/tools/website-construction",draft:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/tools/website-construction.md",tags:[{label:"dev",permalink:"/docs/tags/dev"},{label:"usage",permalink:"/docs/tags/usage"},{label:"linux",permalink:"/docs/tags/linux"}],version:"current",lastUpdatedAt:1668074304,formattedLastUpdatedAt:"Nov 10, 2022",frontMatter:{tags:["dev","usage","linux"]},sidebar:"Tools",previous:{title:"git \u4f7f\u7528",permalink:"/docs/tools/usage-of-git"}},u={},c=[{value:"Linux \u57fa\u7840",id:"linux-\u57fa\u7840",level:2},{value:"Ubuntu",id:"ubuntu",level:3},{value:"CentOS",id:"centos",level:3},{value:"\u90e8\u7f72",id:"\u90e8\u7f72",level:2},{value:"nginx",id:"nginx",level:3},{value:"\u5b9e\u9645\u95ee\u9898",id:"\u5b9e\u9645\u95ee\u9898",level:4},{value:"pm2",id:"pm2",level:3},{value:"https",id:"https",level:3},{value:"\u591a\u8def\u90e8\u7f72",id:"\u591a\u8def\u90e8\u7f72",level:2},{value:"\u4f7f\u7528\u7684\u4e00\u4e9b\u5de5\u5177",id:"\u4f7f\u7528\u7684\u4e00\u4e9b\u5de5\u5177",level:2},{value:"Reference",id:"reference",level:2}],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u7f51\u7ad9\u6784\u5efa"},"\u7f51\u7ad9\u6784\u5efa"),(0,l.kt)("h2",{id:"linux-\u57fa\u7840"},"Linux \u57fa\u7840"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"cd change directory",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"cd \u76f8\u5bf9\u8def\u5f84\uff08\u76f8\u5bf9\u4e8e\u5f53\u524d\u5de5\u4f5c\u76ee\u5f55\uff09",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"../ \u8868\u793a\u5f53\u524d\u6587\u4ef6\u5939\u7684\u7236\u6587\u4ef6\u5939 \uff08\u4e2d\u5408\u8def\u5f84\u4e2d\u7684\u4e0a\u4e00\u4e2a\u6587\u4ef6\u5939\uff09anv/.. =0"),(0,l.kt)("li",{parentName:"ul"},"./ \u8868\u793a\u5f53\u524d\u6587\u4ef6\u5939\uff0c\u53ef\u5ffd\u7565"))),(0,l.kt)("li",{parentName:"ul"},"cd \u7edd\u5bf9\u8def\u5f84\uff0c\u4ee5 / \u5f00\u5934\uff1b \uff08cd - \u4e0a\u4e00\u4e2a\u6587\u4ef6\u5939\uff09")))),(0,l.kt)("p",null,"\u6587\u4ef6\u76f8\u5173"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir a # \u521b\u5efa\u76ee\u5f55\uff0c\u540d\u79f0\u4e3aa\nmkdir -p a/b # \u521b\u5efa\u76ee\u5f55a\u548c\u5b50\u76ee\u5f55b\nmv a /tmp/b # \u79fb\u52a8\u6587\u4ef6\u6216\u6587\u4ef6\u5939\ncp # \u590d\u5236(\u590d\u5236\u76ee\u5f55:cp -r )\n\nrm\n\nfind xx\nls # \u5f53\u524d\u76ee\u5f55\u7684\u6240\u6709\u5185\u5bb9\nls -l #\u5f53\u524d\u76ee\u5f55\u5185\u5bb9\u7684\u66f4\u591a\u4fe1\u606f\nll\n\ncd # \u663e\u793a\u5f53\u524d\u76ee\u5f55\u4e0b\u7684\u6587\u4ef6\npwd # \u663e\u793a\u76ee\u524d\u6240\u5728\u7684\u8def\u5f84\n\ncat xx  # \u67e5\u770b\u6587\u4ef6\u5185\u5bb9(\u8f83\u5927\u6587\u4ef6)\nless # \u67e5\u770b\u5927\u6587\u4ef6\uff0c\u7c7b\u4f3cvim \u65b9\u4fbf\u67e5\u627e\n\nmount /dev/sdb1 /mnt/usb #\u6302\u8f7d\u5916\u63a5\u8bbe\u5907\u5230/mnt/usb\n\ntail -f  access.log # \u6eda\u52a8\u7684\u65b9\u5f0f\u67e5\u770b\u65e5\u5fd7\ntail -n100 access.log #\u9759\u6001\u67e5\u770b\u67d0\u4e2a\u6587\u4ef6\u7684\u6700\u540en\u884c\nhead -n100 access.log #\u9759\u6001\u67e5\u770b\u67d0\u4e2a\u6587\u4ef6\u7684\u6700\u524dn\u884c\n\ngrep -rn --color POST access.log #\u67e5\u770b log \u4e2d\u7684 post \u8bf7\u6c42\u3002 \u5bf9\u5185\u5bb9\u8fdb\u884c\u8fc7\u6ee4\u3002\u53c2\u6570n\u5219\u8f93\u51fa\u5177\u4f53\u7684\u884c\u6570\uff0c\u7528\u6765\u5feb\u901f\u5b9a\u4f4d\n")),(0,l.kt)("p",null,"\u7f51\u7edc\u76f8\u5173"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"netstat -a\u3000#\u5217\u51fa\u6240\u6709\u7aef\u53e3 (\u5305\u62ec\u76d1\u542c\u548c\u672a\u76d1\u542c\u7684)\nnetstat -lnp|grep 80 # \u68c0\u67e5\u7aef\u53e3\u4f7f\u7528\u7684\u72b6\u6001\nnetstat -ntpl # \u67e5\u770b\u6240\u6709\u7aef\u53e3\u72b6\u6001\n")),(0,l.kt)("p",null,"vim \u7f16\u8f91\u6587\u4ef6"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim a.js\ni #insert\nesc #\u9000\u51fainsert\n:q #\u9000\u51fa\n:wq #\u4fdd\u5b58\u5e76\u9000\u51fa\n")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"sudo -i #\u3000\u4f7f\u7528root\nsu - mike # \u5207\u6362\u7528\u6237\uff0c\u52a0\u4e0a - \u662f\u8fde\u73af\u5883\u53d8\u91cf\u4e00\u8d77\u5207\u6362\n\nservice #\u670d\u52a1\u7ba1\u7406\nservice mysql restart\nsystemctl #\u517c\u5bb9service\u547d\u4ee4\nsystemctl mysql restart\nps -ef|grep nginx #\u67e5\u770b\u8fdb\u7a0b/\u7ebf\u7a0b\u72b6\u6001\n\n#\u4efb\u52a1\u7ba1\u7406\u5668\nhtop\n\n# ssh \u8fde\u63a5\u8fdc\u7a0b\u5b9e\u4f8b\nssh -i xx.pem root@139.196.242.xx\n\n#\u9000\u51fassh\nlogout\nexit\nCTRL + D\n\n# win /linux \u4f20\u6587\u4ef6/\u590d\u5236\u6587\u4ef6\nscp -P 1007 xx.txt root@192.168.1.1:/tmp\n     #\u7aef\u53e3\n\nwget -c http://www.xxx/xxx.deb #\u4e0b\u8f7d\u6587\u4ef6\uff0c\u652f\u6301\u65ad\u70b9\u7eed\u4f20\n")),(0,l.kt)("h3",{id:"ubuntu"},"Ubuntu"),(0,l.kt)("p",null,"\u5b89\u88c5\u8f6f\u4ef6 apt-get"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'apt install zsh/node/pm2\nsh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"\ncurl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -\nsudo apt-get install -y nodejs\n\n')),(0,l.kt)("h3",{id:"centos"},"CentOS"),(0,l.kt)("p",null,"\u5b89\u88c5\u8f6f\u4ef6\uff1ayum"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"}," yum install zsh\n curl -sL https://rpm.nodesource.com/setup_14.x | sudo bash -\n sudo yum install nodejs\n npm install pm2\n")),(0,l.kt)("h2",{id:"\u90e8\u7f72"},"\u90e8\u7f72"),(0,l.kt)("p",null,"\u9996\u5148\u5728\u670d\u52a1\u5668\u5f00\u542f\u5bf9\u5e94\u7aef\u53e3\u7684\u8bbf\u95ee\uff08\u5165\u7ad9\u51fa\u7ad9\u914d\u7f6e\uff09"),(0,l.kt)("h3",{id:"nginx"},"nginx"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# nginx\nnginx -s reload # \u91cd\u65b0\u52a0\u8f7d\u914d\u7f6e\u6587\u4ef6\uff0c\u70ed\u91cd\u542f\uff0c\u4fee\u6539\u914d\u7f6e\u4e4b\u540e\u9700\u8981\nvim  nginx.conf\n")),(0,l.kt)("p",null,"\u5355\u9875\u9762\u5e94\u7528\u57fa\u672c\u914d\u7f6e\u6817\u5b50\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"server {\n        listen 80;\n        # server_name your.domain.com;\n\n        root /home/root/demo;\n        index index.html index.htm;\n\n        location / {\n                try_files $uri $uri/ /index.html;\n        }\n        location ^~ /assets/ {\n                gzip_static on;\n                expires max;\n                add_header Cache-Control public;\n        }\n        error_page 500 502 503 504 /500.html;\n        client_max_body_size 20M;\n        keepalive_timeout 10;\n}\n\n")),(0,l.kt)("h4",{id:"\u5b9e\u9645\u95ee\u9898"},"\u5b9e\u9645\u95ee\u9898"),(0,l.kt)("p",null,"\u505a\u7684\u9879\u76ee\u8981\u7ed9\u5ba2\u6237\u6f14\u793a\uff0c\u7531\u4e8e\u516c\u53f8\u5185\u7f51\u7684\u5173\u7cfb\uff0c\u9488\u5bf9\u670d\u52a1\u5668\u7684\u67d0\u4e00\u7aef\u53e3\u5f00\u901a\u4e86\u5916\u7f51\u6620\u5c04\u3002\u4f46\u9879\u76ee\u4e2d\u4f7f\u7528\u7684 put/delete \u8bf7\u6c42\u88ab\u5185\u7f51\u7f51\u5173\u9650\u5236\uff0c\u901a\u8fc7\u5916\u7f51\u5730\u5740\u8bbf\u95ee\u65f6 \u4f7f\u7528 PUT/DELETE \u8bf7\u6c42\u88ab\u9650\u5236\uff0c\u62a5\u9519\uff1anet::ERR_CONNECTION_RESET \u3002"),(0,l.kt)("p",null,"\u5efa\u7acb\u5728\u7f51\u5173\u89c4\u5219\u6ca1\u6cd5\u4fee\u6539\uff0c\u540e\u7aef\u4e5f\u4e0d\u652f\u6301\u628a put/delete \u8bf7\u6c42\u4fee\u6539\u4e3a post \u7684\u524d\u63d0\u4e0b\uff0c\u5982\u4f55\u89e3\u51b3\u6b64\u95ee\u9898\uff1f"),(0,l.kt)("p",null,"\u89e3\u51b3\u65b9\u6848\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u524d\u7aef\u8bf7\u6c42\u6839\u636e\u4e0d\u540c\u65b9\u6cd5\u52a0 header \uff0cnginx \u6839\u636e header \u4e2d\u67d0\u4e2a\u53d8\u91cf\u7684\u503c\u4fee\u6539 method"),(0,l.kt)("p",{parentName:"li"},"\u5728\u524d\u7aef\u4ee3\u7801\u8bf7\u6c42\u4e2d\uff0c\u5c06 put/delete \u8bf7\u6c42\u4fee\u6539\u4e3a post \uff0c\u6dfb\u52a0\u5bf9\u5e94\u7684 request header"),(0,l.kt)("p",{parentName:"li"},"nginx \u914d\u7f6e"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre"},"server {\n  listen       3000;\n  server_name  your-domain.com;\n    set $method $request_method;\n      if ($http_X_HTTP_Method_Override ~* 'DELETE') {\n        set $method DELETE;\n      }\n\n    if ($http_X_HTTP_Method_Override ~* 'PUT') {\n        set $method PUT;\n      }\n\n      proxy_method $method;\n  location / {\n      proxy_pass http://localhost:3001;\n  }\n}\n\n")),(0,l.kt)("p",{parentName:"li"},"\u53ef\u53c2\u8003 ",(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/weixin_53458434/article/details/118673550"},"\u7528\u57df\u540d\u8bbf\u95ee\u63a5\u53e3, get \u548c post \u8bf7\u6c42\u5747\u6b63\u5e38,\u800c put \u548c delete \u8bf7\u6c42\u5747\u65e0\u6cd5\u6b63\u5e38\u4f7f\u7528","_","\u76f8\u7ea6\u9ec4\u660f\u540e 007 \u7684\u535a\u5ba2-CSDN \u535a\u5ba2","_","put \u8bf7\u6c42\u88ab\u62e6\u622a"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u5982\u679c\u9879\u76ee\u4ee3\u7801\u4e2d\u6709 node \u4e2d\u95f4\u5c42\u4e5f\u53ef\u4ee5\u7528 node \u6765\u89e3\u51b3\uff0c\u76ee\u524d\u4f7f\u7528\u4e86 koa"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"app.use(async (ctx, next) => {\n  //\u5c06put/delete \u8bf7\u6c42\u66ff\u6362\u56de\u6765 'x-http-method-override': 'PUT'\uff0c\u89e3\u51b3\u5185\u5916\u7f51\u6620\u5c04\u65e0\u6cd5\u4f7f\u7528put/delete\u8bf7\u6c42\u7684\u95ee\u9898\n  if (ctx.request.header['x-http-method-override']) {\n    ctx.request.method = ctx.request.header['x-http-method-override']\n  }\n  await next()\n})\n")))),(0,l.kt)("h3",{id:"pm2"},"pm2"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# pm2 nodejs \u7684\u8fdb\u7a0b\u7ba1\u7406\u5de5\u5177,\u4e5f\u53ef\u4ee5\u7ba1\u7406\u5176\u4ed6linux\u8fdb\u7a0b\npm2 start xx.js -- args for xx.js   #\u91cd\u542f\u673a\u5668\u540e\u5c31\u6ca1\u6709\u4e86\npm2 list\npm2 show/stop/restart id\npm2 save #save\u540e,\u518d\u91cd\u542f\u673a\u5668\u4e0d\u4f1a\u4e22\u5931\npm2 resurrect #\u91cd\u542f\u8fdb\u7a0b\npm2 startup #\u914d\u7f6e\u4e3a\u5f00\u673a\u81ea\u542f\u52a8 pm2 unstartup\n")),(0,l.kt)("h3",{id:"https"},"https"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"# ssl \u8bc1\u4e66\ncurl https://get.acme.sh | sh -s email=brightzoe@qq.com\n\n#ssl\u8bc1\u4e66 \u9a8c\u8bc1\u57df\u540d  acme.sh\nacme.sh --issue --standalone -d 7.brightzoe.top\n\n# \u547d\u4ee4\u672a\u627e\u5230\uff0c\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84\u9a8c\u8bc1\u57df\u540d\n/root/.acme.sh/acme.sh --issue --standalone -d 7.brightzoe.top\n\n#\u8bbe\u7f6ehttps\nconst https = require('https')\nconst fs = require('fs')\n\n\nhttps.createServer({\n  key:fs.readFileSync('/root/.acme.sh/7.brightzoe.xyz/7.brightzoe.xyz.key'),\n  cert:fs.readFileSync('/root/.acme.sh/7.brightzoe.xyz/7.brightzoe.xyz.cer'),\n  app\n},(req,res)=>{\n  res.end('hello')\n}).listen(443,()=>{\n  console.log(443)\n})\n")),(0,l.kt)("h2",{id:"\u591a\u8def\u90e8\u7f72"},"\u591a\u8def\u90e8\u7f72"),(0,l.kt)("p",null,"DNS \u89e3\u6790\u53ef\u4ee5\u914d\u7f6e\u89c4\u5219\uff0c\u5728\u76ee\u524d\u56fd\u5185\u8bbf\u95ee\u56fd\u5916\u7f51\u7edc\u5b58\u5728\u4e9b\u95ee\u9898\u7684\u60c5\u51b5\uff0c\u53ef\u4ee5\u8003\u8651\u5c06\u57df\u540d\u89e3\u6790\u5230\u4e0d\u540c\u7684 IP \u4e0a\u3002"),(0,l.kt)("p",null,"\u5982\u4f55\u53cc\u7ebf\u90e8\u7f72\u7f51\u7ad9\uff1f DNS \u89e3\u6790\u7684\u670d\u52a1\u5546\uff0c\u5982 DNSPOD,\u963f\u91cc\u4e91\u89e3\u6790\u90fd\u53ef\u4ee5\u8bbe\u7f6e\u667a\u80fd\u89e3\u6790\uff0c\u4f46\u76ee\u524d\u6839\u636e\u5883\u5916\u5883\u5185\u5206\u522b\u89e3\u6790\uff0c\u90fd\u662f\u6536\u8d39\u7684\u3002\u53e6\u5916\u4e86\u89e3\u5230\u8fd9\u79cd\u591a\u7ebf\u90e8\u7f72\u7684\u65b9\u5f0f\uff0c\u53ef\u4ee5\u5c06\u5927\u6d41\u91cf\u7684\u7f51\u7ad9\u5206\u6d41\uff0c\u89e3\u51b3\u6d41\u91cf\u8fc7\u5927\u7684\u538b\u529b\u3002"),(0,l.kt)("p",null,"\u524d\u4e24\u5929\u5c1d\u8bd5\u5c06\u6b64\u535a\u5ba2\uff0c\u5728\u5883\u5916\u89e3\u6790\u5230 github,\u5883\u5185\u89e3\u6790\u5230 CODING\u3002\u8fd9\u6837\uff0c\u56fd\u5185\u7528\u6237\u8bbf\u95ee\uff0c\u5c31\u4f1a\u8bbf\u95ee CODING \u4e0a\u90e8\u7f72\u7684\u5185\u5bb9\uff0c\u5728\u5883\u5916\u8bbf\u95ee\u5c31\u4f1a\u8bbf\u95ee\u5230 github \u4e0a\u90e8\u7f72\u7684\u5185\u5bb9\u3002\u76ee\u524d\u53d6\u6d88\u6258\u7ba1\u5230 CODING \u4e0a\u4e86\uff0c\u7531\u4e8e\u9759\u6001\u7f51\u7ad9\u90e8\u7f72\u4e0d\u652f\u6301\u9009\u62e9\u76ee\u5f55\uff0c\u4ee5\u53ca\u9009\u62e9\u5206\u652f\uff0c\u66f4\u65b0\u540e\u81ea\u52a8\u90e8\u7f72\u7684\u8bbe\u7f6e\u4e5f\u6709\u4e9b\u95ee\u9898\uff0c\u6682\u65f6\u653e\u5f03\u4e86\u3002"),(0,l.kt)("h2",{id:"\u4f7f\u7528\u7684\u4e00\u4e9b\u5de5\u5177"},"\u4f7f\u7528\u7684\u4e00\u4e9b\u5de5\u5177"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Vercel\n\u90e8\u7f72\u9759\u6001\u7f51\u7ad9\uff0c\u8fd0\u884c python/node/go/ruby \u811a\u672c\uff0c\u5145\u5f53\u670d\u52a1\u5668\u3002\n\u96f6\u914d\u7f6e\u90e8\u7f72\uff0c\u8bbf\u95ee\u901f\u5ea6\u5feb\uff0c\u6784\u5efa\u5feb\u3002")),(0,l.kt)("h2",{id:"reference"},"Reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://asurada.zone/post/Deploy-Hexoblog-To-Codingnet-And-GitHub/"},"Hexo \u535a\u5ba2 GitHub Pages + CODING \u9759\u6001\u7f51\u7ad9\u53cc\u90e8\u7f72 | Asurada's Zone")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844904144235413512#heading-0"},"Nginx \u4ece\u5165\u95e8\u5230\u5b9e\u8df5\uff0c\u4e07\u5b57\u8be6\u89e3\uff01 - \u6398\u91d1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://juejin.cn/post/6844904080972709901#heading-0"},"\u534a\u5c0f\u65f6\u641e\u4f1a CentOS \u5165\u95e8\u5fc5\u5907\u57fa\u7840\u77e5\u8bc6 - \u6398\u91d1")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://linuxtools-rst.readthedocs.io/zh_CN/latest/base/index.html"},"Linux \u57fa\u7840 \u2014 Linux Tools Quick Tutorial"))))}m.isMDXComponent=!0}}]);