"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[4013],{5609:(e,t,s)=>{s.d(t,{Z:()=>v});var a=s(959),i=s(5924),r=s(2971),l=s(8081),n=s(8819),c=s(5158),o=s(8903),d=s(9311);function m(e){const{pathname:t}=(0,o.TH)();return(0,a.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,d.Mg)(e.permalink,t))}(e,t)))),[e,t])}const g={sidebar:"sidebar_Awxo",sidebarItemTitle:"sidebarItemTitle_j12O",sidebarItemList:"sidebarItemList_LaGY",sidebarItem:"sidebarItem_hmJZ",sidebarItemLink:"sidebarItemLink_oc8C",sidebarItemLinkActive:"sidebarItemLinkActive_sx0K"};var b=s(1527);function h(e){let{sidebar:t}=e;const s=m(t.items);return(0,b.jsx)("aside",{className:"col col--3",children:(0,b.jsxs)("nav",{className:(0,i.Z)(g.sidebar,"thin-scrollbar"),"aria-label":(0,c.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,b.jsx)("div",{className:(0,i.Z)(g.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,b.jsx)("ul",{className:(0,i.Z)(g.sidebarItemList,"clean-list"),children:s.map((e=>(0,b.jsx)("li",{className:g.sidebarItem,children:(0,b.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:g.sidebarItemLink,activeClassName:g.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var u=s(9684);function j(e){let{sidebar:t}=e;const s=m(t.items);return(0,b.jsx)("ul",{className:"menu__list",children:s.map((e=>(0,b.jsx)("li",{className:"menu__list-item",children:(0,b.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function p(e){return(0,b.jsx)(u.Zo,{component:j,props:e})}function x(e){let{sidebar:t}=e;const s=(0,l.i)();return t?.items.length?"mobile"===s?(0,b.jsx)(p,{sidebar:t}):(0,b.jsx)(h,{sidebar:t}):null}function v(e){const{sidebar:t,toc:s,children:a,...l}=e,n=t&&t.items.length>0;return(0,b.jsx)(r.Z,{...l,children:(0,b.jsx)("div",{className:"container margin-vert--lg",children:(0,b.jsxs)("div",{className:"row",children:[(0,b.jsx)(x,{sidebar:t}),(0,b.jsx)("main",{className:(0,i.Z)("col",{"col--7":n,"col--9 col--offset-1":!n}),itemScope:!0,itemType:"https://schema.org/Blog",children:a}),s&&(0,b.jsx)("div",{className:"col col--2",children:s})]})})})}},1345:(e,t,s)=>{s.r(t),s.d(t,{default:()=>g});s(959);var a=s(5924),i=s(2555),r=s(7440),l=s(6479),n=s(5609),c=s(2831),o=s(8084),d=s(8925),m=s(1527);function g(e){let{tags:t,sidebar:s}=e;const g=(0,i.M)();return(0,m.jsxs)(r.FG,{className:(0,a.Z)(l.k.wrapper.blogPages,l.k.page.blogTagsListPage),children:[(0,m.jsx)(r.d,{title:g}),(0,m.jsx)(o.Z,{tag:"blog_tags_list"}),(0,m.jsxs)(n.Z,{sidebar:s,children:[(0,m.jsx)(d.Z,{as:"h1",children:g}),(0,m.jsx)(c.Z,{tags:t})]})]})}},407:(e,t,s)=>{s.d(t,{Z:()=>n});s(959);var a=s(5924),i=s(8819);const r={tag:"tag_IVE5",tagRegular:"tagRegular_FaMP",tagWithCount:"tagWithCount_I3da"};var l=s(1527);function n(e){let{permalink:t,label:s,count:n}=e;return(0,l.jsxs)(i.Z,{href:t,className:(0,a.Z)(r.tag,n?r.tagWithCount:r.tagRegular),children:[s,n&&(0,l.jsx)("span",{children:n})]})}},2831:(e,t,s)=>{s.d(t,{Z:()=>o});s(959);var a=s(2555),i=s(407),r=s(8925);const l={tag:"tag_MtET"};var n=s(1527);function c(e){let{letterEntry:t}=e;return(0,n.jsxs)("article",{children:[(0,n.jsx)(r.Z,{as:"h2",id:t.letter,children:t.letter}),(0,n.jsx)("ul",{className:"padding--none",children:t.tags.map((e=>(0,n.jsx)("li",{className:l.tag,children:(0,n.jsx)(i.Z,{...e})},e.permalink)))}),(0,n.jsx)("hr",{})]})}function o(e){let{tags:t}=e;const s=(0,a.P)(t);return(0,n.jsx)("section",{className:"margin-vert--lg",children:s.map((e=>(0,n.jsx)(c,{letterEntry:e},e.letter)))})}},2555:(e,t,s)=>{s.d(t,{M:()=>i,P:()=>r});var a=s(5158);const i=()=>(0,a.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const s=function(e){return e[0].toUpperCase()}(e.label);t[s]??=[],t[s].push(e)})),Object.entries(t).sort(((e,t)=>{let[s]=e,[a]=t;return s.localeCompare(a)})).map((e=>{let[t,s]=e;return{letter:t,tags:s.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);