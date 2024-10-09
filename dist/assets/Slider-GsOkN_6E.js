import{r as S,ak as yt,a$ as me,b0 as St,ap as at,am as Lt,al as qe,au as Re,b1 as Ge,a2 as i,b2 as we,a9 as Pt,aa as Ct,ab as ne,j as C,s as Z,aN as B,aS as $t,aT as Tt,aO as nt,b3 as ut,a3 as Rt,u as wt,a4 as _t,a8 as Y,ac as It}from"./index-BEUoGpPe.js";import{v as At}from"./visuallyHidden-Do5moY9V.js";function Mt(e,t,n=(s,u)=>s===u){return e.length===t.length&&e.every((s,u)=>n(s,t[u]))}const zt=2;function dt(e,t){return e-t}function lt(e,t){var n;const{index:s}=(n=e.reduce((u,L,$)=>{const h=Math.abs(t-L);return u===null||h<u.distance||h===u.distance?{distance:h,index:$}:u},null))!=null?n:{};return s}function Pe(e,t){if(t.current!==void 0&&e.changedTouches){const n=e;for(let s=0;s<n.changedTouches.length;s+=1){const u=n.changedTouches[s];if(u.identifier===t.current)return{x:u.clientX,y:u.clientY}}return!1}return{x:e.clientX,y:e.clientY}}function _e(e,t,n){return(e-t)*100/(n-t)}function Nt(e,t,n){return(n-t)*e+t}function Et(e){if(Math.abs(e)<1){const n=e.toExponential().split("e-"),s=n[0].split(".")[1];return(s?s.length:0)+parseInt(n[1],10)}const t=e.toString().split(".")[1];return t?t.length:0}function Vt(e,t,n){const s=Math.round((e-n)/t)*t+n;return Number(s.toFixed(Et(t)))}function st({values:e,newValue:t,index:n}){const s=e.slice();return s[n]=t,s.sort(dt)}function Ce({sliderRef:e,activeIndex:t,setActive:n}){var s,u;const L=Re(e.current);if(!((s=e.current)!=null&&s.contains(L.activeElement))||Number(L==null||(u=L.activeElement)==null?void 0:u.getAttribute("data-index"))!==t){var $;($=e.current)==null||$.querySelector(`[type="range"][data-index="${t}"]`).focus()}n&&n(t)}function $e(e,t){return typeof e=="number"&&typeof t=="number"?e===t:typeof e=="object"&&typeof t=="object"?Mt(e,t):!1}const Ft={horizontal:{offset:e=>({left:`${e}%`}),leap:e=>({width:`${e}%`})},"horizontal-reverse":{offset:e=>({right:`${e}%`}),leap:e=>({width:`${e}%`})},vertical:{offset:e=>({bottom:`${e}%`}),leap:e=>({height:`${e}%`})}},Ht=e=>e;let Te;function it(){return Te===void 0&&(typeof CSS<"u"&&typeof CSS.supports=="function"?Te=CSS.supports("touch-action","none"):Te=!0),Te}function jt(e){const{"aria-labelledby":t,defaultValue:n,disabled:s=!1,disableSwap:u=!1,isRtl:L=!1,marks:$=!1,max:h=100,min:f=0,name:U,onChange:le,onChangeCommitted:K,orientation:ee="horizontal",rootRef:be,scale:se=Ht,step:A=1,shiftStep:ie=10,tabIndex:he,value:ve}=e,V=S.useRef(),[W,j]=S.useState(-1),[ge,O]=S.useState(-1),[ce,ue]=S.useState(!1),X=S.useRef(0),[T,de]=yt({controlled:ve,default:n??f,name:"Slider"}),M=le&&((o,r,a)=>{const c=o.nativeEvent||o,p=new c.constructor(c.type,c);Object.defineProperty(p,"target",{writable:!0,value:{value:r,name:U}}),le(p,r,a)}),q=Array.isArray(T);let g=q?T.slice().sort(dt):[T];g=g.map(o=>o==null?f:me(o,f,h));const pe=$===!0&&A!==null?[...Array(Math.floor((h-f)/A)+1)].map((o,r)=>({value:f+A*r})):$||[],R=pe.map(o=>o.value),{isFocusVisibleRef:w,onBlur:z,onFocus:Ie,ref:Ae}=St(),[ke,te]=S.useState(-1),P=S.useRef(),xe=at(Ae,P),fe=at(be,xe),Me=o=>r=>{var a;const c=Number(r.currentTarget.getAttribute("data-index"));Ie(r),w.current===!0&&te(c),O(c),o==null||(a=o.onFocus)==null||a.call(o,r)},oe=o=>r=>{var a;z(r),w.current===!1&&te(-1),O(-1),o==null||(a=o.onBlur)==null||a.call(o,r)},G=(o,r)=>{const a=Number(o.currentTarget.getAttribute("data-index")),c=g[a],p=R.indexOf(c);let l=r;if(pe&&A==null){const _=R[R.length-1];l>_?l=_:l<R[0]?l=R[0]:l=l<c?R[p-1]:R[p+1]}if(l=me(l,f,h),q){u&&(l=me(l,g[a-1]||-1/0,g[a+1]||1/0));const _=l;l=st({values:g,newValue:l,index:a});let E=a;u||(E=l.indexOf(_)),Ce({sliderRef:P,activeIndex:E})}de(l),te(a),M&&!$e(l,T)&&M(o,l,a),K&&K(o,l)},ze=o=>r=>{var a;if(A!==null){const c=Number(r.currentTarget.getAttribute("data-index")),p=g[c];let l=null;(r.key==="ArrowLeft"||r.key==="ArrowDown")&&r.shiftKey||r.key==="PageDown"?l=Math.max(p-ie,f):((r.key==="ArrowRight"||r.key==="ArrowUp")&&r.shiftKey||r.key==="PageUp")&&(l=Math.min(p+ie,h)),l!==null&&(G(r,l),r.preventDefault())}o==null||(a=o.onKeyDown)==null||a.call(o,r)};Lt(()=>{if(s&&P.current.contains(document.activeElement)){var o;(o=document.activeElement)==null||o.blur()}},[s]),s&&W!==-1&&j(-1),s&&ke!==-1&&te(-1);const Ne=o=>r=>{var a;(a=o.onChange)==null||a.call(o,r),G(r,r.target.valueAsNumber)},ye=S.useRef();let re=ee;L&&ee==="horizontal"&&(re+="-reverse");const F=({finger:o,move:r=!1})=>{const{current:a}=P,{width:c,height:p,bottom:l,left:_}=a.getBoundingClientRect();let E;re.indexOf("vertical")===0?E=(l-o.y)/p:E=(o.x-_)/c,re.indexOf("-reverse")!==-1&&(E=1-E);let k;if(k=Nt(E,f,h),A)k=Vt(k,A,f);else{const Q=lt(R,k);k=R[Q]}k=me(k,f,h);let b=0;if(q){r?b=ye.current:b=lt(g,k),u&&(k=me(k,g[b-1]||-1/0,g[b+1]||1/0));const Q=k;k=st({values:g,newValue:k,index:b}),u&&r||(b=k.indexOf(Q),ye.current=b)}return{newValue:k,activeIndex:b}},m=qe(o=>{const r=Pe(o,V);if(!r)return;if(X.current+=1,o.type==="mousemove"&&o.buttons===0){d(o);return}const{newValue:a,activeIndex:c}=F({finger:r,move:!0});Ce({sliderRef:P,activeIndex:c,setActive:j}),de(a),!ce&&X.current>zt&&ue(!0),M&&!$e(a,T)&&M(o,a,c)}),d=qe(o=>{const r=Pe(o,V);if(ue(!1),!r)return;const{newValue:a}=F({finger:r,move:!0});j(-1),o.type==="touchend"&&O(-1),K&&K(o,a),V.current=void 0,N()}),D=qe(o=>{if(s)return;it()||o.preventDefault();const r=o.changedTouches[0];r!=null&&(V.current=r.identifier);const a=Pe(o,V);if(a!==!1){const{newValue:p,activeIndex:l}=F({finger:a});Ce({sliderRef:P,activeIndex:l,setActive:j}),de(p),M&&!$e(p,T)&&M(o,p,l)}X.current=0;const c=Re(P.current);c.addEventListener("touchmove",m,{passive:!0}),c.addEventListener("touchend",d,{passive:!0})}),N=S.useCallback(()=>{const o=Re(P.current);o.removeEventListener("mousemove",m),o.removeEventListener("mouseup",d),o.removeEventListener("touchmove",m),o.removeEventListener("touchend",d)},[d,m]);S.useEffect(()=>{const{current:o}=P;return o.addEventListener("touchstart",D,{passive:it()}),()=>{o.removeEventListener("touchstart",D),N()}},[N,D]),S.useEffect(()=>{s&&N()},[s,N]);const J=o=>r=>{var a;if((a=o.onMouseDown)==null||a.call(o,r),s||r.defaultPrevented||r.button!==0)return;r.preventDefault();const c=Pe(r,V);if(c!==!1){const{newValue:l,activeIndex:_}=F({finger:c});Ce({sliderRef:P,activeIndex:_,setActive:j}),de(l),M&&!$e(l,T)&&M(r,l,_)}X.current=0;const p=Re(P.current);p.addEventListener("mousemove",m,{passive:!0}),p.addEventListener("mouseup",d)},Se=_e(q?g[0]:f,f,h),y=_e(g[g.length-1],f,h)-Se,ae=(o={})=>{const r=Ge(o),a={onMouseDown:J(r||{})},c=i({},r,a);return i({},o,{ref:fe},c)},Ee=o=>r=>{var a;(a=o.onMouseOver)==null||a.call(o,r);const c=Number(r.currentTarget.getAttribute("data-index"));O(c)},Ve=o=>r=>{var a;(a=o.onMouseLeave)==null||a.call(o,r),O(-1)};return{active:W,axis:re,axisProps:Ft,dragging:ce,focusedThumbIndex:ke,getHiddenInputProps:(o={})=>{var r;const a=Ge(o),c={onChange:Ne(a||{}),onFocus:Me(a||{}),onBlur:oe(a||{}),onKeyDown:ze(a||{})},p=i({},a,c);return i({tabIndex:he,"aria-labelledby":t,"aria-orientation":ee,"aria-valuemax":se(h),"aria-valuemin":se(f),name:U,type:"range",min:e.min,max:e.max,step:e.step===null&&e.marks?"any":(r=e.step)!=null?r:void 0,disabled:s},o,p,{style:i({},At,{direction:L?"rtl":"ltr",width:"100%",height:"100%"})})},getRootProps:ae,getThumbProps:(o={})=>{const r=Ge(o),a={onMouseOver:Ee(r||{}),onMouseLeave:Ve(r||{})};return i({},o,r,a)},marks:pe,open:ge,range:q,rootRef:fe,trackLeap:y,trackOffset:Se,values:g,getThumbStyle:o=>({pointerEvents:W!==-1&&W!==o?"none":void 0})}}const Ot=e=>!e||!we(e);function Dt(e){return Ct("MuiSlider",e)}const I=Pt("MuiSlider",["root","active","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","disabled","dragging","focusVisible","mark","markActive","marked","markLabel","markLabelActive","rail","sizeSmall","thumb","thumbColorPrimary","thumbColorSecondary","thumbColorError","thumbColorSuccess","thumbColorInfo","thumbColorWarning","track","trackInverted","trackFalse","thumbSizeSmall","valueLabel","valueLabelOpen","valueLabelCircle","valueLabelLabel","vertical"]),Yt=e=>{const{open:t}=e;return{offset:ne(t&&I.valueLabelOpen),circle:I.valueLabelCircle,label:I.valueLabelLabel}};function Bt(e){const{children:t,className:n,value:s}=e,u=Yt(e);return t?S.cloneElement(t,{className:ne(t.props.className)},C.jsxs(S.Fragment,{children:[t.props.children,C.jsx("span",{className:ne(u.offset,n),"aria-hidden":!0,children:C.jsx("span",{className:u.circle,children:C.jsx("span",{className:u.label,children:s})})})]})):null}const Ut=["aria-label","aria-valuetext","aria-labelledby","component","components","componentsProps","color","classes","className","disableSwap","disabled","getAriaLabel","getAriaValueText","marks","max","min","name","onChange","onChangeCommitted","orientation","shiftStep","size","step","scale","slotProps","slots","tabIndex","track","value","valueLabelDisplay","valueLabelFormat"];function ct(e){return e}const Kt=Z("span",{name:"MuiSlider",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[`color${B(n.color)}`],n.size!=="medium"&&t[`size${B(n.size)}`],n.marked&&t.marked,n.orientation==="vertical"&&t.vertical,n.track==="inverted"&&t.trackInverted,n.track===!1&&t.trackFalse]}})(({theme:e,ownerState:t})=>i({borderRadius:12,boxSizing:"content-box",display:"inline-block",position:"relative",cursor:"pointer",touchAction:"none",color:(e.vars||e).palette[t.color].main,WebkitTapHighlightColor:"transparent"},t.orientation==="horizontal"&&i({height:4,width:"100%",padding:"13px 0","@media (pointer: coarse)":{padding:"20px 0"}},t.size==="small"&&{height:2},t.marked&&{marginBottom:20}),t.orientation==="vertical"&&i({height:"100%",width:4,padding:"0 13px","@media (pointer: coarse)":{padding:"0 20px"}},t.size==="small"&&{width:2},t.marked&&{marginRight:44}),{"@media print":{colorAdjust:"exact"},[`&.${I.disabled}`]:{pointerEvents:"none",cursor:"default",color:(e.vars||e).palette.grey[400]},[`&.${I.dragging}`]:{[`& .${I.thumb}, & .${I.track}`]:{transition:"none"}}})),Wt=Z("span",{name:"MuiSlider",slot:"Rail",overridesResolver:(e,t)=>t.rail})(({ownerState:e})=>i({display:"block",position:"absolute",borderRadius:"inherit",backgroundColor:"currentColor",opacity:.38},e.orientation==="horizontal"&&{width:"100%",height:"inherit",top:"50%",transform:"translateY(-50%)"},e.orientation==="vertical"&&{height:"100%",width:"inherit",left:"50%",transform:"translateX(-50%)"},e.track==="inverted"&&{opacity:1})),Xt=Z("span",{name:"MuiSlider",slot:"Track",overridesResolver:(e,t)=>t.track})(({theme:e,ownerState:t})=>{const n=e.palette.mode==="light"?$t(e.palette[t.color].main,.62):Tt(e.palette[t.color].main,.5);return i({display:"block",position:"absolute",borderRadius:"inherit",border:"1px solid currentColor",backgroundColor:"currentColor",transition:e.transitions.create(["left","width","bottom","height"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{border:"none"},t.orientation==="horizontal"&&{height:"inherit",top:"50%",transform:"translateY(-50%)"},t.orientation==="vertical"&&{width:"inherit",left:"50%",transform:"translateX(-50%)"},t.track===!1&&{display:"none"},t.track==="inverted"&&{backgroundColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:n,borderColor:e.vars?e.vars.palette.Slider[`${t.color}Track`]:n})}),qt=Z("span",{name:"MuiSlider",slot:"Thumb",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.thumb,t[`thumbColor${B(n.color)}`],n.size!=="medium"&&t[`thumbSize${B(n.size)}`]]}})(({theme:e,ownerState:t})=>i({position:"absolute",width:20,height:20,boxSizing:"border-box",borderRadius:"50%",outline:0,backgroundColor:"currentColor",display:"flex",alignItems:"center",justifyContent:"center",transition:e.transitions.create(["box-shadow","left","bottom"],{duration:e.transitions.duration.shortest})},t.size==="small"&&{width:12,height:12},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-50%, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 50%)"},{"&::before":i({position:"absolute",content:'""',borderRadius:"inherit",width:"100%",height:"100%",boxShadow:(e.vars||e).shadows[2]},t.size==="small"&&{boxShadow:"none"}),"&::after":{position:"absolute",content:'""',borderRadius:"50%",width:42,height:42,top:"50%",left:"50%",transform:"translate(-50%, -50%)"},[`&:hover, &.${I.focusVisible}`]:{boxShadow:`0px 0px 0px 8px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:nt(e.palette[t.color].main,.16)}`,"@media (hover: none)":{boxShadow:"none"}},[`&.${I.active}`]:{boxShadow:`0px 0px 0px 14px ${e.vars?`rgba(${e.vars.palette[t.color].mainChannel} / 0.16)`:nt(e.palette[t.color].main,.16)}`},[`&.${I.disabled}`]:{"&:hover":{boxShadow:"none"}}})),Gt=Z(Bt,{name:"MuiSlider",slot:"ValueLabel",overridesResolver:(e,t)=>t.valueLabel})(({theme:e,ownerState:t})=>i({[`&.${I.valueLabelOpen}`]:{transform:`${t.orientation==="vertical"?"translateY(-50%)":"translateY(-100%)"} scale(1)`},zIndex:1,whiteSpace:"nowrap"},e.typography.body2,{fontWeight:500,transition:e.transitions.create(["transform"],{duration:e.transitions.duration.shortest}),transform:`${t.orientation==="vertical"?"translateY(-50%)":"translateY(-100%)"} scale(0)`,position:"absolute",backgroundColor:(e.vars||e).palette.grey[600],borderRadius:2,color:(e.vars||e).palette.common.white,display:"flex",alignItems:"center",justifyContent:"center",padding:"0.25rem 0.75rem"},t.orientation==="horizontal"&&{top:"-10px",transformOrigin:"bottom center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, 50%) rotate(45deg)",backgroundColor:"inherit",bottom:0,left:"50%"}},t.orientation==="vertical"&&{right:t.size==="small"?"20px":"30px",top:"50%",transformOrigin:"right center","&::before":{position:"absolute",content:'""',width:8,height:8,transform:"translate(-50%, -50%) rotate(45deg)",backgroundColor:"inherit",right:-8,top:"50%"}},t.size==="small"&&{fontSize:e.typography.pxToRem(12),padding:"0.25rem 0.5rem"})),Jt=Z("span",{name:"MuiSlider",slot:"Mark",shouldForwardProp:e=>ut(e)&&e!=="markActive",overridesResolver:(e,t)=>{const{markActive:n}=e;return[t.mark,n&&t.markActive]}})(({theme:e,ownerState:t,markActive:n})=>i({position:"absolute",width:2,height:2,borderRadius:1,backgroundColor:"currentColor"},t.orientation==="horizontal"&&{top:"50%",transform:"translate(-1px, -50%)"},t.orientation==="vertical"&&{left:"50%",transform:"translate(-50%, 1px)"},n&&{backgroundColor:(e.vars||e).palette.background.paper,opacity:.8})),Qt=Z("span",{name:"MuiSlider",slot:"MarkLabel",shouldForwardProp:e=>ut(e)&&e!=="markLabelActive",overridesResolver:(e,t)=>t.markLabel})(({theme:e,ownerState:t,markLabelActive:n})=>i({},e.typography.body2,{color:(e.vars||e).palette.text.secondary,position:"absolute",whiteSpace:"nowrap"},t.orientation==="horizontal"&&{top:30,transform:"translateX(-50%)","@media (pointer: coarse)":{top:40}},t.orientation==="vertical"&&{left:36,transform:"translateY(50%)","@media (pointer: coarse)":{left:44}},n&&{color:(e.vars||e).palette.text.primary})),Zt=e=>{const{disabled:t,dragging:n,marked:s,orientation:u,track:L,classes:$,color:h,size:f}=e,U={root:["root",t&&"disabled",n&&"dragging",s&&"marked",u==="vertical"&&"vertical",L==="inverted"&&"trackInverted",L===!1&&"trackFalse",h&&`color${B(h)}`,f&&`size${B(f)}`],rail:["rail"],track:["track"],mark:["mark"],markActive:["markActive"],markLabel:["markLabel"],markLabelActive:["markLabelActive"],valueLabel:["valueLabel"],thumb:["thumb",t&&"disabled",f&&`thumbSize${B(f)}`,h&&`thumbColor${B(h)}`],active:["active"],disabled:["disabled"],focusVisible:["focusVisible"]};return It(U,Dt,$)},eo=({children:e})=>e,ro=S.forwardRef(function(t,n){var s,u,L,$,h,f,U,le,K,ee,be,se,A,ie,he,ve,V,W,j,ge,O,ce,ue,X;const T=Rt({props:t,name:"MuiSlider"}),M=wt().direction==="rtl",{"aria-label":q,"aria-valuetext":g,"aria-labelledby":pe,component:R="span",components:w={},componentsProps:z={},color:Ie="primary",classes:Ae,className:ke,disableSwap:te=!1,disabled:P=!1,getAriaLabel:xe,getAriaValueText:fe,marks:Me=!1,max:oe=100,min:G=0,orientation:ze="horizontal",shiftStep:Ne=10,size:ye="medium",step:re=1,scale:F=ct,slotProps:m,slots:d,track:D="normal",valueLabelDisplay:N="off",valueLabelFormat:J=ct}=T,Se=_t(T,Ut),y=i({},T,{isRtl:M,max:oe,min:G,classes:Ae,disabled:P,disableSwap:te,orientation:ze,marks:Me,color:Ie,size:ye,step:re,shiftStep:Ne,scale:F,track:D,valueLabelDisplay:N,valueLabelFormat:J}),{axisProps:ae,getRootProps:Ee,getHiddenInputProps:Ve,getThumbProps:Je,open:Qe,active:Fe,axis:o,focusedThumbIndex:r,range:a,dragging:c,marks:p,values:l,trackOffset:_,trackLeap:E,getThumbStyle:k}=jt(i({},y,{rootRef:n}));y.marked=p.length>0&&p.some(v=>v.label),y.dragging=c,y.focusedThumbIndex=r;const b=Zt(y),Q=(s=(u=d==null?void 0:d.root)!=null?u:w.Root)!=null?s:Kt,Ze=(L=($=d==null?void 0:d.rail)!=null?$:w.Rail)!=null?L:Wt,et=(h=(f=d==null?void 0:d.track)!=null?f:w.Track)!=null?h:Xt,tt=(U=(le=d==null?void 0:d.thumb)!=null?le:w.Thumb)!=null?U:qt,ot=(K=(ee=d==null?void 0:d.valueLabel)!=null?ee:w.ValueLabel)!=null?K:Gt,He=(be=(se=d==null?void 0:d.mark)!=null?se:w.Mark)!=null?be:Jt,je=(A=(ie=d==null?void 0:d.markLabel)!=null?ie:w.MarkLabel)!=null?A:Qt,rt=(he=(ve=d==null?void 0:d.input)!=null?ve:w.Input)!=null?he:"input",Oe=(V=m==null?void 0:m.root)!=null?V:z.root,pt=(W=m==null?void 0:m.rail)!=null?W:z.rail,De=(j=m==null?void 0:m.track)!=null?j:z.track,Ye=(ge=m==null?void 0:m.thumb)!=null?ge:z.thumb,Be=(O=m==null?void 0:m.valueLabel)!=null?O:z.valueLabel,ft=(ce=m==null?void 0:m.mark)!=null?ce:z.mark,mt=(ue=m==null?void 0:m.markLabel)!=null?ue:z.markLabel,bt=(X=m==null?void 0:m.input)!=null?X:z.input,ht=Y({elementType:Q,getSlotProps:Ee,externalSlotProps:Oe,externalForwardedProps:Se,additionalProps:i({},Ot(Q)&&{as:R}),ownerState:i({},y,Oe==null?void 0:Oe.ownerState),className:[b.root,ke]}),vt=Y({elementType:Ze,externalSlotProps:pt,ownerState:y,className:b.rail}),gt=Y({elementType:et,externalSlotProps:De,additionalProps:{style:i({},ae[o].offset(_),ae[o].leap(E))},ownerState:i({},y,De==null?void 0:De.ownerState),className:b.track}),Ue=Y({elementType:tt,getSlotProps:Je,externalSlotProps:Ye,ownerState:i({},y,Ye==null?void 0:Ye.ownerState),className:b.thumb}),kt=Y({elementType:ot,externalSlotProps:Be,ownerState:i({},y,Be==null?void 0:Be.ownerState),className:b.valueLabel}),Ke=Y({elementType:He,externalSlotProps:ft,ownerState:y,className:b.mark}),We=Y({elementType:je,externalSlotProps:mt,ownerState:y,className:b.markLabel}),xt=Y({elementType:rt,getSlotProps:Ve,externalSlotProps:bt,ownerState:y});return C.jsxs(Q,i({},ht,{children:[C.jsx(Ze,i({},vt)),C.jsx(et,i({},gt)),p.filter(v=>v.value>=G&&v.value<=oe).map((v,x)=>{const Xe=_e(v.value,G,oe),Le=ae[o].offset(Xe);let H;return D===!1?H=l.indexOf(v.value)!==-1:H=D==="normal"&&(a?v.value>=l[0]&&v.value<=l[l.length-1]:v.value<=l[0])||D==="inverted"&&(a?v.value<=l[0]||v.value>=l[l.length-1]:v.value>=l[0]),C.jsxs(S.Fragment,{children:[C.jsx(He,i({"data-index":x},Ke,!we(He)&&{markActive:H},{style:i({},Le,Ke.style),className:ne(Ke.className,H&&b.markActive)})),v.label!=null?C.jsx(je,i({"aria-hidden":!0,"data-index":x},We,!we(je)&&{markLabelActive:H},{style:i({},Le,We.style),className:ne(b.markLabel,We.className,H&&b.markLabelActive),children:v.label})):null]},x)}),l.map((v,x)=>{const Xe=_e(v,G,oe),Le=ae[o].offset(Xe),H=N==="off"?eo:ot;return C.jsx(H,i({},!we(H)&&{valueLabelFormat:J,valueLabelDisplay:N,value:typeof J=="function"?J(F(v),x):J,index:x,open:Qe===x||Fe===x||N==="on",disabled:P},kt,{children:C.jsx(tt,i({"data-index":x},Ue,{className:ne(b.thumb,Ue.className,Fe===x&&b.active,r===x&&b.focusVisible),style:i({},Le,k(x),Ue.style),children:C.jsx(rt,i({"data-index":x,"aria-label":xe?xe(x):q,"aria-valuenow":F(v),"aria-labelledby":pe,"aria-valuetext":fe?fe(F(v),x):g,value:l[x]},xt))}))}),x)})]}))});export{ro as S};
