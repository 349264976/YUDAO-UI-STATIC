import{aM as o,bs as a,bt as d}from"./index-185fe65d.js";function c(i,r=150,n){let e=()=>{i()};e=o(e,r);const t=()=>{n&&n.immediate&&e(),window.addEventListener("resize",e)},s=()=>{window.removeEventListener("resize",e)};return a(()=>{t()}),d(()=>{s()}),[t,s]}export{c as u};
