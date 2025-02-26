"use strict";(self.webpackChunkblog_website=self.webpackChunkblog_website||[]).push([[4542],{914:e=>{e.exports=JSON.parse('{"permalink":"/danny-website/blog/tiptap","source":"@site/blog/rich-editor/tiptap.mdx","title":"Tiptap Practise","description":"Tiptap is a renderless rich-text editor lib","date":"2025-02-05T00:00:00.000Z","tags":[{"inline":false,"label":"Javscript","permalink":"/danny-website/blog/tags/javscript","description":"Javscript tag description"},{"inline":true,"label":"tiptap","permalink":"/danny-website/blog/tags/tiptap"}],"readingTime":1.535,"hasTruncateMarker":true,"authors":[{"name":"marvin-season","title":"Maintainer of Docusaurus","url":"https://github.com/marvin-season","imageURL":"https://avatars.githubusercontent.com/u/64943287?v=4","key":"marvin-season","page":null}],"frontMatter":{"description":"Tiptap is a renderless rich-text editor lib","slug":"tiptap","title":"Tiptap Practise","authors":["marvin-season"],"tags":["javscript","tiptap"],"date":"2025-02-05"},"unlisted":false,"prevItem":{"title":"Comprehension of JavaScript","permalink":"/danny-website/blog/comprehension-of-javascript"},"nextItem":{"title":"React Develop","permalink":"/danny-website/blog/react-develop"}}')},1287:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var r=n(914),s=n(4848),i=n(8453),a=n(2995);const o={description:"Tiptap is a renderless rich-text editor lib",slug:"tiptap",title:"Tiptap Practise",authors:["marvin-season"],tags:["javscript","tiptap"],date:"2025-02-05"},l=void 0,d={authorsImageUrls:[void 0]},c=[{value:"Core Concept",id:"core-concept",level:2},{value:"Design",id:"design",level:2},{value:"What",id:"what",level:2},{value:"How",id:"how",level:2},{value:"Core Code",id:"core-code",level:2}];function u(e){const t={code:"code",h2:"h2",li:"li",mermaid:"mermaid",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(a.o,{}),"\n",(0,s.jsx)(t.h2,{id:"core-concept",children:"Core Concept"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Editor"}),": The main editor component","\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Node"}),": A piece of content in the editor"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Mark"}),": A piece of text formatting"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Extension"}),": A piece of functionality"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Schema"}),": The structure of the document"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Commands"}),": Functions to manipulate the editor"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"Plugins"}),": Extend the editor with custom functionality"]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.strong,{children:"State"}),": The current state of the editor"]}),"\n"]}),"\n","\n",(0,s.jsx)(t.h2,{id:"design",children:"Design"}),"\n",(0,s.jsx)(t.mermaid,{value:'sequenceDiagram\n    participant User\n    participant Editor\n    participant CustomNode\n\n    Note over Editor: \u521d\u59cb\u5316\u6587\u672c "name: {{name}}, age: {{age}}"\n    Note over Editor: \u81ea\u5b9a\u4e49\u8282\u70b9\u5339\u914d\u89c4\u5219\n    Editor--\x3e>Editor: \u53cd\u5e8f\u5217\u5316\u4e3a JSON\n    Editor--\x3e>CustomNode: \u81ea\u5b9a\u4e49\u8282\u70b9\u5904\u7406\n    CustomNode--\x3e>CustomNode: \u81ea\u5b9a\u4e49\u6e32\u67d3\u903b\u8f91\n    CustomNode --\x3e>Editor: \u6e32\u67d3\u81ea\u5b9a\u4e49\u7ec4\u4ef6\n    Editor->>User: \u6e32\u67d3\u6587\u672c\n    User->>Editor: \u4fee\u6539\u6587\u672c\n    Editor--\x3e>Editor: \u66f4\u65b0 JSON\n    Editor->>User: \u6e32\u67d3\u6587\u672c\n    User->>Editor: \u4fdd\u5b58\u6587\u672c\n    \n    Editor--\x3e>User: \u5e8f\u5217\u5316\u4e3a \u6587\u672c\u4fe1\u606f\n    Note over Editor: \u81ea\u5b9a\u4e49\u8282\u70b9\u5339\u914d\u89c4\u5219'}),"\n",(0,s.jsx)(t.h2,{id:"what",children:"What"}),"\n",(0,s.jsx)(t.p,{children:"A RichEditor."}),"\n",(0,s.jsx)(t.h2,{id:"how",children:"How"}),"\n",(0,s.jsx)(t.p,{children:"Creating a custom node."}),"\n",(0,s.jsx)(t.h2,{id:"core-code",children:"Core Code"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-tsx",children:"const View = ({ node, updateAttributes }: NodeViewProps) => {\n    const { type, value, options, placeholder } = node.attrs\n\n    const handleInput = (e: React.FormEvent) => {\n        const inputElement = e.target as HTMLInputElement;\n        const newValue = inputElement.value || '';\n        updateAttributes({ value: newValue })\n    };\n\n    // dynaimc with of input\n    const count = caculteWidth(value ? value : placeholder);\n\n    return (\n        <NodeViewWrapper as=\"span\">\n            <NodeViewContent\n                as={'input'}\n                style={{ width: `${count}rem` }}\n                contentEditable={false}\n                onInput={handleInput}\n                placeholder={placeholder}\n                defaultValue={value}\n            >\n            </NodeViewContent>\n        </NodeViewWrapper>\n    )\n}\n\nconst InlinePlaceholder = Node.create<InlinePlaceholderAttributes>({\n    renderHTML({ HTMLAttributes, node }) {\n        const attrs = mergeAttributes(\n            this.options.HTMLAttributes || {},\n            HTMLAttributes,\n        );\n        return ['span', attrs, 0]; // 0 or child of span\n    },\n    addNodeView() {\n        return ReactNodeViewRenderer(View);\n    },\n})\n"})})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},2995:(e,t,n)=>{n.d(t,{o:()=>y});var r=n(3971);function s(e){const t=[],n=/{{(.*?)}}/g;let r=0;for(;;){const s=n.exec(e);if(!s){r<e.length&&t.push({type:"text",text:e.slice(r)});break}const[i,a]=s;r<s.index&&t.push({type:"text",text:e.slice(r,s.index)});const[o,l]=a.split(":"),d=l?l.split("#"):void 0;t.push({type:"inlinePlaceholder",attrs:{placeholder:o,value:"",type:d?"select":"input",options:d}}),r=n.lastIndex}return{type:"doc",content:[{type:"paragraph",content:t}]}}var i=n(6540),a=n(9894),o=n(3873),l=n(4848);let d=null;const c=e=>{let{node:t,updateAttributes:n}=e;const{type:s,value:i,options:a,placeholder:o}=t.attrs;console.log("options",a);const c=e=>{const t=e.target.value||"";d&&clearTimeout(d),d=window.setTimeout((()=>{n({value:t})}),50)},u=(e=>{const t=e.replace(/[\u4e00-\u9fa5@#]/g,"").length;return.5*t+1*(e.length-t)})(i||o);return(0,l.jsxs)(r.VR,{as:"span",children:["input"===s&&(0,l.jsx)("input",{style:{width:`${u}rem`},className:"outline-none border-b border-blue-500 mx-2 box-border text-gray-500 transition-all",contentEditable:!1,onInput:c,placeholder:o,defaultValue:i}),"select"===s&&(0,l.jsx)("select",{defaultValue:i,onInput:c,className:"outline-none border-b border-blue-500 mx-2 box-border text-gray-500",children:a.map(((e,t)=>(0,l.jsx)("option",{value:e,children:e},t)))})]})},u=o.bP.create({name:"inlinePlaceholder",group:"inline",inline:!0,atom:!0,addOptions:()=>({HTMLAttributes:{class:"inlinePlaceholder"},placeholder:"\u8bf7\u8f93\u5165\u5185\u5bb9",type:"input",value:""}),addAttributes:()=>({placeholder:{default:"",parseHTML:e=>e.getAttribute("data-placeholder")||"",renderHTML:e=>({"data-placeholder":e.placeholder})},type:{},options:{rendered:!1},value:{default:"",rendered:!1,parseHTML:e=>e.getAttribute("data-value")||"",renderHTML:e=>({"data-value":e.value})}}),parseHTML(){return[{tag:`span[data-type=${this.name}]`}]},renderHTML(e){let{HTMLAttributes:t,node:n}=e;return["span",(0,o.KV)(this.options.HTMLAttributes||{},t)]},addNodeView:()=>(0,r.gu)(c)});let p=function(e){return e.At="@",e.Sharp="#",e}({});const h=new Map;h.set(p.At,[{value:"\u6211\u662f{{\u89d2\u8272\u540d}}, \u6211\u7684\u5de5\u4f5c\u662f{{\u4e3b\u8981\u6d3b\u52a8}}\uff0c\u6211\u7684\u7231\u597d\u662f{{\u7231\u597d}}",serializable:!0},{value:"\u6211\u559c\u6b22{{\u6d3b\u52a81}}\u548c{{\u6d3b\u52a82}}\uff0c\u4f46\u6211\u6700\u64c5\u957f{{\u6280\u80fd:\u4e0b\u68cb#\u6e38\u620f#\u5199\u4f5c}}\u3002",serializable:!0},{value:"\u5728\u6211\u7684{{\u751f\u6d3b}}\u4e2d\uff0c{{\u4e8b\u60c51}}\u548c{{\u4e8b\u60c52}}\u662f\u6211\u6bcf\u5929\u5fc5\u505a\u7684\u4e8b\u3002",serializable:!0}]),h.set(p.Sharp,[{value:"hello <span data-selection-mark>world</span>, this is the future"},{value:"\u6211\u7684\u7231\u597d\u662f{{\u7231\u597d:\u5403\u996d#\u7761\u89c9#\u6253\u8c46\u8c46}}\u3002",serializable:!0}]);const m=o.YY.create({name:"mention",addKeyboardShortcuts(){return Object.entries(p).reduce(((e,t)=>{let[n,r]=t;return e[r]=()=>(this.options.onMentionKeyPress(r),!0),e}),{})}}),x=o.YY.create({name:"confirm",addKeyboardShortcuts(){return{"Mod-Enter":e=>{let{editor:t}=e;return this.options.onConfirmKeyPress(t)}}}}),b=o.CU.create({name:"selectionMark",addOptions:()=>({HTMLAttributes:{}}),parseHTML:()=>[{tag:"span[data-selection-mark]"}],renderHTML(e){let{HTMLAttributes:t}=e;return["selection-mark",(0,o.KV)(t,{"data-selection-mark":""}),0]},addCommands:()=>({})});var g=n(6822);n(6306);const v=e=>{let{ref:t}=e;const{editor:n}=(0,r.aA)(),[a,o]=(0,i.useState)(void 0);return n?((0,i.useImperativeHandle)(t,(()=>({setTriggerKey:o})),[]),(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"cursor-pointer px-4 py-2 bg-white w-full rounded-[12px] shadow text-blue-400 flex gap-2",children:Object.entries(p).map((e=>{let[t,r]=e;return(0,l.jsx)(g.Ay,{animation:"shift-away",className:"border border-blue-300 backdrop-blur backdrop-opacity-80 p-4 rounded-[12px] shadow text-sm",content:(0,l.jsx)("div",{className:"flex flex-col gap-2",children:h.get(r).map(((e,t)=>(0,l.jsx)("div",{className:"truncate cursor-pointer hover:text-blue-400",onClick:()=>{n.commands.setContent(e?.serializable?s(e.value):e.value)},children:e.value},t)))}),interactive:!0,placement:"top-start",visible:a===r,onClickOutside:()=>o(null),children:(0,l.jsx)("span",{className:"hover:text-blue-700",onClick:()=>{o(a===r?null:r)},children:r})})}))})})):null},f=e=>{let{onSend:t}=e;const{editor:n}=(0,r.aA)();return(0,l.jsx)(l.Fragment,{children:(0,l.jsx)("div",{className:"border text-white px-4 py-1 rounded-[8px] bg-blue-500 hover:bg-blue-600 cursor-pointer",onClick:()=>{t(n)},children:"Send"})})},j=()=>(0,l.jsx)("div",{className:"text-gray-400 text-sm",children:"CTRL/Command + Enter or Typing @"});const y=function(){const e=(0,i.useRef)(null),t=async e=>{alert((e=>{let t="";return e.content?.forEach((e=>{"paragraph"===e.type&&e.content?.forEach((e=>{if("text"===e.type)t+=e.text;else if("inlinePlaceholder"===e.type){const{placeholder:n,value:r}=e.attrs;t+=r||`{{${n}}}`}}))})),t})(e.getJSON()))},n=(e=>{let{content:t,onMentionKeyPress:n,onConfirmKeyPress:r}=e;return{editorContainerProps:{className:"w-full"},autofocus:!0,extensions:[a.W.configure({history:!1}),u,m.configure({onMentionKeyPress:n}),x.configure({onConfirmKeyPress:r}),b],content:t,editorProps:{attributes:{class:"w-full prose-sm focus:outline-none p-10 bg-white shadow rounded-[16px]"}}}})({content:s("\u6211\u662f{{\u5bab\u672c\u6b66\u85cf}},\u6211\u7684\u7231\u597d\u662f{{\u7231\u597d:\u5403\u996d#\u7761\u89c9#\u6253\u8c46\u8c46}}\u3002"),async onMentionKeyPress(t){e.current.setTriggerKey(t)},async onConfirmKeyPress(e){t(e)}});return(0,l.jsx)("div",{className:"bg-[#f5f1f1] rounded-4xl flex flex-col justify-center items-center gap-4 p-8 pb-4",children:(0,l.jsxs)(r.zz,{editable:!0,...n,children:[(0,l.jsxs)("div",{className:"w-full flex gap-4 items-end",children:[(0,l.jsx)(v,{ref:e}),(0,l.jsx)(f,{onSend:async e=>{t(e)}})]}),(0,l.jsx)(j,{})]})})}}}]);