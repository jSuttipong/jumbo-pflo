import{_ as m,a as c,b as r,c as b,d as v,e as h,f as u,g as d,h as f,i as k,j,k as w,l as I,m as P,n as y,o as D,p as x,q as N,r as W,s as B,t as S,u as C,v as F,w as L,x as U,y as q,z as E,A as V,B as $,C as z,D as A,E as G,F as H,G as M,H as O,I as R}from"./6.CSPG4a_i.js";import{f as T,_ as J}from"./folio.BISeZS_P.js";import{_ as K,c as a,a as g,b as n,F as Q,n as X,q as Y,o as t}from"./entry.BRjiJQl8.js";const Z={data(){return{showWelcomePage:!0,showDisplayPage:!1,projectInformation:[]}},mounted(){console.log("working..."),this.handleProjectInfo(T)},methods:{goToNext(s){s==="next"?(this.showWelcomePage=!1,this.showDisplayPage=!0):s==="back"&&(this.showWelcomePage=!0,this.showDisplayPage=!1)},handleProjectInfo(s){for(let e=0;e<s.length;e++)this.projectInformation.push({projectName:s[e].name,projectDes:s[e].des,projectImageList:s[e].images,projectStack:s[e].stack})},getImageUrl(s){let e=[];for(let o=0;o<s.length;o++)e.push(new URL(Object.assign({"/assets/images/apt.png":m,"/assets/images/apt/1.png":c,"/assets/images/apt/2.png":r,"/assets/images/apt/3.png":b,"/assets/images/apt/4.png":v,"/assets/images/apt/5.png":h,"/assets/images/apt/6.png":u,"/assets/images/cubhouse.png":d,"/assets/images/cubhouse/1.png":f,"/assets/images/cubhouse/2.png":k,"/assets/images/cubhouse/3.png":j,"/assets/images/cubhouse/4.png":w,"/assets/images/cubhouse/5.png":I,"/assets/images/cubhouse/6.png":P,"/assets/images/cubhouse/banner.png":y,"/assets/images/ibank.png":D,"/assets/images/ibank/1.png":x,"/assets/images/ibank/2.png":N,"/assets/images/ibank/3.png":W,"/assets/images/ktb.png":B,"/assets/images/ktb/1.png":S,"/assets/images/ktb/2.png":C,"/assets/images/ktb/3.png":F,"/assets/images/ktb/4.png":L,"/assets/images/ktb/banner.png":U,"/assets/images/mportal.png":q,"/assets/images/mportal/1.png":E,"/assets/images/mportal/2.png":V,"/assets/images/mportal/3.png":$,"/assets/images/sdgs.png":z,"/assets/images/sdgs/1.png":A,"/assets/images/sdgs/2.png":G,"/assets/images/sdgs/3.png":H,"/assets/images/sdgs/4.png":M,"/assets/images/sdgs/6.png":O})[`~/assets/images/${s[o]}`],import.meta.url));return e}}},ss={key:0},es={class:"welcome-page"},_s={key:1},as=g("h1",null,"My project",-1),ts={class:"mt-5"},os={class:"row m-0"};function gs(s,e,o,is,i,ns){const p=R,l=J;return t(),a("div",null,[i.showWelcomePage?(t(),a("div",ss,[g("div",es,[n(p)])])):i.showDisplayPage?(t(),a("div",_s,[as,g("div",ts,[g("div",os,[(t(!0),a(Q,null,X(i.projectInformation,_=>(t(),a("div",{class:"col-12",key:_.projectName},[n(l,{projectName:_.projectName,projectDes:_.projectDes,projectImageList:_.projectImageList,projectStack:_.projectStack,class:"my-2 card-distance"},null,8,["projectName","projectDes","projectImageList","projectStack"])]))),128))])])])):Y("",!0)])}const cs=K(Z,[["render",gs]]);export{cs as default};