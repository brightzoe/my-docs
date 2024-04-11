"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[9292],{9628:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>r,default:()=>a,frontMatter:()=>l,metadata:()=>c,toc:()=>h});var s=n(1527),t=n(8672);const l={title:"git \u4f7f\u7528",authors:["zoe"],tags:["dev","usage"]},r=void 0,c={id:"tools/usage-of-git",title:"git \u4f7f\u7528",description:"\u6240\u6709\u7684\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff0c\u53ea\u80fd\u8ddf\u8e2a\u6587\u672c\u6587\u4ef6\u7684\u6539\u52a8\uff0c\u6bd4\u5982 txt,\u4ee5\u53ca\u6240\u6709\u7684\u7a0b\u5e8f\u4ee3\u7801\u3002\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u53ef\u4ee5\u544a\u8bc9\u4f60\u6bcf\u6b21\u7684\u6539\u52a8\uff0c\u6bd4\u5982\u5728\u54ea\u91cc\u6dfb\u52a0\u4e86\u4e00\u4e2a\u5355\u8bcd\uff0c\u5728\u54ea\u91cc\u5220\u9664\u4e86\u4e00\u4e2a\u5355\u8bcd\u3002\u800c\u56fe\u7247/\u89c6\u9891\u7b49\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u53ef\u4ee5\u7531\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u7ba1\u7406\uff0c\u4f46\u6ca1\u6cd5\u8ddf\u8e2a\u6587\u4ef6\u7684\u53d8\u5316\uff0c\u53ea\u80fd\u77e5\u9053\u56fe\u7247\u5927\u5c0f\u6539\u53d8\uff0c\u4f46\u5177\u4f53\u6539\u4e86\u4ec0\u4e48\u662f\u4e0d\u77e5\u9053\u7684\u3002",source:"@site/docs/tools/usage-of-git.md",sourceDirName:"tools",slug:"/tools/usage-of-git",permalink:"/docs/tools/usage-of-git",draft:!1,unlisted:!1,editUrl:"https://github.com/brightzoe/brightzoe.github.io/edit/main/docs/tools/usage-of-git.md",tags:[{label:"dev",permalink:"/docs/tags/dev"},{label:"usage",permalink:"/docs/tags/usage"}],version:"current",lastUpdatedAt:1712829706,formattedLastUpdatedAt:"2024\u5e744\u670811\u65e5",frontMatter:{title:"git \u4f7f\u7528",authors:["zoe"],tags:["dev","usage"]},sidebar:"Tools",previous:{title:"\u5de5\u5177\u96c6",permalink:"/docs/tools/"},next:{title:"\u7f51\u7ad9\u6784\u5efa",permalink:"/docs/tools/website-construction"}},d={},h=[{value:"\u5e38\u7528\u547d\u4ee4",id:"\u5e38\u7528\u547d\u4ee4",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:3},{value:"\u4e00\u4e9b\u57fa\u672c\u64cd\u4f5c",id:"\u4e00\u4e9b\u57fa\u672c\u64cd\u4f5c",level:3},{value:"\u5206\u652f",id:"\u5206\u652f",level:3},{value:"\u6807\u7b7e",id:"\u6807\u7b7e",level:3},{value:"\u6ce8\u610f\u4e8b\u9879",id:"\u6ce8\u610f\u4e8b\u9879",level:2},{value:"git hooks",id:"git-hooks",level:2},{value:"\u4e00\u4e9b\u95ee\u9898",id:"\u4e00\u4e9b\u95ee\u9898",level:2},{value:"ssh \u65b9\u5f0f\u4e0e https \u65b9\u5f0f\u7684\u4e0d\u540c",id:"ssh-\u65b9\u5f0f\u4e0e-https-\u65b9\u5f0f\u7684\u4e0d\u540c",level:3},{value:"\u5ffd\u7565\u7279\u6b8a\u6587\u4ef6\u6bd4\u5982\u660e\u6587\u5bc6\u7801",id:"\u5ffd\u7565\u7279\u6b8a\u6587\u4ef6\u6bd4\u5982\u660e\u6587\u5bc6\u7801",level:3},{value:"fork \u540e\u4fee\u6539\uff0c\u5982\u4f55\u540c\u6b65\u6e90\u7684\u66f4\u65b0",id:"fork-\u540e\u4fee\u6539\u5982\u4f55\u540c\u6b65\u6e90\u7684\u66f4\u65b0",level:3},{value:"\u5982\u4f55\u4f7f\u7528\u8fdc\u7aef\u4ee3\u7801\u76f4\u63a5\u8986\u76d6\u672c\u5730\uff0c\u4e22\u5f03\u672c\u5730\u7684\u63d0\u4ea4",id:"\u5982\u4f55\u4f7f\u7528\u8fdc\u7aef\u4ee3\u7801\u76f4\u63a5\u8986\u76d6\u672c\u5730\u4e22\u5f03\u672c\u5730\u7684\u63d0\u4ea4",level:3},{value:"<code>git rebase</code> \u4e0e <code>git merge</code> \u7684\u533a\u522b",id:"git-rebase-\u4e0e-git-merge-\u7684\u533a\u522b",level:3},{value:"\u63d0\u4ea4\u4fe1\u606f\u5199\u4e86\u51e0\u4e2a\u9519\u522b\u5b57\uff0c\u8be5\u5982\u4f55\u6539\u4e4b\u524d\u7684\u63d0\u4ea4\u8bb0\u5f55",id:"\u63d0\u4ea4\u4fe1\u606f\u5199\u4e86\u51e0\u4e2a\u9519\u522b\u5b57\u8be5\u5982\u4f55\u6539\u4e4b\u524d\u7684\u63d0\u4ea4\u8bb0\u5f55",level:3},{value:"<code>git pull</code> \u4e0e <code>git fetch</code> \u7684\u533a\u522b",id:"git-pull-\u4e0e-git-fetch-\u7684\u533a\u522b",level:3},{value:"\u5982\u4f55 Pull Request",id:"\u5982\u4f55-pull-request",level:3},{value:"PR \u4e0e MR",id:"pr-\u4e0e-mr",level:3},{value:"\u4e00\u79cd\u7406\u89e3",id:"\u4e00\u79cd\u7406\u89e3",level:4},{value:"Reference",id:"reference",level:2}];function o(e){const i={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.p,{children:"\u6240\u6709\u7684\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff0c\u53ea\u80fd\u8ddf\u8e2a\u6587\u672c\u6587\u4ef6\u7684\u6539\u52a8\uff0c\u6bd4\u5982 txt,\u4ee5\u53ca\u6240\u6709\u7684\u7a0b\u5e8f\u4ee3\u7801\u3002\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u53ef\u4ee5\u544a\u8bc9\u4f60\u6bcf\u6b21\u7684\u6539\u52a8\uff0c\u6bd4\u5982\u5728\u54ea\u91cc\u6dfb\u52a0\u4e86\u4e00\u4e2a\u5355\u8bcd\uff0c\u5728\u54ea\u91cc\u5220\u9664\u4e86\u4e00\u4e2a\u5355\u8bcd\u3002\u800c\u56fe\u7247/\u89c6\u9891\u7b49\u4e8c\u8fdb\u5236\u6587\u4ef6\uff0c\u53ef\u4ee5\u7531\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u7ba1\u7406\uff0c\u4f46\u6ca1\u6cd5\u8ddf\u8e2a\u6587\u4ef6\u7684\u53d8\u5316\uff0c\u53ea\u80fd\u77e5\u9053\u56fe\u7247\u5927\u5c0f\u6539\u53d8\uff0c\u4f46\u5177\u4f53\u6539\u4e86\u4ec0\u4e48\u662f\u4e0d\u77e5\u9053\u7684\u3002"}),"\n",(0,s.jsx)(i.p,{children:"Word \u662f\u4e8c\u8fdb\u5236\u683c\u5f0f\uff0c\u5e76\u4e0d\u662f\u6587\u672c\u6587\u4ef6\uff0c\u7248\u672c\u63a7\u5236\u7cfb\u7edf\u6ca1\u529e\u6cd5\u8ddf\u8e2a Word \u6587\u4ef6\u7684\u6539\u52a8\u3002\u4f7f\u7528\u7248\u672c\u63a7\u5236\u7cfb\u7edf\uff0c\u8981\u4ee5\u7eaf\u6587\u672c\u65b9\u5f0f\u7f16\u5199\u6587\u4ef6\uff0c\u82e5\u6ca1\u6709\u5386\u53f2\u9057\u7559\u95ee\u9898\uff0c\u4f7f\u7528\u6807\u51c6\u7684 UTF-8 \u7f16\u7801\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"\u5e38\u7528\u547d\u4ee4",children:"\u5e38\u7528\u547d\u4ee4"}),"\n",(0,s.jsx)(i.h3,{id:"\u914d\u7f6e",children:"\u914d\u7f6e"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git config --list"})," //\u67e5\u770b\u5f53\u524d\u914d\u7f6e"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git config --global --edit"})," //\u7f16\u8f91\u5168\u5c40\u914d\u7f6e"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git config --global alias.st status"}),"\u8bbe\u7f6e\u522b\u540d"]}),"\n",(0,s.jsx)(i.h3,{id:"\u4e00\u4e9b\u57fa\u672c\u64cd\u4f5c",children:"\u4e00\u4e9b\u57fa\u672c\u64cd\u4f5c"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git init"})," \u521d\u59cb\u5316\u4ed3\u5e93"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git add xx.txt"})," \u6dfb\u52a0\u5de5\u4f5c\u533a\u7684\u6587\u4ef6\u5230\u6682\u5b58\u533a;"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git rm xx.txt"})," \u5220\u9664\u5de5\u4f5c\u533a\u6587\u4ef6"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git checkout -- file"})," \u4e22\u5f03\u5de5\u4f5c\u533a\u7684\u4fee\u6539\uff08\u7528\u7248\u672c\u5e93\u7684\u4fee\u6539\u66ff\u6362\u5de5\u4f5c\u533a\u7248\u672c\uff09"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:'git commit -m "add a file"'})," \u63d0\u4ea4\u4fee\u6539\u5230\u672c\u5730\u7248\u672c\u5e93;",(0,s.jsx)(i.code,{children:'git commit -a -m"xxxx"'}),"\u6dfb\u52a0\u5e76\u63d0\u4ea4"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git status"})," \u638c\u63e1\u5de5\u4f5c\u533a\u72b6\u6001"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git diff xx.txt"})," Show changes between commits, commit and working tree, etc"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u4e00\u822c\u662f\u628a\u6587\u4ef6\u6682\u5b58\u5728\u7f13\u51b2\u533a\u524d\u67e5\u770b\u5728\u5de5\u4f5c\u533a\u505a\u4e86\u54ea\u4e9b\u4fee\u6539"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git log (--online/--graph)"})," \u67e5\u770b\u63d0\u4ea4\u65e5\u5fd7\uff1b",(0,s.jsx)(i.code,{children:"git relog"}),"\u67e5\u770b\u6240\u6709\u7684\u547d\u4ee4\u8bb0\u5f55"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git reset --hard <commit\u2014id>"})," \u56de\u9000\u5230\u67d0\u4e2a\u7248\u672c\u3002\u4e0a\u4e00\u4e2a\u7248\u672c",":head","^"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git reset"})," \u65e2\u53ef\u4ee5\u56de\u9000\u7248\u672c\uff0c\u4e5f\u53ef\u4ee5\u628a\u6682\u5b58\u533a\u7684\u4fee\u6539\u56de\u9000\u5230\u5de5\u4f5c\u533a"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git remote add origin git@github.com:brightzoe/learngit.git"}),"\u672c\u5730\u4ed3\u5e93\u5173\u8054\u8fdc\u7a0b\u5e93"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git remote set-url origin URL"})," \u4fee\u6539\u8fdc\u7a0b\u5730\u5740"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git push (-u) origin master"}),"\u672c\u5730\u5e93\u63a8\u9001\u5230\u8fdc\u7a0b\uff0c\u628a\u672c\u5730\u7684 master \u5206\u652f\u548c\u8fdc\u7a0b\u7684 master \u5206\u652f\u5173\u8054\uff0c\u53ef\u7b80\u5316\u4e3a git push"]}),"\n",(0,s.jsx)(i.h3,{id:"\u5206\u652f",children:"\u5206\u652f"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git branch"})," \u67e5\u770b\u5206\u652f"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git branch xx"}),"\u521b\u5efa\u5206\u652f"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git checkout/switch <name>"}),"\u5207\u6362\u5206\u652f"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git checkout -b <name>"})," or ",(0,s.jsx)(i.code,{children:"git switch -c <name> "}),"\u521b\u5efa\u5e76\u6539\u5207\u6362\u5206\u652f"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git checkout -b <branchName> <remoteBranchName>"})," \u62c9\u8fdc\u7a0b\u4e00\u4e2a\u65b0\u5206\u652f\u4e0b\u6765\uff08\u672c\u5730\u521b\u5efa\u65b0\u5206\u652f\uff0c\u5e76\u7ed9\u4ed6\u8bbe\u5b9a\u8fdc\u7a0b\u5206\u652f\uff09"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git branch -d <name>"}),"\u5220\u9664\u5206\u652f;\u5f3a\u5236\u5220\u9664\u628a d \u6539\u6210 D"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git branch --set-upstream-to=origin/branchName branchName "})," \u5efa\u7acb\u672c\u5730\u5206\u652f\u548c\u8fdc\u7a0b\u5206\u652f\u7684\u5173\u8054"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git merge <name>"})," \u5408\u5e76\u67d0\u5206\u652f\u5230\u5f53\u524d\u5206\u652f"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u901a\u5e38\uff0c\u5408\u5e76\u5206\u652f\u65f6\uff0c\u5982\u679c\u53ef\u80fd\uff0cGit \u4f1a\u7528 Fast forward \u6a21\u5f0f\uff0c\u4f46\u8fd9\u79cd\u6a21\u5f0f\u4e0b\uff0c\u5220\u9664\u5206\u652f\u540e\uff0c\u4f1a\u4e22\u6389\u5206\u652f\u4fe1\u606f\u3002\u5982\u679c\u8981\u5f3a\u5236\u7981\u7528 Fast forward \u6a21\u5f0f\uff0cGit \u5c31\u4f1a\u5728 merge \u65f6\u751f\u6210\u4e00\u4e2a\u65b0\u7684 commit\uff0c\u8fd9\u6837\uff0c\u4ece\u5206\u652f\u5386\u53f2\u4e0a\u5c31\u53ef\u4ee5\u770b\u51fa\u5206\u652f\u4fe1\u606f\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:'git merge --no-ff -m "xxxx" <name>'})," \u7981\u7528 FF \u7684\u5408\u5e76\u5206\u652f"]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://cdn.jsdelivr.net/gh/brightzoe/img/20191229195951.png",alt:"\u5206\u652f\u7b56\u7565 \u6765\u6e90\u5ed6\u96ea\u5cf0\u7684\u535a\u5ba2"})}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git pull"})," \u6293\u53d6\u8fdc\u7a0b\u5206\u652f\u7684\u65b0\u63d0\u4ea4"]}),"\n",(0,s.jsx)(i.h3,{id:"\u6807\u7b7e",children:"\u6807\u7b7e"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git tag <name>"}),"\u6253\u6807\u7b7e\uff0c\u9ed8\u8ba4\u662f\u6253\u5728\u6700\u65b0\u63d0\u4ea4\u7684 commit \u4e0a\u3002",(0,s.jsx)(i.code,{children:"git tag -d <name>"}),"\u5220\u9664\u6807\u7b7e"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git tag v0.9 f52c633"})," \u7ed9\u5386\u53f2 commit \u6253\u6807\u7b7e"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:'git tag -a <tagname> -m "xxxx"'}),"\u53ef\u4ee5\u6307\u5b9a\u6807\u7b7e\u4fe1\u606f"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git show <tagname>"}),"\u67e5\u770b\u6807\u7b7e\u4fe1\u606f"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u521b\u5efa\u7684\u6807\u7b7e\u90fd\u53ea\u5b58\u50a8\u5728\u672c\u5730\uff0c\u4e0d\u4f1a\u81ea\u52a8\u63a8\u9001\u5230\u8fdc\u7a0b\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git push origin <tagname>"})," \u63a8\u52a8\u6807\u7b7e\u5230\u8fdc\u7a0b ",(0,s.jsx)(i.code,{children:"git push origin --tags"}),"\u63a8\u52a8\u6240\u6709\u6807\u7b7e\u5230\u8fdc\u7a0b"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git push origin :refs/tags/<tagname>"})," \u5148\u5220\u9664\u672c\u5730\u6807\u7b7e\u540e\uff0c\u6b64\u547d\u4ee4\u5220\u9664\u8fdc\u7a0b\u6807\u7b7e"]}),"\n",(0,s.jsx)(i.h2,{id:"\u6ce8\u610f\u4e8b\u9879",children:"\u6ce8\u610f\u4e8b\u9879"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"git push \u7684\u65f6\u5019\u6709\u65f6\u5ffd\u7565\u4e00\u4e9b\u6587\u4ef6\u5939,\u6ce8\u610f\u6709\u6ca1\u6709\u4f20\u4e0a\u53bb\u3002\u6709\u65f6\u5ffd\u7565\u7684\u6587\u4ef6\u4e5f\u4f1a\u610f\u5916\u7684\u52a0\u5165\u7248\u672c\u63a7\u5236\u91cc\u9762,\u90fd\u8981\u6ce8\u610f\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"Windows/Mac \u7684 git \u6587\u4ef6\u540d\u5927\u5c0f\u5199\u4e0d\u654f\u611f\u3002"}),"\n",(0,s.jsx)(i.p,{children:"Linux \u64cd\u4f5c\u7cfb\u7edf\u6587\u4ef6\u7684\u5927\u5c0f\u5199\u5374\u662f\u654f\u611f\u7684\uff0c\u4e0d\u540c\u5927\u5c0f\u5199\u610f\u5473\u7740\u4e0d\u540c\u7684\u8def\u5f84\u3002Git \u662f\u5927\u5c0f\u5199\u9ed8\u8ba4\u662f\u4e0d\u654f\u611f\u7684\u3002"}),"\n",(0,s.jsxs)(i.admonition,{type:"caution",children:[(0,s.jsx)(i.p,{children:"\u5728\u8fd9\u91cc\u8e29\u4e86\u4e2a\u5751\u3002"}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u95ee\u9898\u63cf\u8ff0\uff1a"}),"\n",(0,s.jsx)(i.p,{children:"\u6700\u8fd1\u4e3a\u4e86\u9879\u76ee\u6587\u4ef6\u547d\u540d\u89c4\u8303\uff0c\u628a\u535a\u5ba2\u91cc\u9762\u7684\u6587\u4ef6\u5939\u540d\uff0c\u5168\u90e8\u6539\u4e3a\u4e86\u4e2d\u5212\u7ebf\u8fde\u63a5\u3002\u5176\u4e2d\u6d89\u53ca\u5230\u90e8\u5206\uff0c\u539f\u6765\u4e3a\u5927\u9a7c\u5cf0\u547d\u540d\uff0c\u6539\u4e3a\u4e86\u5c0f\u5199\uff0c\u6bd4\u5982\u6587\u4ef6\u5939\u540d\u7531 Tools \u6539\u4e3a\u4e86 tools\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u672c\u5730\u542f\u52a8\u9879\u76ee\uff0c\u5728 tools \u4e0b\u7684\u76ee\u5f55\u6b63\u5e38\uff0c\u800c\u7ebf\u4e0a\u901a\u8fc7 github actions \u6253\u5305\u90e8\u7f72\u7684\u7f51\u7ad9\uff0ctools \u4e0b\u7684\u6ca1\u6709\u6b63\u5e38\u751f\u6210\u76ee\u5f55\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u70b9\u5230\u7ebf\u4e0a\u7684 repo \u624d\u53d1\u73b0\uff0c\u7ebf\u4e0a\u7684\u6587\u4ef6\u5939\u540d\u5e76\u6ca1\u6709\u4fee\u6539\uff0c\u53ea\u6709\u672c\u5730\u7684\u6587\u4ef6\u5939\u540d\u79f0\u4fee\u6539\u4e86\uff0c\u800c\u4e14 git status \u4e5f\u6ca1\u6709\u8bfb\u53d6\u51fa\u4e0d\u4e00\u81f4 \ud83d\ude2e\u3002\u5bfc\u81f4\u7ebf\u4e0a\u5e76\u6ca1\u6709\u627e\u5230\u5c0f\u5199\u7684 tools \u6587\u4ef6\uff0c\u6ca1\u6709\u751f\u6210\u76ee\u5f55.."}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsxs)(i.p,{children:["\u5c1d\u8bd5\u89e3\u51b3\uff1a\u6309\u7167\u7f51\u4e0a\u7684\u65b9\u6cd5\uff0c\u8bbe\u7f6e\u4e86 ignorecase false\uff0c ",(0,s.jsx)(i.code,{children:"git config core.ignorecase false"}),"\uff0c\u4ee5\u4e3a\u89e3\u51b3\u4e86\u95ee\u9898\uff0c\u6211\u5c31\u6109\u5feb\u7684\u63d0\u4ea4\u4e86\uff0c\u7136\u800c\u63d0\u4ea4\u4e4b\u540e\uff0crepo \u4e2d\u65e2\u6709\u5927\u5199\u7684\u6587\u4ef6\u5939\uff0c\u4e5f\u6709\u5c0f\u5199\u7684\u6587\u4ef6\u5939...\ud83d\ude25 \u7136\u540e\u518d\u8fdb\u884c\u91cd\u65b0\u62c9\u53d6\uff0c\u672c\u5730\u4ecd\u7136\u53ea\u6709\u4e00\u4e2a\u6587\u4ef6\uff0c\u7ebf\u4e0a\u5c31\u662f\u4e24\u4efd\uff0c\u65e0\u6cd5\u4fdd\u6301\u4e00\u81f4\u4e86..."]}),"\n"]}),"\n"]}),(0,s.jsx)(i.p,{children:"\u53d1\u73b0\u8fd9\u4e2a\u5751\u597d\u591a\u4eba\u90fd\u8e29\u8fc7\uff0c\u5e94\u8be5\u5148\u591a\u770b\u51e0\u7bc7\u6587\u7ae0\u518d\u8fdb\u884c\u64cd\u4f5c\u3002"}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["\n",(0,s.jsx)(i.p,{children:"\u89e3\u51b3\u95ee\u9898\uff1a"}),"\n",(0,s.jsx)(i.p,{children:"\u4f7f\u7528 git mv [old name] [new name]\u8fdb\u884c\u91cd\u547d\u540d\u3002(\u6587\u4ef6\u540d)"}),"\n",(0,s.jsx)(i.p,{children:"If nothing worked use git rm filename to delete file from disk and add it back."}),"\n"]}),"\n"]}),(0,s.jsx)(i.p,{children:"\u53c2\u8003\uff1a"}),(0,s.jsxs)(i.ol,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://blog.csdn.net/weixin_43968429/article/details/109783446",children:"\u89e3\u51b3 Git \u548c Windows \u7684\u5927\u5c0f\u5199\u4e0d\u654f\u611f\u4ea7\u751f\u7684\u95ee\u9898_weixin_43968429 \u7684\u535a\u5ba2-CSDN \u535a\u5ba2_git windows \u5927\u5c0f\u5199"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://shanyue.tech/bug/mac-git-ignorecase.html#%E9%A2%84%E9%98%B2%E6%96%B9%E6%A1%88",children:"Mac \u4e2d git \u5927\u5c0f\u5199\u95ee\u9898\u7684\u89e3\u51b3\u65b9\u6848 | \u5c71\u6708\u884c"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://stackoverflow.com/questions/17683458/how-do-i-commit-case-sensitive-only-filename-changes-in-git",children:"How do I commit case-sensitive only filename changes in Git? - Stack Overflow"})}),"\n"]})]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h2,{id:"git-hooks",children:"git hooks"}),"\n",(0,s.jsx)(i.p,{children:"\u63a7\u5236 git \u6d41\u7a0b\uff0c\u5206\u4e3a\u5ba2\u6237\u7aef\u94a9\u5b50\u548c\u670d\u52a1\u7aef\u94a9\u5b50\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u5e38\u7528 hooks:"}),"\n",(0,s.jsx)(i.p,{children:"pre-commit"}),"\n",(0,s.jsx)(i.p,{children:"commit-msg"}),"\n",(0,s.jsx)(i.p,{children:"\u76f8\u5173\u5de5\u5177\uff1ahusky"}),"\n",(0,s.jsx)(i.h2,{id:"\u4e00\u4e9b\u95ee\u9898",children:"\u4e00\u4e9b\u95ee\u9898"}),"\n",(0,s.jsx)(i.h3,{id:"ssh-\u65b9\u5f0f\u4e0e-https-\u65b9\u5f0f\u7684\u4e0d\u540c",children:"ssh \u65b9\u5f0f\u4e0e https \u65b9\u5f0f\u7684\u4e0d\u540c"}),"\n",(0,s.jsxs)(i.p,{children:["\u533a\u522b\u5728\u4e8e\u5bf9\u5185\u5bb9\u7684\u5b89\u5168\u7ba1\u7406\u3002\u4f7f\u7528 https \u65b9\u5f0f\uff0c\u6bcf\u6b21\u9700\u8981\u9a8c\u8bc1\u7528\u6237\u8eab\u4efd\u4fe1\u606f\uff0c\u6dfb\u52a0 ssh-key \u540e\u7528 ssh \u65b9\u5f0f\u5219\u4fe1\u4efb\u5f53\u524d\u7528\u6237\u4e0d\u7528\u518d\u8f93\u7528\u6237\u540d\u548c\u5bc6\u7801\u3002\u6ca1\u6709\u8bbe\u7f6e ssh \u524d\u9ed8\u8ba4\u7528 https \u65b9\u5f0f\uff0c\u8bbe\u7f6e\u4e86 ssh \u540e\u53ef\u4ee5\u66f4\u6539\u4e3a remote \u5730\u5740(",(0,s.jsx)(i.code,{children:"git remote set-url origin [url]"}),")\uff0c\u4f7f\u7528 ssh \u65b9\u5f0f\u8fde\u63a5,\u901a\u8fc7 ssh \u534f\u8bae\u7684\u4f20\u8f93\u901f\u5ea6\u6700\u5feb\u3002\u5177\u4f53\u6dfb\u52a0 ssh \u7684\u65b9\u5f0f\u4e0d\u518d\u8d58\u8ff0\u3002"]}),"\n",(0,s.jsx)(i.h3,{id:"\u5ffd\u7565\u7279\u6b8a\u6587\u4ef6\u6bd4\u5982\u660e\u6587\u5bc6\u7801",children:"\u5ffd\u7565\u7279\u6b8a\u6587\u4ef6\u6bd4\u5982\u660e\u6587\u5bc6\u7801"}),"\n",(0,s.jsxs)(i.p,{children:[".gitignore \u6587\u4ef6 ",(0,s.jsx)(i.a,{href:"https://github.com/github/gitignore",children:"Templates in GitHub"})]}),"\n",(0,s.jsx)(i.h3,{id:"fork-\u540e\u4fee\u6539\u5982\u4f55\u540c\u6b65\u6e90\u7684\u66f4\u65b0",children:"fork \u540e\u4fee\u6539\uff0c\u5982\u4f55\u540c\u6b65\u6e90\u7684\u66f4\u65b0"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git remote add upstream <url>"}),"\u914d\u7f6e\u4e0a\u6e38\u4ed3\u5e93"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git fetch upstream"}),"\u6293\u53d6\u4e0a\u6e38\u4ed3\u5e93\uff08\u6240\u6709\u5206\u652f\uff09\u7684\u66f4\u65b0"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git rebase upstream/master"}),"\u5408\u5e76"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git push (origin master)"}),"\u63a8\u9001\u5230\u8fdc\u7a0b\u4ed3\u5e93"]}),"\n",(0,s.jsx)(i.h3,{id:"\u5982\u4f55\u4f7f\u7528\u8fdc\u7aef\u4ee3\u7801\u76f4\u63a5\u8986\u76d6\u672c\u5730\u4e22\u5f03\u672c\u5730\u7684\u63d0\u4ea4",children:"\u5982\u4f55\u4f7f\u7528\u8fdc\u7aef\u4ee3\u7801\u76f4\u63a5\u8986\u76d6\u672c\u5730\uff0c\u4e22\u5f03\u672c\u5730\u7684\u63d0\u4ea4"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git fetch --all"})," \u4ece\u8fdc\u7a0b\u4e0b\u8f7d\u6700\u65b0\u7684\uff0c\u800c\u4e0d\u5c1d\u8bd5\u5408\u5e76\u6216 rebase \u4efb\u4f55\u4e1c\u897f\u3002"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git reset --hard origin/<branch_name>"})," \u5c06\u5206\u652f\u91cd\u7f6e\u4e3a\u60a8\u521a\u521a\u83b7\u53d6\u7684\u5185\u5bb9\u3002",(0,s.jsx)(i.code,{children:"--hard"})," \u9009\u9879\u66f4\u6539\u5de5\u4f5c\u6811\u4e2d\u7684\u6240\u6709\u6587\u4ef6\u4ee5\u5339\u914d ",(0,s.jsx)(i.code,{children:"origin/branch"})," \u4e2d\u7684\u6587\u4ef6\u3002"]}),"\n",(0,s.jsxs)(i.h3,{id:"git-rebase-\u4e0e-git-merge-\u7684\u533a\u522b",children:[(0,s.jsx)(i.code,{children:"git rebase"})," \u4e0e ",(0,s.jsx)(i.code,{children:"git merge"})," \u7684\u533a\u522b"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git rebase"})," \u7684 log \u8bb0\u5f55\u66f4\u6e05\u6670\uff0c",(0,s.jsx)(i.code,{children:"git merge"})," \u4f1a\u751f\u6210\u4e00\u6761\u65b0\u7684 merge commit ",(0,s.jsx)(i.img,{src:"https://i.loli.net/2020/09/06/lGR3ByZYIw8Qfnt.png",alt:"git rebase\u4e0egit merge from stackoverflow"})]}),"\n",(0,s.jsx)(i.h3,{id:"\u63d0\u4ea4\u4fe1\u606f\u5199\u4e86\u51e0\u4e2a\u9519\u522b\u5b57\u8be5\u5982\u4f55\u6539\u4e4b\u524d\u7684\u63d0\u4ea4\u8bb0\u5f55",children:"\u63d0\u4ea4\u4fe1\u606f\u5199\u4e86\u51e0\u4e2a\u9519\u522b\u5b57\uff0c\u8be5\u5982\u4f55\u6539\u4e4b\u524d\u7684\u63d0\u4ea4\u8bb0\u5f55"}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git rebase -i 32e0q12f "})," git rebase \u5230\u9700\u8981\u4fee\u6539 message \u7684\u90a3\u4e2a commit \u7684\u524d 1 \u4e2a commit"]}),"\n",(0,s.jsx)(i.p,{children:"\u5c06\u8981\u4fee\u6539\u7684 commit message \u7684 \u2018pick\u2019\u6539\u4e3a \u2018reword\u2019 \uff0c\u4fdd\u5b58\u3002"}),"\n",(0,s.jsx)(i.p,{children:"\u63a5\u7740\u4f1a\u5f39\u51fa\u4e4b\u524d reword \u7684 commit message \u7f16\u8f91\u6846 \uff0c\u4fee\u6539 commit message \u5185\u5bb9\uff0c\u4fdd\u5b58\u3002"}),"\n",(0,s.jsxs)(i.p,{children:["\u8fd9\u6837\u5c31\u5b8c\u6210\u4e86\u4fee\u6539\uff0c\u7136\u540e\u5f3a\u5236 push \u5373\u53ef\u3002 ",(0,s.jsx)(i.code,{children:"git push --force"})]}),"\n",(0,s.jsxs)(i.h3,{id:"git-pull-\u4e0e-git-fetch-\u7684\u533a\u522b",children:[(0,s.jsx)(i.code,{children:"git pull"})," \u4e0e ",(0,s.jsx)(i.code,{children:"git fetch"})," \u7684\u533a\u522b"]}),"\n",(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"git pull"})," = ",(0,s.jsx)(i.code,{children:"git fetch"})," + ",(0,s.jsx)(i.code,{children:"git merge"})]}),"\n",(0,s.jsx)(i.p,{children:(0,s.jsx)(i.img,{src:"https://i.loli.net/2020/09/06/iO3DlgQRjBXCrM2.png",alt:"git\u6d41\u7a0b\u56fe"})}),"\n",(0,s.jsx)(i.h3,{id:"\u5982\u4f55-pull-request",children:"\u5982\u4f55 Pull Request"}),"\n",(0,s.jsx)(i.p,{children:"\u5728\u54ea\u4e9b\u60c5\u51b5\u4e0b\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 master branch \u6765\u63d0\u4ea4 Pull Request:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u4f60\u53ea\u60f3\u4e3a\u4e3b\u9879\u76ee\u8d21\u732e\u67d0\u4e00\u5904\u4ee3\u7801\uff0c\u8d21\u732e\u5b8c\u81ea\u5df1\u7684 repo \u5c31\u53ef\u4ee5\u6254\u7684\u90a3\u79cd\u3002"}),"\n",(0,s.jsx)(i.li,{children:"\u4f60\u6253\u7b97\u4e3a\u4e3b\u9879\u76ee\u957f\u671f\u8d21\u732e\u4ee3\u7801\uff0c\u800c\u4e14\u5e0c\u671b\u8ffd\u968f\u539f\u9879\u76ee\u7684\u4e3b\u7ebf\u5f00\u53d1\uff0c\u4e0d\u4fdd\u7559\u81ea\u5df1\u7684\u7279\u6027\u3002"}),"\n",(0,s.jsx)(i.li,{children:"\u4f60\u6253\u7b97\u4e3a\u4e3b\u9879\u76ee\u957f\u671f\u8d21\u732e\u4ee3\u7801\uff0c\u9ed8\u8ba4 master branch \u8ffd\u968f\u539f\u9879\u76ee\u4e3b\u7ebf\uff0c\u628a\u81ea\u5df1\u7684\u7279\u6027\u653e\u5230\u522b\u7684 branch \u4e2d\u3002"}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u5728\u54ea\u79cd\u60c5\u51b5\u4e0b\u5e94\u8be5\u4f7f\u7528 feature branch \u6765\u63d0\u4ea4 Pull Request:"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"\u60f3\u7528 master branch \u5b8c\u5168\u6765\u505a\u81ea\u5df1\u7684\u5f00\u53d1\u3002\u5728\u8fd9\u79cd\u60c5\u5f62\u4e0b:\u4f1a\u4ece\u4e0a\u6e38\u5e93\u5408\u5e76\u66f4\u65b0\uff0c\u4f46\u662f\u8fd9\u4e9b merge \u672c\u8eab\u7684 commits \u663e\u7136\u4e0d\u53ef\u80fd\u4f5c\u4e3a\u8fd4\u8fd8\u5230\u4e0a\u6e38\u5e93\u7684 Pull Request \u7684\u4e00\u90e8\u5206\u3002"}),"\n",(0,s.jsx)(i.li,{children:"\u5b58\u5728\u81ea\u5df1\u7684\uff08\u672a\u88ab merge \u6216\u8005\u4e0d\u60f3\u88ab merge \u5230\u4e0a\u6e38\u5e93\u7684\uff09commits\u3002"}),"\n"]}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"\u9274\u4e8e Git \u7684\u5206\u5e03\u5f0f\u5f00\u53d1\u54f2\u5b66\uff0c\u6bcf\u4e00\u4e2a\u5e93\u5747\u53ef\u4ee5\u770b\u4f5c\u662f\u4e00\u4e2a\u72ec\u7acb\u7684\u9879\u76ee\uff0c\u663e\u7136\u662f\u540e\u4e00\u79cd\uff08\u4e3a\u6bcf\u4e00\u4e2a\u65b0\u7279\u6027\u5efa\u7acb\u4e00\u4e2a\u4e13\u95e8\u7684\u4e3b\u9898 branch \u6765\u5411\u4e3b\u9879\u76ee\u63a8\u9001 Pull Request\uff09\u7684\u8d21\u732e\u65b9\u5f0f\u66f4\u53ef\u53d6\u3002"}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"pr-\u4e0e-mr",children:"PR \u4e0e MR"}),"\n",(0,s.jsx)(i.p,{children:"Pull Request \u4e0e Merge Request \u6709\u533a\u522b\u5417\uff1f\u672c\u8d28\u6ca1\u5565\u533a\u522b\uff0c\u90fd\u662f\u8bf7\u6c42\u522b\u4eba\u5408\u5e76\u4f60\u7684\u4ee3\u7801\u3002"}),"\n",(0,s.jsx)(i.h4,{id:"\u4e00\u79cd\u7406\u89e3",children:"\u4e00\u79cd\u7406\u89e3"}),"\n",(0,s.jsx)(i.p,{children:"PR \u6307\u7684\u662f\u5728\u4e0d\u540c\u4ed3\u5e93\u4e4b\u95f4\uff0c\u8bf7\u6c42\u5176\u4ed6\u4eba\u5408\u5e76\u4f60\u7684\u4ee3\u7801\u7684\u884c\u4e3a\u3002\u6bd4\u5982\u5728 GitHub \u4e0a,\u5411\u5f00\u6e90\u4ed3\u5e93\u8d21\u732e\u4ee3\u7801\uff0c\u9700\u8981\u81ea\u5df1\u5148 fork \u4ed3\u5e93\uff0c\u63d0\u4ea4\u4e86\u76f8\u5e94\u7684 commit \uff0c\u7136\u540e\u63d0\u4ea4\u5408\u5e76\u8bf7\u6c42\u5230\u88ab fork \u7684\u4ed3\u5e93\uff0c\u5982\u4e0a\u9762\u201c\u5982\u4f55 Pull Request\u201d\u6240\u8ff0\u3002"}),"\n",(0,s.jsx)(i.p,{children:"MR \u6307\u7684\u662f\u5728\u76f8\u540c\u4ed3\u5e93\uff0c\u4e0d\u540c\u5206\u652f\u4e4b\u95f4\uff0c\u8bf7\u6c42\u5c06\u5f53\u524d\u5206\u652f\u7684\u4ee3\u7801\u5408\u5e76\u5230\u516c\u5171\u5206\u652f\u7684\u884c\u4e3a\u3002\u4f8b\u5982\u5728\u516c\u53f8\u4e2d\uff0c\u548c\u5176\u4ed6\u540c\u4e8b\u5408\u4f5c\u5f00\u53d1\u540c\u4e00\u9879\u76ee\uff0c\u5927\u5bb6\u5728\u540c\u4e00\u4ed3\u5e93\u7684\u4e0d\u540c\u5206\u652f\u8fdb\u884c\u5f00\u53d1\uff0c\u5728\u5f00\u53d1\u5b8c\u4e4b\u540e\uff0c\u9700\u8981\u63d0\u4ea4 MR \u5230\u516c\u5171\u5206\u652f\u3002"}),"\n",(0,s.jsxs)(i.blockquote,{children:["\n",(0,s.jsx)(i.p,{children:"Merge or pull requests are created in a git management application and ask an assigned person to merge two branches. Tools such as GitHub and Bitbucket choose the name pull request since the first manual action would be to pull the feature branch. Tools such as GitLab and Gitorious choose the name merge request since that is the final action that is requested of the assignee."}),"\n"]}),"\n",(0,s.jsx)(i.p,{children:"\u4e0a\u9762\u662f GitLab \u5b98\u65b9\u7684\u8bf4\u660e\uff0cPR \u4e0e MR \u53ea\u662f\u540c\u4e00\u79cd\u884c\u4e3a\u7684\u4e0d\u540c\u53eb\u6cd5\u3002\u5728\u5176\u4ed6\u4eba\u5408\u5e76\u4f60\u7684\u4ee3\u7801\u65f6\u9700\u8981\u6267\u884c\u7684\u547d\u4ee4\uff1a"}),"\n",(0,s.jsx)(i.pre,{children:(0,s.jsx)(i.code,{className:"language-git",children:"git pull\n\ngit merge\n"})}),"\n",(0,s.jsx)(i.p,{children:"\u53ea\u662f\u5728\u8fd9\u4e24\u4e2a\u547d\u4ee4\u4e2d\u53d6\u4e86\u4e0d\u540c\u7684\u5355\u8bcd\u6765\u547d\u540d\u3002PR \u4e0e MR \u90fd\u53ef\u4ee5\u76f4\u63a5\u7406\u89e3\u4e3a\u8bf7\u6c42\u5176\u4ed6\u4eba\u5408\u5e76\u4f60\u7684\u4ee3\u7801\u7684\u884c\u4e3a\uff0c\u5305\u542b\u540c\u4e00\u4ed3\u5e93\u7684\u4e0d\u540c\u5206\u652f\u4e4b\u95f4\u4ee5\u53ca\u4e0d\u540c\u4ed3\u5e93\u7684\u4e4b\u95f4\u7684\u64cd\u4f5c\uff0c\u65e0\u9700\u7ea0\u7ed3\u4ed6\u4eec\u7684\u533a\u522b\u3002"}),"\n",(0,s.jsx)(i.h2,{id:"reference",children:"Reference"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://gitee.com/liaoxuefeng/learn-java/raw/master/teach/git-cheatsheet.pdf",children:"Git Cheat Sheet"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://git-scm.com/",children:"Git \u5b98\u7f51"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://learngitbranching.js.org/",children:"Learn Git Branching"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://www.liaoxuefeng.com/wiki/896043488029600",children:"Git \u6559\u7a0b\uff0c\u5ed6\u96ea\u5cf0\u7684\u5b98\u65b9\u7f51\u7ad9"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://help.github.com/cn",children:"GitHub \u5b98\u65b9\u6587\u6863"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"http://www.qtcn.org/bbs/simple/?t53628.html",children:"\u5982\u4f55\u53c2\u4e0e\u5f00\u6e90\u9879\u76ee\u5e76\u8d21\u732e\u4ee3\u7801"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.a,{href:"https://blog.csdn.net/azl397985856/article/details/106088794",children:"Pull Request \u4e0e Merge Request \u7684\u533a\u522b_azl397985856 \u7684\u4e13\u680f-CSDN \u535a\u5ba2"})}),"\n"]})]})}function a(e={}){const{wrapper:i}={...(0,t.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},8672:(e,i,n)=>{n.d(i,{Z:()=>c,a:()=>r});var s=n(959);const t={},l=s.createContext(t);function r(e){const i=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function c(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(l.Provider,{value:i},e.children)}}}]);