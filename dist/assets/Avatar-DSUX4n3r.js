import{P as r,j as n,A as p}from"./index-BEUoGpPe.js";const c=({color:a,outline:t,size:i,sx:s,...o})=>{const h=a&&!t&&{color:"background.paper",bgcolor:`${a}.main`},b=t&&{color:a?`${a}.main`:"primary.main",bgcolor:"background.paper",border:"2px solid",borderColor:a?`${a}.main`:"primary.main"};let e={};switch(i){case"badge":e={width:28,height:28};break;case"xs":e={width:34,height:34};break;case"sm":e={width:40,height:40};break;case"lg":e={width:72,height:72};break;case"xl":e={width:82,height:82};break;case"md":e={width:60,height:60};break;default:e={}}return n.jsx(p,{sx:{...h,...b,...e,...s},...o})};c.propTypes={color:r.string,outline:r.bool,size:r.string,sx:r.object};export{c as A};
