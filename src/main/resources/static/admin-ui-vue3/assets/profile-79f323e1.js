import{a as s}from"./index-a7ef0ded.js";const a=()=>s.get({url:"/system/user/profile/get"}),e=a=>s.put({url:"/system/user/profile/update",data:a}),r=(a,e)=>s.put({url:"/system/user/profile/update-password",data:{oldPassword:a,newPassword:e}}),t=a=>s.upload({url:"/system/user/profile/update-avatar",data:a});export{r as a,t as b,a as g,e as u};