(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function hd(n,e){const t=Object.create(null),r=n.split(",");for(let s=0;s<r.length;s++)t[r[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}function dd(n){if(ee(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Je(r)?dE(r):dd(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Je(n))return n;if(ke(n))return n}}const uE=/;(?![^(]*\))/g,lE=/:([^]+)/,hE=/\/\*.*?\*\//gs;function dE(n){const e={};return n.replace(hE,"").split(uE).forEach(t=>{if(t){const r=t.split(lE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function fd(n){let e="";if(Je(n))e=n;else if(ee(n))for(let t=0;t<n.length;t++){const r=fd(n[t]);r&&(e+=r+" ")}else if(ke(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const fE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pE=hd(fE);function ay(n){return!!n||n===""}function mE(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=Dc(n[r],e[r]);return t}function Dc(n,e){if(n===e)return!0;let t=Tp(n),r=Tp(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=Mo(n),r=Mo(e),t||r)return n===e;if(t=ee(n),r=ee(e),t||r)return t&&r?mE(n,e):!1;if(t=ke(n),r=ke(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in n){const a=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Dc(n[o],e[o]))return!1}}return String(n)===String(e)}const In=n=>Je(n)?n:n==null?"":ee(n)||ke(n)&&(n.toString===hy||!ie(n.toString))?JSON.stringify(n,cy,2):String(n),cy=(n,e)=>e&&e.__v_isRef?cy(n,e.value):ni(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s])=>(t[`${r} =>`]=s,t),{})}:uy(e)?{[`Set(${e.size})`]:[...e.values()]}:ke(e)&&!ee(e)&&!dy(e)?String(e):e,Re={},ti=[],hn=()=>{},gE=()=>!1,yE=/^on[^a-z]/,pu=n=>yE.test(n),pd=n=>n.startsWith("onUpdate:"),xt=Object.assign,md=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},vE=Object.prototype.hasOwnProperty,pe=(n,e)=>vE.call(n,e),ee=Array.isArray,ni=n=>pa(n)==="[object Map]",uy=n=>pa(n)==="[object Set]",Tp=n=>pa(n)==="[object Date]",ie=n=>typeof n=="function",Je=n=>typeof n=="string",Mo=n=>typeof n=="symbol",ke=n=>n!==null&&typeof n=="object",ly=n=>ke(n)&&ie(n.then)&&ie(n.catch),hy=Object.prototype.toString,pa=n=>hy.call(n),wE=n=>pa(n).slice(8,-1),dy=n=>pa(n)==="[object Object]",gd=n=>Je(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,pc=hd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),mu=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},_E=/-(\w)/g,Pn=mu(n=>n.replace(_E,(e,t)=>t?t.toUpperCase():"")),IE=/\B([A-Z])/g,Ni=mu(n=>n.replace(IE,"-$1").toLowerCase()),gu=mu(n=>n.charAt(0).toUpperCase()+n.slice(1)),Cl=mu(n=>n?`on${gu(n)}`:""),Lo=(n,e)=>!Object.is(n,e),mc=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},Nc=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},ih=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let Sp;const bE=()=>Sp||(Sp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let on;class EE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=on,!e&&on&&(this.index=(on.scopes||(on.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=on;try{return on=this,e()}finally{on=t}}}on(){on=this}off(){on=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function TE(n,e=on){e&&e.active&&e.effects.push(n)}function SE(){return on}const yd=n=>{const e=new Set(n);return e.w=0,e.n=0,e},fy=n=>(n.w&Ir)>0,py=n=>(n.n&Ir)>0,AE=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=Ir},CE=n=>{const{deps:e}=n;if(e.length){let t=0;for(let r=0;r<e.length;r++){const s=e[r];fy(s)&&!py(s)?s.delete(n):e[t++]=s,s.w&=~Ir,s.n&=~Ir}e.length=t}},oh=new WeakMap;let lo=0,Ir=1;const ah=30;let an;const ls=Symbol(""),ch=Symbol("");class vd{constructor(e,t=null,r){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,TE(this,r)}run(){if(!this.active)return this.fn();let e=an,t=gr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=an,an=this,gr=!0,Ir=1<<++lo,lo<=ah?AE(this):Ap(this),this.fn()}finally{lo<=ah&&CE(this),Ir=1<<--lo,an=this.parent,gr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){an===this?this.deferStop=!0:this.active&&(Ap(this),this.onStop&&this.onStop(),this.active=!1)}}function Ap(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let gr=!0;const my=[];function xi(){my.push(gr),gr=!1}function Pi(){const n=my.pop();gr=n===void 0?!0:n}function Bt(n,e,t){if(gr&&an){let r=oh.get(n);r||oh.set(n,r=new Map);let s=r.get(t);s||r.set(t,s=yd()),gy(s)}}function gy(n,e){let t=!1;lo<=ah?py(n)||(n.n|=Ir,t=!fy(n)):t=!n.has(an),t&&(n.add(an),an.deps.push(n))}function Gn(n,e,t,r,s,i){const o=oh.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&ee(n)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":ee(n)?gd(t)&&a.push(o.get("length")):(a.push(o.get(ls)),ni(n)&&a.push(o.get(ch)));break;case"delete":ee(n)||(a.push(o.get(ls)),ni(n)&&a.push(o.get(ch)));break;case"set":ni(n)&&a.push(o.get(ls));break}if(a.length===1)a[0]&&uh(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);uh(yd(c))}}function uh(n,e){const t=ee(n)?n:[...n];for(const r of t)r.computed&&Cp(r);for(const r of t)r.computed||Cp(r)}function Cp(n,e){(n!==an||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const kE=hd("__proto__,__v_isRef,__isVue"),yy=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Mo)),RE=wd(),DE=wd(!1,!0),NE=wd(!0),kp=xE();function xE(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const r=we(this);for(let i=0,o=this.length;i<o;i++)Bt(r,"get",i+"");const s=r[e](...t);return s===-1||s===!1?r[e](...t.map(we)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){xi();const r=we(this)[e].apply(this,t);return Pi(),r}}),n}function PE(n){const e=we(this);return Bt(e,"has",n),e.hasOwnProperty(n)}function wd(n=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(n?e?QE:by:e?Iy:_y).get(r))return r;const o=ee(r);if(!n){if(o&&pe(kp,s))return Reflect.get(kp,s,i);if(s==="hasOwnProperty")return PE}const a=Reflect.get(r,s,i);return(Mo(s)?yy.has(s):kE(s))||(n||Bt(r,"get",s),e)?a:Ye(a)?o&&gd(s)?a:a.value:ke(a)?n?Ey(a):Ns(a):a}}const OE=vy(),ME=vy(!0);function vy(n=!1){return function(t,r,s,i){let o=t[r];if(li(o)&&Ye(o)&&!Ye(s))return!1;if(!n&&(!xc(s)&&!li(s)&&(o=we(o),s=we(s)),!ee(t)&&Ye(o)&&!Ye(s)))return o.value=s,!0;const a=ee(t)&&gd(r)?Number(r)<t.length:pe(t,r),c=Reflect.set(t,r,s,i);return t===we(i)&&(a?Lo(s,o)&&Gn(t,"set",r,s):Gn(t,"add",r,s)),c}}function LE(n,e){const t=pe(n,e);n[e];const r=Reflect.deleteProperty(n,e);return r&&t&&Gn(n,"delete",e,void 0),r}function FE(n,e){const t=Reflect.has(n,e);return(!Mo(e)||!yy.has(e))&&Bt(n,"has",e),t}function UE(n){return Bt(n,"iterate",ee(n)?"length":ls),Reflect.ownKeys(n)}const wy={get:RE,set:OE,deleteProperty:LE,has:FE,ownKeys:UE},VE={get:NE,set(n,e){return!0},deleteProperty(n,e){return!0}},$E=xt({},wy,{get:DE,set:ME}),_d=n=>n,yu=n=>Reflect.getPrototypeOf(n);function Wa(n,e,t=!1,r=!1){n=n.__v_raw;const s=we(n),i=we(e);t||(e!==i&&Bt(s,"get",e),Bt(s,"get",i));const{has:o}=yu(s),a=r?_d:t?Ed:Fo;if(o.call(s,e))return a(n.get(e));if(o.call(s,i))return a(n.get(i));n!==s&&n.get(e)}function Ha(n,e=!1){const t=this.__v_raw,r=we(t),s=we(n);return e||(n!==s&&Bt(r,"has",n),Bt(r,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Qa(n,e=!1){return n=n.__v_raw,!e&&Bt(we(n),"iterate",ls),Reflect.get(n,"size",n)}function Rp(n){n=we(n);const e=we(this);return yu(e).has.call(e,n)||(e.add(n),Gn(e,"add",n,n)),this}function Dp(n,e){e=we(e);const t=we(this),{has:r,get:s}=yu(t);let i=r.call(t,n);i||(n=we(n),i=r.call(t,n));const o=s.call(t,n);return t.set(n,e),i?Lo(e,o)&&Gn(t,"set",n,e):Gn(t,"add",n,e),this}function Np(n){const e=we(this),{has:t,get:r}=yu(e);let s=t.call(e,n);s||(n=we(n),s=t.call(e,n)),r&&r.call(e,n);const i=e.delete(n);return s&&Gn(e,"delete",n,void 0),i}function xp(){const n=we(this),e=n.size!==0,t=n.clear();return e&&Gn(n,"clear",void 0,void 0),t}function Ya(n,e){return function(r,s){const i=this,o=i.__v_raw,a=we(o),c=e?_d:n?Ed:Fo;return!n&&Bt(a,"iterate",ls),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function Ja(n,e,t){return function(...r){const s=this.__v_raw,i=we(s),o=ni(i),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=s[n](...r),l=t?_d:e?Ed:Fo;return!e&&Bt(i,"iterate",c?ch:ls),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function rr(n){return function(...e){return n==="delete"?!1:this}}function BE(){const n={get(i){return Wa(this,i)},get size(){return Qa(this)},has:Ha,add:Rp,set:Dp,delete:Np,clear:xp,forEach:Ya(!1,!1)},e={get(i){return Wa(this,i,!1,!0)},get size(){return Qa(this)},has:Ha,add:Rp,set:Dp,delete:Np,clear:xp,forEach:Ya(!1,!0)},t={get(i){return Wa(this,i,!0)},get size(){return Qa(this,!0)},has(i){return Ha.call(this,i,!0)},add:rr("add"),set:rr("set"),delete:rr("delete"),clear:rr("clear"),forEach:Ya(!0,!1)},r={get(i){return Wa(this,i,!0,!0)},get size(){return Qa(this,!0)},has(i){return Ha.call(this,i,!0)},add:rr("add"),set:rr("set"),delete:rr("delete"),clear:rr("clear"),forEach:Ya(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Ja(i,!1,!1),t[i]=Ja(i,!0,!1),e[i]=Ja(i,!1,!0),r[i]=Ja(i,!0,!0)}),[n,t,e,r]}const[qE,jE,zE,KE]=BE();function Id(n,e){const t=e?n?KE:zE:n?jE:qE;return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(pe(t,s)&&s in r?t:r,s,i)}const GE={get:Id(!1,!1)},WE={get:Id(!1,!0)},HE={get:Id(!0,!1)},_y=new WeakMap,Iy=new WeakMap,by=new WeakMap,QE=new WeakMap;function YE(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function JE(n){return n.__v_skip||!Object.isExtensible(n)?0:YE(wE(n))}function Ns(n){return li(n)?n:bd(n,!1,wy,GE,_y)}function XE(n){return bd(n,!1,$E,WE,Iy)}function Ey(n){return bd(n,!0,VE,HE,by)}function bd(n,e,t,r,s){if(!ke(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=s.get(n);if(i)return i;const o=JE(n);if(o===0)return n;const a=new Proxy(n,o===2?r:t);return s.set(n,a),a}function ri(n){return li(n)?ri(n.__v_raw):!!(n&&n.__v_isReactive)}function li(n){return!!(n&&n.__v_isReadonly)}function xc(n){return!!(n&&n.__v_isShallow)}function Ty(n){return ri(n)||li(n)}function we(n){const e=n&&n.__v_raw;return e?we(e):n}function Sy(n){return Nc(n,"__v_skip",!0),n}const Fo=n=>ke(n)?Ns(n):n,Ed=n=>ke(n)?Ey(n):n;function Ay(n){gr&&an&&(n=we(n),gy(n.dep||(n.dep=yd())))}function Cy(n,e){n=we(n);const t=n.dep;t&&uh(t)}function Ye(n){return!!(n&&n.__v_isRef===!0)}function wt(n){return ky(n,!1)}function ZE(n){return ky(n,!0)}function ky(n,e){return Ye(n)?n:new eT(n,e)}class eT{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:we(e),this._value=t?e:Fo(e)}get value(){return Ay(this),this._value}set value(e){const t=this.__v_isShallow||xc(e)||li(e);e=t?e:we(e),Lo(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Fo(e),Cy(this))}}function J(n){return Ye(n)?n.value:n}const tT={get:(n,e,t)=>J(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return Ye(s)&&!Ye(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Ry(n){return ri(n)?n:new Proxy(n,tT)}var Dy;class nT{constructor(e,t,r,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Dy]=!1,this._dirty=!0,this.effect=new vd(e,()=>{this._dirty||(this._dirty=!0,Cy(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=we(this);return Ay(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Dy="__v_isReadonly";function rT(n,e,t=!1){let r,s;const i=ie(n);return i?(r=n,s=hn):(r=n.get,s=n.set),new nT(r,s,i||!s,t)}function yr(n,e,t,r){let s;try{s=r?n(...r):n()}catch(i){vu(i,e,t)}return s}function dn(n,e,t,r){if(ie(n)){const i=yr(n,e,t,r);return i&&ly(i)&&i.catch(o=>{vu(o,e,t)}),i}const s=[];for(let i=0;i<n.length;i++)s.push(dn(n[i],e,t,r));return s}function vu(n,e,t,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=t;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](n,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){yr(c,null,10,[n,o,a]);return}}sT(n,t,s,r)}function sT(n,e,t,r=!0){console.error(n)}let Uo=!1,lh=!1;const It=[];let bn=0;const si=[];let Vn=null,Qr=0;const Ny=Promise.resolve();let Td=null;function xy(n){const e=Td||Ny;return n?e.then(this?n.bind(this):n):e}function iT(n){let e=bn+1,t=It.length;for(;e<t;){const r=e+t>>>1;Vo(It[r])<n?e=r+1:t=r}return e}function Sd(n){(!It.length||!It.includes(n,Uo&&n.allowRecurse?bn+1:bn))&&(n.id==null?It.push(n):It.splice(iT(n.id),0,n),Py())}function Py(){!Uo&&!lh&&(lh=!0,Td=Ny.then(My))}function oT(n){const e=It.indexOf(n);e>bn&&It.splice(e,1)}function aT(n){ee(n)?si.push(...n):(!Vn||!Vn.includes(n,n.allowRecurse?Qr+1:Qr))&&si.push(n),Py()}function Pp(n,e=Uo?bn+1:0){for(;e<It.length;e++){const t=It[e];t&&t.pre&&(It.splice(e,1),e--,t())}}function Oy(n){if(si.length){const e=[...new Set(si)];if(si.length=0,Vn){Vn.push(...e);return}for(Vn=e,Vn.sort((t,r)=>Vo(t)-Vo(r)),Qr=0;Qr<Vn.length;Qr++)Vn[Qr]();Vn=null,Qr=0}}const Vo=n=>n.id==null?1/0:n.id,cT=(n,e)=>{const t=Vo(n)-Vo(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function My(n){lh=!1,Uo=!0,It.sort(cT);const e=hn;try{for(bn=0;bn<It.length;bn++){const t=It[bn];t&&t.active!==!1&&yr(t,null,14)}}finally{bn=0,It.length=0,Oy(),Uo=!1,Td=null,(It.length||si.length)&&My()}}function uT(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Re;let s=t;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||Re;d&&(s=t.map(p=>Je(p)?p.trim():p)),h&&(s=t.map(ih))}let a,c=r[a=Cl(e)]||r[a=Cl(Pn(e))];!c&&i&&(c=r[a=Cl(Ni(e))]),c&&dn(c,n,6,s);const u=r[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,dn(u,n,6,s)}}function Ly(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let o={},a=!1;if(!ie(n)){const c=u=>{const l=Ly(u,e,!0);l&&(a=!0,xt(o,l))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!a?(ke(n)&&r.set(n,null),null):(ee(i)?i.forEach(c=>o[c]=null):xt(o,i),ke(n)&&r.set(n,o),o)}function wu(n,e){return!n||!pu(e)?!1:(e=e.slice(2).replace(/Once$/,""),pe(n,e[0].toLowerCase()+e.slice(1))||pe(n,Ni(e))||pe(n,e))}let bt=null,_u=null;function Pc(n){const e=bt;return bt=n,_u=n&&n.type.__scopeId||null,e}function xs(n){_u=n}function Ps(){_u=null}function nt(n,e=bt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&qp(-1);const i=Pc(e);let o;try{o=n(...s)}finally{Pc(i),r._d&&qp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function kl(n){const{type:e,vnode:t,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:w}=n;let k,D;const N=Pc(n);try{if(t.shapeFlag&4){const q=s||r;k=_n(l.call(q,q,h,i,p,d,g)),D=c}else{const q=e;k=_n(q.length>1?q(i,{attrs:c,slots:a,emit:u}):q(i,null)),D=e.props?c:lT(c)}}catch(q){_o.length=0,vu(q,n,1),k=ae(br)}let S=k;if(D&&w!==!1){const q=Object.keys(D),{shapeFlag:X}=S;q.length&&X&7&&(o&&q.some(pd)&&(D=hT(D,o)),S=hi(S,D))}return t.dirs&&(S=hi(S),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&(S.transition=t.transition),k=S,Pc(N),k}const lT=n=>{let e;for(const t in n)(t==="class"||t==="style"||pu(t))&&((e||(e={}))[t]=n[t]);return e},hT=(n,e)=>{const t={};for(const r in n)(!pd(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function dT(n,e,t){const{props:r,children:s,component:i}=n,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?Op(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!wu(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?Op(r,o,u):!0:!!o;return!1}function Op(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!wu(t,i))return!0}return!1}function fT({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const pT=n=>n.__isSuspense;function mT(n,e){e&&e.pendingBranch?ee(n)?e.effects.push(...n):e.effects.push(n):aT(n)}function gc(n,e){if(He){let t=He.provides;const r=He.parent&&He.parent.provides;r===t&&(t=He.provides=Object.create(r)),t[n]=e}}function fn(n,e,t=!1){const r=He||bt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ie(e)?e.call(r.proxy):e}}const Xa={};function hs(n,e,t){return Fy(n,e,t)}function Fy(n,e,{immediate:t,deep:r,flush:s,onTrack:i,onTrigger:o}=Re){const a=SE()===(He==null?void 0:He.scope)?He:null;let c,u=!1,l=!1;if(Ye(n)?(c=()=>n.value,u=xc(n)):ri(n)?(c=()=>n,r=!0):ee(n)?(l=!0,u=n.some(S=>ri(S)||xc(S)),c=()=>n.map(S=>{if(Ye(S))return S.value;if(ri(S))return rs(S);if(ie(S))return yr(S,a,2)})):ie(n)?e?c=()=>yr(n,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),dn(n,a,3,[d])}:c=hn,e&&r){const S=c;c=()=>rs(S())}let h,d=S=>{h=D.onStop=()=>{yr(S,a,4)}},p;if(Bo)if(d=hn,e?t&&dn(e,a,3,[c(),l?[]:void 0,d]):c(),s==="sync"){const S=a0();p=S.__watcherHandles||(S.__watcherHandles=[])}else return hn;let g=l?new Array(n.length).fill(Xa):Xa;const w=()=>{if(D.active)if(e){const S=D.run();(r||u||(l?S.some((q,X)=>Lo(q,g[X])):Lo(S,g)))&&(h&&h(),dn(e,a,3,[S,g===Xa?void 0:l&&g[0]===Xa?[]:g,d]),g=S)}else D.run()};w.allowRecurse=!!e;let k;s==="sync"?k=w:s==="post"?k=()=>Mt(w,a&&a.suspense):(w.pre=!0,a&&(w.id=a.uid),k=()=>Sd(w));const D=new vd(c,k);e?t?w():g=D.run():s==="post"?Mt(D.run.bind(D),a&&a.suspense):D.run();const N=()=>{D.stop(),a&&a.scope&&md(a.scope.effects,D)};return p&&p.push(N),N}function gT(n,e,t){const r=this.proxy,s=Je(n)?n.includes(".")?Uy(r,n):()=>r[n]:n.bind(r,r);let i;ie(e)?i=e:(i=e.handler,t=e);const o=He;di(this);const a=Fy(s,i.bind(r),t);return o?di(o):ds(),a}function Uy(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}function rs(n,e){if(!ke(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),Ye(n))rs(n.value,e);else if(ee(n))for(let t=0;t<n.length;t++)rs(n[t],e);else if(uy(n)||ni(n))n.forEach(t=>{rs(t,e)});else if(dy(n))for(const t in n)rs(n[t],e);return n}function Xt(n){return ie(n)?{setup:n,name:n.name}:n}const vo=n=>!!n.type.__asyncLoader,Vy=n=>n.type.__isKeepAlive;function yT(n,e){$y(n,"a",e)}function vT(n,e){$y(n,"da",e)}function $y(n,e,t=He){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(Iu(e,r,t),t){let s=t.parent;for(;s&&s.parent;)Vy(s.parent.vnode)&&wT(r,e,t,s),s=s.parent}}function wT(n,e,t,r){const s=Iu(e,n,r,!0);By(()=>{md(r[e],s)},t)}function Iu(n,e,t=He,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;xi(),di(t);const a=dn(e,t,n,o);return ds(),Pi(),a});return r?s.unshift(i):s.push(i),i}}const Jn=n=>(e,t=He)=>(!Bo||n==="sp")&&Iu(n,(...r)=>e(...r),t),_T=Jn("bm"),ma=Jn("m"),IT=Jn("bu"),bT=Jn("u"),ET=Jn("bum"),By=Jn("um"),TT=Jn("sp"),ST=Jn("rtg"),AT=Jn("rtc");function CT(n,e=He){Iu("ec",n,e)}function $n(n,e){const t=bt;if(t===null)return n;const r=Su(t)||t.proxy,s=n.dirs||(n.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=Re]=e[i];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&rs(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return n}function jr(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(xi(),dn(c,t,8,[n.el,a,n,e]),Pi())}}const qy="components";function bu(n,e){return RT(qy,n,!0,e)||n}const kT=Symbol();function RT(n,e,t=!0,r=!1){const s=bt||He;if(s){const i=s.type;if(n===qy){const a=s0(i,!1);if(a&&(a===e||a===Pn(e)||a===gu(Pn(e))))return i}const o=Mp(s[n]||i[n],e)||Mp(s.appContext[n],e);return!o&&r?i:o}}function Mp(n,e){return n&&(n[e]||n[Pn(e)]||n[gu(Pn(e))])}function yc(n,e,t,r){let s;const i=t&&t[r];if(ee(n)||Je(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,i&&i[o])}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(ke(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(n[u],u,a,i&&i[a])}}else s=[];return t&&(t[r]=s),s}function jy(n,e,t={},r,s){if(bt.isCE||bt.parent&&vo(bt.parent)&&bt.parent.isCE)return e!=="default"&&(t.name=e),ae("slot",t,r&&r());let i=n[e];i&&i._c&&(i._d=!1),ve();const o=i&&zy(i(t)),a=ev(_t,{key:t.key||o&&o.key||`_${e}`},o||(r?r():[]),o&&n._===1?64:-2);return!s&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),i&&i._c&&(i._d=!0),a}function zy(n){return n.some(e=>Mc(e)?!(e.type===br||e.type===_t&&!zy(e.children)):!0)?n:null}const hh=n=>n?nv(n)?Su(n)||n.proxy:hh(n.parent):null,wo=xt(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>hh(n.parent),$root:n=>hh(n.root),$emit:n=>n.emit,$options:n=>Ad(n),$forceUpdate:n=>n.f||(n.f=()=>Sd(n.update)),$nextTick:n=>n.n||(n.n=xy.bind(n.proxy)),$watch:n=>gT.bind(n)}),Rl=(n,e)=>n!==Re&&!n.__isScriptSetup&&pe(n,e),DT={get({_:n},e){const{ctx:t,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=n;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(Rl(r,e))return o[e]=1,r[e];if(s!==Re&&pe(s,e))return o[e]=2,s[e];if((u=n.propsOptions[0])&&pe(u,e))return o[e]=3,i[e];if(t!==Re&&pe(t,e))return o[e]=4,t[e];dh&&(o[e]=0)}}const l=wo[e];let h,d;if(l)return e==="$attrs"&&Bt(n,"get",e),l(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Re&&pe(t,e))return o[e]=4,t[e];if(d=c.config.globalProperties,pe(d,e))return d[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return Rl(s,e)?(s[e]=t,!0):r!==Re&&pe(r,e)?(r[e]=t,!0):pe(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!t[o]||n!==Re&&pe(n,o)||Rl(e,o)||(a=i[0])&&pe(a,o)||pe(r,o)||pe(wo,o)||pe(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:pe(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let dh=!0;function NT(n){const e=Ad(n),t=n.proxy,r=n.ctx;dh=!1,e.beforeCreate&&Lp(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:w,deactivated:k,beforeDestroy:D,beforeUnmount:N,destroyed:S,unmounted:q,render:X,renderTracked:te,renderTriggered:ye,errorCaptured:xe,serverPrefetch:Pt,expose:yt,inheritAttrs:en,components:ce,directives:tn,filters:yn}=e;if(u&&xT(u,r,null,n.appContext.config.unwrapInjectedRef),o)for(const Ae in o){const Ee=o[Ae];ie(Ee)&&(r[Ae]=Ee.bind(t))}if(s){const Ae=s.call(t,t);ke(Ae)&&(n.data=Ns(Ae))}if(dh=!0,i)for(const Ae in i){const Ee=i[Ae],nn=ie(Ee)?Ee.bind(t,t):ie(Ee.get)?Ee.get.bind(t,t):hn,qr=!ie(Ee)&&ie(Ee.set)?Ee.set.bind(t):hn,rn=Qt({get:nn,set:qr});Object.defineProperty(r,Ae,{enumerable:!0,configurable:!0,get:()=>rn.value,set:Ot=>rn.value=Ot})}if(a)for(const Ae in a)Ky(a[Ae],r,t,Ae);if(c){const Ae=ie(c)?c.call(t):c;Reflect.ownKeys(Ae).forEach(Ee=>{gc(Ee,Ae[Ee])})}l&&Lp(l,n,"c");function Ke(Ae,Ee){ee(Ee)?Ee.forEach(nn=>Ae(nn.bind(t))):Ee&&Ae(Ee.bind(t))}if(Ke(_T,h),Ke(ma,d),Ke(IT,p),Ke(bT,g),Ke(yT,w),Ke(vT,k),Ke(CT,xe),Ke(AT,te),Ke(ST,ye),Ke(ET,N),Ke(By,q),Ke(TT,Pt),ee(yt))if(yt.length){const Ae=n.exposed||(n.exposed={});yt.forEach(Ee=>{Object.defineProperty(Ae,Ee,{get:()=>t[Ee],set:nn=>t[Ee]=nn})})}else n.exposed||(n.exposed={});X&&n.render===hn&&(n.render=X),en!=null&&(n.inheritAttrs=en),ce&&(n.components=ce),tn&&(n.directives=tn)}function xT(n,e,t=hn,r=!1){ee(n)&&(n=fh(n));for(const s in n){const i=n[s];let o;ke(i)?"default"in i?o=fn(i.from||s,i.default,!0):o=fn(i.from||s):o=fn(i),Ye(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Lp(n,e,t){dn(ee(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function Ky(n,e,t,r){const s=r.includes(".")?Uy(t,r):()=>t[r];if(Je(n)){const i=e[n];ie(i)&&hs(s,i)}else if(ie(n))hs(s,n.bind(t));else if(ke(n))if(ee(n))n.forEach(i=>Ky(i,e,t,r));else{const i=ie(n.handler)?n.handler.bind(t):e[n.handler];ie(i)&&hs(s,i,n)}}function Ad(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(u=>Oc(c,u,o,!0)),Oc(c,e,o)),ke(e)&&i.set(e,c),c}function Oc(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Oc(n,i,t,!0),s&&s.forEach(o=>Oc(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=PT[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const PT={data:Fp,props:Gr,emits:Gr,methods:Gr,computed:Gr,beforeCreate:St,created:St,beforeMount:St,mounted:St,beforeUpdate:St,updated:St,beforeDestroy:St,beforeUnmount:St,destroyed:St,unmounted:St,activated:St,deactivated:St,errorCaptured:St,serverPrefetch:St,components:Gr,directives:Gr,watch:MT,provide:Fp,inject:OT};function Fp(n,e){return e?n?function(){return xt(ie(n)?n.call(this,this):n,ie(e)?e.call(this,this):e)}:e:n}function OT(n,e){return Gr(fh(n),fh(e))}function fh(n){if(ee(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function St(n,e){return n?[...new Set([].concat(n,e))]:e}function Gr(n,e){return n?xt(xt(Object.create(null),n),e):e}function MT(n,e){if(!n)return e;if(!e)return n;const t=xt(Object.create(null),n);for(const r in e)t[r]=St(n[r],e[r]);return t}function LT(n,e,t,r=!1){const s={},i={};Nc(i,Tu,1),n.propsDefaults=Object.create(null),Gy(n,e,s,i);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=r?s:XE(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function FT(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=n,a=we(s),[c]=n.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=n.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(wu(n.emitsOptions,d))continue;const p=e[d];if(c)if(pe(i,d))p!==i[d]&&(i[d]=p,u=!0);else{const g=Pn(d);s[g]=ph(c,a,g,p,n,!1)}else p!==i[d]&&(i[d]=p,u=!0)}}}else{Gy(n,e,s,i)&&(u=!0);let l;for(const h in a)(!e||!pe(e,h)&&((l=Ni(h))===h||!pe(e,l)))&&(c?t&&(t[h]!==void 0||t[l]!==void 0)&&(s[h]=ph(c,a,h,void 0,n,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!pe(e,h))&&(delete i[h],u=!0)}u&&Gn(n,"set","$attrs")}function Gy(n,e,t,r){const[s,i]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(pc(c))continue;const u=e[c];let l;s&&pe(s,l=Pn(c))?!i||!i.includes(l)?t[l]=u:(a||(a={}))[l]=u:wu(n.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=we(t),u=a||Re;for(let l=0;l<i.length;l++){const h=i[l];t[h]=ph(s,c,h,u[h],n,!pe(u,h))}}return o}function ph(n,e,t,r,s,i){const o=n[t];if(o!=null){const a=pe(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ie(c)){const{propsDefaults:u}=s;t in u?r=u[t]:(di(s),r=u[t]=c.call(null,e),ds())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ni(t))&&(r=!0))}return r}function Wy(n,e,t=!1){const r=e.propsCache,s=r.get(n);if(s)return s;const i=n.props,o={},a=[];let c=!1;if(!ie(n)){const l=h=>{c=!0;const[d,p]=Wy(h,e,!0);xt(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}if(!i&&!c)return ke(n)&&r.set(n,ti),ti;if(ee(i))for(let l=0;l<i.length;l++){const h=Pn(i[l]);Up(h)&&(o[h]=Re)}else if(i)for(const l in i){const h=Pn(l);if(Up(h)){const d=i[l],p=o[h]=ee(d)||ie(d)?{type:d}:Object.assign({},d);if(p){const g=Bp(Boolean,p.type),w=Bp(String,p.type);p[0]=g>-1,p[1]=w<0||g<w,(g>-1||pe(p,"default"))&&a.push(h)}}}const u=[o,a];return ke(n)&&r.set(n,u),u}function Up(n){return n[0]!=="$"}function Vp(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function $p(n,e){return Vp(n)===Vp(e)}function Bp(n,e){return ee(e)?e.findIndex(t=>$p(t,n)):ie(e)&&$p(e,n)?0:-1}const Hy=n=>n[0]==="_"||n==="$stable",Cd=n=>ee(n)?n.map(_n):[_n(n)],UT=(n,e,t)=>{if(e._n)return e;const r=nt((...s)=>Cd(e(...s)),t);return r._c=!1,r},Qy=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Hy(s))continue;const i=n[s];if(ie(i))e[s]=UT(s,i,r);else if(i!=null){const o=Cd(i);e[s]=()=>o}}},Yy=(n,e)=>{const t=Cd(e);n.slots.default=()=>t},VT=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=we(e),Nc(e,"_",t)):Qy(e,n.slots={})}else n.slots={},e&&Yy(n,e);Nc(n.slots,Tu,1)},$T=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,o=Re;if(r.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:(xt(s,e),!t&&a===1&&delete s._):(i=!e.$stable,Qy(e,s)),o=e}else e&&(Yy(n,e),o={default:1});if(i)for(const a in s)!Hy(a)&&!(a in o)&&delete s[a]};function Jy(){return{app:null,config:{isNativeTag:gE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let BT=0;function qT(n,e){return function(r,s=null){ie(r)||(r=Object.assign({},r)),s!=null&&!ke(s)&&(s=null);const i=Jy(),o=new Set;let a=!1;const c=i.app={_uid:BT++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:c0,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&ie(u.install)?(o.add(u),u.install(c,...l)):ie(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=ae(r,s);return d.appContext=i,l&&e?e(d,u):n(d,u,h),a=!0,c._container=u,u.__vue_app__=c,Su(d.component)||d.component.proxy}},unmount(){a&&(n(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function mh(n,e,t,r,s=!1){if(ee(n)){n.forEach((d,p)=>mh(d,e&&(ee(e)?e[p]:e),t,r,s));return}if(vo(r)&&!s)return;const i=r.shapeFlag&4?Su(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=n,u=e&&e.r,l=a.refs===Re?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Je(u)?(l[u]=null,pe(h,u)&&(h[u]=null)):Ye(u)&&(u.value=null)),ie(c))yr(c,a,12,[o,l]);else{const d=Je(c),p=Ye(c);if(d||p){const g=()=>{if(n.f){const w=d?pe(h,c)?h[c]:l[c]:c.value;s?ee(w)&&md(w,i):ee(w)?w.includes(i)||w.push(i):d?(l[c]=[i],pe(h,c)&&(h[c]=l[c])):(c.value=[i],n.k&&(l[n.k]=c.value))}else d?(l[c]=o,pe(h,c)&&(h[c]=o)):p&&(c.value=o,n.k&&(l[n.k]=o))};o?(g.id=-1,Mt(g,t)):g()}}}const Mt=mT;function jT(n){return zT(n)}function zT(n,e){const t=bE();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:p=hn,insertStaticContent:g}=n,w=(f,m,_,I=null,T=null,P=null,V=!1,x=null,M=!!m.dynamicChildren)=>{if(f===m)return;f&&!Xi(f,m)&&(I=U(f),Ot(f,T,P,!0),f=null),m.patchFlag===-2&&(M=!1,m.dynamicChildren=null);const{type:C,ref:Q,shapeFlag:j}=m;switch(C){case Eu:k(f,m,_,I);break;case br:D(f,m,_,I);break;case Dl:f==null&&N(m,_,I,V);break;case _t:ce(f,m,_,I,T,P,V,x,M);break;default:j&1?X(f,m,_,I,T,P,V,x,M):j&6?tn(f,m,_,I,T,P,V,x,M):(j&64||j&128)&&C.process(f,m,_,I,T,P,V,x,M,fe)}Q!=null&&T&&mh(Q,f&&f.ref,P,m||f,!m)},k=(f,m,_,I)=>{if(f==null)r(m.el=a(m.children),_,I);else{const T=m.el=f.el;m.children!==f.children&&u(T,m.children)}},D=(f,m,_,I)=>{f==null?r(m.el=c(m.children||""),_,I):m.el=f.el},N=(f,m,_,I)=>{[f.el,f.anchor]=g(f.children,m,_,I,f.el,f.anchor)},S=({el:f,anchor:m},_,I)=>{let T;for(;f&&f!==m;)T=d(f),r(f,_,I),f=T;r(m,_,I)},q=({el:f,anchor:m})=>{let _;for(;f&&f!==m;)_=d(f),s(f),f=_;s(m)},X=(f,m,_,I,T,P,V,x,M)=>{V=V||m.type==="svg",f==null?te(m,_,I,T,P,V,x,M):Pt(f,m,T,P,V,x,M)},te=(f,m,_,I,T,P,V,x)=>{let M,C;const{type:Q,props:j,shapeFlag:Y,transition:ne,dirs:ue}=f;if(M=f.el=o(f.type,P,j&&j.is,j),Y&8?l(M,f.children):Y&16&&xe(f.children,M,null,I,T,P&&Q!=="foreignObject",V,x),ue&&jr(f,null,I,"created"),ye(M,f,f.scopeId,V,I),j){for(const Te in j)Te!=="value"&&!pc(Te)&&i(M,Te,null,j[Te],P,f.children,I,T,B);"value"in j&&i(M,"value",null,j.value),(C=j.onVnodeBeforeMount)&&wn(C,I,f)}ue&&jr(f,null,I,"beforeMount");const Ce=(!T||T&&!T.pendingBranch)&&ne&&!ne.persisted;Ce&&ne.beforeEnter(M),r(M,m,_),((C=j&&j.onVnodeMounted)||Ce||ue)&&Mt(()=>{C&&wn(C,I,f),Ce&&ne.enter(M),ue&&jr(f,null,I,"mounted")},T)},ye=(f,m,_,I,T)=>{if(_&&p(f,_),I)for(let P=0;P<I.length;P++)p(f,I[P]);if(T){let P=T.subTree;if(m===P){const V=T.vnode;ye(f,V,V.scopeId,V.slotScopeIds,T.parent)}}},xe=(f,m,_,I,T,P,V,x,M=0)=>{for(let C=M;C<f.length;C++){const Q=f[C]=x?ur(f[C]):_n(f[C]);w(null,Q,m,_,I,T,P,V,x)}},Pt=(f,m,_,I,T,P,V)=>{const x=m.el=f.el;let{patchFlag:M,dynamicChildren:C,dirs:Q}=m;M|=f.patchFlag&16;const j=f.props||Re,Y=m.props||Re;let ne;_&&zr(_,!1),(ne=Y.onVnodeBeforeUpdate)&&wn(ne,_,m,f),Q&&jr(m,f,_,"beforeUpdate"),_&&zr(_,!0);const ue=T&&m.type!=="foreignObject";if(C?yt(f.dynamicChildren,C,x,_,I,ue,P):V||Ee(f,m,x,null,_,I,ue,P,!1),M>0){if(M&16)en(x,m,j,Y,_,I,T);else if(M&2&&j.class!==Y.class&&i(x,"class",null,Y.class,T),M&4&&i(x,"style",j.style,Y.style,T),M&8){const Ce=m.dynamicProps;for(let Te=0;Te<Ce.length;Te++){const Ge=Ce[Te],sn=j[Ge],zs=Y[Ge];(zs!==sn||Ge==="value")&&i(x,Ge,sn,zs,T,f.children,_,I,B)}}M&1&&f.children!==m.children&&l(x,m.children)}else!V&&C==null&&en(x,m,j,Y,_,I,T);((ne=Y.onVnodeUpdated)||Q)&&Mt(()=>{ne&&wn(ne,_,m,f),Q&&jr(m,f,_,"updated")},I)},yt=(f,m,_,I,T,P,V)=>{for(let x=0;x<m.length;x++){const M=f[x],C=m[x],Q=M.el&&(M.type===_t||!Xi(M,C)||M.shapeFlag&70)?h(M.el):_;w(M,C,Q,null,I,T,P,V,!0)}},en=(f,m,_,I,T,P,V)=>{if(_!==I){if(_!==Re)for(const x in _)!pc(x)&&!(x in I)&&i(f,x,_[x],null,V,m.children,T,P,B);for(const x in I){if(pc(x))continue;const M=I[x],C=_[x];M!==C&&x!=="value"&&i(f,x,C,M,V,m.children,T,P,B)}"value"in I&&i(f,"value",_.value,I.value)}},ce=(f,m,_,I,T,P,V,x,M)=>{const C=m.el=f?f.el:a(""),Q=m.anchor=f?f.anchor:a("");let{patchFlag:j,dynamicChildren:Y,slotScopeIds:ne}=m;ne&&(x=x?x.concat(ne):ne),f==null?(r(C,_,I),r(Q,_,I),xe(m.children,_,Q,T,P,V,x,M)):j>0&&j&64&&Y&&f.dynamicChildren?(yt(f.dynamicChildren,Y,_,T,P,V,x),(m.key!=null||T&&m===T.subTree)&&Xy(f,m,!0)):Ee(f,m,_,Q,T,P,V,x,M)},tn=(f,m,_,I,T,P,V,x,M)=>{m.slotScopeIds=x,f==null?m.shapeFlag&512?T.ctx.activate(m,_,I,V,M):yn(m,_,I,T,P,V,M):Yi(f,m,M)},yn=(f,m,_,I,T,P,V)=>{const x=f.component=ZT(f,I,T);if(Vy(f)&&(x.ctx.renderer=fe),e0(x),x.asyncDep){if(T&&T.registerDep(x,Ke),!f.el){const M=x.subTree=ae(br);D(null,M,m,_)}return}Ke(x,f,m,_,T,P,V)},Yi=(f,m,_)=>{const I=m.component=f.component;if(dT(f,m,_))if(I.asyncDep&&!I.asyncResolved){Ae(I,m,_);return}else I.next=m,oT(I.update),I.update();else m.el=f.el,I.vnode=m},Ke=(f,m,_,I,T,P,V)=>{const x=()=>{if(f.isMounted){let{next:Q,bu:j,u:Y,parent:ne,vnode:ue}=f,Ce=Q,Te;zr(f,!1),Q?(Q.el=ue.el,Ae(f,Q,V)):Q=ue,j&&mc(j),(Te=Q.props&&Q.props.onVnodeBeforeUpdate)&&wn(Te,ne,Q,ue),zr(f,!0);const Ge=kl(f),sn=f.subTree;f.subTree=Ge,w(sn,Ge,h(sn.el),U(sn),f,T,P),Q.el=Ge.el,Ce===null&&fT(f,Ge.el),Y&&Mt(Y,T),(Te=Q.props&&Q.props.onVnodeUpdated)&&Mt(()=>wn(Te,ne,Q,ue),T)}else{let Q;const{el:j,props:Y}=m,{bm:ne,m:ue,parent:Ce}=f,Te=vo(m);if(zr(f,!1),ne&&mc(ne),!Te&&(Q=Y&&Y.onVnodeBeforeMount)&&wn(Q,Ce,m),zr(f,!0),j&&oe){const Ge=()=>{f.subTree=kl(f),oe(j,f.subTree,f,T,null)};Te?m.type.__asyncLoader().then(()=>!f.isUnmounted&&Ge()):Ge()}else{const Ge=f.subTree=kl(f);w(null,Ge,_,I,f,T,P),m.el=Ge.el}if(ue&&Mt(ue,T),!Te&&(Q=Y&&Y.onVnodeMounted)){const Ge=m;Mt(()=>wn(Q,Ce,Ge),T)}(m.shapeFlag&256||Ce&&vo(Ce.vnode)&&Ce.vnode.shapeFlag&256)&&f.a&&Mt(f.a,T),f.isMounted=!0,m=_=I=null}},M=f.effect=new vd(x,()=>Sd(C),f.scope),C=f.update=()=>M.run();C.id=f.uid,zr(f,!0),C()},Ae=(f,m,_)=>{m.component=f;const I=f.vnode.props;f.vnode=m,f.next=null,FT(f,m.props,I,_),$T(f,m.children,_),xi(),Pp(),Pi()},Ee=(f,m,_,I,T,P,V,x,M=!1)=>{const C=f&&f.children,Q=f?f.shapeFlag:0,j=m.children,{patchFlag:Y,shapeFlag:ne}=m;if(Y>0){if(Y&128){qr(C,j,_,I,T,P,V,x,M);return}else if(Y&256){nn(C,j,_,I,T,P,V,x,M);return}}ne&8?(Q&16&&B(C,T,P),j!==C&&l(_,j)):Q&16?ne&16?qr(C,j,_,I,T,P,V,x,M):B(C,T,P,!0):(Q&8&&l(_,""),ne&16&&xe(j,_,I,T,P,V,x,M))},nn=(f,m,_,I,T,P,V,x,M)=>{f=f||ti,m=m||ti;const C=f.length,Q=m.length,j=Math.min(C,Q);let Y;for(Y=0;Y<j;Y++){const ne=m[Y]=M?ur(m[Y]):_n(m[Y]);w(f[Y],ne,_,null,T,P,V,x,M)}C>Q?B(f,T,P,!0,!1,j):xe(m,_,I,T,P,V,x,M,j)},qr=(f,m,_,I,T,P,V,x,M)=>{let C=0;const Q=m.length;let j=f.length-1,Y=Q-1;for(;C<=j&&C<=Y;){const ne=f[C],ue=m[C]=M?ur(m[C]):_n(m[C]);if(Xi(ne,ue))w(ne,ue,_,null,T,P,V,x,M);else break;C++}for(;C<=j&&C<=Y;){const ne=f[j],ue=m[Y]=M?ur(m[Y]):_n(m[Y]);if(Xi(ne,ue))w(ne,ue,_,null,T,P,V,x,M);else break;j--,Y--}if(C>j){if(C<=Y){const ne=Y+1,ue=ne<Q?m[ne].el:I;for(;C<=Y;)w(null,m[C]=M?ur(m[C]):_n(m[C]),_,ue,T,P,V,x,M),C++}}else if(C>Y)for(;C<=j;)Ot(f[C],T,P,!0),C++;else{const ne=C,ue=C,Ce=new Map;for(C=ue;C<=Y;C++){const zt=m[C]=M?ur(m[C]):_n(m[C]);zt.key!=null&&Ce.set(zt.key,C)}let Te,Ge=0;const sn=Y-ue+1;let zs=!1,Ip=0;const Ji=new Array(sn);for(C=0;C<sn;C++)Ji[C]=0;for(C=ne;C<=j;C++){const zt=f[C];if(Ge>=sn){Ot(zt,T,P,!0);continue}let vn;if(zt.key!=null)vn=Ce.get(zt.key);else for(Te=ue;Te<=Y;Te++)if(Ji[Te-ue]===0&&Xi(zt,m[Te])){vn=Te;break}vn===void 0?Ot(zt,T,P,!0):(Ji[vn-ue]=C+1,vn>=Ip?Ip=vn:zs=!0,w(zt,m[vn],_,null,T,P,V,x,M),Ge++)}const bp=zs?KT(Ji):ti;for(Te=bp.length-1,C=sn-1;C>=0;C--){const zt=ue+C,vn=m[zt],Ep=zt+1<Q?m[zt+1].el:I;Ji[C]===0?w(null,vn,_,Ep,T,P,V,x,M):zs&&(Te<0||C!==bp[Te]?rn(vn,_,Ep,2):Te--)}}},rn=(f,m,_,I,T=null)=>{const{el:P,type:V,transition:x,children:M,shapeFlag:C}=f;if(C&6){rn(f.component.subTree,m,_,I);return}if(C&128){f.suspense.move(m,_,I);return}if(C&64){V.move(f,m,_,fe);return}if(V===_t){r(P,m,_);for(let j=0;j<M.length;j++)rn(M[j],m,_,I);r(f.anchor,m,_);return}if(V===Dl){S(f,m,_);return}if(I!==2&&C&1&&x)if(I===0)x.beforeEnter(P),r(P,m,_),Mt(()=>x.enter(P),T);else{const{leave:j,delayLeave:Y,afterLeave:ne}=x,ue=()=>r(P,m,_),Ce=()=>{j(P,()=>{ue(),ne&&ne()})};Y?Y(P,ue,Ce):Ce()}else r(P,m,_)},Ot=(f,m,_,I=!1,T=!1)=>{const{type:P,props:V,ref:x,children:M,dynamicChildren:C,shapeFlag:Q,patchFlag:j,dirs:Y}=f;if(x!=null&&mh(x,null,_,f,!0),Q&256){m.ctx.deactivate(f);return}const ne=Q&1&&Y,ue=!vo(f);let Ce;if(ue&&(Ce=V&&V.onVnodeBeforeUnmount)&&wn(Ce,m,f),Q&6)b(f.component,_,I);else{if(Q&128){f.suspense.unmount(_,I);return}ne&&jr(f,null,m,"beforeUnmount"),Q&64?f.type.remove(f,m,_,T,fe,I):C&&(P!==_t||j>0&&j&64)?B(C,m,_,!1,!0):(P===_t&&j&384||!T&&Q&16)&&B(M,m,_),I&&js(f)}(ue&&(Ce=V&&V.onVnodeUnmounted)||ne)&&Mt(()=>{Ce&&wn(Ce,m,f),ne&&jr(f,null,m,"unmounted")},_)},js=f=>{const{type:m,el:_,anchor:I,transition:T}=f;if(m===_t){Ga(_,I);return}if(m===Dl){q(f);return}const P=()=>{s(_),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(f.shapeFlag&1&&T&&!T.persisted){const{leave:V,delayLeave:x}=T,M=()=>V(_,P);x?x(f.el,P,M):M()}else P()},Ga=(f,m)=>{let _;for(;f!==m;)_=d(f),s(f),f=_;s(m)},b=(f,m,_)=>{const{bum:I,scope:T,update:P,subTree:V,um:x}=f;I&&mc(I),T.stop(),P&&(P.active=!1,Ot(V,f,m,_)),x&&Mt(x,m),Mt(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},B=(f,m,_,I=!1,T=!1,P=0)=>{for(let V=P;V<f.length;V++)Ot(f[V],m,_,I,T)},U=f=>f.shapeFlag&6?U(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),H=(f,m,_)=>{f==null?m._vnode&&Ot(m._vnode,null,null,!0):w(m._vnode||null,f,m,null,null,null,_),Pp(),Oy(),m._vnode=f},fe={p:w,um:Ot,m:rn,r:js,mt:yn,mc:xe,pc:Ee,pbc:yt,n:U,o:n};let Le,oe;return e&&([Le,oe]=e(fe)),{render:H,hydrate:Le,createApp:qT(H,Le)}}function zr({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Xy(n,e,t=!1){const r=n.children,s=e.children;if(ee(r)&&ee(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ur(s[i]),a.el=o.el),t||Xy(o,a)),a.type===Eu&&(a.el=o.el)}}function KT(n){const e=n.slice(),t=[0];let r,s,i,o,a;const c=n.length;for(r=0;r<c;r++){const u=n[r];if(u!==0){if(s=t[t.length-1],n[s]<u){e[r]=s,t.push(r);continue}for(i=0,o=t.length-1;i<o;)a=i+o>>1,n[t[a]]<u?i=a+1:o=a;u<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}const GT=n=>n.__isTeleport,_t=Symbol(void 0),Eu=Symbol(void 0),br=Symbol(void 0),Dl=Symbol(void 0),_o=[];let un=null;function ve(n=!1){_o.push(un=n?null:[])}function WT(){_o.pop(),un=_o[_o.length-1]||null}let $o=1;function qp(n){$o+=n}function Zy(n){return n.dynamicChildren=$o>0?un||ti:null,WT(),$o>0&&un&&un.push(n),n}function Ie(n,e,t,r,s,i){return Zy(L(n,e,t,r,s,i,!0))}function ev(n,e,t,r,s){return Zy(ae(n,e,t,r,s,!0))}function Mc(n){return n?n.__v_isVNode===!0:!1}function Xi(n,e){return n.type===e.type&&n.key===e.key}const Tu="__vInternal",tv=({key:n})=>n??null,vc=({ref:n,ref_key:e,ref_for:t})=>n!=null?Je(n)||Ye(n)||ie(n)?{i:bt,r:n,k:e,f:!!t}:n:null;function L(n,e=null,t=null,r=0,s=null,i=n===_t?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&tv(e),ref:e&&vc(e),scopeId:_u,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:bt};return a?(kd(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Je(t)?8:16),$o>0&&!o&&un&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&un.push(c),c}const ae=HT;function HT(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===kT)&&(n=br),Mc(n)){const a=hi(n,e,!0);return t&&kd(a,t),$o>0&&!i&&un&&(a.shapeFlag&6?un[un.indexOf(n)]=a:un.push(a)),a.patchFlag|=-2,a}if(i0(n)&&(n=n.__vccOpts),e){e=QT(e);let{class:a,style:c}=e;a&&!Je(a)&&(e.class=fd(a)),ke(c)&&(Ty(c)&&!ee(c)&&(c=xt({},c)),e.style=dd(c))}const o=Je(n)?1:pT(n)?128:GT(n)?64:ke(n)?4:ie(n)?2:0;return L(n,e,t,r,s,o,i,!0)}function QT(n){return n?Ty(n)||Tu in n?xt({},n):n:null}function hi(n,e,t=!1){const{props:r,ref:s,patchFlag:i,children:o}=n,a=e?YT(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&tv(a),ref:e&&e.ref?t&&s?ee(s)?s.concat(vc(e)):[s,vc(e)]:vc(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==_t?i===-1?16:i|16:i,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&hi(n.ssContent),ssFallback:n.ssFallback&&hi(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function rt(n=" ",e=0){return ae(Eu,null,n,e)}function Za(n="",e=!1){return e?(ve(),ev(br,null,n)):ae(br,null,n)}function _n(n){return n==null||typeof n=="boolean"?ae(br):ee(n)?ae(_t,null,n.slice()):typeof n=="object"?ur(n):ae(Eu,null,String(n))}function ur(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:hi(n)}function kd(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(ee(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),kd(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(Tu in e)?e._ctx=bt:s===3&&bt&&(bt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:bt},t=32):(e=String(e),r&64?(t=16,e=[rt(e)]):t=8);n.children=e,n.shapeFlag|=t}function YT(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=fd([e.class,r.class]));else if(s==="style")e.style=dd([e.style,r.style]);else if(pu(s)){const i=e[s],o=r[s];o&&i!==o&&!(ee(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function wn(n,e,t,r=null){dn(n,e,7,[t,r])}const JT=Jy();let XT=0;function ZT(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||JT,i={uid:XT++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new EE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wy(r,s),emitsOptions:Ly(r,s),emit:null,emitted:null,propsDefaults:Re,inheritAttrs:r.inheritAttrs,ctx:Re,data:Re,props:Re,attrs:Re,slots:Re,refs:Re,setupState:Re,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=uT.bind(null,i),n.ce&&n.ce(i),i}let He=null;const di=n=>{He=n,n.scope.on()},ds=()=>{He&&He.scope.off(),He=null};function nv(n){return n.vnode.shapeFlag&4}let Bo=!1;function e0(n,e=!1){Bo=e;const{props:t,children:r}=n.vnode,s=nv(n);LT(n,t,s,e),VT(n,r);const i=s?t0(n,e):void 0;return Bo=!1,i}function t0(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=Sy(new Proxy(n.ctx,DT));const{setup:r}=t;if(r){const s=n.setupContext=r.length>1?r0(n):null;di(n),xi();const i=yr(r,n,0,[n.props,s]);if(Pi(),ds(),ly(i)){if(i.then(ds,ds),e)return i.then(o=>{jp(n,o,e)}).catch(o=>{vu(o,n,0)});n.asyncDep=i}else jp(n,i,e)}else rv(n,e)}function jp(n,e,t){ie(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:ke(e)&&(n.setupState=Ry(e)),rv(n,t)}let zp;function rv(n,e,t){const r=n.type;if(!n.render){if(!e&&zp&&!r.render){const s=r.template||Ad(n).template;if(s){const{isCustomElement:i,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=r,u=xt(xt({isCustomElement:i,delimiters:a},o),c);r.render=zp(s,u)}}n.render=r.render||hn}di(n),xi(),NT(n),Pi(),ds()}function n0(n){return new Proxy(n.attrs,{get(e,t){return Bt(n,"get","$attrs"),e[t]}})}function r0(n){const e=r=>{n.exposed=r||{}};let t;return{get attrs(){return t||(t=n0(n))},slots:n.slots,emit:n.emit,expose:e}}function Su(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Ry(Sy(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in wo)return wo[t](n)},has(e,t){return t in e||t in wo}}))}function s0(n,e=!0){return ie(n)?n.displayName||n.name:n.name||e&&n.__name}function i0(n){return ie(n)&&"__vccOpts"in n}const Qt=(n,e)=>rT(n,e,Bo);function sv(n,e,t){const r=arguments.length;return r===2?ke(e)&&!ee(e)?Mc(e)?ae(n,null,[e]):ae(n,e):ae(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&Mc(t)&&(t=[t]),ae(n,e,t))}const o0=Symbol(""),a0=()=>fn(o0),c0="3.2.47",u0="http://www.w3.org/2000/svg",Yr=typeof document<"u"?document:null,Kp=Yr&&Yr.createElement("template"),l0={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e?Yr.createElementNS(u0,n):Yr.createElement(n,t?{is:t}:void 0);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Yr.createTextNode(n),createComment:n=>Yr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Yr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const o=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Kp.innerHTML=r?`<svg>${n}</svg>`:n;const a=Kp.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function h0(n,e,t){const r=n._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function d0(n,e,t){const r=n.style,s=Je(t);if(t&&!s){if(e&&!Je(e))for(const i in e)t[i]==null&&gh(r,i,"");for(const i in t)gh(r,i,t[i])}else{const i=r.display;s?e!==t&&(r.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(r.display=i)}}const Gp=/\s*!important$/;function gh(n,e,t){if(ee(t))t.forEach(r=>gh(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=f0(n,e);Gp.test(t)?n.setProperty(Ni(r),t.replace(Gp,""),"important"):n[r]=t}}const Wp=["Webkit","Moz","ms"],Nl={};function f0(n,e){const t=Nl[e];if(t)return t;let r=Pn(e);if(r!=="filter"&&r in n)return Nl[e]=r;r=gu(r);for(let s=0;s<Wp.length;s++){const i=Wp[s]+r;if(i in n)return Nl[e]=i}return e}const Hp="http://www.w3.org/1999/xlink";function p0(n,e,t,r,s){if(r&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(Hp,e.slice(6,e.length)):n.setAttributeNS(Hp,e,t);else{const i=pE(e);t==null||i&&!ay(t)?n.removeAttribute(e):n.setAttribute(e,i?"":t)}}function m0(n,e,t,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const c=t??"";(n.value!==c||n.tagName==="OPTION")&&(n.value=c),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=ay(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}function Jr(n,e,t,r){n.addEventListener(e,t,r)}function g0(n,e,t,r){n.removeEventListener(e,t,r)}function y0(n,e,t,r,s=null){const i=n._vei||(n._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=v0(e);if(r){const u=i[e]=I0(r,s);Jr(n,a,u,c)}else o&&(g0(n,a,o,c),i[e]=void 0)}}const Qp=/(?:Once|Passive|Capture)$/;function v0(n){let e;if(Qp.test(n)){e={};let r;for(;r=n.match(Qp);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ni(n.slice(2)),e]}let xl=0;const w0=Promise.resolve(),_0=()=>xl||(w0.then(()=>xl=0),xl=Date.now());function I0(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;dn(b0(r,t.value),e,5,[r])};return t.value=n,t.attached=_0(),t}function b0(n,e){if(ee(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Yp=/^on[a-z]/,E0=(n,e,t,r,s=!1,i,o,a,c)=>{e==="class"?h0(n,r,s):e==="style"?d0(n,t,r):pu(e)?pd(e)||y0(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):T0(n,e,r,s))?m0(n,e,r,i,o,a,c):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),p0(n,e,r,s))};function T0(n,e,t,r){return r?!!(e==="innerHTML"||e==="textContent"||e in n&&Yp.test(e)&&ie(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Yp.test(e)&&Je(t)?!1:e in n}const Lc=n=>{const e=n.props["onUpdate:modelValue"]||!1;return ee(e)?t=>mc(e,t):e};function S0(n){n.target.composing=!0}function Jp(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const Io={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n._assign=Lc(s);const i=r||s.props&&s.props.type==="number";Jr(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),i&&(a=ih(a)),n._assign(a)}),t&&Jr(n,"change",()=>{n.value=n.value.trim()}),e||(Jr(n,"compositionstart",S0),Jr(n,"compositionend",Jp),Jr(n,"change",Jp))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:r,number:s}},i){if(n._assign=Lc(i),n.composing||document.activeElement===n&&n.type!=="range"&&(t||r&&n.value.trim()===e||(s||n.type==="number")&&ih(n.value)===e))return;const o=e??"";n.value!==o&&(n.value=o)}},ec={created(n,{value:e},t){n.checked=Dc(e,t.props.value),n._assign=Lc(t),Jr(n,"change",()=>{n._assign(A0(n))})},beforeUpdate(n,{value:e,oldValue:t},r){n._assign=Lc(r),e!==t&&(n.checked=Dc(e,r.props.value))}};function A0(n){return"_value"in n?n._value:n.value}const C0=["ctrl","shift","alt","meta"],k0={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>C0.some(t=>n[`${t}Key`]&&!e.includes(t))},iv=(n,e)=>(t,...r)=>{for(let s=0;s<e.length;s++){const i=k0[e[s]];if(i&&i(t,e))return}return n(t,...r)},R0=xt({patchProp:E0},l0);let Xp;function D0(){return Xp||(Xp=jT(R0))}const N0=(...n)=>{const e=D0().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=x0(r);if(!s)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function x0(n){return Je(n)?document.querySelector(n):n}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const Qs=typeof window<"u";function P0(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const _e=Object.assign;function Pl(n,e){const t={};for(const r in e){const s=e[r];t[r]=mn(s)?s.map(n):n(s)}return t}const bo=()=>{},mn=Array.isArray,O0=/\/$/,M0=n=>n.replace(O0,"");function Ol(n,e,t="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=n(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=V0(r??e,t),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function L0(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Zp(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function F0(n,e,t){const r=e.matched.length-1,s=t.matched.length-1;return r>-1&&r===s&&fi(e.matched[r],t.matched[s])&&ov(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function fi(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function ov(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!U0(n[t],e[t]))return!1;return!0}function U0(n,e){return mn(n)?em(n,e):mn(e)?em(e,n):n===e}function em(n,e){return mn(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function V0(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/");let s=t.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var qo;(function(n){n.pop="pop",n.push="push"})(qo||(qo={}));var Eo;(function(n){n.back="back",n.forward="forward",n.unknown=""})(Eo||(Eo={}));function $0(n){if(!n)if(Qs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),M0(n)}const B0=/^[^#]+#/;function q0(n,e){return n.replace(B0,"#")+e}function j0(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const Au=()=>({left:window.pageXOffset,top:window.pageYOffset});function z0(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=j0(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function tm(n,e){return(history.state?history.state.position-e:-1)+n}const yh=new Map;function K0(n,e){yh.set(n,e)}function G0(n){const e=yh.get(n);return yh.delete(n),e}let W0=()=>location.protocol+"//"+location.host;function av(n,e){const{pathname:t,search:r,hash:s}=e,i=n.indexOf("#");if(i>-1){let a=s.includes(n.slice(i))?n.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Zp(c,"")}return Zp(t,n)+r+s}function H0(n,e,t,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=av(n,location),g=t.value,w=e.value;let k=0;if(d){if(t.value=p,e.value=d,o&&o===g){o=null;return}k=w?d.position-w.position:0}else r(p);s.forEach(D=>{D(t.value,g,{delta:k,type:qo.pop,direction:k?k>0?Eo.forward:Eo.back:Eo.unknown})})};function c(){o=t.value}function u(d){s.push(d);const p=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return i.push(p),p}function l(){const{history:d}=window;d.state&&d.replaceState(_e({},d.state,{scroll:Au()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function nm(n,e,t,r=!1,s=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:s?Au():null}}function Q0(n){const{history:e,location:t}=window,r={value:av(n,t)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=n.indexOf("#"),d=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+c:W0()+n+c;try{e[l?"replaceState":"pushState"](u,"",d),s.value=u}catch(p){console.error(p),t[l?"replace":"assign"](d)}}function o(c,u){const l=_e({},e.state,nm(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=_e({},s.value,e.state,{forward:c,scroll:Au()});i(l.current,l,!0);const h=_e({},nm(r.value,c,null),{position:l.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function Y0(n){n=$0(n);const e=Q0(n),t=H0(n,e.state,e.location,e.replace);function r(i,o=!0){o||t.pauseListeners(),history.go(i)}const s=_e({location:"",base:n,go:r,createHref:q0.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function J0(n){return typeof n=="string"||n&&typeof n=="object"}function cv(n){return typeof n=="string"||typeof n=="symbol"}const sr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},uv=Symbol("");var rm;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(rm||(rm={}));function pi(n,e){return _e(new Error,{type:n,[uv]:!0},e)}function Un(n,e){return n instanceof Error&&uv in n&&(e==null||!!(n.type&e))}const sm="[^/]+?",X0={sensitive:!1,strict:!1,start:!0,end:!0},Z0=/[.+*?^${}()[\]/\\]/g;function eS(n,e){const t=_e({},X0,e),r=[];let s=t.start?"^":"";const i=[];for(const u of n){const l=u.length?[]:[90];t.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const d=u[h];let p=40+(t.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(Z0,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:w,optional:k,regexp:D}=d;i.push({name:g,repeatable:w,optional:k});const N=D||sm;if(N!==sm){p+=10;try{new RegExp(`(${N})`)}catch(q){throw new Error(`Invalid custom RegExp for param "${g}" (${N}): `+q.message)}}let S=w?`((?:${N})(?:/(?:${N}))*)`:`(${N})`;h||(S=k&&u.length<2?`(?:/${S})`:"/"+S),k&&(S+="?"),s+=S,p+=20,k&&(p+=-8),w&&(p+=-20),N===".*"&&(p+=-50)}l.push(p)}r.push(l)}if(t.strict&&t.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const p=l[d]||"",g=i[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function c(u){let l="",h=!1;for(const d of n){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const p of d)if(p.type===0)l+=p.value;else if(p.type===1){const{value:g,repeatable:w,optional:k}=p,D=g in u?u[g]:"";if(mn(D)&&!w)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const N=mn(D)?D.join("/"):D;if(!N)if(k)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);l+=N}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function tS(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function nS(n,e){let t=0;const r=n.score,s=e.score;for(;t<r.length&&t<s.length;){const i=tS(r[t],s[t]);if(i)return i;t++}if(Math.abs(s.length-r.length)===1){if(im(r))return 1;if(im(s))return-1}return s.length-r.length}function im(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const rS={type:0,value:""},sS=/[a-zA-Z0-9_]/;function iS(n){if(!n)return[[]];if(n==="/")return[[rS]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${u}": ${p}`)}let t=0,r=t;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(t===0?i.push({type:0,value:u}):t===1||t===2||t===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),t=1):d();break;case 4:d(),t=r;break;case 1:c==="("?t=2:sS.test(c)?d():(h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:t=3:l+=c;break;case 3:h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function oS(n,e,t){const r=eS(iS(n.path),t),s=_e(r,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function aS(n,e){const t=[],r=new Map;e=cm({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,h,d){const p=!d,g=cS(l);g.aliasOf=d&&d.record;const w=cm(e,l),k=[g];if("alias"in l){const S=typeof l.alias=="string"?[l.alias]:l.alias;for(const q of S)k.push(_e({},g,{components:d?d.record.components:g.components,path:q,aliasOf:d?d.record:g}))}let D,N;for(const S of k){const{path:q}=S;if(h&&q[0]!=="/"){const X=h.record.path,te=X[X.length-1]==="/"?"":"/";S.path=h.record.path+(q&&te+q)}if(D=oS(S,h,w),d?d.alias.push(D):(N=N||D,N!==D&&N.alias.push(D),p&&l.name&&!am(D)&&o(l.name)),g.children){const X=g.children;for(let te=0;te<X.length;te++)i(X[te],D,d&&d.children[te])}d=d||D,(D.record.components&&Object.keys(D.record.components).length||D.record.name||D.record.redirect)&&c(D)}return N?()=>{o(N)}:bo}function o(l){if(cv(l)){const h=r.get(l);h&&(r.delete(l),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(l);h>-1&&(t.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return t}function c(l){let h=0;for(;h<t.length&&nS(l,t[h])>=0&&(l.record.path!==t[h].record.path||!lv(l,t[h]));)h++;t.splice(h,0,l),l.record.name&&!am(l)&&r.set(l.record.name,l)}function u(l,h){let d,p={},g,w;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw pi(1,{location:l});w=d.record.name,p=_e(om(h.params,d.keys.filter(N=>!N.optional).map(N=>N.name)),l.params&&om(l.params,d.keys.map(N=>N.name))),g=d.stringify(p)}else if("path"in l)g=l.path,d=t.find(N=>N.re.test(g)),d&&(p=d.parse(g),w=d.record.name);else{if(d=h.name?r.get(h.name):t.find(N=>N.re.test(h.path)),!d)throw pi(1,{location:l,currentLocation:h});w=d.record.name,p=_e({},h.params,l.params),g=d.stringify(p)}const k=[];let D=d;for(;D;)k.unshift(D.record),D=D.parent;return{name:w,path:g,params:p,matched:k,meta:lS(k)}}return n.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function om(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function cS(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:uS(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function uS(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="boolean"?t:t[r];return e}function am(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function lS(n){return n.reduce((e,t)=>_e(e,t.meta),{})}function cm(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function lv(n,e){return e.children.some(t=>t===n||lv(n,t))}const hv=/#/g,hS=/&/g,dS=/\//g,fS=/=/g,pS=/\?/g,dv=/\+/g,mS=/%5B/g,gS=/%5D/g,fv=/%5E/g,yS=/%60/g,pv=/%7B/g,vS=/%7C/g,mv=/%7D/g,wS=/%20/g;function Rd(n){return encodeURI(""+n).replace(vS,"|").replace(mS,"[").replace(gS,"]")}function _S(n){return Rd(n).replace(pv,"{").replace(mv,"}").replace(fv,"^")}function vh(n){return Rd(n).replace(dv,"%2B").replace(wS,"+").replace(hv,"%23").replace(hS,"%26").replace(yS,"`").replace(pv,"{").replace(mv,"}").replace(fv,"^")}function IS(n){return vh(n).replace(fS,"%3D")}function bS(n){return Rd(n).replace(hv,"%23").replace(pS,"%3F")}function ES(n){return n==null?"":bS(n).replace(dS,"%2F")}function Fc(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function TS(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(dv," "),o=i.indexOf("="),a=Fc(o<0?i:i.slice(0,o)),c=o<0?null:Fc(i.slice(o+1));if(a in e){let u=e[a];mn(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function um(n){let e="";for(let t in n){const r=n[t];if(t=IS(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(mn(r)?r.map(i=>i&&vh(i)):[r&&vh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function SS(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=mn(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const AS=Symbol(""),lm=Symbol(""),Cu=Symbol(""),Dd=Symbol(""),wh=Symbol("");function Zi(){let n=[];function e(r){return n.push(r),()=>{const s=n.indexOf(r);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function lr(n,e,t,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(pi(4,{from:t,to:e})):h instanceof Error?a(h):J0(h)?a(pi(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=n.call(r&&r.instances[s],e,t,c);let l=Promise.resolve(u);n.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Ml(n,e,t,r){const s=[];for(const i of n)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(CS(a)){const u=(a.__vccOpts||a)[e];u&&s.push(lr(u,t,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=P0(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&lr(d,t,r,i,o)()}))}}return s}function CS(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function hm(n){const e=fn(Cu),t=fn(Dd),r=Qt(()=>e.resolve(J(n.to))),s=Qt(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=t.matched;if(!l||!h.length)return-1;const d=h.findIndex(fi.bind(null,l));if(d>-1)return d;const p=dm(c[u-2]);return u>1&&dm(l)===p&&h[h.length-1].path!==p?h.findIndex(fi.bind(null,c[u-2])):d}),i=Qt(()=>s.value>-1&&NS(t.params,r.value.params)),o=Qt(()=>s.value>-1&&s.value===t.matched.length-1&&ov(t.params,r.value.params));function a(c={}){return DS(c)?e[J(n.replace)?"replace":"push"](J(n.to)).catch(bo):Promise.resolve()}return{route:r,href:Qt(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const kS=Xt({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:hm,setup(n,{slots:e}){const t=Ns(hm(n)),{options:r}=fn(Cu),s=Qt(()=>({[fm(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[fm(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&e.default(t);return n.custom?i:sv("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},i)}}}),RS=kS;function DS(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function NS(n,e){for(const t in e){const r=e[t],s=n[t];if(typeof r=="string"){if(r!==s)return!1}else if(!mn(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function dm(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const fm=(n,e,t)=>n??e??t,xS=Xt({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=fn(wh),s=Qt(()=>n.route||r.value),i=fn(lm,0),o=Qt(()=>{let u=J(i);const{matched:l}=s.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=Qt(()=>s.value.matched[o.value]);gc(lm,Qt(()=>o.value+1)),gc(AS,a),gc(wh,s);const c=wt();return hs(()=>[c.value,a.value,n.name],([u,l,h],[d,p,g])=>{l&&(l.instances[h]=u,p&&p!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),u&&l&&(!p||!fi(l,p)||!d)&&(l.enterCallbacks[h]||[]).forEach(w=>w(u))},{flush:"post"}),()=>{const u=s.value,l=n.name,h=a.value,d=h&&h.components[l];if(!d)return pm(t.default,{Component:d,route:u});const p=h.props[l],g=p?p===!0?u.params:typeof p=="function"?p(u):p:null,k=sv(d,_e({},g,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return pm(t.default,{Component:k,route:u})||k}}});function pm(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const gv=xS;function PS(n){const e=aS(n.routes,n),t=n.parseQuery||TS,r=n.stringifyQuery||um,s=n.history,i=Zi(),o=Zi(),a=Zi(),c=ZE(sr);let u=sr;Qs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=Pl.bind(null,b=>""+b),h=Pl.bind(null,ES),d=Pl.bind(null,Fc);function p(b,B){let U,H;return cv(b)?(U=e.getRecordMatcher(b),H=B):H=b,e.addRoute(H,U)}function g(b){const B=e.getRecordMatcher(b);B&&e.removeRoute(B)}function w(){return e.getRoutes().map(b=>b.record)}function k(b){return!!e.getRecordMatcher(b)}function D(b,B){if(B=_e({},B||c.value),typeof b=="string"){const f=Ol(t,b,B.path),m=e.resolve({path:f.path},B),_=s.createHref(f.fullPath);return _e(f,m,{params:d(m.params),hash:Fc(f.hash),redirectedFrom:void 0,href:_})}let U;if("path"in b)U=_e({},b,{path:Ol(t,b.path,B.path).path});else{const f=_e({},b.params);for(const m in f)f[m]==null&&delete f[m];U=_e({},b,{params:h(b.params)}),B.params=h(B.params)}const H=e.resolve(U,B),fe=b.hash||"";H.params=l(d(H.params));const Le=L0(r,_e({},b,{hash:_S(fe),path:H.path})),oe=s.createHref(Le);return _e({fullPath:Le,hash:fe,query:r===um?SS(b.query):b.query||{}},H,{redirectedFrom:void 0,href:oe})}function N(b){return typeof b=="string"?Ol(t,b,c.value.path):_e({},b)}function S(b,B){if(u!==b)return pi(8,{from:B,to:b})}function q(b){return ye(b)}function X(b){return q(_e(N(b),{replace:!0}))}function te(b){const B=b.matched[b.matched.length-1];if(B&&B.redirect){const{redirect:U}=B;let H=typeof U=="function"?U(b):U;return typeof H=="string"&&(H=H.includes("?")||H.includes("#")?H=N(H):{path:H},H.params={}),_e({query:b.query,hash:b.hash,params:"path"in H?{}:b.params},H)}}function ye(b,B){const U=u=D(b),H=c.value,fe=b.state,Le=b.force,oe=b.replace===!0,f=te(U);if(f)return ye(_e(N(f),{state:typeof f=="object"?_e({},fe,f.state):fe,force:Le,replace:oe}),B||U);const m=U;m.redirectedFrom=B;let _;return!Le&&F0(r,H,U)&&(_=pi(16,{to:m,from:H}),qr(H,H,!0,!1)),(_?Promise.resolve(_):Pt(m,H)).catch(I=>Un(I)?Un(I,2)?I:nn(I):Ae(I,m,H)).then(I=>{if(I){if(Un(I,2))return ye(_e({replace:oe},N(I.to),{state:typeof I.to=="object"?_e({},fe,I.to.state):fe,force:Le}),B||m)}else I=en(m,H,!0,oe,fe);return yt(m,H,I),I})}function xe(b,B){const U=S(b,B);return U?Promise.reject(U):Promise.resolve()}function Pt(b,B){let U;const[H,fe,Le]=OS(b,B);U=Ml(H.reverse(),"beforeRouteLeave",b,B);for(const f of H)f.leaveGuards.forEach(m=>{U.push(lr(m,b,B))});const oe=xe.bind(null,b,B);return U.push(oe),Ks(U).then(()=>{U=[];for(const f of i.list())U.push(lr(f,b,B));return U.push(oe),Ks(U)}).then(()=>{U=Ml(fe,"beforeRouteUpdate",b,B);for(const f of fe)f.updateGuards.forEach(m=>{U.push(lr(m,b,B))});return U.push(oe),Ks(U)}).then(()=>{U=[];for(const f of b.matched)if(f.beforeEnter&&!B.matched.includes(f))if(mn(f.beforeEnter))for(const m of f.beforeEnter)U.push(lr(m,b,B));else U.push(lr(f.beforeEnter,b,B));return U.push(oe),Ks(U)}).then(()=>(b.matched.forEach(f=>f.enterCallbacks={}),U=Ml(Le,"beforeRouteEnter",b,B),U.push(oe),Ks(U))).then(()=>{U=[];for(const f of o.list())U.push(lr(f,b,B));return U.push(oe),Ks(U)}).catch(f=>Un(f,8)?f:Promise.reject(f))}function yt(b,B,U){for(const H of a.list())H(b,B,U)}function en(b,B,U,H,fe){const Le=S(b,B);if(Le)return Le;const oe=B===sr,f=Qs?history.state:{};U&&(H||oe?s.replace(b.fullPath,_e({scroll:oe&&f&&f.scroll},fe)):s.push(b.fullPath,fe)),c.value=b,qr(b,B,U,oe),nn()}let ce;function tn(){ce||(ce=s.listen((b,B,U)=>{if(!Ga.listening)return;const H=D(b),fe=te(H);if(fe){ye(_e(fe,{replace:!0}),H).catch(bo);return}u=H;const Le=c.value;Qs&&K0(tm(Le.fullPath,U.delta),Au()),Pt(H,Le).catch(oe=>Un(oe,12)?oe:Un(oe,2)?(ye(oe.to,H).then(f=>{Un(f,20)&&!U.delta&&U.type===qo.pop&&s.go(-1,!1)}).catch(bo),Promise.reject()):(U.delta&&s.go(-U.delta,!1),Ae(oe,H,Le))).then(oe=>{oe=oe||en(H,Le,!1),oe&&(U.delta&&!Un(oe,8)?s.go(-U.delta,!1):U.type===qo.pop&&Un(oe,20)&&s.go(-1,!1)),yt(H,Le,oe)}).catch(bo)}))}let yn=Zi(),Yi=Zi(),Ke;function Ae(b,B,U){nn(b);const H=Yi.list();return H.length?H.forEach(fe=>fe(b,B,U)):console.error(b),Promise.reject(b)}function Ee(){return Ke&&c.value!==sr?Promise.resolve():new Promise((b,B)=>{yn.add([b,B])})}function nn(b){return Ke||(Ke=!b,tn(),yn.list().forEach(([B,U])=>b?U(b):B()),yn.reset()),b}function qr(b,B,U,H){const{scrollBehavior:fe}=n;if(!Qs||!fe)return Promise.resolve();const Le=!U&&G0(tm(b.fullPath,0))||(H||!U)&&history.state&&history.state.scroll||null;return xy().then(()=>fe(b,B,Le)).then(oe=>oe&&z0(oe)).catch(oe=>Ae(oe,b,B))}const rn=b=>s.go(b);let Ot;const js=new Set,Ga={currentRoute:c,listening:!0,addRoute:p,removeRoute:g,hasRoute:k,getRoutes:w,resolve:D,options:n,push:q,replace:X,go:rn,back:()=>rn(-1),forward:()=>rn(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Yi.add,isReady:Ee,install(b){const B=this;b.component("RouterLink",RS),b.component("RouterView",gv),b.config.globalProperties.$router=B,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>J(c)}),Qs&&!Ot&&c.value===sr&&(Ot=!0,q(s.location).catch(fe=>{}));const U={};for(const fe in sr)U[fe]=Qt(()=>c.value[fe]);b.provide(Cu,B),b.provide(Dd,Ns(U)),b.provide(wh,c);const H=b.unmount;js.add(b),b.unmount=function(){js.delete(b),js.size<1&&(u=sr,ce&&ce(),ce=null,c.value=sr,Ot=!1,Ke=!1),H()}}};return Ga}function Ks(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function OS(n,e){const t=[],r=[],s=[],i=Math.max(e.matched.length,n.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(n.matched.find(u=>fi(u,a))?r.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(u=>fi(u,c))||s.push(c))}return[t,r,s]}function Oi(){return fn(Cu)}function MS(){return fn(Dd)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yv=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},LS=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},vv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),r.push(t[l],t[h],t[d],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(yv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):LS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new FS;const d=i<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class FS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const US=function(n){const e=yv(n);return vv.encodeByteArray(e,!0)},Uc=function(n){return US(n).replace(/\./g,"")},wv=function(n){try{return vv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Vc(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!VS(t)||(n[t]=Vc(n[t],e[t]));return n}function VS(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $S(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BS=()=>$S().__FIREBASE_DEFAULTS__,qS=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},jS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&wv(n[1]);return e&&JSON.parse(e)},ku=()=>{try{return BS()||qS()||jS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},_v=n=>{var e,t;return(t=(e=ku())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},zS=n=>{const e=_v(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},KS=()=>{var n;return(n=ku())===null||n===void 0?void 0:n.config},Iv=n=>{var e;return(e=ku())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function WS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Uc(JSON.stringify(t)),Uc(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Fe())}function Nd(){var n;const e=(n=ku())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function QS(){return typeof self=="object"&&self.self===self}function bv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function xd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Ev(){const n=Fe();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function YS(){return!Nd()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function jo(){try{return typeof indexedDB=="object"}catch{return!1}}function JS(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XS="FirebaseError";class Dt extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=XS,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Os.prototype.create)}}class Os{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?ZS(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Dt(s,a,r)}}function ZS(n,e){return n.replace(eA,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const eA=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mm(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function tA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function $c(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(gm(i)&&gm(o)){if(!$c(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function gm(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mi(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Zs(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function ho(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Tv(n,e){const t=new nA(n,e);return t.subscribe.bind(t)}class nA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");rA(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Ll),s.error===void 0&&(s.error=Ll),s.complete===void 0&&(s.complete=Ll);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function rA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Ll(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(n){return n&&n._delegate?n._delegate:n}class On{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new GS;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(oA(e))try{this.getOrInitializeService({instanceIdentifier:Wr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=Wr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wr){return this.instances.has(e)}getOptions(e=Wr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:iA(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Wr){return this.component?this.component.multipleInstances?e:Wr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function iA(n){return n===Wr?void 0:n}function oA(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new sA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pd=[];var me;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(me||(me={}));const Sv={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},cA=me.INFO,uA={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},lA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=uA[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ru{constructor(e){this.name=e,this._logLevel=cA,this._logHandler=lA,this._userLogHandler=null,Pd.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Sv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}function hA(n){Pd.forEach(e=>{e.setLogLevel(n)})}function dA(n,e){for(const t of Pd){let r=null;e&&e.level&&(r=Sv[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(s,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(r??s.logLevel)&&n({level:me[i].toLowerCase(),message:a,args:o,type:s.name})}}}const fA=(n,e)=>e.some(t=>n instanceof t);let ym,vm;function pA(){return ym||(ym=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function mA(){return vm||(vm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Av=new WeakMap,_h=new WeakMap,Cv=new WeakMap,Fl=new WeakMap,Od=new WeakMap;function gA(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(vr(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Av.set(t,n)}).catch(()=>{}),Od.set(e,n),e}function yA(n){if(_h.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});_h.set(n,e)}let Ih={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return _h.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Cv.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return vr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function vA(n){Ih=n(Ih)}function wA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Ul(this),e,...t);return Cv.set(r,e.sort?e.sort():[e]),vr(r)}:mA().includes(n)?function(...e){return n.apply(Ul(this),e),vr(Av.get(this))}:function(...e){return vr(n.apply(Ul(this),e))}}function _A(n){return typeof n=="function"?wA(n):(n instanceof IDBTransaction&&yA(n),fA(n,pA())?new Proxy(n,Ih):n)}function vr(n){if(n instanceof IDBRequest)return gA(n);if(Fl.has(n))return Fl.get(n);const e=_A(n);return e!==n&&(Fl.set(n,e),Od.set(e,n)),e}const Ul=n=>Od.get(n);function IA(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=vr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(vr(o.result),c.oldVersion,c.newVersion,vr(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const bA=["get","getKey","getAll","getAllKeys","count"],EA=["put","add","delete","clear"],Vl=new Map;function wm(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Vl.get(e))return Vl.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=EA.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||bA.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&c.done]))[0]};return Vl.set(e,i),i}vA(n=>({...n,get:(e,t,r)=>wm(e,t)||n.get(e,t,r),has:(e,t)=>!!wm(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(SA(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function SA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const bh="@firebase/app",_m="0.9.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vs=new Ru("@firebase/app"),AA="@firebase/app-compat",CA="@firebase/analytics-compat",kA="@firebase/analytics",RA="@firebase/app-check-compat",DA="@firebase/app-check",NA="@firebase/auth",xA="@firebase/auth-compat",PA="@firebase/database",OA="@firebase/database-compat",MA="@firebase/functions",LA="@firebase/functions-compat",FA="@firebase/installations",UA="@firebase/installations-compat",VA="@firebase/messaging",$A="@firebase/messaging-compat",BA="@firebase/performance",qA="@firebase/performance-compat",jA="@firebase/remote-config",zA="@firebase/remote-config-compat",KA="@firebase/storage",GA="@firebase/storage-compat",WA="@firebase/firestore",HA="@firebase/firestore-compat",QA="firebase",YA="9.19.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="[DEFAULT]",JA={[bh]:"fire-core",[AA]:"fire-core-compat",[kA]:"fire-analytics",[CA]:"fire-analytics-compat",[DA]:"fire-app-check",[RA]:"fire-app-check-compat",[NA]:"fire-auth",[xA]:"fire-auth-compat",[PA]:"fire-rtdb",[OA]:"fire-rtdb-compat",[MA]:"fire-fn",[LA]:"fire-fn-compat",[FA]:"fire-iid",[UA]:"fire-iid-compat",[VA]:"fire-fcm",[$A]:"fire-fcm-compat",[BA]:"fire-perf",[qA]:"fire-perf-compat",[jA]:"fire-rc",[zA]:"fire-rc-compat",[KA]:"fire-gcs",[GA]:"fire-gcs-compat",[WA]:"fire-fst",[HA]:"fire-fst-compat","fire-js":"fire-js",[QA]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new Map,zo=new Map;function Bc(n,e){try{n.container.addComponent(e)}catch(t){vs.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function kv(n,e){n.container.addOrOverwriteComponent(e)}function Sr(n){const e=n.name;if(zo.has(e))return vs.debug(`There were multiple attempts to register component ${e}.`),!1;zo.set(e,n);for(const t of Tr.values())Bc(t,n);return!0}function ga(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function XA(n,e,t=Er){ga(n,e).clearInstance(t)}function ZA(){zo.clear()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const eC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},zn=new Os("app","Firebase",eC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tC=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new On("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw zn.create("app-deleted",{appName:this._name})}};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ms=YA;function Du(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Er,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw zn.create("bad-app-name",{appName:String(s)});if(t||(t=KS()),!t)throw zn.create("no-options");const i=Tr.get(s);if(i){if($c(t,i.options)&&$c(r,i.config))return i;throw zn.create("duplicate-app",{appName:s})}const o=new aA(s);for(const c of zo.values())o.addComponent(c);const a=new tC(t,r,o);return Tr.set(s,a),a}function Md(n=Er){const e=Tr.get(n);if(!e&&n===Er)return Du();if(!e)throw zn.create("no-app",{appName:n});return e}function nC(){return Array.from(Tr.values())}async function Rv(n){const e=n.name;Tr.has(e)&&(Tr.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function pn(n,e,t){var r;let s=(r=JA[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),vs.warn(a.join(" "));return}Sr(new On(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function Dv(n,e){if(n!==null&&typeof n!="function")throw zn.create("invalid-log-argument");dA(n,e)}function Nv(n){hA(n)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rC="firebase-heartbeat-database",sC=1,Ko="firebase-heartbeat-store";let $l=null;function xv(){return $l||($l=IA(rC,sC,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Ko)}}}).catch(n=>{throw zn.create("idb-open",{originalErrorMessage:n.message})})),$l}async function iC(n){try{return(await xv()).transaction(Ko).objectStore(Ko).get(Pv(n))}catch(e){if(e instanceof Dt)vs.warn(e.message);else{const t=zn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});vs.warn(t.message)}}}async function Im(n,e){try{const r=(await xv()).transaction(Ko,"readwrite");return await r.objectStore(Ko).put(e,Pv(n)),r.done}catch(t){if(t instanceof Dt)vs.warn(t.message);else{const r=zn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});vs.warn(r.message)}}}function Pv(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oC=1024,aC=30*24*60*60*1e3;class cC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new lC(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=bm();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=aC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=bm(),{heartbeatsToSend:t,unsentEntries:r}=uC(this._heartbeatsCache.heartbeats),s=Uc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function bm(){return new Date().toISOString().substring(0,10)}function uC(n,e=oC){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),Em(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Em(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class lC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return jo()?JS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await iC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Im(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Im(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Em(n){return Uc(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hC(n){Sr(new On("platform-logger",e=>new TA(e),"PRIVATE")),Sr(new On("heartbeat",e=>new cC(e),"PRIVATE")),pn(bh,_m,n),pn(bh,_m,"esm2017"),pn("fire-js","")}hC("");const dC=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:Dt,SDK_VERSION:Ms,_DEFAULT_ENTRY_NAME:Er,_addComponent:Bc,_addOrOverwriteComponent:kv,_apps:Tr,_clearComponents:ZA,_components:zo,_getProvider:ga,_registerComponent:Sr,_removeServiceInstance:XA,deleteApp:Rv,getApp:Md,getApps:nC,initializeApp:Du,onLog:Dv,registerVersion:pn,setLogLevel:Nv},Symbol.toStringTag,{value:"Module"}));/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fC{constructor(e,t){this._delegate=e,this.firebase=t,Bc(e,new On("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),Rv(this._delegate)))}_getService(e,t=Er){var r;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((r=s.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=Er){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Bc(this._delegate,e)}_addOrOverwriteComponent(e){kv(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},Tm=new Os("app-compat","Firebase",pC);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mC(n){const e={},t={__esModule:!0,initializeApp:i,app:s,registerVersion:pn,setLogLevel:Nv,onLog:Dv,apps:null,SDK_VERSION:Ms,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:dC}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function s(u){if(u=u||Er,!mm(e,u))throw Tm.create("no-app",{appName:u});return e[u]}s.App=n;function i(u,l={}){const h=Du(u,l);if(mm(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Sr(u)&&u.type==="PUBLIC"){const d=(p=s())=>{if(typeof p[h]!="function")throw Tm.create("invalid-app-argument",{appName:l});return p[h]()};u.serviceProps!==void 0&&Vc(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...p){return this._getService.bind(this,l).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ov(){const n=mC(fC);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Ov,extendNamespace:e,createSubscribe:Tv,ErrorFactory:Os,deepExtend:Vc});function e(t){Vc(n,t)}return n}const gC=Ov();/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sm=new Ru("@firebase/app-compat"),yC="@firebase/app-compat",vC="0.2.7";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wC(n){pn(yC,vC,n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if(QS()&&self.firebase!==void 0){Sm.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&Sm.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ya=gC;wC();var _C="firebase",IC="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */ya.registerVersion(_C,IC,"app-compat");var bC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},z,Ld=Ld||{},Z=bC||self;function qc(){}function Nu(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function va(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function EC(n){return Object.prototype.hasOwnProperty.call(n,Bl)&&n[Bl]||(n[Bl]=++TC)}var Bl="closure_uid_"+(1e9*Math.random()>>>0),TC=0;function SC(n,e,t){return n.call.apply(n.bind,arguments)}function AC(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function Et(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Et=SC:Et=AC,Et.apply(null,arguments)}function tc(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function gt(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Mr(){this.s=this.s,this.o=this.o}var CC=0;Mr.prototype.s=!1;Mr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),CC!=0)&&EC(this)};Mr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Mv=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Fd(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Am(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(Nu(r)){const s=n.length||0,i=r.length||0;n.length=s+i;for(let o=0;o<i;o++)n[s+o]=r[o]}else n.push(r)}}function Tt(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}Tt.prototype.h=function(){this.defaultPrevented=!0};var kC=function(){if(!Z.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{Z.addEventListener("test",qc,e),Z.removeEventListener("test",qc,e)}catch{}return n}();function jc(n){return/^[\s\xa0]*$/.test(n)}var Cm=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function ql(n,e){return n<e?-1:n>e?1:0}function xu(){var n=Z.navigator;return n&&(n=n.userAgent)?n:""}function En(n){return xu().indexOf(n)!=-1}function Ud(n){return Ud[" "](n),n}Ud[" "]=qc;function RC(n){var e=xC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var DC=En("Opera"),mi=En("Trident")||En("MSIE"),Lv=En("Edge"),Eh=Lv||mi,Fv=En("Gecko")&&!(xu().toLowerCase().indexOf("webkit")!=-1&&!En("Edge"))&&!(En("Trident")||En("MSIE"))&&!En("Edge"),NC=xu().toLowerCase().indexOf("webkit")!=-1&&!En("Edge");function Uv(){var n=Z.document;return n?n.documentMode:void 0}var zc;e:{var jl="",zl=function(){var n=xu();if(Fv)return/rv:([^\);]+)(\)|;)/.exec(n);if(Lv)return/Edge\/([\d\.]+)/.exec(n);if(mi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(NC)return/WebKit\/(\S+)/.exec(n);if(DC)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(zl&&(jl=zl?zl[1]:""),mi){var Kl=Uv();if(Kl!=null&&Kl>parseFloat(jl)){zc=String(Kl);break e}}zc=jl}var xC={};function PC(){return RC(function(){let n=0;const e=Cm(String(zc)).split("."),t=Cm("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var s=e[o]||"",i=t[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;n=ql(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||ql(s[2].length==0,i[2].length==0)||ql(s[2],i[2]),s=s[3],i=i[3]}while(n==0)}return 0<=n})}var Th;if(Z.document&&mi){var km=Uv();Th=km||parseInt(zc,10)||void 0}else Th=void 0;var OC=Th;function Go(n,e){if(Tt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Fv){e:{try{Ud(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:MC[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Go.X.h.call(this)}}gt(Go,Tt);var MC={2:"touch",3:"pen",4:"mouse"};Go.prototype.h=function(){Go.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var wa="closure_listenable_"+(1e6*Math.random()|0),LC=0;function FC(n,e,t,r,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.ha=s,this.key=++LC,this.ba=this.ea=!1}function Pu(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function Vd(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function Vv(n){const e={};for(const t in n)e[t]=n[t];return e}const Rm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function $v(n,e){let t,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(t in r)n[t]=r[t];for(let i=0;i<Rm.length;i++)t=Rm[i],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function Ou(n){this.src=n,this.g={},this.h=0}Ou.prototype.add=function(n,e,t,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=Ah(n,e,r,s);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new FC(e,this.src,i,!!r,s),e.ea=t,n.push(e)),e};function Sh(n,e){var t=e.type;if(t in n.g){var r=n.g[t],s=Mv(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(Pu(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function Ah(n,e,t,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.ba&&i.listener==e&&i.capture==!!t&&i.ha==r)return s}return-1}var $d="closure_lm_"+(1e6*Math.random()|0),Gl={};function Bv(n,e,t,r,s){if(r&&r.once)return jv(n,e,t,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Bv(n,e[i],t,r,s);return null}return t=jd(t),n&&n[wa]?n.N(e,t,va(r)?!!r.capture:!!r,s):qv(n,e,t,!1,r,s)}function qv(n,e,t,r,s,i){if(!e)throw Error("Invalid event type");var o=va(s)?!!s.capture:!!s,a=qd(n);if(a||(n[$d]=a=new Ou(n)),t=a.add(e,t,r,o,i),t.proxy)return t;if(r=UC(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)kC||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),r,s);else if(n.attachEvent)n.attachEvent(Kv(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function UC(){function n(t){return e.call(n.src,n.listener,t)}const e=VC;return n}function jv(n,e,t,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)jv(n,e[i],t,r,s);return null}return t=jd(t),n&&n[wa]?n.O(e,t,va(r)?!!r.capture:!!r,s):qv(n,e,t,!0,r,s)}function zv(n,e,t,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)zv(n,e[i],t,r,s);else r=va(r)?!!r.capture:!!r,t=jd(t),n&&n[wa]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=Ah(i,t,r,s),-1<t&&(Pu(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=qd(n))&&(e=n.g[e.toString()],n=-1,e&&(n=Ah(e,t,r,s)),(t=-1<n?e[n]:null)&&Bd(t))}function Bd(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[wa])Sh(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(Kv(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=qd(e))?(Sh(t,n),t.h==0&&(t.src=null,e[$d]=null)):Pu(n)}}}function Kv(n){return n in Gl?Gl[n]:Gl[n]="on"+n}function VC(n,e){if(n.ba)n=!0;else{e=new Go(e,this);var t=n.listener,r=n.ha||n.src;n.ea&&Bd(n),n=t.call(r,e)}return n}function qd(n){return n=n[$d],n instanceof Ou?n:null}var Wl="__closure_events_fn_"+(1e9*Math.random()>>>0);function jd(n){return typeof n=="function"?n:(n[Wl]||(n[Wl]=function(e){return n.handleEvent(e)}),n[Wl])}function it(){Mr.call(this),this.i=new Ou(this),this.P=this,this.I=null}gt(it,Mr);it.prototype[wa]=!0;it.prototype.removeEventListener=function(n,e,t,r){zv(this,n,e,t,r)};function ft(n,e){var t,r=n.I;if(r)for(t=[];r;r=r.I)t.push(r);if(n=n.P,r=e.type||e,typeof e=="string")e=new Tt(e,n);else if(e instanceof Tt)e.target=e.target||n;else{var s=e;e=new Tt(r,n),$v(e,s)}if(s=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];s=nc(o,r,!0,e)&&s}if(o=e.g=n,s=nc(o,r,!0,e)&&s,s=nc(o,r,!1,e)&&s,t)for(i=0;i<t.length;i++)o=e.g=t[i],s=nc(o,r,!1,e)&&s}it.prototype.M=function(){if(it.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)Pu(t[r]);delete n.g[e],n.h--}}this.I=null};it.prototype.N=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};it.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function nc(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&Sh(n.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var zd=Z.JSON.stringify;function $C(){var n=Hv;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class BC{constructor(){this.h=this.g=null}add(e,t){const r=Gv.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Gv=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new qC,n=>n.reset());class qC{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function jC(n){Z.setTimeout(()=>{throw n},0)}function Wv(n,e){Ch||zC(),kh||(Ch(),kh=!0),Hv.add(n,e)}var Ch;function zC(){var n=Z.Promise.resolve(void 0);Ch=function(){n.then(KC)}}var kh=!1,Hv=new BC;function KC(){for(var n;n=$C();){try{n.h.call(n.g)}catch(t){jC(t)}var e=Gv;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}kh=!1}function Mu(n,e){it.call(this),this.h=n||1,this.g=e||Z,this.j=Et(this.lb,this),this.l=Date.now()}gt(Mu,it);z=Mu.prototype;z.ca=!1;z.R=null;z.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),ft(this,"tick"),this.ca&&(Kd(this),this.start()))}};z.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Kd(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}z.M=function(){Mu.X.M.call(this),Kd(this),delete this.g};function Gd(n,e,t){if(typeof n=="function")t&&(n=Et(n,t));else if(n&&typeof n.handleEvent=="function")n=Et(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:Z.setTimeout(n,e||0)}function Qv(n){n.g=Gd(()=>{n.g=null,n.i&&(n.i=!1,Qv(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class GC extends Mr{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Qv(this)}M(){super.M(),this.g&&(Z.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Wo(n){Mr.call(this),this.h=n,this.g={}}gt(Wo,Mr);var Dm=[];function Yv(n,e,t,r){Array.isArray(t)||(t&&(Dm[0]=t.toString()),t=Dm);for(var s=0;s<t.length;s++){var i=Bv(e,t[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function Jv(n){Vd(n.g,function(e,t){this.g.hasOwnProperty(t)&&Bd(e)},n),n.g={}}Wo.prototype.M=function(){Wo.X.M.call(this),Jv(this)};Wo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Lu(){this.g=!0}Lu.prototype.Aa=function(){this.g=!1};function WC(n,e,t,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function HC(n,e,t,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+t+`
`+i+" "+o})}function ei(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+YC(n,t)+(r?" "+r:"")})}function QC(n,e){n.info(function(){return"TIMEOUT: "+e})}Lu.prototype.info=function(){};function YC(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return zd(t)}catch{return e}}var Ls={},Nm=null;function Fu(){return Nm=Nm||new it}Ls.Pa="serverreachability";function Xv(n){Tt.call(this,Ls.Pa,n)}gt(Xv,Tt);function Ho(n){const e=Fu();ft(e,new Xv(e))}Ls.STAT_EVENT="statevent";function Zv(n,e){Tt.call(this,Ls.STAT_EVENT,n),this.stat=e}gt(Zv,Tt);function Rt(n){const e=Fu();ft(e,new Zv(e,n))}Ls.Qa="timingevent";function ew(n,e){Tt.call(this,Ls.Qa,n),this.size=e}gt(ew,Tt);function _a(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return Z.setTimeout(function(){n()},e)}var Uu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},tw={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Wd(){}Wd.prototype.h=null;function xm(n){return n.h||(n.h=n.i())}function nw(){}var Ia={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Hd(){Tt.call(this,"d")}gt(Hd,Tt);function Qd(){Tt.call(this,"c")}gt(Qd,Tt);var Rh;function Vu(){}gt(Vu,Wd);Vu.prototype.g=function(){return new XMLHttpRequest};Vu.prototype.i=function(){return{}};Rh=new Vu;function ba(n,e,t,r){this.l=n,this.j=e,this.m=t,this.U=r||1,this.S=new Wo(this),this.O=JC,n=Eh?125:void 0,this.T=new Mu(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new rw}function rw(){this.i=null,this.g="",this.h=!1}var JC=45e3,Dh={},Kc={};z=ba.prototype;z.setTimeout=function(n){this.O=n};function Nh(n,e,t){n.K=1,n.v=Bu(Wn(e)),n.s=t,n.P=!0,sw(n,null)}function sw(n,e){n.F=Date.now(),Ea(n),n.A=Wn(n.v);var t=n.A,r=n.U;Array.isArray(r)||(r=[String(r)]),dw(t.i,"t",r),n.C=0,t=n.l.H,n.h=new rw,n.g=Pw(n.l,t?e:null,!n.s),0<n.N&&(n.L=new GC(Et(n.La,n,n.g),n.N)),Yv(n.S,n.g,"readystatechange",n.ib),e=n.H?Vv(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),Ho(),WC(n.j,n.u,n.A,n.m,n.U,n.s)}z.ib=function(n){n=n.target;const e=this.L;e&&Bn(n)==3?e.l():this.La(n)};z.La=function(n){try{if(n==this.g)e:{const l=Bn(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||Eh||this.g&&(this.h.h||this.g.fa()||Lm(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Ho(3):Ho(2)),$u(this);var t=this.g.aa();this.Y=t;t:if(iw(this)){var r=Lm(this.g);n="";var s=r.length,i=Bn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ss(this),To(this);var o="";break t}this.h.i=new Z.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,HC(this.j,this.u,this.A,this.m,this.U,l,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!jc(a)){var u=a;break t}}u=null}if(t=u)ei(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,xh(this,t);else{this.i=!1,this.o=3,Rt(12),ss(this),To(this);break e}}this.P?(ow(this,l,o),Eh&&this.i&&l==3&&(Yv(this.S,this.T,"tick",this.hb),this.T.start())):(ei(this.j,this.m,o,null),xh(this,o)),l==4&&ss(this),this.i&&!this.I&&(l==4?Rw(this.l,this):(this.i=!1,Ea(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,Rt(12)):(this.o=0,Rt(13)),ss(this),To(this)}}}catch{}finally{}};function iw(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function ow(n,e,t){let r=!0,s;for(;!n.I&&n.C<t.length;)if(s=XC(n,t),s==Kc){e==4&&(n.o=4,Rt(14),r=!1),ei(n.j,n.m,null,"[Incomplete Response]");break}else if(s==Dh){n.o=4,Rt(15),ei(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else ei(n.j,n.m,s,null),xh(n,s);iw(n)&&s!=Kc&&s!=Dh&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,Rt(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),nf(e),e.K=!0,Rt(11))):(ei(n.j,n.m,t,"[Invalid Chunked Response]"),ss(n),To(n))}z.hb=function(){if(this.g){var n=Bn(this.g),e=this.g.fa();this.C<e.length&&($u(this),ow(this,n,e),this.i&&n!=4&&Ea(this))}};function XC(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Kc:(t=Number(e.substring(t,r)),isNaN(t)?Dh:(r+=1,r+t>e.length?Kc:(e=e.substr(r,t),n.C=r+t,e)))}z.cancel=function(){this.I=!0,ss(this)};function Ea(n){n.V=Date.now()+n.O,aw(n,n.O)}function aw(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=_a(Et(n.gb,n),e)}function $u(n){n.B&&(Z.clearTimeout(n.B),n.B=null)}z.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(QC(this.j,this.A),this.K!=2&&(Ho(),Rt(17)),ss(this),this.o=2,To(this)):aw(this,this.V-n)};function To(n){n.l.G==0||n.I||Rw(n.l,n)}function ss(n){$u(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Kd(n.T),Jv(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function xh(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Ph(t.h,n))){if(!n.J&&Ph(t.h,n)&&t.G==3){try{var r=t.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Hc(t),zu(t);else break e;tf(t),Rt(18)}}else t.Ba=s[1],0<t.Ba-t.T&&37500>s[2]&&t.L&&t.A==0&&!t.v&&(t.v=_a(Et(t.cb,t),6e3));if(1>=mw(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else is(t,11)}else if((n.J||t.g==n)&&Hc(t),!jc(e))for(s=t.Fa.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(t.T=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.I=u[1],t.ka=u[2];const l=u[3];l!=null&&(t.ma=l,t.j.info("VER="+t.ma));const h=u[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.J=r,t.j.info("backChannelRequestTimeoutMs_="+r)),r=t;const p=n.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(Yd(i,i.h),i.h=null))}if(r.D){const w=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;w&&(r.za=w,Pe(r.F,r.D,w))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),r=t;var o=n;if(r.sa=xw(r,r.H?r.ka:null,r.V),o.J){gw(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&($u(a),Ea(a)),r.g=o}else Cw(r);0<t.i.length&&Ku(t)}else u[0]!="stop"&&u[0]!="close"||is(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?is(t,7):ef(t):u[0]!="noop"&&t.l&&t.l.wa(u),t.A=0)}}Ho(4)}catch{}}function ZC(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Nu(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function ek(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Nu(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function cw(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(Nu(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=ek(n),r=ZC(n),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],t&&t[i],n)}var uw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function tk(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),s=null;if(0<=r){var i=n[t].substring(0,r);s=n[t].substring(r+1)}else i=n[t];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function fs(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof fs){this.h=e!==void 0?e:n.h,Gc(this,n.j),this.s=n.s,this.g=n.g,Wc(this,n.m),this.l=n.l,e=n.i;var t=new Qo;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),Pm(this,t),this.o=n.o}else n&&(t=String(n).match(uw))?(this.h=!!e,Gc(this,t[1]||"",!0),this.s=fo(t[2]||""),this.g=fo(t[3]||"",!0),Wc(this,t[4]),this.l=fo(t[5]||"",!0),Pm(this,t[6]||"",!0),this.o=fo(t[7]||"")):(this.h=!!e,this.i=new Qo(null,this.h))}fs.prototype.toString=function(){var n=[],e=this.j;e&&n.push(po(e,Om,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(po(e,Om,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(po(t,t.charAt(0)=="/"?sk:rk,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",po(t,ok)),n.join("")};function Wn(n){return new fs(n)}function Gc(n,e,t){n.j=t?fo(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Wc(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function Pm(n,e,t){e instanceof Qo?(n.i=e,ak(n.i,n.h)):(t||(e=po(e,ik)),n.i=new Qo(e,n.h))}function Pe(n,e,t){n.i.set(e,t)}function Bu(n){return Pe(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function fo(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function po(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,nk),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function nk(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Om=/[#\/\?@]/g,rk=/[#\?:]/g,sk=/[#\?]/g,ik=/[#\?@]/g,ok=/#/g;function Qo(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function Lr(n){n.g||(n.g=new Map,n.h=0,n.i&&tk(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}z=Qo.prototype;z.add=function(n,e){Lr(this),this.i=null,n=Li(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function lw(n,e){Lr(n),e=Li(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function hw(n,e){return Lr(n),e=Li(n,e),n.g.has(e)}z.forEach=function(n,e){Lr(this),this.g.forEach(function(t,r){t.forEach(function(s){n.call(e,s,r,this)},this)},this)};z.oa=function(){Lr(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const s=n[r];for(let i=0;i<s.length;i++)t.push(e[r])}return t};z.W=function(n){Lr(this);let e=[];if(typeof n=="string")hw(this,n)&&(e=e.concat(this.g.get(Li(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};z.set=function(n,e){return Lr(this),this.i=null,n=Li(this,n),hw(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};z.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function dw(n,e,t){lw(n,e),0<t.length&&(n.i=null,n.g.set(Li(n,e),Fd(t)),n.h+=t.length)}z.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),n.push(s)}}return this.i=n.join("&")};function Li(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function ak(n,e){e&&!n.j&&(Lr(n),n.i=null,n.g.forEach(function(t,r){var s=r.toLowerCase();r!=s&&(lw(this,r),dw(this,s,t))},n)),n.j=e}var ck=class{constructor(e,t){this.h=e,this.g=t}};function fw(n){this.l=n||uk,Z.PerformanceNavigationTiming?(n=Z.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(Z.g&&Z.g.Ga&&Z.g.Ga()&&Z.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var uk=10;function pw(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function mw(n){return n.h?1:n.g?n.g.size:0}function Ph(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function Yd(n,e){n.g?n.g.add(e):n.h=e}function gw(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}fw.prototype.cancel=function(){if(this.i=yw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function yw(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return Fd(n.i)}function Jd(){}Jd.prototype.stringify=function(n){return Z.JSON.stringify(n,void 0)};Jd.prototype.parse=function(n){return Z.JSON.parse(n,void 0)};function lk(){this.g=new Jd}function hk(n,e,t){const r=t||"";try{cw(n,function(s,i){let o=s;va(s)&&(o=zd(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function dk(n,e){const t=new Lu;if(Z.Image){const r=new Image;r.onload=tc(rc,t,r,"TestLoadImage: loaded",!0,e),r.onerror=tc(rc,t,r,"TestLoadImage: error",!1,e),r.onabort=tc(rc,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=tc(rc,t,r,"TestLoadImage: timeout",!1,e),Z.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function rc(n,e,t,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Ta(n){this.l=n.ac||null,this.j=n.jb||!1}gt(Ta,Wd);Ta.prototype.g=function(){return new qu(this.l,this.j)};Ta.prototype.i=function(n){return function(){return n}}({});function qu(n,e){it.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=Xd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}gt(qu,it);var Xd=0;z=qu.prototype;z.open=function(n,e){if(this.readyState!=Xd)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,Yo(this)};z.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||Z).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};z.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Sa(this)),this.readyState=Xd};z.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,Yo(this)),this.g&&(this.readyState=3,Yo(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof Z.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;vw(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function vw(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}z.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?Sa(this):Yo(this),this.readyState==3&&vw(this)}};z.Va=function(n){this.g&&(this.response=this.responseText=n,Sa(this))};z.Ua=function(n){this.g&&(this.response=n,Sa(this))};z.ga=function(){this.g&&Sa(this)};function Sa(n){n.readyState=4,n.l=null,n.j=null,n.A=null,Yo(n)}z.setRequestHeader=function(n,e){this.v.append(n,e)};z.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};z.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function Yo(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(qu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var fk=Z.JSON.parse;function Ve(n){it.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=ww,this.K=this.L=!1}gt(Ve,it);var ww="",pk=/^https?$/i,mk=["POST","PUT"];z=Ve.prototype;z.Ka=function(n){this.L=n};z.da=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Rh.g(),this.C=this.u?xm(this.u):xm(Rh),this.g.onreadystatechange=Et(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){Mm(this,i);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)t.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())t.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(i=>i.toLowerCase()=="content-type"),s=Z.FormData&&n instanceof Z.FormData,!(0<=Mv(mk,e))||r||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of t)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{bw(this),0<this.B&&((this.K=gk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Et(this.qa,this)):this.A=Gd(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){Mm(this,i)}};function gk(n){return mi&&PC()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}z.qa=function(){typeof Ld<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,ft(this,"timeout"),this.abort(8))};function Mm(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,_w(n),ju(n)}function _w(n){n.D||(n.D=!0,ft(n,"complete"),ft(n,"error"))}z.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,ft(this,"complete"),ft(this,"abort"),ju(this))};z.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),ju(this,!0)),Ve.X.M.call(this)};z.Ha=function(){this.s||(this.F||this.v||this.l?Iw(this):this.fb())};z.fb=function(){Iw(this)};function Iw(n){if(n.h&&typeof Ld<"u"&&(!n.C[1]||Bn(n)!=4||n.aa()!=2)){if(n.v&&Bn(n)==4)Gd(n.Ha,0,n);else if(ft(n,"readystatechange"),Bn(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var s=String(n.H).match(uw)[1]||null;if(!s&&Z.self&&Z.self.location){var i=Z.self.location.protocol;s=i.substr(0,i.length-1)}r=!pk.test(s?s.toLowerCase():"")}t=r}if(t)ft(n,"complete"),ft(n,"success");else{n.m=6;try{var o=2<Bn(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",_w(n)}}finally{ju(n)}}}}function ju(n,e){if(n.g){bw(n);const t=n.g,r=n.C[0]?qc:null;n.g=null,n.C=null,e||ft(n,"ready");try{t.onreadystatechange=r}catch{}}}function bw(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(Z.clearTimeout(n.A),n.A=null)}function Bn(n){return n.g?n.g.readyState:0}z.aa=function(){try{return 2<Bn(this)?this.g.status:-1}catch{return-1}};z.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};z.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),fk(e)}};function Lm(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case ww:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}z.Ea=function(){return this.m};z.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Ew(n){let e="";return Vd(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Zd(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=Ew(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Pe(n,e,t))}function eo(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Tw(n){this.Ca=0,this.i=[],this.j=new Lu,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=eo("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=eo("baseRetryDelayMs",5e3,n),this.bb=eo("retryDelaySeedMs",1e4,n),this.$a=eo("forwardChannelMaxRetries",2,n),this.ta=eo("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new fw(n&&n.concurrentRequestLimit),this.Fa=new lk,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}z=Tw.prototype;z.ma=8;z.G=1;function ef(n){if(Sw(n),n.G==3){var e=n.U++,t=Wn(n.F);Pe(t,"SID",n.I),Pe(t,"RID",e),Pe(t,"TYPE","terminate"),Aa(n,t),e=new ba(n,n.j,e,void 0),e.K=2,e.v=Bu(Wn(t)),t=!1,Z.navigator&&Z.navigator.sendBeacon&&(t=Z.navigator.sendBeacon(e.v.toString(),"")),!t&&Z.Image&&(new Image().src=e.v,t=!0),t||(e.g=Pw(e.l,null),e.g.da(e.v)),e.F=Date.now(),Ea(e)}Nw(n)}function zu(n){n.g&&(nf(n),n.g.cancel(),n.g=null)}function Sw(n){zu(n),n.u&&(Z.clearTimeout(n.u),n.u=null),Hc(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&Z.clearTimeout(n.m),n.m=null)}function Ku(n){pw(n.h)||n.m||(n.m=!0,Wv(n.Ja,n),n.C=0)}function yk(n,e){return mw(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=_a(Et(n.Ja,n,e),Dw(n,n.C)),n.C++,!0)}z.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const s=new ba(this,this.j,n,void 0);let i=this.s;if(this.S&&(i?(i=Vv(i),$v(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var r=this.i[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Aw(this,s,e),t=Wn(this.F),Pe(t,"RID",n),Pe(t,"CVER",22),this.D&&Pe(t,"X-HTTP-Session-Id",this.D),Aa(this,t),i&&(this.N?e="headers="+encodeURIComponent(String(Ew(i)))+"&"+e:this.o&&Zd(t,this.o,i)),Yd(this.h,s),this.Ya&&Pe(t,"TYPE","init"),this.O?(Pe(t,"$req",e),Pe(t,"SID","null"),s.Z=!0,Nh(s,t,null)):Nh(s,t,e),this.G=2}}else this.G==3&&(n?Fm(this,n):this.i.length==0||pw(this.h)||Fm(this))};function Fm(n,e){var t;e?t=e.m:t=n.U++;const r=Wn(n.F);Pe(r,"SID",n.I),Pe(r,"RID",t),Pe(r,"AID",n.T),Aa(n,r),n.o&&n.s&&Zd(r,n.o,n.s),t=new ba(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=Aw(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),Yd(n.h,t),Nh(t,r,e)}function Aa(n,e){n.ia&&Vd(n.ia,function(t,r){Pe(e,r,t)}),n.l&&cw({},function(t,r){Pe(e,r,t)})}function Aw(n,e,t){t=Math.min(n.i.length,t);var r=n.l?Et(n.l.Ra,n.l,n):null;e:{var s=n.i;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{hk(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,r}function Cw(n){n.g||n.u||(n.Z=1,Wv(n.Ia,n),n.A=0)}function tf(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=_a(Et(n.Ia,n),Dw(n,n.A)),n.A++,!0)}z.Ia=function(){if(this.u=null,kw(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=_a(Et(this.eb,this),n)}};z.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Rt(10),zu(this),kw(this))};function nf(n){n.B!=null&&(Z.clearTimeout(n.B),n.B=null)}function kw(n){n.g=new ba(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=Wn(n.sa);Pe(e,"RID","rpc"),Pe(e,"SID",n.I),Pe(e,"CI",n.L?"0":"1"),Pe(e,"AID",n.T),Pe(e,"TYPE","xmlhttp"),Aa(n,e),n.o&&n.s&&Zd(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=Bu(Wn(e)),t.s=null,t.P=!0,sw(t,n)}z.cb=function(){this.v!=null&&(this.v=null,zu(this),tf(this),Rt(19))};function Hc(n){n.v!=null&&(Z.clearTimeout(n.v),n.v=null)}function Rw(n,e){var t=null;if(n.g==e){Hc(n),nf(n),n.g=null;var r=2}else if(Ph(n.h,e))t=e.D,gw(n.h,e),r=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var s=n.C;r=Fu(),ft(r,new ew(r,t)),Ku(n)}else Cw(n);else if(s=e.o,s==3||s==0&&0<n.pa||!(r==1&&yk(n,e)||r==2&&tf(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),s){case 1:is(n,5);break;case 4:is(n,10);break;case 3:is(n,6);break;default:is(n,2)}}}function Dw(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function is(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var r=Et(n.kb,n);t||(t=new fs("//www.google.com/images/cleardot.gif"),Z.location&&Z.location.protocol=="http"||Gc(t,"https"),Bu(t)),dk(t.toString(),r)}else Rt(2);n.G=0,n.l&&n.l.va(e),Nw(n),Sw(n)}z.kb=function(n){n?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function Nw(n){if(n.G=0,n.la=[],n.l){const e=yw(n.h);(e.length!=0||n.i.length!=0)&&(Am(n.la,e),Am(n.la,n.i),n.h.i.length=0,Fd(n.i),n.i.length=0),n.l.ua()}}function xw(n,e,t){var r=t instanceof fs?Wn(t):new fs(t,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Wc(r,r.m);else{var s=Z.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new fs(null,void 0);r&&Gc(i,r),e&&(i.g=e),s&&Wc(i,s),t&&(i.l=t),r=i}return t=n.D,e=n.za,t&&e&&Pe(r,t,e),Pe(r,"VER",n.ma),Aa(n,r),r}function Pw(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new Ve(new Ta({jb:!0})):new Ve(n.ra),e.Ka(n.H),e}function Ow(){}z=Ow.prototype;z.xa=function(){};z.wa=function(){};z.va=function(){};z.ua=function(){};z.Ra=function(){};function Qc(){if(mi&&!(10<=Number(OC)))throw Error("Environmental error: no available transport.")}Qc.prototype.g=function(n,e){return new Wt(n,e)};function Wt(n,e){it.call(this),this.g=new Tw(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!jc(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!jc(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Fi(this)}gt(Wt,it);Wt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;Rt(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=xw(n,null,n.V),Ku(n)};Wt.prototype.close=function(){ef(this.g)};Wt.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=zd(n),n=t);e.i.push(new ck(e.ab++,n)),e.G==3&&Ku(e)};Wt.prototype.M=function(){this.g.l=null,delete this.j,ef(this.g),delete this.g,Wt.X.M.call(this)};function Mw(n){Hd.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}gt(Mw,Hd);function Lw(){Qd.call(this),this.status=1}gt(Lw,Qd);function Fi(n){this.g=n}gt(Fi,Ow);Fi.prototype.xa=function(){ft(this.g,"a")};Fi.prototype.wa=function(n){ft(this.g,new Mw(n))};Fi.prototype.va=function(n){ft(this.g,new Lw)};Fi.prototype.ua=function(){ft(this.g,"b")};Qc.prototype.createWebChannel=Qc.prototype.g;Wt.prototype.send=Wt.prototype.u;Wt.prototype.open=Wt.prototype.m;Wt.prototype.close=Wt.prototype.close;Uu.NO_ERROR=0;Uu.TIMEOUT=8;Uu.HTTP_ERROR=6;tw.COMPLETE="complete";nw.EventType=Ia;Ia.OPEN="a";Ia.CLOSE="b";Ia.ERROR="c";Ia.MESSAGE="d";it.prototype.listen=it.prototype.N;Ve.prototype.listenOnce=Ve.prototype.O;Ve.prototype.getLastError=Ve.prototype.Oa;Ve.prototype.getLastErrorCode=Ve.prototype.Ea;Ve.prototype.getStatus=Ve.prototype.aa;Ve.prototype.getResponseJson=Ve.prototype.Sa;Ve.prototype.getResponseText=Ve.prototype.fa;Ve.prototype.send=Ve.prototype.da;Ve.prototype.setWithCredentials=Ve.prototype.Ka;var vk=function(){return new Qc},wk=function(){return Fu()},Hl=Uu,_k=tw,Ik=Ls,Um={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},bk=Ta,sc=nw,Ek=Ve;const Vm="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}tt.UNAUTHENTICATED=new tt(null),tt.GOOGLE_CREDENTIALS=new tt("google-credentials-uid"),tt.FIRST_PARTY=new tt("first-party-uid"),tt.MOCK_USER=new tt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Ui="9.19.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new Ru("@firebase/firestore");function Oh(){return Ar.logLevel}function Tk(n){Ar.setLogLevel(n)}function A(n,...e){if(Ar.logLevel<=me.DEBUG){const t=e.map(rf);Ar.debug(`Firestore (${Ui}): ${n}`,...t)}}function qe(n,...e){if(Ar.logLevel<=me.ERROR){const t=e.map(rf);Ar.error(`Firestore (${Ui}): ${n}`,...t)}}function Hn(n,...e){if(Ar.logLevel<=me.WARN){const t=e.map(rf);Ar.warn(`Firestore (${Ui}): ${n}`,...t)}}function rf(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(n="Unexpected state"){const e=`FIRESTORE (${Ui}) INTERNAL ASSERTION FAILED: `+n;throw qe(e),new Error(e)}function K(n,e){n||$()}function Sk(n,e){n||$()}function F(n,e){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends Dt{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class st{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Ak{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(tt.UNAUTHENTICATED))}shutdown(){}}class Ck{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class kk{constructor(e){this.t=e,this.currentUser=tt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new st;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new st,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new st)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(K(typeof r.accessToken=="string"),new Fw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return K(e===null||typeof e=="string"),new tt(e)}}class Rk{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=tt.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Dk{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new Rk(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(tt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Nk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class xk{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const r=i=>{i.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,A("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(K(typeof t.token=="string"),this.T=t.token,new Nk(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uw{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=Pk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function re(n,e){return n<e?-1:n>e?1:0}function gi(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function Vw(n){return n+"\0"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new E(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new E(v.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new E(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(v.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Me(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G{constructor(e){this.timestamp=e}static fromTimestamp(e){return new G(e)}static min(){return new G(new Me(0,0))}static max(){return new G(new Me(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo{constructor(e,t,r){t===void 0?t=0:t>e.length&&$(),r===void 0?r=e.length-t:r>e.length-t&&$(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return Jo.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof Jo?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class de extends Jo{construct(e,t,r){return new de(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new E(v.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new de(t)}static emptyPath(){return new de([])}}const Ok=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class je extends Jo{construct(e,t,r){return new je(e,t,r)}static isValidIdentifier(e){return Ok.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),je.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new je(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new E(v.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new E(v.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new E(v.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new E(v.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new je(t)}static emptyPath(){return new je([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(e){this.path=e}static fromPath(e){return new O(de.fromString(e))}static fromName(e){return new O(de.fromString(e).popFirst(5))}static empty(){return new O(de.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&de.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return de.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new O(new de(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $w{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function Mh(n){return n.fields.find(e=>e.kind===2)}function Hr(n){return n.fields.filter(e=>e.kind!==2)}$w.UNKNOWN_ID=-1;class Mk{constructor(e,t){this.fieldPath=e,this.kind=t}}class Yc{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Yc(0,Ht.min())}}function Bw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=G.fromTimestamp(r===1e9?new Me(t+1,0):new Me(t,r));return new Ht(s,O.empty(),e)}function qw(n){return new Ht(n.readTime,n.key,-1)}class Ht{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new Ht(G.min(),O.empty(),-1)}static max(){return new Ht(G.max(),O.empty(),-1)}}function sf(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=O.comparator(n.documentKey,e.documentKey),t!==0?t:re(n.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class zw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(n){if(n.code!==v.FAILED_PRECONDITION||n.message!==jw)throw n;A("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&$(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new y((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof y?t:y.resolve(t)}catch(t){return y.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):y.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):y.reject(t)}static resolve(e){return new y((t,r)=>{t(e)})}static reject(e){return new y((t,r)=>{r(e)})}static waitFor(e){return new y((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=y.resolve(!1);for(const r of e)t=t.next(s=>s?y.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new y((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,t){return new y((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gu{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.R=new st,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{t.error?this.R.reject(new So(e,t.error)):this.R.resolve()},this.transaction.onerror=r=>{const s=of(r.target.error);this.R.reject(new So(e,s))}}static open(e,t,r,s){try{return new Gu(t,e.transaction(s,r))}catch(i){throw new So(t,i)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(A("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Fk(t)}}class ln{constructor(e,t,r){this.name=e,this.version=t,this.V=r,ln.S(Fe())===12.2&&qe("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return A("SimpleDb","Removing database:",e),Xr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!jo())return!1;if(ln.C())return!0;const e=Fe(),t=ln.S(e),r=0<t&&t<10,s=ln.N(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static O(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(A("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new So(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new E(v.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new E(v.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new So(e,o))},s.onupgradeneeded=i=>{A("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.V.M(o,s.transaction,i.oldVersion,this.version).next(()=>{A("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=Gu.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),y.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(A("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Lk{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Xr(this.L.delete())}}class So extends E{constructor(e,t){super(v.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Ur(n){return n.name==="IndexedDbTransactionError"}class Fk{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(A("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(A("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Xr(r)}add(e){return A("SimpleDb","ADD",this.store.name,e,e),Xr(this.store.add(e))}get(e){return Xr(this.store.get(e)).next(t=>(t===void 0&&(t=null),A("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return A("SimpleDb","DELETE",this.store.name,e),Xr(this.store.delete(e))}count(){return A("SimpleDb","COUNT",this.store.name),Xr(this.store.count())}j(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const s=this.cursor(r),i=[];return this.W(s,(o,a)=>{i.push(a)}).next(()=>i)}{const s=this.store.getAll(r.range);return new y((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new y((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}J(e,t){A("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const s=this.cursor(r);return this.W(s,(i,o,a)=>a.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}X(e){const t=this.cursor({});return new y((r,s)=>{t.onerror=i=>{const o=of(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new y((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new Lk(a),u=t(a.primaryKey,a.value,c);if(u instanceof y){const l=u.catch(h=>(c.done(),y.reject(h)));r.push(l)}c.isDone?s():c.K===null?a.continue():a.continue(c.K)}}).next(()=>y.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Xr(n){return new y((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=of(r.target.error);t(s)}})}let $m=!1;function of(n){const e=ln.S(Fe());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new E("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return $m||($m=!0,setTimeout(()=>{throw r},0)),r}}return n}class Uk{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){A("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{A("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){Ur(t)?A("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Fr(t)}await this.et(6e4)})}}class Vk{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const r=new Set;let s=t,i=!0;return y.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return A("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>t-s)}it(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(s,i)).next(a=>(A("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=qw(i);sf(o,r)>0&&(r=o)}),new Ht(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>t.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Ut.ct=-1;function Ca(n){return n==null}function Xo(n){return n===0&&1/n==-1/0}function Kw(n){return typeof n=="number"&&Number.isInteger(n)&&!Xo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nt(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Bm(e)),e=$k(n.get(t),e);return Bm(e)}function $k(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Bm(n){return n+""}function kn(n){const e=n.length;if(K(e>=2),e===2)return K(n.charAt(0)===""&&n.charAt(1)===""),de.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&$(),n.charAt(o+1)){case"":const a=n.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:$()}i=o+2}return new de(r)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qm=["userId","batchId"];/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(n,e){return[n,Nt(e)]}function Gw(n,e,t){return[n,Nt(e),t]}const Bk={},qk=["prefixPath","collectionGroup","readTime","documentId"],jk=["prefixPath","collectionGroup","documentId"],zk=["collectionGroup","readTime","prefixPath","documentId"],Kk=["canonicalId","targetId"],Gk=["targetId","path"],Wk=["path","targetId"],Hk=["collectionId","parent"],Qk=["indexId","uid"],Yk=["uid","sequenceNumber"],Jk=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Xk=["indexId","uid","orderedDocumentKey"],Zk=["userId","collectionPath","documentId"],eR=["userId","collectionPath","largestBatchId"],tR=["userId","collectionGroup","largestBatchId"],Ww=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],nR=[...Ww,"documentOverlays"],Hw=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Qw=Hw,rR=[...Qw,"indexConfiguration","indexState","indexEntries"];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lh extends zw{constructor(e,t){super(),this.at=e,this.currentSequenceNumber=t}}function ct(n,e){const t=F(n);return ln.O(t.at,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jm(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function Fs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Yw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,t){this.comparator=e,this.root=t||ht.EMPTY}insert(e,t){return new $e(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ht.BLACK,null,null))}remove(e){return new $e(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ht.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ic(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ic(this.root,e,this.comparator,!1)}getReverseIterator(){return new ic(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ic(this.root,e,this.comparator,!0)}}class ic{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ht{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ht.RED,this.left=s??ht.EMPTY,this.right=i??ht.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ht(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ht.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ht.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ht.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ht.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw $();const e=this.left.check();if(e!==this.right.check())throw $();return e+(this.isRed()?0:1)}}ht.EMPTY=null,ht.RED=!0,ht.BLACK=!1;ht.EMPTY=new class{constructor(){this.size=0}get key(){throw $()}get value(){throw $()}get color(){throw $()}get left(){throw $()}get right(){throw $()}copy(n,e,t,r,s){return this}insert(n,e,t){return new ht(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Se{constructor(e){this.comparator=e,this.data=new $e(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new zm(this.data.getIterator())}getIteratorFrom(e){return new zm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Se)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Se(this.comparator);return t.data=e,t}}class zm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Gs(n){return n.hasNext()?n.getNext():void 0}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e){this.fields=e,e.sort(je.comparator)}static empty(){return new Vt([])}unionWith(e){let t=new Se(je.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Vt(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return gi(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iR(){return typeof atob<"u"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new sR("Invalid base64 string: "+s):s}}(e);return new Xe(t)}static fromUint8Array(e){const t=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Xe(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Xe.EMPTY_BYTE_STRING=new Xe("");const oR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Cr(n){if(K(!!n),typeof n=="string"){let e=0;const t=oR.exec(n);if(K(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ue(n.seconds),nanos:Ue(n.nanos)}}function Ue(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ws(n){return typeof n=="string"?Xe.fromBase64String(n):Xe.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Jw(n){const e=n.mapValue.fields.__previous_value__;return af(e)?Jw(e):e}function Zo(n){const e=Cr(n.mapValue.fields.__local_write_time__.timestampValue);return new Me(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aR{constructor(e,t,r,s,i,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class kr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new kr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof kr&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},_c={nullValue:"NULL_VALUE"};function _s(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?af(n)?4:Xw(n)?9007199254740991:10:$()}function Mn(n,e){if(n===e)return!0;const t=_s(n);if(t!==_s(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Zo(n).isEqual(Zo(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Cr(r.timestampValue),o=Cr(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return ws(r.bytesValue).isEqual(ws(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return Ue(r.geoPointValue.latitude)===Ue(s.geoPointValue.latitude)&&Ue(r.geoPointValue.longitude)===Ue(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Ue(r.integerValue)===Ue(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Ue(r.doubleValue),o=Ue(s.doubleValue);return i===o?Xo(i)===Xo(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return gi(n.arrayValue.values||[],e.arrayValue.values||[],Mn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(jm(i)!==jm(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Mn(i[a],o[a])))return!1;return!0}(n,e);default:return $()}}function ea(n,e){return(n.values||[]).find(t=>Mn(t,e))!==void 0}function Rr(n,e){if(n===e)return 0;const t=_s(n),r=_s(e);if(t!==r)return re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return re(n.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Ue(s.integerValue||s.doubleValue),a=Ue(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Km(n.timestampValue,e.timestampValue);case 4:return Km(Zo(n),Zo(e));case 5:return re(n.stringValue,e.stringValue);case 6:return function(s,i){const o=ws(s),a=ws(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=re(o[c],a[c]);if(u!==0)return u}return re(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,i){const o=re(Ue(s.latitude),Ue(i.latitude));return o!==0?o:re(Ue(s.longitude),Ue(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Rr(o[c],a[c]);if(u)return u}return re(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===fr.mapValue&&i===fr.mapValue)return 0;if(s===fr.mapValue)return 1;if(i===fr.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=re(a[l],u[l]);if(h!==0)return h;const d=Rr(o[a[l]],c[u[l]]);if(d!==0)return d}return re(a.length,u.length)}(n.mapValue,e.mapValue);default:throw $()}}function Km(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return re(n,e);const t=Cr(n),r=Cr(e),s=re(t.seconds,r.seconds);return s!==0?s:re(t.nanos,r.nanos)}function yi(n){return Fh(n)}function Fh(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const s=Cr(r);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?ws(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,O.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Fh(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Fh(r.fields[a])}`;return i+"}"}(n.mapValue):$();var e,t}function Is(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Uh(n){return!!n&&"integerValue"in n}function ta(n){return!!n&&"arrayValue"in n}function Gm(n){return!!n&&"nullValue"in n}function Wm(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function Ic(n){return!!n&&"mapValue"in n}function Ao(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return Fs(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=Ao(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=Ao(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Xw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function cR(n){return"nullValue"in n?_c:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?Is(kr.empty(),O.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:$()}function uR(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?Is(kr.empty(),O.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?fr:$()}function Hm(n,e){const t=Rr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function Qm(n,e){const t=Rr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(e){this.value=e}static empty(){return new dt({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!Ic(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ao(t)}setAll(e){let t=je.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=Ao(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());Ic(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Mn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];Ic(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){Fs(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new dt(Ao(this.value))}}function Zw(n){const e=[];return Fs(n.fields,(t,r)=>{const s=new je([t]);if(Ic(r)){const i=Zw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Vt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new De(e,0,G.min(),G.min(),G.min(),dt.empty(),0)}static newFoundDocument(e,t,r,s){return new De(e,1,t,G.min(),r,s,0)}static newNoDocument(e,t){return new De(e,2,t,G.min(),G.min(),dt.empty(),0)}static newUnknownDocument(e,t){return new De(e,3,t,G.min(),G.min(),dt.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(G.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=dt.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=dt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=G.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof De&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new De(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(e,t){this.position=e,this.inclusive=t}}function Ym(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=O.comparator(O.fromName(o.referenceValue),t.key):r=Rr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Jm(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Mn(n.position[t],e.position[t]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii{constructor(e,t="asc"){this.field=e,this.dir=t}}function lR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e_{}class le extends e_{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new hR(e,t,r):t==="array-contains"?new pR(e,r):t==="in"?new o_(e,r):t==="not-in"?new mR(e,r):t==="array-contains-any"?new gR(e,r):new le(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new dR(e,r):new fR(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Rr(t,this.value)):t!==null&&_s(this.value)===_s(t)&&this.matchesComparison(Rr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return $()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class be extends e_{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new be(e,t)}matches(e){return vi(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function vi(n){return n.op==="and"}function Vh(n){return n.op==="or"}function cf(n){return t_(n)&&vi(n)}function t_(n){for(const e of n.filters)if(e instanceof be)return!1;return!0}function $h(n){if(n instanceof le)return n.field.canonicalString()+n.op.toString()+yi(n.value);if(cf(n))return n.filters.map(e=>$h(e)).join(",");{const e=n.filters.map(t=>$h(t)).join(",");return`${n.op}(${e})`}}function n_(n,e){return n instanceof le?function(t,r){return r instanceof le&&t.op===r.op&&t.field.isEqual(r.field)&&Mn(t.value,r.value)}(n,e):n instanceof be?function(t,r){return r instanceof be&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((s,i,o)=>s&&n_(i,r.filters[o]),!0):!1}(n,e):void $()}function r_(n,e){const t=n.filters.concat(e);return be.create(t,n.op)}function s_(n){return n instanceof le?function(e){return`${e.field.canonicalString()} ${e.op} ${yi(e.value)}`}(n):n instanceof be?function(e){return e.op.toString()+" {"+e.getFilters().map(s_).join(" ,")+"}"}(n):"Filter"}class hR extends le{constructor(e,t,r){super(e,t,r),this.key=O.fromName(r.referenceValue)}matches(e){const t=O.comparator(e.key,this.key);return this.matchesComparison(t)}}class dR extends le{constructor(e,t){super(e,"in",t),this.keys=i_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class fR extends le{constructor(e,t){super(e,"not-in",t),this.keys=i_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function i_(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>O.fromName(r.referenceValue))}class pR extends le{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return ta(t)&&ea(t.arrayValue,this.value)}}class o_ extends le{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&ea(this.value.arrayValue,t)}}class mR extends le{constructor(e,t){super(e,"not-in",t)}matches(e){if(ea(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!ea(this.value.arrayValue,t)}}class gR extends le{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!ta(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>ea(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yR{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Bh(n,e=null,t=[],r=[],s=null,i=null,o=null){return new yR(n,e,t,r,s,i,o)}function bs(n){const e=F(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>$h(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),Ca(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>yi(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>yi(r)).join(",")),e.ft=t}return e.ft}function ka(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!lR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!n_(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Jm(n.startAt,e.startAt)&&Jm(n.endAt,e.endAt)}function Jc(n){return O.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function Xc(n,e){return n.filters.filter(t=>t instanceof le&&t.field.isEqual(e))}function Xm(n,e,t){let r=_c,s=!0;for(const i of Xc(n,e)){let o=_c,a=!0;switch(i.op){case"<":case"<=":o=cR(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=_c}Hm({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Hm({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function Zm(n,e,t){let r=fr,s=!0;for(const i of Xc(n,e)){let o=fr,a=!0;switch(i.op){case">=":case">":o=uR(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=fr}Qm({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];Qm({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function a_(n,e,t,r,s,i,o,a){return new Xn(n,e,t,r,s,i,o,a)}function Vi(n){return new Xn(n)}function eg(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function uf(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Wu(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function lf(n){return n.collectionGroup!==null}function ps(n){const e=F(n);if(e.dt===null){e.dt=[];const t=Wu(e),r=uf(e);if(t!==null&&r===null)t.isKeyField()||e.dt.push(new ii(t)),e.dt.push(new ii(je.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new ii(je.keyField(),i))}}}return e.dt}function qt(n){const e=F(n);if(!e.wt)if(e.limitType==="F")e.wt=Bh(e.path,e.collectionGroup,ps(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of ps(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new ii(i.field,o))}const r=e.endAt?new Dr(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Dr(e.startAt.position,e.startAt.inclusive):null;e.wt=Bh(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e.wt}function qh(n,e){e.getFirstInequalityField(),Wu(n);const t=n.filters.concat([e]);return new Xn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function Zc(n,e,t){return new Xn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ra(n,e){return ka(qt(n),qt(e))&&n.limitType===e.limitType}function c_(n){return`${bs(qt(n))}|lt:${n.limitType}`}function jh(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>s_(r)).join(", ")}]`),Ca(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>yi(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>yi(r)).join(",")),`Target(${t})`}(qt(n))}; limitType=${n.limitType})`}function Da(n,e){return e.isFoundDocument()&&function(t,r){const s=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):O.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,r){for(const s of ps(t))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const s of t.filters)if(!s.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(s,i,o){const a=Ym(s,i,o);return s.inclusive?a<=0:a<0}(t.startAt,ps(t),r)||t.endAt&&!function(s,i,o){const a=Ym(s,i,o);return s.inclusive?a>=0:a>0}(t.endAt,ps(t),r))}(n,e)}function u_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function l_(n){return(e,t)=>{let r=!1;for(const s of ps(n)){const i=vR(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function vR(n,e,t){const r=n.field.isKeyField()?O.comparator(e.key,t.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Rr(a,c):$()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return $()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){Fs(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Yw(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wR=new $e(O.comparator);function $t(){return wR}const h_=new $e(O.comparator);function mo(...n){let e=h_;for(const t of n)e=e.insert(t.key,t);return e}function d_(n){let e=h_;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function Rn(){return Co()}function f_(){return Co()}function Co(){return new Vr(n=>n.toString(),(n,e)=>n.isEqual(e))}const _R=new $e(O.comparator),IR=new Se(O.comparator);function se(...n){let e=IR;for(const t of n)e=e.add(t);return e}const bR=new Se(re);function Hu(){return bR}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Xo(e)?"-0":e}}function m_(n){return{integerValue:""+n}}function g_(n,e){return Kw(e)?m_(e):p_(n,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(){this._=void 0}}function ER(n,e,t){return n instanceof wi?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(t,e):n instanceof Es?v_(n,e):n instanceof Ts?w_(n,e):function(r,s){const i=y_(r,s),o=tg(i)+tg(r._t);return Uh(i)&&Uh(r._t)?m_(o):p_(r.serializer,o)}(n,e)}function TR(n,e,t){return n instanceof Es?v_(n,e):n instanceof Ts?w_(n,e):t}function y_(n,e){return n instanceof _i?Uh(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class wi extends Qu{}class Es extends Qu{constructor(e){super(),this.elements=e}}function v_(n,e){const t=__(e);for(const r of n.elements)t.some(s=>Mn(s,r))||t.push(r);return{arrayValue:{values:t}}}class Ts extends Qu{constructor(e){super(),this.elements=e}}function w_(n,e){let t=__(e);for(const r of n.elements)t=t.filter(s=>!Mn(s,r));return{arrayValue:{values:t}}}class _i extends Qu{constructor(e,t){super(),this.serializer=e,this._t=t}}function tg(n){return Ue(n.integerValue||n.doubleValue)}function __(n){return ta(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Na{constructor(e,t){this.field=e,this.transform=t}}function SR(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof Es&&r instanceof Es||t instanceof Ts&&r instanceof Ts?gi(t.elements,r.elements,Mn):t instanceof _i&&r instanceof _i?Mn(t._t,r._t):t instanceof wi&&r instanceof wi}(n.transform,e.transform)}class AR{constructor(e,t){this.version=e,this.transformResults=t}}class Oe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Oe}static exists(e){return new Oe(void 0,e)}static updateTime(e){return new Oe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function bc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Yu{}function I_(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Bi(n.key,Oe.none()):new $i(n.key,n.data,Oe.none());{const t=n.data,r=dt.empty();let s=new Se(je.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Zn(n.key,r,new Vt(s.toArray()),Oe.none())}}function CR(n,e,t){n instanceof $i?function(r,s,i){const o=r.value.clone(),a=rg(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Zn?function(r,s,i){if(!bc(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=rg(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(b_(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function ko(n,e,t,r){return n instanceof $i?function(s,i,o,a){if(!bc(s.precondition,i))return o;const c=s.value.clone(),u=sg(s.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Zn?function(s,i,o,a){if(!bc(s.precondition,i))return o;const c=sg(s.fieldTransforms,a,i),u=i.data;return u.setAll(b_(s)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(n,e,t,r):function(s,i,o){return bc(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(n,e,t)}function kR(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=y_(r.transform,s||null);i!=null&&(t===null&&(t=dt.empty()),t.set(r.field,i))}return t||null}function ng(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&gi(t,r,(s,i)=>SR(s,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class $i extends Yu{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Zn extends Yu{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function b_(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function rg(n,e,t){const r=new Map;K(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,TR(o,a,t[s]))}return r}function sg(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,ER(i,o,e))}return r}class Bi extends Yu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class hf extends Yu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class df{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&CR(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=ko(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=ko(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=f_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const c=I_(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(G.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&gi(this.mutations,e.mutations,(t,r)=>ng(t,r))&&gi(this.baseMutations,e.baseMutations,(t,r)=>ng(t,r))}}class ff{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){K(e.mutations.length===r.length);let s=_R;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new ff(e,t,r,s)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class RR{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var We,he;function E_(n){switch(n){default:return $();case v.CANCELLED:case v.UNKNOWN:case v.DEADLINE_EXCEEDED:case v.RESOURCE_EXHAUSTED:case v.INTERNAL:case v.UNAVAILABLE:case v.UNAUTHENTICATED:return!1;case v.INVALID_ARGUMENT:case v.NOT_FOUND:case v.ALREADY_EXISTS:case v.PERMISSION_DENIED:case v.FAILED_PRECONDITION:case v.ABORTED:case v.OUT_OF_RANGE:case v.UNIMPLEMENTED:case v.DATA_LOSS:return!0}}function T_(n){if(n===void 0)return qe("GRPC error has no .code"),v.UNKNOWN;switch(n){case We.OK:return v.OK;case We.CANCELLED:return v.CANCELLED;case We.UNKNOWN:return v.UNKNOWN;case We.DEADLINE_EXCEEDED:return v.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return v.RESOURCE_EXHAUSTED;case We.INTERNAL:return v.INTERNAL;case We.UNAVAILABLE:return v.UNAVAILABLE;case We.UNAUTHENTICATED:return v.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return v.INVALID_ARGUMENT;case We.NOT_FOUND:return v.NOT_FOUND;case We.ALREADY_EXISTS:return v.ALREADY_EXISTS;case We.PERMISSION_DENIED:return v.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return v.FAILED_PRECONDITION;case We.ABORTED:return v.ABORTED;case We.OUT_OF_RANGE:return v.OUT_OF_RANGE;case We.UNIMPLEMENTED:return v.UNIMPLEMENTED;case We.DATA_LOSS:return v.DATA_LOSS;default:return $()}}(he=We||(We={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return oc}static getOrCreateInstance(){return oc===null&&(oc=new mf),oc}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let oc=null;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xa{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Pa.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new xa(G.min(),s,Hu(),$t(),se())}}class Pa{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Pa(r,t,se(),se(),se())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e,t,r,s){this.It=e,this.removedTargetIds=t,this.key=r,this.Tt=s}}class S_{constructor(e,t){this.targetId=e,this.Et=t}}class A_{constructor(e,t,r=Xe.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class ig{constructor(){this.At=0,this.Rt=ag(),this.vt=Xe.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=se(),t=se(),r=se();return this.Rt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:$()}}),new Pa(this.vt,this.bt,e,t,r)}xt(){this.Pt=!1,this.Rt=ag()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class DR{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=$t(),this.qt=og(),this.Ut=new Se(re)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,t=>{const r=this.jt(t);switch(e.state){case 0:this.Wt(t)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),r.Dt(e.resumeToken));break;default:$()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((r,s)=>{this.Wt(s)&&t(s)})}Jt(e){var t;const r=e.targetId,s=e.Et.count,i=this.Yt(r);if(i){const o=i.target;if(Jc(o))if(s===0){const a=new O(o.path);this.Qt(r,a,De.newNoDocument(a,G.min()))}else K(s===1);else{const a=this.Zt(r);a!==s&&(this.Ht(r),this.Ut=this.Ut.add(r),(t=mf.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&Jc(a.target)){const c=new O(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,De.newNoDocument(c,e))}i.St&&(t.set(o,i.Ct()),i.xt())}});let r=se();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const s=new xa(e,t,this.Ut,this.Lt,r);return this.Lt=$t(),this.qt=og(),this.Ut=new Se(re),s}Gt(e,t){if(!this.Wt(e))return;const r=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,r),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,r){if(!this.Wt(e))return;const s=this.jt(e);this.te(e,t)?s.Nt(t,1):s.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),r&&(this.Lt=this.Lt.insert(t,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new ig,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new Se(re),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=this.Yt(e)!==null;return t||A("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new ig),this.Ft.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function og(){return new $e(O.comparator)}function ag(){return new $e(O.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),xR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),PR=(()=>({and:"AND",or:"OR"}))();class OR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function Ii(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function C_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function MR(n,e){return Ii(n,e.toTimestamp())}function ze(n){return K(!!n),G.fromTimestamp(function(e){const t=Cr(e);return new Me(t.seconds,t.nanos)}(n))}function gf(n,e){return function(t){return new de(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function k_(n){const e=de.fromString(n);return K(F_(e)),e}function na(n,e){return gf(n.databaseId,e.path)}function Nn(n,e){const t=k_(e);if(t.get(1)!==n.databaseId.projectId)throw new E(v.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new E(v.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new O(D_(t))}function zh(n,e){return gf(n.databaseId,e)}function R_(n){const e=k_(n);return e.length===4?de.emptyPath():D_(e)}function ra(n){return new de(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function D_(n){return K(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function cg(n,e,t){return{name:na(n,e),fields:t.value.mapValue.fields}}function N_(n,e,t){const r=Nn(n,e.name),s=ze(e.updateTime),i=e.createTime?ze(e.createTime):G.min(),o=new dt({mapValue:{fields:e.fields}}),a=De.newFoundDocument(r,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function LR(n,e){return"found"in e?function(t,r){K(!!r.found),r.found.name,r.found.updateTime;const s=Nn(t,r.found.name),i=ze(r.found.updateTime),o=r.found.createTime?ze(r.found.createTime):G.min(),a=new dt({mapValue:{fields:r.found.fields}});return De.newFoundDocument(s,i,o,a)}(n,e):"missing"in e?function(t,r){K(!!r.missing),K(!!r.readTime);const s=Nn(t,r.missing),i=ze(r.readTime);return De.newNoDocument(s,i)}(n,e):$()}function FR(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:$()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(K(u===void 0||typeof u=="string"),Xe.fromBase64String(u||"")):(K(u===void 0||u instanceof Uint8Array),Xe.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?v.UNKNOWN:T_(c.code);return new E(u,c.message||"")}(o);t=new A_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=Nn(n,r.document.name),i=ze(r.document.updateTime),o=r.document.createTime?ze(r.document.createTime):G.min(),a=new dt({mapValue:{fields:r.document.fields}}),c=De.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new Ec(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=Nn(n,r.document),i=r.readTime?ze(r.readTime):G.min(),o=De.newNoDocument(s,i),a=r.removedTargetIds||[];t=new Ec([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=Nn(n,r.document),i=r.removedTargetIds||[];t=new Ec([],i,s,null)}else{if(!("filter"in e))return $();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new RR(s),o=r.targetId;t=new S_(o,i)}}return t}function sa(n,e){let t;if(e instanceof $i)t={update:cg(n,e.key,e.value)};else if(e instanceof Bi)t={delete:na(n,e.key)};else if(e instanceof Zn)t={update:cg(n,e.key,e.data),updateMask:jR(e.fieldMask)};else{if(!(e instanceof hf))return $();t={verify:na(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof wi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Es)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof Ts)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof _i)return{fieldPath:i.field.canonicalString(),increment:o._t};throw $()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:MR(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:$()}(n,e.precondition)),t}function Kh(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?Oe.updateTime(ze(s.updateTime)):s.exists!==void 0?Oe.exists(s.exists):Oe.none()}(e.currentDocument):Oe.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(i,o){let a=null;if("setToServerValue"in o)K(o.setToServerValue==="REQUEST_TIME"),a=new wi;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Es(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new Ts(u)}else"increment"in o?a=new _i(i,o.increment):$();const c=je.fromServerFormat(o.fieldPath);return new Na(c,a)}(n,s)):[];if(e.update){e.update.name;const s=Nn(n,e.update.name),i=new dt({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Vt(c.map(u=>je.fromServerFormat(u)))}(e.updateMask);return new Zn(s,i,o,t,r)}return new $i(s,i,t,r)}if(e.delete){const s=Nn(n,e.delete);return new Bi(s,t)}if(e.verify){const s=Nn(n,e.verify);return new hf(s,t)}return $()}function UR(n,e){return n&&n.length>0?(K(e!==void 0),n.map(t=>function(r,s){let i=r.updateTime?ze(r.updateTime):ze(s);return i.isEqual(G.min())&&(i=ze(s)),new AR(i,r.transformResults||[])}(t,e))):[]}function x_(n,e){return{documents:[zh(n,e.path)]}}function P_(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=zh(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=zh(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return L_(be.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ys(l.field),direction:$R(l.dir)}}(u))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,u){return c.useProto3Json||Ca(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function O_(n){let e=R_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){K(r===1);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=function(l){const h=M_(l);return h instanceof be&&cf(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new ii(Js(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,Ca(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Dr(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Dr(d,h)}(t.endAt)),a_(e,s,o,i,a,"F",c,u)}function VR(n,e){const t=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return $()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function M_(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Js(e.unaryFilter.field);return le.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=Js(e.unaryFilter.field);return le.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Js(e.unaryFilter.field);return le.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Js(e.unaryFilter.field);return le.create(i,"!=",{nullValue:"NULL_VALUE"});default:return $()}}(n):n.fieldFilter!==void 0?function(e){return le.create(Js(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return $()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return be.create(e.compositeFilter.filters.map(t=>M_(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return $()}}(e.compositeFilter.op))}(n):$()}function $R(n){return NR[n]}function BR(n){return xR[n]}function qR(n){return PR[n]}function Ys(n){return{fieldPath:n.canonicalString()}}function Js(n){return je.fromServerFormat(n.fieldPath)}function L_(n){return n instanceof le?function(e){if(e.op==="=="){if(Wm(e.value))return{unaryFilter:{field:Ys(e.field),op:"IS_NAN"}};if(Gm(e.value))return{unaryFilter:{field:Ys(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Wm(e.value))return{unaryFilter:{field:Ys(e.field),op:"IS_NOT_NAN"}};if(Gm(e.value))return{unaryFilter:{field:Ys(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ys(e.field),op:BR(e.op),value:e.value}}}(n):n instanceof be?function(e){const t=e.getFilters().map(r=>L_(r));return t.length===1?t[0]:{compositeFilter:{op:qR(e.op),filters:t}}}(n):$()}function jR(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function F_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wr{constructor(e,t,r,s,i=G.min(),o=G.min(),a=Xe.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new wr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new wr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(e){this.se=e}}function zR(n,e){let t;if(e.document)t=N_(n.se,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=O.fromSegments(e.noDocument.path),s=As(e.noDocument.readTime);t=De.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return $();{const r=O.fromSegments(e.unknownDocument.path),s=As(e.unknownDocument.version);t=De.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(r){const s=new Me(r[0],r[1]);return G.fromTimestamp(s)}(e.readTime)),t}function ug(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:eu(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,i){return{name:na(s,i.key),fields:i.data.value.mapValue.fields,updateTime:Ii(s,i.version.toTimestamp()),createTime:Ii(s,i.createTime.toTimestamp())}}(n.se,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Ss(e.version)};else{if(!e.isUnknownDocument())return $();r.unknownDocument={path:t.path.toArray(),version:Ss(e.version)}}return r}function eu(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Ss(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function As(n){const e=new Me(n.seconds,n.nanoseconds);return G.fromTimestamp(e)}function Zr(n,e){const t=(e.baseMutations||[]).map(i=>Kh(n.se,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Kh(n.se,i)),s=Me.fromMillis(e.localWriteTimeMs);return new df(e.batchId,s,t,r)}function go(n){const e=As(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?As(n.lastLimboFreeSnapshotVersion):G.min();let r;var s;return n.query.documents!==void 0?(K((s=n.query).documents.length===1),r=qt(Vi(R_(s.documents[0])))):r=function(i){return qt(O_(i))}(n.query),new wr(r,n.targetId,0,n.lastListenSequenceNumber,e,t,Xe.fromBase64String(n.resumeToken))}function V_(n,e){const t=Ss(e.snapshotVersion),r=Ss(e.lastLimboFreeSnapshotVersion);let s;s=Jc(e.target)?x_(n.se,e.target):P_(n.se,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:bs(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function yf(n){const e=O_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?Zc(e,e.limit,"L"):e}function Ql(n,e){return new pf(e.largestBatchId,Kh(n.se,e.overlayMutation))}function lg(n,e){const t=e.path.lastSegment();return[n,Nt(e.path.popLast()),t]}function hg(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Ss(r.readTime),documentKey:Nt(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KR{getBundleMetadata(e,t){return dg(e).get(t).next(r=>{if(r)return{id:(s=r).bundleId,createTime:As(s.createTime),version:s.version};var s})}saveBundleMetadata(e,t){return dg(e).put({bundleId:(r=t).id,createTime:Ss(ze(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return fg(e).get(t).next(r=>{if(r)return{name:(s=r).name,query:yf(s.bundledQuery),readTime:As(s.readTime)};var s})}saveNamedQuery(e,t){return fg(e).put(function(r){return{name:r.name,readTime:Ss(ze(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function dg(n){return ct(n,"bundles")}function fg(n){return ct(n,"namedQueries")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ju{constructor(e,t){this.serializer=e,this.userId=t}static ie(e,t){const r=t.uid||"";return new Ju(e,r)}getOverlay(e,t){return to(e).get(lg(this.userId,t)).next(r=>r?Ql(this.serializer,r):null)}getOverlays(e,t){const r=Rn();return y.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const a=new pf(t,o);s.push(this.re(e,a))}),y.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(Nt(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(to(e).J("collectionPathOverlayIndex",a))}),y.waitFor(i)}getOverlaysForCollection(e,t,r){const s=Rn(),i=Nt(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return to(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Ql(this.serializer,c);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=Rn();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return to(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Ql(this.serializer,u);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}re(e,t){return to(e).put(function(r,s,i){const[o,a,c]=lg(s,i.mutation.key);return{userId:s,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:sa(r.se,i.mutation)}}(this.serializer,this.userId,t))}}function to(n){return ct(n,"documentOverlays")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(Ue(e.integerValue));else if("doubleValue"in e){const r=Ue(e.doubleValue);isNaN(r)?this.ae(t,13):(this.ae(t,15),Xo(r)?t.he(0):t.he(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ae(t,20),typeof r=="string"?t.le(r):(t.le(`${r.seconds||""}`),t.he(r.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(ws(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ae(t,45),t.he(r.latitude||0),t.he(r.longitude||0)}else"mapValue"in e?Xw(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):$()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const r=e.fields||{};this.ae(t,55);for(const s of Object.keys(r))this.fe(s,t),this.ue(r[s],t)}ge(e,t){const r=e.values||[];this.ae(t,50);for(const s of r)this.ue(s,t)}_e(e,t){this.ae(t,37),O.fromName(e).path.forEach(r=>{this.ae(t,60),this.ye(r,t)})}ae(e,t){e.he(t)}de(e){e.he(2)}}es.pe=new es;function GR(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function pg(n){const e=64-function(t){let r=0;for(let s=0;s<8;++s){const i=GR(255&t[s]);if(r+=i,i!==8)break}return r}(n);return Math.ceil(e/8)}class WR{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ie(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Te(r.value),r=t.next();this.Ee()}Ae(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Re(r.value),r=t.next();this.ve()}be(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Te(r);else if(r<2048)this.Te(960|r>>>6),this.Te(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Te(480|r>>>12),this.Te(128|63&r>>>6),this.Te(128|63&r);else{const s=t.codePointAt(0);this.Te(240|s>>>18),this.Te(128|63&s>>>12),this.Te(128|63&s>>>6),this.Te(128|63&s)}}this.Ee()}Pe(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Re(r);else if(r<2048)this.Re(960|r>>>6),this.Re(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Re(480|r>>>12),this.Re(128|63&r>>>6),this.Re(128|63&r);else{const s=t.codePointAt(0);this.Re(240|s>>>18),this.Re(128|63&s>>>12),this.Re(128|63&s>>>6),this.Re(128|63&s)}}this.ve()}Ve(e){const t=this.Se(e),r=pg(t);this.De(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Ce(e){const t=this.Se(e),r=pg(t);this.De(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}xe(){this.Ne(255),this.Ne(255)}ke(){this.Oe(255),this.Oe(255)}reset(){this.position=0}seed(e){this.De(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Se(e){const t=function(s){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,s,!1),new Uint8Array(i.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Te(e){const t=255&e;t===0?(this.Ne(0),this.Ne(255)):t===255?(this.Ne(255),this.Ne(0)):this.Ne(t)}Re(e){const t=255&e;t===0?(this.Oe(0),this.Oe(255)):t===255?(this.Oe(255),this.Oe(0)):this.Oe(e)}Ee(){this.Ne(0),this.Ne(1)}ve(){this.Oe(0),this.Oe(1)}Ne(e){this.De(1),this.buffer[this.position++]=e}Oe(e){this.De(1),this.buffer[this.position++]=~e}De(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class HR{constructor(e){this.Me=e}we(e){this.Me.Ie(e)}le(e){this.Me.be(e)}he(e){this.Me.Ve(e)}ce(){this.Me.xe()}}class QR{constructor(e){this.Me=e}we(e){this.Me.Ae(e)}le(e){this.Me.Pe(e)}he(e){this.Me.Ce(e)}ce(){this.Me.ke()}}class no{constructor(){this.Me=new WR,this.Fe=new HR(this.Me),this.Be=new QR(this.Me)}seed(e){this.Me.seed(e)}Le(e){return e===0?this.Fe:this.Be}$e(){return this.Me.$e()}reset(){this.Me.reset()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}qe(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new ts(this.indexId,this.documentKey,this.arrayValue,r)}}function ir(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=mg(n.arrayValue,e.arrayValue),t!==0?t:(t=mg(n.directionalValue,e.directionalValue),t!==0?t:O.comparator(n.documentKey,e.documentKey)))}function mg(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YR{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.Ke=[];for(const t of e.filters){const r=t;r.isInequality()?this.Ge=r:this.Ke.push(r)}}Qe(e){K(e.collectionGroup===this.collectionId);const t=Mh(e);if(t!==void 0&&!this.ze(t))return!1;const r=Hr(e);let s=0,i=0;for(;s<r.length&&this.ze(r[s]);++s);if(s===r.length)return!0;if(this.Ge!==void 0){const o=r[s];if(!this.je(this.Ge,o)||!this.We(this.Ue[i++],o))return!1;++s}for(;s<r.length;++s){const o=r[s];if(i>=this.Ue.length||!this.We(this.Ue[i++],o))return!1}return!0}ze(e){for(const t of this.Ke)if(this.je(t,e))return!0;return!1}je(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $_(n){var e,t;if(K(n instanceof le||n instanceof be),n instanceof le){if(n instanceof o_){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>le.create(n.field,"==",i)))||[];return be.create(s,"or")}return n}const r=n.filters.map(s=>$_(s));return be.create(r,n.op)}function JR(n){if(n.getFilters().length===0)return[];const e=Hh($_(n));return K(B_(e)),Gh(e)||Wh(e)?[e]:e.getFilters()}function Gh(n){return n instanceof le}function Wh(n){return n instanceof be&&cf(n)}function B_(n){return Gh(n)||Wh(n)||function(e){if(e instanceof be&&Vh(e)){for(const t of e.getFilters())if(!Gh(t)&&!Wh(t))return!1;return!0}return!1}(n)}function Hh(n){if(K(n instanceof le||n instanceof be),n instanceof le)return n;if(n.filters.length===1)return Hh(n.filters[0]);const e=n.filters.map(r=>Hh(r));let t=be.create(e,n.op);return t=tu(t),B_(t)?t:(K(t instanceof be),K(vi(t)),K(t.filters.length>1),t.filters.reduce((r,s)=>vf(r,s)))}function vf(n,e){let t;return K(n instanceof le||n instanceof be),K(e instanceof le||e instanceof be),t=n instanceof le?e instanceof le?function(r,s){return be.create([r,s],"and")}(n,e):gg(n,e):e instanceof le?gg(e,n):function(r,s){if(K(r.filters.length>0&&s.filters.length>0),vi(r)&&vi(s))return r_(r,s.getFilters());const i=Vh(r)?r:s,o=Vh(r)?s:r,a=i.filters.map(c=>vf(c,o));return be.create(a,"or")}(n,e),tu(t)}function gg(n,e){if(vi(e))return r_(e,n.getFilters());{const t=e.filters.map(r=>vf(n,r));return be.create(t,"or")}}function tu(n){if(K(n instanceof le||n instanceof be),n instanceof le)return n;const e=n.getFilters();if(e.length===1)return tu(e[0]);if(t_(n))return n;const t=e.map(s=>tu(s)),r=[];return t.forEach(s=>{s instanceof le?r.push(s):s instanceof be&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:be.create(r,n.op)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(){this.He=new wf}addToCollectionParentIndex(e,t){return this.He.add(t),y.resolve()}getCollectionParents(e,t){return y.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return y.resolve()}deleteFieldIndex(e,t){return y.resolve()}getDocumentsMatchingTarget(e,t){return y.resolve(null)}getIndexType(e,t){return y.resolve(0)}getFieldIndexes(e,t){return y.resolve([])}getNextCollectionGroupToUpdate(e){return y.resolve(null)}getMinOffset(e,t){return y.resolve(Ht.min())}getMinOffsetFromCollectionGroup(e,t){return y.resolve(Ht.min())}updateCollectionGroup(e,t,r){return y.resolve()}updateIndexEntries(e,t){return y.resolve()}}class wf{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Se(de.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Se(de.comparator)).toArray()}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ac=new Uint8Array(0);class ZR{constructor(e,t){this.user=e,this.databaseId=t,this.Je=new wf,this.Ye=new Vr(r=>bs(r),(r,s)=>ka(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Je.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.Je.add(t)});const i={collectionId:r,parent:Nt(s)};return yg(e).put(i)}return y.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[Vw(t),""],!1,!0);return yg(e).j(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(kn(o.parent))}return r})}addFieldIndex(e,t){const r=cc(e),s=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=so(e);return i.next(a=>{o.put(hg(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=cc(e),s=so(e),i=ro(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=ro(e);let s=!0;const i=new Map;return y.forEach(this.Ze(t),o=>this.Xe(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=se();const a=[];return y.forEach(i,(c,u)=>{var l;A("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(S=>`${S.fieldPath}:${S.kind}`).join(",")}`} to execute ${bs(t)}`);const h=function(S,q){const X=Mh(q);if(X===void 0)return null;for(const te of Xc(S,X.fieldPath))switch(te.op){case"array-contains-any":return te.value.arrayValue.values||[];case"array-contains":return[te.value]}return null}(u,c),d=function(S,q){const X=new Map;for(const te of Hr(q))for(const ye of Xc(S,te.fieldPath))switch(ye.op){case"==":case"in":X.set(te.fieldPath.canonicalString(),ye.value);break;case"not-in":case"!=":return X.set(te.fieldPath.canonicalString(),ye.value),Array.from(X.values())}return null}(u,c),p=function(S,q){const X=[];let te=!0;for(const ye of Hr(q)){const xe=ye.kind===0?Xm(S,ye.fieldPath,S.startAt):Zm(S,ye.fieldPath,S.startAt);X.push(xe.value),te&&(te=xe.inclusive)}return new Dr(X,te)}(u,c),g=function(S,q){const X=[];let te=!0;for(const ye of Hr(q)){const xe=ye.kind===0?Zm(S,ye.fieldPath,S.endAt):Xm(S,ye.fieldPath,S.endAt);X.push(xe.value),te&&(te=xe.inclusive)}return new Dr(X,te)}(u,c),w=this.tn(c,u,p),k=this.tn(c,u,g),D=this.en(c,u,d),N=this.nn(c.indexId,h,w,p.inclusive,k,g.inclusive,D);return y.forEach(N,S=>r.H(S,t.limit).next(q=>{q.forEach(X=>{const te=O.fromSegments(X.documentKey);o.has(te)||(o=o.add(te),a.push(te))})}))}).next(()=>a)}return y.resolve(null)})}Ze(e){let t=this.Ye.get(e);return t||(e.filters.length===0?t=[e]:t=JR(be.create(e.filters,"and")).map(r=>Bh(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Ye.set(e,t),t)}nn(e,t,r,s,i,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,i.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.sn(t[h/u]):ac,p=this.rn(e,d,r[h%u],s),g=this.on(e,d,i[h%u],o),w=a.map(k=>this.rn(e,d,k,!0));l.push(...this.createRange(p,g,w))}return l}rn(e,t,r,s){const i=new ts(e,O.empty(),t,r);return s?i:i.qe()}on(e,t,r,s){const i=new ts(e,O.empty(),t,r);return s?i.qe():i}Xe(e,t){const r=new YR(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.Qe(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const s=this.Ze(t);return y.forEach(s,i=>this.Xe(e,i).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new Se(je.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(i)&&(r=1):r=0})).next(()=>function(i){return i.limit!==null}(t)&&s.length>1&&r===2?1:r)}un(e,t){const r=new no;for(const s of Hr(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Le(s.kind);es.pe.oe(i,o)}return r.$e()}sn(e){const t=new no;return es.pe.oe(e,t.Le(0)),t.$e()}cn(e,t){const r=new no;return es.pe.oe(Is(this.databaseId,t),r.Le(function(s){const i=Hr(s);return i.length===0?0:i[i.length-1].kind}(e))),r.$e()}en(e,t,r){if(r===null)return[];let s=[];s.push(new no);let i=0;for(const o of Hr(e)){const a=r[i++];for(const c of s)if(this.an(t,o.fieldPath)&&ta(a))s=this.hn(s,o,a);else{const u=c.Le(o.kind);es.pe.oe(a,u)}}return this.ln(s)}tn(e,t,r){return this.en(e,t,r.position)}ln(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].$e();return t}hn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new no;c.seed(a.$e()),es.pe.oe(o,c.Le(t.kind)),i.push(c)}return i}an(e,t){return!!e.filters.find(r=>r instanceof le&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=cc(e),s=so(e);return(t?r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.j()).next(i=>{const o=[];return y.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Yc(l.sequenceNumber,new Ht(As(l.readTime),new O(kn(l.documentKey)),l.largestBatchId)):Yc.empty(),d=u.fields.map(([p,g])=>new Mk(je.fromServerFormat(p),g));return new $w(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:re(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=cc(e),i=so(e);return this.fn(e).next(o=>s.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>y.forEach(a,c=>i.put(hg(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return y.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?y.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),y.forEach(a,c=>this.dn(e,s,c).next(u=>{const l=this.wn(i,c);return u.isEqual(l)?y.resolve():this._n(e,i,c,u,l)}))))})}mn(e,t,r,s){return ro(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.cn(r,t.key),documentKey:t.key.path.toArray()})}gn(e,t,r,s){return ro(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.cn(r,t.key),t.key.path.toArray()])}dn(e,t,r){const s=ro(e);let i=new Se(ir);return s.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.cn(r,t)])},(o,a)=>{i=i.add(new ts(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}wn(e,t){let r=new Se(ir);const s=this.un(t,e);if(s==null)return r;const i=Mh(t);if(i!=null){const o=e.data.field(i.fieldPath);if(ta(o))for(const a of o.arrayValue.values||[])r=r.add(new ts(t.indexId,e.key,this.sn(a),s))}else r=r.add(new ts(t.indexId,e.key,ac,s));return r}_n(e,t,r,s,i){A("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),p=c.getIterator();let g=Gs(d),w=Gs(p);for(;g||w;){let k=!1,D=!1;if(g&&w){const N=u(g,w);N<0?D=!0:N>0&&(k=!0)}else g!=null?D=!0:k=!0;k?(l(w),w=Gs(p)):D?(h(g),g=Gs(d)):(g=Gs(d),w=Gs(p))}}(s,i,ir,a=>{o.push(this.mn(e,t,r,a))},a=>{o.push(this.gn(e,t,r,a))}),y.waitFor(o)}fn(e){let t=1;return so(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>ir(o,a)).filter((o,a,c)=>!a||ir(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=ir(o,e),c=ir(o,t);if(a===0)s[0]=e.qe();else if(a>0&&c<0)s.push(o),s.push(o.qe());else if(c>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.yn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,ac,[]],c=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,ac,[]];i.push(IDBKeyRange.bound(a,c))}return i}yn(e,t){return ir(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(vg)}getMinOffset(e,t){return y.mapArray(this.Ze(t),r=>this.Xe(e,r).next(s=>s||$())).next(vg)}}function yg(n){return ct(n,"collectionParents")}function ro(n){return ct(n,"indexEntries")}function cc(n){return ct(n,"indexConfiguration")}function so(n){return ct(n,"indexState")}function vg(n){K(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;sf(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new Ht(e.readTime,e.documentKey,t)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Lt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Lt(e,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function q_(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));i.push(c.next(()=>{K(a===1)}));const u=[];for(const l of t.mutations){const h=Gw(e,l.key.path,t.batchId);i.push(s.delete(h)),u.push(l.key)}return y.waitFor(i).next(()=>u)}function nu(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw $();e=n.noDocument}return JSON.stringify(e).length}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Lt.DEFAULT_COLLECTION_PERCENTILE=10,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Lt.DEFAULT=new Lt(41943040,Lt.DEFAULT_COLLECTION_PERCENTILE,Lt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Lt.DISABLED=new Lt(-1,0,0);class Xu{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.pn={}}static ie(e,t,r,s){K(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new Xu(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return or(e).Z({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=Xs(e),o=or(e);return o.add({}).next(a=>{K(typeof a=="number");const c=new df(a,t,r,s),u=function(d,p,g){const w=g.baseMutations.map(D=>sa(d.se,D)),k=g.mutations.map(D=>sa(d.se,D));return{userId:p,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:w,mutations:k}}(this.serializer,this.userId,c),l=[];let h=new Se((d,p)=>re(d.canonicalString(),p.canonicalString()));for(const d of s){const p=Gw(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(i.put(p,Bk))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.pn[a]=c.keys()}),y.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return or(e).get(t).next(r=>r?(K(r.userId===this.userId),Zr(this.serializer,r)):null)}In(e,t){return this.pn[t]?y.resolve(this.pn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.pn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return or(e).Z({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(K(a.batchId>=r),i=Zr(this.serializer,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return or(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return or(e).j("userMutationsIndex",t).next(r=>r.map(s=>Zr(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=wc(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return Xs(e).Z({range:s},(o,a,c)=>{const[u,l,h]=o,d=kn(l);if(u===this.userId&&t.path.isEqual(d))return or(e).get(h).next(p=>{if(!p)throw $();K(p.userId===this.userId),i.push(Zr(this.serializer,p))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Se(re);const s=[];return t.forEach(i=>{const o=wc(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=Xs(e).Z({range:a},(u,l,h)=>{const[d,p,g]=u,w=kn(p);d===this.userId&&i.path.isEqual(w)?r=r.add(g):h.done()});s.push(c)}),y.waitFor(s).next(()=>this.Tn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=wc(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new Se(re);return Xs(e).Z({range:o},(c,u,l)=>{const[h,d,p]=c,g=kn(d);h===this.userId&&r.isPrefixOf(g)?g.length===s&&(a=a.add(p)):l.done()}).next(()=>this.Tn(e,a))}Tn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(or(e).get(i).next(o=>{if(o===null)throw $();K(o.userId===this.userId),r.push(Zr(this.serializer,o))}))}),y.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return q_(e.at,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.En(t.batchId)}),y.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}En(e){delete this.pn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return y.resolve();const r=IDBKeyRange.lowerBound([this.userId]),s=[];return Xs(e).Z({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=kn(i[1]);s.push(c)}else a.done()}).next(()=>{K(s.length===0)})})}containsKey(e,t){return j_(e,this.userId,t)}An(e){return z_(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function j_(n,e,t){const r=wc(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Xs(n).Z({range:i,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===s&&(o=!0),u.done()}).next(()=>o)}function or(n){return ct(n,"mutations")}function Xs(n){return ct(n,"documentMutations")}function z_(n){return ct(n,"mutationQueues")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cs{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Cs(0)}static bn(){return new Cs(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eD{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Pn(e).next(t=>{const r=new Cs(t.highestTargetId);return t.highestTargetId=r.next(),this.Vn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Pn(e).next(t=>G.fromTimestamp(new Me(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Pn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Pn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Vn(e,s)))}addTargetData(e,t){return this.Sn(e,t).next(()=>this.Pn(e).next(r=>(r.targetCount+=1,this.Dn(t,r),this.Vn(e,r))))}updateTargetData(e,t){return this.Sn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>Ws(e).delete(t.targetId)).next(()=>this.Pn(e)).next(r=>(K(r.targetCount>0),r.targetCount-=1,this.Vn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return Ws(e).Z((o,a)=>{const c=go(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>y.waitFor(i)).next(()=>s)}forEachTarget(e,t){return Ws(e).Z((r,s)=>{const i=go(s);t(i)})}Pn(e){return _g(e).get("targetGlobalKey").next(t=>(K(t!==null),t))}Vn(e,t){return _g(e).put("targetGlobalKey",t)}Sn(e,t){return Ws(e).put(V_(this.serializer,t))}Dn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Pn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=bs(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return Ws(e).Z({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const u=go(a);ka(t,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=hr(e);return t.forEach(o=>{const a=Nt(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),y.waitFor(s)}removeMatchingKeys(e,t,r){const s=hr(e);return y.forEach(t,i=>{const o=Nt(i.path);return y.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=hr(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=hr(e);let i=se();return s.Z({range:r,Y:!0},(o,a,c)=>{const u=kn(o[1]),l=new O(u);i=i.add(l)}).next(()=>i)}containsKey(e,t){const r=Nt(t.path),s=IDBKeyRange.bound([r],[Vw(r)],!1,!0);let i=0;return hr(e).Z({index:"documentTargetsIndex",Y:!0,range:s},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}ne(e,t){return Ws(e).get(t).next(r=>r?go(r):null)}}function Ws(n){return ct(n,"targets")}function _g(n){return ct(n,"targetGlobal")}function hr(n){return ct(n,"targetDocuments")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ig([n,e],[t,r]){const s=re(n,t);return s===0?re(e,r):s}class tD{constructor(e){this.Cn=e,this.buffer=new Se(Ig),this.xn=0}Nn(){return++this.xn}kn(e){const t=[e,this.Nn()];if(this.buffer.size<this.Cn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();Ig(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class nD{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.On=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.$n(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return this.On!==null}$n(e){A("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Ur(t)?A("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Fr(t)}await this.$n(3e5)})}}class rD{constructor(e,t){this.Mn=e,this.params=t}calculateTargetCount(e,t){return this.Mn.Fn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return y.resolve(Ut.ct);const r=new tD(t);return this.Mn.forEachTarget(e,s=>r.kn(s.sequenceNumber)).next(()=>this.Mn.Bn(e,s=>r.kn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Mn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Mn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(A("LruGarbageCollector","Garbage collection skipped; disabled"),y.resolve(wg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(A("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),wg):this.Ln(e,t))}getCacheSize(e){return this.Mn.getCacheSize(e)}Ln(e,t){let r,s,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(A("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Oh()<=me.DEBUG&&A("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-l}ms
	Determined least recently used ${s} in `+(a-o)+`ms
	Removed ${i} targets in `+(c-a)+`ms
	Removed ${h} documents in `+(u-c)+`ms
Total Duration: ${u-l}ms`),y.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:h})))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sD{constructor(e,t){this.db=e,this.garbageCollector=function(r,s){return new rD(r,s)}(this,t)}Fn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}qn(e){let t=0;return this.Bn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Bn(e,t){return this.Un(e,(r,s)=>t(s))}addReference(e,t,r){return uc(e,r)}removeReference(e,t,r){return uc(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return uc(e,t)}Kn(e,t){return function(r,s){let i=!1;return z_(r).X(o=>j_(r,o,s).next(a=>(a&&(i=!0),y.resolve(!a)))).next(()=>i)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Un(e,(o,a)=>{if(a<=t){const c=this.Kn(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,G.min()),hr(e).delete([0,Nt(o.path)])))});s.push(c)}}).next(()=>y.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return uc(e,t)}Un(e,t){const r=hr(e);let s,i=Ut.ct;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==Ut.ct&&t(new O(kn(s)),i),i=u,s=c):i=Ut.ct}).next(()=>{i!==Ut.ct&&t(new O(kn(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function uc(n,e){return hr(n).put(function(t,r){return{targetId:0,path:Nt(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(){this.changes=new Vr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,De.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?y.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iD{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return Kr(e).put(r)}removeEntry(e,t,r){return Kr(e).delete(function(s,i){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],eu(i),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Gn(e,r)))}getEntry(e,t){let r=De.newInvalidDocument(t);return Kr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(io(t))},(s,i)=>{r=this.Qn(t,i)}).next(()=>r)}zn(e,t){let r={size:0,document:De.newInvalidDocument(t)};return Kr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(io(t))},(s,i)=>{r={document:this.Qn(t,i),size:nu(i)}}).next(()=>r)}getEntries(e,t){let r=$t();return this.jn(e,t,(s,i)=>{const o=this.Qn(s,i);r=r.insert(s,o)}).next(()=>r)}Wn(e,t){let r=$t(),s=new $e(O.comparator);return this.jn(e,t,(i,o)=>{const a=this.Qn(i,o);r=r.insert(i,a),s=s.insert(i,nu(o))}).next(()=>({documents:r,Hn:s}))}jn(e,t,r){if(t.isEmpty())return y.resolve();let s=new Se(Tg);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(io(s.first()),io(s.last())),o=s.getIterator();let a=o.getNext();return Kr(e).Z({index:"documentKeyIndex",range:i},(c,u,l)=>{const h=O.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&Tg(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.G(io(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s){const i=t.path,o=[i.popLast().toArray(),i.lastSegment(),eu(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return Kr(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=$t();for(const l of c){const h=this.Qn(O.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(Da(t,h)||s.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,t,r,s){let i=$t();const o=Eg(t,r),a=Eg(t,Ht.max());return Kr(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.Qn(O.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(h.key,h),i.size===s&&l.done()}).next(()=>i)}newChangeBuffer(e){return new oD(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return bg(e).get("remoteDocumentGlobalKey").next(t=>(K(!!t),t))}Gn(e,t){return bg(e).put("remoteDocumentGlobalKey",t)}Qn(e,t){if(t){const r=zR(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(G.min())))return r}return De.newInvalidDocument(e)}}function G_(n){return new iD(n)}class oD extends K_{constructor(e,t){super(),this.Jn=e,this.trackRemovals=t,this.Yn=new Vr(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new Se((i,o)=>re(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Yn.get(i);if(t.push(this.Jn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=ug(this.Jn.serializer,o);s=s.add(i.path.popLast());const u=nu(c);r+=u-a.size,t.push(this.Jn.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=ug(this.Jn.serializer,o.convertToNoDocument(G.min()));t.push(this.Jn.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this.Jn.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Jn.updateMetadata(e,r)),y.waitFor(t)}getFromCache(e,t){return this.Jn.zn(e,t).next(r=>(this.Yn.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Jn.Wn(e,t).next(({documents:r,Hn:s})=>(s.forEach((i,o)=>{this.Yn.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function bg(n){return ct(n,"remoteDocumentGlobal")}function Kr(n){return ct(n,"remoteDocumentsV14")}function io(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function Eg(n,e){const t=e.documentKey.path.toArray();return[n,eu(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function Tg(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=re(t[i],r[i]),s)return s;return s=re(t.length,r.length),s||(s=re(t[t.length-2],r[r.length-2]),s||re(t[t.length-1],r[r.length-1]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class W_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&ko(r.mutation,s,Vt.empty(),Me.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,t,r=se()){const s=Rn();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=mo();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=Rn();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,se()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,s){let i=$t();const o=Co(),a=Co();return t.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof Zn)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),ko(l.mutation,u,l.mutation.getFieldMask(),Me.now())):o.set(u.key,Vt.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new aD(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=Co();let s=new $e((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||Vt.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||se()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=f_();l.forEach(d=>{if(!i.has(d)){const p=I_(t.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return y.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(s){return O.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):lf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):y.resolve(Rn());let a=-1,c=i;return o.next(u=>y.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?y.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,se())).next(l=>({batchId:a,changes:d_(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new O(t)).next(r=>{let s=mo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const s=t.collectionGroup;let i=mo();return this.indexManager.getCollectionParents(e,s).next(o=>y.forEach(o,a=>{const c=function(u,l){return new Xn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s))).next(i=>{s.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,De.newInvalidDocument(u)))});let o=mo();return i.forEach((a,c)=>{const u=s.get(a);u!==void 0&&ko(u.mutation,c,Vt.empty(),Me.now()),Da(t,c)&&(o=o.insert(a,c))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cD{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return y.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var r;return this.Zn.set(t.id,{id:(r=t).id,version:r.version,createTime:ze(r.createTime)}),y.resolve()}getNamedQuery(e,t){return y.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(r){return{name:r.name,query:yf(r.bundledQuery),readTime:ze(r.readTime)}}(t)),y.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uD{constructor(){this.overlays=new $e(O.comparator),this.ts=new Map}getOverlay(e,t){return y.resolve(this.overlays.get(t))}getOverlays(e,t){const r=Rn();return y.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.re(e,t,i)}),y.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.ts.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(r)),y.resolve()}getOverlaysForCollection(e,t,r){const s=Rn(),i=t.length+1,o=new O(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return y.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new $e((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=Rn(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=Rn(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return y.resolve(a)}re(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.ts.get(s.largestBatchId).delete(r.key);this.ts.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new pf(t,r));let i=this.ts.get(t);i===void 0&&(i=se(),this.ts.set(t,i)),this.ts.set(t,i.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _f{constructor(){this.es=new Se(et.ns),this.ss=new Se(et.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){const r=new et(e,t);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.us(new et(e,t))}cs(e,t){e.forEach(r=>this.removeReference(r,t))}hs(e){const t=new O(new de([])),r=new et(t,e),s=new et(t,e+1),i=[];return this.ss.forEachInRange([r,s],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new O(new de([])),r=new et(t,e),s=new et(t,e+1);let i=se();return this.ss.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new et(e,0),r=this.es.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class et{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return O.comparator(e.key,t.key)||re(e.ds,t.ds)}static rs(e,t){return re(e.ds,t.ds)||O.comparator(e.key,t.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new Se(et.ns)}checkEmpty(e){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new df(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this._s=this._s.add(new et(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,t){return y.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ys(r),i=s<0?0:s;return y.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new et(t,0),s=new et(t,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([r,s],o=>{const a=this.gs(o.ds);i.push(a)}),y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Se(re);return t.forEach(s=>{const i=new et(s,0),o=new et(s,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{r=r.add(a.ds)})}),y.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;O.isDocumentKey(i)||(i=i.child(""));const o=new et(new O(i),0);let a=new Se(re);return this._s.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.ds)),!0)},o),y.resolve(this.ps(a))}ps(e){const t=[];return e.forEach(r=>{const s=this.gs(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){K(this.Is(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return y.forEach(t.mutations,s=>{const i=new et(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,t){const r=new et(t,0),s=this._s.firstAfterOrEqual(r);return y.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,y.resolve()}Is(e,t){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hD{constructor(e){this.Ts=e,this.docs=new $e(O.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return y.resolve(r?r.document.mutableCopy():De.newInvalidDocument(t))}getEntries(e,t){let r=$t();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():De.newInvalidDocument(s))}),y.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=$t();const o=t.path,a=new O(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||sf(qw(l),r)<=0||(s.has(l.key)||Da(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return y.resolve(i)}getAllFromCollectionGroup(e,t,r,s){$()}Es(e,t){return y.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new dD(this)}getSize(e){return y.resolve(this.size)}}class dD extends K_{constructor(e){super(),this.Jn=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Jn.addEntry(e,s)):this.Jn.removeEntry(r)}),y.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fD{constructor(e){this.persistence=e,this.As=new Vr(t=>bs(t),ka),this.lastRemoteSnapshotVersion=G.min(),this.highestTargetId=0,this.Rs=0,this.vs=new _f,this.targetCount=0,this.bs=Cs.vn()}forEachTarget(e,t){return this.As.forEach((r,s)=>t(s)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Rs&&(this.Rs=t),y.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new Cs(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,y.resolve()}updateTargetData(e,t){return this.Sn(t),y.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),y.waitFor(i).next(()=>s)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,t){const r=this.As.get(t)||null;return y.resolve(r)}addMatchingKeys(e,t,r){return this.vs.os(t,r),y.resolve()}removeMatchingKeys(e,t,r){this.vs.cs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),y.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),y.resolve()}getMatchingKeysForTargetId(e,t){const r=this.vs.fs(t);return y.resolve(r)}containsKey(e,t){return y.resolve(this.vs.containsKey(t))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new Ut(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new fD(this),this.indexManager=new XR,this.remoteDocumentCache=function(r){return new hD(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new U_(t),this.xs=new cD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new uD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Ps[e.toKey()];return r||(r=new lD(t,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,r){A("MemoryPersistence","Starting transaction:",e);const s=new pD(this.Vs.next());return this.referenceDelegate.Ns(),r(s).next(i=>this.referenceDelegate.ks(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Os(e,t){return y.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,t)))}}class pD extends zw{constructor(e){super(),this.currentSequenceNumber=e}}class Zu{constructor(e){this.persistence=e,this.$s=new _f,this.Ms=null}static Fs(e){return new Zu(e)}get Bs(){if(this.Ms)return this.Ms;throw $()}addReference(e,t,r){return this.$s.addReference(r,t),this.Bs.delete(r.toString()),y.resolve()}removeReference(e,t,r){return this.$s.removeReference(r,t),this.Bs.add(r.toString()),y.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),y.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach(s=>this.Bs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Bs.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Bs,r=>{const s=O.fromPath(r);return this.Ls(e,s).next(i=>{i||t.removeEntry(s,G.min())})}).next(()=>(this.Ms=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ls(e,t).next(r=>{r?this.Bs.delete(t.toString()):this.Bs.add(t.toString())})}Cs(e){return 0}Ls(e,t){return y.or([()=>y.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mD{constructor(e){this.serializer=e}M(e,t,r,s){const i=new Gu("createOrUpgrade",t);r<1&&s>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",qm,{unique:!0}),a.createObjectStore("documentMutations")}(e),Sg(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=y.resolve();return r<3&&s>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),Sg(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:G.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",qm,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return y.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.qs(i))),r<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Us(i)))),r<7&&s>=7&&(o=o.next(()=>this.Ks(i))),r<8&&s>=8&&(o=o.next(()=>this.Gs(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.Qs(i))),r<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:Zk});c.createIndex("collectionPathOverlayIndex",eR,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",tR,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:qk});c.createIndex("documentKeyIndex",jk),c.createIndex("collectionGroupIndex",zk)}(e)).next(()=>this.zs(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.js(e,i))),r<15&&s>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:Qk}).createIndex("sequenceNumberIndex",Yk,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:Jk}).createIndex("documentKeyIndex",Xk,{unique:!1})}(e))),o}Us(e){let t=0;return e.store("remoteDocuments").Z((r,s)=>{t+=nu(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}qs(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.j().next(s=>y.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>y.forEach(a,c=>{K(c.userId===i.userId);const u=Zr(this.serializer,c);return q_(e,i.userId,u).next(()=>{})}))}))}Ks(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.Z((o,a)=>{const c=new de(o),u=function(l){return[0,Nt(l)]}(c);i.push(t.get(u).next(l=>l?y.resolve():(h=>t.put({targetId:0,path:Nt(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>y.waitFor(i))})}Gs(e,t){e.createObjectStore("collectionParents",{keyPath:Hk});const r=t.store("collectionParents"),s=new wf,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Nt(c)})}};return t.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new de(o);return i(c.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([o,a,c],u)=>{const l=kn(a);return i(l.popLast())}))}Qs(e){const t=e.store("targets");return t.Z((r,s)=>{const i=go(s),o=V_(this.serializer,i);return t.put(o)})}zs(e,t){const r=t.store("remoteDocuments"),s=[];return r.Z((i,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new O(de.fromString(u.document.name).popFirst(5)):u.noDocument?O.fromSegments(u.noDocument.path):u.unknownDocument?O.fromSegments(u.unknownDocument.path):$()).path.toArray();var u;/**
* @license
* Copyright 2017 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(l))}).next(()=>y.waitFor(s))}js(e,t){const r=t.store("mutations"),s=G_(this.serializer),i=new H_(Zu.Fs,this.serializer.se);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:se();Zr(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),y.forEach(a,(c,u)=>{const l=new tt(u),h=Ju.ie(this.serializer,l),d=i.getIndexManager(l),p=Xu.ie(l,this.serializer,d,i.referenceDelegate);return new W_(s,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new Lh(t,Ut.ct),c).next()})})}}function Sg(n){n.createObjectStore("targetDocuments",{keyPath:Gk}).createIndex("documentTargetsIndex",Wk,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Kk,{unique:!0}),n.createObjectStore("targetGlobal")}const Yl="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class If{constructor(e,t,r,s,i,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ws=i,this.window=o,this.document=a,this.Hs=u,this.Js=l,this.Ys=h,this.Vs=null,this.Ss=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.Xs=null,this.ti=null,this.ei=Number.NEGATIVE_INFINITY,this.ni=d=>Promise.resolve(),!If.D())throw new E(v.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new sD(this,s),this.si=t+"main",this.serializer=new U_(c),this.ii=new ln(this.si,this.Ys,new mD(this.serializer)),this.Ds=new eD(this.referenceDelegate,this.serializer),this.remoteDocumentCache=G_(this.serializer),this.xs=new KR,this.window&&this.window.localStorage?this.ri=this.window.localStorage:(this.ri=null,l===!1&&qe("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.oi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new E(v.FAILED_PRECONDITION,Yl);return this.ui(),this.ci(),this.ai(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ds.getHighestSequenceNumber(e))}).then(e=>{this.Vs=new Ut(e,this.Hs)}).then(()=>{this.Ss=!0}).catch(e=>(this.ii&&this.ii.close(),Promise.reject(e)))}hi(e){return this.ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ii.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ws.enqueueAndForget(async()=>{this.started&&await this.oi()}))}oi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>lc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.li(e).next(t=>{t||(this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)))})}).next(()=>this.fi(e)).next(t=>this.isPrimary&&!t?this.di(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(Ur(e))return A("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return A("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ws.enqueueRetryable(()=>this.ni(e)),this.isPrimary=e})}li(e){return oo(e).get("owner").next(t=>y.resolve(this._i(t)))}mi(e){return lc(e).delete(this.clientId)}async gi(){if(this.isPrimary&&!this.yi(this.ei,18e5)){this.ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=ct(t,"clientMetadata");return r.j().next(s=>{const i=this.pi(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return y.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.ri)for(const t of e)this.ri.removeItem(this.Ii(t.clientId))}}ai(){this.ti=this.Ws.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.oi().then(()=>this.gi()).then(()=>this.ai()))}_i(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.Js?y.resolve(!0):oo(e).get("owner").next(t=>{if(t!==null&&this.yi(t.leaseTimestampMs,5e3)&&!this.Ti(t.ownerId)){if(this._i(t)&&this.networkEnabled)return!0;if(!this._i(t)){if(!t.allowTabSynchronization)throw new E(v.FAILED_PRECONDITION,Yl);return!1}}return!(!this.networkEnabled||!this.inForeground)||lc(e).j().next(r=>this.pi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&A("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ss=!1,this.Ei(),this.ti&&(this.ti.cancel(),this.ti=null),this.Ai(),this.Ri(),await this.ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new Lh(e,Ut.ct);return this.di(t).next(()=>this.mi(t))}),this.ii.close(),this.vi()}pi(e,t){return e.filter(r=>this.yi(r.updateTimeMs,t)&&!this.Ti(r.clientId))}bi(){return this.runTransaction("getActiveClients","readonly",e=>lc(e).j().next(t=>this.pi(t,18e5).map(r=>r.clientId)))}get started(){return this.Ss}getMutationQueue(e,t){return Xu.ie(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new ZR(e,this.serializer.se.databaseId)}getDocumentOverlayCache(e){return Ju.ie(this.serializer,e)}getBundleCache(){return this.xs}runTransaction(e,t,r){A("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(o=this.Ys)===15?rR:o===14?Qw:o===13?Hw:o===12?nR:o===11?Ww:void $();var o;let a;return this.ii.runTransaction(e,s,i,c=>(a=new Lh(c,this.Vs?this.Vs.next():Ut.ct),t==="readwrite-primary"?this.li(a).next(u=>!!u||this.fi(a)).next(u=>{if(!u)throw qe(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)),new E(v.FAILED_PRECONDITION,jw);return r(a)}).next(u=>this.wi(a).next(()=>u)):this.Pi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Pi(e){return oo(e).get("owner").next(t=>{if(t!==null&&this.yi(t.leaseTimestampMs,5e3)&&!this.Ti(t.ownerId)&&!this._i(t)&&!(this.Js||this.allowTabSynchronization&&t.allowTabSynchronization))throw new E(v.FAILED_PRECONDITION,Yl)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return oo(e).put("owner",t)}static D(){return ln.D()}di(e){const t=oo(e);return t.get("owner").next(r=>this._i(r)?(A("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):y.resolve())}yi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(qe(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ui(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Xs=()=>{this.Ws.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.oi()))},this.document.addEventListener("visibilitychange",this.Xs),this.inForeground=this.document.visibilityState==="visible")}Ai(){this.Xs&&(this.document.removeEventListener("visibilitychange",this.Xs),this.Xs=null)}ci(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ei();const t=/(?:Version|Mobile)\/1[456]/;YS()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ws.enterRestrictedMode(!0),this.Ws.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}Ri(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ti(e){var t;try{const r=((t=this.ri)===null||t===void 0?void 0:t.getItem(this.Ii(e)))!==null;return A("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return qe("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ei(){if(this.ri)try{this.ri.setItem(this.Ii(this.clientId),String(Date.now()))}catch(e){qe("Failed to set zombie client id.",e)}}vi(){if(this.ri)try{this.ri.removeItem(this.Ii(this.clientId))}catch{}}Ii(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function oo(n){return ct(n,"owner")}function lc(n){return ct(n,"clientMetadata")}function bf(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Vi=r,this.Si=s}static Di(e,t){let r=se(),s=se();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new Ef(e,t.fromCache,r,s)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q_{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,r,s){return this.Ni(e,t).next(i=>i||this.ki(e,t,s,r)).next(i=>i||this.Oi(e,t))}Ni(e,t){if(eg(t))return y.resolve(null);let r=qt(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=Zc(t,null,"F"),r=qt(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.$i(t,a);return this.Mi(t,u,o,c.readTime)?this.Ni(e,Zc(t,null,"F")):this.Fi(e,u,t,c)}))})))}ki(e,t,r,s){return eg(t)||s.isEqual(G.min())?this.Oi(e,t):this.xi.getDocuments(e,r).next(i=>{const o=this.$i(t,i);return this.Mi(t,o,r,s)?this.Oi(e,t):(Oh()<=me.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),jh(t)),this.Fi(e,o,t,Bw(s,-1)))})}$i(e,t){let r=new Se(l_(e));return t.forEach((s,i)=>{Da(e,i)&&(r=r.add(i))}),r}Mi(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Oi(e,t){return Oh()<=me.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",jh(t)),this.xi.getDocumentsMatchingQuery(e,t,Ht.min())}Fi(e,t,r,s){return this.xi.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gD{constructor(e,t,r,s){this.persistence=e,this.Bi=t,this.serializer=s,this.Li=new $e(re),this.qi=new Vr(i=>bs(i),ka),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new W_(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Li))}}function Y_(n,e,t,r){return new gD(n,e,t,r)}async function J_(n,e){const t=F(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Gi(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=se();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function yD(n,e){const t=F(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=y.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(g=>{const w=c.docVersions.get(p);K(w!==null),g.version.compareTo(w)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=se();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function X_(n){const e=F(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ds.getLastRemoteSnapshotVersion(t))}function vD(n,e){const t=F(n),r=e.snapshotVersion;let s=t.Li;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Ki.newChangeBuffer({trackRemovals:!0});s=t.Li;const a=[];e.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(t.Ds.removeMatchingKeys(i,l.removedDocuments,h).next(()=>t.Ds.addMatchingKeys(i,l.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Xe.EMPTY_BYTE_STRING,G.min()).withLastLimboFreeSnapshotVersion(G.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),s=s.insert(h,p),function(g,w,k){return g.resumeToken.approximateByteSize()===0||w.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:k.addedDocuments.size+k.modifiedDocuments.size+k.removedDocuments.size>0}(d,p,l)&&a.push(t.Ds.updateTargetData(i,p))});let c=$t(),u=se();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(Z_(i,o,e.documentUpdates).next(l=>{c=l.zi,u=l.ji})),!r.isEqual(G.min())){const l=t.Ds.getLastRemoteSnapshotVersion(i).next(h=>t.Ds.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return y.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.Li=s,i))}function Z_(n,e,t){let r=se(),s=se();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=$t();return t.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(G.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):A("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:s}})}function wD(n,e){const t=F(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function bi(n,e){const t=F(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ds.getTargetData(r,e).next(i=>i?(s=i,y.resolve(s)):t.Ds.allocateTargetId(r).next(o=>(s=new wr(e,o,0,r.currentSequenceNumber),t.Ds.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Li.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Li=t.Li.insert(r.targetId,r),t.qi.set(e,r.targetId)),r})}async function Ei(n,e,t){const r=F(n),s=r.Li.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Ur(o))throw o;A("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(s.target)}function ru(n,e,t){const r=F(n);let s=G.min(),i=se();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=F(a),h=l.qi.get(u);return h!==void 0?y.resolve(l.Li.get(h)):l.Ds.getTargetData(c,u)}(r,o,qt(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,t?s:G.min(),t?i:se())).next(a=>(nI(r,u_(e),a),{documents:a,Wi:i})))}function eI(n,e){const t=F(n),r=F(t.Ds),s=t.Li.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.ne(i,e).next(o=>o?o.target:null))}function tI(n,e){const t=F(n),r=t.Ui.get(e)||G.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.Ki.getAllFromCollectionGroup(s,e,Bw(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(nI(t,e,s),s))}function nI(n,e,t){let r=n.Ui.get(e)||G.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ui.set(e,r)}async function _D(n,e,t,r){const s=F(n);let i=se(),o=$t();for(const u of t){const l=e.Hi(u.metadata.name);u.document&&(i=i.add(l));const h=e.Ji(u);h.setReadTime(e.Yi(u.metadata.readTime)),o=o.insert(l,h)}const a=s.Ki.newChangeBuffer({trackRemovals:!0}),c=await bi(s,function(u){return qt(Vi(de.fromString(`__bundle__/docs/${u}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",u=>Z_(u,a,o).next(l=>(a.apply(u),l)).next(l=>s.Ds.removeMatchingKeysForTargetId(u,c.targetId).next(()=>s.Ds.addMatchingKeys(u,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(u,l.zi,l.ji)).next(()=>l.zi)))}async function ID(n,e,t=se()){const r=await bi(n,qt(yf(e.bundledQuery))),s=F(n);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=ze(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.xs.saveNamedQuery(i,e);const a=r.withResumeToken(Xe.EMPTY_BYTE_STRING,o);return s.Li=s.Li.insert(a.targetId,a),s.Ds.updateTargetData(i,a).next(()=>s.Ds.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>s.Ds.addMatchingKeys(i,t,r.targetId)).next(()=>s.xs.saveNamedQuery(i,e))})}function Ag(n,e){return`firestore_clients_${n}_${e}`}function Cg(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Jl(n,e){return`firestore_targets_${n}_${e}`}class su{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Zi(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new E(s.error.code,s.error.message))),o?new su(e,t,s.state,i):(qe("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Ro{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Zi(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new E(r.error.code,r.error.message))),i?new Ro(e,r.state,s):(qe("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class iu{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=Hu();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=Kw(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new iu(e,i):(qe("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class Tf{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new Tf(t.clientId,t.onlineState):(qe("SharedClientState",`Failed to parse online state: ${e}`),null)}}class Qh{constructor(){this.activeTargetIds=Hu()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Xl{constructor(e,t,r,s,i){this.window=e,this.Ws=t,this.persistenceKey=r,this.nr=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.sr=this.ir.bind(this),this.rr=new $e(re),this.started=!1,this.ur=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.cr=Ag(this.persistenceKey,this.nr),this.ar=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.rr=this.rr.insert(this.nr,new Qh),this.hr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.lr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.dr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this._r=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.sr)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.bi();for(const r of e){if(r===this.nr)continue;const s=this.getItem(Ag(this.persistenceKey,r));if(s){const i=iu.Zi(r,s);i&&(this.rr=this.rr.insert(i.clientId,i))}}this.mr();const t=this.storage.getItem(this.wr);if(t){const r=this.gr(t);r&&this.yr(r)}for(const r of this.ur)this.ir(r);this.ur=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ar,JSON.stringify(e))}getAllActiveQueryTargets(){return this.pr(this.rr)}isActiveQueryTarget(e){let t=!1;return this.rr.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ir(e,"pending")}updateMutationState(e,t,r){this.Ir(e,t,r),this.Tr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Jl(this.persistenceKey,e));if(r){const s=Ro.Zi(e,r);s&&(t=s.state)}}return this.Er.tr(e),this.mr(),t}removeLocalQueryTarget(e){this.Er.er(e),this.mr()}isLocalQueryTarget(e){return this.Er.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Jl(this.persistenceKey,e))}updateQueryState(e,t,r){this.Ar(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Tr(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Rr(e)}notifyBundleLoaded(e){this.vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.sr),this.removeItem(this.cr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return A("SharedClientState","READ",e,t),t}setItem(e,t){A("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){A("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ir(e){const t=e;if(t.storageArea===this.storage){if(A("SharedClientState","EVENT",t.key,t.newValue),t.key===this.cr)return void qe("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ws.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.hr.test(t.key)){if(t.newValue==null){const r=this.br(t.key);return this.Pr(r,null)}{const r=this.Vr(t.key,t.newValue);if(r)return this.Pr(r.clientId,r)}}else if(this.lr.test(t.key)){if(t.newValue!==null){const r=this.Sr(t.key,t.newValue);if(r)return this.Dr(r)}}else if(this.dr.test(t.key)){if(t.newValue!==null){const r=this.Cr(t.key,t.newValue);if(r)return this.Nr(r)}}else if(t.key===this.wr){if(t.newValue!==null){const r=this.gr(t.newValue);if(r)return this.yr(r)}}else if(t.key===this.ar){const r=function(s){let i=Ut.ct;if(s!=null)try{const o=JSON.parse(s);K(typeof o=="number"),i=o}catch(o){qe("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(t.newValue);r!==Ut.ct&&this.sequenceNumberHandler(r)}else if(t.key===this._r){const r=this.kr(t.newValue);await Promise.all(r.map(s=>this.syncEngine.Or(s)))}}}else this.ur.push(t)})}}get Er(){return this.rr.get(this.nr)}mr(){this.setItem(this.cr,this.Er.Xi())}Ir(e,t,r){const s=new su(this.currentUser,e,t,r),i=Cg(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Xi())}Tr(e){const t=Cg(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Rr(e){const t={clientId:this.nr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Ar(e,t,r){const s=Jl(this.persistenceKey,e),i=new Ro(e,t,r);this.setItem(s,i.Xi())}vr(e){const t=JSON.stringify(Array.from(e));this.setItem(this._r,t)}br(e){const t=this.hr.exec(e);return t?t[1]:null}Vr(e,t){const r=this.br(e);return iu.Zi(r,t)}Sr(e,t){const r=this.lr.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return su.Zi(new tt(i),s,t)}Cr(e,t){const r=this.dr.exec(e),s=Number(r[1]);return Ro.Zi(s,t)}gr(e){return Tf.Zi(e)}kr(e){return JSON.parse(e)}async Dr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.$r(e.batchId,e.state,e.error);A("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Nr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}Pr(e,t){const r=t?this.rr.insert(e,t):this.rr.remove(e),s=this.pr(this.rr),i=this.pr(r),o=[],a=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.Fr(o,a).then(()=>{this.rr=r})}yr(e){this.rr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}pr(e){let t=Hu();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class rI{constructor(){this.Br=new Qh,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,r){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new Qh,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bD{qr(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kg{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let hc=null;function Zl(){return hc===null?hc=268435456+Math.round(2147483648*Math.random()):hc++,"0x"+hc.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ED={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TD{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="WebChannelConnection";class SD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,r,s,i){const o=Zl(),a=this.ao(e,t);A("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.ho(c,s,i),this.lo(e,a,c,r).then(u=>(A("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Hn("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}fo(e,t,r,s,i,o){return this.co(e,t,r,s,i)}ho(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ui,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ao(e,t){const r=ED[e];return`${this.ro}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,r,s){const i=Zl();return new Promise((o,a)=>{const c=new Ek;c.setWithCredentials(!0),c.listenOnce(_k.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Hl.NO_ERROR:const l=c.getResponseJson();A(vt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case Hl.TIMEOUT:A(vt,`RPC '${e}' ${i} timed out`),a(new E(v.DEADLINE_EXCEEDED,"Request time out"));break;case Hl.HTTP_ERROR:const h=c.getStatus();if(A(vt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const g=function(w){const k=w.toLowerCase().replace(/_/g,"-");return Object.values(v).indexOf(k)>=0?k:v.UNKNOWN}(p.status);a(new E(g,p.message))}else a(new E(v.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new E(v.UNAVAILABLE,"Connection failed."));break;default:$()}}finally{A(vt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);A(vt,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",u,r,15)})}wo(e,t,r){const s=Zl(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=vk(),a=wk(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new bk({})),this.ho(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=i.join("");A(vt,`Creating RPC '${e}' stream ${s}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,d=!1;const p=new TD({Wr:w=>{d?A(vt,`Not sending because RPC '${e}' stream ${s} is closed:`,w):(h||(A(vt,`Opening RPC '${e}' stream ${s} transport.`),l.open(),h=!0),A(vt,`RPC '${e}' stream ${s} sending:`,w),l.send(w))},Hr:()=>l.close()}),g=(w,k,D)=>{w.listen(k,N=>{try{D(N)}catch(S){setTimeout(()=>{throw S},0)}})};return g(l,sc.EventType.OPEN,()=>{d||A(vt,`RPC '${e}' stream ${s} transport opened.`)}),g(l,sc.EventType.CLOSE,()=>{d||(d=!0,A(vt,`RPC '${e}' stream ${s} transport closed`),p.so())}),g(l,sc.EventType.ERROR,w=>{d||(d=!0,Hn(vt,`RPC '${e}' stream ${s} transport errored:`,w),p.so(new E(v.UNAVAILABLE,"The operation could not be completed")))}),g(l,sc.EventType.MESSAGE,w=>{var k;if(!d){const D=w.data[0];K(!!D);const N=D,S=N.error||((k=N[0])===null||k===void 0?void 0:k.error);if(S){A(vt,`RPC '${e}' stream ${s} received error:`,S);const q=S.status;let X=function(ye){const xe=We[ye];if(xe!==void 0)return T_(xe)}(q),te=S.message;X===void 0&&(X=v.INTERNAL,te="Unknown error status: "+q+" with message "+S.message),d=!0,p.so(new E(X,te)),l.close()}else A(vt,`RPC '${e}' stream ${s} received:`,D),p.io(D)}}),g(a,Ik.STAT_EVENT,w=>{w.stat===Um.PROXY?A(vt,`RPC '${e}' stream ${s} detected buffering proxy`):w.stat===Um.NOPROXY&&A(vt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{p.no()},0),p}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sI(){return typeof window<"u"?window:null}function Tc(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(n){return new OR(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ws=e,this.timerId=t,this._o=r,this.mo=s,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),s=Math.max(0,t-r);s>0&&A("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class iI{constructor(e,t,r,s,i,o,a,c){this.Ws=e,this.bo=r,this.Po=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Sf(e,t)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():t&&t.code===v.RESOURCE_EXHAUSTED?(qe(t.toString()),qe("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===v.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Vo===t&&this.Ko(r,s)},r=>{e(()=>{const s=new E(v.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(s)})})}Ko(e,t){const r=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(s=>{r(()=>this.Go(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return A("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget(()=>this.Vo===e?t():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class AD extends iI{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=FR(this.serializer,e),r=function(s){if(!("targetChange"in s))return G.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?G.min():i.readTime?ze(i.readTime):G.min()}(e);return this.listener.zo(t,r)}jo(e){const t={};t.database=ra(this.serializer),t.addTarget=function(s,i){let o;const a=i.target;return o=Jc(a)?{documents:x_(s,a)}:{query:P_(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=C_(s,i.resumeToken):i.snapshotVersion.compareTo(G.min())>0&&(o.readTime=Ii(s,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=VR(this.serializer,e);r&&(t.labels=r),this.Fo(t)}Wo(e){const t={};t.database=ra(this.serializer),t.removeTarget=e,this.Fo(t)}}class CD extends iI{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(K(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const t=UR(e.writeResults,e.commitTime),r=ze(e.commitTime);return this.listener.Zo(r,t)}return K(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=ra(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>sa(this.serializer,r))};this.Fo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kD extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.eu=!1}nu(){if(this.eu)throw new E(v.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.co(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new E(v.UNKNOWN,s.toString())})}fo(e,t,r,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,t,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===v.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(v.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class RD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(qe(t),this.ru=!1):A("OnlineStateTracker",t)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DD{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{r.enqueueAndForget(async()=>{$r(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=F(a);c.du.add(4),await qi(c),c.mu.set("Unknown"),c.du.delete(4),await Ma(c)}(this))})}),this.mu=new RD(r,s)}}async function Ma(n){if($r(n))for(const e of n.wu)await e(!0)}async function qi(n){for(const e of n.wu)await e(!1)}function el(n,e){const t=F(n);t.fu.has(e.targetId)||(t.fu.set(e.targetId,e),kf(t)?Cf(t):zi(t).No()&&Af(t,e))}function ia(n,e){const t=F(n),r=zi(t);t.fu.delete(e),r.No()&&oI(t,e),t.fu.size===0&&(r.No()?r.$o():$r(t)&&t.mu.set("Unknown"))}function Af(n,e){n.gu.Ot(e.targetId),zi(n).jo(e)}function oI(n,e){n.gu.Ot(e),zi(n).Wo(e)}function Cf(n){n.gu=new DR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.fu.get(e)||null}),zi(n).start(),n.mu.ou()}function kf(n){return $r(n)&&!zi(n).xo()&&n.fu.size>0}function $r(n){return F(n).du.size===0}function aI(n){n.gu=void 0}async function ND(n){n.fu.forEach((e,t)=>{Af(n,e)})}async function xD(n,e){aI(n),kf(n)?(n.mu.au(e),Cf(n)):n.mu.set("Unknown")}async function PD(n,e,t){if(n.mu.set("Online"),e instanceof A_&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.fu.delete(o),r.gu.removeTarget(o))}(n,e)}catch(r){A("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await ou(n,r)}else if(e instanceof Ec?n.gu.Kt(e):e instanceof S_?n.gu.Jt(e):n.gu.zt(e),!t.isEqual(G.min()))try{const r=await X_(n.localStore);t.compareTo(r)>=0&&await function(s,i){const o=s.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.fu.get(c);u&&s.fu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.fu.get(a);if(!c)return;s.fu.set(a,c.withResumeToken(Xe.EMPTY_BYTE_STRING,c.snapshotVersion)),oI(s,a);const u=new wr(c.target,a,1,c.sequenceNumber);Af(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){A("RemoteStore","Failed to raise snapshot:",r),await ou(n,r)}}async function ou(n,e,t){if(!Ur(e))throw e;n.du.add(1),await qi(n),n.mu.set("Offline"),t||(t=()=>X_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await t(),n.du.delete(1),await Ma(n)})}function cI(n,e){return e().catch(t=>ou(n,t,e))}async function ji(n){const e=F(n),t=Nr(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;OD(e);)try{const s=await wD(e.localStore,r);if(s===null){e.lu.length===0&&t.$o();break}r=s.batchId,MD(e,s)}catch(s){await ou(e,s)}uI(e)&&lI(e)}function OD(n){return $r(n)&&n.lu.length<10}function MD(n,e){n.lu.push(e);const t=Nr(n);t.No()&&t.Jo&&t.Yo(e.mutations)}function uI(n){return $r(n)&&!Nr(n).xo()&&n.lu.length>0}function lI(n){Nr(n).start()}async function LD(n){Nr(n).tu()}async function FD(n){const e=Nr(n);for(const t of n.lu)e.Yo(t.mutations)}async function UD(n,e,t){const r=n.lu.shift(),s=ff.from(r,e,t);await cI(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await ji(n)}async function VD(n,e){e&&Nr(n).Jo&&await async function(t,r){if(s=r.code,E_(s)&&s!==v.ABORTED){const i=t.lu.shift();Nr(t).Oo(),await cI(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,r)),await ji(t)}var s}(n,e),uI(n)&&lI(n)}async function Rg(n,e){const t=F(n);t.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const r=$r(t);t.du.add(3),await qi(t),r&&t.mu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.du.delete(3),await Ma(t)}async function Yh(n,e){const t=F(n);e?(t.du.delete(2),await Ma(t)):e||(t.du.add(2),await qi(t),t.mu.set("Unknown"))}function zi(n){return n.yu||(n.yu=function(e,t,r){const s=F(e);return s.nu(),new AD(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Jr:ND.bind(null,n),Zr:xD.bind(null,n),zo:PD.bind(null,n)}),n.wu.push(async e=>{e?(n.yu.Oo(),kf(n)?Cf(n):n.mu.set("Unknown")):(await n.yu.stop(),aI(n))})),n.yu}function Nr(n){return n.pu||(n.pu=function(e,t,r){const s=F(e);return s.nu(),new CD(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Jr:LD.bind(null,n),Zr:VD.bind(null,n),Xo:FD.bind(null,n),Zo:UD.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Oo(),await ji(n)):(await n.pu.stop(),n.lu.length>0&&(A("RemoteStore",`Stopping write stream with ${n.lu.length} pending writes`),n.lu=[]))})),n.pu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rf{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new st,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new Rf(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(v.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ki(n,e){if(qe("AsyncQueue",`${e}: ${n}`),Ur(n))return new E(v.UNAVAILABLE,`${e}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oi{constructor(e){this.comparator=e?(t,r)=>e(t,r)||O.comparator(t.key,r.key):(t,r)=>O.comparator(t.key,r.key),this.keyedMap=mo(),this.sortedSet=new $e(this.comparator)}static emptySet(e){return new oi(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof oi)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new oi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dg{constructor(){this.Iu=new $e(O.comparator)}track(e){const t=e.doc.key,r=this.Iu.get(t);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(t,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(t):e.type===1&&r.type===2?this.Iu=this.Iu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):$():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal((t,r)=>{e.push(r)}),e}}class Ti{constructor(e,t,r,s,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new Ti(e,t,oi.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ra(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $D{constructor(){this.Eu=void 0,this.listeners=[]}}class BD{constructor(){this.queries=new Vr(e=>c_(e),Ra),this.onlineState="Unknown",this.Au=new Set}}async function Df(n,e){const t=F(n),r=e.query;let s=!1,i=t.queries.get(r);if(i||(s=!0,i=new $D),s)try{i.Eu=await t.onListen(r)}catch(o){const a=Ki(o,`Initialization of query '${jh(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.listeners.push(e),e.Ru(t.onlineState),i.Eu&&e.vu(i.Eu)&&xf(t)}async function Nf(n,e){const t=F(n),r=e.query;let s=!1;const i=t.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return t.queries.delete(r),t.onUnlisten(r)}function qD(n,e){const t=F(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.vu(s)&&(r=!0);o.Eu=s}}r&&xf(t)}function jD(n,e,t){const r=F(n),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(t);r.queries.delete(e)}function xf(n){n.Au.forEach(e=>{e.next()})}class Pf{constructor(e,t,r){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new Ti(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Cu(e){e=Ti.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zD{constructor(e,t){this.Nu=e,this.byteLength=t}ku(){return"metadata"in this.Nu}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ng{constructor(e){this.serializer=e}Hi(e){return Nn(this.serializer,e)}Ji(e){return e.metadata.exists?N_(this.serializer,e.document,!1):De.newNoDocument(this.Hi(e.metadata.name),this.Yi(e.metadata.readTime))}Yi(e){return ze(e)}}class KD{constructor(e,t,r){this.Ou=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=hI(e)}$u(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Nu.namedQuery)this.queries.push(e.Nu.namedQuery);else if(e.Nu.documentMetadata){this.documents.push({metadata:e.Nu.documentMetadata}),e.Nu.documentMetadata.exists||++t;const r=de.fromString(e.Nu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Nu.document&&(this.documents[this.documents.length-1].document=e.Nu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Mu(e){const t=new Map,r=new Ng(this.serializer);for(const s of e)if(s.metadata.queries){const i=r.Hi(s.metadata.name);for(const o of s.metadata.queries){const a=(t.get(o)||se()).add(i);t.set(o,a)}}return t}async complete(){const e=await _D(this.localStore,new Ng(this.serializer),this.documents,this.Ou.id),t=this.Mu(this.documents);for(const r of this.queries)await ID(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Fu:this.collectionGroups,Bu:e}}}function hI(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dI{constructor(e){this.key=e}}class fI{constructor(e){this.key=e}}class pI{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=se(),this.mutatedKeys=se(),this.Ku=l_(e),this.Gu=new oi(this.Ku)}get Qu(){return this.Lu}zu(e,t){const r=t?t.ju:new Dg,s=t?t.Gu:this.Gu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),p=Da(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),w=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let k=!1;d&&p?d.data.isEqual(p.data)?g!==w&&(r.track({type:3,doc:p}),k=!0):this.Wu(d,p)||(r.track({type:2,doc:p}),k=!0,(c&&this.Ku(p,c)>0||u&&this.Ku(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),k=!0):d&&!p&&(r.track({type:1,doc:d}),k=!0,(c||u)&&(a=!0)),k&&(p?(o=o.add(p),i=w?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Gu:o,ju:r,Mi:a,mutatedKeys:i}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const s=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((u,l)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return $()}};return p(h)-p(d)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(r);const o=t?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new Ti(this.query,e.Gu,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Dg,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(t=>this.Lu=this.Lu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Lu=this.Lu.delete(t)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=se(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const t=[];return e.forEach(r=>{this.Uu.has(r)||t.push(new fI(r))}),this.Uu.forEach(r=>{e.has(r)||t.push(new dI(r))}),t}Xu(e){this.Lu=e.Wi,this.Uu=se();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return Ti.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class GD{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class WD{constructor(e){this.key=e,this.ec=!1}}class HD{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Vr(a=>c_(a),Ra),this.ic=new Map,this.rc=new Set,this.oc=new $e(O.comparator),this.uc=new Map,this.cc=new _f,this.ac={},this.hc=new Map,this.lc=Cs.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function QD(n,e){const t=Uf(n);let r,s;const i=t.sc.get(e);if(i)r=i.targetId,t.sharedClientState.addLocalQueryTarget(r),s=i.view.tc();else{const o=await bi(t.localStore,qt(e));t.isPrimaryClient&&el(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Of(t,e,r,a==="current",o.resumeToken)}return s}async function Of(n,e,t,r,s){n.dc=(h,d,p)=>async function(g,w,k,D){let N=w.view.zu(k);N.Mi&&(N=await ru(g.localStore,w.query,!1).then(({documents:X})=>w.view.zu(X,N)));const S=D&&D.targetChanges.get(w.targetId),q=w.view.applyChanges(N,g.isPrimaryClient,S);return Jh(g,w.targetId,q.Yu),q.snapshot}(n,h,d,p);const i=await ru(n.localStore,e,!0),o=new pI(e,i.Wi),a=o.zu(i.documents),c=Pa.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(a,n.isPrimaryClient,c);Jh(n,t,u.Yu);const l=new GD(e,t,o);return n.sc.set(e,l),n.ic.has(t)?n.ic.get(t).push(e):n.ic.set(t,[e]),u.snapshot}async function YD(n,e){const t=F(n),r=t.sc.get(e),s=t.ic.get(r.targetId);if(s.length>1)return t.ic.set(r.targetId,s.filter(i=>!Ra(i,e))),void t.sc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await Ei(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),ia(t.remoteStore,r.targetId),Si(t,r.targetId)}).catch(Fr)):(Si(t,r.targetId),await Ei(t.localStore,r.targetId,!0))}async function JD(n,e,t){const r=Vf(n);try{const s=await function(i,o){const a=F(i),c=Me.now(),u=o.reduce((d,p)=>d.add(p.key),se());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=$t(),g=se();return a.Ki.getEntries(d,u).next(w=>{p=w,p.forEach((k,D)=>{D.isValidDocument()||(g=g.add(k))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(w=>{l=w;const k=[];for(const D of o){const N=kR(D,l.get(D.key).overlayedDocument);N!=null&&k.push(new Zn(D.key,N,Zw(N.value.mapValue),Oe.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,k,o)}).next(w=>{h=w;const k=w.applyToLocalDocumentSet(l,g);return a.documentOverlayCache.saveOverlays(d,w.batchId,k)})}).then(()=>({batchId:h.batchId,changes:d_(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new $e(re)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(r,s.batchId,t),await er(r,s.changes),await ji(r.remoteStore)}catch(s){const i=Ki(s,"Failed to persist write");t.reject(i)}}async function mI(n,e){const t=F(n);try{const r=await vD(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.uc.get(i);o&&(K(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ec=!0:s.modifiedDocuments.size>0?K(o.ec):s.removedDocuments.size>0&&(K(o.ec),o.ec=!1))}),await er(t,r,e)}catch(r){await Fr(r)}}function xg(n,e,t){const r=F(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=F(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Ru(o)&&(c=!0)}),c&&xf(a)}(r.eventManager,e),s.length&&r.nc.zo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function XD(n,e,t){const r=F(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.uc.get(e),i=s&&s.key;if(i){let o=new $e(O.comparator);o=o.insert(i,De.newNoDocument(i,G.min()));const a=se().add(i),c=new xa(G.min(),new Map,new Se(re),o,a);await mI(r,c),r.oc=r.oc.remove(i),r.uc.delete(e),Ff(r)}else await Ei(r.localStore,e,!1).then(()=>Si(r,e,t)).catch(Fr)}async function ZD(n,e){const t=F(n),r=e.batch.batchId;try{const s=await yD(t.localStore,e);Lf(t,r,null),Mf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await er(t,s)}catch(s){await Fr(s)}}async function eN(n,e,t){const r=F(n);try{const s=await function(i,o){const a=F(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(K(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);Lf(r,e,t),Mf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await er(r,s)}catch(s){await Fr(s)}}async function tN(n,e){const t=F(n);$r(t.remoteStore)||A("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(i){const o=F(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const s=t.hc.get(r)||[];s.push(e),t.hc.set(r,s)}catch(r){const s=Ki(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function Mf(n,e){(n.hc.get(e)||[]).forEach(t=>{t.resolve()}),n.hc.delete(e)}function Lf(n,e,t){const r=F(n);let s=r.ac[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.ac[r.currentUser.toKey()]=s}}function Si(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.ic.get(e))n.sc.delete(r),t&&n.nc.wc(r,t);n.ic.delete(e),n.isPrimaryClient&&n.cc.hs(e).forEach(r=>{n.cc.containsKey(r)||gI(n,r)})}function gI(n,e){n.rc.delete(e.path.canonicalString());const t=n.oc.get(e);t!==null&&(ia(n.remoteStore,t),n.oc=n.oc.remove(e),n.uc.delete(t),Ff(n))}function Jh(n,e,t){for(const r of t)r instanceof dI?(n.cc.addReference(r.key,e),nN(n,r)):r instanceof fI?(A("SyncEngine","Document no longer in limbo: "+r.key),n.cc.removeReference(r.key,e),n.cc.containsKey(r.key)||gI(n,r.key)):$()}function nN(n,e){const t=e.key,r=t.path.canonicalString();n.oc.get(t)||n.rc.has(r)||(A("SyncEngine","New document in limbo: "+t),n.rc.add(r),Ff(n))}function Ff(n){for(;n.rc.size>0&&n.oc.size<n.maxConcurrentLimboResolutions;){const e=n.rc.values().next().value;n.rc.delete(e);const t=new O(de.fromString(e)),r=n.lc.next();n.uc.set(r,new WD(t)),n.oc=n.oc.insert(t,r),el(n.remoteStore,new wr(qt(Vi(t.path)),r,2,Ut.ct))}}async function er(n,e,t){const r=F(n),s=[],i=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,c)=>{o.push(r.dc(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=Ef.Di(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.nc.zo(s),await async function(a,c){const u=F(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>y.forEach(c,h=>y.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>y.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Ur(l))throw l;A("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Li.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.Li=u.Li.insert(h,g)}}}(r.localStore,i))}async function rN(n,e){const t=F(n);if(!t.currentUser.isEqual(e)){A("SyncEngine","User change. New user:",e.toKey());const r=await J_(t.localStore,e);t.currentUser=e,function(s,i){s.hc.forEach(o=>{o.forEach(a=>{a.reject(new E(v.CANCELLED,i))})}),s.hc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await er(t,r.Qi)}}function sN(n,e){const t=F(n),r=t.uc.get(e);if(r&&r.ec)return se().add(r.key);{let s=se();const i=t.ic.get(e);if(!i)return s;for(const o of i){const a=t.sc.get(o);s=s.unionWith(a.view.Qu)}return s}}async function iN(n,e){const t=F(n),r=await ru(t.localStore,e.query,!0),s=e.view.Xu(r);return t.isPrimaryClient&&Jh(t,e.targetId,s.Yu),s}async function oN(n,e){const t=F(n);return tI(t.localStore,e).then(r=>er(t,r))}async function aN(n,e,t,r){const s=F(n),i=await function(o,a){const c=F(o),u=F(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.In(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):y.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await ji(s.remoteStore):t==="acknowledged"||t==="rejected"?(Lf(s,e,r||null),Mf(s,e),function(o,a){F(F(o).mutationQueue).En(a)}(s.localStore,e)):$(),await er(s,i)):A("SyncEngine","Cannot apply mutation batch with id: "+e)}async function cN(n,e){const t=F(n);if(Uf(t),Vf(t),e===!0&&t.fc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await Pg(t,r.toArray());t.fc=!0,await Yh(t.remoteStore,!0);for(const i of s)el(t.remoteStore,i)}else if(e===!1&&t.fc!==!1){const r=[];let s=Promise.resolve();t.ic.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(Si(t,o),Ei(t.localStore,o,!0))),ia(t.remoteStore,o)}),await s,await Pg(t,r),function(i){const o=F(i);o.uc.forEach((a,c)=>{ia(o.remoteStore,c)}),o.cc.ls(),o.uc=new Map,o.oc=new $e(O.comparator)}(t),t.fc=!1,await Yh(t.remoteStore,!1)}}async function Pg(n,e,t){const r=F(n),s=[],i=[];for(const o of e){let a;const c=r.ic.get(o);if(c&&c.length!==0){a=await bi(r.localStore,qt(c[0]));for(const u of c){const l=r.sc.get(u),h=await iN(r,l);h.snapshot&&i.push(h.snapshot)}}else{const u=await eI(r.localStore,o);a=await bi(r.localStore,u),await Of(r,yI(u),o,!1,a.resumeToken)}s.push(a)}return r.nc.zo(i),s}function yI(n){return a_(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function uN(n){const e=F(n);return F(F(e.localStore).persistence).bi()}async function lN(n,e,t,r){const s=F(n);if(s.fc)return void A("SyncEngine","Ignoring unexpected query state notification.");const i=s.ic.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await tI(s.localStore,u_(i[0])),a=xa.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Xe.EMPTY_BYTE_STRING);await er(s,o,a);break}case"rejected":await Ei(s.localStore,e,!0),Si(s,e,r);break;default:$()}}async function hN(n,e,t){const r=Uf(n);if(r.fc){for(const s of e){if(r.ic.has(s)){A("SyncEngine","Adding an already active target "+s);continue}const i=await eI(r.localStore,s),o=await bi(r.localStore,i);await Of(r,yI(i),o.targetId,!1,o.resumeToken),el(r.remoteStore,o)}for(const s of t)r.ic.has(s)&&await Ei(r.localStore,s,!1).then(()=>{ia(r.remoteStore,s),Si(r,s)}).catch(Fr)}}function Uf(n){const e=F(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=mI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=sN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=XD.bind(null,e),e.nc.zo=qD.bind(null,e.eventManager),e.nc.wc=jD.bind(null,e.eventManager),e}function Vf(n){const e=F(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=ZD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=eN.bind(null,e),e}function dN(n,e,t){const r=F(n);(async function(s,i,o){try{const a=await i.getMetadata();if(await function(h,d){const p=F(h),g=ze(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",w=>p.xs.getBundleMetadata(w,d.id)).then(w=>!!w&&w.createTime.compareTo(g)>=0)}(s.localStore,a))return await i.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(hI(a));const c=new KD(a,s.localStore,i.serializer);let u=await i._c();for(;u;){const h=await c.$u(u);h&&o._updateProgress(h),u=await i._c()}const l=await c.complete();return await er(s,l.Bu,void 0),await function(h,d){const p=F(h);return p.persistence.runTransaction("Save bundle","readwrite",g=>p.xs.saveBundleMetadata(g,d))}(s.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Fu)}catch(a){return Hn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(s=>{r.sharedClientState.notifyBundleLoaded(s)})}class Xh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Oa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Y_(this.persistence,new Q_,e.initialUser,this.serializer)}createPersistence(e){return new H_(Zu.Fs,this.serializer)}createSharedClientState(e){return new rI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class vI extends Xh{constructor(e,t,r){super(),this.mc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.mc.initialize(this,e),await Vf(this.mc.syncEngine),await ji(this.mc.remoteStore),await this.persistence.hi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return Y_(this.persistence,new Q_,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new nD(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new Vk(t,this.persistence);return new Uk(e.asyncQueue,r)}createPersistence(e){const t=bf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Lt.withCacheSize(this.cacheSizeBytes):Lt.DEFAULT;return new If(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,sI(),Tc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new rI}}class fN extends vI{constructor(e,t){super(e,t,!1),this.mc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.mc.syncEngine;this.sharedClientState instanceof Xl&&(this.sharedClientState.syncEngine={$r:aN.bind(null,t),Mr:lN.bind(null,t),Fr:hN.bind(null,t),bi:uN.bind(null,t),Or:oN.bind(null,t)},await this.sharedClientState.start()),await this.persistence.hi(async r=>{await cN(this.mc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=sI();if(!Xl.D(t))throw new E(v.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=bf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new Xl(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class $f{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>xg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=rN.bind(null,this.syncEngine),await Yh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new BD}createDatastore(e){const t=Oa(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new SD(s));var s;return function(i,o,a,c){return new kD(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>xg(this.syncEngine,a,0),o=kg.D()?new kg:new bD,new DD(t,r,s,i,o);var t,r,s,i,o}createSyncEngine(e,t){return function(r,s,i,o,a,c,u){const l=new HD(r,s,i,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=F(e);A("RemoteStore","RemoteStore shutting down."),t.du.add(5),await qi(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Og(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):qe("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e,t){this.Ic=e,this.serializer=t,this.metadata=new st,this.buffer=new Uint8Array,this.Tc=new TextDecoder("utf-8"),this.Ec().then(r=>{r&&r.ku()?this.metadata.resolve(r.Nu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Nu)}`))},r=>this.metadata.reject(r))}close(){return this.Ic.cancel()}async getMetadata(){return this.metadata.promise}async _c(){return await this.getMetadata(),this.Ec()}async Ec(){const e=await this.Ac();if(e===null)return null;const t=this.Tc.decode(e),r=Number(t);isNaN(r)&&this.Rc(`length string (${t}) is not valid number`);const s=await this.vc(r);return new zD(JSON.parse(s),e.length+r)}bc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Ac(){for(;this.bc()<0&&!await this.Pc(););if(this.buffer.length===0)return null;const e=this.bc();e<0&&this.Rc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Pc()&&this.Rc("Reached the end of bundle when more is expected.");const t=this.Tc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Rc(e){throw this.Ic.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pc(){const e=await this.Ic.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mN{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new E(v.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,s){const i=F(r),o=ra(i.serializer)+"/documents",a={documents:s.map(h=>na(i.serializer,h))},c=await i.fo("BatchGetDocuments",o,a,s.length),u=new Map;c.forEach(h=>{const d=LR(i.serializer,h);u.set(d.key.toString(),d)});const l=[];return s.forEach(h=>{const d=u.get(h.toString());K(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Bi(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const s=O.fromPath(r);this.mutations.push(new hf(s,this.precondition(s)))}),await async function(t,r){const s=F(t),i=ra(s.serializer)+"/documents",o={writes:r.map(a=>sa(s.serializer,a))};await s.co("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw $();t=G.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new E(v.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(G.min())?Oe.exists(!1):Oe.updateTime(t):Oe.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(G.min()))throw new E(v.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Oe.updateTime(t)}return Oe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gN{constructor(e,t,r,s,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=i,this.Vc=r.maxAttempts,this.Co=new Sf(this.asyncQueue,"transaction_retry")}run(){this.Vc-=1,this.Sc()}Sc(){this.Co.Ao(async()=>{const e=new mN(this.datastore),t=this.Dc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Cc(s)}))}).catch(r=>{this.Cc(r)})})}Dc(e){try{const t=this.updateFunction(e);return!Ca(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Cc(e){this.Vc>0&&this.xc(e)?(this.Vc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Sc(),Promise.resolve()))):this.deferred.reject(e)}xc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!E_(t)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yN{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=tt.UNAUTHENTICATED,this.clientId=Uw.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{A("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(A("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(v.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new st;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=Ki(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function Sc(n,e){n.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await J_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Zh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Bf(n);A("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(s=>Rg(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>Rg(e.remoteStore,i)),n._onlineComponents=e}function wI(n){return n.name==="FirebaseError"?n.code===v.FAILED_PRECONDITION||n.code===v.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Bf(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){A("FirestoreClient","Using user provided OfflineComponentProvider");try{await Sc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!wI(t))throw t;Hn("Error using user provided cache. Falling back to memory cache: "+t),await Sc(n,new Xh)}}else A("FirestoreClient","Using default OfflineComponentProvider"),await Sc(n,new Xh);return n._offlineComponents}async function nl(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(A("FirestoreClient","Using user provided OnlineComponentProvider"),await Zh(n,n._uninitializedComponentsProvider._online)):(A("FirestoreClient","Using default OnlineComponentProvider"),await Zh(n,new $f))),n._onlineComponents}function _I(n){return Bf(n).then(e=>e.persistence)}function qf(n){return Bf(n).then(e=>e.localStore)}function II(n){return nl(n).then(e=>e.remoteStore)}function jf(n){return nl(n).then(e=>e.syncEngine)}function vN(n){return nl(n).then(e=>e.datastore)}async function Ai(n){const e=await nl(n),t=e.eventManager;return t.onListen=QD.bind(null,e.syncEngine),t.onUnlisten=YD.bind(null,e.syncEngine),t}function wN(n){return n.asyncQueue.enqueue(async()=>{const e=await _I(n),t=await II(n);return e.setNetworkEnabled(!0),function(r){const s=F(r);return s.du.delete(0),Ma(s)}(t)})}function _N(n){return n.asyncQueue.enqueue(async()=>{const e=await _I(n),t=await II(n);return e.setNetworkEnabled(!1),async function(r){const s=F(r);s.du.add(0),await qi(s),s.mu.set("Offline")}(t)})}function IN(n,e){const t=new st;return n.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await function(a,c){const u=F(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,s);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new E(v.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=Ki(o,`Failed to get document '${s} from cache`);i.reject(a)}}(await qf(n),e,t)),t.promise}function bI(n,e,t={}){const r=new st;return n.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new tl({next:h=>{i.enqueueAndForget(()=>Nf(s,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new E(v.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new E(v.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Pf(Vi(o.path),u,{includeMetadataChanges:!0,xu:!0});return Df(s,l)}(await Ai(n),n.asyncQueue,e,t,r)),r.promise}function bN(n,e){const t=new st;return n.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await ru(r,s,!0),a=new pI(s,o.Wi),c=a.zu(o.documents),u=a.applyChanges(c,!1);i.resolve(u.snapshot)}catch(o){const a=Ki(o,`Failed to execute query '${s} against cache`);i.reject(a)}}(await qf(n),e,t)),t.promise}function EI(n,e,t={}){const r=new st;return n.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new tl({next:h=>{i.enqueueAndForget(()=>Nf(s,l)),h.fromCache&&a.source==="server"?c.reject(new E(v.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Pf(o,u,{includeMetadataChanges:!0,xu:!0});return Df(s,l)}(await Ai(n),n.asyncQueue,e,t,r)),r.promise}function EN(n,e){const t=new tl(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,s){F(r).Au.add(s),s.next()}(await Ai(n),t)),()=>{t.yc(),n.asyncQueue.enqueueAndForget(async()=>function(r,s){F(r).Au.delete(s)}(await Ai(n),t))}}function TN(n,e,t,r){const s=function(i,o){let a;return a=typeof i=="string"?new TextEncoder().encode(i):i,function(c,u){return new pN(c,u)}(function(c,u){if(c instanceof Uint8Array)return Og(c,u);if(c instanceof ArrayBuffer)return Og(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,Oa(e));n.asyncQueue.enqueueAndForget(async()=>{dN(await jf(n),s,r)})}function SN(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const s=F(t);return s.persistence.runTransaction("Get named query","readonly",i=>s.xs.getNamedQuery(i,r))}(await qf(n),e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mg=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(n,e,t){if(!t)throw new E(v.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function TI(n,e,t,r){if(e===!0&&r===!0)throw new E(v.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Lg(n){if(!O.isDocumentKey(n))throw new E(v.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function Fg(n){if(O.isDocumentKey(n))throw new E(v.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function rl(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":$()}function ge(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new E(v.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=rl(n);throw new E(v.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function SI(n,e){if(e<=0)throw new E(v.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ug{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new E(v.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new E(v.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,TI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Ug({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(v.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new E(v.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Ug(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Ak;switch(t.type){case"firstParty":return new Dk(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new E(v.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Mg.get(e);t&&(A("ComponentProvider","Removing Datastore"),Mg.delete(e),t.terminate())}(this),Promise.resolve()}}function AI(n,e,t,r={}){var s;const i=(n=ge(n,La))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Hn("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=tt.MOCK_USER;else{o=WS(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new E(v.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new tt(c)}n._authCredentials=new Ck(new Fw(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new xn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ne(this.firestore,e,this._key)}}class mt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new mt(this.firestore,e,this._query)}}class xn extends mt{constructor(e,t,r){super(e,t,Vi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ne(this.firestore,null,new O(e))}withConverter(e){return new xn(this.firestore,e,this._path)}}function sl(n,e,...t){if(n=W(n),zf("collection","path",e),n instanceof La){const r=de.fromString(e,...t);return Fg(r),new xn(n,null,r)}{if(!(n instanceof Ne||n instanceof xn))throw new E(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(de.fromString(e,...t));return Fg(r),new xn(n.firestore,null,r)}}function AN(n,e){if(n=ge(n,La),zf("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new E(v.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new mt(n,null,function(t){return new Xn(de.emptyPath(),t)}(e))}function kt(n,e,...t){if(n=W(n),arguments.length===1&&(e=Uw.A()),zf("doc","path",e),n instanceof La){const r=de.fromString(e,...t);return Lg(r),new Ne(n,null,new O(r))}{if(!(n instanceof Ne||n instanceof xn))throw new E(v.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(de.fromString(e,...t));return Lg(r),new Ne(n.firestore,n instanceof xn?n.converter:null,new O(r))}}function CI(n,e){return n=W(n),e=W(e),(n instanceof Ne||n instanceof xn)&&(e instanceof Ne||e instanceof xn)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function kI(n,e){return n=W(n),e=W(e),n instanceof mt&&e instanceof mt&&n.firestore===e.firestore&&Ra(n._query,e._query)&&n.converter===e.converter}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class CN{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Sf(this,"async_queue_retry"),this.qc=()=>{const t=Tc();t&&A("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const e=Tc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=Tc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const t=new st;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Ur(e))throw e;A("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const t=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw qe("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Fc=!1,r))));return this.Nc=t,t}enqueueAfterDelay(e,t,r){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const s=Rf.createAndSchedule(this,e,t,r,i=>this.Qc(i));return this.$c.push(s),s}Uc(){this.Mc&&$()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.$c)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function ed(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of t)if(s in r&&typeof r[s]=="function")return!0;return!1}(n,["next","error","complete"])}class kN{constructor(){this._progressObserver={},this._taskCompletionResolver=new st,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=-1;class Be extends La{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new CN,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||RI(this),this._firestoreClient.terminate()}}function DN(n,e){const t=typeof n=="object"?n:Md(),r=typeof n=="string"?n:e||"(default)",s=ga(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=zS("firestore");i&&AI(s,...i)}return s}function ut(n){return n._firestoreClient||RI(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function RI(n){var e,t,r;const s=n._freezeSettings(),i=function(o,a,c,u){return new aR(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new yN(n._authCredentials,n._appCheckCredentials,n._queue,i),!((t=s.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}function NN(n,e){NI(n=ge(n,Be));const t=ut(n);if(t._uninitializedComponentsProvider)throw new E(v.FAILED_PRECONDITION,"SDK cache is already specified.");Hn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),s=new $f;return DI(t,s,new vI(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function xN(n){NI(n=ge(n,Be));const e=ut(n);if(e._uninitializedComponentsProvider)throw new E(v.FAILED_PRECONDITION,"SDK cache is already specified.");Hn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new $f;return DI(e,r,new fN(r,t.cacheSizeBytes))}function DI(n,e,t){const r=new st;return n.asyncQueue.enqueue(async()=>{try{await Sc(n,t),await Zh(n,e),r.resolve()}catch(s){const i=s;if(!wI(i))throw i;Hn("Error enabling indexeddb cache. Falling back to memory cache: "+i),r.reject(i)}}).then(()=>r.promise)}function PN(n){if(n._initialized&&!n._terminated)throw new E(v.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new st;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!ln.D())return Promise.resolve();const r=t+"main";await ln.delete(r)}(bf(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function ON(n){return function(e){const t=new st;return e.asyncQueue.enqueueAndForget(async()=>tN(await jf(e),t)),t.promise}(ut(n=ge(n,Be)))}function MN(n){return wN(ut(n=ge(n,Be)))}function LN(n){return _N(ut(n=ge(n,Be)))}function FN(n,e){const t=ut(n=ge(n,Be)),r=new kN;return TN(t,n._databaseId,e,r),r}function UN(n,e){return SN(ut(n=ge(n,Be)),e).then(t=>t?new mt(n,null,t.query):null)}function NI(n){if(n._initialized||n._terminated)throw new E(v.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ln{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Ln(Xe.fromBase64String(e))}catch(t){throw new E(v.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Ln(Xe.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new E(v.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new je(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(v.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(v.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VN=/^__.*__$/;class $N{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Zn(e,this.data,this.fieldMask,t,this.fieldTransforms):new $i(e,this.data,t,this.fieldTransforms)}}class xI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Zn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function PI(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw $()}}class ol{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new ol(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Zc({path:r,ta:!1});return s.ea(e),s}na(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Zc({path:r,ta:!1});return s.Jc(),s}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return au(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(PI(this.Yc)&&VN.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class BN{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Oa(e)}ua(e,t,r,s=!1){return new ol({Yc:e,methodName:t,oa:r,path:je.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Vs(n){const e=n._freezeSettings(),t=Oa(n._databaseId);return new BN(n._databaseId,!!e.ignoreUndefinedProperties,t)}function al(n,e,t,r,s,i={}){const o=n.ua(i.merge||i.mergeFields?2:0,e,t,s);Hf("Data must be an object, but it was:",o,r);const a=LI(r,o);let c,u;if(i.merge)c=new Vt(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=td(e,h,t);if(!o.contains(d))throw new E(v.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);UI(l,d)||l.push(d)}c=new Vt(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new $N(new dt(a),c,u)}class Fa extends Us{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Fa}}function OI(n,e,t){return new ol({Yc:3,oa:e.settings.oa,methodName:n._methodName,ta:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Kf extends Us{_toFieldTransform(e){return new Na(e.path,new wi)}isEqual(e){return e instanceof Kf}}class qN extends Us{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=OI(this,e,!0),r=this.ca.map(i=>$s(i,t)),s=new Es(r);return new Na(e.path,s)}isEqual(e){return this===e}}class jN extends Us{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=OI(this,e,!0),r=this.ca.map(i=>$s(i,t)),s=new Ts(r);return new Na(e.path,s)}isEqual(e){return this===e}}class zN extends Us{constructor(e,t){super(e),this.aa=t}_toFieldTransform(e){const t=new _i(e.serializer,g_(e.serializer,this.aa));return new Na(e.path,t)}isEqual(e){return this===e}}function Gf(n,e,t,r){const s=n.ua(1,e,t);Hf("Data must be an object, but it was:",s,r);const i=[],o=dt.empty();Fs(r,(c,u)=>{const l=Qf(e,c,t);u=W(u);const h=s.na(l);if(u instanceof Fa)i.push(l);else{const d=$s(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new Vt(i);return new xI(o,a,s.fieldTransforms)}function Wf(n,e,t,r,s,i){const o=n.ua(1,e,t),a=[td(e,r,t)],c=[s];if(i.length%2!=0)throw new E(v.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(td(e,i[d])),c.push(i[d+1]);const u=[],l=dt.empty();for(let d=a.length-1;d>=0;--d)if(!UI(u,a[d])){const p=a[d];let g=c[d];g=W(g);const w=o.na(p);if(g instanceof Fa)u.push(p);else{const k=$s(g,w);k!=null&&(u.push(p),l.set(p,k))}}const h=new Vt(u);return new xI(l,h,o.fieldTransforms)}function MI(n,e,t,r=!1){return $s(t,n.ua(r?4:3,e))}function $s(n,e){if(FI(n=W(n)))return Hf("Unsupported field value:",e,n),LI(n,e);if(n instanceof Us)return function(t,r){if(!PI(r.Yc))throw r.ia(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(t,r){const s=[];let i=0;for(const o of t){let a=$s(o,r.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(n,e)}return function(t,r){if((t=W(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return g_(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=Me.fromDate(t);return{timestampValue:Ii(r.serializer,s)}}if(t instanceof Me){const s=new Me(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:Ii(r.serializer,s)}}if(t instanceof il)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Ln)return{bytesValue:C_(r.serializer,t._byteString)};if(t instanceof Ne){const s=r.databaseId,i=t.firestore._databaseId;if(!i.isEqual(s))throw r.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:gf(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.ia(`Unsupported field value: ${rl(t)}`)}(n,e)}function LI(n,e){const t={};return Yw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Fs(n,(r,s)=>{const i=$s(s,e.Xc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function FI(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Me||n instanceof il||n instanceof Ln||n instanceof Ne||n instanceof Us)}function Hf(n,e,t){if(!FI(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=rl(t);throw r==="an object"?e.ia(n+" a custom object"):e.ia(n+" "+r)}}function td(n,e,t){if((e=W(e))instanceof xr)return e._internalPath;if(typeof e=="string")return Qf(n,e);throw au("Field path arguments must be of type string or ",n,!1,void 0,t)}const KN=new RegExp("[~\\*/\\[\\]]");function Qf(n,e,t){if(e.search(KN)>=0)throw au(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new xr(...e.split("."))._internalPath}catch{throw au(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function au(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new E(v.INVALID_ARGUMENT,a+n+c)}function UI(n,e){return n.some(t=>t.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Ne(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new GN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(cl("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class GN extends oa{data(){return super.data()}}function cl(n,e){return typeof e=="string"?Qf(n,e):e instanceof xr?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new E(v.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Yf{}class Ua extends Yf{}function ar(n,e,...t){let r=[];e instanceof Yf&&r.push(e),r=r.concat(t),function(s){const i=s.filter(a=>a instanceof Jf).length,o=s.filter(a=>a instanceof ul).length;if(i>1||i>0&&o>0)throw new E(v.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class ul extends Ua{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new ul(e,t,r)}_apply(e){const t=this._parse(e);return BI(e._query,t),new mt(e.firestore,e.converter,qh(e._query,t))}_parse(e){const t=Vs(e.firestore);return function(s,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new E(v.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){$g(l,u);const d=[];for(const p of l)d.push(Vg(a,s,p));h={arrayValue:{values:d}}}else h=Vg(a,s,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||$g(l,u),h=MI(o,i,l,u==="in"||u==="not-in");return le.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function WN(n,e,t){const r=e,s=cl("where",n);return ul._create(s,r,t)}class Jf extends Yf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Jf(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:be.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)BI(i,a),i=qh(i,a)}(e._query,t),new mt(e.firestore,e.converter,qh(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Xf extends Ua{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Xf(e,t)}_apply(e){const t=function(r,s,i){if(r.startAt!==null)throw new E(v.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new E(v.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ii(s,i);return function(a,c){if(uf(a)===null){const u=Wu(a);u!==null&&qI(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new mt(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Xn(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function HN(n,e="asc"){const t=e,r=cl("orderBy",n);return Xf._create(r,t)}class ll extends Ua{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new ll(e,t,r)}_apply(e){return new mt(e.firestore,e.converter,Zc(e._query,this._limit,this._limitType))}}function QN(n){return SI("limit",n),ll._create("limit",n,"F")}function YN(n){return SI("limitToLast",n),ll._create("limitToLast",n,"L")}class hl extends Ua{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new hl(e,t,r)}_apply(e){const t=$I(e,this.type,this._docOrFields,this._inclusive);return new mt(e.firestore,e.converter,function(r,s){return new Xn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,s,r.endAt)}(e._query,t))}}function JN(...n){return hl._create("startAt",n,!0)}function XN(...n){return hl._create("startAfter",n,!1)}class dl extends Ua{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new dl(e,t,r)}_apply(e){const t=$I(e,this.type,this._docOrFields,this._inclusive);return new mt(e.firestore,e.converter,function(r,s){return new Xn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,s)}(e._query,t))}}function ZN(...n){return dl._create("endBefore",n,!1)}function ex(...n){return dl._create("endAt",n,!0)}function $I(n,e,t,r){if(t[0]=W(t[0]),t[0]instanceof oa)return function(s,i,o,a,c){if(!a)throw new E(v.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of ps(s))if(l.field.isKeyField())u.push(Is(i,a.key));else{const h=a.data.field(l.field);if(af(h))throw new E(v.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new E(v.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Dr(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=Vs(n.firestore);return function(i,o,a,c,u,l){const h=i.explicitOrderBy;if(u.length>h.length)throw new E(v.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<u.length;p++){const g=u[p];if(h[p].field.isKeyField()){if(typeof g!="string")throw new E(v.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!lf(i)&&g.indexOf("/")!==-1)throw new E(v.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const w=i.path.child(de.fromString(g));if(!O.isDocumentKey(w))throw new E(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${w}' is not because it contains an odd number of segments.`);const k=new O(w);d.push(Is(o,k))}else{const w=MI(a,c,g);d.push(w)}}return new Dr(d,l)}(n._query,n.firestore._databaseId,s,e,t,r)}}function Vg(n,e,t){if(typeof(t=W(t))=="string"){if(t==="")throw new E(v.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lf(e)&&t.indexOf("/")!==-1)throw new E(v.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(de.fromString(t));if(!O.isDocumentKey(r))throw new E(v.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Is(n,new O(r))}if(t instanceof Ne)return Is(n,t._key);throw new E(v.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${rl(t)}.`)}function $g(n,e){if(!Array.isArray(n)||n.length===0)throw new E(v.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function BI(n,e){if(e.isInequality()){const r=Wu(n),s=e.field;if(r!==null&&!r.isEqual(s))throw new E(v.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=uf(n);i!==null&&qI(n,s,i)}const t=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new E(v.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(v.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function qI(n,e,t){if(!t.isEqual(e))throw new E(v.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Zf{convertValue(e,t="none"){switch(_s(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ue(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ws(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw $()}}convertObject(e,t){const r={};return Fs(e.fields,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new il(Ue(e.latitude),Ue(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Jw(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Zo(e));default:return null}}convertTimestamp(e){const t=Cr(e);return new Me(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=de.fromString(e);K(F_(r));const s=new kr(r.get(1),r.get(3)),i=new O(r.popFirst(5));return s.isEqual(t)||qe(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fl(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class tx extends Zf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ln(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Qn extends oa{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Do(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(cl("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Do extends Qn{data(e={}){return super.data(e)}}class Pr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new os(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Do(this._firestore,this._userDataWriter,r.key,r,new os(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(v.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new Do(r._firestore,r._userDataWriter,o.doc.key,o.doc,new os(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Do(r._firestore,r._userDataWriter,o.doc.key,o.doc,new os(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:nx(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function nx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return $()}}function jI(n,e){return n instanceof Qn&&e instanceof Qn?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Pr&&e instanceof Pr&&n._firestore===e._firestore&&kI(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pr(n){n=ge(n,Ne);const e=ge(n.firestore,Be);return bI(ut(e),n._key).then(t=>ep(e,n,t))}class Bs extends Zf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Ln(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Ne(this.firestore,null,t)}}function rx(n){n=ge(n,Ne);const e=ge(n.firestore,Be),t=ut(e),r=new Bs(e);return IN(t,n._key).then(s=>new Qn(e,r,n._key,s,new os(s!==null&&s.hasLocalMutations,!0),n.converter))}function sx(n){n=ge(n,Ne);const e=ge(n.firestore,Be);return bI(ut(e),n._key,{source:"server"}).then(t=>ep(e,n,t))}function zI(n){n=ge(n,mt);const e=ge(n.firestore,Be),t=ut(e),r=new Bs(e);return VI(n._query),EI(t,n._query).then(s=>new Pr(e,r,n,s))}function ix(n){n=ge(n,mt);const e=ge(n.firestore,Be),t=ut(e),r=new Bs(e);return bN(t,n._query).then(s=>new Pr(e,r,n,s))}function ox(n){n=ge(n,mt);const e=ge(n.firestore,Be),t=ut(e),r=new Bs(e);return EI(t,n._query,{source:"server"}).then(s=>new Pr(e,r,n,s))}function cu(n,e,t){n=ge(n,Ne);const r=ge(n.firestore,Be),s=fl(n.converter,e,t);return Va(r,[al(Vs(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,Oe.none())])}function uu(n,e,t,...r){n=ge(n,Ne);const s=ge(n.firestore,Be),i=Vs(s);let o;return o=typeof(e=W(e))=="string"||e instanceof xr?Wf(i,"updateDoc",n._key,e,t,r):Gf(i,"updateDoc",n._key,e),Va(s,[o.toMutation(n._key,Oe.exists(!0))])}function ax(n){return Va(ge(n.firestore,Be),[new Bi(n._key,Oe.none())])}function cx(n,e){const t=ge(n.firestore,Be),r=kt(n),s=fl(n.converter,e);return Va(t,[al(Vs(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,Oe.exists(!1))]).then(()=>r)}function KI(n,...e){var t,r,s;n=W(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||ed(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(ed(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(n instanceof Ne)u=ge(n.firestore,Be),l=Vi(n._key.path),c={next:h=>{e[o]&&e[o](ep(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=ge(n,mt);u=ge(h.firestore,Be),l=h._query;const d=new Bs(u);c={next:p=>{e[o]&&e[o](new Pr(u,d,h,p))},error:e[o+1],complete:e[o+2]},VI(n._query)}return function(h,d,p,g){const w=new tl(g),k=new Pf(d,w,p);return h.asyncQueue.enqueueAndForget(async()=>Df(await Ai(h),k)),()=>{w.yc(),h.asyncQueue.enqueueAndForget(async()=>Nf(await Ai(h),k))}}(ut(u),l,a,c)}function ux(n,e){return EN(ut(n=ge(n,Be)),ed(e)?e:{next:e})}function Va(n,e){return function(t,r){const s=new st;return t.asyncQueue.enqueueAndForget(async()=>JD(await jf(t),r,s)),s.promise}(ut(n),e)}function ep(n,e,t){const r=t.docs.get(e._key),s=new Bs(n);return new Qn(n,s,e._key,r,new os(t.hasPendingWrites,t.fromCache),e.converter)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lx={maxAttempts:5};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hx{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Vs(e)}set(e,t,r){this._verifyNotCommitted();const s=dr(e,this._firestore),i=fl(s.converter,t,r),o=al(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,Oe.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=dr(e,this._firestore);let o;return o=typeof(t=W(t))=="string"||t instanceof xr?Wf(this._dataReader,"WriteBatch.update",i._key,t,r,s):Gf(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,Oe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=dr(e,this._firestore);return this._mutations=this._mutations.concat(new Bi(t._key,Oe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new E(v.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function dr(n,e){if((n=W(n)).firestore!==e)throw new E(v.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dx extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Vs(e)}get(e){const t=dr(e,this._firestore),r=new tx(this._firestore);return this._transaction.lookup([t._key]).then(s=>{if(!s||s.length!==1)return $();const i=s[0];if(i.isFoundDocument())return new oa(this._firestore,r,i.key,i,t.converter);if(i.isNoDocument())return new oa(this._firestore,r,t._key,null,t.converter);throw $()})}set(e,t,r){const s=dr(e,this._firestore),i=fl(s.converter,t,r),o=al(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,t,r,...s){const i=dr(e,this._firestore);let o;return o=typeof(t=W(t))=="string"||t instanceof xr?Wf(this._dataReader,"Transaction.update",i._key,t,r,s):Gf(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=dr(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=dr(e,this._firestore),r=new Bs(this._firestore);return super.get(e).then(s=>new Qn(this._firestore,r,t._key,s._document,new os(!1,!1),t.converter))}}function fx(n,e,t){n=ge(n,Be);const r=Object.assign(Object.assign({},lx),t);return function(s){if(s.maxAttempts<1)throw new E(v.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,i,o){const a=new st;return s.asyncQueue.enqueueAndForget(async()=>{const c=await vN(s);new gN(s.asyncQueue,c,o,i,a).run()}),a.promise}(ut(n),s=>e(new dx(n,s)),r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function px(){return new Fa("deleteField")}function mx(){return new Kf("serverTimestamp")}function GI(...n){return new qN("arrayUnion",n)}function WI(...n){return new jN("arrayRemove",n)}function gx(n){return new zN("increment",n)}(function(n,e=!0){(function(t){Ui=t})(Ms),Sr(new On("firestore",(t,{instanceIdentifier:r,options:s})=>{const i=t.getProvider("app").getImmediate(),o=new Be(new kk(t.getProvider("auth-internal")),new xk(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new E(v.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new kr(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),pn(Vm,"3.10.0",n),pn(Vm,"3.10.0","esm2017")})();const yx="@firebase/firestore-compat",vx="0.3.6";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tp(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new E("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bg(){if(typeof Uint8Array>"u")throw new E("unimplemented","Uint8Arrays are not available in this environment.")}function qg(){if(!iR())throw new E("unimplemented","Blobs are unavailable in Firestore in this environment.")}class aa{constructor(e){this._delegate=e}static fromBase64String(e){return qg(),new aa(Ln.fromBase64String(e))}static fromUint8Array(e){return Bg(),new aa(Ln.fromUint8Array(e))}toBase64(){return qg(),this._delegate.toBase64()}toUint8Array(){return Bg(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nd(n){return wx(n,["next","error","complete"])}function wx(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _x{enableIndexedDbPersistence(e,t){return NN(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return xN(e._delegate)}clearIndexedDbPersistence(e){return PN(e._delegate)}}class HI{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof kr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Hn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){AI(this._delegate,e,t,r)}enableNetwork(){return MN(this._delegate)}disableNetwork(){return LN(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,TI("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return ON(this._delegate)}onSnapshotsInSync(e){return ux(this._delegate,e)}get app(){if(!this._appCompat)throw new E("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ci(this,sl(this._delegate,e))}catch(t){throw Ct(t,"collection()","Firestore.collection()")}}doc(e){try{return new Yt(this,kt(this._delegate,e))}catch(t){throw Ct(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new At(this,AN(this._delegate,e))}catch(t){throw Ct(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return fx(this._delegate,t=>e(new QI(this,t)))}batch(){return ut(this._delegate),new YI(new hx(this._delegate,e=>Va(this._delegate,e)))}loadBundle(e){return FN(this._delegate,e)}namedQuery(e){return UN(this._delegate,e).then(t=>t?new At(this,t):null)}}class pl extends Zf{constructor(e){super(),this.firestore=e}convertBytes(e){return new aa(new Ln(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Yt.forKey(t,this.firestore,null)}}function Ix(n){Tk(n)}class QI{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new pl(e)}get(e){const t=as(e);return this._delegate.get(t).then(r=>new ca(this._firestore,new Qn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const s=as(e);return r?(tp("Transaction.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const i=as(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,r,...s),this}delete(e){const t=as(e);return this._delegate.delete(t),this}}class YI{constructor(e){this._delegate=e}set(e,t,r){const s=as(e);return r?(tp("WriteBatch.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const i=as(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,r,...s),this}delete(e){const t=as(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class ks{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Do(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ua(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=ks.INSTANCES;let s=r.get(e);s||(s=new WeakMap,r.set(e,s));let i=s.get(t);return i||(i=new ks(e,new pl(e),t),s.set(t,i)),i}}ks.INSTANCES=new WeakMap;class Yt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new pl(e)}static forPath(e,t,r){if(e.length%2!==0)throw new E("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Yt(t,new Ne(t._delegate,r,new O(e)))}static forKey(e,t,r){return new Yt(t,new Ne(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Ci(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ci(this.firestore,sl(this._delegate,e))}catch(t){throw Ct(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=W(e),e instanceof Ne?CI(this._delegate,e):!1}set(e,t){t=tp("DocumentReference.set",t);try{return t?cu(this._delegate,e,t):cu(this._delegate,e)}catch(r){throw Ct(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?uu(this._delegate,e):uu(this._delegate,e,t,...r)}catch(s){throw Ct(s,"updateDoc()","DocumentReference.update()")}}delete(){return ax(this._delegate)}onSnapshot(...e){const t=JI(e),r=XI(e,s=>new ca(this.firestore,new Qn(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return KI(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=rx(this._delegate):(e==null?void 0:e.source)==="server"?t=sx(this._delegate):t=pr(this._delegate),t.then(r=>new ca(this.firestore,new Qn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Yt(this.firestore,e?this._delegate.withConverter(ks.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Ct(n,e,t){return n.message=n.message.replace(e,t),n}function JI(n){for(const e of n)if(typeof e=="object"&&!nd(e))return e;return{}}function XI(n,e){var t,r;let s;return nd(n[0])?s=n[0]:nd(n[1])?s=n[1]:typeof n[0]=="function"?s={next:n[0],error:n[1],complete:n[2]}:s={next:n[1],error:n[2],complete:n[3]},{next:i=>{s.next&&s.next(e(i))},error:(t=s.error)===null||t===void 0?void 0:t.bind(s),complete:(r=s.complete)===null||r===void 0?void 0:r.bind(s)}}class ca{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Yt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return jI(this._delegate,e._delegate)}}class ua extends ca{data(e){const t=this._delegate.data(e);return Sk(t!==void 0),t}}class At{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new pl(e)}where(e,t,r){try{return new At(this.firestore,ar(this._delegate,WN(e,t,r)))}catch(s){throw Ct(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new At(this.firestore,ar(this._delegate,HN(e,t)))}catch(r){throw Ct(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new At(this.firestore,ar(this._delegate,QN(e)))}catch(t){throw Ct(t,"limit()","Query.limit()")}}limitToLast(e){try{return new At(this.firestore,ar(this._delegate,YN(e)))}catch(t){throw Ct(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new At(this.firestore,ar(this._delegate,JN(...e)))}catch(t){throw Ct(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new At(this.firestore,ar(this._delegate,XN(...e)))}catch(t){throw Ct(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new At(this.firestore,ar(this._delegate,ZN(...e)))}catch(t){throw Ct(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new At(this.firestore,ar(this._delegate,ex(...e)))}catch(t){throw Ct(t,"endAt()","Query.endAt()")}}isEqual(e){return kI(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=ix(this._delegate):(e==null?void 0:e.source)==="server"?t=ox(this._delegate):t=zI(this._delegate),t.then(r=>new rd(this.firestore,new Pr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=JI(e),r=XI(e,s=>new rd(this.firestore,new Pr(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return KI(this._delegate,t,r)}withConverter(e){return new At(this.firestore,e?this._delegate.withConverter(ks.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class bx{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new ua(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class rd{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new At(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ua(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new bx(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new ua(this._firestore,r))})}isEqual(e){return jI(this._delegate,e._delegate)}}class Ci extends At{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Yt(this.firestore,e):null}doc(e){try{return e===void 0?new Yt(this.firestore,kt(this._delegate)):new Yt(this.firestore,kt(this._delegate,e))}catch(t){throw Ct(t,"doc()","CollectionReference.doc()")}}add(e){return cx(this._delegate,e).then(t=>new Yt(this.firestore,t))}isEqual(e){return CI(this._delegate,e._delegate)}withConverter(e){return new Ci(this.firestore,e?this._delegate.withConverter(ks.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function as(n){return ge(n,Ne)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class np{constructor(...e){this._delegate=new xr(...e)}static documentId(){return new np(je.keyField().canonicalString())}isEqual(e){return e=W(e),e instanceof xr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e){this._delegate=e}static serverTimestamp(){const e=mx();return e._methodName="FieldValue.serverTimestamp",new ns(e)}static delete(){const e=px();return e._methodName="FieldValue.delete",new ns(e)}static arrayUnion(...e){const t=GI(...e);return t._methodName="FieldValue.arrayUnion",new ns(t)}static arrayRemove(...e){const t=WI(...e);return t._methodName="FieldValue.arrayRemove",new ns(t)}static increment(e){const t=gx(e);return t._methodName="FieldValue.increment",new ns(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex={Firestore:HI,GeoPoint:il,Timestamp:Me,Blob:aa,Transaction:QI,WriteBatch:YI,DocumentReference:Yt,DocumentSnapshot:ca,Query:At,QueryDocumentSnapshot:ua,QuerySnapshot:rd,CollectionReference:Ci,FieldPath:np,FieldValue:ns,setLogLevel:Ix,CACHE_SIZE_UNLIMITED:RN};function Tx(n,e){n.INTERNAL.registerComponent(new On("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),s=t.getProvider("firestore").getImmediate();return e(r,s)},"PUBLIC").setServiceProps(Object.assign({},Ex)))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sx(n){Tx(n,(e,t)=>new HI(e,t,new _x)),n.registerVersion(yx,vx)}Sx(ya);function rp(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}const ao={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},Hs={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ax(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function ZI(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Cx=Ax,kx=ZI,eb=new Os("auth","Firebase",ZI());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jg=new Ru("@firebase/auth");function Ac(n,...e){jg.logLevel<=me.ERROR&&jg.error(`Auth (${Ms}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ot(n,...e){throw sp(n,...e)}function pt(n,...e){return sp(n,...e)}function tb(n,e,t){const r=Object.assign(Object.assign({},kx()),{[e]:t});return new Os("auth","Firebase",r).create(e,{appName:n.name})}function Gi(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&ot(n,"argument-error"),tb(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function sp(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return eb.create(n,...e)}function R(n,e,...t){if(!n)throw sp(e,...t)}function Dn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ac(e),new Error(e)}function gn(n,e){n||Dn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zg=new Map;function Gt(n){gn(n instanceof Function,"Expected a class definition");let e=zg.get(n);return e?(gn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,zg.set(n,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rx(n,e){const t=ga(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if($c(i,e??{}))return s;ot(s,"already-initialized")}return t.initialize({options:e})}function Dx(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(Gt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function ip(){return Kg()==="http:"||Kg()==="https:"}function Kg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ip()||bv()||"connection"in navigator)?navigator.onLine:!0}function xx(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t){this.shortDelay=e,this.longDelay=t,gn(t>e,"Short delay should be less than long delay!"),this.isMobile=HS()||xd()}get(){return Nx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function op(n,e){gn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nb{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Dn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Dn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Dn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Px={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ox=new $a(3e4,6e4);function Ze(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function lt(n,e,t,r,s={}){return rb(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Mi(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),nb.fetch()(sb(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function rb(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},Px),e);try{const s=new Mx(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw yo(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw yo(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw yo(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw yo(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw tb(n,l,u);ot(n,l)}}catch(s){if(s instanceof Dt)throw s;ot(n,"network-request-failed",{message:String(s)})}}async function tr(n,e,t,r,s={}){const i=await lt(n,e,t,r,s);return"mfaPendingCredential"in i&&ot(n,"multi-factor-auth-required",{_serverResponse:i}),i}function sb(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?op(n.config,s):`${n.config.apiScheme}://${s}`}class Mx{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(pt(this.auth,"network-request-failed")),Ox.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function yo(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=pt(n,e,r);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lx(n,e){return lt(n,"POST","/v1/accounts:delete",e)}async function Fx(n,e){return lt(n,"POST","/v1/accounts:update",e)}async function Ux(n,e){return lt(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Vx(n,e=!1){const t=W(n),r=await t.getIdToken(e),s=ml(r);R(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:No(eh(s.auth_time)),issuedAtTime:No(eh(s.iat)),expirationTime:No(eh(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function eh(n){return Number(n)*1e3}function ml(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return Ac("JWT malformed, contained fewer than 3 sections"),null;try{const s=wv(t);return s?JSON.parse(s):(Ac("Failed to decode base64 JWT payload"),null)}catch(s){return Ac("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function $x(n){const e=ml(n);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof Dt&&Bx(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Bx({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ib{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=No(this.lastLoginAt),this.creationTime=No(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ha(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Yn(n,Ux(t,{idToken:r}));R(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?Kx(i.providerUserInfo):[],a=zx(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new ib(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function jx(n){const e=W(n);await ha(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zx(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function Kx(n){return n.map(e=>{var{providerId:t}=e,r=rp(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gx(n,e){const t=await rb(n,{},async()=>{const r=Mi({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=sb(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",nb.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):$x(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return R(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Gx(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new da;return r&&(R(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(R(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(R(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new da,this.toJSON())}_performRefresh(){return Dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(n,e){R(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ms{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=rp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new qx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new ib(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Yn(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Vx(this,e)}reload(){return jx(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ms(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ha(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Yn(this,Lx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,p=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,w=(a=t.tenantId)!==null&&a!==void 0?a:void 0,k=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,D=(u=t.createdAt)!==null&&u!==void 0?u:void 0,N=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:S,emailVerified:q,isAnonymous:X,providerData:te,stsTokenManager:ye}=t;R(S&&ye,e,"internal-error");const xe=da.fromJSON(this.name,ye);R(typeof S=="string",e,"internal-error"),cr(h,e.name),cr(d,e.name),R(typeof q=="boolean",e,"internal-error"),R(typeof X=="boolean",e,"internal-error"),cr(p,e.name),cr(g,e.name),cr(w,e.name),cr(k,e.name),cr(D,e.name),cr(N,e.name);const Pt=new ms({uid:S,auth:e,email:d,emailVerified:q,displayName:h,isAnonymous:X,photoURL:g,phoneNumber:p,tenantId:w,stsTokenManager:xe,createdAt:D,lastLoginAt:N});return te&&Array.isArray(te)&&(Pt.providerData=te.map(yt=>Object.assign({},yt))),k&&(Pt._redirectEventId=k),Pt}static async _fromIdTokenResponse(e,t,r=!1){const s=new da;s.updateFromServerResponse(t);const i=new ms({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ha(i),i}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ob{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ob.type="NONE";const ki=ob;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gs(n,e,t){return`firebase:${n}:${e}:${t}`}class ai{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=gs(this.userKey,s.apiKey,i),this.fullPersistenceKey=gs("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ms._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new ai(Gt(ki),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||Gt(ki);const o=gs(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=ms._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new ai(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new ai(i,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gg(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(ub(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ab(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lb(e))return"Blackberry";if(hb(e))return"Webos";if(ap(e))return"Safari";if((e.includes("chrome/")||cb(e))&&!e.includes("edge/"))return"Chrome";if(Ba(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ab(n=Fe()){return/firefox\//i.test(n)}function ap(n=Fe()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function cb(n=Fe()){return/crios\//i.test(n)}function ub(n=Fe()){return/iemobile/i.test(n)}function Ba(n=Fe()){return/android/i.test(n)}function lb(n=Fe()){return/blackberry/i.test(n)}function hb(n=Fe()){return/webos/i.test(n)}function Wi(n=Fe()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Wx(n=Fe()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function Hx(n=Fe()){var e;return Wi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Qx(){return Ev()&&document.documentMode===10}function db(n=Fe()){return Wi(n)||Ba(n)||hb(n)||lb(n)||/windows phone/i.test(n)||ub(n)}function Yx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fb(n,e=[]){let t;switch(n){case"Browser":t=Gg(Fe());break;case"Worker":t=`${Gg(Fe())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ms}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xx{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Wg(this),this.idTokenSubscription=new Wg(this),this.beforeStateQueue=new Jx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=eb,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Gt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ai.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ha(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=xx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?W(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Gt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Os("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Gt(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await ai.create(this,[Gt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return R(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,r,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fb(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function at(n){return W(n)}class Wg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Tv(t=>this.observer=t)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function pb(n,e,t){const r=at(n);R(r._canInitEmulator,r,"emulator-config-failed"),R(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=mb(e),{host:o,port:a}=Zx(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||e1()}function mb(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Zx(n){const e=mb(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:Hg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:Hg(o)}}}function Hg(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function e1(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Dn("not implemented")}_getIdTokenResponse(e){return Dn("not implemented")}_linkToIdToken(e,t){return Dn("not implemented")}_getReauthenticationResolver(e){return Dn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function gb(n,e){return lt(n,"POST","/v1/accounts:resetPassword",Ze(n,e))}async function yb(n,e){return lt(n,"POST","/v1/accounts:update",e)}async function t1(n,e){return lt(n,"POST","/v1/accounts:update",Ze(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function n1(n,e){return tr(n,"POST","/v1/accounts:signInWithPassword",Ze(n,e))}async function gl(n,e){return lt(n,"POST","/v1/accounts:sendOobCode",Ze(n,e))}async function r1(n,e){return gl(n,e)}async function s1(n,e){return gl(n,e)}async function i1(n,e){return gl(n,e)}async function o1(n,e){return gl(n,e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function a1(n,e){return tr(n,"POST","/v1/accounts:signInWithEmailLink",Ze(n,e))}async function c1(n,e){return tr(n,"POST","/v1/accounts:signInWithEmailLink",Ze(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa extends Hi{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new fa(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new fa(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return n1(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return a1(e,{email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return yb(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return c1(e,{idToken:t,email:this._email,oobCode:this._password});default:ot(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kn(n,e){return tr(n,"POST","/v1/accounts:signInWithIdp",Ze(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u1="http://localhost";class Fn extends Hi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Fn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):ot("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=rp(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new Fn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Kn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Kn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kn(e,t)}buildRequest(){const e={requestUri:u1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Mi(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function l1(n,e){return lt(n,"POST","/v1/accounts:sendVerificationCode",Ze(n,e))}async function h1(n,e){return tr(n,"POST","/v1/accounts:signInWithPhoneNumber",Ze(n,e))}async function d1(n,e){const t=await tr(n,"POST","/v1/accounts:signInWithPhoneNumber",Ze(n,e));if(t.temporaryProof)throw yo(n,"account-exists-with-different-credential",t);return t}const f1={USER_NOT_FOUND:"user-not-found"};async function p1(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return tr(n,"POST","/v1/accounts:signInWithPhoneNumber",Ze(n,t),f1)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ys extends Hi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ys({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ys({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return h1(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return d1(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return p1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!t&&!s&&!i?null:new ys({verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function m1(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function g1(n){const e=Zs(ho(n)).link,t=e?Zs(ho(e)).deep_link_id:null,r=Zs(ho(n)).deep_link_id;return(r?Zs(ho(r)).link:null)||r||t||e||n}class yl{constructor(e){var t,r,s,i,o,a;const c=Zs(ho(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=m1((s=c.mode)!==null&&s!==void 0?s:null);R(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=g1(e);try{return new yl(t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(){this.providerId=Br.PROVIDER_ID}static credential(e,t){return fa._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=yl.parseLink(t);return R(r,"argument-error"),fa._fromEmailAndCode(e,r.code,r.tenantId)}}Br.PROVIDER_ID="password";Br.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Br.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qi extends nr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ci extends Qi{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return R("providerId"in t&&"signInMethod"in t,"argument-error"),Fn._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return R(e.idToken||e.accessToken,"argument-error"),Fn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ci.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ci.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:a}=e;if(!r&&!s&&!t&&!i||!a)return null;try{return new ci(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:i})}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tn extends Qi{constructor(){super("facebook.com")}static credential(e){return Fn._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Tn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn extends Qi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Fn._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return Sn.credential(t,r)}catch{return null}}}Sn.GOOGLE_SIGN_IN_METHOD="google.com";Sn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class An extends Qi{constructor(){super("github.com")}static credential(e){return Fn._fromParams({providerId:An.PROVIDER_ID,signInMethod:An.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return An.credentialFromTaggedObject(e)}static credentialFromError(e){return An.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return An.credential(e.oauthAccessToken)}catch{return null}}}An.GITHUB_SIGN_IN_METHOD="github.com";An.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const y1="http://localhost";class Ri extends Hi{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Kn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,Kn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Kn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,pendingToken:i}=t;return!r||!s||!i||r!==s?null:new Ri(r,i)}static _create(e,t){return new Ri(e,t)}buildRequest(){return{requestUri:y1,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v1="saml.";class lu extends nr{constructor(e){R(e.startsWith(v1),"argument-error"),super(e)}static credentialFromResult(e){return lu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return lu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Ri.fromJSON(e);return R(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Ri._create(r,t)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Qi{constructor(){super("twitter.com")}static credential(e,t){return Fn._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return Cn.credential(t,r)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vb(n,e){return tr(n,"POST","/v1/accounts:signUp",Ze(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await ms._fromIdTokenResponse(e,r,s),o=Qg(r);return new Jt({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=Qg(r);return new Jt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function Qg(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function w1(n){var e;const t=at(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Jt({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await vb(t,{returnSecureToken:!0}),s=await Jt._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu extends Dt{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,hu.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new hu(e,t,r,s)}}function wb(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?hu._fromErrorAndOperation(n,i,e,r):i})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _b(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function _1(n,e){const t=W(n);await vl(!0,t,e);const{providerUserInfo:r}=await Fx(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),s=_b(r||[]);return t.providerData=t.providerData.filter(i=>s.has(i.providerId)),s.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function cp(n,e,t=!1){const r=await Yn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Jt._forOperation(n,"link",r)}async function vl(n,e,t){await ha(e);const r=_b(e.providerData),s=n===!1?"provider-already-linked":"no-such-provider";R(r.has(t)===n,e.auth,s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ib(n,e,t=!1){const{auth:r}=n,s="reauthenticate";try{const i=await Yn(n,wb(r,s,e,n),t);R(i.idToken,r,"internal-error");const o=ml(i.idToken);R(o,r,"internal-error");const{sub:a}=o;return R(n.uid===a,r,"user-mismatch"),Jt._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&ot(r,"user-mismatch"),i}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bb(n,e,t=!1){const r="signIn",s=await wb(n,r,e),i=await Jt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function wl(n,e){return bb(at(n),e)}async function Eb(n,e){const t=W(n);return await vl(!1,t,e.providerId),cp(t,e)}async function Tb(n,e){return Ib(W(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function I1(n,e){return tr(n,"POST","/v1/accounts:signInWithCustomToken",Ze(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function b1(n,e){const t=at(n),r=await I1(t,{token:e,returnSecureToken:!0}),s=await Jt._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qa{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?up._fromServerResponse(e,t):"totpInfo"in t?lp._fromServerResponse(e,t):ot(e,"internal-error")}}class up extends qa{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new up(t)}}class lp extends qa{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new lp(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _l(n,e,t){var r;R(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),R(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(R(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(R(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function E1(n,e,t){const r=W(n),s={requestType:"PASSWORD_RESET",email:e};t&&_l(r,s,t),await s1(r,s)}async function T1(n,e,t){await gb(W(n),{oobCode:e,newPassword:t})}async function S1(n,e){await t1(W(n),{oobCode:e})}async function Sb(n,e){const t=W(n),r=await gb(t,{oobCode:e}),s=r.requestType;switch(R(s,t,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":R(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":R(r.mfaInfo,t,"internal-error");default:R(r.email,t,"internal-error")}let i=null;return r.mfaInfo&&(i=qa._fromServerResponse(at(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:i},operation:s}}async function A1(n,e){const{data:t}=await Sb(W(n),e);return t.email}async function Ab(n,e,t){const r=at(n),s=await vb(r,{returnSecureToken:!0,email:e,password:t}),i=await Jt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Cb(n,e,t){return wl(W(n),Br.credential(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function C1(n,e,t){const r=W(n),s={requestType:"EMAIL_SIGNIN",email:e};R(t.handleCodeInApp,r,"argument-error"),t&&_l(r,s,t),await i1(r,s)}function k1(n,e){const t=yl.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function R1(n,e,t){const r=W(n),s=Br.credentialWithLink(e,t||la());return R(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),wl(r,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function D1(n,e){return lt(n,"POST","/v1/accounts:createAuthUri",Ze(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function N1(n,e){const t=ip()?la():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:s}=await D1(W(n),r);return s||[]}async function x1(n,e){const t=W(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&_l(t.auth,s,e);const{email:i}=await r1(t.auth,s);i!==n.email&&await n.reload()}async function P1(n,e,t){const r=W(n),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&_l(r.auth,i,t);const{email:o}=await o1(r.auth,i);o!==n.email&&await n.reload()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function O1(n,e){return lt(n,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function M1(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=W(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Yn(r,O1(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function L1(n,e){return kb(W(n),e,null)}function F1(n,e){return kb(W(n),null,e)}async function kb(n,e,t){const{auth:r}=n,i={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(i.email=e),t&&(i.password=t);const o=await Yn(n,yb(r,i));await n._updateTokensIfNecessary(o,!0)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U1(n){var e,t;if(!n)return null;const{providerId:r}=n,s=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},i=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=ml(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new ui(i,a)}}if(!r)return null;switch(r){case"facebook.com":return new V1(i,s);case"github.com":return new $1(i,s);case"google.com":return new B1(i,s);case"twitter.com":return new q1(i,s,n.screenName||null);case"custom":case"anonymous":return new ui(i,null);default:return new ui(i,r,s)}}class ui{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class Rb extends ui{constructor(e,t,r,s){super(e,t,r),this.username=s}}class V1 extends ui{constructor(e,t){super(e,"facebook.com",t)}}class $1 extends Rb{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class B1 extends ui{constructor(e,t){super(e,"google.com",t)}}class q1 extends Rb{constructor(e,t,r){super(e,"twitter.com",t,r)}}function j1(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:U1(t)}function z1(n,e,t,r){return W(n).onIdTokenChanged(e,t,r)}function K1(n,e,t){return W(n).beforeAuthStateChanged(e,t)}function Il(n,e,t,r){return W(n).onAuthStateChanged(e,t,r)}class cs{constructor(e,t,r){this.type=e,this.credential=t,this.auth=r}static _fromIdtoken(e,t){return new cs("enroll",e,t)}static _fromMfaPendingCredential(e){return new cs("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return cs._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return cs._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hp{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=at(e),s=t.customData._serverResponse,i=(s.mfaInfo||[]).map(a=>qa._fromServerResponse(r,a));R(s.mfaPendingCredential,r,"internal-error");const o=cs._fromMfaPendingCredential(s.mfaPendingCredential);return new hp(o,i,async a=>{const c=await a._process(r,o);delete s.mfaInfo,delete s.mfaPendingCredential;const u=Object.assign(Object.assign({},s),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await Jt._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return R(t.user,r,"internal-error"),Jt._forOperation(t.user,t.operationType,u);default:ot(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function G1(n,e){var t;const r=W(n),s=e;return R(e.customData.operationType,r,"argument-error"),R((t=s.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),hp._fromError(r,s)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W1(n,e){return lt(n,"POST","/v2/accounts/mfaEnrollment:start",Ze(n,e))}function H1(n,e){return lt(n,"POST","/v2/accounts/mfaEnrollment:finalize",Ze(n,e))}function Q1(n,e){return lt(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Ze(n,e))}class dp{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>qa._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new dp(e)}async getSession(){return cs._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const r=e,s=await this.getSession(),i=await Yn(this.user,r._process(this.user.auth,s,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const s=await Yn(this.user,Q1(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:i})=>i!==t),await this.user._updateTokensIfNecessary(s),await this.user.reload()}catch(s){throw s}}}const th=new WeakMap;function Y1(n){const e=W(n);return th.has(e)||th.set(e,dp._fromUser(e)),th.get(e)}const du="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(du,"1"),this.storage.removeItem(du),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J1(){const n=Fe();return ap(n)||Wi(n)}const X1=1e3,Z1=10;class Nb extends Db{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=J1()&&Yx(),this.fallbackToPolling=db(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Qx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,Z1):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},X1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Nb.type="LOCAL";const bl=Nb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xb extends Db{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}xb.type="SESSION";const Or=xb;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eP(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new El(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await eP(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}El.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ja(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=ja("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qe(){return window}function nP(n){Qe().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fp(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function rP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function sP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function iP(){return fp()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pb="firebaseLocalStorageDb",oP=1,fu="firebaseLocalStorage",Ob="fbase_key";class za{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Tl(n,e){return n.transaction([fu],e?"readwrite":"readonly").objectStore(fu)}function aP(){const n=indexedDB.deleteDatabase(Pb);return new za(n).toPromise()}function sd(){const n=indexedDB.open(Pb,oP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(fu,{keyPath:Ob})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(fu)?e(r):(r.close(),await aP(),e(await sd()))})})}async function Yg(n,e,t){const r=Tl(n,!0).put({[Ob]:e,value:t});return new za(r).toPromise()}async function cP(n,e){const t=Tl(n,!1).get(e),r=await new za(t).toPromise();return r===void 0?null:r.value}function Jg(n,e){const t=Tl(n,!0).delete(e);return new za(t).toPromise()}const uP=800,lP=3;class Mb{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await sd(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>lP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return fp()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=El._getInstance(iP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await rP(),!this.activeServiceWorker)return;this.sender=new tP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||sP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await sd();return await Yg(e,du,"1"),await Jg(e,du),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Yg(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>cP(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Jg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=Tl(s,!1).getAll();return new za(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),uP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Mb.type="LOCAL";const Di=Mb;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hP(n,e){return lt(n,"POST","/v2/accounts/mfaSignIn:start",Ze(n,e))}function dP(n,e){return lt(n,"POST","/v2/accounts/mfaSignIn:finalize",Ze(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fP(n){return(await lt(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pP(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Lb(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=pt("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",pP().appendChild(r)})}function Fb(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mP=500,gP=6e4,dc=1e12;class yP{constructor(e){this.auth=e,this.counter=dc,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new vP(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||dc;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||dc;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||dc;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class vP{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;R(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=wP(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},gP)},mP))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function wP(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh=Fb("rcb"),_P=new $a(3e4,6e4),IP="https://www.google.com/recaptcha/api.js?";class bP{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Qe().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return R(EP(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Qe().grecaptcha):new Promise((r,s)=>{const i=Qe().setTimeout(()=>{s(pt(e,"network-request-failed"))},_P.get());Qe()[nh]=()=>{Qe().clearTimeout(i),delete Qe()[nh];const a=Qe().grecaptcha;if(!a){s(pt(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${IP}?${Mi({onload:nh,render:"explicit",hl:t})}`;Lb(o).catch(()=>{clearTimeout(i),s(pt(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Qe().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function EP(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class TP{async load(e){return new yP(e)}clearedOneInstance(){}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ub="recaptcha",SP={theme:"light",type:"image"};let AP=class{constructor(e,t=Object.assign({},SP),r){this.parameters=t,this.type=Ub,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=at(r),this.isInvisible=this.parameters.size==="invisible",R(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof e=="string"?document.getElementById(e):e;R(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new TP:new bP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){R(!this.parameters.sitekey,this.auth,"argument-error"),R(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),R(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Qe()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){R(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){R(ip()&&!fp(),this.auth,"internal-error"),await CP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await fP(this.auth);R(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return R(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function CP(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pp{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ys._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function kP(n,e,t){const r=at(n),s=await Sl(r,e,W(t));return new pp(s,i=>wl(r,i))}async function RP(n,e,t){const r=W(n);await vl(!1,r,"phone");const s=await Sl(r.auth,e,W(t));return new pp(s,i=>Eb(r,i))}async function DP(n,e,t){const r=W(n),s=await Sl(r.auth,e,W(t));return new pp(s,i=>Tb(r,i))}async function Sl(n,e,t){var r;const s=await t.verify();try{R(typeof s=="string",n,"argument-error"),R(t.type===Ub,n,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const o=i.session;if("phoneNumber"in i)return R(o.type==="enroll",n,"internal-error"),(await W1(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{R(o.type==="signin",n,"internal-error");const a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;return R(a,n,"missing-multi-factor-info"),(await hP(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await l1(n,{phoneNumber:i.phoneNumber,recaptchaToken:s});return o}}finally{t._reset()}}async function NP(n,e){await cp(W(n),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rs=class Cc{constructor(e){this.providerId=Cc.PROVIDER_ID,this.auth=at(e)}verifyPhoneNumber(e,t){return Sl(this.auth,e,W(t))}static credential(e,t){return ys._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Cc.credentialFromTaggedObject(t)}static credentialFromError(e){return Cc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?ys._fromTokenResponse(t,r):null}};Rs.PROVIDER_ID="phone";Rs.PHONE_SIGN_IN_METHOD="phone";/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qs(n,e){return e?Gt(e):(R(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mp extends Hi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Kn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Kn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Kn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function xP(n){return bb(n.auth,new mp(n),n.bypassAuthState)}function PP(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),Ib(t,new mp(n),n.bypassAuthState)}async function OP(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),cp(t,new mp(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return xP;case"linkViaPopup":case"linkViaRedirect":return OP;case"reauthViaPopup":case"reauthViaRedirect":return PP;default:ot(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const MP=new $a(2e3,1e4);async function LP(n,e,t){const r=at(n);Gi(n,e,nr);const s=qs(r,t);return new qn(r,"signInViaPopup",e,s).executeNotNull()}async function FP(n,e,t){const r=W(n);Gi(r.auth,e,nr);const s=qs(r.auth,t);return new qn(r.auth,"reauthViaPopup",e,s,r).executeNotNull()}async function UP(n,e,t){const r=W(n);Gi(r.auth,e,nr);const s=qs(r.auth,t);return new qn(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class qn extends Vb{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,qn.currentPopupAction&&qn.currentPopupAction.cancel(),qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=ja();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(pt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(pt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(pt(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,MP.get())};e()}}qn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VP="pendingRedirect",xo=new Map;class $P extends Vb{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=xo.get(this.auth._key());if(!e){try{const r=await BP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}xo.set(this.auth._key(),e)}return this.bypassAuthState||xo.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BP(n,e){const t=Bb(e),r=$b(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function gp(n,e){return $b(n)._set(Bb(e),"true")}function qP(){xo.clear()}function yp(n,e){xo.set(n._key(),e)}function $b(n){return Gt(n._redirectPersistence)}function Bb(n){return gs(VP,n.config.apiKey,n.name)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jP(n,e,t){return zP(n,e,t)}async function zP(n,e,t){const r=at(n);Gi(n,e,nr),await r._initializationPromise;const s=qs(r,t);return await gp(s,r),s._openRedirect(r,e,"signInViaRedirect")}function KP(n,e,t){return GP(n,e,t)}async function GP(n,e,t){const r=W(n);Gi(r.auth,e,nr),await r.auth._initializationPromise;const s=qs(r.auth,t);await gp(s,r.auth);const i=await qb(r);return s._openRedirect(r.auth,e,"reauthViaRedirect",i)}function WP(n,e,t){return HP(n,e,t)}async function HP(n,e,t){const r=W(n);Gi(r.auth,e,nr),await r.auth._initializationPromise;const s=qs(r.auth,t);await vl(!1,r,e.providerId),await gp(s,r.auth);const i=await qb(r);return s._openRedirect(r.auth,e,"linkViaRedirect",i)}async function QP(n,e){return await at(n)._initializationPromise,Al(n,e,!1)}async function Al(n,e,t=!1){const r=at(n),s=qs(r,e),o=await new $P(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function qb(n){const e=ja(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YP=10*60*1e3;class jb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!JP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!zb(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(pt(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=YP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Xg(e))}saveEventToCache(e){this.cachedEventUids.add(Xg(e)),this.lastProcessedEventTime=Date.now()}}function Xg(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function zb({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function JP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return zb(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kb(n,e={}){return lt(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,ZP=/^https?/;async function eO(n){if(n.config.emulator)return;const{authorizedDomains:e}=await Kb(n);for(const t of e)try{if(tO(t))return}catch{}ot(n,"unauthorized-domain")}function tO(n){const e=la(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!ZP.test(t))return!1;if(XP.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nO=new $a(3e4,6e4);function Zg(){const n=Qe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function rO(n){return new Promise((e,t)=>{var r,s,i;function o(){Zg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Zg(),t(pt(n,"network-request-failed"))},timeout:nO.get()})}if(!((s=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Qe().gapi)===null||i===void 0)&&i.load)o();else{const a=Fb("iframefcb");return Qe()[a]=()=>{gapi.load?o():t(pt(n,"network-request-failed"))},Lb(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw kc=null,e})}let kc=null;function sO(n){return kc=kc||rO(n),kc}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO=new $a(5e3,15e3),oO="__/auth/iframe",aO="emulator/auth/iframe",cO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},uO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function lO(n){const e=n.config;R(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?op(e,aO):`https://${n.config.authDomain}/${oO}`,r={apiKey:e.apiKey,appName:n.name,v:Ms},s=uO.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Mi(r).slice(1)}`}async function hO(n){const e=await sO(n),t=Qe().gapi;return R(t,n,"internal-error"),e.open({where:document.body,url:lO(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:cO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=pt(n,"network-request-failed"),a=Qe().setTimeout(()=>{i(o)},iO.get());function c(){Qe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},fO=500,pO=600,mO="_blank",gO="http://localhost";class ey{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function yO(n,e,t,r=fO,s=pO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},dO),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Fe().toLowerCase();t&&(a=cb(u)?mO:t),ab(u)&&(e=e||gO,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(Hx(u)&&a!=="_self")return vO(e||"",a),new ey(null);const h=window.open(e||"",a,l);R(h,n,"popup-blocked");try{h.focus()}catch{}return new ey(h)}function vO(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wO="__/auth/handler",_O="emulator/auth/handler";function id(n,e,t,r,s,i){R(n.config.authDomain,n,"auth-domain-config-required"),R(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ms,eventId:s};if(e instanceof nr){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",tA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Qi){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${IO(n)}?${Mi(a).slice(1)}`}function IO({config:n}){return n.emulator?op(n,_O):`https://${n.authDomain}/${wO}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rh="webStorageSupport";class bO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Or,this._completeRedirectFn=Al,this._overrideRedirectResult=yp}async _openPopup(e,t,r,s){var i;gn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=id(e,t,r,la(),s);return yO(e,o,ja())}async _openRedirect(e,t,r,s){return await this._originValidation(e),nP(id(e,t,r,la(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(gn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await hO(e),r=new jb(e);return t.register("authEvent",s=>(R(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(rh,{type:rh},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[rh];o!==void 0&&t(!!o),ot(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=eO(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return db()||ap()||Wi()}}const Gb=bO;class EO{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Dn("unexpected MultiFactorSessionType")}}}class vp extends EO{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new vp(e)}_finalizeEnroll(e,t,r){return H1(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return dP(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Wb{constructor(){}static assertion(e){return vp._fromCredential(e)}}Wb.FACTOR_ID="phone";var ty="@firebase/auth",ny="0.22.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class TO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function SO(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function AO(n){Sr(new On("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{R(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),R(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fb(n)},l=new Xx(a,c,u);return Dx(l,t),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Sr(new On("auth-internal",e=>{const t=at(e.getProvider("auth").getImmediate());return(r=>new TO(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),pn(ty,ny,SO(n)),pn(ty,ny,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CO=5*60,kO=Iv("authIdTokenMaxAge")||CO;let ry=null;const RO=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>kO)return;const s=t==null?void 0:t.token;ry!==s&&(ry=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function DO(n=Md()){const e=ga(n,"auth");if(e.isInitialized())return e.getImmediate();const t=Rx(n,{popupRedirectResolver:Gb,persistence:[Di,bl,Or]}),r=Iv("authTokenSyncURL");if(r){const i=RO(r);K1(t,i,()=>i(t.currentUser)),z1(t,o=>i(o))}const s=_v("auth");return s&&pb(t,`http://${s}`),t}AO("Browser");/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ds(){return window}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const NO=2e3;async function xO(n,e,t){var r;const{BuildInfo:s}=Ds();gn(e.sessionId,"AuthEvent did not contain a session ID");const i=await FO(e.sessionId),o={};return Wi()?o.ibi=s.packageName:Ba()?o.apn=s.packageName:ot(n,"operation-not-supported-in-this-environment"),s.displayName&&(o.appDisplayName=s.displayName),o.sessionId=i,id(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function PO(n){const{BuildInfo:e}=Ds(),t={};Wi()?t.iosBundleId=e.packageName:Ba()?t.androidPackageName=e.packageName:ot(n,"operation-not-supported-in-this-environment"),await Kb(n,t)}function OO(n){const{cordova:e}=Ds();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let s=null;r?e.plugins.browsertab.openUrl(n):s=e.InAppBrowser.open(n,Wx()?"_blank":"_system","location=yes"),t(s)})})}async function MO(n,e,t){const{cordova:r}=Ds();let s=()=>{};try{await new Promise((i,o)=>{let a=null;function c(){var h;i();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(pt(n,"redirect-cancelled-by-user"))},NO))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),Ba()&&document.addEventListener("visibilitychange",l,!1),s=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{s()}}function LO(n){var e,t,r,s,i,o,a,c,u,l;const h=Ds();R(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),R(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),R(typeof((i=(s=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||s===void 0?void 0:s.browsertab)===null||i===void 0?void 0:i.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),R(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),R(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function FO(n){const e=UO(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(s=>s.toString(16).padStart(2,"0")).join("")}function UO(n){if(gn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const VO=20;class $O extends jb{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function BO(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:zO(),postBody:null,tenantId:n.tenantId,error:pt(n,"no-auth-event")}}function qO(n,e){return od()._set(ad(n),e)}async function sy(n){const e=await od()._get(ad(n));return e&&await od()._remove(ad(n)),e}function jO(n,e){var t,r;const s=GO(e);if(s.includes("/__/auth/callback")){const i=Rc(s),o=i.firebaseError?KO(decodeURIComponent(i.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?pt(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:s,postBody:null}}return null}function zO(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<VO;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function od(){return Gt(bl)}function ad(n){return gs("authEvent",n.config.apiKey,n.name)}function KO(n){try{return JSON.parse(n)}catch{return null}}function GO(n){const e=Rc(n),t=e.link?decodeURIComponent(e.link):void 0,r=Rc(t).link,s=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return Rc(s).link||s||r||t||n}function Rc(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Zs(t.join("?"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WO=500;class HO{constructor(){this._redirectPersistence=Or,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=Al,this._overrideRedirectResult=yp}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new $O(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){ot(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,s){LO(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),qP(),await this._originValidation(e);const o=BO(e,r,s);await qO(e,o);const a=await xO(e,o,t),c=await OO(a);return MO(e,i,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=PO(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:s,BuildInfo:i}=Ds(),o=setTimeout(async()=>{await sy(e),t.onEvent(iy())},WO),a=async l=>{clearTimeout(o);const h=await sy(e);let d=null;h&&(l!=null&&l.url)&&(d=jO(h,l.url)),t.onEvent(d||iy())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=s,u=`${i.packageName.toLowerCase()}://`;Ds().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const QO=HO;function iy(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:pt("no-auth-event")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YO(n,e){at(n)._logFramework(e)}var JO="@firebase/auth-compat",XO="0.3.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZO=1e3;function Po(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function eM(){return Po()==="http:"||Po()==="https:"}function Hb(n=Fe()){return!!((Po()==="file:"||Po()==="ionic:"||Po()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function tM(){return xd()||Nd()}function nM(){return Ev()&&(document==null?void 0:document.documentMode)===11}function rM(n=Fe()){return/Edge\/\d+/.test(n)}function sM(n=Fe()){return nM()||rM(n)}function Qb(){try{const n=self.localStorage,e=ja();if(n)return n.setItem(e,"1"),n.removeItem(e),sM()?jo():!0}catch{return wp()&&jo()}return!1}function wp(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function sh(){return(eM()||bv()||Hb())&&!tM()&&Qb()&&!wp()}function Yb(){return Hb()&&typeof document<"u"}async function iM(){return Yb()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},ZO);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function oM(){return typeof window<"u"?window:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kt={LOCAL:"local",NONE:"none",SESSION:"session"},co=R,Jb="persistence";function aM(n,e){if(co(Object.values(Kt).includes(e),n,"invalid-persistence-type"),xd()){co(e!==Kt.SESSION,n,"unsupported-persistence-type");return}if(Nd()){co(e===Kt.NONE,n,"unsupported-persistence-type");return}if(wp()){co(e===Kt.NONE||e===Kt.LOCAL&&jo(),n,"unsupported-persistence-type");return}co(e===Kt.NONE||Qb(),n,"unsupported-persistence-type")}async function cd(n){await n._initializationPromise;const e=Xb(),t=gs(Jb,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function cM(n,e){const t=Xb();if(!t)return[];const r=gs(Jb,n,e);switch(t.getItem(r)){case Kt.NONE:return[ki];case Kt.LOCAL:return[Di,Or];case Kt.SESSION:return[Or];default:return[]}}function Xb(){var n;try{return((n=oM())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uM=R;class mr{constructor(){this.browserResolver=Gt(Gb),this.cordovaResolver=Gt(QO),this.underlyingResolver=null,this._redirectPersistence=Or,this._completeRedirectFn=Al,this._overrideRedirectResult=yp}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,s)}async _openRedirect(e,t,r,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,s)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Yb()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return uM(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await iM();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zb(n){return n.unwrap()}function lM(n){return n.wrapped()}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hM(n){return eE(n)}function dM(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const s=e;s.resolver=new fM(n,G1(n,e))}else if(r){const s=eE(e),i=e;s&&(i.credential=s,i.tenantId=r.tenantId||void 0,i.email=r.email||void 0,i.phoneNumber=r.phoneNumber||void 0)}}function eE(n){const{_tokenResponse:e}=n instanceof Dt?n.customData:n;if(!e)return null;if(!(n instanceof Dt)&&"temporaryProof"in e&&"phoneNumber"in e)return Rs.credentialFromResult(n);const t=e.providerId;if(!t||t===ao.PASSWORD)return null;let r;switch(t){case ao.GOOGLE:r=Sn;break;case ao.FACEBOOK:r=Tn;break;case ao.GITHUB:r=An;break;case ao.TWITTER:r=Cn;break;default:const{oauthIdToken:s,oauthAccessToken:i,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!i&&!o&&!s&&!a?null:a?t.startsWith("saml.")?Ri._create(t,a):Fn._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:s,accessToken:i}):new ci(t).credential({idToken:s,accessToken:i,rawNonce:c})}return n instanceof Dt?r.credentialFromError(n):r.credentialFromResult(n)}function Ft(n,e){return e.catch(t=>{throw t instanceof Dt&&dM(n,t),t}).then(t=>{const r=t.operationType,s=t.user;return{operationType:r,credential:hM(t),additionalUserInfo:j1(t),user:jn.getOrCreate(s)}})}async function ud(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Ft(n,t.confirm(r))}}class fM{constructor(e,t){this.resolver=t,this.auth=lM(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Ft(Zb(this.auth),this.resolver.resolveSignIn(e))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this._delegate=e,this.multiFactor=Y1(e)}static getOrCreate(e){return jn.USER_MAP.has(e)||jn.USER_MAP.set(e,new jn(e)),jn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Ft(this.auth,Eb(this._delegate,e))}async linkWithPhoneNumber(e,t){return ud(this.auth,RP(this._delegate,e,t))}async linkWithPopup(e){return Ft(this.auth,UP(this._delegate,e,mr))}async linkWithRedirect(e){return await cd(at(this.auth)),WP(this._delegate,e,mr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Ft(this.auth,Tb(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return ud(this.auth,DP(this._delegate,e,t))}reauthenticateWithPopup(e){return Ft(this.auth,FP(this._delegate,e,mr))}async reauthenticateWithRedirect(e){return await cd(at(this.auth)),KP(this._delegate,e,mr)}sendEmailVerification(e){return x1(this._delegate,e)}async unlink(e){return await _1(this._delegate,e),this}updateEmail(e){return L1(this._delegate,e)}updatePassword(e){return F1(this._delegate,e)}updatePhoneNumber(e){return NP(this._delegate,e)}updateProfile(e){return M1(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return P1(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}jn.USER_MAP=new WeakMap;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uo=R;class ld{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;uo(r,"invalid-api-key",{appName:e.name}),uo(r,"invalid-api-key",{appName:e.name});const s=typeof window<"u"?mr:void 0;this._delegate=t.initialize({options:{persistence:pM(r,e.name),popupRedirectResolver:s}}),this._delegate._updateErrorMap(Cx),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?jn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){pb(this._delegate,e,t)}applyActionCode(e){return S1(this._delegate,e)}checkActionCode(e){return Sb(this._delegate,e)}confirmPasswordReset(e,t){return T1(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Ft(this._delegate,Ab(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return N1(this._delegate,e)}isSignInWithEmailLink(e){return k1(this._delegate,e)}async getRedirectResult(){uo(sh(),this._delegate,"operation-not-supported-in-this-environment");const e=await QP(this._delegate,mr);return e?Ft(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){YO(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:s,error:i,complete:o}=oy(e,t,r);return this._delegate.onAuthStateChanged(s,i,o)}onIdTokenChanged(e,t,r){const{next:s,error:i,complete:o}=oy(e,t,r);return this._delegate.onIdTokenChanged(s,i,o)}sendSignInLinkToEmail(e,t){return C1(this._delegate,e,t)}sendPasswordResetEmail(e,t){return E1(this._delegate,e,t||void 0)}async setPersistence(e){aM(this._delegate,e);let t;switch(e){case Kt.SESSION:t=Or;break;case Kt.LOCAL:t=await Gt(Di)._isAvailable()?Di:bl;break;case Kt.NONE:t=ki;break;default:return ot("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Ft(this._delegate,w1(this._delegate))}signInWithCredential(e){return Ft(this._delegate,wl(this._delegate,e))}signInWithCustomToken(e){return Ft(this._delegate,b1(this._delegate,e))}signInWithEmailAndPassword(e,t){return Ft(this._delegate,Cb(this._delegate,e,t))}signInWithEmailLink(e,t){return Ft(this._delegate,R1(this._delegate,e,t))}signInWithPhoneNumber(e,t){return ud(this._delegate,kP(this._delegate,e,t))}async signInWithPopup(e){return uo(sh(),this._delegate,"operation-not-supported-in-this-environment"),Ft(this._delegate,LP(this._delegate,e,mr))}async signInWithRedirect(e){return uo(sh(),this._delegate,"operation-not-supported-in-this-environment"),await cd(this._delegate),jP(this._delegate,e,mr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return A1(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}ld.Persistence=Kt;function oy(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const s=r;return{next:o=>s(o&&jn.getOrCreate(o)),error:e,complete:t}}function pM(n,e){const t=cM(n,e);if(typeof self<"u"&&!t.includes(Di)&&t.push(Di),typeof window<"u")for(const r of[bl,Or])t.includes(r)||t.push(r);return t.includes(ki)||t.push(ki),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(){this.providerId="phone",this._delegate=new Rs(Zb(ya.auth()))}static credential(e,t){return Rs.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}_p.PHONE_SIGN_IN_METHOD=Rs.PHONE_SIGN_IN_METHOD;_p.PROVIDER_ID=Rs.PROVIDER_ID;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mM=R;class gM{constructor(e,t,r=ya.app()){var s;mM((s=r.options)===null||s===void 0?void 0:s.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new AP(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yM="auth-compat";function vM(n){n.INTERNAL.registerComponent(new On(yM,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new ld(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:Hs.EMAIL_SIGNIN,PASSWORD_RESET:Hs.PASSWORD_RESET,RECOVER_EMAIL:Hs.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:Hs.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:Hs.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:Hs.VERIFY_EMAIL}},EmailAuthProvider:Br,FacebookAuthProvider:Tn,GithubAuthProvider:An,GoogleAuthProvider:Sn,OAuthProvider:ci,SAMLAuthProvider:lu,PhoneAuthProvider:_p,PhoneMultiFactorGenerator:Wb,RecaptchaVerifier:gM,TwitterAuthProvider:Cn,Auth:ld,AuthCredential:Hi,Error:Dt}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(JO,XO)}vM(ya);var wM="firebase",_M="9.19.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */pn(wM,_M,"app");const IM={apiKey:"AIzaSyAm3hmR29C4OM8c337x1AyUuhADWj72760",authDomain:"groupingapp-a8d06.firebaseapp.com",projectId:"groupingapp-a8d06",storageBucket:"groupingapp-a8d06.appspot.com",messagingSenderId:"821110039717",appId:"1:821110039717:web:0023200352c52eabd7194c"},tE=Du(IM),nE=DN(tE),cn=DO(tE),bM=["type","placeholder","value"],EM=Xt({__name:"input_box",props:["placeholder","type","modelValue"],emits:["update:modelValue"],setup(n,{emit:e}){const t=n,r=s=>{const i=s.target;console.log(i.value),e("update:modelValue",i.value)};return(s,i)=>(ve(),Ie("input",{class:"input",type:t.type,placeholder:t.placeholder,value:t.modelValue,onInput:r},null,40,bM))}});const Zt=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},rE=Zt(EM,[["__scopeId","data-v-ad776ee9"]]),TM=n=>(xs("data-v-04cf7b17"),n=n(),Ps(),n),SM={class:"header_wrapper"},AM={class:"logo"},CM={class:"items"},kM={class:"item"},RM=TM(()=>L("li",{class:"item"},"Coming soon...",-1)),DM={key:0,class:"item"},NM={key:1,class:"item"},xM={key:2,class:"item"},PM={key:3,class:"item"},OM=Xt({__name:"header",setup(n){const e=Oi();let t=wt(!1);const r=()=>{cn.signOut(),e.push("/")};return ma(()=>{Il(cn,s=>{s?t.value=!0:t.value=!1})}),(s,i)=>{const o=bu("RouterLink");return ve(),Ie("div",SM,[L("header",null,[L("h1",AM,[ae(o,{to:"/"},{default:nt(()=>[rt("Grouping App")]),_:1})]),L("ul",CM,[L("li",kM,[ae(o,{to:"/"},{default:nt(()=>[rt("Home")]),_:1})]),RM,L("li",null,[ae(rE,{class:"item",placeholder:"部屋を検索",type:"hidden"})]),J(t)?Za("",!0):(ve(),Ie("li",DM,[ae(o,{to:"/login"},{default:nt(()=>[rt("LogIn")]),_:1})])),J(t)?Za("",!0):(ve(),Ie("li",NM,[ae(o,{to:"/register"},{default:nt(()=>[rt("Register")]),_:1})])),J(t)?(ve(),Ie("li",xM,[ae(o,{to:"/mypage"},{default:nt(()=>[rt("MyPage")]),_:1})])):Za("",!0),J(t)?(ve(),Ie("li",PM,[L("a",{class:"logout",onClick:i[0]||(i[0]=a=>r())},"Logout")])):Za("",!0)])])])}}});const MM=Zt(OM,[["__scopeId","data-v-04cf7b17"]]);const LM={},FM=n=>(xs("data-v-6b2d3fc7"),n=n(),Ps(),n),UM={class:"footer_wrapper"},VM=FM(()=>L("footer",null,[L("ul",null,[L("li",null,[L("a",{class:"contact",href:"/"},"お問合せ")])])],-1)),$M=[VM];function BM(n,e){return ve(),Ie("div",UM,$M)}const qM=Zt(LM,[["render",BM],["__scopeId","data-v-6b2d3fc7"]]),jM={class:"container"},zM=Xt({__name:"App",setup(n){return(e,t)=>(ve(),Ie(_t,null,[ae(MM),L("div",jM,[ae(J(gv))]),ae(qM)],64))}});const KM={class:"box"},GM=Xt({__name:"roombox",props:["roomname"],setup(n){return(e,t)=>{const r=bu("RouterLink");return ve(),Ie("div",KM,[ae(r,{to:{name:"room",params:{id:n.roomname}},class:"box_a"},{default:nt(()=>[rt(In(n.roomname),1)]),_:1},8,["to"])])}}});const WM=Zt(GM,[["__scopeId","data-v-af0aecf2"]]),Oo=sl(nE,"rooms"),us=sl(nE,"users");const HM={},QM={class:"mybutton"};function YM(n,e){return ve(),Ie("button",QM,[jy(n.$slots,"default")])}const _r=Zt(HM,[["render",YM]]),sE=n=>(xs("data-v-696383db"),n=n(),Ps(),n),JM=sE(()=>L("h1",{class:"title"},"Home",-1)),XM={class:"contents_container"},ZM={key:0},eL={class:"input_wrapper"},tL={class:"rooms_wrapper"},nL={class:"rooms",key:"room"},rL={key:1},sL=sE(()=>L("h1",null,"ログインしてないよ",-1)),iL=[sL],oL=Xt({__name:"HomeView",setup(n){Oi();let e=wt(!1),t=wt(""),r=wt([]),s=wt("");async function i(){let a=await zI(Oo),c=[];a.forEach(u=>{c.push(u.id)}),r.value=c}async function o(){if(!s.value){alert("部屋名を入力してください");return}await cu(kt(Oo,s.value),{users:[]}).then(()=>{i()}).catch(a=>{alert(a)})}return ma(()=>{Il(cn,a=>{a?(t.value=a.uid,e.value=!0):e.value=!1}),i()}),(a,c)=>(ve(),Ie("div",null,[JM,L("div",XM,[J(e)?(ve(),Ie("div",ZM,[L("div",eL,[ae(rE,{class:"input",type:"text",modelValue:J(s),"onUpdate:modelValue":c[0]||(c[0]=u=>Ye(s)?s.value=u:s=u),placeholder:"部屋名を入力"},null,8,["modelValue"]),ae(_r,{onClick:o,class:"button"},{default:nt(()=>[rt("部屋作成")]),_:1})]),L("div",tL,[(ve(!0),Ie(_t,null,yc(J(r),u=>(ve(),Ie("div",nL,[ae(WM,{roomname:u},null,8,["roomname"])]))),128))])])):(ve(),Ie("div",rL,iL))])]))}});const aL=Zt(oL,[["__scopeId","data-v-696383db"]]),jt=n=>(xs("data-v-1aadfe48"),n=n(),Ps(),n),cL={class:"contents_container"},uL=jt(()=>L("h1",{class:"title"},"Register",-1)),lL=["onSubmit"],hL={class:"form-group"},dL=jt(()=>L("p",null,"ユーザー名",-1)),fL={class:"form-group radio"},pL=jt(()=>L("p",null,"ポジション",-1)),mL=jt(()=>L("label",{for:"option1"},"WIP/新人",-1)),gL=jt(()=>L("br",null,null,-1)),yL=jt(()=>L("label",{for:"option2"},"TERM",-1)),vL=jt(()=>L("br",null,null,-1)),wL=jt(()=>L("label",{for:"option3"},"GP",-1)),_L=jt(()=>L("br",null,null,-1)),IL=jt(()=>L("label",{for:"option4"},"院生以上",-1)),bL=jt(()=>L("br",null,null,-1)),EL={class:"form-group"},TL=jt(()=>L("p",null,"メールアドレス",-1)),SL={class:"form-group"},AL=jt(()=>L("p",null,"パスワード",-1)),CL=jt(()=>L("p",{class:"or"},"OR",-1)),kL=Xt({__name:"RegisterView",setup(n){const e=Oi();let t=Ns({uid:"",email:"",password:"",username:"",grade:"",status:!1});async function r(){await cu(kt(us,t.uid),{uid:t.uid,username:t.username,email:t.email,grade:t.grade})}const s=()=>{Ab(cn,t.email,t.password).then(i=>{t.uid=i.user.uid,r(),e.push("/")}).catch(i=>{alert(i.message)})};return(i,o)=>{const a=bu("RouterLink");return ve(),Ie("div",cL,[uL,L("form",{onSubmit:iv(s,["prevent"])},[L("div",hL,[dL,$n(L("input",{type:"text",class:"form-control",id:"username","onUpdate:modelValue":o[0]||(o[0]=c=>J(t).username=c),placeholder:"username"},null,512),[[Io,J(t).username]])]),L("div",fL,[pL,$n(L("input",{type:"radio",id:"option1",value:"1","onUpdate:modelValue":o[1]||(o[1]=c=>J(t).grade=c)},null,512),[[ec,J(t).grade]]),mL,gL,$n(L("input",{type:"radio",id:"option2",value:"2","onUpdate:modelValue":o[2]||(o[2]=c=>J(t).grade=c)},null,512),[[ec,J(t).grade]]),yL,vL,$n(L("input",{type:"radio",id:"option3",value:"3","onUpdate:modelValue":o[3]||(o[3]=c=>J(t).grade=c)},null,512),[[ec,J(t).grade]]),wL,_L,$n(L("input",{type:"radio",id:"option4",value:"4","onUpdate:modelValue":o[4]||(o[4]=c=>J(t).grade=c)},null,512),[[ec,J(t).grade]]),IL,bL]),L("div",EL,[TL,$n(L("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":o[5]||(o[5]=c=>J(t).email=c),placeholder:"group@example.com"},null,512),[[Io,J(t).email]])]),L("div",SL,[AL,$n(L("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":o[6]||(o[6]=c=>J(t).password=c),placeholder:"password"},null,512),[[Io,J(t).password]])]),ae(_r,{type:"submit",class:"btn btn-info"},{default:nt(()=>[rt("登録")]),_:1})],40,lL),CL,ae(a,{class:"login",to:"/login"},{default:nt(()=>[rt("ログイン")]),_:1})])}}});const RL=Zt(kL,[["__scopeId","data-v-1aadfe48"]]),iE=n=>(xs("data-v-5d440279"),n=n(),Ps(),n),DL={class:"contents_container"},NL=iE(()=>L("h1",{class:"title"},"LogIn",-1)),xL=["onSubmit"],PL={class:"form-group"},OL={class:"form-group"},ML=iE(()=>L("p",null,"OR",-1)),LL=Xt({__name:"LoginView",setup(n){const e=Oi();let t=wt(""),r=wt("");const s=()=>{Cb(cn,t.value,r.value).then(i=>{i.user,e.push("/")}).catch(i=>{alert(i.message)})};return(i,o)=>{const a=bu("RouterLink");return ve(),Ie("div",DL,[NL,L("form",{onSubmit:iv(s,["prevent"])},[L("div",PL,[$n(L("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":o[0]||(o[0]=c=>Ye(t)?t.value=c:t=c),placeholder:"メールアドレス"},null,512),[[Io,J(t)]])]),L("div",OL,[$n(L("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":o[1]||(o[1]=c=>Ye(r)?r.value=c:r=c),placeholder:"パスワード"},null,512),[[Io,J(r)]])]),ae(_r,{type:"submit",class:"btn-info"},{default:nt(()=>[rt("ログイン")]),_:1})],40,xL),ML,ae(a,{to:"register"},{default:nt(()=>[rt("会員登録")]),_:1})])}}});const FL=Zt(LL,[["__scopeId","data-v-5d440279"]]),UL={};function VL(n,e){return ve(),Ie("h1",null,"LOADING!!!")}const $L=Zt(UL,[["render",VL]]),fc=(n,e)=>{let t=n.length;n.sort(()=>Math.random()-.5);let r=Math.ceil(t/e),s=[];for(let i=0;i<t;i+=r)s.push(n.slice(i,i+r));return s},oE=n=>{if(n=="1")return"WIP/新人";if(n=="2")return"TERM";if(n=="3")return"GP";if(n=="4")return"院生以上"},Ka=n=>(xs("data-v-c636fd21"),n=n(),Ps(),n),BL={key:0},qL={class:"contents_container"},jL=Ka(()=>L("h1",{class:"title"},"MyPage",-1)),zL={class:"box"},KL=Ka(()=>L("div",null,"UID:",-1)),GL=Ka(()=>L("div",null,"ユーザーネーム:",-1)),WL=Ka(()=>L("div",null,"メールアドレス:",-1)),HL=Ka(()=>L("div",null,"ポジション:",-1)),QL={key:1},YL=Xt({__name:"MyPageView",setup(n){const e=Oi();let t=wt(!1),r=Ns({uid:"",email:"",grade:"",username:""});async function s(){if(!t.value)return;let u=(await pr(kt(us,cn.currentUser.uid))).data().uid;r.uid=u}async function i(){if(!t.value)return;let u=(await pr(kt(us,cn.currentUser.uid))).data().email;r.email=u}async function o(){if(!t.value)return;let u=(await pr(kt(us,cn.currentUser.uid))).data().grade;r.grade=u}async function a(){if(!t.value)return;let u=(await pr(kt(us,cn.currentUser.uid))).data().username;r.username=u}return ma(()=>{Il(cn,c=>{c?(t.value=!0,s(),i(),o(),a()):(t.value=!1,e.push("/"))})}),(c,u)=>J(t)?(ve(),Ie("div",BL,[L("div",qL,[jL,L("div",zL,[KL,L("div",null,In(J(r).uid),1),GL,L("div",null,In(J(r).username),1),WL,L("div",null,In(J(r).email),1),HL,L("div",null,In(J(oE)(J(r).grade)),1)])])])):(ve(),Ie("div",QL,[ae($L)]))}});const JL=Zt(YL,[["__scopeId","data-v-c636fd21"]]),XL={class:"shuffleButton_wrapper"},ZL=Xt({__name:"shuffleButton",emits:["add","sub","shuffle"],setup(n,{emit:e}){const t=()=>{e("add")},r=()=>{e("shuffle")},s=()=>{e("sub")};return(i,o)=>(ve(),Ie("div",XL,[ae(_r,{class:"b",onClick:s},{default:nt(()=>[rt("-")]),_:1}),ae(_r,{class:"b",onClick:r},{default:nt(()=>[jy(i.$slots,"default",{},void 0,!0)]),_:3}),ae(_r,{class:"b",onClick:t},{default:nt(()=>[rt("+")]),_:1})]))}});const eF=Zt(ZL,[["__scopeId","data-v-256b393c"]]),aE=n=>(xs("data-v-9e4139c5"),n=n(),Ps(),n),tF={key:0},nF={class:"title"},rF={class:"contents_container"},sF={class:"top_buttons"},iF={class:"shuffle_buttons"},oF=aE(()=>L("h2",null,"MEMBER",-1)),aF={class:"users_wrapper"},cF={class:"users"},uF={key:"u",class:"items"},lF={class:"username"},hF={class:"grade"},dF=aE(()=>L("h2",null,"Groups",-1)),fF={class:"groups_wrapper"},pF={key:"u",class:"groups"},mF={key:"i"},gF={key:1},yF=Xt({__name:"RoomView",setup(n){const e=MS(),t=Oi();let r=wt(""),s=wt(!1),i=wt(e.params.id.toString()),o=wt([]),a=wt([]),c=wt([]),u=wt(2);const l=async N=>{s.value||t.push("/"),a.value=[];let S=[];for(let q of N){let te=(await pr(kt(us,q))).data();S.push(te)}return a.value=S,a.value},h=async N=>(s.value||t.push("/"),(await pr(kt(us,N))).data()),d=()=>{uu(kt(Oo,i.value),{users:WI(r.value)})};async function p(N){const q=(await pr(kt(Oo,N))).data();if(!q)throw Error("data not found");return o.value=q.users,q.users}async function g(N){uu(kt(Oo,N),{users:GI(r.value)})}const w=async N=>{for(const ce of o.value)await h(ce);let S=a.value.filter(ce=>ce.grade=="1"),q=a.value.filter(ce=>ce.grade=="2"),X=a.value.filter(ce=>ce.grade=="3"),te=a.value.filter(ce=>ce.grade=="4"),ye=fc(S,N).sort(()=>Math.random()-.5),xe=fc(q,N).sort(()=>Math.random()-.5),Pt=fc(X,N).sort(()=>Math.random()-.5),yt=fc(te,N).sort(()=>Math.random()-.5),en=[];for(let ce=0;ce<N;ce++){ye[ce]||(ye[ce]=[]),xe[ce]||(xe[ce]=[]),Pt[ce]||(Pt[ce]=[]),yt[ce]||(yt[ce]=[]);let tn=ye[ce].concat(xe[ce],Pt[ce],yt[ce]);en.push(tn)}c.value=en;for(let ce of c.value)ce.sort((tn,yn)=>tn.grade===yn.grade?0:tn.grade<yn.grade?1:-1);return c.value},k=()=>{u.value++},D=()=>{u.value--};return hs(u,()=>{u.value<=0&&u.value==1}),hs(o,()=>{l(o.value)}),hs(a,()=>{a.value=a.value.sort((N,S)=>N.grade===S.grade?0:N.grade<S.grade?1:-1)}),ma(()=>{Il(cn,N=>{N?(r.value=N.uid,s.value=!0):s.value=!1}),p(i.value).then(()=>{l(o.value)})}),(N,S)=>J(s)?(ve(),Ie("div",tF,[L("h1",nF,In(J(i)),1),L("div",rF,[L("div",sF,[ae(_r,{class:"button",onClick:S[0]||(S[0]=q=>{g(J(i)),p(J(i))})},{default:nt(()=>[rt("部屋に参加")]),_:1}),ae(_r,{class:"button",onClick:S[1]||(S[1]=q=>{d(),p(J(i))})},{default:nt(()=>[rt("部屋から抜ける")]),_:1})]),L("div",iF,[ae(eF,{class:"button",onShuffle:S[2]||(S[2]=q=>w(J(u))),onAdd:k,onSub:D},{default:nt(()=>[rt("SHUFFLE INTO "),L("span",null,In(J(u)),1),rt(" PAIRS")]),_:1})]),oF,L("div",aF,[L("div",cF,[(ve(!0),Ie(_t,null,yc(J(a),q=>(ve(),Ie("div",uF,[L("p",lF,In(q.username),1),L("p",hF,In(J(oE)(q.grade)),1)]))),128))])]),dF,L("div",fF,[(ve(!0),Ie(_t,null,yc(J(c),q=>(ve(),Ie("ul",pF,[(ve(!0),Ie(_t,null,yc(q,X=>(ve(),Ie("li",mF,In(X.username),1))),128))]))),128))])])])):(ve(),Ie("div",gF,"ログインしてね"))}});const vF=Zt(yF,[["__scopeId","data-v-9e4139c5"]]),wF=PS({history:Y0("/"),routes:[{path:"/",name:"home",component:aL},{path:"/register",name:"register",component:RL},{path:"/login",name:"login",component:FL},{path:"/mypage",name:"mypage",component:JL},{path:"/room/:id",name:"room",component:vF}]});const cE=N0(zM);cE.use(wF);cE.mount("#app");
