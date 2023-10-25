"use strict";(self.webpackChunkdanny_website=self.webpackChunkdanny_website||[]).push([[8190],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>y});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),i=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=i(e.components);return a.createElement(c.Provider,{value:n},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=i(t),d=r,y=u["".concat(c,".").concat(d)]||u[d]||m[d]||o;return t?a.createElement(y,s(s({ref:n},p),{},{components:t})):a.createElement(y,s({ref:n},p))}));function y(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l[u]="string"==typeof e?e:r,s[1]=l;for(var i=2;i<o;i++)s[i]=t[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},7106:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>i});var a=t(7462),r=(t(7294),t(3905));const o={slug:"echart",title:"echart",authors:["marvin-season"],tags:["React","echart"]},s=void 0,l={permalink:"/danny-website/blog/echart",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/blog/echart/react-echart.md",source:"@site/blog/echart/react-echart.md",title:"echart",description:"echart-react",date:"2023-10-13T08:06:05.000Z",formattedDate:"October 13, 2023",tags:[{label:"React",permalink:"/danny-website/blog/tags/react"},{label:"echart",permalink:"/danny-website/blog/tags/echart"}],readingTime:5.03,hasTruncateMarker:!1,authors:[{name:"marvin-season",title:"Maintainer of Docusaurus",url:"https://github.com/marvin-season",imageURL:"https://avatars.githubusercontent.com/u/64943287?v=4",key:"marvin-season"}],frontMatter:{slug:"echart",title:"echart",authors:["marvin-season"],tags:["React","echart"]},prevItem:{title:"\u51fd\u6570\u5f0f\u7f16\u7a0b",permalink:"/danny-website/blog/fp"},nextItem:{title:"React\u5f00\u53d1\u8bb0\u5f55",permalink:"/danny-website/blog/React\u5f00\u53d1\u8bb0\u5f55"}},c={authorsImageUrls:[void 0]},i=[{value:"echart-react",id:"echart-react",level:2},{value:"\u57fa\u672c\u914d\u7f6e",id:"\u57fa\u672c\u914d\u7f6e",level:3},{value:"\u56fe\u8868\u6570\u636e\u7c7b\u578b\u7ea6\u675f",id:"\u56fe\u8868\u6570\u636e\u7c7b\u578b\u7ea6\u675f",level:3},{value:"\u56fe\u8868\u6570\u636e\u4e0e\u9884\u5b9a\u4e49",id:"\u56fe\u8868\u6570\u636e\u4e0e\u9884\u5b9a\u4e49",level:3},{value:"\u5408\u9002\u7684\u5408\u5e76\u6570\u636e\u65b9\u6cd5",id:"\u5408\u9002\u7684\u5408\u5e76\u6570\u636e\u65b9\u6cd5",level:3},{value:"\u5bf9\u9f50\u6570\u636e",id:"\u5bf9\u9f50\u6570\u636e",level:3},{value:"recap",id:"recap",level:3}],p={toc:i},u="wrapper";function m(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"echart-react"},"echart-react"),(0,r.kt)("p",null,"\u5bf9\u4e8e\u7ed8\u5236\u56fe\u8868\uff0c\u63d0\u4f9b\u5408\u9002\u7684 options \u7ed9 echart \u5373\u53ef\uff0c\u4f46\u662f\u5f80\u5f80\u9700\u8981\u663e\u793a\u7684\u6570\u636e\u4ece\u63a5\u53e3\u83b7\u53d6\uff0c\u9700\u8981\u5c06\u56fe\u8868\u7684\u6570\u636e\u548c\u6837\u5f0f\u5206\u79bb\u3002"),(0,r.kt)("p",null,"\u5047\u8bbe\u6709\u5982\u4e0b\u5c01\u88c5\u597d\u7684\u7ec4\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"<EchartReact options={options} {...{ others }}></EchartReact>\n")),(0,r.kt)("h3",{id:"\u57fa\u672c\u914d\u7f6e"},"\u57fa\u672c\u914d\u7f6e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u57fa\u672c\u7684\u6298\u7ebf\u56fe\u914d\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// \u56fe\u8868\u7684\u57fa\u672c\u914d\u7f6e\nexport const baseOption = {\n  grid: {\n    top: 8,\n    left: 20,\n    bottom: 18,\n    right: 40,\n    containLabel: true,\n  },\n  tooltip: {\n    trigger: "axis",\n    formatter: "{b}: {c}",\n    backgroundColor: "#FFFFFF",\n    borderColor: "#F6F9FF",\n    textStyle: {\n      color: "#344054",\n      fontSize: 12,\n    },\n  },\n  xAxis: {\n    type: "category",\n    boundaryGap: false,\n    data: [],\n    axisLine: {\n      show: true,\n      lineStyle: {\n        color: "#9CA3AF",\n      },\n    },\n    axisTick: {\n      show: false,\n    },\n    axisLabel: {\n      show: true,\n      // interval: 0,\n      // rotate: 30,\n      formatter: function (value: any, index: number) {\n        let formatValue = value;\n        formatValue = moment(value).format("MMM D, YYYY");\n        return formatValue;\n      },\n      padding: [6, 0, 0, 0],\n    },\n  },\n  yAxis: {\n    type: "value",\n    axisLine: {\n      symbol: "arrow",\n      lineStyle: {\n        color: "#9CA3AF",\n        // ...\n      },\n    },\n    axisLabel: {\n      show: true,\n      padding: [0, 16, 0, 0],\n    },\n  },\n  series: [\n    {\n      name: "demo",\n      data: [],\n      type: "line",\n      symbolSize: 4,\n      itemStyle: {\n        color: "auto",\n        borderGap: "round",\n      },\n      lineStyle: {\n        color: "#276DDC",\n        width: 1,\n      },\n      areaStyle: {\n        color: {\n          type: "linear",\n          x: 0,\n          y: 0,\n          x2: 0,\n          y2: 1,\n          colorStops: [\n            {\n              offset: 0,\n              color: "rgba(234, 242, 255, 0.6)", // 0% \u5904\u7684\u989c\u8272\n            },\n            {\n              offset: 1,\n              color: "rgba(234, 242, 255, 0.2)", // 100% \u5904\u7684\u989c\u8272\n            },\n          ],\n          global: false, // \u7f3a\u7701\u4e3a false\n        },\n      },\n      emphasis: {\n        focus: "series",\n      },\n    },\n  ],\n};\n')),(0,r.kt)("p",null,"\u5982\u679c\u53ea\u9700\u8981\u4e00\u4e2a\u56fe\u8868\uff0c\u5c06 data \u8d4b\u503c\u4e3a\u63a5\u53e3\u8fd4\u56de\u7684\u7ed3\u679c\u5373\u53ef\uff0c\u5982\u679c\u6709\u591a\u4e2a\u56fe\u8868\uff08\u76f8\u540c\u7c7b\u578b\uff0c\u63cf\u8ff0\u4e0d\u540c\u4e3b\u9898\uff09\uff0c\u5219\u53ef\u4ee5\u5b9a\u4e49\u4e00\u4e2a\u6570\u7ec4\uff1a"),(0,r.kt)("h3",{id:"\u56fe\u8868\u6570\u636e\u7c7b\u578b\u7ea6\u675f"},"\u56fe\u8868\u6570\u636e\u7c7b\u578b\u7ea6\u675f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface EchartData {\n    options: 'any option of echart'\n    ...{\n        attr: 'another attr of your chart'\n    }\n}\n\nconst echartDataArray: EchartData[] = []\n")),(0,r.kt)("h3",{id:"\u56fe\u8868\u6570\u636e\u4e0e\u9884\u5b9a\u4e49"},"\u56fe\u8868\u6570\u636e\u4e0e\u9884\u5b9a\u4e49"),(0,r.kt)("p",null,"\u9884\u5b9a\u4e49\u597d\u5404\u4e2a\u56fe\u8868\u7684\u6837\u5f0f\uff0c\u9664\u4e86\u6570\u636e\u5728\u540e\u7eed\u64cd\u4f5c\u4e2d\u6ce8\u5165\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const echartDataArray: EchartData[] = [\n    {\n        options: merge(cloneDeep(baseOption), {\n            series: [\n                {\n                    itemStyle: {\n                        color: '#10B981',\n                    },\n                }\n            ]\n            // ...\n        )\n    }\n]\n\n")),(0,r.kt)("p",null,"\u6e32\u67d3 chart \u4e4b\u524d\u9700\u8981\u5c06\u5404\u4e2a\u4e3b\u9898\u7684\u6570\u636e\u585e\u5230\u6570\u7ec4\u5bf9\u5e94\u7684 data \u4e2d,\u9700\u8981\u6ce8\u610f\u5408\u5e76\u6570\u636e\u7684\u64cd\u4f5c\n",(0,r.kt)("inlineCode",{parentName:"p"},"lodash.merge"),"\u8fd9\u4e2a\u65b9\u6cd5\u4f1a\u5ffd\u7565 undefined \u7b49\u7a7a\u503c\u7684\u5408\u5e76\uff0c\u4e14\u6570\u7ec4\u5408\u5e76\u5b58\u5728\u91cd\u590d\u5143\u7d20\u7684 bug\uff0c\u6240\u4ee5\u624b\u5199 merge \u51fd\u6570\u6bd4\u8f83\u5408\u9002"),(0,r.kt)("h3",{id:"\u5408\u9002\u7684\u5408\u5e76\u6570\u636e\u65b9\u6cd5"},"\u5408\u9002\u7684\u5408\u5e76\u6570\u636e\u65b9\u6cd5"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'export const merge = (target: any, source: any) => {\n  Object.keys(source).forEach((key) => {\n    if (Array.isArray(source[key])) {\n      // TODO: \u6570\u7ec4\u9700\u8981\u8fed\u4ee3\u9012\u5f52\uff0c \u8fd9\u91cc\u76ee\u524d\u76f4\u63a5\u66ff\u6362\n      target[key] = source[key];\n    } else if (typeof source[key] === "object") {\n      target[key] = merge(target[key], source[key]);\n    } else {\n      target[key] = source[key];\n    }\n  });\n  return target;\n};\n')),(0,r.kt)("h3",{id:"\u5bf9\u9f50\u6570\u636e"},"\u5bf9\u9f50\u6570\u636e"),(0,r.kt)("p",null,"\u5728\u6211\u4eec\u62ff\u5230\u63a5\u53e3\u6570\u636e\u4e4b\u540e\uff0c\u5c31\u53ef\u4ee5\u5c06\u6570\u636e\u7f1d\u5408\u5230\u4e4b\u524d\u9884\u5b9a\u4e49\u7684 EchartDataArray \u4e2d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"echartDataArray.forEach((item, index) => {\n  const { options, value } = getEChartData(data, item);\n\n  // \u5408\u5e76\u5c5e\u6027\n  const mergedOptions = merge(cloneDeep(item.options), options);\n\n  newData.push({\n    ...item,\n    options: mergedOptions,\n    value,\n  });\n});\n")),(0,r.kt)("p",null,"\u63a5\u53e3\u6570\u636e\u548c\u9884\u5b9a\u4e49\u7684\u6570\u636e\u4e4b\u95f4\u9700\u8981\u505a\u6620\u5c04\uff0c\u4ee5\u4fbf\u4e8e\u6b63\u786e\u7f1d\u5408\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"export const getEChartData = (data: any, item: AnalyseEchartProps, isRight: boolean) => {\n  const options = {\n    xAxis: {\n      data: [],\n    },\n    series: [{ data: [] }],\n  };\n  let value: JSX.Element = <></>;\n\n  switch (item.id) {\n    case 'ChartA': \n        value = <></>\n        options.xAxis.data = ['xxx']\n        break;\n    case 'ChartB': break;\n    case 'ChartC': break;\n    default break\n  }\n  return { options, value }\n")),(0,r.kt)("admonition",{type:"tip"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u9f50\u6570\u636e\u9700\u8981\u9884\u5b9a\u4e49\u6570\u636e\u6620\u5c04")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u56fe\u8868\u5b57\u6bb5\u6620\u5c04\uff08\u524d\u7aef\u540e\u7aef\uff09 => \u7528\u4e8e\u6570\u636e\u8f6c\u6362,\u54ea\u4e2a\u5b57\u6bb5\u662f\u56fe\u8868\u6570\u636e\nexport const EchartFieldMap = {\n  MessageNumber: 'allMsgCount',\n  ActiveUsersNumber: 'activeUserCount',\n  AvgInteractiveNumber: 'averageSessionCount',\n  TokenSpeed: 'tokensPerSecond',\n  FeeCost: 'tokenCosts',\n};\n// \u7edf\u8ba1\u56fe\u8868\u4e2d\u7684\u67d0\u4e2akey\u7684\u6620\u5c04 => \u5177\u4f53\u56fe\u8868\u6570\u636e\u53d6\u54ea\u4e2a\u503c\nexport const EchartKeyMap = {\n  allMsgCount: ['conversation_count'],\n  activeUserCount: ['terminal_count'],\n  averageSessionCount: ['interactions'],\n  tokensPerSecond: ['tps'],\n  tokenCosts: ['token_count', 'total_price'],\n};\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u3001\u8f6c\u6362\u63a5\u53e3\u6570\u636e\nuseQuery \u63d0\u4f9b\u4e86\u4e00\u4e2aselect\u56de\u8c03\uff0c\u53ef\u4ee5\u7528\u6765\u5904\u7406\u6570\u636e\uff0c\u4f8b\u5982\uff1a useEchartsData({}, transform, () =>{}), \u4f20\u5165transform\u51fd\u6570\u6765\u5904\u7406\u6570\u636e")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"export const useEchartsData = (\n  params: any,\n  select?: (data: any) => any,\n  onSuccess?: (data: any) => void,\n) => {\n\n  return useQuery({\n    queryKey: ['echartsData', params],\n    queryFn: async () => {\n      const response = await request('/chart', {\n        params,\n      });\n      return response.data;\n    },\n    select,\n    onSuccess,\n  });\n};\n")),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"transform\u5904\u7406\u51fd\u6570")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"const transform = (data: any) => {\n    const targetData = cloneDeep(data);\n\n    Object.keys(EchartKeyMap).forEach((key: string) => {\n        EchartKeyMap[key].forEach((someKey: string) => {\n            // \u81ea\u5b9a\u4e49\u6dfb\u52a0\u4e00\u4e9b\u56fe\u8868\u663e\u793a\u7684\u989d\u5916\u6570\u636e\n            targetData[key + '_' + someKey] = 'someValue'\n        })\n    })\n}\n\n"))),(0,r.kt)("h3",{id:"recap"},"recap"),(0,r.kt)("p",null,"\u603b\u7ed3\u4e00\u4e0b\u6709\u4ee5\u4e0b\u51e0\u70b9\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u548c\u6837\u5f0f\u5206\u79bb"),(0,r.kt)("li",{parentName:"ul"},"\u505a\u597d\u6570\u636e\u6620\u5c04 => \u524d\u7aef\u524d\u7f6e\u5f00\u53d1")))}m.isMDXComponent=!0}}]);