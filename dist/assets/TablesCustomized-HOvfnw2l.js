import{j as e,M as x,S as m,s as i}from"./index-BEUoGpPe.js";import{C as g}from"./CardSecondaryAction-D0_a73-H.js";import{C as p,h as b}from"./TableBasic-ile-qVQK.js";import{T as j,a as C,b as u,c as n,e as f,d as y,t as r}from"./TableRow-DOY-bp7c.js";import"./Avatar-DSUX4n3r.js";const t=i(y)(({theme:a})=>({[`&.${r.head}`]:{backgroundColor:a.palette.common.black,color:a.palette.common.white},[`&.${r.body}`]:{fontSize:14}})),T=i(n)(({theme:a})=>({"&:nth-of-type(odd)":{backgroundColor:a.palette.action.hover},"&:last-of-type td, &:last-of-type th":{border:0}}));function s(a,o,c,d,h){return{name:a,calories:o,fat:c,carbs:d,protein:h}}const l=[s("Frozen yoghurt",159,6,24,4),s("Ice cream sandwich",237,9,37,4.3),s("Eclair",262,16,24,6),s("Cupcake",305,3.7,67,4.3),s("Gingerbread",356,16,49,3.9)];function R(){return e.jsx(x,{content:!1,title:"Customized Tables",secondary:e.jsxs(m,{direction:"row",spacing:2,alignItems:"center",children:[e.jsx(p,{data:l,filename:"table-customized.csv",header:b}),e.jsx(g,{link:"https://next.material-ui.com/components/tables/"})]}),children:e.jsx(j,{children:e.jsxs(C,{sx:{minWidth:320},"aria-label":"customized table",children:[e.jsx(u,{children:e.jsxs(n,{children:[e.jsx(t,{sx:{pl:3},children:"Dessert (100g serving)"}),e.jsx(t,{align:"right",children:"Calories"}),e.jsx(t,{align:"right",children:"Fat (g)"}),e.jsx(t,{align:"right",children:"Carbs (g)"}),e.jsx(t,{sx:{pr:3},align:"right",children:"Protein (g)"})]})}),e.jsx(f,{children:l.map(a=>e.jsxs(T,{hover:!0,children:[e.jsx(t,{sx:{pl:3},component:"th",scope:"row",children:a.name}),e.jsx(t,{align:"right",children:a.calories}),e.jsx(t,{align:"right",children:a.fat}),e.jsx(t,{align:"right",children:a.carbs}),e.jsx(t,{sx:{pr:3},align:"right",children:a.protein})]},a.name))})]})})})}export{R as default};
