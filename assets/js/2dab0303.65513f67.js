"use strict";(self.webpackChunkdanny_website=self.webpackChunkdanny_website||[]).push([[7988],{224:(e,n,t)=>{t.d(n,{Zo:()=>l,kt:()=>k});var o=t(2374);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function u(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=o.createContext({}),s=function(e){var n=o.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):u(u({},n),e)),t},l=function(e){var n=s(e.components);return o.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},m=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(t),m=r,k=p["".concat(c,".").concat(m)]||p[m]||d[m]||a;return t?o.createElement(k,u(u({ref:n},l),{},{components:t})):o.createElement(k,u({ref:n},l))}));function k(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,u=new Array(a);u[0]=m;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:r,u[1]=i;for(var s=2;s<a;s++)u[s]=t[s];return o.createElement.apply(null,u)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},1535:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>u,default:()=>d,frontMatter:()=>a,metadata:()=>i,toc:()=>s});var o=t(3518),r=(t(2374),t(224));const a={},u="react hooc",i={unversionedId:"react/hook/index",id:"react/hook/index",title:"react hooc",description:"\u6982\u8ff0",source:"@site/docs/react/hook/index.md",sourceDirName:"react/hook",slug:"/react/hook/",permalink:"/danny-website/docs/react/hook/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/react/hook/index.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"React",permalink:"/danny-website/docs/category/react"},next:{title:"React",permalink:"/danny-website/docs/react/"}},c={},s=[{value:"\u6982\u8ff0",id:"\u6982\u8ff0",level:2},{value:"\u6e90\u7801\u5b9e\u73b0",id:"\u6e90\u7801\u5b9e\u73b0",level:3},{value:"useState",id:"usestate",level:2},{value:"\u6e90\u7801\u5b9e\u73b0",id:"\u6e90\u7801\u5b9e\u73b0-1",level:3},{value:"\u6267\u884c",id:"\u6267\u884c",level:2}],l={toc:s},p="wrapper";function d(e){let{components:n,...t}=e;return(0,r.kt)(p,(0,o.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"react-hooc"},"react hooc"),(0,r.kt)("h2",{id:"\u6982\u8ff0"},"\u6982\u8ff0"),(0,r.kt)("p",null,"react \u4e2d\u7684 hook \u4ee5\u94fe\u8868\u7684\u65b9\u5f0f\u5b58\u50a8\u8d77\u6765"),(0,r.kt)("h3",{id:"\u6e90\u7801\u5b9e\u73b0"},"\u6e90\u7801\u5b9e\u73b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"let isMount = true;\nlet workInprogressHook = null; // \u6307\u5411\u5f53\u524d\u5904\u7406\u7684hook\uff0c \u521d\u59cb\u5316\u4e3a\u94fe\u8868\u7684\u5934\u6307\u9488\n\nconst fiber = {\n  stateNode: App,\n  memoizedState: null, // state hook\uff0c \u4e5f\u662f\u4e2a\u94fe\u8868\uff0c workInprogressHook\u4e3a\u5176\u79fb\u52a8\u6307\u9488\n};\n\nfunction schedule() {\n  workInprogressHook = fiber.memoizedState;\n  const app = fiber.stateNode();\n  isMount = false;\n  return app;\n}\n")),(0,r.kt)("h2",{id:"usestate"},"useState"),(0,r.kt)("p",null,"useState \u8d1f\u8d23\u7ec4\u4ef6\u7684\u72b6\u6001\u5b58\u50a8\uff0c \u5e76\u63d0\u4f9b\u4e86\u72b6\u6001\u66f4\u65b0\u7684\u5165\u53e3\uff1b"),(0,r.kt)("h3",{id:"\u6e90\u7801\u5b9e\u73b0-1"},"\u6e90\u7801\u5b9e\u73b0"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"function useState(initialState) {\n  let hook;\n\n  if (isMount) {\n    // \u521d\u59cb\u5316\u4e3a\u6240\u6709\u7684useState\u521b\u5efahook\u5bf9\u8c61\n    hook = {\n      memoizedState: initialState,\n      next: null,\n      // hook\u5bf9\u5e94\u7684update\u961f\u5217\n      quque: {\n        pending: null,\n      },\n    };\n    // \u5df2\u7ecf\u6709hook\u5145\u5f53\u94fe\u8868\u5934\n    if (fiber.memoizedState) {\n      workInprogressHook.next = hook;\n    } else {\n      fiber.memoizedState = hook;\n    }\n    // \u6307\u9488\u6307\u5411\u5f53\u524d\u6700\u65b0\u7684hook\n    workInprogressHook = hook;\n  } else {\n    // \u66f4\u65b0\u903b\u8f91\n    hook = workInprogressHook;\n    workInprogressHook = workInprogressHook.next;\n  }\n\n  let baseState = hook.memoizedState;\n\n  // \u66f4\u65b0\u961f\u5217\u6709\u4efb\u52a1\n  if (hook.quque.pending) {\n    let firstUpdate = hook.quque.pending;\n\n    do {\n      const action = firstUpdate.action;\n      baseState = action(baseState);\n\n      firstUpdate = firstUpdate.next;\n    } while (firstUpdate != hook.quque.pending.next);\n    hook.quque.pending = null;\n  }\n\n  hook.memoizedState = baseState;\n  return [baseState, dispatchAction.bind(null, hook.quque)];\n}\n\nfunction dispatchAction(quque, action) {\n  const update = {\n    action,\n    next: null,\n  };\n\n  // \u4e32\u8054 \u66f4\u65b0\u94fe\u8868\n  if (quque.pending == null) {\n    update.next = update;\n  } else {\n    // \u73af\u5f62\u94fe\u8868\n    update.next = quque.pending.next;\n    quque.pending.next = update;\n  }\n\n  quque.pending = update;\n\n  schedule();\n}\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u66f4\u65b0\u72b6\u6001\u7684action\u4ee5\u73af\u72b6\u94fe\u8868\u7684\u65b9\u5f0f\u5c01\u88c5"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u6b21\u8c03\u7528action\uff0c\u4f1a\u91cd\u65b0\u8c03\u7528schedule\u51fd\u6570\uff0c\u91cd\u65b0\u8ba1\u7b97\u4e0b\u4e00\u8f6e\u72b6\u6001\u5e76\u8fd4\u56de"))),(0,r.kt)("h2",{id:"\u6267\u884c"},"\u6267\u884c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'function App() {\n  const [number, updateNumber] = useState(0);\n  const [number1, updateNumber1] = useState(10);\n  const [number2, updateNumber2] = useState(10);\n  console.log("isMount", isMount);\n  console.log("number", number);\n  console.log("number1", number1);\n  return {\n    onClick() {\n      updateNumber((number) => number + 1);\n      updateNumber((number) => number + 2);\n    },\n    onFocus() {\n      updateNumber1((number1) => number1 + 10);\n    },\n  };\n}\n')))}d.isMDXComponent=!0}}]);