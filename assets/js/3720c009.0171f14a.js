"use strict";(self.webpackChunkdanny_website=self.webpackChunkdanny_website||[]).push([[3751],{827:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var l=a(2374),n=a(8290),r=a(8341),c=a(8027),s=a(3585),m=a(821),g=a(7037),o=a(1344);function u(e){let{tags:t}=e;const a=(0,r.M)();return l.createElement(c.FG,{className:(0,n.Z)(s.k.wrapper.docsPages,s.k.page.docsTagsListPage)},l.createElement(c.d,{title:a}),l.createElement(o.Z,{tag:"doc_tags_list"}),l.createElement(m.Z,null,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},l.createElement("main",{className:"col col--8 col--offset-2"},l.createElement("h1",null,a),l.createElement(g.Z,{tags:t}))))))}},6454:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(2374),n=a(8290),r=a(8062);const c={tag:"tag_nIQk",tagRegular:"tagRegular_VOhx",tagWithCount:"tagWithCount_ORe1"};function s(e){let{permalink:t,label:a,count:s}=e;return l.createElement(r.Z,{href:t,className:(0,n.Z)(c.tag,s?c.tagWithCount:c.tagRegular)},a,s&&l.createElement("span",null,s))}},7037:(e,t,a)=>{a.d(t,{Z:()=>m});var l=a(2374),n=a(8341),r=a(6454);const c={tag:"tag_GYev"};function s(e){let{letterEntry:t}=e;return l.createElement("article",null,l.createElement("h2",null,t.letter),l.createElement("ul",{className:"padding--none"},t.tags.map((e=>l.createElement("li",{key:e.permalink,className:c.tag},l.createElement(r.Z,e))))),l.createElement("hr",null))}function m(e){let{tags:t}=e;const a=(0,n.P)(t);return l.createElement("section",{className:"margin-vert--lg"},a.map((e=>l.createElement(s,{key:e.letter,letterEntry:e}))))}},8341:(e,t,a)=>{a.d(t,{M:()=>n,P:()=>r});var l=a(6649);const n=()=>(0,l.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function r(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);t[a]??=[],t[a].push(e)})),Object.entries(t).sort(((e,t)=>{let[a]=e,[l]=t;return a.localeCompare(l)})).map((e=>{let[t,a]=e;return{letter:t,tags:a.sort(((e,t)=>e.label.localeCompare(t.label)))}}))}}}]);