import{a as o,r as i}from"./index-IybTgENJ.js";import{u as p,r as d}from"./react-18-2YZTwWBn.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-5bnWhD0C.js";const{global:u}=__STORYBOOK_MODULE_GLOBAL__;var{FRAMEWORK_OPTIONS:s}=u,_=(r,t)=>{let{id:n,component:e}=t;if(!e)throw new Error(`Unable to render story ${n} as the component annotation is missing from the default export`);return o.createElement(e,{...r})},E=class extends i.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidMount(){let{hasError:r}=this.state,{showMain:t}=this.props;r||t()}componentDidCatch(r){let{showException:t}=this.props;t(r)}render(){let{hasError:r}=this.state,{children:t}=this.props;return r?null:t}},c=s!=null&&s.strictMode?i.StrictMode:i.Fragment;async function C({storyContext:r,unboundStoryFn:t,showMain:n,showException:e,forceRemount:l},a){let m=o.createElement(E,{showMain:n,showException:e},o.createElement(t,{...r})),h=c?o.createElement(c,null,m):m;return l&&p(a),await d(h,a),()=>p(a)}var D={renderer:"react"};export{D as parameters,_ as render,C as renderToCanvas};
