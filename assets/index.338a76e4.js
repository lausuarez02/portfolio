import{S as g,P as x,W as b,T as L,M as u,a as m,b as S,A as v,O as P,c as A,d as p,e as M}from"./vendor.c1ce15df.js";const O=function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}};O();const r=new g,o=new x(75,window.innerWidth/window.innerHeight,.1,1e3),s=new b({canvas:document.querySelector("#bg")});s.setPixelRatio(window.devicePixelRatio);s.setSize(window.innerWidth,window.innerHeight);o.position.setZ(40);s.render(r,o);const z=new L(10,1,16,100),C=new u({color:16737095}),d=new m(z,C);r.add(d);function R(){const n=new p(.25,24,24),i=new u({color:16777215}),a=new m(n,i),[c,e,t]=Array(3).fill().map(()=>M.randFloatSpread(100));a.position.set(c,e,t),r.add(a)}Array(200).fill().forEach(R);const w=new S(268435455),T=new v(268435455);w.position.set(5,5,5);r.add(w,T);const W=new P(o,s.domElement),q=new A().load("earth.jpeg"),f=new m(new p(3,32,32),new u({map:q}));r.add(f);function y(){const n=document.body.getBoundingClientRect().top;f.rotation.x+=.05,f.rotation.y+=.075,f.rotation.z+=.05,o.position.z=n*-.01,o.position.x=n*-2e-4,o.rotation.y=n*-2e-4}document.body.onscroll=y;y();function h(){requestAnimationFrame(h),d.rotation.x+=.01,d.rotation.y+=.005,d.rotation.z+=.01,W.update(),s.render(r,o)}h();
