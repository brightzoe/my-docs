"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[6103],{2506:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(3366),l=a(7294),n=a(6010),o=a(9327),i=a(3488),s=a(3699),m=a(7325),c="sidebar_re4s",u="sidebarItemTitle_pO2u",d="sidebarItemList_Yudw",g="sidebarItem__DBe",p="sidebarItemLink_mo7H",h="sidebarItemLinkActive_I1ZP";function b(e){var t=e.sidebar;return l.createElement("aside",{className:"col col--3"},l.createElement("nav",{className:(0,n.Z)(c,"thin-scrollbar"),"aria-label":(0,m.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(u,"margin-bottom--md")},t.title),l.createElement("ul",{className:(0,n.Z)(d,"clean-list")},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:g},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:p,activeClassName:h},e.title))})))))}var v=a(3086);function f(e){var t=e.sidebar;return l.createElement("ul",{className:"menu__list"},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:"menu__list-item"},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title))})))}function E(e){return l.createElement(v.Zo,{component:f,props:e})}function _(e){var t=e.sidebar,a=(0,i.i)();return null!=t&&t.items.length?"mobile"===a?l.createElement(E,{sidebar:t}):l.createElement(b,{sidebar:t}):null}var N=["sidebar","toc","children"];function Z(e){var t=e.sidebar,a=e.toc,i=e.children,s=(0,r.Z)(e,N),m=t&&t.items.length>0;return l.createElement(o.Z,s,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement(_,{sidebar:t}),l.createElement("main",{className:(0,n.Z)("col",{"col--7":m,"col--9 col--offset-1":!m}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&l.createElement("div",{className:"col col--2"},a))))}},6847:function(e,t,a){a.d(t,{Z:function(){return Z}});var r=a(7294),l=a(6010),n=a(7325),o=a(3699),i=a(9524),s=a(3777),m=a(3905),c=a(7839),u=a(8028),d=a(4597);function g(e){return e.href?r.createElement(o.Z,e):r.createElement(r.Fragment,null,e.children)}function p(e){var t=e.author,a=t.name,l=t.title,n=t.url,o=t.imageURL,i=t.email,s=n||i&&"mailto:"+i||void 0;return r.createElement("div",{className:"avatar margin-bottom--sm"},o&&r.createElement(g,{href:s,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:o,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(g,{href:s,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}var h="authorCol_sTYa",b="imageOnlyAuthorRow_vA2J",v="imageOnlyAuthorCol_kG3X";function f(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?b:"row")},t.map((function(e,t){var o;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?v:h),key:t},r.createElement(p,{author:Object.assign({},e,{imageURL:null!=(o=a.authorsImageUrls[t])?o:e.imageURL})}))})))}var E="blogPostTitle_Ikge",_="blogPostData_SAv4",N="blogPostDetailsFull_u0Nl";function Z(e){var t,a,g=(a=(0,s.c)().selectMessage,function(e){var t=Math.ceil(e);return a(t,(0,n.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),p=(0,i.C)().withBaseUrl,h=e.children,b=e.frontMatter,v=e.assets,Z=e.metadata,P=e.truncated,k=e.isBlogPostPage,I=void 0!==k&&k,w=Z.date,y=Z.formattedDate,T=Z.permalink,L=Z.tags,x=Z.readingTime,A=Z.title,F=Z.editUrl,M=Z.authors,R=null!=(t=v.image)?t:b.image,B=!I&&P,C=L.length>0,O=I?"h1":"h2";return r.createElement("article",{className:I?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(O,{className:E,itemProp:"headline"},I?A:r.createElement(o.Z,{itemProp:"url",to:T},A)),r.createElement("div",{className:(0,l.Z)(_,"margin-vert--md")},r.createElement("time",{dateTime:w,itemProp:"datePublished"},y),void 0!==x&&r.createElement(r.Fragment,null," \xb7 ",g(x))),r.createElement(f,{authors:M,assets:v})),R&&r.createElement("meta",{itemProp:"image",content:p(R,{absolute:!0})}),r.createElement("div",{id:I?m.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(c.Z,null,h)),(C||P)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",I&&N)},C&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":B})},r.createElement(d.Z,{tags:L})),I&&F&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(u.Z,{editUrl:F})),B&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":C})},r.createElement(o.Z,{to:Z.permalink,"aria-label":(0,n.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:A})},r.createElement("b",null,r.createElement(n.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},3777:function(e,t,a){a.d(t,{c:function(){return m}});var r=a(7294),l=a(9962),n=["zero","one","two","few","many","other"];function o(e){return n.filter((function(t){return e.includes(t)}))}var i={locale:"en",pluralForms:o(["one","other"]),select:function(e){return 1===e?"one":"other"}};function s(){var e=(0,l.Z)().i18n.currentLocale;return(0,r.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:o(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(r){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+r.message+"\n"),i}var t,a}),[e])}function m(){var e=s();return{selectMessage:function(t,a){return function(e,t,a){var r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+r.length+": "+e);var l=a.select(t),n=a.pluralForms.indexOf(l);return r[Math.min(n,r.length-1)]}(a,t,e)}}}},4414:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var r=a(7294),l=a(6010),n=a(5463),o=a(3702),i=a(2506),s=a(6847),m=a(7462),c=a(7325),u=a(3672);function d(e){var t=e.nextItem,a=e.prevItem;return r.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,c.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},a&&r.createElement(u.Z,(0,m.Z)({},a,{subLabel:r.createElement(c.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")})),t&&r.createElement(u.Z,(0,m.Z)({},t,{subLabel:r.createElement(c.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post"),isNext:!0})))}var g=a(7086),p=a(3944);function h(e){var t=e.metadata,a=t.title,l=(t.description,t.date,t.tags,t.permalink),n=l.replace(/^\//,"").replaceAll(/[\s\/]/gi,"-"),o=""==n?"main":n;return r.createElement(p.qw,{shortname:"brightzoe",config:{url:"https://brightzoe.top"+l,identifier:o,title:a}})}function b(e){var t,a=e.content,l=a.assets,o=a.metadata,i=o.title,s=o.description,m=o.date,c=o.tags,u=o.authors,d=o.frontMatter,g=d.keywords,p=null!=(t=l.image)?t:d.image;return r.createElement(n.d,{title:i,description:s,keywords:g,image:p},r.createElement("meta",{property:"og:type",content:"article"}),r.createElement("meta",{property:"article:published_time",content:m}),u.some((function(e){return e.url}))&&r.createElement("meta",{property:"article:author",content:u.map((function(e){return e.url})).filter(Boolean).join(",")}),c.length>0&&r.createElement("meta",{property:"article:tag",content:c.map((function(e){return e.label})).join(",")}))}function v(e){var t=e.content,a=e.sidebar,l=t.assets,n=t.metadata,o=n.nextItem,m=n.prevItem,c=n.frontMatter,u=c.hide_table_of_contents,p=c.toc_min_heading_level,b=c.toc_max_heading_level;return r.createElement(i.Z,{sidebar:a,toc:!u&&t.toc&&t.toc.length>0?r.createElement(g.Z,{toc:t.toc,minHeadingLevel:p,maxHeadingLevel:b}):void 0},r.createElement(s.Z,{frontMatter:c,assets:l,metadata:n,isBlogPostPage:!0},r.createElement(t,null)),(o||m)&&r.createElement(d,{nextItem:o,prevItem:m}),r.createElement(h,{metadata:n}))}function f(e){return r.createElement(n.FG,{className:(0,l.Z)(o.k.wrapper.blogPages,o.k.page.blogPostPage)},r.createElement(b,e),r.createElement(v,e))}}}]);