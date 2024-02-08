import{r as n,R as z}from"./index-IybTgENJ.js";import{R as B}from"./index-5bnWhD0C.js";import{D as H,a as W,R as G,u as X,N as Y,s as q,b as J,c as D,d as I,e as Q,f as k}from"./index-PMrafJYB.js";/**
 * React Router DOM v6.22.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function _(){return _=Object.assign?Object.assign.bind():function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},_.apply(this,arguments)}function Z(e,a){if(e==null)return{};var t={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(a.indexOf(i)>=0)&&(t[i]=e[i]);return t}function $(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function ee(e,a){return e.button===0&&(!a||a==="_self")&&!$(e)}function U(e){return e===void 0&&(e=""),new URLSearchParams(typeof e=="string"||Array.isArray(e)||e instanceof URLSearchParams?e:Object.keys(e).reduce((a,t)=>{let r=e[t];return a.concat(Array.isArray(r)?r.map(i=>[t,i]):[[t,r]])},[]))}function te(e,a){let t=U(e);return a&&a.forEach((r,i)=>{t.has(i)||a.getAll(i).forEach(o=>{t.append(i,o)})}),t}const ne=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],re="6";try{window.__reactRouterVersion=re}catch{}const ae=n.createContext({isTransitioning:!1}),ie=n.createContext(new Map),se="startTransition",F=z[se],oe="flushSync",A=B[oe];function le(e){F?F(e):e()}function C(e){A?A(e):e()}class ce{constructor(){this.status="pending",this.promise=new Promise((a,t)=>{this.resolve=r=>{this.status==="pending"&&(this.status="resolved",a(r))},this.reject=r=>{this.status==="pending"&&(this.status="rejected",t(r))}})}}function Se(e){let{fallbackElement:a,router:t,future:r}=e,[i,o]=n.useState(t.state),[u,d]=n.useState(),[f,s]=n.useState({isTransitioning:!1}),[c,m]=n.useState(),[h,y]=n.useState(),[S,P]=n.useState(),L=n.useRef(new Map),{v7_startTransition:x}=r||{},E=n.useCallback(l=>{x?le(l):l()},[x]),v=n.useCallback((l,R)=>{let{deletedFetchers:p,unstable_flushSync:O,unstable_viewTransitionOpts:g}=R;p.forEach(T=>L.current.delete(T)),l.fetchers.forEach((T,K)=>{T.data!==void 0&&L.current.set(K,T.data)});let N=t.window==null||typeof t.window.document.startViewTransition!="function";if(!g||N){O?C(()=>o(l)):E(()=>o(l));return}if(O){C(()=>{h&&(c&&c.resolve(),h.skipTransition()),s({isTransitioning:!0,flushSync:!0,currentLocation:g.currentLocation,nextLocation:g.nextLocation})});let T=t.window.document.startViewTransition(()=>{C(()=>o(l))});T.finished.finally(()=>{C(()=>{m(void 0),y(void 0),d(void 0),s({isTransitioning:!1})})}),C(()=>y(T));return}h?(c&&c.resolve(),h.skipTransition(),P({state:l,currentLocation:g.currentLocation,nextLocation:g.nextLocation})):(d(l),s({isTransitioning:!0,flushSync:!1,currentLocation:g.currentLocation,nextLocation:g.nextLocation}))},[t.window,h,c,L,E]);n.useLayoutEffect(()=>t.subscribe(v),[t,v]),n.useEffect(()=>{f.isTransitioning&&!f.flushSync&&m(new ce)},[f]),n.useEffect(()=>{if(c&&u&&t.window){let l=u,R=c.promise,p=t.window.document.startViewTransition(async()=>{E(()=>o(l)),await R});p.finished.finally(()=>{m(void 0),y(void 0),d(void 0),s({isTransitioning:!1})}),y(p)}},[E,u,c,t.window]),n.useEffect(()=>{c&&u&&i.location.key===u.location.key&&c.resolve()},[c,h,i.location,u]),n.useEffect(()=>{!f.isTransitioning&&S&&(d(S.state),s({isTransitioning:!0,flushSync:!1,currentLocation:S.currentLocation,nextLocation:S.nextLocation}),P(void 0))},[f.isTransitioning,S]),n.useEffect(()=>{},[]);let w=n.useMemo(()=>({createHref:t.createHref,encodeLocation:t.encodeLocation,go:l=>t.navigate(l),push:(l,R,p)=>t.navigate(l,{state:R,preventScrollReset:p==null?void 0:p.preventScrollReset}),replace:(l,R,p)=>t.navigate(l,{replace:!0,state:R,preventScrollReset:p==null?void 0:p.preventScrollReset})}),[t]),b=t.basename||"/",M=n.useMemo(()=>({router:t,navigator:w,static:!1,basename:b}),[t,w,b]);return n.createElement(n.Fragment,null,n.createElement(H.Provider,{value:M},n.createElement(W.Provider,{value:i},n.createElement(ie.Provider,{value:L.current},n.createElement(ae.Provider,{value:f},n.createElement(G,{basename:b,location:i.location,navigationType:i.historyAction,navigator:w,future:{v7_relativeSplatPath:t.future.v7_relativeSplatPath}},i.initialized||t.future.v7_partialHydration?n.createElement(ue,{routes:t.routes,future:t.future,state:i}):a))))),null)}function ue(e){let{routes:a,future:t,state:r}=e;return X(a,void 0,r,t)}const fe=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",de=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,we=n.forwardRef(function(a,t){let{onClick:r,relative:i,reloadDocument:o,replace:u,state:d,target:f,to:s,preventScrollReset:c,unstable_viewTransition:m}=a,h=Z(a,ne),{basename:y}=n.useContext(Y),S,P=!1;if(typeof s=="string"&&de.test(s)&&(S=s,fe))try{let v=new URL(window.location.href),w=s.startsWith("//")?new URL(v.protocol+s):new URL(s),b=q(w.pathname,y);w.origin===v.origin&&b!=null?s=b+w.search+w.hash:P=!0}catch{}let L=J(s,{relative:i}),x=he(s,{replace:u,state:d,target:f,preventScrollReset:c,relative:i,unstable_viewTransition:m});function E(v){r&&r(v),v.defaultPrevented||x(v)}return n.createElement("a",_({},h,{href:S||L,onClick:P||o?r:E,ref:t,target:f}))});var V;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(V||(V={}));var j;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(j||(j={}));function he(e,a){let{target:t,replace:r,state:i,preventScrollReset:o,relative:u,unstable_viewTransition:d}=a===void 0?{}:a,f=D(),s=I(),c=Q(e,{relative:u});return n.useCallback(m=>{if(ee(m,t)){m.preventDefault();let h=r!==void 0?r:k(s)===k(c);f(e,{replace:h,state:i,preventScrollReset:o,relative:u,unstable_viewTransition:d})}},[s,f,c,r,i,t,e,o,u,d])}function Re(e){let a=n.useRef(U(e)),t=n.useRef(!1),r=I(),i=n.useMemo(()=>te(r.search,t.current?null:a.current),[r.search]),o=D(),u=n.useCallback((d,f)=>{const s=U(typeof d=="function"?d(i):d);t.current=!0,o("?"+s,f)},[o,i]);return[i,u]}export{we as L,Se as R,Re as u};
