(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(s){if(s.ep)return;s.ep=!0;const i=t(s);fetch(s.href,i)}})();function rd(n,e){const t=Object.create(null),r=n.split(",");for(let s=0;s<r.length;s++)t[r[s]]=!0;return e?s=>!!t[s.toLowerCase()]:s=>!!t[s]}function sd(n){if(Z(n)){const e={};for(let t=0;t<n.length;t++){const r=n[t],s=Ye(r)?oE(r):sd(r);if(s)for(const i in s)e[i]=s[i]}return e}else{if(Ye(n))return n;if(Se(n))return n}}const rE=/;(?![^(]*\))/g,sE=/:([^]+)/,iE=/\/\*.*?\*\//gs;function oE(n){const e={};return n.replace(iE,"").split(rE).forEach(t=>{if(t){const r=t.split(sE);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function id(n){let e="";if(Ye(n))e=n;else if(Z(n))for(let t=0;t<n.length;t++){const r=id(n[t]);r&&(e+=r+" ")}else if(Se(n))for(const t in n)n[t]&&(e+=t+" ");return e.trim()}const aE="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",cE=rd(aE);function ny(n){return!!n||n===""}function uE(n,e){if(n.length!==e.length)return!1;let t=!0;for(let r=0;t&&r<n.length;r++)t=Ic(n[r],e[r]);return t}function Ic(n,e){if(n===e)return!0;let t=vp(n),r=vp(e);if(t||r)return t&&r?n.getTime()===e.getTime():!1;if(t=Co(n),r=Co(e),t||r)return n===e;if(t=Z(n),r=Z(e),t||r)return t&&r?uE(n,e):!1;if(t=Se(n),r=Se(e),t||r){if(!t||!r)return!1;const s=Object.keys(n).length,i=Object.keys(e).length;if(s!==i)return!1;for(const o in n){const a=n.hasOwnProperty(o),c=e.hasOwnProperty(o);if(a&&!c||!a&&c||!Ic(n[o],e[o]))return!1}}return String(n)===String(e)}const ts=n=>Ye(n)?n:n==null?"":Z(n)||Se(n)&&(n.toString===oy||!ie(n.toString))?JSON.stringify(n,ry,2):String(n),ry=(n,e)=>e&&e.__v_isRef?ry(n,e.value):Xs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((t,[r,s])=>(t[`${r} =>`]=s,t),{})}:sy(e)?{[`Set(${e.size})`]:[...e.values()]}:Se(e)&&!Z(e)&&!ay(e)?String(e):e,Ce={},Js=[],an=()=>{},lE=()=>!1,hE=/^on[^a-z]/,su=n=>hE.test(n),od=n=>n.startsWith("onUpdate:"),It=Object.assign,ad=(n,e)=>{const t=n.indexOf(e);t>-1&&n.splice(t,1)},dE=Object.prototype.hasOwnProperty,de=(n,e)=>dE.call(n,e),Z=Array.isArray,Xs=n=>oa(n)==="[object Map]",sy=n=>oa(n)==="[object Set]",vp=n=>oa(n)==="[object Date]",ie=n=>typeof n=="function",Ye=n=>typeof n=="string",Co=n=>typeof n=="symbol",Se=n=>n!==null&&typeof n=="object",iy=n=>Se(n)&&ie(n.then)&&ie(n.catch),oy=Object.prototype.toString,oa=n=>oy.call(n),fE=n=>oa(n).slice(8,-1),ay=n=>oa(n)==="[object Object]",cd=n=>Ye(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,sc=rd(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),iu=n=>{const e=Object.create(null);return t=>e[t]||(e[t]=n(t))},pE=/-(\w)/g,kn=iu(n=>n.replace(pE,(e,t)=>t?t.toUpperCase():"")),mE=/\B([A-Z])/g,Ci=iu(n=>n.replace(mE,"-$1").toLowerCase()),ou=iu(n=>n.charAt(0).toUpperCase()+n.slice(1)),ml=iu(n=>n?`on${ou(n)}`:""),ko=(n,e)=>!Object.is(n,e),ic=(n,e)=>{for(let t=0;t<n.length;t++)n[t](e)},bc=(n,e,t)=>{Object.defineProperty(n,e,{configurable:!0,enumerable:!1,value:t})},Wl=n=>{const e=parseFloat(n);return isNaN(e)?n:e};let wp;const gE=()=>wp||(wp=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let tn;class yE{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=tn,!e&&tn&&(this.index=(tn.scopes||(tn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const t=tn;try{return tn=this,e()}finally{tn=t}}}on(){tn=this}off(){tn=this.parent}stop(e){if(this._active){let t,r;for(t=0,r=this.effects.length;t<r;t++)this.effects[t].stop();for(t=0,r=this.cleanups.length;t<r;t++)this.cleanups[t]();if(this.scopes)for(t=0,r=this.scopes.length;t<r;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function vE(n,e=tn){e&&e.active&&e.effects.push(n)}function wE(){return tn}const ud=n=>{const e=new Set(n);return e.w=0,e.n=0,e},cy=n=>(n.w&yr)>0,uy=n=>(n.n&yr)>0,_E=({deps:n})=>{if(n.length)for(let e=0;e<n.length;e++)n[e].w|=yr},IE=n=>{const{deps:e}=n;if(e.length){let t=0;for(let r=0;r<e.length;r++){const s=e[r];cy(s)&&!uy(s)?s.delete(n):e[t++]=s,s.w&=~yr,s.n&=~yr}e.length=t}},Ql=new WeakMap;let io=0,yr=1;const Yl=30;let nn;const cs=Symbol(""),Jl=Symbol("");class ld{constructor(e,t=null,r){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,vE(this,r)}run(){if(!this.active)return this.fn();let e=nn,t=fr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=nn,nn=this,fr=!0,yr=1<<++io,io<=Yl?_E(this):_p(this),this.fn()}finally{io<=Yl&&IE(this),yr=1<<--io,nn=this.parent,fr=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){nn===this?this.deferStop=!0:this.active&&(_p(this),this.onStop&&this.onStop(),this.active=!1)}}function _p(n){const{deps:e}=n;if(e.length){for(let t=0;t<e.length;t++)e[t].delete(n);e.length=0}}let fr=!0;const ly=[];function ki(){ly.push(fr),fr=!1}function Ri(){const n=ly.pop();fr=n===void 0?!0:n}function Lt(n,e,t){if(fr&&nn){let r=Ql.get(n);r||Ql.set(n,r=new Map);let s=r.get(t);s||r.set(t,s=ud()),hy(s)}}function hy(n,e){let t=!1;io<=Yl?uy(n)||(n.n|=yr,t=!cy(n)):t=!n.has(nn),t&&(n.add(nn),nn.deps.push(n))}function zn(n,e,t,r,s,i){const o=Ql.get(n);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(t==="length"&&Z(n)){const c=Number(r);o.forEach((u,l)=>{(l==="length"||l>=c)&&a.push(u)})}else switch(t!==void 0&&a.push(o.get(t)),e){case"add":Z(n)?cd(t)&&a.push(o.get("length")):(a.push(o.get(cs)),Xs(n)&&a.push(o.get(Jl)));break;case"delete":Z(n)||(a.push(o.get(cs)),Xs(n)&&a.push(o.get(Jl)));break;case"set":Xs(n)&&a.push(o.get(cs));break}if(a.length===1)a[0]&&Xl(a[0]);else{const c=[];for(const u of a)u&&c.push(...u);Xl(ud(c))}}function Xl(n,e){const t=Z(n)?n:[...n];for(const r of t)r.computed&&Ip(r);for(const r of t)r.computed||Ip(r)}function Ip(n,e){(n!==nn||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const bE=rd("__proto__,__v_isRef,__isVue"),dy=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(Co)),EE=hd(),TE=hd(!1,!0),SE=hd(!0),bp=AE();function AE(){const n={};return["includes","indexOf","lastIndexOf"].forEach(e=>{n[e]=function(...t){const r=me(this);for(let i=0,o=this.length;i<o;i++)Lt(r,"get",i+"");const s=r[e](...t);return s===-1||s===!1?r[e](...t.map(me)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{n[e]=function(...t){ki();const r=me(this)[e].apply(this,t);return Ri(),r}}),n}function CE(n){const e=me(this);return Lt(e,"has",n),e.hasOwnProperty(n)}function hd(n=!1,e=!1){return function(r,s,i){if(s==="__v_isReactive")return!n;if(s==="__v_isReadonly")return n;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&i===(n?e?jE:yy:e?gy:my).get(r))return r;const o=Z(r);if(!n){if(o&&de(bp,s))return Reflect.get(bp,s,i);if(s==="hasOwnProperty")return CE}const a=Reflect.get(r,s,i);return(Co(s)?dy.has(s):bE(s))||(n||Lt(r,"get",s),e)?a:vt(a)?o&&cd(s)?a:a.value:Se(a)?n?vy(a):aa(a):a}}const kE=fy(),RE=fy(!0);function fy(n=!1){return function(t,r,s,i){let o=t[r];if(ai(o)&&vt(o)&&!vt(s))return!1;if(!n&&(!Ec(s)&&!ai(s)&&(o=me(o),s=me(s)),!Z(t)&&vt(o)&&!vt(s)))return o.value=s,!0;const a=Z(t)&&cd(r)?Number(r)<t.length:de(t,r),c=Reflect.set(t,r,s,i);return t===me(i)&&(a?ko(s,o)&&zn(t,"set",r,s):zn(t,"add",r,s)),c}}function DE(n,e){const t=de(n,e);n[e];const r=Reflect.deleteProperty(n,e);return r&&t&&zn(n,"delete",e,void 0),r}function NE(n,e){const t=Reflect.has(n,e);return(!Co(e)||!dy.has(e))&&Lt(n,"has",e),t}function xE(n){return Lt(n,"iterate",Z(n)?"length":cs),Reflect.ownKeys(n)}const py={get:EE,set:kE,deleteProperty:DE,has:NE,ownKeys:xE},PE={get:SE,set(n,e){return!0},deleteProperty(n,e){return!0}},OE=It({},py,{get:TE,set:RE}),dd=n=>n,au=n=>Reflect.getPrototypeOf(n);function Ua(n,e,t=!1,r=!1){n=n.__v_raw;const s=me(n),i=me(e);t||(e!==i&&Lt(s,"get",e),Lt(s,"get",i));const{has:o}=au(s),a=r?dd:t?md:Ro;if(o.call(s,e))return a(n.get(e));if(o.call(s,i))return a(n.get(i));n!==s&&n.get(e)}function Va(n,e=!1){const t=this.__v_raw,r=me(t),s=me(n);return e||(n!==s&&Lt(r,"has",n),Lt(r,"has",s)),n===s?t.has(n):t.has(n)||t.has(s)}function Ba(n,e=!1){return n=n.__v_raw,!e&&Lt(me(n),"iterate",cs),Reflect.get(n,"size",n)}function Ep(n){n=me(n);const e=me(this);return au(e).has.call(e,n)||(e.add(n),zn(e,"add",n,n)),this}function Tp(n,e){e=me(e);const t=me(this),{has:r,get:s}=au(t);let i=r.call(t,n);i||(n=me(n),i=r.call(t,n));const o=s.call(t,n);return t.set(n,e),i?ko(e,o)&&zn(t,"set",n,e):zn(t,"add",n,e),this}function Sp(n){const e=me(this),{has:t,get:r}=au(e);let s=t.call(e,n);s||(n=me(n),s=t.call(e,n)),r&&r.call(e,n);const i=e.delete(n);return s&&zn(e,"delete",n,void 0),i}function Ap(){const n=me(this),e=n.size!==0,t=n.clear();return e&&zn(n,"clear",void 0,void 0),t}function $a(n,e){return function(r,s){const i=this,o=i.__v_raw,a=me(o),c=e?dd:n?md:Ro;return!n&&Lt(a,"iterate",cs),o.forEach((u,l)=>r.call(s,c(u),c(l),i))}}function qa(n,e,t){return function(...r){const s=this.__v_raw,i=me(s),o=Xs(i),a=n==="entries"||n===Symbol.iterator&&o,c=n==="keys"&&o,u=s[n](...r),l=t?dd:e?md:Ro;return!e&&Lt(i,"iterate",c?Jl:cs),{next(){const{value:h,done:d}=u.next();return d?{value:h,done:d}:{value:a?[l(h[0]),l(h[1])]:l(h),done:d}},[Symbol.iterator](){return this}}}}function tr(n){return function(...e){return n==="delete"?!1:this}}function ME(){const n={get(i){return Ua(this,i)},get size(){return Ba(this)},has:Va,add:Ep,set:Tp,delete:Sp,clear:Ap,forEach:$a(!1,!1)},e={get(i){return Ua(this,i,!1,!0)},get size(){return Ba(this)},has:Va,add:Ep,set:Tp,delete:Sp,clear:Ap,forEach:$a(!1,!0)},t={get(i){return Ua(this,i,!0)},get size(){return Ba(this,!0)},has(i){return Va.call(this,i,!0)},add:tr("add"),set:tr("set"),delete:tr("delete"),clear:tr("clear"),forEach:$a(!0,!1)},r={get(i){return Ua(this,i,!0,!0)},get size(){return Ba(this,!0)},has(i){return Va.call(this,i,!0)},add:tr("add"),set:tr("set"),delete:tr("delete"),clear:tr("clear"),forEach:$a(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=qa(i,!1,!1),t[i]=qa(i,!0,!1),e[i]=qa(i,!1,!0),r[i]=qa(i,!0,!0)}),[n,t,e,r]}const[LE,FE,UE,VE]=ME();function fd(n,e){const t=e?n?VE:UE:n?FE:LE;return(r,s,i)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?r:Reflect.get(de(t,s)&&s in r?t:r,s,i)}const BE={get:fd(!1,!1)},$E={get:fd(!1,!0)},qE={get:fd(!0,!1)},my=new WeakMap,gy=new WeakMap,yy=new WeakMap,jE=new WeakMap;function zE(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function KE(n){return n.__v_skip||!Object.isExtensible(n)?0:zE(fE(n))}function aa(n){return ai(n)?n:pd(n,!1,py,BE,my)}function GE(n){return pd(n,!1,OE,$E,gy)}function vy(n){return pd(n,!0,PE,qE,yy)}function pd(n,e,t,r,s){if(!Se(n)||n.__v_raw&&!(e&&n.__v_isReactive))return n;const i=s.get(n);if(i)return i;const o=KE(n);if(o===0)return n;const a=new Proxy(n,o===2?r:t);return s.set(n,a),a}function Zs(n){return ai(n)?Zs(n.__v_raw):!!(n&&n.__v_isReactive)}function ai(n){return!!(n&&n.__v_isReadonly)}function Ec(n){return!!(n&&n.__v_isShallow)}function wy(n){return Zs(n)||ai(n)}function me(n){const e=n&&n.__v_raw;return e?me(e):n}function _y(n){return bc(n,"__v_skip",!0),n}const Ro=n=>Se(n)?aa(n):n,md=n=>Se(n)?vy(n):n;function Iy(n){fr&&nn&&(n=me(n),hy(n.dep||(n.dep=ud())))}function by(n,e){n=me(n);const t=n.dep;t&&Xl(t)}function vt(n){return!!(n&&n.__v_isRef===!0)}function HE(n){return Ey(n,!1)}function WE(n){return Ey(n,!0)}function Ey(n,e){return vt(n)?n:new QE(n,e)}class QE{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:me(e),this._value=t?e:Ro(e)}get value(){return Iy(this),this._value}set value(e){const t=this.__v_isShallow||Ec(e)||ai(e);e=t?e:me(e),ko(e,this._rawValue)&&(this._rawValue=e,this._value=t?e:Ro(e),by(this))}}function us(n){return vt(n)?n.value:n}const YE={get:(n,e,t)=>us(Reflect.get(n,e,t)),set:(n,e,t,r)=>{const s=n[e];return vt(s)&&!vt(t)?(s.value=t,!0):Reflect.set(n,e,t,r)}};function Ty(n){return Zs(n)?n:new Proxy(n,YE)}var Sy;class JE{constructor(e,t,r,s){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this[Sy]=!1,this._dirty=!0,this.effect=new ld(e,()=>{this._dirty||(this._dirty=!0,by(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=me(this);return Iy(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}Sy="__v_isReadonly";function XE(n,e,t=!1){let r,s;const i=ie(n);return i?(r=n,s=an):(r=n.get,s=n.set),new JE(r,s,i||!s,t)}function pr(n,e,t,r){let s;try{s=r?n(...r):n()}catch(i){cu(i,e,t)}return s}function Qt(n,e,t,r){if(ie(n)){const i=pr(n,e,t,r);return i&&iy(i)&&i.catch(o=>{cu(o,e,t)}),i}const s=[];for(let i=0;i<n.length;i++)s.push(Qt(n[i],e,t,r));return s}function cu(n,e,t,r=!0){const s=e?e.vnode:null;if(e){let i=e.parent;const o=e.proxy,a=t;for(;i;){const u=i.ec;if(u){for(let l=0;l<u.length;l++)if(u[l](n,o,a)===!1)return}i=i.parent}const c=e.appContext.config.errorHandler;if(c){pr(c,null,10,[n,o,a]);return}}ZE(n,t,s,r)}function ZE(n,e,t,r=!0){console.error(n)}let Do=!1,Zl=!1;const yt=[];let gn=0;const ei=[];let Mn=null,Gr=0;const Ay=Promise.resolve();let gd=null;function Cy(n){const e=gd||Ay;return n?e.then(this?n.bind(this):n):e}function e0(n){let e=gn+1,t=yt.length;for(;e<t;){const r=e+t>>>1;No(yt[r])<n?e=r+1:t=r}return e}function yd(n){(!yt.length||!yt.includes(n,Do&&n.allowRecurse?gn+1:gn))&&(n.id==null?yt.push(n):yt.splice(e0(n.id),0,n),ky())}function ky(){!Do&&!Zl&&(Zl=!0,gd=Ay.then(Dy))}function t0(n){const e=yt.indexOf(n);e>gn&&yt.splice(e,1)}function n0(n){Z(n)?ei.push(...n):(!Mn||!Mn.includes(n,n.allowRecurse?Gr+1:Gr))&&ei.push(n),ky()}function Cp(n,e=Do?gn+1:0){for(;e<yt.length;e++){const t=yt[e];t&&t.pre&&(yt.splice(e,1),e--,t())}}function Ry(n){if(ei.length){const e=[...new Set(ei)];if(ei.length=0,Mn){Mn.push(...e);return}for(Mn=e,Mn.sort((t,r)=>No(t)-No(r)),Gr=0;Gr<Mn.length;Gr++)Mn[Gr]();Mn=null,Gr=0}}const No=n=>n.id==null?1/0:n.id,r0=(n,e)=>{const t=No(n)-No(e);if(t===0){if(n.pre&&!e.pre)return-1;if(e.pre&&!n.pre)return 1}return t};function Dy(n){Zl=!1,Do=!0,yt.sort(r0);const e=an;try{for(gn=0;gn<yt.length;gn++){const t=yt[gn];t&&t.active!==!1&&pr(t,null,14)}}finally{gn=0,yt.length=0,Ry(),Do=!1,gd=null,(yt.length||ei.length)&&Dy()}}function s0(n,e,...t){if(n.isUnmounted)return;const r=n.vnode.props||Ce;let s=t;const i=e.startsWith("update:"),o=i&&e.slice(7);if(o&&o in r){const l=`${o==="modelValue"?"model":o}Modifiers`,{number:h,trim:d}=r[l]||Ce;d&&(s=t.map(p=>Ye(p)?p.trim():p)),h&&(s=t.map(Wl))}let a,c=r[a=ml(e)]||r[a=ml(kn(e))];!c&&i&&(c=r[a=ml(Ci(e))]),c&&Qt(c,n,6,s);const u=r[a+"Once"];if(u){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,Qt(u,n,6,s)}}function Ny(n,e,t=!1){const r=e.emitsCache,s=r.get(n);if(s!==void 0)return s;const i=n.emits;let o={},a=!1;if(!ie(n)){const c=u=>{const l=Ny(u,e,!0);l&&(a=!0,It(o,l))};!t&&e.mixins.length&&e.mixins.forEach(c),n.extends&&c(n.extends),n.mixins&&n.mixins.forEach(c)}return!i&&!a?(Se(n)&&r.set(n,null),null):(Z(i)?i.forEach(c=>o[c]=null):It(o,i),Se(n)&&r.set(n,o),o)}function uu(n,e){return!n||!su(e)?!1:(e=e.slice(2).replace(/Once$/,""),de(n,e[0].toLowerCase()+e.slice(1))||de(n,Ci(e))||de(n,e))}let Bt=null,lu=null;function Tc(n){const e=Bt;return Bt=n,lu=n&&n.type.__scopeId||null,e}function xy(n){lu=n}function Py(){lu=null}function Ln(n,e=Bt,t){if(!e||n._n)return n;const r=(...s)=>{r._d&&Fp(-1);const i=Tc(e);let o;try{o=n(...s)}finally{Tc(i),r._d&&Fp(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function gl(n){const{type:e,vnode:t,proxy:r,withProxy:s,props:i,propsOptions:[o],slots:a,attrs:c,emit:u,render:l,renderCache:h,data:d,setupState:p,ctx:g,inheritAttrs:v}=n;let A,R;const V=Tc(n);try{if(t.shapeFlag&4){const W=s||r;A=mn(l.call(W,W,h,i,p,d,g)),R=c}else{const W=e;A=mn(W.length>1?W(i,{attrs:c,slots:a,emit:u}):W(i,null)),R=e.props?c:i0(c)}}catch(W){po.length=0,cu(W,n,1),A=Re(cn)}let D=A;if(R&&v!==!1){const W=Object.keys(R),{shapeFlag:X}=D;W.length&&X&7&&(o&&W.some(od)&&(R=o0(R,o)),D=vr(D,R))}return t.dirs&&(D=vr(D),D.dirs=D.dirs?D.dirs.concat(t.dirs):t.dirs),t.transition&&(D.transition=t.transition),A=D,Tc(V),A}const i0=n=>{let e;for(const t in n)(t==="class"||t==="style"||su(t))&&((e||(e={}))[t]=n[t]);return e},o0=(n,e)=>{const t={};for(const r in n)(!od(r)||!(r.slice(9)in e))&&(t[r]=n[r]);return t};function a0(n,e,t){const{props:r,children:s,component:i}=n,{props:o,children:a,patchFlag:c}=e,u=i.emitsOptions;if(e.dirs||e.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return r?kp(r,o,u):!!o;if(c&8){const l=e.dynamicProps;for(let h=0;h<l.length;h++){const d=l[h];if(o[d]!==r[d]&&!uu(u,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:r===o?!1:r?o?kp(r,o,u):!0:!!o;return!1}function kp(n,e,t){const r=Object.keys(e);if(r.length!==Object.keys(n).length)return!0;for(let s=0;s<r.length;s++){const i=r[s];if(e[i]!==n[i]&&!uu(t,i))return!0}return!1}function c0({vnode:n,parent:e},t){for(;e&&e.subTree===n;)(n=e.vnode).el=t,e=e.parent}const u0=n=>n.__isSuspense;function l0(n,e){e&&e.pendingBranch?Z(n)?e.effects.push(...n):e.effects.push(n):n0(n)}function oc(n,e){if(qe){let t=qe.provides;const r=qe.parent&&qe.parent.provides;r===t&&(t=qe.provides=Object.create(r)),t[n]=e}}function $n(n,e,t=!1){const r=qe||Bt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&n in s)return s[n];if(arguments.length>1)return t&&ie(e)?e.call(r.proxy):e}}const ja={};function ac(n,e,t){return Oy(n,e,t)}function Oy(n,e,{immediate:t,deep:r,flush:s,onTrack:i,onTrigger:o}=Ce){const a=wE()===(qe==null?void 0:qe.scope)?qe:null;let c,u=!1,l=!1;if(vt(n)?(c=()=>n.value,u=Ec(n)):Zs(n)?(c=()=>n,r=!0):Z(n)?(l=!0,u=n.some(D=>Zs(D)||Ec(D)),c=()=>n.map(D=>{if(vt(D))return D.value;if(Zs(D))return ns(D);if(ie(D))return pr(D,a,2)})):ie(n)?e?c=()=>pr(n,a,2):c=()=>{if(!(a&&a.isUnmounted))return h&&h(),Qt(n,a,3,[d])}:c=an,e&&r){const D=c;c=()=>ns(D())}let h,d=D=>{h=R.onStop=()=>{pr(D,a,4)}},p;if(Po)if(d=an,e?t&&Qt(e,a,3,[c(),l?[]:void 0,d]):c(),s==="sync"){const D=oT();p=D.__watcherHandles||(D.__watcherHandles=[])}else return an;let g=l?new Array(n.length).fill(ja):ja;const v=()=>{if(R.active)if(e){const D=R.run();(r||u||(l?D.some((W,X)=>ko(W,g[X])):ko(D,g)))&&(h&&h(),Qt(e,a,3,[D,g===ja?void 0:l&&g[0]===ja?[]:g,d]),g=D)}else R.run()};v.allowRecurse=!!e;let A;s==="sync"?A=v:s==="post"?A=()=>Rt(v,a&&a.suspense):(v.pre=!0,a&&(v.id=a.uid),A=()=>yd(v));const R=new ld(c,A);e?t?v():g=R.run():s==="post"?Rt(R.run.bind(R),a&&a.suspense):R.run();const V=()=>{R.stop(),a&&a.scope&&ad(a.scope.effects,R)};return p&&p.push(V),V}function h0(n,e,t){const r=this.proxy,s=Ye(n)?n.includes(".")?My(r,n):()=>r[n]:n.bind(r,r);let i;ie(e)?i=e:(i=e.handler,t=e);const o=qe;ci(this);const a=Oy(s,i.bind(r),t);return o?ci(o):ls(),a}function My(n,e){const t=e.split(".");return()=>{let r=n;for(let s=0;s<t.length&&r;s++)r=r[t[s]];return r}}function ns(n,e){if(!Se(n)||n.__v_skip||(e=e||new Set,e.has(n)))return n;if(e.add(n),vt(n))ns(n.value,e);else if(Z(n))for(let t=0;t<n.length;t++)ns(n[t],e);else if(sy(n)||Xs(n))n.forEach(t=>{ns(t,e)});else if(ay(n))for(const t in n)ns(n[t],e);return n}function d0(){const n={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Vy(()=>{n.isMounted=!0}),By(()=>{n.isUnmounting=!0}),n}const Gt=[Function,Array],f0={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:Gt,onEnter:Gt,onAfterEnter:Gt,onEnterCancelled:Gt,onBeforeLeave:Gt,onLeave:Gt,onAfterLeave:Gt,onLeaveCancelled:Gt,onBeforeAppear:Gt,onAppear:Gt,onAfterAppear:Gt,onAppearCancelled:Gt},setup(n,{slots:e}){const t=X0(),r=d0();let s;return()=>{const i=e.default&&Fy(e.default(),!0);if(!i||!i.length)return;let o=i[0];if(i.length>1){for(const v of i)if(v.type!==cn){o=v;break}}const a=me(n),{mode:c}=a;if(r.isLeaving)return yl(o);const u=Rp(o);if(!u)return yl(o);const l=eh(u,a,r,t);th(u,l);const h=t.subTree,d=h&&Rp(h);let p=!1;const{getTransitionKey:g}=u.type;if(g){const v=g();s===void 0?s=v:v!==s&&(s=v,p=!0)}if(d&&d.type!==cn&&(!Hr(u,d)||p)){const v=eh(d,a,r,t);if(th(d,v),c==="out-in")return r.isLeaving=!0,v.afterLeave=()=>{r.isLeaving=!1,t.update.active!==!1&&t.update()},yl(o);c==="in-out"&&u.type!==cn&&(v.delayLeave=(A,R,V)=>{const D=Ly(r,d);D[String(d.key)]=d,A._leaveCb=()=>{R(),A._leaveCb=void 0,delete l.delayedLeave},l.delayedLeave=V})}return o}}},p0=f0;function Ly(n,e){const{leavingVNodes:t}=n;let r=t.get(e.type);return r||(r=Object.create(null),t.set(e.type,r)),r}function eh(n,e,t,r){const{appear:s,mode:i,persisted:o=!1,onBeforeEnter:a,onEnter:c,onAfterEnter:u,onEnterCancelled:l,onBeforeLeave:h,onLeave:d,onAfterLeave:p,onLeaveCancelled:g,onBeforeAppear:v,onAppear:A,onAfterAppear:R,onAppearCancelled:V}=e,D=String(n.key),W=Ly(t,n),X=(J,Ae)=>{J&&Qt(J,r,9,Ae)},ne=(J,Ae)=>{const be=Ae[1];X(J,Ae),Z(J)?J.every(pt=>pt.length<=1)&&be():J.length<=1&&be()},ge={mode:i,persisted:o,beforeEnter(J){let Ae=a;if(!t.isMounted)if(s)Ae=v||a;else return;J._leaveCb&&J._leaveCb(!0);const be=W[D];be&&Hr(n,be)&&be.el._leaveCb&&be.el._leaveCb(),X(Ae,[J])},enter(J){let Ae=c,be=u,pt=l;if(!t.isMounted)if(s)Ae=A||c,be=R||u,pt=V||l;else return;let mt=!1;const Jt=J._enterCb=Pn=>{mt||(mt=!0,Pn?X(pt,[J]):X(be,[J]),ge.delayedLeave&&ge.delayedLeave(),J._enterCb=void 0)};Ae?ne(Ae,[J,Jt]):Jt()},leave(J,Ae){const be=String(n.key);if(J._enterCb&&J._enterCb(!0),t.isUnmounting)return Ae();X(h,[J]);let pt=!1;const mt=J._leaveCb=Jt=>{pt||(pt=!0,Ae(),Jt?X(g,[J]):X(p,[J]),J._leaveCb=void 0,W[be]===n&&delete W[be])};W[be]=n,d?ne(d,[J,mt]):mt()},clone(J){return eh(J,e,t,r)}};return ge}function yl(n){if(hu(n))return n=vr(n),n.children=null,n}function Rp(n){return hu(n)?n.children?n.children[0]:void 0:n}function th(n,e){n.shapeFlag&6&&n.component?th(n.component.subTree,e):n.shapeFlag&128?(n.ssContent.transition=e.clone(n.ssContent),n.ssFallback.transition=e.clone(n.ssFallback)):n.transition=e}function Fy(n,e=!1,t){let r=[],s=0;for(let i=0;i<n.length;i++){let o=n[i];const a=t==null?o.key:String(t)+String(o.key!=null?o.key:i);o.type===xt?(o.patchFlag&128&&s++,r=r.concat(Fy(o.children,e,a))):(e||o.type!==cn)&&r.push(a!=null?vr(o,{key:a}):o)}if(s>1)for(let i=0;i<r.length;i++)r[i].patchFlag=-2;return r}function vd(n){return ie(n)?{setup:n,name:n.name}:n}const cc=n=>!!n.type.__asyncLoader,hu=n=>n.type.__isKeepAlive;function m0(n,e){Uy(n,"a",e)}function g0(n,e){Uy(n,"da",e)}function Uy(n,e,t=qe){const r=n.__wdc||(n.__wdc=()=>{let s=t;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(du(e,r,t),t){let s=t.parent;for(;s&&s.parent;)hu(s.parent.vnode)&&y0(r,e,t,s),s=s.parent}}function y0(n,e,t,r){const s=du(e,n,r,!0);$y(()=>{ad(r[e],s)},t)}function du(n,e,t=qe,r=!1){if(t){const s=t[n]||(t[n]=[]),i=e.__weh||(e.__weh=(...o)=>{if(t.isUnmounted)return;ki(),ci(t);const a=Qt(e,t,n,o);return ls(),Ri(),a});return r?s.unshift(i):s.push(i),i}}const Qn=n=>(e,t=qe)=>(!Po||n==="sp")&&du(n,(...r)=>e(...r),t),v0=Qn("bm"),Vy=Qn("m"),w0=Qn("bu"),_0=Qn("u"),By=Qn("bum"),$y=Qn("um"),I0=Qn("sp"),b0=Qn("rtg"),E0=Qn("rtc");function T0(n,e=qe){du("ec",n,e)}function pn(n,e){const t=Bt;if(t===null)return n;const r=mu(t)||t.proxy,s=n.dirs||(n.dirs=[]);for(let i=0;i<e.length;i++){let[o,a,c,u=Ce]=e[i];o&&(ie(o)&&(o={mounted:o,updated:o}),o.deep&&ns(a),s.push({dir:o,instance:r,value:a,oldValue:void 0,arg:c,modifiers:u}))}return n}function Br(n,e,t,r){const s=n.dirs,i=e&&e.dirs;for(let o=0;o<s.length;o++){const a=s[o];i&&(a.oldValue=i[o].value);let c=a.dir[r];c&&(ki(),Qt(c,t,8,[n.el,a,n,e]),Ri())}}const qy="components";function Di(n,e){return A0(qy,n,!0,e)||n}const S0=Symbol();function A0(n,e,t=!0,r=!1){const s=Bt||qe;if(s){const i=s.type;if(n===qy){const a=rT(i,!1);if(a&&(a===e||a===kn(e)||a===ou(kn(e))))return i}const o=Dp(s[n]||i[n],e)||Dp(s.appContext[n],e);return!o&&r?i:o}}function Dp(n,e){return n&&(n[e]||n[kn(e)]||n[ou(kn(e))])}function jy(n,e,t,r){let s;const i=t&&t[r];if(Z(n)||Ye(n)){s=new Array(n.length);for(let o=0,a=n.length;o<a;o++)s[o]=e(n[o],o,void 0,i&&i[o])}else if(typeof n=="number"){s=new Array(n);for(let o=0;o<n;o++)s[o]=e(o+1,o,void 0,i&&i[o])}else if(Se(n))if(n[Symbol.iterator])s=Array.from(n,(o,a)=>e(o,a,void 0,i&&i[a]));else{const o=Object.keys(n);s=new Array(o.length);for(let a=0,c=o.length;a<c;a++){const u=o[a];s[a]=e(n[u],u,a,i&&i[a])}}else s=[];return t&&(t[r]=s),s}const nh=n=>n?ev(n)?mu(n)||n.proxy:nh(n.parent):null,fo=It(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>nh(n.parent),$root:n=>nh(n.root),$emit:n=>n.emit,$options:n=>wd(n),$forceUpdate:n=>n.f||(n.f=()=>yd(n.update)),$nextTick:n=>n.n||(n.n=Cy.bind(n.proxy)),$watch:n=>h0.bind(n)}),vl=(n,e)=>n!==Ce&&!n.__isScriptSetup&&de(n,e),C0={get({_:n},e){const{ctx:t,setupState:r,data:s,props:i,accessCache:o,type:a,appContext:c}=n;let u;if(e[0]!=="$"){const p=o[e];if(p!==void 0)switch(p){case 1:return r[e];case 2:return s[e];case 4:return t[e];case 3:return i[e]}else{if(vl(r,e))return o[e]=1,r[e];if(s!==Ce&&de(s,e))return o[e]=2,s[e];if((u=n.propsOptions[0])&&de(u,e))return o[e]=3,i[e];if(t!==Ce&&de(t,e))return o[e]=4,t[e];rh&&(o[e]=0)}}const l=fo[e];let h,d;if(l)return e==="$attrs"&&Lt(n,"get",e),l(n);if((h=a.__cssModules)&&(h=h[e]))return h;if(t!==Ce&&de(t,e))return o[e]=4,t[e];if(d=c.config.globalProperties,de(d,e))return d[e]},set({_:n},e,t){const{data:r,setupState:s,ctx:i}=n;return vl(s,e)?(s[e]=t,!0):r!==Ce&&de(r,e)?(r[e]=t,!0):de(n.props,e)||e[0]==="$"&&e.slice(1)in n?!1:(i[e]=t,!0)},has({_:{data:n,setupState:e,accessCache:t,ctx:r,appContext:s,propsOptions:i}},o){let a;return!!t[o]||n!==Ce&&de(n,o)||vl(e,o)||(a=i[0])&&de(a,o)||de(r,o)||de(fo,o)||de(s.config.globalProperties,o)},defineProperty(n,e,t){return t.get!=null?n._.accessCache[e]=0:de(t,"value")&&this.set(n,e,t.value,null),Reflect.defineProperty(n,e,t)}};let rh=!0;function k0(n){const e=wd(n),t=n.proxy,r=n.ctx;rh=!1,e.beforeCreate&&Np(e.beforeCreate,n,"bc");const{data:s,computed:i,methods:o,watch:a,provide:c,inject:u,created:l,beforeMount:h,mounted:d,beforeUpdate:p,updated:g,activated:v,deactivated:A,beforeDestroy:R,beforeUnmount:V,destroyed:D,unmounted:W,render:X,renderTracked:ne,renderTriggered:ge,errorCaptured:J,serverPrefetch:Ae,expose:be,inheritAttrs:pt,components:mt,directives:Jt,filters:Pn}=e;if(u&&R0(u,r,null,n.appContext.config.unwrapInjectedRef),o)for(const Ee in o){const we=o[Ee];ie(we)&&(r[Ee]=we.bind(t))}if(s){const Ee=s.call(t,t);Se(Ee)&&(n.data=aa(Ee))}if(rh=!0,i)for(const Ee in i){const we=i[Ee],Xt=ie(we)?we.bind(t,t):ie(we.get)?we.get.bind(t,t):an,Vr=!ie(we)&&ie(we.set)?we.set.bind(t):an,Zt=Ht({get:Xt,set:Vr});Object.defineProperty(r,Ee,{enumerable:!0,configurable:!0,get:()=>Zt.value,set:kt=>Zt.value=kt})}if(a)for(const Ee in a)zy(a[Ee],r,t,Ee);if(c){const Ee=ie(c)?c.call(t):c;Reflect.ownKeys(Ee).forEach(we=>{oc(we,Ee[we])})}l&&Np(l,n,"c");function Ge(Ee,we){Z(we)?we.forEach(Xt=>Ee(Xt.bind(t))):we&&Ee(we.bind(t))}if(Ge(v0,h),Ge(Vy,d),Ge(w0,p),Ge(_0,g),Ge(m0,v),Ge(g0,A),Ge(T0,J),Ge(E0,ne),Ge(b0,ge),Ge(By,V),Ge($y,W),Ge(I0,Ae),Z(be))if(be.length){const Ee=n.exposed||(n.exposed={});be.forEach(we=>{Object.defineProperty(Ee,we,{get:()=>t[we],set:Xt=>t[we]=Xt})})}else n.exposed||(n.exposed={});X&&n.render===an&&(n.render=X),pt!=null&&(n.inheritAttrs=pt),mt&&(n.components=mt),Jt&&(n.directives=Jt)}function R0(n,e,t=an,r=!1){Z(n)&&(n=sh(n));for(const s in n){const i=n[s];let o;Se(i)?"default"in i?o=$n(i.from||s,i.default,!0):o=$n(i.from||s):o=$n(i),vt(o)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>o.value,set:a=>o.value=a}):e[s]=o}}function Np(n,e,t){Qt(Z(n)?n.map(r=>r.bind(e.proxy)):n.bind(e.proxy),e,t)}function zy(n,e,t,r){const s=r.includes(".")?My(t,r):()=>t[r];if(Ye(n)){const i=e[n];ie(i)&&ac(s,i)}else if(ie(n))ac(s,n.bind(t));else if(Se(n))if(Z(n))n.forEach(i=>zy(i,e,t,r));else{const i=ie(n.handler)?n.handler.bind(t):e[n.handler];ie(i)&&ac(s,i,n)}}function wd(n){const e=n.type,{mixins:t,extends:r}=e,{mixins:s,optionsCache:i,config:{optionMergeStrategies:o}}=n.appContext,a=i.get(e);let c;return a?c=a:!s.length&&!t&&!r?c=e:(c={},s.length&&s.forEach(u=>Sc(c,u,o,!0)),Sc(c,e,o)),Se(e)&&i.set(e,c),c}function Sc(n,e,t,r=!1){const{mixins:s,extends:i}=e;i&&Sc(n,i,t,!0),s&&s.forEach(o=>Sc(n,o,t,!0));for(const o in e)if(!(r&&o==="expose")){const a=D0[o]||t&&t[o];n[o]=a?a(n[o],e[o]):e[o]}return n}const D0={data:xp,props:jr,emits:jr,methods:jr,computed:jr,beforeCreate:bt,created:bt,beforeMount:bt,mounted:bt,beforeUpdate:bt,updated:bt,beforeDestroy:bt,beforeUnmount:bt,destroyed:bt,unmounted:bt,activated:bt,deactivated:bt,errorCaptured:bt,serverPrefetch:bt,components:jr,directives:jr,watch:x0,provide:xp,inject:N0};function xp(n,e){return e?n?function(){return It(ie(n)?n.call(this,this):n,ie(e)?e.call(this,this):e)}:e:n}function N0(n,e){return jr(sh(n),sh(e))}function sh(n){if(Z(n)){const e={};for(let t=0;t<n.length;t++)e[n[t]]=n[t];return e}return n}function bt(n,e){return n?[...new Set([].concat(n,e))]:e}function jr(n,e){return n?It(It(Object.create(null),n),e):e}function x0(n,e){if(!n)return e;if(!e)return n;const t=It(Object.create(null),n);for(const r in e)t[r]=bt(n[r],e[r]);return t}function P0(n,e,t,r=!1){const s={},i={};bc(i,pu,1),n.propsDefaults=Object.create(null),Ky(n,e,s,i);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);t?n.props=r?s:GE(s):n.type.props?n.props=s:n.props=i,n.attrs=i}function O0(n,e,t,r){const{props:s,attrs:i,vnode:{patchFlag:o}}=n,a=me(s),[c]=n.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const l=n.vnode.dynamicProps;for(let h=0;h<l.length;h++){let d=l[h];if(uu(n.emitsOptions,d))continue;const p=e[d];if(c)if(de(i,d))p!==i[d]&&(i[d]=p,u=!0);else{const g=kn(d);s[g]=ih(c,a,g,p,n,!1)}else p!==i[d]&&(i[d]=p,u=!0)}}}else{Ky(n,e,s,i)&&(u=!0);let l;for(const h in a)(!e||!de(e,h)&&((l=Ci(h))===h||!de(e,l)))&&(c?t&&(t[h]!==void 0||t[l]!==void 0)&&(s[h]=ih(c,a,h,void 0,n,!0)):delete s[h]);if(i!==a)for(const h in i)(!e||!de(e,h))&&(delete i[h],u=!0)}u&&zn(n,"set","$attrs")}function Ky(n,e,t,r){const[s,i]=n.propsOptions;let o=!1,a;if(e)for(let c in e){if(sc(c))continue;const u=e[c];let l;s&&de(s,l=kn(c))?!i||!i.includes(l)?t[l]=u:(a||(a={}))[l]=u:uu(n.emitsOptions,c)||(!(c in r)||u!==r[c])&&(r[c]=u,o=!0)}if(i){const c=me(t),u=a||Ce;for(let l=0;l<i.length;l++){const h=i[l];t[h]=ih(s,c,h,u[h],n,!de(u,h))}}return o}function ih(n,e,t,r,s,i){const o=n[t];if(o!=null){const a=de(o,"default");if(a&&r===void 0){const c=o.default;if(o.type!==Function&&ie(c)){const{propsDefaults:u}=s;t in u?r=u[t]:(ci(s),r=u[t]=c.call(null,e),ls())}else r=c}o[0]&&(i&&!a?r=!1:o[1]&&(r===""||r===Ci(t))&&(r=!0))}return r}function Gy(n,e,t=!1){const r=e.propsCache,s=r.get(n);if(s)return s;const i=n.props,o={},a=[];let c=!1;if(!ie(n)){const l=h=>{c=!0;const[d,p]=Gy(h,e,!0);It(o,d),p&&a.push(...p)};!t&&e.mixins.length&&e.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}if(!i&&!c)return Se(n)&&r.set(n,Js),Js;if(Z(i))for(let l=0;l<i.length;l++){const h=kn(i[l]);Pp(h)&&(o[h]=Ce)}else if(i)for(const l in i){const h=kn(l);if(Pp(h)){const d=i[l],p=o[h]=Z(d)||ie(d)?{type:d}:Object.assign({},d);if(p){const g=Lp(Boolean,p.type),v=Lp(String,p.type);p[0]=g>-1,p[1]=v<0||g<v,(g>-1||de(p,"default"))&&a.push(h)}}}const u=[o,a];return Se(n)&&r.set(n,u),u}function Pp(n){return n[0]!=="$"}function Op(n){const e=n&&n.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:n===null?"null":""}function Mp(n,e){return Op(n)===Op(e)}function Lp(n,e){return Z(e)?e.findIndex(t=>Mp(t,n)):ie(e)&&Mp(e,n)?0:-1}const Hy=n=>n[0]==="_"||n==="$stable",_d=n=>Z(n)?n.map(mn):[mn(n)],M0=(n,e,t)=>{if(e._n)return e;const r=Ln((...s)=>_d(e(...s)),t);return r._c=!1,r},Wy=(n,e,t)=>{const r=n._ctx;for(const s in n){if(Hy(s))continue;const i=n[s];if(ie(i))e[s]=M0(s,i,r);else if(i!=null){const o=_d(i);e[s]=()=>o}}},Qy=(n,e)=>{const t=_d(e);n.slots.default=()=>t},L0=(n,e)=>{if(n.vnode.shapeFlag&32){const t=e._;t?(n.slots=me(e),bc(e,"_",t)):Wy(e,n.slots={})}else n.slots={},e&&Qy(n,e);bc(n.slots,pu,1)},F0=(n,e,t)=>{const{vnode:r,slots:s}=n;let i=!0,o=Ce;if(r.shapeFlag&32){const a=e._;a?t&&a===1?i=!1:(It(s,e),!t&&a===1&&delete s._):(i=!e.$stable,Wy(e,s)),o=e}else e&&(Qy(n,e),o={default:1});if(i)for(const a in s)!Hy(a)&&!(a in o)&&delete s[a]};function Yy(){return{app:null,config:{isNativeTag:lE,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let U0=0;function V0(n,e){return function(r,s=null){ie(r)||(r=Object.assign({},r)),s!=null&&!Se(s)&&(s=null);const i=Yy(),o=new Set;let a=!1;const c=i.app={_uid:U0++,_component:r,_props:s,_container:null,_context:i,_instance:null,version:aT,get config(){return i.config},set config(u){},use(u,...l){return o.has(u)||(u&&ie(u.install)?(o.add(u),u.install(c,...l)):ie(u)&&(o.add(u),u(c,...l))),c},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),c},component(u,l){return l?(i.components[u]=l,c):i.components[u]},directive(u,l){return l?(i.directives[u]=l,c):i.directives[u]},mount(u,l,h){if(!a){const d=Re(r,s);return d.appContext=i,l&&e?e(d,u):n(d,u,h),a=!0,c._container=u,u.__vue_app__=c,mu(d.component)||d.component.proxy}},unmount(){a&&(n(null,c._container),delete c._container.__vue_app__)},provide(u,l){return i.provides[u]=l,c}};return c}}function oh(n,e,t,r,s=!1){if(Z(n)){n.forEach((d,p)=>oh(d,e&&(Z(e)?e[p]:e),t,r,s));return}if(cc(r)&&!s)return;const i=r.shapeFlag&4?mu(r.component)||r.component.proxy:r.el,o=s?null:i,{i:a,r:c}=n,u=e&&e.r,l=a.refs===Ce?a.refs={}:a.refs,h=a.setupState;if(u!=null&&u!==c&&(Ye(u)?(l[u]=null,de(h,u)&&(h[u]=null)):vt(u)&&(u.value=null)),ie(c))pr(c,a,12,[o,l]);else{const d=Ye(c),p=vt(c);if(d||p){const g=()=>{if(n.f){const v=d?de(h,c)?h[c]:l[c]:c.value;s?Z(v)&&ad(v,i):Z(v)?v.includes(i)||v.push(i):d?(l[c]=[i],de(h,c)&&(h[c]=l[c])):(c.value=[i],n.k&&(l[n.k]=c.value))}else d?(l[c]=o,de(h,c)&&(h[c]=o)):p&&(c.value=o,n.k&&(l[n.k]=o))};o?(g.id=-1,Rt(g,t)):g()}}}const Rt=l0;function B0(n){return $0(n)}function $0(n,e){const t=gE();t.__VUE__=!0;const{insert:r,remove:s,patchProp:i,createElement:o,createText:a,createComment:c,setText:u,setElementText:l,parentNode:h,nextSibling:d,setScopeId:p=an,insertStaticContent:g}=n,v=(f,m,_,I=null,T=null,x=null,F=!1,N=null,O=!!m.dynamicChildren)=>{if(f===m)return;f&&!Hr(f,m)&&(I=L(f),kt(f,T,x,!0),f=null),m.patchFlag===-2&&(O=!1,m.dynamicChildren=null);const{type:C,ref:Q,shapeFlag:$}=m;switch(C){case fu:A(f,m,_,I);break;case cn:R(f,m,_,I);break;case wl:f==null&&V(m,_,I,F);break;case xt:mt(f,m,_,I,T,x,F,N,O);break;default:$&1?X(f,m,_,I,T,x,F,N,O):$&6?Jt(f,m,_,I,T,x,F,N,O):($&64||$&128)&&C.process(f,m,_,I,T,x,F,N,O,he)}Q!=null&&T&&oh(Q,f&&f.ref,x,m||f,!m)},A=(f,m,_,I)=>{if(f==null)r(m.el=a(m.children),_,I);else{const T=m.el=f.el;m.children!==f.children&&u(T,m.children)}},R=(f,m,_,I)=>{f==null?r(m.el=c(m.children||""),_,I):m.el=f.el},V=(f,m,_,I)=>{[f.el,f.anchor]=g(f.children,m,_,I,f.el,f.anchor)},D=({el:f,anchor:m},_,I)=>{let T;for(;f&&f!==m;)T=d(f),r(f,_,I),f=T;r(m,_,I)},W=({el:f,anchor:m})=>{let _;for(;f&&f!==m;)_=d(f),s(f),f=_;s(m)},X=(f,m,_,I,T,x,F,N,O)=>{F=F||m.type==="svg",f==null?ne(m,_,I,T,x,F,N,O):Ae(f,m,T,x,F,N,O)},ne=(f,m,_,I,T,x,F,N)=>{let O,C;const{type:Q,props:$,shapeFlag:Y,transition:te,dirs:ae}=f;if(O=f.el=o(f.type,x,$&&$.is,$),Y&8?l(O,f.children):Y&16&&J(f.children,O,null,I,T,x&&Q!=="foreignObject",F,N),ae&&Br(f,null,I,"created"),ge(O,f,f.scopeId,F,I),$){for(const _e in $)_e!=="value"&&!sc(_e)&&i(O,_e,null,$[_e],x,f.children,I,T,B);"value"in $&&i(O,"value",null,$.value),(C=$.onVnodeBeforeMount)&&fn(C,I,f)}ae&&Br(f,null,I,"beforeMount");const Te=(!T||T&&!T.pendingBranch)&&te&&!te.persisted;Te&&te.beforeEnter(O),r(O,m,_),((C=$&&$.onVnodeMounted)||Te||ae)&&Rt(()=>{C&&fn(C,I,f),Te&&te.enter(O),ae&&Br(f,null,I,"mounted")},T)},ge=(f,m,_,I,T)=>{if(_&&p(f,_),I)for(let x=0;x<I.length;x++)p(f,I[x]);if(T){let x=T.subTree;if(m===x){const F=T.vnode;ge(f,F,F.scopeId,F.slotScopeIds,T.parent)}}},J=(f,m,_,I,T,x,F,N,O=0)=>{for(let C=O;C<f.length;C++){const Q=f[C]=N?ar(f[C]):mn(f[C]);v(null,Q,m,_,I,T,x,F,N)}},Ae=(f,m,_,I,T,x,F)=>{const N=m.el=f.el;let{patchFlag:O,dynamicChildren:C,dirs:Q}=m;O|=f.patchFlag&16;const $=f.props||Ce,Y=m.props||Ce;let te;_&&$r(_,!1),(te=Y.onVnodeBeforeUpdate)&&fn(te,_,m,f),Q&&Br(m,f,_,"beforeUpdate"),_&&$r(_,!0);const ae=T&&m.type!=="foreignObject";if(C?be(f.dynamicChildren,C,N,_,I,ae,x):F||we(f,m,N,null,_,I,ae,x,!1),O>0){if(O&16)pt(N,m,$,Y,_,I,T);else if(O&2&&$.class!==Y.class&&i(N,"class",null,Y.class,T),O&4&&i(N,"style",$.style,Y.style,T),O&8){const Te=m.dynamicProps;for(let _e=0;_e<Te.length;_e++){const He=Te[_e],en=$[He],Vs=Y[He];(Vs!==en||He==="value")&&i(N,He,en,Vs,T,f.children,_,I,B)}}O&1&&f.children!==m.children&&l(N,m.children)}else!F&&C==null&&pt(N,m,$,Y,_,I,T);((te=Y.onVnodeUpdated)||Q)&&Rt(()=>{te&&fn(te,_,m,f),Q&&Br(m,f,_,"updated")},I)},be=(f,m,_,I,T,x,F)=>{for(let N=0;N<m.length;N++){const O=f[N],C=m[N],Q=O.el&&(O.type===xt||!Hr(O,C)||O.shapeFlag&70)?h(O.el):_;v(O,C,Q,null,I,T,x,F,!0)}},pt=(f,m,_,I,T,x,F)=>{if(_!==I){if(_!==Ce)for(const N in _)!sc(N)&&!(N in I)&&i(f,N,_[N],null,F,m.children,T,x,B);for(const N in I){if(sc(N))continue;const O=I[N],C=_[N];O!==C&&N!=="value"&&i(f,N,C,O,F,m.children,T,x,B)}"value"in I&&i(f,"value",_.value,I.value)}},mt=(f,m,_,I,T,x,F,N,O)=>{const C=m.el=f?f.el:a(""),Q=m.anchor=f?f.anchor:a("");let{patchFlag:$,dynamicChildren:Y,slotScopeIds:te}=m;te&&(N=N?N.concat(te):te),f==null?(r(C,_,I),r(Q,_,I),J(m.children,_,Q,T,x,F,N,O)):$>0&&$&64&&Y&&f.dynamicChildren?(be(f.dynamicChildren,Y,_,T,x,F,N),(m.key!=null||T&&m===T.subTree)&&Jy(f,m,!0)):we(f,m,_,Q,T,x,F,N,O)},Jt=(f,m,_,I,T,x,F,N,O)=>{m.slotScopeIds=N,f==null?m.shapeFlag&512?T.ctx.activate(m,_,I,F,O):Pn(m,_,I,T,x,F,O):Gi(f,m,O)},Pn=(f,m,_,I,T,x,F)=>{const N=f.component=J0(f,I,T);if(hu(f)&&(N.ctx.renderer=he),Z0(N),N.asyncDep){if(T&&T.registerDep(N,Ge),!f.el){const O=N.subTree=Re(cn);R(null,O,m,_)}return}Ge(N,f,m,_,T,x,F)},Gi=(f,m,_)=>{const I=m.component=f.component;if(a0(f,m,_))if(I.asyncDep&&!I.asyncResolved){Ee(I,m,_);return}else I.next=m,t0(I.update),I.update();else m.el=f.el,I.vnode=m},Ge=(f,m,_,I,T,x,F)=>{const N=()=>{if(f.isMounted){let{next:Q,bu:$,u:Y,parent:te,vnode:ae}=f,Te=Q,_e;$r(f,!1),Q?(Q.el=ae.el,Ee(f,Q,F)):Q=ae,$&&ic($),(_e=Q.props&&Q.props.onVnodeBeforeUpdate)&&fn(_e,te,Q,ae),$r(f,!0);const He=gl(f),en=f.subTree;f.subTree=He,v(en,He,h(en.el),L(en),f,T,x),Q.el=He.el,Te===null&&c0(f,He.el),Y&&Rt(Y,T),(_e=Q.props&&Q.props.onVnodeUpdated)&&Rt(()=>fn(_e,te,Q,ae),T)}else{let Q;const{el:$,props:Y}=m,{bm:te,m:ae,parent:Te}=f,_e=cc(m);if($r(f,!1),te&&ic(te),!_e&&(Q=Y&&Y.onVnodeBeforeMount)&&fn(Q,Te,m),$r(f,!0),$&&oe){const He=()=>{f.subTree=gl(f),oe($,f.subTree,f,T,null)};_e?m.type.__asyncLoader().then(()=>!f.isUnmounted&&He()):He()}else{const He=f.subTree=gl(f);v(null,He,_,I,f,T,x),m.el=He.el}if(ae&&Rt(ae,T),!_e&&(Q=Y&&Y.onVnodeMounted)){const He=m;Rt(()=>fn(Q,Te,He),T)}(m.shapeFlag&256||Te&&cc(Te.vnode)&&Te.vnode.shapeFlag&256)&&f.a&&Rt(f.a,T),f.isMounted=!0,m=_=I=null}},O=f.effect=new ld(N,()=>yd(C),f.scope),C=f.update=()=>O.run();C.id=f.uid,$r(f,!0),C()},Ee=(f,m,_)=>{m.component=f;const I=f.vnode.props;f.vnode=m,f.next=null,O0(f,m.props,I,_),F0(f,m.children,_),ki(),Cp(),Ri()},we=(f,m,_,I,T,x,F,N,O=!1)=>{const C=f&&f.children,Q=f?f.shapeFlag:0,$=m.children,{patchFlag:Y,shapeFlag:te}=m;if(Y>0){if(Y&128){Vr(C,$,_,I,T,x,F,N,O);return}else if(Y&256){Xt(C,$,_,I,T,x,F,N,O);return}}te&8?(Q&16&&B(C,T,x),$!==C&&l(_,$)):Q&16?te&16?Vr(C,$,_,I,T,x,F,N,O):B(C,T,x,!0):(Q&8&&l(_,""),te&16&&J($,_,I,T,x,F,N,O))},Xt=(f,m,_,I,T,x,F,N,O)=>{f=f||Js,m=m||Js;const C=f.length,Q=m.length,$=Math.min(C,Q);let Y;for(Y=0;Y<$;Y++){const te=m[Y]=O?ar(m[Y]):mn(m[Y]);v(f[Y],te,_,null,T,x,F,N,O)}C>Q?B(f,T,x,!0,!1,$):J(m,_,I,T,x,F,N,O,$)},Vr=(f,m,_,I,T,x,F,N,O)=>{let C=0;const Q=m.length;let $=f.length-1,Y=Q-1;for(;C<=$&&C<=Y;){const te=f[C],ae=m[C]=O?ar(m[C]):mn(m[C]);if(Hr(te,ae))v(te,ae,_,null,T,x,F,N,O);else break;C++}for(;C<=$&&C<=Y;){const te=f[$],ae=m[Y]=O?ar(m[Y]):mn(m[Y]);if(Hr(te,ae))v(te,ae,_,null,T,x,F,N,O);else break;$--,Y--}if(C>$){if(C<=Y){const te=Y+1,ae=te<Q?m[te].el:I;for(;C<=Y;)v(null,m[C]=O?ar(m[C]):mn(m[C]),_,ae,T,x,F,N,O),C++}}else if(C>Y)for(;C<=$;)kt(f[C],T,x,!0),C++;else{const te=C,ae=C,Te=new Map;for(C=ae;C<=Y;C++){const Ut=m[C]=O?ar(m[C]):mn(m[C]);Ut.key!=null&&Te.set(Ut.key,C)}let _e,He=0;const en=Y-ae+1;let Vs=!1,mp=0;const Hi=new Array(en);for(C=0;C<en;C++)Hi[C]=0;for(C=te;C<=$;C++){const Ut=f[C];if(He>=en){kt(Ut,T,x,!0);continue}let dn;if(Ut.key!=null)dn=Te.get(Ut.key);else for(_e=ae;_e<=Y;_e++)if(Hi[_e-ae]===0&&Hr(Ut,m[_e])){dn=_e;break}dn===void 0?kt(Ut,T,x,!0):(Hi[dn-ae]=C+1,dn>=mp?mp=dn:Vs=!0,v(Ut,m[dn],_,null,T,x,F,N,O),He++)}const gp=Vs?q0(Hi):Js;for(_e=gp.length-1,C=en-1;C>=0;C--){const Ut=ae+C,dn=m[Ut],yp=Ut+1<Q?m[Ut+1].el:I;Hi[C]===0?v(null,dn,_,yp,T,x,F,N,O):Vs&&(_e<0||C!==gp[_e]?Zt(dn,_,yp,2):_e--)}}},Zt=(f,m,_,I,T=null)=>{const{el:x,type:F,transition:N,children:O,shapeFlag:C}=f;if(C&6){Zt(f.component.subTree,m,_,I);return}if(C&128){f.suspense.move(m,_,I);return}if(C&64){F.move(f,m,_,he);return}if(F===xt){r(x,m,_);for(let $=0;$<O.length;$++)Zt(O[$],m,_,I);r(f.anchor,m,_);return}if(F===wl){D(f,m,_);return}if(I!==2&&C&1&&N)if(I===0)N.beforeEnter(x),r(x,m,_),Rt(()=>N.enter(x),T);else{const{leave:$,delayLeave:Y,afterLeave:te}=N,ae=()=>r(x,m,_),Te=()=>{$(x,()=>{ae(),te&&te()})};Y?Y(x,ae,Te):Te()}else r(x,m,_)},kt=(f,m,_,I=!1,T=!1)=>{const{type:x,props:F,ref:N,children:O,dynamicChildren:C,shapeFlag:Q,patchFlag:$,dirs:Y}=f;if(N!=null&&oh(N,null,_,f,!0),Q&256){m.ctx.deactivate(f);return}const te=Q&1&&Y,ae=!cc(f);let Te;if(ae&&(Te=F&&F.onVnodeBeforeUnmount)&&fn(Te,m,f),Q&6)b(f.component,_,I);else{if(Q&128){f.suspense.unmount(_,I);return}te&&Br(f,null,m,"beforeUnmount"),Q&64?f.type.remove(f,m,_,T,he,I):C&&(x!==xt||$>0&&$&64)?B(C,m,_,!1,!0):(x===xt&&$&384||!T&&Q&16)&&B(O,m,_),I&&Us(f)}(ae&&(Te=F&&F.onVnodeUnmounted)||te)&&Rt(()=>{Te&&fn(Te,m,f),te&&Br(f,null,m,"unmounted")},_)},Us=f=>{const{type:m,el:_,anchor:I,transition:T}=f;if(m===xt){Fa(_,I);return}if(m===wl){W(f);return}const x=()=>{s(_),T&&!T.persisted&&T.afterLeave&&T.afterLeave()};if(f.shapeFlag&1&&T&&!T.persisted){const{leave:F,delayLeave:N}=T,O=()=>F(_,x);N?N(f.el,x,O):O()}else x()},Fa=(f,m)=>{let _;for(;f!==m;)_=d(f),s(f),f=_;s(m)},b=(f,m,_)=>{const{bum:I,scope:T,update:x,subTree:F,um:N}=f;I&&ic(I),T.stop(),x&&(x.active=!1,kt(F,f,m,_)),N&&Rt(N,m),Rt(()=>{f.isUnmounted=!0},m),m&&m.pendingBranch&&!m.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===m.pendingId&&(m.deps--,m.deps===0&&m.resolve())},B=(f,m,_,I=!1,T=!1,x=0)=>{for(let F=x;F<f.length;F++)kt(f[F],m,_,I,T)},L=f=>f.shapeFlag&6?L(f.component.subTree):f.shapeFlag&128?f.suspense.next():d(f.anchor||f.el),G=(f,m,_)=>{f==null?m._vnode&&kt(m._vnode,null,null,!0):v(m._vnode||null,f,m,null,null,null,_),Cp(),Ry(),m._vnode=f},he={p:v,um:kt,m:Zt,r:Us,mt:Pn,mc:J,pc:we,pbc:be,n:L,o:n};let Oe,oe;return e&&([Oe,oe]=e(he)),{render:G,hydrate:Oe,createApp:V0(G,Oe)}}function $r({effect:n,update:e},t){n.allowRecurse=e.allowRecurse=t}function Jy(n,e,t=!1){const r=n.children,s=e.children;if(Z(r)&&Z(s))for(let i=0;i<r.length;i++){const o=r[i];let a=s[i];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[i]=ar(s[i]),a.el=o.el),t||Jy(o,a)),a.type===fu&&(a.el=o.el)}}function q0(n){const e=n.slice(),t=[0];let r,s,i,o,a;const c=n.length;for(r=0;r<c;r++){const u=n[r];if(u!==0){if(s=t[t.length-1],n[s]<u){e[r]=s,t.push(r);continue}for(i=0,o=t.length-1;i<o;)a=i+o>>1,n[t[a]]<u?i=a+1:o=a;u<n[t[i]]&&(i>0&&(e[r]=t[i-1]),t[i]=r)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=e[o];return t}const j0=n=>n.__isTeleport,xt=Symbol(void 0),fu=Symbol(void 0),cn=Symbol(void 0),wl=Symbol(void 0),po=[];let sn=null;function Fe(n=!1){po.push(sn=n?null:[])}function z0(){po.pop(),sn=po[po.length-1]||null}let xo=1;function Fp(n){xo+=n}function Xy(n){return n.dynamicChildren=xo>0?sn||Js:null,z0(),xo>0&&sn&&sn.push(n),n}function $e(n,e,t,r,s,i){return Xy(H(n,e,t,r,s,i,!0))}function K0(n,e,t,r,s){return Xy(Re(n,e,t,r,s,!0))}function ah(n){return n?n.__v_isVNode===!0:!1}function Hr(n,e){return n.type===e.type&&n.key===e.key}const pu="__vInternal",Zy=({key:n})=>n??null,uc=({ref:n,ref_key:e,ref_for:t})=>n!=null?Ye(n)||vt(n)||ie(n)?{i:Bt,r:n,k:e,f:!!t}:n:null;function H(n,e=null,t=null,r=0,s=null,i=n===xt?0:1,o=!1,a=!1){const c={__v_isVNode:!0,__v_skip:!0,type:n,props:e,key:e&&Zy(e),ref:e&&uc(e),scopeId:lu,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Bt};return a?(Id(c,t),i&128&&n.normalize(c)):t&&(c.shapeFlag|=Ye(t)?8:16),xo>0&&!o&&sn&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&sn.push(c),c}const Re=G0;function G0(n,e=null,t=null,r=0,s=null,i=!1){if((!n||n===S0)&&(n=cn),ah(n)){const a=vr(n,e,!0);return t&&Id(a,t),xo>0&&!i&&sn&&(a.shapeFlag&6?sn[sn.indexOf(n)]=a:sn.push(a)),a.patchFlag|=-2,a}if(sT(n)&&(n=n.__vccOpts),e){e=H0(e);let{class:a,style:c}=e;a&&!Ye(a)&&(e.class=id(a)),Se(c)&&(wy(c)&&!Z(c)&&(c=It({},c)),e.style=sd(c))}const o=Ye(n)?1:u0(n)?128:j0(n)?64:Se(n)?4:ie(n)?2:0;return H(n,e,t,r,s,o,i,!0)}function H0(n){return n?wy(n)||pu in n?It({},n):n:null}function vr(n,e,t=!1){const{props:r,ref:s,patchFlag:i,children:o}=n,a=e?W0(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:n.type,props:a,key:a&&Zy(a),ref:e&&e.ref?t&&s?Z(s)?s.concat(uc(e)):[s,uc(e)]:uc(e):s,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:o,target:n.target,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:e&&n.type!==xt?i===-1?16:i|16:i,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:n.transition,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&vr(n.ssContent),ssFallback:n.ssFallback&&vr(n.ssFallback),el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce}}function Fn(n=" ",e=0){return Re(fu,null,n,e)}function za(n="",e=!1){return e?(Fe(),K0(cn,null,n)):Re(cn,null,n)}function mn(n){return n==null||typeof n=="boolean"?Re(cn):Z(n)?Re(xt,null,n.slice()):typeof n=="object"?ar(n):Re(fu,null,String(n))}function ar(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:vr(n)}function Id(n,e){let t=0;const{shapeFlag:r}=n;if(e==null)e=null;else if(Z(e))t=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),Id(n,s()),s._c&&(s._d=!0));return}else{t=32;const s=e._;!s&&!(pu in e)?e._ctx=Bt:s===3&&Bt&&(Bt.slots._===1?e._=1:(e._=2,n.patchFlag|=1024))}else ie(e)?(e={default:e,_ctx:Bt},t=32):(e=String(e),r&64?(t=16,e=[Fn(e)]):t=8);n.children=e,n.shapeFlag|=t}function W0(...n){const e={};for(let t=0;t<n.length;t++){const r=n[t];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=id([e.class,r.class]));else if(s==="style")e.style=sd([e.style,r.style]);else if(su(s)){const i=e[s],o=r[s];o&&i!==o&&!(Z(i)&&i.includes(o))&&(e[s]=i?[].concat(i,o):o)}else s!==""&&(e[s]=r[s])}return e}function fn(n,e,t,r=null){Qt(n,e,7,[t,r])}const Q0=Yy();let Y0=0;function J0(n,e,t){const r=n.type,s=(e?e.appContext:n.appContext)||Q0,i={uid:Y0++,vnode:n,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new yE(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gy(r,s),emitsOptions:Ny(r,s),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:r.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=e?e.root:i,i.emit=s0.bind(null,i),n.ce&&n.ce(i),i}let qe=null;const X0=()=>qe||Bt,ci=n=>{qe=n,n.scope.on()},ls=()=>{qe&&qe.scope.off(),qe=null};function ev(n){return n.vnode.shapeFlag&4}let Po=!1;function Z0(n,e=!1){Po=e;const{props:t,children:r}=n.vnode,s=ev(n);P0(n,t,s,e),L0(n,r);const i=s?eT(n,e):void 0;return Po=!1,i}function eT(n,e){const t=n.type;n.accessCache=Object.create(null),n.proxy=_y(new Proxy(n.ctx,C0));const{setup:r}=t;if(r){const s=n.setupContext=r.length>1?nT(n):null;ci(n),ki();const i=pr(r,n,0,[n.props,s]);if(Ri(),ls(),iy(i)){if(i.then(ls,ls),e)return i.then(o=>{Up(n,o,e)}).catch(o=>{cu(o,n,0)});n.asyncDep=i}else Up(n,i,e)}else tv(n,e)}function Up(n,e,t){ie(e)?n.type.__ssrInlineRender?n.ssrRender=e:n.render=e:Se(e)&&(n.setupState=Ty(e)),tv(n,t)}let Vp;function tv(n,e,t){const r=n.type;if(!n.render){if(!e&&Vp&&!r.render){const s=r.template||wd(n).template;if(s){const{isCustomElement:i,compilerOptions:o}=n.appContext.config,{delimiters:a,compilerOptions:c}=r,u=It(It({isCustomElement:i,delimiters:a},o),c);r.render=Vp(s,u)}}n.render=r.render||an}ci(n),ki(),k0(n),Ri(),ls()}function tT(n){return new Proxy(n.attrs,{get(e,t){return Lt(n,"get","$attrs"),e[t]}})}function nT(n){const e=r=>{n.exposed=r||{}};let t;return{get attrs(){return t||(t=tT(n))},slots:n.slots,emit:n.emit,expose:e}}function mu(n){if(n.exposed)return n.exposeProxy||(n.exposeProxy=new Proxy(Ty(_y(n.exposed)),{get(e,t){if(t in e)return e[t];if(t in fo)return fo[t](n)},has(e,t){return t in e||t in fo}}))}function rT(n,e=!0){return ie(n)?n.displayName||n.name:n.name||e&&n.__name}function sT(n){return ie(n)&&"__vccOpts"in n}const Ht=(n,e)=>XE(n,e,Po);function nv(n,e,t){const r=arguments.length;return r===2?Se(e)&&!Z(e)?ah(e)?Re(n,null,[e]):Re(n,e):Re(n,null,e):(r>3?t=Array.prototype.slice.call(arguments,2):r===3&&ah(t)&&(t=[t]),Re(n,e,t))}const iT=Symbol(""),oT=()=>$n(iT),aT="3.2.47",cT="http://www.w3.org/2000/svg",Wr=typeof document<"u"?document:null,Bp=Wr&&Wr.createElement("template"),uT={insert:(n,e,t)=>{e.insertBefore(n,t||null)},remove:n=>{const e=n.parentNode;e&&e.removeChild(n)},createElement:(n,e,t,r)=>{const s=e?Wr.createElementNS(cT,n):Wr.createElement(n,t?{is:t}:void 0);return n==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:n=>Wr.createTextNode(n),createComment:n=>Wr.createComment(n),setText:(n,e)=>{n.nodeValue=e},setElementText:(n,e)=>{n.textContent=e},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Wr.querySelector(n),setScopeId(n,e){n.setAttribute(e,"")},insertStaticContent(n,e,t,r,s,i){const o=t?t.previousSibling:e.lastChild;if(s&&(s===i||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),t),!(s===i||!(s=s.nextSibling)););else{Bp.innerHTML=r?`<svg>${n}</svg>`:n;const a=Bp.content;if(r){const c=a.firstChild;for(;c.firstChild;)a.appendChild(c.firstChild);a.removeChild(c)}e.insertBefore(a,t)}return[o?o.nextSibling:e.firstChild,t?t.previousSibling:e.lastChild]}};function lT(n,e,t){const r=n._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?n.removeAttribute("class"):t?n.setAttribute("class",e):n.className=e}function hT(n,e,t){const r=n.style,s=Ye(t);if(t&&!s){if(e&&!Ye(e))for(const i in e)t[i]==null&&ch(r,i,"");for(const i in t)ch(r,i,t[i])}else{const i=r.display;s?e!==t&&(r.cssText=t):e&&n.removeAttribute("style"),"_vod"in n&&(r.display=i)}}const $p=/\s*!important$/;function ch(n,e,t){if(Z(t))t.forEach(r=>ch(n,e,r));else if(t==null&&(t=""),e.startsWith("--"))n.setProperty(e,t);else{const r=dT(n,e);$p.test(t)?n.setProperty(Ci(r),t.replace($p,""),"important"):n[r]=t}}const qp=["Webkit","Moz","ms"],_l={};function dT(n,e){const t=_l[e];if(t)return t;let r=kn(e);if(r!=="filter"&&r in n)return _l[e]=r;r=ou(r);for(let s=0;s<qp.length;s++){const i=qp[s]+r;if(i in n)return _l[e]=i}return e}const jp="http://www.w3.org/1999/xlink";function fT(n,e,t,r,s){if(r&&e.startsWith("xlink:"))t==null?n.removeAttributeNS(jp,e.slice(6,e.length)):n.setAttributeNS(jp,e,t);else{const i=cE(e);t==null||i&&!ny(t)?n.removeAttribute(e):n.setAttribute(e,i?"":t)}}function pT(n,e,t,r,s,i,o){if(e==="innerHTML"||e==="textContent"){r&&o(r,s,i),n[e]=t??"";return}if(e==="value"&&n.tagName!=="PROGRESS"&&!n.tagName.includes("-")){n._value=t;const c=t??"";(n.value!==c||n.tagName==="OPTION")&&(n.value=c),t==null&&n.removeAttribute(e);return}let a=!1;if(t===""||t==null){const c=typeof n[e];c==="boolean"?t=ny(t):t==null&&c==="string"?(t="",a=!0):c==="number"&&(t=0,a=!0)}try{n[e]=t}catch{}a&&n.removeAttribute(e)}function Qr(n,e,t,r){n.addEventListener(e,t,r)}function mT(n,e,t,r){n.removeEventListener(e,t,r)}function gT(n,e,t,r,s=null){const i=n._vei||(n._vei={}),o=i[e];if(r&&o)o.value=r;else{const[a,c]=yT(e);if(r){const u=i[e]=_T(r,s);Qr(n,a,u,c)}else o&&(mT(n,a,o,c),i[e]=void 0)}}const zp=/(?:Once|Passive|Capture)$/;function yT(n){let e;if(zp.test(n)){e={};let r;for(;r=n.match(zp);)n=n.slice(0,n.length-r[0].length),e[r[0].toLowerCase()]=!0}return[n[2]===":"?n.slice(3):Ci(n.slice(2)),e]}let Il=0;const vT=Promise.resolve(),wT=()=>Il||(vT.then(()=>Il=0),Il=Date.now());function _T(n,e){const t=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=t.attached)return;Qt(IT(r,t.value),e,5,[r])};return t.value=n,t.attached=wT(),t}function IT(n,e){if(Z(e)){const t=n.stopImmediatePropagation;return n.stopImmediatePropagation=()=>{t.call(n),n._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const Kp=/^on[a-z]/,bT=(n,e,t,r,s=!1,i,o,a,c)=>{e==="class"?lT(n,r,s):e==="style"?hT(n,t,r):su(e)?od(e)||gT(n,e,t,r,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):ET(n,e,r,s))?pT(n,e,r,i,o,a,c):(e==="true-value"?n._trueValue=r:e==="false-value"&&(n._falseValue=r),fT(n,e,r,s))};function ET(n,e,t,r){return r?!!(e==="innerHTML"||e==="textContent"||e in n&&Kp.test(e)&&ie(t)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&n.tagName==="INPUT"||e==="type"&&n.tagName==="TEXTAREA"||Kp.test(e)&&Ye(t)?!1:e in n}const TT={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};p0.props;const Ac=n=>{const e=n.props["onUpdate:modelValue"]||!1;return Z(e)?t=>ic(e,t):e};function ST(n){n.target.composing=!0}function Gp(n){const e=n.target;e.composing&&(e.composing=!1,e.dispatchEvent(new Event("input")))}const ti={created(n,{modifiers:{lazy:e,trim:t,number:r}},s){n._assign=Ac(s);const i=r||s.props&&s.props.type==="number";Qr(n,e?"change":"input",o=>{if(o.target.composing)return;let a=n.value;t&&(a=a.trim()),i&&(a=Wl(a)),n._assign(a)}),t&&Qr(n,"change",()=>{n.value=n.value.trim()}),e||(Qr(n,"compositionstart",ST),Qr(n,"compositionend",Gp),Qr(n,"change",Gp))},mounted(n,{value:e}){n.value=e??""},beforeUpdate(n,{value:e,modifiers:{lazy:t,trim:r,number:s}},i){if(n._assign=Ac(i),n.composing||document.activeElement===n&&n.type!=="range"&&(t||r&&n.value.trim()===e||(s||n.type==="number")&&Wl(n.value)===e))return;const o=e??"";n.value!==o&&(n.value=o)}},Ka={created(n,{value:e},t){n.checked=Ic(e,t.props.value),n._assign=Ac(t),Qr(n,"change",()=>{n._assign(AT(n))})},beforeUpdate(n,{value:e,oldValue:t},r){n._assign=Ac(r),e!==t&&(n.checked=Ic(e,r.props.value))}};function AT(n){return"_value"in n?n._value:n.value}const CT=["ctrl","shift","alt","meta"],kT={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,e)=>CT.some(t=>n[`${t}Key`]&&!e.includes(t))},rv=(n,e)=>(t,...r)=>{for(let s=0;s<e.length;s++){const i=kT[e[s]];if(i&&i(t,e))return}return n(t,...r)},RT=It({patchProp:bT},uT);let Hp;function DT(){return Hp||(Hp=B0(RT))}const NT=(...n)=>{const e=DT().createApp(...n),{mount:t}=e;return e.mount=r=>{const s=xT(r);if(!s)return;const i=e._component;!ie(i)&&!i.render&&!i.template&&(i.template=s.innerHTML),s.innerHTML="";const o=t(s,!1,s instanceof SVGElement);return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},e};function xT(n){return Ye(n)?document.querySelector(n):n}/*!
  * vue-router v4.1.6
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */const zs=typeof window<"u";function PT(n){return n.__esModule||n[Symbol.toStringTag]==="Module"}const ye=Object.assign;function bl(n,e){const t={};for(const r in e){const s=e[r];t[r]=ln(s)?s.map(n):n(s)}return t}const mo=()=>{},ln=Array.isArray,OT=/\/$/,MT=n=>n.replace(OT,"");function El(n,e,t="/"){let r,s={},i="",o="";const a=e.indexOf("#");let c=e.indexOf("?");return a<c&&a>=0&&(c=-1),c>-1&&(r=e.slice(0,c),i=e.slice(c+1,a>-1?a:e.length),s=n(i)),a>-1&&(r=r||e.slice(0,a),o=e.slice(a,e.length)),r=VT(r??e,t),{fullPath:r+(i&&"?")+i+o,path:r,query:s,hash:o}}function LT(n,e){const t=e.query?n(e.query):"";return e.path+(t&&"?")+t+(e.hash||"")}function Wp(n,e){return!e||!n.toLowerCase().startsWith(e.toLowerCase())?n:n.slice(e.length)||"/"}function FT(n,e,t){const r=e.matched.length-1,s=t.matched.length-1;return r>-1&&r===s&&ui(e.matched[r],t.matched[s])&&sv(e.params,t.params)&&n(e.query)===n(t.query)&&e.hash===t.hash}function ui(n,e){return(n.aliasOf||n)===(e.aliasOf||e)}function sv(n,e){if(Object.keys(n).length!==Object.keys(e).length)return!1;for(const t in n)if(!UT(n[t],e[t]))return!1;return!0}function UT(n,e){return ln(n)?Qp(n,e):ln(e)?Qp(e,n):n===e}function Qp(n,e){return ln(e)?n.length===e.length&&n.every((t,r)=>t===e[r]):n.length===1&&n[0]===e}function VT(n,e){if(n.startsWith("/"))return n;if(!n)return e;const t=e.split("/"),r=n.split("/");let s=t.length-1,i,o;for(i=0;i<r.length;i++)if(o=r[i],o!==".")if(o==="..")s>1&&s--;else break;return t.slice(0,s).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var Oo;(function(n){n.pop="pop",n.push="push"})(Oo||(Oo={}));var go;(function(n){n.back="back",n.forward="forward",n.unknown=""})(go||(go={}));function BT(n){if(!n)if(zs){const e=document.querySelector("base");n=e&&e.getAttribute("href")||"/",n=n.replace(/^\w+:\/\/[^\/]+/,"")}else n="/";return n[0]!=="/"&&n[0]!=="#"&&(n="/"+n),MT(n)}const $T=/^[^#]+#/;function qT(n,e){return n.replace($T,"#")+e}function jT(n,e){const t=document.documentElement.getBoundingClientRect(),r=n.getBoundingClientRect();return{behavior:e.behavior,left:r.left-t.left-(e.left||0),top:r.top-t.top-(e.top||0)}}const gu=()=>({left:window.pageXOffset,top:window.pageYOffset});function zT(n){let e;if("el"in n){const t=n.el,r=typeof t=="string"&&t.startsWith("#"),s=typeof t=="string"?r?document.getElementById(t.slice(1)):document.querySelector(t):t;if(!s)return;e=jT(s,n)}else e=n;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.pageXOffset,e.top!=null?e.top:window.pageYOffset)}function Yp(n,e){return(history.state?history.state.position-e:-1)+n}const uh=new Map;function KT(n,e){uh.set(n,e)}function GT(n){const e=uh.get(n);return uh.delete(n),e}let HT=()=>location.protocol+"//"+location.host;function iv(n,e){const{pathname:t,search:r,hash:s}=e,i=n.indexOf("#");if(i>-1){let a=s.includes(n.slice(i))?n.slice(i).length:1,c=s.slice(a);return c[0]!=="/"&&(c="/"+c),Wp(c,"")}return Wp(t,n)+r+s}function WT(n,e,t,r){let s=[],i=[],o=null;const a=({state:d})=>{const p=iv(n,location),g=t.value,v=e.value;let A=0;if(d){if(t.value=p,e.value=d,o&&o===g){o=null;return}A=v?d.position-v.position:0}else r(p);s.forEach(R=>{R(t.value,g,{delta:A,type:Oo.pop,direction:A?A>0?go.forward:go.back:go.unknown})})};function c(){o=t.value}function u(d){s.push(d);const p=()=>{const g=s.indexOf(d);g>-1&&s.splice(g,1)};return i.push(p),p}function l(){const{history:d}=window;d.state&&d.replaceState(ye({},d.state,{scroll:gu()}),"")}function h(){for(const d of i)d();i=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",l)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",l),{pauseListeners:c,listen:u,destroy:h}}function Jp(n,e,t,r=!1,s=!1){return{back:n,current:e,forward:t,replaced:r,position:window.history.length,scroll:s?gu():null}}function QT(n){const{history:e,location:t}=window,r={value:iv(n,t)},s={value:e.state};s.value||i(r.value,{back:null,current:r.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function i(c,u,l){const h=n.indexOf("#"),d=h>-1?(t.host&&document.querySelector("base")?n:n.slice(h))+c:HT()+n+c;try{e[l?"replaceState":"pushState"](u,"",d),s.value=u}catch(p){console.error(p),t[l?"replace":"assign"](d)}}function o(c,u){const l=ye({},e.state,Jp(s.value.back,c,s.value.forward,!0),u,{position:s.value.position});i(c,l,!0),r.value=c}function a(c,u){const l=ye({},s.value,e.state,{forward:c,scroll:gu()});i(l.current,l,!0);const h=ye({},Jp(r.value,c,null),{position:l.position+1},u);i(c,h,!1),r.value=c}return{location:r,state:s,push:a,replace:o}}function YT(n){n=BT(n);const e=QT(n),t=WT(n,e.state,e.location,e.replace);function r(i,o=!0){o||t.pauseListeners(),history.go(i)}const s=ye({location:"",base:n,go:r,createHref:qT.bind(null,n)},e,t);return Object.defineProperty(s,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(s,"state",{enumerable:!0,get:()=>e.state.value}),s}function JT(n){return typeof n=="string"||n&&typeof n=="object"}function ov(n){return typeof n=="string"||typeof n=="symbol"}const nr={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},av=Symbol("");var Xp;(function(n){n[n.aborted=4]="aborted",n[n.cancelled=8]="cancelled",n[n.duplicated=16]="duplicated"})(Xp||(Xp={}));function li(n,e){return ye(new Error,{type:n,[av]:!0},e)}function On(n,e){return n instanceof Error&&av in n&&(e==null||!!(n.type&e))}const Zp="[^/]+?",XT={sensitive:!1,strict:!1,start:!0,end:!0},ZT=/[.+*?^${}()[\]/\\]/g;function eS(n,e){const t=ye({},XT,e),r=[];let s=t.start?"^":"";const i=[];for(const u of n){const l=u.length?[]:[90];t.strict&&!u.length&&(s+="/");for(let h=0;h<u.length;h++){const d=u[h];let p=40+(t.sensitive?.25:0);if(d.type===0)h||(s+="/"),s+=d.value.replace(ZT,"\\$&"),p+=40;else if(d.type===1){const{value:g,repeatable:v,optional:A,regexp:R}=d;i.push({name:g,repeatable:v,optional:A});const V=R||Zp;if(V!==Zp){p+=10;try{new RegExp(`(${V})`)}catch(W){throw new Error(`Invalid custom RegExp for param "${g}" (${V}): `+W.message)}}let D=v?`((?:${V})(?:/(?:${V}))*)`:`(${V})`;h||(D=A&&u.length<2?`(?:/${D})`:"/"+D),A&&(D+="?"),s+=D,p+=20,A&&(p+=-8),v&&(p+=-20),V===".*"&&(p+=-50)}l.push(p)}r.push(l)}if(t.strict&&t.end){const u=r.length-1;r[u][r[u].length-1]+=.7000000000000001}t.strict||(s+="/?"),t.end?s+="$":t.strict&&(s+="(?:/|$)");const o=new RegExp(s,t.sensitive?"":"i");function a(u){const l=u.match(o),h={};if(!l)return null;for(let d=1;d<l.length;d++){const p=l[d]||"",g=i[d-1];h[g.name]=p&&g.repeatable?p.split("/"):p}return h}function c(u){let l="",h=!1;for(const d of n){(!h||!l.endsWith("/"))&&(l+="/"),h=!1;for(const p of d)if(p.type===0)l+=p.value;else if(p.type===1){const{value:g,repeatable:v,optional:A}=p,R=g in u?u[g]:"";if(ln(R)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const V=ln(R)?R.join("/"):R;if(!V)if(A)d.length<2&&(l.endsWith("/")?l=l.slice(0,-1):h=!0);else throw new Error(`Missing required param "${g}"`);l+=V}}return l||"/"}return{re:o,score:r,keys:i,parse:a,stringify:c}}function tS(n,e){let t=0;for(;t<n.length&&t<e.length;){const r=e[t]-n[t];if(r)return r;t++}return n.length<e.length?n.length===1&&n[0]===40+40?-1:1:n.length>e.length?e.length===1&&e[0]===40+40?1:-1:0}function nS(n,e){let t=0;const r=n.score,s=e.score;for(;t<r.length&&t<s.length;){const i=tS(r[t],s[t]);if(i)return i;t++}if(Math.abs(s.length-r.length)===1){if(em(r))return 1;if(em(s))return-1}return s.length-r.length}function em(n){const e=n[n.length-1];return n.length>0&&e[e.length-1]<0}const rS={type:0,value:""},sS=/[a-zA-Z0-9_]/;function iS(n){if(!n)return[[]];if(n==="/")return[[rS]];if(!n.startsWith("/"))throw new Error(`Invalid path "${n}"`);function e(p){throw new Error(`ERR (${t})/"${u}": ${p}`)}let t=0,r=t;const s=[];let i;function o(){i&&s.push(i),i=[]}let a=0,c,u="",l="";function h(){u&&(t===0?i.push({type:0,value:u}):t===1||t===2||t===3?(i.length>1&&(c==="*"||c==="+")&&e(`A repeatable param (${u}) must be alone in its segment. eg: '/:ids+.`),i.push({type:1,value:u,regexp:l,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):e("Invalid state to consume buffer"),u="")}function d(){u+=c}for(;a<n.length;){if(c=n[a++],c==="\\"&&t!==2){r=t,t=4;continue}switch(t){case 0:c==="/"?(u&&h(),o()):c===":"?(h(),t=1):d();break;case 4:d(),t=r;break;case 1:c==="("?t=2:sS.test(c)?d():(h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--);break;case 2:c===")"?l[l.length-1]=="\\"?l=l.slice(0,-1)+c:t=3:l+=c;break;case 3:h(),t=0,c!=="*"&&c!=="?"&&c!=="+"&&a--,l="";break;default:e("Unknown state");break}}return t===2&&e(`Unfinished custom RegExp for param "${u}"`),h(),o(),s}function oS(n,e,t){const r=eS(iS(n.path),t),s=ye(r,{record:n,parent:e,children:[],alias:[]});return e&&!s.record.aliasOf==!e.record.aliasOf&&e.children.push(s),s}function aS(n,e){const t=[],r=new Map;e=rm({strict:!1,end:!0,sensitive:!1},e);function s(l){return r.get(l)}function i(l,h,d){const p=!d,g=cS(l);g.aliasOf=d&&d.record;const v=rm(e,l),A=[g];if("alias"in l){const D=typeof l.alias=="string"?[l.alias]:l.alias;for(const W of D)A.push(ye({},g,{components:d?d.record.components:g.components,path:W,aliasOf:d?d.record:g}))}let R,V;for(const D of A){const{path:W}=D;if(h&&W[0]!=="/"){const X=h.record.path,ne=X[X.length-1]==="/"?"":"/";D.path=h.record.path+(W&&ne+W)}if(R=oS(D,h,v),d?d.alias.push(R):(V=V||R,V!==R&&V.alias.push(R),p&&l.name&&!nm(R)&&o(l.name)),g.children){const X=g.children;for(let ne=0;ne<X.length;ne++)i(X[ne],R,d&&d.children[ne])}d=d||R,(R.record.components&&Object.keys(R.record.components).length||R.record.name||R.record.redirect)&&c(R)}return V?()=>{o(V)}:mo}function o(l){if(ov(l)){const h=r.get(l);h&&(r.delete(l),t.splice(t.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=t.indexOf(l);h>-1&&(t.splice(h,1),l.record.name&&r.delete(l.record.name),l.children.forEach(o),l.alias.forEach(o))}}function a(){return t}function c(l){let h=0;for(;h<t.length&&nS(l,t[h])>=0&&(l.record.path!==t[h].record.path||!cv(l,t[h]));)h++;t.splice(h,0,l),l.record.name&&!nm(l)&&r.set(l.record.name,l)}function u(l,h){let d,p={},g,v;if("name"in l&&l.name){if(d=r.get(l.name),!d)throw li(1,{location:l});v=d.record.name,p=ye(tm(h.params,d.keys.filter(V=>!V.optional).map(V=>V.name)),l.params&&tm(l.params,d.keys.map(V=>V.name))),g=d.stringify(p)}else if("path"in l)g=l.path,d=t.find(V=>V.re.test(g)),d&&(p=d.parse(g),v=d.record.name);else{if(d=h.name?r.get(h.name):t.find(V=>V.re.test(h.path)),!d)throw li(1,{location:l,currentLocation:h});v=d.record.name,p=ye({},h.params,l.params),g=d.stringify(p)}const A=[];let R=d;for(;R;)A.unshift(R.record),R=R.parent;return{name:v,path:g,params:p,matched:A,meta:lS(A)}}return n.forEach(l=>i(l)),{addRoute:i,resolve:u,removeRoute:o,getRoutes:a,getRecordMatcher:s}}function tm(n,e){const t={};for(const r of e)r in n&&(t[r]=n[r]);return t}function cS(n){return{path:n.path,redirect:n.redirect,name:n.name,meta:n.meta||{},aliasOf:void 0,beforeEnter:n.beforeEnter,props:uS(n),children:n.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in n?n.components||null:n.component&&{default:n.component}}}function uS(n){const e={},t=n.props||!1;if("component"in n)e.default=t;else for(const r in n.components)e[r]=typeof t=="boolean"?t:t[r];return e}function nm(n){for(;n;){if(n.record.aliasOf)return!0;n=n.parent}return!1}function lS(n){return n.reduce((e,t)=>ye(e,t.meta),{})}function rm(n,e){const t={};for(const r in n)t[r]=r in e?e[r]:n[r];return t}function cv(n,e){return e.children.some(t=>t===n||cv(n,t))}const uv=/#/g,hS=/&/g,dS=/\//g,fS=/=/g,pS=/\?/g,lv=/\+/g,mS=/%5B/g,gS=/%5D/g,hv=/%5E/g,yS=/%60/g,dv=/%7B/g,vS=/%7C/g,fv=/%7D/g,wS=/%20/g;function bd(n){return encodeURI(""+n).replace(vS,"|").replace(mS,"[").replace(gS,"]")}function _S(n){return bd(n).replace(dv,"{").replace(fv,"}").replace(hv,"^")}function lh(n){return bd(n).replace(lv,"%2B").replace(wS,"+").replace(uv,"%23").replace(hS,"%26").replace(yS,"`").replace(dv,"{").replace(fv,"}").replace(hv,"^")}function IS(n){return lh(n).replace(fS,"%3D")}function bS(n){return bd(n).replace(uv,"%23").replace(pS,"%3F")}function ES(n){return n==null?"":bS(n).replace(dS,"%2F")}function Cc(n){try{return decodeURIComponent(""+n)}catch{}return""+n}function TS(n){const e={};if(n===""||n==="?")return e;const r=(n[0]==="?"?n.slice(1):n).split("&");for(let s=0;s<r.length;++s){const i=r[s].replace(lv," "),o=i.indexOf("="),a=Cc(o<0?i:i.slice(0,o)),c=o<0?null:Cc(i.slice(o+1));if(a in e){let u=e[a];ln(u)||(u=e[a]=[u]),u.push(c)}else e[a]=c}return e}function sm(n){let e="";for(let t in n){const r=n[t];if(t=IS(t),r==null){r!==void 0&&(e+=(e.length?"&":"")+t);continue}(ln(r)?r.map(i=>i&&lh(i)):[r&&lh(r)]).forEach(i=>{i!==void 0&&(e+=(e.length?"&":"")+t,i!=null&&(e+="="+i))})}return e}function SS(n){const e={};for(const t in n){const r=n[t];r!==void 0&&(e[t]=ln(r)?r.map(s=>s==null?null:""+s):r==null?r:""+r)}return e}const AS=Symbol(""),im=Symbol(""),Ed=Symbol(""),pv=Symbol(""),hh=Symbol("");function Wi(){let n=[];function e(r){return n.push(r),()=>{const s=n.indexOf(r);s>-1&&n.splice(s,1)}}function t(){n=[]}return{add:e,list:()=>n,reset:t}}function cr(n,e,t,r,s){const i=r&&(r.enterCallbacks[s]=r.enterCallbacks[s]||[]);return()=>new Promise((o,a)=>{const c=h=>{h===!1?a(li(4,{from:t,to:e})):h instanceof Error?a(h):JT(h)?a(li(2,{from:e,to:h})):(i&&r.enterCallbacks[s]===i&&typeof h=="function"&&i.push(h),o())},u=n.call(r&&r.instances[s],e,t,c);let l=Promise.resolve(u);n.length<3&&(l=l.then(c)),l.catch(h=>a(h))})}function Tl(n,e,t,r){const s=[];for(const i of n)for(const o in i.components){let a=i.components[o];if(!(e!=="beforeRouteEnter"&&!i.instances[o]))if(CS(a)){const u=(a.__vccOpts||a)[e];u&&s.push(cr(u,t,r,i,o))}else{let c=a();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${o}" at "${i.path}"`));const l=PT(u)?u.default:u;i.components[o]=l;const d=(l.__vccOpts||l)[e];return d&&cr(d,t,r,i,o)()}))}}return s}function CS(n){return typeof n=="object"||"displayName"in n||"props"in n||"__vccOpts"in n}function om(n){const e=$n(Ed),t=$n(pv),r=Ht(()=>e.resolve(us(n.to))),s=Ht(()=>{const{matched:c}=r.value,{length:u}=c,l=c[u-1],h=t.matched;if(!l||!h.length)return-1;const d=h.findIndex(ui.bind(null,l));if(d>-1)return d;const p=am(c[u-2]);return u>1&&am(l)===p&&h[h.length-1].path!==p?h.findIndex(ui.bind(null,c[u-2])):d}),i=Ht(()=>s.value>-1&&NS(t.params,r.value.params)),o=Ht(()=>s.value>-1&&s.value===t.matched.length-1&&sv(t.params,r.value.params));function a(c={}){return DS(c)?e[us(n.replace)?"replace":"push"](us(n.to)).catch(mo):Promise.resolve()}return{route:r,href:Ht(()=>r.value.href),isActive:i,isExactActive:o,navigate:a}}const kS=vd({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:om,setup(n,{slots:e}){const t=aa(om(n)),{options:r}=$n(Ed),s=Ht(()=>({[cm(n.activeClass,r.linkActiveClass,"router-link-active")]:t.isActive,[cm(n.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:t.isExactActive}));return()=>{const i=e.default&&e.default(t);return n.custom?i:nv("a",{"aria-current":t.isExactActive?n.ariaCurrentValue:null,href:t.href,onClick:t.navigate,class:s.value},i)}}}),RS=kS;function DS(n){if(!(n.metaKey||n.altKey||n.ctrlKey||n.shiftKey)&&!n.defaultPrevented&&!(n.button!==void 0&&n.button!==0)){if(n.currentTarget&&n.currentTarget.getAttribute){const e=n.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return n.preventDefault&&n.preventDefault(),!0}}function NS(n,e){for(const t in e){const r=e[t],s=n[t];if(typeof r=="string"){if(r!==s)return!1}else if(!ln(s)||s.length!==r.length||r.some((i,o)=>i!==s[o]))return!1}return!0}function am(n){return n?n.aliasOf?n.aliasOf.path:n.path:""}const cm=(n,e,t)=>n??e??t,xS=vd({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(n,{attrs:e,slots:t}){const r=$n(hh),s=Ht(()=>n.route||r.value),i=$n(im,0),o=Ht(()=>{let u=us(i);const{matched:l}=s.value;let h;for(;(h=l[u])&&!h.components;)u++;return u}),a=Ht(()=>s.value.matched[o.value]);oc(im,Ht(()=>o.value+1)),oc(AS,a),oc(hh,s);const c=HE();return ac(()=>[c.value,a.value,n.name],([u,l,h],[d,p,g])=>{l&&(l.instances[h]=u,p&&p!==l&&u&&u===d&&(l.leaveGuards.size||(l.leaveGuards=p.leaveGuards),l.updateGuards.size||(l.updateGuards=p.updateGuards))),u&&l&&(!p||!ui(l,p)||!d)&&(l.enterCallbacks[h]||[]).forEach(v=>v(u))},{flush:"post"}),()=>{const u=s.value,l=n.name,h=a.value,d=h&&h.components[l];if(!d)return um(t.default,{Component:d,route:u});const p=h.props[l],g=p?p===!0?u.params:typeof p=="function"?p(u):p:null,A=nv(d,ye({},g,e,{onVnodeUnmounted:R=>{R.component.isUnmounted&&(h.instances[l]=null)},ref:c}));return um(t.default,{Component:A,route:u})||A}}});function um(n,e){if(!n)return null;const t=n(e);return t.length===1?t[0]:t}const mv=xS;function PS(n){const e=aS(n.routes,n),t=n.parseQuery||TS,r=n.stringifyQuery||sm,s=n.history,i=Wi(),o=Wi(),a=Wi(),c=WE(nr);let u=nr;zs&&n.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const l=bl.bind(null,b=>""+b),h=bl.bind(null,ES),d=bl.bind(null,Cc);function p(b,B){let L,G;return ov(b)?(L=e.getRecordMatcher(b),G=B):G=b,e.addRoute(G,L)}function g(b){const B=e.getRecordMatcher(b);B&&e.removeRoute(B)}function v(){return e.getRoutes().map(b=>b.record)}function A(b){return!!e.getRecordMatcher(b)}function R(b,B){if(B=ye({},B||c.value),typeof b=="string"){const f=El(t,b,B.path),m=e.resolve({path:f.path},B),_=s.createHref(f.fullPath);return ye(f,m,{params:d(m.params),hash:Cc(f.hash),redirectedFrom:void 0,href:_})}let L;if("path"in b)L=ye({},b,{path:El(t,b.path,B.path).path});else{const f=ye({},b.params);for(const m in f)f[m]==null&&delete f[m];L=ye({},b,{params:h(b.params)}),B.params=h(B.params)}const G=e.resolve(L,B),he=b.hash||"";G.params=l(d(G.params));const Oe=LT(r,ye({},b,{hash:_S(he),path:G.path})),oe=s.createHref(Oe);return ye({fullPath:Oe,hash:he,query:r===sm?SS(b.query):b.query||{}},G,{redirectedFrom:void 0,href:oe})}function V(b){return typeof b=="string"?El(t,b,c.value.path):ye({},b)}function D(b,B){if(u!==b)return li(8,{from:B,to:b})}function W(b){return ge(b)}function X(b){return W(ye(V(b),{replace:!0}))}function ne(b){const B=b.matched[b.matched.length-1];if(B&&B.redirect){const{redirect:L}=B;let G=typeof L=="function"?L(b):L;return typeof G=="string"&&(G=G.includes("?")||G.includes("#")?G=V(G):{path:G},G.params={}),ye({query:b.query,hash:b.hash,params:"path"in G?{}:b.params},G)}}function ge(b,B){const L=u=R(b),G=c.value,he=b.state,Oe=b.force,oe=b.replace===!0,f=ne(L);if(f)return ge(ye(V(f),{state:typeof f=="object"?ye({},he,f.state):he,force:Oe,replace:oe}),B||L);const m=L;m.redirectedFrom=B;let _;return!Oe&&FT(r,G,L)&&(_=li(16,{to:m,from:G}),Vr(G,G,!0,!1)),(_?Promise.resolve(_):Ae(m,G)).catch(I=>On(I)?On(I,2)?I:Xt(I):Ee(I,m,G)).then(I=>{if(I){if(On(I,2))return ge(ye({replace:oe},V(I.to),{state:typeof I.to=="object"?ye({},he,I.to.state):he,force:Oe}),B||m)}else I=pt(m,G,!0,oe,he);return be(m,G,I),I})}function J(b,B){const L=D(b,B);return L?Promise.reject(L):Promise.resolve()}function Ae(b,B){let L;const[G,he,Oe]=OS(b,B);L=Tl(G.reverse(),"beforeRouteLeave",b,B);for(const f of G)f.leaveGuards.forEach(m=>{L.push(cr(m,b,B))});const oe=J.bind(null,b,B);return L.push(oe),Bs(L).then(()=>{L=[];for(const f of i.list())L.push(cr(f,b,B));return L.push(oe),Bs(L)}).then(()=>{L=Tl(he,"beforeRouteUpdate",b,B);for(const f of he)f.updateGuards.forEach(m=>{L.push(cr(m,b,B))});return L.push(oe),Bs(L)}).then(()=>{L=[];for(const f of b.matched)if(f.beforeEnter&&!B.matched.includes(f))if(ln(f.beforeEnter))for(const m of f.beforeEnter)L.push(cr(m,b,B));else L.push(cr(f.beforeEnter,b,B));return L.push(oe),Bs(L)}).then(()=>(b.matched.forEach(f=>f.enterCallbacks={}),L=Tl(Oe,"beforeRouteEnter",b,B),L.push(oe),Bs(L))).then(()=>{L=[];for(const f of o.list())L.push(cr(f,b,B));return L.push(oe),Bs(L)}).catch(f=>On(f,8)?f:Promise.reject(f))}function be(b,B,L){for(const G of a.list())G(b,B,L)}function pt(b,B,L,G,he){const Oe=D(b,B);if(Oe)return Oe;const oe=B===nr,f=zs?history.state:{};L&&(G||oe?s.replace(b.fullPath,ye({scroll:oe&&f&&f.scroll},he)):s.push(b.fullPath,he)),c.value=b,Vr(b,B,L,oe),Xt()}let mt;function Jt(){mt||(mt=s.listen((b,B,L)=>{if(!Fa.listening)return;const G=R(b),he=ne(G);if(he){ge(ye(he,{replace:!0}),G).catch(mo);return}u=G;const Oe=c.value;zs&&KT(Yp(Oe.fullPath,L.delta),gu()),Ae(G,Oe).catch(oe=>On(oe,12)?oe:On(oe,2)?(ge(oe.to,G).then(f=>{On(f,20)&&!L.delta&&L.type===Oo.pop&&s.go(-1,!1)}).catch(mo),Promise.reject()):(L.delta&&s.go(-L.delta,!1),Ee(oe,G,Oe))).then(oe=>{oe=oe||pt(G,Oe,!1),oe&&(L.delta&&!On(oe,8)?s.go(-L.delta,!1):L.type===Oo.pop&&On(oe,20)&&s.go(-1,!1)),be(G,Oe,oe)}).catch(mo)}))}let Pn=Wi(),Gi=Wi(),Ge;function Ee(b,B,L){Xt(b);const G=Gi.list();return G.length?G.forEach(he=>he(b,B,L)):console.error(b),Promise.reject(b)}function we(){return Ge&&c.value!==nr?Promise.resolve():new Promise((b,B)=>{Pn.add([b,B])})}function Xt(b){return Ge||(Ge=!b,Jt(),Pn.list().forEach(([B,L])=>b?L(b):B()),Pn.reset()),b}function Vr(b,B,L,G){const{scrollBehavior:he}=n;if(!zs||!he)return Promise.resolve();const Oe=!L&&GT(Yp(b.fullPath,0))||(G||!L)&&history.state&&history.state.scroll||null;return Cy().then(()=>he(b,B,Oe)).then(oe=>oe&&zT(oe)).catch(oe=>Ee(oe,b,B))}const Zt=b=>s.go(b);let kt;const Us=new Set,Fa={currentRoute:c,listening:!0,addRoute:p,removeRoute:g,hasRoute:A,getRoutes:v,resolve:R,options:n,push:W,replace:X,go:Zt,back:()=>Zt(-1),forward:()=>Zt(1),beforeEach:i.add,beforeResolve:o.add,afterEach:a.add,onError:Gi.add,isReady:we,install(b){const B=this;b.component("RouterLink",RS),b.component("RouterView",mv),b.config.globalProperties.$router=B,Object.defineProperty(b.config.globalProperties,"$route",{enumerable:!0,get:()=>us(c)}),zs&&!kt&&c.value===nr&&(kt=!0,W(s.location).catch(he=>{}));const L={};for(const he in nr)L[he]=Ht(()=>c.value[he]);b.provide(Ed,B),b.provide(pv,aa(L)),b.provide(hh,c);const G=b.unmount;Us.add(b),b.unmount=function(){Us.delete(b),Us.size<1&&(u=nr,mt&&mt(),mt=null,c.value=nr,kt=!1,Ge=!1),G()}}};return Fa}function Bs(n){return n.reduce((e,t)=>e.then(()=>t()),Promise.resolve())}function OS(n,e){const t=[],r=[],s=[],i=Math.max(e.matched.length,n.matched.length);for(let o=0;o<i;o++){const a=e.matched[o];a&&(n.matched.find(u=>ui(u,a))?r.push(a):t.push(a));const c=n.matched[o];c&&(e.matched.find(u=>ui(u,c))||s.push(c))}return[t,r,s]}/**
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
 */const gv=function(n){const e=[];let t=0;for(let r=0;r<n.length;r++){let s=n.charCodeAt(r);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&r+1<n.length&&(n.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++r)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},MS=function(n){const e=[];let t=0,r=0;for(;t<n.length;){const s=n[t++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const i=n[t++];e[r++]=String.fromCharCode((s&31)<<6|i&63)}else if(s>239&&s<365){const i=n[t++],o=n[t++],a=n[t++],c=((s&7)<<18|(i&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const i=n[t++],o=n[t++];e[r++]=String.fromCharCode((s&15)<<12|(i&63)<<6|o&63)}}return e.join("")},yv={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<n.length;s+=3){const i=n[s],o=s+1<n.length,a=o?n[s+1]:0,c=s+2<n.length,u=c?n[s+2]:0,l=i>>2,h=(i&3)<<4|a>>4;let d=(a&15)<<2|u>>6,p=u&63;c||(p=64,o||(d=64)),r.push(t[l],t[h],t[d],t[p])}return r.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(gv(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):MS(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<n.length;){const i=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const u=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,i==null||a==null||u==null||h==null)throw new LS;const d=i<<2|a>>4;if(r.push(d),u!==64){const p=a<<4&240|u>>2;if(r.push(p),h!==64){const g=u<<6&192|h;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class LS extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const FS=function(n){const e=gv(n);return yv.encodeByteArray(e,!0)},kc=function(n){return FS(n).replace(/\./g,"")},vv=function(n){try{return yv.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};function Rc(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!US(t)||(n[t]=Rc(n[t],e[t]));return n}function US(n){return n!=="__proto__"}/**
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
 */function VS(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const BS=()=>VS().__FIREBASE_DEFAULTS__,$S=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},qS=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&vv(n[1]);return e&&JSON.parse(e)},yu=()=>{try{return BS()||$S()||qS()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},wv=n=>{var e,t;return(t=(e=yu())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},jS=n=>{const e=wv(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),r]:[e.substring(0,t),r]},zS=()=>{var n;return(n=yu())===null||n===void 0?void 0:n.config},_v=n=>{var e;return(e=yu())===null||e===void 0?void 0:e[`_${n}`]};/**
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
 */class KS{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,r)=>{t?this.reject(t):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,r))}}}/**
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
 */function GS(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},r=e||"demo-project",s=n.iat||0,i=n.sub||n.user_id;if(!i)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:i,user_id:i,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[kc(JSON.stringify(t)),kc(JSON.stringify(o)),a].join(".")}/**
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
 */function Me(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function HS(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Me())}function Td(){var n;const e=(n=yu())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function WS(){return typeof self=="object"&&self.self===self}function Iv(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function Sd(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function bv(){const n=Me();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function QS(){return!Td()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function Mo(){try{return typeof indexedDB=="object"}catch{return!1}}function YS(){return new Promise((n,e)=>{try{let t=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(r),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var i;e(((i=s.error)===null||i===void 0?void 0:i.message)||"")}}catch(t){e(t)}})}/**
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
 */const JS="FirebaseError";class At extends Error{constructor(e,t,r){super(t),this.code=e,this.customData=r,this.name=JS,Object.setPrototypeOf(this,At.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Rs.prototype.create)}}class Rs{constructor(e,t,r){this.service=e,this.serviceName=t,this.errors=r}create(e,...t){const r=t[0]||{},s=`${this.service}/${e}`,i=this.errors[e],o=i?XS(i,r):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new At(s,a,r)}}function XS(n,e){return n.replace(ZS,(t,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const ZS=/\{\$([^}]+)}/g;/**
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
 */function lm(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function eA(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function Dc(n,e){if(n===e)return!0;const t=Object.keys(n),r=Object.keys(e);for(const s of t){if(!r.includes(s))return!1;const i=n[s],o=e[s];if(hm(i)&&hm(o)){if(!Dc(i,o))return!1}else if(i!==o)return!1}for(const s of r)if(!t.includes(s))return!1;return!0}function hm(n){return n!==null&&typeof n=="object"}/**
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
 */function Ni(n){const e=[];for(const[t,r]of Object.entries(n))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Ws(n){const e={};return n.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[s,i]=r.split("=");e[decodeURIComponent(s)]=decodeURIComponent(i)}}),e}function oo(n){const e=n.indexOf("?");if(!e)return"";const t=n.indexOf("#",e);return n.substring(e,t>0?t:void 0)}function Ev(n,e){const t=new tA(n,e);return t.subscribe.bind(t)}class tA{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,r){let s;if(e===void 0&&t===void 0&&r===void 0)throw new Error("Missing Observer.");nA(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:r},s.next===void 0&&(s.next=Sl),s.error===void 0&&(s.error=Sl),s.complete===void 0&&(s.complete=Sl);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),i}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function nA(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Sl(){}/**
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
 */function K(n){return n&&n._delegate?n._delegate:n}class Rn{constructor(e,t,r){this.name=e,this.instanceFactory=t,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const zr="[DEFAULT]";/**
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
 */class rA{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const r=new KS;if(this.instancesDeferred.set(t,r),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(iA(e))try{this.getOrInitializeService({instanceIdentifier:zr})}catch{}for(const[t,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const i=this.getOrInitializeService({instanceIdentifier:s});r.resolve(i)}catch{}}}}clearInstance(e=zr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=zr){return this.instances.has(e)}getOptions(e=zr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:t});for(const[i,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(i);r===a&&o.resolve(s)}return s}onInit(e,t){var r;const s=this.normalizeInstanceIdentifier(t),i=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;i.add(e),this.onInitCallbacks.set(s,i);const o=this.instances.get(s);return o&&e(o,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const r=this.onInitCallbacks.get(t);if(r)for(const s of r)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:sA(e),options:t}),this.instances.set(e,r),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=zr){return this.component?this.component.multipleInstances?e:zr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function sA(n){return n===zr?void 0:n}function iA(n){return n.instantiationMode==="EAGER"}/**
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
 */class oA{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new rA(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */const Ad=[];var fe;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(fe||(fe={}));const Tv={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},aA=fe.INFO,cA={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},uA=(n,e,...t)=>{if(e<n.logLevel)return;const r=new Date().toISOString(),s=cA[e];if(s)console[s](`[${r}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class vu{constructor(e){this.name=e,this._logLevel=aA,this._logHandler=uA,this._userLogHandler=null,Ad.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Tv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}function lA(n){Ad.forEach(e=>{e.setLogLevel(n)})}function hA(n,e){for(const t of Ad){let r=null;e&&e.level&&(r=Tv[e.level]),n===null?t.userLogHandler=null:t.userLogHandler=(s,i,...o)=>{const a=o.map(c=>{if(c==null)return null;if(typeof c=="string")return c;if(typeof c=="number"||typeof c=="boolean")return c.toString();if(c instanceof Error)return c.message;try{return JSON.stringify(c)}catch{return null}}).filter(c=>c).join(" ");i>=(r??s.logLevel)&&n({level:fe[i].toLowerCase(),message:a,args:o,type:s.name})}}}const dA=(n,e)=>e.some(t=>n instanceof t);let dm,fm;function fA(){return dm||(dm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pA(){return fm||(fm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Sv=new WeakMap,dh=new WeakMap,Av=new WeakMap,Al=new WeakMap,Cd=new WeakMap;function mA(n){const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("success",i),n.removeEventListener("error",o)},i=()=>{t(mr(n.result)),s()},o=()=>{r(n.error),s()};n.addEventListener("success",i),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&Sv.set(t,n)}).catch(()=>{}),Cd.set(e,n),e}function gA(n){if(dh.has(n))return;const e=new Promise((t,r)=>{const s=()=>{n.removeEventListener("complete",i),n.removeEventListener("error",o),n.removeEventListener("abort",o)},i=()=>{t(),s()},o=()=>{r(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",i),n.addEventListener("error",o),n.addEventListener("abort",o)});dh.set(n,e)}let fh={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return dh.get(n);if(e==="objectStoreNames")return n.objectStoreNames||Av.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return mr(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function yA(n){fh=n(fh)}function vA(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const r=n.call(Cl(this),e,...t);return Av.set(r,e.sort?e.sort():[e]),mr(r)}:pA().includes(n)?function(...e){return n.apply(Cl(this),e),mr(Sv.get(this))}:function(...e){return mr(n.apply(Cl(this),e))}}function wA(n){return typeof n=="function"?vA(n):(n instanceof IDBTransaction&&gA(n),dA(n,fA())?new Proxy(n,fh):n)}function mr(n){if(n instanceof IDBRequest)return mA(n);if(Al.has(n))return Al.get(n);const e=wA(n);return e!==n&&(Al.set(n,e),Cd.set(e,n)),e}const Cl=n=>Cd.get(n);function _A(n,e,{blocked:t,upgrade:r,blocking:s,terminated:i}={}){const o=indexedDB.open(n,e),a=mr(o);return r&&o.addEventListener("upgradeneeded",c=>{r(mr(o.result),c.oldVersion,c.newVersion,mr(o.transaction))}),t&&o.addEventListener("blocked",()=>t()),a.then(c=>{i&&c.addEventListener("close",()=>i()),s&&c.addEventListener("versionchange",()=>s())}).catch(()=>{}),a}const IA=["get","getKey","getAll","getAllKeys","count"],bA=["put","add","delete","clear"],kl=new Map;function pm(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(kl.get(e))return kl.get(e);const t=e.replace(/FromIndex$/,""),r=e!==t,s=bA.includes(t);if(!(t in(r?IDBIndex:IDBObjectStore).prototype)||!(s||IA.includes(t)))return;const i=async function(o,...a){const c=this.transaction(o,s?"readwrite":"readonly");let u=c.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[t](...a),s&&c.done]))[0]};return kl.set(e,i),i}yA(n=>({...n,get:(e,t,r)=>pm(e,t)||n.get(e,t,r),has:(e,t)=>!!pm(e,t)||n.has(e,t)}));/**
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
 */class EA{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(TA(t)){const r=t.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(t=>t).join(" ")}}function TA(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ph="@firebase/app",mm="0.9.7";/**
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
 */const gs=new vu("@firebase/app"),SA="@firebase/app-compat",AA="@firebase/analytics-compat",CA="@firebase/analytics",kA="@firebase/app-check-compat",RA="@firebase/app-check",DA="@firebase/auth",NA="@firebase/auth-compat",xA="@firebase/database",PA="@firebase/database-compat",OA="@firebase/functions",MA="@firebase/functions-compat",LA="@firebase/installations",FA="@firebase/installations-compat",UA="@firebase/messaging",VA="@firebase/messaging-compat",BA="@firebase/performance",$A="@firebase/performance-compat",qA="@firebase/remote-config",jA="@firebase/remote-config-compat",zA="@firebase/storage",KA="@firebase/storage-compat",GA="@firebase/firestore",HA="@firebase/firestore-compat",WA="firebase",QA="9.19.1";/**
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
 */const wr="[DEFAULT]",YA={[ph]:"fire-core",[SA]:"fire-core-compat",[CA]:"fire-analytics",[AA]:"fire-analytics-compat",[RA]:"fire-app-check",[kA]:"fire-app-check-compat",[DA]:"fire-auth",[NA]:"fire-auth-compat",[xA]:"fire-rtdb",[PA]:"fire-rtdb-compat",[OA]:"fire-fn",[MA]:"fire-fn-compat",[LA]:"fire-iid",[FA]:"fire-iid-compat",[UA]:"fire-fcm",[VA]:"fire-fcm-compat",[BA]:"fire-perf",[$A]:"fire-perf-compat",[qA]:"fire-rc",[jA]:"fire-rc-compat",[zA]:"fire-gcs",[KA]:"fire-gcs-compat",[GA]:"fire-fst",[HA]:"fire-fst-compat","fire-js":"fire-js",[WA]:"fire-js-all"};/**
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
 */const _r=new Map,Lo=new Map;function Nc(n,e){try{n.container.addComponent(e)}catch(t){gs.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function Cv(n,e){n.container.addOrOverwriteComponent(e)}function Ir(n){const e=n.name;if(Lo.has(e))return gs.debug(`There were multiple attempts to register component ${e}.`),!1;Lo.set(e,n);for(const t of _r.values())Nc(t,n);return!0}function ca(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function JA(n,e,t=wr){ca(n,e).clearInstance(t)}function XA(){Lo.clear()}/**
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
 */const ZA={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},qn=new Rs("app","Firebase",ZA);/**
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
 */let eC=class{constructor(e,t,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Rn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw qn.create("app-deleted",{appName:this._name})}};/**
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
 */const Ds=QA;function wu(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const r=Object.assign({name:wr,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw qn.create("bad-app-name",{appName:String(s)});if(t||(t=zS()),!t)throw qn.create("no-options");const i=_r.get(s);if(i){if(Dc(t,i.options)&&Dc(r,i.config))return i;throw qn.create("duplicate-app",{appName:s})}const o=new oA(s);for(const c of Lo.values())o.addComponent(c);const a=new eC(t,r,o);return _r.set(s,a),a}function kd(n=wr){const e=_r.get(n);if(!e&&n===wr)return wu();if(!e)throw qn.create("no-app",{appName:n});return e}function tC(){return Array.from(_r.values())}async function kv(n){const e=n.name;_r.has(e)&&(_r.delete(e),await Promise.all(n.container.getProviders().map(t=>t.delete())),n.isDeleted=!0)}function un(n,e,t){var r;let s=(r=YA[n])!==null&&r!==void 0?r:n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),o=e.match(/\s|\//);if(i||o){const a=[`Unable to register library "${s}" with version "${e}":`];i&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),gs.warn(a.join(" "));return}Ir(new Rn(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}function Rv(n,e){if(n!==null&&typeof n!="function")throw qn.create("invalid-log-argument");hA(n,e)}function Dv(n){lA(n)}/**
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
 */const nC="firebase-heartbeat-database",rC=1,Fo="firebase-heartbeat-store";let Rl=null;function Nv(){return Rl||(Rl=_A(nC,rC,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(Fo)}}}).catch(n=>{throw qn.create("idb-open",{originalErrorMessage:n.message})})),Rl}async function sC(n){try{return(await Nv()).transaction(Fo).objectStore(Fo).get(xv(n))}catch(e){if(e instanceof At)gs.warn(e.message);else{const t=qn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});gs.warn(t.message)}}}async function gm(n,e){try{const r=(await Nv()).transaction(Fo,"readwrite");return await r.objectStore(Fo).put(e,xv(n)),r.done}catch(t){if(t instanceof At)gs.warn(t.message);else{const r=qn.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});gs.warn(r.message)}}}function xv(n){return`${n.name}!${n.options.appId}`}/**
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
 */const iC=1024,oC=30*24*60*60*1e3;class aC{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new uC(t),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=ym();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const i=new Date(s.date).valueOf();return Date.now()-i<=oC}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=ym(),{heartbeatsToSend:t,unsentEntries:r}=cC(this._heartbeatsCache.heartbeats),s=kc(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function ym(){return new Date().toISOString().substring(0,10)}function cC(n,e=iC){const t=[];let r=n.slice();for(const s of n){const i=t.find(o=>o.agent===s.agent);if(i){if(i.dates.push(s.date),vm(t)>e){i.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),vm(t)>e){t.pop();break}r=r.slice(1)}return{heartbeatsToSend:t,unsentEntries:r}}class uC{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Mo()?YS().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await sC(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return gm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return gm(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function vm(n){return kc(JSON.stringify({version:2,heartbeats:n})).length}/**
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
 */function lC(n){Ir(new Rn("platform-logger",e=>new EA(e),"PRIVATE")),Ir(new Rn("heartbeat",e=>new aC(e),"PRIVATE")),un(ph,mm,n),un(ph,mm,"esm2017"),un("fire-js","")}lC("");const hC=Object.freeze(Object.defineProperty({__proto__:null,FirebaseError:At,SDK_VERSION:Ds,_DEFAULT_ENTRY_NAME:wr,_addComponent:Nc,_addOrOverwriteComponent:Cv,_apps:_r,_clearComponents:XA,_components:Lo,_getProvider:ca,_registerComponent:Ir,_removeServiceInstance:JA,deleteApp:kv,getApp:kd,getApps:tC,initializeApp:wu,onLog:Rv,registerVersion:un,setLogLevel:Dv},Symbol.toStringTag,{value:"Module"}));/**
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
 */class dC{constructor(e,t){this._delegate=e,this.firebase=t,Nc(e,new Rn("app-compat",()=>this,"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise(e=>{this._delegate.checkDestroyed(),e()}).then(()=>(this.firebase.INTERNAL.removeApp(this.name),kv(this._delegate)))}_getService(e,t=wr){var r;this._delegate.checkDestroyed();const s=this._delegate.container.getProvider(e);return!s.isInitialized()&&((r=s.getComponent())===null||r===void 0?void 0:r.instantiationMode)==="EXPLICIT"&&s.initialize(),s.getImmediate({identifier:t})}_removeServiceInstance(e,t=wr){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){Nc(this._delegate,e)}_addOrOverwriteComponent(e){Cv(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}/**
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
 */const fC={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},wm=new Rs("app-compat","Firebase",fC);/**
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
 */function pC(n){const e={},t={__esModule:!0,initializeApp:i,app:s,registerVersion:un,setLogLevel:Dv,onLog:Rv,apps:null,SDK_VERSION:Ds,INTERNAL:{registerComponent:a,removeApp:r,useAsService:c,modularAPIs:hC}};t.default=t,Object.defineProperty(t,"apps",{get:o});function r(u){delete e[u]}function s(u){if(u=u||wr,!lm(e,u))throw wm.create("no-app",{appName:u});return e[u]}s.App=n;function i(u,l={}){const h=wu(u,l);if(lm(e,h.name))return e[h.name];const d=new n(h,t);return e[h.name]=d,d}function o(){return Object.keys(e).map(u=>e[u])}function a(u){const l=u.name,h=l.replace("-compat","");if(Ir(u)&&u.type==="PUBLIC"){const d=(p=s())=>{if(typeof p[h]!="function")throw wm.create("invalid-app-argument",{appName:l});return p[h]()};u.serviceProps!==void 0&&Rc(d,u.serviceProps),t[h]=d,n.prototype[h]=function(...p){return this._getService.bind(this,l).apply(this,u.multipleInstances?p:[])}}return u.type==="PUBLIC"?t[h]:null}function c(u,l){return l==="serverAuth"?null:l}return t}/**
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
 */function Pv(){const n=pC(dC);n.INTERNAL=Object.assign(Object.assign({},n.INTERNAL),{createFirebaseNamespace:Pv,extendNamespace:e,createSubscribe:Ev,ErrorFactory:Rs,deepExtend:Rc});function e(t){Rc(n,t)}return n}const mC=Pv();/**
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
 */const _m=new vu("@firebase/app-compat"),gC="@firebase/app-compat",yC="0.2.7";/**
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
 */function vC(n){un(gC,yC,n)}/**
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
 */if(WS()&&self.firebase!==void 0){_m.warn(`
    Warning: Firebase is already defined in the global scope. Please make sure
    Firebase library is only loaded once.
  `);const n=self.firebase.SDK_VERSION;n&&n.indexOf("LITE")>=0&&_m.warn(`
    Warning: You are trying to load Firebase while using Firebase Performance standalone script.
    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.
    `)}const ua=mC;vC();var wC="firebase",_C="9.19.1";/**
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
 */ua.registerVersion(wC,_C,"app-compat");var IC=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},q,Rd=Rd||{},ee=IC||self;function xc(){}function _u(n){var e=typeof n;return e=e!="object"?e:n?Array.isArray(n)?"array":e:"null",e=="array"||e=="object"&&typeof n.length=="number"}function la(n){var e=typeof n;return e=="object"&&n!=null||e=="function"}function bC(n){return Object.prototype.hasOwnProperty.call(n,Dl)&&n[Dl]||(n[Dl]=++EC)}var Dl="closure_uid_"+(1e9*Math.random()>>>0),EC=0;function TC(n,e,t){return n.call.apply(n.bind,arguments)}function SC(n,e,t){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),n.apply(e,s)}}return function(){return n.apply(e,arguments)}}function wt(n,e,t){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?wt=TC:wt=SC,wt.apply(null,arguments)}function Ga(n,e){var t=Array.prototype.slice.call(arguments,1);return function(){var r=t.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function ft(n,e){function t(){}t.prototype=e.prototype,n.X=e.prototype,n.prototype=new t,n.prototype.constructor=n,n.Wb=function(r,s,i){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[s].apply(r,o)}}function Nr(){this.s=this.s,this.o=this.o}var AC=0;Nr.prototype.s=!1;Nr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),AC!=0)&&bC(this)};Nr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Ov=Array.prototype.indexOf?function(n,e){return Array.prototype.indexOf.call(n,e,void 0)}:function(n,e){if(typeof n=="string")return typeof e!="string"||e.length!=1?-1:n.indexOf(e,0);for(let t=0;t<n.length;t++)if(t in n&&n[t]===e)return t;return-1};function Dd(n){const e=n.length;if(0<e){const t=Array(e);for(let r=0;r<e;r++)t[r]=n[r];return t}return[]}function Im(n,e){for(let t=1;t<arguments.length;t++){const r=arguments[t];if(_u(r)){const s=n.length||0,i=r.length||0;n.length=s+i;for(let o=0;o<i;o++)n[s+o]=r[o]}else n.push(r)}}function _t(n,e){this.type=n,this.g=this.target=e,this.defaultPrevented=!1}_t.prototype.h=function(){this.defaultPrevented=!0};var CC=function(){if(!ee.addEventListener||!Object.defineProperty)return!1;var n=!1,e=Object.defineProperty({},"passive",{get:function(){n=!0}});try{ee.addEventListener("test",xc,e),ee.removeEventListener("test",xc,e)}catch{}return n}();function Pc(n){return/^[\s\xa0]*$/.test(n)}var bm=String.prototype.trim?function(n){return n.trim()}:function(n){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(n)[1]};function Nl(n,e){return n<e?-1:n>e?1:0}function Iu(){var n=ee.navigator;return n&&(n=n.userAgent)?n:""}function yn(n){return Iu().indexOf(n)!=-1}function Nd(n){return Nd[" "](n),n}Nd[" "]=xc;function kC(n){var e=NC;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=n(9)}var RC=yn("Opera"),hi=yn("Trident")||yn("MSIE"),Mv=yn("Edge"),mh=Mv||hi,Lv=yn("Gecko")&&!(Iu().toLowerCase().indexOf("webkit")!=-1&&!yn("Edge"))&&!(yn("Trident")||yn("MSIE"))&&!yn("Edge"),DC=Iu().toLowerCase().indexOf("webkit")!=-1&&!yn("Edge");function Fv(){var n=ee.document;return n?n.documentMode:void 0}var Oc;e:{var xl="",Pl=function(){var n=Iu();if(Lv)return/rv:([^\);]+)(\)|;)/.exec(n);if(Mv)return/Edge\/([\d\.]+)/.exec(n);if(hi)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(DC)return/WebKit\/(\S+)/.exec(n);if(RC)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Pl&&(xl=Pl?Pl[1]:""),hi){var Ol=Fv();if(Ol!=null&&Ol>parseFloat(xl)){Oc=String(Ol);break e}}Oc=xl}var NC={};function xC(){return kC(function(){let n=0;const e=bm(String(Oc)).split("."),t=bm("9").split("."),r=Math.max(e.length,t.length);for(let o=0;n==0&&o<r;o++){var s=e[o]||"",i=t[o]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s[0].length==0&&i[0].length==0)break;n=Nl(s[1].length==0?0:parseInt(s[1],10),i[1].length==0?0:parseInt(i[1],10))||Nl(s[2].length==0,i[2].length==0)||Nl(s[2],i[2]),s=s[3],i=i[3]}while(n==0)}return 0<=n})}var gh;if(ee.document&&hi){var Em=Fv();gh=Em||parseInt(Oc,10)||void 0}else gh=void 0;var PC=gh;function Uo(n,e){if(_t.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var t=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=e,e=n.relatedTarget){if(Lv){e:{try{Nd(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else t=="mouseover"?e=n.fromElement:t=="mouseout"&&(e=n.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:OC[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&Uo.X.h.call(this)}}ft(Uo,_t);var OC={2:"touch",3:"pen",4:"mouse"};Uo.prototype.h=function(){Uo.X.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var ha="closure_listenable_"+(1e6*Math.random()|0),MC=0;function LC(n,e,t,r,s){this.listener=n,this.proxy=null,this.src=e,this.type=t,this.capture=!!r,this.ha=s,this.key=++MC,this.ba=this.ea=!1}function bu(n){n.ba=!0,n.listener=null,n.proxy=null,n.src=null,n.ha=null}function xd(n,e,t){for(const r in n)e.call(t,n[r],r,n)}function Uv(n){const e={};for(const t in n)e[t]=n[t];return e}const Tm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Vv(n,e){let t,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(t in r)n[t]=r[t];for(let i=0;i<Tm.length;i++)t=Tm[i],Object.prototype.hasOwnProperty.call(r,t)&&(n[t]=r[t])}}function Eu(n){this.src=n,this.g={},this.h=0}Eu.prototype.add=function(n,e,t,r,s){var i=n.toString();n=this.g[i],n||(n=this.g[i]=[],this.h++);var o=vh(n,e,r,s);return-1<o?(e=n[o],t||(e.ea=!1)):(e=new LC(e,this.src,i,!!r,s),e.ea=t,n.push(e)),e};function yh(n,e){var t=e.type;if(t in n.g){var r=n.g[t],s=Ov(r,e),i;(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(bu(e),n.g[t].length==0&&(delete n.g[t],n.h--))}}function vh(n,e,t,r){for(var s=0;s<n.length;++s){var i=n[s];if(!i.ba&&i.listener==e&&i.capture==!!t&&i.ha==r)return s}return-1}var Pd="closure_lm_"+(1e6*Math.random()|0),Ml={};function Bv(n,e,t,r,s){if(r&&r.once)return qv(n,e,t,r,s);if(Array.isArray(e)){for(var i=0;i<e.length;i++)Bv(n,e[i],t,r,s);return null}return t=Ld(t),n&&n[ha]?n.N(e,t,la(r)?!!r.capture:!!r,s):$v(n,e,t,!1,r,s)}function $v(n,e,t,r,s,i){if(!e)throw Error("Invalid event type");var o=la(s)?!!s.capture:!!s,a=Md(n);if(a||(n[Pd]=a=new Eu(n)),t=a.add(e,t,r,o,i),t.proxy)return t;if(r=FC(),t.proxy=r,r.src=n,r.listener=t,n.addEventListener)CC||(s=o),s===void 0&&(s=!1),n.addEventListener(e.toString(),r,s);else if(n.attachEvent)n.attachEvent(zv(e.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return t}function FC(){function n(t){return e.call(n.src,n.listener,t)}const e=UC;return n}function qv(n,e,t,r,s){if(Array.isArray(e)){for(var i=0;i<e.length;i++)qv(n,e[i],t,r,s);return null}return t=Ld(t),n&&n[ha]?n.O(e,t,la(r)?!!r.capture:!!r,s):$v(n,e,t,!0,r,s)}function jv(n,e,t,r,s){if(Array.isArray(e))for(var i=0;i<e.length;i++)jv(n,e[i],t,r,s);else r=la(r)?!!r.capture:!!r,t=Ld(t),n&&n[ha]?(n=n.i,e=String(e).toString(),e in n.g&&(i=n.g[e],t=vh(i,t,r,s),-1<t&&(bu(i[t]),Array.prototype.splice.call(i,t,1),i.length==0&&(delete n.g[e],n.h--)))):n&&(n=Md(n))&&(e=n.g[e.toString()],n=-1,e&&(n=vh(e,t,r,s)),(t=-1<n?e[n]:null)&&Od(t))}function Od(n){if(typeof n!="number"&&n&&!n.ba){var e=n.src;if(e&&e[ha])yh(e.i,n);else{var t=n.type,r=n.proxy;e.removeEventListener?e.removeEventListener(t,r,n.capture):e.detachEvent?e.detachEvent(zv(t),r):e.addListener&&e.removeListener&&e.removeListener(r),(t=Md(e))?(yh(t,n),t.h==0&&(t.src=null,e[Pd]=null)):bu(n)}}}function zv(n){return n in Ml?Ml[n]:Ml[n]="on"+n}function UC(n,e){if(n.ba)n=!0;else{e=new Uo(e,this);var t=n.listener,r=n.ha||n.src;n.ea&&Od(n),n=t.call(r,e)}return n}function Md(n){return n=n[Pd],n instanceof Eu?n:null}var Ll="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ld(n){return typeof n=="function"?n:(n[Ll]||(n[Ll]=function(e){return n.handleEvent(e)}),n[Ll])}function nt(){Nr.call(this),this.i=new Eu(this),this.P=this,this.I=null}ft(nt,Nr);nt.prototype[ha]=!0;nt.prototype.removeEventListener=function(n,e,t,r){jv(this,n,e,t,r)};function lt(n,e){var t,r=n.I;if(r)for(t=[];r;r=r.I)t.push(r);if(n=n.P,r=e.type||e,typeof e=="string")e=new _t(e,n);else if(e instanceof _t)e.target=e.target||n;else{var s=e;e=new _t(r,n),Vv(e,s)}if(s=!0,t)for(var i=t.length-1;0<=i;i--){var o=e.g=t[i];s=Ha(o,r,!0,e)&&s}if(o=e.g=n,s=Ha(o,r,!0,e)&&s,s=Ha(o,r,!1,e)&&s,t)for(i=0;i<t.length;i++)o=e.g=t[i],s=Ha(o,r,!1,e)&&s}nt.prototype.M=function(){if(nt.X.M.call(this),this.i){var n=this.i,e;for(e in n.g){for(var t=n.g[e],r=0;r<t.length;r++)bu(t[r]);delete n.g[e],n.h--}}this.I=null};nt.prototype.N=function(n,e,t,r){return this.i.add(String(n),e,!1,t,r)};nt.prototype.O=function(n,e,t,r){return this.i.add(String(n),e,!0,t,r)};function Ha(n,e,t,r){if(e=n.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,i=0;i<e.length;++i){var o=e[i];if(o&&!o.ba&&o.capture==t){var a=o.listener,c=o.ha||o.src;o.ea&&yh(n.i,o),s=a.call(c,r)!==!1&&s}}return s&&!r.defaultPrevented}var Fd=ee.JSON.stringify;function VC(){var n=Hv;let e=null;return n.g&&(e=n.g,n.g=n.g.next,n.g||(n.h=null),e.next=null),e}class BC{constructor(){this.h=this.g=null}add(e,t){const r=Kv.get();r.set(e,t),this.h?this.h.next=r:this.g=r,this.h=r}}var Kv=new class{constructor(n,e){this.i=n,this.j=e,this.h=0,this.g=null}get(){let n;return 0<this.h?(this.h--,n=this.g,this.g=n.next,n.next=null):n=this.i(),n}}(()=>new $C,n=>n.reset());class $C{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function qC(n){ee.setTimeout(()=>{throw n},0)}function Gv(n,e){wh||jC(),_h||(wh(),_h=!0),Hv.add(n,e)}var wh;function jC(){var n=ee.Promise.resolve(void 0);wh=function(){n.then(zC)}}var _h=!1,Hv=new BC;function zC(){for(var n;n=VC();){try{n.h.call(n.g)}catch(t){qC(t)}var e=Kv;e.j(n),100>e.h&&(e.h++,n.next=e.g,e.g=n)}_h=!1}function Tu(n,e){nt.call(this),this.h=n||1,this.g=e||ee,this.j=wt(this.lb,this),this.l=Date.now()}ft(Tu,nt);q=Tu.prototype;q.ca=!1;q.R=null;q.lb=function(){if(this.ca){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-n):(this.R&&(this.g.clearTimeout(this.R),this.R=null),lt(this,"tick"),this.ca&&(Ud(this),this.start()))}};q.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Ud(n){n.ca=!1,n.R&&(n.g.clearTimeout(n.R),n.R=null)}q.M=function(){Tu.X.M.call(this),Ud(this),delete this.g};function Vd(n,e,t){if(typeof n=="function")t&&(n=wt(n,t));else if(n&&typeof n.handleEvent=="function")n=wt(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ee.setTimeout(n,e||0)}function Wv(n){n.g=Vd(()=>{n.g=null,n.i&&(n.i=!1,Wv(n))},n.j);const e=n.h;n.h=null,n.m.apply(null,e)}class KC extends Nr{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Wv(this)}M(){super.M(),this.g&&(ee.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Vo(n){Nr.call(this),this.h=n,this.g={}}ft(Vo,Nr);var Sm=[];function Qv(n,e,t,r){Array.isArray(t)||(t&&(Sm[0]=t.toString()),t=Sm);for(var s=0;s<t.length;s++){var i=Bv(e,t[s],r||n.handleEvent,!1,n.h||n);if(!i)break;n.g[i.key]=i}}function Yv(n){xd(n.g,function(e,t){this.g.hasOwnProperty(t)&&Od(e)},n),n.g={}}Vo.prototype.M=function(){Vo.X.M.call(this),Yv(this)};Vo.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function Su(){this.g=!0}Su.prototype.Aa=function(){this.g=!1};function GC(n,e,t,r,s,i){n.info(function(){if(n.g)if(i)for(var o="",a=i.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&h[1]=="type"?o+(l+"="+u+"&"):o+(l+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+t+`
`+o})}function HC(n,e,t,r,s,i,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+t+`
`+i+" "+o})}function Qs(n,e,t,r){n.info(function(){return"XMLHTTP TEXT ("+e+"): "+QC(n,t)+(r?" "+r:"")})}function WC(n,e){n.info(function(){return"TIMEOUT: "+e})}Su.prototype.info=function(){};function QC(n,e){if(!n.g)return e;if(!e)return null;try{var t=JSON.parse(e);if(t){for(n=0;n<t.length;n++)if(Array.isArray(t[n])){var r=t[n];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if(i!="noop"&&i!="stop"&&i!="close")for(var o=1;o<s.length;o++)s[o]=""}}}}return Fd(t)}catch{return e}}var Ns={},Am=null;function Au(){return Am=Am||new nt}Ns.Pa="serverreachability";function Jv(n){_t.call(this,Ns.Pa,n)}ft(Jv,_t);function Bo(n){const e=Au();lt(e,new Jv(e))}Ns.STAT_EVENT="statevent";function Xv(n,e){_t.call(this,Ns.STAT_EVENT,n),this.stat=e}ft(Xv,_t);function St(n){const e=Au();lt(e,new Xv(e,n))}Ns.Qa="timingevent";function Zv(n,e){_t.call(this,Ns.Qa,n),this.size=e}ft(Zv,_t);function da(n,e){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return ee.setTimeout(function(){n()},e)}var Cu={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},ew={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function Bd(){}Bd.prototype.h=null;function Cm(n){return n.h||(n.h=n.i())}function tw(){}var fa={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function $d(){_t.call(this,"d")}ft($d,_t);function qd(){_t.call(this,"c")}ft(qd,_t);var Ih;function ku(){}ft(ku,Bd);ku.prototype.g=function(){return new XMLHttpRequest};ku.prototype.i=function(){return{}};Ih=new ku;function pa(n,e,t,r){this.l=n,this.j=e,this.m=t,this.U=r||1,this.S=new Vo(this),this.O=YC,n=mh?125:void 0,this.T=new Tu(n),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new nw}function nw(){this.i=null,this.g="",this.h=!1}var YC=45e3,bh={},Mc={};q=pa.prototype;q.setTimeout=function(n){this.O=n};function Eh(n,e,t){n.K=1,n.v=Du(Kn(e)),n.s=t,n.P=!0,rw(n,null)}function rw(n,e){n.F=Date.now(),ma(n),n.A=Kn(n.v);var t=n.A,r=n.U;Array.isArray(r)||(r=[String(r)]),hw(t.i,"t",r),n.C=0,t=n.l.H,n.h=new nw,n.g=xw(n.l,t?e:null,!n.s),0<n.N&&(n.L=new KC(wt(n.La,n,n.g),n.N)),Qv(n.S,n.g,"readystatechange",n.ib),e=n.H?Uv(n.H):{},n.s?(n.u||(n.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",n.g.da(n.A,n.u,n.s,e)):(n.u="GET",n.g.da(n.A,n.u,null,e)),Bo(),GC(n.j,n.u,n.A,n.m,n.U,n.s)}q.ib=function(n){n=n.target;const e=this.L;e&&Un(n)==3?e.l():this.La(n)};q.La=function(n){try{if(n==this.g)e:{const l=Un(this.g);var e=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(l!=3||mh||this.g&&(this.h.h||this.g.fa()||Nm(this.g)))){this.I||l!=4||e==7||(e==8||0>=h?Bo(3):Bo(2)),Ru(this);var t=this.g.aa();this.Y=t;t:if(sw(this)){var r=Nm(this.g);n="";var s=r.length,i=Un(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){rs(this),yo(this);var o="";break t}this.h.i=new ee.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,n+=this.h.i.decode(r[e],{stream:i&&e==s-1});r.splice(0,s),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=t==200,HC(this.j,this.u,this.A,this.m,this.U,l,t),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Pc(a)){var u=a;break t}}u=null}if(t=u)Qs(this.j,this.m,t,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Th(this,t);else{this.i=!1,this.o=3,St(12),rs(this),yo(this);break e}}this.P?(iw(this,l,o),mh&&this.i&&l==3&&(Qv(this.S,this.T,"tick",this.hb),this.T.start())):(Qs(this.j,this.m,o,null),Th(this,o)),l==4&&rs(this),this.i&&!this.I&&(l==4?kw(this.l,this):(this.i=!1,ma(this)))}else t==400&&0<o.indexOf("Unknown SID")?(this.o=3,St(12)):(this.o=0,St(13)),rs(this),yo(this)}}}catch{}finally{}};function sw(n){return n.g?n.u=="GET"&&n.K!=2&&n.l.Da:!1}function iw(n,e,t){let r=!0,s;for(;!n.I&&n.C<t.length;)if(s=JC(n,t),s==Mc){e==4&&(n.o=4,St(14),r=!1),Qs(n.j,n.m,null,"[Incomplete Response]");break}else if(s==bh){n.o=4,St(15),Qs(n.j,n.m,t,"[Invalid Chunk]"),r=!1;break}else Qs(n.j,n.m,s,null),Th(n,s);sw(n)&&s!=Mc&&s!=bh&&(n.h.g="",n.C=0),e!=4||t.length!=0||n.h.h||(n.o=1,St(16),r=!1),n.i=n.i&&r,r?0<t.length&&!n.$&&(n.$=!0,e=n.l,e.g==n&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+t.length),Qd(e),e.K=!0,St(11))):(Qs(n.j,n.m,t,"[Invalid Chunked Response]"),rs(n),yo(n))}q.hb=function(){if(this.g){var n=Un(this.g),e=this.g.fa();this.C<e.length&&(Ru(this),iw(this,n,e),this.i&&n!=4&&ma(this))}};function JC(n,e){var t=n.C,r=e.indexOf(`
`,t);return r==-1?Mc:(t=Number(e.substring(t,r)),isNaN(t)?bh:(r+=1,r+t>e.length?Mc:(e=e.substr(r,t),n.C=r+t,e)))}q.cancel=function(){this.I=!0,rs(this)};function ma(n){n.V=Date.now()+n.O,ow(n,n.O)}function ow(n,e){if(n.B!=null)throw Error("WatchDog timer not null");n.B=da(wt(n.gb,n),e)}function Ru(n){n.B&&(ee.clearTimeout(n.B),n.B=null)}q.gb=function(){this.B=null;const n=Date.now();0<=n-this.V?(WC(this.j,this.A),this.K!=2&&(Bo(),St(17)),rs(this),this.o=2,yo(this)):ow(this,this.V-n)};function yo(n){n.l.G==0||n.I||kw(n.l,n)}function rs(n){Ru(n);var e=n.L;e&&typeof e.na=="function"&&e.na(),n.L=null,Ud(n.T),Yv(n.S),n.g&&(e=n.g,n.g=null,e.abort(),e.na())}function Th(n,e){try{var t=n.l;if(t.G!=0&&(t.g==n||Sh(t.h,n))){if(!n.J&&Sh(t.h,n)&&t.G==3){try{var r=t.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!t.u){if(t.g)if(t.g.F+3e3<n.F)Uc(t),Pu(t);else break e;Wd(t),St(18)}}else t.Ba=s[1],0<t.Ba-t.T&&37500>s[2]&&t.L&&t.A==0&&!t.v&&(t.v=da(wt(t.cb,t),6e3));if(1>=pw(t.h)&&t.ja){try{t.ja()}catch{}t.ja=void 0}}else ss(t,11)}else if((n.J||t.g==n)&&Uc(t),!Pc(e))for(s=t.Fa.g.parse(e),e=0;e<s.length;e++){let u=s[e];if(t.T=u[0],u=u[1],t.G==2)if(u[0]=="c"){t.I=u[1],t.ka=u[2];const l=u[3];l!=null&&(t.ma=l,t.j.info("VER="+t.ma));const h=u[4];h!=null&&(t.Ca=h,t.j.info("SVER="+t.Ca));const d=u[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,t.J=r,t.j.info("backChannelRequestTimeoutMs_="+r)),r=t;const p=n.g;if(p){const g=p.g?p.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var i=r.h;i.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(i.j=i.l,i.g=new Set,i.h&&(jd(i,i.h),i.h=null))}if(r.D){const v=p.g?p.g.getResponseHeader("X-HTTP-Session-Id"):null;v&&(r.za=v,Ne(r.F,r.D,v))}}t.G=3,t.l&&t.l.xa(),t.$&&(t.P=Date.now()-n.F,t.j.info("Handshake RTT: "+t.P+"ms")),r=t;var o=n;if(r.sa=Nw(r,r.H?r.ka:null,r.V),o.J){mw(r.h,o);var a=o,c=r.J;c&&a.setTimeout(c),a.B&&(Ru(a),ma(a)),r.g=o}else Aw(r);0<t.i.length&&Ou(t)}else u[0]!="stop"&&u[0]!="close"||ss(t,7);else t.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ss(t,7):Hd(t):u[0]!="noop"&&t.l&&t.l.wa(u),t.A=0)}}Bo(4)}catch{}}function XC(n){if(n.W&&typeof n.W=="function")return n.W();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(_u(n)){for(var e=[],t=n.length,r=0;r<t;r++)e.push(n[r]);return e}e=[],t=0;for(r in n)e[t++]=n[r];return e}function ZC(n){if(n.oa&&typeof n.oa=="function")return n.oa();if(!n.W||typeof n.W!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(_u(n)||typeof n=="string"){var e=[];n=n.length;for(var t=0;t<n;t++)e.push(t);return e}e=[],t=0;for(const r in n)e[t++]=r;return e}}}function aw(n,e){if(n.forEach&&typeof n.forEach=="function")n.forEach(e,void 0);else if(_u(n)||typeof n=="string")Array.prototype.forEach.call(n,e,void 0);else for(var t=ZC(n),r=XC(n),s=r.length,i=0;i<s;i++)e.call(void 0,r[i],t&&t[i],n)}var cw=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function ek(n,e){if(n){n=n.split("&");for(var t=0;t<n.length;t++){var r=n[t].indexOf("="),s=null;if(0<=r){var i=n[t].substring(0,r);s=n[t].substring(r+1)}else i=n[t];e(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function hs(n,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof hs){this.h=e!==void 0?e:n.h,Lc(this,n.j),this.s=n.s,this.g=n.g,Fc(this,n.m),this.l=n.l,e=n.i;var t=new $o;t.i=e.i,e.g&&(t.g=new Map(e.g),t.h=e.h),km(this,t),this.o=n.o}else n&&(t=String(n).match(cw))?(this.h=!!e,Lc(this,t[1]||"",!0),this.s=ao(t[2]||""),this.g=ao(t[3]||"",!0),Fc(this,t[4]),this.l=ao(t[5]||"",!0),km(this,t[6]||"",!0),this.o=ao(t[7]||"")):(this.h=!!e,this.i=new $o(null,this.h))}hs.prototype.toString=function(){var n=[],e=this.j;e&&n.push(co(e,Rm,!0),":");var t=this.g;return(t||e=="file")&&(n.push("//"),(e=this.s)&&n.push(co(e,Rm,!0),"@"),n.push(encodeURIComponent(String(t)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t=this.m,t!=null&&n.push(":",String(t))),(t=this.l)&&(this.g&&t.charAt(0)!="/"&&n.push("/"),n.push(co(t,t.charAt(0)=="/"?rk:nk,!0))),(t=this.i.toString())&&n.push("?",t),(t=this.o)&&n.push("#",co(t,ik)),n.join("")};function Kn(n){return new hs(n)}function Lc(n,e,t){n.j=t?ao(e,!0):e,n.j&&(n.j=n.j.replace(/:$/,""))}function Fc(n,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);n.m=e}else n.m=null}function km(n,e,t){e instanceof $o?(n.i=e,ok(n.i,n.h)):(t||(e=co(e,sk)),n.i=new $o(e,n.h))}function Ne(n,e,t){n.i.set(e,t)}function Du(n){return Ne(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function ao(n,e){return n?e?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function co(n,e,t){return typeof n=="string"?(n=encodeURI(n).replace(e,tk),t&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function tk(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Rm=/[#\/\?@]/g,nk=/[#\?:]/g,rk=/[#\?]/g,sk=/[#\?@]/g,ik=/#/g;function $o(n,e){this.h=this.g=null,this.i=n||null,this.j=!!e}function xr(n){n.g||(n.g=new Map,n.h=0,n.i&&ek(n.i,function(e,t){n.add(decodeURIComponent(e.replace(/\+/g," ")),t)}))}q=$o.prototype;q.add=function(n,e){xr(this),this.i=null,n=xi(this,n);var t=this.g.get(n);return t||this.g.set(n,t=[]),t.push(e),this.h+=1,this};function uw(n,e){xr(n),e=xi(n,e),n.g.has(e)&&(n.i=null,n.h-=n.g.get(e).length,n.g.delete(e))}function lw(n,e){return xr(n),e=xi(n,e),n.g.has(e)}q.forEach=function(n,e){xr(this),this.g.forEach(function(t,r){t.forEach(function(s){n.call(e,s,r,this)},this)},this)};q.oa=function(){xr(this);const n=Array.from(this.g.values()),e=Array.from(this.g.keys()),t=[];for(let r=0;r<e.length;r++){const s=n[r];for(let i=0;i<s.length;i++)t.push(e[r])}return t};q.W=function(n){xr(this);let e=[];if(typeof n=="string")lw(this,n)&&(e=e.concat(this.g.get(xi(this,n))));else{n=Array.from(this.g.values());for(let t=0;t<n.length;t++)e=e.concat(n[t])}return e};q.set=function(n,e){return xr(this),this.i=null,n=xi(this,n),lw(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[e]),this.h+=1,this};q.get=function(n,e){return n?(n=this.W(n),0<n.length?String(n[0]):e):e};function hw(n,e,t){uw(n,e),0<t.length&&(n.i=null,n.g.set(xi(n,e),Dd(t)),n.h+=t.length)}q.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],e=Array.from(this.g.keys());for(var t=0;t<e.length;t++){var r=e[t];const i=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var s=i;o[r]!==""&&(s+="="+encodeURIComponent(String(o[r]))),n.push(s)}}return this.i=n.join("&")};function xi(n,e){return e=String(e),n.j&&(e=e.toLowerCase()),e}function ok(n,e){e&&!n.j&&(xr(n),n.i=null,n.g.forEach(function(t,r){var s=r.toLowerCase();r!=s&&(uw(this,r),hw(this,s,t))},n)),n.j=e}var ak=class{constructor(e,t){this.h=e,this.g=t}};function dw(n){this.l=n||ck,ee.PerformanceNavigationTiming?(n=ee.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(ee.g&&ee.g.Ga&&ee.g.Ga()&&ee.g.Ga().$b),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var ck=10;function fw(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function pw(n){return n.h?1:n.g?n.g.size:0}function Sh(n,e){return n.h?n.h==e:n.g?n.g.has(e):!1}function jd(n,e){n.g?n.g.add(e):n.h=e}function mw(n,e){n.h&&n.h==e?n.h=null:n.g&&n.g.has(e)&&n.g.delete(e)}dw.prototype.cancel=function(){if(this.i=gw(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function gw(n){if(n.h!=null)return n.i.concat(n.h.D);if(n.g!=null&&n.g.size!==0){let e=n.i;for(const t of n.g.values())e=e.concat(t.D);return e}return Dd(n.i)}function zd(){}zd.prototype.stringify=function(n){return ee.JSON.stringify(n,void 0)};zd.prototype.parse=function(n){return ee.JSON.parse(n,void 0)};function uk(){this.g=new zd}function lk(n,e,t){const r=t||"";try{aw(n,function(s,i){let o=s;la(s)&&(o=Fd(s)),e.push(r+i+"="+encodeURIComponent(o))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function hk(n,e){const t=new Su;if(ee.Image){const r=new Image;r.onload=Ga(Wa,t,r,"TestLoadImage: loaded",!0,e),r.onerror=Ga(Wa,t,r,"TestLoadImage: error",!1,e),r.onabort=Ga(Wa,t,r,"TestLoadImage: abort",!1,e),r.ontimeout=Ga(Wa,t,r,"TestLoadImage: timeout",!1,e),ee.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else e(!1)}function Wa(n,e,t,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function ga(n){this.l=n.ac||null,this.j=n.jb||!1}ft(ga,Bd);ga.prototype.g=function(){return new Nu(this.l,this.j)};ga.prototype.i=function(n){return function(){return n}}({});function Nu(n,e){nt.call(this),this.D=n,this.u=e,this.m=void 0,this.readyState=Kd,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ft(Nu,nt);var Kd=0;q=Nu.prototype;q.open=function(n,e){if(this.readyState!=Kd)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=e,this.readyState=1,qo(this)};q.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(e.body=n),(this.D||ee).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};q.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,ya(this)),this.readyState=Kd};q.Wa=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,qo(this)),this.g&&(this.readyState=3,qo(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof ee.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yw(this)}else n.text().then(this.Va.bind(this),this.ga.bind(this))};function yw(n){n.j.read().then(n.Ta.bind(n)).catch(n.ga.bind(n))}q.Ta=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var e=n.value?n.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!n.done}))&&(this.response=this.responseText+=e)}n.done?ya(this):qo(this),this.readyState==3&&yw(this)}};q.Va=function(n){this.g&&(this.response=this.responseText=n,ya(this))};q.Ua=function(n){this.g&&(this.response=n,ya(this))};q.ga=function(){this.g&&ya(this)};function ya(n){n.readyState=4,n.l=null,n.j=null,n.A=null,qo(n)}q.setRequestHeader=function(n,e){this.v.append(n,e)};q.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};q.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],e=this.h.entries();for(var t=e.next();!t.done;)t=t.value,n.push(t[0]+": "+t[1]),t=e.next();return n.join(`\r
`)};function qo(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(Nu.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var dk=ee.JSON.parse;function Ue(n){nt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=vw,this.K=this.L=!1}ft(Ue,nt);var vw="",fk=/^https?$/i,pk=["POST","PUT"];q=Ue.prototype;q.Ka=function(n){this.L=n};q.da=function(n,e,t,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+n);e=e?e.toUpperCase():"GET",this.H=n,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Ih.g(),this.C=this.u?Cm(this.u):Cm(Ih),this.g.onreadystatechange=wt(this.Ha,this);try{this.F=!0,this.g.open(e,String(n),!0),this.F=!1}catch(i){Dm(this,i);return}if(n=t||"",t=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)t.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const i of r.keys())t.set(i,r.get(i));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(t.keys()).find(i=>i.toLowerCase()=="content-type"),s=ee.FormData&&n instanceof ee.FormData,!(0<=Ov(pk,e))||r||s||t.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[i,o]of t)this.g.setRequestHeader(i,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Iw(this),0<this.B&&((this.K=mk(this.g))?(this.g.timeout=this.B,this.g.ontimeout=wt(this.qa,this)):this.A=Vd(this.qa,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(i){Dm(this,i)}};function mk(n){return hi&&xC()&&typeof n.timeout=="number"&&n.ontimeout!==void 0}q.qa=function(){typeof Rd<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,lt(this,"timeout"),this.abort(8))};function Dm(n,e){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=e,n.m=5,ww(n),xu(n)}function ww(n){n.D||(n.D=!0,lt(n,"complete"),lt(n,"error"))}q.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,lt(this,"complete"),lt(this,"abort"),xu(this))};q.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),xu(this,!0)),Ue.X.M.call(this)};q.Ha=function(){this.s||(this.F||this.v||this.l?_w(this):this.fb())};q.fb=function(){_w(this)};function _w(n){if(n.h&&typeof Rd<"u"&&(!n.C[1]||Un(n)!=4||n.aa()!=2)){if(n.v&&Un(n)==4)Vd(n.Ha,0,n);else if(lt(n,"readystatechange"),Un(n)==4){n.h=!1;try{const a=n.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var t;if(!(t=e)){var r;if(r=a===0){var s=String(n.H).match(cw)[1]||null;if(!s&&ee.self&&ee.self.location){var i=ee.self.location.protocol;s=i.substr(0,i.length-1)}r=!fk.test(s?s.toLowerCase():"")}t=r}if(t)lt(n,"complete"),lt(n,"success");else{n.m=6;try{var o=2<Un(n)?n.g.statusText:""}catch{o=""}n.j=o+" ["+n.aa()+"]",ww(n)}}finally{xu(n)}}}}function xu(n,e){if(n.g){Iw(n);const t=n.g,r=n.C[0]?xc:null;n.g=null,n.C=null,e||lt(n,"ready");try{t.onreadystatechange=r}catch{}}}function Iw(n){n.g&&n.K&&(n.g.ontimeout=null),n.A&&(ee.clearTimeout(n.A),n.A=null)}function Un(n){return n.g?n.g.readyState:0}q.aa=function(){try{return 2<Un(this)?this.g.status:-1}catch{return-1}};q.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};q.Sa=function(n){if(this.g){var e=this.g.responseText;return n&&e.indexOf(n)==0&&(e=e.substring(n.length)),dk(e)}};function Nm(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.J){case vw:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}q.Ea=function(){return this.m};q.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function bw(n){let e="";return xd(n,function(t,r){e+=r,e+=":",e+=t,e+=`\r
`}),e}function Gd(n,e,t){e:{for(r in t){var r=!1;break e}r=!0}r||(t=bw(t),typeof n=="string"?t!=null&&encodeURIComponent(String(t)):Ne(n,e,t))}function Qi(n,e,t){return t&&t.internalChannelParams&&t.internalChannelParams[n]||e}function Ew(n){this.Ca=0,this.i=[],this.j=new Su,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Qi("failFast",!1,n),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Qi("baseRetryDelayMs",5e3,n),this.bb=Qi("retryDelaySeedMs",1e4,n),this.$a=Qi("forwardChannelMaxRetries",2,n),this.ta=Qi("forwardChannelRequestTimeoutMs",2e4,n),this.ra=n&&n.xmlHttpFactory||void 0,this.Da=n&&n.Zb||!1,this.J=void 0,this.H=n&&n.supportsCrossDomainXhr||!1,this.I="",this.h=new dw(n&&n.concurrentRequestLimit),this.Fa=new uk,this.O=n&&n.fastHandshake||!1,this.N=n&&n.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=n&&n.Xb||!1,n&&n.Aa&&this.j.Aa(),n&&n.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&n&&n.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}q=Ew.prototype;q.ma=8;q.G=1;function Hd(n){if(Tw(n),n.G==3){var e=n.U++,t=Kn(n.F);Ne(t,"SID",n.I),Ne(t,"RID",e),Ne(t,"TYPE","terminate"),va(n,t),e=new pa(n,n.j,e,void 0),e.K=2,e.v=Du(Kn(t)),t=!1,ee.navigator&&ee.navigator.sendBeacon&&(t=ee.navigator.sendBeacon(e.v.toString(),"")),!t&&ee.Image&&(new Image().src=e.v,t=!0),t||(e.g=xw(e.l,null),e.g.da(e.v)),e.F=Date.now(),ma(e)}Dw(n)}function Pu(n){n.g&&(Qd(n),n.g.cancel(),n.g=null)}function Tw(n){Pu(n),n.u&&(ee.clearTimeout(n.u),n.u=null),Uc(n),n.h.cancel(),n.m&&(typeof n.m=="number"&&ee.clearTimeout(n.m),n.m=null)}function Ou(n){fw(n.h)||n.m||(n.m=!0,Gv(n.Ja,n),n.C=0)}function gk(n,e){return pw(n.h)>=n.h.j-(n.m?1:0)?!1:n.m?(n.i=e.D.concat(n.i),!0):n.G==1||n.G==2||n.C>=(n.Za?0:n.$a)?!1:(n.m=da(wt(n.Ja,n,e),Rw(n,n.C)),n.C++,!0)}q.Ja=function(n){if(this.m)if(this.m=null,this.G==1){if(!n){this.U=Math.floor(1e5*Math.random()),n=this.U++;const s=new pa(this,this.j,n,void 0);let i=this.s;if(this.S&&(i?(i=Uv(i),Vv(i,this.S)):i=this.S),this.o!==null||this.N||(s.H=i,i=null),this.O)e:{for(var e=0,t=0;t<this.i.length;t++){t:{var r=this.i[t];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=t;break e}if(e===4096||t===this.i.length-1){e=t+1;break e}}e=1e3}else e=1e3;e=Sw(this,s,e),t=Kn(this.F),Ne(t,"RID",n),Ne(t,"CVER",22),this.D&&Ne(t,"X-HTTP-Session-Id",this.D),va(this,t),i&&(this.N?e="headers="+encodeURIComponent(String(bw(i)))+"&"+e:this.o&&Gd(t,this.o,i)),jd(this.h,s),this.Ya&&Ne(t,"TYPE","init"),this.O?(Ne(t,"$req",e),Ne(t,"SID","null"),s.Z=!0,Eh(s,t,null)):Eh(s,t,e),this.G=2}}else this.G==3&&(n?xm(this,n):this.i.length==0||fw(this.h)||xm(this))};function xm(n,e){var t;e?t=e.m:t=n.U++;const r=Kn(n.F);Ne(r,"SID",n.I),Ne(r,"RID",t),Ne(r,"AID",n.T),va(n,r),n.o&&n.s&&Gd(r,n.o,n.s),t=new pa(n,n.j,t,n.C+1),n.o===null&&(t.H=n.s),e&&(n.i=e.D.concat(n.i)),e=Sw(n,t,1e3),t.setTimeout(Math.round(.5*n.ta)+Math.round(.5*n.ta*Math.random())),jd(n.h,t),Eh(t,r,e)}function va(n,e){n.ia&&xd(n.ia,function(t,r){Ne(e,r,t)}),n.l&&aw({},function(t,r){Ne(e,r,t)})}function Sw(n,e,t){t=Math.min(n.i.length,t);var r=n.l?wt(n.l.Ra,n.l,n):null;e:{var s=n.i;let i=-1;for(;;){const o=["count="+t];i==-1?0<t?(i=s[0].h,o.push("ofs="+i)):i=0:o.push("ofs="+i);let a=!0;for(let c=0;c<t;c++){let u=s[c].h;const l=s[c].g;if(u-=i,0>u)i=Math.max(0,s[c].h-100),a=!1;else try{lk(l,o,"req"+u+"_")}catch{r&&r(l)}}if(a){r=o.join("&");break e}}}return n=n.i.splice(0,t),e.D=n,r}function Aw(n){n.g||n.u||(n.Z=1,Gv(n.Ia,n),n.A=0)}function Wd(n){return n.g||n.u||3<=n.A?!1:(n.Z++,n.u=da(wt(n.Ia,n),Rw(n,n.A)),n.A++,!0)}q.Ia=function(){if(this.u=null,Cw(this),this.$&&!(this.K||this.g==null||0>=this.P)){var n=2*this.P;this.j.info("BP detection timer enabled: "+n),this.B=da(wt(this.eb,this),n)}};q.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,St(10),Pu(this),Cw(this))};function Qd(n){n.B!=null&&(ee.clearTimeout(n.B),n.B=null)}function Cw(n){n.g=new pa(n,n.j,"rpc",n.Z),n.o===null&&(n.g.H=n.s),n.g.N=0;var e=Kn(n.sa);Ne(e,"RID","rpc"),Ne(e,"SID",n.I),Ne(e,"CI",n.L?"0":"1"),Ne(e,"AID",n.T),Ne(e,"TYPE","xmlhttp"),va(n,e),n.o&&n.s&&Gd(e,n.o,n.s),n.J&&n.g.setTimeout(n.J);var t=n.g;n=n.ka,t.K=1,t.v=Du(Kn(e)),t.s=null,t.P=!0,rw(t,n)}q.cb=function(){this.v!=null&&(this.v=null,Pu(this),Wd(this),St(19))};function Uc(n){n.v!=null&&(ee.clearTimeout(n.v),n.v=null)}function kw(n,e){var t=null;if(n.g==e){Uc(n),Qd(n),n.g=null;var r=2}else if(Sh(n.h,e))t=e.D,mw(n.h,e),r=1;else return;if(n.G!=0){if(n.pa=e.Y,e.i)if(r==1){t=e.s?e.s.length:0,e=Date.now()-e.F;var s=n.C;r=Au(),lt(r,new Zv(r,t)),Ou(n)}else Aw(n);else if(s=e.o,s==3||s==0&&0<n.pa||!(r==1&&gk(n,e)||r==2&&Wd(n)))switch(t&&0<t.length&&(e=n.h,e.i=e.i.concat(t)),s){case 1:ss(n,5);break;case 4:ss(n,10);break;case 3:ss(n,6);break;default:ss(n,2)}}}function Rw(n,e){let t=n.Xa+Math.floor(Math.random()*n.bb);return n.l||(t*=2),t*e}function ss(n,e){if(n.j.info("Error code "+e),e==2){var t=null;n.l&&(t=null);var r=wt(n.kb,n);t||(t=new hs("//www.google.com/images/cleardot.gif"),ee.location&&ee.location.protocol=="http"||Lc(t,"https"),Du(t)),hk(t.toString(),r)}else St(2);n.G=0,n.l&&n.l.va(e),Dw(n),Tw(n)}q.kb=function(n){n?(this.j.info("Successfully pinged google.com"),St(2)):(this.j.info("Failed to ping google.com"),St(1))};function Dw(n){if(n.G=0,n.la=[],n.l){const e=gw(n.h);(e.length!=0||n.i.length!=0)&&(Im(n.la,e),Im(n.la,n.i),n.h.i.length=0,Dd(n.i),n.i.length=0),n.l.ua()}}function Nw(n,e,t){var r=t instanceof hs?Kn(t):new hs(t,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Fc(r,r.m);else{var s=ee.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var i=new hs(null,void 0);r&&Lc(i,r),e&&(i.g=e),s&&Fc(i,s),t&&(i.l=t),r=i}return t=n.D,e=n.za,t&&e&&Ne(r,t,e),Ne(r,"VER",n.ma),va(n,r),r}function xw(n,e,t){if(e&&!n.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=t&&n.Da&&!n.ra?new Ue(new ga({jb:!0})):new Ue(n.ra),e.Ka(n.H),e}function Pw(){}q=Pw.prototype;q.xa=function(){};q.wa=function(){};q.va=function(){};q.ua=function(){};q.Ra=function(){};function Vc(){if(hi&&!(10<=Number(PC)))throw Error("Environmental error: no available transport.")}Vc.prototype.g=function(n,e){return new jt(n,e)};function jt(n,e){nt.call(this),this.g=new Ew(e),this.l=n,this.h=e&&e.messageUrlParams||null,n=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(n?n["X-WebChannel-Content-Type"]=e.messageContentType:n={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(n?n["X-WebChannel-Client-Profile"]=e.ya:n={"X-WebChannel-Client-Profile":e.ya}),this.g.S=n,(n=e&&e.Yb)&&!Pc(n)&&(this.g.o=n),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Pc(e)&&(this.g.D=e,n=this.h,n!==null&&e in n&&(n=this.h,e in n&&delete n[e])),this.j=new Pi(this)}ft(jt,nt);jt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var n=this.g,e=this.l,t=this.h||void 0;St(0),n.V=e,n.ia=t||{},n.L=n.Y,n.F=Nw(n,null,n.V),Ou(n)};jt.prototype.close=function(){Hd(this.g)};jt.prototype.u=function(n){var e=this.g;if(typeof n=="string"){var t={};t.__data__=n,n=t}else this.v&&(t={},t.__data__=Fd(n),n=t);e.i.push(new ak(e.ab++,n)),e.G==3&&Ou(e)};jt.prototype.M=function(){this.g.l=null,delete this.j,Hd(this.g),delete this.g,jt.X.M.call(this)};function Ow(n){$d.call(this);var e=n.__sm__;if(e){e:{for(const t in e){n=t;break e}n=void 0}(this.i=n)&&(n=this.i,e=e!==null&&n in e?e[n]:void 0),this.data=e}else this.data=n}ft(Ow,$d);function Mw(){qd.call(this),this.status=1}ft(Mw,qd);function Pi(n){this.g=n}ft(Pi,Pw);Pi.prototype.xa=function(){lt(this.g,"a")};Pi.prototype.wa=function(n){lt(this.g,new Ow(n))};Pi.prototype.va=function(n){lt(this.g,new Mw)};Pi.prototype.ua=function(){lt(this.g,"b")};Vc.prototype.createWebChannel=Vc.prototype.g;jt.prototype.send=jt.prototype.u;jt.prototype.open=jt.prototype.m;jt.prototype.close=jt.prototype.close;Cu.NO_ERROR=0;Cu.TIMEOUT=8;Cu.HTTP_ERROR=6;ew.COMPLETE="complete";tw.EventType=fa;fa.OPEN="a";fa.CLOSE="b";fa.ERROR="c";fa.MESSAGE="d";nt.prototype.listen=nt.prototype.N;Ue.prototype.listenOnce=Ue.prototype.O;Ue.prototype.getLastError=Ue.prototype.Oa;Ue.prototype.getLastErrorCode=Ue.prototype.Ea;Ue.prototype.getStatus=Ue.prototype.aa;Ue.prototype.getResponseJson=Ue.prototype.Sa;Ue.prototype.getResponseText=Ue.prototype.fa;Ue.prototype.send=Ue.prototype.da;Ue.prototype.setWithCredentials=Ue.prototype.Ka;var yk=function(){return new Vc},vk=function(){return Au()},Fl=Cu,wk=ew,_k=Ns,Pm={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Ik=ga,Qa=tw,bk=Ue;const Om="@firebase/firestore";/**
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
 */class et{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}et.UNAUTHENTICATED=new et(null),et.GOOGLE_CREDENTIALS=new et("google-credentials-uid"),et.FIRST_PARTY=new et("first-party-uid"),et.MOCK_USER=new et("mock-user");/**
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
 */let Oi="9.19.0";/**
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
 */const br=new vu("@firebase/firestore");function Ah(){return br.logLevel}function Ek(n){br.setLogLevel(n)}function S(n,...e){if(br.logLevel<=fe.DEBUG){const t=e.map(Yd);br.debug(`Firestore (${Oi}): ${n}`,...t)}}function je(n,...e){if(br.logLevel<=fe.ERROR){const t=e.map(Yd);br.error(`Firestore (${Oi}): ${n}`,...t)}}function Gn(n,...e){if(br.logLevel<=fe.WARN){const t=e.map(Yd);br.warn(`Firestore (${Oi}): ${n}`,...t)}}function Yd(n){if(typeof n=="string")return n;try{return e=n,JSON.stringify(e)}catch{return n}/**
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
 */function U(n="Unexpected state"){const e=`FIRESTORE (${Oi}) INTERNAL ASSERTION FAILED: `+n;throw je(e),new Error(e)}function j(n,e){n||U()}function Tk(n,e){n||U()}function M(n,e){return n}/**
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
 */const w={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class E extends At{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class tt{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}/**
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
 */class Lw{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Sk{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(et.UNAUTHENTICATED))}shutdown(){}}class Ak{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class Ck{constructor(e){this.t=e,this.currentUser=et.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let r=this.i;const s=c=>this.i!==r?(r=this.i,t(c)):Promise.resolve();let i=new tt;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new tt,e.enqueueRetryable(()=>s(this.currentUser))};const o=()=>{const c=i;e.enqueueRetryable(async()=>{await c.promise,await s(this.currentUser)})},a=c=>{S("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=c,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(c=>a(c)),setTimeout(()=>{if(!this.auth){const c=this.t.getImmediate({optional:!0});c?a(c):(S("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new tt)}},0),o()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(r=>this.i!==e?(S("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(j(typeof r.accessToken=="string"),new Lw(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return j(e===null||typeof e=="string"),new et(e)}}class kk{constructor(e,t,r){this.h=e,this.l=t,this.m=r,this.type="FirstParty",this.user=et.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Rk{constructor(e,t,r){this.h=e,this.l=t,this.m=r}getToken(){return Promise.resolve(new kk(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable(()=>t(et.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class Dk{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Nk{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const r=i=>{i.error!=null&&S("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${i.error.message}`);const o=i.token!==this.T;return this.T=i.token,S("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?t(i.token):Promise.resolve()};this.o=i=>{e.enqueueRetryable(()=>r(i))};const s=i=>{S("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=i,this.appCheck.addTokenListener(this.o)};this.I.onInit(i=>s(i)),setTimeout(()=>{if(!this.appCheck){const i=this.I.getImmediate({optional:!0});i?s(i):S("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(t=>t?(j(typeof t.token=="string"),this.T=t.token,new Dk(t.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function xk(n){const e=typeof self<"u"&&(self.crypto||self.msCrypto),t=new Uint8Array(n);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(t);else for(let r=0;r<n;r++)t[r]=Math.floor(256*Math.random());return t}/**
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
 */class Fw{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=xk(40);for(let i=0;i<s.length;++i)r.length<20&&s[i]<t&&(r+=e.charAt(s[i]%e.length))}return r}}function re(n,e){return n<e?-1:n>e?1:0}function di(n,e,t){return n.length===e.length&&n.every((r,s)=>t(r,e[s]))}function Uw(n){return n+"\0"}/**
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
 */class Pe{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new E(w.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new E(w.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Pe.fromMillis(Date.now())}static fromDate(e){return Pe.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*t));return new Pe(t,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?re(this.nanoseconds,e.nanoseconds):re(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class z{constructor(e){this.timestamp=e}static fromTimestamp(e){return new z(e)}static min(){return new z(new Pe(0,0))}static max(){return new z(new Pe(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class jo{constructor(e,t,r){t===void 0?t=0:t>e.length&&U(),r===void 0?r=e.length-t:r>e.length-t&&U(),this.segments=e,this.offset=t,this.len=r}get length(){return this.len}isEqual(e){return jo.comparator(this,e)===0}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof jo?e.forEach(r=>{t.push(r)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,r=this.limit();t<r;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const r=Math.min(e.length,t.length);for(let s=0;s<r;s++){const i=e.get(s),o=t.get(s);if(i<o)return-1;if(i>o)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class le extends jo{construct(e,t,r){return new le(e,t,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const r of e){if(r.indexOf("//")>=0)throw new E(w.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);t.push(...r.split("/").filter(s=>s.length>0))}return new le(t)}static emptyPath(){return new le([])}}const Pk=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ze extends jo{construct(e,t,r){return new ze(e,t,r)}static isValidIdentifier(e){return Pk.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ze.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new ze(["__name__"])}static fromServerFormat(e){const t=[];let r="",s=0;const i=()=>{if(r.length===0)throw new E(w.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(r),r=""};let o=!1;for(;s<e.length;){const a=e[s];if(a==="\\"){if(s+1===e.length)throw new E(w.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const c=e[s+1];if(c!=="\\"&&c!=="."&&c!=="`")throw new E(w.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=c,s+=2}else a==="`"?(o=!o,s++):a!=="."||o?(r+=a,s++):(i(),s++)}if(i(),o)throw new E(w.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ze(t)}static emptyPath(){return new ze([])}}/**
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
 */class P{constructor(e){this.path=e}static fromPath(e){return new P(le.fromString(e))}static fromName(e){return new P(le.fromString(e).popFirst(5))}static empty(){return new P(le.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&le.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,t){return le.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new P(new le(e.slice()))}}/**
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
 */class Vw{constructor(e,t,r,s){this.indexId=e,this.collectionGroup=t,this.fields=r,this.indexState=s}}function Ch(n){return n.fields.find(e=>e.kind===2)}function Kr(n){return n.fields.filter(e=>e.kind!==2)}Vw.UNKNOWN_ID=-1;class Ok{constructor(e,t){this.fieldPath=e,this.kind=t}}class Bc{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Bc(0,zt.min())}}function Bw(n,e){const t=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,s=z.fromTimestamp(r===1e9?new Pe(t+1,0):new Pe(t,r));return new zt(s,P.empty(),e)}function $w(n){return new zt(n.readTime,n.key,-1)}class zt{constructor(e,t,r){this.readTime=e,this.documentKey=t,this.largestBatchId=r}static min(){return new zt(z.min(),P.empty(),-1)}static max(){return new zt(z.max(),P.empty(),-1)}}function Jd(n,e){let t=n.readTime.compareTo(e.readTime);return t!==0?t:(t=P.comparator(n.documentKey,e.documentKey),t!==0?t:re(n.largestBatchId,e.largestBatchId))}/**
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
 */const qw="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class jw{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function Pr(n){if(n.code!==w.FAILED_PRECONDITION||n.message!==qw)throw n;S("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class y{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&U(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new y((r,s)=>{this.nextCallback=i=>{this.wrapSuccess(e,i).next(r,s)},this.catchCallback=i=>{this.wrapFailure(t,i).next(r,s)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof y?t:y.resolve(t)}catch(t){return y.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):y.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):y.reject(t)}static resolve(e){return new y((t,r)=>{t(e)})}static reject(e){return new y((t,r)=>{r(e)})}static waitFor(e){return new y((t,r)=>{let s=0,i=0,o=!1;e.forEach(a=>{++s,a.next(()=>{++i,o&&i===s&&t()},c=>r(c))}),o=!0,i===s&&t()})}static or(e){let t=y.resolve(!1);for(const r of e)t=t.next(s=>s?y.resolve(s):r());return t}static forEach(e,t){const r=[];return e.forEach((s,i)=>{r.push(t.call(this,s,i))}),this.waitFor(r)}static mapArray(e,t){return new y((r,s)=>{const i=e.length,o=new Array(i);let a=0;for(let c=0;c<i;c++){const u=c;t(e[u]).next(l=>{o[u]=l,++a,a===i&&r(o)},l=>s(l))}})}static doWhile(e,t){return new y((r,s)=>{const i=()=>{e()===!0?t().next(()=>{i()},s):r()};i()})}}/**
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
 */class Mu{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.R=new tt,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{t.error?this.R.reject(new vo(e,t.error)):this.R.resolve()},this.transaction.onerror=r=>{const s=Xd(r.target.error);this.R.reject(new vo(e,s))}}static open(e,t,r,s){try{return new Mu(t,e.transaction(s,r))}catch(i){throw new vo(t,i)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(S("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||typeof e.commit!="function"||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Lk(t)}}class on{constructor(e,t,r){this.name=e,this.version=t,this.V=r,on.S(Me())===12.2&&je("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return S("SimpleDb","Removing database:",e),Yr(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!Mo())return!1;if(on.C())return!0;const e=Me(),t=on.S(e),r=0<t&&t<10,s=on.N(e),i=0<s&&s<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||i)}static C(){var e;return typeof process<"u"&&((e=process.env)===null||e===void 0?void 0:e.k)==="YES"}static O(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),r=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(r)}static N(e){const t=e.match(/Android ([\d.]+)/i),r=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(r)}async $(e){return this.db||(S("SimpleDb","Opening database:",this.name),this.db=await new Promise((t,r)=>{const s=indexedDB.open(this.name,this.version);s.onsuccess=i=>{const o=i.target.result;t(o)},s.onblocked=()=>{r(new vo(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},s.onerror=i=>{const o=i.target.error;o.name==="VersionError"?r(new E(w.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):o.name==="InvalidStateError"?r(new E(w.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+o)):r(new vo(e,o))},s.onupgradeneeded=i=>{S("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',i.oldVersion);const o=i.target.result;this.V.M(o,s.transaction,i.oldVersion,this.version).next(()=>{S("SimpleDb","Database upgrade to version "+this.version+" complete")})}})),this.F&&(this.db.onversionchange=t=>this.F(t)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,r,s){const i=t==="readonly";let o=0;for(;;){++o;try{this.db=await this.$(e);const a=Mu.open(this.db,e,i?"readonly":"readwrite",r),c=s(a).next(u=>(a.P(),u)).catch(u=>(a.abort(u),y.reject(u))).toPromise();return c.catch(()=>{}),await a.v,c}catch(a){const c=a,u=c.name!=="FirebaseError"&&o<3;if(S("SimpleDb","Transaction failed with error:",c.message,"Retrying:",u),this.close(),!u)return Promise.reject(c)}}}close(){this.db&&this.db.close(),this.db=void 0}}class Mk{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Yr(this.L.delete())}}class vo extends E{constructor(e,t){super(w.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function Or(n){return n.name==="IndexedDbTransactionError"}class Lk{constructor(e){this.store=e}put(e,t){let r;return t!==void 0?(S("SimpleDb","PUT",this.store.name,e,t),r=this.store.put(t,e)):(S("SimpleDb","PUT",this.store.name,"<auto-key>",e),r=this.store.put(e)),Yr(r)}add(e){return S("SimpleDb","ADD",this.store.name,e,e),Yr(this.store.add(e))}get(e){return Yr(this.store.get(e)).next(t=>(t===void 0&&(t=null),S("SimpleDb","GET",this.store.name,e,t),t))}delete(e){return S("SimpleDb","DELETE",this.store.name,e),Yr(this.store.delete(e))}count(){return S("SimpleDb","COUNT",this.store.name),Yr(this.store.count())}j(e,t){const r=this.options(e,t);if(r.index||typeof this.store.getAll!="function"){const s=this.cursor(r),i=[];return this.W(s,(o,a)=>{i.push(a)}).next(()=>i)}{const s=this.store.getAll(r.range);return new y((i,o)=>{s.onerror=a=>{o(a.target.error)},s.onsuccess=a=>{i(a.target.result)}})}}H(e,t){const r=this.store.getAll(e,t===null?void 0:t);return new y((s,i)=>{r.onerror=o=>{i(o.target.error)},r.onsuccess=o=>{s(o.target.result)}})}J(e,t){S("SimpleDb","DELETE ALL",this.store.name);const r=this.options(e,t);r.Y=!1;const s=this.cursor(r);return this.W(s,(i,o,a)=>a.delete())}Z(e,t){let r;t?r=e:(r={},t=e);const s=this.cursor(r);return this.W(s,t)}X(e){const t=this.cursor({});return new y((r,s)=>{t.onerror=i=>{const o=Xd(i.target.error);s(o)},t.onsuccess=i=>{const o=i.target.result;o?e(o.primaryKey,o.value).next(a=>{a?o.continue():r()}):r()}})}W(e,t){const r=[];return new y((s,i)=>{e.onerror=o=>{i(o.target.error)},e.onsuccess=o=>{const a=o.target.result;if(!a)return void s();const c=new Mk(a),u=t(a.primaryKey,a.value,c);if(u instanceof y){const l=u.catch(h=>(c.done(),y.reject(h)));r.push(l)}c.isDone?s():c.K===null?a.continue():a.continue(c.K)}}).next(()=>y.waitFor(r))}options(e,t){let r;return e!==void 0&&(typeof e=="string"?r=e:t=e),{index:r,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const r=this.store.index(e.index);return e.Y?r.openKeyCursor(e.range,t):r.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Yr(n){return new y((e,t)=>{n.onsuccess=r=>{const s=r.target.result;e(s)},n.onerror=r=>{const s=Xd(r.target.error);t(s)}})}let Mm=!1;function Xd(n){const e=on.S(Me());if(e>=12.2&&e<13){const t="An internal error was encountered in the Indexed Database server";if(n.message.indexOf(t)>=0){const r=new E("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Mm||(Mm=!0,setTimeout(()=>{throw r},0)),r}}return n}class Fk{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return this.task!==null}et(e){S("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{S("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(t){Or(t)?S("IndexBackiller","Ignoring IndexedDB error during index backfill: ",t):await Pr(t)}await this.et(6e4)})}}class Uk{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.st(t,e))}st(e,t){const r=new Set;let s=t,i=!0;return y.doWhile(()=>i===!0&&s>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(o=>{if(o!==null&&!r.has(o))return S("IndexBackiller",`Processing collection: ${o}`),this.it(e,o,s).next(a=>{s-=a,r.add(o)});i=!1})).next(()=>t-s)}it(e,t,r){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(s=>this.localStore.localDocuments.getNextDocuments(e,t,s,r).next(i=>{const o=i.changes;return this.localStore.indexManager.updateIndexEntries(e,o).next(()=>this.rt(s,i)).next(a=>(S("IndexBackiller",`Updating offset: ${a}`),this.localStore.indexManager.updateCollectionGroup(e,t,a))).next(()=>o.size)}))}rt(e,t){let r=e;return t.changes.forEach((s,i)=>{const o=$w(i);Jd(o,r)>0&&(r=o)}),new zt(r.readTime,r.documentKey,Math.max(t.batchId,e.largestBatchId))}}/**
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
 */class Pt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>t.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}Pt.ct=-1;function wa(n){return n==null}function zo(n){return n===0&&1/n==-1/0}function zw(n){return typeof n=="number"&&Number.isInteger(n)&&!zo(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
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
 */function Ct(n){let e="";for(let t=0;t<n.length;t++)e.length>0&&(e=Lm(e)),e=Vk(n.get(t),e);return Lm(e)}function Vk(n,e){let t=e;const r=n.length;for(let s=0;s<r;s++){const i=n.charAt(s);switch(i){case"\0":t+="";break;case"":t+="";break;default:t+=i}}return t}function Lm(n){return n+""}function bn(n){const e=n.length;if(j(e>=2),e===2)return j(n.charAt(0)===""&&n.charAt(1)===""),le.emptyPath();const t=e-2,r=[];let s="";for(let i=0;i<e;){const o=n.indexOf("",i);switch((o<0||o>t)&&U(),n.charAt(o+1)){case"":const a=n.substring(i,o);let c;s.length===0?c=a:(s+=a,c=s,s=""),r.push(c);break;case"":s+=n.substring(i,o),s+="\0";break;case"":s+=n.substring(i,o+1);break;default:U()}i=o+2}return new le(r)}/**
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
 */const Fm=["userId","batchId"];/**
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
 */function lc(n,e){return[n,Ct(e)]}function Kw(n,e,t){return[n,Ct(e),t]}const Bk={},$k=["prefixPath","collectionGroup","readTime","documentId"],qk=["prefixPath","collectionGroup","documentId"],jk=["collectionGroup","readTime","prefixPath","documentId"],zk=["canonicalId","targetId"],Kk=["targetId","path"],Gk=["path","targetId"],Hk=["collectionId","parent"],Wk=["indexId","uid"],Qk=["uid","sequenceNumber"],Yk=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],Jk=["indexId","uid","orderedDocumentKey"],Xk=["userId","collectionPath","documentId"],Zk=["userId","collectionPath","largestBatchId"],eR=["userId","collectionGroup","largestBatchId"],Gw=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],tR=[...Gw,"documentOverlays"],Hw=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ww=Hw,nR=[...Ww,"indexConfiguration","indexState","indexEntries"];/**
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
 */class kh extends jw{constructor(e,t){super(),this.at=e,this.currentSequenceNumber=t}}function it(n,e){const t=M(n);return on.O(t.at,e)}/**
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
 */function Um(n){let e=0;for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e++;return e}function xs(n,e){for(const t in n)Object.prototype.hasOwnProperty.call(n,t)&&e(t,n[t])}function Qw(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}/**
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
 */class Ve{constructor(e,t){this.comparator=e,this.root=t||ct.EMPTY}insert(e,t){return new Ve(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,ct.BLACK,null,null))}remove(e){return new Ve(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ct.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const r=this.comparator(e,t.key);if(r===0)return t.value;r<0?t=t.left:r>0&&(t=t.right)}return null}indexOf(e){let t=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return t+r.left.size;s<0?r=r.left:(t+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,r)=>(e(t,r),!1))}toString(){const e=[];return this.inorderTraversal((t,r)=>(e.push(`${t}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Ya(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Ya(this.root,e,this.comparator,!1)}getReverseIterator(){return new Ya(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Ya(this.root,e,this.comparator,!0)}}class Ya{constructor(e,t,r,s){this.isReverse=s,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?r(e.key,t):1,t&&s&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(i===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ct{constructor(e,t,r,s,i){this.key=e,this.value=t,this.color=r??ct.RED,this.left=s??ct.EMPTY,this.right=i??ct.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,r,s,i){return new ct(e??this.key,t??this.value,r??this.color,s??this.left,i??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,r){let s=this;const i=r(e,s.key);return s=i<0?s.copy(null,null,null,s.left.insert(e,t,r),null):i===0?s.copy(null,t,null,null,null):s.copy(null,null,null,null,s.right.insert(e,t,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return ct.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let r,s=this;if(t(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),t(e,s.key)===0){if(s.right.isEmpty())return ct.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ct.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ct.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw U();const e=this.left.check();if(e!==this.right.check())throw U();return e+(this.isRed()?0:1)}}ct.EMPTY=null,ct.RED=!0,ct.BLACK=!1;ct.EMPTY=new class{constructor(){this.size=0}get key(){throw U()}get value(){throw U()}get color(){throw U()}get left(){throw U()}get right(){throw U()}copy(n,e,t,r,s){return this}insert(n,e,t){return new ct(n,e)}remove(n,e){return this}isEmpty(){return!0}inorderTraversal(n){return!1}reverseTraversal(n){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class Ie{constructor(e){this.comparator=e,this.data=new Ve(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,r)=>(e(t),!1))}forEachInRange(e,t){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;t(s.key)}}forEachWhile(e,t){let r;for(r=t!==void 0?this.data.getIteratorFrom(t):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Vm(this.data.getIterator())}getIteratorFrom(e){return new Vm(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(r=>{t=t.add(r)}),t}isEqual(e){if(!(e instanceof Ie)||this.size!==e.size)return!1;const t=this.data.getIterator(),r=e.data.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(this.comparator(s,i)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new Ie(this.comparator);return t.data=e,t}}class Vm{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function $s(n){return n.hasNext()?n.getNext():void 0}/**
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
 */class Ot{constructor(e){this.fields=e,e.sort(ze.comparator)}static empty(){return new Ot([])}unionWith(e){let t=new Ie(ze.comparator);for(const r of this.fields)t=t.add(r);for(const r of e)t=t.add(r);return new Ot(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return di(this.fields,e.fields,(t,r)=>t.isEqual(r))}}/**
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
 */class rR extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */function sR(){return typeof atob<"u"}/**
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
 */class Je{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new rR("Invalid base64 string: "+s):s}}(e);return new Je(t)}static fromUint8Array(e){const t=function(r){let s="";for(let i=0;i<r.length;++i)s+=String.fromCharCode(r[i]);return s}(e);return new Je(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let r=0;r<e.length;r++)t[r]=e.charCodeAt(r);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return re(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Je.EMPTY_BYTE_STRING=new Je("");const iR=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Er(n){if(j(!!n),typeof n=="string"){let e=0;const t=iR.exec(n);if(j(!!t),t[1]){let s=t[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Le(n.seconds),nanos:Le(n.nanos)}}function Le(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function ys(n){return typeof n=="string"?Je.fromBase64String(n):Je.fromUint8Array(n)}/**
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
 */function Zd(n){var e,t;return((t=(((e=n==null?void 0:n.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||t===void 0?void 0:t.stringValue)==="server_timestamp"}function Yw(n){const e=n.mapValue.fields.__previous_value__;return Zd(e)?Yw(e):e}function Ko(n){const e=Er(n.mapValue.fields.__local_write_time__.timestampValue);return new Pe(e.seconds,e.nanos)}/**
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
 */class oR{constructor(e,t,r,s,i,o,a,c){this.databaseId=e,this.appId=t,this.persistenceKey=r,this.host=s,this.ssl=i,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=c}}class Tr{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Tr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Tr&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const hr={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},hc={nullValue:"NULL_VALUE"};function vs(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Zd(n)?4:Jw(n)?9007199254740991:10:U()}function Dn(n,e){if(n===e)return!0;const t=vs(n);if(t!==vs(e))return!1;switch(t){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===e.booleanValue;case 4:return Ko(n).isEqual(Ko(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const i=Er(r.timestampValue),o=Er(s.timestampValue);return i.seconds===o.seconds&&i.nanos===o.nanos}(n,e);case 5:return n.stringValue===e.stringValue;case 6:return function(r,s){return ys(r.bytesValue).isEqual(ys(s.bytesValue))}(n,e);case 7:return n.referenceValue===e.referenceValue;case 8:return function(r,s){return Le(r.geoPointValue.latitude)===Le(s.geoPointValue.latitude)&&Le(r.geoPointValue.longitude)===Le(s.geoPointValue.longitude)}(n,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Le(r.integerValue)===Le(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const i=Le(r.doubleValue),o=Le(s.doubleValue);return i===o?zo(i)===zo(o):isNaN(i)&&isNaN(o)}return!1}(n,e);case 9:return di(n.arrayValue.values||[],e.arrayValue.values||[],Dn);case 10:return function(r,s){const i=r.mapValue.fields||{},o=s.mapValue.fields||{};if(Um(i)!==Um(o))return!1;for(const a in i)if(i.hasOwnProperty(a)&&(o[a]===void 0||!Dn(i[a],o[a])))return!1;return!0}(n,e);default:return U()}}function Go(n,e){return(n.values||[]).find(t=>Dn(t,e))!==void 0}function Sr(n,e){if(n===e)return 0;const t=vs(n),r=vs(e);if(t!==r)return re(t,r);switch(t){case 0:case 9007199254740991:return 0;case 1:return re(n.booleanValue,e.booleanValue);case 2:return function(s,i){const o=Le(s.integerValue||s.doubleValue),a=Le(i.integerValue||i.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(n,e);case 3:return Bm(n.timestampValue,e.timestampValue);case 4:return Bm(Ko(n),Ko(e));case 5:return re(n.stringValue,e.stringValue);case 6:return function(s,i){const o=ys(s),a=ys(i);return o.compareTo(a)}(n.bytesValue,e.bytesValue);case 7:return function(s,i){const o=s.split("/"),a=i.split("/");for(let c=0;c<o.length&&c<a.length;c++){const u=re(o[c],a[c]);if(u!==0)return u}return re(o.length,a.length)}(n.referenceValue,e.referenceValue);case 8:return function(s,i){const o=re(Le(s.latitude),Le(i.latitude));return o!==0?o:re(Le(s.longitude),Le(i.longitude))}(n.geoPointValue,e.geoPointValue);case 9:return function(s,i){const o=s.values||[],a=i.values||[];for(let c=0;c<o.length&&c<a.length;++c){const u=Sr(o[c],a[c]);if(u)return u}return re(o.length,a.length)}(n.arrayValue,e.arrayValue);case 10:return function(s,i){if(s===hr.mapValue&&i===hr.mapValue)return 0;if(s===hr.mapValue)return 1;if(i===hr.mapValue)return-1;const o=s.fields||{},a=Object.keys(o),c=i.fields||{},u=Object.keys(c);a.sort(),u.sort();for(let l=0;l<a.length&&l<u.length;++l){const h=re(a[l],u[l]);if(h!==0)return h;const d=Sr(o[a[l]],c[u[l]]);if(d!==0)return d}return re(a.length,u.length)}(n.mapValue,e.mapValue);default:throw U()}}function Bm(n,e){if(typeof n=="string"&&typeof e=="string"&&n.length===e.length)return re(n,e);const t=Er(n),r=Er(e),s=re(t.seconds,r.seconds);return s!==0?s:re(t.nanos,r.nanos)}function fi(n){return Rh(n)}function Rh(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(r){const s=Er(r);return`time(${s.seconds},${s.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?ys(n.bytesValue).toBase64():"referenceValue"in n?(t=n.referenceValue,P.fromName(t).toString()):"geoPointValue"in n?`geo(${(e=n.geoPointValue).latitude},${e.longitude})`:"arrayValue"in n?function(r){let s="[",i=!0;for(const o of r.values||[])i?i=!1:s+=",",s+=Rh(o);return s+"]"}(n.arrayValue):"mapValue"in n?function(r){const s=Object.keys(r.fields||{}).sort();let i="{",o=!0;for(const a of s)o?o=!1:i+=",",i+=`${a}:${Rh(r.fields[a])}`;return i+"}"}(n.mapValue):U();var e,t}function ws(n,e){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${e.path.canonicalString()}`}}function Dh(n){return!!n&&"integerValue"in n}function Ho(n){return!!n&&"arrayValue"in n}function $m(n){return!!n&&"nullValue"in n}function qm(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function dc(n){return!!n&&"mapValue"in n}function wo(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const e={mapValue:{fields:{}}};return xs(n.mapValue.fields,(t,r)=>e.mapValue.fields[t]=wo(r)),e}if(n.arrayValue){const e={arrayValue:{values:[]}};for(let t=0;t<(n.arrayValue.values||[]).length;++t)e.arrayValue.values[t]=wo(n.arrayValue.values[t]);return e}return Object.assign({},n)}function Jw(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}function aR(n){return"nullValue"in n?hc:"booleanValue"in n?{booleanValue:!1}:"integerValue"in n||"doubleValue"in n?{doubleValue:NaN}:"timestampValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in n?{stringValue:""}:"bytesValue"in n?{bytesValue:""}:"referenceValue"in n?ws(Tr.empty(),P.empty()):"geoPointValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in n?{arrayValue:{}}:"mapValue"in n?{mapValue:{}}:U()}function cR(n){return"nullValue"in n?{booleanValue:!1}:"booleanValue"in n?{doubleValue:NaN}:"integerValue"in n||"doubleValue"in n?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in n?{stringValue:""}:"stringValue"in n?{bytesValue:""}:"bytesValue"in n?ws(Tr.empty(),P.empty()):"referenceValue"in n?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in n?{arrayValue:{}}:"arrayValue"in n?{mapValue:{}}:"mapValue"in n?hr:U()}function jm(n,e){const t=Sr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?-1:!n.inclusive&&e.inclusive?1:0}function zm(n,e){const t=Sr(n.value,e.value);return t!==0?t:n.inclusive&&!e.inclusive?1:!n.inclusive&&e.inclusive?-1:0}/**
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
 */class ut{constructor(e){this.value=e}static empty(){return new ut({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let r=0;r<e.length-1;++r)if(t=(t.mapValue.fields||{})[e.get(r)],!dc(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=wo(t)}setAll(e){let t=ze.emptyPath(),r={},s=[];e.forEach((o,a)=>{if(!t.isImmediateParentOf(a)){const c=this.getFieldsMap(t);this.applyChanges(c,r,s),r={},s=[],t=a.popLast()}o?r[a.lastSegment()]=wo(o):s.push(a.lastSegment())});const i=this.getFieldsMap(t);this.applyChanges(i,r,s)}delete(e){const t=this.field(e.popLast());dc(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Dn(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=t.mapValue.fields[e.get(r)];dc(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},t.mapValue.fields[e.get(r)]=s),t=s}return t.mapValue.fields}applyChanges(e,t,r){xs(t,(s,i)=>e[s]=i);for(const s of r)delete e[s]}clone(){return new ut(wo(this.value))}}function Xw(n){const e=[];return xs(n.fields,(t,r)=>{const s=new ze([t]);if(dc(r)){const i=Xw(r.mapValue).fields;if(i.length===0)e.push(s);else for(const o of i)e.push(s.child(o))}else e.push(s)}),new Ot(e)}/**
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
 */class ke{constructor(e,t,r,s,i,o,a){this.key=e,this.documentType=t,this.version=r,this.readTime=s,this.createTime=i,this.data=o,this.documentState=a}static newInvalidDocument(e){return new ke(e,0,z.min(),z.min(),z.min(),ut.empty(),0)}static newFoundDocument(e,t,r,s){return new ke(e,1,t,z.min(),r,s,0)}static newNoDocument(e,t){return new ke(e,2,t,z.min(),z.min(),ut.empty(),0)}static newUnknownDocument(e,t){return new ke(e,3,t,z.min(),z.min(),ut.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(z.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ut.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ut.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=z.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof ke&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ke(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Ar{constructor(e,t){this.position=e,this.inclusive=t}}function Km(n,e,t){let r=0;for(let s=0;s<n.position.length;s++){const i=e[s],o=n.position[s];if(i.field.isKeyField()?r=P.comparator(P.fromName(o.referenceValue),t.key):r=Sr(o,t.data.field(i.field)),i.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gm(n,e){if(n===null)return e===null;if(e===null||n.inclusive!==e.inclusive||n.position.length!==e.position.length)return!1;for(let t=0;t<n.position.length;t++)if(!Dn(n.position[t],e.position[t]))return!1;return!0}/**
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
 */class ni{constructor(e,t="asc"){this.field=e,this.dir=t}}function uR(n,e){return n.dir===e.dir&&n.field.isEqual(e.field)}/**
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
 */class Zw{}class ce extends Zw{constructor(e,t,r){super(),this.field=e,this.op=t,this.value=r}static create(e,t,r){return e.isKeyField()?t==="in"||t==="not-in"?this.createKeyFieldInFilter(e,t,r):new lR(e,t,r):t==="array-contains"?new fR(e,r):t==="in"?new i_(e,r):t==="not-in"?new pR(e,r):t==="array-contains-any"?new mR(e,r):new ce(e,t,r)}static createKeyFieldInFilter(e,t,r){return t==="in"?new hR(e,r):new dR(e,r)}matches(e){const t=e.data.field(this.field);return this.op==="!="?t!==null&&this.matchesComparison(Sr(t,this.value)):t!==null&&vs(this.value)===vs(t)&&this.matchesComparison(Sr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return U()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ve extends Zw{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new ve(e,t)}matches(e){return pi(this)?this.filters.find(t=>!t.matches(e))===void 0:this.filters.find(t=>t.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(t=>t.isInequality());return e!==null?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function pi(n){return n.op==="and"}function Nh(n){return n.op==="or"}function ef(n){return e_(n)&&pi(n)}function e_(n){for(const e of n.filters)if(e instanceof ve)return!1;return!0}function xh(n){if(n instanceof ce)return n.field.canonicalString()+n.op.toString()+fi(n.value);if(ef(n))return n.filters.map(e=>xh(e)).join(",");{const e=n.filters.map(t=>xh(t)).join(",");return`${n.op}(${e})`}}function t_(n,e){return n instanceof ce?function(t,r){return r instanceof ce&&t.op===r.op&&t.field.isEqual(r.field)&&Dn(t.value,r.value)}(n,e):n instanceof ve?function(t,r){return r instanceof ve&&t.op===r.op&&t.filters.length===r.filters.length?t.filters.reduce((s,i,o)=>s&&t_(i,r.filters[o]),!0):!1}(n,e):void U()}function n_(n,e){const t=n.filters.concat(e);return ve.create(t,n.op)}function r_(n){return n instanceof ce?function(e){return`${e.field.canonicalString()} ${e.op} ${fi(e.value)}`}(n):n instanceof ve?function(e){return e.op.toString()+" {"+e.getFilters().map(r_).join(" ,")+"}"}(n):"Filter"}class lR extends ce{constructor(e,t,r){super(e,t,r),this.key=P.fromName(r.referenceValue)}matches(e){const t=P.comparator(e.key,this.key);return this.matchesComparison(t)}}class hR extends ce{constructor(e,t){super(e,"in",t),this.keys=s_("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class dR extends ce{constructor(e,t){super(e,"not-in",t),this.keys=s_("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function s_(n,e){var t;return(((t=e.arrayValue)===null||t===void 0?void 0:t.values)||[]).map(r=>P.fromName(r.referenceValue))}class fR extends ce{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Ho(t)&&Go(t.arrayValue,this.value)}}class i_ extends ce{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return t!==null&&Go(this.value.arrayValue,t)}}class pR extends ce{constructor(e,t){super(e,"not-in",t)}matches(e){if(Go(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return t!==null&&!Go(this.value.arrayValue,t)}}class mR extends ce{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Ho(t)||!t.arrayValue.values)&&t.arrayValue.values.some(r=>Go(this.value.arrayValue,r))}}/**
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
 */class gR{constructor(e,t=null,r=[],s=[],i=null,o=null,a=null){this.path=e,this.collectionGroup=t,this.orderBy=r,this.filters=s,this.limit=i,this.startAt=o,this.endAt=a,this.ft=null}}function Ph(n,e=null,t=[],r=[],s=null,i=null,o=null){return new gR(n,e,t,r,s,i,o)}function _s(n){const e=M(n);if(e.ft===null){let t=e.path.canonicalString();e.collectionGroup!==null&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(r=>xh(r)).join(","),t+="|ob:",t+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),wa(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>fi(r)).join(",")),e.endAt&&(t+="|ub:",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>fi(r)).join(",")),e.ft=t}return e.ft}function _a(n,e){if(n.limit!==e.limit||n.orderBy.length!==e.orderBy.length)return!1;for(let t=0;t<n.orderBy.length;t++)if(!uR(n.orderBy[t],e.orderBy[t]))return!1;if(n.filters.length!==e.filters.length)return!1;for(let t=0;t<n.filters.length;t++)if(!t_(n.filters[t],e.filters[t]))return!1;return n.collectionGroup===e.collectionGroup&&!!n.path.isEqual(e.path)&&!!Gm(n.startAt,e.startAt)&&Gm(n.endAt,e.endAt)}function $c(n){return P.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}function qc(n,e){return n.filters.filter(t=>t instanceof ce&&t.field.isEqual(e))}function Hm(n,e,t){let r=hc,s=!0;for(const i of qc(n,e)){let o=hc,a=!0;switch(i.op){case"<":case"<=":o=aR(i.value);break;case"==":case"in":case">=":o=i.value;break;case">":o=i.value,a=!1;break;case"!=":case"not-in":o=hc}jm({value:r,inclusive:s},{value:o,inclusive:a})<0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];jm({value:r,inclusive:s},{value:o,inclusive:t.inclusive})<0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}function Wm(n,e,t){let r=hr,s=!0;for(const i of qc(n,e)){let o=hr,a=!0;switch(i.op){case">=":case">":o=cR(i.value),a=!1;break;case"==":case"in":case"<=":o=i.value;break;case"<":o=i.value,a=!1;break;case"!=":case"not-in":o=hr}zm({value:r,inclusive:s},{value:o,inclusive:a})>0&&(r=o,s=a)}if(t!==null){for(let i=0;i<n.orderBy.length;++i)if(n.orderBy[i].field.isEqual(e)){const o=t.position[i];zm({value:r,inclusive:s},{value:o,inclusive:t.inclusive})>0&&(r=o,s=t.inclusive);break}}return{value:r,inclusive:s}}/**
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
 */class Yn{constructor(e,t=null,r=[],s=[],i=null,o="F",a=null,c=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=r,this.filters=s,this.limit=i,this.limitType=o,this.startAt=a,this.endAt=c,this.dt=null,this.wt=null,this.startAt,this.endAt}}function o_(n,e,t,r,s,i,o,a){return new Yn(n,e,t,r,s,i,o,a)}function Mi(n){return new Yn(n)}function Qm(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function tf(n){return n.explicitOrderBy.length>0?n.explicitOrderBy[0].field:null}function Lu(n){for(const e of n.filters){const t=e.getFirstInequalityField();if(t!==null)return t}return null}function nf(n){return n.collectionGroup!==null}function ds(n){const e=M(n);if(e.dt===null){e.dt=[];const t=Lu(e),r=tf(e);if(t!==null&&r===null)t.isKeyField()||e.dt.push(new ni(t)),e.dt.push(new ni(ze.keyField(),"asc"));else{let s=!1;for(const i of e.explicitOrderBy)e.dt.push(i),i.field.isKeyField()&&(s=!0);if(!s){const i=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new ni(ze.keyField(),i))}}}return e.dt}function Ft(n){const e=M(n);if(!e.wt)if(e.limitType==="F")e.wt=Ph(e.path,e.collectionGroup,ds(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const i of ds(e)){const o=i.dir==="desc"?"asc":"desc";t.push(new ni(i.field,o))}const r=e.endAt?new Ar(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Ar(e.startAt.position,e.startAt.inclusive):null;e.wt=Ph(e.path,e.collectionGroup,t,e.filters,e.limit,r,s)}return e.wt}function Oh(n,e){e.getFirstInequalityField(),Lu(n);const t=n.filters.concat([e]);return new Yn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),t,n.limit,n.limitType,n.startAt,n.endAt)}function jc(n,e,t){return new Yn(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),e,t,n.startAt,n.endAt)}function Ia(n,e){return _a(Ft(n),Ft(e))&&n.limitType===e.limitType}function a_(n){return`${_s(Ft(n))}|lt:${n.limitType}`}function Mh(n){return`Query(target=${function(e){let t=e.path.canonicalString();return e.collectionGroup!==null&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(r=>r_(r)).join(", ")}]`),wa(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(r=>fi(r)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(r=>fi(r)).join(",")),`Target(${t})`}(Ft(n))}; limitType=${n.limitType})`}function ba(n,e){return e.isFoundDocument()&&function(t,r){const s=r.key.path;return t.collectionGroup!==null?r.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(s):P.isDocumentKey(t.path)?t.path.isEqual(s):t.path.isImmediateParentOf(s)}(n,e)&&function(t,r){for(const s of ds(t))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(n,e)&&function(t,r){for(const s of t.filters)if(!s.matches(r))return!1;return!0}(n,e)&&function(t,r){return!(t.startAt&&!function(s,i,o){const a=Km(s,i,o);return s.inclusive?a<=0:a<0}(t.startAt,ds(t),r)||t.endAt&&!function(s,i,o){const a=Km(s,i,o);return s.inclusive?a>=0:a>0}(t.endAt,ds(t),r))}(n,e)}function c_(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function u_(n){return(e,t)=>{let r=!1;for(const s of ds(n)){const i=yR(s,e,t);if(i!==0)return i;r=r||s.field.isKeyField()}return 0}}function yR(n,e,t){const r=n.field.isKeyField()?P.comparator(e.key,t.key):function(s,i,o){const a=i.data.field(s),c=o.data.field(s);return a!==null&&c!==null?Sr(a,c):U()}(n.field,e,t);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return U()}}/**
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
 */class Mr{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r!==void 0){for(const[s,i]of r)if(this.equalsFn(s,e))return i}}has(e){return this.get(e)!==void 0}set(e,t){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,t]],void this.innerSize++;for(let i=0;i<s.length;i++)if(this.equalsFn(s[i][0],e))return void(s[i]=[e,t]);s.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),r=this.inner[t];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[t]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){xs(this.inner,(t,r)=>{for(const[s,i]of r)e(s,i)})}isEmpty(){return Qw(this.inner)}size(){return this.innerSize}}/**
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
 */const vR=new Ve(P.comparator);function Mt(){return vR}const l_=new Ve(P.comparator);function uo(...n){let e=l_;for(const t of n)e=e.insert(t.key,t);return e}function h_(n){let e=l_;return n.forEach((t,r)=>e=e.insert(t,r.overlayedDocument)),e}function En(){return _o()}function d_(){return _o()}function _o(){return new Mr(n=>n.toString(),(n,e)=>n.isEqual(e))}const wR=new Ve(P.comparator),_R=new Ie(P.comparator);function se(...n){let e=_R;for(const t of n)e=e.add(t);return e}const IR=new Ie(re);function Fu(){return IR}/**
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
 */function f_(n,e){if(n.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:zo(e)?"-0":e}}function p_(n){return{integerValue:""+n}}function m_(n,e){return zw(e)?p_(e):f_(n,e)}/**
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
 */class Uu{constructor(){this._=void 0}}function bR(n,e,t){return n instanceof mi?function(r,s){const i={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&(i.fields.__previous_value__=s),{mapValue:i}}(t,e):n instanceof Is?y_(n,e):n instanceof bs?v_(n,e):function(r,s){const i=g_(r,s),o=Ym(i)+Ym(r._t);return Dh(i)&&Dh(r._t)?p_(o):f_(r.serializer,o)}(n,e)}function ER(n,e,t){return n instanceof Is?y_(n,e):n instanceof bs?v_(n,e):t}function g_(n,e){return n instanceof gi?Dh(t=e)||function(r){return!!r&&"doubleValue"in r}(t)?e:{integerValue:0}:null;var t}class mi extends Uu{}class Is extends Uu{constructor(e){super(),this.elements=e}}function y_(n,e){const t=w_(e);for(const r of n.elements)t.some(s=>Dn(s,r))||t.push(r);return{arrayValue:{values:t}}}class bs extends Uu{constructor(e){super(),this.elements=e}}function v_(n,e){let t=w_(e);for(const r of n.elements)t=t.filter(s=>!Dn(s,r));return{arrayValue:{values:t}}}class gi extends Uu{constructor(e,t){super(),this.serializer=e,this._t=t}}function Ym(n){return Le(n.integerValue||n.doubleValue)}function w_(n){return Ho(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}/**
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
 */class Ea{constructor(e,t){this.field=e,this.transform=t}}function TR(n,e){return n.field.isEqual(e.field)&&function(t,r){return t instanceof Is&&r instanceof Is||t instanceof bs&&r instanceof bs?di(t.elements,r.elements,Dn):t instanceof gi&&r instanceof gi?Dn(t._t,r._t):t instanceof mi&&r instanceof mi}(n.transform,e.transform)}class SR{constructor(e,t){this.version=e,this.transformResults=t}}class xe{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new xe}static exists(e){return new xe(void 0,e)}static updateTime(e){return new xe(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function fc(n,e){return n.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(n.updateTime):n.exists===void 0||n.exists===e.isFoundDocument()}class Vu{}function __(n,e){if(!n.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return n.isNoDocument()?new Fi(n.key,xe.none()):new Li(n.key,n.data,xe.none());{const t=n.data,r=ut.empty();let s=new Ie(ze.comparator);for(let i of e.fields)if(!s.has(i)){let o=t.field(i);o===null&&i.length>1&&(i=i.popLast(),o=t.field(i)),o===null?r.delete(i):r.set(i,o),s=s.add(i)}return new Jn(n.key,r,new Ot(s.toArray()),xe.none())}}function AR(n,e,t){n instanceof Li?function(r,s,i){const o=r.value.clone(),a=Xm(r.fieldTransforms,s,i.transformResults);o.setAll(a),s.convertToFoundDocument(i.version,o).setHasCommittedMutations()}(n,e,t):n instanceof Jn?function(r,s,i){if(!fc(r.precondition,s))return void s.convertToUnknownDocument(i.version);const o=Xm(r.fieldTransforms,s,i.transformResults),a=s.data;a.setAll(I_(r)),a.setAll(o),s.convertToFoundDocument(i.version,a).setHasCommittedMutations()}(n,e,t):function(r,s,i){s.convertToNoDocument(i.version).setHasCommittedMutations()}(0,e,t)}function Io(n,e,t,r){return n instanceof Li?function(s,i,o,a){if(!fc(s.precondition,i))return o;const c=s.value.clone(),u=Zm(s.fieldTransforms,a,i);return c.setAll(u),i.convertToFoundDocument(i.version,c).setHasLocalMutations(),null}(n,e,t,r):n instanceof Jn?function(s,i,o,a){if(!fc(s.precondition,i))return o;const c=Zm(s.fieldTransforms,a,i),u=i.data;return u.setAll(I_(s)),u.setAll(c),i.convertToFoundDocument(i.version,u).setHasLocalMutations(),o===null?null:o.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(l=>l.field))}(n,e,t,r):function(s,i,o){return fc(s.precondition,i)?(i.convertToNoDocument(i.version).setHasLocalMutations(),null):o}(n,e,t)}function CR(n,e){let t=null;for(const r of n.fieldTransforms){const s=e.data.field(r.field),i=g_(r.transform,s||null);i!=null&&(t===null&&(t=ut.empty()),t.set(r.field,i))}return t||null}function Jm(n,e){return n.type===e.type&&!!n.key.isEqual(e.key)&&!!n.precondition.isEqual(e.precondition)&&!!function(t,r){return t===void 0&&r===void 0||!(!t||!r)&&di(t,r,(s,i)=>TR(s,i))}(n.fieldTransforms,e.fieldTransforms)&&(n.type===0?n.value.isEqual(e.value):n.type!==1||n.data.isEqual(e.data)&&n.fieldMask.isEqual(e.fieldMask))}class Li extends Vu{constructor(e,t,r,s=[]){super(),this.key=e,this.value=t,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class Jn extends Vu{constructor(e,t,r,s,i=[]){super(),this.key=e,this.data=t,this.fieldMask=r,this.precondition=s,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function I_(n){const e=new Map;return n.fieldMask.fields.forEach(t=>{if(!t.isEmpty()){const r=n.data.field(t);e.set(t,r)}}),e}function Xm(n,e,t){const r=new Map;j(n.length===t.length);for(let s=0;s<t.length;s++){const i=n[s],o=i.transform,a=e.data.field(i.field);r.set(i.field,ER(o,a,t[s]))}return r}function Zm(n,e,t){const r=new Map;for(const s of n){const i=s.transform,o=t.data.field(s.field);r.set(s.field,bR(i,o,e))}return r}class Fi extends Vu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class rf extends Vu{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class sf{constructor(e,t,r,s){this.batchId=e,this.localWriteTime=t,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,t){const r=t.mutationResults;for(let s=0;s<this.mutations.length;s++){const i=this.mutations[s];i.key.isEqual(e.key)&&AR(i,e,r[s])}}applyToLocalView(e,t){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(t=Io(r,e,t,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(t=Io(r,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const r=d_();return this.mutations.forEach(s=>{const i=e.get(s.key),o=i.overlayedDocument;let a=this.applyToLocalView(o,i.mutatedFields);a=t.has(s.key)?null:a;const c=__(o,a);c!==null&&r.set(s.key,c),o.isValidDocument()||o.convertToNoDocument(z.min())}),r}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),se())}isEqual(e){return this.batchId===e.batchId&&di(this.mutations,e.mutations,(t,r)=>Jm(t,r))&&di(this.baseMutations,e.baseMutations,(t,r)=>Jm(t,r))}}class of{constructor(e,t,r,s){this.batch=e,this.commitVersion=t,this.mutationResults=r,this.docVersions=s}static from(e,t,r){j(e.mutations.length===r.length);let s=wR;const i=e.mutations;for(let o=0;o<i.length;o++)s=s.insert(i[o].key,r[o].version);return new of(e,t,r,s)}}/**
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
 */class af{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
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
 */class kR{constructor(e){this.count=e}}/**
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
 */var We,ue;function b_(n){switch(n){default:return U();case w.CANCELLED:case w.UNKNOWN:case w.DEADLINE_EXCEEDED:case w.RESOURCE_EXHAUSTED:case w.INTERNAL:case w.UNAVAILABLE:case w.UNAUTHENTICATED:return!1;case w.INVALID_ARGUMENT:case w.NOT_FOUND:case w.ALREADY_EXISTS:case w.PERMISSION_DENIED:case w.FAILED_PRECONDITION:case w.ABORTED:case w.OUT_OF_RANGE:case w.UNIMPLEMENTED:case w.DATA_LOSS:return!0}}function E_(n){if(n===void 0)return je("GRPC error has no .code"),w.UNKNOWN;switch(n){case We.OK:return w.OK;case We.CANCELLED:return w.CANCELLED;case We.UNKNOWN:return w.UNKNOWN;case We.DEADLINE_EXCEEDED:return w.DEADLINE_EXCEEDED;case We.RESOURCE_EXHAUSTED:return w.RESOURCE_EXHAUSTED;case We.INTERNAL:return w.INTERNAL;case We.UNAVAILABLE:return w.UNAVAILABLE;case We.UNAUTHENTICATED:return w.UNAUTHENTICATED;case We.INVALID_ARGUMENT:return w.INVALID_ARGUMENT;case We.NOT_FOUND:return w.NOT_FOUND;case We.ALREADY_EXISTS:return w.ALREADY_EXISTS;case We.PERMISSION_DENIED:return w.PERMISSION_DENIED;case We.FAILED_PRECONDITION:return w.FAILED_PRECONDITION;case We.ABORTED:return w.ABORTED;case We.OUT_OF_RANGE:return w.OUT_OF_RANGE;case We.UNIMPLEMENTED:return w.UNIMPLEMENTED;case We.DATA_LOSS:return w.DATA_LOSS;default:return U()}}(ue=We||(We={}))[ue.OK=0]="OK",ue[ue.CANCELLED=1]="CANCELLED",ue[ue.UNKNOWN=2]="UNKNOWN",ue[ue.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",ue[ue.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",ue[ue.NOT_FOUND=5]="NOT_FOUND",ue[ue.ALREADY_EXISTS=6]="ALREADY_EXISTS",ue[ue.PERMISSION_DENIED=7]="PERMISSION_DENIED",ue[ue.UNAUTHENTICATED=16]="UNAUTHENTICATED",ue[ue.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",ue[ue.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",ue[ue.ABORTED=10]="ABORTED",ue[ue.OUT_OF_RANGE=11]="OUT_OF_RANGE",ue[ue.UNIMPLEMENTED=12]="UNIMPLEMENTED",ue[ue.INTERNAL=13]="INTERNAL",ue[ue.UNAVAILABLE=14]="UNAVAILABLE",ue[ue.DATA_LOSS=15]="DATA_LOSS";/**
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
 */class cf{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return Ja}static getOrCreateInstance(){return Ja===null&&(Ja=new cf),Ja}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach(t=>t(e))}}let Ja=null;/**
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
 */class Ta{constructor(e,t,r,s,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=r,this.documentUpdates=s,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t,r){const s=new Map;return s.set(e,Sa.createSynthesizedTargetChangeForCurrentChange(e,t,r)),new Ta(z.min(),s,Fu(),Mt(),se())}}class Sa{constructor(e,t,r,s,i){this.resumeToken=e,this.current=t,this.addedDocuments=r,this.modifiedDocuments=s,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t,r){return new Sa(r,t,se(),se(),se())}}/**
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
 */class pc{constructor(e,t,r,s){this.It=e,this.removedTargetIds=t,this.key=r,this.Tt=s}}class T_{constructor(e,t){this.targetId=e,this.Et=t}}class S_{constructor(e,t,r=Je.EMPTY_BYTE_STRING,s=null){this.state=e,this.targetIds=t,this.resumeToken=r,this.cause=s}}class eg{constructor(){this.At=0,this.Rt=ng(),this.vt=Je.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return this.At!==0}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=se(),t=se(),r=se();return this.Rt.forEach((s,i)=>{switch(i){case 0:e=e.add(s);break;case 2:t=t.add(s);break;case 1:r=r.add(s);break;default:U()}}),new Sa(this.vt,this.bt,e,t,r)}xt(){this.Pt=!1,this.Rt=ng()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class RR{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=Mt(),this.qt=tg(),this.Ut=new Ie(re)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,t=>{const r=this.jt(t);switch(e.state){case 0:this.Wt(t)&&r.Dt(e.resumeToken);break;case 1:r.$t(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.$t(),r.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(r.Mt(),r.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),r.Dt(e.resumeToken));break;default:U()}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach((r,s)=>{this.Wt(s)&&t(s)})}Jt(e){var t;const r=e.targetId,s=e.Et.count,i=this.Yt(r);if(i){const o=i.target;if($c(o))if(s===0){const a=new P(o.path);this.Qt(r,a,ke.newNoDocument(a,z.min()))}else j(s===1);else{const a=this.Zt(r);a!==s&&(this.Ht(r),this.Ut=this.Ut.add(r),(t=cf.instance)===null||t===void 0||t.notifyOnExistenceFilterMismatch({localCacheCount:a,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach((i,o)=>{const a=this.Yt(o);if(a){if(i.current&&$c(a.target)){const c=new P(a.target.path);this.Lt.get(c)!==null||this.te(o,c)||this.Qt(o,c,ke.newNoDocument(c,e))}i.St&&(t.set(o,i.Ct()),i.xt())}});let r=se();this.qt.forEach((i,o)=>{let a=!0;o.forEachWhile(c=>{const u=this.Yt(c);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(i))}),this.Lt.forEach((i,o)=>o.setReadTime(e));const s=new Ta(e,t,this.Ut,this.Lt,r);return this.Lt=Mt(),this.qt=tg(),this.Ut=new Ie(re),s}Gt(e,t){if(!this.Wt(e))return;const r=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,r),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,r){if(!this.Wt(e))return;const s=this.jt(e);this.te(e,t)?s.Nt(t,1):s.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),r&&(this.Lt=this.Lt.insert(t,r))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new eg,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new Ie(re),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=this.Yt(e)!==null;return t||S("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new eg),this.Ft.getRemoteKeysForTarget(e).forEach(t=>{this.Qt(e,t,null)})}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function tg(){return new Ve(P.comparator)}function ng(){return new Ve(P.comparator)}/**
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
 */const DR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),NR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),xR=(()=>({and:"AND",or:"OR"}))();class PR{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function yi(n,e){return n.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function A_(n,e){return n.useProto3Json?e.toBase64():e.toUint8Array()}function OR(n,e){return yi(n,e.toTimestamp())}function Ke(n){return j(!!n),z.fromTimestamp(function(e){const t=Er(e);return new Pe(t.seconds,t.nanos)}(n))}function uf(n,e){return function(t){return new le(["projects",t.projectId,"databases",t.database])}(n).child("documents").child(e).canonicalString()}function C_(n){const e=le.fromString(n);return j(L_(e)),e}function Wo(n,e){return uf(n.databaseId,e.path)}function An(n,e){const t=C_(e);if(t.get(1)!==n.databaseId.projectId)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+t.get(1)+" vs "+n.databaseId.projectId);if(t.get(3)!==n.databaseId.database)throw new E(w.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+t.get(3)+" vs "+n.databaseId.database);return new P(R_(t))}function Lh(n,e){return uf(n.databaseId,e)}function k_(n){const e=C_(n);return e.length===4?le.emptyPath():R_(e)}function Qo(n){return new le(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function R_(n){return j(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function rg(n,e,t){return{name:Wo(n,e),fields:t.value.mapValue.fields}}function D_(n,e,t){const r=An(n,e.name),s=Ke(e.updateTime),i=e.createTime?Ke(e.createTime):z.min(),o=new ut({mapValue:{fields:e.fields}}),a=ke.newFoundDocument(r,s,i,o);return t&&a.setHasCommittedMutations(),t?a.setHasCommittedMutations():a}function MR(n,e){return"found"in e?function(t,r){j(!!r.found),r.found.name,r.found.updateTime;const s=An(t,r.found.name),i=Ke(r.found.updateTime),o=r.found.createTime?Ke(r.found.createTime):z.min(),a=new ut({mapValue:{fields:r.found.fields}});return ke.newFoundDocument(s,i,o,a)}(n,e):"missing"in e?function(t,r){j(!!r.missing),j(!!r.readTime);const s=An(t,r.missing),i=Ke(r.readTime);return ke.newNoDocument(s,i)}(n,e):U()}function LR(n,e){let t;if("targetChange"in e){e.targetChange;const r=function(c){return c==="NO_CHANGE"?0:c==="ADD"?1:c==="REMOVE"?2:c==="CURRENT"?3:c==="RESET"?4:U()}(e.targetChange.targetChangeType||"NO_CHANGE"),s=e.targetChange.targetIds||[],i=function(c,u){return c.useProto3Json?(j(u===void 0||typeof u=="string"),Je.fromBase64String(u||"")):(j(u===void 0||u instanceof Uint8Array),Je.fromUint8Array(u||new Uint8Array))}(n,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(c){const u=c.code===void 0?w.UNKNOWN:E_(c.code);return new E(u,c.message||"")}(o);t=new S_(r,s,i,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const s=An(n,r.document.name),i=Ke(r.document.updateTime),o=r.document.createTime?Ke(r.document.createTime):z.min(),a=new ut({mapValue:{fields:r.document.fields}}),c=ke.newFoundDocument(s,i,o,a),u=r.targetIds||[],l=r.removedTargetIds||[];t=new pc(u,l,c.key,c)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const s=An(n,r.document),i=r.readTime?Ke(r.readTime):z.min(),o=ke.newNoDocument(s,i),a=r.removedTargetIds||[];t=new pc([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const s=An(n,r.document),i=r.removedTargetIds||[];t=new pc([],i,s,null)}else{if(!("filter"in e))return U();{e.filter;const r=e.filter;r.targetId;const s=r.count||0,i=new kR(s),o=r.targetId;t=new T_(o,i)}}return t}function Yo(n,e){let t;if(e instanceof Li)t={update:rg(n,e.key,e.value)};else if(e instanceof Fi)t={delete:Wo(n,e.key)};else if(e instanceof Jn)t={update:rg(n,e.key,e.data),updateMask:qR(e.fieldMask)};else{if(!(e instanceof rf))return U();t={verify:Wo(n,e.key)}}return e.fieldTransforms.length>0&&(t.updateTransforms=e.fieldTransforms.map(r=>function(s,i){const o=i.transform;if(o instanceof mi)return{fieldPath:i.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof Is)return{fieldPath:i.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof bs)return{fieldPath:i.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof gi)return{fieldPath:i.field.canonicalString(),increment:o._t};throw U()}(0,r))),e.precondition.isNone||(t.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:OR(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:U()}(n,e.precondition)),t}function Fh(n,e){const t=e.currentDocument?function(s){return s.updateTime!==void 0?xe.updateTime(Ke(s.updateTime)):s.exists!==void 0?xe.exists(s.exists):xe.none()}(e.currentDocument):xe.none(),r=e.updateTransforms?e.updateTransforms.map(s=>function(i,o){let a=null;if("setToServerValue"in o)j(o.setToServerValue==="REQUEST_TIME"),a=new mi;else if("appendMissingElements"in o){const u=o.appendMissingElements.values||[];a=new Is(u)}else if("removeAllFromArray"in o){const u=o.removeAllFromArray.values||[];a=new bs(u)}else"increment"in o?a=new gi(i,o.increment):U();const c=ze.fromServerFormat(o.fieldPath);return new Ea(c,a)}(n,s)):[];if(e.update){e.update.name;const s=An(n,e.update.name),i=new ut({mapValue:{fields:e.update.fields}});if(e.updateMask){const o=function(a){const c=a.fieldPaths||[];return new Ot(c.map(u=>ze.fromServerFormat(u)))}(e.updateMask);return new Jn(s,i,o,t,r)}return new Li(s,i,t,r)}if(e.delete){const s=An(n,e.delete);return new Fi(s,t)}if(e.verify){const s=An(n,e.verify);return new rf(s,t)}return U()}function FR(n,e){return n&&n.length>0?(j(e!==void 0),n.map(t=>function(r,s){let i=r.updateTime?Ke(r.updateTime):Ke(s);return i.isEqual(z.min())&&(i=Ke(s)),new SR(i,r.transformResults||[])}(t,e))):[]}function N_(n,e){return{documents:[Lh(n,e.path)]}}function x_(n,e){const t={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(t.parent=Lh(n,r),t.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(t.parent=Lh(n,r.popLast()),t.structuredQuery.from=[{collectionId:r.lastSegment()}]);const s=function(c){if(c.length!==0)return M_(ve.create(c,"and"))}(e.filters);s&&(t.structuredQuery.where=s);const i=function(c){if(c.length!==0)return c.map(u=>function(l){return{field:Ks(l.field),direction:VR(l.dir)}}(u))}(e.orderBy);i&&(t.structuredQuery.orderBy=i);const o=function(c,u){return c.useProto3Json||wa(u)?u:{value:u}}(n,e.limit);var a;return o!==null&&(t.structuredQuery.limit=o),e.startAt&&(t.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(t.structuredQuery.endAt=function(c){return{before:!c.inclusive,values:c.position}}(e.endAt)),t}function P_(n){let e=k_(n.parent);const t=n.structuredQuery,r=t.from?t.from.length:0;let s=null;if(r>0){j(r===1);const l=t.from[0];l.allDescendants?s=l.collectionId:e=e.child(l.collectionId)}let i=[];t.where&&(i=function(l){const h=O_(l);return h instanceof ve&&ef(h)?h.getFilters():[h]}(t.where));let o=[];t.orderBy&&(o=t.orderBy.map(l=>function(h){return new ni(Gs(h.field),function(d){switch(d){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(h.direction))}(l)));let a=null;t.limit&&(a=function(l){let h;return h=typeof l=="object"?l.value:l,wa(h)?null:h}(t.limit));let c=null;t.startAt&&(c=function(l){const h=!!l.before,d=l.values||[];return new Ar(d,h)}(t.startAt));let u=null;return t.endAt&&(u=function(l){const h=!l.before,d=l.values||[];return new Ar(d,h)}(t.endAt)),o_(e,s,o,i,a,"F",c,u)}function UR(n,e){const t=function(r,s){switch(s){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return U()}}(0,e.purpose);return t==null?null:{"goog-listen-tags":t}}function O_(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Gs(e.unaryFilter.field);return ce.create(t,"==",{doubleValue:NaN});case"IS_NULL":const r=Gs(e.unaryFilter.field);return ce.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=Gs(e.unaryFilter.field);return ce.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Gs(e.unaryFilter.field);return ce.create(i,"!=",{nullValue:"NULL_VALUE"});default:return U()}}(n):n.fieldFilter!==void 0?function(e){return ce.create(Gs(e.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return U()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ve.create(e.compositeFilter.filters.map(t=>O_(t)),function(t){switch(t){case"AND":return"and";case"OR":return"or";default:return U()}}(e.compositeFilter.op))}(n):U()}function VR(n){return DR[n]}function BR(n){return NR[n]}function $R(n){return xR[n]}function Ks(n){return{fieldPath:n.canonicalString()}}function Gs(n){return ze.fromServerFormat(n.fieldPath)}function M_(n){return n instanceof ce?function(e){if(e.op==="=="){if(qm(e.value))return{unaryFilter:{field:Ks(e.field),op:"IS_NAN"}};if($m(e.value))return{unaryFilter:{field:Ks(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(qm(e.value))return{unaryFilter:{field:Ks(e.field),op:"IS_NOT_NAN"}};if($m(e.value))return{unaryFilter:{field:Ks(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Ks(e.field),op:BR(e.op),value:e.value}}}(n):n instanceof ve?function(e){const t=e.getFilters().map(r=>M_(r));return t.length===1?t[0]:{compositeFilter:{op:$R(e.op),filters:t}}}(n):U()}function qR(n){const e=[];return n.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function L_(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
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
 */class gr{constructor(e,t,r,s,i=z.min(),o=z.min(),a=Je.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=r,this.sequenceNumber=s,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new gr(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new gr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
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
 */class F_{constructor(e){this.se=e}}function jR(n,e){let t;if(e.document)t=D_(n.se,e.document,!!e.hasCommittedMutations);else if(e.noDocument){const r=P.fromSegments(e.noDocument.path),s=Ts(e.noDocument.readTime);t=ke.newNoDocument(r,s),e.hasCommittedMutations&&t.setHasCommittedMutations()}else{if(!e.unknownDocument)return U();{const r=P.fromSegments(e.unknownDocument.path),s=Ts(e.unknownDocument.version);t=ke.newUnknownDocument(r,s)}}return e.readTime&&t.setReadTime(function(r){const s=new Pe(r[0],r[1]);return z.fromTimestamp(s)}(e.readTime)),t}function sg(n,e){const t=e.key,r={prefixPath:t.getCollectionPath().popLast().toArray(),collectionGroup:t.collectionGroup,documentId:t.path.lastSegment(),readTime:zc(e.readTime),hasCommittedMutations:e.hasCommittedMutations};if(e.isFoundDocument())r.document=function(s,i){return{name:Wo(s,i.key),fields:i.data.value.mapValue.fields,updateTime:yi(s,i.version.toTimestamp()),createTime:yi(s,i.createTime.toTimestamp())}}(n.se,e);else if(e.isNoDocument())r.noDocument={path:t.path.toArray(),readTime:Es(e.version)};else{if(!e.isUnknownDocument())return U();r.unknownDocument={path:t.path.toArray(),version:Es(e.version)}}return r}function zc(n){const e=n.toTimestamp();return[e.seconds,e.nanoseconds]}function Es(n){const e=n.toTimestamp();return{seconds:e.seconds,nanoseconds:e.nanoseconds}}function Ts(n){const e=new Pe(n.seconds,n.nanoseconds);return z.fromTimestamp(e)}function Jr(n,e){const t=(e.baseMutations||[]).map(i=>Fh(n.se,i));for(let i=0;i<e.mutations.length-1;++i){const o=e.mutations[i];if(i+1<e.mutations.length&&e.mutations[i+1].transform!==void 0){const a=e.mutations[i+1];o.updateTransforms=a.transform.fieldTransforms,e.mutations.splice(i+1,1),++i}}const r=e.mutations.map(i=>Fh(n.se,i)),s=Pe.fromMillis(e.localWriteTimeMs);return new sf(e.batchId,s,t,r)}function lo(n){const e=Ts(n.readTime),t=n.lastLimboFreeSnapshotVersion!==void 0?Ts(n.lastLimboFreeSnapshotVersion):z.min();let r;var s;return n.query.documents!==void 0?(j((s=n.query).documents.length===1),r=Ft(Mi(k_(s.documents[0])))):r=function(i){return Ft(P_(i))}(n.query),new gr(r,n.targetId,0,n.lastListenSequenceNumber,e,t,Je.fromBase64String(n.resumeToken))}function U_(n,e){const t=Es(e.snapshotVersion),r=Es(e.lastLimboFreeSnapshotVersion);let s;s=$c(e.target)?N_(n.se,e.target):x_(n.se,e.target);const i=e.resumeToken.toBase64();return{targetId:e.targetId,canonicalId:_s(e.target),readTime:t,resumeToken:i,lastListenSequenceNumber:e.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function lf(n){const e=P_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?jc(e,e.limit,"L"):e}function Ul(n,e){return new af(e.largestBatchId,Fh(n.se,e.overlayMutation))}function ig(n,e){const t=e.path.lastSegment();return[n,Ct(e.path.popLast()),t]}function og(n,e,t,r){return{indexId:n,uid:e.uid||"",sequenceNumber:t,readTime:Es(r.readTime),documentKey:Ct(r.documentKey.path),largestBatchId:r.largestBatchId}}/**
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
 */class zR{getBundleMetadata(e,t){return ag(e).get(t).next(r=>{if(r)return{id:(s=r).bundleId,createTime:Ts(s.createTime),version:s.version};var s})}saveBundleMetadata(e,t){return ag(e).put({bundleId:(r=t).id,createTime:Es(Ke(r.createTime)),version:r.version});var r}getNamedQuery(e,t){return cg(e).get(t).next(r=>{if(r)return{name:(s=r).name,query:lf(s.bundledQuery),readTime:Ts(s.readTime)};var s})}saveNamedQuery(e,t){return cg(e).put(function(r){return{name:r.name,readTime:Es(Ke(r.readTime)),bundledQuery:r.bundledQuery}}(t))}}function ag(n){return it(n,"bundles")}function cg(n){return it(n,"namedQueries")}/**
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
 */class Bu{constructor(e,t){this.serializer=e,this.userId=t}static ie(e,t){const r=t.uid||"";return new Bu(e,r)}getOverlay(e,t){return Yi(e).get(ig(this.userId,t)).next(r=>r?Ul(this.serializer,r):null)}getOverlays(e,t){const r=En();return y.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){const s=[];return r.forEach((i,o)=>{const a=new af(t,o);s.push(this.re(e,a))}),y.waitFor(s)}removeOverlaysForBatchId(e,t,r){const s=new Set;t.forEach(o=>s.add(Ct(o.getCollectionPath())));const i=[];return s.forEach(o=>{const a=IDBKeyRange.bound([this.userId,o,r],[this.userId,o,r+1],!1,!0);i.push(Yi(e).J("collectionPathOverlayIndex",a))}),y.waitFor(i)}getOverlaysForCollection(e,t,r){const s=En(),i=Ct(t),o=IDBKeyRange.bound([this.userId,i,r],[this.userId,i,Number.POSITIVE_INFINITY],!0);return Yi(e).j("collectionPathOverlayIndex",o).next(a=>{for(const c of a){const u=Ul(this.serializer,c);s.set(u.getKey(),u)}return s})}getOverlaysForCollectionGroup(e,t,r,s){const i=En();let o;const a=IDBKeyRange.bound([this.userId,t,r],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Yi(e).Z({index:"collectionGroupOverlayIndex",range:a},(c,u,l)=>{const h=Ul(this.serializer,u);i.size()<s||h.largestBatchId===o?(i.set(h.getKey(),h),o=h.largestBatchId):l.done()}).next(()=>i)}re(e,t){return Yi(e).put(function(r,s,i){const[o,a,c]=ig(s,i.mutation.key);return{userId:s,collectionPath:a,documentId:c,collectionGroup:i.mutation.key.getCollectionGroup(),largestBatchId:i.largestBatchId,overlayMutation:Yo(r.se,i.mutation)}}(this.serializer,this.userId,t))}}function Yi(n){return it(n,"documentOverlays")}/**
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
 */class Xr{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(Le(e.integerValue));else if("doubleValue"in e){const r=Le(e.doubleValue);isNaN(r)?this.ae(t,13):(this.ae(t,15),zo(r)?t.he(0):t.he(r))}else if("timestampValue"in e){const r=e.timestampValue;this.ae(t,20),typeof r=="string"?t.le(r):(t.le(`${r.seconds||""}`),t.he(r.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(ys(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const r=e.geoPointValue;this.ae(t,45),t.he(r.latitude||0),t.he(r.longitude||0)}else"mapValue"in e?Jw(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):U()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const r=e.fields||{};this.ae(t,55);for(const s of Object.keys(r))this.fe(s,t),this.ue(r[s],t)}ge(e,t){const r=e.values||[];this.ae(t,50);for(const s of r)this.ue(s,t)}_e(e,t){this.ae(t,37),P.fromName(e).path.forEach(r=>{this.ae(t,60),this.ye(r,t)})}ae(e,t){e.he(t)}de(e){e.he(2)}}Xr.pe=new Xr;function KR(n){if(n===0)return 8;let e=0;return!(n>>4)&&(e+=4,n<<=4),!(n>>6)&&(e+=2,n<<=2),!(n>>7)&&(e+=1),e}function ug(n){const e=64-function(t){let r=0;for(let s=0;s<8;++s){const i=KR(255&t[s]);if(r+=i,i!==8)break}return r}(n);return Math.ceil(e/8)}class GR{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ie(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Te(r.value),r=t.next();this.Ee()}Ae(e){const t=e[Symbol.iterator]();let r=t.next();for(;!r.done;)this.Re(r.value),r=t.next();this.ve()}be(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Te(r);else if(r<2048)this.Te(960|r>>>6),this.Te(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Te(480|r>>>12),this.Te(128|63&r>>>6),this.Te(128|63&r);else{const s=t.codePointAt(0);this.Te(240|s>>>18),this.Te(128|63&s>>>12),this.Te(128|63&s>>>6),this.Te(128|63&s)}}this.Ee()}Pe(e){for(const t of e){const r=t.charCodeAt(0);if(r<128)this.Re(r);else if(r<2048)this.Re(960|r>>>6),this.Re(128|63&r);else if(t<"\uD800"||"\uDBFF"<t)this.Re(480|r>>>12),this.Re(128|63&r>>>6),this.Re(128|63&r);else{const s=t.codePointAt(0);this.Re(240|s>>>18),this.Re(128|63&s>>>12),this.Re(128|63&s>>>6),this.Re(128|63&s)}}this.ve()}Ve(e){const t=this.Se(e),r=ug(t);this.De(1+r),this.buffer[this.position++]=255&r;for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=255&t[s]}Ce(e){const t=this.Se(e),r=ug(t);this.De(1+r),this.buffer[this.position++]=~(255&r);for(let s=t.length-r;s<t.length;++s)this.buffer[this.position++]=~(255&t[s])}xe(){this.Ne(255),this.Ne(255)}ke(){this.Oe(255),this.Oe(255)}reset(){this.position=0}seed(e){this.De(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Se(e){const t=function(s){const i=new DataView(new ArrayBuffer(8));return i.setFloat64(0,s,!1),new Uint8Array(i.buffer)}(e),r=(128&t[0])!=0;t[0]^=r?255:128;for(let s=1;s<t.length;++s)t[s]^=r?255:0;return t}Te(e){const t=255&e;t===0?(this.Ne(0),this.Ne(255)):t===255?(this.Ne(255),this.Ne(0)):this.Ne(t)}Re(e){const t=255&e;t===0?(this.Oe(0),this.Oe(255)):t===255?(this.Oe(255),this.Oe(0)):this.Oe(e)}Ee(){this.Ne(0),this.Ne(1)}ve(){this.Oe(0),this.Oe(1)}Ne(e){this.De(1),this.buffer[this.position++]=e}Oe(e){this.De(1),this.buffer[this.position++]=~e}De(e){const t=e+this.position;if(t<=this.buffer.length)return;let r=2*this.buffer.length;r<t&&(r=t);const s=new Uint8Array(r);s.set(this.buffer),this.buffer=s}}class HR{constructor(e){this.Me=e}we(e){this.Me.Ie(e)}le(e){this.Me.be(e)}he(e){this.Me.Ve(e)}ce(){this.Me.xe()}}class WR{constructor(e){this.Me=e}we(e){this.Me.Ae(e)}le(e){this.Me.Pe(e)}he(e){this.Me.Ce(e)}ce(){this.Me.ke()}}class Ji{constructor(){this.Me=new GR,this.Fe=new HR(this.Me),this.Be=new WR(this.Me)}seed(e){this.Me.seed(e)}Le(e){return e===0?this.Fe:this.Be}$e(){return this.Me.$e()}reset(){this.Me.reset()}}/**
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
 */class Zr{constructor(e,t,r,s){this.indexId=e,this.documentKey=t,this.arrayValue=r,this.directionalValue=s}qe(){const e=this.directionalValue.length,t=e===0||this.directionalValue[e-1]===255?e+1:e,r=new Uint8Array(t);return r.set(this.directionalValue,0),t!==e?r.set([0],this.directionalValue.length):++r[r.length-1],new Zr(this.indexId,this.documentKey,this.arrayValue,r)}}function rr(n,e){let t=n.indexId-e.indexId;return t!==0?t:(t=lg(n.arrayValue,e.arrayValue),t!==0?t:(t=lg(n.directionalValue,e.directionalValue),t!==0?t:P.comparator(n.documentKey,e.documentKey)))}function lg(n,e){for(let t=0;t<n.length&&t<e.length;++t){const r=n[t]-e[t];if(r!==0)return r}return n.length-e.length}/**
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
 */class QR{constructor(e){this.collectionId=e.collectionGroup!=null?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.Ke=[];for(const t of e.filters){const r=t;r.isInequality()?this.Ge=r:this.Ke.push(r)}}Qe(e){j(e.collectionGroup===this.collectionId);const t=Ch(e);if(t!==void 0&&!this.ze(t))return!1;const r=Kr(e);let s=0,i=0;for(;s<r.length&&this.ze(r[s]);++s);if(s===r.length)return!0;if(this.Ge!==void 0){const o=r[s];if(!this.je(this.Ge,o)||!this.We(this.Ue[i++],o))return!1;++s}for(;s<r.length;++s){const o=r[s];if(i>=this.Ue.length||!this.We(this.Ue[i++],o))return!1}return!0}ze(e){for(const t of this.Ke)if(this.je(t,e))return!0;return!1}je(e,t){if(e===void 0||!e.field.isEqual(t.fieldPath))return!1;const r=e.op==="array-contains"||e.op==="array-contains-any";return t.kind===2===r}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(t.kind===0&&e.dir==="asc"||t.kind===1&&e.dir==="desc")}}/**
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
 */function V_(n){var e,t;if(j(n instanceof ce||n instanceof ve),n instanceof ce){if(n instanceof i_){const s=((t=(e=n.value.arrayValue)===null||e===void 0?void 0:e.values)===null||t===void 0?void 0:t.map(i=>ce.create(n.field,"==",i)))||[];return ve.create(s,"or")}return n}const r=n.filters.map(s=>V_(s));return ve.create(r,n.op)}function YR(n){if(n.getFilters().length===0)return[];const e=Bh(V_(n));return j(B_(e)),Uh(e)||Vh(e)?[e]:e.getFilters()}function Uh(n){return n instanceof ce}function Vh(n){return n instanceof ve&&ef(n)}function B_(n){return Uh(n)||Vh(n)||function(e){if(e instanceof ve&&Nh(e)){for(const t of e.getFilters())if(!Uh(t)&&!Vh(t))return!1;return!0}return!1}(n)}function Bh(n){if(j(n instanceof ce||n instanceof ve),n instanceof ce)return n;if(n.filters.length===1)return Bh(n.filters[0]);const e=n.filters.map(r=>Bh(r));let t=ve.create(e,n.op);return t=Kc(t),B_(t)?t:(j(t instanceof ve),j(pi(t)),j(t.filters.length>1),t.filters.reduce((r,s)=>hf(r,s)))}function hf(n,e){let t;return j(n instanceof ce||n instanceof ve),j(e instanceof ce||e instanceof ve),t=n instanceof ce?e instanceof ce?function(r,s){return ve.create([r,s],"and")}(n,e):hg(n,e):e instanceof ce?hg(e,n):function(r,s){if(j(r.filters.length>0&&s.filters.length>0),pi(r)&&pi(s))return n_(r,s.getFilters());const i=Nh(r)?r:s,o=Nh(r)?s:r,a=i.filters.map(c=>hf(c,o));return ve.create(a,"or")}(n,e),Kc(t)}function hg(n,e){if(pi(e))return n_(e,n.getFilters());{const t=e.filters.map(r=>hf(n,r));return ve.create(t,"or")}}function Kc(n){if(j(n instanceof ce||n instanceof ve),n instanceof ce)return n;const e=n.getFilters();if(e.length===1)return Kc(e[0]);if(e_(n))return n;const t=e.map(s=>Kc(s)),r=[];return t.forEach(s=>{s instanceof ce?r.push(s):s instanceof ve&&(s.op===n.op?r.push(...s.filters):r.push(s))}),r.length===1?r[0]:ve.create(r,n.op)}/**
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
 */class JR{constructor(){this.He=new df}addToCollectionParentIndex(e,t){return this.He.add(t),y.resolve()}getCollectionParents(e,t){return y.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return y.resolve()}deleteFieldIndex(e,t){return y.resolve()}getDocumentsMatchingTarget(e,t){return y.resolve(null)}getIndexType(e,t){return y.resolve(0)}getFieldIndexes(e,t){return y.resolve([])}getNextCollectionGroupToUpdate(e){return y.resolve(null)}getMinOffset(e,t){return y.resolve(zt.min())}getMinOffsetFromCollectionGroup(e,t){return y.resolve(zt.min())}updateCollectionGroup(e,t,r){return y.resolve()}updateIndexEntries(e,t){return y.resolve()}}class df{constructor(){this.index={}}add(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t]||new Ie(le.comparator),i=!s.has(r);return this.index[t]=s.add(r),i}has(e){const t=e.lastSegment(),r=e.popLast(),s=this.index[t];return s&&s.has(r)}getEntries(e){return(this.index[e]||new Ie(le.comparator)).toArray()}}/**
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
 */const Xa=new Uint8Array(0);class XR{constructor(e,t){this.user=e,this.databaseId=t,this.Je=new df,this.Ye=new Mr(r=>_s(r),(r,s)=>_a(r,s)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Je.has(t)){const r=t.lastSegment(),s=t.popLast();e.addOnCommittedListener(()=>{this.Je.add(t)});const i={collectionId:r,parent:Ct(s)};return dg(e).put(i)}return y.resolve()}getCollectionParents(e,t){const r=[],s=IDBKeyRange.bound([t,""],[Uw(t),""],!1,!0);return dg(e).j(s).next(i=>{for(const o of i){if(o.collectionId!==t)break;r.push(bn(o.parent))}return r})}addFieldIndex(e,t){const r=Za(e),s=function(o){return{indexId:o.indexId,collectionGroup:o.collectionGroup,fields:o.fields.map(a=>[a.fieldPath.canonicalString(),a.kind])}}(t);delete s.indexId;const i=r.add(s);if(t.indexState){const o=Zi(e);return i.next(a=>{o.put(og(a,this.user,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const r=Za(e),s=Zi(e),i=Xi(e);return r.delete(t.indexId).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}getDocumentsMatchingTarget(e,t){const r=Xi(e);let s=!0;const i=new Map;return y.forEach(this.Ze(t),o=>this.Xe(e,o).next(a=>{s&&(s=!!a),i.set(o,a)})).next(()=>{if(s){let o=se();const a=[];return y.forEach(i,(c,u)=>{var l;S("IndexedDbIndexManager",`Using index ${l=c,`id=${l.indexId}|cg=${l.collectionGroup}|f=${l.fields.map(D=>`${D.fieldPath}:${D.kind}`).join(",")}`} to execute ${_s(t)}`);const h=function(D,W){const X=Ch(W);if(X===void 0)return null;for(const ne of qc(D,X.fieldPath))switch(ne.op){case"array-contains-any":return ne.value.arrayValue.values||[];case"array-contains":return[ne.value]}return null}(u,c),d=function(D,W){const X=new Map;for(const ne of Kr(W))for(const ge of qc(D,ne.fieldPath))switch(ge.op){case"==":case"in":X.set(ne.fieldPath.canonicalString(),ge.value);break;case"not-in":case"!=":return X.set(ne.fieldPath.canonicalString(),ge.value),Array.from(X.values())}return null}(u,c),p=function(D,W){const X=[];let ne=!0;for(const ge of Kr(W)){const J=ge.kind===0?Hm(D,ge.fieldPath,D.startAt):Wm(D,ge.fieldPath,D.startAt);X.push(J.value),ne&&(ne=J.inclusive)}return new Ar(X,ne)}(u,c),g=function(D,W){const X=[];let ne=!0;for(const ge of Kr(W)){const J=ge.kind===0?Wm(D,ge.fieldPath,D.endAt):Hm(D,ge.fieldPath,D.endAt);X.push(J.value),ne&&(ne=J.inclusive)}return new Ar(X,ne)}(u,c),v=this.tn(c,u,p),A=this.tn(c,u,g),R=this.en(c,u,d),V=this.nn(c.indexId,h,v,p.inclusive,A,g.inclusive,R);return y.forEach(V,D=>r.H(D,t.limit).next(W=>{W.forEach(X=>{const ne=P.fromSegments(X.documentKey);o.has(ne)||(o=o.add(ne),a.push(ne))})}))}).next(()=>a)}return y.resolve(null)})}Ze(e){let t=this.Ye.get(e);return t||(e.filters.length===0?t=[e]:t=YR(ve.create(e.filters,"and")).map(r=>Ph(e.path,e.collectionGroup,e.orderBy,r.getFilters(),e.limit,e.startAt,e.endAt)),this.Ye.set(e,t),t)}nn(e,t,r,s,i,o,a){const c=(t!=null?t.length:1)*Math.max(r.length,i.length),u=c/(t!=null?t.length:1),l=[];for(let h=0;h<c;++h){const d=t?this.sn(t[h/u]):Xa,p=this.rn(e,d,r[h%u],s),g=this.on(e,d,i[h%u],o),v=a.map(A=>this.rn(e,d,A,!0));l.push(...this.createRange(p,g,v))}return l}rn(e,t,r,s){const i=new Zr(e,P.empty(),t,r);return s?i:i.qe()}on(e,t,r,s){const i=new Zr(e,P.empty(),t,r);return s?i.qe():i}Xe(e,t){const r=new QR(t),s=t.collectionGroup!=null?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,s).next(i=>{let o=null;for(const a of i)r.Qe(a)&&(!o||a.fields.length>o.fields.length)&&(o=a);return o})}getIndexType(e,t){let r=2;const s=this.Ze(t);return y.forEach(s,i=>this.Xe(e,i).next(o=>{o?r!==0&&o.fields.length<function(a){let c=new Ie(ze.comparator),u=!1;for(const l of a.filters)for(const h of l.getFlattenedFilters())h.field.isKeyField()||(h.op==="array-contains"||h.op==="array-contains-any"?u=!0:c=c.add(h.field));for(const l of a.orderBy)l.field.isKeyField()||(c=c.add(l.field));return c.size+(u?1:0)}(i)&&(r=1):r=0})).next(()=>function(i){return i.limit!==null}(t)&&s.length>1&&r===2?1:r)}un(e,t){const r=new Ji;for(const s of Kr(e)){const i=t.data.field(s.fieldPath);if(i==null)return null;const o=r.Le(s.kind);Xr.pe.oe(i,o)}return r.$e()}sn(e){const t=new Ji;return Xr.pe.oe(e,t.Le(0)),t.$e()}cn(e,t){const r=new Ji;return Xr.pe.oe(ws(this.databaseId,t),r.Le(function(s){const i=Kr(s);return i.length===0?0:i[i.length-1].kind}(e))),r.$e()}en(e,t,r){if(r===null)return[];let s=[];s.push(new Ji);let i=0;for(const o of Kr(e)){const a=r[i++];for(const c of s)if(this.an(t,o.fieldPath)&&Ho(a))s=this.hn(s,o,a);else{const u=c.Le(o.kind);Xr.pe.oe(a,u)}}return this.ln(s)}tn(e,t,r){return this.en(e,t,r.position)}ln(e){const t=[];for(let r=0;r<e.length;++r)t[r]=e[r].$e();return t}hn(e,t,r){const s=[...e],i=[];for(const o of r.arrayValue.values||[])for(const a of s){const c=new Ji;c.seed(a.$e()),Xr.pe.oe(o,c.Le(t.kind)),i.push(c)}return i}an(e,t){return!!e.filters.find(r=>r instanceof ce&&r.field.isEqual(t)&&(r.op==="in"||r.op==="not-in"))}getFieldIndexes(e,t){const r=Za(e),s=Zi(e);return(t?r.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):r.j()).next(i=>{const o=[];return y.forEach(i,a=>s.get([a.indexId,this.uid]).next(c=>{o.push(function(u,l){const h=l?new Bc(l.sequenceNumber,new zt(Ts(l.readTime),new P(bn(l.documentKey)),l.largestBatchId)):Bc.empty(),d=u.fields.map(([p,g])=>new Ok(ze.fromServerFormat(p),g));return new Vw(u.indexId,u.collectionGroup,d,h)}(a,c))})).next(()=>o)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(t=>t.length===0?null:(t.sort((r,s)=>{const i=r.indexState.sequenceNumber-s.indexState.sequenceNumber;return i!==0?i:re(r.collectionGroup,s.collectionGroup)}),t[0].collectionGroup))}updateCollectionGroup(e,t,r){const s=Za(e),i=Zi(e);return this.fn(e).next(o=>s.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next(a=>y.forEach(a,c=>i.put(og(c.indexId,this.user,o,r)))))}updateIndexEntries(e,t){const r=new Map;return y.forEach(t,(s,i)=>{const o=r.get(s.collectionGroup);return(o?y.resolve(o):this.getFieldIndexes(e,s.collectionGroup)).next(a=>(r.set(s.collectionGroup,a),y.forEach(a,c=>this.dn(e,s,c).next(u=>{const l=this.wn(i,c);return u.isEqual(l)?y.resolve():this._n(e,i,c,u,l)}))))})}mn(e,t,r,s){return Xi(e).put({indexId:s.indexId,uid:this.uid,arrayValue:s.arrayValue,directionalValue:s.directionalValue,orderedDocumentKey:this.cn(r,t.key),documentKey:t.key.path.toArray()})}gn(e,t,r,s){return Xi(e).delete([s.indexId,this.uid,s.arrayValue,s.directionalValue,this.cn(r,t.key),t.key.path.toArray()])}dn(e,t,r){const s=Xi(e);let i=new Ie(rr);return s.Z({index:"documentKeyIndex",range:IDBKeyRange.only([r.indexId,this.uid,this.cn(r,t)])},(o,a)=>{i=i.add(new Zr(r.indexId,t,a.arrayValue,a.directionalValue))}).next(()=>i)}wn(e,t){let r=new Ie(rr);const s=this.un(t,e);if(s==null)return r;const i=Ch(t);if(i!=null){const o=e.data.field(i.fieldPath);if(Ho(o))for(const a of o.arrayValue.values||[])r=r.add(new Zr(t.indexId,e.key,this.sn(a),s))}else r=r.add(new Zr(t.indexId,e.key,Xa,s));return r}_n(e,t,r,s,i){S("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const o=[];return function(a,c,u,l,h){const d=a.getIterator(),p=c.getIterator();let g=$s(d),v=$s(p);for(;g||v;){let A=!1,R=!1;if(g&&v){const V=u(g,v);V<0?R=!0:V>0&&(A=!0)}else g!=null?R=!0:A=!0;A?(l(v),v=$s(p)):R?(h(g),g=$s(d)):(g=$s(d),v=$s(p))}}(s,i,rr,a=>{o.push(this.mn(e,t,r,a))},a=>{o.push(this.gn(e,t,r,a))}),y.waitFor(o)}fn(e){let t=1;return Zi(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(r,s,i)=>{i.done(),t=s.sequenceNumber+1}).next(()=>t)}createRange(e,t,r){r=r.sort((o,a)=>rr(o,a)).filter((o,a,c)=>!a||rr(o,c[a-1])!==0);const s=[];s.push(e);for(const o of r){const a=rr(o,e),c=rr(o,t);if(a===0)s[0]=e.qe();else if(a>0&&c<0)s.push(o),s.push(o.qe());else if(c>0)break}s.push(t);const i=[];for(let o=0;o<s.length;o+=2){if(this.yn(s[o],s[o+1]))return[];const a=[s[o].indexId,this.uid,s[o].arrayValue,s[o].directionalValue,Xa,[]],c=[s[o+1].indexId,this.uid,s[o+1].arrayValue,s[o+1].directionalValue,Xa,[]];i.push(IDBKeyRange.bound(a,c))}return i}yn(e,t){return rr(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(fg)}getMinOffset(e,t){return y.mapArray(this.Ze(t),r=>this.Xe(e,r).next(s=>s||U())).next(fg)}}function dg(n){return it(n,"collectionParents")}function Xi(n){return it(n,"indexEntries")}function Za(n){return it(n,"indexConfiguration")}function Zi(n){return it(n,"indexState")}function fg(n){j(n.length!==0);let e=n[0].indexState.offset,t=e.largestBatchId;for(let r=1;r<n.length;r++){const s=n[r].indexState.offset;Jd(s,e)<0&&(e=s),t<s.largestBatchId&&(t=s.largestBatchId)}return new zt(e.readTime,e.documentKey,t)}/**
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
 */const pg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Dt{constructor(e,t,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=r}static withCacheSize(e){return new Dt(e,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}/**
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
 */function $_(n,e,t){const r=n.store("mutations"),s=n.store("documentMutations"),i=[],o=IDBKeyRange.only(t.batchId);let a=0;const c=r.Z({range:o},(l,h,d)=>(a++,d.delete()));i.push(c.next(()=>{j(a===1)}));const u=[];for(const l of t.mutations){const h=Kw(e,l.key.path,t.batchId);i.push(s.delete(h)),u.push(l.key)}return y.waitFor(i).next(()=>u)}function Gc(n){if(!n)return 0;let e;if(n.document)e=n.document;else if(n.unknownDocument)e=n.unknownDocument;else{if(!n.noDocument)throw U();e=n.noDocument}return JSON.stringify(e).length}/**
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
 */Dt.DEFAULT_COLLECTION_PERCENTILE=10,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Dt.DEFAULT=new Dt(41943040,Dt.DEFAULT_COLLECTION_PERCENTILE,Dt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Dt.DISABLED=new Dt(-1,0,0);class $u{constructor(e,t,r,s){this.userId=e,this.serializer=t,this.indexManager=r,this.referenceDelegate=s,this.pn={}}static ie(e,t,r,s){j(e.uid!=="");const i=e.isAuthenticated()?e.uid:"";return new $u(i,t,r,s)}checkEmpty(e){let t=!0;const r=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return sr(e).Z({index:"userMutationsIndex",range:r},(s,i,o)=>{t=!1,o.done()}).next(()=>t)}addMutationBatch(e,t,r,s){const i=Hs(e),o=sr(e);return o.add({}).next(a=>{j(typeof a=="number");const c=new sf(a,t,r,s),u=function(d,p,g){const v=g.baseMutations.map(R=>Yo(d.se,R)),A=g.mutations.map(R=>Yo(d.se,R));return{userId:p,batchId:g.batchId,localWriteTimeMs:g.localWriteTime.toMillis(),baseMutations:v,mutations:A}}(this.serializer,this.userId,c),l=[];let h=new Ie((d,p)=>re(d.canonicalString(),p.canonicalString()));for(const d of s){const p=Kw(this.userId,d.key.path,a);h=h.add(d.key.path.popLast()),l.push(o.put(u)),l.push(i.put(p,Bk))}return h.forEach(d=>{l.push(this.indexManager.addToCollectionParentIndex(e,d))}),e.addOnCommittedListener(()=>{this.pn[a]=c.keys()}),y.waitFor(l).next(()=>c)})}lookupMutationBatch(e,t){return sr(e).get(t).next(r=>r?(j(r.userId===this.userId),Jr(this.serializer,r)):null)}In(e,t){return this.pn[t]?y.resolve(this.pn[t]):this.lookupMutationBatch(e,t).next(r=>{if(r){const s=r.keys();return this.pn[t]=s,s}return null})}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=IDBKeyRange.lowerBound([this.userId,r]);let i=null;return sr(e).Z({index:"userMutationsIndex",range:s},(o,a,c)=>{a.userId===this.userId&&(j(a.batchId>=r),i=Jr(this.serializer,a)),c.done()}).next(()=>i)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let r=-1;return sr(e).Z({index:"userMutationsIndex",range:t,reverse:!0},(s,i,o)=>{r=i.batchId,o.done()}).next(()=>r)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return sr(e).j("userMutationsIndex",t).next(r=>r.map(s=>Jr(this.serializer,s)))}getAllMutationBatchesAffectingDocumentKey(e,t){const r=lc(this.userId,t.path),s=IDBKeyRange.lowerBound(r),i=[];return Hs(e).Z({range:s},(o,a,c)=>{const[u,l,h]=o,d=bn(l);if(u===this.userId&&t.path.isEqual(d))return sr(e).get(h).next(p=>{if(!p)throw U();j(p.userId===this.userId),i.push(Jr(this.serializer,p))});c.done()}).next(()=>i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ie(re);const s=[];return t.forEach(i=>{const o=lc(this.userId,i.path),a=IDBKeyRange.lowerBound(o),c=Hs(e).Z({range:a},(u,l,h)=>{const[d,p,g]=u,v=bn(p);d===this.userId&&i.path.isEqual(v)?r=r.add(g):h.done()});s.push(c)}),y.waitFor(s).next(()=>this.Tn(e,r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1,i=lc(this.userId,r),o=IDBKeyRange.lowerBound(i);let a=new Ie(re);return Hs(e).Z({range:o},(c,u,l)=>{const[h,d,p]=c,g=bn(d);h===this.userId&&r.isPrefixOf(g)?g.length===s&&(a=a.add(p)):l.done()}).next(()=>this.Tn(e,a))}Tn(e,t){const r=[],s=[];return t.forEach(i=>{s.push(sr(e).get(i).next(o=>{if(o===null)throw U();j(o.userId===this.userId),r.push(Jr(this.serializer,o))}))}),y.waitFor(s).next(()=>r)}removeMutationBatch(e,t){return $_(e.at,this.userId,t).next(r=>(e.addOnCommittedListener(()=>{this.En(t.batchId)}),y.forEach(r,s=>this.referenceDelegate.markPotentiallyOrphaned(e,s))))}En(e){delete this.pn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return y.resolve();const r=IDBKeyRange.lowerBound([this.userId]),s=[];return Hs(e).Z({range:r},(i,o,a)=>{if(i[0]===this.userId){const c=bn(i[1]);s.push(c)}else a.done()}).next(()=>{j(s.length===0)})})}containsKey(e,t){return q_(e,this.userId,t)}An(e){return j_(e).get(this.userId).next(t=>t||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""})}}function q_(n,e,t){const r=lc(e,t.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return Hs(n).Z({range:i,Y:!0},(a,c,u)=>{const[l,h,d]=a;l===e&&h===s&&(o=!0),u.done()}).next(()=>o)}function sr(n){return it(n,"mutations")}function Hs(n){return it(n,"documentMutations")}function j_(n){return it(n,"mutationQueues")}/**
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
 */class Ss{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new Ss(0)}static bn(){return new Ss(-1)}}/**
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
 */class ZR{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Pn(e).next(t=>{const r=new Ss(t.highestTargetId);return t.highestTargetId=r.next(),this.Vn(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.Pn(e).next(t=>z.fromTimestamp(new Pe(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.Pn(e).next(t=>t.highestListenSequenceNumber)}setTargetsMetadata(e,t,r){return this.Pn(e).next(s=>(s.highestListenSequenceNumber=t,r&&(s.lastRemoteSnapshotVersion=r.toTimestamp()),t>s.highestListenSequenceNumber&&(s.highestListenSequenceNumber=t),this.Vn(e,s)))}addTargetData(e,t){return this.Sn(e,t).next(()=>this.Pn(e).next(r=>(r.targetCount+=1,this.Dn(t,r),this.Vn(e,r))))}updateTargetData(e,t){return this.Sn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>qs(e).delete(t.targetId)).next(()=>this.Pn(e)).next(r=>(j(r.targetCount>0),r.targetCount-=1,this.Vn(e,r)))}removeTargets(e,t,r){let s=0;const i=[];return qs(e).Z((o,a)=>{const c=lo(a);c.sequenceNumber<=t&&r.get(c.targetId)===null&&(s++,i.push(this.removeTargetData(e,c)))}).next(()=>y.waitFor(i)).next(()=>s)}forEachTarget(e,t){return qs(e).Z((r,s)=>{const i=lo(s);t(i)})}Pn(e){return mg(e).get("targetGlobalKey").next(t=>(j(t!==null),t))}Vn(e,t){return mg(e).put("targetGlobalKey",t)}Sn(e,t){return qs(e).put(U_(this.serializer,t))}Dn(e,t){let r=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,r=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,r=!0),r}getTargetCount(e){return this.Pn(e).next(t=>t.targetCount)}getTargetData(e,t){const r=_s(t),s=IDBKeyRange.bound([r,Number.NEGATIVE_INFINITY],[r,Number.POSITIVE_INFINITY]);let i=null;return qs(e).Z({range:s,index:"queryTargetsIndex"},(o,a,c)=>{const u=lo(a);_a(t,u.target)&&(i=u,c.done())}).next(()=>i)}addMatchingKeys(e,t,r){const s=[],i=ur(e);return t.forEach(o=>{const a=Ct(o.path);s.push(i.put({targetId:r,path:a})),s.push(this.referenceDelegate.addReference(e,r,o))}),y.waitFor(s)}removeMatchingKeys(e,t,r){const s=ur(e);return y.forEach(t,i=>{const o=Ct(i.path);return y.waitFor([s.delete([r,o]),this.referenceDelegate.removeReference(e,r,i)])})}removeMatchingKeysForTargetId(e,t){const r=ur(e),s=IDBKeyRange.bound([t],[t+1],!1,!0);return r.delete(s)}getMatchingKeysForTargetId(e,t){const r=IDBKeyRange.bound([t],[t+1],!1,!0),s=ur(e);let i=se();return s.Z({range:r,Y:!0},(o,a,c)=>{const u=bn(o[1]),l=new P(u);i=i.add(l)}).next(()=>i)}containsKey(e,t){const r=Ct(t.path),s=IDBKeyRange.bound([r],[Uw(r)],!1,!0);let i=0;return ur(e).Z({index:"documentTargetsIndex",Y:!0,range:s},([o,a],c,u)=>{o!==0&&(i++,u.done())}).next(()=>i>0)}ne(e,t){return qs(e).get(t).next(r=>r?lo(r):null)}}function qs(n){return it(n,"targets")}function mg(n){return it(n,"targetGlobal")}function ur(n){return it(n,"targetDocuments")}/**
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
 */function gg([n,e],[t,r]){const s=re(n,t);return s===0?re(e,r):s}class eD{constructor(e){this.Cn=e,this.buffer=new Ie(gg),this.xn=0}Nn(){return++this.xn}kn(e){const t=[e,this.Nn()];if(this.buffer.size<this.Cn)this.buffer=this.buffer.add(t);else{const r=this.buffer.last();gg(t,r)<0&&(this.buffer=this.buffer.delete(r).add(t))}}get maxValue(){return this.buffer.last()[0]}}class tD{constructor(e,t,r){this.garbageCollector=e,this.asyncQueue=t,this.localStore=r,this.On=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.$n(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return this.On!==null}$n(e){S("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(t){Or(t)?S("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",t):await Pr(t)}await this.$n(3e5)})}}class nD{constructor(e,t){this.Mn=e,this.params=t}calculateTargetCount(e,t){return this.Mn.Fn(e).next(r=>Math.floor(t/100*r))}nthSequenceNumber(e,t){if(t===0)return y.resolve(Pt.ct);const r=new eD(t);return this.Mn.forEachTarget(e,s=>r.kn(s.sequenceNumber)).next(()=>this.Mn.Bn(e,s=>r.kn(s))).next(()=>r.maxValue)}removeTargets(e,t,r){return this.Mn.removeTargets(e,t,r)}removeOrphanedDocuments(e,t){return this.Mn.removeOrphanedDocuments(e,t)}collect(e,t){return this.params.cacheSizeCollectionThreshold===-1?(S("LruGarbageCollector","Garbage collection skipped; disabled"),y.resolve(pg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?(S("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),pg):this.Ln(e,t))}getCacheSize(e){return this.Mn.getCacheSize(e)}Ln(e,t){let r,s,i,o,a,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(h=>(h>this.params.maximumSequenceNumbersToCollect?(S("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${h}`),s=this.params.maximumSequenceNumbersToCollect):s=h,o=Date.now(),this.nthSequenceNumber(e,s))).next(h=>(r=h,a=Date.now(),this.removeTargets(e,r,t))).next(h=>(i=h,c=Date.now(),this.removeOrphanedDocuments(e,r))).next(h=>(u=Date.now(),Ah()<=fe.DEBUG&&S("LruGarbageCollector",`LRU Garbage Collection
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
 */class rD{constructor(e,t){this.db=e,this.garbageCollector=function(r,s){return new nD(r,s)}(this,t)}Fn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next(r=>t.next(s=>r+s))}qn(e){let t=0;return this.Bn(e,r=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Bn(e,t){return this.Un(e,(r,s)=>t(s))}addReference(e,t,r){return ec(e,r)}removeReference(e,t,r){return ec(e,r)}removeTargets(e,t,r){return this.db.getTargetCache().removeTargets(e,t,r)}markPotentiallyOrphaned(e,t){return ec(e,t)}Kn(e,t){return function(r,s){let i=!1;return j_(r).X(o=>q_(r,o,s).next(a=>(a&&(i=!0),y.resolve(!a)))).next(()=>i)}(e,t)}removeOrphanedDocuments(e,t){const r=this.db.getRemoteDocumentCache().newChangeBuffer(),s=[];let i=0;return this.Un(e,(o,a)=>{if(a<=t){const c=this.Kn(e,o).next(u=>{if(!u)return i++,r.getEntry(e,o).next(()=>(r.removeEntry(o,z.min()),ur(e).delete([0,Ct(o.path)])))});s.push(c)}}).next(()=>y.waitFor(s)).next(()=>r.apply(e)).next(()=>i)}removeTarget(e,t){const r=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,r)}updateLimboDocument(e,t){return ec(e,t)}Un(e,t){const r=ur(e);let s,i=Pt.ct;return r.Z({index:"documentTargetsIndex"},([o,a],{path:c,sequenceNumber:u})=>{o===0?(i!==Pt.ct&&t(new P(bn(s)),i),i=u,s=c):i=Pt.ct}).next(()=>{i!==Pt.ct&&t(new P(bn(s)),i)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ec(n,e){return ur(n).put(function(t,r){return{targetId:0,path:Ct(t.path),sequenceNumber:r}}(e,n.currentSequenceNumber))}/**
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
 */class z_{constructor(){this.changes=new Mr(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ke.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const r=this.changes.get(t);return r!==void 0?y.resolve(r):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 */class sD{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,r){return qr(e).put(r)}removeEntry(e,t,r){return qr(e).delete(function(s,i){const o=s.path.toArray();return[o.slice(0,o.length-2),o[o.length-2],zc(i),o[o.length-1]]}(t,r))}updateMetadata(e,t){return this.getMetadata(e).next(r=>(r.byteSize+=t,this.Gn(e,r)))}getEntry(e,t){let r=ke.newInvalidDocument(t);return qr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(eo(t))},(s,i)=>{r=this.Qn(t,i)}).next(()=>r)}zn(e,t){let r={size:0,document:ke.newInvalidDocument(t)};return qr(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(eo(t))},(s,i)=>{r={document:this.Qn(t,i),size:Gc(i)}}).next(()=>r)}getEntries(e,t){let r=Mt();return this.jn(e,t,(s,i)=>{const o=this.Qn(s,i);r=r.insert(s,o)}).next(()=>r)}Wn(e,t){let r=Mt(),s=new Ve(P.comparator);return this.jn(e,t,(i,o)=>{const a=this.Qn(i,o);r=r.insert(i,a),s=s.insert(i,Gc(o))}).next(()=>({documents:r,Hn:s}))}jn(e,t,r){if(t.isEmpty())return y.resolve();let s=new Ie(wg);t.forEach(c=>s=s.add(c));const i=IDBKeyRange.bound(eo(s.first()),eo(s.last())),o=s.getIterator();let a=o.getNext();return qr(e).Z({index:"documentKeyIndex",range:i},(c,u,l)=>{const h=P.fromSegments([...u.prefixPath,u.collectionGroup,u.documentId]);for(;a&&wg(a,h)<0;)r(a,null),a=o.getNext();a&&a.isEqual(h)&&(r(a,u),a=o.hasNext()?o.getNext():null),a?l.G(eo(a)):l.done()}).next(()=>{for(;a;)r(a,null),a=o.hasNext()?o.getNext():null})}getDocumentsMatchingQuery(e,t,r,s){const i=t.path,o=[i.popLast().toArray(),i.lastSegment(),zc(r.readTime),r.documentKey.path.isEmpty()?"":r.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return qr(e).j(IDBKeyRange.bound(o,a,!0)).next(c=>{let u=Mt();for(const l of c){const h=this.Qn(P.fromSegments(l.prefixPath.concat(l.collectionGroup,l.documentId)),l);h.isFoundDocument()&&(ba(t,h)||s.has(h.key))&&(u=u.insert(h.key,h))}return u})}getAllFromCollectionGroup(e,t,r,s){let i=Mt();const o=vg(t,r),a=vg(t,zt.max());return qr(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(o,a,!0)},(c,u,l)=>{const h=this.Qn(P.fromSegments(u.prefixPath.concat(u.collectionGroup,u.documentId)),u);i=i.insert(h.key,h),i.size===s&&l.done()}).next(()=>i)}newChangeBuffer(e){return new iD(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(t=>t.byteSize)}getMetadata(e){return yg(e).get("remoteDocumentGlobalKey").next(t=>(j(!!t),t))}Gn(e,t){return yg(e).put("remoteDocumentGlobalKey",t)}Qn(e,t){if(t){const r=jR(this.serializer,t);if(!(r.isNoDocument()&&r.version.isEqual(z.min())))return r}return ke.newInvalidDocument(e)}}function K_(n){return new sD(n)}class iD extends z_{constructor(e,t){super(),this.Jn=e,this.trackRemovals=t,this.Yn=new Mr(r=>r.toString(),(r,s)=>r.isEqual(s))}applyChanges(e){const t=[];let r=0,s=new Ie((i,o)=>re(i.canonicalString(),o.canonicalString()));return this.changes.forEach((i,o)=>{const a=this.Yn.get(i);if(t.push(this.Jn.removeEntry(e,i,a.readTime)),o.isValidDocument()){const c=sg(this.Jn.serializer,o);s=s.add(i.path.popLast());const u=Gc(c);r+=u-a.size,t.push(this.Jn.addEntry(e,i,c))}else if(r-=a.size,this.trackRemovals){const c=sg(this.Jn.serializer,o.convertToNoDocument(z.min()));t.push(this.Jn.addEntry(e,i,c))}}),s.forEach(i=>{t.push(this.Jn.indexManager.addToCollectionParentIndex(e,i))}),t.push(this.Jn.updateMetadata(e,r)),y.waitFor(t)}getFromCache(e,t){return this.Jn.zn(e,t).next(r=>(this.Yn.set(t,{size:r.size,readTime:r.document.readTime}),r.document))}getAllFromCache(e,t){return this.Jn.Wn(e,t).next(({documents:r,Hn:s})=>(s.forEach((i,o)=>{this.Yn.set(i,{size:o,readTime:r.get(i).readTime})}),r))}}function yg(n){return it(n,"remoteDocumentGlobal")}function qr(n){return it(n,"remoteDocumentsV14")}function eo(n){const e=n.path.toArray();return[e.slice(0,e.length-2),e[e.length-2],e[e.length-1]]}function vg(n,e){const t=e.documentKey.path.toArray();return[n,zc(e.readTime),t.slice(0,t.length-2),t.length>0?t[t.length-1]:""]}function wg(n,e){const t=n.path.toArray(),r=e.path.toArray();let s=0;for(let i=0;i<t.length-2&&i<r.length-2;++i)if(s=re(t[i],r[i]),s)return s;return s=re(t.length,r.length),s||(s=re(t[t.length-2],r[r.length-2]),s||re(t[t.length-1],r[r.length-1]))}/**
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
 */class oD{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}/**
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
 */class G_{constructor(e,t,r,s){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,t){let r=null;return this.documentOverlayCache.getOverlay(e,t).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,t))).next(s=>(r!==null&&Io(r.mutation,s,Ot.empty(),Pe.now()),s))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.getLocalViewOfDocuments(e,r,se()).next(()=>r))}getLocalViewOfDocuments(e,t,r=se()){const s=En();return this.populateOverlays(e,s,t).next(()=>this.computeViews(e,t,s,r).next(i=>{let o=uo();return i.forEach((a,c)=>{o=o.insert(a,c.overlayedDocument)}),o}))}getOverlayedDocuments(e,t){const r=En();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,se()))}populateOverlays(e,t,r){const s=[];return r.forEach(i=>{t.has(i)||s.push(i)}),this.documentOverlayCache.getOverlays(e,s).next(i=>{i.forEach((o,a)=>{t.set(o,a)})})}computeViews(e,t,r,s){let i=Mt();const o=_o(),a=_o();return t.forEach((c,u)=>{const l=r.get(u.key);s.has(u.key)&&(l===void 0||l.mutation instanceof Jn)?i=i.insert(u.key,u):l!==void 0?(o.set(u.key,l.mutation.getFieldMask()),Io(l.mutation,u,l.mutation.getFieldMask(),Pe.now())):o.set(u.key,Ot.empty())}),this.recalculateAndSaveOverlays(e,i).next(c=>(c.forEach((u,l)=>o.set(u,l)),t.forEach((u,l)=>{var h;return a.set(u,new oD(l,(h=o.get(u))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(e,t){const r=_o();let s=new Ve((o,a)=>o-a),i=se();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(o=>{for(const a of o)a.keys().forEach(c=>{const u=t.get(c);if(u===null)return;let l=r.get(c)||Ot.empty();l=a.applyToLocalView(u,l),r.set(c,l);const h=(s.get(a.batchId)||se()).add(c);s=s.insert(a.batchId,h)})}).next(()=>{const o=[],a=s.getReverseIterator();for(;a.hasNext();){const c=a.getNext(),u=c.key,l=c.value,h=d_();l.forEach(d=>{if(!i.has(d)){const p=__(t.get(d),r.get(d));p!==null&&h.set(d,p),i=i.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,h))}return y.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,t,r){return function(s){return P.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):nf(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,r):this.getDocumentsMatchingCollectionQuery(e,t,r)}getNextDocuments(e,t,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,r,s).next(i=>{const o=s-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,r.largestBatchId,s-i.size):y.resolve(En());let a=-1,c=i;return o.next(u=>y.forEach(u,(l,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),i.get(l)?y.resolve():this.remoteDocumentCache.getEntry(e,l).next(d=>{c=c.insert(l,d)}))).next(()=>this.populateOverlays(e,u,i)).next(()=>this.computeViews(e,c,u,se())).next(l=>({batchId:a,changes:h_(l)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new P(t)).next(r=>{let s=uo();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,t,r){const s=t.collectionGroup;let i=uo();return this.indexManager.getCollectionParents(e,s).next(o=>y.forEach(o,a=>{const c=function(u,l){return new Yn(l,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(t,a.child(s));return this.getDocumentsMatchingCollectionQuery(e,c,r).next(u=>{u.forEach((l,h)=>{i=i.insert(l,h)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,r.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,r,s))).next(i=>{s.forEach((a,c)=>{const u=c.getKey();i.get(u)===null&&(i=i.insert(u,ke.newInvalidDocument(u)))});let o=uo();return i.forEach((a,c)=>{const u=s.get(a);u!==void 0&&Io(u.mutation,c,Ot.empty(),Pe.now()),ba(t,c)&&(o=o.insert(a,c))}),o})}}/**
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
 */class aD{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return y.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var r;return this.Zn.set(t.id,{id:(r=t).id,version:r.version,createTime:Ke(r.createTime)}),y.resolve()}getNamedQuery(e,t){return y.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(r){return{name:r.name,query:lf(r.bundledQuery),readTime:Ke(r.readTime)}}(t)),y.resolve()}}/**
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
 */class cD{constructor(){this.overlays=new Ve(P.comparator),this.ts=new Map}getOverlay(e,t){return y.resolve(this.overlays.get(t))}getOverlays(e,t){const r=En();return y.forEach(t,s=>this.getOverlay(e,s).next(i=>{i!==null&&r.set(s,i)})).next(()=>r)}saveOverlays(e,t,r){return r.forEach((s,i)=>{this.re(e,t,i)}),y.resolve()}removeOverlaysForBatchId(e,t,r){const s=this.ts.get(r);return s!==void 0&&(s.forEach(i=>this.overlays=this.overlays.remove(i)),this.ts.delete(r)),y.resolve()}getOverlaysForCollection(e,t,r){const s=En(),i=t.length+1,o=new P(t.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const c=a.getNext().value,u=c.getKey();if(!t.isPrefixOf(u.path))break;u.path.length===i&&c.largestBatchId>r&&s.set(c.getKey(),c)}return y.resolve(s)}getOverlaysForCollectionGroup(e,t,r,s){let i=new Ve((u,l)=>u-l);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===t&&u.largestBatchId>r){let l=i.get(u.largestBatchId);l===null&&(l=En(),i=i.insert(u.largestBatchId,l)),l.set(u.getKey(),u)}}const a=En(),c=i.getIterator();for(;c.hasNext()&&(c.getNext().value.forEach((u,l)=>a.set(u,l)),!(a.size()>=s)););return y.resolve(a)}re(e,t,r){const s=this.overlays.get(r.key);if(s!==null){const o=this.ts.get(s.largestBatchId).delete(r.key);this.ts.set(s.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new af(t,r));let i=this.ts.get(t);i===void 0&&(i=se(),this.ts.set(t,i)),this.ts.set(t,i.add(r.key))}}/**
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
 */class ff{constructor(){this.es=new Ie(Ze.ns),this.ss=new Ie(Ze.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){const r=new Ze(e,t);this.es=this.es.add(r),this.ss=this.ss.add(r)}os(e,t){e.forEach(r=>this.addReference(r,t))}removeReference(e,t){this.us(new Ze(e,t))}cs(e,t){e.forEach(r=>this.removeReference(r,t))}hs(e){const t=new P(new le([])),r=new Ze(t,e),s=new Ze(t,e+1),i=[];return this.ss.forEachInRange([r,s],o=>{this.us(o),i.push(o.key)}),i}ls(){this.es.forEach(e=>this.us(e))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new P(new le([])),r=new Ze(t,e),s=new Ze(t,e+1);let i=se();return this.ss.forEachInRange([r,s],o=>{i=i.add(o.key)}),i}containsKey(e){const t=new Ze(e,0),r=this.es.firstAfterOrEqual(t);return r!==null&&e.isEqual(r.key)}}class Ze{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return P.comparator(e.key,t.key)||re(e.ds,t.ds)}static rs(e,t){return re(e.ds,t.ds)||P.comparator(e.key,t.key)}}/**
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
 */class uD{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new Ie(Ze.ns)}checkEmpty(e){return y.resolve(this.mutationQueue.length===0)}addMutationBatch(e,t,r,s){const i=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new sf(i,t,r,s);this.mutationQueue.push(o);for(const a of s)this._s=this._s.add(new Ze(a.key,i)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return y.resolve(o)}lookupMutationBatch(e,t){return y.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const r=t+1,s=this.ys(r),i=s<0?0:s;return y.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return y.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return y.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const r=new Ze(t,0),s=new Ze(t,Number.POSITIVE_INFINITY),i=[];return this._s.forEachInRange([r,s],o=>{const a=this.gs(o.ds);i.push(a)}),y.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let r=new Ie(re);return t.forEach(s=>{const i=new Ze(s,0),o=new Ze(s,Number.POSITIVE_INFINITY);this._s.forEachInRange([i,o],a=>{r=r.add(a.ds)})}),y.resolve(this.ps(r))}getAllMutationBatchesAffectingQuery(e,t){const r=t.path,s=r.length+1;let i=r;P.isDocumentKey(i)||(i=i.child(""));const o=new Ze(new P(i),0);let a=new Ie(re);return this._s.forEachWhile(c=>{const u=c.key.path;return!!r.isPrefixOf(u)&&(u.length===s&&(a=a.add(c.ds)),!0)},o),y.resolve(this.ps(a))}ps(e){const t=[];return e.forEach(r=>{const s=this.gs(r);s!==null&&t.push(s)}),t}removeMutationBatch(e,t){j(this.Is(t.batchId,"removed")===0),this.mutationQueue.shift();let r=this._s;return y.forEach(t.mutations,s=>{const i=new Ze(s.key,t.batchId);return r=r.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this._s=r})}En(e){}containsKey(e,t){const r=new Ze(t,0),s=this._s.firstAfterOrEqual(r);return y.resolve(t.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,y.resolve()}Is(e,t){return this.ys(e)}ys(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}/**
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
 */class lD{constructor(e){this.Ts=e,this.docs=new Ve(P.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const r=t.key,s=this.docs.get(r),i=s?s.size:0,o=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.mutableCopy(),size:o}),this.size+=o-i,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const r=this.docs.get(t);return y.resolve(r?r.document.mutableCopy():ke.newInvalidDocument(t))}getEntries(e,t){let r=Mt();return t.forEach(s=>{const i=this.docs.get(s);r=r.insert(s,i?i.document.mutableCopy():ke.newInvalidDocument(s))}),y.resolve(r)}getDocumentsMatchingQuery(e,t,r,s){let i=Mt();const o=t.path,a=new P(o.child("")),c=this.docs.getIteratorFrom(a);for(;c.hasNext();){const{key:u,value:{document:l}}=c.getNext();if(!o.isPrefixOf(u.path))break;u.path.length>o.length+1||Jd($w(l),r)<=0||(s.has(l.key)||ba(t,l))&&(i=i.insert(l.key,l.mutableCopy()))}return y.resolve(i)}getAllFromCollectionGroup(e,t,r,s){U()}Es(e,t){return y.forEach(this.docs,r=>t(r))}newChangeBuffer(e){return new hD(this)}getSize(e){return y.resolve(this.size)}}class hD extends z_{constructor(e){super(),this.Jn=e}applyChanges(e){const t=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?t.push(this.Jn.addEntry(e,s)):this.Jn.removeEntry(r)}),y.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}/**
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
 */class dD{constructor(e){this.persistence=e,this.As=new Mr(t=>_s(t),_a),this.lastRemoteSnapshotVersion=z.min(),this.highestTargetId=0,this.Rs=0,this.vs=new ff,this.targetCount=0,this.bs=Ss.vn()}forEachTarget(e,t){return this.As.forEach((r,s)=>t(s)),y.resolve()}getLastRemoteSnapshotVersion(e){return y.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return y.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),y.resolve(this.highestTargetId)}setTargetsMetadata(e,t,r){return r&&(this.lastRemoteSnapshotVersion=r),t>this.Rs&&(this.Rs=t),y.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new Ss(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,y.resolve()}updateTargetData(e,t){return this.Sn(t),y.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,y.resolve()}removeTargets(e,t,r){let s=0;const i=[];return this.As.forEach((o,a)=>{a.sequenceNumber<=t&&r.get(a.targetId)===null&&(this.As.delete(o),i.push(this.removeMatchingKeysForTargetId(e,a.targetId)),s++)}),y.waitFor(i).next(()=>s)}getTargetCount(e){return y.resolve(this.targetCount)}getTargetData(e,t){const r=this.As.get(t)||null;return y.resolve(r)}addMatchingKeys(e,t,r){return this.vs.os(t,r),y.resolve()}removeMatchingKeys(e,t,r){this.vs.cs(t,r);const s=this.persistence.referenceDelegate,i=[];return s&&t.forEach(o=>{i.push(s.markPotentiallyOrphaned(e,o))}),y.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),y.resolve()}getMatchingKeysForTargetId(e,t){const r=this.vs.fs(t);return y.resolve(r)}containsKey(e,t){return y.resolve(this.vs.containsKey(t))}}/**
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
 */class H_{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new Pt(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new dD(this),this.indexManager=new JR,this.remoteDocumentCache=function(r){return new lD(r)}(r=>this.referenceDelegate.Cs(r)),this.serializer=new F_(t),this.xs=new aD(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new cD,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let r=this.Ps[e.toKey()];return r||(r=new uD(t,this.referenceDelegate),this.Ps[e.toKey()]=r),r}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,r){S("MemoryPersistence","Starting transaction:",e);const s=new fD(this.Vs.next());return this.referenceDelegate.Ns(),r(s).next(i=>this.referenceDelegate.ks(s).next(()=>i)).toPromise().then(i=>(s.raiseOnCommittedEvent(),i))}Os(e,t){return y.or(Object.values(this.Ps).map(r=>()=>r.containsKey(e,t)))}}class fD extends jw{constructor(e){super(),this.currentSequenceNumber=e}}class qu{constructor(e){this.persistence=e,this.$s=new ff,this.Ms=null}static Fs(e){return new qu(e)}get Bs(){if(this.Ms)return this.Ms;throw U()}addReference(e,t,r){return this.$s.addReference(r,t),this.Bs.delete(r.toString()),y.resolve()}removeReference(e,t,r){return this.$s.removeReference(r,t),this.Bs.add(r.toString()),y.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),y.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach(s=>this.Bs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,t.targetId).next(s=>{s.forEach(i=>this.Bs.add(i.toString()))}).next(()=>r.removeTargetData(e,t))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return y.forEach(this.Bs,r=>{const s=P.fromPath(r);return this.Ls(e,s).next(i=>{i||t.removeEntry(s,z.min())})}).next(()=>(this.Ms=null,t.apply(e)))}updateLimboDocument(e,t){return this.Ls(e,t).next(r=>{r?this.Bs.delete(t.toString()):this.Bs.add(t.toString())})}Cs(e){return 0}Ls(e,t){return y.or([()=>y.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}/**
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
 */class pD{constructor(e){this.serializer=e}M(e,t,r,s){const i=new Mu("createOrUpgrade",t);r<1&&s>=1&&(function(a){a.createObjectStore("owner")}(e),function(a){a.createObjectStore("mutationQueues",{keyPath:"userId"}),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Fm,{unique:!0}),a.createObjectStore("documentMutations")}(e),_g(e),function(a){a.createObjectStore("remoteDocuments")}(e));let o=y.resolve();return r<3&&s>=3&&(r!==0&&(function(a){a.deleteObjectStore("targetDocuments"),a.deleteObjectStore("targets"),a.deleteObjectStore("targetGlobal")}(e),_g(e)),o=o.next(()=>function(a){const c=a.store("targetGlobal"),u={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:z.min().toTimestamp(),targetCount:0};return c.put("targetGlobalKey",u)}(i))),r<4&&s>=4&&(r!==0&&(o=o.next(()=>function(a,c){return c.store("mutations").j().next(u=>{a.deleteObjectStore("mutations"),a.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",Fm,{unique:!0});const l=c.store("mutations"),h=u.map(d=>l.put(d));return y.waitFor(h)})}(e,i))),o=o.next(()=>{(function(a){a.createObjectStore("clientMetadata",{keyPath:"clientId"})})(e)})),r<5&&s>=5&&(o=o.next(()=>this.qs(i))),r<6&&s>=6&&(o=o.next(()=>(function(a){a.createObjectStore("remoteDocumentGlobal")}(e),this.Us(i)))),r<7&&s>=7&&(o=o.next(()=>this.Ks(i))),r<8&&s>=8&&(o=o.next(()=>this.Gs(e,i))),r<9&&s>=9&&(o=o.next(()=>{(function(a){a.objectStoreNames.contains("remoteDocumentChanges")&&a.deleteObjectStore("remoteDocumentChanges")})(e)})),r<10&&s>=10&&(o=o.next(()=>this.Qs(i))),r<11&&s>=11&&(o=o.next(()=>{(function(a){a.createObjectStore("bundles",{keyPath:"bundleId"})})(e),function(a){a.createObjectStore("namedQueries",{keyPath:"name"})}(e)})),r<12&&s>=12&&(o=o.next(()=>{(function(a){const c=a.createObjectStore("documentOverlays",{keyPath:Xk});c.createIndex("collectionPathOverlayIndex",Zk,{unique:!1}),c.createIndex("collectionGroupOverlayIndex",eR,{unique:!1})})(e)})),r<13&&s>=13&&(o=o.next(()=>function(a){const c=a.createObjectStore("remoteDocumentsV14",{keyPath:$k});c.createIndex("documentKeyIndex",qk),c.createIndex("collectionGroupIndex",jk)}(e)).next(()=>this.zs(e,i)).next(()=>e.deleteObjectStore("remoteDocuments"))),r<14&&s>=14&&(o=o.next(()=>this.js(e,i))),r<15&&s>=15&&(o=o.next(()=>function(a){a.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),a.createObjectStore("indexState",{keyPath:Wk}).createIndex("sequenceNumberIndex",Qk,{unique:!1}),a.createObjectStore("indexEntries",{keyPath:Yk}).createIndex("documentKeyIndex",Jk,{unique:!1})}(e))),o}Us(e){let t=0;return e.store("remoteDocuments").Z((r,s)=>{t+=Gc(s)}).next(()=>{const r={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",r)})}qs(e){const t=e.store("mutationQueues"),r=e.store("mutations");return t.j().next(s=>y.forEach(s,i=>{const o=IDBKeyRange.bound([i.userId,-1],[i.userId,i.lastAcknowledgedBatchId]);return r.j("userMutationsIndex",o).next(a=>y.forEach(a,c=>{j(c.userId===i.userId);const u=Jr(this.serializer,c);return $_(e,i.userId,u).next(()=>{})}))}))}Ks(e){const t=e.store("targetDocuments"),r=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next(s=>{const i=[];return r.Z((o,a)=>{const c=new le(o),u=function(l){return[0,Ct(l)]}(c);i.push(t.get(u).next(l=>l?y.resolve():(h=>t.put({targetId:0,path:Ct(h),sequenceNumber:s.highestListenSequenceNumber}))(c)))}).next(()=>y.waitFor(i))})}Gs(e,t){e.createObjectStore("collectionParents",{keyPath:Hk});const r=t.store("collectionParents"),s=new df,i=o=>{if(s.add(o)){const a=o.lastSegment(),c=o.popLast();return r.put({collectionId:a,parent:Ct(c)})}};return t.store("remoteDocuments").Z({Y:!0},(o,a)=>{const c=new le(o);return i(c.popLast())}).next(()=>t.store("documentMutations").Z({Y:!0},([o,a,c],u)=>{const l=bn(a);return i(l.popLast())}))}Qs(e){const t=e.store("targets");return t.Z((r,s)=>{const i=lo(s),o=U_(this.serializer,i);return t.put(o)})}zs(e,t){const r=t.store("remoteDocuments"),s=[];return r.Z((i,o)=>{const a=t.store("remoteDocumentsV14"),c=(u=o,u.document?new P(le.fromString(u.document.name).popFirst(5)):u.noDocument?P.fromSegments(u.noDocument.path):u.unknownDocument?P.fromSegments(u.unknownDocument.path):U()).path.toArray();var u;/**
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
*/const l={prefixPath:c.slice(0,c.length-2),collectionGroup:c[c.length-2],documentId:c[c.length-1],readTime:o.readTime||[0,0],unknownDocument:o.unknownDocument,noDocument:o.noDocument,document:o.document,hasCommittedMutations:!!o.hasCommittedMutations};s.push(a.put(l))}).next(()=>y.waitFor(s))}js(e,t){const r=t.store("mutations"),s=K_(this.serializer),i=new H_(qu.Fs,this.serializer.se);return r.j().next(o=>{const a=new Map;return o.forEach(c=>{var u;let l=(u=a.get(c.userId))!==null&&u!==void 0?u:se();Jr(this.serializer,c).keys().forEach(h=>l=l.add(h)),a.set(c.userId,l)}),y.forEach(a,(c,u)=>{const l=new et(u),h=Bu.ie(this.serializer,l),d=i.getIndexManager(l),p=$u.ie(l,this.serializer,d,i.referenceDelegate);return new G_(s,p,h,d).recalculateAndSaveOverlaysForDocumentKeys(new kh(t,Pt.ct),c).next()})})}}function _g(n){n.createObjectStore("targetDocuments",{keyPath:Kk}).createIndex("documentTargetsIndex",Gk,{unique:!0}),n.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",zk,{unique:!0}),n.createObjectStore("targetGlobal")}const Vl="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class pf{constructor(e,t,r,s,i,o,a,c,u,l,h=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=r,this.Ws=i,this.window=o,this.document=a,this.Hs=u,this.Js=l,this.Ys=h,this.Vs=null,this.Ss=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.Xs=null,this.ti=null,this.ei=Number.NEGATIVE_INFINITY,this.ni=d=>Promise.resolve(),!pf.D())throw new E(w.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new rD(this,s),this.si=t+"main",this.serializer=new F_(c),this.ii=new on(this.si,this.Ys,new pD(this.serializer)),this.Ds=new ZR(this.referenceDelegate,this.serializer),this.remoteDocumentCache=K_(this.serializer),this.xs=new zR,this.window&&this.window.localStorage?this.ri=this.window.localStorage:(this.ri=null,l===!1&&je("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.oi().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new E(w.FAILED_PRECONDITION,Vl);return this.ui(),this.ci(),this.ai(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.Ds.getHighestSequenceNumber(e))}).then(e=>{this.Vs=new Pt(e,this.Hs)}).then(()=>{this.Ss=!0}).catch(e=>(this.ii&&this.ii.close(),Promise.reject(e)))}hi(e){return this.ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ii.B(async t=>{t.newVersion===null&&await e()})}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ws.enqueueAndForget(async()=>{this.started&&await this.oi()}))}oi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>tc(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.li(e).next(t=>{t||(this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)))})}).next(()=>this.fi(e)).next(t=>this.isPrimary&&!t?this.di(e).next(()=>!1):!!t&&this.wi(e).next(()=>!0))).catch(e=>{if(Or(e))return S("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return S("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Ws.enqueueRetryable(()=>this.ni(e)),this.isPrimary=e})}li(e){return to(e).get("owner").next(t=>y.resolve(this._i(t)))}mi(e){return tc(e).delete(this.clientId)}async gi(){if(this.isPrimary&&!this.yi(this.ei,18e5)){this.ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",t=>{const r=it(t,"clientMetadata");return r.j().next(s=>{const i=this.pi(s,18e5),o=s.filter(a=>i.indexOf(a)===-1);return y.forEach(o,a=>r.delete(a.clientId)).next(()=>o)})}).catch(()=>[]);if(this.ri)for(const t of e)this.ri.removeItem(this.Ii(t.clientId))}}ai(){this.ti=this.Ws.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.oi().then(()=>this.gi()).then(()=>this.ai()))}_i(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.Js?y.resolve(!0):to(e).get("owner").next(t=>{if(t!==null&&this.yi(t.leaseTimestampMs,5e3)&&!this.Ti(t.ownerId)){if(this._i(t)&&this.networkEnabled)return!0;if(!this._i(t)){if(!t.allowTabSynchronization)throw new E(w.FAILED_PRECONDITION,Vl);return!1}}return!(!this.networkEnabled||!this.inForeground)||tc(e).j().next(r=>this.pi(r,5e3).find(s=>{if(this.clientId!==s.clientId){const i=!this.networkEnabled&&s.networkEnabled,o=!this.inForeground&&s.inForeground,a=this.networkEnabled===s.networkEnabled;if(i||o&&a)return!0}return!1})===void 0)}).next(t=>(this.isPrimary!==t&&S("IndexedDbPersistence",`Client ${t?"is":"is not"} eligible for a primary lease.`),t))}async shutdown(){this.Ss=!1,this.Ei(),this.ti&&(this.ti.cancel(),this.ti=null),this.Ai(),this.Ri(),await this.ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],e=>{const t=new kh(e,Pt.ct);return this.di(t).next(()=>this.mi(t))}),this.ii.close(),this.vi()}pi(e,t){return e.filter(r=>this.yi(r.updateTimeMs,t)&&!this.Ti(r.clientId))}bi(){return this.runTransaction("getActiveClients","readonly",e=>tc(e).j().next(t=>this.pi(t,18e5).map(r=>r.clientId)))}get started(){return this.Ss}getMutationQueue(e,t){return $u.ie(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new XR(e,this.serializer.se.databaseId)}getDocumentOverlayCache(e){return Bu.ie(this.serializer,e)}getBundleCache(){return this.xs}runTransaction(e,t,r){S("IndexedDbPersistence","Starting transaction:",e);const s=t==="readonly"?"readonly":"readwrite",i=(o=this.Ys)===15?nR:o===14?Ww:o===13?Hw:o===12?tR:o===11?Gw:void U();var o;let a;return this.ii.runTransaction(e,s,i,c=>(a=new kh(c,this.Vs?this.Vs.next():Pt.ct),t==="readwrite-primary"?this.li(a).next(u=>!!u||this.fi(a)).next(u=>{if(!u)throw je(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ws.enqueueRetryable(()=>this.ni(!1)),new E(w.FAILED_PRECONDITION,qw);return r(a)}).next(u=>this.wi(a).next(()=>u)):this.Pi(a).next(()=>r(a)))).then(c=>(a.raiseOnCommittedEvent(),c))}Pi(e){return to(e).get("owner").next(t=>{if(t!==null&&this.yi(t.leaseTimestampMs,5e3)&&!this.Ti(t.ownerId)&&!this._i(t)&&!(this.Js||this.allowTabSynchronization&&t.allowTabSynchronization))throw new E(w.FAILED_PRECONDITION,Vl)})}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return to(e).put("owner",t)}static D(){return on.D()}di(e){const t=to(e);return t.get("owner").next(r=>this._i(r)?(S("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):y.resolve())}yi(e,t){const r=Date.now();return!(e<r-t)&&(!(e>r)||(je(`Detected an update time that is in the future: ${e} > ${r}`),!1))}ui(){this.document!==null&&typeof this.document.addEventListener=="function"&&(this.Xs=()=>{this.Ws.enqueueAndForget(()=>(this.inForeground=this.document.visibilityState==="visible",this.oi()))},this.document.addEventListener("visibilitychange",this.Xs),this.inForeground=this.document.visibilityState==="visible")}Ai(){this.Xs&&(this.document.removeEventListener("visibilitychange",this.Xs),this.Xs=null)}ci(){var e;typeof((e=this.window)===null||e===void 0?void 0:e.addEventListener)=="function"&&(this.Zs=()=>{this.Ei();const t=/(?:Version|Mobile)\/1[456]/;QS()&&(navigator.appVersion.match(t)||navigator.userAgent.match(t))&&this.Ws.enterRestrictedMode(!0),this.Ws.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Zs))}Ri(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ti(e){var t;try{const r=((t=this.ri)===null||t===void 0?void 0:t.getItem(this.Ii(e)))!==null;return S("IndexedDbPersistence",`Client '${e}' ${r?"is":"is not"} zombied in LocalStorage`),r}catch(r){return je("IndexedDbPersistence","Failed to get zombied client id.",r),!1}}Ei(){if(this.ri)try{this.ri.setItem(this.Ii(this.clientId),String(Date.now()))}catch(e){je("Failed to set zombie client id.",e)}}vi(){if(this.ri)try{this.ri.removeItem(this.Ii(this.clientId))}catch{}}Ii(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function to(n){return it(n,"owner")}function tc(n){return it(n,"clientMetadata")}function mf(n,e){let t=n.projectId;return n.isDefaultDatabase||(t+="."+n.database),"firestore/"+e+"/"+t+"/"}/**
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
 */class gf{constructor(e,t,r,s){this.targetId=e,this.fromCache=t,this.Vi=r,this.Si=s}static Di(e,t){let r=se(),s=se();for(const i of t.docChanges)switch(i.type){case 0:r=r.add(i.doc.key);break;case 1:s=s.add(i.doc.key)}return new gf(e,t.fromCache,r,s)}}/**
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
 */class W_{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,r,s){return this.Ni(e,t).next(i=>i||this.ki(e,t,s,r)).next(i=>i||this.Oi(e,t))}Ni(e,t){if(Qm(t))return y.resolve(null);let r=Ft(t);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(t.limit!==null&&s===1&&(t=jc(t,null,"F"),r=Ft(t)),this.indexManager.getDocumentsMatchingTarget(e,r).next(i=>{const o=se(...i);return this.xi.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(c=>{const u=this.$i(t,a);return this.Mi(t,u,o,c.readTime)?this.Ni(e,jc(t,null,"F")):this.Fi(e,u,t,c)}))})))}ki(e,t,r,s){return Qm(t)||s.isEqual(z.min())?this.Oi(e,t):this.xi.getDocuments(e,r).next(i=>{const o=this.$i(t,i);return this.Mi(t,o,r,s)?this.Oi(e,t):(Ah()<=fe.DEBUG&&S("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Mh(t)),this.Fi(e,o,t,Bw(s,-1)))})}$i(e,t){let r=new Ie(u_(e));return t.forEach((s,i)=>{ba(e,i)&&(r=r.add(i))}),r}Mi(e,t,r,s){if(e.limit===null)return!1;if(r.size!==t.size)return!0;const i=e.limitType==="F"?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(s)>0)}Oi(e,t){return Ah()<=fe.DEBUG&&S("QueryEngine","Using full collection scan to execute query:",Mh(t)),this.xi.getDocumentsMatchingQuery(e,t,zt.min())}Fi(e,t,r,s){return this.xi.getDocumentsMatchingQuery(e,r,s).next(i=>(t.forEach(o=>{i=i.insert(o.key,o)}),i))}}/**
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
 */class mD{constructor(e,t,r,s){this.persistence=e,this.Bi=t,this.serializer=s,this.Li=new Ve(re),this.qi=new Mr(i=>_s(i),_a),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(r)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new G_(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Li))}}function Q_(n,e,t,r){return new mD(n,e,t,r)}async function Y_(n,e){const t=M(n);return await t.persistence.runTransaction("Handle user change","readonly",r=>{let s;return t.mutationQueue.getAllMutationBatches(r).next(i=>(s=i,t.Gi(e),t.mutationQueue.getAllMutationBatches(r))).next(i=>{const o=[],a=[];let c=se();for(const u of s){o.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}for(const u of i){a.push(u.batchId);for(const l of u.mutations)c=c.add(l.key)}return t.localDocuments.getDocuments(r,c).next(u=>({Qi:u,removedBatchIds:o,addedBatchIds:a}))})})}function gD(n,e){const t=M(n);return t.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),i=t.Ki.newChangeBuffer({trackRemovals:!0});return function(o,a,c,u){const l=c.batch,h=l.keys();let d=y.resolve();return h.forEach(p=>{d=d.next(()=>u.getEntry(a,p)).next(g=>{const v=c.docVersions.get(p);j(v!==null),g.version.compareTo(v)<0&&(l.applyToRemoteDocument(g,c),g.isValidDocument()&&(g.setReadTime(c.commitVersion),u.addEntry(g)))})}),d.next(()=>o.mutationQueue.removeMutationBatch(a,l))}(t,r,e,i).next(()=>i.apply(r)).next(()=>t.mutationQueue.performConsistencyCheck(r)).next(()=>t.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>t.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=se();for(let c=0;c<o.mutationResults.length;++c)o.mutationResults[c].transformResults.length>0&&(a=a.add(o.batch.mutations[c].key));return a}(e))).next(()=>t.localDocuments.getDocuments(r,s))})}function J_(n){const e=M(n);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.Ds.getLastRemoteSnapshotVersion(t))}function yD(n,e){const t=M(n),r=e.snapshotVersion;let s=t.Li;return t.persistence.runTransaction("Apply remote event","readwrite-primary",i=>{const o=t.Ki.newChangeBuffer({trackRemovals:!0});s=t.Li;const a=[];e.targetChanges.forEach((l,h)=>{const d=s.get(h);if(!d)return;a.push(t.Ds.removeMatchingKeys(i,l.removedDocuments,h).next(()=>t.Ds.addMatchingKeys(i,l.addedDocuments,h)));let p=d.withSequenceNumber(i.currentSequenceNumber);e.targetMismatches.has(h)?p=p.withResumeToken(Je.EMPTY_BYTE_STRING,z.min()).withLastLimboFreeSnapshotVersion(z.min()):l.resumeToken.approximateByteSize()>0&&(p=p.withResumeToken(l.resumeToken,r)),s=s.insert(h,p),function(g,v,A){return g.resumeToken.approximateByteSize()===0||v.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:A.addedDocuments.size+A.modifiedDocuments.size+A.removedDocuments.size>0}(d,p,l)&&a.push(t.Ds.updateTargetData(i,p))});let c=Mt(),u=se();if(e.documentUpdates.forEach(l=>{e.resolvedLimboDocuments.has(l)&&a.push(t.persistence.referenceDelegate.updateLimboDocument(i,l))}),a.push(X_(i,o,e.documentUpdates).next(l=>{c=l.zi,u=l.ji})),!r.isEqual(z.min())){const l=t.Ds.getLastRemoteSnapshotVersion(i).next(h=>t.Ds.setTargetsMetadata(i,i.currentSequenceNumber,r));a.push(l)}return y.waitFor(a).next(()=>o.apply(i)).next(()=>t.localDocuments.getLocalViewOfDocuments(i,c,u)).next(()=>c)}).then(i=>(t.Li=s,i))}function X_(n,e,t){let r=se(),s=se();return t.forEach(i=>r=r.add(i)),e.getEntries(n,r).next(i=>{let o=Mt();return t.forEach((a,c)=>{const u=i.get(a);c.isFoundDocument()!==u.isFoundDocument()&&(s=s.add(a)),c.isNoDocument()&&c.version.isEqual(z.min())?(e.removeEntry(a,c.readTime),o=o.insert(a,c)):!u.isValidDocument()||c.version.compareTo(u.version)>0||c.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(c),o=o.insert(a,c)):S("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",c.version)}),{zi:o,ji:s}})}function vD(n,e){const t=M(n);return t.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),t.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function vi(n,e){const t=M(n);return t.persistence.runTransaction("Allocate target","readwrite",r=>{let s;return t.Ds.getTargetData(r,e).next(i=>i?(s=i,y.resolve(s)):t.Ds.allocateTargetId(r).next(o=>(s=new gr(e,o,0,r.currentSequenceNumber),t.Ds.addTargetData(r,s).next(()=>s))))}).then(r=>{const s=t.Li.get(r.targetId);return(s===null||r.snapshotVersion.compareTo(s.snapshotVersion)>0)&&(t.Li=t.Li.insert(r.targetId,r),t.qi.set(e,r.targetId)),r})}async function wi(n,e,t){const r=M(n),s=r.Li.get(e),i=t?"readwrite":"readwrite-primary";try{t||await r.persistence.runTransaction("Release target",i,o=>r.persistence.referenceDelegate.removeTarget(o,s))}catch(o){if(!Or(o))throw o;S("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.Li=r.Li.remove(e),r.qi.delete(s.target)}function Hc(n,e,t){const r=M(n);let s=z.min(),i=se();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,c,u){const l=M(a),h=l.qi.get(u);return h!==void 0?y.resolve(l.Li.get(h)):l.Ds.getTargetData(c,u)}(r,o,Ft(e)).next(a=>{if(a)return s=a.lastLimboFreeSnapshotVersion,r.Ds.getMatchingKeysForTargetId(o,a.targetId).next(c=>{i=c})}).next(()=>r.Bi.getDocumentsMatchingQuery(o,e,t?s:z.min(),t?i:se())).next(a=>(tI(r,c_(e),a),{documents:a,Wi:i})))}function Z_(n,e){const t=M(n),r=M(t.Ds),s=t.Li.get(e);return s?Promise.resolve(s.target):t.persistence.runTransaction("Get target data","readonly",i=>r.ne(i,e).next(o=>o?o.target:null))}function eI(n,e){const t=M(n),r=t.Ui.get(e)||z.min();return t.persistence.runTransaction("Get new document changes","readonly",s=>t.Ki.getAllFromCollectionGroup(s,e,Bw(r,-1),Number.MAX_SAFE_INTEGER)).then(s=>(tI(t,e,s),s))}function tI(n,e,t){let r=n.Ui.get(e)||z.min();t.forEach((s,i)=>{i.readTime.compareTo(r)>0&&(r=i.readTime)}),n.Ui.set(e,r)}async function wD(n,e,t,r){const s=M(n);let i=se(),o=Mt();for(const u of t){const l=e.Hi(u.metadata.name);u.document&&(i=i.add(l));const h=e.Ji(u);h.setReadTime(e.Yi(u.metadata.readTime)),o=o.insert(l,h)}const a=s.Ki.newChangeBuffer({trackRemovals:!0}),c=await vi(s,function(u){return Ft(Mi(le.fromString(`__bundle__/docs/${u}`)))}(r));return s.persistence.runTransaction("Apply bundle documents","readwrite",u=>X_(u,a,o).next(l=>(a.apply(u),l)).next(l=>s.Ds.removeMatchingKeysForTargetId(u,c.targetId).next(()=>s.Ds.addMatchingKeys(u,i,c.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(u,l.zi,l.ji)).next(()=>l.zi)))}async function _D(n,e,t=se()){const r=await vi(n,Ft(lf(e.bundledQuery))),s=M(n);return s.persistence.runTransaction("Save named query","readwrite",i=>{const o=Ke(e.readTime);if(r.snapshotVersion.compareTo(o)>=0)return s.xs.saveNamedQuery(i,e);const a=r.withResumeToken(Je.EMPTY_BYTE_STRING,o);return s.Li=s.Li.insert(a.targetId,a),s.Ds.updateTargetData(i,a).next(()=>s.Ds.removeMatchingKeysForTargetId(i,r.targetId)).next(()=>s.Ds.addMatchingKeys(i,t,r.targetId)).next(()=>s.xs.saveNamedQuery(i,e))})}function Ig(n,e){return`firestore_clients_${n}_${e}`}function bg(n,e,t){let r=`firestore_mutations_${n}_${t}`;return e.isAuthenticated()&&(r+=`_${e.uid}`),r}function Bl(n,e){return`firestore_targets_${n}_${e}`}class Wc{constructor(e,t,r,s){this.user=e,this.batchId=t,this.state=r,this.error=s}static Zi(e,t,r){const s=JSON.parse(r);let i,o=typeof s=="object"&&["pending","acknowledged","rejected"].indexOf(s.state)!==-1&&(s.error===void 0||typeof s.error=="object");return o&&s.error&&(o=typeof s.error.message=="string"&&typeof s.error.code=="string",o&&(i=new E(s.error.code,s.error.message))),o?new Wc(e,t,s.state,i):(je("SharedClientState",`Failed to parse mutation state for ID '${t}': ${r}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class bo{constructor(e,t,r){this.targetId=e,this.state=t,this.error=r}static Zi(e,t){const r=JSON.parse(t);let s,i=typeof r=="object"&&["not-current","current","rejected"].indexOf(r.state)!==-1&&(r.error===void 0||typeof r.error=="object");return i&&r.error&&(i=typeof r.error.message=="string"&&typeof r.error.code=="string",i&&(s=new E(r.error.code,r.error.message))),i?new bo(e,r.state,s):(je("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class Qc{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const r=JSON.parse(t);let s=typeof r=="object"&&r.activeTargetIds instanceof Array,i=Fu();for(let o=0;s&&o<r.activeTargetIds.length;++o)s=zw(r.activeTargetIds[o]),i=i.add(r.activeTargetIds[o]);return s?new Qc(e,i):(je("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class yf{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return typeof t=="object"&&["Unknown","Online","Offline"].indexOf(t.onlineState)!==-1&&typeof t.clientId=="string"?new yf(t.clientId,t.onlineState):(je("SharedClientState",`Failed to parse online state: ${e}`),null)}}class $h{constructor(){this.activeTargetIds=Fu()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class $l{constructor(e,t,r,s,i){this.window=e,this.Ws=t,this.persistenceKey=r,this.nr=s,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.sr=this.ir.bind(this),this.rr=new Ve(re),this.started=!1,this.ur=[];const o=r.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=i,this.cr=Ig(this.persistenceKey,this.nr),this.ar=function(a){return`firestore_sequence_number_${a}`}(this.persistenceKey),this.rr=this.rr.insert(this.nr,new $h),this.hr=new RegExp(`^firestore_clients_${o}_([^_]*)$`),this.lr=new RegExp(`^firestore_mutations_${o}_(\\d+)(?:_(.*))?$`),this.dr=new RegExp(`^firestore_targets_${o}_(\\d+)$`),this.wr=function(a){return`firestore_online_state_${a}`}(this.persistenceKey),this._r=function(a){return`firestore_bundle_loaded_v2_${a}`}(this.persistenceKey),this.window.addEventListener("storage",this.sr)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.bi();for(const r of e){if(r===this.nr)continue;const s=this.getItem(Ig(this.persistenceKey,r));if(s){const i=Qc.Zi(r,s);i&&(this.rr=this.rr.insert(i.clientId,i))}}this.mr();const t=this.storage.getItem(this.wr);if(t){const r=this.gr(t);r&&this.yr(r)}for(const r of this.ur)this.ir(r);this.ur=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.ar,JSON.stringify(e))}getAllActiveQueryTargets(){return this.pr(this.rr)}isActiveQueryTarget(e){let t=!1;return this.rr.forEach((r,s)=>{s.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.Ir(e,"pending")}updateMutationState(e,t,r){this.Ir(e,t,r),this.Tr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const r=this.storage.getItem(Bl(this.persistenceKey,e));if(r){const s=bo.Zi(e,r);s&&(t=s.state)}}return this.Er.tr(e),this.mr(),t}removeLocalQueryTarget(e){this.Er.er(e),this.mr()}isLocalQueryTarget(e){return this.Er.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(Bl(this.persistenceKey,e))}updateQueryState(e,t,r){this.Ar(e,t,r)}handleUserChange(e,t,r){t.forEach(s=>{this.Tr(s)}),this.currentUser=e,r.forEach(s=>{this.addPendingMutation(s)})}setOnlineState(e){this.Rr(e)}notifyBundleLoaded(e){this.vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.sr),this.removeItem(this.cr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return S("SharedClientState","READ",e,t),t}setItem(e,t){S("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){S("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ir(e){const t=e;if(t.storageArea===this.storage){if(S("SharedClientState","EVENT",t.key,t.newValue),t.key===this.cr)return void je("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ws.enqueueRetryable(async()=>{if(this.started){if(t.key!==null){if(this.hr.test(t.key)){if(t.newValue==null){const r=this.br(t.key);return this.Pr(r,null)}{const r=this.Vr(t.key,t.newValue);if(r)return this.Pr(r.clientId,r)}}else if(this.lr.test(t.key)){if(t.newValue!==null){const r=this.Sr(t.key,t.newValue);if(r)return this.Dr(r)}}else if(this.dr.test(t.key)){if(t.newValue!==null){const r=this.Cr(t.key,t.newValue);if(r)return this.Nr(r)}}else if(t.key===this.wr){if(t.newValue!==null){const r=this.gr(t.newValue);if(r)return this.yr(r)}}else if(t.key===this.ar){const r=function(s){let i=Pt.ct;if(s!=null)try{const o=JSON.parse(s);j(typeof o=="number"),i=o}catch(o){je("SharedClientState","Failed to read sequence number from WebStorage",o)}return i}(t.newValue);r!==Pt.ct&&this.sequenceNumberHandler(r)}else if(t.key===this._r){const r=this.kr(t.newValue);await Promise.all(r.map(s=>this.syncEngine.Or(s)))}}}else this.ur.push(t)})}}get Er(){return this.rr.get(this.nr)}mr(){this.setItem(this.cr,this.Er.Xi())}Ir(e,t,r){const s=new Wc(this.currentUser,e,t,r),i=bg(this.persistenceKey,this.currentUser,e);this.setItem(i,s.Xi())}Tr(e){const t=bg(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Rr(e){const t={clientId:this.nr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Ar(e,t,r){const s=Bl(this.persistenceKey,e),i=new bo(e,t,r);this.setItem(s,i.Xi())}vr(e){const t=JSON.stringify(Array.from(e));this.setItem(this._r,t)}br(e){const t=this.hr.exec(e);return t?t[1]:null}Vr(e,t){const r=this.br(e);return Qc.Zi(r,t)}Sr(e,t){const r=this.lr.exec(e),s=Number(r[1]),i=r[2]!==void 0?r[2]:null;return Wc.Zi(new et(i),s,t)}Cr(e,t){const r=this.dr.exec(e),s=Number(r[1]);return bo.Zi(s,t)}gr(e){return yf.Zi(e)}kr(e){return JSON.parse(e)}async Dr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.$r(e.batchId,e.state,e.error);S("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Nr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}Pr(e,t){const r=t?this.rr.insert(e,t):this.rr.remove(e),s=this.pr(this.rr),i=this.pr(r),o=[],a=[];return i.forEach(c=>{s.has(c)||o.push(c)}),s.forEach(c=>{i.has(c)||a.push(c)}),this.syncEngine.Fr(o,a).then(()=>{this.rr=r})}yr(e){this.rr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}pr(e){let t=Fu();return e.forEach((r,s)=>{t=t.unionWith(s.activeTargetIds)}),t}}class nI{constructor(){this.Br=new $h,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,r){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,r){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new $h,Promise.resolve()}handleUserChange(e,t,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class ID{qr(e){}shutdown(){}}/**
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
 */class Eg{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){S("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){S("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let nc=null;function ql(){return nc===null?nc=268435456+Math.round(2147483648*Math.random()):nc++,"0x"+nc.toString(16)}/**
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
 */const bD={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class ED{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}/**
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
 */const gt="WebChannelConnection";class TD extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,r,s,i){const o=ql(),a=this.ao(e,t);S("RestConnection",`Sending RPC '${e}' ${o}:`,a,r);const c={};return this.ho(c,s,i),this.lo(e,a,c,r).then(u=>(S("RestConnection",`Received RPC '${e}' ${o}: `,u),u),u=>{throw Gn("RestConnection",`RPC '${e}' ${o} failed with error: `,u,"url: ",a,"request:",r),u})}fo(e,t,r,s,i,o){return this.co(e,t,r,s,i)}ho(e,t,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Oi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((s,i)=>e[i]=s),r&&r.headers.forEach((s,i)=>e[i]=s)}ao(e,t){const r=bD[e];return`${this.ro}/v1/${t}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,r,s){const i=ql();return new Promise((o,a)=>{const c=new bk;c.setWithCredentials(!0),c.listenOnce(wk.COMPLETE,()=>{try{switch(c.getLastErrorCode()){case Fl.NO_ERROR:const l=c.getResponseJson();S(gt,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(l)),o(l);break;case Fl.TIMEOUT:S(gt,`RPC '${e}' ${i} timed out`),a(new E(w.DEADLINE_EXCEEDED,"Request time out"));break;case Fl.HTTP_ERROR:const h=c.getStatus();if(S(gt,`RPC '${e}' ${i} failed with status:`,h,"response text:",c.getResponseText()),h>0){let d=c.getResponseJson();Array.isArray(d)&&(d=d[0]);const p=d==null?void 0:d.error;if(p&&p.status&&p.message){const g=function(v){const A=v.toLowerCase().replace(/_/g,"-");return Object.values(w).indexOf(A)>=0?A:w.UNKNOWN}(p.status);a(new E(g,p.message))}else a(new E(w.UNKNOWN,"Server responded with status "+c.getStatus()))}else a(new E(w.UNAVAILABLE,"Connection failed."));break;default:U()}}finally{S(gt,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(s);S(gt,`RPC '${e}' ${i} sending request:`,s),c.send(t,"POST",u,r,15)})}wo(e,t,r){const s=ql(),i=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=yk(),a=vk(),c={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(c.xmlHttpFactory=new Ik({})),this.ho(c.initMessageHeaders,t,r),c.encodeInitMessageHeaders=!0;const u=i.join("");S(gt,`Creating RPC '${e}' stream ${s}: ${u}`,c);const l=o.createWebChannel(u,c);let h=!1,d=!1;const p=new ED({Wr:v=>{d?S(gt,`Not sending because RPC '${e}' stream ${s} is closed:`,v):(h||(S(gt,`Opening RPC '${e}' stream ${s} transport.`),l.open(),h=!0),S(gt,`RPC '${e}' stream ${s} sending:`,v),l.send(v))},Hr:()=>l.close()}),g=(v,A,R)=>{v.listen(A,V=>{try{R(V)}catch(D){setTimeout(()=>{throw D},0)}})};return g(l,Qa.EventType.OPEN,()=>{d||S(gt,`RPC '${e}' stream ${s} transport opened.`)}),g(l,Qa.EventType.CLOSE,()=>{d||(d=!0,S(gt,`RPC '${e}' stream ${s} transport closed`),p.so())}),g(l,Qa.EventType.ERROR,v=>{d||(d=!0,Gn(gt,`RPC '${e}' stream ${s} transport errored:`,v),p.so(new E(w.UNAVAILABLE,"The operation could not be completed")))}),g(l,Qa.EventType.MESSAGE,v=>{var A;if(!d){const R=v.data[0];j(!!R);const V=R,D=V.error||((A=V[0])===null||A===void 0?void 0:A.error);if(D){S(gt,`RPC '${e}' stream ${s} received error:`,D);const W=D.status;let X=function(ge){const J=We[ge];if(J!==void 0)return E_(J)}(W),ne=D.message;X===void 0&&(X=w.INTERNAL,ne="Unknown error status: "+W+" with message "+D.message),d=!0,p.so(new E(X,ne)),l.close()}else S(gt,`RPC '${e}' stream ${s} received:`,R),p.io(R)}}),g(a,_k.STAT_EVENT,v=>{v.stat===Pm.PROXY?S(gt,`RPC '${e}' stream ${s} detected buffering proxy`):v.stat===Pm.NOPROXY&&S(gt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{p.no()},0),p}}/**
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
 */function rI(){return typeof window<"u"?window:null}function mc(){return typeof document<"u"?document:null}/**
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
 */function Aa(n){return new PR(n,!0)}/**
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
 */class vf{constructor(e,t,r=1e3,s=1.5,i=6e4){this.Ws=e,this.timerId=t,this._o=r,this.mo=s,this.yo=i,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),r=Math.max(0,Date.now()-this.To),s=Math.max(0,t-r);s>0&&S("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${r} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,s,()=>(this.To=Date.now(),e())),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){this.Io!==null&&(this.Io.skipDelay(),this.Io=null)}cancel(){this.Io!==null&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}/**
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
 */class sI{constructor(e,t,r,s,i,o,a,c){this.Ws=e,this.bo=r,this.Po=s,this.connection=i,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=c,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new vf(e,t)}xo(){return this.state===1||this.state===5||this.No()}No(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&this.So===null&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,()=>this.Mo()))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,e!==4?this.Co.reset():t&&t.code===w.RESOURCE_EXHAUSTED?(je(t.toString()),je("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===w.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.Vo===t&&this.Ko(r,s)},r=>{e(()=>{const s=new E(w.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Go(s)})})}Ko(e,t){const r=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr(()=>{r(()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,()=>(this.No()&&(this.state=3),Promise.resolve())),this.listener.Jr()))}),this.stream.Zr(s=>{r(()=>this.Go(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}ko(){this.state=5,this.Co.Ao(async()=>{this.state=0,this.start()})}Go(e){return S("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget(()=>this.Vo===e?t():(S("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class SD extends sI{constructor(e,t,r,s,i,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=LR(this.serializer,e),r=function(s){if(!("targetChange"in s))return z.min();const i=s.targetChange;return i.targetIds&&i.targetIds.length?z.min():i.readTime?Ke(i.readTime):z.min()}(e);return this.listener.zo(t,r)}jo(e){const t={};t.database=Qo(this.serializer),t.addTarget=function(s,i){let o;const a=i.target;return o=$c(a)?{documents:N_(s,a)}:{query:x_(s,a)},o.targetId=i.targetId,i.resumeToken.approximateByteSize()>0?o.resumeToken=A_(s,i.resumeToken):i.snapshotVersion.compareTo(z.min())>0&&(o.readTime=yi(s,i.snapshotVersion.toTimestamp())),o}(this.serializer,e);const r=UR(this.serializer,e);r&&(t.labels=r),this.Fo(t)}Wo(e){const t={};t.database=Qo(this.serializer),t.removeTarget=e,this.Fo(t)}}class AD extends sI{constructor(e,t,r,s,i,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,r,s,o),this.serializer=i,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(j(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const t=FR(e.writeResults,e.commitTime),r=Ke(e.commitTime);return this.listener.Zo(r,t)}return j(!e.writeResults||e.writeResults.length===0),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Qo(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map(r=>Yo(this.serializer,r))};this.Fo(t)}}/**
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
 */class CD extends class{}{constructor(e,t,r,s){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=r,this.serializer=s,this.eu=!1}nu(){if(this.eu)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,r){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.co(e,t,r,s,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new E(w.UNKNOWN,s.toString())})}fo(e,t,r,s){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.fo(e,t,r,i,o,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===w.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new E(w.UNKNOWN,i.toString())})}terminate(){this.eu=!0}}class kD{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){this.su===0&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve())))}au(e){this.state==="Online"?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,e==="Online"&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(je(t),this.ru=!1):S("OnlineStateTracker",t)}hu(){this.iu!==null&&(this.iu.cancel(),this.iu=null)}}/**
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
 */class RD{constructor(e,t,r,s,i){this.localStore=e,this.datastore=t,this.asyncQueue=r,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=i,this._u.qr(o=>{r.enqueueAndForget(async()=>{Lr(this)&&(S("RemoteStore","Restarting streams for network reachability change."),await async function(a){const c=M(a);c.du.add(4),await Ui(c),c.mu.set("Unknown"),c.du.delete(4),await Ca(c)}(this))})}),this.mu=new kD(r,s)}}async function Ca(n){if(Lr(n))for(const e of n.wu)await e(!0)}async function Ui(n){for(const e of n.wu)await e(!1)}function ju(n,e){const t=M(n);t.fu.has(e.targetId)||(t.fu.set(e.targetId,e),If(t)?_f(t):Bi(t).No()&&wf(t,e))}function Jo(n,e){const t=M(n),r=Bi(t);t.fu.delete(e),r.No()&&iI(t,e),t.fu.size===0&&(r.No()?r.$o():Lr(t)&&t.mu.set("Unknown"))}function wf(n,e){n.gu.Ot(e.targetId),Bi(n).jo(e)}function iI(n,e){n.gu.Ot(e),Bi(n).Wo(e)}function _f(n){n.gu=new RR({getRemoteKeysForTarget:e=>n.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>n.fu.get(e)||null}),Bi(n).start(),n.mu.ou()}function If(n){return Lr(n)&&!Bi(n).xo()&&n.fu.size>0}function Lr(n){return M(n).du.size===0}function oI(n){n.gu=void 0}async function DD(n){n.fu.forEach((e,t)=>{wf(n,e)})}async function ND(n,e){oI(n),If(n)?(n.mu.au(e),_f(n)):n.mu.set("Unknown")}async function xD(n,e,t){if(n.mu.set("Online"),e instanceof S_&&e.state===2&&e.cause)try{await async function(r,s){const i=s.cause;for(const o of s.targetIds)r.fu.has(o)&&(await r.remoteSyncer.rejectListen(o,i),r.fu.delete(o),r.gu.removeTarget(o))}(n,e)}catch(r){S("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Yc(n,r)}else if(e instanceof pc?n.gu.Kt(e):e instanceof T_?n.gu.Jt(e):n.gu.zt(e),!t.isEqual(z.min()))try{const r=await J_(n.localStore);t.compareTo(r)>=0&&await function(s,i){const o=s.gu.Xt(i);return o.targetChanges.forEach((a,c)=>{if(a.resumeToken.approximateByteSize()>0){const u=s.fu.get(c);u&&s.fu.set(c,u.withResumeToken(a.resumeToken,i))}}),o.targetMismatches.forEach(a=>{const c=s.fu.get(a);if(!c)return;s.fu.set(a,c.withResumeToken(Je.EMPTY_BYTE_STRING,c.snapshotVersion)),iI(s,a);const u=new gr(c.target,a,1,c.sequenceNumber);wf(s,u)}),s.remoteSyncer.applyRemoteEvent(o)}(n,t)}catch(r){S("RemoteStore","Failed to raise snapshot:",r),await Yc(n,r)}}async function Yc(n,e,t){if(!Or(e))throw e;n.du.add(1),await Ui(n),n.mu.set("Offline"),t||(t=()=>J_(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{S("RemoteStore","Retrying IndexedDB access"),await t(),n.du.delete(1),await Ca(n)})}function aI(n,e){return e().catch(t=>Yc(n,t,e))}async function Vi(n){const e=M(n),t=Cr(e);let r=e.lu.length>0?e.lu[e.lu.length-1].batchId:-1;for(;PD(e);)try{const s=await vD(e.localStore,r);if(s===null){e.lu.length===0&&t.$o();break}r=s.batchId,OD(e,s)}catch(s){await Yc(e,s)}cI(e)&&uI(e)}function PD(n){return Lr(n)&&n.lu.length<10}function OD(n,e){n.lu.push(e);const t=Cr(n);t.No()&&t.Jo&&t.Yo(e.mutations)}function cI(n){return Lr(n)&&!Cr(n).xo()&&n.lu.length>0}function uI(n){Cr(n).start()}async function MD(n){Cr(n).tu()}async function LD(n){const e=Cr(n);for(const t of n.lu)e.Yo(t.mutations)}async function FD(n,e,t){const r=n.lu.shift(),s=of.from(r,e,t);await aI(n,()=>n.remoteSyncer.applySuccessfulWrite(s)),await Vi(n)}async function UD(n,e){e&&Cr(n).Jo&&await async function(t,r){if(s=r.code,b_(s)&&s!==w.ABORTED){const i=t.lu.shift();Cr(t).Oo(),await aI(t,()=>t.remoteSyncer.rejectFailedWrite(i.batchId,r)),await Vi(t)}var s}(n,e),cI(n)&&uI(n)}async function Tg(n,e){const t=M(n);t.asyncQueue.verifyOperationInProgress(),S("RemoteStore","RemoteStore received new credentials");const r=Lr(t);t.du.add(3),await Ui(t),r&&t.mu.set("Unknown"),await t.remoteSyncer.handleCredentialChange(e),t.du.delete(3),await Ca(t)}async function qh(n,e){const t=M(n);e?(t.du.delete(2),await Ca(t)):e||(t.du.add(2),await Ui(t),t.mu.set("Unknown"))}function Bi(n){return n.yu||(n.yu=function(e,t,r){const s=M(e);return s.nu(),new SD(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Jr:DD.bind(null,n),Zr:ND.bind(null,n),zo:xD.bind(null,n)}),n.wu.push(async e=>{e?(n.yu.Oo(),If(n)?_f(n):n.mu.set("Unknown")):(await n.yu.stop(),oI(n))})),n.yu}function Cr(n){return n.pu||(n.pu=function(e,t,r){const s=M(e);return s.nu(),new AD(t,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(n.datastore,n.asyncQueue,{Jr:MD.bind(null,n),Zr:UD.bind(null,n),Xo:LD.bind(null,n),Zo:FD.bind(null,n)}),n.wu.push(async e=>{e?(n.pu.Oo(),await Vi(n)):(await n.pu.stop(),n.lu.length>0&&(S("RemoteStore",`Stopping write stream with ${n.lu.length} pending writes`),n.lu=[]))})),n.pu}/**
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
 */class bf{constructor(e,t,r,s,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=r,this.op=s,this.removalCallback=i,this.deferred=new tt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,t,r,s,i){const o=Date.now()+r,a=new bf(e,t,o,s,i);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new E(w.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function $i(n,e){if(je("AsyncQueue",`${e}: ${n}`),Or(n))return new E(w.UNAVAILABLE,`${e}: ${n}`);throw n}/**
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
 */class ri{constructor(e){this.comparator=e?(t,r)=>e(t,r)||P.comparator(t.key,r.key):(t,r)=>P.comparator(t.key,r.key),this.keyedMap=uo(),this.sortedSet=new Ve(this.comparator)}static emptySet(e){return new ri(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,r)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof ri)||this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;t.hasNext();){const s=t.getNext().key,i=r.getNext().key;if(!s.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,t){const r=new ri;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=t,r}}/**
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
 */class Sg{constructor(){this.Iu=new Ve(P.comparator)}track(e){const t=e.doc.key,r=this.Iu.get(t);r?e.type!==0&&r.type===3?this.Iu=this.Iu.insert(t,e):e.type===3&&r.type!==1?this.Iu=this.Iu.insert(t,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Iu=this.Iu.remove(t):e.type===1&&r.type===2?this.Iu=this.Iu.insert(t,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):U():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal((t,r)=>{e.push(r)}),e}}class _i{constructor(e,t,r,s,i,o,a,c,u){this.query=e,this.docs=t,this.oldDocs=r,this.docChanges=s,this.mutatedKeys=i,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=c,this.hasCachedResults=u}static fromInitialDocuments(e,t,r,s,i){const o=[];return t.forEach(a=>{o.push({type:0,doc:a})}),new _i(e,t,ri.emptySet(t),o,r,s,!0,!1,i)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ia(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,r=e.docChanges;if(t.length!==r.length)return!1;for(let s=0;s<t.length;s++)if(t[s].type!==r[s].type||!t[s].doc.isEqual(r[s].doc))return!1;return!0}}/**
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
 */class VD{constructor(){this.Eu=void 0,this.listeners=[]}}class BD{constructor(){this.queries=new Mr(e=>a_(e),Ia),this.onlineState="Unknown",this.Au=new Set}}async function Ef(n,e){const t=M(n),r=e.query;let s=!1,i=t.queries.get(r);if(i||(s=!0,i=new VD),s)try{i.Eu=await t.onListen(r)}catch(o){const a=$i(o,`Initialization of query '${Mh(e.query)}' failed`);return void e.onError(a)}t.queries.set(r,i),i.listeners.push(e),e.Ru(t.onlineState),i.Eu&&e.vu(i.Eu)&&Sf(t)}async function Tf(n,e){const t=M(n),r=e.query;let s=!1;const i=t.queries.get(r);if(i){const o=i.listeners.indexOf(e);o>=0&&(i.listeners.splice(o,1),s=i.listeners.length===0)}if(s)return t.queries.delete(r),t.onUnlisten(r)}function $D(n,e){const t=M(n);let r=!1;for(const s of e){const i=s.query,o=t.queries.get(i);if(o){for(const a of o.listeners)a.vu(s)&&(r=!0);o.Eu=s}}r&&Sf(t)}function qD(n,e,t){const r=M(n),s=r.queries.get(e);if(s)for(const i of s.listeners)i.onError(t);r.queries.delete(e)}function Sf(n){n.Au.forEach(e=>{e.next()})}class Af{constructor(e,t,r){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=r||{}}vu(e){if(!this.options.includeMetadataChanges){const r=[];for(const s of e.docChanges)s.type!==3&&r.push(s);e=new _i(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const r=t!=="Offline";return(!this.options.xu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||t==="Offline")}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&this.options.includeMetadataChanges===!0}Cu(e){e=_i.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}/**
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
 */class jD{constructor(e,t){this.Nu=e,this.byteLength=t}ku(){return"metadata"in this.Nu}}/**
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
 */class Ag{constructor(e){this.serializer=e}Hi(e){return An(this.serializer,e)}Ji(e){return e.metadata.exists?D_(this.serializer,e.document,!1):ke.newNoDocument(this.Hi(e.metadata.name),this.Yi(e.metadata.readTime))}Yi(e){return Ke(e)}}class zD{constructor(e,t,r){this.Ou=e,this.localStore=t,this.serializer=r,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=lI(e)}$u(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Nu.namedQuery)this.queries.push(e.Nu.namedQuery);else if(e.Nu.documentMetadata){this.documents.push({metadata:e.Nu.documentMetadata}),e.Nu.documentMetadata.exists||++t;const r=le.fromString(e.Nu.documentMetadata.name);this.collectionGroups.add(r.get(r.length-2))}else e.Nu.document&&(this.documents[this.documents.length-1].document=e.Nu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Mu(e){const t=new Map,r=new Ag(this.serializer);for(const s of e)if(s.metadata.queries){const i=r.Hi(s.metadata.name);for(const o of s.metadata.queries){const a=(t.get(o)||se()).add(i);t.set(o,a)}}return t}async complete(){const e=await wD(this.localStore,new Ag(this.serializer),this.documents,this.Ou.id),t=this.Mu(this.documents);for(const r of this.queries)await _D(this.localStore,r,t.get(r.name));return this.progress.taskState="Success",{progress:this.progress,Fu:this.collectionGroups,Bu:e}}}function lI(n){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:n.totalDocuments,totalBytes:n.totalBytes}}/**
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
 */class hI{constructor(e){this.key=e}}class dI{constructor(e){this.key=e}}class fI{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=se(),this.mutatedKeys=se(),this.Ku=u_(e),this.Gu=new ri(this.Ku)}get Qu(){return this.Lu}zu(e,t){const r=t?t.ju:new Sg,s=t?t.Gu:this.Gu;let i=t?t.mutatedKeys:this.mutatedKeys,o=s,a=!1;const c=this.query.limitType==="F"&&s.size===this.query.limit?s.last():null,u=this.query.limitType==="L"&&s.size===this.query.limit?s.first():null;if(e.inorderTraversal((l,h)=>{const d=s.get(l),p=ba(this.query,h)?h:null,g=!!d&&this.mutatedKeys.has(d.key),v=!!p&&(p.hasLocalMutations||this.mutatedKeys.has(p.key)&&p.hasCommittedMutations);let A=!1;d&&p?d.data.isEqual(p.data)?g!==v&&(r.track({type:3,doc:p}),A=!0):this.Wu(d,p)||(r.track({type:2,doc:p}),A=!0,(c&&this.Ku(p,c)>0||u&&this.Ku(p,u)<0)&&(a=!0)):!d&&p?(r.track({type:0,doc:p}),A=!0):d&&!p&&(r.track({type:1,doc:d}),A=!0,(c||u)&&(a=!0)),A&&(p?(o=o.add(p),i=v?i.add(l):i.delete(l)):(o=o.delete(l),i=i.delete(l)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const l=this.query.limitType==="F"?o.last():o.first();o=o.delete(l.key),i=i.delete(l.key),r.track({type:1,doc:l})}return{Gu:o,ju:r,Mi:a,mutatedKeys:i}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,r){const s=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const i=e.ju.Tu();i.sort((u,l)=>function(h,d){const p=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return U()}};return p(h)-p(d)}(u.type,l.type)||this.Ku(u.doc,l.doc)),this.Hu(r);const o=t?this.Ju():[],a=this.Uu.size===0&&this.current?1:0,c=a!==this.qu;return this.qu=a,i.length!==0||c?{snapshot:new _i(this.query,e.Gu,s,i,e.mutatedKeys,a===0,c,!1,!!r&&r.resumeToken.approximateByteSize()>0),Yu:o}:{Yu:o}}Ru(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new Sg,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach(t=>this.Lu=this.Lu.add(t)),e.modifiedDocuments.forEach(t=>{}),e.removedDocuments.forEach(t=>this.Lu=this.Lu.delete(t)),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=se(),this.Gu.forEach(r=>{this.Zu(r.key)&&(this.Uu=this.Uu.add(r.key))});const t=[];return e.forEach(r=>{this.Uu.has(r)||t.push(new dI(r))}),this.Uu.forEach(r=>{e.has(r)||t.push(new hI(r))}),t}Xu(e){this.Lu=e.Wi,this.Uu=se();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return _i.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,this.qu===0,this.hasCachedResults)}}class KD{constructor(e,t,r){this.query=e,this.targetId=t,this.view=r}}class GD{constructor(e){this.key=e,this.ec=!1}}class HD{constructor(e,t,r,s,i,o){this.localStore=e,this.remoteStore=t,this.eventManager=r,this.sharedClientState=s,this.currentUser=i,this.maxConcurrentLimboResolutions=o,this.nc={},this.sc=new Mr(a=>a_(a),Ia),this.ic=new Map,this.rc=new Set,this.oc=new Ve(P.comparator),this.uc=new Map,this.cc=new ff,this.ac={},this.hc=new Map,this.lc=Ss.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return this.fc===!0}}async function WD(n,e){const t=Nf(n);let r,s;const i=t.sc.get(e);if(i)r=i.targetId,t.sharedClientState.addLocalQueryTarget(r),s=i.view.tc();else{const o=await vi(t.localStore,Ft(e));t.isPrimaryClient&&ju(t.remoteStore,o);const a=t.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,s=await Cf(t,e,r,a==="current",o.resumeToken)}return s}async function Cf(n,e,t,r,s){n.dc=(h,d,p)=>async function(g,v,A,R){let V=v.view.zu(A);V.Mi&&(V=await Hc(g.localStore,v.query,!1).then(({documents:X})=>v.view.zu(X,V)));const D=R&&R.targetChanges.get(v.targetId),W=v.view.applyChanges(V,g.isPrimaryClient,D);return jh(g,v.targetId,W.Yu),W.snapshot}(n,h,d,p);const i=await Hc(n.localStore,e,!0),o=new fI(e,i.Wi),a=o.zu(i.documents),c=Sa.createSynthesizedTargetChangeForCurrentChange(t,r&&n.onlineState!=="Offline",s),u=o.applyChanges(a,n.isPrimaryClient,c);jh(n,t,u.Yu);const l=new KD(e,t,o);return n.sc.set(e,l),n.ic.has(t)?n.ic.get(t).push(e):n.ic.set(t,[e]),u.snapshot}async function QD(n,e){const t=M(n),r=t.sc.get(e),s=t.ic.get(r.targetId);if(s.length>1)return t.ic.set(r.targetId,s.filter(i=>!Ia(i,e))),void t.sc.delete(e);t.isPrimaryClient?(t.sharedClientState.removeLocalQueryTarget(r.targetId),t.sharedClientState.isActiveQueryTarget(r.targetId)||await wi(t.localStore,r.targetId,!1).then(()=>{t.sharedClientState.clearQueryState(r.targetId),Jo(t.remoteStore,r.targetId),Ii(t,r.targetId)}).catch(Pr)):(Ii(t,r.targetId),await wi(t.localStore,r.targetId,!0))}async function YD(n,e,t){const r=xf(n);try{const s=await function(i,o){const a=M(i),c=Pe.now(),u=o.reduce((d,p)=>d.add(p.key),se());let l,h;return a.persistence.runTransaction("Locally write mutations","readwrite",d=>{let p=Mt(),g=se();return a.Ki.getEntries(d,u).next(v=>{p=v,p.forEach((A,R)=>{R.isValidDocument()||(g=g.add(A))})}).next(()=>a.localDocuments.getOverlayedDocuments(d,p)).next(v=>{l=v;const A=[];for(const R of o){const V=CR(R,l.get(R.key).overlayedDocument);V!=null&&A.push(new Jn(R.key,V,Xw(V.value.mapValue),xe.exists(!0)))}return a.mutationQueue.addMutationBatch(d,c,A,o)}).next(v=>{h=v;const A=v.applyToLocalDocumentSet(l,g);return a.documentOverlayCache.saveOverlays(d,v.batchId,A)})}).then(()=>({batchId:h.batchId,changes:h_(l)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(i,o,a){let c=i.ac[i.currentUser.toKey()];c||(c=new Ve(re)),c=c.insert(o,a),i.ac[i.currentUser.toKey()]=c}(r,s.batchId,t),await Xn(r,s.changes),await Vi(r.remoteStore)}catch(s){const i=$i(s,"Failed to persist write");t.reject(i)}}async function pI(n,e){const t=M(n);try{const r=await yD(t.localStore,e);e.targetChanges.forEach((s,i)=>{const o=t.uc.get(i);o&&(j(s.addedDocuments.size+s.modifiedDocuments.size+s.removedDocuments.size<=1),s.addedDocuments.size>0?o.ec=!0:s.modifiedDocuments.size>0?j(o.ec):s.removedDocuments.size>0&&(j(o.ec),o.ec=!1))}),await Xn(t,r,e)}catch(r){await Pr(r)}}function Cg(n,e,t){const r=M(n);if(r.isPrimaryClient&&t===0||!r.isPrimaryClient&&t===1){const s=[];r.sc.forEach((i,o)=>{const a=o.view.Ru(e);a.snapshot&&s.push(a.snapshot)}),function(i,o){const a=M(i);a.onlineState=o;let c=!1;a.queries.forEach((u,l)=>{for(const h of l.listeners)h.Ru(o)&&(c=!0)}),c&&Sf(a)}(r.eventManager,e),s.length&&r.nc.zo(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function JD(n,e,t){const r=M(n);r.sharedClientState.updateQueryState(e,"rejected",t);const s=r.uc.get(e),i=s&&s.key;if(i){let o=new Ve(P.comparator);o=o.insert(i,ke.newNoDocument(i,z.min()));const a=se().add(i),c=new Ta(z.min(),new Map,new Ie(re),o,a);await pI(r,c),r.oc=r.oc.remove(i),r.uc.delete(e),Df(r)}else await wi(r.localStore,e,!1).then(()=>Ii(r,e,t)).catch(Pr)}async function XD(n,e){const t=M(n),r=e.batch.batchId;try{const s=await gD(t.localStore,e);Rf(t,r,null),kf(t,r),t.sharedClientState.updateMutationState(r,"acknowledged"),await Xn(t,s)}catch(s){await Pr(s)}}async function ZD(n,e,t){const r=M(n);try{const s=await function(i,o){const a=M(i);return a.persistence.runTransaction("Reject batch","readwrite-primary",c=>{let u;return a.mutationQueue.lookupMutationBatch(c,o).next(l=>(j(l!==null),u=l.keys(),a.mutationQueue.removeMutationBatch(c,l))).next(()=>a.mutationQueue.performConsistencyCheck(c)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(c,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(c,u)).next(()=>a.localDocuments.getDocuments(c,u))})}(r.localStore,e);Rf(r,e,t),kf(r,e),r.sharedClientState.updateMutationState(e,"rejected",t),await Xn(r,s)}catch(s){await Pr(s)}}async function eN(n,e){const t=M(n);Lr(t.remoteStore)||S("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const r=await function(i){const o=M(i);return o.persistence.runTransaction("Get highest unacknowledged batch id","readonly",a=>o.mutationQueue.getHighestUnacknowledgedBatchId(a))}(t.localStore);if(r===-1)return void e.resolve();const s=t.hc.get(r)||[];s.push(e),t.hc.set(r,s)}catch(r){const s=$i(r,"Initialization of waitForPendingWrites() operation failed");e.reject(s)}}function kf(n,e){(n.hc.get(e)||[]).forEach(t=>{t.resolve()}),n.hc.delete(e)}function Rf(n,e,t){const r=M(n);let s=r.ac[r.currentUser.toKey()];if(s){const i=s.get(e);i&&(t?i.reject(t):i.resolve(),s=s.remove(e)),r.ac[r.currentUser.toKey()]=s}}function Ii(n,e,t=null){n.sharedClientState.removeLocalQueryTarget(e);for(const r of n.ic.get(e))n.sc.delete(r),t&&n.nc.wc(r,t);n.ic.delete(e),n.isPrimaryClient&&n.cc.hs(e).forEach(r=>{n.cc.containsKey(r)||mI(n,r)})}function mI(n,e){n.rc.delete(e.path.canonicalString());const t=n.oc.get(e);t!==null&&(Jo(n.remoteStore,t),n.oc=n.oc.remove(e),n.uc.delete(t),Df(n))}function jh(n,e,t){for(const r of t)r instanceof hI?(n.cc.addReference(r.key,e),tN(n,r)):r instanceof dI?(S("SyncEngine","Document no longer in limbo: "+r.key),n.cc.removeReference(r.key,e),n.cc.containsKey(r.key)||mI(n,r.key)):U()}function tN(n,e){const t=e.key,r=t.path.canonicalString();n.oc.get(t)||n.rc.has(r)||(S("SyncEngine","New document in limbo: "+t),n.rc.add(r),Df(n))}function Df(n){for(;n.rc.size>0&&n.oc.size<n.maxConcurrentLimboResolutions;){const e=n.rc.values().next().value;n.rc.delete(e);const t=new P(le.fromString(e)),r=n.lc.next();n.uc.set(r,new GD(t)),n.oc=n.oc.insert(t,r),ju(n.remoteStore,new gr(Ft(Mi(t.path)),r,2,Pt.ct))}}async function Xn(n,e,t){const r=M(n),s=[],i=[],o=[];r.sc.isEmpty()||(r.sc.forEach((a,c)=>{o.push(r.dc(c,e,t).then(u=>{if((u||t)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(c.targetId,u!=null&&u.fromCache?"not-current":"current"),u){s.push(u);const l=gf.Di(c.targetId,u);i.push(l)}}))}),await Promise.all(o),r.nc.zo(s),await async function(a,c){const u=M(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",l=>y.forEach(c,h=>y.forEach(h.Vi,d=>u.persistence.referenceDelegate.addReference(l,h.targetId,d)).next(()=>y.forEach(h.Si,d=>u.persistence.referenceDelegate.removeReference(l,h.targetId,d)))))}catch(l){if(!Or(l))throw l;S("LocalStore","Failed to update sequence numbers: "+l)}for(const l of c){const h=l.targetId;if(!l.fromCache){const d=u.Li.get(h),p=d.snapshotVersion,g=d.withLastLimboFreeSnapshotVersion(p);u.Li=u.Li.insert(h,g)}}}(r.localStore,i))}async function nN(n,e){const t=M(n);if(!t.currentUser.isEqual(e)){S("SyncEngine","User change. New user:",e.toKey());const r=await Y_(t.localStore,e);t.currentUser=e,function(s,i){s.hc.forEach(o=>{o.forEach(a=>{a.reject(new E(w.CANCELLED,i))})}),s.hc.clear()}(t,"'waitForPendingWrites' promise is rejected due to a user change."),t.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Xn(t,r.Qi)}}function rN(n,e){const t=M(n),r=t.uc.get(e);if(r&&r.ec)return se().add(r.key);{let s=se();const i=t.ic.get(e);if(!i)return s;for(const o of i){const a=t.sc.get(o);s=s.unionWith(a.view.Qu)}return s}}async function sN(n,e){const t=M(n),r=await Hc(t.localStore,e.query,!0),s=e.view.Xu(r);return t.isPrimaryClient&&jh(t,e.targetId,s.Yu),s}async function iN(n,e){const t=M(n);return eI(t.localStore,e).then(r=>Xn(t,r))}async function oN(n,e,t,r){const s=M(n),i=await function(o,a){const c=M(o),u=M(c.mutationQueue);return c.persistence.runTransaction("Lookup mutation documents","readonly",l=>u.In(l,a).next(h=>h?c.localDocuments.getDocuments(l,h):y.resolve(null)))}(s.localStore,e);i!==null?(t==="pending"?await Vi(s.remoteStore):t==="acknowledged"||t==="rejected"?(Rf(s,e,r||null),kf(s,e),function(o,a){M(M(o).mutationQueue).En(a)}(s.localStore,e)):U(),await Xn(s,i)):S("SyncEngine","Cannot apply mutation batch with id: "+e)}async function aN(n,e){const t=M(n);if(Nf(t),xf(t),e===!0&&t.fc!==!0){const r=t.sharedClientState.getAllActiveQueryTargets(),s=await kg(t,r.toArray());t.fc=!0,await qh(t.remoteStore,!0);for(const i of s)ju(t.remoteStore,i)}else if(e===!1&&t.fc!==!1){const r=[];let s=Promise.resolve();t.ic.forEach((i,o)=>{t.sharedClientState.isLocalQueryTarget(o)?r.push(o):s=s.then(()=>(Ii(t,o),wi(t.localStore,o,!0))),Jo(t.remoteStore,o)}),await s,await kg(t,r),function(i){const o=M(i);o.uc.forEach((a,c)=>{Jo(o.remoteStore,c)}),o.cc.ls(),o.uc=new Map,o.oc=new Ve(P.comparator)}(t),t.fc=!1,await qh(t.remoteStore,!1)}}async function kg(n,e,t){const r=M(n),s=[],i=[];for(const o of e){let a;const c=r.ic.get(o);if(c&&c.length!==0){a=await vi(r.localStore,Ft(c[0]));for(const u of c){const l=r.sc.get(u),h=await sN(r,l);h.snapshot&&i.push(h.snapshot)}}else{const u=await Z_(r.localStore,o);a=await vi(r.localStore,u),await Cf(r,gI(u),o,!1,a.resumeToken)}s.push(a)}return r.nc.zo(i),s}function gI(n){return o_(n.path,n.collectionGroup,n.orderBy,n.filters,n.limit,"F",n.startAt,n.endAt)}function cN(n){const e=M(n);return M(M(e.localStore).persistence).bi()}async function uN(n,e,t,r){const s=M(n);if(s.fc)return void S("SyncEngine","Ignoring unexpected query state notification.");const i=s.ic.get(e);if(i&&i.length>0)switch(t){case"current":case"not-current":{const o=await eI(s.localStore,c_(i[0])),a=Ta.createSynthesizedRemoteEventForCurrentChange(e,t==="current",Je.EMPTY_BYTE_STRING);await Xn(s,o,a);break}case"rejected":await wi(s.localStore,e,!0),Ii(s,e,r);break;default:U()}}async function lN(n,e,t){const r=Nf(n);if(r.fc){for(const s of e){if(r.ic.has(s)){S("SyncEngine","Adding an already active target "+s);continue}const i=await Z_(r.localStore,s),o=await vi(r.localStore,i);await Cf(r,gI(i),o.targetId,!1,o.resumeToken),ju(r.remoteStore,o)}for(const s of t)r.ic.has(s)&&await wi(r.localStore,s,!1).then(()=>{Jo(r.remoteStore,s),Ii(r,s)}).catch(Pr)}}function Nf(n){const e=M(n);return e.remoteStore.remoteSyncer.applyRemoteEvent=pI.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rN.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=JD.bind(null,e),e.nc.zo=$D.bind(null,e.eventManager),e.nc.wc=qD.bind(null,e.eventManager),e}function xf(n){const e=M(n);return e.remoteStore.remoteSyncer.applySuccessfulWrite=XD.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=ZD.bind(null,e),e}function hN(n,e,t){const r=M(n);(async function(s,i,o){try{const a=await i.getMetadata();if(await function(h,d){const p=M(h),g=Ke(d.createTime);return p.persistence.runTransaction("hasNewerBundle","readonly",v=>p.xs.getBundleMetadata(v,d.id)).then(v=>!!v&&v.createTime.compareTo(g)>=0)}(s.localStore,a))return await i.close(),o._completeWith(function(h){return{taskState:"Success",documentsLoaded:h.totalDocuments,bytesLoaded:h.totalBytes,totalDocuments:h.totalDocuments,totalBytes:h.totalBytes}}(a)),Promise.resolve(new Set);o._updateProgress(lI(a));const c=new zD(a,s.localStore,i.serializer);let u=await i._c();for(;u;){const h=await c.$u(u);h&&o._updateProgress(h),u=await i._c()}const l=await c.complete();return await Xn(s,l.Bu,void 0),await function(h,d){const p=M(h);return p.persistence.runTransaction("Save bundle","readwrite",g=>p.xs.saveBundleMetadata(g,d))}(s.localStore,a),o._completeWith(l.progress),Promise.resolve(l.Fu)}catch(a){return Gn("SyncEngine",`Loading bundle failed with ${a}`),o._failWith(a),Promise.resolve(new Set)}})(r,e,t).then(s=>{r.sharedClientState.notifyBundleLoaded(s)})}class zh{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Aa(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return Q_(this.persistence,new W_,e.initialUser,this.serializer)}createPersistence(e){return new H_(qu.Fs,this.serializer)}createSharedClientState(e){return new nI}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class yI extends zh{constructor(e,t,r){super(),this.mc=e,this.cacheSizeBytes=t,this.forceOwnership=r,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.mc.initialize(this,e),await xf(this.mc.syncEngine),await Vi(this.mc.remoteStore),await this.persistence.hi(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}createLocalStore(e){return Q_(this.persistence,new W_,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const r=this.persistence.referenceDelegate.garbageCollector;return new tD(r,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const r=new Uk(t,this.persistence);return new Fk(e.asyncQueue,r)}createPersistence(e){const t=mf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),r=this.cacheSizeBytes!==void 0?Dt.withCacheSize(this.cacheSizeBytes):Dt.DEFAULT;return new pf(this.synchronizeTabs,t,e.clientId,r,e.asyncQueue,rI(),mc(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new nI}}class dN extends yI{constructor(e,t){super(e,t,!1),this.mc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.mc.syncEngine;this.sharedClientState instanceof $l&&(this.sharedClientState.syncEngine={$r:oN.bind(null,t),Mr:uN.bind(null,t),Fr:lN.bind(null,t),bi:cN.bind(null,t),Or:iN.bind(null,t)},await this.sharedClientState.start()),await this.persistence.hi(async r=>{await aN(this.mc.syncEngine,r),this.gcScheduler&&(r&&!this.gcScheduler.started?this.gcScheduler.start():r||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(r&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():r||this.indexBackfillerScheduler.stop())})}createSharedClientState(e){const t=rI();if(!$l.D(t))throw new E(w.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const r=mf(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new $l(t,e.asyncQueue,r,e.clientId,e.initialUser)}}class Pf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Cg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=nN.bind(null,this.syncEngine),await qh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new BD}createDatastore(e){const t=Aa(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new TD(s));var s;return function(i,o,a,c){return new CD(i,o,a,c)}(e.authCredentials,e.appCheckCredentials,r,t)}createRemoteStore(e){return t=this.localStore,r=this.datastore,s=e.asyncQueue,i=a=>Cg(this.syncEngine,a,0),o=Eg.D()?new Eg:new ID,new RD(t,r,s,i,o);var t,r,s,i,o}createSyncEngine(e,t){return function(r,s,i,o,a,c,u){const l=new HD(r,s,i,o,a,c);return u&&(l.fc=!0),l}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=M(e);S("RemoteStore","RemoteStore shutting down."),t.du.add(5),await Ui(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}/**
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
 */function Rg(n,e=10240){let t=0;return{async read(){if(t<n.byteLength){const r={value:n.slice(t,t+e),done:!1};return t+=e,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}/**
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
 */class zu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):je("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout(()=>{this.muted||e(t)},0)}}/**
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
 */class fN{constructor(e,t){this.Ic=e,this.serializer=t,this.metadata=new tt,this.buffer=new Uint8Array,this.Tc=new TextDecoder("utf-8"),this.Ec().then(r=>{r&&r.ku()?this.metadata.resolve(r.Nu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is
             ${JSON.stringify(r==null?void 0:r.Nu)}`))},r=>this.metadata.reject(r))}close(){return this.Ic.cancel()}async getMetadata(){return this.metadata.promise}async _c(){return await this.getMetadata(),this.Ec()}async Ec(){const e=await this.Ac();if(e===null)return null;const t=this.Tc.decode(e),r=Number(t);isNaN(r)&&this.Rc(`length string (${t}) is not valid number`);const s=await this.vc(r);return new jD(JSON.parse(s),e.length+r)}bc(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async Ac(){for(;this.bc()<0&&!await this.Pc(););if(this.buffer.length===0)return null;const e=this.bc();e<0&&this.Rc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Pc()&&this.Rc("Reached the end of bundle when more is expected.");const t=this.Tc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Rc(e){throw this.Ic.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pc(){const e=await this.Ic.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}/**
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
 */class pN{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new E(w.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(r,s){const i=M(r),o=Qo(i.serializer)+"/documents",a={documents:s.map(h=>Wo(i.serializer,h))},c=await i.fo("BatchGetDocuments",o,a,s.length),u=new Map;c.forEach(h=>{const d=MR(i.serializer,h);u.set(d.key.toString(),d)});const l=[];return s.forEach(h=>{const d=u.get(h.toString());j(!!d),l.push(d)}),l}(this.datastore,e);return t.forEach(r=>this.recordVersion(r)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(e.toString())}delete(e){this.write(new Fi(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((t,r)=>{const s=P.fromPath(r);this.mutations.push(new rf(s,this.precondition(s)))}),await async function(t,r){const s=M(t),i=Qo(s.serializer)+"/documents",o={writes:r.map(a=>Yo(s.serializer,a))};await s.co("Commit",i,o)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw U();t=z.min()}const r=this.readVersions.get(e.key.toString());if(r){if(!t.isEqual(r))throw new E(w.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(z.min())?xe.exists(!1):xe.updateTime(t):xe.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(z.min()))throw new E(w.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return xe.updateTime(t)}return xe.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}/**
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
 */class mN{constructor(e,t,r,s,i){this.asyncQueue=e,this.datastore=t,this.options=r,this.updateFunction=s,this.deferred=i,this.Vc=r.maxAttempts,this.Co=new vf(this.asyncQueue,"transaction_retry")}run(){this.Vc-=1,this.Sc()}Sc(){this.Co.Ao(async()=>{const e=new pN(this.datastore),t=this.Dc(e);t&&t.then(r=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(r)}).catch(s=>{this.Cc(s)}))}).catch(r=>{this.Cc(r)})})}Dc(e){try{const t=this.updateFunction(e);return!wa(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Cc(e){this.Vc>0&&this.xc(e)?(this.Vc-=1,this.asyncQueue.enqueueAndForget(()=>(this.Sc(),Promise.resolve()))):this.deferred.reject(e)}xc(e){if(e.name==="FirebaseError"){const t=e.code;return t==="aborted"||t==="failed-precondition"||t==="already-exists"||!b_(t)}return!1}}/**
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
 */class gN{constructor(e,t,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=r,this.databaseInfo=s,this.user=et.UNAUTHENTICATED,this.clientId=Fw.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async i=>{S("FirestoreClient","Received user=",i.uid),await this.authCredentialListener(i),this.user=i}),this.appCheckCredentials.start(r,i=>(S("FirestoreClient","Received new app check token=",i),this.appCheckCredentialListener(i,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new E(w.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new tt;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const r=$i(t,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function gc(n,e){n.asyncQueue.verifyOperationInProgress(),S("FirestoreClient","Initializing OfflineComponentProvider");const t=await n.getConfiguration();await e.initialize(t);let r=t.initialUser;n.setCredentialChangeListener(async s=>{r.isEqual(s)||(await Y_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=e}async function Kh(n,e){n.asyncQueue.verifyOperationInProgress();const t=await Of(n);S("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await e.initialize(t,r),n.setCredentialChangeListener(s=>Tg(e.remoteStore,s)),n.setAppCheckTokenChangeListener((s,i)=>Tg(e.remoteStore,i)),n._onlineComponents=e}function vI(n){return n.name==="FirebaseError"?n.code===w.FAILED_PRECONDITION||n.code===w.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function Of(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){S("FirestoreClient","Using user provided OfflineComponentProvider");try{await gc(n,n._uninitializedComponentsProvider._offline)}catch(e){const t=e;if(!vI(t))throw t;Gn("Error using user provided cache. Falling back to memory cache: "+t),await gc(n,new zh)}}else S("FirestoreClient","Using default OfflineComponentProvider"),await gc(n,new zh);return n._offlineComponents}async function Ku(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(S("FirestoreClient","Using user provided OnlineComponentProvider"),await Kh(n,n._uninitializedComponentsProvider._online)):(S("FirestoreClient","Using default OnlineComponentProvider"),await Kh(n,new Pf))),n._onlineComponents}function wI(n){return Of(n).then(e=>e.persistence)}function Mf(n){return Of(n).then(e=>e.localStore)}function _I(n){return Ku(n).then(e=>e.remoteStore)}function Lf(n){return Ku(n).then(e=>e.syncEngine)}function yN(n){return Ku(n).then(e=>e.datastore)}async function bi(n){const e=await Ku(n),t=e.eventManager;return t.onListen=WD.bind(null,e.syncEngine),t.onUnlisten=QD.bind(null,e.syncEngine),t}function vN(n){return n.asyncQueue.enqueue(async()=>{const e=await wI(n),t=await _I(n);return e.setNetworkEnabled(!0),function(r){const s=M(r);return s.du.delete(0),Ca(s)}(t)})}function wN(n){return n.asyncQueue.enqueue(async()=>{const e=await wI(n),t=await _I(n);return e.setNetworkEnabled(!1),async function(r){const s=M(r);s.du.add(0),await Ui(s),s.mu.set("Offline")}(t)})}function _N(n,e){const t=new tt;return n.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await function(a,c){const u=M(a);return u.persistence.runTransaction("read document","readonly",l=>u.localDocuments.getDocument(l,c))}(r,s);o.isFoundDocument()?i.resolve(o):o.isNoDocument()?i.resolve(null):i.reject(new E(w.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(o){const a=$i(o,`Failed to get document '${s} from cache`);i.reject(a)}}(await Mf(n),e,t)),t.promise}function II(n,e,t={}){const r=new tt;return n.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new zu({next:h=>{i.enqueueAndForget(()=>Tf(s,l));const d=h.docs.has(o);!d&&h.fromCache?c.reject(new E(w.UNAVAILABLE,"Failed to get document because the client is offline.")):d&&h.fromCache&&a&&a.source==="server"?c.reject(new E(w.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Af(Mi(o.path),u,{includeMetadataChanges:!0,xu:!0});return Ef(s,l)}(await bi(n),n.asyncQueue,e,t,r)),r.promise}function IN(n,e){const t=new tt;return n.asyncQueue.enqueueAndForget(async()=>async function(r,s,i){try{const o=await Hc(r,s,!0),a=new fI(s,o.Wi),c=a.zu(o.documents),u=a.applyChanges(c,!1);i.resolve(u.snapshot)}catch(o){const a=$i(o,`Failed to execute query '${s} against cache`);i.reject(a)}}(await Mf(n),e,t)),t.promise}function bI(n,e,t={}){const r=new tt;return n.asyncQueue.enqueueAndForget(async()=>function(s,i,o,a,c){const u=new zu({next:h=>{i.enqueueAndForget(()=>Tf(s,l)),h.fromCache&&a.source==="server"?c.reject(new E(w.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):c.resolve(h)},error:h=>c.reject(h)}),l=new Af(o,u,{includeMetadataChanges:!0,xu:!0});return Ef(s,l)}(await bi(n),n.asyncQueue,e,t,r)),r.promise}function bN(n,e){const t=new zu(e);return n.asyncQueue.enqueueAndForget(async()=>function(r,s){M(r).Au.add(s),s.next()}(await bi(n),t)),()=>{t.yc(),n.asyncQueue.enqueueAndForget(async()=>function(r,s){M(r).Au.delete(s)}(await bi(n),t))}}function EN(n,e,t,r){const s=function(i,o){let a;return a=typeof i=="string"?new TextEncoder().encode(i):i,function(c,u){return new fN(c,u)}(function(c,u){if(c instanceof Uint8Array)return Rg(c,u);if(c instanceof ArrayBuffer)return Rg(new Uint8Array(c),u);if(c instanceof ReadableStream)return c.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(a),o)}(t,Aa(e));n.asyncQueue.enqueueAndForget(async()=>{hN(await Lf(n),s,r)})}function TN(n,e){return n.asyncQueue.enqueue(async()=>function(t,r){const s=M(t);return s.persistence.runTransaction("Get named query","readonly",i=>s.xs.getNamedQuery(i,r))}(await Mf(n),e))}/**
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
 */const Dg=new Map;/**
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
 */function Ff(n,e,t){if(!t)throw new E(w.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${e}.`)}function EI(n,e,t,r){if(e===!0&&r===!0)throw new E(w.INVALID_ARGUMENT,`${n} and ${t} cannot be used together.`)}function Ng(n){if(!P.isDocumentKey(n))throw new E(w.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function xg(n){if(P.isDocumentKey(n))throw new E(w.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Gu(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const e=function(t){return t.constructor?t.constructor.name:null}(n);return e?`a custom ${e} object`:"an object"}}return typeof n=="function"?"a function":U()}function pe(n,e){if("_delegate"in n&&(n=n._delegate),!(n instanceof e)){if(e.name===n.constructor.name)throw new E(w.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const t=Gu(n);throw new E(w.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${t}`)}}return n}function TI(n,e){if(e<=0)throw new E(w.INVALID_ARGUMENT,`Function ${n}() requires a positive number, but it was: ${e}.`)}/**
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
 */class Pg{constructor(e){var t;if(e.host===void 0){if(e.ssl!==void 0)throw new E(w.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(t=e.ssl)===null||t===void 0||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new E(w.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,EI("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class ka{constructor(e,t,r,s){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Pg({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new E(w.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new E(w.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Pg(e),e.credentials!==void 0&&(this._authCredentials=function(t){if(!t)return new Sk;switch(t.type){case"firstParty":return new Rk(t.sessionIndex||"0",t.iamToken||null,t.authTokenFactory||null);case"provider":return t.client;default:throw new E(w.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Dg.get(e);t&&(S("ComponentProvider","Removing Datastore"),Dg.delete(e),t.terminate())}(this),Promise.resolve()}}function SI(n,e,t,r={}){var s;const i=(n=pe(n,ka))._getSettings();if(i.host!=="firestore.googleapis.com"&&i.host!==e&&Gn("Host has been set in both settings() and useEmulator(), emulator host will be used"),n._setSettings(Object.assign(Object.assign({},i),{host:`${e}:${t}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=et.MOCK_USER;else{o=GS(r.mockUserToken,(s=n._app)===null||s===void 0?void 0:s.options.projectId);const c=r.mockUserToken.sub||r.mockUserToken.user_id;if(!c)throw new E(w.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new et(c)}n._authCredentials=new Ak(new Lw(o,a))}}/**
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
 */class De{constructor(e,t,r){this.converter=t,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Cn(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new De(this.firestore,e,this._key)}}class dt{constructor(e,t,r){this.converter=t,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new dt(this.firestore,e,this._query)}}class Cn extends dt{constructor(e,t,r){super(e,t,Mi(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new De(this.firestore,null,new P(e))}withConverter(e){return new Cn(this.firestore,e,this._path)}}function Uf(n,e,...t){if(n=K(n),Ff("collection","path",e),n instanceof ka){const r=le.fromString(e,...t);return xg(r),new Cn(n,null,r)}{if(!(n instanceof De||n instanceof Cn))throw new E(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return xg(r),new Cn(n.firestore,null,r)}}function SN(n,e){if(n=pe(n,ka),Ff("collectionGroup","collection id",e),e.indexOf("/")>=0)throw new E(w.INVALID_ARGUMENT,`Invalid collection ID '${e}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new dt(n,null,function(t){return new Yn(le.emptyPath(),t)}(e))}function $t(n,e,...t){if(n=K(n),arguments.length===1&&(e=Fw.A()),Ff("doc","path",e),n instanceof ka){const r=le.fromString(e,...t);return Ng(r),new De(n,null,new P(r))}{if(!(n instanceof De||n instanceof Cn))throw new E(w.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(le.fromString(e,...t));return Ng(r),new De(n.firestore,n instanceof Cn?n.converter:null,new P(r))}}function AI(n,e){return n=K(n),e=K(e),(n instanceof De||n instanceof Cn)&&(e instanceof De||e instanceof Cn)&&n.firestore===e.firestore&&n.path===e.path&&n.converter===e.converter}function CI(n,e){return n=K(n),e=K(e),n instanceof dt&&e instanceof dt&&n.firestore===e.firestore&&Ia(n._query,e._query)&&n.converter===e.converter}/**
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
 */class AN{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new vf(this,"async_queue_retry"),this.qc=()=>{const t=mc();t&&S("AsyncQueue","Visibility state changed to "+t.visibilityState),this.Co.vo()};const e=mc();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=mc();t&&typeof t.removeEventListener=="function"&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise(()=>{});const t=new tt;return this.Kc(()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.kc.push(e),this.Gc()))}async Gc(){if(this.kc.length!==0){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(e){if(!Or(e))throw e;S("AsyncQueue","Operation failed with retryable error: "+e)}this.kc.length>0&&this.Co.Ao(()=>this.Gc())}}Kc(e){const t=this.Nc.then(()=>(this.Fc=!0,e().catch(r=>{this.Mc=r,this.Fc=!1;const s=function(i){let o=i.message||"";return i.stack&&(o=i.stack.includes(i.message)?i.stack:i.message+`
`+i.stack),o}(r);throw je("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Fc=!1,r))));return this.Nc=t,t}enqueueAfterDelay(e,t,r){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const s=bf.createAndSchedule(this,e,t,r,i=>this.Qc(i));return this.$c.push(s),s}Uc(){this.Mc&&U()}verifyOperationInProgress(){}async zc(){let e;do e=this.Nc,await e;while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then(()=>{this.$c.sort((t,r)=>t.targetTimeMs-r.targetTimeMs);for(const t of this.$c)if(t.skipDelay(),e!=="all"&&t.timerId===e)break;return this.zc()})}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function Gh(n){return function(e,t){if(typeof e!="object"||e===null)return!1;const r=e;for(const s of t)if(s in r&&typeof r[s]=="function")return!0;return!1}(n,["next","error","complete"])}class CN{constructor(){this._progressObserver={},this._taskCompletionResolver=new tt,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,r){this._progressObserver={next:e,error:t,complete:r}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}/**
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
 */const kN=-1;class Be extends ka{constructor(e,t,r,s){super(e,t,r,s),this.type="firestore",this._queue=new AN,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||kI(this),this._firestoreClient.terminate()}}function RN(n,e){const t=typeof n=="object"?n:kd(),r=typeof n=="string"?n:e||"(default)",s=ca(t,"firestore").getImmediate({identifier:r});if(!s._initialized){const i=jS("firestore");i&&SI(s,...i)}return s}function ot(n){return n._firestoreClient||kI(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function kI(n){var e,t,r;const s=n._freezeSettings(),i=function(o,a,c,u){return new oR(o,a,c,u.host,u.ssl,u.experimentalForceLongPolling,u.experimentalAutoDetectLongPolling,u.useFetchStreams)}(n._databaseId,((e=n._app)===null||e===void 0?void 0:e.options.appId)||"",n._persistenceKey,s);n._firestoreClient=new gN(n._authCredentials,n._appCheckCredentials,n._queue,i),!((t=s.cache)===null||t===void 0)&&t._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}function DN(n,e){DI(n=pe(n,Be));const t=ot(n);if(t._uninitializedComponentsProvider)throw new E(w.FAILED_PRECONDITION,"SDK cache is already specified.");Gn("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const r=n._freezeSettings(),s=new Pf;return RI(t,s,new yI(s,r.cacheSizeBytes,e==null?void 0:e.forceOwnership))}function NN(n){DI(n=pe(n,Be));const e=ot(n);if(e._uninitializedComponentsProvider)throw new E(w.FAILED_PRECONDITION,"SDK cache is already specified.");Gn("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=n._freezeSettings(),r=new Pf;return RI(e,r,new dN(r,t.cacheSizeBytes))}function RI(n,e,t){const r=new tt;return n.asyncQueue.enqueue(async()=>{try{await gc(n,t),await Kh(n,e),r.resolve()}catch(s){const i=s;if(!vI(i))throw i;Gn("Error enabling indexeddb cache. Falling back to memory cache: "+i),r.reject(i)}}).then(()=>r.promise)}function xN(n){if(n._initialized&&!n._terminated)throw new E(w.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const e=new tt;return n._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(t){if(!on.D())return Promise.resolve();const r=t+"main";await on.delete(r)}(mf(n._databaseId,n._persistenceKey)),e.resolve()}catch(t){e.reject(t)}}),e.promise}function PN(n){return function(e){const t=new tt;return e.asyncQueue.enqueueAndForget(async()=>eN(await Lf(e),t)),t.promise}(ot(n=pe(n,Be)))}function ON(n){return vN(ot(n=pe(n,Be)))}function MN(n){return wN(ot(n=pe(n,Be)))}function LN(n,e){const t=ot(n=pe(n,Be)),r=new CN;return EN(t,n._databaseId,e,r),r}function FN(n,e){return TN(ot(n=pe(n,Be)),e).then(t=>t?new dt(n,null,t.query):null)}function DI(n){if(n._initialized||n._terminated)throw new E(w.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}/**
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
 */class Nn{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Nn(Je.fromBase64String(e))}catch(t){throw new E(w.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new Nn(Je.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class kr{constructor(...e){for(let t=0;t<e.length;++t)if(e[t].length===0)throw new E(w.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ze(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class Ps{constructor(e){this._methodName=e}}/**
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
 */class Hu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new E(w.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new E(w.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return re(this._lat,e._lat)||re(this._long,e._long)}}/**
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
 */const UN=/^__.*__$/;class VN{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return this.fieldMask!==null?new Jn(e,this.data,this.fieldMask,t,this.fieldTransforms):new Li(e,this.data,t,this.fieldTransforms)}}class NI{constructor(e,t,r){this.data=e,this.fieldMask=t,this.fieldTransforms=r}toMutation(e,t){return new Jn(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function xI(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw U()}}class Wu{constructor(e,t,r,s,i,o){this.settings=e,this.databaseId=t,this.serializer=r,this.ignoreUndefinedProperties=s,i===void 0&&this.Jc(),this.fieldTransforms=i||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new Wu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Zc({path:r,ta:!1});return s.ea(e),s}na(e){var t;const r=(t=this.path)===null||t===void 0?void 0:t.child(e),s=this.Zc({path:r,ta:!1});return s.Jc(),s}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Jc(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return this.fieldMask.find(t=>e.isPrefixOf(t))!==void 0||this.fieldTransforms.find(t=>e.isPrefixOf(t.field))!==void 0}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(e.length===0)throw this.ia("Document fields must not be empty");if(xI(this.Yc)&&UN.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class BN{constructor(e,t,r){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=r||Aa(e)}ua(e,t,r,s=!1){return new Wu({Yc:e,methodName:t,oa:r,path:ze.emptyPath(),ta:!1,ra:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Os(n){const e=n._freezeSettings(),t=Aa(n._databaseId);return new BN(n._databaseId,!!e.ignoreUndefinedProperties,t)}function Qu(n,e,t,r,s,i={}){const o=n.ua(i.merge||i.mergeFields?2:0,e,t,s);qf("Data must be an object, but it was:",o,r);const a=MI(r,o);let c,u;if(i.merge)c=new Ot(o.fieldMask),u=o.fieldTransforms;else if(i.mergeFields){const l=[];for(const h of i.mergeFields){const d=Hh(e,h,t);if(!o.contains(d))throw new E(w.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);FI(l,d)||l.push(d)}c=new Ot(l),u=o.fieldTransforms.filter(h=>c.covers(h.field))}else c=null,u=o.fieldTransforms;return new VN(new ut(a),c,u)}class Ra extends Ps{_toFieldTransform(e){if(e.Yc!==2)throw e.Yc===1?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ra}}function PI(n,e,t){return new Wu({Yc:3,oa:e.settings.oa,methodName:n._methodName,ta:t},e.databaseId,e.serializer,e.ignoreUndefinedProperties)}class Vf extends Ps{_toFieldTransform(e){return new Ea(e.path,new mi)}isEqual(e){return e instanceof Vf}}class $N extends Ps{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=PI(this,e,!0),r=this.ca.map(i=>Ms(i,t)),s=new Is(r);return new Ea(e.path,s)}isEqual(e){return this===e}}class qN extends Ps{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=PI(this,e,!0),r=this.ca.map(i=>Ms(i,t)),s=new bs(r);return new Ea(e.path,s)}isEqual(e){return this===e}}class jN extends Ps{constructor(e,t){super(e),this.aa=t}_toFieldTransform(e){const t=new gi(e.serializer,m_(e.serializer,this.aa));return new Ea(e.path,t)}isEqual(e){return this===e}}function Bf(n,e,t,r){const s=n.ua(1,e,t);qf("Data must be an object, but it was:",s,r);const i=[],o=ut.empty();xs(r,(c,u)=>{const l=jf(e,c,t);u=K(u);const h=s.na(l);if(u instanceof Ra)i.push(l);else{const d=Ms(u,h);d!=null&&(i.push(l),o.set(l,d))}});const a=new Ot(i);return new NI(o,a,s.fieldTransforms)}function $f(n,e,t,r,s,i){const o=n.ua(1,e,t),a=[Hh(e,r,t)],c=[s];if(i.length%2!=0)throw new E(w.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<i.length;d+=2)a.push(Hh(e,i[d])),c.push(i[d+1]);const u=[],l=ut.empty();for(let d=a.length-1;d>=0;--d)if(!FI(u,a[d])){const p=a[d];let g=c[d];g=K(g);const v=o.na(p);if(g instanceof Ra)u.push(p);else{const A=Ms(g,v);A!=null&&(u.push(p),l.set(p,A))}}const h=new Ot(u);return new NI(l,h,o.fieldTransforms)}function OI(n,e,t,r=!1){return Ms(t,n.ua(r?4:3,e))}function Ms(n,e){if(LI(n=K(n)))return qf("Unsupported field value:",e,n),MI(n,e);if(n instanceof Ps)return function(t,r){if(!xI(r.Yc))throw r.ia(`${t._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ia(`${t._methodName}() is not currently supported inside arrays`);const s=t._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(n,e),null;if(n===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),n instanceof Array){if(e.settings.ta&&e.Yc!==4)throw e.ia("Nested arrays are not supported");return function(t,r){const s=[];let i=0;for(const o of t){let a=Ms(o,r.sa(i));a==null&&(a={nullValue:"NULL_VALUE"}),s.push(a),i++}return{arrayValue:{values:s}}}(n,e)}return function(t,r){if((t=K(t))===null)return{nullValue:"NULL_VALUE"};if(typeof t=="number")return m_(r.serializer,t);if(typeof t=="boolean")return{booleanValue:t};if(typeof t=="string")return{stringValue:t};if(t instanceof Date){const s=Pe.fromDate(t);return{timestampValue:yi(r.serializer,s)}}if(t instanceof Pe){const s=new Pe(t.seconds,1e3*Math.floor(t.nanoseconds/1e3));return{timestampValue:yi(r.serializer,s)}}if(t instanceof Hu)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}};if(t instanceof Nn)return{bytesValue:A_(r.serializer,t._byteString)};if(t instanceof De){const s=r.databaseId,i=t.firestore._databaseId;if(!i.isEqual(s))throw r.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:uf(t.firestore._databaseId||r.databaseId,t._key.path)}}throw r.ia(`Unsupported field value: ${Gu(t)}`)}(n,e)}function MI(n,e){const t={};return Qw(n)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):xs(n,(r,s)=>{const i=Ms(s,e.Xc(r));i!=null&&(t[r]=i)}),{mapValue:{fields:t}}}function LI(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof Pe||n instanceof Hu||n instanceof Nn||n instanceof De||n instanceof Ps)}function qf(n,e,t){if(!LI(t)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(t)){const r=Gu(t);throw r==="an object"?e.ia(n+" a custom object"):e.ia(n+" "+r)}}function Hh(n,e,t){if((e=K(e))instanceof kr)return e._internalPath;if(typeof e=="string")return jf(n,e);throw Jc("Field path arguments must be of type string or ",n,!1,void 0,t)}const zN=new RegExp("[~\\*/\\[\\]]");function jf(n,e,t){if(e.search(zN)>=0)throw Jc(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,t);try{return new kr(...e.split("."))._internalPath}catch{throw Jc(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,t)}}function Jc(n,e,t,r,s){const i=r&&!r.isEmpty(),o=s!==void 0;let a=`Function ${e}() called with invalid data`;t&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(i||o)&&(c+=" (found",i&&(c+=` in field ${r}`),o&&(c+=` in document ${s}`),c+=")"),new E(w.INVALID_ARGUMENT,a+n+c)}function FI(n,e){return n.some(t=>t.isEqual(e))}/**
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
 */class Xo{constructor(e,t,r,s,i){this._firestore=e,this._userDataWriter=t,this._key=r,this._document=s,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new De(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new KN(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Yu("DocumentSnapshot.get",e));if(t!==null)return this._userDataWriter.convertValue(t)}}}class KN extends Xo{data(){return super.data()}}function Yu(n,e){return typeof e=="string"?jf(n,e):e instanceof kr?e._internalPath:e._delegate._internalPath}/**
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
 */function UI(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new E(w.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class zf{}class Da extends zf{}function ir(n,e,...t){let r=[];e instanceof zf&&r.push(e),r=r.concat(t),function(s){const i=s.filter(a=>a instanceof Kf).length,o=s.filter(a=>a instanceof Ju).length;if(i>1||i>0&&o>0)throw new E(w.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)n=s._apply(n);return n}class Ju extends Da{constructor(e,t,r){super(),this._field=e,this._op=t,this._value=r,this.type="where"}static _create(e,t,r){return new Ju(e,t,r)}_apply(e){const t=this._parse(e);return BI(e._query,t),new dt(e.firestore,e.converter,Oh(e._query,t))}_parse(e){const t=Os(e.firestore);return function(s,i,o,a,c,u,l){let h;if(c.isKeyField()){if(u==="array-contains"||u==="array-contains-any")throw new E(w.INVALID_ARGUMENT,`Invalid Query. You can't perform '${u}' queries on documentId().`);if(u==="in"||u==="not-in"){Mg(l,u);const d=[];for(const p of l)d.push(Og(a,s,p));h={arrayValue:{values:d}}}else h=Og(a,s,l)}else u!=="in"&&u!=="not-in"&&u!=="array-contains-any"||Mg(l,u),h=OI(o,i,l,u==="in"||u==="not-in");return ce.create(c,u,h)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function GN(n,e,t){const r=e,s=Yu("where",n);return Ju._create(s,r,t)}class Kf extends zf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new Kf(e,t)}_parse(e){const t=this._queryConstraints.map(r=>r._parse(e)).filter(r=>r.getFilters().length>0);return t.length===1?t[0]:ve.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return t.getFilters().length===0?e:(function(r,s){let i=r;const o=s.getFlattenedFilters();for(const a of o)BI(i,a),i=Oh(i,a)}(e._query,t),new dt(e.firestore,e.converter,Oh(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}class Gf extends Da{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new Gf(e,t)}_apply(e){const t=function(r,s,i){if(r.startAt!==null)throw new E(w.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(r.endAt!==null)throw new E(w.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const o=new ni(s,i);return function(a,c){if(tf(a)===null){const u=Lu(a);u!==null&&$I(a,u,c.field)}}(r,o),o}(e._query,this._field,this._direction);return new dt(e.firestore,e.converter,function(r,s){const i=r.explicitOrderBy.concat([s]);return new Yn(r.path,r.collectionGroup,i,r.filters.slice(),r.limit,r.limitType,r.startAt,r.endAt)}(e._query,t))}}function HN(n,e="asc"){const t=e,r=Yu("orderBy",n);return Gf._create(r,t)}class Xu extends Da{constructor(e,t,r){super(),this.type=e,this._limit=t,this._limitType=r}static _create(e,t,r){return new Xu(e,t,r)}_apply(e){return new dt(e.firestore,e.converter,jc(e._query,this._limit,this._limitType))}}function WN(n){return TI("limit",n),Xu._create("limit",n,"F")}function QN(n){return TI("limitToLast",n),Xu._create("limitToLast",n,"L")}class Zu extends Da{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new Zu(e,t,r)}_apply(e){const t=VI(e,this.type,this._docOrFields,this._inclusive);return new dt(e.firestore,e.converter,function(r,s){return new Yn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,s,r.endAt)}(e._query,t))}}function YN(...n){return Zu._create("startAt",n,!0)}function JN(...n){return Zu._create("startAfter",n,!1)}class el extends Da{constructor(e,t,r){super(),this.type=e,this._docOrFields=t,this._inclusive=r}static _create(e,t,r){return new el(e,t,r)}_apply(e){const t=VI(e,this.type,this._docOrFields,this._inclusive);return new dt(e.firestore,e.converter,function(r,s){return new Yn(r.path,r.collectionGroup,r.explicitOrderBy.slice(),r.filters.slice(),r.limit,r.limitType,r.startAt,s)}(e._query,t))}}function XN(...n){return el._create("endBefore",n,!1)}function ZN(...n){return el._create("endAt",n,!0)}function VI(n,e,t,r){if(t[0]=K(t[0]),t[0]instanceof Xo)return function(s,i,o,a,c){if(!a)throw new E(w.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${o}().`);const u=[];for(const l of ds(s))if(l.field.isKeyField())u.push(ws(i,a.key));else{const h=a.data.field(l.field);if(Zd(h))throw new E(w.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+l.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(h===null){const d=l.field.canonicalString();throw new E(w.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${d}' (used as the orderBy) does not exist.`)}u.push(h)}return new Ar(u,c)}(n._query,n.firestore._databaseId,e,t[0]._document,r);{const s=Os(n.firestore);return function(i,o,a,c,u,l){const h=i.explicitOrderBy;if(u.length>h.length)throw new E(w.INVALID_ARGUMENT,`Too many arguments provided to ${c}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const d=[];for(let p=0;p<u.length;p++){const g=u[p];if(h[p].field.isKeyField()){if(typeof g!="string")throw new E(w.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${c}(), but got a ${typeof g}`);if(!nf(i)&&g.indexOf("/")!==-1)throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${c}() must be a plain document ID, but '${g}' contains a slash.`);const v=i.path.child(le.fromString(g));if(!P.isDocumentKey(v))throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${c}() must result in a valid document path, but '${v}' is not because it contains an odd number of segments.`);const A=new P(v);d.push(ws(o,A))}else{const v=OI(a,c,g);d.push(v)}}return new Ar(d,l)}(n._query,n.firestore._databaseId,s,e,t,r)}}function Og(n,e,t){if(typeof(t=K(t))=="string"){if(t==="")throw new E(w.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!nf(e)&&t.indexOf("/")!==-1)throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${t}' contains a '/' character.`);const r=e.path.child(le.fromString(t));if(!P.isDocumentKey(r))throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return ws(n,new P(r))}if(t instanceof De)return ws(n,t._key);throw new E(w.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Gu(t)}.`)}function Mg(n,e){if(!Array.isArray(n)||n.length===0)throw new E(w.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${e.toString()}' filters.`)}function BI(n,e){if(e.isInequality()){const r=Lu(n),s=e.field;if(r!==null&&!r.isEqual(s))throw new E(w.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${r.toString()}' and '${s.toString()}'`);const i=tf(n);i!==null&&$I(n,s,i)}const t=function(r,s){for(const i of r)for(const o of i.getFlattenedFilters())if(s.indexOf(o.op)>=0)return o.op;return null}(n.filters,function(r){switch(r){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(e.op));if(t!==null)throw t===e.op?new E(w.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${e.op.toString()}' filter.`):new E(w.INVALID_ARGUMENT,`Invalid query. You cannot use '${e.op.toString()}' filters with '${t.toString()}' filters.`)}function $I(n,e,t){if(!t.isEqual(e))throw new E(w.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${t.toString()}' instead.`)}class Hf{convertValue(e,t="none"){switch(vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Le(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ys(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw U()}}convertObject(e,t){const r={};return xs(e.fields,(s,i)=>{r[s]=this.convertValue(i,t)}),r}convertGeoPoint(e){return new Hu(Le(e.latitude),Le(e.longitude))}convertArray(e,t){return(e.values||[]).map(r=>this.convertValue(r,t))}convertServerTimestamp(e,t){switch(t){case"previous":const r=Yw(e);return r==null?null:this.convertValue(r,t);case"estimate":return this.convertTimestamp(Ko(e));default:return null}}convertTimestamp(e){const t=Er(e);return new Pe(t.seconds,t.nanos)}convertDocumentKey(e,t){const r=le.fromString(e);j(L_(r));const s=new Tr(r.get(1),r.get(3)),i=new P(r.popFirst(5));return s.isEqual(t)||je(`Document ${i} contains a document reference within a different database (${s.projectId}/${s.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}/**
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
 */function tl(n,e,t){let r;return r=n?t&&(t.merge||t.mergeFields)?n.toFirestore(e,t):n.toFirestore(e):e,r}class ex extends Hf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,t)}}/**
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
 */class is{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Hn extends Xo{constructor(e,t,r,s,i,o){super(e,t,r,s,o),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Eo(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const r=this._document.data.field(Yu("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,t.serverTimestamps)}}}class Eo extends Hn{data(e={}){return super.data(e)}}class Rr{constructor(e,t,r,s){this._firestore=e,this._userDataWriter=t,this._snapshot=s,this.metadata=new is(s.hasPendingWrites,s.fromCache),this.query=r}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,t){this._snapshot.docs.forEach(r=>{e.call(t,new Eo(this._firestore,this._userDataWriter,r.key,r,new is(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new E(w.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(r,s){if(r._snapshot.oldDocs.isEmpty()){let i=0;return r._snapshot.docChanges.map(o=>{const a=new Eo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new is(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);return o.doc,{type:"added",doc:a,oldIndex:-1,newIndex:i++}})}{let i=r._snapshot.oldDocs;return r._snapshot.docChanges.filter(o=>s||o.type!==3).map(o=>{const a=new Eo(r._firestore,r._userDataWriter,o.doc.key,o.doc,new is(r._snapshot.mutatedKeys.has(o.doc.key),r._snapshot.fromCache),r.query.converter);let c=-1,u=-1;return o.type!==0&&(c=i.indexOf(o.doc.key),i=i.delete(o.doc.key)),o.type!==1&&(i=i.add(o.doc),u=i.indexOf(o.doc.key)),{type:tx(o.type),doc:a,oldIndex:c,newIndex:u}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function tx(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return U()}}function qI(n,e){return n instanceof Hn&&e instanceof Hn?n._firestore===e._firestore&&n._key.isEqual(e._key)&&(n._document===null?e._document===null:n._document.isEqual(e._document))&&n._converter===e._converter:n instanceof Rr&&e instanceof Rr&&n._firestore===e._firestore&&CI(n.query,e.query)&&n.metadata.isEqual(e.metadata)&&n._snapshot.isEqual(e._snapshot)}/**
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
 */function Ys(n){n=pe(n,De);const e=pe(n.firestore,Be);return II(ot(e),n._key).then(t=>Wf(e,n,t))}class Ls extends Hf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Nn(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new De(this.firestore,null,t)}}function nx(n){n=pe(n,De);const e=pe(n.firestore,Be),t=ot(e),r=new Ls(e);return _N(t,n._key).then(s=>new Hn(e,r,n._key,s,new is(s!==null&&s.hasLocalMutations,!0),n.converter))}function rx(n){n=pe(n,De);const e=pe(n.firestore,Be);return II(ot(e),n._key,{source:"server"}).then(t=>Wf(e,n,t))}function jI(n){n=pe(n,dt);const e=pe(n.firestore,Be),t=ot(e),r=new Ls(e);return UI(n._query),bI(t,n._query).then(s=>new Rr(e,r,n,s))}function sx(n){n=pe(n,dt);const e=pe(n.firestore,Be),t=ot(e),r=new Ls(e);return IN(t,n._query).then(s=>new Rr(e,r,n,s))}function ix(n){n=pe(n,dt);const e=pe(n.firestore,Be),t=ot(e),r=new Ls(e);return bI(t,n._query,{source:"server"}).then(s=>new Rr(e,r,n,s))}function Xc(n,e,t){n=pe(n,De);const r=pe(n.firestore,Be),s=tl(n.converter,e,t);return Na(r,[Qu(Os(r),"setDoc",n._key,s,n.converter!==null,t).toMutation(n._key,xe.none())])}function Zc(n,e,t,...r){n=pe(n,De);const s=pe(n.firestore,Be),i=Os(s);let o;return o=typeof(e=K(e))=="string"||e instanceof kr?$f(i,"updateDoc",n._key,e,t,r):Bf(i,"updateDoc",n._key,e),Na(s,[o.toMutation(n._key,xe.exists(!0))])}function ox(n){return Na(pe(n.firestore,Be),[new Fi(n._key,xe.none())])}function ax(n,e){const t=pe(n.firestore,Be),r=$t(n),s=tl(n.converter,e);return Na(t,[Qu(Os(n.firestore),"addDoc",r._key,s,n.converter!==null,{}).toMutation(r._key,xe.exists(!1))]).then(()=>r)}function zI(n,...e){var t,r,s;n=K(n);let i={includeMetadataChanges:!1},o=0;typeof e[o]!="object"||Gh(e[o])||(i=e[o],o++);const a={includeMetadataChanges:i.includeMetadataChanges};if(Gh(e[o])){const h=e[o];e[o]=(t=h.next)===null||t===void 0?void 0:t.bind(h),e[o+1]=(r=h.error)===null||r===void 0?void 0:r.bind(h),e[o+2]=(s=h.complete)===null||s===void 0?void 0:s.bind(h)}let c,u,l;if(n instanceof De)u=pe(n.firestore,Be),l=Mi(n._key.path),c={next:h=>{e[o]&&e[o](Wf(u,n,h))},error:e[o+1],complete:e[o+2]};else{const h=pe(n,dt);u=pe(h.firestore,Be),l=h._query;const d=new Ls(u);c={next:p=>{e[o]&&e[o](new Rr(u,d,h,p))},error:e[o+1],complete:e[o+2]},UI(n._query)}return function(h,d,p,g){const v=new zu(g),A=new Af(d,v,p);return h.asyncQueue.enqueueAndForget(async()=>Ef(await bi(h),A)),()=>{v.yc(),h.asyncQueue.enqueueAndForget(async()=>Tf(await bi(h),A))}}(ot(u),l,a,c)}function cx(n,e){return bN(ot(n=pe(n,Be)),Gh(e)?e:{next:e})}function Na(n,e){return function(t,r){const s=new tt;return t.asyncQueue.enqueueAndForget(async()=>YD(await Lf(t),r,s)),s.promise}(ot(n),e)}function Wf(n,e,t){const r=t.docs.get(e._key),s=new Ls(n);return new Hn(n,s,e._key,r,new is(t.hasPendingWrites,t.fromCache),e.converter)}/**
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
 */const ux={maxAttempts:5};/**
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
 */class lx{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Os(e)}set(e,t,r){this._verifyNotCommitted();const s=lr(e,this._firestore),i=tl(s.converter,t,r),o=Qu(this._dataReader,"WriteBatch.set",s._key,i,s.converter!==null,r);return this._mutations.push(o.toMutation(s._key,xe.none())),this}update(e,t,r,...s){this._verifyNotCommitted();const i=lr(e,this._firestore);let o;return o=typeof(t=K(t))=="string"||t instanceof kr?$f(this._dataReader,"WriteBatch.update",i._key,t,r,s):Bf(this._dataReader,"WriteBatch.update",i._key,t),this._mutations.push(o.toMutation(i._key,xe.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=lr(e,this._firestore);return this._mutations=this._mutations.concat(new Fi(t._key,xe.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new E(w.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function lr(n,e){if((n=K(n)).firestore!==e)throw new E(w.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
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
 */class hx extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Os(e)}get(e){const t=lr(e,this._firestore),r=new ex(this._firestore);return this._transaction.lookup([t._key]).then(s=>{if(!s||s.length!==1)return U();const i=s[0];if(i.isFoundDocument())return new Xo(this._firestore,r,i.key,i,t.converter);if(i.isNoDocument())return new Xo(this._firestore,r,t._key,null,t.converter);throw U()})}set(e,t,r){const s=lr(e,this._firestore),i=tl(s.converter,t,r),o=Qu(this._dataReader,"Transaction.set",s._key,i,s.converter!==null,r);return this._transaction.set(s._key,o),this}update(e,t,r,...s){const i=lr(e,this._firestore);let o;return o=typeof(t=K(t))=="string"||t instanceof kr?$f(this._dataReader,"Transaction.update",i._key,t,r,s):Bf(this._dataReader,"Transaction.update",i._key,t),this._transaction.update(i._key,o),this}delete(e){const t=lr(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=lr(e,this._firestore),r=new Ls(this._firestore);return super.get(e).then(s=>new Hn(this._firestore,r,t._key,s._document,new is(!1,!1),t.converter))}}function dx(n,e,t){n=pe(n,Be);const r=Object.assign(Object.assign({},ux),t);return function(s){if(s.maxAttempts<1)throw new E(w.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,i,o){const a=new tt;return s.asyncQueue.enqueueAndForget(async()=>{const c=await yN(s);new mN(s.asyncQueue,c,o,i,a).run()}),a.promise}(ot(n),s=>e(new hx(n,s)),r)}/**
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
 */function fx(){return new Ra("deleteField")}function px(){return new Vf("serverTimestamp")}function KI(...n){return new $N("arrayUnion",n)}function GI(...n){return new qN("arrayRemove",n)}function mx(n){return new jN("increment",n)}(function(n,e=!0){(function(t){Oi=t})(Ds),Ir(new Rn("firestore",(t,{instanceIdentifier:r,options:s})=>{const i=t.getProvider("app").getImmediate(),o=new Be(new Ck(t.getProvider("auth-internal")),new Nk(t.getProvider("app-check-internal")),function(a,c){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new E(w.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tr(a.options.projectId,c)}(i,r),i);return s=Object.assign({useFetchStreams:e},s),o._setSettings(s),o},"PUBLIC").setMultipleInstances(!0)),un(Om,"3.10.0",n),un(Om,"3.10.0","esm2017")})();const gx="@firebase/firestore-compat",yx="0.3.6";/**
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
 */function Qf(n,e){if(e===void 0)return{merge:!1};if(e.mergeFields!==void 0&&e.merge!==void 0)throw new E("invalid-argument",`Invalid options passed to function ${n}(): You cannot specify both "merge" and "mergeFields".`);return e}/**
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
 */function Lg(){if(typeof Uint8Array>"u")throw new E("unimplemented","Uint8Arrays are not available in this environment.")}function Fg(){if(!sR())throw new E("unimplemented","Blobs are unavailable in Firestore in this environment.")}class Zo{constructor(e){this._delegate=e}static fromBase64String(e){return Fg(),new Zo(Nn.fromBase64String(e))}static fromUint8Array(e){return Lg(),new Zo(Nn.fromUint8Array(e))}toBase64(){return Fg(),this._delegate.toBase64()}toUint8Array(){return Lg(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}/**
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
 */function Wh(n){return vx(n,["next","error","complete"])}function vx(n,e){if(typeof n!="object"||n===null)return!1;const t=n;for(const r of e)if(r in t&&typeof t[r]=="function")return!0;return!1}/**
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
 */class wx{enableIndexedDbPersistence(e,t){return DN(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return NN(e._delegate)}clearIndexedDbPersistence(e){return xN(e._delegate)}}class HI{constructor(e,t,r){this._delegate=t,this._persistenceProvider=r,this.INTERNAL={delete:()=>this.terminate()},e instanceof Tr||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();!e.merge&&t.host!==e.host&&Gn("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,r={}){SI(this._delegate,e,t,r)}enableNetwork(){return ON(this._delegate)}disableNetwork(){return MN(this._delegate)}enablePersistence(e){let t=!1,r=!1;return e&&(t=!!e.synchronizeTabs,r=!!e.experimentalForceOwningTab,EI("synchronizeTabs",t,"experimentalForceOwningTab",r)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,r)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return PN(this._delegate)}onSnapshotsInSync(e){return cx(this._delegate,e)}get app(){if(!this._appCompat)throw new E("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new Ei(this,Uf(this._delegate,e))}catch(t){throw Tt(t,"collection()","Firestore.collection()")}}doc(e){try{return new Wt(this,$t(this._delegate,e))}catch(t){throw Tt(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Et(this,SN(this._delegate,e))}catch(t){throw Tt(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return dx(this._delegate,t=>e(new WI(this,t)))}batch(){return ot(this._delegate),new QI(new lx(this._delegate,e=>Na(this._delegate,e)))}loadBundle(e){return LN(this._delegate,e)}namedQuery(e){return FN(this._delegate,e).then(t=>t?new Et(this,t):null)}}class nl extends Hf{constructor(e){super(),this.firestore=e}convertBytes(e){return new Zo(new Nn(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return Wt.forKey(t,this.firestore,null)}}function _x(n){Ek(n)}class WI{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new nl(e)}get(e){const t=os(e);return this._delegate.get(t).then(r=>new ea(this._firestore,new Hn(this._firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,t.converter)))}set(e,t,r){const s=os(e);return r?(Qf("Transaction.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const i=os(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,r,...s),this}delete(e){const t=os(e);return this._delegate.delete(t),this}}class QI{constructor(e){this._delegate=e}set(e,t,r){const s=os(e);return r?(Qf("WriteBatch.set",r),this._delegate.set(s,t,r)):this._delegate.set(s,t),this}update(e,t,r,...s){const i=os(e);return arguments.length===2?this._delegate.update(i,t):this._delegate.update(i,t,r,...s),this}delete(e){const t=os(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class As{constructor(e,t,r){this._firestore=e,this._userDataWriter=t,this._delegate=r}fromFirestore(e,t){const r=new Eo(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new ta(this._firestore,r),t??{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const r=As.INSTANCES;let s=r.get(e);s||(s=new WeakMap,r.set(e,s));let i=s.get(t);return i||(i=new As(e,new nl(e),t),s.set(t,i)),i}}As.INSTANCES=new WeakMap;class Wt{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new nl(e)}static forPath(e,t,r){if(e.length%2!==0)throw new E("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new Wt(t,new De(t._delegate,r,new P(e)))}static forKey(e,t,r){return new Wt(t,new De(t._delegate,r,e))}get id(){return this._delegate.id}get parent(){return new Ei(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new Ei(this.firestore,Uf(this._delegate,e))}catch(t){throw Tt(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=K(e),e instanceof De?AI(this._delegate,e):!1}set(e,t){t=Qf("DocumentReference.set",t);try{return t?Xc(this._delegate,e,t):Xc(this._delegate,e)}catch(r){throw Tt(r,"setDoc()","DocumentReference.set()")}}update(e,t,...r){try{return arguments.length===1?Zc(this._delegate,e):Zc(this._delegate,e,t,...r)}catch(s){throw Tt(s,"updateDoc()","DocumentReference.update()")}}delete(){return ox(this._delegate)}onSnapshot(...e){const t=YI(e),r=JI(e,s=>new ea(this.firestore,new Hn(this.firestore._delegate,this._userDataWriter,s._key,s._document,s.metadata,this._delegate.converter)));return zI(this._delegate,t,r)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=nx(this._delegate):(e==null?void 0:e.source)==="server"?t=rx(this._delegate):t=Ys(this._delegate),t.then(r=>new ea(this.firestore,new Hn(this.firestore._delegate,this._userDataWriter,r._key,r._document,r.metadata,this._delegate.converter)))}withConverter(e){return new Wt(this.firestore,e?this._delegate.withConverter(As.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Tt(n,e,t){return n.message=n.message.replace(e,t),n}function YI(n){for(const e of n)if(typeof e=="object"&&!Wh(e))return e;return{}}function JI(n,e){var t,r;let s;return Wh(n[0])?s=n[0]:Wh(n[1])?s=n[1]:typeof n[0]=="function"?s={next:n[0],error:n[1],complete:n[2]}:s={next:n[1],error:n[2],complete:n[3]},{next:i=>{s.next&&s.next(e(i))},error:(t=s.error)===null||t===void 0?void 0:t.bind(s),complete:(r=s.complete)===null||r===void 0?void 0:r.bind(s)}}class ea{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new Wt(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return qI(this._delegate,e._delegate)}}class ta extends ea{data(e){const t=this._delegate.data(e);return Tk(t!==void 0),t}}class Et{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new nl(e)}where(e,t,r){try{return new Et(this.firestore,ir(this._delegate,GN(e,t,r)))}catch(s){throw Tt(s,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Et(this.firestore,ir(this._delegate,HN(e,t)))}catch(r){throw Tt(r,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Et(this.firestore,ir(this._delegate,WN(e)))}catch(t){throw Tt(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Et(this.firestore,ir(this._delegate,QN(e)))}catch(t){throw Tt(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Et(this.firestore,ir(this._delegate,YN(...e)))}catch(t){throw Tt(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Et(this.firestore,ir(this._delegate,JN(...e)))}catch(t){throw Tt(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Et(this.firestore,ir(this._delegate,XN(...e)))}catch(t){throw Tt(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Et(this.firestore,ir(this._delegate,ZN(...e)))}catch(t){throw Tt(t,"endAt()","Query.endAt()")}}isEqual(e){return CI(this._delegate,e._delegate)}get(e){let t;return(e==null?void 0:e.source)==="cache"?t=sx(this._delegate):(e==null?void 0:e.source)==="server"?t=ix(this._delegate):t=jI(this._delegate),t.then(r=>new Qh(this.firestore,new Rr(this.firestore._delegate,this._userDataWriter,this._delegate,r._snapshot)))}onSnapshot(...e){const t=YI(e),r=JI(e,s=>new Qh(this.firestore,new Rr(this.firestore._delegate,this._userDataWriter,this._delegate,s._snapshot)));return zI(this._delegate,t,r)}withConverter(e){return new Et(this.firestore,e?this._delegate.withConverter(As.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Ix{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new ta(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Qh{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Et(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map(e=>new ta(this._firestore,e))}docChanges(e){return this._delegate.docChanges(e).map(t=>new Ix(this._firestore,t))}forEach(e,t){this._delegate.forEach(r=>{e.call(t,new ta(this._firestore,r))})}isEqual(e){return qI(this._delegate,e._delegate)}}class Ei extends Et{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new Wt(this.firestore,e):null}doc(e){try{return e===void 0?new Wt(this.firestore,$t(this._delegate)):new Wt(this.firestore,$t(this._delegate,e))}catch(t){throw Tt(t,"doc()","CollectionReference.doc()")}}add(e){return ax(this._delegate,e).then(t=>new Wt(this.firestore,t))}isEqual(e){return AI(this._delegate,e._delegate)}withConverter(e){return new Ei(this.firestore,e?this._delegate.withConverter(As.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function os(n){return pe(n,De)}/**
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
 */class Yf{constructor(...e){this._delegate=new kr(...e)}static documentId(){return new Yf(ze.keyField().canonicalString())}isEqual(e){return e=K(e),e instanceof kr?this._delegate._internalPath.isEqual(e._internalPath):!1}}/**
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
 */class es{constructor(e){this._delegate=e}static serverTimestamp(){const e=px();return e._methodName="FieldValue.serverTimestamp",new es(e)}static delete(){const e=fx();return e._methodName="FieldValue.delete",new es(e)}static arrayUnion(...e){const t=KI(...e);return t._methodName="FieldValue.arrayUnion",new es(t)}static arrayRemove(...e){const t=GI(...e);return t._methodName="FieldValue.arrayRemove",new es(t)}static increment(e){const t=mx(e);return t._methodName="FieldValue.increment",new es(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}/**
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
 */const bx={Firestore:HI,GeoPoint:Hu,Timestamp:Pe,Blob:Zo,Transaction:WI,WriteBatch:QI,DocumentReference:Wt,DocumentSnapshot:ea,Query:Et,QueryDocumentSnapshot:ta,QuerySnapshot:Qh,CollectionReference:Ei,FieldPath:Yf,FieldValue:es,setLogLevel:_x,CACHE_SIZE_UNLIMITED:kN};function Ex(n,e){n.INTERNAL.registerComponent(new Rn("firestore-compat",t=>{const r=t.getProvider("app-compat").getImmediate(),s=t.getProvider("firestore").getImmediate();return e(r,s)},"PUBLIC").setServiceProps(Object.assign({},bx)))}/**
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
 */function Tx(n){Ex(n,(e,t)=>new HI(e,t,new wx)),n.registerVersion(gx,yx)}Tx(ua);function Jf(n,e){var t={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&e.indexOf(r)<0&&(t[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(n);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(n,r[s])&&(t[r[s]]=n[r[s]]);return t}const no={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},js={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};/**
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
 */function Sx(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function XI(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ax=Sx,Cx=XI,ZI=new Rs("auth","Firebase",XI());/**
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
 */const Ug=new vu("@firebase/auth");function yc(n,...e){Ug.logLevel<=fe.ERROR&&Ug.error(`Auth (${Ds}): ${n}`,...e)}/**
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
 */function rt(n,...e){throw Xf(n,...e)}function ht(n,...e){return Xf(n,...e)}function eb(n,e,t){const r=Object.assign(Object.assign({},Cx()),{[e]:t});return new Rs("auth","Firebase",r).create(e,{appName:n.name})}function qi(n,e,t){const r=t;if(!(e instanceof r))throw r.name!==e.constructor.name&&rt(n,"argument-error"),eb(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Xf(n,...e){if(typeof n!="string"){const t=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(t,...r)}return ZI.create(n,...e)}function k(n,e,...t){if(!n)throw Xf(e,...t)}function Tn(n){const e="INTERNAL ASSERTION FAILED: "+n;throw yc(e),new Error(e)}function hn(n,e){n||Tn(e)}/**
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
 */const Vg=new Map;function qt(n){hn(n instanceof Function,"Expected a class definition");let e=Vg.get(n);return e?(hn(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Vg.set(n,e),e)}/**
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
 */function kx(n,e){const t=ca(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),i=t.getOptions();if(Dc(i,e??{}))return s;rt(s,"already-initialized")}return t.initialize({options:e})}function Rx(n,e){const t=(e==null?void 0:e.persistence)||[],r=(Array.isArray(t)?t:[t]).map(qt);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
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
 */function na(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Zf(){return Bg()==="http:"||Bg()==="https:"}function Bg(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
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
 */function Dx(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Zf()||Iv()||"connection"in navigator)?navigator.onLine:!0}function Nx(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
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
 */class xa{constructor(e,t){this.shortDelay=e,this.longDelay=t,hn(t>e,"Short delay should be less than long delay!"),this.isMobile=HS()||Sd()}get(){return Dx()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function ep(n,e){hn(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
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
 */class tb{static initialize(e,t,r){this.fetchImpl=e,t&&(this.headersImpl=t),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Tn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Tn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Tn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const xx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
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
 */const Px=new xa(3e4,6e4);function Xe(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function at(n,e,t,r,s={}){return nb(n,s,async()=>{let i={},o={};r&&(e==="GET"?o=r:i={body:JSON.stringify(r)});const a=Ni(Object.assign({key:n.config.apiKey},o)).slice(1),c=await n._getAdditionalHeaders();return c["Content-Type"]="application/json",n.languageCode&&(c["X-Firebase-Locale"]=n.languageCode),tb.fetch()(rb(n,n.config.apiHost,t,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},i))})}async function nb(n,e,t){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},xx),e);try{const s=new Ox(n),i=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await i.json();if("needConfirmation"in o)throw ho(n,"account-exists-with-different-credential",o);if(i.ok&&!("errorMessage"in o))return o;{const a=i.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw ho(n,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw ho(n,"email-already-in-use",o);if(c==="USER_DISABLED")throw ho(n,"user-disabled",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw eb(n,l,u);rt(n,l)}}catch(s){if(s instanceof At)throw s;rt(n,"network-request-failed",{message:String(s)})}}async function Zn(n,e,t,r,s={}){const i=await at(n,e,t,r,s);return"mfaPendingCredential"in i&&rt(n,"multi-factor-auth-required",{_serverResponse:i}),i}function rb(n,e,t,r){const s=`${e}${t}?${r}`;return n.config.emulator?ep(n.config,s):`${n.config.apiScheme}://${s}`}class Ox{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,r)=>{this.timer=setTimeout(()=>r(ht(this.auth,"network-request-failed")),Px.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ho(n,e,t){const r={appName:n.name};t.email&&(r.email=t.email),t.phoneNumber&&(r.phoneNumber=t.phoneNumber);const s=ht(n,e,r);return s.customData._tokenResponse=t,s}/**
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
 */async function Mx(n,e){return at(n,"POST","/v1/accounts:delete",e)}async function Lx(n,e){return at(n,"POST","/v1/accounts:update",e)}async function Fx(n,e){return at(n,"POST","/v1/accounts:lookup",e)}/**
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
 */function To(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Ux(n,e=!1){const t=K(n),r=await t.getIdToken(e),s=rl(r);k(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const i=typeof s.firebase=="object"?s.firebase:void 0,o=i==null?void 0:i.sign_in_provider;return{claims:s,token:r,authTime:To(jl(s.auth_time)),issuedAtTime:To(jl(s.iat)),expirationTime:To(jl(s.exp)),signInProvider:o||null,signInSecondFactor:(i==null?void 0:i.sign_in_second_factor)||null}}function jl(n){return Number(n)*1e3}function rl(n){const[e,t,r]=n.split(".");if(e===void 0||t===void 0||r===void 0)return yc("JWT malformed, contained fewer than 3 sections"),null;try{const s=vv(t);return s?JSON.parse(s):(yc("Failed to decode base64 JWT payload"),null)}catch(s){return yc("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Vx(n){const e=rl(n);return k(e,"internal-error"),k(typeof e.exp<"u","internal-error"),k(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Wn(n,e,t=!1){if(t)return e;try{return await e}catch(r){throw r instanceof At&&Bx(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function Bx({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
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
 */class $x{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class sb{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=To(this.lastLoginAt),this.creationTime=To(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function ra(n){var e;const t=n.auth,r=await n.getIdToken(),s=await Wn(n,Fx(t,{idToken:r}));k(s==null?void 0:s.users.length,t,"internal-error");const i=s.users[0];n._notifyReloadListener(i);const o=!((e=i.providerUserInfo)===null||e===void 0)&&e.length?zx(i.providerUserInfo):[],a=jx(n.providerData,o),c=n.isAnonymous,u=!(n.email&&i.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:a,metadata:new sb(i.createdAt,i.lastLoginAt),isAnonymous:l};Object.assign(n,h)}async function qx(n){const e=K(n);await ra(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jx(n,e){return[...n.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function zx(n){return n.map(e=>{var{providerId:t}=e,r=Jf(e,["providerId"]);return{providerId:t,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function Kx(n,e){const t=await nb(n,{},async()=>{const r=Ni({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:i}=n.config,o=rb(n,s,"/v1/token",`key=${i}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tb.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
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
 */class sa{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){k(e.idToken,"internal-error"),k(typeof e.idToken<"u","internal-error"),k(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Vx(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return k(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:r,refreshToken:s,expiresIn:i}=await Kx(e,t);this.updateTokensAndExpiration(r,s,Number(i))}updateTokensAndExpiration(e,t,r){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,t){const{refreshToken:r,accessToken:s,expirationTime:i}=t,o=new sa;return r&&(k(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),s&&(k(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),i&&(k(typeof i=="number","internal-error",{appName:e}),o.expirationTime=i),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new sa,this.toJSON())}_performRefresh(){return Tn("not implemented")}}/**
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
 */function or(n,e){k(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class fs{constructor(e){var{uid:t,auth:r,stsTokenManager:s}=e,i=Jf(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new $x(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new sb(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await Wn(this,this.stsTokenManager.getToken(this.auth,e));return k(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Ux(this,e)}reload(){return qx(this)}_assign(e){this!==e&&(k(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new fs(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){k(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),t&&await ra(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Wn(this,Mx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var r,s,i,o,a,c,u,l;const h=(r=t.displayName)!==null&&r!==void 0?r:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,p=(i=t.phoneNumber)!==null&&i!==void 0?i:void 0,g=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,A=(c=t._redirectEventId)!==null&&c!==void 0?c:void 0,R=(u=t.createdAt)!==null&&u!==void 0?u:void 0,V=(l=t.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:D,emailVerified:W,isAnonymous:X,providerData:ne,stsTokenManager:ge}=t;k(D&&ge,e,"internal-error");const J=sa.fromJSON(this.name,ge);k(typeof D=="string",e,"internal-error"),or(h,e.name),or(d,e.name),k(typeof W=="boolean",e,"internal-error"),k(typeof X=="boolean",e,"internal-error"),or(p,e.name),or(g,e.name),or(v,e.name),or(A,e.name),or(R,e.name),or(V,e.name);const Ae=new fs({uid:D,auth:e,email:d,emailVerified:W,displayName:h,isAnonymous:X,photoURL:g,phoneNumber:p,tenantId:v,stsTokenManager:J,createdAt:R,lastLoginAt:V});return ne&&Array.isArray(ne)&&(Ae.providerData=ne.map(be=>Object.assign({},be))),A&&(Ae._redirectEventId=A),Ae}static async _fromIdTokenResponse(e,t,r=!1){const s=new sa;s.updateFromServerResponse(t);const i=new fs({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await ra(i),i}}/**
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
 */class ib{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ib.type="NONE";const Ti=ib;/**
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
 */function ps(n,e,t){return`firebase:${n}:${e}:${t}`}class si{constructor(e,t,r){this.persistence=e,this.auth=t,this.userKey=r;const{config:s,name:i}=this.auth;this.fullUserKey=ps(this.userKey,s.apiKey,i),this.fullPersistenceKey=ps("persistence",s.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?fs._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,r="authUser"){if(!t.length)return new si(qt(Ti),e,r);const s=(await Promise.all(t.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let i=s[0]||qt(Ti);const o=ps(r,e.config.apiKey,e.name);let a=null;for(const u of t)try{const l=await u._get(o);if(l){const h=fs._fromJSON(e,l);u!==i&&(a=h),i=u;break}}catch{}const c=s.filter(u=>u._shouldAllowMigration);return!i._shouldAllowMigration||!c.length?new si(i,e,r):(i=c[0],a&&await i._set(o,a.toJSON()),await Promise.all(t.map(async u=>{if(u!==i)try{await u._remove(o)}catch{}})),new si(i,e,r))}}/**
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
 */function $g(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cb(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(ob(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(ub(e))return"Blackberry";if(lb(e))return"Webos";if(tp(e))return"Safari";if((e.includes("chrome/")||ab(e))&&!e.includes("edge/"))return"Chrome";if(Pa(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(t);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function ob(n=Me()){return/firefox\//i.test(n)}function tp(n=Me()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ab(n=Me()){return/crios\//i.test(n)}function cb(n=Me()){return/iemobile/i.test(n)}function Pa(n=Me()){return/android/i.test(n)}function ub(n=Me()){return/blackberry/i.test(n)}function lb(n=Me()){return/webos/i.test(n)}function ji(n=Me()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Gx(n=Me()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(n)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(n)}function Hx(n=Me()){var e;return ji(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Wx(){return bv()&&document.documentMode===10}function hb(n=Me()){return ji(n)||Pa(n)||lb(n)||ub(n)||/windows phone/i.test(n)||cb(n)}function Qx(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function db(n,e=[]){let t;switch(n){case"Browser":t=$g(Me());break;case"Worker":t=`${$g(Me())}-${n}`;break;default:t=n}const r=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${Ds}/${r}`}/**
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
 */class Yx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const r=i=>new Promise((o,a)=>{try{const c=e(i);o(c)}catch(c){a(c)}});r.onAbort=t,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const r of this.queue)await r(e),r.onAbort&&t.push(r.onAbort)}catch(r){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class Jx{constructor(e,t,r){this.app=e,this.heartbeatServiceProvider=t,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qg(this),this.idTokenSubscription=new qg(this),this.beforeStateQueue=new Yx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=ZI,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=qt(t)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await si.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const r=await this.assertedPersistence.getCurrentUser();let s=r,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,c=await this.tryRedirectSignIn(e);(!o||o===a)&&(c!=null&&c.user)&&(s=c.user,i=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return k(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await ra(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Nx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?K(e):null;return t&&k(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&k(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(qt(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Rs("auth","Firebase",e())}onAuthStateChanged(e,t,r){return this.registerStateListener(this.authStateSubscription,e,t,r)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,r){return this.registerStateListener(this.idTokenSubscription,e,t,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const r=await this.getOrInitRedirectPersistenceManager(t);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&qt(e)||this._popupRedirectResolver;k(t,this,"argument-error"),this.redirectPersistenceManager=await si.create(this,[qt(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,r;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,r,s){if(this._deleted)return()=>{};const i=typeof t=="function"?t:t.next.bind(t),o=this._isInitialized?Promise.resolve():this._initializationPromise;return k(o,this,"internal-error"),o.then(()=>i(this.currentUser)),typeof t=="function"?e.addObserver(t,r,s):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return k(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=db(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(t["X-Firebase-Client"]=r),t}}function st(n){return K(n)}class qg{constructor(e){this.auth=e,this.observer=null,this.addObserver=Ev(t=>this.observer=t)}get next(){return k(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function fb(n,e,t){const r=st(n);k(r._canInitEmulator,r,"emulator-config-failed"),k(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),i=pb(e),{host:o,port:a}=Xx(e),c=a===null?"":`:${a}`;r.config.emulator={url:`${i}//${o}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:i.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||Zx()}function pb(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function Xx(n){const e=pb(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const r=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const i=s[1];return{host:i,port:jg(r.substr(i.length+1))}}else{const[i,o]=r.split(":");return{host:i,port:jg(o)}}}function jg(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function Zx(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
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
 */class zi{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Tn("not implemented")}_getIdTokenResponse(e){return Tn("not implemented")}_linkToIdToken(e,t){return Tn("not implemented")}_getReauthenticationResolver(e){return Tn("not implemented")}}/**
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
 */async function mb(n,e){return at(n,"POST","/v1/accounts:resetPassword",Xe(n,e))}async function gb(n,e){return at(n,"POST","/v1/accounts:update",e)}async function e1(n,e){return at(n,"POST","/v1/accounts:update",Xe(n,e))}/**
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
 */async function t1(n,e){return Zn(n,"POST","/v1/accounts:signInWithPassword",Xe(n,e))}async function sl(n,e){return at(n,"POST","/v1/accounts:sendOobCode",Xe(n,e))}async function n1(n,e){return sl(n,e)}async function r1(n,e){return sl(n,e)}async function s1(n,e){return sl(n,e)}async function i1(n,e){return sl(n,e)}/**
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
 */async function o1(n,e){return Zn(n,"POST","/v1/accounts:signInWithEmailLink",Xe(n,e))}async function a1(n,e){return Zn(n,"POST","/v1/accounts:signInWithEmailLink",Xe(n,e))}/**
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
 */class ia extends zi{constructor(e,t,r,s=null){super("password",r),this._email=e,this._password=t,this._tenantId=s}static _fromEmailAndPassword(e,t){return new ia(e,t,"password")}static _fromEmailAndCode(e,t,r=null){return new ia(e,t,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;if(t!=null&&t.email&&(t!=null&&t.password)){if(t.signInMethod==="password")return this._fromEmailAndPassword(t.email,t.password);if(t.signInMethod==="emailLink")return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return t1(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return o1(e,{email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return gb(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return a1(e,{idToken:t,email:this._email,oobCode:this._password});default:rt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
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
 */async function jn(n,e){return Zn(n,"POST","/v1/accounts:signInWithIdp",Xe(n,e))}/**
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
 */const c1="http://localhost";class xn extends zi{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new xn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):rt("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=t,i=Jf(t,["providerId","signInMethod"]);if(!r||!s)return null;const o=new xn(r,s);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return jn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,jn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jn(e,t)}buildRequest(){const e={requestUri:c1,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=Ni(t)}return e}}/**
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
 */async function u1(n,e){return at(n,"POST","/v1/accounts:sendVerificationCode",Xe(n,e))}async function l1(n,e){return Zn(n,"POST","/v1/accounts:signInWithPhoneNumber",Xe(n,e))}async function h1(n,e){const t=await Zn(n,"POST","/v1/accounts:signInWithPhoneNumber",Xe(n,e));if(t.temporaryProof)throw ho(n,"account-exists-with-different-credential",t);return t}const d1={USER_NOT_FOUND:"user-not-found"};async function f1(n,e){const t=Object.assign(Object.assign({},e),{operation:"REAUTH"});return Zn(n,"POST","/v1/accounts:signInWithPhoneNumber",Xe(n,t),d1)}/**
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
 */class ms extends zi{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new ms({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new ms({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return l1(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return h1(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return f1(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:r,verificationCode:s}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:r,code:s}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){typeof e=="string"&&(e=JSON.parse(e));const{verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i}=e;return!r&&!t&&!s&&!i?null:new ms({verificationId:t,verificationCode:r,phoneNumber:s,temporaryProof:i})}}/**
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
 */function p1(n){switch(n){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function m1(n){const e=Ws(oo(n)).link,t=e?Ws(oo(e)).deep_link_id:null,r=Ws(oo(n)).deep_link_id;return(r?Ws(oo(r)).link:null)||r||t||e||n}class il{constructor(e){var t,r,s,i,o,a;const c=Ws(oo(e)),u=(t=c.apiKey)!==null&&t!==void 0?t:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,h=p1((s=c.mode)!==null&&s!==void 0?s:null);k(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=(i=c.continueUrl)!==null&&i!==void 0?i:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const t=m1(e);try{return new il(t)}catch{return null}}}/**
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
 */class Fr{constructor(){this.providerId=Fr.PROVIDER_ID}static credential(e,t){return ia._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const r=il.parseLink(t);return k(r,"argument-error"),ia._fromEmailAndCode(e,r.code,r.tenantId)}}Fr.PROVIDER_ID="password";Fr.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Fr.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
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
 */class er{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ki extends er{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class ii extends Ki{static credentialFromJSON(e){const t=typeof e=="string"?JSON.parse(e):e;return k("providerId"in t&&"signInMethod"in t,"argument-error"),xn._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return k(e.idToken||e.accessToken,"argument-error"),xn._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return ii.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return ii.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:i,nonce:o,providerId:a}=e;if(!r&&!s&&!t&&!i||!a)return null;try{return new ii(a)._credential({idToken:t,accessToken:r,nonce:o,pendingToken:i})}catch{return null}}}/**
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
 */class vn extends Ki{constructor(){super("facebook.com")}static credential(e){return xn._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.FACEBOOK_SIGN_IN_METHOD="facebook.com";vn.PROVIDER_ID="facebook.com";/**
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
 */class wn extends Ki{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return xn._fromParams({providerId:wn.PROVIDER_ID,signInMethod:wn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return wn.credentialFromTaggedObject(e)}static credentialFromError(e){return wn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:r}=e;if(!t&&!r)return null;try{return wn.credential(t,r)}catch{return null}}}wn.GOOGLE_SIGN_IN_METHOD="google.com";wn.PROVIDER_ID="google.com";/**
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
 */class _n extends Ki{constructor(){super("github.com")}static credential(e){return xn._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return _n.credential(e.oauthAccessToken)}catch{return null}}}_n.GITHUB_SIGN_IN_METHOD="github.com";_n.PROVIDER_ID="github.com";/**
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
 */const g1="http://localhost";class Si extends zi{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return jn(e,t)}_linkToIdToken(e,t){const r=this.buildRequest();return r.idToken=t,jn(e,r)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,jn(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s,pendingToken:i}=t;return!r||!s||!i||r!==s?null:new Si(r,i)}static _create(e,t){return new Si(e,t)}buildRequest(){return{requestUri:g1,returnSecureToken:!0,pendingToken:this.pendingToken}}}/**
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
 */const y1="saml.";class eu extends er{constructor(e){k(e.startsWith(y1),"argument-error"),super(e)}static credentialFromResult(e){return eu.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return eu.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=Si.fromJSON(e);return k(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:r}=e;if(!t||!r)return null;try{return Si._create(r,t)}catch{return null}}}/**
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
 */class In extends Ki{constructor(){super("twitter.com")}static credential(e,t){return xn._fromParams({providerId:In.PROVIDER_ID,signInMethod:In.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return In.credentialFromTaggedObject(e)}static credentialFromError(e){return In.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:r}=e;if(!t||!r)return null;try{return In.credential(t,r)}catch{return null}}}In.TWITTER_SIGN_IN_METHOD="twitter.com";In.PROVIDER_ID="twitter.com";/**
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
 */async function yb(n,e){return Zn(n,"POST","/v1/accounts:signUp",Xe(n,e))}/**
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
 */class Yt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,r,s=!1){const i=await fs._fromIdTokenResponse(e,r,s),o=zg(r);return new Yt({user:i,providerId:o,_tokenResponse:r,operationType:t})}static async _forOperation(e,t,r){await e._updateTokensIfNecessary(r,!0);const s=zg(r);return new Yt({user:e,providerId:s,_tokenResponse:r,operationType:t})}}function zg(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
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
 */async function v1(n){var e;const t=st(n);if(await t._initializationPromise,!((e=t.currentUser)===null||e===void 0)&&e.isAnonymous)return new Yt({user:t.currentUser,providerId:null,operationType:"signIn"});const r=await yb(t,{returnSecureToken:!0}),s=await Yt._fromIdTokenResponse(t,"signIn",r,!0);return await t._updateCurrentUser(s.user),s}/**
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
 */class tu extends At{constructor(e,t,r,s){var i;super(t.code,t.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,tu.prototype),this.customData={appName:e.name,tenantId:(i=e.tenantId)!==null&&i!==void 0?i:void 0,_serverResponse:t.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,t,r,s){return new tu(e,t,r,s)}}function vb(n,e,t,r){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(i=>{throw i.code==="auth/multi-factor-auth-required"?tu._fromErrorAndOperation(n,i,e,r):i})}/**
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
 */function wb(n){return new Set(n.map(({providerId:e})=>e).filter(e=>!!e))}/**
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
 */async function w1(n,e){const t=K(n);await ol(!0,t,e);const{providerUserInfo:r}=await Lx(t.auth,{idToken:await t.getIdToken(),deleteProvider:[e]}),s=wb(r||[]);return t.providerData=t.providerData.filter(i=>s.has(i.providerId)),s.has("phone")||(t.phoneNumber=null),await t.auth._persistUserIfCurrent(t),t}async function np(n,e,t=!1){const r=await Wn(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Yt._forOperation(n,"link",r)}async function ol(n,e,t){await ra(e);const r=wb(e.providerData),s=n===!1?"provider-already-linked":"no-such-provider";k(r.has(t)===n,e.auth,s)}/**
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
 */async function _b(n,e,t=!1){const{auth:r}=n,s="reauthenticate";try{const i=await Wn(n,vb(r,s,e,n),t);k(i.idToken,r,"internal-error");const o=rl(i.idToken);k(o,r,"internal-error");const{sub:a}=o;return k(n.uid===a,r,"user-mismatch"),Yt._forOperation(n,s,i)}catch(i){throw(i==null?void 0:i.code)==="auth/user-not-found"&&rt(r,"user-mismatch"),i}}/**
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
 */async function Ib(n,e,t=!1){const r="signIn",s=await vb(n,r,e),i=await Yt._fromIdTokenResponse(n,r,s);return t||await n._updateCurrentUser(i.user),i}async function al(n,e){return Ib(st(n),e)}async function bb(n,e){const t=K(n);return await ol(!1,t,e.providerId),np(t,e)}async function Eb(n,e){return _b(K(n),e)}/**
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
 */async function _1(n,e){return Zn(n,"POST","/v1/accounts:signInWithCustomToken",Xe(n,e))}/**
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
 */async function I1(n,e){const t=st(n),r=await _1(t,{token:e,returnSecureToken:!0}),s=await Yt._fromIdTokenResponse(t,"signIn",r);return await t._updateCurrentUser(s.user),s}/**
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
 */class Oa{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?rp._fromServerResponse(e,t):"totpInfo"in t?sp._fromServerResponse(e,t):rt(e,"internal-error")}}class rp extends Oa{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new rp(t)}}class sp extends Oa{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new sp(t)}}/**
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
 */function cl(n,e,t){var r;k(((r=t.url)===null||r===void 0?void 0:r.length)>0,n,"invalid-continue-uri"),k(typeof t.dynamicLinkDomain>"u"||t.dynamicLinkDomain.length>0,n,"invalid-dynamic-link-domain"),e.continueUrl=t.url,e.dynamicLinkDomain=t.dynamicLinkDomain,e.canHandleCodeInApp=t.handleCodeInApp,t.iOS&&(k(t.iOS.bundleId.length>0,n,"missing-ios-bundle-id"),e.iOSBundleId=t.iOS.bundleId),t.android&&(k(t.android.packageName.length>0,n,"missing-android-pkg-name"),e.androidInstallApp=t.android.installApp,e.androidMinimumVersionCode=t.android.minimumVersion,e.androidPackageName=t.android.packageName)}/**
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
 */async function b1(n,e,t){const r=K(n),s={requestType:"PASSWORD_RESET",email:e};t&&cl(r,s,t),await r1(r,s)}async function E1(n,e,t){await mb(K(n),{oobCode:e,newPassword:t})}async function T1(n,e){await e1(K(n),{oobCode:e})}async function Tb(n,e){const t=K(n),r=await mb(t,{oobCode:e}),s=r.requestType;switch(k(s,t,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":k(r.newEmail,t,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":k(r.mfaInfo,t,"internal-error");default:k(r.email,t,"internal-error")}let i=null;return r.mfaInfo&&(i=Oa._fromServerResponse(st(t),r.mfaInfo)),{data:{email:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.newEmail:r.email)||null,previousEmail:(r.requestType==="VERIFY_AND_CHANGE_EMAIL"?r.email:r.newEmail)||null,multiFactorInfo:i},operation:s}}async function S1(n,e){const{data:t}=await Tb(K(n),e);return t.email}async function Sb(n,e,t){const r=st(n),s=await yb(r,{returnSecureToken:!0,email:e,password:t}),i=await Yt._fromIdTokenResponse(r,"signIn",s);return await r._updateCurrentUser(i.user),i}function Ab(n,e,t){return al(K(n),Fr.credential(e,t))}/**
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
 */async function A1(n,e,t){const r=K(n),s={requestType:"EMAIL_SIGNIN",email:e};k(t.handleCodeInApp,r,"argument-error"),t&&cl(r,s,t),await s1(r,s)}function C1(n,e){const t=il.parseLink(e);return(t==null?void 0:t.operation)==="EMAIL_SIGNIN"}async function k1(n,e,t){const r=K(n),s=Fr.credentialWithLink(e,t||na());return k(s._tenantId===(r.tenantId||null),r,"tenant-id-mismatch"),al(r,s)}/**
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
 */async function R1(n,e){return at(n,"POST","/v1/accounts:createAuthUri",Xe(n,e))}/**
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
 */async function D1(n,e){const t=Zf()?na():"http://localhost",r={identifier:e,continueUri:t},{signinMethods:s}=await R1(K(n),r);return s||[]}async function N1(n,e){const t=K(n),s={requestType:"VERIFY_EMAIL",idToken:await n.getIdToken()};e&&cl(t.auth,s,e);const{email:i}=await n1(t.auth,s);i!==n.email&&await n.reload()}async function x1(n,e,t){const r=K(n),i={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:await n.getIdToken(),newEmail:e};t&&cl(r.auth,i,t);const{email:o}=await i1(r.auth,i);o!==n.email&&await n.reload()}/**
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
 */async function P1(n,e){return at(n,"POST","/v1/accounts:update",e)}/**
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
 */async function O1(n,{displayName:e,photoURL:t}){if(e===void 0&&t===void 0)return;const r=K(n),i={idToken:await r.getIdToken(),displayName:e,photoUrl:t,returnSecureToken:!0},o=await Wn(r,P1(r.auth,i));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const a=r.providerData.find(({providerId:c})=>c==="password");a&&(a.displayName=r.displayName,a.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function M1(n,e){return Cb(K(n),e,null)}function L1(n,e){return Cb(K(n),null,e)}async function Cb(n,e,t){const{auth:r}=n,i={idToken:await n.getIdToken(),returnSecureToken:!0};e&&(i.email=e),t&&(i.password=t);const o=await Wn(n,gb(r,i));await n._updateTokensIfNecessary(o,!0)}/**
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
 */function F1(n){var e,t;if(!n)return null;const{providerId:r}=n,s=n.rawUserInfo?JSON.parse(n.rawUserInfo):{},i=n.isNewUser||n.kind==="identitytoolkit#SignupNewUserResponse";if(!r&&(n!=null&&n.idToken)){const o=(t=(e=rl(n.idToken))===null||e===void 0?void 0:e.firebase)===null||t===void 0?void 0:t.sign_in_provider;if(o){const a=o!=="anonymous"&&o!=="custom"?o:null;return new oi(i,a)}}if(!r)return null;switch(r){case"facebook.com":return new U1(i,s);case"github.com":return new V1(i,s);case"google.com":return new B1(i,s);case"twitter.com":return new $1(i,s,n.screenName||null);case"custom":case"anonymous":return new oi(i,null);default:return new oi(i,r,s)}}class oi{constructor(e,t,r={}){this.isNewUser=e,this.providerId=t,this.profile=r}}class kb extends oi{constructor(e,t,r,s){super(e,t,r),this.username=s}}class U1 extends oi{constructor(e,t){super(e,"facebook.com",t)}}class V1 extends kb{constructor(e,t){super(e,"github.com",t,typeof(t==null?void 0:t.login)=="string"?t==null?void 0:t.login:null)}}class B1 extends oi{constructor(e,t){super(e,"google.com",t)}}class $1 extends kb{constructor(e,t,r){super(e,"twitter.com",t,r)}}function q1(n){const{user:e,_tokenResponse:t}=n;return e.isAnonymous&&!t?{providerId:null,isNewUser:!1,profile:null}:F1(t)}function j1(n,e,t,r){return K(n).onIdTokenChanged(e,t,r)}function z1(n,e,t){return K(n).beforeAuthStateChanged(e,t)}function ul(n,e,t,r){return K(n).onAuthStateChanged(e,t,r)}class as{constructor(e,t,r){this.type=e,this.credential=t,this.auth=r}static _fromIdtoken(e,t){return new as("enroll",e,t)}static _fromMfaPendingCredential(e){return new as("signin",e)}toJSON(){return{multiFactorSession:{[this.type==="enroll"?"idToken":"pendingCredential"]:this.credential}}}static fromJSON(e){var t,r;if(e!=null&&e.multiFactorSession){if(!((t=e.multiFactorSession)===null||t===void 0)&&t.pendingCredential)return as._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(!((r=e.multiFactorSession)===null||r===void 0)&&r.idToken)return as._fromIdtoken(e.multiFactorSession.idToken)}return null}}/**
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
 */class ip{constructor(e,t,r){this.session=e,this.hints=t,this.signInResolver=r}static _fromError(e,t){const r=st(e),s=t.customData._serverResponse,i=(s.mfaInfo||[]).map(a=>Oa._fromServerResponse(r,a));k(s.mfaPendingCredential,r,"internal-error");const o=as._fromMfaPendingCredential(s.mfaPendingCredential);return new ip(o,i,async a=>{const c=await a._process(r,o);delete s.mfaInfo,delete s.mfaPendingCredential;const u=Object.assign(Object.assign({},s),{idToken:c.idToken,refreshToken:c.refreshToken});switch(t.operationType){case"signIn":const l=await Yt._fromIdTokenResponse(r,t.operationType,u);return await r._updateCurrentUser(l.user),l;case"reauthenticate":return k(t.user,r,"internal-error"),Yt._forOperation(t.user,t.operationType,u);default:rt(r,"internal-error")}})}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function K1(n,e){var t;const r=K(n),s=e;return k(e.customData.operationType,r,"argument-error"),k((t=s.customData._serverResponse)===null||t===void 0?void 0:t.mfaPendingCredential,r,"argument-error"),ip._fromError(r,s)}/**
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
 */function G1(n,e){return at(n,"POST","/v2/accounts/mfaEnrollment:start",Xe(n,e))}function H1(n,e){return at(n,"POST","/v2/accounts/mfaEnrollment:finalize",Xe(n,e))}function W1(n,e){return at(n,"POST","/v2/accounts/mfaEnrollment:withdraw",Xe(n,e))}class op{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload(t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map(r=>Oa._fromServerResponse(e.auth,r)))})}static _fromUser(e){return new op(e)}async getSession(){return as._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const r=e,s=await this.getSession(),i=await Wn(this.user,r._process(this.user.auth,s,t));return await this.user._updateTokensIfNecessary(i),this.user.reload()}async unenroll(e){const t=typeof e=="string"?e:e.uid,r=await this.user.getIdToken();try{const s=await Wn(this.user,W1(this.user.auth,{idToken:r,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter(({uid:i})=>i!==t),await this.user._updateTokensIfNecessary(s),await this.user.reload()}catch(s){throw s}}}const zl=new WeakMap;function Q1(n){const e=K(n);return zl.has(e)||zl.set(e,op._fromUser(e)),zl.get(e)}const nu="__sak";/**
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
 */class Rb{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(nu,"1"),this.storage.removeItem(nu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function Y1(){const n=Me();return tp(n)||ji(n)}const J1=1e3,X1=10;class Db extends Rb{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Y1()&&Qx(),this.fallbackToPolling=hb(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const r=this.storage.getItem(t),s=this.localCache[t];r!==s&&e(t,s,r)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(r);!t&&this.localCache[r]===o||this.notifyListeners(r,o)},i=this.storage.getItem(r);Wx()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,X1):s()}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:r}),!0)})},J1)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Db.type="LOCAL";const ll=Db;/**
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
 */class Nb extends Rb{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Nb.type="SESSION";const Dr=Nb;/**
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
 */function Z1(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
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
 */class hl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const r=new hl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:r,eventType:s,data:i}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const a=Array.from(o).map(async u=>u(t.origin,i)),c=await Z1(a);t.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:c})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}hl.receivers=[];/**
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
 */function Ma(n="",e=10){let t="";for(let r=0;r<e;r++)t+=Math.floor(Math.random()*10);return n+t}/**
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
 */class eP{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let i,o;return new Promise((a,c)=>{const u=Ma("",20);s.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===u)switch(d.data.status){case"ack":clearTimeout(l),i=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(i),a(d.data.response);break;default:clearTimeout(l),clearTimeout(i),c(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qe(){return window}function tP(n){Qe().location.href=n}/**
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
 */function ap(){return typeof Qe().WorkerGlobalScope<"u"&&typeof Qe().importScripts=="function"}async function nP(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function rP(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function sP(){return ap()?self:null}/**
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
 */const xb="firebaseLocalStorageDb",iP=1,ru="firebaseLocalStorage",Pb="fbase_key";class La{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function dl(n,e){return n.transaction([ru],e?"readwrite":"readonly").objectStore(ru)}function oP(){const n=indexedDB.deleteDatabase(xb);return new La(n).toPromise()}function Yh(){const n=indexedDB.open(xb,iP);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(ru,{keyPath:Pb})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(ru)?e(r):(r.close(),await oP(),e(await Yh()))})})}async function Kg(n,e,t){const r=dl(n,!0).put({[Pb]:e,value:t});return new La(r).toPromise()}async function aP(n,e){const t=dl(n,!1).get(e),r=await new La(t).toPromise();return r===void 0?null:r.value}function Gg(n,e){const t=dl(n,!0).delete(e);return new La(t).toPromise()}const cP=800,uP=3;class Ob{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Yh(),this.db)}async _withRetries(e){let t=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(t++>uP)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ap()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=hl._getInstance(sP()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await nP(),!this.activeServiceWorker)return;this.sender=new eP(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((t=r[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||rP()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Yh();return await Kg(e,nu,"1"),await Gg(e,nu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(r=>Kg(r,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(r=>aP(r,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Gg(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const i=dl(s,!1).getAll();return new La(i).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],r=new Set;for(const{fbase_key:s,value:i}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(i)&&(this.notifyListeners(s,i),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),cP)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ob.type="LOCAL";const Ai=Ob;/**
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
 */function lP(n,e){return at(n,"POST","/v2/accounts/mfaSignIn:start",Xe(n,e))}function hP(n,e){return at(n,"POST","/v2/accounts/mfaSignIn:finalize",Xe(n,e))}/**
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
 */async function dP(n){return(await at(n,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}/**
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
 */function fP(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function Mb(n){return new Promise((e,t)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=e,r.onerror=s=>{const i=ht("internal-error");i.customData=s,t(i)},r.type="text/javascript",r.charset="UTF-8",fP().appendChild(r)})}function Lb(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
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
 */const pP=500,mP=6e4,rc=1e12;class gP{constructor(e){this.auth=e,this.counter=rc,this._widgets=new Map}render(e,t){const r=this.counter;return this._widgets.set(r,new yP(e,this.auth.name,t||{})),this.counter++,r}reset(e){var t;const r=e||rc;(t=this._widgets.get(r))===null||t===void 0||t.delete(),this._widgets.delete(r)}getResponse(e){var t;const r=e||rc;return((t=this._widgets.get(r))===null||t===void 0?void 0:t.getResponse())||""}async execute(e){var t;const r=e||rc;return(t=this._widgets.get(r))===null||t===void 0||t.execute(),""}}class yP{constructor(e,t,r){this.params=r,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const s=typeof e=="string"?document.getElementById(e):e;k(s,"argument-error",{appName:t}),this.container=s,this.isVisible=this.params.size!=="invisible",this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),!this.timerId&&(this.timerId=window.setTimeout(()=>{this.responseToken=vP(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch{}this.timerId=window.setTimeout(()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch{}this.isVisible&&this.execute()},mP)},pP))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function vP(n){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let r=0;r<n;r++)e.push(t.charAt(Math.floor(Math.random()*t.length)));return e.join("")}/**
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
 */const Kl=Lb("rcb"),wP=new xa(3e4,6e4),_P="https://www.google.com/recaptcha/api.js?";class IP{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(!((e=Qe().grecaptcha)===null||e===void 0)&&e.render)}load(e,t=""){return k(bP(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(Qe().grecaptcha):new Promise((r,s)=>{const i=Qe().setTimeout(()=>{s(ht(e,"network-request-failed"))},wP.get());Qe()[Kl]=()=>{Qe().clearTimeout(i),delete Qe()[Kl];const a=Qe().grecaptcha;if(!a){s(ht(e,"internal-error"));return}const c=a.render;a.render=(u,l)=>{const h=c(u,l);return this.counter++,h},this.hostLanguage=t,r(a)};const o=`${_P}?${Ni({onload:Kl,render:"explicit",hl:t})}`;Mb(o).catch(()=>{clearTimeout(i),s(ht(e,"internal-error"))})})}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(!((t=Qe().grecaptcha)===null||t===void 0)&&t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function bP(n){return n.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(n)}class EP{async load(e){return new gP(e)}clearedOneInstance(){}}/**
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
 */const Fb="recaptcha",TP={theme:"light",type:"image"};let SP=class{constructor(e,t=Object.assign({},TP),r){this.parameters=t,this.type=Fb,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=st(r),this.isInvisible=this.parameters.size==="invisible",k(typeof document<"u",this.auth,"operation-not-supported-in-this-environment");const s=typeof e=="string"?document.getElementById(e):e;k(s,this.auth,"argument-error"),this.container=s,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new EP:new IP,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),r=t.getResponse(e);return r||new Promise(s=>{const i=o=>{o&&(this.tokenChangeListeners.delete(i),s(o))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)})}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise?this.renderPromise:(this.renderPromise=this.makeRenderPromise().catch(e=>{throw this.renderPromise=null,e}),this.renderPromise)}_reset(){this.assertNotDestroyed(),this.widgetId!==null&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach(e=>{this.container.removeChild(e)})}validateStartingState(){k(!this.parameters.sitekey,this.auth,"argument-error"),k(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),k(typeof document<"u",this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach(r=>r(t)),typeof e=="function")e(t);else if(typeof e=="string"){const r=Qe()[e];typeof r=="function"&&r(t)}}}assertNotDestroyed(){k(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){k(Zf()&&!ap(),this.auth,"internal-error"),await AP(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await dP(this.auth);k(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return k(this.recaptcha,this.auth,"internal-error"),this.recaptcha}};function AP(){let n=null;return new Promise(e=>{if(document.readyState==="complete"){e();return}n=()=>e(),window.addEventListener("load",n)}).catch(e=>{throw n&&window.removeEventListener("load",n),e})}/**
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
 */class cp{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=ms._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function CP(n,e,t){const r=st(n),s=await fl(r,e,K(t));return new cp(s,i=>al(r,i))}async function kP(n,e,t){const r=K(n);await ol(!1,r,"phone");const s=await fl(r.auth,e,K(t));return new cp(s,i=>bb(r,i))}async function RP(n,e,t){const r=K(n),s=await fl(r.auth,e,K(t));return new cp(s,i=>Eb(r,i))}async function fl(n,e,t){var r;const s=await t.verify();try{k(typeof s=="string",n,"argument-error"),k(t.type===Fb,n,"argument-error");let i;if(typeof e=="string"?i={phoneNumber:e}:i=e,"session"in i){const o=i.session;if("phoneNumber"in i)return k(o.type==="enroll",n,"internal-error"),(await G1(n,{idToken:o.credential,phoneEnrollmentInfo:{phoneNumber:i.phoneNumber,recaptchaToken:s}})).phoneSessionInfo.sessionInfo;{k(o.type==="signin",n,"internal-error");const a=((r=i.multiFactorHint)===null||r===void 0?void 0:r.uid)||i.multiFactorUid;return k(a,n,"missing-multi-factor-info"),(await lP(n,{mfaPendingCredential:o.credential,mfaEnrollmentId:a,phoneSignInInfo:{recaptchaToken:s}})).phoneResponseInfo.sessionInfo}}else{const{sessionInfo:o}=await u1(n,{phoneNumber:i.phoneNumber,recaptchaToken:s});return o}}finally{t._reset()}}async function DP(n,e){await np(K(n),e)}/**
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
 */let Cs=class vc{constructor(e){this.providerId=vc.PROVIDER_ID,this.auth=st(e)}verifyPhoneNumber(e,t){return fl(this.auth,e,K(t))}static credential(e,t){return ms._fromVerification(e,t)}static credentialFromResult(e){const t=e;return vc.credentialFromTaggedObject(t)}static credentialFromError(e){return vc.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:r}=e;return t&&r?ms._fromTokenResponse(t,r):null}};Cs.PROVIDER_ID="phone";Cs.PHONE_SIGN_IN_METHOD="phone";/**
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
 */function Fs(n,e){return e?qt(e):(k(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
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
 */class up extends zi{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return jn(e,this._buildIdpRequest())}_linkToIdToken(e,t){return jn(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return jn(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function NP(n){return Ib(n.auth,new up(n),n.bypassAuthState)}function xP(n){const{auth:e,user:t}=n;return k(t,e,"internal-error"),_b(t,new up(n),n.bypassAuthState)}async function PP(n){const{auth:e,user:t}=n;return k(t,e,"internal-error"),np(t,new up(n),n.bypassAuthState)}/**
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
 */class Ub{constructor(e,t,r,s,i=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:r,postBody:s,tenantId:i,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:t,sessionId:r,tenantId:i||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return NP;case"linkViaPopup":case"linkViaRedirect":return PP;case"reauthViaPopup":case"reauthViaRedirect":return xP;default:rt(this.auth,"internal-error")}}resolve(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const OP=new xa(2e3,1e4);async function MP(n,e,t){const r=st(n);qi(n,e,er);const s=Fs(r,t);return new Vn(r,"signInViaPopup",e,s).executeNotNull()}async function LP(n,e,t){const r=K(n);qi(r.auth,e,er);const s=Fs(r.auth,t);return new Vn(r.auth,"reauthViaPopup",e,s,r).executeNotNull()}async function FP(n,e,t){const r=K(n);qi(r.auth,e,er);const s=Fs(r.auth,t);return new Vn(r.auth,"linkViaPopup",e,s,r).executeNotNull()}class Vn extends Ub{constructor(e,t,r,s,i){super(e,t,s,i),this.provider=r,this.authWindow=null,this.pollId=null,Vn.currentPopupAction&&Vn.currentPopupAction.cancel(),Vn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return k(e,this.auth,"internal-error"),e}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");const e=Ma();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(ht(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(ht(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Vn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,r;if(!((r=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ht(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,OP.get())};e()}}Vn.currentPopupAction=null;/**
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
 */const UP="pendingRedirect",So=new Map;class VP extends Ub{constructor(e,t,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,r),this.eventId=null}async execute(){let e=So.get(this.auth._key());if(!e){try{const r=await BP(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(t){e=()=>Promise.reject(t)}So.set(this.auth._key(),e)}return this.bypassAuthState||So.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function BP(n,e){const t=Bb(e),r=Vb(n);if(!await r._isAvailable())return!1;const s=await r._get(t)==="true";return await r._remove(t),s}async function lp(n,e){return Vb(n)._set(Bb(e),"true")}function $P(){So.clear()}function hp(n,e){So.set(n._key(),e)}function Vb(n){return qt(n._redirectPersistence)}function Bb(n){return ps(UP,n.config.apiKey,n.name)}/**
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
 */function qP(n,e,t){return jP(n,e,t)}async function jP(n,e,t){const r=st(n);qi(n,e,er),await r._initializationPromise;const s=Fs(r,t);return await lp(s,r),s._openRedirect(r,e,"signInViaRedirect")}function zP(n,e,t){return KP(n,e,t)}async function KP(n,e,t){const r=K(n);qi(r.auth,e,er),await r.auth._initializationPromise;const s=Fs(r.auth,t);await lp(s,r.auth);const i=await $b(r);return s._openRedirect(r.auth,e,"reauthViaRedirect",i)}function GP(n,e,t){return HP(n,e,t)}async function HP(n,e,t){const r=K(n);qi(r.auth,e,er),await r.auth._initializationPromise;const s=Fs(r.auth,t);await ol(!1,r,e.providerId),await lp(s,r.auth);const i=await $b(r);return s._openRedirect(r.auth,e,"linkViaRedirect",i)}async function WP(n,e){return await st(n)._initializationPromise,pl(n,e,!1)}async function pl(n,e,t=!1){const r=st(n),s=Fs(r,e),o=await new VP(r,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}async function $b(n){const e=Ma(`${n.uid}:::`);return n._redirectEventId=e,await n.auth._setRedirectUser(n),await n.auth._persistUserIfCurrent(n),e}/**
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
 */const QP=10*60*1e3;class qb{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(t=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!YP(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var r;if(e.error&&!jb(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";t.onError(ht(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const r=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=QP&&this.cachedEventUids.clear(),this.cachedEventUids.has(Hg(e))}saveEventToCache(e){this.cachedEventUids.add(Hg(e)),this.lastProcessedEventTime=Date.now()}}function Hg(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function jb({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function YP(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return jb(n);default:return!1}}/**
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
 */async function zb(n,e={}){return at(n,"GET","/v1/projects",e)}/**
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
 */const JP=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,XP=/^https?/;async function ZP(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zb(n);for(const t of e)try{if(eO(t))return}catch{}rt(n,"unauthorized-domain")}function eO(n){const e=na(),{protocol:t,hostname:r}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===r}if(!XP.test(t))return!1;if(JP.test(n))return r===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
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
 */const tO=new xa(3e4,6e4);function Wg(){const n=Qe().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function nO(n){return new Promise((e,t)=>{var r,s,i;function o(){Wg(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Wg(),t(ht(n,"network-request-failed"))},timeout:tO.get()})}if(!((s=(r=Qe().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((i=Qe().gapi)===null||i===void 0)&&i.load)o();else{const a=Lb("iframefcb");return Qe()[a]=()=>{gapi.load?o():t(ht(n,"network-request-failed"))},Mb(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>t(c))}}).catch(e=>{throw wc=null,e})}let wc=null;function rO(n){return wc=wc||nO(n),wc}/**
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
 */const sO=new xa(5e3,15e3),iO="__/auth/iframe",oO="emulator/auth/iframe",aO={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},cO=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function uO(n){const e=n.config;k(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?ep(e,oO):`https://${n.config.authDomain}/${iO}`,r={apiKey:e.apiKey,appName:n.name,v:Ds},s=cO.get(n.config.apiHost);s&&(r.eid=s);const i=n._getFrameworks();return i.length&&(r.fw=i.join(",")),`${t}?${Ni(r).slice(1)}`}async function lO(n){const e=await rO(n),t=Qe().gapi;return k(t,n,"internal-error"),e.open({where:document.body,url:uO(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:aO,dontclear:!0},r=>new Promise(async(s,i)=>{await r.restyle({setHideOnLeave:!1});const o=ht(n,"network-request-failed"),a=Qe().setTimeout(()=>{i(o)},sO.get());function c(){Qe().clearTimeout(a),s(r)}r.ping(c).then(c,()=>{i(o)})}))}/**
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
 */const hO={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},dO=500,fO=600,pO="_blank",mO="http://localhost";class Qg{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function gO(n,e,t,r=dO,s=fO){const i=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},hO),{width:r.toString(),height:s.toString(),top:i,left:o}),u=Me().toLowerCase();t&&(a=ab(u)?pO:t),ob(u)&&(e=e||mO,c.scrollbars="yes");const l=Object.entries(c).reduce((d,[p,g])=>`${d}${p}=${g},`,"");if(Hx(u)&&a!=="_self")return yO(e||"",a),new Qg(null);const h=window.open(e||"",a,l);k(h,n,"popup-blocked");try{h.focus()}catch{}return new Qg(h)}function yO(n,e){const t=document.createElement("a");t.href=n,t.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(r)}/**
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
 */const vO="__/auth/handler",wO="emulator/auth/handler";function Jh(n,e,t,r,s,i){k(n.config.authDomain,n,"auth-domain-config-required"),k(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:r,v:Ds,eventId:s};if(e instanceof er){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",eA(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(i||{}))o[c]=u}if(e instanceof Ki){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${_O(n)}?${Ni(a).slice(1)}`}function _O({config:n}){return n.emulator?ep(n,wO):`https://${n.authDomain}/${vO}`}/**
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
 */const Gl="webStorageSupport";class IO{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Dr,this._completeRedirectFn=pl,this._overrideRedirectResult=hp}async _openPopup(e,t,r,s){var i;hn((i=this.eventManagers[e._key()])===null||i===void 0?void 0:i.manager,"_initialize() not called before _openPopup()");const o=Jh(e,t,r,na(),s);return gO(e,o,Ma())}async _openRedirect(e,t,r,s){return await this._originValidation(e),tP(Jh(e,t,r,na(),s)),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:i}=this.eventManagers[t];return s?Promise.resolve(s):(hn(i,"If manager is not set, promise should be"),i)}const r=this.initAndGetManager(e);return this.eventManagers[t]={promise:r},r.catch(()=>{delete this.eventManagers[t]}),r}async initAndGetManager(e){const t=await lO(e),r=new qb(e);return t.register("authEvent",s=>(k(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=t,r}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Gl,{type:Gl},s=>{var i;const o=(i=s==null?void 0:s[0])===null||i===void 0?void 0:i[Gl];o!==void 0&&t(!!o),rt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=ZP(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return hb()||tp()||ji()}}const Kb=IO;class bO{constructor(e){this.factorId=e}_process(e,t,r){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,r);case"signin":return this._finalizeSignIn(e,t.credential);default:return Tn("unexpected MultiFactorSessionType")}}}class dp extends bO{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new dp(e)}_finalizeEnroll(e,t,r){return H1(e,{idToken:t,displayName:r,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return hP(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Gb{constructor(){}static assertion(e){return dp._fromCredential(e)}}Gb.FACTOR_ID="phone";var Yg="@firebase/auth",Jg="0.22.0";/**
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
 */class EO{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){k(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function TO(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function SO(n){Ir(new Rn("auth",(e,{options:t})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),{apiKey:i,authDomain:o}=r.options;return((a,c)=>{k(i&&!i.includes(":"),"invalid-api-key",{appName:a.name}),k(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:i,authDomain:o,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:db(n)},l=new Jx(a,c,u);return Rx(l,t),l})(r,s)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,r)=>{e.getProvider("auth-internal").initialize()})),Ir(new Rn("auth-internal",e=>{const t=st(e.getProvider("auth").getImmediate());return(r=>new EO(r))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),un(Yg,Jg,TO(n)),un(Yg,Jg,"esm2017")}/**
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
 */const AO=5*60,CO=_v("authIdTokenMaxAge")||AO;let Xg=null;const kO=n=>async e=>{const t=e&&await e.getIdTokenResult(),r=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(r&&r>CO)return;const s=t==null?void 0:t.token;Xg!==s&&(Xg=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function RO(n=kd()){const e=ca(n,"auth");if(e.isInitialized())return e.getImmediate();const t=kx(n,{popupRedirectResolver:Kb,persistence:[Ai,ll,Dr]}),r=_v("authTokenSyncURL");if(r){const i=kO(r);z1(t,i,()=>i(t.currentUser)),j1(t,o=>i(o))}const s=wv("auth");return s&&fb(t,`http://${s}`),t}SO("Browser");/**
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
 */function ks(){return window}/**
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
 */const DO=2e3;async function NO(n,e,t){var r;const{BuildInfo:s}=ks();hn(e.sessionId,"AuthEvent did not contain a session ID");const i=await LO(e.sessionId),o={};return ji()?o.ibi=s.packageName:Pa()?o.apn=s.packageName:rt(n,"operation-not-supported-in-this-environment"),s.displayName&&(o.appDisplayName=s.displayName),o.sessionId=i,Jh(n,t,e.type,void 0,(r=e.eventId)!==null&&r!==void 0?r:void 0,o)}async function xO(n){const{BuildInfo:e}=ks(),t={};ji()?t.iosBundleId=e.packageName:Pa()?t.androidPackageName=e.packageName:rt(n,"operation-not-supported-in-this-environment"),await zb(n,t)}function PO(n){const{cordova:e}=ks();return new Promise(t=>{e.plugins.browsertab.isAvailable(r=>{let s=null;r?e.plugins.browsertab.openUrl(n):s=e.InAppBrowser.open(n,Gx()?"_blank":"_system","location=yes"),t(s)})})}async function OO(n,e,t){const{cordova:r}=ks();let s=()=>{};try{await new Promise((i,o)=>{let a=null;function c(){var h;i();const d=(h=r.plugins.browsertab)===null||h===void 0?void 0:h.close;typeof d=="function"&&d(),typeof(t==null?void 0:t.close)=="function"&&t.close()}function u(){a||(a=window.setTimeout(()=>{o(ht(n,"redirect-cancelled-by-user"))},DO))}function l(){(document==null?void 0:document.visibilityState)==="visible"&&u()}e.addPassiveListener(c),document.addEventListener("resume",u,!1),Pa()&&document.addEventListener("visibilitychange",l,!1),s=()=>{e.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}})}finally{s()}}function MO(n){var e,t,r,s,i,o,a,c,u,l;const h=ks();k(typeof((e=h==null?void 0:h.universalLinks)===null||e===void 0?void 0:e.subscribe)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),k(typeof((t=h==null?void 0:h.BuildInfo)===null||t===void 0?void 0:t.packageName)<"u",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),k(typeof((i=(s=(r=h==null?void 0:h.cordova)===null||r===void 0?void 0:r.plugins)===null||s===void 0?void 0:s.browsertab)===null||i===void 0?void 0:i.openUrl)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k(typeof((c=(a=(o=h==null?void 0:h.cordova)===null||o===void 0?void 0:o.plugins)===null||a===void 0?void 0:a.browsertab)===null||c===void 0?void 0:c.isAvailable)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),k(typeof((l=(u=h==null?void 0:h.cordova)===null||u===void 0?void 0:u.InAppBrowser)===null||l===void 0?void 0:l.open)=="function",n,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function LO(n){const e=FO(n),t=await crypto.subtle.digest("SHA-256",e);return Array.from(new Uint8Array(t)).map(s=>s.toString(16).padStart(2,"0")).join("")}function FO(n){if(hn(/[0-9a-zA-Z]+/.test(n),"Can only convert alpha-numeric strings"),typeof TextEncoder<"u")return new TextEncoder().encode(n);const e=new ArrayBuffer(n.length),t=new Uint8Array(e);for(let r=0;r<n.length;r++)t[r]=n.charCodeAt(r);return t}/**
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
 */const UO=20;class VO extends qb{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise(e=>{this.resolveInialized=e})}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach(t=>t(e)),super.onEvent(e)}async initialized(){await this.initPromise}}function BO(n,e,t=null){return{type:e,eventId:t,urlResponse:null,sessionId:jO(),postBody:null,tenantId:n.tenantId,error:ht(n,"no-auth-event")}}function $O(n,e){return Xh()._set(Zh(n),e)}async function Zg(n){const e=await Xh()._get(Zh(n));return e&&await Xh()._remove(Zh(n)),e}function qO(n,e){var t,r;const s=KO(e);if(s.includes("/__/auth/callback")){const i=_c(s),o=i.firebaseError?zO(decodeURIComponent(i.firebaseError)):null,a=(r=(t=o==null?void 0:o.code)===null||t===void 0?void 0:t.split("auth/"))===null||r===void 0?void 0:r[1],c=a?ht(a):null;return c?{type:n.type,eventId:n.eventId,tenantId:n.tenantId,error:c,urlResponse:null,sessionId:null,postBody:null}:{type:n.type,eventId:n.eventId,tenantId:n.tenantId,sessionId:n.sessionId,urlResponse:s,postBody:null}}return null}function jO(){const n=[],e="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let t=0;t<UO;t++){const r=Math.floor(Math.random()*e.length);n.push(e.charAt(r))}return n.join("")}function Xh(){return qt(ll)}function Zh(n){return ps("authEvent",n.config.apiKey,n.name)}function zO(n){try{return JSON.parse(n)}catch{return null}}function KO(n){const e=_c(n),t=e.link?decodeURIComponent(e.link):void 0,r=_c(t).link,s=e.deep_link_id?decodeURIComponent(e.deep_link_id):void 0;return _c(s).link||s||r||t||n}function _c(n){if(!(n!=null&&n.includes("?")))return{};const[e,...t]=n.split("?");return Ws(t.join("?"))}/**
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
 */const GO=500;class HO{constructor(){this._redirectPersistence=Dr,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=pl,this._overrideRedirectResult=hp}async _initialize(e){const t=e._key();let r=this.eventManagers.get(t);return r||(r=new VO(e),this.eventManagers.set(t,r),this.attachCallbackListeners(e,r)),r}_openPopup(e){rt(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,r,s){MO(e);const i=await this._initialize(e);await i.initialized(),i.resetRedirect(),$P(),await this._originValidation(e);const o=BO(e,r,s);await $O(e,o);const a=await NO(e,o,t),c=await PO(a);return OO(e,i,c)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=xO(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:r,handleOpenURL:s,BuildInfo:i}=ks(),o=setTimeout(async()=>{await Zg(e),t.onEvent(ey())},GO),a=async l=>{clearTimeout(o);const h=await Zg(e);let d=null;h&&(l!=null&&l.url)&&(d=qO(h,l.url)),t.onEvent(d||ey())};typeof r<"u"&&typeof r.subscribe=="function"&&r.subscribe(null,a);const c=s,u=`${i.packageName.toLowerCase()}://`;ks().handleOpenURL=async l=>{if(l.toLowerCase().startsWith(u)&&a({url:l}),typeof c=="function")try{c(l)}catch(h){console.error(h)}}}}const WO=HO;function ey(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:ht("no-auth-event")}}/**
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
 */function QO(n,e){st(n)._logFramework(e)}var YO="@firebase/auth-compat",JO="0.3.7";/**
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
 */const XO=1e3;function Ao(){var n;return((n=self==null?void 0:self.location)===null||n===void 0?void 0:n.protocol)||null}function ZO(){return Ao()==="http:"||Ao()==="https:"}function Hb(n=Me()){return!!((Ao()==="file:"||Ao()==="ionic:"||Ao()==="capacitor:")&&n.toLowerCase().match(/iphone|ipad|ipod|android/))}function eM(){return Sd()||Td()}function tM(){return bv()&&(document==null?void 0:document.documentMode)===11}function nM(n=Me()){return/Edge\/\d+/.test(n)}function rM(n=Me()){return tM()||nM(n)}function Wb(){try{const n=self.localStorage,e=Ma();if(n)return n.setItem(e,"1"),n.removeItem(e),rM()?Mo():!0}catch{return fp()&&Mo()}return!1}function fp(){return typeof global<"u"&&"WorkerGlobalScope"in global&&"importScripts"in global}function Hl(){return(ZO()||Iv()||Hb())&&!eM()&&Wb()&&!fp()}function Qb(){return Hb()&&typeof document<"u"}async function sM(){return Qb()?new Promise(n=>{const e=setTimeout(()=>{n(!1)},XO);document.addEventListener("deviceready",()=>{clearTimeout(e),n(!0)})}):!1}function iM(){return typeof window<"u"?window:null}/**
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
 */const Vt={LOCAL:"local",NONE:"none",SESSION:"session"},ro=k,Yb="persistence";function oM(n,e){if(ro(Object.values(Vt).includes(e),n,"invalid-persistence-type"),Sd()){ro(e!==Vt.SESSION,n,"unsupported-persistence-type");return}if(Td()){ro(e===Vt.NONE,n,"unsupported-persistence-type");return}if(fp()){ro(e===Vt.NONE||e===Vt.LOCAL&&Mo(),n,"unsupported-persistence-type");return}ro(e===Vt.NONE||Wb(),n,"unsupported-persistence-type")}async function ed(n){await n._initializationPromise;const e=Jb(),t=ps(Yb,n.config.apiKey,n.name);e&&e.setItem(t,n._getPersistence())}function aM(n,e){const t=Jb();if(!t)return[];const r=ps(Yb,n,e);switch(t.getItem(r)){case Vt.NONE:return[Ti];case Vt.LOCAL:return[Ai,Dr];case Vt.SESSION:return[Dr];default:return[]}}function Jb(){var n;try{return((n=iM())===null||n===void 0?void 0:n.sessionStorage)||null}catch{return null}}/**
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
 */const cM=k;class dr{constructor(){this.browserResolver=qt(Kb),this.cordovaResolver=qt(WO),this.underlyingResolver=null,this._redirectPersistence=Dr,this._completeRedirectFn=pl,this._overrideRedirectResult=hp}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,r,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,r,s)}async _openRedirect(e,t,r,s){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,r,s)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Qb()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return cM(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await sM();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}/**
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
 */function Xb(n){return n.unwrap()}function uM(n){return n.wrapped()}/**
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
 */function lM(n){return Zb(n)}function hM(n,e){var t;const r=(t=e.customData)===null||t===void 0?void 0:t._tokenResponse;if((e==null?void 0:e.code)==="auth/multi-factor-auth-required"){const s=e;s.resolver=new dM(n,K1(n,e))}else if(r){const s=Zb(e),i=e;s&&(i.credential=s,i.tenantId=r.tenantId||void 0,i.email=r.email||void 0,i.phoneNumber=r.phoneNumber||void 0)}}function Zb(n){const{_tokenResponse:e}=n instanceof At?n.customData:n;if(!e)return null;if(!(n instanceof At)&&"temporaryProof"in e&&"phoneNumber"in e)return Cs.credentialFromResult(n);const t=e.providerId;if(!t||t===no.PASSWORD)return null;let r;switch(t){case no.GOOGLE:r=wn;break;case no.FACEBOOK:r=vn;break;case no.GITHUB:r=_n;break;case no.TWITTER:r=In;break;default:const{oauthIdToken:s,oauthAccessToken:i,oauthTokenSecret:o,pendingToken:a,nonce:c}=e;return!i&&!o&&!s&&!a?null:a?t.startsWith("saml.")?Si._create(t,a):xn._fromParams({providerId:t,signInMethod:t,pendingToken:a,idToken:s,accessToken:i}):new ii(t).credential({idToken:s,accessToken:i,rawNonce:c})}return n instanceof At?r.credentialFromError(n):r.credentialFromResult(n)}function Nt(n,e){return e.catch(t=>{throw t instanceof At&&hM(n,t),t}).then(t=>{const r=t.operationType,s=t.user;return{operationType:r,credential:lM(t),additionalUserInfo:q1(t),user:Bn.getOrCreate(s)}})}async function td(n,e){const t=await e;return{verificationId:t.verificationId,confirm:r=>Nt(n,t.confirm(r))}}class dM{constructor(e,t){this.resolver=t,this.auth=uM(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return Nt(Xb(this.auth),this.resolver.resolveSignIn(e))}}/**
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
 */class Bn{constructor(e){this._delegate=e,this.multiFactor=Q1(e)}static getOrCreate(e){return Bn.USER_MAP.has(e)||Bn.USER_MAP.set(e,new Bn(e)),Bn.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return Nt(this.auth,bb(this._delegate,e))}async linkWithPhoneNumber(e,t){return td(this.auth,kP(this._delegate,e,t))}async linkWithPopup(e){return Nt(this.auth,FP(this._delegate,e,dr))}async linkWithRedirect(e){return await ed(st(this.auth)),GP(this._delegate,e,dr)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return Nt(this.auth,Eb(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return td(this.auth,RP(this._delegate,e,t))}reauthenticateWithPopup(e){return Nt(this.auth,LP(this._delegate,e,dr))}async reauthenticateWithRedirect(e){return await ed(st(this.auth)),zP(this._delegate,e,dr)}sendEmailVerification(e){return N1(this._delegate,e)}async unlink(e){return await w1(this._delegate,e),this}updateEmail(e){return M1(this._delegate,e)}updatePassword(e){return L1(this._delegate,e)}updatePhoneNumber(e){return DP(this._delegate,e)}updateProfile(e){return O1(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return x1(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}Bn.USER_MAP=new WeakMap;/**
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
 */const so=k;class nd{constructor(e,t){if(this.app=e,t.isInitialized()){this._delegate=t.getImmediate(),this.linkUnderlyingAuth();return}const{apiKey:r}=e.options;so(r,"invalid-api-key",{appName:e.name}),so(r,"invalid-api-key",{appName:e.name});const s=typeof window<"u"?dr:void 0;this._delegate=t.initialize({options:{persistence:fM(r,e.name),popupRedirectResolver:s}}),this._delegate._updateErrorMap(Ax),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?Bn.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){fb(this._delegate,e,t)}applyActionCode(e){return T1(this._delegate,e)}checkActionCode(e){return Tb(this._delegate,e)}confirmPasswordReset(e,t){return E1(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return Nt(this._delegate,Sb(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return D1(this._delegate,e)}isSignInWithEmailLink(e){return C1(this._delegate,e)}async getRedirectResult(){so(Hl(),this._delegate,"operation-not-supported-in-this-environment");const e=await WP(this._delegate,dr);return e?Nt(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){QO(this._delegate,e)}onAuthStateChanged(e,t,r){const{next:s,error:i,complete:o}=ty(e,t,r);return this._delegate.onAuthStateChanged(s,i,o)}onIdTokenChanged(e,t,r){const{next:s,error:i,complete:o}=ty(e,t,r);return this._delegate.onIdTokenChanged(s,i,o)}sendSignInLinkToEmail(e,t){return A1(this._delegate,e,t)}sendPasswordResetEmail(e,t){return b1(this._delegate,e,t||void 0)}async setPersistence(e){oM(this._delegate,e);let t;switch(e){case Vt.SESSION:t=Dr;break;case Vt.LOCAL:t=await qt(Ai)._isAvailable()?Ai:ll;break;case Vt.NONE:t=Ti;break;default:return rt("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return Nt(this._delegate,v1(this._delegate))}signInWithCredential(e){return Nt(this._delegate,al(this._delegate,e))}signInWithCustomToken(e){return Nt(this._delegate,I1(this._delegate,e))}signInWithEmailAndPassword(e,t){return Nt(this._delegate,Ab(this._delegate,e,t))}signInWithEmailLink(e,t){return Nt(this._delegate,k1(this._delegate,e,t))}signInWithPhoneNumber(e,t){return td(this._delegate,CP(this._delegate,e,t))}async signInWithPopup(e){return so(Hl(),this._delegate,"operation-not-supported-in-this-environment"),Nt(this._delegate,MP(this._delegate,e,dr))}async signInWithRedirect(e){return so(Hl(),this._delegate,"operation-not-supported-in-this-environment"),await ed(this._delegate),qP(this._delegate,e,dr)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return S1(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}nd.Persistence=Vt;function ty(n,e,t){let r=n;typeof n!="function"&&({next:r,error:e,complete:t}=n);const s=r;return{next:o=>s(o&&Bn.getOrCreate(o)),error:e,complete:t}}function fM(n,e){const t=aM(n,e);if(typeof self<"u"&&!t.includes(Ai)&&t.push(Ai),typeof window<"u")for(const r of[ll,Dr])t.includes(r)||t.push(r);return t.includes(Ti)||t.push(Ti),t}/**
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
 */class pp{constructor(){this.providerId="phone",this._delegate=new Cs(Xb(ua.auth()))}static credential(e,t){return Cs.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}pp.PHONE_SIGN_IN_METHOD=Cs.PHONE_SIGN_IN_METHOD;pp.PROVIDER_ID=Cs.PROVIDER_ID;/**
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
 */const pM=k;class mM{constructor(e,t,r=ua.app()){var s;pM((s=r.options)===null||s===void 0?void 0:s.apiKey,"invalid-api-key",{appName:r.name}),this._delegate=new SP(e,t,r.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}/**
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
 */const gM="auth-compat";function yM(n){n.INTERNAL.registerComponent(new Rn(gM,e=>{const t=e.getProvider("app-compat").getImmediate(),r=e.getProvider("auth");return new nd(t,r)},"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:js.EMAIL_SIGNIN,PASSWORD_RESET:js.PASSWORD_RESET,RECOVER_EMAIL:js.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:js.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:js.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:js.VERIFY_EMAIL}},EmailAuthProvider:Fr,FacebookAuthProvider:vn,GithubAuthProvider:_n,GoogleAuthProvider:wn,OAuthProvider:ii,SAMLAuthProvider:eu,PhoneAuthProvider:pp,PhoneMultiFactorGenerator:Gb,RecaptchaVerifier:mM,TwitterAuthProvider:In,Auth:nd,AuthCredential:zi,Error:At}).setInstantiationMode("LAZY").setMultipleInstances(!1)),n.registerVersion(YO,JO)}yM(ua);var vM="firebase",wM="9.19.1";/**
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
 */un(vM,wM,"app");const _M={apiKey:"AIzaSyAm3hmR29C4OM8c337x1AyUuhADWj72760",authDomain:"groupingapp-a8d06.firebaseapp.com",projectId:"groupingapp-a8d06",storageBucket:"groupingapp-a8d06.appspot.com",messagingSenderId:"821110039717",appId:"1:821110039717:web:0023200352c52eabd7194c"},eE=wu(_M),Sn=RN(eE),rn=RO(eE),IM={props:{roomname:String}};const Ur=(n,e)=>{const t=n.__vccOpts||n;for(const[r,s]of e)t[r]=s;return t},bM={class:"container"};function EM(n,e,t,r,s,i){const o=Di("RouterLink");return Fe(),$e("div",bM,[Re(o,{to:{name:"room",params:{id:t.roomname}}},{default:Ln(()=>[Fn(ts(t.roomname),1)]),_:1},8,["to"])])}const TM=Ur(IM,[["render",EM]]),SM={data(){return{login:!1,uid:"",rooms:["room1"],newRoomName:""}},methods:{async getRooms(){let n=await jI(Uf(Sn,"rooms")),e=[];n.forEach(t=>{e.push(t.id)}),this.rooms=e},async addRoom(){await Xc($t(Sn,"rooms",this.newRoomName),{users:[]}).then(()=>{this.getRooms()}).catch(n=>{alert(n)})},async joinRoom(n){Zc($t(Sn,"rooms",n),{users:KI(this.uid)})}},async mounted(){ul(rn,n=>{n?(this.uid=n.uid,this.login=!0):this.login=!1}),this.getRooms()},components:{roombox:TM}},AM=H("h1",null,"Home",-1),CM={key:0},kM={class:"rooms",key:"room"},RM={key:1},DM=H("h1",null,"ログインしてないよ",-1),NM=[DM];function xM(n,e,t,r,s,i){const o=Di("roombox");return Fe(),$e("div",null,[AM,s.login?(Fe(),$e("div",CM,[pn(H("input",{type:"text","onUpdate:modelValue":e[0]||(e[0]=a=>s.newRoomName=a)},null,512),[[ti,s.newRoomName]]),H("button",{onClick:e[1]||(e[1]=(...a)=>i.addRoom&&i.addRoom(...a))},"部屋作成"),(Fe(!0),$e(xt,null,jy(s.rooms,a=>(Fe(),$e("div",kM,[Re(o,{roomname:a,onClick:c=>i.joinRoom(a)},null,8,["roomname","onClick"])]))),128))])):(Fe(),$e("div",RM,NM))])}const PM=Ur(SM,[["render",xM]]),OM={data(){return{userInfo:{uid:"",email:"",password:"",username:"",grade:"",status:!1}}},methods:{async addUserInfo(){await Xc($t(Sn,"users",this.userInfo.uid),{uid:this.userInfo.uid,username:this.userInfo.username,email:this.userInfo.email,grade:this.userInfo.grade})},registerUser(){Sb(rn,this.userInfo.email,this.userInfo.password).then(n=>{this.userInfo.uid=n.user.uid,this.addUserInfo(),this.$router.push("/")}).catch(n=>{n.code;const e=n.message;alert(e)})}}};const Kt=n=>(xy("data-v-6a0f61b2"),n=n(),Py(),n),MM=Kt(()=>H("h1",null,"Register",-1)),LM={class:"form-group"},FM=Kt(()=>H("label",{for:"username"},"表示名",-1)),UM={class:"form-group"},VM=Kt(()=>H("label",{for:"option1"},"WIP/新人",-1)),BM=Kt(()=>H("br",null,null,-1)),$M=Kt(()=>H("label",{for:"option2"},"TERM",-1)),qM=Kt(()=>H("br",null,null,-1)),jM=Kt(()=>H("label",{for:"option3"},"GP",-1)),zM=Kt(()=>H("br",null,null,-1)),KM=Kt(()=>H("label",{for:"option4"},"院生以上",-1)),GM=Kt(()=>H("br",null,null,-1)),HM={class:"form-group"},WM=Kt(()=>H("label",{for:"email"},"メールアドレス:",-1)),QM={class:"form-group"},YM=Kt(()=>H("label",{for:"password"},"パスワード:",-1)),JM=Kt(()=>H("button",{type:"submit",class:"btn btn-info"},"登録",-1));function XM(n,e,t,r,s,i){const o=Di("RouterLink");return Fe(),$e("div",null,[MM,H("form",{onSubmit:e[7]||(e[7]=rv((...a)=>i.registerUser&&i.registerUser(...a),["prevent"]))},[H("div",LM,[FM,pn(H("input",{type:"text",class:"form-control",id:"username","onUpdate:modelValue":e[0]||(e[0]=a=>s.userInfo.username=a)},null,512),[[ti,s.userInfo.username]])]),H("div",UM,[pn(H("input",{type:"radio",id:"option1",value:"1","onUpdate:modelValue":e[1]||(e[1]=a=>s.userInfo.grade=a)},null,512),[[Ka,s.userInfo.grade]]),VM,BM,pn(H("input",{type:"radio",id:"option2",value:"2","onUpdate:modelValue":e[2]||(e[2]=a=>s.userInfo.grade=a)},null,512),[[Ka,s.userInfo.grade]]),$M,qM,pn(H("input",{type:"radio",id:"option3",value:"3","onUpdate:modelValue":e[3]||(e[3]=a=>s.userInfo.grade=a)},null,512),[[Ka,s.userInfo.grade]]),jM,zM,pn(H("input",{type:"radio",id:"option4",value:"4","onUpdate:modelValue":e[4]||(e[4]=a=>s.userInfo.grade=a)},null,512),[[Ka,s.userInfo.grade]]),KM,GM]),H("div",HM,[WM,pn(H("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":e[5]||(e[5]=a=>s.userInfo.email=a)},null,512),[[ti,s.userInfo.email]])]),H("div",QM,[YM,pn(H("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":e[6]||(e[6]=a=>s.userInfo.password=a)},null,512),[[ti,s.userInfo.password]])]),JM],32),Re(o,{to:"/"},{default:Ln(()=>[Fn("ログイン")]),_:1})])}const ZM=Ur(OM,[["render",XM],["__scopeId","data-v-6a0f61b2"]]),eL={data(){return{email:"",password:""}},methods:{login(){Ab(rn,this.email,this.password).then(n=>{n.user,this.$router.push("/")}).catch(n=>{n.code;const e=n.message;alert(e)})}}},tL={class:"form-group"},nL=H("label",{for:"email"},"メールアドレス:",-1),rL={class:"form-group"},sL=H("label",{for:"password"},"パスワード:",-1),iL=H("button",{type:"submit",class:"btn btn-info"},"ログイン",-1);function oL(n,e,t,r,s,i){const o=Di("RouterLink");return Fe(),$e(xt,null,[H("form",{onSubmit:e[2]||(e[2]=rv((...a)=>i.login&&i.login(...a),["prevent"]))},[H("div",tL,[nL,pn(H("input",{type:"email",class:"form-control",id:"email","onUpdate:modelValue":e[0]||(e[0]=a=>s.email=a)},null,512),[[ti,s.email]])]),H("div",rL,[sL,pn(H("input",{type:"password",class:"form-control",id:"password","onUpdate:modelValue":e[1]||(e[1]=a=>s.password=a)},null,512),[[ti,s.password]])]),iL],32),Re(o,{to:"register"},{default:Ln(()=>[Fn("登録")]),_:1})],64)}const aL=Ur(eL,[["render",oL]]),cL={};function uL(n,e){return Fe(),$e("h1",null,"LOADING!!!")}const lL=Ur(cL,[["render",uL]]),hL={data(){return{login:!1,user:{uid:"",email:"",grade:"",username:""}}},methods:{async getUserUid(){if(this.login){let e=(await Ys($t(Sn,"users",rn.currentUser.uid))).data().uid;this.user.uid=e}},async getUserEmail(){if(this.login){let e=(await Ys($t(Sn,"users",rn.currentUser.uid))).data().email;this.user.email=e}},async getUserUsername(){if(this.login){let e=(await Ys($t(Sn,"users",rn.currentUser.uid))).data().username;this.user.username=e}},async getUserGrade(){if(this.login){let e=(await Ys($t(Sn,"users",rn.currentUser.uid))).data().grade;this.user.grade=e}}},mounted(){ul(rn,n=>{n?(this.login=!0,this.getUserUid(),this.getUserEmail(),this.getUserGrade(),this.getUserUsername()):(this.login=!1,this.$router.push("/"))})},computed:{},components:{loading:lL}},dL={key:0},fL=H("h1",null,"MyPage",-1),pL={key:1};function mL(n,e,t,r,s,i){const o=Di("loading");return s.login?(Fe(),$e("div",dL,[fL,H("p",null,ts(s.user.uid),1),H("p",null,ts(s.user.username),1),H("p",null,ts(s.user.email),1),H("p",null,ts(s.user.grade),1)])):(Fe(),$e("div",pL,[Re(o)]))}const gL=Ur(hL,[["render",mL]]),yL={data(){return{uid:"",login:!1,roomId:this.$route.params.id.toString(),users:[""]}},methods:{deleteUserFromRoom(){Zc($t(Sn,"rooms",this.roomId),{users:GI(this.uid)})},async getUsersInRoom(){let n=await Ys($t(Sn,"rooms","sample1")),e=[""];try{e=n.data().users}catch{e=[""]}this.users=e}},beforeRouteLeave(n,e,t){this.deleteUserFromRoom(),t()},async mounted(){ul(rn,n=>{n?(this.uid=n.uid,this.login=!0):this.login=!1}),this.getUsersInRoom()}},vL={key:0},wL=H("p",null,"現状、部屋からはブラウザバックでしか抜けれない。",-1),_L={key:"u"},IL={key:1};function bL(n,e,t,r,s,i){return s.login?(Fe(),$e("div",vL,[H("h1",null,ts(s.roomId),1),wL,(Fe(!0),$e(xt,null,jy(s.users,o=>(Fe(),$e("div",_L,[H("p",null,ts(o),1)]))),128))])):(Fe(),$e("div",IL," ログインしてね "))}const EL=Ur(yL,[["render",bL]]),TL=PS({history:YT("/"),routes:[{path:"/",name:"home",component:PM},{path:"/register",name:"register",component:ZM},{path:"/login",name:"login",component:aL},{path:"/mypage",name:"mypage",component:gL},{path:"/room/:id",name:"room",component:EL}]}),SL={data(){return{login:!1}},methods:{logout(){rn.signOut(),this.$router.push("/")}},mounted(){ul(rn,n=>{n?this.login=!0:this.login=!1})}};const tE=n=>(xy("data-v-e49599fe"),n=n(),Py(),n),AL={class:"logo"},CL={class:"items"},kL={class:"item"},RL=tE(()=>H("li",{class:"item"},"Coming soon...",-1)),DL=tE(()=>H("li",null,[H("input",{class:"item search",type:"search",name:"search",placeholder:"キーワードを入力"})],-1)),NL={key:0,class:"item"},xL={key:1,class:"item"},PL={key:2,class:"item"},OL={key:3,class:"item"};function ML(n,e,t,r,s,i){const o=Di("RouterLink");return Fe(),$e("header",null,[H("h1",AL,[Re(o,{to:"/"},{default:Ln(()=>[Fn("Grouping App")]),_:1})]),H("ul",CL,[H("li",kL,[Re(o,{to:"/"},{default:Ln(()=>[Fn("Home")]),_:1})]),RL,DL,s.login?za("",!0):(Fe(),$e("li",NL,[Re(o,{to:"/login"},{default:Ln(()=>[Fn("ログイン")]),_:1})])),s.login?za("",!0):(Fe(),$e("li",xL,[Re(o,{to:"/register"},{default:Ln(()=>[Fn("登録")]),_:1})])),s.login?(Fe(),$e("li",PL,[Re(o,{to:"mypage"},{default:Ln(()=>[Fn("マイページ")]),_:1})])):za("",!0),s.login?(Fe(),$e("li",OL,[H("a",{class:"logout",onClick:e[0]||(e[0]=a=>i.logout())},"ログアウト")])):za("",!0)])])}const LL=Ur(SL,[["render",ML],["__scopeId","data-v-e49599fe"]]),FL=vd({__name:"App",setup(n){return(e,t)=>(Fe(),$e(xt,null,[Re(LL),Re(us(mv))],64))}});const nE=NT(FL);nE.use(TL);nE.mount("#app");
