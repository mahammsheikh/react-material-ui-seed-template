import{a9 as U,aa as $,aU as y,s as I,a2 as h,J as M,aV as p,r as T,a3 as A,a4 as L,j as t,ab as E,ac as G,C as u,n as w,G as i,g as j,v as N,K as X,N as B,z as K}from"./index-BEUoGpPe.js";function W(e){return String(e).match(/[\d.\-+]*\s*(.*)/)[1]||""}function z(e){return parseFloat(e)}function F(e){return $("MuiSkeleton",e)}U("MuiSkeleton",["root","text","rectangular","rounded","circular","pulse","wave","withChildren","fitContent","heightAuto"]);const P=["animation","className","component","height","style","variant","width"];let c=e=>e,v,f,C,b;const V=e=>{const{classes:a,variant:r,animation:s,hasChildren:o,width:d,height:l}=e;return G({root:["root",r,s,o&&"withChildren",o&&!d&&"fitContent",o&&!l&&"heightAuto"]},F,a)},J=y(v||(v=c`
  0% {
    opacity: 1;
  }

  50% {
    opacity: 0.4;
  }

  100% {
    opacity: 1;
  }
`)),O=y(f||(f=c`
  0% {
    transform: translateX(-100%);
  }

  50% {
    /* +0.5s of delay between each loop */
    transform: translateX(100%);
  }

  100% {
    transform: translateX(100%);
  }
`)),q=I("span",{name:"MuiSkeleton",slot:"Root",overridesResolver:(e,a)=>{const{ownerState:r}=e;return[a.root,a[r.variant],r.animation!==!1&&a[r.animation],r.hasChildren&&a.withChildren,r.hasChildren&&!r.width&&a.fitContent,r.hasChildren&&!r.height&&a.heightAuto]}})(({theme:e,ownerState:a})=>{const r=W(e.shape.borderRadius)||"px",s=z(e.shape.borderRadius);return h({display:"block",backgroundColor:e.vars?e.vars.palette.Skeleton.bg:M(e.palette.text.primary,e.palette.mode==="light"?.11:.13),height:"1.2em"},a.variant==="text"&&{marginTop:0,marginBottom:0,height:"auto",transformOrigin:"0 55%",transform:"scale(1, 0.60)",borderRadius:`${s}${r}/${Math.round(s/.6*10)/10}${r}`,"&:empty:before":{content:'"\\00a0"'}},a.variant==="circular"&&{borderRadius:"50%"},a.variant==="rounded"&&{borderRadius:(e.vars||e).shape.borderRadius},a.hasChildren&&{"& > *":{visibility:"hidden"}},a.hasChildren&&!a.width&&{maxWidth:"fit-content"},a.hasChildren&&!a.height&&{height:"auto"})},({ownerState:e})=>e.animation==="pulse"&&p(C||(C=c`
      animation: ${0} 2s ease-in-out 0.5s infinite;
    `),J),({ownerState:e,theme:a})=>e.animation==="wave"&&p(b||(b=c`
      position: relative;
      overflow: hidden;

      /* Fix bug in Safari https://bugs.webkit.org/show_bug.cgi?id=68196 */
      -webkit-mask-image: -webkit-radial-gradient(white, black);

      &::after {
        animation: ${0} 2s linear 0.5s infinite;
        background: linear-gradient(
          90deg,
          transparent,
          ${0},
          transparent
        );
        content: '';
        position: absolute;
        transform: translateX(-100%); /* Avoid flash during server-side hydration */
        bottom: 0;
        left: 0;
        right: 0;
        top: 0;
      }
    `),O,(a.vars||a).palette.action.hover)),n=T.forwardRef(function(a,r){const s=A({props:a,name:"MuiSkeleton"}),{animation:o="pulse",className:d,component:l="span",height:x,style:k,variant:R="text",width:_}=s,g=L(s,P),m=h({},s,{animation:o,component:l,variant:R,hasChildren:!!g.children}),S=V(m);return t.jsx(q,h({as:l,ref:r,className:E(S.root,d),ownerState:m},g,{style:h({width:_,height:x},k)}))}),H=()=>t.jsx(u,{children:t.jsx(w,{children:t.jsxs(i,{container:!0,direction:"column",children:[t.jsx(i,{item:!0,children:t.jsxs(i,{container:!0,justifyContent:"space-between",children:[t.jsx(i,{item:!0,children:t.jsx(n,{variant:"rectangular",width:44,height:44})}),t.jsx(i,{item:!0,children:t.jsx(n,{variant:"rectangular",width:34,height:34})})]})}),t.jsx(i,{item:!0,children:t.jsx(n,{variant:"rectangular",sx:{my:2},height:40})}),t.jsx(i,{item:!0,children:t.jsx(n,{variant:"rectangular",height:30})})]})})}),Q=()=>t.jsx(u,{children:t.jsx(w,{children:t.jsxs(i,{container:!0,spacing:j,children:[t.jsx(i,{item:!0,xs:12,children:t.jsxs(i,{container:!0,alignItems:"center",justifyContent:"space-between",spacing:j,children:[t.jsx(i,{item:!0,xs:!0,zeroMinWidth:!0,children:t.jsxs(i,{container:!0,spacing:1,children:[t.jsx(i,{item:!0,xs:12,children:t.jsx(n,{variant:"text"})}),t.jsx(i,{item:!0,xs:12,children:t.jsx(n,{variant:"rectangular",height:20})})]})}),t.jsx(i,{item:!0,children:t.jsx(n,{variant:"rectangular",height:50,width:80})})]})}),t.jsx(i,{item:!0,xs:12,children:t.jsx(n,{variant:"rectangular",height:530})})]})})}),Y=()=>t.jsx(u,{sx:{p:2},children:t.jsx(N,{sx:{py:0},children:t.jsxs(X,{alignItems:"center",disableGutters:!0,sx:{py:0},children:[t.jsx(B,{children:t.jsx(n,{variant:"rectangular",width:44,height:44})}),t.jsx(K,{sx:{py:0},primary:t.jsx(n,{variant:"rectangular",height:20}),secondary:t.jsx(n,{variant:"text"})})]})})});export{H as E,n as S,Q as T,Y as a};
