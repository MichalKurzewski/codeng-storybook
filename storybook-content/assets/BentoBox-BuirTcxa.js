import{j as s}from"./jsx-runtime-DzgN-JE8.js";import{r}from"./index-CO9pbFv1.js";const X=({children:b,borderRadius:m="15px",startColor:x="rgb(255 255 255 / 0.8)",midColor:E="rgb(100 116 139 / 0.1)",endColor:M="rgb(100 116 139 / 0.5)"})=>{const[u,w]=r.useState({cx:"10%",cy:"10%"}),[n,R]=r.useState(void 0),a=r.useRef(null),p=r.useRef(""),T=r.useRef(null),f=r.useRef(!1),v=(e,o)=>{var i;const t=(i=a.current)==null?void 0:i.getBoundingClientRect();if(t){const h=(e-t.left)/t.width*100;let c;window.innerWidth<1024?c=(window.scrollY-t.top)/t.height*100:c=(o-t.top)/t.height*100,w({cx:`${h}%`,cy:`${c}%`})}},Y=e=>{const{clientX:o,clientY:t}=e;f.current=!1,v(o,t)},$=e=>{const{clientX:o,clientY:t}=e.touches[0];f.current=!1,v(o,t)},y=(e,o)=>{const c=10-e,d=window.innerWidth>1024?10-o:0,C=e+c*.05,j=o+d*.05;w({cx:`${C}%`,cy:`${j}%`}),(Math.abs(c)>.1||Math.abs(d)>.1)&&f.current&&(T.current=requestAnimationFrame(()=>y(C,j)))},L=()=>{f.current=!0;const e=parseFloat(u.cx),o=parseFloat(u.cy);y(e,o)},g=()=>{if(a.current){const e=a.current.getBoundingClientRect();R(e)}},l=(e,o)=>{let t=Date.now();return(...i)=>{t+o-Date.now()<=0&&(e(...i),t=Date.now())}};return r.useEffect(()=>{const e=setTimeout(()=>{g()},150);return p.current=`gradient-${Math.random().toString(36).slice(2,11)}`,()=>{clearTimeout(e)}},[]),r.useEffect(()=>{g();const e=()=>{g()};return window.addEventListener("resize",l(e,150)),()=>{window.removeEventListener("resize",l(e,150))}},[]),r.useEffect(()=>{const e=()=>{var o;if(window.innerWidth<1024){const t=(o=a.current)==null?void 0:o.getBoundingClientRect();if(t){console.log(window.innerHeight-window.outerHeight);const i=window.scrollY||document.documentElement.scrollTop,h=t.top,c=(i-h)/t.height*100;w(d=>({...d,cy:`${c}%`}))}}};return window.addEventListener("scroll",l(e,50)),()=>{window.removeEventListener("scroll",l(e,50))}},[]),s.jsxs("div",{ref:a,className:"relative overflow-hidden bento-box-animated flex flex-col justify-center",onMouseMove:l(e=>Y(e),20),onTouchMove:l(e=>$(e),20),onMouseLeave:L,style:{width:"100%",height:"100%",borderRadius:m},children:[b,n&&s.jsxs("svg",{xmlns:"http://www.w3.org/2000/svg",className:"absolute top-0 left-0",style:{width:n==null?void 0:n.width,height:n==null?void 0:n.height,pointerEvents:"none"},children:[s.jsx("defs",{children:s.jsxs("radialGradient",{id:p.current,gradientUnits:"userSpaceOnUse",r:"100%",cx:u.cx,cy:u.cy,children:[s.jsx("stop",{stopColor:x}),s.jsx("stop",{offset:.2,stopColor:x}),s.jsx("stop",{offset:.7,stopColor:E}),s.jsx("stop",{offset:1,stopColor:M})]})}),s.jsx("rect",{width:n==null?void 0:n.width,height:n==null?void 0:n.height,rx:m,stroke:`url(#${p.current})`,strokeWidth:3,fill:"none"})]})]})};X.__docgenInfo={description:"",methods:[],displayName:"BentoBox",props:{borderRadius:{defaultValue:{value:'"15px"',computed:!1},required:!1},startColor:{defaultValue:{value:'"rgb(255 255 255 / 0.8)"',computed:!1},required:!1},midColor:{defaultValue:{value:'"rgb(100 116 139 / 0.1)"',computed:!1},required:!1},endColor:{defaultValue:{value:'"rgb(100 116 139 / 0.5)"',computed:!1},required:!1}}};export{X as B};
