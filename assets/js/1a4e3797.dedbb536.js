"use strict";(self.webpackChunkbrightzoe_blog=self.webpackChunkbrightzoe_blog||[]).push([[7920],{6060:function(e,t,n){n.r(t),n.d(t,{default:function(){return z}});var a=n(5861),r=n(7757),c=n.n(r),u=n(7294),l=n(9962),o=n(1834),s=n(1514),i=n(3699),m=n(6775),h=n(6136);var f=function(){var e=(0,m.k6)(),t=(0,m.TH)(),n=(0,l.Z)().siteConfig.baseUrl;return{searchValue:h.default.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:function(n){var a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:function(e){return n+"search?q="+encodeURIComponent(e)}}},p=n(5202),d=n(6654),g=n(1523),_=n(7976),E=n(9395),v=n(4056),b=n(5901);function y(e,t){return e.replace(/\{\{\s*(\w+)\s*\}\}/g,(function(e,n){return Object.prototype.hasOwnProperty.call(t,n)?String(t[n]):e}))}var I="searchQueryInput_CFBF",S="searchResultItem_U687",w="searchResultItemPath_uIbk",k="searchResultItemSummary_oZHr";function C(e){var t=e.searchResult,n=t.document,a=t.type,r=t.page,c=t.tokens,l=t.metadata,o=0===a,s=2===a,m=(o?n.b:r.b).slice(),h=s?n.s:n.t;return o||m.push(r.t),u.createElement("article",{className:S},u.createElement("h2",null,u.createElement(i.Z,{to:n.u+(n.h||""),dangerouslySetInnerHTML:{__html:s?(0,g.C)(h,c):(0,_.o)(h,(0,E.m)(l,"t"),c,100)}})),m.length>0&&u.createElement("p",{className:w},m.join(" \u203a ")),s&&u.createElement("p",{className:k,dangerouslySetInnerHTML:{__html:(0,_.o)(n.t,(0,E.m)(l,"t"),c,100)}}))}var z=function(){var e=(0,l.Z)().siteConfig.baseUrl,t=f(),n=t.searchValue,r=t.updateSearchPath,i=(0,u.useState)(n),m=i[0],h=i[1],g=(0,u.useState)(),_=g[0],E=g[1],S=(0,u.useState)(),w=S[0],k=S[1],z=(0,u.useMemo)((function(){return m?y(b.Iz.search_results_for,{keyword:m}):b.Iz.search_the_documentation}),[m]);(0,u.useEffect)((function(){r(m),_&&(m?_(m,(function(e){k(e)})):k(void 0))}),[m,_]);var R=(0,u.useCallback)((function(e){h(e.target.value)}),[]);return(0,u.useEffect)((function(){n&&n!==m&&h(n)}),[n]),(0,u.useEffect)((function(){function t(){return(t=(0,a.Z)(c().mark((function t(){var n,a,r;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.w)(e);case 2:n=t.sent,a=n.wrappedIndexes,r=n.zhDictionary,E((function(){return(0,d.v)(a,r,100)}));case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),u.createElement(o.Z,{title:z},u.createElement(s.Z,null,u.createElement("meta",{property:"robots",content:"noindex, follow"})),u.createElement("div",{className:"container margin-vert--lg"},u.createElement("h1",null,z),u.createElement("input",{type:"search",name:"q",className:I,"aria-label":"Search",onChange:R,value:m,autoComplete:"off",autoFocus:!0}),!_&&m&&u.createElement("div",null,u.createElement(v.Z,null)),w&&(w.length>0?u.createElement("p",null,y(1===w.length?b.Iz.count_documents_found:b.Iz.count_documents_found_plural,{count:w.length})):u.createElement("p",null,b.Iz.no_documents_were_found)),u.createElement("section",null,w&&w.map((function(e){return u.createElement(C,{key:e.document.i,searchResult:e})})))))}}}]);