import{r as s,K as f,a as k,o as C,c as y,k as a,C as o,b as r,w as u,g as d}from"./index.f348e44f.js";const h={__name:"children",props:["countVal"],emits:["countAdd"],setup(i,{emit:p}){const m=i,v=()=>{p("countAdd")},e=s(100),t=s(200),_=()=>{e.value++,t.value++};return f([e,t],(l,n)=>{console.log("\u503C\u53D1\u751F\u4E86\u53D8\u66F4",l,n)},{deep:!0,immediate:!0}),(l,n)=>{const c=k("el-button");return C(),y("div",null,[a("div",null," props:"+o(m.countVal),1),r(c,{type:"primary",onClick:v},{default:u(()=>[d("emit\u6DFB\u52A0")]),_:1}),a("div",null,o(e.value),1),a("div",null,o(t.value),1),r(c,{type:"primary",onClick:_},{default:u(()=>[d("\u6DFB\u52A0")]),_:1})])}}};export{h as default};
