import{S as H,i as S,s as j,e as v,a as h,b as W,n as L,d as A,c as k,t as T,f as P,g as m,l as B,h as D,j as z,o as Q,k as R,r as ne,m as F,p as K,q as O,u as E,v as x,w as se,x as le}from"./vendor.00398852.js";const oe=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))t(o);new MutationObserver(o=>{for(const u of o)if(u.type==="childList")for(const i of u.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const u={};return o.integrity&&(u.integrity=o.integrity),o.referrerpolicy&&(u.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?u.credentials="include":o.crossorigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function t(o){if(o.ep)return;o.ep=!0;const u=n(o);fetch(o.href,u)}};oe();function re(s){let e;return{c(){e=v("aside"),e.textContent="All your answers are alwaws anonymmous!",h(e,"id","anonymity"),h(e,"class","svelte-19cdkzm")},m(n,t){W(n,e,t)},p:L,i:L,o:L,d(n){n&&A(e)}}}class ae extends H{constructor(e){super();S(this,e,null,re,j,{})}}function U(s,e,n){const t=s.slice();return t[5]=e[n],t[7]=n,t}function V(s){let e,n,t,o,u,i=s[5].name+"",_,c,g,d=s[5].result+"",r,p,l;function a(){return s[4](s[7])}return{c(){e=v("button"),n=v("div"),o=k(),u=v("span"),_=T(i),c=k(),g=v("div"),r=T(d),h(n,"class","bar svelte-1127htk"),h(n,"style",t=`
          width: ${s[5].result/s[2]*100}%;
        `),h(u,"class","svelte-1127htk"),h(g,"class","result svelte-1127htk"),h(e,"class","svelte-1127htk"),P(e,"is-selected",s[7]===s[0])},m(f,q){W(f,e,q),m(e,n),m(e,o),m(e,u),m(u,_),m(e,c),m(e,g),m(g,r),p||(l=B(e,"click",a),p=!0)},p(f,q){s=f,q&6&&t!==(t=`
          width: ${s[5].result/s[2]*100}%;
        `)&&h(n,"style",t),q&2&&i!==(i=s[5].name+"")&&D(_,i),q&2&&d!==(d=s[5].result+"")&&D(r,d),q&1&&P(e,"is-selected",s[7]===s[0])},d(f){f&&A(e),p=!1,l()}}}function ie(s){let e,n,t=s[1].question+"",o,u,i,_,c,g,d=s[1].answers,r=[];for(let p=0;p<d.length;p+=1)r[p]=V(U(s,d,p));return{c(){e=v("article"),n=v("h3"),o=T(t),u=k();for(let p=0;p<r.length;p+=1)r[p].c();i=k(),_=v("p"),c=T(s[2]),g=T(" votes"),h(n,"class","svelte-1127htk"),h(_,"class","total svelte-1127htk"),h(e,"class","svelte-1127htk"),P(e,"is-revealed",s[0]>=0)},m(p,l){W(p,e,l),m(e,n),m(n,o),m(e,u);for(let a=0;a<r.length;a+=1)r[a].m(e,null);m(e,i),m(e,_),m(_,c),m(_,g)},p(p,[l]){if(l&2&&t!==(t=p[1].question+"")&&D(o,t),l&15){d=p[1].answers;let a;for(a=0;a<d.length;a+=1){const f=U(p,d,a);r[a]?r[a].p(f,l):(r[a]=V(f),r[a].c(),r[a].m(e,i))}for(;a<r.length;a+=1)r[a].d(1);r.length=d.length}l&4&&D(c,p[2]),l&1&&P(e,"is-revealed",p[0]>=0)},i:L,o:L,d(p){p&&A(e),z(r,p)}}}function ue(s,e,n){let{content:t}=e,{vote:o}=e;function u(c){o>=0||(n(0,o=c),n(2,i+=1))}let i=0;Q(()=>{t.answers.forEach(c=>{n(2,i+=c.result)})});const _=c=>{u(c)};return s.$$set=c=>{"content"in c&&n(1,t=c.content),"vote"in c&&n(0,o=c.vote)},[o,t,i,u,_]}class ce extends H{constructor(e){super();S(this,e,ue,ie,j,{content:1,vote:0})}}function X(s,e,n){const t=s.slice();return t[5]=e[n],t[6]=e,t[7]=n,t}function Y(s){let e,n,t,o;function u(){s[3].call(e,s[6],s[7])}return{c(){e=v("input"),h(e,"type","text"),h(e,"name",n=`option${s[7]}`),h(e,"class","svelte-6hemmx")},m(i,_){W(i,e,_),R(e,s[5]),t||(o=B(e,"input",u),t=!0)},p(i,_){s=i,_&2&&e.value!==s[5]&&R(e,s[5])},d(i){i&&A(e),t=!1,o()}}}function fe(s){let e,n,t,o,u,i,_,c,g,d,r,p,l,a,f,q,C,I,G,M=s[1],b=[];for(let w=0;w<M.length;w+=1)b[w]=Y(X(s,M,w));return{c(){e=v("section"),n=v("div"),t=v("form"),o=v("h2"),o.textContent="New poll",u=k(),i=v("label"),i.textContent="What is the question?",_=k(),c=v("input"),g=k(),d=v("span"),d.textContent="Anwer options",r=k();for(let w=0;w<b.length;w+=1)b[w].c();p=k(),l=v("input"),a=k(),f=v("span"),f.textContent="People ca also give open answers",q=k(),C=v("button"),C.innerHTML=`<span class="icon svelte-6hemmx">+</span> 
    <span class="label svelte-6hemmx">Post</span>`,h(o,"class","svelte-6hemmx"),h(i,"for","question"),h(i,"class","svelte-6hemmx"),h(c,"type","text"),h(c,"name","question"),h(c,"class","svelte-6hemmx"),h(d,"class","options-label svelte-6hemmx"),h(l,"type","button"),l.value="+",h(l,"class","add-option svelte-6hemmx"),h(f,"class","answers-warning svelte-6hemmx"),h(t,"id","new-post-form"),h(t,"class","svelte-6hemmx"),h(n,"class","container"),h(C,"class","fab svelte-6hemmx"),h(e,"class","svelte-6hemmx"),P(e,"is-open",s[0])},m(w,N){W(w,e,N),m(e,n),m(n,t),m(t,o),m(t,u),m(t,i),m(t,_),m(t,c),m(t,g),m(t,d),m(t,r);for(let y=0;y<b.length;y+=1)b[y].m(t,null);m(t,p),m(t,l),m(t,a),m(t,f),m(e,q),m(e,C),I||(G=[B(l,"click",s[2]),B(C,"click",s[4])],I=!0)},p(w,[N]){if(N&2){M=w[1];let y;for(y=0;y<M.length;y+=1){const J=X(w,M,y);b[y]?b[y].p(J,N):(b[y]=Y(J),b[y].c(),b[y].m(t,p))}for(;y<b.length;y+=1)b[y].d(1);b.length=M.length}N&1&&P(e,"is-open",w[0])},i:L,o:L,d(w){w&&A(e),z(b,w),I=!1,ne(G)}}}function Z(){let s=300;const e=document.getElementById("new-post-form").children;for(let n=0;n<e.length;++n)e[n].style.animationDelay=`${s}ms`,s+=50}function he(s,e,n){let t=!1,o=["",""];function u(){n(1,o=[...o,""])}Q(Z);function i(c,g){c[g]=this.value,n(1,o)}return[t,o,u,i,()=>{Z(),n(0,t=!t),document.body.style.overflow=t?"hidden":"auto",t?(window.header.hide(),n(1,o=["",""])):window.header.show()}]}class me extends H{constructor(e){super();S(this,e,he,fe,j,{})}}function ee(s,e,n){const t=s.slice();return t[2]=e[n],t}function te(s){let e,n;return e=new ce({props:{content:s[2],vote:-1}}),{c(){F(e.$$.fragment)},m(t,o){K(e,t,o),n=!0},p:L,i(t){n||(O(e.$$.fragment,t),n=!0)},o(t){E(e.$$.fragment,t),n=!1},d(t){x(e,t)}}}function pe(s){let e,n,t,o,u,i,_,c,g;t=new ae({});let d=s[1],r=[];for(let l=0;l<d.length;l+=1)r[l]=te(ee(s,d,l));const p=l=>E(r[l],1,1,()=>{r[l]=null});return i=new me({}),{c(){e=v("main"),n=v("div"),F(t.$$.fragment),o=k();for(let l=0;l<r.length;l+=1)r[l].c();u=k(),F(i.$$.fragment),_=k(),c=v("header"),c.innerHTML='<h1 class="svelte-rxwc8p">Ask Team</h1>',h(n,"class","container svelte-rxwc8p"),h(e,"class","svelte-rxwc8p"),h(c,"class","svelte-rxwc8p"),P(c,"is-hidden",!s[0])},m(l,a){W(l,e,a),m(e,n),K(t,n,null),m(n,o);for(let f=0;f<r.length;f+=1)r[f].m(n,null);W(l,u,a),K(i,l,a),W(l,_,a),W(l,c,a),g=!0},p(l,[a]){if(a&2){d=l[1];let f;for(f=0;f<d.length;f+=1){const q=ee(l,d,f);r[f]?(r[f].p(q,a),O(r[f],1)):(r[f]=te(q),r[f].c(),O(r[f],1),r[f].m(n,null))}for(le(),f=d.length;f<r.length;f+=1)p(f);se()}a&1&&P(c,"is-hidden",!l[0])},i(l){if(!g){O(t.$$.fragment,l);for(let a=0;a<d.length;a+=1)O(r[a]);O(i.$$.fragment,l),g=!0}},o(l){E(t.$$.fragment,l),r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)E(r[a]);E(i.$$.fragment,l),g=!1},d(l){l&&A(e),x(t),z(r,l),l&&A(u),x(i,l),l&&A(_),l&&A(c)}}}function $(){const s=[],e=2+Math.random()*3;for(let n=0;n<e;n++)s.push({name:`Option ${n+1}`,result:1+Math.round(Math.random()*19)});return s}function de(s,e,n){let t=!0,o=[{question:"What?",answers:$()},{question:"What?",answers:$()},{question:"What?",answers:$()},{question:"What?",answers:$()},{question:"What?",answers:$()},{question:"What?",answers:$()},{question:"What?",answers:$()},{question:"What?",answers:$()},{question:"What?",answers:$()},{question:"What?",answers:$()}];return window.header={show(){n(0,t=!0)},hide(){n(0,t=!1)}},[t,o]}class _e extends H{constructor(e){super();S(this,e,de,pe,j,{})}}new _e({target:document.body});
