import{P as W,u as v,bJ as T,R as g,j as e,F as w,W as f,X as b,a6 as u,Y as L,I as M,G as t,T as d,o as x,B as y,Z as R,c as q,a5 as E,bK as H,S as $,D as z}from"./index-BEUoGpPe.js";import{A as G,a as J}from"./AuthCardWrapper-ip7b3SUA.js";import{F as K,c as V,b as C}from"./index.esm-Dno6FJaw.js";import{u as _}from"./useScriptRef-o9NxW3E7.js";import{d as O}from"./Visibility-DY6HUV9b.js";import{d as Q}from"./VisibilityOff-BTCMHxHn.js";import{F as U}from"./FormControlLabel-ve2AZZsn.js";import{C as X}from"./Checkbox-D63HEkwE.js";import{A as Y}from"./AuthFooter-CLhqfzeO.js";const I=({loginProp:r,...n})=>{const h=v(),{login:k}=T(),p=_(),[P,A]=g.useState(!0),[m,F]=g.useState(!1),S=()=>{F(!m)},B=s=>{s.preventDefault()};return e.jsx(K,{initialValues:{email:"awais.kamran@conradlabs.com",password:"123456",submit:null},validationSchema:V().shape({email:C().email("Must be a valid email").max(255).required("Email is required"),password:C().max(255).required("Password is required")}),onSubmit:async(s,{setErrors:o,setStatus:i,setSubmitting:a})=>{try{await k(s.email,s.password),p.current&&(i({success:!0}),a(!1))}catch(l){console.error(l),p.current&&(i({success:!1}),o({submit:l.message}),a(!1))}},children:({errors:s,handleBlur:o,handleChange:i,handleSubmit:a,isSubmitting:l,touched:c,values:j})=>e.jsxs("form",{noValidate:!0,onSubmit:a,...n,children:[e.jsxs(w,{fullWidth:!0,error:!!(c.email&&s.email),sx:{...h.typography.customInput},children:[e.jsx(f,{htmlFor:"outlined-adornment-email-login",children:"Email Address / Username"}),e.jsx(b,{id:"outlined-adornment-email-login",type:"email",value:j.email,name:"email",onBlur:o,onChange:i,inputProps:{}}),c.email&&s.email&&e.jsx(u,{error:!0,id:"standard-weight-helper-text-email-login",children:s.email})]}),e.jsxs(w,{fullWidth:!0,error:!!(c.password&&s.password),sx:{...h.typography.customInput},children:[e.jsx(f,{htmlFor:"outlined-adornment-password-login",children:"Password"}),e.jsx(b,{id:"outlined-adornment-password-login",type:m?"text":"password",value:j.password,name:"password",onBlur:o,onChange:i,endAdornment:e.jsx(L,{position:"end",children:e.jsx(M,{"aria-label":"toggle password visibility",onClick:S,onMouseDown:B,edge:"end",size:"large",children:m?e.jsx(O,{}):e.jsx(Q,{})})}),inputProps:{},label:"Password"}),c.password&&s.password&&e.jsx(u,{error:!0,id:"standard-weight-helper-text-password-login",children:s.password})]}),e.jsxs(t,{container:!0,alignItems:"center",justifyContent:"space-between",children:[e.jsx(t,{item:!0,children:e.jsx(U,{control:e.jsx(X,{checked:P,onChange:D=>A(D.target.checked),name:"checked",color:"primary"}),label:"Keep me logged in"})}),e.jsx(t,{item:!0,children:e.jsx(d,{variant:"subtitle1",component:x,to:r?`/pages/forgot-password/forgot-password${r}`:"/forgot",color:"secondary",sx:{textDecoration:"none"},children:"Forgot Password?"})})]}),s.submit&&e.jsx(y,{sx:{mt:3},children:e.jsx(u,{error:!0,children:s.submit})}),e.jsx(y,{sx:{mt:2},children:e.jsx(R,{children:e.jsx(q,{color:"secondary",disabled:l,fullWidth:!0,size:"large",type:"submit",variant:"contained",children:"Sign In"})})})]})})};I.propTypes={loginProp:W.number};const ae=()=>{const r=v(),n=E(r.breakpoints.down("md"));return e.jsx(G,{children:e.jsxs(t,{container:!0,direction:"column",justifyContent:"flex-end",sx:{minHeight:"100vh"},children:[e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,justifyContent:"center",alignItems:"center",sx:{minHeight:"calc(100vh - 68px)"},children:e.jsx(t,{item:!0,sx:{m:{xs:1,sm:3},mb:0},children:e.jsx(J,{children:e.jsxs(t,{container:!0,spacing:2,alignItems:"center",justifyContent:"center",children:[e.jsx(t,{item:!0,sx:{mb:3},children:e.jsx(x,{to:"#","aria-label":"theme-logo",children:e.jsx(H,{})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{container:!0,direction:n?"column-reverse":"row",alignItems:"center",justifyContent:"center",children:e.jsx(t,{item:!0,children:e.jsxs($,{alignItems:"center",justifyContent:"center",spacing:1,children:[e.jsx(d,{color:r.palette.secondary.main,gutterBottom:!0,variant:n?"h3":"h2",children:"Hi, Welcome Back"}),e.jsx(d,{variant:"caption",fontSize:"16px",textAlign:n?"center":"inherit",children:"Enter your credentials to continue"})]})})})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(I,{})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(z,{})}),e.jsx(t,{item:!0,xs:12,children:e.jsx(t,{item:!0,container:!0,direction:"column",alignItems:"center",xs:12,children:e.jsx(d,{component:x,to:"/register",variant:"subtitle1",sx:{textDecoration:"none"},children:"Don't have an account?"})})})]})})})})}),e.jsx(t,{item:!0,xs:12,sx:{m:3,mt:1},children:e.jsx(Y,{})})]})})};export{ae as default};
