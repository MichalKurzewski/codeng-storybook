function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./DocsRenderer-K4EAMTCU-D_dkUcWq.js","./iframe-YxXH9Ayo.js","./index-CO9pbFv1.js","./_commonjsHelpers-BosuxZz1.js","./react-18-CwdVSiV2.js","./index-s4F7Q5vQ.js","./extends-Ciwu-KJW.js","./_baseIteratee-C6bWt__t.js","./index-Bw8VTzHM.js","./index-_Yroufw5.js","./index-DrFu-skq.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{_ as a}from"./iframe-YxXH9Ayo.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),n={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-D_dkUcWq.js").then(r=>r.D),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{n as parameters};
