import d from"./FlipCard.0fefc028.js";import{_ as S,r as a,o as H,c as M,b as v,p as h,j as F,k as x}from"./index.f348e44f.js";const m=u=>(h("data-v-72fead2e"),u=u(),F(),u),C=m(()=>x("div",{class:"split"},":",-1)),I=m(()=>x("div",{class:"split"},":",-1)),N={__name:"FlipCalendar",setup(u){const _=a(0),p=a(1),n=a(0),l=a(1),o=a(0),i=a(1),w=a(!0),c=a(!0),r=a(!0),f=a(!0),t=e=>e>=10?e:"0"+e,g=()=>{var e=new Date,s=new Date(e.getTime()+1e3);_.value=t(e.getSeconds()),p.value=t(s.getSeconds()),s.getMinutes()!==e.getMinutes()&&(c.value=!1),s.getHours()!==e.getHours()&&(r.value=!1),f.value&&(n.value=t(e.getMinutes()),l.value=t(s.getMinutes()),o.value=t(e.getHours()),i.value=t(s.getHours()),f.value=!1)},P=e=>{if(e.target.classList.contains("second"))g();else{var s=new Date;n.value=t(s.getMinutes()),l.value=t(n===59?"00":Number(n)+1),o.value=t(s.getHours()),i.value=t(o===23?"00":Number(o)+1),c.value=!0,r.value=!0}};return g(),(e,s)=>(H(),M("div",{class:"container",onAnimationiteration:P},[v(d,{now:o.value,next:i.value,isPaused:r.value},null,8,["now","next","isPaused"]),C,v(d,{now:n.value,next:l.value,isPaused:c.value},null,8,["now","next","isPaused"]),I,v(d,{now:_.value,next:p.value,isPaused:w.value,isSecond:!0},null,8,["now","next","isPaused"])],32))}},A=S(N,[["__scopeId","data-v-72fead2e"]]);export{A as default};
