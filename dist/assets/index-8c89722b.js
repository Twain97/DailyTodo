(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function Aa(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ue={},Rn=[],Ze=()=>{},xd=()=>!1,Td=/^on[^a-z]/,ji=e=>Td.test(e),xa=e=>e.startsWith("onUpdate:"),be=Object.assign,Ta=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Cd=Object.prototype.hasOwnProperty,Q=(e,t)=>Cd.call(e,t),z=Array.isArray,Nn=e=>Hi(e)==="[object Map]",Rl=e=>Hi(e)==="[object Set]",Y=e=>typeof e=="function",ye=e=>typeof e=="string",Ca=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",Nl=e=>he(e)&&Y(e.then)&&Y(e.catch),Ml=Object.prototype.toString,Hi=e=>Ml.call(e),Sd=e=>Hi(e).slice(8,-1),Ll=e=>Hi(e)==="[object Object]",Sa=e=>ye(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,ui=Aa(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),zi=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Od=/-(\w)/g,dt=zi(e=>e.replace(Od,(t,n)=>n?n.toUpperCase():"")),Pd=/\B([A-Z])/g,Gn=zi(e=>e.replace(Pd,"-$1").toLowerCase()),Vi=zi(e=>e.charAt(0).toUpperCase()+e.slice(1)),us=zi(e=>e?`on${Vi(e)}`:""),br=(e,t)=>!Object.is(e,t),fi=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},wi=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Us=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Rd=e=>{const t=ye(e)?Number(e):NaN;return isNaN(t)?e:t};let Oo;const Fs=()=>Oo||(Oo=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Oa(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=ye(r)?Dd(r):Oa(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(ye(e))return e;if(he(e))return e}}const Nd=/;(?![^(]*\))/g,Md=/:([^]+)/,Ld=/\/\*[^]*?\*\//g;function Dd(e){const t={};return e.replace(Ld,"").split(Nd).forEach(n=>{if(n){const r=n.split(Md);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Pa(e){let t="";if(ye(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=Pa(e[n]);r&&(t+=r+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Ud="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Fd=Aa(Ud);function Dl(e){return!!e||e===""}const Be=e=>ye(e)?e:e==null?"":z(e)||he(e)&&(e.toString===Ml||!Y(e.toString))?JSON.stringify(e,Ul,2):String(e),Ul=(e,t)=>t&&t.__v_isRef?Ul(e,t.value):Nn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Rl(t)?{[`Set(${t.size})`]:[...t.values()]}:he(t)&&!z(t)&&!Ll(t)?String(t):t;let Ge;class $d{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ge,!t&&Ge&&(this.index=(Ge.scopes||(Ge.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ge;try{return Ge=this,t()}finally{Ge=n}}}on(){Ge=this}off(){Ge=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Bd(e,t=Ge){t&&t.active&&t.effects.push(e)}function jd(){return Ge}const Ra=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Fl=e=>(e.w&Wt)>0,$l=e=>(e.n&Wt)>0,Hd=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Wt},zd=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Fl(i)&&!$l(i)?i.delete(e):t[n++]=i,i.w&=~Wt,i.n&=~Wt}t.length=n}},$s=new WeakMap;let ar=0,Wt=1;const Bs=30;let Xe;const fn=Symbol(""),js=Symbol("");class Na{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Bd(this,r)}run(){if(!this.active)return this.fn();let t=Xe,n=jt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Xe,Xe=this,jt=!0,Wt=1<<++ar,ar<=Bs?Hd(this):Po(this),this.fn()}finally{ar<=Bs&&zd(this),Wt=1<<--ar,Xe=this.parent,jt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Xe===this?this.deferStop=!0:this.active&&(Po(this),this.onStop&&this.onStop(),this.active=!1)}}function Po(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let jt=!0;const Bl=[];function Yn(){Bl.push(jt),jt=!1}function qn(){const e=Bl.pop();jt=e===void 0?!0:e}function Ue(e,t,n){if(jt&&Xe){let r=$s.get(e);r||$s.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Ra()),jl(i)}}function jl(e,t){let n=!1;ar<=Bs?$l(e)||(e.n|=Wt,n=!Fl(e)):n=!e.has(Xe),n&&(e.add(Xe),Xe.deps.push(e))}function wt(e,t,n,r,i,s){const a=$s.get(e);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(n==="length"&&z(e)){const c=Number(r);a.forEach((l,u)=>{(u==="length"||u>=c)&&o.push(l)})}else switch(n!==void 0&&o.push(a.get(n)),t){case"add":z(e)?Sa(n)&&o.push(a.get("length")):(o.push(a.get(fn)),Nn(e)&&o.push(a.get(js)));break;case"delete":z(e)||(o.push(a.get(fn)),Nn(e)&&o.push(a.get(js)));break;case"set":Nn(e)&&o.push(a.get(fn));break}if(o.length===1)o[0]&&Hs(o[0]);else{const c=[];for(const l of o)l&&c.push(...l);Hs(Ra(c))}}function Hs(e,t){const n=z(e)?e:[...e];for(const r of n)r.computed&&Ro(r);for(const r of n)r.computed||Ro(r)}function Ro(e,t){(e!==Xe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Vd=Aa("__proto__,__v_isRef,__isVue"),Hl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ca)),Wd=Ma(),Kd=Ma(!1,!0),Gd=Ma(!0),No=Yd();function Yd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=ee(this);for(let s=0,a=this.length;s<a;s++)Ue(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(ee)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Yn();const r=ee(this)[t].apply(this,n);return qn(),r}}),e}function qd(e){const t=ee(this);return Ue(t,"has",e),t.hasOwnProperty(e)}function Ma(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?fh:Gl:t?Kl:Wl).get(r))return r;const a=z(r);if(!e){if(a&&Q(No,i))return Reflect.get(No,i,s);if(i==="hasOwnProperty")return qd}const o=Reflect.get(r,i,s);return(Ca(i)?Hl.has(i):Vd(i))||(e||Ue(r,"get",i),t)?o:Ce(o)?a&&Sa(i)?o:o.value:he(o)?e?ql(o):Lr(o):o}}const Xd=zl(),Jd=zl(!0);function zl(e=!1){return function(n,r,i,s){let a=n[r];if(jn(a)&&Ce(a)&&!Ce(i))return!1;if(!e&&(!Ei(i)&&!jn(i)&&(a=ee(a),i=ee(i)),!z(n)&&Ce(a)&&!Ce(i)))return a.value=i,!0;const o=z(n)&&Sa(r)?Number(r)<n.length:Q(n,r),c=Reflect.set(n,r,i,s);return n===ee(s)&&(o?br(i,a)&&wt(n,"set",r,i):wt(n,"add",r,i)),c}}function Qd(e,t){const n=Q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&wt(e,"delete",t,void 0),r}function Zd(e,t){const n=Reflect.has(e,t);return(!Ca(t)||!Hl.has(t))&&Ue(e,"has",t),n}function eh(e){return Ue(e,"iterate",z(e)?"length":fn),Reflect.ownKeys(e)}const Vl={get:Wd,set:Xd,deleteProperty:Qd,has:Zd,ownKeys:eh},th={get:Gd,set(e,t){return!0},deleteProperty(e,t){return!0}},nh=be({},Vl,{get:Kd,set:Jd}),La=e=>e,Wi=e=>Reflect.getPrototypeOf(e);function Gr(e,t,n=!1,r=!1){e=e.__v_raw;const i=ee(e),s=ee(t);n||(t!==s&&Ue(i,"get",t),Ue(i,"get",s));const{has:a}=Wi(i),o=r?La:n?Fa:yr;if(a.call(i,t))return o(e.get(t));if(a.call(i,s))return o(e.get(s));e!==i&&e.get(t)}function Yr(e,t=!1){const n=this.__v_raw,r=ee(n),i=ee(e);return t||(e!==i&&Ue(r,"has",e),Ue(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function qr(e,t=!1){return e=e.__v_raw,!t&&Ue(ee(e),"iterate",fn),Reflect.get(e,"size",e)}function Mo(e){e=ee(e);const t=ee(this);return Wi(t).has.call(t,e)||(t.add(e),wt(t,"add",e,e)),this}function Lo(e,t){t=ee(t);const n=ee(this),{has:r,get:i}=Wi(n);let s=r.call(n,e);s||(e=ee(e),s=r.call(n,e));const a=i.call(n,e);return n.set(e,t),s?br(t,a)&&wt(n,"set",e,t):wt(n,"add",e,t),this}function Do(e){const t=ee(this),{has:n,get:r}=Wi(t);let i=n.call(t,e);i||(e=ee(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&wt(t,"delete",e,void 0),s}function Uo(){const e=ee(this),t=e.size!==0,n=e.clear();return t&&wt(e,"clear",void 0,void 0),n}function Xr(e,t){return function(r,i){const s=this,a=s.__v_raw,o=ee(a),c=t?La:e?Fa:yr;return!e&&Ue(o,"iterate",fn),a.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function Jr(e,t,n){return function(...r){const i=this.__v_raw,s=ee(i),a=Nn(s),o=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,l=i[e](...r),u=n?La:t?Fa:yr;return!t&&Ue(s,"iterate",c?js:fn),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function St(e){return function(...t){return e==="delete"?!1:this}}function rh(){const e={get(s){return Gr(this,s)},get size(){return qr(this)},has:Yr,add:Mo,set:Lo,delete:Do,clear:Uo,forEach:Xr(!1,!1)},t={get(s){return Gr(this,s,!1,!0)},get size(){return qr(this)},has:Yr,add:Mo,set:Lo,delete:Do,clear:Uo,forEach:Xr(!1,!0)},n={get(s){return Gr(this,s,!0)},get size(){return qr(this,!0)},has(s){return Yr.call(this,s,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:Xr(!0,!1)},r={get(s){return Gr(this,s,!0,!0)},get size(){return qr(this,!0)},has(s){return Yr.call(this,s,!0)},add:St("add"),set:St("set"),delete:St("delete"),clear:St("clear"),forEach:Xr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Jr(s,!1,!1),n[s]=Jr(s,!0,!1),t[s]=Jr(s,!1,!0),r[s]=Jr(s,!0,!0)}),[e,n,t,r]}const[ih,sh,ah,oh]=rh();function Da(e,t){const n=t?e?oh:ah:e?sh:ih;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(Q(n,i)&&i in r?n:r,i,s)}const ch={get:Da(!1,!1)},lh={get:Da(!1,!0)},uh={get:Da(!0,!1)},Wl=new WeakMap,Kl=new WeakMap,Gl=new WeakMap,fh=new WeakMap;function dh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function hh(e){return e.__v_skip||!Object.isExtensible(e)?0:dh(Sd(e))}function Lr(e){return jn(e)?e:Ua(e,!1,Vl,ch,Wl)}function Yl(e){return Ua(e,!1,nh,lh,Kl)}function ql(e){return Ua(e,!0,th,uh,Gl)}function Ua(e,t,n,r,i){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const a=hh(e);if(a===0)return e;const o=new Proxy(e,a===2?r:n);return i.set(e,o),o}function Mn(e){return jn(e)?Mn(e.__v_raw):!!(e&&e.__v_isReactive)}function jn(e){return!!(e&&e.__v_isReadonly)}function Ei(e){return!!(e&&e.__v_isShallow)}function Xl(e){return Mn(e)||jn(e)}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function Jl(e){return wi(e,"__v_skip",!0),e}const yr=e=>he(e)?Lr(e):e,Fa=e=>he(e)?ql(e):e;function Ql(e){jt&&Xe&&(e=ee(e),jl(e.dep||(e.dep=Ra())))}function Zl(e,t){e=ee(e);const n=e.dep;n&&Hs(n)}function Ce(e){return!!(e&&e.__v_isRef===!0)}function ph(e){return eu(e,!1)}function mh(e){return eu(e,!0)}function eu(e,t){return Ce(e)?e:new gh(e,t)}class gh{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ee(t),this._value=n?t:yr(t)}get value(){return Ql(this),this._value}set value(t){const n=this.__v_isShallow||Ei(t)||jn(t);t=n?t:ee(t),br(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:yr(t),Zl(this))}}function Ln(e){return Ce(e)?e.value:e}const vh={get:(e,t,n)=>Ln(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Ce(i)&&!Ce(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function tu(e){return Mn(e)?e:new Proxy(e,vh)}class bh{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Na(t,()=>{this._dirty||(this._dirty=!0,Zl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=ee(this);return Ql(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function yh(e,t,n=!1){let r,i;const s=Y(e);return s?(r=e,i=Ze):(r=e.get,i=e.set),new bh(r,i,s||!i,n)}function Ht(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Ki(s,t,n)}return i}function Ve(e,t,n,r){if(Y(e)){const s=Ht(e,t,n,r);return s&&Nl(s)&&s.catch(a=>{Ki(a,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(Ve(e[s],t,n,r));return i}function Ki(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,o=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,a,o)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){Ht(c,null,10,[e,a,o]);return}}_h(e,n,i,r)}function _h(e,t,n,r=!0){console.error(e)}let _r=!1,zs=!1;const Te=[];let ot=0;const Dn=[];let vt=null,nn=0;const nu=Promise.resolve();let $a=null;function ru(e){const t=$a||nu;return e?t.then(this?e.bind(this):e):t}function wh(e){let t=ot+1,n=Te.length;for(;t<n;){const r=t+n>>>1;wr(Te[r])<e?t=r+1:n=r}return t}function Ba(e){(!Te.length||!Te.includes(e,_r&&e.allowRecurse?ot+1:ot))&&(e.id==null?Te.push(e):Te.splice(wh(e.id),0,e),iu())}function iu(){!_r&&!zs&&(zs=!0,$a=nu.then(au))}function Eh(e){const t=Te.indexOf(e);t>ot&&Te.splice(t,1)}function Ih(e){z(e)?Dn.push(...e):(!vt||!vt.includes(e,e.allowRecurse?nn+1:nn))&&Dn.push(e),iu()}function Fo(e,t=_r?ot+1:0){for(;t<Te.length;t++){const n=Te[t];n&&n.pre&&(Te.splice(t,1),t--,n())}}function su(e){if(Dn.length){const t=[...new Set(Dn)];if(Dn.length=0,vt){vt.push(...t);return}for(vt=t,vt.sort((n,r)=>wr(n)-wr(r)),nn=0;nn<vt.length;nn++)vt[nn]();vt=null,nn=0}}const wr=e=>e.id==null?1/0:e.id,kh=(e,t)=>{const n=wr(e)-wr(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function au(e){zs=!1,_r=!0,Te.sort(kh);const t=Ze;try{for(ot=0;ot<Te.length;ot++){const n=Te[ot];n&&n.active!==!1&&Ht(n,null,14)}}finally{ot=0,Te.length=0,su(),_r=!1,$a=null,(Te.length||Dn.length)&&au()}}function Ah(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ue;let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in r){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=r[u]||ue;h&&(i=n.map(m=>ye(m)?m.trim():m)),f&&(i=n.map(Us))}let o,c=r[o=us(t)]||r[o=us(dt(t))];!c&&s&&(c=r[o=us(Gn(t))]),c&&Ve(c,e,6,i);const l=r[o+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,Ve(l,e,6,i)}}function ou(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!Y(e)){const c=l=>{const u=ou(l,t,!0);u&&(o=!0,be(a,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!o?(he(e)&&r.set(e,null),null):(z(s)?s.forEach(c=>a[c]=null):be(a,s),he(e)&&r.set(e,a),a)}function Gi(e,t){return!e||!ji(t)?!1:(t=t.slice(2).replace(/Once$/,""),Q(e,t[0].toLowerCase()+t.slice(1))||Q(e,Gn(t))||Q(e,t))}let je=null,cu=null;function Ii(e){const t=je;return je=e,cu=e&&e.type.__scopeId||null,t}function De(e,t=je,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Xo(-1);const s=Ii(t);let a;try{a=e(...i)}finally{Ii(s),r._d&&Xo(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function fs(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[a],slots:o,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:m,ctx:I,inheritAttrs:A}=e;let N,b;const y=Ii(e);try{if(n.shapeFlag&4){const T=i||r;N=at(u.call(T,T,f,s,m,h,I)),b=c}else{const T=t;N=at(T.length>1?T(s,{attrs:c,slots:o,emit:l}):T(s,null)),b=t.props?c:xh(c)}}catch(T){dr.length=0,Ki(T,e,1),N=V(et)}let P=N;if(b&&A!==!1){const T=Object.keys(b),{shapeFlag:H}=P;T.length&&H&7&&(a&&T.some(xa)&&(b=Th(b,a)),P=Kt(P,b))}return n.dirs&&(P=Kt(P),P.dirs=P.dirs?P.dirs.concat(n.dirs):n.dirs),n.transition&&(P.transition=n.transition),N=P,Ii(y),N}const xh=e=>{let t;for(const n in e)(n==="class"||n==="style"||ji(n))&&((t||(t={}))[n]=e[n]);return t},Th=(e,t)=>{const n={};for(const r in e)(!xa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ch(e,t,n){const{props:r,children:i,component:s}=e,{props:a,children:o,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?$o(r,a,l):!!a;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==r[h]&&!Gi(l,h))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?$o(r,a,l):!0:!!a;return!1}function $o(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Gi(n,s))return!0}return!1}function Sh({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Oh=e=>e.__isSuspense;function Ph(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):Ih(e)}const Qr={};function dn(e,t,n){return lu(e,t,n)}function lu(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:a}=ue){var o;const c=jd()===((o=Ie)==null?void 0:o.scope)?Ie:null;let l,u=!1,f=!1;if(Ce(e)?(l=()=>e.value,u=Ei(e)):Mn(e)?(l=()=>e,r=!0):z(e)?(f=!0,u=e.some(T=>Mn(T)||Ei(T)),l=()=>e.map(T=>{if(Ce(T))return T.value;if(Mn(T))return an(T);if(Y(T))return Ht(T,c,2)})):Y(e)?t?l=()=>Ht(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return h&&h(),Ve(e,c,3,[m])}:l=Ze,t&&r){const T=l;l=()=>an(T())}let h,m=T=>{h=y.onStop=()=>{Ht(T,c,4)}},I;if(Ir)if(m=Ze,t?n&&Ve(t,c,3,[l(),f?[]:void 0,m]):l(),i==="sync"){const T=xp();I=T.__watcherHandles||(T.__watcherHandles=[])}else return Ze;let A=f?new Array(e.length).fill(Qr):Qr;const N=()=>{if(y.active)if(t){const T=y.run();(r||u||(f?T.some((H,J)=>br(H,A[J])):br(T,A)))&&(h&&h(),Ve(t,c,3,[T,A===Qr?void 0:f&&A[0]===Qr?[]:A,m]),A=T)}else y.run()};N.allowRecurse=!!t;let b;i==="sync"?b=N:i==="post"?b=()=>Me(N,c&&c.suspense):(N.pre=!0,c&&(N.id=c.uid),b=()=>Ba(N));const y=new Na(l,b);t?n?N():A=y.run():i==="post"?Me(y.run.bind(y),c&&c.suspense):y.run();const P=()=>{y.stop(),c&&c.scope&&Ta(c.scope.effects,y)};return I&&I.push(P),P}function Rh(e,t,n){const r=this.proxy,i=ye(e)?e.includes(".")?uu(r,e):()=>r[e]:e.bind(r,r);let s;Y(t)?s=t:(s=t.handler,n=t);const a=Ie;Hn(this);const o=lu(i,s.bind(r),n);return a?Hn(a):hn(),o}function uu(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function an(e,t){if(!he(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),Ce(e))an(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)an(e[n],t);else if(Rl(e)||Nn(e))e.forEach(n=>{an(n,t)});else if(Ll(e))for(const n in e)an(e[n],t);return e}function nr(e,t){const n=je;if(n===null)return e;const r=Qi(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[a,o,c,l=ue]=t[s];a&&(Y(a)&&(a={mounted:a,updated:a}),a.deep&&an(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:c,modifiers:l}))}return e}function Jt(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let c=o.dir[r];c&&(Yn(),Ve(c,n,8,[e.el,o,e,t]),qn())}}function Nh(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ha(()=>{e.isMounted=!0}),gu(()=>{e.isUnmounting=!0}),e}const ze=[Function,Array],fu={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:ze,onEnter:ze,onAfterEnter:ze,onEnterCancelled:ze,onBeforeLeave:ze,onLeave:ze,onAfterLeave:ze,onLeaveCancelled:ze,onBeforeAppear:ze,onAppear:ze,onAfterAppear:ze,onAppearCancelled:ze},Mh={name:"BaseTransition",props:fu,setup(e,{slots:t}){const n=bp(),r=Nh();let i;return()=>{const s=t.default&&hu(t.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const A of s)if(A.type!==et){a=A;break}}const o=ee(e),{mode:c}=o;if(r.isLeaving)return ds(a);const l=Bo(a);if(!l)return ds(a);const u=Vs(l,o,r,n);Ws(l,u);const f=n.subTree,h=f&&Bo(f);let m=!1;const{getTransitionKey:I}=l.type;if(I){const A=I();i===void 0?i=A:A!==i&&(i=A,m=!0)}if(h&&h.type!==et&&(!rn(l,h)||m)){const A=Vs(h,o,r,n);if(Ws(h,A),c==="out-in")return r.isLeaving=!0,A.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},ds(a);c==="in-out"&&l.type!==et&&(A.delayLeave=(N,b,y)=>{const P=du(r,h);P[String(h.key)]=h,N._leaveCb=()=>{b(),N._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=y})}return a}}},Lh=Mh;function du(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Vs(e,t,n,r){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:I,onBeforeAppear:A,onAppear:N,onAfterAppear:b,onAppearCancelled:y}=t,P=String(e.key),T=du(n,e),H=(W,q)=>{W&&Ve(W,r,9,q)},J=(W,q)=>{const Z=q[1];H(W,q),z(W)?W.every(_e=>_e.length<=1)&&Z():W.length<=1&&Z()},te={mode:s,persisted:a,beforeEnter(W){let q=o;if(!n.isMounted)if(i)q=A||o;else return;W._leaveCb&&W._leaveCb(!0);const Z=T[P];Z&&rn(e,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),H(q,[W])},enter(W){let q=c,Z=l,_e=u;if(!n.isMounted)if(i)q=N||c,Z=b||l,_e=y||u;else return;let F=!1;const ie=W._enterCb=Oe=>{F||(F=!0,Oe?H(_e,[W]):H(Z,[W]),te.delayedLeave&&te.delayedLeave(),W._enterCb=void 0)};q?J(q,[W,ie]):ie()},leave(W,q){const Z=String(e.key);if(W._enterCb&&W._enterCb(!0),n.isUnmounting)return q();H(f,[W]);let _e=!1;const F=W._leaveCb=ie=>{_e||(_e=!0,q(),ie?H(I,[W]):H(m,[W]),W._leaveCb=void 0,T[Z]===e&&delete T[Z])};T[Z]=e,h?J(h,[W,F]):F()},clone(W){return Vs(W,t,n,r)}};return te}function ds(e){if(Yi(e))return e=Kt(e),e.children=null,e}function Bo(e){return Yi(e)?e.children?e.children[0]:void 0:e}function Ws(e,t){e.shapeFlag&6&&e.component?Ws(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function hu(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let a=e[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===Ye?(a.patchFlag&128&&i++,r=r.concat(hu(a.children,t,o))):(t||a.type!==et)&&r.push(o!=null?Kt(a,{key:o}):a)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function ja(e,t){return Y(e)?(()=>be({name:e.name},t,{setup:e}))():e}const di=e=>!!e.type.__asyncLoader,Yi=e=>e.type.__isKeepAlive;function Dh(e,t){pu(e,"a",t)}function Uh(e,t){pu(e,"da",t)}function pu(e,t,n=Ie){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(qi(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Yi(i.parent.vnode)&&Fh(r,t,n,i),i=i.parent}}function Fh(e,t,n,r){const i=qi(t,e,r,!0);vu(()=>{Ta(r[t],i)},n)}function qi(e,t,n=Ie,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;Yn(),Hn(n);const o=Ve(t,n,e,a);return hn(),qn(),o});return r?i.unshift(s):i.push(s),s}}const xt=e=>(t,n=Ie)=>(!Ir||e==="sp")&&qi(e,(...r)=>t(...r),n),mu=xt("bm"),Ha=xt("m"),$h=xt("bu"),Bh=xt("u"),gu=xt("bum"),vu=xt("um"),jh=xt("sp"),Hh=xt("rtg"),zh=xt("rtc");function Vh(e,t=Ie){qi("ec",e,t)}const bu="components";function on(e,t){return Kh(bu,e,!0,t)||e}const Wh=Symbol.for("v-ndc");function Kh(e,t,n=!0,r=!1){const i=je||Ie;if(i){const s=i.type;if(e===bu){const o=Ip(s,!1);if(o&&(o===t||o===dt(t)||o===Vi(dt(t))))return s}const a=jo(i[e]||s[e],t)||jo(i.appContext[e],t);return!a&&r?s:a}}function jo(e,t){return e&&(e[t]||e[dt(t)]||e[Vi(dt(t))])}function Gh(e,t,n,r){let i;const s=n&&n[r];if(z(e)||ye(e)){i=new Array(e.length);for(let a=0,o=e.length;a<o;a++)i[a]=t(e[a],a,void 0,s&&s[a])}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s&&s[a])}else if(he(e))if(e[Symbol.iterator])i=Array.from(e,(a,o)=>t(a,o,void 0,s&&s[o]));else{const a=Object.keys(e);i=new Array(a.length);for(let o=0,c=a.length;o<c;o++){const l=a[o];i[o]=t(e[l],l,o,s&&s[o])}}else i=[];return n&&(n[r]=i),i}const Ks=e=>e?Su(e)?Qi(e)||e.proxy:Ks(e.parent):null,fr=be(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Ks(e.parent),$root:e=>Ks(e.root),$emit:e=>e.emit,$options:e=>za(e),$forceUpdate:e=>e.f||(e.f=()=>Ba(e.update)),$nextTick:e=>e.n||(e.n=ru.bind(e.proxy)),$watch:e=>Rh.bind(e)}),hs=(e,t)=>e!==ue&&!e.__isScriptSetup&&Q(e,t),Yh={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:o,appContext:c}=e;let l;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(hs(r,t))return a[t]=1,r[t];if(i!==ue&&Q(i,t))return a[t]=2,i[t];if((l=e.propsOptions[0])&&Q(l,t))return a[t]=3,s[t];if(n!==ue&&Q(n,t))return a[t]=4,n[t];Gs&&(a[t]=0)}}const u=fr[t];let f,h;if(u)return t==="$attrs"&&Ue(e,"get",t),u(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(n!==ue&&Q(n,t))return a[t]=4,n[t];if(h=c.config.globalProperties,Q(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return hs(i,t)?(i[t]=n,!0):r!==ue&&Q(r,t)?(r[t]=n,!0):Q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let o;return!!n[a]||e!==ue&&Q(e,a)||hs(t,a)||(o=s[0])&&Q(o,a)||Q(r,a)||Q(fr,a)||Q(i.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Ho(e){return z(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let Gs=!0;function qh(e){const t=za(e),n=e.proxy,r=e.ctx;Gs=!1,t.beforeCreate&&zo(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:I,activated:A,deactivated:N,beforeDestroy:b,beforeUnmount:y,destroyed:P,unmounted:T,render:H,renderTracked:J,renderTriggered:te,errorCaptured:W,serverPrefetch:q,expose:Z,inheritAttrs:_e,components:F,directives:ie,filters:Oe}=t;if(l&&Xh(l,r,null),a)for(const oe in a){const ne=a[oe];Y(ne)&&(r[oe]=ne.bind(n))}if(i){const oe=i.call(n,n);he(oe)&&(e.data=Lr(oe))}if(Gs=!0,s)for(const oe in s){const ne=s[oe],mt=Y(ne)?ne.bind(n,n):Y(ne.get)?ne.get.bind(n,n):Ze,Ct=!Y(ne)&&Y(ne.set)?ne.set.bind(n):Ze,rt=ke({get:mt,set:Ct});Object.defineProperty(r,oe,{enumerable:!0,configurable:!0,get:()=>rt.value,set:Re=>rt.value=Re})}if(o)for(const oe in o)yu(o[oe],r,n,oe);if(c){const oe=Y(c)?c.call(n):c;Reflect.ownKeys(oe).forEach(ne=>{hi(ne,oe[ne])})}u&&zo(u,e,"c");function ge(oe,ne){z(ne)?ne.forEach(mt=>oe(mt.bind(n))):ne&&oe(ne.bind(n))}if(ge(mu,f),ge(Ha,h),ge($h,m),ge(Bh,I),ge(Dh,A),ge(Uh,N),ge(Vh,W),ge(zh,J),ge(Hh,te),ge(gu,y),ge(vu,T),ge(jh,q),z(Z))if(Z.length){const oe=e.exposed||(e.exposed={});Z.forEach(ne=>{Object.defineProperty(oe,ne,{get:()=>n[ne],set:mt=>n[ne]=mt})})}else e.exposed||(e.exposed={});H&&e.render===Ze&&(e.render=H),_e!=null&&(e.inheritAttrs=_e),F&&(e.components=F),ie&&(e.directives=ie)}function Xh(e,t,n=Ze){z(e)&&(e=Ys(e));for(const r in e){const i=e[r];let s;he(i)?"default"in i?s=lt(i.from||r,i.default,!0):s=lt(i.from||r):s=lt(i),Ce(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[r]=s}}function zo(e,t,n){Ve(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function yu(e,t,n,r){const i=r.includes(".")?uu(n,r):()=>n[r];if(ye(e)){const s=t[e];Y(s)&&dn(i,s)}else if(Y(e))dn(i,e.bind(n));else if(he(e))if(z(e))e.forEach(s=>yu(s,t,n,r));else{const s=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(s)&&dn(i,s,e)}}function za(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let c;return o?c=o:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(l=>ki(c,l,a,!0)),ki(c,t,a)),he(t)&&s.set(t,c),c}function ki(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&ki(e,s,n,!0),i&&i.forEach(a=>ki(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const o=Jh[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const Jh={data:Vo,props:Wo,emits:Wo,methods:or,computed:or,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:or,directives:or,watch:Zh,provide:Vo,inject:Qh};function Vo(e,t){return t?e?function(){return be(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function Qh(e,t){return or(Ys(e),Ys(t))}function Ys(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Pe(e,t){return e?[...new Set([].concat(e,t))]:t}function or(e,t){return e?be(Object.create(null),e,t):t}function Wo(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:be(Object.create(null),Ho(e),Ho(t??{})):t}function Zh(e,t){if(!e)return t;if(!t)return e;const n=be(Object.create(null),e);for(const r in t)n[r]=Pe(e[r],t[r]);return n}function _u(){return{app:null,config:{isNativeTag:xd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ep=0;function tp(e,t){return function(r,i=null){Y(r)||(r=be({},r)),i!=null&&!he(i)&&(i=null);const s=_u(),a=new Set;let o=!1;const c=s.app={_uid:ep++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Tp,get config(){return s.config},set config(l){},use(l,...u){return a.has(l)||(l&&Y(l.install)?(a.add(l),l.install(c,...u)):Y(l)&&(a.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(!o){const h=V(r,i);return h.appContext=s,u&&t?t(h,l):e(h,l,f),o=!0,c._container=l,l.__vue_app__=c,Qi(h.component)||h.component.proxy}},unmount(){o&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){Ai=c;try{return l()}finally{Ai=null}}};return c}}let Ai=null;function hi(e,t){if(Ie){let n=Ie.provides;const r=Ie.parent&&Ie.parent.provides;r===n&&(n=Ie.provides=Object.create(r)),n[e]=t}}function lt(e,t,n=!1){const r=Ie||je;if(r||Ai){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:Ai._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Y(t)?t.call(r&&r.proxy):t}}function np(e,t,n,r=!1){const i={},s={};wi(s,Ji,1),e.propsDefaults=Object.create(null),wu(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:Yl(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function rp(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=ee(i),[c]=e.propsOptions;let l=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Gi(e.emitsOptions,h))continue;const m=t[h];if(c)if(Q(s,h))m!==s[h]&&(s[h]=m,l=!0);else{const I=dt(h);i[I]=qs(c,o,I,m,e,!1)}else m!==s[h]&&(s[h]=m,l=!0)}}}else{wu(e,t,i,s)&&(l=!0);let u;for(const f in o)(!t||!Q(t,f)&&((u=Gn(f))===f||!Q(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=qs(c,o,f,void 0,e,!0)):delete i[f]);if(s!==o)for(const f in s)(!t||!Q(t,f))&&(delete s[f],l=!0)}l&&wt(e,"set","$attrs")}function wu(e,t,n,r){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let c in t){if(ui(c))continue;const l=t[c];let u;i&&Q(i,u=dt(c))?!s||!s.includes(u)?n[u]=l:(o||(o={}))[u]=l:Gi(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,a=!0)}if(s){const c=ee(n),l=o||ue;for(let u=0;u<s.length;u++){const f=s[u];n[f]=qs(i,c,f,l[f],e,!Q(l,f))}}return a}function qs(e,t,n,r,i,s){const a=e[n];if(a!=null){const o=Q(a,"default");if(o&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&Y(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(Hn(i),r=l[n]=c.call(null,t),hn())}else r=c}a[0]&&(s&&!o?r=!1:a[1]&&(r===""||r===Gn(n))&&(r=!0))}return r}function Eu(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},o=[];let c=!1;if(!Y(e)){const u=f=>{c=!0;const[h,m]=Eu(f,t,!0);be(a,h),m&&o.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return he(e)&&r.set(e,Rn),Rn;if(z(s))for(let u=0;u<s.length;u++){const f=dt(s[u]);Ko(f)&&(a[f]=ue)}else if(s)for(const u in s){const f=dt(u);if(Ko(f)){const h=s[u],m=a[f]=z(h)||Y(h)?{type:h}:be({},h);if(m){const I=qo(Boolean,m.type),A=qo(String,m.type);m[0]=I>-1,m[1]=A<0||I<A,(I>-1||Q(m,"default"))&&o.push(f)}}}const l=[a,o];return he(e)&&r.set(e,l),l}function Ko(e){return e[0]!=="$"}function Go(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Yo(e,t){return Go(e)===Go(t)}function qo(e,t){return z(t)?t.findIndex(n=>Yo(n,e)):Y(t)&&Yo(t,e)?0:-1}const Iu=e=>e[0]==="_"||e==="$stable",Va=e=>z(e)?e.map(at):[at(e)],ip=(e,t,n)=>{if(t._n)return t;const r=De((...i)=>Va(t(...i)),n);return r._c=!1,r},ku=(e,t,n)=>{const r=e._ctx;for(const i in e){if(Iu(i))continue;const s=e[i];if(Y(s))t[i]=ip(i,s,r);else if(s!=null){const a=Va(s);t[i]=()=>a}}},Au=(e,t)=>{const n=Va(t);e.slots.default=()=>n},sp=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ee(t),wi(t,"_",n)):ku(t,e.slots={})}else e.slots={},t&&Au(e,t);wi(e.slots,Ji,1)},ap=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=ue;if(r.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:(be(i,t),!n&&o===1&&delete i._):(s=!t.$stable,ku(t,i)),a=t}else t&&(Au(e,t),a={default:1});if(s)for(const o in i)!Iu(o)&&!(o in a)&&delete i[o]};function Xs(e,t,n,r,i=!1){if(z(e)){e.forEach((h,m)=>Xs(h,t&&(z(t)?t[m]:t),n,r,i));return}if(di(r)&&!i)return;const s=r.shapeFlag&4?Qi(r.component)||r.component.proxy:r.el,a=i?null:s,{i:o,r:c}=e,l=t&&t.r,u=o.refs===ue?o.refs={}:o.refs,f=o.setupState;if(l!=null&&l!==c&&(ye(l)?(u[l]=null,Q(f,l)&&(f[l]=null)):Ce(l)&&(l.value=null)),Y(c))Ht(c,o,12,[a,u]);else{const h=ye(c),m=Ce(c);if(h||m){const I=()=>{if(e.f){const A=h?Q(f,c)?f[c]:u[c]:c.value;i?z(A)&&Ta(A,s):z(A)?A.includes(s)||A.push(s):h?(u[c]=[s],Q(f,c)&&(f[c]=u[c])):(c.value=[s],e.k&&(u[e.k]=c.value))}else h?(u[c]=a,Q(f,c)&&(f[c]=a)):m&&(c.value=a,e.k&&(u[e.k]=a))};a?(I.id=-1,Me(I,n)):I()}}}const Me=Ph;function op(e){return cp(e)}function cp(e,t){const n=Fs();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:o,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Ze,insertStaticContent:I}=e,A=(d,p,g,v=null,w=null,E=null,R=!1,x=null,S=!!p.dynamicChildren)=>{if(d===p)return;d&&!rn(d,p)&&(v=_(d),Re(d,w,E,!0),d=null),p.patchFlag===-2&&(S=!1,p.dynamicChildren=null);const{type:k,ref:B,shapeFlag:D}=p;switch(k){case Xi:N(d,p,g,v);break;case et:b(d,p,g,v);break;case ps:d==null&&y(p,g,v,R);break;case Ye:F(d,p,g,v,w,E,R,x,S);break;default:D&1?H(d,p,g,v,w,E,R,x,S):D&6?ie(d,p,g,v,w,E,R,x,S):(D&64||D&128)&&k.process(d,p,g,v,w,E,R,x,S,O)}B!=null&&w&&Xs(B,d&&d.ref,E,p||d,!p)},N=(d,p,g,v)=>{if(d==null)r(p.el=o(p.children),g,v);else{const w=p.el=d.el;p.children!==d.children&&l(w,p.children)}},b=(d,p,g,v)=>{d==null?r(p.el=c(p.children||""),g,v):p.el=d.el},y=(d,p,g,v)=>{[d.el,d.anchor]=I(d.children,p,g,v,d.el,d.anchor)},P=({el:d,anchor:p},g,v)=>{let w;for(;d&&d!==p;)w=h(d),r(d,g,v),d=w;r(p,g,v)},T=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=h(d),i(d),d=g;i(p)},H=(d,p,g,v,w,E,R,x,S)=>{R=R||p.type==="svg",d==null?J(p,g,v,w,E,R,x,S):q(d,p,w,E,R,x,S)},J=(d,p,g,v,w,E,R,x)=>{let S,k;const{type:B,props:D,shapeFlag:j,transition:G,dirs:X}=d;if(S=d.el=a(d.type,E,D&&D.is,D),j&8?u(S,d.children):j&16&&W(d.children,S,null,v,w,E&&B!=="foreignObject",R,x),X&&Jt(d,null,v,"created"),te(S,d,d.scopeId,R,v),D){for(const ae in D)ae!=="value"&&!ui(ae)&&s(S,ae,null,D[ae],E,d.children,v,w,Ae);"value"in D&&s(S,"value",null,D.value),(k=D.onVnodeBeforeMount)&&st(k,v,d)}X&&Jt(d,null,v,"beforeMount");const le=(!w||w&&!w.pendingBranch)&&G&&!G.persisted;le&&G.beforeEnter(S),r(S,p,g),((k=D&&D.onVnodeMounted)||le||X)&&Me(()=>{k&&st(k,v,d),le&&G.enter(S),X&&Jt(d,null,v,"mounted")},w)},te=(d,p,g,v,w)=>{if(g&&m(d,g),v)for(let E=0;E<v.length;E++)m(d,v[E]);if(w){let E=w.subTree;if(p===E){const R=w.vnode;te(d,R,R.scopeId,R.slotScopeIds,w.parent)}}},W=(d,p,g,v,w,E,R,x,S=0)=>{for(let k=S;k<d.length;k++){const B=d[k]=x?Lt(d[k]):at(d[k]);A(null,B,p,g,v,w,E,R,x)}},q=(d,p,g,v,w,E,R)=>{const x=p.el=d.el;let{patchFlag:S,dynamicChildren:k,dirs:B}=p;S|=d.patchFlag&16;const D=d.props||ue,j=p.props||ue;let G;g&&Qt(g,!1),(G=j.onVnodeBeforeUpdate)&&st(G,g,p,d),B&&Jt(p,d,g,"beforeUpdate"),g&&Qt(g,!0);const X=w&&p.type!=="foreignObject";if(k?Z(d.dynamicChildren,k,x,g,v,X,E):R||ne(d,p,x,null,g,v,X,E,!1),S>0){if(S&16)_e(x,p,D,j,g,v,w);else if(S&2&&D.class!==j.class&&s(x,"class",null,j.class,w),S&4&&s(x,"style",D.style,j.style,w),S&8){const le=p.dynamicProps;for(let ae=0;ae<le.length;ae++){const ve=le[ae],Ke=D[ve],kn=j[ve];(kn!==Ke||ve==="value")&&s(x,ve,Ke,kn,w,d.children,g,v,Ae)}}S&1&&d.children!==p.children&&u(x,p.children)}else!R&&k==null&&_e(x,p,D,j,g,v,w);((G=j.onVnodeUpdated)||B)&&Me(()=>{G&&st(G,g,p,d),B&&Jt(p,d,g,"updated")},v)},Z=(d,p,g,v,w,E,R)=>{for(let x=0;x<p.length;x++){const S=d[x],k=p[x],B=S.el&&(S.type===Ye||!rn(S,k)||S.shapeFlag&70)?f(S.el):g;A(S,k,B,null,v,w,E,R,!0)}},_e=(d,p,g,v,w,E,R)=>{if(g!==v){if(g!==ue)for(const x in g)!ui(x)&&!(x in v)&&s(d,x,g[x],null,R,p.children,w,E,Ae);for(const x in v){if(ui(x))continue;const S=v[x],k=g[x];S!==k&&x!=="value"&&s(d,x,k,S,R,p.children,w,E,Ae)}"value"in v&&s(d,"value",g.value,v.value)}},F=(d,p,g,v,w,E,R,x,S)=>{const k=p.el=d?d.el:o(""),B=p.anchor=d?d.anchor:o("");let{patchFlag:D,dynamicChildren:j,slotScopeIds:G}=p;G&&(x=x?x.concat(G):G),d==null?(r(k,g,v),r(B,g,v),W(p.children,g,B,w,E,R,x,S)):D>0&&D&64&&j&&d.dynamicChildren?(Z(d.dynamicChildren,j,g,w,E,R,x),(p.key!=null||w&&p===w.subTree)&&xu(d,p,!0)):ne(d,p,g,B,w,E,R,x,S)},ie=(d,p,g,v,w,E,R,x,S)=>{p.slotScopeIds=x,d==null?p.shapeFlag&512?w.ctx.activate(p,g,v,R,S):Oe(p,g,v,w,E,R,S):pt(d,p,S)},Oe=(d,p,g,v,w,E,R)=>{const x=d.component=vp(d,v,w);if(Yi(d)&&(x.ctx.renderer=O),yp(x),x.asyncDep){if(w&&w.registerDep(x,ge),!d.el){const S=x.subTree=V(et);b(null,S,p,g)}return}ge(x,d,p,g,w,E,R)},pt=(d,p,g)=>{const v=p.component=d.component;if(Ch(d,p,g))if(v.asyncDep&&!v.asyncResolved){oe(v,p,g);return}else v.next=p,Eh(v.update),v.update();else p.el=d.el,v.vnode=p},ge=(d,p,g,v,w,E,R)=>{const x=()=>{if(d.isMounted){let{next:B,bu:D,u:j,parent:G,vnode:X}=d,le=B,ae;Qt(d,!1),B?(B.el=X.el,oe(d,B,R)):B=X,D&&fi(D),(ae=B.props&&B.props.onVnodeBeforeUpdate)&&st(ae,G,B,X),Qt(d,!0);const ve=fs(d),Ke=d.subTree;d.subTree=ve,A(Ke,ve,f(Ke.el),_(Ke),d,w,E),B.el=ve.el,le===null&&Sh(d,ve.el),j&&Me(j,w),(ae=B.props&&B.props.onVnodeUpdated)&&Me(()=>st(ae,G,B,X),w)}else{let B;const{el:D,props:j}=p,{bm:G,m:X,parent:le}=d,ae=di(p);if(Qt(d,!1),G&&fi(G),!ae&&(B=j&&j.onVnodeBeforeMount)&&st(B,le,p),Qt(d,!0),D&&re){const ve=()=>{d.subTree=fs(d),re(D,d.subTree,d,w,null)};ae?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ve()):ve()}else{const ve=d.subTree=fs(d);A(null,ve,g,v,d,w,E),p.el=ve.el}if(X&&Me(X,w),!ae&&(B=j&&j.onVnodeMounted)){const ve=p;Me(()=>st(B,le,ve),w)}(p.shapeFlag&256||le&&di(le.vnode)&&le.vnode.shapeFlag&256)&&d.a&&Me(d.a,w),d.isMounted=!0,p=g=v=null}},S=d.effect=new Na(x,()=>Ba(k),d.scope),k=d.update=()=>S.run();k.id=d.uid,Qt(d,!0),k()},oe=(d,p,g)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,rp(d,p.props,v,g),ap(d,p.children,g),Yn(),Fo(),qn()},ne=(d,p,g,v,w,E,R,x,S=!1)=>{const k=d&&d.children,B=d?d.shapeFlag:0,D=p.children,{patchFlag:j,shapeFlag:G}=p;if(j>0){if(j&128){Ct(k,D,g,v,w,E,R,x,S);return}else if(j&256){mt(k,D,g,v,w,E,R,x,S);return}}G&8?(B&16&&Ae(k,w,E),D!==k&&u(g,D)):B&16?G&16?Ct(k,D,g,v,w,E,R,x,S):Ae(k,w,E,!0):(B&8&&u(g,""),G&16&&W(D,g,v,w,E,R,x,S))},mt=(d,p,g,v,w,E,R,x,S)=>{d=d||Rn,p=p||Rn;const k=d.length,B=p.length,D=Math.min(k,B);let j;for(j=0;j<D;j++){const G=p[j]=S?Lt(p[j]):at(p[j]);A(d[j],G,g,null,w,E,R,x,S)}k>B?Ae(d,w,E,!0,!1,D):W(p,g,v,w,E,R,x,S,D)},Ct=(d,p,g,v,w,E,R,x,S)=>{let k=0;const B=p.length;let D=d.length-1,j=B-1;for(;k<=D&&k<=j;){const G=d[k],X=p[k]=S?Lt(p[k]):at(p[k]);if(rn(G,X))A(G,X,g,null,w,E,R,x,S);else break;k++}for(;k<=D&&k<=j;){const G=d[D],X=p[j]=S?Lt(p[j]):at(p[j]);if(rn(G,X))A(G,X,g,null,w,E,R,x,S);else break;D--,j--}if(k>D){if(k<=j){const G=j+1,X=G<B?p[G].el:v;for(;k<=j;)A(null,p[k]=S?Lt(p[k]):at(p[k]),g,X,w,E,R,x,S),k++}}else if(k>j)for(;k<=D;)Re(d[k],w,E,!0),k++;else{const G=k,X=k,le=new Map;for(k=X;k<=j;k++){const $e=p[k]=S?Lt(p[k]):at(p[k]);$e.key!=null&&le.set($e.key,k)}let ae,ve=0;const Ke=j-X+1;let kn=!1,To=0;const tr=new Array(Ke);for(k=0;k<Ke;k++)tr[k]=0;for(k=G;k<=D;k++){const $e=d[k];if(ve>=Ke){Re($e,w,E,!0);continue}let it;if($e.key!=null)it=le.get($e.key);else for(ae=X;ae<=j;ae++)if(tr[ae-X]===0&&rn($e,p[ae])){it=ae;break}it===void 0?Re($e,w,E,!0):(tr[it-X]=k+1,it>=To?To=it:kn=!0,A($e,p[it],g,null,w,E,R,x,S),ve++)}const Co=kn?lp(tr):Rn;for(ae=Co.length-1,k=Ke-1;k>=0;k--){const $e=X+k,it=p[$e],So=$e+1<B?p[$e+1].el:v;tr[k]===0?A(null,it,g,So,w,E,R,x,S):kn&&(ae<0||k!==Co[ae]?rt(it,g,So,2):ae--)}}},rt=(d,p,g,v,w=null)=>{const{el:E,type:R,transition:x,children:S,shapeFlag:k}=d;if(k&6){rt(d.component.subTree,p,g,v);return}if(k&128){d.suspense.move(p,g,v);return}if(k&64){R.move(d,p,g,O);return}if(R===Ye){r(E,p,g);for(let D=0;D<S.length;D++)rt(S[D],p,g,v);r(d.anchor,p,g);return}if(R===ps){P(d,p,g);return}if(v!==2&&k&1&&x)if(v===0)x.beforeEnter(E),r(E,p,g),Me(()=>x.enter(E),w);else{const{leave:D,delayLeave:j,afterLeave:G}=x,X=()=>r(E,p,g),le=()=>{D(E,()=>{X(),G&&G()})};j?j(E,X,le):le()}else r(E,p,g)},Re=(d,p,g,v=!1,w=!1)=>{const{type:E,props:R,ref:x,children:S,dynamicChildren:k,shapeFlag:B,patchFlag:D,dirs:j}=d;if(x!=null&&Xs(x,null,g,d,!0),B&256){p.ctx.deactivate(d);return}const G=B&1&&j,X=!di(d);let le;if(X&&(le=R&&R.onVnodeBeforeUnmount)&&st(le,p,d),B&6)Kr(d.component,g,v);else{if(B&128){d.suspense.unmount(g,v);return}G&&Jt(d,null,p,"beforeUnmount"),B&64?d.type.remove(d,p,g,w,O,v):k&&(E!==Ye||D>0&&D&64)?Ae(k,p,g,!1,!0):(E===Ye&&D&384||!w&&B&16)&&Ae(S,p,g),v&&En(d)}(X&&(le=R&&R.onVnodeUnmounted)||G)&&Me(()=>{le&&st(le,p,d),G&&Jt(d,null,p,"unmounted")},g)},En=d=>{const{type:p,el:g,anchor:v,transition:w}=d;if(p===Ye){In(g,v);return}if(p===ps){T(d);return}const E=()=>{i(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:R,delayLeave:x}=w,S=()=>R(g,E);x?x(d.el,E,S):S()}else E()},In=(d,p)=>{let g;for(;d!==p;)g=h(d),i(d),d=g;i(p)},Kr=(d,p,g)=>{const{bum:v,scope:w,update:E,subTree:R,um:x}=d;v&&fi(v),w.stop(),E&&(E.active=!1,Re(R,d,p,g)),x&&Me(x,p),Me(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},Ae=(d,p,g,v=!1,w=!1,E=0)=>{for(let R=E;R<d.length;R++)Re(d[R],p,g,v,w)},_=d=>d.shapeFlag&6?_(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),L=(d,p,g)=>{d==null?p._vnode&&Re(p._vnode,null,null,!0):A(p._vnode||null,d,p,null,null,null,g),Fo(),su(),p._vnode=d},O={p:A,um:Re,m:rt,r:En,mt:Oe,mc:W,pc:ne,pbc:Z,n:_,o:e};let $,re;return t&&([$,re]=t(O)),{render:L,hydrate:$,createApp:tp(L,$)}}function Qt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function xu(e,t,n=!1){const r=e.children,i=t.children;if(z(r)&&z(i))for(let s=0;s<r.length;s++){const a=r[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=Lt(i[s]),o.el=a.el),n||xu(a,o)),o.type===Xi&&(o.el=a.el)}}function lp(e){const t=e.slice(),n=[0];let r,i,s,a,o;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,e[n[o]]<l?s=o+1:a=o;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}const up=e=>e.__isTeleport,Ye=Symbol.for("v-fgt"),Xi=Symbol.for("v-txt"),et=Symbol.for("v-cmt"),ps=Symbol.for("v-stc"),dr=[];let Je=null;function pe(e=!1){dr.push(Je=e?null:[])}function fp(){dr.pop(),Je=dr[dr.length-1]||null}let Er=1;function Xo(e){Er+=e}function Tu(e){return e.dynamicChildren=Er>0?Je||Rn:null,fp(),Er>0&&Je&&Je.push(e),e}function we(e,t,n,r,i,s){return Tu(C(e,t,n,r,i,s,!0))}function Js(e,t,n,r,i){return Tu(V(e,t,n,r,i,!0))}function Qs(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const Ji="__vInternal",Cu=({key:e})=>e??null,pi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?ye(e)||Ce(e)||Y(e)?{i:je,r:e,k:t,f:!!n}:e:null);function C(e,t=null,n=null,r=0,i=null,s=e===Ye?0:1,a=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Cu(t),ref:t&&pi(t),scopeId:cu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:je};return o?(Wa(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=ye(n)?8:16),Er>0&&!a&&Je&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&Je.push(c),c}const V=dp;function dp(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===Wh)&&(e=et),Qs(e)){const o=Kt(e,t,!0);return n&&Wa(o,n),Er>0&&!s&&Je&&(o.shapeFlag&6?Je[Je.indexOf(e)]=o:Je.push(o)),o.patchFlag|=-2,o}if(kp(e)&&(e=e.__vccOpts),t){t=hp(t);let{class:o,style:c}=t;o&&!ye(o)&&(t.class=Pa(o)),he(c)&&(Xl(c)&&!z(c)&&(c=be({},c)),t.style=Oa(c))}const a=ye(e)?1:Oh(e)?128:up(e)?64:he(e)?4:Y(e)?2:0;return C(e,t,n,r,i,a,s,!0)}function hp(e){return e?Xl(e)||Ji in e?be({},e):e:null}function Kt(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=e,o=t?pp(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Cu(o),ref:t&&t.ref?n&&i?z(i)?i.concat(pi(t)):[i,pi(t)]:pi(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ye?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Kt(e.ssContent),ssFallback:e.ssFallback&&Kt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function Zs(e=" ",t=0){return V(Xi,null,e,t)}function xe(e="",t=!1){return t?(pe(),Js(et,null,e)):V(et,null,e)}function at(e){return e==null||typeof e=="boolean"?V(et):z(e)?V(Ye,null,e.slice()):typeof e=="object"?Lt(e):V(Xi,null,String(e))}function Lt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Kt(e)}function Wa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Wa(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(Ji in t)?t._ctx=je:i===3&&je&&(je.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Y(t)?(t={default:t,_ctx:je},n=32):(t=String(t),r&64?(n=16,t=[Zs(t)]):n=8);e.children=t,e.shapeFlag|=n}function pp(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Pa([t.class,r.class]));else if(i==="style")t.style=Oa([t.style,r.style]);else if(ji(i)){const s=t[i],a=r[i];a&&s!==a&&!(z(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=r[i])}return t}function st(e,t,n,r=null){Ve(e,t,7,[n,r])}const mp=_u();let gp=0;function vp(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||mp,s={uid:gp++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new $d(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Eu(r,i),emitsOptions:ou(r,i),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:r.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=Ah.bind(null,s),e.ce&&e.ce(s),s}let Ie=null;const bp=()=>Ie||je;let Ka,An,Jo="__VUE_INSTANCE_SETTERS__";(An=Fs()[Jo])||(An=Fs()[Jo]=[]),An.push(e=>Ie=e),Ka=e=>{An.length>1?An.forEach(t=>t(e)):An[0](e)};const Hn=e=>{Ka(e),e.scope.on()},hn=()=>{Ie&&Ie.scope.off(),Ka(null)};function Su(e){return e.vnode.shapeFlag&4}let Ir=!1;function yp(e,t=!1){Ir=t;const{props:n,children:r}=e.vnode,i=Su(e);np(e,n,i,t),sp(e,r);const s=i?_p(e,t):void 0;return Ir=!1,s}function _p(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Jl(new Proxy(e.ctx,Yh));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?Ep(e):null;Hn(e),Yn();const s=Ht(r,e,0,[e.props,i]);if(qn(),hn(),Nl(s)){if(s.then(hn,hn),t)return s.then(a=>{Qo(e,a,t)}).catch(a=>{Ki(a,e,0)});e.asyncDep=s}else Qo(e,s,t)}else Ou(e,t)}function Qo(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=tu(t)),Ou(e,n)}let Zo;function Ou(e,t,n){const r=e.type;if(!e.render){if(!t&&Zo&&!r.render){const i=r.template||za(e).template;if(i){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:o,compilerOptions:c}=r,l=be(be({isCustomElement:s,delimiters:o},a),c);r.render=Zo(i,l)}}e.render=r.render||Ze}Hn(e),Yn(),qh(e),qn(),hn()}function wp(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return Ue(e,"get","$attrs"),t[n]}}))}function Ep(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return wp(e)},slots:e.slots,emit:e.emit,expose:t}}function Qi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(tu(Jl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in fr)return fr[n](e)},has(t,n){return n in t||n in fr}}))}function Ip(e,t=!0){return Y(e)?e.displayName||e.name:e.name||t&&e.__name}function kp(e){return Y(e)&&"__vccOpts"in e}const ke=(e,t)=>yh(e,t,Ir);function Zi(e,t,n){const r=arguments.length;return r===2?he(t)&&!z(t)?Qs(t)?V(e,null,[t]):V(e,t):V(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Qs(n)&&(n=[n]),V(e,t,n))}const Ap=Symbol.for("v-scx"),xp=()=>lt(Ap),Tp="3.3.4",Cp="http://www.w3.org/2000/svg",sn=typeof document<"u"?document:null,ec=sn&&sn.createElement("template"),Sp={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?sn.createElementNS(Cp,e):sn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>sn.createTextNode(e),createComment:e=>sn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>sn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{ec.innerHTML=r?`<svg>${e}</svg>`:e;const o=ec.content;if(r){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Op(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Pp(e,t,n){const r=e.style,i=ye(n);if(n&&!i){if(t&&!ye(t))for(const s in t)n[s]==null&&ea(r,s,"");for(const s in n)ea(r,s,n[s])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const tc=/\s*!important$/;function ea(e,t,n){if(z(n))n.forEach(r=>ea(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Rp(e,t);tc.test(n)?e.setProperty(Gn(r),n.replace(tc,""),"important"):e[r]=n}}const nc=["Webkit","Moz","ms"],ms={};function Rp(e,t){const n=ms[t];if(n)return n;let r=dt(t);if(r!=="filter"&&r in e)return ms[t]=r;r=Vi(r);for(let i=0;i<nc.length;i++){const s=nc[i]+r;if(s in e)return ms[t]=s}return t}const rc="http://www.w3.org/1999/xlink";function Np(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(rc,t.slice(6,t.length)):e.setAttributeNS(rc,t,n);else{const s=Fd(t);n==null||s&&!Dl(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Mp(e,t,n,r,i,s,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,i,s),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const l=o==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Dl(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Cn(e,t,n,r){e.addEventListener(t,n,r)}function Lp(e,t,n,r){e.removeEventListener(t,n,r)}function Dp(e,t,n,r,i=null){const s=e._vei||(e._vei={}),a=s[t];if(r&&a)a.value=r;else{const[o,c]=Up(t);if(r){const l=s[t]=Bp(r,i);Cn(e,o,l,c)}else a&&(Lp(e,o,a,c),s[t]=void 0)}}const ic=/(?:Once|Passive|Capture)$/;function Up(e){let t;if(ic.test(e)){t={};let r;for(;r=e.match(ic);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Gn(e.slice(2)),t]}let gs=0;const Fp=Promise.resolve(),$p=()=>gs||(Fp.then(()=>gs=0),gs=Date.now());function Bp(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Ve(jp(r,n.value),t,5,[r])};return n.value=e,n.attached=$p(),n}function jp(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const sc=/^on[a-z]/,Hp=(e,t,n,r,i=!1,s,a,o,c)=>{t==="class"?Op(e,r,i):t==="style"?Pp(e,n,r):ji(t)?xa(t)||Dp(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):zp(e,t,r,i))?Mp(e,t,r,s,a,o,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Np(e,t,r,i))};function zp(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&sc.test(t)&&Y(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||sc.test(t)&&ye(n)?!1:t in e}const Ot="transition",rr="animation",xi=(e,{slots:t})=>Zi(Lh,Vp(e),t);xi.displayName="Transition";const Pu={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};xi.props=be({},fu,Pu);const Zt=(e,t=[])=>{z(e)?e.forEach(n=>n(...t)):e&&e(...t)},ac=e=>e?z(e)?e.some(t=>t.length>1):e.length>1:!1;function Vp(e){const t={};for(const F in e)F in Pu||(t[F]=e[F]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:l=a,appearToClass:u=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,I=Wp(i),A=I&&I[0],N=I&&I[1],{onBeforeEnter:b,onEnter:y,onEnterCancelled:P,onLeave:T,onLeaveCancelled:H,onBeforeAppear:J=b,onAppear:te=y,onAppearCancelled:W=P}=t,q=(F,ie,Oe)=>{en(F,ie?u:o),en(F,ie?l:a),Oe&&Oe()},Z=(F,ie)=>{F._isLeaving=!1,en(F,f),en(F,m),en(F,h),ie&&ie()},_e=F=>(ie,Oe)=>{const pt=F?te:y,ge=()=>q(ie,F,Oe);Zt(pt,[ie,ge]),oc(()=>{en(ie,F?c:s),Pt(ie,F?u:o),ac(pt)||cc(ie,r,A,ge)})};return be(t,{onBeforeEnter(F){Zt(b,[F]),Pt(F,s),Pt(F,a)},onBeforeAppear(F){Zt(J,[F]),Pt(F,c),Pt(F,l)},onEnter:_e(!1),onAppear:_e(!0),onLeave(F,ie){F._isLeaving=!0;const Oe=()=>Z(F,ie);Pt(F,f),Yp(),Pt(F,h),oc(()=>{F._isLeaving&&(en(F,f),Pt(F,m),ac(T)||cc(F,r,N,Oe))}),Zt(T,[F,Oe])},onEnterCancelled(F){q(F,!1),Zt(P,[F])},onAppearCancelled(F){q(F,!0),Zt(W,[F])},onLeaveCancelled(F){Z(F),Zt(H,[F])}})}function Wp(e){if(e==null)return null;if(he(e))return[vs(e.enter),vs(e.leave)];{const t=vs(e);return[t,t]}}function vs(e){return Rd(e)}function Pt(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function en(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function oc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let Kp=0;function cc(e,t,n,r){const i=e._endId=++Kp,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:a,timeout:o,propCount:c}=Gp(e,t);if(!a)return r();const l=a+"end";let u=0;const f=()=>{e.removeEventListener(l,h),s()},h=m=>{m.target===e&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},o+1),e.addEventListener(l,h)}function Gp(e,t){const n=window.getComputedStyle(e),r=I=>(n[I]||"").split(", "),i=r(`${Ot}Delay`),s=r(`${Ot}Duration`),a=lc(i,s),o=r(`${rr}Delay`),c=r(`${rr}Duration`),l=lc(o,c);let u=null,f=0,h=0;t===Ot?a>0&&(u=Ot,f=a,h=s.length):t===rr?l>0&&(u=rr,f=l,h=c.length):(f=Math.max(a,l),u=f>0?a>l?Ot:rr:null,h=u?u===Ot?s.length:c.length:0);const m=u===Ot&&/\b(transform|all)(,|$)/.test(r(`${Ot}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:m}}function lc(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>uc(n)+uc(e[r])))}function uc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function Yp(){return document.body.offsetHeight}const fc=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?n=>fi(t,n):t};function qp(e){e.target.composing=!0}function dc(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const bs={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=fc(i);const s=r||i.props&&i.props.type==="number";Cn(e,t?"change":"input",a=>{if(a.target.composing)return;let o=e.value;n&&(o=o.trim()),s&&(o=Us(o)),e._assign(o)}),n&&Cn(e,"change",()=>{e.value=e.value.trim()}),t||(Cn(e,"compositionstart",qp),Cn(e,"compositionend",dc),Cn(e,"change",dc))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e._assign=fc(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&Us(e.value)===t))return;const a=t??"";e.value!==a&&(e.value=a)}},Xp=["ctrl","shift","alt","meta"],Jp={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Xp.some(n=>e[`${n}Key`]&&!t.includes(n))},Qp=(e,t)=>(n,...r)=>{for(let i=0;i<t.length;i++){const s=Jp[t[i]];if(s&&s(n,t))return}return e(n,...r)},hc={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):ir(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),ir(e,!0),r.enter(e)):r.leave(e,()=>{ir(e,!1)}):ir(e,t))},beforeUnmount(e,{value:t}){ir(e,t)}};function ir(e,t){e.style.display=t?e._vod:"none"}const Zp=be({patchProp:Hp},Sp);let pc;function em(){return pc||(pc=op(Zp))}const tm=(...e)=>{const t=em().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=nm(r);if(!i)return;const s=t._component;!Y(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function nm(e){return ye(e)?document.querySelector(e):e}function rm(){return Ru().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Ru(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const im=typeof Proxy=="function",sm="devtools-plugin:setup",am="plugin:settings:set";let xn,ta;function om(){var e;return xn!==void 0||(typeof window<"u"&&window.performance?(xn=!0,ta=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(xn=!0,ta=global.perf_hooks.performance):xn=!1),xn}function cm(){return om()?ta.now():Date.now()}class lm{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const r={};if(t.settings)for(const a in t.settings){const o=t.settings[a];r[a]=o.defaultValue}const i=`__vue-devtools-plugin-settings__${t.id}`;let s=Object.assign({},r);try{const a=localStorage.getItem(i),o=JSON.parse(a);Object.assign(s,o)}catch{}this.fallbacks={getSettings(){return s},setSettings(a){try{localStorage.setItem(i,JSON.stringify(a))}catch{}s=a},now(){return cm()}},n&&n.on(am,(a,o)=>{a===this.plugin.id&&this.fallbacks.setSettings(o)}),this.proxiedOn=new Proxy({},{get:(a,o)=>this.target?this.target.on[o]:(...c)=>{this.onQueue.push({method:o,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,o)=>this.target?this.target[o]:o==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(o)?(...c)=>(this.targetQueue.push({method:o,args:c,resolve:()=>{}}),this.fallbacks[o](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:o,args:c,resolve:l})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function um(e,t){const n=e,r=Ru(),i=rm(),s=im&&n.enableEarlyProxy;if(i&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))i.emit(sm,e,t);else{const a=s?new lm(n,i):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Nu="store";function fm(e){return e===void 0&&(e=null),lt(e!==null?e:Nu)}function Xn(e,t){Object.keys(e).forEach(function(n){return t(e[n],n)})}function Mu(e){return e!==null&&typeof e=="object"}function dm(e){return e&&typeof e.then=="function"}function hm(e,t){return function(){return e(t)}}function Lu(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function Du(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;es(e,n,[],e._modules.root,!0),Ga(e,n,t)}function Ga(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,s={};Xn(i,function(a,o){s[o]=hm(a,e),Object.defineProperty(e.getters,o,{get:function(){return s[o]()},enumerable:!0})}),e._state=Lr({data:t}),e.strict&&bm(e),r&&n&&e._withCommit(function(){r.data=null})}function es(e,t,n,r,i){var s=!n.length,a=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[a],e._modulesNamespaceMap[a]=r),!s&&!i){var o=Ya(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit(function(){o[c]=r.state})}var l=r.context=pm(e,a,n);r.forEachMutation(function(u,f){var h=a+f;mm(e,h,u,l)}),r.forEachAction(function(u,f){var h=u.root?f:a+f,m=u.handler||u;gm(e,h,m,l)}),r.forEachGetter(function(u,f){var h=a+f;vm(e,h,u,l)}),r.forEachChild(function(u,f){es(e,t,n.concat(f),u,i)})}function pm(e,t,n){var r=t==="",i={dispatch:r?e.dispatch:function(s,a,o){var c=Ti(s,a,o),l=c.payload,u=c.options,f=c.type;return(!u||!u.root)&&(f=t+f),e.dispatch(f,l)},commit:r?e.commit:function(s,a,o){var c=Ti(s,a,o),l=c.payload,u=c.options,f=c.type;(!u||!u.root)&&(f=t+f),e.commit(f,l,u)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return Uu(e,t)}},state:{get:function(){return Ya(e.state,n)}}}),i}function Uu(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach(function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}}),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function mm(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push(function(a){n.call(e,r.state,a)})}function gm(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push(function(a){var o=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},a);return dm(o)||(o=Promise.resolve(o)),e._devtoolHook?o.catch(function(c){throw e._devtoolHook.emit("vuex:error",c),c}):o})}function vm(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(s){return n(r.state,r.getters,s.state,s.getters)})}function bm(e){dn(function(){return e._state.data},function(){},{deep:!0,flush:"sync"})}function Ya(e,t){return t.reduce(function(n,r){return n[r]},e)}function Ti(e,t,n){return Mu(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var ym="vuex bindings",mc="vuex:mutations",ys="vuex:actions",Tn="vuex",_m=0;function wm(e,t){um({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[ym]},function(n){n.addTimelineLayer({id:mc,label:"Vuex Mutations",color:gc}),n.addTimelineLayer({id:ys,label:"Vuex Actions",color:gc}),n.addInspector({id:Tn,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===e&&r.inspectorId===Tn)if(r.filter){var i=[];ju(i,t._modules.root,r.filter,""),r.rootNodes=i}else r.rootNodes=[Bu(t._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===e&&r.inspectorId===Tn){var i=r.nodeId;Uu(t,i),r.state=km(xm(t._modules,i),i==="root"?t.getters:t._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(r){if(r.app===e&&r.inspectorId===Tn){var i=r.nodeId,s=r.path;i!=="root"&&(s=i.split("/").filter(Boolean).concat(s)),t._withCommit(function(){r.set(t._state.data,s,r.state.value)})}}),t.subscribe(function(r,i){var s={};r.payload&&(s.payload=r.payload),s.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(Tn),n.sendInspectorState(Tn),n.addTimelineEvent({layerId:mc,event:{time:Date.now(),title:r.type,data:s}})}),t.subscribeAction({before:function(r,i){var s={};r.payload&&(s.payload=r.payload),r._id=_m++,r._time=Date.now(),s.state=i,n.addTimelineEvent({layerId:ys,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:s}})},after:function(r,i){var s={},a=Date.now()-r._time;s.duration={_custom:{type:"duration",display:a+"ms",tooltip:"Action duration",value:a}},r.payload&&(s.payload=r.payload),s.state=i,n.addTimelineEvent({layerId:ys,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:s}})}})})}var gc=8702998,Em=6710886,Im=16777215,Fu={label:"namespaced",textColor:Im,backgroundColor:Em};function $u(e){return e&&e!=="root"?e.split("/").slice(-2,-1)[0]:"Root"}function Bu(e,t){return{id:t||"root",label:$u(t),tags:e.namespaced?[Fu]:[],children:Object.keys(e._children).map(function(n){return Bu(e._children[n],t+n+"/")})}}function ju(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[Fu]:[]}),Object.keys(t._children).forEach(function(i){ju(e,t._children[i],n,r+i+"/")})}function km(e,t,n){t=n==="root"?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map(function(a){return{key:a,editable:!0,value:e.state[a]}})};if(r.length){var s=Am(t);i.getters=Object.keys(s).map(function(a){return{key:a.endsWith("/")?$u(a):a,editable:!1,value:na(function(){return s[a]})}})}return i}function Am(e){var t={};return Object.keys(e).forEach(function(n){var r=n.split("/");if(r.length>1){var i=t,s=r.pop();r.forEach(function(a){i[a]||(i[a]={_custom:{value:{},display:a,tooltip:"Module",abstract:!0}}),i=i[a]._custom.value}),i[s]=na(function(){return e[n]})}else t[n]=na(function(){return e[n]})}),t}function xm(e,t){var n=t.split("/").filter(function(r){return r});return n.reduce(function(r,i,s){var a=r[i];if(!a)throw new Error('Missing module "'+i+'" for path "'+t+'".');return s===n.length-1?a:a._children},t==="root"?e:e.root._children)}function na(e){try{return e()}catch(t){return t}}var nt=function(t,n){this.runtime=n,this._children=Object.create(null),this._rawModule=t;var r=t.state;this.state=(typeof r=="function"?r():r)||{}},Hu={namespaced:{configurable:!0}};Hu.namespaced.get=function(){return!!this._rawModule.namespaced};nt.prototype.addChild=function(t,n){this._children[t]=n};nt.prototype.removeChild=function(t){delete this._children[t]};nt.prototype.getChild=function(t){return this._children[t]};nt.prototype.hasChild=function(t){return t in this._children};nt.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)};nt.prototype.forEachChild=function(t){Xn(this._children,t)};nt.prototype.forEachGetter=function(t){this._rawModule.getters&&Xn(this._rawModule.getters,t)};nt.prototype.forEachAction=function(t){this._rawModule.actions&&Xn(this._rawModule.actions,t)};nt.prototype.forEachMutation=function(t){this._rawModule.mutations&&Xn(this._rawModule.mutations,t)};Object.defineProperties(nt.prototype,Hu);var _n=function(t){this.register([],t,!1)};_n.prototype.get=function(t){return t.reduce(function(n,r){return n.getChild(r)},this.root)};_n.prototype.getNamespace=function(t){var n=this.root;return t.reduce(function(r,i){return n=n.getChild(i),r+(n.namespaced?i+"/":"")},"")};_n.prototype.update=function(t){zu([],this.root,t)};_n.prototype.register=function(t,n,r){var i=this;r===void 0&&(r=!0);var s=new nt(n,r);if(t.length===0)this.root=s;else{var a=this.get(t.slice(0,-1));a.addChild(t[t.length-1],s)}n.modules&&Xn(n.modules,function(o,c){i.register(t.concat(c),o,r)})};_n.prototype.unregister=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1],i=n.getChild(r);i&&i.runtime&&n.removeChild(r)};_n.prototype.isRegistered=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1];return n?n.hasChild(r):!1};function zu(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;zu(e.concat(r),t.getChild(r),n.modules[r])}}function Tm(e){return new Fe(e)}var Fe=function(t){var n=this;t===void 0&&(t={});var r=t.plugins;r===void 0&&(r=[]);var i=t.strict;i===void 0&&(i=!1);var s=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new _n(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var a=this,o=this,c=o.dispatch,l=o.commit;this.dispatch=function(h,m){return c.call(a,h,m)},this.commit=function(h,m,I){return l.call(a,h,m,I)},this.strict=i;var u=this._modules.root.state;es(this,u,[],this._modules.root),Ga(this,u),r.forEach(function(f){return f(n)})},qa={state:{configurable:!0}};Fe.prototype.install=function(t,n){t.provide(n||Nu,this),t.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&wm(t,this)};qa.state.get=function(){return this._state.data};qa.state.set=function(e){};Fe.prototype.commit=function(t,n,r){var i=this,s=Ti(t,n,r),a=s.type,o=s.payload,c={type:a,payload:o},l=this._mutations[a];l&&(this._withCommit(function(){l.forEach(function(f){f(o)})}),this._subscribers.slice().forEach(function(u){return u(c,i.state)}))};Fe.prototype.dispatch=function(t,n){var r=this,i=Ti(t,n),s=i.type,a=i.payload,o={type:s,payload:a},c=this._actions[s];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(o,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(a)})):c[0](a);return new Promise(function(u,f){l.then(function(h){try{r._actionSubscribers.filter(function(m){return m.after}).forEach(function(m){return m.after(o,r.state)})}catch{}u(h)},function(h){try{r._actionSubscribers.filter(function(m){return m.error}).forEach(function(m){return m.error(o,r.state,h)})}catch{}f(h)})})}};Fe.prototype.subscribe=function(t,n){return Lu(t,this._subscribers,n)};Fe.prototype.subscribeAction=function(t,n){var r=typeof t=="function"?{before:t}:t;return Lu(r,this._actionSubscribers,n)};Fe.prototype.watch=function(t,n,r){var i=this;return dn(function(){return t(i.state,i.getters)},n,Object.assign({},r))};Fe.prototype.replaceState=function(t){var n=this;this._withCommit(function(){n._state.data=t})};Fe.prototype.registerModule=function(t,n,r){r===void 0&&(r={}),typeof t=="string"&&(t=[t]),this._modules.register(t,n),es(this,this.state,t,this._modules.get(t),r.preserveState),Ga(this,this.state)};Fe.prototype.unregisterModule=function(t){var n=this;typeof t=="string"&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var r=Ya(n.state,t.slice(0,-1));delete r[t[t.length-1]]}),Du(this)};Fe.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),this._modules.isRegistered(t)};Fe.prototype.hotUpdate=function(t){this._modules.update(t),Du(this,!0)};Fe.prototype._withCommit=function(t){var n=this._committing;this._committing=!0,t(),this._committing=n};Object.defineProperties(Fe.prototype,qa);var Xa=Om(function(e,t){var n={};return Cm(t).forEach(function(r){var i=r.key,s=r.val;n[i]=function(){var o=this.$store.state,c=this.$store.getters;if(e){var l=Pm(this.$store,"mapState",e);if(!l)return;o=l.context.state,c=l.context.getters}return typeof s=="function"?s.call(this,o,c):o[s]},n[i].vuex=!0}),n});function Cm(e){return Sm(e)?Array.isArray(e)?e.map(function(t){return{key:t,val:t}}):Object.keys(e).map(function(t){return{key:t,val:e[t]}}):[]}function Sm(e){return Array.isArray(e)||Mu(e)}function Om(e){return function(t,n){return typeof t!="string"?(n=t,t=""):t.charAt(t.length-1)!=="/"&&(t+="/"),e(t,n)}}function Pm(e,t,n){var r=e._modulesNamespaceMap[n];return r}/**
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
 */const Vu=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Rm=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},Wu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,o=a?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,f=(s&3)<<4|o>>4;let h=(o&15)<<2|l>>6,m=l&63;c||(m=64,a||(h=64)),r.push(n[u],n[f],n[h],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(Vu(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Rm(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||l==null||f==null)throw new Nm;const h=s<<2|o>>4;if(r.push(h),l!==64){const m=o<<4&240|l>>2;if(r.push(m),f!==64){const I=l<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Nm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Mm=function(e){const t=Vu(e);return Wu.encodeByteArray(t,!0)},Ku=function(e){return Mm(e).replace(/\./g,"")},Gu=function(e){try{return Wu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Lm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Dm=()=>Lm().__FIREBASE_DEFAULTS__,Um=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Fm=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Gu(e[1]);return t&&JSON.parse(t)},Ja=()=>{try{return Dm()||Um()||Fm()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},$m=e=>{var t,n;return(n=(t=Ja())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},Yu=()=>{var e;return(e=Ja())===null||e===void 0?void 0:e.config},qu=e=>{var t;return(t=Ja())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Bm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function jm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Hm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function zm(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Vm(){const e=Se();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function Wm(){try{return typeof indexedDB=="object"}catch{return!1}}function Km(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const Gm="FirebaseError";class Xt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=Gm,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Dr.prototype.create)}}class Dr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?Ym(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new Xt(i,o,r)}}function Ym(e,t){return e.replace(qm,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const qm=/\{\$([^}]+)}/g;function Xm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ci(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(vc(s)&&vc(a)){if(!Ci(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function vc(e){return e!==null&&typeof e=="object"}/**
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
 */function Ur(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function cr(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function lr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Jm(e,t){const n=new Qm(e,t);return n.subscribe.bind(n)}class Qm{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Zm(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=_s),i.error===void 0&&(i.error=_s),i.complete===void 0&&(i.complete=_s);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Zm(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function _s(){}/**
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
 */function ht(e){return e&&e._delegate?e._delegate:e}class zn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */const tn="[DEFAULT]";/**
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
 */class eg{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Bm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(ng(t))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=tn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=tn){return this.instances.has(t)}getOptions(t=tn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tg(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=tn){return this.component?this.component.multipleInstances?t:tn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tg(e){return e===tn?void 0:e}function ng(e){return e.instantiationMode==="EAGER"}/**
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
 */class rg{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new eg(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ce||(ce={}));const ig={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},sg=ce.INFO,ag={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},og=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=ag[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Xu{constructor(t){this.name=t,this._logLevel=sg,this._logHandler=og,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ce))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?ig[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...t),this._logHandler(this,ce.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...t),this._logHandler(this,ce.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...t),this._logHandler(this,ce.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...t),this._logHandler(this,ce.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...t),this._logHandler(this,ce.ERROR,...t)}}const cg=(e,t)=>t.some(n=>e instanceof n);let bc,yc;function lg(){return bc||(bc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ug(){return yc||(yc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ju=new WeakMap,ra=new WeakMap,Qu=new WeakMap,ws=new WeakMap,Qa=new WeakMap;function fg(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(zt(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Ju.set(n,e)}).catch(()=>{}),Qa.set(t,e),t}function dg(e){if(ra.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});ra.set(e,t)}let ia={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return ra.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Qu.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function hg(e){ia=e(ia)}function pg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(Es(this),t,...n);return Qu.set(r,t.sort?t.sort():[t]),zt(r)}:ug().includes(e)?function(...t){return e.apply(Es(this),t),zt(Ju.get(this))}:function(...t){return zt(e.apply(Es(this),t))}}function mg(e){return typeof e=="function"?pg(e):(e instanceof IDBTransaction&&dg(e),cg(e,lg())?new Proxy(e,ia):e)}function zt(e){if(e instanceof IDBRequest)return fg(e);if(ws.has(e))return ws.get(e);const t=mg(e);return t!==e&&(ws.set(e,t),Qa.set(t,e)),t}const Es=e=>Qa.get(e);function gg(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=zt(a);return r&&a.addEventListener("upgradeneeded",c=>{r(zt(a.result),c.oldVersion,c.newVersion,zt(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const vg=["get","getKey","getAll","getAllKeys","count"],bg=["put","add","delete","clear"],Is=new Map;function _c(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(Is.get(t))return Is.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=bg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||vg.includes(n)))return;const s=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),i&&c.done]))[0]};return Is.set(t,s),s}hg(e=>({...e,get:(t,n,r)=>_c(t,n)||e.get(t,n,r),has:(t,n)=>!!_c(t,n)||e.has(t,n)}));/**
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
 */class yg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(_g(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function _g(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const sa="@firebase/app",wc="0.9.15";/**
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
 */const mn=new Xu("@firebase/app"),wg="@firebase/app-compat",Eg="@firebase/analytics-compat",Ig="@firebase/analytics",kg="@firebase/app-check-compat",Ag="@firebase/app-check",xg="@firebase/auth",Tg="@firebase/auth-compat",Cg="@firebase/database",Sg="@firebase/database-compat",Og="@firebase/functions",Pg="@firebase/functions-compat",Rg="@firebase/installations",Ng="@firebase/installations-compat",Mg="@firebase/messaging",Lg="@firebase/messaging-compat",Dg="@firebase/performance",Ug="@firebase/performance-compat",Fg="@firebase/remote-config",$g="@firebase/remote-config-compat",Bg="@firebase/storage",jg="@firebase/storage-compat",Hg="@firebase/firestore",zg="@firebase/firestore-compat",Vg="firebase",Wg="10.1.0";/**
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
 */const aa="[DEFAULT]",Kg={[sa]:"fire-core",[wg]:"fire-core-compat",[Ig]:"fire-analytics",[Eg]:"fire-analytics-compat",[Ag]:"fire-app-check",[kg]:"fire-app-check-compat",[xg]:"fire-auth",[Tg]:"fire-auth-compat",[Cg]:"fire-rtdb",[Sg]:"fire-rtdb-compat",[Og]:"fire-fn",[Pg]:"fire-fn-compat",[Rg]:"fire-iid",[Ng]:"fire-iid-compat",[Mg]:"fire-fcm",[Lg]:"fire-fcm-compat",[Dg]:"fire-perf",[Ug]:"fire-perf-compat",[Fg]:"fire-rc",[$g]:"fire-rc-compat",[Bg]:"fire-gcs",[jg]:"fire-gcs-compat",[Hg]:"fire-fst",[zg]:"fire-fst-compat","fire-js":"fire-js",[Vg]:"fire-js-all"};/**
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
 */const Si=new Map,oa=new Map;function Gg(e,t){try{e.container.addComponent(t)}catch(n){mn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function kr(e){const t=e.name;if(oa.has(t))return mn.debug(`There were multiple attempts to register component ${t}.`),!1;oa.set(t,e);for(const n of Si.values())Gg(n,e);return!0}function Zu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Yg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vt=new Dr("app","Firebase",Yg);/**
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
 */class qg{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const Fr=Wg;function ef(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:aa,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Vt.create("bad-app-name",{appName:String(i)});if(n||(n=Yu()),!n)throw Vt.create("no-options");const s=Si.get(i);if(s){if(Ci(n,s.options)&&Ci(r,s.config))return s;throw Vt.create("duplicate-app",{appName:i})}const a=new rg(i);for(const c of oa.values())a.addComponent(c);const o=new qg(n,r,a);return Si.set(i,o),o}function Xg(e=aa){const t=Si.get(e);if(!t&&e===aa&&Yu())return ef();if(!t)throw Vt.create("no-app",{appName:e});return t}function Un(e,t,n){var r;let i=(r=Kg[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${t}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),mn.warn(o.join(" "));return}kr(new zn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Jg="firebase-heartbeat-database",Qg=1,Ar="firebase-heartbeat-store";let ks=null;function tf(){return ks||(ks=gg(Jg,Qg,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(Ar)}}}).catch(e=>{throw Vt.create("idb-open",{originalErrorMessage:e.message})})),ks}async function Zg(e){try{return await(await tf()).transaction(Ar).objectStore(Ar).get(nf(e))}catch(t){if(t instanceof Xt)mn.warn(t.message);else{const n=Vt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});mn.warn(n.message)}}}async function Ec(e,t){try{const r=(await tf()).transaction(Ar,"readwrite");await r.objectStore(Ar).put(t,nf(e)),await r.done}catch(n){if(n instanceof Xt)mn.warn(n.message);else{const r=Vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mn.warn(r.message)}}}function nf(e){return`${e.name}!${e.options.appId}`}/**
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
 */const ev=1024,tv=30*24*60*60*1e3;class nv{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new iv(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Ic();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=tv}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Ic(),{heartbeatsToSend:n,unsentEntries:r}=rv(this._heartbeatsCache.heartbeats),i=Ku(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Ic(){return new Date().toISOString().substring(0,10)}function rv(e,t=ev){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),kc(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),kc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class iv{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Wm()?Km().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Zg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ec(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Ec(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function kc(e){return Ku(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function sv(e){kr(new zn("platform-logger",t=>new yg(t),"PRIVATE")),kr(new zn("heartbeat",t=>new nv(t),"PRIVATE")),Un(sa,wc,e),Un(sa,wc,"esm2017"),Un("fire-js","")}sv("");function Za(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function rf(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const av=rf,sf=new Dr("auth","Firebase",rf());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=new Xu("@firebase/auth");function ov(e,...t){Oi.logLevel<=ce.WARN&&Oi.warn(`Auth (${Fr}): ${e}`,...t)}function mi(e,...t){Oi.logLevel<=ce.ERROR&&Oi.error(`Auth (${Fr}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(e,...t){throw eo(e,...t)}function ut(e,...t){return eo(e,...t)}function af(e,t,n){const r=Object.assign(Object.assign({},av()),{[t]:n});return new Dr("auth","Firebase",r).create(t,{appName:e.name})}function cv(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&We(e,"argument-error"),af(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function eo(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return sf.create(e,...t)}function K(e,t,...n){if(!e)throw eo(t,...n)}function yt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw mi(t),new Error(t)}function Et(e,t){e||yt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ca(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function lv(){return Ac()==="http:"||Ac()==="https:"}function Ac(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lv()||Hm()||"connection"in navigator)?navigator.onLine:!0}function fv(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $r{constructor(t,n){this.shortDelay=t,this.longDelay=n,Et(n>t,"Short delay should be less than long delay!"),this.isMobile=jm()||zm()}get(){return uv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function to(e,t){Et(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class of{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;yt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;yt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;yt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dv={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hv=new $r(3e4,6e4);function Jn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Qn(e,t,n,r,i={}){return cf(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const o=Ur(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),of.fetch()(lf(e,e.config.apiHost,n,o),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function cf(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},dv),t);try{const i=new pv(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Zr(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Zr(e,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Zr(e,"email-already-in-use",a);if(c==="USER_DISABLED")throw Zr(e,"user-disabled",a);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw af(e,u,l);We(e,u)}}catch(i){if(i instanceof Xt)throw i;We(e,"network-request-failed",{message:String(i)})}}async function Br(e,t,n,r,i={}){const s=await Qn(e,t,n,r,i);return"mfaPendingCredential"in s&&We(e,"multi-factor-auth-required",{_serverResponse:s}),s}function lf(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?to(e.config,i):`${e.config.apiScheme}://${i}`}class pv{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(ut(this.auth,"network-request-failed")),hv.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Zr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=ut(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mv(e,t){return Qn(e,"POST","/v1/accounts:delete",t)}async function gv(e,t){return Qn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function vv(e,t=!1){const n=ht(e),r=await n.getIdToken(t),i=no(r);K(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:hr(As(i.auth_time)),issuedAtTime:hr(As(i.iat)),expirationTime:hr(As(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function As(e){return Number(e)*1e3}function no(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return mi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Gu(n);return i?JSON.parse(i):(mi("Failed to decode base64 JWT payload"),null)}catch(i){return mi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function bv(e){const t=no(e);return K(t,"internal-error"),K(typeof t.exp<"u","internal-error"),K(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xr(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Xt&&yv(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function yv({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _v{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uf{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=hr(this.lastLoginAt),this.creationTime=hr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Pi(e){var t;const n=e.auth,r=await e.getIdToken(),i=await xr(e,gv(n,{idToken:r}));K(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Iv(s.providerUserInfo):[],o=Ev(e.providerData,a),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new uf(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function wv(e){const t=ht(e);await Pi(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Ev(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Iv(e){return e.map(t=>{var{providerId:n}=t,r=Za(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kv(e,t){const n=await cf(e,{},async()=>{const r=Ur({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=lf(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",of.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){K(t.idToken,"internal-error"),K(typeof t.idToken<"u","internal-error"),K(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):bv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return K(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await kv(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Tr;return r&&(K(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(K(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(K(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Tr,this.toJSON())}_performRefresh(){return yt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(e,t){K(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class pn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Za(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new _v(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new uf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await xr(this,this.stsTokenManager.getToken(this.auth,t));return K(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return vv(this,t)}reload(){return wv(this)}_assign(t){this!==t&&(K(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new pn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){K(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Pi(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await xr(this,mv(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,o,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(a=n.photoURL)!==null&&a!==void 0?a:void 0,A=(o=n.tenantId)!==null&&o!==void 0?o:void 0,N=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:P,emailVerified:T,isAnonymous:H,providerData:J,stsTokenManager:te}=n;K(P&&te,t,"internal-error");const W=Tr.fromJSON(this.name,te);K(typeof P=="string",t,"internal-error"),Rt(f,t.name),Rt(h,t.name),K(typeof T=="boolean",t,"internal-error"),K(typeof H=="boolean",t,"internal-error"),Rt(m,t.name),Rt(I,t.name),Rt(A,t.name),Rt(N,t.name),Rt(b,t.name),Rt(y,t.name);const q=new pn({uid:P,auth:t,email:h,emailVerified:T,displayName:f,isAnonymous:H,photoURL:I,phoneNumber:m,tenantId:A,stsTokenManager:W,createdAt:b,lastLoginAt:y});return J&&Array.isArray(J)&&(q.providerData=J.map(Z=>Object.assign({},Z))),N&&(q._redirectEventId=N),q}static async _fromIdTokenResponse(t,n,r=!1){const i=new Tr;i.updateFromServerResponse(n);const s=new pn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Pi(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xc=new Map;function _t(e){Et(e instanceof Function,"Expected a class definition");let t=xc.get(e);return t?(Et(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,xc.set(e,t),t)}/**
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
 */class ff{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}ff.type="NONE";const Tc=ff;/**
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
 */function gi(e,t,n){return`firebase:${e}:${t}:${n}`}class Fn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=gi(this.userKey,i.apiKey,s),this.fullPersistenceKey=gi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?pn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Fn(_t(Tc),t,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||_t(Tc);const a=gi(r,t.config.apiKey,t.name);let o=null;for(const l of n)try{const u=await l._get(a);if(u){const f=pn._fromJSON(t,u);l!==s&&(o=f),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Fn(s,t,r):(s=c[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(a)}catch{}})),new Fn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cc(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(df(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(gf(t))return"Blackberry";if(vf(t))return"Webos";if(ro(t))return"Safari";if((t.includes("chrome/")||hf(t))&&!t.includes("edge/"))return"Chrome";if(mf(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function df(e=Se()){return/firefox\//i.test(e)}function ro(e=Se()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function hf(e=Se()){return/crios\//i.test(e)}function pf(e=Se()){return/iemobile/i.test(e)}function mf(e=Se()){return/android/i.test(e)}function gf(e=Se()){return/blackberry/i.test(e)}function vf(e=Se()){return/webos/i.test(e)}function ts(e=Se()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Av(e=Se()){var t;return ts(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function xv(){return Vm()&&document.documentMode===10}function bf(e=Se()){return ts(e)||mf(e)||vf(e)||gf(e)||/windows phone/i.test(e)||pf(e)}function Tv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yf(e,t=[]){let n;switch(e){case"Browser":n=Cc(Se());break;case"Worker":n=`${Cc(Se())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Fr}/${r}`}async function _f(e,t){return Qn(e,"GET","/v2/recaptchaConfig",Jn(e,t))}function Sc(e){return e!==void 0&&e.enterprise!==void 0}class wf{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cv(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function Ef(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=ut("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Cv().appendChild(r)})}function Sv(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const Ov="https://www.google.com/recaptcha/enterprise.js?render=",Pv="recaptcha-enterprise",Rv="NO_RECAPTCHA";class If{constructor(t){this.type=Pv,this.auth=wn(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{_f(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const l=new wf(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,a(l.siteKey)}}).catch(c=>{o(c)})})}function i(s,a,o){const c=window.grecaptcha;Sc(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:t}).then(l=>{a(l)}).catch(()=>{a(Rv)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(o=>{if(!n&&Sc(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}Ef(Ov+o).then(()=>{i(o,s,a)}).catch(c=>{a(c)})}}).catch(o=>{a(o)})})}}async function Ri(e,t,n,r=!1){const i=new If(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}/**
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
 */class Nv{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,o)=>{try{const c=t(s);a(c)}catch(c){o(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mv{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Oc(this),this.idTokenSubscription=new Oc(this),this.beforeStateQueue=new Nv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=sf,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=_t(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===o)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return K(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Pi(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=fv()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?ht(t):null;return n&&K(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&K(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(_t(t))})}async initializeRecaptchaConfig(){const t=await _f(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new wf(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new If(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Dr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&_t(t)||this._popupRedirectResolver;K(n,this,"argument-error"),this.redirectPersistenceManager=await Fn.create(this,[_t(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return K(a,this,"internal-error"),a.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return K(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=yf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&ov(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function wn(e){return ht(e)}class Oc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Jm(n=>this.observer=n)}get next(){return K(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lv(e,t){const n=Zu(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ci(s,t??{}))return i;We(i,"already-initialized")}return n.initialize({options:t})}function Dv(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_t);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Uv(e,t,n){const r=wn(e);K(r._canInitEmulator,r,"emulator-config-failed"),K(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=kf(t),{host:a,port:o}=Fv(t),c=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||$v()}function kf(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Fv(e){const t=kf(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Pc(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Pc(a)}}}function Pc(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function $v(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return yt("not implemented")}_getIdTokenResponse(t){return yt("not implemented")}_linkToIdToken(t,n){return yt("not implemented")}_getReauthenticationResolver(t){return yt("not implemented")}}async function Bv(e,t){return Qn(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(e,t){return Br(e,"POST","/v1/accounts:signInWithPassword",Jn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jv(e,t){return Br(e,"POST","/v1/accounts:signInWithEmailLink",Jn(e,t))}async function Hv(e,t){return Br(e,"POST","/v1/accounts:signInWithEmailLink",Jn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends io{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Cr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Cr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Ri(t,r,"signInWithPassword");return xs(t,i)}else return xs(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Ri(t,r,"signInWithPassword");return xs(t,s)}else return Promise.reject(i)});case"emailLink":return jv(t,{email:this._email,oobCode:this._password});default:We(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Bv(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Hv(t,{idToken:n,email:this._email,oobCode:this._password});default:We(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $n(e,t){return Br(e,"POST","/v1/accounts:signInWithIdp",Jn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zv="http://localhost";class gn extends io{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new gn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):We("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Za(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new gn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return $n(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,$n(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,$n(t,n)}buildRequest(){const t={requestUri:zv,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Ur(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vv(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Wv(e){const t=cr(lr(e)).link,n=t?cr(lr(t)).deep_link_id:null,r=cr(lr(e)).deep_link_id;return(r?cr(lr(r)).link:null)||r||n||t||e}class so{constructor(t){var n,r,i,s,a,o;const c=cr(lr(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Vv((i=c.mode)!==null&&i!==void 0?i:null);K(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=c.tenantId)!==null&&o!==void 0?o:null}static parseLink(t){const n=Wv(t);try{return new so(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.providerId=Zn.PROVIDER_ID}static credential(t,n){return Cr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=so.parseLink(n);return K(r,"argument-error"),Cr._fromEmailAndCode(t,r.code,r.tenantId)}}Zn.PROVIDER_ID="password";Zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ao{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class jr extends ao{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends jr{constructor(){super("facebook.com")}static credential(t){return gn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ut.credential(t.oauthAccessToken)}catch{return null}}}Ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ut.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends jr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return gn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ft.credential(n,r)}catch{return null}}}Ft.GOOGLE_SIGN_IN_METHOD="google.com";Ft.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends jr{constructor(){super("github.com")}static credential(t){return gn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $t.credential(t.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends jr{constructor(){super("twitter.com")}static credential(t,n){return gn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.TWITTER_SIGN_IN_METHOD="twitter.com";Bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ts(e,t){return Br(e,"POST","/v1/accounts:signUp",Jn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await pn._fromIdTokenResponse(t,r,i),a=Rc(r);return new vn({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Rc(r);return new vn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Rc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni extends Xt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ni.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Ni(t,n,r,i)}}function Af(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ni._fromErrorAndOperation(e,s,t,r):s})}async function Kv(e,t,n=!1){const r=await xr(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return vn._forOperation(e,"link",r)}/**
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
 */async function Gv(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await xr(e,Af(r,i,t,e),n);K(s.idToken,r,"internal-error");const a=no(s.idToken);K(a,r,"internal-error");const{sub:o}=a;return K(e.uid===o,r,"user-mismatch"),vn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&We(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xf(e,t,n=!1){const r="signIn",i=await Af(e,r,t),s=await vn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Yv(e,t){return xf(wn(e),t)}async function qv(e,t,n){var r;const i=wn(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let a;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Ri(i,s,"signUpPassword");a=Ts(i,l)}else a=Ts(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Ri(i,s,"signUpPassword");return Ts(i,u)}else return Promise.reject(l)});const o=await a.catch(l=>Promise.reject(l)),c=await vn._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function Xv(e,t,n){return Yv(ht(e),Zn.credential(t,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jv(e,t){return ht(e).setPersistence(t)}function Qv(e,t,n,r){return ht(e).onIdTokenChanged(t,n,r)}function Zv(e,t,n){return ht(e).beforeAuthStateChanged(t,n)}function eb(e,t,n,r){return ht(e).onAuthStateChanged(t,n,r)}function tb(e){return ht(e).signOut()}const Mi="__sak";/**
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
 */class Tf{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Mi,"1"),this.storage.removeItem(Mi),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nb(){const e=Se();return ro(e)||ts(e)}const rb=1e3,ib=10;class Cf extends Tf{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=nb()&&Tv(),this.fallbackToPolling=bf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);xv()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,ib):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},rb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}Cf.type="LOCAL";const sb=Cf;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sf extends Tf{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}Sf.type="SESSION";const oo=Sf;/**
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
 */function ab(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class ns{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new ns(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async l=>l(n.origin,s)),c=await ab(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ns.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class ob{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,c)=>{const l=co("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(h.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(){return window}function cb(e){ft().location.href=e}/**
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
 */function Of(){return typeof ft().WorkerGlobalScope<"u"&&typeof ft().importScripts=="function"}async function lb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ub(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function fb(){return Of()?self:null}/**
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
 */const Pf="firebaseLocalStorageDb",db=1,Li="firebaseLocalStorage",Rf="fbase_key";class Hr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function rs(e,t){return e.transaction([Li],t?"readwrite":"readonly").objectStore(Li)}function hb(){const e=indexedDB.deleteDatabase(Pf);return new Hr(e).toPromise()}function la(){const e=indexedDB.open(Pf,db);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Li,{keyPath:Rf})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Li)?t(r):(r.close(),await hb(),t(await la()))})})}async function Nc(e,t,n){const r=rs(e,!0).put({[Rf]:t,value:n});return new Hr(r).toPromise()}async function pb(e,t){const n=rs(e,!1).get(t),r=await new Hr(n).toPromise();return r===void 0?null:r.value}function Mc(e,t){const n=rs(e,!0).delete(t);return new Hr(n).toPromise()}const mb=800,gb=3;class Nf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await la(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>gb)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Of()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ns._getInstance(fb()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await lb(),!this.activeServiceWorker)return;this.sender=new ob(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ub()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await la();return await Nc(t,Mi,"1"),await Mc(t,Mi),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Nc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>pb(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>Mc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=rs(i,!1).getAll();return new Hr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),mb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Nf.type="LOCAL";const vb=Nf;new $r(3e4,6e4);/**
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
 */function Mf(e,t){return t?_t(t):(K(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class lo extends io{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return $n(t,this._buildIdpRequest())}_linkToIdToken(t,n){return $n(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return $n(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function bb(e){return xf(e.auth,new lo(e),e.bypassAuthState)}function yb(e){const{auth:t,user:n}=e;return K(n,t,"internal-error"),Gv(n,new lo(e),e.bypassAuthState)}async function _b(e){const{auth:t,user:n}=e;return K(n,t,"internal-error"),Kv(n,new lo(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lf{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return bb;case"linkViaPopup":case"linkViaRedirect":return _b;case"reauthViaPopup":case"reauthViaRedirect":return yb;default:We(this.auth,"internal-error")}}resolve(t){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Et(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wb=new $r(2e3,1e4);async function o2(e,t,n){const r=wn(e);cv(e,t,ao);const i=Mf(r,n);return new cn(r,"signInViaPopup",t,i).executeNotNull()}class cn extends Lf{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,cn.currentPopupAction&&cn.currentPopupAction.cancel(),cn.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return K(t,this.auth,"internal-error"),t}async onExecution(){Et(this.filter.length===1,"Popup operations only handle one event");const t=co();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(ut(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ut(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cn.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ut(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,wb.get())};t()}}cn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eb="pendingRedirect",vi=new Map;class Ib extends Lf{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=vi.get(this.auth._key());if(!t){try{const r=await kb(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}vi.set(this.auth._key(),t)}return this.bypassAuthState||vi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function kb(e,t){const n=Tb(t),r=xb(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Ab(e,t){vi.set(e._key(),t)}function xb(e){return _t(e._redirectPersistence)}function Tb(e){return gi(Eb,e.config.apiKey,e.name)}async function Cb(e,t,n=!1){const r=wn(e),i=Mf(r,t),a=await new Ib(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Sb=10*60*1e3;class Ob{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Pb(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Df(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(ut(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Sb&&this.cachedEventUids.clear(),this.cachedEventUids.has(Lc(t))}saveEventToCache(t){this.cachedEventUids.add(Lc(t)),this.lastProcessedEventTime=Date.now()}}function Lc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Df({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Pb(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Df(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rb(e,t={}){return Qn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Mb=/^https?/;async function Lb(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Rb(e);for(const n of t)try{if(Db(n))return}catch{}We(e,"unauthorized-domain")}function Db(e){const t=ca(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!Mb.test(n))return!1;if(Nb.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Ub=new $r(3e4,6e4);function Dc(){const e=ft().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Fb(e){return new Promise((t,n)=>{var r,i,s;function a(){Dc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Dc(),n(ut(e,"network-request-failed"))},timeout:Ub.get()})}if(!((i=(r=ft().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=ft().gapi)===null||s===void 0)&&s.load)a();else{const o=Sv("iframefcb");return ft()[o]=()=>{gapi.load?a():n(ut(e,"network-request-failed"))},Ef(`https://apis.google.com/js/api.js?onload=${o}`).catch(c=>n(c))}}).catch(t=>{throw bi=null,t})}let bi=null;function $b(e){return bi=bi||Fb(e),bi}/**
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
 */const Bb=new $r(5e3,15e3),jb="__/auth/iframe",Hb="emulator/auth/iframe",zb={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Vb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Wb(e){const t=e.config;K(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?to(t,Hb):`https://${e.config.authDomain}/${jb}`,r={apiKey:t.apiKey,appName:e.name,v:Fr},i=Vb.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ur(r).slice(1)}`}async function Kb(e){const t=await $b(e),n=ft().gapi;return K(n,e,"internal-error"),t.open({where:document.body,url:Wb(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:zb,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=ut(e,"network-request-failed"),o=ft().setTimeout(()=>{s(a)},Bb.get());function c(){ft().clearTimeout(o),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const Gb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Yb=500,qb=600,Xb="_blank",Jb="http://localhost";class Uc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Qb(e,t,n,r=Yb,i=qb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c=Object.assign(Object.assign({},Gb),{width:r.toString(),height:i.toString(),top:s,left:a}),l=Se().toLowerCase();n&&(o=hf(l)?Xb:n),df(l)&&(t=t||Jb,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[m,I])=>`${h}${m}=${I},`,"");if(Av(l)&&o!=="_self")return Zb(t||"",o),new Uc(null);const f=window.open(t||"",o,u);K(f,e,"popup-blocked");try{f.focus()}catch{}return new Uc(f)}function Zb(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const ey="__/auth/handler",ty="emulator/auth/handler",ny=encodeURIComponent("fac");async function Fc(e,t,n,r,i,s){K(e.config.authDomain,e,"auth-domain-config-required"),K(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Fr,eventId:i};if(t instanceof ao){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Xm(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(s||{}))a[u]=f}if(t instanceof jr){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(a.scopes=u.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const u of Object.keys(o))o[u]===void 0&&delete o[u];const c=await e._getAppCheckToken(),l=c?`#${ny}=${encodeURIComponent(c)}`:"";return`${ry(e)}?${Ur(o).slice(1)}${l}`}function ry({config:e}){return e.emulator?to(e,ty):`https://${e.authDomain}/${ey}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cs="webStorageSupport";class iy{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=oo,this._completeRedirectFn=Cb,this._overrideRedirectResult=Ab}async _openPopup(t,n,r,i){var s;Et((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Fc(t,n,r,ca(),i);return Qb(t,a,co())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Fc(t,n,r,ca(),i);return cb(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Et(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Kb(t),r=new Ob(t);return n.register("authEvent",i=>(K(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(Cs,{type:Cs},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Cs];a!==void 0&&n(!!a),We(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Lb(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return bf()||ro()||ts()}}const sy=iy;var $c="@firebase/auth",Bc="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){K(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oy(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cy(e){kr(new zn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;K(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:yf(e)},l=new Mv(r,i,s,c);return Dv(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),kr(new zn("auth-internal",t=>{const n=wn(t.getProvider("auth").getImmediate());return(r=>new ay(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un($c,Bc,oy(e)),Un($c,Bc,"esm2017")}/**
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
 */const ly=5*60,uy=qu("authIdTokenMaxAge")||ly;let jc=null;const fy=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>uy)return;const i=n==null?void 0:n.token;jc!==i&&(jc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function is(e=Xg()){const t=Zu(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Lv(e,{popupRedirectResolver:sy,persistence:[vb,sb,oo]}),r=qu("authTokenSyncURL");if(r){const s=fy(r);Zv(n,s,()=>s(n.currentUser)),Qv(n,a=>s(a))}const i=$m("auth");return i&&Uv(n,`http://${i}`),n}cy("Browser");var dy="firebase",hy="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un(dy,hy,"app");const py={apiKey:"AIzaSyDcHJuGEASw294AYFosczrfidLapWbyRWo",authDomain:"todoapp-d3740.firebaseapp.com",projectId:"todoapp-d3740",storageBucket:"todoapp-d3740.appspot.com",messagingSenderId:"110761858449",appId:"1:110761858449:web:b9674a81e6ce1449707630"},my=ef(py),qe=is(my),gy="modulepreload",vy=function(e){return"/TodoApp/"+e},Hc={},ei=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=vy(s),s in Hc)return;Hc[s]=!0;const a=s.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const f=i[u];if(f.href===s&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":gy,a||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),a)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const Sn=typeof window<"u";function by(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const se=Object.assign;function Ss(e,t){const n={};for(const r in t){const i=t[r];n[r]=tt(i)?i.map(e):e(i)}return n}const pr=()=>{},tt=Array.isArray,yy=/\/$/,_y=e=>e.replace(yy,"");function Os(e,t,n="/"){let r,i={},s="",a="";const o=t.indexOf("#");let c=t.indexOf("?");return o<c&&o>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,o>-1?o:t.length),i=e(s)),o>-1&&(r=r||t.slice(0,o),a=t.slice(o,t.length)),r=ky(r??t,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:a}}function wy(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function zc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function Ey(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Vn(t.matched[r],n.matched[i])&&Uf(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Vn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Uf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!Iy(e[n],t[n]))return!1;return!0}function Iy(e,t){return tt(e)?Vc(e,t):tt(t)?Vc(t,e):e===t}function Vc(e,t){return tt(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function ky(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,a,o;for(a=0;a<r.length;a++)if(o=r[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var Sr;(function(e){e.pop="pop",e.push="push"})(Sr||(Sr={}));var mr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(mr||(mr={}));function Ay(e){if(!e)if(Sn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),_y(e)}const xy=/^[^#]+#/;function Ty(e,t){return e.replace(xy,"#")+t}function Cy(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ss=()=>({left:window.pageXOffset,top:window.pageYOffset});function Sy(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Cy(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function Wc(e,t){return(history.state?history.state.position-t:-1)+e}const ua=new Map;function Oy(e,t){ua.set(e,t)}function Py(e){const t=ua.get(e);return ua.delete(e),t}let Ry=()=>location.protocol+"//"+location.host;function Ff(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let o=i.includes(e.slice(s))?e.slice(s).length:1,c=i.slice(o);return c[0]!=="/"&&(c="/"+c),zc(c,"")}return zc(n,e)+r+i}function Ny(e,t,n,r){let i=[],s=[],a=null;const o=({state:h})=>{const m=Ff(e,location),I=n.value,A=t.value;let N=0;if(h){if(n.value=m,t.value=h,a&&a===I){a=null;return}N=A?h.position-A.position:0}else r(m);i.forEach(b=>{b(n.value,I,{delta:N,type:Sr.pop,direction:N?N>0?mr.forward:mr.back:mr.unknown})})};function c(){a=n.value}function l(h){i.push(h);const m=()=>{const I=i.indexOf(h);I>-1&&i.splice(I,1)};return s.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(se({},h.state,{scroll:ss()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Kc(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?ss():null}}function My(e){const{history:t,location:n}=window,r={value:Ff(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Ry()+e+c;try{t[u?"replaceState":"pushState"](l,"",h),i.value=l}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function a(c,l){const u=se({},t.state,Kc(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function o(c,l){const u=se({},i.value,t.state,{forward:c,scroll:ss()});s(u.current,u,!0);const f=se({},Kc(r.value,c,null),{position:u.position+1},l);s(c,f,!1),r.value=c}return{location:r,state:i,push:o,replace:a}}function Ly(e){e=Ay(e);const t=My(e),n=Ny(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=se({location:"",base:e,go:r,createHref:Ty.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Dy(e){return typeof e=="string"||e&&typeof e=="object"}function $f(e){return typeof e=="string"||typeof e=="symbol"}const Nt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Bf=Symbol("");var Gc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(Gc||(Gc={}));function Wn(e,t){return se(new Error,{type:e,[Bf]:!0},t)}function gt(e,t){return e instanceof Error&&Bf in e&&(t==null||!!(e.type&t))}const Yc="[^/]+?",Uy={sensitive:!1,strict:!1,start:!0,end:!0},Fy=/[.+*?^${}()[\]/\\]/g;function $y(e,t){const n=se({},Uy,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const h=l[f];let m=40+(n.sensitive?.25:0);if(h.type===0)f||(i+="/"),i+=h.value.replace(Fy,"\\$&"),m+=40;else if(h.type===1){const{value:I,repeatable:A,optional:N,regexp:b}=h;s.push({name:I,repeatable:A,optional:N});const y=b||Yc;if(y!==Yc){m+=10;try{new RegExp(`(${y})`)}catch(T){throw new Error(`Invalid custom RegExp for param "${I}" (${y}): `+T.message)}}let P=A?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(P=N&&l.length<2?`(?:/${P})`:"/"+P),N&&(P+="?"),i+=P,m+=20,N&&(m+=-8),A&&(m+=-20),y===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function o(l){const u=l.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",I=s[h-1];f[I.name]=m&&I.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const h of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:I,repeatable:A,optional:N}=m,b=I in l?l[I]:"";if(tt(b)&&!A)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const y=tt(b)?b.join("/"):b;if(!y)if(N)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${I}"`);u+=y}}return u||"/"}return{re:a,score:r,keys:s,parse:o,stringify:c}}function By(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function jy(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=By(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(qc(r))return 1;if(qc(i))return-1}return i.length-r.length}function qc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Hy={type:0,value:""},zy=/[a-zA-Z0-9_]/;function Vy(e){if(!e)return[[]];if(e==="/")return[[Hy]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let o=0,c,l="",u="";function f(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;o<e.length;){if(c=e[o++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),a()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:zy.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&o--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&o--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),a(),i}function Wy(e,t,n){const r=$y(Vy(e.path),n),i=se(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function Ky(e,t){const n=[],r=new Map;t=Qc({strict:!1,end:!0,sensitive:!1},t);function i(u){return r.get(u)}function s(u,f,h){const m=!h,I=Gy(u);I.aliasOf=h&&h.record;const A=Qc(t,u),N=[I];if("alias"in u){const P=typeof u.alias=="string"?[u.alias]:u.alias;for(const T of P)N.push(se({},I,{components:h?h.record.components:I.components,path:T,aliasOf:h?h.record:I}))}let b,y;for(const P of N){const{path:T}=P;if(f&&T[0]!=="/"){const H=f.record.path,J=H[H.length-1]==="/"?"":"/";P.path=f.record.path+(T&&J+T)}if(b=Wy(P,f,A),h?h.alias.push(b):(y=y||b,y!==b&&y.alias.push(b),m&&u.name&&!Jc(b)&&a(u.name)),I.children){const H=I.children;for(let J=0;J<H.length;J++)s(H[J],b,h&&h.children[J])}h=h||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return y?()=>{a(y)}:pr}function a(u){if($f(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return n}function c(u){let f=0;for(;f<n.length&&jy(u,n[f])>=0&&(u.record.path!==n[f].record.path||!jf(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Jc(u)&&r.set(u.record.name,u)}function l(u,f){let h,m={},I,A;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw Wn(1,{location:u});A=h.record.name,m=se(Xc(f.params,h.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&Xc(u.params,h.keys.map(y=>y.name))),I=h.stringify(m)}else if("path"in u)I=u.path,h=n.find(y=>y.re.test(I)),h&&(m=h.parse(I),A=h.record.name);else{if(h=f.name?r.get(f.name):n.find(y=>y.re.test(f.path)),!h)throw Wn(1,{location:u,currentLocation:f});A=h.record.name,m=se({},f.params,u.params),I=h.stringify(m)}const N=[];let b=h;for(;b;)N.unshift(b.record),b=b.parent;return{name:A,path:I,params:m,matched:N,meta:qy(N)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:a,getRoutes:o,getRecordMatcher:i}}function Xc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function Gy(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Yy(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Yy(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Jc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function qy(e){return e.reduce((t,n)=>se(t,n.meta),{})}function Qc(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function jf(e,t){return t.children.some(n=>n===e||jf(e,n))}const Hf=/#/g,Xy=/&/g,Jy=/\//g,Qy=/=/g,Zy=/\?/g,zf=/\+/g,e0=/%5B/g,t0=/%5D/g,Vf=/%5E/g,n0=/%60/g,Wf=/%7B/g,r0=/%7C/g,Kf=/%7D/g,i0=/%20/g;function uo(e){return encodeURI(""+e).replace(r0,"|").replace(e0,"[").replace(t0,"]")}function s0(e){return uo(e).replace(Wf,"{").replace(Kf,"}").replace(Vf,"^")}function fa(e){return uo(e).replace(zf,"%2B").replace(i0,"+").replace(Hf,"%23").replace(Xy,"%26").replace(n0,"`").replace(Wf,"{").replace(Kf,"}").replace(Vf,"^")}function a0(e){return fa(e).replace(Qy,"%3D")}function o0(e){return uo(e).replace(Hf,"%23").replace(Zy,"%3F")}function c0(e){return e==null?"":o0(e).replace(Jy,"%2F")}function Di(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function l0(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(zf," "),a=s.indexOf("="),o=Di(a<0?s:s.slice(0,a)),c=a<0?null:Di(s.slice(a+1));if(o in t){let l=t[o];tt(l)||(l=t[o]=[l]),l.push(c)}else t[o]=c}return t}function Zc(e){let t="";for(let n in e){const r=e[n];if(n=a0(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(tt(r)?r.map(s=>s&&fa(s)):[r&&fa(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function u0(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=tt(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const f0=Symbol(""),el=Symbol(""),fo=Symbol(""),Gf=Symbol(""),da=Symbol("");function sr(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Dt(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,o)=>{const c=f=>{f===!1?o(Wn(4,{from:n,to:t})):f instanceof Error?o(f):Dy(f)?o(Wn(2,{from:t,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),a())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>o(f))})}function Ps(e,t,n,r){const i=[];for(const s of e)for(const a in s.components){let o=s.components[a];if(!(t!=="beforeRouteEnter"&&!s.instances[a]))if(d0(o)){const l=(o.__vccOpts||o)[t];l&&i.push(Dt(l,n,r,s,a))}else{let c=o();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=by(l)?l.default:l;s.components[a]=u;const h=(u.__vccOpts||u)[t];return h&&Dt(h,n,r,s,a)()}))}}return i}function d0(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function tl(e){const t=lt(fo),n=lt(Gf),r=ke(()=>t.resolve(Ln(e.to))),i=ke(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Vn.bind(null,u));if(h>-1)return h;const m=nl(c[l-2]);return l>1&&nl(u)===m&&f[f.length-1].path!==m?f.findIndex(Vn.bind(null,c[l-2])):h}),s=ke(()=>i.value>-1&&g0(n.params,r.value.params)),a=ke(()=>i.value>-1&&i.value===n.matched.length-1&&Uf(n.params,r.value.params));function o(c={}){return m0(c)?t[Ln(e.replace)?"replace":"push"](Ln(e.to)).catch(pr):Promise.resolve()}return{route:r,href:ke(()=>r.value.href),isActive:s,isExactActive:a,navigate:o}}const h0=ja({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:tl,setup(e,{slots:t}){const n=Lr(tl(e)),{options:r}=lt(fo),i=ke(()=>({[rl(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[rl(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Zi("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),p0=h0;function m0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function g0(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!tt(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function nl(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const rl=(e,t,n)=>e??t??n,v0=ja({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=lt(da),i=ke(()=>e.route||r.value),s=lt(el,0),a=ke(()=>{let l=Ln(s);const{matched:u}=i.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),o=ke(()=>i.value.matched[a.value]);hi(el,ke(()=>a.value+1)),hi(f0,o),hi(da,i);const c=ph();return dn(()=>[c.value,o.value,e.name],([l,u,f],[h,m,I])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Vn(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=i.value,u=e.name,f=o.value,h=f&&f.components[u];if(!h)return il(n.default,{Component:h,route:l});const m=f.props[u],I=m?m===!0?l.params:typeof m=="function"?m(l):m:null,N=Zi(h,se({},I,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return il(n.default,{Component:N,route:l})||N}}});function il(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const b0=v0;function y0(e){const t=Ky(e.routes,e),n=e.parseQuery||l0,r=e.stringifyQuery||Zc,i=e.history,s=sr(),a=sr(),o=sr(),c=mh(Nt);let l=Nt;Sn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ss.bind(null,_=>""+_),f=Ss.bind(null,c0),h=Ss.bind(null,Di);function m(_,L){let O,$;return $f(_)?(O=t.getRecordMatcher(_),$=L):$=_,t.addRoute($,O)}function I(_){const L=t.getRecordMatcher(_);L&&t.removeRoute(L)}function A(){return t.getRoutes().map(_=>_.record)}function N(_){return!!t.getRecordMatcher(_)}function b(_,L){if(L=se({},L||c.value),typeof _=="string"){const g=Os(n,_,L.path),v=t.resolve({path:g.path},L),w=i.createHref(g.fullPath);return se(g,v,{params:h(v.params),hash:Di(g.hash),redirectedFrom:void 0,href:w})}let O;if("path"in _)O=se({},_,{path:Os(n,_.path,L.path).path});else{const g=se({},_.params);for(const v in g)g[v]==null&&delete g[v];O=se({},_,{params:f(g)}),L.params=f(L.params)}const $=t.resolve(O,L),re=_.hash||"";$.params=u(h($.params));const d=wy(r,se({},_,{hash:s0(re),path:$.path})),p=i.createHref(d);return se({fullPath:d,hash:re,query:r===Zc?u0(_.query):_.query||{}},$,{redirectedFrom:void 0,href:p})}function y(_){return typeof _=="string"?Os(n,_,c.value.path):se({},_)}function P(_,L){if(l!==_)return Wn(8,{from:L,to:_})}function T(_){return te(_)}function H(_){return T(se(y(_),{replace:!0}))}function J(_){const L=_.matched[_.matched.length-1];if(L&&L.redirect){const{redirect:O}=L;let $=typeof O=="function"?O(_):O;return typeof $=="string"&&($=$.includes("?")||$.includes("#")?$=y($):{path:$},$.params={}),se({query:_.query,hash:_.hash,params:"path"in $?{}:_.params},$)}}function te(_,L){const O=l=b(_),$=c.value,re=_.state,d=_.force,p=_.replace===!0,g=J(O);if(g)return te(se(y(g),{state:typeof g=="object"?se({},re,g.state):re,force:d,replace:p}),L||O);const v=O;v.redirectedFrom=L;let w;return!d&&Ey(r,$,O)&&(w=Wn(16,{to:v,from:$}),rt($,$,!0,!1)),(w?Promise.resolve(w):Z(v,$)).catch(E=>gt(E)?gt(E,2)?E:Ct(E):ne(E,v,$)).then(E=>{if(E){if(gt(E,2))return te(se({replace:p},y(E.to),{state:typeof E.to=="object"?se({},re,E.to.state):re,force:d}),L||v)}else E=F(v,$,!0,p,re);return _e(v,$,E),E})}function W(_,L){const O=P(_,L);return O?Promise.reject(O):Promise.resolve()}function q(_){const L=In.values().next().value;return L&&typeof L.runWithContext=="function"?L.runWithContext(_):_()}function Z(_,L){let O;const[$,re,d]=_0(_,L);O=Ps($.reverse(),"beforeRouteLeave",_,L);for(const g of $)g.leaveGuards.forEach(v=>{O.push(Dt(v,_,L))});const p=W.bind(null,_,L);return O.push(p),Ae(O).then(()=>{O=[];for(const g of s.list())O.push(Dt(g,_,L));return O.push(p),Ae(O)}).then(()=>{O=Ps(re,"beforeRouteUpdate",_,L);for(const g of re)g.updateGuards.forEach(v=>{O.push(Dt(v,_,L))});return O.push(p),Ae(O)}).then(()=>{O=[];for(const g of d)if(g.beforeEnter)if(tt(g.beforeEnter))for(const v of g.beforeEnter)O.push(Dt(v,_,L));else O.push(Dt(g.beforeEnter,_,L));return O.push(p),Ae(O)}).then(()=>(_.matched.forEach(g=>g.enterCallbacks={}),O=Ps(d,"beforeRouteEnter",_,L),O.push(p),Ae(O))).then(()=>{O=[];for(const g of a.list())O.push(Dt(g,_,L));return O.push(p),Ae(O)}).catch(g=>gt(g,8)?g:Promise.reject(g))}function _e(_,L,O){o.list().forEach($=>q(()=>$(_,L,O)))}function F(_,L,O,$,re){const d=P(_,L);if(d)return d;const p=L===Nt,g=Sn?history.state:{};O&&($||p?i.replace(_.fullPath,se({scroll:p&&g&&g.scroll},re)):i.push(_.fullPath,re)),c.value=_,rt(_,L,O,p),Ct()}let ie;function Oe(){ie||(ie=i.listen((_,L,O)=>{if(!Kr.listening)return;const $=b(_),re=J($);if(re){te(se(re,{replace:!0}),$).catch(pr);return}l=$;const d=c.value;Sn&&Oy(Wc(d.fullPath,O.delta),ss()),Z($,d).catch(p=>gt(p,12)?p:gt(p,2)?(te(p.to,$).then(g=>{gt(g,20)&&!O.delta&&O.type===Sr.pop&&i.go(-1,!1)}).catch(pr),Promise.reject()):(O.delta&&i.go(-O.delta,!1),ne(p,$,d))).then(p=>{p=p||F($,d,!1),p&&(O.delta&&!gt(p,8)?i.go(-O.delta,!1):O.type===Sr.pop&&gt(p,20)&&i.go(-1,!1)),_e($,d,p)}).catch(pr)}))}let pt=sr(),ge=sr(),oe;function ne(_,L,O){Ct(_);const $=ge.list();return $.length?$.forEach(re=>re(_,L,O)):console.error(_),Promise.reject(_)}function mt(){return oe&&c.value!==Nt?Promise.resolve():new Promise((_,L)=>{pt.add([_,L])})}function Ct(_){return oe||(oe=!_,Oe(),pt.list().forEach(([L,O])=>_?O(_):L()),pt.reset()),_}function rt(_,L,O,$){const{scrollBehavior:re}=e;if(!Sn||!re)return Promise.resolve();const d=!O&&Py(Wc(_.fullPath,0))||($||!O)&&history.state&&history.state.scroll||null;return ru().then(()=>re(_,L,d)).then(p=>p&&Sy(p)).catch(p=>ne(p,_,L))}const Re=_=>i.go(_);let En;const In=new Set,Kr={currentRoute:c,listening:!0,addRoute:m,removeRoute:I,hasRoute:N,getRoutes:A,resolve:b,options:e,push:T,replace:H,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:ge.add,isReady:mt,install(_){const L=this;_.component("RouterLink",p0),_.component("RouterView",b0),_.config.globalProperties.$router=L,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Ln(c)}),Sn&&!En&&c.value===Nt&&(En=!0,T(i.location).catch(re=>{}));const O={};for(const re in Nt)Object.defineProperty(O,re,{get:()=>c.value[re],enumerable:!0});_.provide(fo,L),_.provide(Gf,Yl(O)),_.provide(da,c);const $=_.unmount;In.add(_),_.unmount=function(){In.delete(_),In.size<1&&(l=Nt,ie&&ie(),ie=null,c.value=Nt,En=!1,oe=!1),$()}}};function Ae(_){return _.reduce((L,O)=>L.then(()=>q(O)),Promise.resolve())}return Kr}function _0(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const o=t.matched[a];o&&(e.matched.find(l=>Vn(l,o))?r.push(o):n.push(o));const c=e.matched[a];c&&(t.matched.find(l=>Vn(l,c))||i.push(c))}return[n,r,i]}const Le=y0({history:Ly("/TodoApp"),routes:[{path:"/",name:"land",component:()=>ei(()=>import("./Landing-6a921633.js"),[])},{path:"/todo",name:"todo",meta:{requiresAuth:!0},component:()=>ei(()=>Promise.resolve().then(()=>A_),void 0)},{path:"/important",name:"important",meta:{requiresAuth:!0},component:()=>ei(()=>import("./important-7282dd86.js"),["assets/important-7282dd86.js","assets/important-bd4c0591.css"])},{path:"/completedTask",name:"completedTask",meta:{requiresAuth:!0},component:()=>ei(()=>import("./completedTasks-91f2eeee.js"),[])}]});qe.onAuthStateChanged(e=>{if(!e)return Le.push("/");Le.beforeEach(async(t,n)=>{if(t.path=="/"&&qe.currentUser)return Le.push(Le.currentRoute);if(t.path=="/todo"&&!qe.currentUser||t.path=="/completedTask"&&!qe.currentUser||t.path=="/important"&&!qe.currentUser)return Le.push("/")})});const w0=Tm({state:{todo:[],fav:[],completed:[],user:null},mutations:{pushTodo(e,t){e.todo.unshift(t)},pushFav(e,t){e.fav.unshift(t)},pushCompleted(e,t){e.completed.unshift(t)},clrTodo(e){e.todo=[]},clrCompltd(e){e.completed=[]},setUser(e,t){e.user=t},clearUser(e){e.user=null}},actions:{addTodo({commit:e},t){e("pushTodo",t)},addFav({commit:e},t){e("pushFav",t)},addCompleted({commit:e},t){e("pushCompleted",t)},clearTodo({commit:e}){e("clrTodo")},clearCompleted({commit:e}){e("clrCompltd")},async login({commit:e},t){const{email:n,password:r}=t;try{await Xv(qe,n,r)}catch(i){switch(i.code){case"auth/user-not-found":alert("User does not exist, please create an account");break;case"auth/wrong-password":alert("wrong password");break;case"auth/missing-password":alert("please enter your password");break;case"auth/network-request-failed":alert("No network detected");break;default:alert(i.code),console.log(i.code);break}return}e("setUser",qe.currentUser),Le.push("/todo")},async register({commit:e},t){const{email:n,password:r}=t;try{await qv(qe,n,r)}catch(i){switch(i.code){case"auth/email-already-in-use":alert("User already exist, please login");break;case"auth/invalid-email":alert("Email incorrect");break;case"auth/operation-not-allowed":alert("Operation not allowed");break;case"auth/weak-password":alert("Weak password");break;case"auth/missing-password":alert("please enter your password");break;case"auth/network-request-failed":alert("No network detected");break;default:alert("something went wrong"),console.log(i.code);break}return}e("setUser",qe.currentUser),Le.push("/todo")},async logOut({commit:e}){await tb(qe),e("clearUser"),Le.push("/")},fetchUser({commit:e}){qe.onAuthStateChanged(async t=>{t===null?e("clearUser"):(e("setUser",t),Le.isReady()&&Le.currentRoute.value.path==="/"&&Le.push("/todo"))})}}}),E0="/TodoApp/assets/logo-1e5fddfa.png",Yf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAATZSURBVHic5ZvPa1RXFMc/d9TJwGgEFyVGyayU4kJoq2hB0GRZdBNoVxUU0r8gS7vtSrT/gNBNN21BhIZ0ldSFEAVtCF2kqbiwpCPZiUFiQsnt4p4Zb1/ee3k/zp33hh44DMnMfM/3e+bd3+caay0hzRjTBqaA08A4cDzyCtAFXkVe/wQWrbVvg/ILkQBjzARwVXwSaBWEegf8CswBc9bav3QYematVXGcyFlgBbCBfEVitNR4Kwg/AMwA6wGFR31dYh6oNAHANLA6QOFRXwWmB54AoAMsVSg86ktAZyAJAC4BGzUQHfUN4FLQBAA3ge0aiE3ybeCmegJwHd3dGgjM6nfJ2EFmFf+gBqLy+oMsSciSgGH65fc8CaUSgGvzVYso66l9wn69fZ07vKy+TcrokCS+Q/ihbhdYE98NHGuDhHlCUgJCTXIWcHP5K8CoF29U/jcrnwkReylTAnDTW+3gr4EbOeYbN+Q72jz2TJvjhjztuf0vwIms4j0uJ+S7mlxWiQyN0aAz2uLzCo9JhHYSZmITgFvPay5pXxf55ROeBM3msI63n+AHmlXOdOY2n7FP0OQ2G5cAzZ2cBS3xHj/N0WGlh9uA/h7eWfRsXhErBOZZ0ewSgNu81LSnynghMK9CmARYYFkRr2fLgq1lfc1tYAu99rWm3f69fmBNkecW0G7gDi2K7tsPs7WAqQbuxEbTThljRpUxEcxTyrCnG7w/ntIyA3ykjIlgGmXM8QbujE7bzg0J5vEQTwDAZ0OCOQ66PeuwTIX7IxbAZiDwui6GfN/sTYRC2FHgngLOPcEKZqGaQM/rtCES2wQeBg7Saw6Z+wTCbYlF/eFBXDlKaDsKfGeMuY5b1T0DfrPWvoH+JOdj4BNcbz81AE4A3YO4mpxB2DbQBMZwYk8aY5bkvU+BD+S9pnx2ZACcXoV+At4A3wM/Ak+ste8SPvfC/8MY0wIuAF8AX+K2zUNYF+Aa+m3rOfAV0FYYBtuC9TwAz2u9AFrL4bfA18BIgKXwCHBLYmhw3QLaPfB5BcBlCpap5ExEh/ebI2V83lrb3xGao5w9BiattS9L4uxrEmNSYpaxuR4gwATFM7kAHA79y8c8CYcpt1M8Ya3FByyyLf4zikWLBZLQEg55efe3xX2wvAcjPwCHqhLv8T4kXPJwjz0YyXM09jvQrFq8x70pnLJwjz8aE6Ash6P/AOerFh2ThPPCbT/+8YejApLlePx21WJTknB7H+7px+MCklYgsQkcq1poSgKOkb7Bk14g4QEllcjcqVpkhiTcSeCerURGQDrsLZLaRcbOOjtuThMtuspXJCVAcWVyPxFgnq8ofkQ4+pzzl8l5gHGFkot4FV51cdySeTGGb7FCSQ84rlR2GRirWrTHcYz4BVK5UlkBTyqWfgGcqYH4M8Ilyk+nWNpLQtyTsIMbe49UIPyIxN6J++WziM+cAC9o0oWJLnAduYYXWLiRWN0YHmEuTEQIpF2ZeQRcDpEIEX5ZYsTFDn9lxiPTIb2eeB34FrhYJhki+qJgpS3UCl+aKnVz1BgzDXwDfJjysZe4sfkp8LcI6VprdyJYTdxp7UncqdA54HNJdpL9Adyy1t4vqkHj0SxycXIX98g+E98gX8l8PS5ORhIxlFdn//eXp4Mk4D8Ban59/l9OEtImCtmLIgAAAABJRU5ErkJggg==",ho=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},I0={computed:{...Xa({totalTodo:"todo",totalFav:"fav",totalCompleted:"completed"}),todoTotal(){return this.totalTodo.length},favTotal(){return this.totalFav.length},completeTotal(){return this.totalCompleted.length}},methods:{logout(){this.$store.dispatch("logOut")},showNav(){var e=document.getElementById("nav"),t=document.getElementById("open"),n=document.getElementById("close");e.style.marginLeft=="-18rem"?(e.style.transition="300ms ease-in-out",e.style.marginLeft="0rem",t.style.marginTop="-13rem",t.style.transition="500ms ease-in-out",n.style.transition="700ms ease-in-out",n.style.rotate="360deg",n.style.marginLeft="20px"):(e.style.marginLeft="-18rem",t.style.transition="1050ms ease-in-out",t.style.marginTop="0rem",n.style.rotate="-360deg",n.style.transition="700ms ease-in-out",n.style.transitionDelay="300ms",n.style.marginLeft="-13rem")}},watch:{$route(){setTimeout(()=>{const t=is().currentUser.email.split("@",String(1)),n=String(t);this.name=n},30)}},data(){return{image:"",name:"",logo:E0}}},k0={class:"text-slate-800"},A0={class:"flex py-3 px-6 md:align-middle justify-between bg-slate-200"},x0={key:0,class:"hidden w-14 h-14 md:flex ml-3 md:align-middle space-x-1"},T0=C("div",{class:"md:m-1"},[C("img",{src:Yf,alt:"user",class:"rounded-full -z-20"}),C("div",{class:"w-3 h-3 ml-10 relative -mt-3 z-10 bg-green-500 rounded-full"})],-1),C0={key:0,class:"text-sm font-bold my-auto"},S0=["src"],O0={id:"nav",class:"absolute bg-opacity-95 md:hidden rounded-r-md drop-shadow-2xl bg-slate-200 h-screen -ml-72 w-2/4"},P0={key:0,class:"ml-5 mt-5 opacity-100"},R0=C("img",{src:Yf,alt:"user",class:"rounded-full -z-20"},null,-1),N0=C("div",{class:"w-3 h-3 ml-11 relative -mt-3 z-10 bg-green-500 rounded-full"},null,-1),M0=[R0,N0],L0={key:1,class:"text-center mr-10 text-sm font-bold"},D0={class:"h-fit border-4 flex flex-col mt-4 space-y-6"},U0={class:"text-xs"},F0=C("div",{class:"text-xs font-bold"},"Todo ",-1),$0={class:"bg-slate-900 w-5 pb-1 flex m-auto text-xs font-semibold rounded-full text-sky-200 font-serif"},B0={class:"m-auto"},j0={class:"text-xs"},H0=C("div",{class:"text-xs font-bold"},"Important Task ",-1),z0={class:"bg-slate-900 w-5 pb-1 flex m-auto text-xs font-semibold rounded-full text-sky-200 font-serif"},V0={class:"m-auto"},W0={class:"text-sm"},K0=C("div",{class:"text-xs font-bold"},"Completed Task ",-1),G0={class:"bg-slate-900 w-5 pb-1 flex m-auto text-xs font-semibold rounded-full text-sky-200 font-serif"},Y0={class:"m-auto"},q0={class:"text-sm"},X0=C("div",{class:"text-xs font-bold"},"Contact Us",-1),J0={class:"outline-none flex space-x-4 py-2 w-full pl-3",to:"#"},Q0={class:"text-sm"},Z0=C("div",{class:"text-xs font-bold"},"Logout",-1),e_={class:"text-sm"},t_=C("div",{class:"text-xs font-bold"},"Log in",-1);function n_(e,t,n,r,i,s){const a=on("font-awesome-icon"),o=on("router-link");return pe(),we("header",k0,[C("div",A0,[V(a,{id:"open",class:"text-lg md:hidden cursor-pointer",icon:"fa-solid fa-bars",onClick:t[0]||(t[0]=c=>s.showNav())}),V(a,{id:"close",class:"text-xl md:hidden absolute -ml-52 cursor-pointer",icon:"fa-solid fa-xmark",onClick:t[1]||(t[1]=c=>s.showNav())}),e.$store.state.user?(pe(),we("div",x0,[T0,e.$store.state.user?(pe(),we("p",C0,Be(i.name),1)):xe("",!0)])):xe("",!0),V(o,{class:"outline-none -mt-3 md:-mt-1 pt-1",to:"/"},{default:De(()=>[C("img",{src:i.logo,alt:"DTlogo",class:"w-8 md:w-14"},null,8,S0)]),_:1}),e.$store.state.user?(pe(),Js(a,{key:1,icon:"fa-solid fa-person-walking-dashed-line-arrow-right",class:"hover:text-xl transition-all cursor-pointer md:mt-3 md:mr-2",onClick:t[2]||(t[2]=c=>s.logout())})):xe("",!0),e.$store.state.user?xe("",!0):(pe(),Js(a,{key:2,icon:"fa-solid fa-right-to-bracket",class:"hover:text-xl transition-all cursor-pointer md:mt-3 md:mr-2",onClick:t[3]||(t[3]=c=>s.logout())}))]),C("nav",O0,[e.$store.state.user?(pe(),we("div",P0,M0)):xe("",!0),e.$store.state.user?(pe(),we("p",L0,Be(i.name),1)):xe("",!0),C("ul",D0,[e.$store.state.user?(pe(),we("li",{key:0,onClick:t[4]||(t[4]=c=>s.showNav()),class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2 pr-3"},[V(o,{class:"outline-none flex space-x-4 py-2 w-full pl-3",to:"/todo"},{default:De(()=>[C("div",U0,[V(a,{icon:"fa-solid fa-home"})]),F0]),_:1}),C("div",$0,[C("p",B0,Be(s.todoTotal),1)])])):xe("",!0),e.$store.state.user?(pe(),we("li",{key:1,onClick:t[5]||(t[5]=c=>s.showNav()),class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2 pr-3"},[V(o,{class:"outline-none flex space-x-4 py-2 w-full pl-3",to:"/important"},{default:De(()=>[C("div",j0,[V(a,{icon:"fa-solid fa-star"})]),H0]),_:1}),C("div",z0,[C("p",V0,Be(s.favTotal),1)])])):xe("",!0),e.$store.state.user?(pe(),we("li",{key:2,onClick:t[6]||(t[6]=c=>s.showNav()),class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2 pr-3"},[V(o,{class:"outline-none flex space-x-4 py-2 w-full pl-3",to:"/completedTask"},{default:De(()=>[C("div",W0,[V(a,{icon:"fa-solid fa-check"})]),K0]),_:1}),C("div",G0,[C("p",Y0,Be(s.completeTotal),1)])])):xe("",!0),C("li",{onClick:t[7]||(t[7]=c=>s.showNav()),class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2 pr-3"},[V(o,{class:"outline-none flex space-x-4 py-2 w-full pl-3",to:"#"},{default:De(()=>[C("div",q0,[V(a,{icon:"fa-solid fa-headset"})]),X0]),_:1})]),e.$store.state.user?(pe(),we("li",{key:3,class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2",onClick:t[8]||(t[8]=c=>(s.logout(),s.showNav()))},[C("div",J0,[C("div",Q0,[V(a,{icon:"fa-solid fa-person-walking-dashed-line-arrow-right"})]),Z0])])):xe("",!0),e.$store.state.user?xe("",!0):(pe(),we("li",{key:4,class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2",onClick:t[9]||(t[9]=c=>s.showNav())},[V(o,{class:"outline-none flex space-x-4 py-2 w-full pl-3",to:"/"},{default:De(()=>[C("div",e_,[V(a,{icon:"fa-solid fa-right-to-bracket"})]),t_]),_:1})]))])])])}const r_=ho(I0,[["render",n_]]);const i_={mounted(){setTimeout(()=>{const t=is().currentUser.email.split("@",String(1));this.name=String(t)},20)},methods:{add(){if(this.newTask!=""&&this.newDescrip!=""){const e={task:this.newTask,descrip:this.newDescrip};this.$store.dispatch("addTodo",e),this.newTask="",this.newDescrip=""}else alert("please fill in the Task and Description"),this.newTask="",this.newDescrip=""},addComplete(e,t){this.sltdItem=e.task,this.compPop=!0,setTimeout(()=>{this.compPop=!1},1500),this.$store.dispatch("addCompleted",e),setTimeout(()=>{this.$store.state.todo=this.$store.state.todo.filter((n,r)=>r!=t)},2500)},addFavorite(e){this.sltdItem=e.task,this.FavPop=!0,setTimeout(()=>{this.FavPop=!1},1500),this.$store.dispatch("addFav",e)},remove(e){this.$store.state.todo=this.$store.state.todo.filter((t,n)=>n!=e)},clear(){var e="Do you want to clear all?";this.$store.state.todo.length!=0&&confirm(e)==!0&&this.$store.dispatch("clearTodo")}},computed:{...Xa({todo:"todo"}),total(){return this.todo.length==0?"no":this.todo.length}},data(){return{name:"",newTask:"",newDescrip:"",display:!0,disable:!1,todoOpt:!1,FavPop:!1,compPop:!1,sltdItem:""}}},s_={class:"m-auto text-slate-900 pt-3 md:m-0 md:h-ht9 h-ht9 overflow-hidden"},a_={class:"text-xs font-semibold text-gray-600 mb-4 ml-6"},o_={class:"flex flex-row justify-center m-auto"},c_=C("button",{class:"border-2 border-blue-300 shadow-md w-2/6 m-auto hover:w-2/5 transition-all font-semibold rounded-md text-sm",type:"submit"},"ADD",-1),l_={class:"flex my-5"},u_={class:"m-auto text-center my-1 font-semibold text-xs"},f_=["disabled"],d_={id:"pop",class:"w-40 h-14 bg-slate-200 border-4 p-2 border-blue-400 absolute top-32 left-1/3 rounded-xl shadow-md shadow-slate-500"},h_={class:"relative m-auto text-center text-xs font-bold"},p_={class:"first-letter:uppercase"},m_={id:"pop",class:"w-40 h-14 bg-slate-200 border-4 p-2 border-blue-400 absolute top-32 left-1/3 rounded-xl shadow-md shadow-slate-500"},g_={class:"relative m-auto text-center text-xs font-bold"},v_={class:"first-letter:uppercase"},b_={class:"flex flex-wrap py-5 px-1 rounded-md border-blue-300 border-2 h-ht6 overflow-x-scroll"},y_={class:"rounded-lg border-2 border-blue-300 shadow-md transition w-56 pb-2 mb-4 md:w-60"},__={class:"mx-1 flex justify-between"},w_={class:"w-4/12 text-center px-1 my-2 text-sm font-semibold first-letter:uppercase"},E_={class:"-mr-3 flex space-x-2"},I_=["onUpdate:modelValue"];function k_(e,t,n,r,i,s){const a=on("font-awesome-icon");return pe(),we("div",s_,[C("h2",a_,"Hi "+Be(i.name)+", What are we doing today?",1),C("form",{name:"TaskAndDetails",onSubmit:t[2]||(t[2]=Qp(o=>s.add(),["prevent"])),class:"rounded-md border-blue-300 flex flex-col border-2 rounded-m px-2 pb-3"},[C("div",o_,[nr(C("input",{class:"outline-none bg-slate-200 border-2 shadow-md h-6 w-2/5 m-3 text-xs font-bold rounded-md indent-1",name:"Task","onUpdate:modelValue":t[0]||(t[0]=o=>i.newTask=o),placeholder:"Task"},null,512),[[bs,i.newTask,void 0,{trim:!0,lazy:!0}]]),nr(C("input",{class:"outline-none bg-slate-200 border-2 shadow-md h-6 w-2/5 m-3 text-xs font-bold rounded-md indent-1",name:"Details","onUpdate:modelValue":t[1]||(t[1]=o=>i.newDescrip=o),placeholder:"Details"},null,512),[[bs,i.newDescrip,void 0,{trim:!0,lazy:!0}]])]),c_],32),C("div",l_,[C("h5",u_,"You have "+Be(s.total)+" tasks ",1),C("button",{type:"button",disabled:i.disable,class:"m-auto outline-none border-2 border-blue-300 shadow-md w-28 hover:w-32 hover:-mt-1 transition-all py-1 font-bold rounded-md text-sm",onClick:t[3]||(t[3]=o=>s.clear())},"Clear All",8,f_)]),V(xi,{name:"fade",class:"md:mx-56"},{default:De(()=>[nr(C("div",d_,[C("div",h_,[C("p",null,[C("span",p_,Be(i.sltdItem),1),Zs(" marked as important "),V(a,{class:"text-sm drop-shadow-lg",icon:"fa-solid fa-star"})])])],512),[[hc,i.FavPop]])]),_:1}),V(xi,{name:"fade",class:"md:mx-56"},{default:De(()=>[nr(C("div",m_,[C("div",g_,[C("p",null,[C("span",v_,Be(i.sltdItem),1),Zs(" has been Completed "),V(a,{onClick:t[4]||(t[4]=o=>s.addComplete(e.item,e.index)),class:"text-lg transition-all drop-shadow-lg",icon:"fa-solid fa-check"})])])],512),[[hc,i.compPop]])]),_:1}),C("ul",b_,[(pe(!0),we(Ye,null,Gh(e.todo,(o,c)=>(pe(),we("li",{key:o.index,class:"m-auto"},[C("div",y_,[C("div",__,[C("p",w_,Be(o.task),1),C("div",E_,[V(a,{onClick:l=>s.addFavorite(o),class:"text-lg hover:text-2xl transition-all drop-shadow-lg mr-1 pt-1 cursor-pointer",icon:"fa-solid fa-star"},null,8,["onClick"]),V(a,{onClick:l=>s.addComplete(o,c),class:"text-lg hover:text-2xl transition-all drop-shadow-lg mr-1 pt-1 cursor-pointer",icon:"fa-solid fa-check"},null,8,["onClick"]),V(a,{onClick:l=>s.remove(c),class:"text-lg hover:text-2xl transition-all drop-shadow-lg pt-1 -mt-4 cursor-pointer",icon:"fa-solid fa-xmark-circle"},null,8,["onClick"])])]),nr(C("textarea",{disabled:"","onUpdate:modelValue":l=>o.descrip=l,class:"outline-none ml-2 border-0 resize-none bg-slate-200 md:ml-2 pt-1 rounded-md w-11/12 h-36 text-sm indent-1 font-mono"},null,8,I_),[[bs,o.descrip]])])]))),128))])])}const qf=ho(i_,[["render",k_]]),A_=Object.freeze(Object.defineProperty({__proto__:null,default:qf},Symbol.toStringTag,{value:"Module"})),x_={components:{Header:r_,Todo:qf},computed:{...Xa({totalTodo:"todo",totalFav:"fav",totalCompleted:"completed"}),completeTotal(){return this.totalCompleted.length},favTotal(){return this.totalFav.length},todoTotal(){return this.totalTodo.length}},methods:{logout(){this.$store.dispatch("logOut")}},setup(){const e=fm(),t=is();mu(()=>{e.dispatch("fetchUser")}),Ha(()=>{eb(t,n=>{n&&(n.getIdToken().then(r=>{document.cookie=`session= ${r}; max-age= ${60*60*24}`}),Jv(t,oo))})})}},T_={class:"m-auto p-0 w-screen md:w-4/5 md:m-auto overflow-hidden md:overflow-hidden h-screen"},C_={class:"overflow-hidden"},S_={class:"md:flex bg-blue-200 md:shadow-lg h-screen"},O_={class:"md:flex hidden rounded-r-md drop-shadow-2xl md:pr-2 bg-slate-200 w-2/5"},P_={class:"w-full h-fit flex flex-col ml-2 mt-8 space-y-8"},R_={key:0,class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 px-2"},N_={class:"text-sm"},M_=C("div",{class:"text-xs font-semibold"},"Todo",-1),L_={class:"bg-slate-900 w-5 pb-1 flex m-auto text-xs font-semibold rounded-full text-sky-200 font-serif"},D_={class:"m-auto"},U_={key:1,class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 px-2"},F_={class:"text-sm"},$_=C("div",{class:"text-xs font-semibold"},"Important Task",-1),B_={class:"bg-slate-900 w-5 pb-1 flex m-auto text-xs font-semibold rounded-full text-sky-200 font-serif"},j_={class:"m-auto"},H_={key:2,class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 px-2"},z_={class:"text-sm"},V_=C("div",{class:"text-xs font-semibold"},"Completed Task",-1),W_={class:"bg-slate-900 w-5 pb-1 flex m-auto text-xs font-semibold rounded-full text-sky-200 font-serif"},K_={class:"m-auto"},G_={class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2"},Y_={class:"text-sm"},q_=C("div",{class:"text-xs font-semibold"},"Contact Us",-1),X_={class:"outline-none flex space-x-4 py-2 w-full pl-3",to:"#"},J_={class:"text-sm"},Q_=C("div",{class:"text-xs font-bold"},"Logout",-1),Z_={class:"text-sm"},e1=C("div",{class:"text-xs font-bold"},"Log in",-1);function t1(e,t,n,r,i,s){const a=on("Header"),o=on("font-awesome-icon"),c=on("router-link"),l=on("router-view");return pe(),we("div",T_,[C("div",C_,[V(a,{class:"sticky top-0 z-10"}),C("div",S_,[C("nav",O_,[C("ul",P_,[e.$store.state.user?(pe(),we("li",R_,[V(c,{class:"outline-none flex space-x-4 md:py-3 w-full pl-3",to:"/todo"},{default:De(()=>[C("div",N_,[V(o,{icon:"fa-solid fa-home"})]),M_]),_:1}),C("div",L_,[C("p",D_,Be(s.todoTotal),1)])])):xe("",!0),e.$store.state.user?(pe(),we("li",U_,[V(c,{class:"outline-none flex space-x-4 md:py-3 w-full pl-3",to:"/important"},{default:De(()=>[C("div",F_,[V(o,{icon:"fa-solid fa-star"})]),$_]),_:1}),C("div",B_,[C("p",j_,Be(s.favTotal),1)])])):xe("",!0),e.$store.state.user?(pe(),we("li",H_,[V(c,{class:"outline-none flex space-x-4 md:py-3 w-full pl-3",to:"/completedTask"},{default:De(()=>[C("div",z_,[V(o,{icon:"fa-solid fa-check"})]),V_]),_:1}),C("div",W_,[C("p",K_,Be(s.completeTotal),1)])])):xe("",!0),C("li",G_,[V(c,{class:"outline-none flex space-x-4 md:py-3 w-full pl-3",to:"#"},{default:De(()=>[C("div",Y_,[V(o,{icon:"fa-solid fa-headset"})]),q_]),_:1})]),e.$store.state.user?(pe(),we("li",{key:3,class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2",onClick:t[0]||(t[0]=u=>(s.logout(),e.showNav()))},[C("div",X_,[C("div",J_,[V(o,{icon:"fa-solid fa-person-walking-dashed-line-arrow-right"})]),Q_])])):xe("",!0),e.$store.state.user?xe("",!0):(pe(),we("li",{key:4,class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2",onClick:t[1]||(t[1]=u=>e.showNav())},[V(c,{class:"outline-none flex space-x-4 py-2 w-full pl-3",to:"/"},{default:De(()=>[C("div",Z_,[V(o,{icon:"fa-solid fa-right-to-bracket"})]),e1]),_:1})]))])]),V(l,{class:"md:w-full md:h-full overflow-hidden"})])])])}const n1=ho(x_,[["render",t1]]);function sl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?sl(Object(n),!0).forEach(function(r){Ee(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):sl(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ui(e){"@babel/helpers - typeof";return Ui=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ui(e)}function r1(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function al(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i1(e,t,n){return t&&al(e.prototype,t),n&&al(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function Ee(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function po(e,t){return a1(e)||c1(e,t)||Xf(e,t)||u1()}function zr(e){return s1(e)||o1(e)||Xf(e)||l1()}function s1(e){if(Array.isArray(e))return ha(e)}function a1(e){if(Array.isArray(e))return e}function o1(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function c1(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,a,o;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(c){s=!0,o=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw o}}return r}}function Xf(e,t){if(e){if(typeof e=="string")return ha(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ha(e,t)}}function ha(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function l1(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function u1(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ol=function(){},mo={},Jf={},Qf=null,Zf={mark:ol,measure:ol};try{typeof window<"u"&&(mo=window),typeof document<"u"&&(Jf=document),typeof MutationObserver<"u"&&(Qf=MutationObserver),typeof performance<"u"&&(Zf=performance)}catch{}var f1=mo.navigator||{},cl=f1.userAgent,ll=cl===void 0?"":cl,Gt=mo,de=Jf,ul=Qf,ti=Zf;Gt.document;var Tt=!!de.documentElement&&!!de.head&&typeof de.addEventListener=="function"&&typeof de.createElement=="function",ed=~ll.indexOf("MSIE")||~ll.indexOf("Trident/"),ni,ri,ii,si,ai,It="___FONT_AWESOME___",pa=16,td="fa",nd="svg-inline--fa",bn="data-fa-i2svg",ma="data-fa-pseudo-element",d1="data-fa-pseudo-element-pending",go="data-prefix",vo="data-icon",fl="fontawesome-i2svg",h1="async",p1=["HTML","HEAD","STYLE","SCRIPT"],rd=function(){try{return!0}catch{return!1}}(),fe="classic",me="sharp",bo=[fe,me];function Vr(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[fe]}})}var Or=Vr((ni={},Ee(ni,fe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),Ee(ni,me,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ni)),Pr=Vr((ri={},Ee(ri,fe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),Ee(ri,me,{solid:"fass",regular:"fasr",light:"fasl"}),ri)),Rr=Vr((ii={},Ee(ii,fe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),Ee(ii,me,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ii)),m1=Vr((si={},Ee(si,fe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),Ee(si,me,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),si)),g1=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,id="fa-layers-text",v1=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,b1=Vr((ai={},Ee(ai,fe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),Ee(ai,me,{900:"fass",400:"fasr",300:"fasl"}),ai)),sd=[1,2,3,4,5,6,7,8,9,10],y1=sd.concat([11,12,13,14,15,16,17,18,19,20]),_1=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ln={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Nr=new Set;Object.keys(Pr[fe]).map(Nr.add.bind(Nr));Object.keys(Pr[me]).map(Nr.add.bind(Nr));var w1=[].concat(bo,zr(Nr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ln.GROUP,ln.SWAP_OPACITY,ln.PRIMARY,ln.SECONDARY]).concat(sd.map(function(e){return"".concat(e,"x")})).concat(y1.map(function(e){return"w-".concat(e)})),gr=Gt.FontAwesomeConfig||{};function E1(e){var t=de.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function I1(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(de&&typeof de.querySelector=="function"){var k1=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];k1.forEach(function(e){var t=po(e,2),n=t[0],r=t[1],i=I1(E1(n));i!=null&&(gr[r]=i)})}var ad={styleDefault:"solid",familyDefault:"classic",cssPrefix:td,replacementClass:nd,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};gr.familyPrefix&&(gr.cssPrefix=gr.familyPrefix);var Kn=M(M({},ad),gr);Kn.autoReplaceSvg||(Kn.observeMutations=!1);var U={};Object.keys(ad).forEach(function(e){Object.defineProperty(U,e,{enumerable:!0,set:function(n){Kn[e]=n,vr.forEach(function(r){return r(U)})},get:function(){return Kn[e]}})});Object.defineProperty(U,"familyPrefix",{enumerable:!0,set:function(t){Kn.cssPrefix=t,vr.forEach(function(n){return n(U)})},get:function(){return Kn.cssPrefix}});Gt.FontAwesomeConfig=U;var vr=[];function A1(e){return vr.push(e),function(){vr.splice(vr.indexOf(e),1)}}var Mt=pa,ct={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function x1(e){if(!(!e||!Tt)){var t=de.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=de.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=s)}return de.head.insertBefore(t,r),e}}var T1="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Mr(){for(var e=12,t="";e-- >0;)t+=T1[Math.random()*62|0];return t}function er(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function yo(e){return e.classList?er(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function od(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function C1(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(od(e[n]),'" ')},"").trim()}function as(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function _o(e){return e.size!==ct.size||e.x!==ct.x||e.y!==ct.y||e.rotate!==ct.rotate||e.flipX||e.flipY}function S1(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(s," ").concat(a," ").concat(o)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function O1(e){var t=e.transform,n=e.width,r=n===void 0?pa:n,i=e.height,s=i===void 0?pa:i,a=e.startCentered,o=a===void 0?!1:a,c="";return o&&ed?c+="translate(".concat(t.x/Mt-r/2,"em, ").concat(t.y/Mt-s/2,"em) "):o?c+="translate(calc(-50% + ".concat(t.x/Mt,"em), calc(-50% + ").concat(t.y/Mt,"em)) "):c+="translate(".concat(t.x/Mt,"em, ").concat(t.y/Mt,"em) "),c+="scale(".concat(t.size/Mt*(t.flipX?-1:1),", ").concat(t.size/Mt*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var P1=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function cd(){var e=td,t=nd,n=U.cssPrefix,r=U.replacementClass,i=P1;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var dl=!1;function Rs(){U.autoAddCss&&!dl&&(x1(cd()),dl=!0)}var R1={mixout:function(){return{dom:{css:cd,insertCss:Rs}}},hooks:function(){return{beforeDOMElementCreation:function(){Rs()},beforeI2svg:function(){Rs()}}}},kt=Gt||{};kt[It]||(kt[It]={});kt[It].styles||(kt[It].styles={});kt[It].hooks||(kt[It].hooks={});kt[It].shims||(kt[It].shims=[]);var Qe=kt[It],ld=[],N1=function e(){de.removeEventListener("DOMContentLoaded",e),Fi=1,ld.map(function(t){return t()})},Fi=!1;Tt&&(Fi=(de.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(de.readyState),Fi||de.addEventListener("DOMContentLoaded",N1));function M1(e){Tt&&(Fi?setTimeout(e,0):ld.push(e))}function Wr(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?od(e):"<".concat(t," ").concat(C1(r),">").concat(s.map(Wr).join(""),"</").concat(t,">")}function hl(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var L1=function(t,n){return function(r,i,s,a){return t.call(n,r,i,s,a)}},Ns=function(t,n,r,i){var s=Object.keys(t),a=s.length,o=i!==void 0?L1(n,i):n,c,l,u;for(r===void 0?(c=1,u=t[s[0]]):(c=0,u=r);c<a;c++)l=s[c],u=o(u,t[l],l,t);return u};function D1(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function ga(e){var t=D1(e);return t.length===1?t[0].toString(16):null}function U1(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function pl(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function va(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=pl(t);typeof Qe.hooks.addPack=="function"&&!i?Qe.hooks.addPack(e,pl(t)):Qe.styles[e]=M(M({},Qe.styles[e]||{}),s),e==="fas"&&va("fa",t)}var oi,ci,li,On=Qe.styles,F1=Qe.shims,$1=(oi={},Ee(oi,fe,Object.values(Rr[fe])),Ee(oi,me,Object.values(Rr[me])),oi),wo=null,ud={},fd={},dd={},hd={},pd={},B1=(ci={},Ee(ci,fe,Object.keys(Or[fe])),Ee(ci,me,Object.keys(Or[me])),ci);function j1(e){return~w1.indexOf(e)}function H1(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!j1(i)?i:null}var md=function(){var t=function(s){return Ns(On,function(a,o,c){return a[c]=Ns(o,s,{}),a},{})};ud=t(function(i,s,a){if(s[3]&&(i[s[3]]=a),s[2]){var o=s[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){i[c.toString(16)]=a})}return i}),fd=t(function(i,s,a){if(i[a]=a,s[2]){var o=s[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){i[c]=a})}return i}),pd=t(function(i,s,a){var o=s[2];return i[a]=a,o.forEach(function(c){i[c]=a}),i});var n="far"in On||U.autoFetchSvg,r=Ns(F1,function(i,s){var a=s[0],o=s[1],c=s[2];return o==="far"&&!n&&(o="fas"),typeof a=="string"&&(i.names[a]={prefix:o,iconName:c}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:o,iconName:c}),i},{names:{},unicodes:{}});dd=r.names,hd=r.unicodes,wo=os(U.styleDefault,{family:U.familyDefault})};A1(function(e){wo=os(e.styleDefault,{family:U.familyDefault})});md();function Eo(e,t){return(ud[e]||{})[t]}function z1(e,t){return(fd[e]||{})[t]}function un(e,t){return(pd[e]||{})[t]}function gd(e){return dd[e]||{prefix:null,iconName:null}}function V1(e){var t=hd[e],n=Eo("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Yt(){return wo}var Io=function(){return{prefix:null,iconName:null,rest:[]}};function os(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?fe:n,i=Or[r][e],s=Pr[r][e]||Pr[r][i],a=e in Qe.styles?e:null;return s||a||null}var ml=(li={},Ee(li,fe,Object.keys(Rr[fe])),Ee(li,me,Object.keys(Rr[me])),li);function cs(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},Ee(t,fe,"".concat(U.cssPrefix,"-").concat(fe)),Ee(t,me,"".concat(U.cssPrefix,"-").concat(me)),t),a=null,o=fe;(e.includes(s[fe])||e.some(function(l){return ml[fe].includes(l)}))&&(o=fe),(e.includes(s[me])||e.some(function(l){return ml[me].includes(l)}))&&(o=me);var c=e.reduce(function(l,u){var f=H1(U.cssPrefix,u);if(On[u]?(u=$1[o].includes(u)?m1[o][u]:u,a=u,l.prefix=u):B1[o].indexOf(u)>-1?(a=u,l.prefix=os(u,{family:o})):f?l.iconName=f:u!==U.replacementClass&&u!==s[fe]&&u!==s[me]&&l.rest.push(u),!i&&l.prefix&&l.iconName){var h=a==="fa"?gd(l.iconName):{},m=un(l.prefix,l.iconName);h.prefix&&(a=null),l.iconName=h.iconName||m||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!On.far&&On.fas&&!U.autoFetchSvg&&(l.prefix="fas")}return l},Io());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&o===me&&(On.fass||U.autoFetchSvg)&&(c.prefix="fass",c.iconName=un(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||a==="fa")&&(c.prefix=Yt()||"fas"),c}var W1=function(){function e(){r1(this,e),this.definitions={}}return i1(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){n.definitions[o]=M(M({},n.definitions[o]||{}),a[o]),va(o,a[o]);var c=Rr[fe][o];c&&va(c,a[o]),md()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var a=i[s],o=a.prefix,c=a.iconName,l=a.icon,u=l[2];n[o]||(n[o]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[o][f]=l)}),n[o][c]=l}),n}}]),e}(),gl=[],Pn={},Bn={},K1=Object.keys(Bn);function G1(e,t){var n=t.mixoutsTo;return gl=e,Pn={},Object.keys(Bn).forEach(function(r){K1.indexOf(r)===-1&&delete Bn[r]}),gl.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),Ui(i[a])==="object"&&Object.keys(i[a]).forEach(function(o){n[a]||(n[a]={}),n[a][o]=i[a][o]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(a){Pn[a]||(Pn[a]=[]),Pn[a].push(s[a])})}r.provides&&r.provides(Bn)}),n}function ba(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Pn[e]||[];return s.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function yn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Pn[e]||[];i.forEach(function(s){s.apply(null,n)})}function At(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Bn[e]?Bn[e].apply(null,t):void 0}function ya(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Yt();if(t)return t=un(n,t)||t,hl(vd.definitions,n,t)||hl(Qe.styles,n,t)}var vd=new W1,Y1=function(){U.autoReplaceSvg=!1,U.observeMutations=!1,yn("noAuto")},q1={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Tt?(yn("beforeI2svg",t),At("pseudoElements2svg",t),At("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;U.autoReplaceSvg===!1&&(U.autoReplaceSvg=!0),U.observeMutations=!0,M1(function(){J1({autoReplaceSvgRoot:n}),yn("watch",t)})}},X1={icon:function(t){if(t===null)return null;if(Ui(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:un(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=os(t[0]);return{prefix:r,iconName:un(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(U.cssPrefix,"-"))>-1||t.match(g1))){var i=cs(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Yt(),iconName:un(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Yt();return{prefix:s,iconName:un(s,t)||t}}}},He={noAuto:Y1,config:U,dom:q1,parse:X1,library:vd,findIconDefinition:ya,toHtml:Wr},J1=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?de:n;(Object.keys(Qe.styles).length>0||U.autoFetchSvg)&&Tt&&U.autoReplaceSvg&&He.dom.i2svg({node:r})};function ls(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Wr(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Tt){var r=de.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Q1(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,a=e.transform;if(_o(a)&&n.found&&!r.found){var o=n.width,c=n.height,l={x:o/c/2,y:.5};i.style=as(M(M({},s),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function Z1(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,a=s===!0?"".concat(t,"-").concat(U.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:M(M({},i),{},{id:a}),children:r}]}]}function ko(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,a=e.transform,o=e.symbol,c=e.title,l=e.maskId,u=e.titleId,f=e.extra,h=e.watchable,m=h===void 0?!1:h,I=r.found?r:n,A=I.width,N=I.height,b=i==="fak",y=[U.replacementClass,s?"".concat(U.cssPrefix,"-").concat(s):""].filter(function(q){return f.classes.indexOf(q)===-1}).filter(function(q){return q!==""||!!q}).concat(f.classes).join(" "),P={children:[],attributes:M(M({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:y,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(N)})},T=b&&!~f.classes.indexOf("fa-fw")?{width:"".concat(A/N*16*.0625,"em")}:{};m&&(P.attributes[bn]=""),c&&(P.children.push({tag:"title",attributes:{id:P.attributes["aria-labelledby"]||"title-".concat(u||Mr())},children:[c]}),delete P.attributes.title);var H=M(M({},P),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:a,symbol:o,styles:M(M({},T),f.styles)}),J=r.found&&n.found?At("generateAbstractMask",H)||{children:[],attributes:{}}:At("generateAbstractIcon",H)||{children:[],attributes:{}},te=J.children,W=J.attributes;return H.children=te,H.attributes=W,o?Z1(H):Q1(H)}function vl(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,a=e.extra,o=e.watchable,c=o===void 0?!1:o,l=M(M(M({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});c&&(l[bn]="");var u=M({},a.styles);_o(i)&&(u.transform=O1({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=as(u);f.length>0&&(l.style=f);var h=[];return h.push({tag:"span",attributes:l,children:[t]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function ew(e){var t=e.content,n=e.title,r=e.extra,i=M(M(M({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=as(r.styles);s.length>0&&(i.style=s);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Ms=Qe.styles;function _a(e){var t=e[0],n=e[1],r=e.slice(4),i=po(r,1),s=i[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(U.cssPrefix,"-").concat(ln.GROUP)},children:[{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(ln.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(U.cssPrefix,"-").concat(ln.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:a}}var tw={found:!1,width:512,height:512};function nw(e,t){!rd&&!U.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function wa(e,t){var n=t;return t==="fa"&&U.styleDefault!==null&&(t=Yt()),new Promise(function(r,i){if(At("missingIconAbstract"),n==="fa"){var s=gd(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Ms[t]&&Ms[t][e]){var a=Ms[t][e];return r(_a(a))}nw(e,t),r(M(M({},tw),{},{icon:U.showMissingIcons&&e?At("missingIconAbstract")||{}:{}}))})}var bl=function(){},Ea=U.measurePerformance&&ti&&ti.mark&&ti.measure?ti:{mark:bl,measure:bl},ur='FA "6.4.0"',rw=function(t){return Ea.mark("".concat(ur," ").concat(t," begins")),function(){return bd(t)}},bd=function(t){Ea.mark("".concat(ur," ").concat(t," ends")),Ea.measure("".concat(ur," ").concat(t),"".concat(ur," ").concat(t," begins"),"".concat(ur," ").concat(t," ends"))},Ao={begin:rw,end:bd},yi=function(){};function yl(e){var t=e.getAttribute?e.getAttribute(bn):null;return typeof t=="string"}function iw(e){var t=e.getAttribute?e.getAttribute(go):null,n=e.getAttribute?e.getAttribute(vo):null;return t&&n}function sw(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(U.replacementClass)}function aw(){if(U.autoReplaceSvg===!0)return _i.replace;var e=_i[U.autoReplaceSvg];return e||_i.replace}function ow(e){return de.createElementNS("http://www.w3.org/2000/svg",e)}function cw(e){return de.createElement(e)}function yd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?ow:cw:n;if(typeof e=="string")return de.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var s=e.children||[];return s.forEach(function(a){i.appendChild(yd(a,{ceFn:r}))}),i}function lw(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var _i={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(yd(i),n)}),n.getAttribute(bn)===null&&U.keepOriginalSource){var r=de.createComment(lw(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~yo(n).indexOf(U.replacementClass))return _i.replace(t);var i=new RegExp("".concat(U.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(o,c){return c===U.replacementClass||c.match(i)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var a=r.map(function(o){return Wr(o)}).join(`
`);n.setAttribute(bn,""),n.innerHTML=a}};function _l(e){e()}function _d(e,t){var n=typeof t=="function"?t:yi;if(e.length===0)n();else{var r=_l;U.mutateApproach===h1&&(r=Gt.requestAnimationFrame||_l),r(function(){var i=aw(),s=Ao.begin("mutate");e.map(i),s(),n()})}}var xo=!1;function wd(){xo=!0}function Ia(){xo=!1}var $i=null;function wl(e){if(ul&&U.observeMutations){var t=e.treeCallback,n=t===void 0?yi:t,r=e.nodeCallback,i=r===void 0?yi:r,s=e.pseudoElementsCallback,a=s===void 0?yi:s,o=e.observeMutationsRoot,c=o===void 0?de:o;$i=new ul(function(l){if(!xo){var u=Yt();er(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!yl(f.addedNodes[0])&&(U.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&U.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&yl(f.target)&&~_1.indexOf(f.attributeName))if(f.attributeName==="class"&&iw(f.target)){var h=cs(yo(f.target)),m=h.prefix,I=h.iconName;f.target.setAttribute(go,m||u),I&&f.target.setAttribute(vo,I)}else sw(f.target)&&i(f.target)})}}),Tt&&$i.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function uw(){$i&&$i.disconnect()}function fw(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(r[a]=o.join(":").trim()),r},{})),n}function dw(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=cs(yo(e));return i.prefix||(i.prefix=Yt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=z1(i.prefix,e.innerText)||Eo(i.prefix,ga(e.innerText))),!i.iconName&&U.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function hw(e){var t=er(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return U.autoA11y&&(n?t["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(r||Mr()):(t["aria-hidden"]="true",t.focusable="false")),t}function pw(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ct,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function El(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=dw(e),r=n.iconName,i=n.prefix,s=n.rest,a=hw(e),o=ba("parseNodeAttributes",{},e),c=t.styleParser?fw(e):[];return M({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:ct,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:a}},o)}var mw=Qe.styles;function Ed(e){var t=U.autoReplaceSvg==="nest"?El(e,{styleParser:!1}):El(e);return~t.extra.classes.indexOf(id)?At("generateLayersText",e,t):At("generateSvgReplacementMutation",e,t)}var qt=new Set;bo.map(function(e){qt.add("fa-".concat(e))});Object.keys(Or[fe]).map(qt.add.bind(qt));Object.keys(Or[me]).map(qt.add.bind(qt));qt=zr(qt);function Il(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Tt)return Promise.resolve();var n=de.documentElement.classList,r=function(f){return n.add("".concat(fl,"-").concat(f))},i=function(f){return n.remove("".concat(fl,"-").concat(f))},s=U.autoFetchSvg?qt:bo.map(function(u){return"fa-".concat(u)}).concat(Object.keys(mw));s.includes("fa")||s.push("fa");var a=[".".concat(id,":not([").concat(bn,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(bn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=er(e.querySelectorAll(a))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var c=Ao.begin("onTree"),l=o.reduce(function(u,f){try{var h=Ed(f);h&&u.push(h)}catch(m){rd||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(h){_d(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),c(),u()})}).catch(function(h){c(),f(h)})})}function gw(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Ed(e).then(function(n){n&&_d([n],t)})}function vw(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:ya(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:ya(i||{})),e(r,M(M({},n),{},{mask:i}))}}var bw=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?ct:r,s=n.symbol,a=s===void 0?!1:s,o=n.mask,c=o===void 0?null:o,l=n.maskId,u=l===void 0?null:l,f=n.title,h=f===void 0?null:f,m=n.titleId,I=m===void 0?null:m,A=n.classes,N=A===void 0?[]:A,b=n.attributes,y=b===void 0?{}:b,P=n.styles,T=P===void 0?{}:P;if(t){var H=t.prefix,J=t.iconName,te=t.icon;return ls(M({type:"icon"},t),function(){return yn("beforeDOMElementCreation",{iconDefinition:t,params:n}),U.autoA11y&&(h?y["aria-labelledby"]="".concat(U.replacementClass,"-title-").concat(I||Mr()):(y["aria-hidden"]="true",y.focusable="false")),ko({icons:{main:_a(te),mask:c?_a(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:J,transform:M(M({},ct),i),symbol:a,title:h,maskId:u,titleId:I,extra:{attributes:y,styles:T,classes:N}})})}},yw={mixout:function(){return{icon:vw(bw)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Il,n.nodeCallback=gw,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?de:r,s=n.callback,a=s===void 0?function(){}:s;return Il(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,a=r.titleId,o=r.prefix,c=r.transform,l=r.symbol,u=r.mask,f=r.maskId,h=r.extra;return new Promise(function(m,I){Promise.all([wa(i,o),u.iconName?wa(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var N=po(A,2),b=N[0],y=N[1];m([n,ko({icons:{main:b,mask:y},prefix:o,iconName:i,transform:c,symbol:l,maskId:f,title:s,titleId:a,extra:h,watchable:!0})])}).catch(I)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.transform,o=n.styles,c=as(o);c.length>0&&(i.style=c);var l;return _o(a)&&(l=At("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},_w={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return ls({type:"layer"},function(){yn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(o){Array.isArray(o)?o.map(function(c){a=a.concat(c.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(U.cssPrefix,"-layers")].concat(zr(s)).join(" ")},children:a}]})}}}},ww={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,a=r.classes,o=a===void 0?[]:a,c=r.attributes,l=c===void 0?{}:c,u=r.styles,f=u===void 0?{}:u;return ls({type:"counter",content:n},function(){return yn("beforeDOMElementCreation",{content:n,params:r}),ew({content:n.toString(),title:s,extra:{attributes:l,styles:f,classes:["".concat(U.cssPrefix,"-layers-counter")].concat(zr(o))}})})}}}},Ew={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?ct:i,a=r.title,o=a===void 0?null:a,c=r.classes,l=c===void 0?[]:c,u=r.attributes,f=u===void 0?{}:u,h=r.styles,m=h===void 0?{}:h;return ls({type:"text",content:n},function(){return yn("beforeDOMElementCreation",{content:n,params:r}),vl({content:n,transform:M(M({},ct),s),title:o,extra:{attributes:f,styles:m,classes:["".concat(U.cssPrefix,"-layers-text")].concat(zr(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,a=r.extra,o=null,c=null;if(ed){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/l,c=u.height/l}return U.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,vl({content:n.innerHTML,width:o,height:c,transform:s,title:i,extra:a,watchable:!0})])}}},Iw=new RegExp('"',"ug"),kl=[1105920,1112319];function kw(e){var t=e.replace(Iw,""),n=U1(t,0),r=n>=kl[0]&&n<=kl[1],i=t.length===2?t[0]===t[1]:!1;return{value:ga(i?t[0]:t),isSecondary:r||i}}function Al(e,t){var n="".concat(d1).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=er(e.children),a=s.filter(function(te){return te.getAttribute(ma)===t})[0],o=Gt.getComputedStyle(e,t),c=o.getPropertyValue("font-family").match(v1),l=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(a&&!c)return e.removeChild(a),r();if(c&&u!=="none"&&u!==""){var f=o.getPropertyValue("content"),h=~["Sharp"].indexOf(c[2])?me:fe,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Pr[h][c[2].toLowerCase()]:b1[h][l],I=kw(f),A=I.value,N=I.isSecondary,b=c[0].startsWith("FontAwesome"),y=Eo(m,A),P=y;if(b){var T=V1(A);T.iconName&&T.prefix&&(y=T.iconName,m=T.prefix)}if(y&&!N&&(!a||a.getAttribute(go)!==m||a.getAttribute(vo)!==P)){e.setAttribute(n,P),a&&e.removeChild(a);var H=pw(),J=H.extra;J.attributes[ma]=t,wa(y,m).then(function(te){var W=ko(M(M({},H),{},{icons:{main:te,mask:Io()},prefix:m,iconName:P,extra:J,watchable:!0})),q=de.createElement("svg");t==="::before"?e.insertBefore(q,e.firstChild):e.appendChild(q),q.outerHTML=W.map(function(Z){return Wr(Z)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function Aw(e){return Promise.all([Al(e,"::before"),Al(e,"::after")])}function xw(e){return e.parentNode!==document.head&&!~p1.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ma)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function xl(e){if(Tt)return new Promise(function(t,n){var r=er(e.querySelectorAll("*")).filter(xw).map(Aw),i=Ao.begin("searchPseudoElements");wd(),Promise.all(r).then(function(){i(),Ia(),t()}).catch(function(){i(),Ia(),n()})})}var Tw={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=xl,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?de:r;U.searchPseudoElements&&xl(i)}}},Tl=!1,Cw={mixout:function(){return{dom:{unwatch:function(){wd(),Tl=!0}}}},hooks:function(){return{bootstrap:function(){wl(ba("mutationObserverCallbacks",{}))},noAuto:function(){uw()},watch:function(n){var r=n.observeMutationsRoot;Tl?Ia():wl(ba("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Cl=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return r.flipX=!0,r;if(a&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(a){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},Sw={mixout:function(){return{parse:{transform:function(n){return Cl(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=Cl(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,a=n.iconWidth,o={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},h={transform:"translate(".concat(a/2*-1," -256)")},m={outer:o,inner:f,path:h};return{tag:"g",attributes:M({},m.outer),children:[{tag:"g",attributes:M({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:M(M({},r.icon.attributes),m.path)}]}]}}}},Ls={x:0,y:0,width:"100%",height:"100%"};function Sl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Ow(e){return e.tag==="g"?e.children:[e]}var Pw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?cs(i.split(" ").map(function(a){return a.trim()})):Io();return s.prefix||(s.prefix=Yt()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.mask,o=n.maskId,c=n.transform,l=s.width,u=s.icon,f=a.width,h=a.icon,m=S1({transform:c,containerWidth:f,iconWidth:l}),I={tag:"rect",attributes:M(M({},Ls),{},{fill:"white"})},A=u.children?{children:u.children.map(Sl)}:{},N={tag:"g",attributes:M({},m.inner),children:[Sl(M({tag:u.tag,attributes:M(M({},u.attributes),m.path)},A))]},b={tag:"g",attributes:M({},m.outer),children:[N]},y="mask-".concat(o||Mr()),P="clip-".concat(o||Mr()),T={tag:"mask",attributes:M(M({},Ls),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,b]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:P},children:Ow(h)},T]};return r.push(H,{tag:"rect",attributes:M({fill:"currentColor","clip-path":"url(#".concat(P,")"),mask:"url(#".concat(y,")")},Ls)}),{children:r,attributes:i}}}},Rw={provides:function(t){var n=!1;Gt.matchMedia&&(n=Gt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:M(M({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=M(M({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:M(M({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:M(M({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:M(M({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:M(M({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:M(M({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:M(M({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:M(M({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Nw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},Mw=[R1,yw,_w,ww,Ew,Tw,Cw,Sw,Pw,Rw,Nw];G1(Mw,{mixoutsTo:He});He.noAuto;He.config;var Lw=He.library;He.dom;var ka=He.parse;He.findIconDefinition;He.toHtml;var Dw=He.icon;He.layer;He.text;He.counter;function Ol(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function bt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ol(Object(n),!0).forEach(function(r){Ne(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ol(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bi(e){"@babel/helpers - typeof";return Bi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bi(e)}function Ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Uw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Fw(e,t){if(e==null)return{};var n=Uw(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var $w=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Id={exports:{}};(function(e){(function(t){var n=function(b,y,P){if(!l(y)||f(y)||h(y)||m(y)||c(y))return y;var T,H=0,J=0;if(u(y))for(T=[],J=y.length;H<J;H++)T.push(n(b,y[H],P));else{T={};for(var te in y)Object.prototype.hasOwnProperty.call(y,te)&&(T[b(te,P)]=n(b,y[te],P))}return T},r=function(b,y){y=y||{};var P=y.separator||"_",T=y.split||/(?=[A-Z])/;return b.split(T).join(P)},i=function(b){return I(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(y,P){return P?P.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},s=function(b){var y=i(b);return y.substr(0,1).toUpperCase()+y.substr(1)},a=function(b,y){return r(b,y).toLowerCase()},o=Object.prototype.toString,c=function(b){return typeof b=="function"},l=function(b){return b===Object(b)},u=function(b){return o.call(b)=="[object Array]"},f=function(b){return o.call(b)=="[object Date]"},h=function(b){return o.call(b)=="[object RegExp]"},m=function(b){return o.call(b)=="[object Boolean]"},I=function(b){return b=b-0,b===b},A=function(b,y){var P=y&&"process"in y?y.process:y;return typeof P!="function"?b:function(T,H){return P(T,b,H)}},N={camelize:i,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(b,y){return n(A(i,y),b)},decamelizeKeys:function(b,y){return n(A(a,y),b,y)},pascalizeKeys:function(b,y){return n(A(s,y),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=N:t.humps=N})($w)})(Id);var Bw=Id.exports,jw=["class","style"];function Hw(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=Bw.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function zw(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function kd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return kd(c)}),i=Object.keys(e.attributes||{}).reduce(function(c,l){var u=e.attributes[l];switch(l){case"class":c.class=zw(u);break;case"style":c.style=Hw(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,a=s===void 0?{}:s,o=Fw(n,jw);return Zi(e.tag,bt(bt(bt({},t),{},{class:i.class,style:bt(bt({},i.style),a)},i.attrs),o),r)}var Ad=!1;try{Ad=!0}catch{}function Vw(){if(!Ad&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ds(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ne({},e,t):{}}function Ww(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Ne(t,"fa-".concat(e.size),e.size!==null),Ne(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Ne(t,"fa-pull-".concat(e.pull),e.pull!==null),Ne(t,"fa-swap-opacity",e.swapOpacity),Ne(t,"fa-bounce",e.bounce),Ne(t,"fa-shake",e.shake),Ne(t,"fa-beat",e.beat),Ne(t,"fa-fade",e.fade),Ne(t,"fa-beat-fade",e.beatFade),Ne(t,"fa-flash",e.flash),Ne(t,"fa-spin-pulse",e.spinPulse),Ne(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Pl(e){if(e&&Bi(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ka.icon)return ka.icon(e);if(e===null)return null;if(Bi(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Kw=ja({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=ke(function(){return Pl(t.icon)}),s=ke(function(){return Ds("classes",Ww(t))}),a=ke(function(){return Ds("transform",typeof t.transform=="string"?ka.transform(t.transform):t.transform)}),o=ke(function(){return Ds("mask",Pl(t.mask))}),c=ke(function(){return Dw(i.value,bt(bt(bt(bt({},s.value),a.value),o.value),{},{symbol:t.symbol,title:t.title}))});dn(c,function(u){if(!u)return Vw("Could not find one or more icon(s)",i.value,o.value)},{immediate:!0});var l=ke(function(){return c.value?kd(c.value.abstract[0],{},r):null});return function(){return l.value}}}),Gw={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},Yw={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},qw={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Xw={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Jw={prefix:"fas",iconName:"headset",icon:[512,512,[],"f590","M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"]},Qw={prefix:"fas",iconName:"person-walking-dashed-line-arrow-right",icon:[640,512,[],"e553","M208 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM123.7 200.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 19.3-65.5 9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L281 232.7l-15.3-36.8C248.5 154.8 208.3 128 163.7 128c-22.8 0-45.3 4.8-66.1 14l-8 3.5c-32.9 14.6-58.1 42.4-69.4 76.5l-2.6 7.8c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l2.6-7.8c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5zm-30 135.1L68.7 398 9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L116.3 441c4.6-4.6 8.2-10.1 10.6-16.1l14.5-36.2-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6zM550.6 153.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L530.7 224H384c-17.7 0-32 14.3-32 32s14.3 32 32 32H530.7l-25.4 25.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l80-80c12.5-12.5 12.5-32.8 0-45.3l-80-80zM392 0c-13.3 0-24 10.7-24 24V72c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24zm24 152c0-13.3-10.7-24-24-24s-24 10.7-24 24v16c0 13.3 10.7 24 24 24s24-10.7 24-24V152zM392 320c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24s24-10.7 24-24V344c0-13.3-10.7-24-24-24zm24 120c0-13.3-10.7-24-24-24s-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24V440z"]},Zw={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},e2={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},t2={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},n2=t2,r2={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},i2={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},s2={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},a2=s2;Lw.add(e2,Gw,Qw,a2,qw,Jw,r2,n2,i2,Zw,Yw,Xw);tm(n1).use(Le).use(w0).component("font-awesome-icon",Kw).mount("#app");export{Ye as F,Ft as G,xi as T,ho as _,on as a,C as b,we as c,nr as d,V as e,Le as f,is as g,Gh as h,De as i,hc as j,Zs as k,Xa as m,pe as o,ph as r,o2 as s,Be as t,fm as u,bs as v,Qp as w};
