import{a9 as M,aa as x,s as v,a2 as c,r as b,a3 as f,a4 as y,j as I,ab as N,ac as h}from"./index-BEUoGpPe.js";function E(e){return x("MuiCardMedia",e)}M("MuiCardMedia",["root","media","img"]);const O=["children","className","component","image","src","style"],R=e=>{const{classes:o,isMediaComponent:a,isImageComponent:s}=e;return h({root:["root",a&&"media",s&&"img"]},E,o)},j=v("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:a}=e,{isMediaComponent:s,isImageComponent:t}=a;return[o.root,s&&o.media,t&&o.img]}})(({ownerState:e})=>c({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center"},e.isMediaComponent&&{width:"100%"},e.isImageComponent&&{objectFit:"cover"})),k=["video","audio","picture","iframe","img"],P=["picture","img"],_=b.forwardRef(function(o,a){const s=f({props:o,name:"MuiCardMedia"}),{children:t,className:l,component:i="div",image:n,src:p,style:d}=s,C=y(s,O),r=k.indexOf(i)!==-1,u=!r&&n?c({backgroundImage:`url("${n}")`},d):d,m=c({},s,{component:i,isMediaComponent:r,isImageComponent:P.indexOf(i)!==-1}),g=R(m);return I.jsx(j,c({className:N(g.root,l),as:i,role:!r&&n?"img":void 0,ref:a,style:u,ownerState:m,src:r?n||p:void 0},C,{children:t}))});export{_ as C};
