import{r as S}from"./index-CO9pbFv1.js";var m={exports:{}},w={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var f=S;function j(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var O=typeof Object.is=="function"?Object.is:j,_=f.useState,g=f.useEffect,k=f.useLayoutEffect,q=f.useDebugValue;function D(e,t){var r=t(),i=_({inst:{value:r,getSnapshot:t}}),n=i[0].inst,u=i[1];return k(function(){n.value=r,n.getSnapshot=t,d(n)&&u({inst:n})},[e,r,t]),g(function(){return d(n)&&u({inst:n}),e(function(){d(n)&&u({inst:n})})},[e]),q(r),r}function d(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!O(e,r)}catch{return!0}}function L(e,t){return t()}var M=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?L:D;w.useSyncExternalStore=f.useSyncExternalStore!==void 0?f.useSyncExternalStore:M;m.exports=w;var R=m.exports,J=S.useLayoutEffect,$={exports:{}},V={};/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var l=S,W=R;function z(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var A=typeof Object.is=="function"?Object.is:z,B=W.useSyncExternalStore,C=l.useRef,F=l.useEffect,G=l.useMemo,H=l.useDebugValue;V.useSyncExternalStoreWithSelector=function(e,t,r,i,n){var u=C(null);if(u.current===null){var c={hasValue:!1,value:null};u.current=c}else c=u.current;u=G(function(){function x(o){if(!h){if(h=!0,p=o,o=i(o),n!==void 0&&c.hasValue){var s=c.value;if(n(s,o))return v=s}return v=o}if(s=v,A(p,o))return s;var E=i(o);return n!==void 0&&n(s,E)?s:(p=o,v=E)}var h=!1,p,v,y=r===void 0?null:r;return[function(){return x(t())},y===null?void 0:function(){return x(y())}]},[t,r,i,n]);var a=B(e,u[0],u[1]);return F(function(){c.hasValue=!0,c.value=a},[a]),H(a),a};$.exports=V;var K=$.exports;export{J as i,R as s,K as w};
