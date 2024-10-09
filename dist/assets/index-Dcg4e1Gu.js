import{r as j,a9 as q,aa as D,s as g,a2 as p,a3 as V,a4 as E,j as e,ab as z,ac as _,aN as ae,aj as se,bj as xe,T as l,G as a,H as c,v as ie,K as H,z as Z,R as U,M as oe,S as A,Z as T,c as S,P as y,g as he}from"./index-BEUoGpPe.js";import{F as O}from"./FormControlLabel-ve2AZZsn.js";import{C as Y}from"./Checkbox-D63HEkwE.js";import{C as je}from"./CardSecondaryAction-D0_a73-H.js";import{c as le,b as G,u as ce}from"./index.esm-Dno6FJaw.js";import"./Avatar-DSUX4n3r.js";const K=j.createContext({}),te=j.createContext({});function ve(t){return D("MuiStep",t)}q("MuiStep",["root","horizontal","vertical","alternativeLabel","completed"]);const be=["active","children","className","component","completed","disabled","expanded","index","last"],fe=t=>{const{classes:r,orientation:n,alternativeLabel:o,completed:s}=t;return _({root:["root",n,o&&"alternativeLabel",s&&"completed"]},ve,r)},ge=g("div",{name:"MuiStep",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,r[n.orientation],n.alternativeLabel&&r.alternativeLabel,n.completed&&r.completed]}})(({ownerState:t})=>p({},t.orientation==="horizontal"&&{paddingLeft:8,paddingRight:8},t.alternativeLabel&&{flex:1,position:"relative"})),de=j.forwardRef(function(r,n){const o=V({props:r,name:"MuiStep"}),{active:s,children:i,className:d,component:m="div",completed:x,disabled:v,expanded:h=!1,index:u,last:b}=o,w=E(o,be),{activeStep:B,connector:C,alternativeLabel:R,orientation:W,nonLinear:$}=j.useContext(K);let[f=!1,M=!1,N=!1]=[s,x,v];B===u?f=s!==void 0?s:!0:!$&&B>u?M=x!==void 0?x:!0:!$&&B<u&&(N=v!==void 0?v:!0);const F=j.useMemo(()=>({index:u,last:b,expanded:h,icon:u+1,active:f,completed:M,disabled:N}),[u,b,h,f,M,N]),L=p({},o,{active:f,orientation:W,alternativeLabel:R,completed:M,disabled:N,expanded:h,component:m}),k=fe(L),I=e.jsxs(ge,p({as:m,className:z(k.root,d),ref:n,ownerState:L},w,{children:[C&&R&&u!==0?C:null,i]}));return e.jsx(te.Provider,{value:F,children:C&&!R&&u!==0?e.jsxs(j.Fragment,{children:[C,I]}):I})});function Ce(t){return D("MuiStepper",t)}q("MuiStepper",["root","horizontal","vertical","alternativeLabel"]);function ye(t){return D("MuiStepConnector",t)}q("MuiStepConnector",["root","horizontal","vertical","alternativeLabel","active","completed","disabled","line","lineHorizontal","lineVertical"]);const Se=["className"],Ne=t=>{const{classes:r,orientation:n,alternativeLabel:o,active:s,completed:i,disabled:d}=t,m={root:["root",n,o&&"alternativeLabel",s&&"active",i&&"completed",d&&"disabled"],line:["line",`line${ae(n)}`]};return _(m,ye,r)},Le=g("div",{name:"MuiStepConnector",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,r[n.orientation],n.alternativeLabel&&r.alternativeLabel,n.completed&&r.completed]}})(({ownerState:t})=>p({flex:"1 1 auto"},t.orientation==="vertical"&&{marginLeft:12},t.alternativeLabel&&{position:"absolute",top:12,left:"calc(-50% + 20px)",right:"calc(50% + 20px)"})),Pe=g("span",{name:"MuiStepConnector",slot:"Line",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.line,r[`line${ae(n.orientation)}`]]}})(({ownerState:t,theme:r})=>{const n=r.palette.mode==="light"?r.palette.grey[400]:r.palette.grey[600];return p({display:"block",borderColor:r.vars?r.vars.palette.StepConnector.border:n},t.orientation==="horizontal"&&{borderTopStyle:"solid",borderTopWidth:1},t.orientation==="vertical"&&{borderLeftStyle:"solid",borderLeftWidth:1,minHeight:24})}),Be=j.forwardRef(function(r,n){const o=V({props:r,name:"MuiStepConnector"}),{className:s}=o,i=E(o,Se),{alternativeLabel:d,orientation:m="horizontal"}=j.useContext(K),{active:x,disabled:v,completed:h}=j.useContext(te),u=p({},o,{alternativeLabel:d,orientation:m,active:x,completed:h,disabled:v}),b=Ne(u);return e.jsx(Le,p({className:z(b.root,s),ref:n,ownerState:u},i,{children:e.jsx(Pe,{className:b.line,ownerState:u})}))}),Re=["activeStep","alternativeLabel","children","className","component","connector","nonLinear","orientation"],$e=t=>{const{orientation:r,alternativeLabel:n,classes:o}=t;return _({root:["root",r,n&&"alternativeLabel"]},Ce,o)},we=g("div",{name:"MuiStepper",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,r[n.orientation],n.alternativeLabel&&r.alternativeLabel]}})(({ownerState:t})=>p({display:"flex"},t.orientation==="horizontal"&&{flexDirection:"row",alignItems:"center"},t.orientation==="vertical"&&{flexDirection:"column"},t.alternativeLabel&&{alignItems:"flex-start"})),We=e.jsx(Be,{}),me=j.forwardRef(function(r,n){const o=V({props:r,name:"MuiStepper"}),{activeStep:s=0,alternativeLabel:i=!1,children:d,className:m,component:x="div",connector:v=We,nonLinear:h=!1,orientation:u="horizontal"}=o,b=E(o,Re),w=p({},o,{alternativeLabel:i,orientation:u,component:x}),B=$e(w),C=j.Children.toArray(d).filter(Boolean),R=C.map(($,f)=>j.cloneElement($,p({index:f,last:f+1===C.length},$.props))),W=j.useMemo(()=>({activeStep:s,alternativeLabel:i,connector:v,nonLinear:h,orientation:u}),[s,i,v,h,u]);return e.jsx(K.Provider,{value:W,children:e.jsx(we,p({as:x,ownerState:w,className:z(B.root,m),ref:n},b,{children:R}))})}),Me=se(e.jsx("path",{d:"M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"}),"CheckCircle"),Fe=se(e.jsx("path",{d:"M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"}),"Warning");function ke(t){return D("MuiStepIcon",t)}const Q=q("MuiStepIcon",["root","active","completed","error","text"]);var ne;const Ie=["active","className","completed","error","icon"],ze=t=>{const{classes:r,active:n,completed:o,error:s}=t;return _({root:["root",n&&"active",o&&"completed",s&&"error"],text:["text"]},ke,r)},X=g(xe,{name:"MuiStepIcon",slot:"Root",overridesResolver:(t,r)=>r.root})(({theme:t})=>({display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),color:(t.vars||t).palette.text.disabled,[`&.${Q.completed}`]:{color:(t.vars||t).palette.primary.main},[`&.${Q.active}`]:{color:(t.vars||t).palette.primary.main},[`&.${Q.error}`]:{color:(t.vars||t).palette.error.main}})),Ae=g("text",{name:"MuiStepIcon",slot:"Text",overridesResolver:(t,r)=>r.text})(({theme:t})=>({fill:(t.vars||t).palette.primary.contrastText,fontSize:t.typography.caption.fontSize,fontFamily:t.typography.fontFamily})),Te=j.forwardRef(function(r,n){const o=V({props:r,name:"MuiStepIcon"}),{active:s=!1,className:i,completed:d=!1,error:m=!1,icon:x}=o,v=E(o,Ie),h=p({},o,{active:s,completed:d,error:m}),u=ze(h);if(typeof x=="number"||typeof x=="string"){const b=z(i,u.root);return m?e.jsx(X,p({as:Fe,className:b,ref:n,ownerState:h},v)):d?e.jsx(X,p({as:Me,className:b,ref:n,ownerState:h},v)):e.jsxs(X,p({className:b,ref:n,ownerState:h},v,{children:[ne||(ne=e.jsx("circle",{cx:"12",cy:"12",r:"12"})),e.jsx(Ae,{className:u.text,x:"12",y:"12",textAnchor:"middle",dominantBaseline:"central",ownerState:h,children:x})]}))}return x});function Ue(t){return D("MuiStepLabel",t)}const P=q("MuiStepLabel",["root","horizontal","vertical","label","active","completed","error","disabled","iconContainer","alternativeLabel","labelContainer"]),qe=["children","className","componentsProps","error","icon","optional","slotProps","StepIconComponent","StepIconProps"],De=t=>{const{classes:r,orientation:n,active:o,completed:s,error:i,disabled:d,alternativeLabel:m}=t;return _({root:["root",n,i&&"error",d&&"disabled",m&&"alternativeLabel"],label:["label",o&&"active",s&&"completed",i&&"error",d&&"disabled",m&&"alternativeLabel"],iconContainer:["iconContainer",o&&"active",s&&"completed",i&&"error",d&&"disabled",m&&"alternativeLabel"],labelContainer:["labelContainer",m&&"alternativeLabel"]},Ue,r)},Ve=g("span",{name:"MuiStepLabel",slot:"Root",overridesResolver:(t,r)=>{const{ownerState:n}=t;return[r.root,r[n.orientation]]}})(({ownerState:t})=>p({display:"flex",alignItems:"center",[`&.${P.alternativeLabel}`]:{flexDirection:"column"},[`&.${P.disabled}`]:{cursor:"default"}},t.orientation==="vertical"&&{textAlign:"left",padding:"8px 0"})),Ee=g("span",{name:"MuiStepLabel",slot:"Label",overridesResolver:(t,r)=>r.label})(({theme:t})=>p({},t.typography.body2,{display:"block",transition:t.transitions.create("color",{duration:t.transitions.duration.shortest}),[`&.${P.active}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${P.completed}`]:{color:(t.vars||t).palette.text.primary,fontWeight:500},[`&.${P.alternativeLabel}`]:{marginTop:16},[`&.${P.error}`]:{color:(t.vars||t).palette.error.main}})),_e=g("span",{name:"MuiStepLabel",slot:"IconContainer",overridesResolver:(t,r)=>r.iconContainer})(()=>({flexShrink:0,display:"flex",paddingRight:8,[`&.${P.alternativeLabel}`]:{paddingRight:0}})),Je=g("span",{name:"MuiStepLabel",slot:"LabelContainer",overridesResolver:(t,r)=>r.labelContainer})(({theme:t})=>({width:"100%",color:(t.vars||t).palette.text.secondary,[`&.${P.alternativeLabel}`]:{textAlign:"center"}})),re=j.forwardRef(function(r,n){var o;const s=V({props:r,name:"MuiStepLabel"}),{children:i,className:d,componentsProps:m={},error:x=!1,icon:v,optional:h,slotProps:u={},StepIconComponent:b,StepIconProps:w}=s,B=E(s,qe),{alternativeLabel:C,orientation:R}=j.useContext(K),{active:W,disabled:$,completed:f,icon:M}=j.useContext(te),N=v||M;let F=b;N&&!F&&(F=Te);const L=p({},s,{active:W,alternativeLabel:C,completed:f,disabled:$,error:x,orientation:R}),k=De(L),I=(o=u.label)!=null?o:m.label;return e.jsxs(Ve,p({className:z(k.root,d),ref:n,ownerState:L},B,{children:[N||F?e.jsx(_e,{className:k.iconContainer,ownerState:L,children:e.jsx(F,p({completed:f,active:W,error:x,icon:N},w))}):null,e.jsxs(Je,{className:k.labelContainer,ownerState:L,children:[i?e.jsx(Ee,p({ownerState:L},I,{className:z(k.label,I==null?void 0:I.className),children:i})):null,h]})]}))});re.muiName="StepLabel";function He(){return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h5",gutterBottom:!0,sx:{mb:2},children:"Shipping address"}),e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{required:!0,id:"firstNameBasic",name:"firstName",label:"First name",fullWidth:!0,autoComplete:"given-name"})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{required:!0,id:"lastNameBasic",name:"lastName",label:"Last name",fullWidth:!0,autoComplete:"family-name"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(c,{required:!0,id:"address1Basic",name:"address1",label:"Address line 1",fullWidth:!0,autoComplete:"shipping address-line1"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(c,{id:"address2Basic",name:"address2",label:"Address line 2",fullWidth:!0,autoComplete:"shipping address-line2"})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{required:!0,id:"cityBasic",name:"city",label:"City",fullWidth:!0,autoComplete:"shipping address-level2"})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{id:"stateBasic",name:"state",label:"State/Province/Region",fullWidth:!0})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{required:!0,id:"zipBasic",name:"zip",label:"Zip / Postal code",fullWidth:!0,autoComplete:"shipping postal-code"})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{required:!0,id:"countryBasic",name:"country",label:"Country",fullWidth:!0,autoComplete:"shipping country"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(O,{control:e.jsx(Y,{color:"secondary",name:"saveAddress",value:"yes"}),label:"Use this address for payment details"})})]})]})}function Ze(){return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h5",gutterBottom:!0,sx:{mb:2},children:"Payment method"}),e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,md:6,children:e.jsx(c,{required:!0,id:"cardName",label:"Name on card",fullWidth:!0,autoComplete:"cc-name"})}),e.jsx(a,{item:!0,xs:12,md:6,children:e.jsx(c,{required:!0,id:"cardNumber",label:"Card number",fullWidth:!0,autoComplete:"cc-number"})}),e.jsx(a,{item:!0,xs:12,md:6,children:e.jsx(c,{required:!0,id:"expDate",label:"Expiry date",fullWidth:!0,autoComplete:"cc-exp"})}),e.jsx(a,{item:!0,xs:12,md:6,children:e.jsx(c,{required:!0,id:"cvv",label:"CVV",helperText:"Last three digits on signature strip",fullWidth:!0,autoComplete:"cc-csc"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(O,{control:e.jsx(Y,{color:"secondary",name:"saveCard",value:"yes"}),label:"Remember credit card details for next time"})})]})]})}const Ge=[{name:"Product 1",desc:"A nice thing",price:"$9.99"},{name:"Product 2",desc:"Another thing",price:"$3.45"},{name:"Product 3",desc:"Something else",price:"$6.51"},{name:"Product 4",desc:"Best thing of all",price:"$14.11"},{name:"Shipping",desc:"",price:"Free"}],Oe=["1 Material-UI Drive","Reactville","Anytown","99999","USA"],Ye=[{name:"Card type",detail:"Visa"},{name:"Card holder",detail:"Mr John Smith"},{name:"Card number",detail:"xxxx-xxxx-xxxx-1234"},{name:"Expiry date",detail:"04/2024"}];function Ke(){return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h5",gutterBottom:!0,sx:{mb:2},children:"Order summary"}),e.jsxs(ie,{disablePadding:!0,children:[Ge.map(t=>e.jsxs(H,{sx:{py:1,px:0},children:[e.jsx(Z,{primary:t.name,secondary:t.desc}),e.jsx(l,{variant:"body2",children:t.price})]},t.name)),e.jsxs(H,{sx:{py:1,px:0},children:[e.jsx(Z,{primary:"Total"}),e.jsx(l,{variant:"subtitle1",children:"$34.06"})]})]}),e.jsxs(a,{container:!0,spacing:2,children:[e.jsxs(a,{item:!0,xs:12,sm:6,children:[e.jsx(l,{variant:"h6",gutterBottom:!0,sx:{mt:2},children:"Shipping"}),e.jsx(l,{gutterBottom:!0,children:"John Smith"}),e.jsx(l,{gutterBottom:!0,children:Oe.join(", ")})]}),e.jsxs(a,{item:!0,container:!0,direction:"column",xs:12,sm:6,children:[e.jsx(l,{variant:"h6",gutterBottom:!0,sx:{mt:2},children:"Payment details"}),e.jsx(a,{container:!0,children:Ye.map(t=>e.jsxs(j.Fragment,{children:[e.jsx(a,{item:!0,xs:6,children:e.jsx(l,{gutterBottom:!0,children:t.name})}),e.jsx(a,{item:!0,xs:6,children:e.jsx(l,{gutterBottom:!0,children:t.detail})})]},t.name))})]})]})]})}const ee=["Shipping address","Payment details","Review your order"];function Qe(t){switch(t){case 0:return e.jsx(He,{});case 1:return e.jsx(Ze,{});case 2:return e.jsx(Ke,{});default:throw new Error("Unknown step")}}const Xe=()=>{const[t,r]=U.useState(0),n=()=>{r(t+1)},o=()=>{r(t-1)};return e.jsxs(oe,{title:"Basic",secondary:e.jsx(je,{link:"https://next.material-ui.com/components/steppers/#main-content"}),children:[e.jsx(me,{activeStep:t,sx:{pt:3,pb:5},children:ee.map(s=>e.jsx(de,{children:e.jsx(re,{children:s})},s))}),e.jsx(e.Fragment,{children:t===ee.length?e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h5",gutterBottom:!0,children:"Thank you for your order."}),e.jsx(l,{variant:"subtitle1",children:"Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped."}),e.jsx(A,{direction:"row",justifyContent:"flex-end",children:e.jsx(T,{children:e.jsx(S,{variant:"contained",color:"error",onClick:()=>r(0),sx:{my:3,ml:1},children:"Reset"})})})]}):e.jsxs(e.Fragment,{children:[Qe(t),e.jsxs(A,{direction:"row",justifyContent:t!==0?"space-between":"flex-end",children:[t!==0&&e.jsx(S,{onClick:o,sx:{my:3,ml:1},children:"Back"}),e.jsx(T,{children:e.jsx(S,{variant:"contained",onClick:n,sx:{my:3,ml:1},children:t===ee.length-1?"Place order":"Next"})})]})]})})]})},et=le({firstName:G().required("First Name is required"),lastName:G().required("Last Name is required")}),ue=({shippingData:t,setShippingData:r,handleNext:n,setErrorIndex:o})=>{const s=ce({initialValues:{firstName:t.firstName,lastName:t.lastName},validationSchema:et,onSubmit:i=>{r({firstName:i.firstName,lastName:i.lastName}),n()}});return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h5",gutterBottom:!0,sx:{mb:2},children:"Shipping address"}),e.jsx("form",{onSubmit:s.handleSubmit,id:"validation-forms",children:e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{id:"firstName",name:"firstName",label:"First Name *",value:s.values.firstName,onChange:s.handleChange,error:s.touched.firstName&&!!s.errors.firstName,helperText:s.touched.firstName&&s.errors.firstName,fullWidth:!0,autoComplete:"given-name"})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{id:"lastName",name:"lastName",label:"Last Name *",value:s.values.lastName,onChange:s.handleChange,error:s.touched.lastName&&!!s.errors.lastName,helperText:s.touched.lastName&&s.errors.lastName,fullWidth:!0,autoComplete:"family-name"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(c,{id:"address1",name:"address1",label:"Address line 1",fullWidth:!0,autoComplete:"shipping address-line1"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(c,{id:"address2",name:"address2",label:"Address line 2",fullWidth:!0,autoComplete:"shipping address-line2"})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{id:"city",name:"city",label:"City",fullWidth:!0,autoComplete:"shipping address-level2"})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{id:"state",name:"state",label:"State/Province/Region",fullWidth:!0})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{id:"zip",name:"zip",label:"Zip / Postal code",fullWidth:!0,autoComplete:"shipping postal-code"})}),e.jsx(a,{item:!0,xs:12,sm:6,children:e.jsx(c,{id:"country",name:"country",label:"Country",fullWidth:!0,autoComplete:"shipping country"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(O,{control:e.jsx(Y,{color:"secondary",name:"saveAddress",value:"yes"}),label:"Use this address for payment details"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(A,{direction:"row",justifyContent:"flex-end",children:e.jsx(T,{children:e.jsx(S,{variant:"contained",sx:{my:3,ml:1},type:"submit",onClick:()=>o(0),children:"Next"})})})})]})})]})};ue.propTypes={shippingData:y.object,setShippingData:y.func,handleNext:y.func,setErrorIndex:y.func};const tt=le({cardName:G().required("First Name is required"),cardNumber:G().required("Last Name is required")});function pe({paymentData:t,setPaymentData:r,handleNext:n,handleBack:o,setErrorIndex:s}){const i=ce({initialValues:{cardName:t.cardName,cardNumber:t.cardNumber},validationSchema:tt,onSubmit:d=>{r({cardName:d.cardName,cardNumber:d.cardNumber}),n()}});return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h5",gutterBottom:!0,sx:{mb:2},children:"Payment method"}),e.jsx("form",{onSubmit:i.handleSubmit,children:e.jsxs(a,{container:!0,spacing:3,children:[e.jsx(a,{item:!0,xs:12,md:6,children:e.jsx(c,{id:"cardName",name:"cardName",value:i.values.cardName,onChange:i.handleChange,error:i.touched.cardName&&!!i.errors.cardName,helperText:i.touched.cardName&&i.errors.cardName,label:"Name on card",fullWidth:!0,autoComplete:"cc-name"})}),e.jsx(a,{item:!0,xs:12,md:6,children:e.jsx(c,{id:"cardNumber",name:"cardNumber",label:"Card number",value:i.values.cardNumber,onChange:i.handleChange,error:i.touched.cardNumber&&!!i.errors.cardNumber,helperText:i.touched.cardNumber&&i.errors.cardNumber,fullWidth:!0,autoComplete:"cc-number"})}),e.jsx(a,{item:!0,xs:12,md:6,children:e.jsx(c,{id:"expDate",label:"Expiry date",fullWidth:!0,autoComplete:"cc-exp"})}),e.jsx(a,{item:!0,xs:12,md:6,children:e.jsx(c,{id:"cvv",label:"CVV",helperText:"Last three digits on signature strip",fullWidth:!0,autoComplete:"cc-csc"})}),e.jsx(a,{item:!0,xs:12,children:e.jsx(O,{control:e.jsx(Y,{color:"secondary",name:"saveCard",value:"yes"}),label:"Remember credit card details for next time"})}),e.jsx(a,{item:!0,xs:12,children:e.jsxs(A,{direction:"row",justifyContent:"space-between",children:[e.jsx(S,{onClick:o,sx:{my:3,ml:1},children:"Back"}),e.jsx(T,{children:e.jsx(S,{variant:"contained",type:"submit",sx:{my:3,ml:1},onClick:()=>s(1),children:"Next"})})]})})]})})]})}pe.propTypes={paymentData:y.object,setPaymentData:y.func,handleNext:y.func,handleBack:y.func,setErrorIndex:y.func};const rt=[{name:"Product 1",desc:"A nice thing",price:"$9.99"},{name:"Product 2",desc:"Another thing",price:"$3.45"},{name:"Product 3",desc:"Something else",price:"$6.51"},{name:"Product 4",desc:"Best thing of all",price:"$14.11"},{name:"Shipping",desc:"",price:"Free"}],nt=["1 Material-UI Drive","Reactville","Anytown","99999","USA"],at=[{name:"Card type",detail:"Visa"},{name:"Card holder",detail:"Mr John Smith"},{name:"Card number",detail:"xxxx-xxxx-xxxx-1234"},{name:"Expiry date",detail:"04/2024"}];function st(){return e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h5",gutterBottom:!0,sx:{mb:2},children:"Order summary"}),e.jsxs(ie,{disablePadding:!0,children:[rt.map(t=>e.jsxs(H,{sx:{py:1,px:0},children:[e.jsx(Z,{primary:t.name,secondary:t.desc}),e.jsx(l,{variant:"body2",children:t.price})]},t.name)),e.jsxs(H,{sx:{py:1,px:0},children:[e.jsx(Z,{primary:"Total"}),e.jsx(l,{variant:"subtitle1",children:"$34.06"})]})]}),e.jsxs(a,{container:!0,spacing:2,children:[e.jsxs(a,{item:!0,xs:12,sm:6,children:[e.jsx(l,{variant:"h6",gutterBottom:!0,sx:{mt:2},children:"Shipping"}),e.jsx(l,{gutterBottom:!0,children:"John Smith"}),e.jsx(l,{gutterBottom:!0,children:nt.join(", ")})]}),e.jsxs(a,{item:!0,container:!0,direction:"column",xs:12,sm:6,children:[e.jsx(l,{variant:"h6",gutterBottom:!0,sx:{mt:2},children:"Payment details"}),e.jsx(a,{container:!0,children:at.map(t=>e.jsxs(j.Fragment,{children:[e.jsx(a,{item:!0,xs:6,children:e.jsx(l,{gutterBottom:!0,children:t.name})}),e.jsx(a,{item:!0,xs:6,children:e.jsx(l,{gutterBottom:!0,children:t.detail})})]},t.name))})]})]})]})}const J=["Shipping address","Payment details","Review your order"],it=(t,r,n,o,s,i,d,m)=>{switch(t){case 0:return e.jsx(ue,{handleNext:r,setErrorIndex:o,shippingData:s,setShippingData:i});case 1:return e.jsx(pe,{handleNext:r,handleBack:n,setErrorIndex:o,paymentData:d,setPaymentData:m});case 2:return e.jsx(st,{});default:throw new Error("Unknown step")}},ot=()=>{const[t,r]=U.useState(0),[n,o]=U.useState({}),[s,i]=U.useState({}),[d,m]=U.useState(null),x=()=>{r(t+1),m(null)},v=()=>{r(t-1)};return e.jsxs(oe,{title:"Validation",children:[e.jsx(me,{activeStep:t,sx:{pt:3,pb:5},children:J.map((h,u)=>{const b={};return u===d&&(b.optional=e.jsx(l,{variant:"caption",color:"error",children:"Error"}),b.error=!0),e.jsx(de,{children:e.jsx(re,{...b,children:h})},h)})}),e.jsx(e.Fragment,{children:t===J.length?e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"h5",gutterBottom:!0,children:"Thank you for your order."}),e.jsx(l,{variant:"subtitle1",children:"Your order number is #2001539. We have emailed your order confirmation, and will send you an update when your order has shipped."}),e.jsx(A,{direction:"row",justifyContent:"flex-end",children:e.jsx(T,{children:e.jsx(S,{variant:"contained",color:"error",onClick:()=>{o({}),i({}),r(0)},sx:{my:3,ml:1},children:"Reset"})})})]}):e.jsxs(e.Fragment,{children:[it(t,x,v,m,n,o,s,i),t===J.length-1&&e.jsxs(A,{direction:"row",justifyContent:t!==0?"space-between":"flex-end",children:[t!==0&&e.jsx(S,{onClick:v,sx:{my:3,ml:1},children:"Back"}),e.jsx(T,{children:e.jsx(S,{variant:"contained",onClick:x,sx:{my:3,ml:1},children:t===J.length-1?"Place order":"Next"})})]})]})})]})},xt=()=>e.jsxs(a,{container:!0,spacing:he,justifyContent:"center",children:[e.jsx(a,{item:!0,xs:12,md:9,lg:7,children:e.jsx(Xe,{})}),e.jsx(a,{item:!0,xs:12,md:9,lg:7,children:e.jsx(ot,{})})]});export{xt as default};
