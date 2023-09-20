"use strict";(self.webpackChunkdanny_website=self.webpackChunkdanny_website||[]).push([[6620],{224:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(2374);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=o,m=u["".concat(l,".").concat(d)]||u[d]||h[d]||a;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5062:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var r=n(3518),o=(n(2374),n(224));const a={slug:"eventloop",title:"Eventloop",authors:["marvin-season"],tags:["eventloop","javascript"]},i="Event loop",s={permalink:"/danny-website/blog/eventloop",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/eventloop/index.md",source:"@site/blog/eventloop/index.md",title:"Eventloop",description:"What is the event loop",date:"2023-09-20T03:07:51.000Z",formattedDate:"September 20, 2023",tags:[{label:"eventloop",permalink:"/danny-website/blog/tags/eventloop"},{label:"javascript",permalink:"/danny-website/blog/tags/javascript"}],readingTime:1.52,hasTruncateMarker:!1,authors:[{name:"marvin-season",title:"Maintainer of Docusaurus",url:"https://github.com/marvin-season",imageURL:"https://avatars.githubusercontent.com/u/64943287?v=4",key:"marvin-season"}],frontMatter:{slug:"eventloop",title:"Eventloop",authors:["marvin-season"],tags:["eventloop","javascript"]},prevItem:{title:"\u67ef\u91cc\u5316",permalink:"/danny-website/blog/\u67ef\u91cc\u5316"},nextItem:{title:"Vue-grid-layout",permalink:"/danny-website/blog/vue-grid-layout"}},l={authorsImageUrls:[void 0]},p=[{value:"What is the event loop",id:"what-is-the-event-loop",level:2},{value:"A few smart data structures",id:"a-few-smart-data-structures",level:2},{value:"How does it work",id:"how-does-it-work",level:2},{value:"Grabbing the operation",id:"grabbing-the-operation",level:2}],c={toc:p},u="wrapper";function h(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"what-is-the-event-loop"},"What is the event loop"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"event loop")," is the secret behind JavaScript\u2019s asynchronous programming, JS executes all operations on a Single thread, but using a few smart data structures, it gives us the illusion of multi-threading."),(0,o.kt)("h2",{id:"a-few-smart-data-structures"},"A few smart data structures"),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"call stack")," is responsible for keeping track of all the operations in line to be executed. Whenever a function is finished, it is popped from the stack."),(0,o.kt)("p",null,"The ",(0,o.kt)("strong",{parentName:"p"},"event queue")," is responsible for sending new functions to the stack for processing. It follows the queue data structure to maintain the correct sequence in which all operations should be sent for execution."),(0,o.kt)("h2",{id:"how-does-it-work"},"How does it work"),(0,o.kt)("p",null,"Whenever an ",(0,o.kt)("strong",{parentName:"p"},"async function")," is called, it is sent to a ",(0,o.kt)("em",{parentName:"p"},"browser API"),". These are APIs built into the browser. Based on the command received from the call stack, the API starts its own single-threaded operation."),(0,o.kt)("p",null,"An example of this is the ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout")," method. When a ",(0,o.kt)("inlineCode",{parentName:"p"},"setTimeout")," operation is processed in the stack, it is sent to the corresponding API which waits till the specified time to send this operation back in for processing."),(0,o.kt)("p",null,"Where does it send the operation? The ",(0,o.kt)("strong",{parentName:"p"},"event queue"),". Hence, we have a cyclic system for running async operations in JavaScript. The language itself is single-threaded, but the browser APIs act as separate threads."),(0,o.kt)("p",null,"The event loop facilitates this process; it constantly checks whether or not the call stack is empty. If it is empty, new functions are added from the event queue. If it is not, then the current function call is processed."),(0,o.kt)("h2",{id:"grabbing-the-operation"},"Grabbing the operation"),(0,o.kt)("p",null,"According to the priority of the operation from large to small, the event queue is divided into ",(0,o.kt)("strong",{parentName:"p"},"micro queue"),", ",(0,o.kt)("strong",{parentName:"p"},"interaction queue"),", and ",(0,o.kt)("strong",{parentName:"p"},"delay queue"),". When the call stack is empty, an operation is grabbed based on the priority of the queue."))}h.isMDXComponent=!0}}]);