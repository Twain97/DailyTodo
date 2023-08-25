(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _a(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?i=>!!n[i.toLowerCase()]:i=>!!n[i]}const ue={},Rn=[],Je=()=>{},wd=()=>!1,Ed=/^on[^a-z]/,$i=e=>Ed.test(e),wa=e=>e.startsWith("onUpdate:"),ve=Object.assign,Ea=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Id=Object.prototype.hasOwnProperty,Q=(e,t)=>Id.call(e,t),z=Array.isArray,Nn=e=>Bi(e)==="[object Map]",Tl=e=>Bi(e)==="[object Set]",Y=e=>typeof e=="function",be=e=>typeof e=="string",Ia=e=>typeof e=="symbol",he=e=>e!==null&&typeof e=="object",Cl=e=>he(e)&&Y(e.then)&&Y(e.catch),xl=Object.prototype.toString,Bi=e=>xl.call(e),kd=e=>Bi(e).slice(8,-1),Sl=e=>Bi(e)==="[object Object]",ka=e=>be(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,li=_a(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ji=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Ad=/-(\w)/g,ft=ji(e=>e.replace(Ad,(t,n)=>n?n.toUpperCase():"")),Td=/\B([A-Z])/g,Gn=ji(e=>e.replace(Td,"-$1").toLowerCase()),Hi=ji(e=>e.charAt(0).toUpperCase()+e.slice(1)),os=ji(e=>e?`on${Hi(e)}`:""),vr=(e,t)=>!Object.is(e,t),ui=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},_i=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Ns=e=>{const t=parseFloat(e);return isNaN(t)?e:t},Cd=e=>{const t=be(e)?Number(e):NaN;return isNaN(t)?e:t};let Ao;const Ms=()=>Ao||(Ao=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Aa(e){if(z(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=be(r)?Pd(r):Aa(r);if(i)for(const s in i)t[s]=i[s]}return t}else{if(be(e))return e;if(he(e))return e}}const xd=/;(?![^(]*\))/g,Sd=/:([^]+)/,Od=/\/\*[^]*?\*\//g;function Pd(e){const t={};return e.replace(Od,"").split(xd).forEach(n=>{if(n){const r=n.split(Sd);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ta(e){let t="";if(be(e))t=e;else if(z(e))for(let n=0;n<e.length;n++){const r=Ta(e[n]);r&&(t+=r+" ")}else if(he(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Rd="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Nd=_a(Rd);function Ol(e){return!!e||e===""}const Dt=e=>be(e)?e:e==null?"":z(e)||he(e)&&(e.toString===xl||!Y(e.toString))?JSON.stringify(e,Pl,2):String(e),Pl=(e,t)=>t&&t.__v_isRef?Pl(e,t.value):Nn(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,i])=>(n[`${r} =>`]=i,n),{})}:Tl(t)?{[`Set(${t.size})`]:[...t.values()]}:he(t)&&!z(t)&&!Sl(t)?String(t):t;let Ke;class Md{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ke,!t&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ke;try{return Ke=this,t()}finally{Ke=n}}}on(){Ke=this}off(){Ke=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this._active=!1}}}function Ld(e,t=Ke){t&&t.active&&t.effects.push(e)}function Dd(){return Ke}const Ca=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Rl=e=>(e.w&Wt)>0,Nl=e=>(e.n&Wt)>0,Ud=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Wt},Fd=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];Rl(i)&&!Nl(i)?i.delete(e):t[n++]=i,i.w&=~Wt,i.n&=~Wt}t.length=n}},Ls=new WeakMap;let sr=0,Wt=1;const Ds=30;let Ye;const un=Symbol(""),Us=Symbol("");class xa{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Ld(this,r)}run(){if(!this.active)return this.fn();let t=Ye,n=jt;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Ye,Ye=this,jt=!0,Wt=1<<++sr,sr<=Ds?Ud(this):To(this),this.fn()}finally{sr<=Ds&&Fd(this),Wt=1<<--sr,Ye=this.parent,jt=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ye===this?this.deferStop=!0:this.active&&(To(this),this.onStop&&this.onStop(),this.active=!1)}}function To(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let jt=!0;const Ml=[];function Yn(){Ml.push(jt),jt=!1}function qn(){const e=Ml.pop();jt=e===void 0?!0:e}function De(e,t,n){if(jt&&Ye){let r=Ls.get(e);r||Ls.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=Ca()),Ll(i)}}function Ll(e,t){let n=!1;sr<=Ds?Nl(e)||(e.n|=Wt,n=!Rl(e)):n=!e.has(Ye),n&&(e.add(Ye),Ye.deps.push(e))}function _t(e,t,n,r,i,s){const a=Ls.get(e);if(!a)return;let o=[];if(t==="clear")o=[...a.values()];else if(n==="length"&&z(e)){const c=Number(r);a.forEach((l,u)=>{(u==="length"||u>=c)&&o.push(l)})}else switch(n!==void 0&&o.push(a.get(n)),t){case"add":z(e)?ka(n)&&o.push(a.get("length")):(o.push(a.get(un)),Nn(e)&&o.push(a.get(Us)));break;case"delete":z(e)||(o.push(a.get(un)),Nn(e)&&o.push(a.get(Us)));break;case"set":Nn(e)&&o.push(a.get(un));break}if(o.length===1)o[0]&&Fs(o[0]);else{const c=[];for(const l of o)l&&c.push(...l);Fs(Ca(c))}}function Fs(e,t){const n=z(e)?e:[...e];for(const r of n)r.computed&&Co(r);for(const r of n)r.computed||Co(r)}function Co(e,t){(e!==Ye||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const $d=_a("__proto__,__v_isRef,__isVue"),Dl=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Ia)),Bd=Sa(),jd=Sa(!1,!0),Hd=Sa(!0),xo=zd();function zd(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=ee(this);for(let s=0,a=this.length;s<a;s++)De(r,"get",s+"");const i=r[t](...n);return i===-1||i===!1?r[t](...n.map(ee)):i}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Yn();const r=ee(this)[t].apply(this,n);return qn(),r}}),e}function Vd(e){const t=ee(this);return De(t,"has",e),t.hasOwnProperty(e)}function Sa(e=!1,t=!1){return function(r,i,s){if(i==="__v_isReactive")return!e;if(i==="__v_isReadonly")return e;if(i==="__v_isShallow")return t;if(i==="__v_raw"&&s===(e?t?ah:jl:t?Bl:$l).get(r))return r;const a=z(r);if(!e){if(a&&Q(xo,i))return Reflect.get(xo,i,s);if(i==="hasOwnProperty")return Vd}const o=Reflect.get(r,i,s);return(Ia(i)?Dl.has(i):$d(i))||(e||De(r,"get",i),t)?o:xe(o)?a&&ka(i)?o:o.value:he(o)?e?zl(o):Mr(o):o}}const Wd=Ul(),Kd=Ul(!0);function Ul(e=!1){return function(n,r,i,s){let a=n[r];if(jn(a)&&xe(a)&&!xe(i))return!1;if(!e&&(!wi(i)&&!jn(i)&&(a=ee(a),i=ee(i)),!z(n)&&xe(a)&&!xe(i)))return a.value=i,!0;const o=z(n)&&ka(r)?Number(r)<n.length:Q(n,r),c=Reflect.set(n,r,i,s);return n===ee(s)&&(o?vr(i,a)&&_t(n,"set",r,i):_t(n,"add",r,i)),c}}function Gd(e,t){const n=Q(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&_t(e,"delete",t,void 0),r}function Yd(e,t){const n=Reflect.has(e,t);return(!Ia(t)||!Dl.has(t))&&De(e,"has",t),n}function qd(e){return De(e,"iterate",z(e)?"length":un),Reflect.ownKeys(e)}const Fl={get:Bd,set:Wd,deleteProperty:Gd,has:Yd,ownKeys:qd},Xd={get:Hd,set(e,t){return!0},deleteProperty(e,t){return!0}},Jd=ve({},Fl,{get:jd,set:Kd}),Oa=e=>e,zi=e=>Reflect.getPrototypeOf(e);function Kr(e,t,n=!1,r=!1){e=e.__v_raw;const i=ee(e),s=ee(t);n||(t!==s&&De(i,"get",t),De(i,"get",s));const{has:a}=zi(i),o=r?Oa:n?Na:br;if(a.call(i,t))return o(e.get(t));if(a.call(i,s))return o(e.get(s));e!==i&&e.get(t)}function Gr(e,t=!1){const n=this.__v_raw,r=ee(n),i=ee(e);return t||(e!==i&&De(r,"has",e),De(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Yr(e,t=!1){return e=e.__v_raw,!t&&De(ee(e),"iterate",un),Reflect.get(e,"size",e)}function So(e){e=ee(e);const t=ee(this);return zi(t).has.call(t,e)||(t.add(e),_t(t,"add",e,e)),this}function Oo(e,t){t=ee(t);const n=ee(this),{has:r,get:i}=zi(n);let s=r.call(n,e);s||(e=ee(e),s=r.call(n,e));const a=i.call(n,e);return n.set(e,t),s?vr(t,a)&&_t(n,"set",e,t):_t(n,"add",e,t),this}function Po(e){const t=ee(this),{has:n,get:r}=zi(t);let i=n.call(t,e);i||(e=ee(e),i=n.call(t,e)),r&&r.call(t,e);const s=t.delete(e);return i&&_t(t,"delete",e,void 0),s}function Ro(){const e=ee(this),t=e.size!==0,n=e.clear();return t&&_t(e,"clear",void 0,void 0),n}function qr(e,t){return function(r,i){const s=this,a=s.__v_raw,o=ee(a),c=t?Oa:e?Na:br;return!e&&De(o,"iterate",un),a.forEach((l,u)=>r.call(i,c(l),c(u),s))}}function Xr(e,t,n){return function(...r){const i=this.__v_raw,s=ee(i),a=Nn(s),o=e==="entries"||e===Symbol.iterator&&a,c=e==="keys"&&a,l=i[e](...r),u=n?Oa:t?Na:br;return!t&&De(s,"iterate",c?Us:un),{next(){const{value:f,done:h}=l.next();return h?{value:f,done:h}:{value:o?[u(f[0]),u(f[1])]:u(f),done:h}},[Symbol.iterator](){return this}}}}function xt(e){return function(...t){return e==="delete"?!1:this}}function Qd(){const e={get(s){return Kr(this,s)},get size(){return Yr(this)},has:Gr,add:So,set:Oo,delete:Po,clear:Ro,forEach:qr(!1,!1)},t={get(s){return Kr(this,s,!1,!0)},get size(){return Yr(this)},has:Gr,add:So,set:Oo,delete:Po,clear:Ro,forEach:qr(!1,!0)},n={get(s){return Kr(this,s,!0)},get size(){return Yr(this,!0)},has(s){return Gr.call(this,s,!0)},add:xt("add"),set:xt("set"),delete:xt("delete"),clear:xt("clear"),forEach:qr(!0,!1)},r={get(s){return Kr(this,s,!0,!0)},get size(){return Yr(this,!0)},has(s){return Gr.call(this,s,!0)},add:xt("add"),set:xt("set"),delete:xt("delete"),clear:xt("clear"),forEach:qr(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=Xr(s,!1,!1),n[s]=Xr(s,!0,!1),t[s]=Xr(s,!1,!0),r[s]=Xr(s,!0,!0)}),[e,n,t,r]}const[Zd,eh,th,nh]=Qd();function Pa(e,t){const n=t?e?nh:th:e?eh:Zd;return(r,i,s)=>i==="__v_isReactive"?!e:i==="__v_isReadonly"?e:i==="__v_raw"?r:Reflect.get(Q(n,i)&&i in r?n:r,i,s)}const rh={get:Pa(!1,!1)},ih={get:Pa(!1,!0)},sh={get:Pa(!0,!1)},$l=new WeakMap,Bl=new WeakMap,jl=new WeakMap,ah=new WeakMap;function oh(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ch(e){return e.__v_skip||!Object.isExtensible(e)?0:oh(kd(e))}function Mr(e){return jn(e)?e:Ra(e,!1,Fl,rh,$l)}function Hl(e){return Ra(e,!1,Jd,ih,Bl)}function zl(e){return Ra(e,!0,Xd,sh,jl)}function Ra(e,t,n,r,i){if(!he(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const s=i.get(e);if(s)return s;const a=ch(e);if(a===0)return e;const o=new Proxy(e,a===2?r:n);return i.set(e,o),o}function Mn(e){return jn(e)?Mn(e.__v_raw):!!(e&&e.__v_isReactive)}function jn(e){return!!(e&&e.__v_isReadonly)}function wi(e){return!!(e&&e.__v_isShallow)}function Vl(e){return Mn(e)||jn(e)}function ee(e){const t=e&&e.__v_raw;return t?ee(t):e}function Wl(e){return _i(e,"__v_skip",!0),e}const br=e=>he(e)?Mr(e):e,Na=e=>he(e)?zl(e):e;function Kl(e){jt&&Ye&&(e=ee(e),Ll(e.dep||(e.dep=Ca())))}function Gl(e,t){e=ee(e);const n=e.dep;n&&Fs(n)}function xe(e){return!!(e&&e.__v_isRef===!0)}function lh(e){return Yl(e,!1)}function uh(e){return Yl(e,!0)}function Yl(e,t){return xe(e)?e:new fh(e,t)}class fh{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:ee(t),this._value=n?t:br(t)}get value(){return Kl(this),this._value}set value(t){const n=this.__v_isShallow||wi(t)||jn(t);t=n?t:ee(t),vr(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:br(t),Gl(this))}}function Ln(e){return xe(e)?e.value:e}const dh={get:(e,t,n)=>Ln(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return xe(i)&&!xe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function ql(e){return Mn(e)?e:new Proxy(e,dh)}class hh{constructor(t,n,r,i){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new xa(t,()=>{this._dirty||(this._dirty=!0,Gl(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!i,this.__v_isReadonly=r}get value(){const t=ee(this);return Kl(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function ph(e,t,n=!1){let r,i;const s=Y(e);return s?(r=e,i=Je):(r=e.get,i=e.set),new hh(r,i,s||!i,n)}function Ht(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Vi(s,t,n)}return i}function ze(e,t,n,r){if(Y(e)){const s=Ht(e,t,n,r);return s&&Cl(s)&&s.catch(a=>{Vi(a,t,n)}),s}const i=[];for(let s=0;s<e.length;s++)i.push(ze(e[s],t,n,r));return i}function Vi(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let s=t.parent;const a=t.proxy,o=n;for(;s;){const l=s.ec;if(l){for(let u=0;u<l.length;u++)if(l[u](e,a,o)===!1)return}s=s.parent}const c=t.appContext.config.errorHandler;if(c){Ht(c,null,10,[e,a,o]);return}}mh(e,n,i,r)}function mh(e,t,n,r=!0){console.error(e)}let yr=!1,$s=!1;const Ce=[];let at=0;const Dn=[];let gt=null,nn=0;const Xl=Promise.resolve();let Ma=null;function Jl(e){const t=Ma||Xl;return e?t.then(this?e.bind(this):e):t}function gh(e){let t=at+1,n=Ce.length;for(;t<n;){const r=t+n>>>1;_r(Ce[r])<e?t=r+1:n=r}return t}function La(e){(!Ce.length||!Ce.includes(e,yr&&e.allowRecurse?at+1:at))&&(e.id==null?Ce.push(e):Ce.splice(gh(e.id),0,e),Ql())}function Ql(){!yr&&!$s&&($s=!0,Ma=Xl.then(eu))}function vh(e){const t=Ce.indexOf(e);t>at&&Ce.splice(t,1)}function bh(e){z(e)?Dn.push(...e):(!gt||!gt.includes(e,e.allowRecurse?nn+1:nn))&&Dn.push(e),Ql()}function No(e,t=yr?at+1:0){for(;t<Ce.length;t++){const n=Ce[t];n&&n.pre&&(Ce.splice(t,1),t--,n())}}function Zl(e){if(Dn.length){const t=[...new Set(Dn)];if(Dn.length=0,gt){gt.push(...t);return}for(gt=t,gt.sort((n,r)=>_r(n)-_r(r)),nn=0;nn<gt.length;nn++)gt[nn]();gt=null,nn=0}}const _r=e=>e.id==null?1/0:e.id,yh=(e,t)=>{const n=_r(e)-_r(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function eu(e){$s=!1,yr=!0,Ce.sort(yh);const t=Je;try{for(at=0;at<Ce.length;at++){const n=Ce[at];n&&n.active!==!1&&Ht(n,null,14)}}finally{at=0,Ce.length=0,Zl(),yr=!1,Ma=null,(Ce.length||Dn.length)&&eu()}}function _h(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||ue;let i=n;const s=t.startsWith("update:"),a=s&&t.slice(7);if(a&&a in r){const u=`${a==="modelValue"?"model":a}Modifiers`,{number:f,trim:h}=r[u]||ue;h&&(i=n.map(m=>be(m)?m.trim():m)),f&&(i=n.map(Ns))}let o,c=r[o=os(t)]||r[o=os(ft(t))];!c&&s&&(c=r[o=os(Gn(t))]),c&&ze(c,e,6,i);const l=r[o+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,ze(l,e,6,i)}}function tu(e,t,n=!1){const r=t.emitsCache,i=r.get(e);if(i!==void 0)return i;const s=e.emits;let a={},o=!1;if(!Y(e)){const c=l=>{const u=tu(l,t,!0);u&&(o=!0,ve(a,u))};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!s&&!o?(he(e)&&r.set(e,null),null):(z(s)?s.forEach(c=>a[c]=null):ve(a,s),he(e)&&r.set(e,a),a)}function Wi(e,t){return!e||!$i(t)?!1:(t=t.slice(2).replace(/Once$/,""),Q(e,t[0].toLowerCase()+t.slice(1))||Q(e,Gn(t))||Q(e,t))}let Be=null,nu=null;function Ei(e){const t=Be;return Be=e,nu=e&&e.type.__scopeId||null,t}function $e(e,t=Be,n){if(!t||e._n)return e;const r=(...i)=>{r._d&&Wo(-1);const s=Ei(t);let a;try{a=e(...i)}finally{Ei(s),r._d&&Wo(1)}return a};return r._n=!0,r._c=!0,r._d=!0,r}function cs(e){const{type:t,vnode:n,proxy:r,withProxy:i,props:s,propsOptions:[a],slots:o,attrs:c,emit:l,render:u,renderCache:f,data:h,setupState:m,ctx:I,inheritAttrs:A}=e;let R,b;const y=Ei(e);try{if(n.shapeFlag&4){const C=i||r;R=st(u.call(C,C,f,s,m,h,I)),b=c}else{const C=t;R=st(C.length>1?C(s,{attrs:c,slots:o,emit:l}):C(s,null)),b=t.props?c:wh(c)}}catch(C){fr.length=0,Vi(C,e,1),R=G(Qe)}let O=R;if(b&&A!==!1){const C=Object.keys(b),{shapeFlag:H}=O;C.length&&H&7&&(a&&C.some(wa)&&(b=Eh(b,a)),O=Kt(O,b))}return n.dirs&&(O=Kt(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),R=O,Ei(y),R}const wh=e=>{let t;for(const n in e)(n==="class"||n==="style"||$i(n))&&((t||(t={}))[n]=e[n]);return t},Eh=(e,t)=>{const n={};for(const r in e)(!wa(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function Ih(e,t,n){const{props:r,children:i,component:s}=e,{props:a,children:o,patchFlag:c}=t,l=s.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&c>=0){if(c&1024)return!0;if(c&16)return r?Mo(r,a,l):!!a;if(c&8){const u=t.dynamicProps;for(let f=0;f<u.length;f++){const h=u[f];if(a[h]!==r[h]&&!Wi(l,h))return!0}}}else return(i||o)&&(!o||!o.$stable)?!0:r===a?!1:r?a?Mo(r,a,l):!0:!!a;return!1}function Mo(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!Wi(n,s))return!0}return!1}function kh({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ah=e=>e.__isSuspense;function Th(e,t){t&&t.pendingBranch?z(e)?t.effects.push(...e):t.effects.push(e):bh(e)}const Jr={};function fn(e,t,n){return ru(e,t,n)}function ru(e,t,{immediate:n,deep:r,flush:i,onTrack:s,onTrigger:a}=ue){var o;const c=Dd()===((o=Ee)==null?void 0:o.scope)?Ee:null;let l,u=!1,f=!1;if(xe(e)?(l=()=>e.value,u=wi(e)):Mn(e)?(l=()=>e,r=!0):z(e)?(f=!0,u=e.some(C=>Mn(C)||wi(C)),l=()=>e.map(C=>{if(xe(C))return C.value;if(Mn(C))return an(C);if(Y(C))return Ht(C,c,2)})):Y(e)?t?l=()=>Ht(e,c,2):l=()=>{if(!(c&&c.isUnmounted))return h&&h(),ze(e,c,3,[m])}:l=Je,t&&r){const C=l;l=()=>an(C())}let h,m=C=>{h=y.onStop=()=>{Ht(C,c,4)}},I;if(Er)if(m=Je,t?n&&ze(t,c,3,[l(),f?[]:void 0,m]):l(),i==="sync"){const C=wp();I=C.__watcherHandles||(C.__watcherHandles=[])}else return Je;let A=f?new Array(e.length).fill(Jr):Jr;const R=()=>{if(y.active)if(t){const C=y.run();(r||u||(f?C.some((H,J)=>vr(H,A[J])):vr(C,A)))&&(h&&h(),ze(t,c,3,[C,A===Jr?void 0:f&&A[0]===Jr?[]:A,m]),A=C)}else y.run()};R.allowRecurse=!!t;let b;i==="sync"?b=R:i==="post"?b=()=>Me(R,c&&c.suspense):(R.pre=!0,c&&(R.id=c.uid),b=()=>La(R));const y=new xa(l,b);t?n?R():A=y.run():i==="post"?Me(y.run.bind(y),c&&c.suspense):y.run();const O=()=>{y.stop(),c&&c.scope&&Ea(c.scope.effects,y)};return I&&I.push(O),O}function Ch(e,t,n){const r=this.proxy,i=be(e)?e.includes(".")?iu(r,e):()=>r[e]:e.bind(r,r);let s;Y(t)?s=t:(s=t.handler,n=t);const a=Ee;Hn(this);const o=ru(i,s.bind(r),n);return a?Hn(a):dn(),o}function iu(e,t){const n=t.split(".");return()=>{let r=e;for(let i=0;i<n.length&&r;i++)r=r[n[i]];return r}}function an(e,t){if(!he(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),xe(e))an(e.value,t);else if(z(e))for(let n=0;n<e.length;n++)an(e[n],t);else if(Tl(e)||Nn(e))e.forEach(n=>{an(n,t)});else if(Sl(e))for(const n in e)an(e[n],t);return e}function Nw(e,t){const n=Be;if(n===null)return e;const r=Xi(n)||n.proxy,i=e.dirs||(e.dirs=[]);for(let s=0;s<t.length;s++){let[a,o,c,l=ue]=t[s];a&&(Y(a)&&(a={mounted:a,updated:a}),a.deep&&an(o),i.push({dir:a,instance:r,value:o,oldValue:void 0,arg:c,modifiers:l}))}return e}function Jt(e,t,n,r){const i=e.dirs,s=t&&t.dirs;for(let a=0;a<i.length;a++){const o=i[a];s&&(o.oldValue=s[a].value);let c=o.dir[r];c&&(Yn(),ze(c,n,8,[e.el,o,e,t]),qn())}}function xh(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Ua(()=>{e.isMounted=!0}),uu(()=>{e.isUnmounting=!0}),e}const He=[Function,Array],su={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:He,onEnter:He,onAfterEnter:He,onEnterCancelled:He,onBeforeLeave:He,onLeave:He,onAfterLeave:He,onLeaveCancelled:He,onBeforeAppear:He,onAppear:He,onAfterAppear:He,onAppearCancelled:He},Sh={name:"BaseTransition",props:su,setup(e,{slots:t}){const n=hp(),r=xh();let i;return()=>{const s=t.default&&ou(t.default(),!0);if(!s||!s.length)return;let a=s[0];if(s.length>1){for(const A of s)if(A.type!==Qe){a=A;break}}const o=ee(e),{mode:c}=o;if(r.isLeaving)return ls(a);const l=Lo(a);if(!l)return ls(a);const u=Bs(l,o,r,n);js(l,u);const f=n.subTree,h=f&&Lo(f);let m=!1;const{getTransitionKey:I}=l.type;if(I){const A=I();i===void 0?i=A:A!==i&&(i=A,m=!0)}if(h&&h.type!==Qe&&(!rn(l,h)||m)){const A=Bs(h,o,r,n);if(js(h,A),c==="out-in")return r.isLeaving=!0,A.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},ls(a);c==="in-out"&&l.type!==Qe&&(A.delayLeave=(R,b,y)=>{const O=au(r,h);O[String(h.key)]=h,R._leaveCb=()=>{b(),R._leaveCb=void 0,delete u.delayedLeave},u.delayedLeave=y})}return a}}},Oh=Sh;function au(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function Bs(e,t,n,r){const{appear:i,mode:s,persisted:a=!1,onBeforeEnter:o,onEnter:c,onAfterEnter:l,onEnterCancelled:u,onBeforeLeave:f,onLeave:h,onAfterLeave:m,onLeaveCancelled:I,onBeforeAppear:A,onAppear:R,onAfterAppear:b,onAppearCancelled:y}=t,O=String(e.key),C=au(n,e),H=(V,q)=>{V&&ze(V,r,9,q)},J=(V,q)=>{const Z=q[1];H(V,q),z(V)?V.every(ye=>ye.length<=1)&&Z():V.length<=1&&Z()},te={mode:s,persisted:a,beforeEnter(V){let q=o;if(!n.isMounted)if(i)q=A||o;else return;V._leaveCb&&V._leaveCb(!0);const Z=C[O];Z&&rn(e,Z)&&Z.el._leaveCb&&Z.el._leaveCb(),H(q,[V])},enter(V){let q=c,Z=l,ye=u;if(!n.isMounted)if(i)q=R||c,Z=b||l,ye=y||u;else return;let U=!1;const ie=V._enterCb=Oe=>{U||(U=!0,Oe?H(ye,[V]):H(Z,[V]),te.delayedLeave&&te.delayedLeave(),V._enterCb=void 0)};q?J(q,[V,ie]):ie()},leave(V,q){const Z=String(e.key);if(V._enterCb&&V._enterCb(!0),n.isUnmounting)return q();H(f,[V]);let ye=!1;const U=V._leaveCb=ie=>{ye||(ye=!0,q(),ie?H(I,[V]):H(m,[V]),V._leaveCb=void 0,C[Z]===e&&delete C[Z])};C[Z]=e,h?J(h,[V,U]):U()},clone(V){return Bs(V,t,n,r)}};return te}function ls(e){if(Ki(e))return e=Kt(e),e.children=null,e}function Lo(e){return Ki(e)?e.children?e.children[0]:void 0:e}function js(e,t){e.shapeFlag&6&&e.component?js(e.component.subTree,t):e.shapeFlag&128?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function ou(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let a=e[s];const o=n==null?a.key:String(n)+String(a.key!=null?a.key:s);a.type===it?(a.patchFlag&128&&i++,r=r.concat(ou(a.children,t,o))):(t||a.type!==Qe)&&r.push(o!=null?Kt(a,{key:o}):a)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function Da(e,t){return Y(e)?(()=>ve({name:e.name},t,{setup:e}))():e}const fi=e=>!!e.type.__asyncLoader,Ki=e=>e.type.__isKeepAlive;function Ph(e,t){cu(e,"a",t)}function Rh(e,t){cu(e,"da",t)}function cu(e,t,n=Ee){const r=e.__wdc||(e.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return e()});if(Gi(t,r,n),n){let i=n.parent;for(;i&&i.parent;)Ki(i.parent.vnode)&&Nh(r,t,n,i),i=i.parent}}function Nh(e,t,n,r){const i=Gi(t,e,r,!0);fu(()=>{Ea(r[t],i)},n)}function Gi(e,t,n=Ee,r=!1){if(n){const i=n[e]||(n[e]=[]),s=t.__weh||(t.__weh=(...a)=>{if(n.isUnmounted)return;Yn(),Hn(n);const o=ze(t,n,e,a);return dn(),qn(),o});return r?i.unshift(s):i.push(s),s}}const At=e=>(t,n=Ee)=>(!Er||e==="sp")&&Gi(e,(...r)=>t(...r),n),lu=At("bm"),Ua=At("m"),Mh=At("bu"),Lh=At("u"),uu=At("bum"),fu=At("um"),Dh=At("sp"),Uh=At("rtg"),Fh=At("rtc");function $h(e,t=Ee){Gi("ec",e,t)}const du="components";function Sn(e,t){return jh(du,e,!0,t)||e}const Bh=Symbol.for("v-ndc");function jh(e,t,n=!0,r=!1){const i=Be||Ee;if(i){const s=i.type;if(e===du){const o=bp(s,!1);if(o&&(o===t||o===ft(t)||o===Hi(ft(t))))return s}const a=Do(i[e]||s[e],t)||Do(i.appContext[e],t);return!a&&r?s:a}}function Do(e,t){return e&&(e[t]||e[ft(t)]||e[Hi(ft(t))])}function Mw(e,t,n,r){let i;const s=n&&n[r];if(z(e)||be(e)){i=new Array(e.length);for(let a=0,o=e.length;a<o;a++)i[a]=t(e[a],a,void 0,s&&s[a])}else if(typeof e=="number"){i=new Array(e);for(let a=0;a<e;a++)i[a]=t(a+1,a,void 0,s&&s[a])}else if(he(e))if(e[Symbol.iterator])i=Array.from(e,(a,o)=>t(a,o,void 0,s&&s[o]));else{const a=Object.keys(e);i=new Array(a.length);for(let o=0,c=a.length;o<c;o++){const l=a[o];i[o]=t(e[l],l,o,s&&s[o])}}else i=[];return n&&(n[r]=i),i}const Hs=e=>e?Iu(e)?Xi(e)||e.proxy:Hs(e.parent):null,ur=ve(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Hs(e.parent),$root:e=>Hs(e.root),$emit:e=>e.emit,$options:e=>Fa(e),$forceUpdate:e=>e.f||(e.f=()=>La(e.update)),$nextTick:e=>e.n||(e.n=Jl.bind(e.proxy)),$watch:e=>Ch.bind(e)}),us=(e,t)=>e!==ue&&!e.__isScriptSetup&&Q(e,t),Hh={get({_:e},t){const{ctx:n,setupState:r,data:i,props:s,accessCache:a,type:o,appContext:c}=e;let l;if(t[0]!=="$"){const m=a[t];if(m!==void 0)switch(m){case 1:return r[t];case 2:return i[t];case 4:return n[t];case 3:return s[t]}else{if(us(r,t))return a[t]=1,r[t];if(i!==ue&&Q(i,t))return a[t]=2,i[t];if((l=e.propsOptions[0])&&Q(l,t))return a[t]=3,s[t];if(n!==ue&&Q(n,t))return a[t]=4,n[t];zs&&(a[t]=0)}}const u=ur[t];let f,h;if(u)return t==="$attrs"&&De(e,"get",t),u(e);if((f=o.__cssModules)&&(f=f[t]))return f;if(n!==ue&&Q(n,t))return a[t]=4,n[t];if(h=c.config.globalProperties,Q(h,t))return h[t]},set({_:e},t,n){const{data:r,setupState:i,ctx:s}=e;return us(i,t)?(i[t]=n,!0):r!==ue&&Q(r,t)?(r[t]=n,!0):Q(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(s[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:i,propsOptions:s}},a){let o;return!!n[a]||e!==ue&&Q(e,a)||us(t,a)||(o=s[0])&&Q(o,a)||Q(r,a)||Q(ur,a)||Q(i.config.globalProperties,a)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:Q(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function Uo(e){return z(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let zs=!0;function zh(e){const t=Fa(e),n=e.proxy,r=e.ctx;zs=!1,t.beforeCreate&&Fo(t.beforeCreate,e,"bc");const{data:i,computed:s,methods:a,watch:o,provide:c,inject:l,created:u,beforeMount:f,mounted:h,beforeUpdate:m,updated:I,activated:A,deactivated:R,beforeDestroy:b,beforeUnmount:y,destroyed:O,unmounted:C,render:H,renderTracked:J,renderTriggered:te,errorCaptured:V,serverPrefetch:q,expose:Z,inheritAttrs:ye,components:U,directives:ie,filters:Oe}=t;if(l&&Vh(l,r,null),a)for(const oe in a){const ne=a[oe];Y(ne)&&(r[oe]=ne.bind(n))}if(i){const oe=i.call(n,n);he(oe)&&(e.data=Mr(oe))}if(zs=!0,s)for(const oe in s){const ne=s[oe],pt=Y(ne)?ne.bind(n,n):Y(ne.get)?ne.get.bind(n,n):Je,Ct=!Y(ne)&&Y(ne.set)?ne.set.bind(n):Je,tt=Ie({get:pt,set:Ct});Object.defineProperty(r,oe,{enumerable:!0,configurable:!0,get:()=>tt.value,set:Re=>tt.value=Re})}if(o)for(const oe in o)hu(o[oe],r,n,oe);if(c){const oe=Y(c)?c.call(n):c;Reflect.ownKeys(oe).forEach(ne=>{di(ne,oe[ne])})}u&&Fo(u,e,"c");function me(oe,ne){z(ne)?ne.forEach(pt=>oe(pt.bind(n))):ne&&oe(ne.bind(n))}if(me(lu,f),me(Ua,h),me(Mh,m),me(Lh,I),me(Ph,A),me(Rh,R),me($h,V),me(Fh,J),me(Uh,te),me(uu,y),me(fu,C),me(Dh,q),z(Z))if(Z.length){const oe=e.exposed||(e.exposed={});Z.forEach(ne=>{Object.defineProperty(oe,ne,{get:()=>n[ne],set:pt=>n[ne]=pt})})}else e.exposed||(e.exposed={});H&&e.render===Je&&(e.render=H),ye!=null&&(e.inheritAttrs=ye),U&&(e.components=U),ie&&(e.directives=ie)}function Vh(e,t,n=Je){z(e)&&(e=Vs(e));for(const r in e){const i=e[r];let s;he(i)?"default"in i?s=ct(i.from||r,i.default,!0):s=ct(i.from||r):s=ct(i),xe(s)?Object.defineProperty(t,r,{enumerable:!0,configurable:!0,get:()=>s.value,set:a=>s.value=a}):t[r]=s}}function Fo(e,t,n){ze(z(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function hu(e,t,n,r){const i=r.includes(".")?iu(n,r):()=>n[r];if(be(e)){const s=t[e];Y(s)&&fn(i,s)}else if(Y(e))fn(i,e.bind(n));else if(he(e))if(z(e))e.forEach(s=>hu(s,t,n,r));else{const s=Y(e.handler)?e.handler.bind(n):t[e.handler];Y(s)&&fn(i,s,e)}}function Fa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:a}}=e.appContext,o=s.get(t);let c;return o?c=o:!i.length&&!n&&!r?c=t:(c={},i.length&&i.forEach(l=>Ii(c,l,a,!0)),Ii(c,t,a)),he(t)&&s.set(t,c),c}function Ii(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&Ii(e,s,n,!0),i&&i.forEach(a=>Ii(e,a,n,!0));for(const a in t)if(!(r&&a==="expose")){const o=Wh[a]||n&&n[a];e[a]=o?o(e[a],t[a]):t[a]}return e}const Wh={data:$o,props:Bo,emits:Bo,methods:ar,computed:ar,beforeCreate:Pe,created:Pe,beforeMount:Pe,mounted:Pe,beforeUpdate:Pe,updated:Pe,beforeDestroy:Pe,beforeUnmount:Pe,destroyed:Pe,unmounted:Pe,activated:Pe,deactivated:Pe,errorCaptured:Pe,serverPrefetch:Pe,components:ar,directives:ar,watch:Gh,provide:$o,inject:Kh};function $o(e,t){return t?e?function(){return ve(Y(e)?e.call(this,this):e,Y(t)?t.call(this,this):t)}:t:e}function Kh(e,t){return ar(Vs(e),Vs(t))}function Vs(e){if(z(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function Pe(e,t){return e?[...new Set([].concat(e,t))]:t}function ar(e,t){return e?ve(Object.create(null),e,t):t}function Bo(e,t){return e?z(e)&&z(t)?[...new Set([...e,...t])]:ve(Object.create(null),Uo(e),Uo(t??{})):t}function Gh(e,t){if(!e)return t;if(!t)return e;const n=ve(Object.create(null),e);for(const r in t)n[r]=Pe(e[r],t[r]);return n}function pu(){return{app:null,config:{isNativeTag:wd,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Yh=0;function qh(e,t){return function(r,i=null){Y(r)||(r=ve({},r)),i!=null&&!he(i)&&(i=null);const s=pu(),a=new Set;let o=!1;const c=s.app={_uid:Yh++,_component:r,_props:i,_container:null,_context:s,_instance:null,version:Ep,get config(){return s.config},set config(l){},use(l,...u){return a.has(l)||(l&&Y(l.install)?(a.add(l),l.install(c,...u)):Y(l)&&(a.add(l),l(c,...u))),c},mixin(l){return s.mixins.includes(l)||s.mixins.push(l),c},component(l,u){return u?(s.components[l]=u,c):s.components[l]},directive(l,u){return u?(s.directives[l]=u,c):s.directives[l]},mount(l,u,f){if(!o){const h=G(r,i);return h.appContext=s,u&&t?t(h,l):e(h,l,f),o=!0,c._container=l,l.__vue_app__=c,Xi(h.component)||h.component.proxy}},unmount(){o&&(e(null,c._container),delete c._container.__vue_app__)},provide(l,u){return s.provides[l]=u,c},runWithContext(l){ki=c;try{return l()}finally{ki=null}}};return c}}let ki=null;function di(e,t){if(Ee){let n=Ee.provides;const r=Ee.parent&&Ee.parent.provides;r===n&&(n=Ee.provides=Object.create(r)),n[e]=t}}function ct(e,t,n=!1){const r=Ee||Be;if(r||ki){const i=r?r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides:ki._context.provides;if(i&&e in i)return i[e];if(arguments.length>1)return n&&Y(t)?t.call(r&&r.proxy):t}}function Xh(e,t,n,r=!1){const i={},s={};_i(s,qi,1),e.propsDefaults=Object.create(null),mu(e,t,i,s);for(const a in e.propsOptions[0])a in i||(i[a]=void 0);n?e.props=r?i:Hl(i):e.type.props?e.props=i:e.props=s,e.attrs=s}function Jh(e,t,n,r){const{props:i,attrs:s,vnode:{patchFlag:a}}=e,o=ee(i),[c]=e.propsOptions;let l=!1;if((r||a>0)&&!(a&16)){if(a&8){const u=e.vnode.dynamicProps;for(let f=0;f<u.length;f++){let h=u[f];if(Wi(e.emitsOptions,h))continue;const m=t[h];if(c)if(Q(s,h))m!==s[h]&&(s[h]=m,l=!0);else{const I=ft(h);i[I]=Ws(c,o,I,m,e,!1)}else m!==s[h]&&(s[h]=m,l=!0)}}}else{mu(e,t,i,s)&&(l=!0);let u;for(const f in o)(!t||!Q(t,f)&&((u=Gn(f))===f||!Q(t,u)))&&(c?n&&(n[f]!==void 0||n[u]!==void 0)&&(i[f]=Ws(c,o,f,void 0,e,!0)):delete i[f]);if(s!==o)for(const f in s)(!t||!Q(t,f))&&(delete s[f],l=!0)}l&&_t(e,"set","$attrs")}function mu(e,t,n,r){const[i,s]=e.propsOptions;let a=!1,o;if(t)for(let c in t){if(li(c))continue;const l=t[c];let u;i&&Q(i,u=ft(c))?!s||!s.includes(u)?n[u]=l:(o||(o={}))[u]=l:Wi(e.emitsOptions,c)||(!(c in r)||l!==r[c])&&(r[c]=l,a=!0)}if(s){const c=ee(n),l=o||ue;for(let u=0;u<s.length;u++){const f=s[u];n[f]=Ws(i,c,f,l[f],e,!Q(l,f))}}return a}function Ws(e,t,n,r,i,s){const a=e[n];if(a!=null){const o=Q(a,"default");if(o&&r===void 0){const c=a.default;if(a.type!==Function&&!a.skipFactory&&Y(c)){const{propsDefaults:l}=i;n in l?r=l[n]:(Hn(i),r=l[n]=c.call(null,t),dn())}else r=c}a[0]&&(s&&!o?r=!1:a[1]&&(r===""||r===Gn(n))&&(r=!0))}return r}function gu(e,t,n=!1){const r=t.propsCache,i=r.get(e);if(i)return i;const s=e.props,a={},o=[];let c=!1;if(!Y(e)){const u=f=>{c=!0;const[h,m]=gu(f,t,!0);ve(a,h),m&&o.push(...m)};!n&&t.mixins.length&&t.mixins.forEach(u),e.extends&&u(e.extends),e.mixins&&e.mixins.forEach(u)}if(!s&&!c)return he(e)&&r.set(e,Rn),Rn;if(z(s))for(let u=0;u<s.length;u++){const f=ft(s[u]);jo(f)&&(a[f]=ue)}else if(s)for(const u in s){const f=ft(u);if(jo(f)){const h=s[u],m=a[f]=z(h)||Y(h)?{type:h}:ve({},h);if(m){const I=Vo(Boolean,m.type),A=Vo(String,m.type);m[0]=I>-1,m[1]=A<0||I<A,(I>-1||Q(m,"default"))&&o.push(f)}}}const l=[a,o];return he(e)&&r.set(e,l),l}function jo(e){return e[0]!=="$"}function Ho(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function zo(e,t){return Ho(e)===Ho(t)}function Vo(e,t){return z(t)?t.findIndex(n=>zo(n,e)):Y(t)&&zo(t,e)?0:-1}const vu=e=>e[0]==="_"||e==="$stable",$a=e=>z(e)?e.map(st):[st(e)],Qh=(e,t,n)=>{if(t._n)return t;const r=$e((...i)=>$a(t(...i)),n);return r._c=!1,r},bu=(e,t,n)=>{const r=e._ctx;for(const i in e){if(vu(i))continue;const s=e[i];if(Y(s))t[i]=Qh(i,s,r);else if(s!=null){const a=$a(s);t[i]=()=>a}}},yu=(e,t)=>{const n=$a(t);e.slots.default=()=>n},Zh=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=ee(t),_i(t,"_",n)):bu(t,e.slots={})}else e.slots={},t&&yu(e,t);_i(e.slots,qi,1)},ep=(e,t,n)=>{const{vnode:r,slots:i}=e;let s=!0,a=ue;if(r.shapeFlag&32){const o=t._;o?n&&o===1?s=!1:(ve(i,t),!n&&o===1&&delete i._):(s=!t.$stable,bu(t,i)),a=t}else t&&(yu(e,t),a={default:1});if(s)for(const o in i)!vu(o)&&!(o in a)&&delete i[o]};function Ks(e,t,n,r,i=!1){if(z(e)){e.forEach((h,m)=>Ks(h,t&&(z(t)?t[m]:t),n,r,i));return}if(fi(r)&&!i)return;const s=r.shapeFlag&4?Xi(r.component)||r.component.proxy:r.el,a=i?null:s,{i:o,r:c}=e,l=t&&t.r,u=o.refs===ue?o.refs={}:o.refs,f=o.setupState;if(l!=null&&l!==c&&(be(l)?(u[l]=null,Q(f,l)&&(f[l]=null)):xe(l)&&(l.value=null)),Y(c))Ht(c,o,12,[a,u]);else{const h=be(c),m=xe(c);if(h||m){const I=()=>{if(e.f){const A=h?Q(f,c)?f[c]:u[c]:c.value;i?z(A)&&Ea(A,s):z(A)?A.includes(s)||A.push(s):h?(u[c]=[s],Q(f,c)&&(f[c]=u[c])):(c.value=[s],e.k&&(u[e.k]=c.value))}else h?(u[c]=a,Q(f,c)&&(f[c]=a)):m&&(c.value=a,e.k&&(u[e.k]=a))};a?(I.id=-1,Me(I,n)):I()}}}const Me=Th;function tp(e){return np(e)}function np(e,t){const n=Ms();n.__VUE__=!0;const{insert:r,remove:i,patchProp:s,createElement:a,createText:o,createComment:c,setText:l,setElementText:u,parentNode:f,nextSibling:h,setScopeId:m=Je,insertStaticContent:I}=e,A=(d,p,g,v=null,w=null,E=null,P=!1,T=null,x=!!p.dynamicChildren)=>{if(d===p)return;d&&!rn(d,p)&&(v=_(d),Re(d,w,E,!0),d=null),p.patchFlag===-2&&(x=!1,p.dynamicChildren=null);const{type:k,ref:B,shapeFlag:L}=p;switch(k){case Yi:R(d,p,g,v);break;case Qe:b(d,p,g,v);break;case fs:d==null&&y(p,g,v,P);break;case it:U(d,p,g,v,w,E,P,T,x);break;default:L&1?H(d,p,g,v,w,E,P,T,x):L&6?ie(d,p,g,v,w,E,P,T,x):(L&64||L&128)&&k.process(d,p,g,v,w,E,P,T,x,S)}B!=null&&w&&Ks(B,d&&d.ref,E,p||d,!p)},R=(d,p,g,v)=>{if(d==null)r(p.el=o(p.children),g,v);else{const w=p.el=d.el;p.children!==d.children&&l(w,p.children)}},b=(d,p,g,v)=>{d==null?r(p.el=c(p.children||""),g,v):p.el=d.el},y=(d,p,g,v)=>{[d.el,d.anchor]=I(d.children,p,g,v,d.el,d.anchor)},O=({el:d,anchor:p},g,v)=>{let w;for(;d&&d!==p;)w=h(d),r(d,g,v),d=w;r(p,g,v)},C=({el:d,anchor:p})=>{let g;for(;d&&d!==p;)g=h(d),i(d),d=g;i(p)},H=(d,p,g,v,w,E,P,T,x)=>{P=P||p.type==="svg",d==null?J(p,g,v,w,E,P,T,x):q(d,p,w,E,P,T,x)},J=(d,p,g,v,w,E,P,T)=>{let x,k;const{type:B,props:L,shapeFlag:j,transition:K,dirs:X}=d;if(x=d.el=a(d.type,E,L&&L.is,L),j&8?u(x,d.children):j&16&&V(d.children,x,null,v,w,E&&B!=="foreignObject",P,T),X&&Jt(d,null,v,"created"),te(x,d,d.scopeId,P,v),L){for(const ae in L)ae!=="value"&&!li(ae)&&s(x,ae,null,L[ae],E,d.children,v,w,ke);"value"in L&&s(x,"value",null,L.value),(k=L.onVnodeBeforeMount)&&rt(k,v,d)}X&&Jt(d,null,v,"beforeMount");const le=(!w||w&&!w.pendingBranch)&&K&&!K.persisted;le&&K.beforeEnter(x),r(x,p,g),((k=L&&L.onVnodeMounted)||le||X)&&Me(()=>{k&&rt(k,v,d),le&&K.enter(x),X&&Jt(d,null,v,"mounted")},w)},te=(d,p,g,v,w)=>{if(g&&m(d,g),v)for(let E=0;E<v.length;E++)m(d,v[E]);if(w){let E=w.subTree;if(p===E){const P=w.vnode;te(d,P,P.scopeId,P.slotScopeIds,w.parent)}}},V=(d,p,g,v,w,E,P,T,x=0)=>{for(let k=x;k<d.length;k++){const B=d[k]=T?Mt(d[k]):st(d[k]);A(null,B,p,g,v,w,E,P,T)}},q=(d,p,g,v,w,E,P)=>{const T=p.el=d.el;let{patchFlag:x,dynamicChildren:k,dirs:B}=p;x|=d.patchFlag&16;const L=d.props||ue,j=p.props||ue;let K;g&&Qt(g,!1),(K=j.onVnodeBeforeUpdate)&&rt(K,g,p,d),B&&Jt(p,d,g,"beforeUpdate"),g&&Qt(g,!0);const X=w&&p.type!=="foreignObject";if(k?Z(d.dynamicChildren,k,T,g,v,X,E):P||ne(d,p,T,null,g,v,X,E,!1),x>0){if(x&16)ye(T,p,L,j,g,v,w);else if(x&2&&L.class!==j.class&&s(T,"class",null,j.class,w),x&4&&s(T,"style",L.style,j.style,w),x&8){const le=p.dynamicProps;for(let ae=0;ae<le.length;ae++){const ge=le[ae],We=L[ge],In=j[ge];(In!==We||ge==="value")&&s(T,ge,We,In,w,d.children,g,v,ke)}}x&1&&d.children!==p.children&&u(T,p.children)}else!P&&k==null&&ye(T,p,L,j,g,v,w);((K=j.onVnodeUpdated)||B)&&Me(()=>{K&&rt(K,g,p,d),B&&Jt(p,d,g,"updated")},v)},Z=(d,p,g,v,w,E,P)=>{for(let T=0;T<p.length;T++){const x=d[T],k=p[T],B=x.el&&(x.type===it||!rn(x,k)||x.shapeFlag&70)?f(x.el):g;A(x,k,B,null,v,w,E,P,!0)}},ye=(d,p,g,v,w,E,P)=>{if(g!==v){if(g!==ue)for(const T in g)!li(T)&&!(T in v)&&s(d,T,g[T],null,P,p.children,w,E,ke);for(const T in v){if(li(T))continue;const x=v[T],k=g[T];x!==k&&T!=="value"&&s(d,T,k,x,P,p.children,w,E,ke)}"value"in v&&s(d,"value",g.value,v.value)}},U=(d,p,g,v,w,E,P,T,x)=>{const k=p.el=d?d.el:o(""),B=p.anchor=d?d.anchor:o("");let{patchFlag:L,dynamicChildren:j,slotScopeIds:K}=p;K&&(T=T?T.concat(K):K),d==null?(r(k,g,v),r(B,g,v),V(p.children,g,B,w,E,P,T,x)):L>0&&L&64&&j&&d.dynamicChildren?(Z(d.dynamicChildren,j,g,w,E,P,T),(p.key!=null||w&&p===w.subTree)&&_u(d,p,!0)):ne(d,p,g,B,w,E,P,T,x)},ie=(d,p,g,v,w,E,P,T,x)=>{p.slotScopeIds=T,d==null?p.shapeFlag&512?w.ctx.activate(p,g,v,P,x):Oe(p,g,v,w,E,P,x):ht(d,p,x)},Oe=(d,p,g,v,w,E,P)=>{const T=d.component=dp(d,v,w);if(Ki(d)&&(T.ctx.renderer=S),pp(T),T.asyncDep){if(w&&w.registerDep(T,me),!d.el){const x=T.subTree=G(Qe);b(null,x,p,g)}return}me(T,d,p,g,w,E,P)},ht=(d,p,g)=>{const v=p.component=d.component;if(Ih(d,p,g))if(v.asyncDep&&!v.asyncResolved){oe(v,p,g);return}else v.next=p,vh(v.update),v.update();else p.el=d.el,v.vnode=p},me=(d,p,g,v,w,E,P)=>{const T=()=>{if(d.isMounted){let{next:B,bu:L,u:j,parent:K,vnode:X}=d,le=B,ae;Qt(d,!1),B?(B.el=X.el,oe(d,B,P)):B=X,L&&ui(L),(ae=B.props&&B.props.onVnodeBeforeUpdate)&&rt(ae,K,B,X),Qt(d,!0);const ge=cs(d),We=d.subTree;d.subTree=ge,A(We,ge,f(We.el),_(We),d,w,E),B.el=ge.el,le===null&&kh(d,ge.el),j&&Me(j,w),(ae=B.props&&B.props.onVnodeUpdated)&&Me(()=>rt(ae,K,B,X),w)}else{let B;const{el:L,props:j}=p,{bm:K,m:X,parent:le}=d,ae=fi(p);if(Qt(d,!1),K&&ui(K),!ae&&(B=j&&j.onVnodeBeforeMount)&&rt(B,le,p),Qt(d,!0),L&&re){const ge=()=>{d.subTree=cs(d),re(L,d.subTree,d,w,null)};ae?p.type.__asyncLoader().then(()=>!d.isUnmounted&&ge()):ge()}else{const ge=d.subTree=cs(d);A(null,ge,g,v,d,w,E),p.el=ge.el}if(X&&Me(X,w),!ae&&(B=j&&j.onVnodeMounted)){const ge=p;Me(()=>rt(B,le,ge),w)}(p.shapeFlag&256||le&&fi(le.vnode)&&le.vnode.shapeFlag&256)&&d.a&&Me(d.a,w),d.isMounted=!0,p=g=v=null}},x=d.effect=new xa(T,()=>La(k),d.scope),k=d.update=()=>x.run();k.id=d.uid,Qt(d,!0),k()},oe=(d,p,g)=>{p.component=d;const v=d.vnode.props;d.vnode=p,d.next=null,Jh(d,p.props,v,g),ep(d,p.children,g),Yn(),No(),qn()},ne=(d,p,g,v,w,E,P,T,x=!1)=>{const k=d&&d.children,B=d?d.shapeFlag:0,L=p.children,{patchFlag:j,shapeFlag:K}=p;if(j>0){if(j&128){Ct(k,L,g,v,w,E,P,T,x);return}else if(j&256){pt(k,L,g,v,w,E,P,T,x);return}}K&8?(B&16&&ke(k,w,E),L!==k&&u(g,L)):B&16?K&16?Ct(k,L,g,v,w,E,P,T,x):ke(k,w,E,!0):(B&8&&u(g,""),K&16&&V(L,g,v,w,E,P,T,x))},pt=(d,p,g,v,w,E,P,T,x)=>{d=d||Rn,p=p||Rn;const k=d.length,B=p.length,L=Math.min(k,B);let j;for(j=0;j<L;j++){const K=p[j]=x?Mt(p[j]):st(p[j]);A(d[j],K,g,null,w,E,P,T,x)}k>B?ke(d,w,E,!0,!1,L):V(p,g,v,w,E,P,T,x,L)},Ct=(d,p,g,v,w,E,P,T,x)=>{let k=0;const B=p.length;let L=d.length-1,j=B-1;for(;k<=L&&k<=j;){const K=d[k],X=p[k]=x?Mt(p[k]):st(p[k]);if(rn(K,X))A(K,X,g,null,w,E,P,T,x);else break;k++}for(;k<=L&&k<=j;){const K=d[L],X=p[j]=x?Mt(p[j]):st(p[j]);if(rn(K,X))A(K,X,g,null,w,E,P,T,x);else break;L--,j--}if(k>L){if(k<=j){const K=j+1,X=K<B?p[K].el:v;for(;k<=j;)A(null,p[k]=x?Mt(p[k]):st(p[k]),g,X,w,E,P,T,x),k++}}else if(k>j)for(;k<=L;)Re(d[k],w,E,!0),k++;else{const K=k,X=k,le=new Map;for(k=X;k<=j;k++){const Fe=p[k]=x?Mt(p[k]):st(p[k]);Fe.key!=null&&le.set(Fe.key,k)}let ae,ge=0;const We=j-X+1;let In=!1,Eo=0;const tr=new Array(We);for(k=0;k<We;k++)tr[k]=0;for(k=K;k<=L;k++){const Fe=d[k];if(ge>=We){Re(Fe,w,E,!0);continue}let nt;if(Fe.key!=null)nt=le.get(Fe.key);else for(ae=X;ae<=j;ae++)if(tr[ae-X]===0&&rn(Fe,p[ae])){nt=ae;break}nt===void 0?Re(Fe,w,E,!0):(tr[nt-X]=k+1,nt>=Eo?Eo=nt:In=!0,A(Fe,p[nt],g,null,w,E,P,T,x),ge++)}const Io=In?rp(tr):Rn;for(ae=Io.length-1,k=We-1;k>=0;k--){const Fe=X+k,nt=p[Fe],ko=Fe+1<B?p[Fe+1].el:v;tr[k]===0?A(null,nt,g,ko,w,E,P,T,x):In&&(ae<0||k!==Io[ae]?tt(nt,g,ko,2):ae--)}}},tt=(d,p,g,v,w=null)=>{const{el:E,type:P,transition:T,children:x,shapeFlag:k}=d;if(k&6){tt(d.component.subTree,p,g,v);return}if(k&128){d.suspense.move(p,g,v);return}if(k&64){P.move(d,p,g,S);return}if(P===it){r(E,p,g);for(let L=0;L<x.length;L++)tt(x[L],p,g,v);r(d.anchor,p,g);return}if(P===fs){O(d,p,g);return}if(v!==2&&k&1&&T)if(v===0)T.beforeEnter(E),r(E,p,g),Me(()=>T.enter(E),w);else{const{leave:L,delayLeave:j,afterLeave:K}=T,X=()=>r(E,p,g),le=()=>{L(E,()=>{X(),K&&K()})};j?j(E,X,le):le()}else r(E,p,g)},Re=(d,p,g,v=!1,w=!1)=>{const{type:E,props:P,ref:T,children:x,dynamicChildren:k,shapeFlag:B,patchFlag:L,dirs:j}=d;if(T!=null&&Ks(T,null,g,d,!0),B&256){p.ctx.deactivate(d);return}const K=B&1&&j,X=!fi(d);let le;if(X&&(le=P&&P.onVnodeBeforeUnmount)&&rt(le,p,d),B&6)Wr(d.component,g,v);else{if(B&128){d.suspense.unmount(g,v);return}K&&Jt(d,null,p,"beforeUnmount"),B&64?d.type.remove(d,p,g,w,S,v):k&&(E!==it||L>0&&L&64)?ke(k,p,g,!1,!0):(E===it&&L&384||!w&&B&16)&&ke(x,p,g),v&&wn(d)}(X&&(le=P&&P.onVnodeUnmounted)||K)&&Me(()=>{le&&rt(le,p,d),K&&Jt(d,null,p,"unmounted")},g)},wn=d=>{const{type:p,el:g,anchor:v,transition:w}=d;if(p===it){En(g,v);return}if(p===fs){C(d);return}const E=()=>{i(g),w&&!w.persisted&&w.afterLeave&&w.afterLeave()};if(d.shapeFlag&1&&w&&!w.persisted){const{leave:P,delayLeave:T}=w,x=()=>P(g,E);T?T(d.el,E,x):x()}else E()},En=(d,p)=>{let g;for(;d!==p;)g=h(d),i(d),d=g;i(p)},Wr=(d,p,g)=>{const{bum:v,scope:w,update:E,subTree:P,um:T}=d;v&&ui(v),w.stop(),E&&(E.active=!1,Re(P,d,p,g)),T&&Me(T,p),Me(()=>{d.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ke=(d,p,g,v=!1,w=!1,E=0)=>{for(let P=E;P<d.length;P++)Re(d[P],p,g,v,w)},_=d=>d.shapeFlag&6?_(d.component.subTree):d.shapeFlag&128?d.suspense.next():h(d.anchor||d.el),M=(d,p,g)=>{d==null?p._vnode&&Re(p._vnode,null,null,!0):A(p._vnode||null,d,p,null,null,null,g),No(),Zl(),p._vnode=d},S={p:A,um:Re,m:tt,r:wn,mt:Oe,mc:V,pc:ne,pbc:Z,n:_,o:e};let F,re;return t&&([F,re]=t(S)),{render:M,hydrate:F,createApp:qh(M,F)}}function Qt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function _u(e,t,n=!1){const r=e.children,i=t.children;if(z(r)&&z(i))for(let s=0;s<r.length;s++){const a=r[s];let o=i[s];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=i[s]=Mt(i[s]),o.el=a.el),n||_u(a,o)),o.type===Yi&&(o.el=a.el)}}function rp(e){const t=e.slice(),n=[0];let r,i,s,a,o;const c=e.length;for(r=0;r<c;r++){const l=e[r];if(l!==0){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}for(s=0,a=n.length-1;s<a;)o=s+a>>1,e[n[o]]<l?s=o+1:a=o;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}for(s=n.length,a=n[s-1];s-- >0;)n[s]=a,a=t[a];return n}const ip=e=>e.__isTeleport,it=Symbol.for("v-fgt"),Yi=Symbol.for("v-txt"),Qe=Symbol.for("v-cmt"),fs=Symbol.for("v-stc"),fr=[];let qe=null;function _e(e=!1){fr.push(qe=e?null:[])}function sp(){fr.pop(),qe=fr[fr.length-1]||null}let wr=1;function Wo(e){wr+=e}function wu(e){return e.dynamicChildren=wr>0?qe||Rn:null,sp(),wr>0&&qe&&qe.push(e),e}function Te(e,t,n,r,i,s){return wu($(e,t,n,r,i,s,!0))}function Gs(e,t,n,r,i){return wu(G(e,t,n,r,i,!0))}function Ys(e){return e?e.__v_isVNode===!0:!1}function rn(e,t){return e.type===t.type&&e.key===t.key}const qi="__vInternal",Eu=({key:e})=>e??null,hi=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?be(e)||xe(e)||Y(e)?{i:Be,r:e,k:t,f:!!n}:e:null);function $(e,t=null,n=null,r=0,i=null,s=e===it?0:1,a=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Eu(t),ref:t&&hi(t),scopeId:nu,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:r,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Be};return o?(Ba(c,n),s&128&&e.normalize(c)):n&&(c.shapeFlag|=be(n)?8:16),wr>0&&!a&&qe&&(c.patchFlag>0||s&6)&&c.patchFlag!==32&&qe.push(c),c}const G=ap;function ap(e,t=null,n=null,r=0,i=null,s=!1){if((!e||e===Bh)&&(e=Qe),Ys(e)){const o=Kt(e,t,!0);return n&&Ba(o,n),wr>0&&!s&&qe&&(o.shapeFlag&6?qe[qe.indexOf(e)]=o:qe.push(o)),o.patchFlag|=-2,o}if(yp(e)&&(e=e.__vccOpts),t){t=op(t);let{class:o,style:c}=t;o&&!be(o)&&(t.class=Ta(o)),he(c)&&(Vl(c)&&!z(c)&&(c=ve({},c)),t.style=Aa(c))}const a=be(e)?1:Ah(e)?128:ip(e)?64:he(e)?4:Y(e)?2:0;return $(e,t,n,r,i,a,s,!0)}function op(e){return e?Vl(e)||qi in e?ve({},e):e:null}function Kt(e,t,n=!1){const{props:r,ref:i,patchFlag:s,children:a}=e,o=t?lp(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:o,key:o&&Eu(o),ref:t&&t.ref?n&&i?z(i)?i.concat(hi(t)):[i,hi(t)]:hi(t):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==it?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Kt(e.ssContent),ssFallback:e.ssFallback&&Kt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function cp(e=" ",t=0){return G(Yi,null,e,t)}function Ae(e="",t=!1){return t?(_e(),Gs(Qe,null,e)):G(Qe,null,e)}function st(e){return e==null||typeof e=="boolean"?G(Qe):z(e)?G(it,null,e.slice()):typeof e=="object"?Mt(e):G(Yi,null,String(e))}function Mt(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Kt(e)}function Ba(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(z(t))n=16;else if(typeof t=="object")if(r&65){const i=t.default;i&&(i._c&&(i._d=!1),Ba(e,i()),i._c&&(i._d=!0));return}else{n=32;const i=t._;!i&&!(qi in t)?t._ctx=Be:i===3&&Be&&(Be.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else Y(t)?(t={default:t,_ctx:Be},n=32):(t=String(t),r&64?(n=16,t=[cp(t)]):n=8);e.children=t,e.shapeFlag|=n}function lp(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const i in r)if(i==="class")t.class!==r.class&&(t.class=Ta([t.class,r.class]));else if(i==="style")t.style=Aa([t.style,r.style]);else if($i(i)){const s=t[i],a=r[i];a&&s!==a&&!(z(s)&&s.includes(a))&&(t[i]=s?[].concat(s,a):a)}else i!==""&&(t[i]=r[i])}return t}function rt(e,t,n,r=null){ze(e,t,7,[n,r])}const up=pu();let fp=0;function dp(e,t,n){const r=e.type,i=(t?t.appContext:e.appContext)||up,s={uid:fp++,vnode:e,type:r,parent:t,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,scope:new Md(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(i.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:gu(r,i),emitsOptions:tu(r,i),emit:null,emitted:null,propsDefaults:ue,inheritAttrs:r.inheritAttrs,ctx:ue,data:ue,props:ue,attrs:ue,slots:ue,refs:ue,setupState:ue,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=t?t.root:s,s.emit=_h.bind(null,s),e.ce&&e.ce(s),s}let Ee=null;const hp=()=>Ee||Be;let ja,kn,Ko="__VUE_INSTANCE_SETTERS__";(kn=Ms()[Ko])||(kn=Ms()[Ko]=[]),kn.push(e=>Ee=e),ja=e=>{kn.length>1?kn.forEach(t=>t(e)):kn[0](e)};const Hn=e=>{ja(e),e.scope.on()},dn=()=>{Ee&&Ee.scope.off(),ja(null)};function Iu(e){return e.vnode.shapeFlag&4}let Er=!1;function pp(e,t=!1){Er=t;const{props:n,children:r}=e.vnode,i=Iu(e);Xh(e,n,i,t),Zh(e,r);const s=i?mp(e,t):void 0;return Er=!1,s}function mp(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Wl(new Proxy(e.ctx,Hh));const{setup:r}=n;if(r){const i=e.setupContext=r.length>1?vp(e):null;Hn(e),Yn();const s=Ht(r,e,0,[e.props,i]);if(qn(),dn(),Cl(s)){if(s.then(dn,dn),t)return s.then(a=>{Go(e,a,t)}).catch(a=>{Vi(a,e,0)});e.asyncDep=s}else Go(e,s,t)}else ku(e,t)}function Go(e,t,n){Y(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:he(t)&&(e.setupState=ql(t)),ku(e,n)}let Yo;function ku(e,t,n){const r=e.type;if(!e.render){if(!t&&Yo&&!r.render){const i=r.template||Fa(e).template;if(i){const{isCustomElement:s,compilerOptions:a}=e.appContext.config,{delimiters:o,compilerOptions:c}=r,l=ve(ve({isCustomElement:s,delimiters:o},a),c);r.render=Yo(i,l)}}e.render=r.render||Je}Hn(e),Yn(),zh(e),qn(),dn()}function gp(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return De(e,"get","$attrs"),t[n]}}))}function vp(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return gp(e)},slots:e.slots,emit:e.emit,expose:t}}function Xi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(ql(Wl(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in ur)return ur[n](e)},has(t,n){return n in t||n in ur}}))}function bp(e,t=!0){return Y(e)?e.displayName||e.name:e.name||t&&e.__name}function yp(e){return Y(e)&&"__vccOpts"in e}const Ie=(e,t)=>ph(e,t,Er);function Ji(e,t,n){const r=arguments.length;return r===2?he(t)&&!z(t)?Ys(t)?G(e,null,[t]):G(e,t):G(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Ys(n)&&(n=[n]),G(e,t,n))}const _p=Symbol.for("v-scx"),wp=()=>ct(_p),Ep="3.3.4",Ip="http://www.w3.org/2000/svg",sn=typeof document<"u"?document:null,qo=sn&&sn.createElement("template"),kp={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?sn.createElementNS(Ip,e):sn.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&i.setAttribute("multiple",r.multiple),i},createText:e=>sn.createTextNode(e),createComment:e=>sn.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>sn.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,i,s){const a=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling))for(;t.insertBefore(i.cloneNode(!0),n),!(i===s||!(i=i.nextSibling)););else{qo.innerHTML=r?`<svg>${e}</svg>`:e;const o=qo.content;if(r){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}t.insertBefore(o,n)}return[a?a.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Ap(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Tp(e,t,n){const r=e.style,i=be(n);if(n&&!i){if(t&&!be(t))for(const s in t)n[s]==null&&qs(r,s,"");for(const s in n)qs(r,s,n[s])}else{const s=r.display;i?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=s)}}const Xo=/\s*!important$/;function qs(e,t,n){if(z(n))n.forEach(r=>qs(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Cp(e,t);Xo.test(n)?e.setProperty(Gn(r),n.replace(Xo,""),"important"):e[r]=n}}const Jo=["Webkit","Moz","ms"],ds={};function Cp(e,t){const n=ds[t];if(n)return n;let r=ft(t);if(r!=="filter"&&r in e)return ds[t]=r;r=Hi(r);for(let i=0;i<Jo.length;i++){const s=Jo[i]+r;if(s in e)return ds[t]=s}return t}const Qo="http://www.w3.org/1999/xlink";function xp(e,t,n,r,i){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Qo,t.slice(6,t.length)):e.setAttributeNS(Qo,t,n);else{const s=Nd(t);n==null||s&&!Ol(n)?e.removeAttribute(t):e.setAttribute(t,s?"":n)}}function Sp(e,t,n,r,i,s,a){if(t==="innerHTML"||t==="textContent"){r&&a(r,i,s),e[t]=n??"";return}const o=e.tagName;if(t==="value"&&o!=="PROGRESS"&&!o.includes("-")){e._value=n;const l=o==="OPTION"?e.getAttribute("value"):e.value,u=n??"";l!==u&&(e.value=u),n==null&&e.removeAttribute(t);return}let c=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ol(n):n==null&&l==="string"?(n="",c=!0):l==="number"&&(n=0,c=!0)}try{e[t]=n}catch{}c&&e.removeAttribute(t)}function Cn(e,t,n,r){e.addEventListener(t,n,r)}function Op(e,t,n,r){e.removeEventListener(t,n,r)}function Pp(e,t,n,r,i=null){const s=e._vei||(e._vei={}),a=s[t];if(r&&a)a.value=r;else{const[o,c]=Rp(t);if(r){const l=s[t]=Lp(r,i);Cn(e,o,l,c)}else a&&(Op(e,o,a,c),s[t]=void 0)}}const Zo=/(?:Once|Passive|Capture)$/;function Rp(e){let t;if(Zo.test(e)){t={};let r;for(;r=e.match(Zo);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Gn(e.slice(2)),t]}let hs=0;const Np=Promise.resolve(),Mp=()=>hs||(Np.then(()=>hs=0),hs=Date.now());function Lp(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;ze(Dp(r,n.value),t,5,[r])};return n.value=e,n.attached=Mp(),n}function Dp(e,t){if(z(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>i=>!i._stopped&&r&&r(i))}else return t}const ec=/^on[a-z]/,Up=(e,t,n,r,i=!1,s,a,o,c)=>{t==="class"?Ap(e,r,i):t==="style"?Tp(e,n,r):$i(t)?wa(t)||Pp(e,t,n,r,a):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Fp(e,t,r,i))?Sp(e,t,r,s,a,o,c):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),xp(e,t,r,i))};function Fp(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ec.test(t)&&Y(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ec.test(t)&&be(n)?!1:t in e}const St="transition",nr="animation",Ha=(e,{slots:t})=>Ji(Oh,$p(e),t);Ha.displayName="Transition";const Au={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};Ha.props=ve({},su,Au);const Zt=(e,t=[])=>{z(e)?e.forEach(n=>n(...t)):e&&e(...t)},tc=e=>e?z(e)?e.some(t=>t.length>1):e.length>1:!1;function $p(e){const t={};for(const U in e)U in Au||(t[U]=e[U]);if(e.css===!1)return t;const{name:n="v",type:r,duration:i,enterFromClass:s=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:o=`${n}-enter-to`,appearFromClass:c=s,appearActiveClass:l=a,appearToClass:u=o,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:h=`${n}-leave-active`,leaveToClass:m=`${n}-leave-to`}=e,I=Bp(i),A=I&&I[0],R=I&&I[1],{onBeforeEnter:b,onEnter:y,onEnterCancelled:O,onLeave:C,onLeaveCancelled:H,onBeforeAppear:J=b,onAppear:te=y,onAppearCancelled:V=O}=t,q=(U,ie,Oe)=>{en(U,ie?u:o),en(U,ie?l:a),Oe&&Oe()},Z=(U,ie)=>{U._isLeaving=!1,en(U,f),en(U,m),en(U,h),ie&&ie()},ye=U=>(ie,Oe)=>{const ht=U?te:y,me=()=>q(ie,U,Oe);Zt(ht,[ie,me]),nc(()=>{en(ie,U?c:s),Ot(ie,U?u:o),tc(ht)||rc(ie,r,A,me)})};return ve(t,{onBeforeEnter(U){Zt(b,[U]),Ot(U,s),Ot(U,a)},onBeforeAppear(U){Zt(J,[U]),Ot(U,c),Ot(U,l)},onEnter:ye(!1),onAppear:ye(!0),onLeave(U,ie){U._isLeaving=!0;const Oe=()=>Z(U,ie);Ot(U,f),zp(),Ot(U,h),nc(()=>{U._isLeaving&&(en(U,f),Ot(U,m),tc(C)||rc(U,r,R,Oe))}),Zt(C,[U,Oe])},onEnterCancelled(U){q(U,!1),Zt(O,[U])},onAppearCancelled(U){q(U,!0),Zt(V,[U])},onLeaveCancelled(U){Z(U),Zt(H,[U])}})}function Bp(e){if(e==null)return null;if(he(e))return[ps(e.enter),ps(e.leave)];{const t=ps(e);return[t,t]}}function ps(e){return Cd(e)}function Ot(e,t){t.split(/\s+/).forEach(n=>n&&e.classList.add(n)),(e._vtc||(e._vtc=new Set)).add(t)}function en(e,t){t.split(/\s+/).forEach(r=>r&&e.classList.remove(r));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function nc(e){requestAnimationFrame(()=>{requestAnimationFrame(e)})}let jp=0;function rc(e,t,n,r){const i=e._endId=++jp,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:a,timeout:o,propCount:c}=Hp(e,t);if(!a)return r();const l=a+"end";let u=0;const f=()=>{e.removeEventListener(l,h),s()},h=m=>{m.target===e&&++u>=c&&f()};setTimeout(()=>{u<c&&f()},o+1),e.addEventListener(l,h)}function Hp(e,t){const n=window.getComputedStyle(e),r=I=>(n[I]||"").split(", "),i=r(`${St}Delay`),s=r(`${St}Duration`),a=ic(i,s),o=r(`${nr}Delay`),c=r(`${nr}Duration`),l=ic(o,c);let u=null,f=0,h=0;t===St?a>0&&(u=St,f=a,h=s.length):t===nr?l>0&&(u=nr,f=l,h=c.length):(f=Math.max(a,l),u=f>0?a>l?St:nr:null,h=u?u===St?s.length:c.length:0);const m=u===St&&/\b(transform|all)(,|$)/.test(r(`${St}Property`).toString());return{type:u,timeout:f,propCount:h,hasTransform:m}}function ic(e,t){for(;e.length<t.length;)e=e.concat(e);return Math.max(...t.map((n,r)=>sc(n)+sc(e[r])))}function sc(e){return Number(e.slice(0,-1).replace(",","."))*1e3}function zp(){return document.body.offsetHeight}const ac=e=>{const t=e.props["onUpdate:modelValue"]||!1;return z(t)?n=>ui(t,n):t};function Vp(e){e.target.composing=!0}function oc(e){const t=e.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const Lw={created(e,{modifiers:{lazy:t,trim:n,number:r}},i){e._assign=ac(i);const s=r||i.props&&i.props.type==="number";Cn(e,t?"change":"input",a=>{if(a.target.composing)return;let o=e.value;n&&(o=o.trim()),s&&(o=Ns(o)),e._assign(o)}),n&&Cn(e,"change",()=>{e.value=e.value.trim()}),t||(Cn(e,"compositionstart",Vp),Cn(e,"compositionend",oc),Cn(e,"change",oc))},mounted(e,{value:t}){e.value=t??""},beforeUpdate(e,{value:t,modifiers:{lazy:n,trim:r,number:i}},s){if(e._assign=ac(s),e.composing||document.activeElement===e&&e.type!=="range"&&(n||r&&e.value.trim()===t||(i||e.type==="number")&&Ns(e.value)===t))return;const a=t??"";e.value!==a&&(e.value=a)}},Wp=["ctrl","shift","alt","meta"],Kp={stop:e=>e.stopPropagation(),prevent:e=>e.preventDefault(),self:e=>e.target!==e.currentTarget,ctrl:e=>!e.ctrlKey,shift:e=>!e.shiftKey,alt:e=>!e.altKey,meta:e=>!e.metaKey,left:e=>"button"in e&&e.button!==0,middle:e=>"button"in e&&e.button!==1,right:e=>"button"in e&&e.button!==2,exact:(e,t)=>Wp.some(n=>e[`${n}Key`]&&!t.includes(n))},Dw=(e,t)=>(n,...r)=>{for(let i=0;i<t.length;i++){const s=Kp[t[i]];if(s&&s(n,t))return}return e(n,...r)},Uw={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):rr(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!=!n&&(r?t?(r.beforeEnter(e),rr(e,!0),r.enter(e)):r.leave(e,()=>{rr(e,!1)}):rr(e,t))},beforeUnmount(e,{value:t}){rr(e,t)}};function rr(e,t){e.style.display=t?e._vod:"none"}const Gp=ve({patchProp:Up},kp);let cc;function Yp(){return cc||(cc=tp(Gp))}const qp=(...e)=>{const t=Yp().createApp(...e),{mount:n}=t;return t.mount=r=>{const i=Xp(r);if(!i)return;const s=t._component;!Y(s)&&!s.render&&!s.template&&(s.template=i.innerHTML),i.innerHTML="";const a=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),a},t};function Xp(e){return be(e)?document.querySelector(e):e}function Jp(){return Tu().__VUE_DEVTOOLS_GLOBAL_HOOK__}function Tu(){return typeof navigator<"u"&&typeof window<"u"?window:typeof global<"u"?global:{}}const Qp=typeof Proxy=="function",Zp="devtools-plugin:setup",em="plugin:settings:set";let An,Xs;function tm(){var e;return An!==void 0||(typeof window<"u"&&window.performance?(An=!0,Xs=window.performance):typeof global<"u"&&(!((e=global.perf_hooks)===null||e===void 0)&&e.performance)?(An=!0,Xs=global.perf_hooks.performance):An=!1),An}function nm(){return tm()?Xs.now():Date.now()}class rm{constructor(t,n){this.target=null,this.targetQueue=[],this.onQueue=[],this.plugin=t,this.hook=n;const r={};if(t.settings)for(const a in t.settings){const o=t.settings[a];r[a]=o.defaultValue}const i=`__vue-devtools-plugin-settings__${t.id}`;let s=Object.assign({},r);try{const a=localStorage.getItem(i),o=JSON.parse(a);Object.assign(s,o)}catch{}this.fallbacks={getSettings(){return s},setSettings(a){try{localStorage.setItem(i,JSON.stringify(a))}catch{}s=a},now(){return nm()}},n&&n.on(em,(a,o)=>{a===this.plugin.id&&this.fallbacks.setSettings(o)}),this.proxiedOn=new Proxy({},{get:(a,o)=>this.target?this.target.on[o]:(...c)=>{this.onQueue.push({method:o,args:c})}}),this.proxiedTarget=new Proxy({},{get:(a,o)=>this.target?this.target[o]:o==="on"?this.proxiedOn:Object.keys(this.fallbacks).includes(o)?(...c)=>(this.targetQueue.push({method:o,args:c,resolve:()=>{}}),this.fallbacks[o](...c)):(...c)=>new Promise(l=>{this.targetQueue.push({method:o,args:c,resolve:l})})})}async setRealTarget(t){this.target=t;for(const n of this.onQueue)this.target.on[n.method](...n.args);for(const n of this.targetQueue)n.resolve(await this.target[n.method](...n.args))}}function im(e,t){const n=e,r=Tu(),i=Jp(),s=Qp&&n.enableEarlyProxy;if(i&&(r.__VUE_DEVTOOLS_PLUGIN_API_AVAILABLE__||!s))i.emit(Zp,e,t);else{const a=s?new rm(n,i):null;(r.__VUE_DEVTOOLS_PLUGINS__=r.__VUE_DEVTOOLS_PLUGINS__||[]).push({pluginDescriptor:n,setupFn:t,proxy:a}),a&&t(a.proxiedTarget)}}/*!
 * vuex v4.0.2
 * (c) 2021 Evan You
 * @license MIT
 */var Cu="store";function sm(e){return e===void 0&&(e=null),ct(e!==null?e:Cu)}function Xn(e,t){Object.keys(e).forEach(function(n){return t(e[n],n)})}function xu(e){return e!==null&&typeof e=="object"}function am(e){return e&&typeof e.then=="function"}function om(e,t){return function(){return e(t)}}function Su(e,t,n){return t.indexOf(e)<0&&(n&&n.prepend?t.unshift(e):t.push(e)),function(){var r=t.indexOf(e);r>-1&&t.splice(r,1)}}function Ou(e,t){e._actions=Object.create(null),e._mutations=Object.create(null),e._wrappedGetters=Object.create(null),e._modulesNamespaceMap=Object.create(null);var n=e.state;Qi(e,n,[],e._modules.root,!0),za(e,n,t)}function za(e,t,n){var r=e._state;e.getters={},e._makeLocalGettersCache=Object.create(null);var i=e._wrappedGetters,s={};Xn(i,function(a,o){s[o]=om(a,e),Object.defineProperty(e.getters,o,{get:function(){return s[o]()},enumerable:!0})}),e._state=Mr({data:t}),e.strict&&dm(e),r&&n&&e._withCommit(function(){r.data=null})}function Qi(e,t,n,r,i){var s=!n.length,a=e._modules.getNamespace(n);if(r.namespaced&&(e._modulesNamespaceMap[a],e._modulesNamespaceMap[a]=r),!s&&!i){var o=Va(t,n.slice(0,-1)),c=n[n.length-1];e._withCommit(function(){o[c]=r.state})}var l=r.context=cm(e,a,n);r.forEachMutation(function(u,f){var h=a+f;lm(e,h,u,l)}),r.forEachAction(function(u,f){var h=u.root?f:a+f,m=u.handler||u;um(e,h,m,l)}),r.forEachGetter(function(u,f){var h=a+f;fm(e,h,u,l)}),r.forEachChild(function(u,f){Qi(e,t,n.concat(f),u,i)})}function cm(e,t,n){var r=t==="",i={dispatch:r?e.dispatch:function(s,a,o){var c=Ai(s,a,o),l=c.payload,u=c.options,f=c.type;return(!u||!u.root)&&(f=t+f),e.dispatch(f,l)},commit:r?e.commit:function(s,a,o){var c=Ai(s,a,o),l=c.payload,u=c.options,f=c.type;(!u||!u.root)&&(f=t+f),e.commit(f,l,u)}};return Object.defineProperties(i,{getters:{get:r?function(){return e.getters}:function(){return Pu(e,t)}},state:{get:function(){return Va(e.state,n)}}}),i}function Pu(e,t){if(!e._makeLocalGettersCache[t]){var n={},r=t.length;Object.keys(e.getters).forEach(function(i){if(i.slice(0,r)===t){var s=i.slice(r);Object.defineProperty(n,s,{get:function(){return e.getters[i]},enumerable:!0})}}),e._makeLocalGettersCache[t]=n}return e._makeLocalGettersCache[t]}function lm(e,t,n,r){var i=e._mutations[t]||(e._mutations[t]=[]);i.push(function(a){n.call(e,r.state,a)})}function um(e,t,n,r){var i=e._actions[t]||(e._actions[t]=[]);i.push(function(a){var o=n.call(e,{dispatch:r.dispatch,commit:r.commit,getters:r.getters,state:r.state,rootGetters:e.getters,rootState:e.state},a);return am(o)||(o=Promise.resolve(o)),e._devtoolHook?o.catch(function(c){throw e._devtoolHook.emit("vuex:error",c),c}):o})}function fm(e,t,n,r){e._wrappedGetters[t]||(e._wrappedGetters[t]=function(s){return n(r.state,r.getters,s.state,s.getters)})}function dm(e){fn(function(){return e._state.data},function(){},{deep:!0,flush:"sync"})}function Va(e,t){return t.reduce(function(n,r){return n[r]},e)}function Ai(e,t,n){return xu(e)&&e.type&&(n=t,t=e,e=e.type),{type:e,payload:t,options:n}}var hm="vuex bindings",lc="vuex:mutations",ms="vuex:actions",Tn="vuex",pm=0;function mm(e,t){im({id:"org.vuejs.vuex",app:e,label:"Vuex",homepage:"https://next.vuex.vuejs.org/",logo:"https://vuejs.org/images/icons/favicon-96x96.png",packageName:"vuex",componentStateTypes:[hm]},function(n){n.addTimelineLayer({id:lc,label:"Vuex Mutations",color:uc}),n.addTimelineLayer({id:ms,label:"Vuex Actions",color:uc}),n.addInspector({id:Tn,label:"Vuex",icon:"storage",treeFilterPlaceholder:"Filter stores..."}),n.on.getInspectorTree(function(r){if(r.app===e&&r.inspectorId===Tn)if(r.filter){var i=[];Lu(i,t._modules.root,r.filter,""),r.rootNodes=i}else r.rootNodes=[Mu(t._modules.root,"")]}),n.on.getInspectorState(function(r){if(r.app===e&&r.inspectorId===Tn){var i=r.nodeId;Pu(t,i),r.state=bm(_m(t._modules,i),i==="root"?t.getters:t._makeLocalGettersCache,i)}}),n.on.editInspectorState(function(r){if(r.app===e&&r.inspectorId===Tn){var i=r.nodeId,s=r.path;i!=="root"&&(s=i.split("/").filter(Boolean).concat(s)),t._withCommit(function(){r.set(t._state.data,s,r.state.value)})}}),t.subscribe(function(r,i){var s={};r.payload&&(s.payload=r.payload),s.state=i,n.notifyComponentUpdate(),n.sendInspectorTree(Tn),n.sendInspectorState(Tn),n.addTimelineEvent({layerId:lc,event:{time:Date.now(),title:r.type,data:s}})}),t.subscribeAction({before:function(r,i){var s={};r.payload&&(s.payload=r.payload),r._id=pm++,r._time=Date.now(),s.state=i,n.addTimelineEvent({layerId:ms,event:{time:r._time,title:r.type,groupId:r._id,subtitle:"start",data:s}})},after:function(r,i){var s={},a=Date.now()-r._time;s.duration={_custom:{type:"duration",display:a+"ms",tooltip:"Action duration",value:a}},r.payload&&(s.payload=r.payload),s.state=i,n.addTimelineEvent({layerId:ms,event:{time:Date.now(),title:r.type,groupId:r._id,subtitle:"end",data:s}})}})})}var uc=8702998,gm=6710886,vm=16777215,Ru={label:"namespaced",textColor:vm,backgroundColor:gm};function Nu(e){return e&&e!=="root"?e.split("/").slice(-2,-1)[0]:"Root"}function Mu(e,t){return{id:t||"root",label:Nu(t),tags:e.namespaced?[Ru]:[],children:Object.keys(e._children).map(function(n){return Mu(e._children[n],t+n+"/")})}}function Lu(e,t,n,r){r.includes(n)&&e.push({id:r||"root",label:r.endsWith("/")?r.slice(0,r.length-1):r||"Root",tags:t.namespaced?[Ru]:[]}),Object.keys(t._children).forEach(function(i){Lu(e,t._children[i],n,r+i+"/")})}function bm(e,t,n){t=n==="root"?t:t[n];var r=Object.keys(t),i={state:Object.keys(e.state).map(function(a){return{key:a,editable:!0,value:e.state[a]}})};if(r.length){var s=ym(t);i.getters=Object.keys(s).map(function(a){return{key:a.endsWith("/")?Nu(a):a,editable:!1,value:Js(function(){return s[a]})}})}return i}function ym(e){var t={};return Object.keys(e).forEach(function(n){var r=n.split("/");if(r.length>1){var i=t,s=r.pop();r.forEach(function(a){i[a]||(i[a]={_custom:{value:{},display:a,tooltip:"Module",abstract:!0}}),i=i[a]._custom.value}),i[s]=Js(function(){return e[n]})}else t[n]=Js(function(){return e[n]})}),t}function _m(e,t){var n=t.split("/").filter(function(r){return r});return n.reduce(function(r,i,s){var a=r[i];if(!a)throw new Error('Missing module "'+i+'" for path "'+t+'".');return s===n.length-1?a:a._children},t==="root"?e:e.root._children)}function Js(e){try{return e()}catch(t){return t}}var et=function(t,n){this.runtime=n,this._children=Object.create(null),this._rawModule=t;var r=t.state;this.state=(typeof r=="function"?r():r)||{}},Du={namespaced:{configurable:!0}};Du.namespaced.get=function(){return!!this._rawModule.namespaced};et.prototype.addChild=function(t,n){this._children[t]=n};et.prototype.removeChild=function(t){delete this._children[t]};et.prototype.getChild=function(t){return this._children[t]};et.prototype.hasChild=function(t){return t in this._children};et.prototype.update=function(t){this._rawModule.namespaced=t.namespaced,t.actions&&(this._rawModule.actions=t.actions),t.mutations&&(this._rawModule.mutations=t.mutations),t.getters&&(this._rawModule.getters=t.getters)};et.prototype.forEachChild=function(t){Xn(this._children,t)};et.prototype.forEachGetter=function(t){this._rawModule.getters&&Xn(this._rawModule.getters,t)};et.prototype.forEachAction=function(t){this._rawModule.actions&&Xn(this._rawModule.actions,t)};et.prototype.forEachMutation=function(t){this._rawModule.mutations&&Xn(this._rawModule.mutations,t)};Object.defineProperties(et.prototype,Du);var yn=function(t){this.register([],t,!1)};yn.prototype.get=function(t){return t.reduce(function(n,r){return n.getChild(r)},this.root)};yn.prototype.getNamespace=function(t){var n=this.root;return t.reduce(function(r,i){return n=n.getChild(i),r+(n.namespaced?i+"/":"")},"")};yn.prototype.update=function(t){Uu([],this.root,t)};yn.prototype.register=function(t,n,r){var i=this;r===void 0&&(r=!0);var s=new et(n,r);if(t.length===0)this.root=s;else{var a=this.get(t.slice(0,-1));a.addChild(t[t.length-1],s)}n.modules&&Xn(n.modules,function(o,c){i.register(t.concat(c),o,r)})};yn.prototype.unregister=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1],i=n.getChild(r);i&&i.runtime&&n.removeChild(r)};yn.prototype.isRegistered=function(t){var n=this.get(t.slice(0,-1)),r=t[t.length-1];return n?n.hasChild(r):!1};function Uu(e,t,n){if(t.update(n),n.modules)for(var r in n.modules){if(!t.getChild(r))return;Uu(e.concat(r),t.getChild(r),n.modules[r])}}function wm(e){return new Ue(e)}var Ue=function(t){var n=this;t===void 0&&(t={});var r=t.plugins;r===void 0&&(r=[]);var i=t.strict;i===void 0&&(i=!1);var s=t.devtools;this._committing=!1,this._actions=Object.create(null),this._actionSubscribers=[],this._mutations=Object.create(null),this._wrappedGetters=Object.create(null),this._modules=new yn(t),this._modulesNamespaceMap=Object.create(null),this._subscribers=[],this._makeLocalGettersCache=Object.create(null),this._devtools=s;var a=this,o=this,c=o.dispatch,l=o.commit;this.dispatch=function(h,m){return c.call(a,h,m)},this.commit=function(h,m,I){return l.call(a,h,m,I)},this.strict=i;var u=this._modules.root.state;Qi(this,u,[],this._modules.root),za(this,u),r.forEach(function(f){return f(n)})},Wa={state:{configurable:!0}};Ue.prototype.install=function(t,n){t.provide(n||Cu,this),t.config.globalProperties.$store=this;var r=this._devtools!==void 0?this._devtools:!1;r&&mm(t,this)};Wa.state.get=function(){return this._state.data};Wa.state.set=function(e){};Ue.prototype.commit=function(t,n,r){var i=this,s=Ai(t,n,r),a=s.type,o=s.payload,c={type:a,payload:o},l=this._mutations[a];l&&(this._withCommit(function(){l.forEach(function(f){f(o)})}),this._subscribers.slice().forEach(function(u){return u(c,i.state)}))};Ue.prototype.dispatch=function(t,n){var r=this,i=Ai(t,n),s=i.type,a=i.payload,o={type:s,payload:a},c=this._actions[s];if(c){try{this._actionSubscribers.slice().filter(function(u){return u.before}).forEach(function(u){return u.before(o,r.state)})}catch{}var l=c.length>1?Promise.all(c.map(function(u){return u(a)})):c[0](a);return new Promise(function(u,f){l.then(function(h){try{r._actionSubscribers.filter(function(m){return m.after}).forEach(function(m){return m.after(o,r.state)})}catch{}u(h)},function(h){try{r._actionSubscribers.filter(function(m){return m.error}).forEach(function(m){return m.error(o,r.state,h)})}catch{}f(h)})})}};Ue.prototype.subscribe=function(t,n){return Su(t,this._subscribers,n)};Ue.prototype.subscribeAction=function(t,n){var r=typeof t=="function"?{before:t}:t;return Su(r,this._actionSubscribers,n)};Ue.prototype.watch=function(t,n,r){var i=this;return fn(function(){return t(i.state,i.getters)},n,Object.assign({},r))};Ue.prototype.replaceState=function(t){var n=this;this._withCommit(function(){n._state.data=t})};Ue.prototype.registerModule=function(t,n,r){r===void 0&&(r={}),typeof t=="string"&&(t=[t]),this._modules.register(t,n),Qi(this,this.state,t,this._modules.get(t),r.preserveState),za(this,this.state)};Ue.prototype.unregisterModule=function(t){var n=this;typeof t=="string"&&(t=[t]),this._modules.unregister(t),this._withCommit(function(){var r=Va(n.state,t.slice(0,-1));delete r[t[t.length-1]]}),Ou(this)};Ue.prototype.hasModule=function(t){return typeof t=="string"&&(t=[t]),this._modules.isRegistered(t)};Ue.prototype.hotUpdate=function(t){this._modules.update(t),Ou(this,!0)};Ue.prototype._withCommit=function(t){var n=this._committing;this._committing=!0,t(),this._committing=n};Object.defineProperties(Ue.prototype,Wa);var Fu=km(function(e,t){var n={};return Em(t).forEach(function(r){var i=r.key,s=r.val;n[i]=function(){var o=this.$store.state,c=this.$store.getters;if(e){var l=Am(this.$store,"mapState",e);if(!l)return;o=l.context.state,c=l.context.getters}return typeof s=="function"?s.call(this,o,c):o[s]},n[i].vuex=!0}),n});function Em(e){return Im(e)?Array.isArray(e)?e.map(function(t){return{key:t,val:t}}):Object.keys(e).map(function(t){return{key:t,val:e[t]}}):[]}function Im(e){return Array.isArray(e)||xu(e)}function km(e){return function(t,n){return typeof t!="string"?(n=t,t=""):t.charAt(t.length-1)!=="/"&&(t+="/"),e(t,n)}}function Am(e,t,n){var r=e._modulesNamespaceMap[n];return r}/**
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
 */const $u=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=i&63|128):(i&64512)===55296&&r+1<e.length&&(e.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(e.charCodeAt(++r)&1023),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=i&63|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=i&63|128)}return t},Tm=function(e){const t=[];let n=0,r=0;for(;n<e.length;){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=e[n++],a=e[n++],o=e[n++],c=((i&7)<<18|(s&63)<<12|(a&63)<<6|o&63)-65536;t[r++]=String.fromCharCode(55296+(c>>10)),t[r++]=String.fromCharCode(56320+(c&1023))}else{const s=e[n++],a=e[n++];t[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|a&63)}}return t.join("")},Bu={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const s=e[i],a=i+1<e.length,o=a?e[i+1]:0,c=i+2<e.length,l=c?e[i+2]:0,u=s>>2,f=(s&3)<<4|o>>4;let h=(o&15)<<2|l>>6,m=l&63;c||(m=64,a||(h=64)),r.push(n[u],n[f],n[h],n[m])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray($u(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):Tm(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const s=n[e.charAt(i++)],o=i<e.length?n[e.charAt(i)]:0;++i;const l=i<e.length?n[e.charAt(i)]:64;++i;const f=i<e.length?n[e.charAt(i)]:64;if(++i,s==null||o==null||l==null||f==null)throw new Cm;const h=s<<2|o>>4;if(r.push(h),l!==64){const m=o<<4&240|l>>2;if(r.push(m),f!==64){const I=l<<6&192|f;r.push(I)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};class Cm extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const xm=function(e){const t=$u(e);return Bu.encodeByteArray(t,!0)},ju=function(e){return xm(e).replace(/\./g,"")},Hu=function(e){try{return Bu.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};/**
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
 */function Sm(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Om=()=>Sm().__FIREBASE_DEFAULTS__,Pm=()=>{if(typeof process>"u"||typeof process.env>"u")return;const e={}.__FIREBASE_DEFAULTS__;if(e)return JSON.parse(e)},Rm=()=>{if(typeof document>"u")return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const t=e&&Hu(e[1]);return t&&JSON.parse(t)},Ka=()=>{try{return Om()||Pm()||Rm()}catch(e){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`);return}},Nm=e=>{var t,n;return(n=(t=Ka())===null||t===void 0?void 0:t.emulatorHosts)===null||n===void 0?void 0:n[e]},zu=()=>{var e;return(e=Ka())===null||e===void 0?void 0:e.config},Vu=e=>{var t;return(t=Ka())===null||t===void 0?void 0:t[`_${e}`]};/**
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
 */class Mm{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((t,n)=>{this.resolve=t,this.reject=n})}wrapCallback(t){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof t=="function"&&(this.promise.catch(()=>{}),t.length===1?t(n):t(n,r))}}}/**
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
 */function Se(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Lm(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Se())}function Dm(){const e=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof e=="object"&&e.id!==void 0}function Um(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Fm(){const e=Se();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function $m(){try{return typeof indexedDB=="object"}catch{return!1}}function Bm(){return new Promise((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;t(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){t(n)}})}/**
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
 */const jm="FirebaseError";class Xt extends Error{constructor(t,n,r){super(n),this.code=t,this.customData=r,this.name=jm,Object.setPrototypeOf(this,Xt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lr.prototype.create)}}class Lr{constructor(t,n,r){this.service=t,this.serviceName=n,this.errors=r}create(t,...n){const r=n[0]||{},i=`${this.service}/${t}`,s=this.errors[t],a=s?Hm(s,r):"Error",o=`${this.serviceName}: ${a} (${i}).`;return new Xt(i,o,r)}}function Hm(e,t){return e.replace(zm,(n,r)=>{const i=t[r];return i!=null?String(i):`<${r}?>`})}const zm=/\{\$([^}]+)}/g;function Vm(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function Ti(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const s=e[i],a=t[i];if(fc(s)&&fc(a)){if(!Ti(s,a))return!1}else if(s!==a)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function fc(e){return e!==null&&typeof e=="object"}/**
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
 */function Dr(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach(i=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function or(e){const t={};return e.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");t[decodeURIComponent(i)]=decodeURIComponent(s)}}),t}function cr(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}function Wm(e,t){const n=new Km(e,t);return n.subscribe.bind(n)}class Km{constructor(t,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{t(this)}).catch(r=>{this.error(r)})}next(t){this.forEachObserver(n=>{n.next(t)})}error(t){this.forEachObserver(n=>{n.error(t)}),this.close(t)}complete(){this.forEachObserver(t=>{t.complete()}),this.close()}subscribe(t,n,r){let i;if(t===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");Gm(t,["next","error","complete"])?i=t:i={next:t,error:n,complete:r},i.next===void 0&&(i.next=gs),i.error===void 0&&(i.error=gs),i.complete===void 0&&(i.complete=gs);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(t){this.observers===void 0||this.observers[t]===void 0||(delete this.observers[t],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(t){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,t)}sendOne(t,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[t]!==void 0)try{n(this.observers[t])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(t){this.finalized||(this.finalized=!0,t!==void 0&&(this.finalError=t),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Gm(e,t){if(typeof e!="object"||e===null)return!1;for(const n of t)if(n in e&&typeof e[n]=="function")return!0;return!1}function gs(){}/**
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
 */function dt(e){return e&&e._delegate?e._delegate:e}class zn{constructor(t,n,r){this.name=t,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(t){return this.instantiationMode=t,this}setMultipleInstances(t){return this.multipleInstances=t,this}setServiceProps(t){return this.serviceProps=t,this}setInstanceCreatedCallback(t){return this.onInstanceCreated=t,this}}/**
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
 */class Ym{constructor(t,n){this.name=t,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(t){const n=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(n)){const r=new Mm;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(t){var n;const r=this.normalizeInstanceIdentifier(t==null?void 0:t.identifier),i=(n=t==null?void 0:t.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(t){if(t.name!==this.name)throw Error(`Mismatching Component ${t.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=t,!!this.shouldAutoInitialize()){if(Xm(t))try{this.getOrInitializeService({instanceIdentifier:tn})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(t=tn){this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)}async delete(){const t=Array.from(this.instances.values());await Promise.all([...t.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...t.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(t=tn){return this.instances.has(t)}getOptions(t=tn){return this.instancesOptions.get(t)||{}}initialize(t={}){const{options:n={}}=t,r=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,a]of this.instancesDeferred.entries()){const o=this.normalizeInstanceIdentifier(s);r===o&&a.resolve(i)}return i}onInit(t,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(t),this.onInitCallbacks.set(i,s);const a=this.instances.get(i);return a&&t(a,i),()=>{s.delete(t)}}invokeOnInitCallbacks(t,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(t,n)}catch{}}getOrInitializeService({instanceIdentifier:t,options:n={}}){let r=this.instances.get(t);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:qm(t),options:n}),this.instances.set(t,r),this.instancesOptions.set(t,n),this.invokeOnInitCallbacks(r,t),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,t,r)}catch{}return r||null}normalizeInstanceIdentifier(t=tn){return this.component?this.component.multipleInstances?t:tn:t}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function qm(e){return e===tn?void 0:e}function Xm(e){return e.instantiationMode==="EAGER"}/**
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
 */class Jm{constructor(t){this.name=t,this.providers=new Map}addComponent(t){const n=this.getProvider(t.name);if(n.isComponentSet())throw new Error(`Component ${t.name} has already been registered with ${this.name}`);n.setComponent(t)}addOrOverwriteComponent(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)}getProvider(t){if(this.providers.has(t))return this.providers.get(t);const n=new Ym(t,this);return this.providers.set(t,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var ce;(function(e){e[e.DEBUG=0]="DEBUG",e[e.VERBOSE=1]="VERBOSE",e[e.INFO=2]="INFO",e[e.WARN=3]="WARN",e[e.ERROR=4]="ERROR",e[e.SILENT=5]="SILENT"})(ce||(ce={}));const Qm={debug:ce.DEBUG,verbose:ce.VERBOSE,info:ce.INFO,warn:ce.WARN,error:ce.ERROR,silent:ce.SILENT},Zm=ce.INFO,eg={[ce.DEBUG]:"log",[ce.VERBOSE]:"log",[ce.INFO]:"info",[ce.WARN]:"warn",[ce.ERROR]:"error"},tg=(e,t,...n)=>{if(t<e.logLevel)return;const r=new Date().toISOString(),i=eg[t];if(i)console[i](`[${r}]  ${e.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`)};class Wu{constructor(t){this.name=t,this._logLevel=Zm,this._logHandler=tg,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(t){if(!(t in ce))throw new TypeError(`Invalid value "${t}" assigned to \`logLevel\``);this._logLevel=t}setLogLevel(t){this._logLevel=typeof t=="string"?Qm[t]:t}get logHandler(){return this._logHandler}set logHandler(t){if(typeof t!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t}get userLogHandler(){return this._userLogHandler}set userLogHandler(t){this._userLogHandler=t}debug(...t){this._userLogHandler&&this._userLogHandler(this,ce.DEBUG,...t),this._logHandler(this,ce.DEBUG,...t)}log(...t){this._userLogHandler&&this._userLogHandler(this,ce.VERBOSE,...t),this._logHandler(this,ce.VERBOSE,...t)}info(...t){this._userLogHandler&&this._userLogHandler(this,ce.INFO,...t),this._logHandler(this,ce.INFO,...t)}warn(...t){this._userLogHandler&&this._userLogHandler(this,ce.WARN,...t),this._logHandler(this,ce.WARN,...t)}error(...t){this._userLogHandler&&this._userLogHandler(this,ce.ERROR,...t),this._logHandler(this,ce.ERROR,...t)}}const ng=(e,t)=>t.some(n=>e instanceof n);let dc,hc;function rg(){return dc||(dc=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function ig(){return hc||(hc=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ku=new WeakMap,Qs=new WeakMap,Gu=new WeakMap,vs=new WeakMap,Ga=new WeakMap;function sg(e){const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("success",s),e.removeEventListener("error",a)},s=()=>{n(zt(e.result)),i()},a=()=>{r(e.error),i()};e.addEventListener("success",s),e.addEventListener("error",a)});return t.then(n=>{n instanceof IDBCursor&&Ku.set(n,e)}).catch(()=>{}),Ga.set(t,e),t}function ag(e){if(Qs.has(e))return;const t=new Promise((n,r)=>{const i=()=>{e.removeEventListener("complete",s),e.removeEventListener("error",a),e.removeEventListener("abort",a)},s=()=>{n(),i()},a=()=>{r(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",s),e.addEventListener("error",a),e.addEventListener("abort",a)});Qs.set(e,t)}let Zs={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return Qs.get(e);if(t==="objectStoreNames")return e.objectStoreNames||Gu.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return zt(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function og(e){Zs=e(Zs)}function cg(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const r=e.call(bs(this),t,...n);return Gu.set(r,t.sort?t.sort():[t]),zt(r)}:ig().includes(e)?function(...t){return e.apply(bs(this),t),zt(Ku.get(this))}:function(...t){return zt(e.apply(bs(this),t))}}function lg(e){return typeof e=="function"?cg(e):(e instanceof IDBTransaction&&ag(e),ng(e,rg())?new Proxy(e,Zs):e)}function zt(e){if(e instanceof IDBRequest)return sg(e);if(vs.has(e))return vs.get(e);const t=lg(e);return t!==e&&(vs.set(e,t),Ga.set(t,e)),t}const bs=e=>Ga.get(e);function ug(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const a=indexedDB.open(e,t),o=zt(a);return r&&a.addEventListener("upgradeneeded",c=>{r(zt(a.result),c.oldVersion,c.newVersion,zt(a.transaction),c)}),n&&a.addEventListener("blocked",c=>n(c.oldVersion,c.newVersion,c)),o.then(c=>{s&&c.addEventListener("close",()=>s()),i&&c.addEventListener("versionchange",l=>i(l.oldVersion,l.newVersion,l))}).catch(()=>{}),o}const fg=["get","getKey","getAll","getAllKeys","count"],dg=["put","add","delete","clear"],ys=new Map;function pc(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(ys.get(t))return ys.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=dg.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||fg.includes(n)))return;const s=async function(a,...o){const c=this.transaction(a,i?"readwrite":"readonly");let l=c.store;return r&&(l=l.index(o.shift())),(await Promise.all([l[n](...o),i&&c.done]))[0]};return ys.set(t,s),s}og(e=>({...e,get:(t,n,r)=>pc(t,n)||e.get(t,n,r),has:(t,n)=>!!pc(t,n)||e.has(t,n)}));/**
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
 */class hg{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(pg(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function pg(e){const t=e.getComponent();return(t==null?void 0:t.type)==="VERSION"}const ea="@firebase/app",mc="0.9.15";/**
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
 */const pn=new Wu("@firebase/app"),mg="@firebase/app-compat",gg="@firebase/analytics-compat",vg="@firebase/analytics",bg="@firebase/app-check-compat",yg="@firebase/app-check",_g="@firebase/auth",wg="@firebase/auth-compat",Eg="@firebase/database",Ig="@firebase/database-compat",kg="@firebase/functions",Ag="@firebase/functions-compat",Tg="@firebase/installations",Cg="@firebase/installations-compat",xg="@firebase/messaging",Sg="@firebase/messaging-compat",Og="@firebase/performance",Pg="@firebase/performance-compat",Rg="@firebase/remote-config",Ng="@firebase/remote-config-compat",Mg="@firebase/storage",Lg="@firebase/storage-compat",Dg="@firebase/firestore",Ug="@firebase/firestore-compat",Fg="firebase",$g="10.1.0";/**
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
 */const ta="[DEFAULT]",Bg={[ea]:"fire-core",[mg]:"fire-core-compat",[vg]:"fire-analytics",[gg]:"fire-analytics-compat",[yg]:"fire-app-check",[bg]:"fire-app-check-compat",[_g]:"fire-auth",[wg]:"fire-auth-compat",[Eg]:"fire-rtdb",[Ig]:"fire-rtdb-compat",[kg]:"fire-fn",[Ag]:"fire-fn-compat",[Tg]:"fire-iid",[Cg]:"fire-iid-compat",[xg]:"fire-fcm",[Sg]:"fire-fcm-compat",[Og]:"fire-perf",[Pg]:"fire-perf-compat",[Rg]:"fire-rc",[Ng]:"fire-rc-compat",[Mg]:"fire-gcs",[Lg]:"fire-gcs-compat",[Dg]:"fire-fst",[Ug]:"fire-fst-compat","fire-js":"fire-js",[Fg]:"fire-js-all"};/**
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
 */const Ci=new Map,na=new Map;function jg(e,t){try{e.container.addComponent(t)}catch(n){pn.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function Ir(e){const t=e.name;if(na.has(t))return pn.debug(`There were multiple attempts to register component ${t}.`),!1;na.set(t,e);for(const n of Ci.values())jg(n,e);return!0}function Yu(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}/**
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
 */const Hg={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Vt=new Lr("app","Firebase",Hg);/**
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
 */class zg{constructor(t,n,r){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw Vt.create("app-deleted",{appName:this._name})}}/**
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
 */const Ur=$g;function qu(e,t={}){let n=e;typeof t!="object"&&(t={name:t});const r=Object.assign({name:ta,automaticDataCollectionEnabled:!1},t),i=r.name;if(typeof i!="string"||!i)throw Vt.create("bad-app-name",{appName:String(i)});if(n||(n=zu()),!n)throw Vt.create("no-options");const s=Ci.get(i);if(s){if(Ti(n,s.options)&&Ti(r,s.config))return s;throw Vt.create("duplicate-app",{appName:i})}const a=new Jm(i);for(const c of na.values())a.addComponent(c);const o=new zg(n,r,a);return Ci.set(i,o),o}function Vg(e=ta){const t=Ci.get(e);if(!t&&e===ta&&zu())return qu();if(!t)throw Vt.create("no-app",{appName:e});return t}function Un(e,t,n){var r;let i=(r=Bg[e])!==null&&r!==void 0?r:e;n&&(i+=`-${n}`);const s=i.match(/\s|\//),a=t.match(/\s|\//);if(s||a){const o=[`Unable to register library "${i}" with version "${t}":`];s&&o.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&a&&o.push("and"),a&&o.push(`version name "${t}" contains illegal characters (whitespace or "/")`),pn.warn(o.join(" "));return}Ir(new zn(`${i}-version`,()=>({library:i,version:t}),"VERSION"))}/**
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
 */const Wg="firebase-heartbeat-database",Kg=1,kr="firebase-heartbeat-store";let _s=null;function Xu(){return _s||(_s=ug(Wg,Kg,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(kr)}}}).catch(e=>{throw Vt.create("idb-open",{originalErrorMessage:e.message})})),_s}async function Gg(e){try{return await(await Xu()).transaction(kr).objectStore(kr).get(Ju(e))}catch(t){if(t instanceof Xt)pn.warn(t.message);else{const n=Vt.create("idb-get",{originalErrorMessage:t==null?void 0:t.message});pn.warn(n.message)}}}async function gc(e,t){try{const r=(await Xu()).transaction(kr,"readwrite");await r.objectStore(kr).put(t,Ju(e)),await r.done}catch(n){if(n instanceof Xt)pn.warn(n.message);else{const r=Vt.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pn.warn(r.message)}}}function Ju(e){return`${e.name}!${e.options.appId}`}/**
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
 */const Yg=1024,qg=30*24*60*60*1e3;class Xg{constructor(t){this.container=t,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Qg(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=vc();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=qg}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const t=vc(),{heartbeatsToSend:n,unsentEntries:r}=Jg(this._heartbeatsCache.heartbeats),i=ju(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=t,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function vc(){return new Date().toISOString().substring(0,10)}function Jg(e,t=Yg){const n=[];let r=e.slice();for(const i of e){const s=n.find(a=>a.agent===i.agent);if(s){if(s.dates.push(i.date),bc(n)>t){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),bc(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Qg{constructor(t){this.app=t,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $m()?Bm().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Gg(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:t.heartbeats})}else return}async add(t){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return gc(this.app,{lastSentHeartbeatDate:(n=t.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...t.heartbeats]})}else return}}function bc(e){return ju(JSON.stringify({version:2,heartbeats:e})).length}/**
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
 */function Zg(e){Ir(new zn("platform-logger",t=>new hg(t),"PRIVATE")),Ir(new zn("heartbeat",t=>new Xg(t),"PRIVATE")),Un(ea,mc,e),Un(ea,mc,"esm2017"),Un("fire-js","")}Zg("");function Ya(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function Qu(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ev=Qu,Zu=new Lr("auth","Firebase",Qu());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi=new Wu("@firebase/auth");function tv(e,...t){xi.logLevel<=ce.WARN&&xi.warn(`Auth (${Ur}): ${e}`,...t)}function pi(e,...t){xi.logLevel<=ce.ERROR&&xi.error(`Auth (${Ur}): ${e}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(e,...t){throw qa(e,...t)}function lt(e,...t){return qa(e,...t)}function ef(e,t,n){const r=Object.assign(Object.assign({},ev()),{[t]:n});return new Lr("auth","Firebase",r).create(t,{appName:e.name})}function nv(e,t,n){const r=n;if(!(t instanceof r))throw r.name!==t.constructor.name&&Ve(e,"argument-error"),ef(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function qa(e,...t){if(typeof e!="string"){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return Zu.create(e,...t)}function W(e,t,...n){if(!e)throw qa(t,...n)}function bt(e){const t="INTERNAL ASSERTION FAILED: "+e;throw pi(t),new Error(t)}function wt(e,t){e||bt(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.href)||""}function rv(){return yc()==="http:"||yc()==="https:"}function yc(){var e;return typeof self<"u"&&((e=self.location)===null||e===void 0?void 0:e.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iv(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rv()||Dm()||"connection"in navigator)?navigator.onLine:!0}function sv(){if(typeof navigator>"u")return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr{constructor(t,n){this.shortDelay=t,this.longDelay=n,wt(n>t,"Short delay should be less than long delay!"),this.isMobile=Lm()||Um()}get(){return iv()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xa(e,t){wt(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tf{static initialize(t,n,r){this.fetchImpl=t,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;bt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;bt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;bt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const av={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov=new Fr(3e4,6e4);function Jn(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function Qn(e,t,n,r,i={}){return nf(e,i,async()=>{let s={},a={};r&&(t==="GET"?a=r:s={body:JSON.stringify(r)});const o=Dr(Object.assign({key:e.config.apiKey},a)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),tf.fetch()(rf(e,e.config.apiHost,n,o),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))})}async function nf(e,t,n){e._canInitEmulator=!1;const r=Object.assign(Object.assign({},av),t);try{const i=new cv(e),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const a=await s.json();if("needConfirmation"in a)throw Qr(e,"account-exists-with-different-credential",a);if(s.ok&&!("errorMessage"in a))return a;{const o=s.ok?a.errorMessage:a.error.message,[c,l]=o.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qr(e,"credential-already-in-use",a);if(c==="EMAIL_EXISTS")throw Qr(e,"email-already-in-use",a);if(c==="USER_DISABLED")throw Qr(e,"user-disabled",a);const u=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw ef(e,u,l);Ve(e,u)}}catch(i){if(i instanceof Xt)throw i;Ve(e,"network-request-failed",{message:String(i)})}}async function $r(e,t,n,r,i={}){const s=await Qn(e,t,n,r,i);return"mfaPendingCredential"in s&&Ve(e,"multi-factor-auth-required",{_serverResponse:s}),s}function rf(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?Xa(e.config,i):`${e.config.apiScheme}://${i}`}class cv{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(lt(this.auth,"network-request-failed")),ov.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qr(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=lt(e,t,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lv(e,t){return Qn(e,"POST","/v1/accounts:delete",t)}async function uv(e,t){return Qn(e,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dr(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function fv(e,t=!1){const n=dt(e),r=await n.getIdToken(t),i=Ja(r);W(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,a=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:dr(ws(i.auth_time)),issuedAtTime:dr(ws(i.iat)),expirationTime:dr(ws(i.exp)),signInProvider:a||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ws(e){return Number(e)*1e3}function Ja(e){const[t,n,r]=e.split(".");if(t===void 0||n===void 0||r===void 0)return pi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Hu(n);return i?JSON.parse(i):(pi("Failed to decode base64 JWT payload"),null)}catch(i){return pi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function dv(e){const t=Ja(e);return W(t,"internal-error"),W(typeof t.exp<"u","internal-error"),W(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ar(e,t,n=!1){if(n)return t;try{return await t}catch(r){throw r instanceof Xt&&hv(r)&&e.auth.currentUser===e&&await e.auth.signOut(),r}}function hv({code:e}){return e==="auth/user-disabled"||e==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pv{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var n;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const n=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(t,n){this.createdAt=t,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=dr(this.lastLoginAt),this.creationTime=dr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Si(e){var t;const n=e.auth,r=await e.getIdToken(),i=await Ar(e,uv(n,{idToken:r}));W(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const a=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?vv(s.providerUserInfo):[],o=gv(e.providerData,a),c=e.isAnonymous,l=!(e.email&&s.passwordHash)&&!(o!=null&&o.length),u=c?l:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:o,metadata:new sf(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,f)}async function mv(e){const t=dt(e);await Si(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function gv(e,t){return[...e.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function vv(e){return e.map(t=>{var{providerId:n}=t,r=Ya(t,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bv(e,t){const n=await nf(e,{},async()=>{const r=Dr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,a=rf(e,i,"/v1/token",`key=${s}`),o=await e._getAdditionalHeaders();return o["Content-Type"]="application/x-www-form-urlencoded",tf.fetch()(a,{method:"POST",headers:o,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){W(t.idToken,"internal-error"),W(typeof t.idToken<"u","internal-error"),W(typeof t.refreshToken<"u","internal-error");const n="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):dv(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,n)}async getToken(t,n=!1){return W(!this.accessToken||this.refreshToken,t,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await bv(t,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,n,r){this.refreshToken=n||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,a=new Tr;return r&&(W(typeof r=="string","internal-error",{appName:t}),a.refreshToken=r),i&&(W(typeof i=="string","internal-error",{appName:t}),a.accessToken=i),s&&(W(typeof s=="number","internal-error",{appName:t}),a.expirationTime=s),a}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new Tr,this.toJSON())}_performRefresh(){return bt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pt(e,t){W(typeof e=="string"||typeof e>"u","internal-error",{appName:t})}class hn{constructor(t){var{uid:n,auth:r,stsTokenManager:i}=t,s=Ya(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new pv(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sf(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const n=await Ar(this,this.stsTokenManager.getToken(this.auth,t));return W(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(t){return fv(this,t)}reload(){return mv(this)}_assign(t){this!==t&&(W(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(n=>Object.assign({},n)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const n=new hn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(t){W(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,n=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),n&&await Si(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await Ar(this,lv(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,n){var r,i,s,a,o,c,l,u;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,I=(a=n.photoURL)!==null&&a!==void 0?a:void 0,A=(o=n.tenantId)!==null&&o!==void 0?o:void 0,R=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(l=n.createdAt)!==null&&l!==void 0?l:void 0,y=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:O,emailVerified:C,isAnonymous:H,providerData:J,stsTokenManager:te}=n;W(O&&te,t,"internal-error");const V=Tr.fromJSON(this.name,te);W(typeof O=="string",t,"internal-error"),Pt(f,t.name),Pt(h,t.name),W(typeof C=="boolean",t,"internal-error"),W(typeof H=="boolean",t,"internal-error"),Pt(m,t.name),Pt(I,t.name),Pt(A,t.name),Pt(R,t.name),Pt(b,t.name),Pt(y,t.name);const q=new hn({uid:O,auth:t,email:h,emailVerified:C,displayName:f,isAnonymous:H,photoURL:I,phoneNumber:m,tenantId:A,stsTokenManager:V,createdAt:b,lastLoginAt:y});return J&&Array.isArray(J)&&(q.providerData=J.map(Z=>Object.assign({},Z))),R&&(q._redirectEventId=R),q}static async _fromIdTokenResponse(t,n,r=!1){const i=new Tr;i.updateFromServerResponse(n);const s=new hn({uid:n.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Si(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _c=new Map;function yt(e){wt(e instanceof Function,"Expected a class definition");let t=_c.get(e);return t?(wt(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,_c.set(e,t),t)}/**
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
 */class af{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,n){this.storage[t]=n}async _get(t){const n=this.storage[t];return n===void 0?null:n}async _remove(t){delete this.storage[t]}_addListener(t,n){}_removeListener(t,n){}}af.type="NONE";const wc=af;/**
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
 */function mi(e,t,n){return`firebase:${e}:${t}:${n}`}class Fn{constructor(t,n,r){this.persistence=t,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=mi(this.userKey,i.apiKey,s),this.fullPersistenceKey=mi("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?hn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,n,r="authUser"){if(!n.length)return new Fn(yt(wc),t,r);const i=(await Promise.all(n.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||yt(wc);const a=mi(r,t.config.apiKey,t.name);let o=null;for(const l of n)try{const u=await l._get(a);if(u){const f=hn._fromJSON(t,u);l!==s&&(o=f),s=l;break}}catch{}const c=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Fn(s,t,r):(s=c[0],o&&await s._set(a,o.toJSON()),await Promise.all(n.map(async l=>{if(l!==s)try{await l._remove(a)}catch{}})),new Fn(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ec(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(lf(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(of(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(ff(t))return"Blackberry";if(df(t))return"Webos";if(Qa(t))return"Safari";if((t.includes("chrome/")||cf(t))&&!t.includes("edge/"))return"Chrome";if(uf(t))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=e.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function of(e=Se()){return/firefox\//i.test(e)}function Qa(e=Se()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function cf(e=Se()){return/crios\//i.test(e)}function lf(e=Se()){return/iemobile/i.test(e)}function uf(e=Se()){return/android/i.test(e)}function ff(e=Se()){return/blackberry/i.test(e)}function df(e=Se()){return/webos/i.test(e)}function Zi(e=Se()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function yv(e=Se()){var t;return Zi(e)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function _v(){return Fm()&&document.documentMode===10}function hf(e=Se()){return Zi(e)||uf(e)||df(e)||ff(e)||/windows phone/i.test(e)||lf(e)}function wv(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pf(e,t=[]){let n;switch(e){case"Browser":n=Ec(Se());break;case"Worker":n=`${Ec(Se())}-${e}`;break;default:n=e}const r=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ur}/${r}`}async function mf(e,t){return Qn(e,"GET","/v2/recaptchaConfig",Jn(e,t))}function Ic(e){return e!==void 0&&e.enterprise!==void 0}class gf{constructor(t){if(this.siteKey="",this.emailPasswordEnabled=!1,t.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=t.recaptchaKey.split("/")[3],this.emailPasswordEnabled=t.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ev(){var e,t;return(t=(e=document.getElementsByTagName("head"))===null||e===void 0?void 0:e[0])!==null&&t!==void 0?t:document}function vf(e){return new Promise((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=i=>{const s=lt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Ev().appendChild(r)})}function Iv(e){return`__${e}${Math.floor(Math.random()*1e6)}`}const kv="https://www.google.com/recaptcha/enterprise.js?render=",Av="recaptcha-enterprise",Tv="NO_RECAPTCHA";class bf{constructor(t){this.type=Av,this.auth=_n(t)}async verify(t="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(a,o)=>{mf(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(c=>{if(c.recaptchaKey===void 0)o(new Error("recaptcha Enterprise site key undefined"));else{const l=new gf(c);return s.tenantId==null?s._agentRecaptchaConfig=l:s._tenantRecaptchaConfigs[s.tenantId]=l,a(l.siteKey)}}).catch(c=>{o(c)})})}function i(s,a,o){const c=window.grecaptcha;Ic(c)?c.enterprise.ready(()=>{c.enterprise.execute(s,{action:t}).then(l=>{a(l)}).catch(()=>{a(Tv)})}):o(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,a)=>{r(this.auth).then(o=>{if(!n&&Ic(window.grecaptcha))i(o,s,a);else{if(typeof window>"u"){a(new Error("RecaptchaVerifier is only supported in browser"));return}vf(kv+o).then(()=>{i(o,s,a)}).catch(c=>{a(c)})}}).catch(o=>{a(o)})})}}async function Oi(e,t,n,r=!1){const i=new bf(e);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const a=Object.assign({},t);return r?Object.assign(a,{captchaResp:s}):Object.assign(a,{captchaResponse:s}),Object.assign(a,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(a,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),a}/**
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
 */class Cv{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,n){const r=s=>new Promise((a,o)=>{try{const c=t(s);a(c)}catch(c){o(c)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const n=[];try{for(const r of this.queue)await r(t),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xv{constructor(t,n,r,i){this.app=t,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kc(this),this.idTokenSubscription=new kc(this),this.beforeStateQueue=new Cv(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Zu,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,n){return n&&(this._popupRedirectResolver=yt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Fn.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const a=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,o=i==null?void 0:i._redirectEventId,c=await this.tryRedirectSignIn(t);(!a||a===o)&&(c!=null&&c.user)&&(i=c.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(a){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(a))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return W(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(t){try{await Si(t)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=sv()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const n=t?dt(t):null;return n&&W(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(t,n=!1){if(!this._deleted)return t&&W(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yt(t))})}async initializeRecaptchaConfig(){const t=await mf(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new gf(t);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new bf(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new Lr("auth","Firebase",t())}onAuthStateChanged(t,n,r){return this.registerStateListener(this.authStateSubscription,t,n,r)}beforeAuthStateChanged(t,n){return this.beforeStateQueue.pushCallback(t,n)}onIdTokenChanged(t,n,r){return this.registerStateListener(this.idTokenSubscription,t,n,r)}authStateReady(){return new Promise((t,n)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},n)}})}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,n){const r=await this.getOrInitRedirectPersistenceManager(n);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const n=t&&yt(t)||this._popupRedirectResolver;W(n,this,"argument-error"),this.redirectPersistenceManager=await Fn.create(this,[yt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),a=this._isInitialized?Promise.resolve():this._initializationPromise;return W(a,this,"internal-error"),a.then(()=>s(this.currentUser)),typeof n=="function"?t.addObserver(n,r,i):t.addObserver(n)}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return W(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=pf(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var t;const n=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return n!=null&&n.error&&tv(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function _n(e){return dt(e)}class kc{constructor(t){this.auth=t,this.observer=null,this.addObserver=Wm(n=>this.observer=n)}get next(){return W(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sv(e,t){const n=Yu(e,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ti(s,t??{}))return i;Ve(i,"already-initialized")}return n.initialize({options:t})}function Ov(e,t){const n=(t==null?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yt);t!=null&&t.errorMap&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Pv(e,t,n){const r=_n(e);W(r._canInitEmulator,r,"emulator-config-failed"),W(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=yf(t),{host:a,port:o}=Rv(t),c=o===null?"":`:${o}`;r.config.emulator={url:`${s}//${a}${c}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:a,port:o,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Nv()}function yf(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Rv(e){const t=yf(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Ac(r.substr(s.length+1))}}else{const[s,a]=r.split(":");return{host:s,port:Ac(a)}}}function Ac(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Nv(){function e(){const t=document.createElement("p"),n=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",e):e())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Za{constructor(t,n){this.providerId=t,this.signInMethod=n}toJSON(){return bt("not implemented")}_getIdTokenResponse(t){return bt("not implemented")}_linkToIdToken(t,n){return bt("not implemented")}_getReauthenticationResolver(t){return bt("not implemented")}}async function Mv(e,t){return Qn(e,"POST","/v1/accounts:update",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Es(e,t){return $r(e,"POST","/v1/accounts:signInWithPassword",Jn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lv(e,t){return $r(e,"POST","/v1/accounts:signInWithEmailLink",Jn(e,t))}async function Dv(e,t){return $r(e,"POST","/v1/accounts:signInWithEmailLink",Jn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends Za{constructor(t,n,r,i=null){super("password",r),this._email=t,this._password=n,this._tenantId=i}static _fromEmailAndPassword(t,n){return new Cr(t,n,"password")}static _fromEmailAndCode(t,n,r=null){return new Cr(t,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(t){var n;switch(this.signInMethod){case"password":const r={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};if(!((n=t._getRecaptchaConfig())===null||n===void 0)&&n.emailPasswordEnabled){const i=await Oi(t,r,"signInWithPassword");return Es(t,i)}else return Es(t,r).catch(async i=>{if(i.code==="auth/missing-recaptcha-token"){console.log("Sign-in with email address and password is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-in flow.");const s=await Oi(t,r,"signInWithPassword");return Es(t,s)}else return Promise.reject(i)});case"emailLink":return Lv(t,{email:this._email,oobCode:this._password});default:Ve(t,"internal-error")}}async _linkToIdToken(t,n){switch(this.signInMethod){case"password":return Mv(t,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Dv(t,{idToken:n,email:this._email,oobCode:this._password});default:Ve(t,"internal-error")}}_getReauthenticationResolver(t){return this._getIdTokenResponse(t)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $n(e,t){return $r(e,"POST","/v1/accounts:signInWithIdp",Jn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Uv="http://localhost";class mn extends Za{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const n=new mn(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(n.idToken=t.idToken),t.accessToken&&(n.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(n.nonce=t.nonce),t.pendingToken&&(n.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(n.accessToken=t.oauthToken,n.secret=t.oauthTokenSecret):Ve("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const n=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=n,s=Ya(n,["providerId","signInMethod"]);if(!r||!i)return null;const a=new mn(r,i);return a.idToken=s.idToken||void 0,a.accessToken=s.accessToken||void 0,a.secret=s.secret,a.nonce=s.nonce,a.pendingToken=s.pendingToken||null,a}_getIdTokenResponse(t){const n=this.buildRequest();return $n(t,n)}_linkToIdToken(t,n){const r=this.buildRequest();return r.idToken=n,$n(t,r)}_getReauthenticationResolver(t){const n=this.buildRequest();return n.autoCreate=!1,$n(t,n)}buildRequest(){const t={requestUri:Uv,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),t.postBody=Dr(n)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fv(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $v(e){const t=or(cr(e)).link,n=t?or(cr(t)).deep_link_id:null,r=or(cr(e)).deep_link_id;return(r?or(cr(r)).link:null)||r||n||t||e}class eo{constructor(t){var n,r,i,s,a,o;const c=or(cr(t)),l=(n=c.apiKey)!==null&&n!==void 0?n:null,u=(r=c.oobCode)!==null&&r!==void 0?r:null,f=Fv((i=c.mode)!==null&&i!==void 0?i:null);W(l&&u&&f,"argument-error"),this.apiKey=l,this.operation=f,this.code=u,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(a=c.languageCode)!==null&&a!==void 0?a:null,this.tenantId=(o=c.tenantId)!==null&&o!==void 0?o:null}static parseLink(t){const n=$v(t);try{return new eo(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(){this.providerId=Zn.PROVIDER_ID}static credential(t,n){return Cr._fromEmailAndPassword(t,n)}static credentialWithLink(t,n){const r=eo.parseLink(n);return W(r,"argument-error"),Cr._fromEmailAndCode(t,r.code,r.tenantId)}}Zn.PROVIDER_ID="password";Zn.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Zn.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Br extends to{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ut extends Br{constructor(){super("facebook.com")}static credential(t){return mn._fromParams({providerId:Ut.PROVIDER_ID,signInMethod:Ut.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return Ut.credentialFromTaggedObject(t)}static credentialFromError(t){return Ut.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return Ut.credential(t.oauthAccessToken)}catch{return null}}}Ut.FACEBOOK_SIGN_IN_METHOD="facebook.com";Ut.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft extends Br{constructor(){super("google.com"),this.addScope("profile")}static credential(t,n){return mn._fromParams({providerId:Ft.PROVIDER_ID,signInMethod:Ft.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:n})}static credentialFromResult(t){return Ft.credentialFromTaggedObject(t)}static credentialFromError(t){return Ft.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:n,oauthAccessToken:r}=t;if(!n&&!r)return null;try{return Ft.credential(n,r)}catch{return null}}}Ft.GOOGLE_SIGN_IN_METHOD="google.com";Ft.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Br{constructor(){super("github.com")}static credential(t){return mn._fromParams({providerId:$t.PROVIDER_ID,signInMethod:$t.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return $t.credentialFromTaggedObject(t)}static credentialFromError(t){return $t.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return $t.credential(t.oauthAccessToken)}catch{return null}}}$t.GITHUB_SIGN_IN_METHOD="github.com";$t.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt extends Br{constructor(){super("twitter.com")}static credential(t,n){return mn._fromParams({providerId:Bt.PROVIDER_ID,signInMethod:Bt.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:n})}static credentialFromResult(t){return Bt.credentialFromTaggedObject(t)}static credentialFromError(t){return Bt.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=t;if(!n||!r)return null;try{return Bt.credential(n,r)}catch{return null}}}Bt.TWITTER_SIGN_IN_METHOD="twitter.com";Bt.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Is(e,t){return $r(e,"POST","/v1/accounts:signUp",Jn(e,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,n,r,i=!1){const s=await hn._fromIdTokenResponse(t,r,i),a=Tc(r);return new gn({user:s,providerId:a,_tokenResponse:r,operationType:n})}static async _forOperation(t,n,r){await t._updateTokensIfNecessary(r,!0);const i=Tc(r);return new gn({user:t,providerId:i,_tokenResponse:r,operationType:n})}}function Tc(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pi extends Xt{constructor(t,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Pi.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,n,r,i){return new Pi(t,n,r,i)}}function _f(e,t,n,r){return(t==="reauthenticate"?n._getReauthenticationResolver(e):n._getIdTokenResponse(e)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Pi._fromErrorAndOperation(e,s,t,r):s})}async function Bv(e,t,n=!1){const r=await Ar(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return gn._forOperation(e,"link",r)}/**
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
 */async function jv(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await Ar(e,_f(r,i,t,e),n);W(s.idToken,r,"internal-error");const a=Ja(s.idToken);W(a,r,"internal-error");const{sub:o}=a;return W(e.uid===o,r,"user-mismatch"),gn._forOperation(e,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&Ve(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wf(e,t,n=!1){const r="signIn",i=await _f(e,r,t),s=await gn._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function Hv(e,t){return wf(_n(e),t)}async function zv(e,t,n){var r;const i=_n(e),s={returnSecureToken:!0,email:t,password:n,clientType:"CLIENT_TYPE_WEB"};let a;if(!((r=i._getRecaptchaConfig())===null||r===void 0)&&r.emailPasswordEnabled){const l=await Oi(i,s,"signUpPassword");a=Is(i,l)}else a=Is(i,s).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log("Sign-up is protected by reCAPTCHA for this project. Automatically triggering the reCAPTCHA flow and restarting the sign-up flow.");const u=await Oi(i,s,"signUpPassword");return Is(i,u)}else return Promise.reject(l)});const o=await a.catch(l=>Promise.reject(l)),c=await gn._fromIdTokenResponse(i,"signIn",o);return await i._updateCurrentUser(c.user),c}function Vv(e,t,n){return Hv(dt(e),Zn.credential(t,n))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wv(e,t){return dt(e).setPersistence(t)}function Kv(e,t,n,r){return dt(e).onIdTokenChanged(t,n,r)}function Gv(e,t,n){return dt(e).beforeAuthStateChanged(t,n)}function Yv(e,t,n,r){return dt(e).onAuthStateChanged(t,n,r)}function qv(e){return dt(e).signOut()}const Ri="__sak";/**
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
 */class Ef{constructor(t,n){this.storageRetriever=t,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ri,"1"),this.storage.removeItem(Ri),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,n){return this.storage.setItem(t,JSON.stringify(n)),Promise.resolve()}_get(t){const n=this.storage.getItem(t);return Promise.resolve(n?JSON.parse(n):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xv(){const e=Se();return Qa(e)||Zi(e)}const Jv=1e3,Qv=10;class If extends Ef{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,n)=>this.onStorageEvent(t,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Xv()&&wv(),this.fallbackToPolling=hf(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&t(n,i,r)}}onStorageEvent(t,n=!1){if(!t.key){this.forAllChangedKeys((a,o,c)=>{this.notifyListeners(a,c)});return}const r=t.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const a=this.storage.getItem(r);if(t.newValue!==a)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!n)return}const i=()=>{const a=this.storage.getItem(r);!n&&this.localCache[r]===a||this.notifyListeners(r,a)},s=this.storage.getItem(r);_v()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Qv):i()}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:n,newValue:r}),!0)})},Jv)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,n){await super._set(t,n),this.localCache[t]=JSON.stringify(n)}async _get(t){const n=await super._get(t);return this.localCache[t]=JSON.stringify(n),n}async _remove(t){await super._remove(t),delete this.localCache[t]}}If.type="LOCAL";const Zv=If;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf extends Ef{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,n){}_removeListener(t,n){}}kf.type="SESSION";const no=kf;/**
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
 */function eb(e){return Promise.all(e.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class es{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const n=this.receivers.find(i=>i.isListeningto(t));if(n)return n;const r=new es(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const n=t,{eventId:r,eventType:i,data:s}=n.data,a=this.handlersMap[i];if(!(a!=null&&a.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const o=Array.from(a).map(async l=>l(n.origin,s)),c=await eb(o);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(t,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(n)}_unsubscribe(t,n){this.handlersMap[t]&&n&&this.handlersMap[t].delete(n),(!n||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}es.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ro(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(Math.random()*10);return e+n}/**
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
 */class tb{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,a;return new Promise((o,c)=>{const l=ro("",20);i.port1.start();const u=setTimeout(()=>{c(new Error("unsupported_event"))},r);a={messageChannel:i,onMessage(f){const h=f;if(h.data.eventId===l)switch(h.data.status){case"ack":clearTimeout(u),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),o(h.data.response);break;default:clearTimeout(u),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(a),i.port1.addEventListener("message",a.onMessage),this.target.postMessage({eventType:t,eventId:l,data:n},[i.port2])}).finally(()=>{a&&this.removeMessageHandler(a)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ut(){return window}function nb(e){ut().location.href=e}/**
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
 */function Af(){return typeof ut().WorkerGlobalScope<"u"&&typeof ut().importScripts=="function"}async function rb(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ib(){var e;return((e=navigator==null?void 0:navigator.serviceWorker)===null||e===void 0?void 0:e.controller)||null}function sb(){return Af()?self:null}/**
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
 */const Tf="firebaseLocalStorageDb",ab=1,Ni="firebaseLocalStorage",Cf="fbase_key";class jr{constructor(t){this.request=t}toPromise(){return new Promise((t,n)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function ts(e,t){return e.transaction([Ni],t?"readwrite":"readonly").objectStore(Ni)}function ob(){const e=indexedDB.deleteDatabase(Tf);return new jr(e).toPromise()}function ia(){const e=indexedDB.open(Tf,ab);return new Promise((t,n)=>{e.addEventListener("error",()=>{n(e.error)}),e.addEventListener("upgradeneeded",()=>{const r=e.result;try{r.createObjectStore(Ni,{keyPath:Cf})}catch(i){n(i)}}),e.addEventListener("success",async()=>{const r=e.result;r.objectStoreNames.contains(Ni)?t(r):(r.close(),await ob(),t(await ia()))})})}async function Cc(e,t,n){const r=ts(e,!0).put({[Cf]:t,value:n});return new jr(r).toPromise()}async function cb(e,t){const n=ts(e,!1).get(t),r=await new jr(n).toPromise();return r===void 0?null:r.value}function xc(e,t){const n=ts(e,!0).delete(t);return new jr(n).toPromise()}const lb=800,ub=3;class xf{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ia(),this.db)}async _withRetries(t){let n=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(n++>ub)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Af()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=es._getInstance(sb()),this.receiver._subscribe("keyChanged",async(t,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(t,n)=>["keyChanged"])}async initializeSender(){var t,n;if(this.activeServiceWorker=await rb(),!this.activeServiceWorker)return;this.sender=new tb(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||ib()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await ia();return await Cc(t,Ri,"1"),await xc(t,Ri),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cc(r,t,n)),this.localCache[t]=n,this.notifyServiceWorker(t)))}async _get(t){const n=await this._withRetries(r=>cb(r,t));return this.localCache[t]=n,n}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(n=>xc(n,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=ts(i,!1).getAll();return new jr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(t,n){this.localCache[t]=n;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),lb)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(n)}_removeListener(t,n){this.listeners[t]&&(this.listeners[t].delete(n),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}xf.type="LOCAL";const fb=xf;new Fr(3e4,6e4);/**
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
 */function Sf(e,t){return t?yt(t):(W(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}/**
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
 */class io extends Za{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return $n(t,this._buildIdpRequest())}_linkToIdToken(t,n){return $n(t,this._buildIdpRequest(n))}_getReauthenticationResolver(t){return $n(t,this._buildIdpRequest())}_buildIdpRequest(t){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(n.idToken=t),n}}function db(e){return wf(e.auth,new io(e),e.bypassAuthState)}function hb(e){const{auth:t,user:n}=e;return W(n,t,"internal-error"),jv(n,new io(e),e.bypassAuthState)}async function pb(e){const{auth:t,user:n}=e;return W(n,t,"internal-error"),Bv(n,new io(e),e.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(t,n,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(t,n)=>{this.pendingPromise={resolve:t,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:a,type:o}=t;if(a){this.reject(a);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(c))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return db;case"linkViaPopup":case"linkViaRedirect":return pb;case"reauthViaPopup":case"reauthViaRedirect":return hb;default:Ve(this.auth,"internal-error")}}resolve(t){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){wt(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mb=new Fr(2e3,1e4);async function Fw(e,t,n){const r=_n(e);nv(e,t,to);const i=Sf(r,n);return new on(r,"signInViaPopup",t,i).executeNotNull()}class on extends Of{constructor(t,n,r,i,s){super(t,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,on.currentPopupAction&&on.currentPopupAction.cancel(),on.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return W(t,this.auth,"internal-error"),t}async onExecution(){wt(this.filter.length===1,"Popup operations only handle one event");const t=ro();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(lt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(lt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,on.currentPopupAction=null}pollUserCancellation(){const t=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(lt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,mb.get())};t()}}on.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gb="pendingRedirect",gi=new Map;class vb extends Of{constructor(t,n,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let t=gi.get(this.auth._key());if(!t){try{const r=await bb(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(n){t=()=>Promise.reject(n)}gi.set(this.auth._key(),t)}return this.bypassAuthState||gi.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const n=await this.auth._redirectUserForId(t.eventId);if(n)return this.user=n,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function bb(e,t){const n=wb(t),r=_b(e);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function yb(e,t){gi.set(e._key(),t)}function _b(e){return yt(e._redirectPersistence)}function wb(e){return mi(gb,e.config.apiKey,e.name)}async function Eb(e,t,n=!1){const r=_n(e),i=Sf(r,t),a=await new vb(r,i,n).execute();return a&&!n&&(delete a.user._redirectEventId,await r._persistUserIfCurrent(a.user),await r._setRedirectUser(null,t)),a}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ib=10*60*1e3;class kb{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(n=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Ab(t)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=t,n=!0)),n}sendToConsumer(t,n){var r;if(t.error&&!Pf(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(lt(this.auth,i))}else n.onAuthEvent(t)}isEventForConsumer(t,n){const r=n.eventId===null||!!t.eventId&&t.eventId===n.eventId;return n.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Ib&&this.cachedEventUids.clear(),this.cachedEventUids.has(Sc(t))}saveEventToCache(t){this.cachedEventUids.add(Sc(t)),this.lastProcessedEventTime=Date.now()}}function Sc(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter(t=>t).join("-")}function Pf({type:e,error:t}){return e==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Ab(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pf(e);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tb(e,t={}){return Qn(e,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cb=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,xb=/^https?/;async function Sb(e){if(e.config.emulator)return;const{authorizedDomains:t}=await Tb(e);for(const n of t)try{if(Ob(n))return}catch{}Ve(e,"unauthorized-domain")}function Ob(e){const t=ra(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const a=new URL(e);return a.hostname===""&&r===""?n==="chrome-extension:"&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):n==="chrome-extension:"&&a.hostname===r}if(!xb.test(n))return!1;if(Cb.test(e))return r===e;const i=e.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Pb=new Fr(3e4,6e4);function Oc(){const e=ut().___jsl;if(e!=null&&e.H){for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}}function Rb(e){return new Promise((t,n)=>{var r,i,s;function a(){Oc(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Oc(),n(lt(e,"network-request-failed"))},timeout:Pb.get()})}if(!((i=(r=ut().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=ut().gapi)===null||s===void 0)&&s.load)a();else{const o=Iv("iframefcb");return ut()[o]=()=>{gapi.load?a():n(lt(e,"network-request-failed"))},vf(`https://apis.google.com/js/api.js?onload=${o}`).catch(c=>n(c))}}).catch(t=>{throw vi=null,t})}let vi=null;function Nb(e){return vi=vi||Rb(e),vi}/**
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
 */const Mb=new Fr(5e3,15e3),Lb="__/auth/iframe",Db="emulator/auth/iframe",Ub={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Fb=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function $b(e){const t=e.config;W(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?Xa(t,Db):`https://${e.config.authDomain}/${Lb}`,r={apiKey:t.apiKey,appName:e.name,v:Ur},i=Fb.get(e.config.apiHost);i&&(r.eid=i);const s=e._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Dr(r).slice(1)}`}async function Bb(e){const t=await Nb(e),n=ut().gapi;return W(n,e,"internal-error"),t.open({where:document.body,url:$b(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ub,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const a=lt(e,"network-request-failed"),o=ut().setTimeout(()=>{s(a)},Mb.get());function c(){ut().clearTimeout(o),i(r)}r.ping(c).then(c,()=>{s(a)})}))}/**
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
 */const jb={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Hb=500,zb=600,Vb="_blank",Wb="http://localhost";class Pc{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Kb(e,t,n,r=Hb,i=zb){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),a=Math.max((window.screen.availWidth-r)/2,0).toString();let o="";const c=Object.assign(Object.assign({},jb),{width:r.toString(),height:i.toString(),top:s,left:a}),l=Se().toLowerCase();n&&(o=cf(l)?Vb:n),of(l)&&(t=t||Wb,c.scrollbars="yes");const u=Object.entries(c).reduce((h,[m,I])=>`${h}${m}=${I},`,"");if(yv(l)&&o!=="_self")return Gb(t||"",o),new Pc(null);const f=window.open(t||"",o,u);W(f,e,"popup-blocked");try{f.focus()}catch{}return new Pc(f)}function Gb(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const Yb="__/auth/handler",qb="emulator/auth/handler",Xb=encodeURIComponent("fac");async function Rc(e,t,n,r,i,s){W(e.config.authDomain,e,"auth-domain-config-required"),W(e.config.apiKey,e,"invalid-api-key");const a={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:r,v:Ur,eventId:i};if(t instanceof to){t.setDefaultLanguage(e.languageCode),a.providerId=t.providerId||"",Vm(t.getCustomParameters())||(a.customParameters=JSON.stringify(t.getCustomParameters()));for(const[u,f]of Object.entries(s||{}))a[u]=f}if(t instanceof Br){const u=t.getScopes().filter(f=>f!=="");u.length>0&&(a.scopes=u.join(","))}e.tenantId&&(a.tid=e.tenantId);const o=a;for(const u of Object.keys(o))o[u]===void 0&&delete o[u];const c=await e._getAppCheckToken(),l=c?`#${Xb}=${encodeURIComponent(c)}`:"";return`${Jb(e)}?${Dr(o).slice(1)}${l}`}function Jb({config:e}){return e.emulator?Xa(e,qb):`https://${e.authDomain}/${Yb}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks="webStorageSupport";class Qb{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=no,this._completeRedirectFn=Eb,this._overrideRedirectResult=yb}async _openPopup(t,n,r,i){var s;wt((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const a=await Rc(t,n,r,ra(),i);return Kb(t,a,ro())}async _openRedirect(t,n,r,i){await this._originValidation(t);const s=await Rc(t,n,r,ra(),i);return nb(s),new Promise(()=>{})}_initialize(t){const n=t._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(wt(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(t){const n=await Bb(t),r=new kb(t);return n.register("authEvent",i=>(W(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=n,r}_isIframeWebStorageSupported(t,n){this.iframes[t._key()].send(ks,{type:ks},i=>{var s;const a=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[ks];a!==void 0&&n(!!a),Ve(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const n=t._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Sb(t)),this.originValidationPromises[n]}get _shouldInitProactively(){return hf()||Qa()||Zi()}}const Zb=Qb;var Nc="@firebase/auth",Mc="1.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ey{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const n=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,n),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const n=this.internalListeners.get(t);n&&(this.internalListeners.delete(t),n(),this.updateProactiveRefresh())}assertAuthConfigured(){W(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ty(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function ny(e){Ir(new zn("auth",(t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:a,authDomain:o}=r.options;W(a&&!a.includes(":"),"invalid-api-key",{appName:r.name});const c={apiKey:a,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pf(e)},l=new xv(r,i,s,c);return Ov(l,n),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,n,r)=>{t.getProvider("auth-internal").initialize()})),Ir(new zn("auth-internal",t=>{const n=_n(t.getProvider("auth").getImmediate());return(r=>new ey(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Un(Nc,Mc,ty(e)),Un(Nc,Mc,"esm2017")}/**
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
 */const ry=5*60,iy=Vu("authIdTokenMaxAge")||ry;let Lc=null;const sy=e=>async t=>{const n=t&&await t.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>iy)return;const i=n==null?void 0:n.token;Lc!==i&&(Lc=i,await fetch(e,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function so(e=Vg()){const t=Yu(e,"auth");if(t.isInitialized())return t.getImmediate();const n=Sv(e,{popupRedirectResolver:Zb,persistence:[fb,Zv,no]}),r=Vu("authTokenSyncURL");if(r){const s=sy(r);Gv(n,s,()=>s(n.currentUser)),Kv(n,a=>s(a))}const i=Nm("auth");return i&&Pv(n,`http://${i}`),n}ny("Browser");var ay="firebase",oy="10.1.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Un(ay,oy,"app");const cy={apiKey:"AIzaSyDcHJuGEASw294AYFosczrfidLapWbyRWo",authDomain:"todoapp-d3740.firebaseapp.com",projectId:"todoapp-d3740",storageBucket:"todoapp-d3740.appspot.com",messagingSenderId:"110761858449",appId:"1:110761858449:web:b9674a81e6ce1449707630"},ly=qu(cy),Ge=so(ly),uy="modulepreload",fy=function(e){return"/TodoApp/"+e},Dc={},Zr=function(t,n,r){if(!n||n.length===0)return t();const i=document.getElementsByTagName("link");return Promise.all(n.map(s=>{if(s=fy(s),s in Dc)return;Dc[s]=!0;const a=s.endsWith(".css"),o=a?'[rel="stylesheet"]':"";if(!!r)for(let u=i.length-1;u>=0;u--){const f=i[u];if(f.href===s&&(!a||f.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const l=document.createElement("link");if(l.rel=a?"stylesheet":uy,a||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),a)return new Promise((u,f)=>{l.addEventListener("load",u),l.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=s,window.dispatchEvent(a),!a.defaultPrevented)throw s})};/*!
  * vue-router v4.2.4
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const xn=typeof window<"u";function dy(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const se=Object.assign;function As(e,t){const n={};for(const r in t){const i=t[r];n[r]=Ze(i)?i.map(e):e(i)}return n}const hr=()=>{},Ze=Array.isArray,hy=/\/$/,py=e=>e.replace(hy,"");function Ts(e,t,n="/"){let r,i={},s="",a="";const o=t.indexOf("#");let c=t.indexOf("?");return o<c&&o>=0&&(c=-1),c>-1&&(r=t.slice(0,c),s=t.slice(c+1,o>-1?o:t.length),i=e(s)),o>-1&&(r=r||t.slice(0,o),a=t.slice(o,t.length)),r=by(r??t,n),{fullPath:r+(s&&"?")+s+a,path:r,query:i,hash:a}}function my(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function Uc(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function gy(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&Vn(t.matched[r],n.matched[i])&&Rf(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function Vn(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function Rf(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!vy(e[n],t[n]))return!1;return!0}function vy(e,t){return Ze(e)?Fc(e,t):Ze(t)?Fc(t,e):e===t}function Fc(e,t){return Ze(t)?e.length===t.length&&e.every((n,r)=>n===t[r]):e.length===1&&e[0]===t}function by(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/"),i=r[r.length-1];(i===".."||i===".")&&r.push("");let s=n.length-1,a,o;for(a=0;a<r.length;a++)if(o=r[a],o!==".")if(o==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+r.slice(a-(a===r.length?1:0)).join("/")}var xr;(function(e){e.pop="pop",e.push="push"})(xr||(xr={}));var pr;(function(e){e.back="back",e.forward="forward",e.unknown=""})(pr||(pr={}));function yy(e){if(!e)if(xn){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),py(e)}const _y=/^[^#]+#/;function wy(e,t){return e.replace(_y,"#")+t}function Ey(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const ns=()=>({left:window.pageXOffset,top:window.pageYOffset});function Iy(e){let t;if("el"in e){const n=e.el,r=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=Ey(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function $c(e,t){return(history.state?history.state.position-t:-1)+e}const sa=new Map;function ky(e,t){sa.set(e,t)}function Ay(e){const t=sa.get(e);return sa.delete(e),t}let Ty=()=>location.protocol+"//"+location.host;function Nf(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let o=i.includes(e.slice(s))?e.slice(s).length:1,c=i.slice(o);return c[0]!=="/"&&(c="/"+c),Uc(c,"")}return Uc(n,e)+r+i}function Cy(e,t,n,r){let i=[],s=[],a=null;const o=({state:h})=>{const m=Nf(e,location),I=n.value,A=t.value;let R=0;if(h){if(n.value=m,t.value=h,a&&a===I){a=null;return}R=A?h.position-A.position:0}else r(m);i.forEach(b=>{b(n.value,I,{delta:R,type:xr.pop,direction:R?R>0?pr.forward:pr.back:pr.unknown})})};function c(){a=n.value}function l(h){i.push(h);const m=()=>{const I=i.indexOf(h);I>-1&&i.splice(I,1)};return s.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(se({},h.state,{scroll:ns()}),"")}function f(){for(const h of s)h();s=[],window.removeEventListener("popstate",o),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",o),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:c,listen:l,destroy:f}}function Bc(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?ns():null}}function xy(e){const{history:t,location:n}=window,r={value:Nf(e,n)},i={value:t.state};i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function s(c,l,u){const f=e.indexOf("#"),h=f>-1?(n.host&&document.querySelector("base")?e:e.slice(f))+c:Ty()+e+c;try{t[u?"replaceState":"pushState"](l,"",h),i.value=l}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function a(c,l){const u=se({},t.state,Bc(i.value.back,c,i.value.forward,!0),l,{position:i.value.position});s(c,u,!0),r.value=c}function o(c,l){const u=se({},i.value,t.state,{forward:c,scroll:ns()});s(u.current,u,!0);const f=se({},Bc(r.value,c,null),{position:u.position+1},l);s(c,f,!1),r.value=c}return{location:r,state:i,push:o,replace:a}}function Sy(e){e=yy(e);const t=xy(e),n=Cy(e,t.state,t.location,t.replace);function r(s,a=!0){a||n.pauseListeners(),history.go(s)}const i=se({location:"",base:e,go:r,createHref:wy.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function Oy(e){return typeof e=="string"||e&&typeof e=="object"}function Mf(e){return typeof e=="string"||typeof e=="symbol"}const Rt={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Lf=Symbol("");var jc;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(jc||(jc={}));function Wn(e,t){return se(new Error,{type:e,[Lf]:!0},t)}function mt(e,t){return e instanceof Error&&Lf in e&&(t==null||!!(e.type&t))}const Hc="[^/]+?",Py={sensitive:!1,strict:!1,start:!0,end:!0},Ry=/[.+*?^${}()[\]/\\]/g;function Ny(e,t){const n=se({},Py,t),r=[];let i=n.start?"^":"";const s=[];for(const l of e){const u=l.length?[]:[90];n.strict&&!l.length&&(i+="/");for(let f=0;f<l.length;f++){const h=l[f];let m=40+(n.sensitive?.25:0);if(h.type===0)f||(i+="/"),i+=h.value.replace(Ry,"\\$&"),m+=40;else if(h.type===1){const{value:I,repeatable:A,optional:R,regexp:b}=h;s.push({name:I,repeatable:A,optional:R});const y=b||Hc;if(y!==Hc){m+=10;try{new RegExp(`(${y})`)}catch(C){throw new Error(`Invalid custom RegExp for param "${I}" (${y}): `+C.message)}}let O=A?`((?:${y})(?:/(?:${y}))*)`:`(${y})`;f||(O=R&&l.length<2?`(?:/${O})`:"/"+O),R&&(O+="?"),i+=O,m+=20,R&&(m+=-8),A&&(m+=-20),y===".*"&&(m+=-50)}u.push(m)}r.push(u)}if(n.strict&&n.end){const l=r.length-1;r[l][r[l].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const a=new RegExp(i,n.sensitive?"":"i");function o(l){const u=l.match(a),f={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",I=s[h-1];f[I.name]=m&&I.repeatable?m.split("/"):m}return f}function c(l){let u="",f=!1;for(const h of e){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:I,repeatable:A,optional:R}=m,b=I in l?l[I]:"";if(Ze(b)&&!A)throw new Error(`Provided param "${I}" is an array but it is not repeatable (* or + modifiers)`);const y=Ze(b)?b.join("/"):b;if(!y)if(R)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${I}"`);u+=y}}return u||"/"}return{re:a,score:r,keys:s,parse:o,stringify:c}}function My(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Ly(e,t){let n=0;const r=e.score,i=t.score;for(;n<r.length&&n<i.length;){const s=My(r[n],i[n]);if(s)return s;n++}if(Math.abs(i.length-r.length)===1){if(zc(r))return 1;if(zc(i))return-1}return i.length-r.length}function zc(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const Dy={type:0,value:""},Uy=/[a-zA-Z0-9_]/;function Fy(e){if(!e)return[[]];if(e==="/")return[[Dy]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(m){throw new Error(`ERR (${n})/"${l}": ${m}`)}let n=0,r=n;const i=[];let s;function a(){s&&i.push(s),s=[]}let o=0,c,l="",u="";function f(){l&&(n===0?s.push({type:0,value:l}):n===1||n===2||n===3?(s.length>1&&(c==="*"||c==="+")&&t(`A repeatable param (${l}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:l,regexp:u,repeatable:c==="*"||c==="+",optional:c==="*"||c==="?"})):t("Invalid state to consume buffer"),l="")}function h(){l+=c}for(;o<e.length;){if(c=e[o++],c==="\\"&&n!==2){r=n,n=4;continue}switch(n){case 0:c==="/"?(l&&f(),a()):c===":"?(f(),n=1):h();break;case 4:h(),n=r;break;case 1:c==="("?n=2:Uy.test(c)?h():(f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&o--);break;case 2:c===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+c:n=3:u+=c;break;case 3:f(),n=0,c!=="*"&&c!=="?"&&c!=="+"&&o--,u="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${l}"`),f(),a(),i}function $y(e,t,n){const r=Ny(Fy(e.path),n),i=se(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf==!t.record.aliasOf&&t.children.push(i),i}function By(e,t){const n=[],r=new Map;t=Kc({strict:!1,end:!0,sensitive:!1},t);function i(u){return r.get(u)}function s(u,f,h){const m=!h,I=jy(u);I.aliasOf=h&&h.record;const A=Kc(t,u),R=[I];if("alias"in u){const O=typeof u.alias=="string"?[u.alias]:u.alias;for(const C of O)R.push(se({},I,{components:h?h.record.components:I.components,path:C,aliasOf:h?h.record:I}))}let b,y;for(const O of R){const{path:C}=O;if(f&&C[0]!=="/"){const H=f.record.path,J=H[H.length-1]==="/"?"":"/";O.path=f.record.path+(C&&J+C)}if(b=$y(O,f,A),h?h.alias.push(b):(y=y||b,y!==b&&y.alias.push(b),m&&u.name&&!Wc(b)&&a(u.name)),I.children){const H=I.children;for(let J=0;J<H.length;J++)s(H[J],b,h&&h.children[J])}h=h||b,(b.record.components&&Object.keys(b.record.components).length||b.record.name||b.record.redirect)&&c(b)}return y?()=>{a(y)}:hr}function a(u){if(Mf(u)){const f=r.get(u);f&&(r.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(a),f.alias.forEach(a))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&r.delete(u.record.name),u.children.forEach(a),u.alias.forEach(a))}}function o(){return n}function c(u){let f=0;for(;f<n.length&&Ly(u,n[f])>=0&&(u.record.path!==n[f].record.path||!Df(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Wc(u)&&r.set(u.record.name,u)}function l(u,f){let h,m={},I,A;if("name"in u&&u.name){if(h=r.get(u.name),!h)throw Wn(1,{location:u});A=h.record.name,m=se(Vc(f.params,h.keys.filter(y=>!y.optional).map(y=>y.name)),u.params&&Vc(u.params,h.keys.map(y=>y.name))),I=h.stringify(m)}else if("path"in u)I=u.path,h=n.find(y=>y.re.test(I)),h&&(m=h.parse(I),A=h.record.name);else{if(h=f.name?r.get(f.name):n.find(y=>y.re.test(f.path)),!h)throw Wn(1,{location:u,currentLocation:f});A=h.record.name,m=se({},f.params,u.params),I=h.stringify(m)}const R=[];let b=h;for(;b;)R.unshift(b.record),b=b.parent;return{name:A,path:I,params:m,matched:R,meta:zy(R)}}return e.forEach(u=>s(u)),{addRoute:s,resolve:l,removeRoute:a,getRoutes:o,getRecordMatcher:i}}function Vc(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function jy(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:Hy(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function Hy(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]=typeof n=="object"?n[r]:n;return t}function Wc(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function zy(e){return e.reduce((t,n)=>se(t,n.meta),{})}function Kc(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function Df(e,t){return t.children.some(n=>n===e||Df(e,n))}const Uf=/#/g,Vy=/&/g,Wy=/\//g,Ky=/=/g,Gy=/\?/g,Ff=/\+/g,Yy=/%5B/g,qy=/%5D/g,$f=/%5E/g,Xy=/%60/g,Bf=/%7B/g,Jy=/%7C/g,jf=/%7D/g,Qy=/%20/g;function ao(e){return encodeURI(""+e).replace(Jy,"|").replace(Yy,"[").replace(qy,"]")}function Zy(e){return ao(e).replace(Bf,"{").replace(jf,"}").replace($f,"^")}function aa(e){return ao(e).replace(Ff,"%2B").replace(Qy,"+").replace(Uf,"%23").replace(Vy,"%26").replace(Xy,"`").replace(Bf,"{").replace(jf,"}").replace($f,"^")}function e0(e){return aa(e).replace(Ky,"%3D")}function t0(e){return ao(e).replace(Uf,"%23").replace(Gy,"%3F")}function n0(e){return e==null?"":t0(e).replace(Wy,"%2F")}function Mi(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function r0(e){const t={};if(e===""||e==="?")return t;const r=(e[0]==="?"?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const s=r[i].replace(Ff," "),a=s.indexOf("="),o=Mi(a<0?s:s.slice(0,a)),c=a<0?null:Mi(s.slice(a+1));if(o in t){let l=t[o];Ze(l)||(l=t[o]=[l]),l.push(c)}else t[o]=c}return t}function Gc(e){let t="";for(let n in e){const r=e[n];if(n=e0(n),r==null){r!==void 0&&(t+=(t.length?"&":"")+n);continue}(Ze(r)?r.map(s=>s&&aa(s)):[r&&aa(r)]).forEach(s=>{s!==void 0&&(t+=(t.length?"&":"")+n,s!=null&&(t+="="+s))})}return t}function i0(e){const t={};for(const n in e){const r=e[n];r!==void 0&&(t[n]=Ze(r)?r.map(i=>i==null?null:""+i):r==null?r:""+r)}return t}const s0=Symbol(""),Yc=Symbol(""),oo=Symbol(""),Hf=Symbol(""),oa=Symbol("");function ir(){let e=[];function t(r){return e.push(r),()=>{const i=e.indexOf(r);i>-1&&e.splice(i,1)}}function n(){e=[]}return{add:t,list:()=>e.slice(),reset:n}}function Lt(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise((a,o)=>{const c=f=>{f===!1?o(Wn(4,{from:n,to:t})):f instanceof Error?o(f):Oy(f)?o(Wn(2,{from:t,to:f})):(s&&r.enterCallbacks[i]===s&&typeof f=="function"&&s.push(f),a())},l=e.call(r&&r.instances[i],t,n,c);let u=Promise.resolve(l);e.length<3&&(u=u.then(c)),u.catch(f=>o(f))})}function Cs(e,t,n,r){const i=[];for(const s of e)for(const a in s.components){let o=s.components[a];if(!(t!=="beforeRouteEnter"&&!s.instances[a]))if(a0(o)){const l=(o.__vccOpts||o)[t];l&&i.push(Lt(l,n,r,s,a))}else{let c=o();i.push(()=>c.then(l=>{if(!l)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${s.path}"`));const u=dy(l)?l.default:l;s.components[a]=u;const h=(u.__vccOpts||u)[t];return h&&Lt(h,n,r,s,a)()}))}}return i}function a0(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function qc(e){const t=ct(oo),n=ct(Hf),r=Ie(()=>t.resolve(Ln(e.to))),i=Ie(()=>{const{matched:c}=r.value,{length:l}=c,u=c[l-1],f=n.matched;if(!u||!f.length)return-1;const h=f.findIndex(Vn.bind(null,u));if(h>-1)return h;const m=Xc(c[l-2]);return l>1&&Xc(u)===m&&f[f.length-1].path!==m?f.findIndex(Vn.bind(null,c[l-2])):h}),s=Ie(()=>i.value>-1&&u0(n.params,r.value.params)),a=Ie(()=>i.value>-1&&i.value===n.matched.length-1&&Rf(n.params,r.value.params));function o(c={}){return l0(c)?t[Ln(e.replace)?"replace":"push"](Ln(e.to)).catch(hr):Promise.resolve()}return{route:r,href:Ie(()=>r.value.href),isActive:s,isExactActive:a,navigate:o}}const o0=Da({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:qc,setup(e,{slots:t}){const n=Mr(qc(e)),{options:r}=ct(oo),i=Ie(()=>({[Jc(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[Jc(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=t.default&&t.default(n);return e.custom?s:Ji("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},s)}}}),c0=o0;function l0(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function u0(e,t){for(const n in t){const r=t[n],i=e[n];if(typeof r=="string"){if(r!==i)return!1}else if(!Ze(i)||i.length!==r.length||r.some((s,a)=>s!==i[a]))return!1}return!0}function Xc(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Jc=(e,t,n)=>e??t??n,f0=Da({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const r=ct(oa),i=Ie(()=>e.route||r.value),s=ct(Yc,0),a=Ie(()=>{let l=Ln(s);const{matched:u}=i.value;let f;for(;(f=u[l])&&!f.components;)l++;return l}),o=Ie(()=>i.value.matched[a.value]);di(Yc,Ie(()=>a.value+1)),di(s0,o),di(oa,i);const c=lh();return fn(()=>[c.value,o.value,e.name],([l,u,f],[h,m,I])=>{u&&(u.instances[f]=l,m&&m!==u&&l&&l===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),l&&u&&(!m||!Vn(u,m)||!h)&&(u.enterCallbacks[f]||[]).forEach(A=>A(l))},{flush:"post"}),()=>{const l=i.value,u=e.name,f=o.value,h=f&&f.components[u];if(!h)return Qc(n.default,{Component:h,route:l});const m=f.props[u],I=m?m===!0?l.params:typeof m=="function"?m(l):m:null,R=Ji(h,se({},I,t,{onVnodeUnmounted:b=>{b.component.isUnmounted&&(f.instances[u]=null)},ref:c}));return Qc(n.default,{Component:R,route:l})||R}}});function Qc(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const d0=f0;function h0(e){const t=By(e.routes,e),n=e.parseQuery||r0,r=e.stringifyQuery||Gc,i=e.history,s=ir(),a=ir(),o=ir(),c=uh(Rt);let l=Rt;xn&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=As.bind(null,_=>""+_),f=As.bind(null,n0),h=As.bind(null,Mi);function m(_,M){let S,F;return Mf(_)?(S=t.getRecordMatcher(_),F=M):F=_,t.addRoute(F,S)}function I(_){const M=t.getRecordMatcher(_);M&&t.removeRoute(M)}function A(){return t.getRoutes().map(_=>_.record)}function R(_){return!!t.getRecordMatcher(_)}function b(_,M){if(M=se({},M||c.value),typeof _=="string"){const g=Ts(n,_,M.path),v=t.resolve({path:g.path},M),w=i.createHref(g.fullPath);return se(g,v,{params:h(v.params),hash:Mi(g.hash),redirectedFrom:void 0,href:w})}let S;if("path"in _)S=se({},_,{path:Ts(n,_.path,M.path).path});else{const g=se({},_.params);for(const v in g)g[v]==null&&delete g[v];S=se({},_,{params:f(g)}),M.params=f(M.params)}const F=t.resolve(S,M),re=_.hash||"";F.params=u(h(F.params));const d=my(r,se({},_,{hash:Zy(re),path:F.path})),p=i.createHref(d);return se({fullPath:d,hash:re,query:r===Gc?i0(_.query):_.query||{}},F,{redirectedFrom:void 0,href:p})}function y(_){return typeof _=="string"?Ts(n,_,c.value.path):se({},_)}function O(_,M){if(l!==_)return Wn(8,{from:M,to:_})}function C(_){return te(_)}function H(_){return C(se(y(_),{replace:!0}))}function J(_){const M=_.matched[_.matched.length-1];if(M&&M.redirect){const{redirect:S}=M;let F=typeof S=="function"?S(_):S;return typeof F=="string"&&(F=F.includes("?")||F.includes("#")?F=y(F):{path:F},F.params={}),se({query:_.query,hash:_.hash,params:"path"in F?{}:_.params},F)}}function te(_,M){const S=l=b(_),F=c.value,re=_.state,d=_.force,p=_.replace===!0,g=J(S);if(g)return te(se(y(g),{state:typeof g=="object"?se({},re,g.state):re,force:d,replace:p}),M||S);const v=S;v.redirectedFrom=M;let w;return!d&&gy(r,F,S)&&(w=Wn(16,{to:v,from:F}),tt(F,F,!0,!1)),(w?Promise.resolve(w):Z(v,F)).catch(E=>mt(E)?mt(E,2)?E:Ct(E):ne(E,v,F)).then(E=>{if(E){if(mt(E,2))return te(se({replace:p},y(E.to),{state:typeof E.to=="object"?se({},re,E.to.state):re,force:d}),M||v)}else E=U(v,F,!0,p,re);return ye(v,F,E),E})}function V(_,M){const S=O(_,M);return S?Promise.reject(S):Promise.resolve()}function q(_){const M=En.values().next().value;return M&&typeof M.runWithContext=="function"?M.runWithContext(_):_()}function Z(_,M){let S;const[F,re,d]=p0(_,M);S=Cs(F.reverse(),"beforeRouteLeave",_,M);for(const g of F)g.leaveGuards.forEach(v=>{S.push(Lt(v,_,M))});const p=V.bind(null,_,M);return S.push(p),ke(S).then(()=>{S=[];for(const g of s.list())S.push(Lt(g,_,M));return S.push(p),ke(S)}).then(()=>{S=Cs(re,"beforeRouteUpdate",_,M);for(const g of re)g.updateGuards.forEach(v=>{S.push(Lt(v,_,M))});return S.push(p),ke(S)}).then(()=>{S=[];for(const g of d)if(g.beforeEnter)if(Ze(g.beforeEnter))for(const v of g.beforeEnter)S.push(Lt(v,_,M));else S.push(Lt(g.beforeEnter,_,M));return S.push(p),ke(S)}).then(()=>(_.matched.forEach(g=>g.enterCallbacks={}),S=Cs(d,"beforeRouteEnter",_,M),S.push(p),ke(S))).then(()=>{S=[];for(const g of a.list())S.push(Lt(g,_,M));return S.push(p),ke(S)}).catch(g=>mt(g,8)?g:Promise.reject(g))}function ye(_,M,S){o.list().forEach(F=>q(()=>F(_,M,S)))}function U(_,M,S,F,re){const d=O(_,M);if(d)return d;const p=M===Rt,g=xn?history.state:{};S&&(F||p?i.replace(_.fullPath,se({scroll:p&&g&&g.scroll},re)):i.push(_.fullPath,re)),c.value=_,tt(_,M,S,p),Ct()}let ie;function Oe(){ie||(ie=i.listen((_,M,S)=>{if(!Wr.listening)return;const F=b(_),re=J(F);if(re){te(se(re,{replace:!0}),F).catch(hr);return}l=F;const d=c.value;xn&&ky($c(d.fullPath,S.delta),ns()),Z(F,d).catch(p=>mt(p,12)?p:mt(p,2)?(te(p.to,F).then(g=>{mt(g,20)&&!S.delta&&S.type===xr.pop&&i.go(-1,!1)}).catch(hr),Promise.reject()):(S.delta&&i.go(-S.delta,!1),ne(p,F,d))).then(p=>{p=p||U(F,d,!1),p&&(S.delta&&!mt(p,8)?i.go(-S.delta,!1):S.type===xr.pop&&mt(p,20)&&i.go(-1,!1)),ye(F,d,p)}).catch(hr)}))}let ht=ir(),me=ir(),oe;function ne(_,M,S){Ct(_);const F=me.list();return F.length?F.forEach(re=>re(_,M,S)):console.error(_),Promise.reject(_)}function pt(){return oe&&c.value!==Rt?Promise.resolve():new Promise((_,M)=>{ht.add([_,M])})}function Ct(_){return oe||(oe=!_,Oe(),ht.list().forEach(([M,S])=>_?S(_):M()),ht.reset()),_}function tt(_,M,S,F){const{scrollBehavior:re}=e;if(!xn||!re)return Promise.resolve();const d=!S&&Ay($c(_.fullPath,0))||(F||!S)&&history.state&&history.state.scroll||null;return Jl().then(()=>re(_,M,d)).then(p=>p&&Iy(p)).catch(p=>ne(p,_,M))}const Re=_=>i.go(_);let wn;const En=new Set,Wr={currentRoute:c,listening:!0,addRoute:m,removeRoute:I,hasRoute:R,getRoutes:A,resolve:b,options:e,push:C,replace:H,go:Re,back:()=>Re(-1),forward:()=>Re(1),beforeEach:s.add,beforeResolve:a.add,afterEach:o.add,onError:me.add,isReady:pt,install(_){const M=this;_.component("RouterLink",c0),_.component("RouterView",d0),_.config.globalProperties.$router=M,Object.defineProperty(_.config.globalProperties,"$route",{enumerable:!0,get:()=>Ln(c)}),xn&&!wn&&c.value===Rt&&(wn=!0,C(i.location).catch(re=>{}));const S={};for(const re in Rt)Object.defineProperty(S,re,{get:()=>c.value[re],enumerable:!0});_.provide(oo,M),_.provide(Hf,Hl(S)),_.provide(oa,c);const F=_.unmount;En.add(_),_.unmount=function(){En.delete(_),En.size<1&&(l=Rt,ie&&ie(),ie=null,c.value=Rt,wn=!1,oe=!1),F()}}};function ke(_){return _.reduce((M,S)=>M.then(()=>q(S)),Promise.resolve())}return Wr}function p0(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let a=0;a<s;a++){const o=t.matched[a];o&&(e.matched.find(l=>Vn(l,o))?r.push(o):n.push(o));const c=e.matched[a];c&&(t.matched.find(l=>Vn(l,c))||i.push(c))}return[n,r,i]}const Le=h0({history:Sy("/TodoApp"),routes:[{path:"/",name:"land",component:()=>Zr(()=>import("./Landing-8f95732a.js"),[])},{path:"/todo",name:"todo",meta:{requiresAuth:!0},component:()=>Zr(()=>import("./Todo-271f9286.js"),["assets/Todo-271f9286.js","assets/Todo-bd4c0591.css"])},{path:"/important",name:"important",meta:{requiresAuth:!0},component:()=>Zr(()=>import("./important-a9e8e324.js"),["assets/important-a9e8e324.js","assets/Todo-bd4c0591.css"])},{path:"/completedTask",name:"completedTask",meta:{requiresAuth:!0},component:()=>Zr(()=>import("./completedTasks-4e1b0cb9.js"),[])}]});Ge.onAuthStateChanged(e=>{if(!e)return Le.push("/");Le.beforeEach(async(t,n)=>{if(t.path=="/"&&Ge.currentUser)return Le.push(Le.currentRoute);if(t.path=="/todo"&&!Ge.currentUser||t.path=="/completedTask"&&!Ge.currentUser||t.path=="/important"&&!Ge.currentUser)return Le.push("/")})});const m0=wm({state:{todo:[],fav:[],completed:[],user:null},mutations:{pushTodo(e,t){e.todo.unshift(t)},pushFav(e,t){e.fav.unshift(t)},pushCompleted(e,t){e.completed.unshift(t)},clrTodo(e){e.todo=[]},clrCompltd(e){e.completed=[]},setUser(e,t){e.user=t},clearUser(e){e.user=null}},actions:{addTodo({commit:e},t){e("pushTodo",t)},addFav({commit:e},t){e("pushFav",t)},addCompleted({commit:e},t){e("pushCompleted",t)},clearTodo({commit:e}){e("clrTodo")},clearCompleted({commit:e}){e("clrCompltd")},async login({commit:e},t){const{email:n,password:r}=t;try{await Vv(Ge,n,r)}catch(i){switch(i.code){case"auth/user-not-found":alert("User does not exist, please create an account");break;case"auth/wrong-password":alert("wrong password");break;case"auth/missing-password":alert("please enter your password");break;case"auth/network-request-failed":alert("No network detected");break;default:alert(i.code),console.log(i.code);break}return}e("setUser",Ge.currentUser),Le.push("/todo")},async register({commit:e},t){const{email:n,password:r}=t;try{await zv(Ge,n,r)}catch(i){switch(i.code){case"auth/email-already-in-use":alert("User already exist, please login");break;case"auth/invalid-email":alert("Email incorrect");break;case"auth/operation-not-allowed":alert("Operation not allowed");break;case"auth/weak-password":alert("Weak password");break;case"auth/missing-password":alert("please enter your password");break;case"auth/network-request-failed":alert("No network detected");break;default:alert("something went wrong"),console.log(i.code);break}return}e("setUser",Ge.currentUser),Le.push("/todo")},async logOut({commit:e}){await qv(Ge),e("clearUser"),Le.push("/")},fetchUser({commit:e}){Ge.onAuthStateChanged(async t=>{t===null?e("clearUser"):(e("setUser",t),Le.isReady()&&Le.currentRoute.value.path==="/"&&Le.push("/todo"))})}}}),g0="/TodoApp/assets/logo-1e5fddfa.png",zf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABuwAAAbsBOuzj4gAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAATZSURBVHic5ZvPa1RXFMc/d9TJwGgEFyVGyayU4kJoq2hB0GRZdBNoVxUU0r8gS7vtSrT/gNBNN21BhIZ0ldSFEAVtCF2kqbiwpCPZiUFiQsnt4p4Zb1/ee3k/zp33hh44DMnMfM/3e+bd3+caay0hzRjTBqaA08A4cDzyCtAFXkVe/wQWrbVvg/ILkQBjzARwVXwSaBWEegf8CswBc9bav3QYematVXGcyFlgBbCBfEVitNR4Kwg/AMwA6wGFR31dYh6oNAHANLA6QOFRXwWmB54AoAMsVSg86ktAZyAJAC4BGzUQHfUN4FLQBAA3ge0aiE3ybeCmegJwHd3dGgjM6nfJ2EFmFf+gBqLy+oMsSciSgGH65fc8CaUSgGvzVYso66l9wn69fZ07vKy+TcrokCS+Q/ihbhdYE98NHGuDhHlCUgJCTXIWcHP5K8CoF29U/jcrnwkReylTAnDTW+3gr4EbOeYbN+Q72jz2TJvjhjztuf0vwIms4j0uJ+S7mlxWiQyN0aAz2uLzCo9JhHYSZmITgFvPay5pXxf55ROeBM3msI63n+AHmlXOdOY2n7FP0OQ2G5cAzZ2cBS3xHj/N0WGlh9uA/h7eWfRsXhErBOZZ0ewSgNu81LSnynghMK9CmARYYFkRr2fLgq1lfc1tYAu99rWm3f69fmBNkecW0G7gDi2K7tsPs7WAqQbuxEbTThljRpUxEcxTyrCnG7w/ntIyA3ykjIlgGmXM8QbujE7bzg0J5vEQTwDAZ0OCOQ66PeuwTIX7IxbAZiDwui6GfN/sTYRC2FHgngLOPcEKZqGaQM/rtCES2wQeBg7Saw6Z+wTCbYlF/eFBXDlKaDsKfGeMuY5b1T0DfrPWvoH+JOdj4BNcbz81AE4A3YO4mpxB2DbQBMZwYk8aY5bkvU+BD+S9pnx2ZACcXoV+At4A3wM/Ak+ste8SPvfC/8MY0wIuAF8AX+K2zUNYF+Aa+m3rOfAV0FYYBtuC9TwAz2u9AFrL4bfA18BIgKXwCHBLYmhw3QLaPfB5BcBlCpap5ExEh/ebI2V83lrb3xGao5w9BiattS9L4uxrEmNSYpaxuR4gwATFM7kAHA79y8c8CYcpt1M8Ya3FByyyLf4zikWLBZLQEg55efe3xX2wvAcjPwCHqhLv8T4kXPJwjz0YyXM09jvQrFq8x70pnLJwjz8aE6Ash6P/AOerFh2ThPPCbT/+8YejApLlePx21WJTknB7H+7px+MCklYgsQkcq1poSgKOkb7Bk14g4QEllcjcqVpkhiTcSeCerURGQDrsLZLaRcbOOjtuThMtuspXJCVAcWVyPxFgnq8ofkQ4+pzzl8l5gHGFkot4FV51cdySeTGGb7FCSQ84rlR2GRirWrTHcYz4BVK5UlkBTyqWfgGcqYH4M8Ilyk+nWNpLQtyTsIMbe49UIPyIxN6J++WziM+cAC9o0oWJLnAduYYXWLiRWN0YHmEuTEQIpF2ZeQRcDpEIEX5ZYsTFDn9lxiPTIb2eeB34FrhYJhki+qJgpS3UCl+aKnVz1BgzDXwDfJjysZe4sfkp8LcI6VprdyJYTdxp7UncqdA54HNJdpL9Adyy1t4vqkHj0SxycXIX98g+E98gX8l8PS5ORhIxlFdn//eXp4Mk4D8Ban59/l9OEtImCtmLIgAAAABJRU5ErkJggg==",Vf=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n},v0={computed:{...Fu({totalTodo:"todo",totalFav:"fav",totalCompleted:"completed"}),todoTotal(){return this.totalTodo.length},favTotal(){return this.totalFav.length},completeTotal(){return this.totalCompleted.length}},methods:{logout(){this.$store.dispatch("logOut")},showNav(){var e=document.getElementById("nav"),t=document.getElementById("open"),n=document.getElementById("close");e.style.marginLeft=="-18rem"?(e.style.transition="300ms ease-in-out",e.style.marginLeft="0rem",t.style.marginTop="-13rem",t.style.transition="500ms ease-in-out",n.style.transition="700ms ease-in-out",n.style.rotate="360deg",n.style.marginLeft="20px"):(e.style.marginLeft="-18rem",t.style.transition="1050ms ease-in-out",t.style.marginTop="0rem",n.style.rotate="-360deg",n.style.transition="700ms ease-in-out",n.style.transitionDelay="300ms",n.style.marginLeft="-13rem")}},watch:{$route(){setTimeout(()=>{const t=so().currentUser.email.split("@",String(1)),n=String(t);this.name=n},30)}},data(){return{image:"",name:"",logo:g0}}},b0={class:"text-slate-800"},y0={class:"flex py-3 px-6 md:align-middle justify-between bg-slate-200"},_0={key:0,class:"hidden w-14 h-14 md:flex ml-3 md:align-middle space-x-1"},w0=$("div",{class:"md:m-1"},[$("img",{src:zf,alt:"user",class:"rounded-full -z-20"}),$("div",{class:"w-3 h-3 ml-10 relative -mt-3 z-10 bg-green-500 rounded-full"})],-1),E0={key:0,class:"text-sm font-bold my-auto"},I0=["src"],k0={id:"nav",class:"absolute bg-opacity-95 md:hidden rounded-r-md drop-shadow-2xl bg-slate-200 h-screen -ml-72 w-2/4"},A0={key:0,class:"ml-5 mt-5 opacity-100"},T0=$("img",{src:zf,alt:"user",class:"rounded-full -z-20"},null,-1),C0=$("div",{class:"w-3 h-3 ml-11 relative -mt-3 z-10 bg-green-500 rounded-full"},null,-1),x0=[T0,C0],S0={key:1,class:"text-center mr-10 text-sm font-bold"},O0={class:"h-fit border-4 flex flex-col mt-4 space-y-6"},P0={class:"text-xs"},R0=$("div",{class:"text-xs font-bold"},"Todo ",-1),N0={class:"bg-slate-900 w-5 pb-1 flex m-auto text-xs font-semibold rounded-full text-sky-200 font-serif"},M0={class:"m-auto"},L0={class:"text-xs"},D0=$("div",{class:"text-xs font-bold"},"Important Task ",-1),U0={class:"bg-slate-900 w-5 pb-1 flex m-auto text-xs font-semibold rounded-full text-sky-200 font-serif"},F0={class:"m-auto"},$0={class:"text-sm"},B0=$("div",{class:"text-xs font-bold"},"Completed Task ",-1),j0={class:"bg-slate-900 w-5 pb-1 flex m-auto text-xs font-semibold rounded-full text-sky-200 font-serif"},H0={class:"m-auto"},z0={class:"text-sm"},V0=$("div",{class:"text-xs font-bold"},"Contact Us",-1),W0={class:"outline-none flex space-x-4 py-2 w-full pl-3",to:"#"},K0={class:"text-sm"},G0=$("div",{class:"text-xs font-bold"},"Logout",-1),Y0={class:"text-sm"},q0=$("div",{class:"text-xs font-bold"},"Log in",-1);function X0(e,t,n,r,i,s){const a=Sn("font-awesome-icon"),o=Sn("router-link");return _e(),Te("header",b0,[$("div",y0,[G(a,{id:"open",class:"text-lg md:hidden cursor-pointer",icon:"fa-solid fa-bars",onClick:t[0]||(t[0]=c=>s.showNav())}),G(a,{id:"close",class:"text-xl md:hidden absolute -ml-52 cursor-pointer",icon:"fa-solid fa-xmark",onClick:t[1]||(t[1]=c=>s.showNav())}),e.$store.state.user?(_e(),Te("div",_0,[w0,e.$store.state.user?(_e(),Te("p",E0,Dt(i.name),1)):Ae("",!0)])):Ae("",!0),G(o,{class:"outline-none -mt-3 md:-mt-1 pt-1",to:"/"},{default:$e(()=>[$("img",{src:i.logo,alt:"DTlogo",class:"w-8 md:w-14"},null,8,I0)]),_:1}),e.$store.state.user?(_e(),Gs(a,{key:1,icon:"fa-solid fa-person-walking-dashed-line-arrow-right",class:"hover:text-xl transition-all cursor-pointer md:mt-3 md:mr-2",onClick:t[2]||(t[2]=c=>s.logout())})):Ae("",!0),e.$store.state.user?Ae("",!0):(_e(),Gs(a,{key:2,icon:"fa-solid fa-right-to-bracket",class:"hover:text-xl transition-all cursor-pointer md:mt-3 md:mr-2",onClick:t[3]||(t[3]=c=>s.logout())}))]),$("nav",k0,[e.$store.state.user?(_e(),Te("div",A0,x0)):Ae("",!0),e.$store.state.user?(_e(),Te("p",S0,Dt(i.name),1)):Ae("",!0),$("ul",O0,[e.$store.state.user?(_e(),Te("li",{key:0,onClick:t[4]||(t[4]=c=>s.showNav()),class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2 pr-3"},[G(o,{class:"outline-none flex space-x-4 py-2 w-full pl-3",to:"/todo"},{default:$e(()=>[$("div",P0,[G(a,{icon:"fa-solid fa-home"})]),R0]),_:1}),$("div",N0,[$("p",M0,Dt(s.todoTotal),1)])])):Ae("",!0),e.$store.state.user?(_e(),Te("li",{key:1,onClick:t[5]||(t[5]=c=>s.showNav()),class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2 pr-3"},[G(o,{class:"outline-none flex space-x-4 py-2 w-full pl-3",to:"/important"},{default:$e(()=>[$("div",L0,[G(a,{icon:"fa-solid fa-star"})]),D0]),_:1}),$("div",U0,[$("p",F0,Dt(s.favTotal),1)])])):Ae("",!0),e.$store.state.user?(_e(),Te("li",{key:2,onClick:t[6]||(t[6]=c=>s.showNav()),class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2 pr-3"},[G(o,{class:"outline-none flex space-x-4 py-2 w-full pl-3",to:"/completedTask"},{default:$e(()=>[$("div",$0,[G(a,{icon:"fa-solid fa-check"})]),B0]),_:1}),$("div",j0,[$("p",H0,Dt(s.completeTotal),1)])])):Ae("",!0),$("li",{onClick:t[7]||(t[7]=c=>s.showNav()),class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2 pr-3"},[G(o,{class:"outline-none flex space-x-4 py-2 w-full pl-3",to:"#"},{default:$e(()=>[$("div",z0,[G(a,{icon:"fa-solid fa-headset"})]),V0]),_:1})]),e.$store.state.user?(_e(),Te("li",{key:3,class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2",onClick:t[8]||(t[8]=c=>(s.logout(),s.showNav()))},[$("div",W0,[$("div",K0,[G(a,{icon:"fa-solid fa-person-walking-dashed-line-arrow-right"})]),G0])])):Ae("",!0),e.$store.state.user?Ae("",!0):(_e(),Te("li",{key:4,class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2",onClick:t[9]||(t[9]=c=>s.showNav())},[G(o,{class:"outline-none flex space-x-4 py-2 w-full pl-3",to:"/"},{default:$e(()=>[$("div",Y0,[G(a,{icon:"fa-solid fa-right-to-bracket"})]),q0]),_:1})]))])])])}const J0=Vf(v0,[["render",X0]]);const Q0={components:{Header:J0},computed:{...Fu({totalTodo:"todo",totalFav:"fav",totalCompleted:"completed"}),completeTotal(){return this.totalCompleted.length},favTotal(){return this.totalFav.length},todoTotal(){return this.totalTodo.length}},methods:{logout(){this.$store.dispatch("logOut")}},setup(){const e=sm(),t=so();lu(()=>{e.dispatch("fetchUser")}),Ua(()=>{Yv(t,n=>{n&&(n.getIdToken().then(r=>{document.cookie=`session= ${r}; max-age= ${60*60*24}`}),Wv(t,no))})})}},Z0={class:"m-auto p-0 w-screen md:w-4/5 md:m-auto overflow-hidden md:overflow-hidden h-screen"},e_={class:"overflow-hidden"},t_={class:"md:flex bg-blue-200 md:shadow-lg h-screen"},n_={class:"md:flex hidden rounded-r-md drop-shadow-2xl md:pr-2 bg-slate-200 w-2/5"},r_={class:"w-full h-fit flex flex-col ml-2 mt-8 space-y-8"},i_={key:0,class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 px-2"},s_={class:"text-sm"},a_=$("div",{class:"text-xs font-semibold"},"Todo",-1),o_={class:"bg-slate-900 w-5 pb-1 flex m-auto text-xs font-semibold rounded-full text-sky-200 font-serif"},c_={class:"m-auto"},l_={key:1,class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 px-2"},u_={class:"text-sm"},f_=$("div",{class:"text-xs font-semibold"},"Important Task",-1),d_={class:"bg-slate-900 w-5 pb-1 flex m-auto text-xs font-semibold rounded-full text-sky-200 font-serif"},h_={class:"m-auto"},p_={key:2,class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 px-2"},m_={class:"text-sm"},g_=$("div",{class:"text-xs font-semibold"},"Completed Task",-1),v_={class:"bg-slate-900 w-5 pb-1 flex m-auto text-xs font-semibold rounded-full text-sky-200 font-serif"},b_={class:"m-auto"},y_={class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2"},__={class:"text-sm"},w_=$("div",{class:"text-xs font-semibold"},"Contact Us",-1),E_={class:"outline-none flex space-x-4 py-2 w-full pl-3",to:"#"},I_={class:"text-sm"},k_=$("div",{class:"text-xs font-bold"},"Logout",-1),A_={class:"text-sm"},T_=$("div",{class:"text-xs font-bold"},"Log in",-1);function C_(e,t,n,r,i,s){const a=Sn("Header"),o=Sn("font-awesome-icon"),c=Sn("router-link"),l=Sn("router-view");return _e(),Te("div",Z0,[$("div",e_,[G(a,{class:"sticky top-0 z-10"}),$("div",t_,[$("nav",n_,[$("ul",r_,[e.$store.state.user?(_e(),Te("li",i_,[G(c,{class:"outline-none flex space-x-4 md:py-3 w-full pl-3",to:"/todo"},{default:$e(()=>[$("div",s_,[G(o,{icon:"fa-solid fa-home"})]),a_]),_:1}),$("div",o_,[$("p",c_,Dt(s.todoTotal),1)])])):Ae("",!0),e.$store.state.user?(_e(),Te("li",l_,[G(c,{class:"outline-none flex space-x-4 md:py-3 w-full pl-3",to:"/important"},{default:$e(()=>[$("div",u_,[G(o,{icon:"fa-solid fa-star"})]),f_]),_:1}),$("div",d_,[$("p",h_,Dt(s.favTotal),1)])])):Ae("",!0),e.$store.state.user?(_e(),Te("li",p_,[G(c,{class:"outline-none flex space-x-4 md:py-3 w-full pl-3",to:"/completedTask"},{default:$e(()=>[$("div",m_,[G(o,{icon:"fa-solid fa-check"})]),g_]),_:1}),$("div",v_,[$("p",b_,Dt(s.completeTotal),1)])])):Ae("",!0),$("li",y_,[G(c,{class:"outline-none flex space-x-4 md:py-3 w-full pl-3",to:"#"},{default:$e(()=>[$("div",__,[G(o,{icon:"fa-solid fa-headset"})]),w_]),_:1})]),e.$store.state.user?(_e(),Te("li",{key:3,class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2",onClick:t[0]||(t[0]=u=>(s.logout(),e.showNav()))},[$("div",E_,[$("div",I_,[G(o,{icon:"fa-solid fa-person-walking-dashed-line-arrow-right"})]),k_])])):Ae("",!0),e.$store.state.user?Ae("",!0):(_e(),Te("li",{key:4,class:"hover:bg-sky-200 hover:shadow-lg hover:text-slate-900 rounded-md transition flex flex-row space-x-2 pl-2",onClick:t[1]||(t[1]=u=>e.showNav())},[G(c,{class:"outline-none flex space-x-4 py-2 w-full pl-3",to:"/"},{default:$e(()=>[$("div",A_,[G(o,{icon:"fa-solid fa-right-to-bracket"})]),T_]),_:1})]))])]),G(Ha,{name:"slide-fade"},{default:$e(()=>[G(l,{class:"md:w-full md:h-full overflow-hidden"})]),_:1})])])])}const x_=Vf(Q0,[["render",C_]]);function Zc(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function N(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Zc(Object(n),!0).forEach(function(r){we(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Zc(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Li(e){"@babel/helpers - typeof";return Li=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Li(e)}function S_(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function el(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function O_(e,t,n){return t&&el(e.prototype,t),n&&el(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function we(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function co(e,t){return R_(e)||M_(e,t)||Wf(e,t)||D_()}function Hr(e){return P_(e)||N_(e)||Wf(e)||L_()}function P_(e){if(Array.isArray(e))return ca(e)}function R_(e){if(Array.isArray(e))return e}function N_(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function M_(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],i=!0,s=!1,a,o;try{for(n=n.call(e);!(i=(a=n.next()).done)&&(r.push(a.value),!(t&&r.length===t));i=!0);}catch(c){s=!0,o=c}finally{try{!i&&n.return!=null&&n.return()}finally{if(s)throw o}}return r}}function Wf(e,t){if(e){if(typeof e=="string")return ca(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return ca(e,t)}}function ca(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function L_(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function D_(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var tl=function(){},lo={},Kf={},Gf=null,Yf={mark:tl,measure:tl};try{typeof window<"u"&&(lo=window),typeof document<"u"&&(Kf=document),typeof MutationObserver<"u"&&(Gf=MutationObserver),typeof performance<"u"&&(Yf=performance)}catch{}var U_=lo.navigator||{},nl=U_.userAgent,rl=nl===void 0?"":nl,Gt=lo,de=Kf,il=Gf,ei=Yf;Gt.document;var Tt=!!de.documentElement&&!!de.head&&typeof de.addEventListener=="function"&&typeof de.createElement=="function",qf=~rl.indexOf("MSIE")||~rl.indexOf("Trident/"),ti,ni,ri,ii,si,Et="___FONT_AWESOME___",la=16,Xf="fa",Jf="svg-inline--fa",vn="data-fa-i2svg",ua="data-fa-pseudo-element",F_="data-fa-pseudo-element-pending",uo="data-prefix",fo="data-icon",sl="fontawesome-i2svg",$_="async",B_=["HTML","HEAD","STYLE","SCRIPT"],Qf=function(){try{return!0}catch{return!1}}(),fe="classic",pe="sharp",ho=[fe,pe];function zr(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[fe]}})}var Sr=zr((ti={},we(ti,fe,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),we(ti,pe,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),ti)),Or=zr((ni={},we(ni,fe,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),we(ni,pe,{solid:"fass",regular:"fasr",light:"fasl"}),ni)),Pr=zr((ri={},we(ri,fe,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),we(ri,pe,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),ri)),j_=zr((ii={},we(ii,fe,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),we(ii,pe,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),ii)),H_=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Zf="fa-layers-text",z_=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,V_=zr((si={},we(si,fe,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),we(si,pe,{900:"fass",400:"fasr",300:"fasl"}),si)),ed=[1,2,3,4,5,6,7,8,9,10],W_=ed.concat([11,12,13,14,15,16,17,18,19,20]),K_=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],cn={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Rr=new Set;Object.keys(Or[fe]).map(Rr.add.bind(Rr));Object.keys(Or[pe]).map(Rr.add.bind(Rr));var G_=[].concat(ho,Hr(Rr),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",cn.GROUP,cn.SWAP_OPACITY,cn.PRIMARY,cn.SECONDARY]).concat(ed.map(function(e){return"".concat(e,"x")})).concat(W_.map(function(e){return"w-".concat(e)})),mr=Gt.FontAwesomeConfig||{};function Y_(e){var t=de.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function q_(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(de&&typeof de.querySelector=="function"){var X_=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];X_.forEach(function(e){var t=co(e,2),n=t[0],r=t[1],i=q_(Y_(n));i!=null&&(mr[r]=i)})}var td={styleDefault:"solid",familyDefault:"classic",cssPrefix:Xf,replacementClass:Jf,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};mr.familyPrefix&&(mr.cssPrefix=mr.familyPrefix);var Kn=N(N({},td),mr);Kn.autoReplaceSvg||(Kn.observeMutations=!1);var D={};Object.keys(td).forEach(function(e){Object.defineProperty(D,e,{enumerable:!0,set:function(n){Kn[e]=n,gr.forEach(function(r){return r(D)})},get:function(){return Kn[e]}})});Object.defineProperty(D,"familyPrefix",{enumerable:!0,set:function(t){Kn.cssPrefix=t,gr.forEach(function(n){return n(D)})},get:function(){return Kn.cssPrefix}});Gt.FontAwesomeConfig=D;var gr=[];function J_(e){return gr.push(e),function(){gr.splice(gr.indexOf(e),1)}}var Nt=la,ot={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Q_(e){if(!(!e||!Tt)){var t=de.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=de.head.childNodes,r=null,i=n.length-1;i>-1;i--){var s=n[i],a=(s.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(a)>-1&&(r=s)}return de.head.insertBefore(t,r),e}}var Z_="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Nr(){for(var e=12,t="";e-- >0;)t+=Z_[Math.random()*62|0];return t}function er(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function po(e){return e.classList?er(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function nd(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function e1(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(nd(e[n]),'" ')},"").trim()}function rs(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function mo(e){return e.size!==ot.size||e.x!==ot.x||e.y!==ot.y||e.rotate!==ot.rotate||e.flipX||e.flipY}function t1(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,i={transform:"translate(".concat(n/2," 256)")},s="translate(".concat(t.x*32,", ").concat(t.y*32,") "),a="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),c={transform:"".concat(s," ").concat(a," ").concat(o)},l={transform:"translate(".concat(r/2*-1," -256)")};return{outer:i,inner:c,path:l}}function n1(e){var t=e.transform,n=e.width,r=n===void 0?la:n,i=e.height,s=i===void 0?la:i,a=e.startCentered,o=a===void 0?!1:a,c="";return o&&qf?c+="translate(".concat(t.x/Nt-r/2,"em, ").concat(t.y/Nt-s/2,"em) "):o?c+="translate(calc(-50% + ".concat(t.x/Nt,"em), calc(-50% + ").concat(t.y/Nt,"em)) "):c+="translate(".concat(t.x/Nt,"em, ").concat(t.y/Nt,"em) "),c+="scale(".concat(t.size/Nt*(t.flipX?-1:1),", ").concat(t.size/Nt*(t.flipY?-1:1),") "),c+="rotate(".concat(t.rotate,"deg) "),c}var r1=`:root, :host {
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
}`;function rd(){var e=Xf,t=Jf,n=D.cssPrefix,r=D.replacementClass,i=r1;if(n!==e||r!==t){var s=new RegExp("\\.".concat(e,"\\-"),"g"),a=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");i=i.replace(s,".".concat(n,"-")).replace(a,"--".concat(n,"-")).replace(o,".".concat(r))}return i}var al=!1;function xs(){D.autoAddCss&&!al&&(Q_(rd()),al=!0)}var i1={mixout:function(){return{dom:{css:rd,insertCss:xs}}},hooks:function(){return{beforeDOMElementCreation:function(){xs()},beforeI2svg:function(){xs()}}}},It=Gt||{};It[Et]||(It[Et]={});It[Et].styles||(It[Et].styles={});It[Et].hooks||(It[Et].hooks={});It[Et].shims||(It[Et].shims=[]);var Xe=It[Et],id=[],s1=function e(){de.removeEventListener("DOMContentLoaded",e),Di=1,id.map(function(t){return t()})},Di=!1;Tt&&(Di=(de.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(de.readyState),Di||de.addEventListener("DOMContentLoaded",s1));function a1(e){Tt&&(Di?setTimeout(e,0):id.push(e))}function Vr(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,i=e.children,s=i===void 0?[]:i;return typeof e=="string"?nd(e):"<".concat(t," ").concat(e1(r),">").concat(s.map(Vr).join(""),"</").concat(t,">")}function ol(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var o1=function(t,n){return function(r,i,s,a){return t.call(n,r,i,s,a)}},Ss=function(t,n,r,i){var s=Object.keys(t),a=s.length,o=i!==void 0?o1(n,i):n,c,l,u;for(r===void 0?(c=1,u=t[s[0]]):(c=0,u=r);c<a;c++)l=s[c],u=o(u,t[l],l,t);return u};function c1(e){for(var t=[],n=0,r=e.length;n<r;){var i=e.charCodeAt(n++);if(i>=55296&&i<=56319&&n<r){var s=e.charCodeAt(n++);(s&64512)==56320?t.push(((i&1023)<<10)+(s&1023)+65536):(t.push(i),n--)}else t.push(i)}return t}function fa(e){var t=c1(e);return t.length===1?t[0].toString(16):null}function l1(e,t){var n=e.length,r=e.charCodeAt(t),i;return r>=55296&&r<=56319&&n>t+1&&(i=e.charCodeAt(t+1),i>=56320&&i<=57343)?(r-55296)*1024+i-56320+65536:r}function cl(e){return Object.keys(e).reduce(function(t,n){var r=e[n],i=!!r.icon;return i?t[r.iconName]=r.icon:t[n]=r,t},{})}function da(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,i=r===void 0?!1:r,s=cl(t);typeof Xe.hooks.addPack=="function"&&!i?Xe.hooks.addPack(e,cl(t)):Xe.styles[e]=N(N({},Xe.styles[e]||{}),s),e==="fas"&&da("fa",t)}var ai,oi,ci,On=Xe.styles,u1=Xe.shims,f1=(ai={},we(ai,fe,Object.values(Pr[fe])),we(ai,pe,Object.values(Pr[pe])),ai),go=null,sd={},ad={},od={},cd={},ld={},d1=(oi={},we(oi,fe,Object.keys(Sr[fe])),we(oi,pe,Object.keys(Sr[pe])),oi);function h1(e){return~G_.indexOf(e)}function p1(e,t){var n=t.split("-"),r=n[0],i=n.slice(1).join("-");return r===e&&i!==""&&!h1(i)?i:null}var ud=function(){var t=function(s){return Ss(On,function(a,o,c){return a[c]=Ss(o,s,{}),a},{})};sd=t(function(i,s,a){if(s[3]&&(i[s[3]]=a),s[2]){var o=s[2].filter(function(c){return typeof c=="number"});o.forEach(function(c){i[c.toString(16)]=a})}return i}),ad=t(function(i,s,a){if(i[a]=a,s[2]){var o=s[2].filter(function(c){return typeof c=="string"});o.forEach(function(c){i[c]=a})}return i}),ld=t(function(i,s,a){var o=s[2];return i[a]=a,o.forEach(function(c){i[c]=a}),i});var n="far"in On||D.autoFetchSvg,r=Ss(u1,function(i,s){var a=s[0],o=s[1],c=s[2];return o==="far"&&!n&&(o="fas"),typeof a=="string"&&(i.names[a]={prefix:o,iconName:c}),typeof a=="number"&&(i.unicodes[a.toString(16)]={prefix:o,iconName:c}),i},{names:{},unicodes:{}});od=r.names,cd=r.unicodes,go=is(D.styleDefault,{family:D.familyDefault})};J_(function(e){go=is(e.styleDefault,{family:D.familyDefault})});ud();function vo(e,t){return(sd[e]||{})[t]}function m1(e,t){return(ad[e]||{})[t]}function ln(e,t){return(ld[e]||{})[t]}function fd(e){return od[e]||{prefix:null,iconName:null}}function g1(e){var t=cd[e],n=vo("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Yt(){return go}var bo=function(){return{prefix:null,iconName:null,rest:[]}};function is(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?fe:n,i=Sr[r][e],s=Or[r][e]||Or[r][i],a=e in Xe.styles?e:null;return s||a||null}var ll=(ci={},we(ci,fe,Object.keys(Pr[fe])),we(ci,pe,Object.keys(Pr[pe])),ci);function ss(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,i=r===void 0?!1:r,s=(t={},we(t,fe,"".concat(D.cssPrefix,"-").concat(fe)),we(t,pe,"".concat(D.cssPrefix,"-").concat(pe)),t),a=null,o=fe;(e.includes(s[fe])||e.some(function(l){return ll[fe].includes(l)}))&&(o=fe),(e.includes(s[pe])||e.some(function(l){return ll[pe].includes(l)}))&&(o=pe);var c=e.reduce(function(l,u){var f=p1(D.cssPrefix,u);if(On[u]?(u=f1[o].includes(u)?j_[o][u]:u,a=u,l.prefix=u):d1[o].indexOf(u)>-1?(a=u,l.prefix=is(u,{family:o})):f?l.iconName=f:u!==D.replacementClass&&u!==s[fe]&&u!==s[pe]&&l.rest.push(u),!i&&l.prefix&&l.iconName){var h=a==="fa"?fd(l.iconName):{},m=ln(l.prefix,l.iconName);h.prefix&&(a=null),l.iconName=h.iconName||m||l.iconName,l.prefix=h.prefix||l.prefix,l.prefix==="far"&&!On.far&&On.fas&&!D.autoFetchSvg&&(l.prefix="fas")}return l},bo());return(e.includes("fa-brands")||e.includes("fab"))&&(c.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(c.prefix="fad"),!c.prefix&&o===pe&&(On.fass||D.autoFetchSvg)&&(c.prefix="fass",c.iconName=ln(c.prefix,c.iconName)||c.iconName),(c.prefix==="fa"||a==="fa")&&(c.prefix=Yt()||"fas"),c}var v1=function(){function e(){S_(this,e),this.definitions={}}return O_(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];var a=i.reduce(this._pullDefinitions,{});Object.keys(a).forEach(function(o){n.definitions[o]=N(N({},n.definitions[o]||{}),a[o]),da(o,a[o]);var c=Pr[fe][o];c&&da(c,a[o]),ud()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var i=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(i).map(function(s){var a=i[s],o=a.prefix,c=a.iconName,l=a.icon,u=l[2];n[o]||(n[o]={}),u.length>0&&u.forEach(function(f){typeof f=="string"&&(n[o][f]=l)}),n[o][c]=l}),n}}]),e}(),ul=[],Pn={},Bn={},b1=Object.keys(Bn);function y1(e,t){var n=t.mixoutsTo;return ul=e,Pn={},Object.keys(Bn).forEach(function(r){b1.indexOf(r)===-1&&delete Bn[r]}),ul.forEach(function(r){var i=r.mixout?r.mixout():{};if(Object.keys(i).forEach(function(a){typeof i[a]=="function"&&(n[a]=i[a]),Li(i[a])==="object"&&Object.keys(i[a]).forEach(function(o){n[a]||(n[a]={}),n[a][o]=i[a][o]})}),r.hooks){var s=r.hooks();Object.keys(s).forEach(function(a){Pn[a]||(Pn[a]=[]),Pn[a].push(s[a])})}r.provides&&r.provides(Bn)}),n}function ha(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),i=2;i<n;i++)r[i-2]=arguments[i];var s=Pn[e]||[];return s.forEach(function(a){t=a.apply(null,[t].concat(r))}),t}function bn(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=Pn[e]||[];i.forEach(function(s){s.apply(null,n)})}function kt(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Bn[e]?Bn[e].apply(null,t):void 0}function pa(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Yt();if(t)return t=ln(n,t)||t,ol(dd.definitions,n,t)||ol(Xe.styles,n,t)}var dd=new v1,_1=function(){D.autoReplaceSvg=!1,D.observeMutations=!1,bn("noAuto")},w1={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Tt?(bn("beforeI2svg",t),kt("pseudoElements2svg",t),kt("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;D.autoReplaceSvg===!1&&(D.autoReplaceSvg=!0),D.observeMutations=!0,a1(function(){I1({autoReplaceSvgRoot:n}),bn("watch",t)})}},E1={icon:function(t){if(t===null)return null;if(Li(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:ln(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=is(t[0]);return{prefix:r,iconName:ln(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(D.cssPrefix,"-"))>-1||t.match(H_))){var i=ss(t.split(" "),{skipLookups:!0});return{prefix:i.prefix||Yt(),iconName:ln(i.prefix,i.iconName)||i.iconName}}if(typeof t=="string"){var s=Yt();return{prefix:s,iconName:ln(s,t)||t}}}},je={noAuto:_1,config:D,dom:w1,parse:E1,library:dd,findIconDefinition:pa,toHtml:Vr},I1=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?de:n;(Object.keys(Xe.styles).length>0||D.autoFetchSvg)&&Tt&&D.autoReplaceSvg&&je.dom.i2svg({node:r})};function as(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return Vr(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Tt){var r=de.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function k1(e){var t=e.children,n=e.main,r=e.mask,i=e.attributes,s=e.styles,a=e.transform;if(mo(a)&&n.found&&!r.found){var o=n.width,c=n.height,l={x:o/c/2,y:.5};i.style=rs(N(N({},s),{},{"transform-origin":"".concat(l.x+a.x/16,"em ").concat(l.y+a.y/16,"em")}))}return[{tag:"svg",attributes:i,children:t}]}function A1(e){var t=e.prefix,n=e.iconName,r=e.children,i=e.attributes,s=e.symbol,a=s===!0?"".concat(t,"-").concat(D.cssPrefix,"-").concat(n):s;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:N(N({},i),{},{id:a}),children:r}]}]}function yo(e){var t=e.icons,n=t.main,r=t.mask,i=e.prefix,s=e.iconName,a=e.transform,o=e.symbol,c=e.title,l=e.maskId,u=e.titleId,f=e.extra,h=e.watchable,m=h===void 0?!1:h,I=r.found?r:n,A=I.width,R=I.height,b=i==="fak",y=[D.replacementClass,s?"".concat(D.cssPrefix,"-").concat(s):""].filter(function(q){return f.classes.indexOf(q)===-1}).filter(function(q){return q!==""||!!q}).concat(f.classes).join(" "),O={children:[],attributes:N(N({},f.attributes),{},{"data-prefix":i,"data-icon":s,class:y,role:f.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(A," ").concat(R)})},C=b&&!~f.classes.indexOf("fa-fw")?{width:"".concat(A/R*16*.0625,"em")}:{};m&&(O.attributes[vn]=""),c&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(u||Nr())},children:[c]}),delete O.attributes.title);var H=N(N({},O),{},{prefix:i,iconName:s,main:n,mask:r,maskId:l,transform:a,symbol:o,styles:N(N({},C),f.styles)}),J=r.found&&n.found?kt("generateAbstractMask",H)||{children:[],attributes:{}}:kt("generateAbstractIcon",H)||{children:[],attributes:{}},te=J.children,V=J.attributes;return H.children=te,H.attributes=V,o?A1(H):k1(H)}function fl(e){var t=e.content,n=e.width,r=e.height,i=e.transform,s=e.title,a=e.extra,o=e.watchable,c=o===void 0?!1:o,l=N(N(N({},a.attributes),s?{title:s}:{}),{},{class:a.classes.join(" ")});c&&(l[vn]="");var u=N({},a.styles);mo(i)&&(u.transform=n1({transform:i,startCentered:!0,width:n,height:r}),u["-webkit-transform"]=u.transform);var f=rs(u);f.length>0&&(l.style=f);var h=[];return h.push({tag:"span",attributes:l,children:[t]}),s&&h.push({tag:"span",attributes:{class:"sr-only"},children:[s]}),h}function T1(e){var t=e.content,n=e.title,r=e.extra,i=N(N(N({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),s=rs(r.styles);s.length>0&&(i.style=s);var a=[];return a.push({tag:"span",attributes:i,children:[t]}),n&&a.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),a}var Os=Xe.styles;function ma(e){var t=e[0],n=e[1],r=e.slice(4),i=co(r,1),s=i[0],a=null;return Array.isArray(s)?a={tag:"g",attributes:{class:"".concat(D.cssPrefix,"-").concat(cn.GROUP)},children:[{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(cn.SECONDARY),fill:"currentColor",d:s[0]}},{tag:"path",attributes:{class:"".concat(D.cssPrefix,"-").concat(cn.PRIMARY),fill:"currentColor",d:s[1]}}]}:a={tag:"path",attributes:{fill:"currentColor",d:s}},{found:!0,width:t,height:n,icon:a}}var C1={found:!1,width:512,height:512};function x1(e,t){!Qf&&!D.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function ga(e,t){var n=t;return t==="fa"&&D.styleDefault!==null&&(t=Yt()),new Promise(function(r,i){if(kt("missingIconAbstract"),n==="fa"){var s=fd(e)||{};e=s.iconName||e,t=s.prefix||t}if(e&&t&&Os[t]&&Os[t][e]){var a=Os[t][e];return r(ma(a))}x1(e,t),r(N(N({},C1),{},{icon:D.showMissingIcons&&e?kt("missingIconAbstract")||{}:{}}))})}var dl=function(){},va=D.measurePerformance&&ei&&ei.mark&&ei.measure?ei:{mark:dl,measure:dl},lr='FA "6.4.0"',S1=function(t){return va.mark("".concat(lr," ").concat(t," begins")),function(){return hd(t)}},hd=function(t){va.mark("".concat(lr," ").concat(t," ends")),va.measure("".concat(lr," ").concat(t),"".concat(lr," ").concat(t," begins"),"".concat(lr," ").concat(t," ends"))},_o={begin:S1,end:hd},bi=function(){};function hl(e){var t=e.getAttribute?e.getAttribute(vn):null;return typeof t=="string"}function O1(e){var t=e.getAttribute?e.getAttribute(uo):null,n=e.getAttribute?e.getAttribute(fo):null;return t&&n}function P1(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(D.replacementClass)}function R1(){if(D.autoReplaceSvg===!0)return yi.replace;var e=yi[D.autoReplaceSvg];return e||yi.replace}function N1(e){return de.createElementNS("http://www.w3.org/2000/svg",e)}function M1(e){return de.createElement(e)}function pd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?N1:M1:n;if(typeof e=="string")return de.createTextNode(e);var i=r(e.tag);Object.keys(e.attributes||[]).forEach(function(a){i.setAttribute(a,e.attributes[a])});var s=e.children||[];return s.forEach(function(a){i.appendChild(pd(a,{ceFn:r}))}),i}function L1(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var yi={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(i){n.parentNode.insertBefore(pd(i),n)}),n.getAttribute(vn)===null&&D.keepOriginalSource){var r=de.createComment(L1(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~po(n).indexOf(D.replacementClass))return yi.replace(t);var i=new RegExp("".concat(D.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var s=r[0].attributes.class.split(" ").reduce(function(o,c){return c===D.replacementClass||c.match(i)?o.toSvg.push(c):o.toNode.push(c),o},{toNode:[],toSvg:[]});r[0].attributes.class=s.toSvg.join(" "),s.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",s.toNode.join(" "))}var a=r.map(function(o){return Vr(o)}).join(`
`);n.setAttribute(vn,""),n.innerHTML=a}};function pl(e){e()}function md(e,t){var n=typeof t=="function"?t:bi;if(e.length===0)n();else{var r=pl;D.mutateApproach===$_&&(r=Gt.requestAnimationFrame||pl),r(function(){var i=R1(),s=_o.begin("mutate");e.map(i),s(),n()})}}var wo=!1;function gd(){wo=!0}function ba(){wo=!1}var Ui=null;function ml(e){if(il&&D.observeMutations){var t=e.treeCallback,n=t===void 0?bi:t,r=e.nodeCallback,i=r===void 0?bi:r,s=e.pseudoElementsCallback,a=s===void 0?bi:s,o=e.observeMutationsRoot,c=o===void 0?de:o;Ui=new il(function(l){if(!wo){var u=Yt();er(l).forEach(function(f){if(f.type==="childList"&&f.addedNodes.length>0&&!hl(f.addedNodes[0])&&(D.searchPseudoElements&&a(f.target),n(f.target)),f.type==="attributes"&&f.target.parentNode&&D.searchPseudoElements&&a(f.target.parentNode),f.type==="attributes"&&hl(f.target)&&~K_.indexOf(f.attributeName))if(f.attributeName==="class"&&O1(f.target)){var h=ss(po(f.target)),m=h.prefix,I=h.iconName;f.target.setAttribute(uo,m||u),I&&f.target.setAttribute(fo,I)}else P1(f.target)&&i(f.target)})}}),Tt&&Ui.observe(c,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function D1(){Ui&&Ui.disconnect()}function U1(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,i){var s=i.split(":"),a=s[0],o=s.slice(1);return a&&o.length>0&&(r[a]=o.join(":").trim()),r},{})),n}function F1(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",i=ss(po(e));return i.prefix||(i.prefix=Yt()),t&&n&&(i.prefix=t,i.iconName=n),i.iconName&&i.prefix||(i.prefix&&r.length>0&&(i.iconName=m1(i.prefix,e.innerText)||vo(i.prefix,fa(e.innerText))),!i.iconName&&D.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(i.iconName=e.firstChild.data)),i}function $1(e){var t=er(e.attributes).reduce(function(i,s){return i.name!=="class"&&i.name!=="style"&&(i[s.name]=s.value),i},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return D.autoA11y&&(n?t["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(r||Nr()):(t["aria-hidden"]="true",t.focusable="false")),t}function B1(){return{iconName:null,title:null,titleId:null,prefix:null,transform:ot,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function gl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=F1(e),r=n.iconName,i=n.prefix,s=n.rest,a=$1(e),o=ha("parseNodeAttributes",{},e),c=t.styleParser?U1(e):[];return N({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:i,transform:ot,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:s,styles:c,attributes:a}},o)}var j1=Xe.styles;function vd(e){var t=D.autoReplaceSvg==="nest"?gl(e,{styleParser:!1}):gl(e);return~t.extra.classes.indexOf(Zf)?kt("generateLayersText",e,t):kt("generateSvgReplacementMutation",e,t)}var qt=new Set;ho.map(function(e){qt.add("fa-".concat(e))});Object.keys(Sr[fe]).map(qt.add.bind(qt));Object.keys(Sr[pe]).map(qt.add.bind(qt));qt=Hr(qt);function vl(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Tt)return Promise.resolve();var n=de.documentElement.classList,r=function(f){return n.add("".concat(sl,"-").concat(f))},i=function(f){return n.remove("".concat(sl,"-").concat(f))},s=D.autoFetchSvg?qt:ho.map(function(u){return"fa-".concat(u)}).concat(Object.keys(j1));s.includes("fa")||s.push("fa");var a=[".".concat(Zf,":not([").concat(vn,"])")].concat(s.map(function(u){return".".concat(u,":not([").concat(vn,"])")})).join(", ");if(a.length===0)return Promise.resolve();var o=[];try{o=er(e.querySelectorAll(a))}catch{}if(o.length>0)r("pending"),i("complete");else return Promise.resolve();var c=_o.begin("onTree"),l=o.reduce(function(u,f){try{var h=vd(f);h&&u.push(h)}catch(m){Qf||m.name==="MissingIcon"&&console.error(m)}return u},[]);return new Promise(function(u,f){Promise.all(l).then(function(h){md(h,function(){r("active"),r("complete"),i("pending"),typeof t=="function"&&t(),c(),u()})}).catch(function(h){c(),f(h)})})}function H1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;vd(e).then(function(n){n&&md([n],t)})}function z1(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:pa(t||{}),i=n.mask;return i&&(i=(i||{}).icon?i:pa(i||{})),e(r,N(N({},n),{},{mask:i}))}}var V1=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,i=r===void 0?ot:r,s=n.symbol,a=s===void 0?!1:s,o=n.mask,c=o===void 0?null:o,l=n.maskId,u=l===void 0?null:l,f=n.title,h=f===void 0?null:f,m=n.titleId,I=m===void 0?null:m,A=n.classes,R=A===void 0?[]:A,b=n.attributes,y=b===void 0?{}:b,O=n.styles,C=O===void 0?{}:O;if(t){var H=t.prefix,J=t.iconName,te=t.icon;return as(N({type:"icon"},t),function(){return bn("beforeDOMElementCreation",{iconDefinition:t,params:n}),D.autoA11y&&(h?y["aria-labelledby"]="".concat(D.replacementClass,"-title-").concat(I||Nr()):(y["aria-hidden"]="true",y.focusable="false")),yo({icons:{main:ma(te),mask:c?ma(c.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:J,transform:N(N({},ot),i),symbol:a,title:h,maskId:u,titleId:I,extra:{attributes:y,styles:C,classes:R}})})}},W1={mixout:function(){return{icon:z1(V1)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=vl,n.nodeCallback=H1,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,i=r===void 0?de:r,s=n.callback,a=s===void 0?function(){}:s;return vl(i,a)},t.generateSvgReplacementMutation=function(n,r){var i=r.iconName,s=r.title,a=r.titleId,o=r.prefix,c=r.transform,l=r.symbol,u=r.mask,f=r.maskId,h=r.extra;return new Promise(function(m,I){Promise.all([ga(i,o),u.iconName?ga(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(A){var R=co(A,2),b=R[0],y=R[1];m([n,yo({icons:{main:b,mask:y},prefix:o,iconName:i,transform:c,symbol:l,maskId:f,title:s,titleId:a,extra:h,watchable:!0})])}).catch(I)})},t.generateAbstractIcon=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.transform,o=n.styles,c=rs(o);c.length>0&&(i.style=c);var l;return mo(a)&&(l=kt("generateAbstractTransformGrouping",{main:s,transform:a,containerWidth:s.width,iconWidth:s.width})),r.push(l||s.icon),{children:r,attributes:i}}}},K1={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.classes,s=i===void 0?[]:i;return as({type:"layer"},function(){bn("beforeDOMElementCreation",{assembler:n,params:r});var a=[];return n(function(o){Array.isArray(o)?o.map(function(c){a=a.concat(c.abstract)}):a=a.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(D.cssPrefix,"-layers")].concat(Hr(s)).join(" ")},children:a}]})}}}},G1={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.title,s=i===void 0?null:i,a=r.classes,o=a===void 0?[]:a,c=r.attributes,l=c===void 0?{}:c,u=r.styles,f=u===void 0?{}:u;return as({type:"counter",content:n},function(){return bn("beforeDOMElementCreation",{content:n,params:r}),T1({content:n.toString(),title:s,extra:{attributes:l,styles:f,classes:["".concat(D.cssPrefix,"-layers-counter")].concat(Hr(o))}})})}}}},Y1={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},i=r.transform,s=i===void 0?ot:i,a=r.title,o=a===void 0?null:a,c=r.classes,l=c===void 0?[]:c,u=r.attributes,f=u===void 0?{}:u,h=r.styles,m=h===void 0?{}:h;return as({type:"text",content:n},function(){return bn("beforeDOMElementCreation",{content:n,params:r}),fl({content:n,transform:N(N({},ot),s),title:o,extra:{attributes:f,styles:m,classes:["".concat(D.cssPrefix,"-layers-text")].concat(Hr(l))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var i=r.title,s=r.transform,a=r.extra,o=null,c=null;if(qf){var l=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/l,c=u.height/l}return D.autoA11y&&!i&&(a.attributes["aria-hidden"]="true"),Promise.resolve([n,fl({content:n.innerHTML,width:o,height:c,transform:s,title:i,extra:a,watchable:!0})])}}},q1=new RegExp('"',"ug"),bl=[1105920,1112319];function X1(e){var t=e.replace(q1,""),n=l1(t,0),r=n>=bl[0]&&n<=bl[1],i=t.length===2?t[0]===t[1]:!1;return{value:fa(i?t[0]:t),isSecondary:r||i}}function yl(e,t){var n="".concat(F_).concat(t.replace(":","-"));return new Promise(function(r,i){if(e.getAttribute(n)!==null)return r();var s=er(e.children),a=s.filter(function(te){return te.getAttribute(ua)===t})[0],o=Gt.getComputedStyle(e,t),c=o.getPropertyValue("font-family").match(z_),l=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(a&&!c)return e.removeChild(a),r();if(c&&u!=="none"&&u!==""){var f=o.getPropertyValue("content"),h=~["Sharp"].indexOf(c[2])?pe:fe,m=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(c[2])?Or[h][c[2].toLowerCase()]:V_[h][l],I=X1(f),A=I.value,R=I.isSecondary,b=c[0].startsWith("FontAwesome"),y=vo(m,A),O=y;if(b){var C=g1(A);C.iconName&&C.prefix&&(y=C.iconName,m=C.prefix)}if(y&&!R&&(!a||a.getAttribute(uo)!==m||a.getAttribute(fo)!==O)){e.setAttribute(n,O),a&&e.removeChild(a);var H=B1(),J=H.extra;J.attributes[ua]=t,ga(y,m).then(function(te){var V=yo(N(N({},H),{},{icons:{main:te,mask:bo()},prefix:m,iconName:O,extra:J,watchable:!0})),q=de.createElement("svg");t==="::before"?e.insertBefore(q,e.firstChild):e.appendChild(q),q.outerHTML=V.map(function(Z){return Vr(Z)}).join(`
`),e.removeAttribute(n),r()}).catch(i)}else r()}else r()})}function J1(e){return Promise.all([yl(e,"::before"),yl(e,"::after")])}function Q1(e){return e.parentNode!==document.head&&!~B_.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(ua)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function _l(e){if(Tt)return new Promise(function(t,n){var r=er(e.querySelectorAll("*")).filter(Q1).map(J1),i=_o.begin("searchPseudoElements");gd(),Promise.all(r).then(function(){i(),ba(),t()}).catch(function(){i(),ba(),n()})})}var Z1={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=_l,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,i=r===void 0?de:r;D.searchPseudoElements&&_l(i)}}},wl=!1,ew={mixout:function(){return{dom:{unwatch:function(){gd(),wl=!0}}}},hooks:function(){return{bootstrap:function(){ml(ha("mutationObserverCallbacks",{}))},noAuto:function(){D1()},watch:function(n){var r=n.observeMutationsRoot;wl?ba():ml(ha("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},El=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,i){var s=i.toLowerCase().split("-"),a=s[0],o=s.slice(1).join("-");if(a&&o==="h")return r.flipX=!0,r;if(a&&o==="v")return r.flipY=!0,r;if(o=parseFloat(o),isNaN(o))return r;switch(a){case"grow":r.size=r.size+o;break;case"shrink":r.size=r.size-o;break;case"left":r.x=r.x-o;break;case"right":r.x=r.x+o;break;case"up":r.y=r.y-o;break;case"down":r.y=r.y+o;break;case"rotate":r.rotate=r.rotate+o;break}return r},n)},tw={mixout:function(){return{parse:{transform:function(n){return El(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-transform");return i&&(n.transform=El(i)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,i=n.transform,s=n.containerWidth,a=n.iconWidth,o={transform:"translate(".concat(s/2," 256)")},c="translate(".concat(i.x*32,", ").concat(i.y*32,") "),l="scale(".concat(i.size/16*(i.flipX?-1:1),", ").concat(i.size/16*(i.flipY?-1:1),") "),u="rotate(".concat(i.rotate," 0 0)"),f={transform:"".concat(c," ").concat(l," ").concat(u)},h={transform:"translate(".concat(a/2*-1," -256)")},m={outer:o,inner:f,path:h};return{tag:"g",attributes:N({},m.outer),children:[{tag:"g",attributes:N({},m.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:N(N({},r.icon.attributes),m.path)}]}]}}}},Ps={x:0,y:0,width:"100%",height:"100%"};function Il(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function nw(e){return e.tag==="g"?e.children:[e]}var rw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-mask"),s=i?ss(i.split(" ").map(function(a){return a.trim()})):bo();return s.prefix||(s.prefix=Yt()),n.mask=s,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,i=n.attributes,s=n.main,a=n.mask,o=n.maskId,c=n.transform,l=s.width,u=s.icon,f=a.width,h=a.icon,m=t1({transform:c,containerWidth:f,iconWidth:l}),I={tag:"rect",attributes:N(N({},Ps),{},{fill:"white"})},A=u.children?{children:u.children.map(Il)}:{},R={tag:"g",attributes:N({},m.inner),children:[Il(N({tag:u.tag,attributes:N(N({},u.attributes),m.path)},A))]},b={tag:"g",attributes:N({},m.outer),children:[R]},y="mask-".concat(o||Nr()),O="clip-".concat(o||Nr()),C={tag:"mask",attributes:N(N({},Ps),{},{id:y,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[I,b]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:nw(h)},C]};return r.push(H,{tag:"rect",attributes:N({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(y,")")},Ps)}),{children:r,attributes:i}}}},iw={provides:function(t){var n=!1;Gt.matchMedia&&(n=Gt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],i={fill:"currentColor"},s={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:N(N({},i),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var a=N(N({},s),{},{attributeName:"opacity"}),o={tag:"circle",attributes:N(N({},i),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:N(N({},s),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:N(N({},a),{},{values:"1;0;1;1;0;1;"})}),r.push(o),r.push({tag:"path",attributes:N(N({},i),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:N(N({},a),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:N(N({},i),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:N(N({},a),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},sw={hooks:function(){return{parseNodeAttributes:function(n,r){var i=r.getAttribute("data-fa-symbol"),s=i===null?!1:i===""?!0:i;return n.symbol=s,n}}}},aw=[i1,W1,K1,G1,Y1,Z1,ew,tw,rw,iw,sw];y1(aw,{mixoutsTo:je});je.noAuto;je.config;var ow=je.library;je.dom;var ya=je.parse;je.findIconDefinition;je.toHtml;var cw=je.icon;je.layer;je.text;je.counter;function kl(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function vt(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?kl(Object(n),!0).forEach(function(r){Ne(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kl(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Fi(e){"@babel/helpers - typeof";return Fi=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Fi(e)}function Ne(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function lw(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,s;for(s=0;s<r.length;s++)i=r[s],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function uw(e,t){if(e==null)return{};var n=lw(e,t),r,i;if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)r=s[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var fw=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},bd={exports:{}};(function(e){(function(t){var n=function(b,y,O){if(!l(y)||f(y)||h(y)||m(y)||c(y))return y;var C,H=0,J=0;if(u(y))for(C=[],J=y.length;H<J;H++)C.push(n(b,y[H],O));else{C={};for(var te in y)Object.prototype.hasOwnProperty.call(y,te)&&(C[b(te,O)]=n(b,y[te],O))}return C},r=function(b,y){y=y||{};var O=y.separator||"_",C=y.split||/(?=[A-Z])/;return b.split(C).join(O)},i=function(b){return I(b)?b:(b=b.replace(/[\-_\s]+(.)?/g,function(y,O){return O?O.toUpperCase():""}),b.substr(0,1).toLowerCase()+b.substr(1))},s=function(b){var y=i(b);return y.substr(0,1).toUpperCase()+y.substr(1)},a=function(b,y){return r(b,y).toLowerCase()},o=Object.prototype.toString,c=function(b){return typeof b=="function"},l=function(b){return b===Object(b)},u=function(b){return o.call(b)=="[object Array]"},f=function(b){return o.call(b)=="[object Date]"},h=function(b){return o.call(b)=="[object RegExp]"},m=function(b){return o.call(b)=="[object Boolean]"},I=function(b){return b=b-0,b===b},A=function(b,y){var O=y&&"process"in y?y.process:y;return typeof O!="function"?b:function(C,H){return O(C,b,H)}},R={camelize:i,decamelize:a,pascalize:s,depascalize:a,camelizeKeys:function(b,y){return n(A(i,y),b)},decamelizeKeys:function(b,y){return n(A(a,y),b,y)},pascalizeKeys:function(b,y){return n(A(s,y),b)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=R:t.humps=R})(fw)})(bd);var dw=bd.exports,hw=["class","style"];function pw(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),i=dw.camelize(n.slice(0,r)),s=n.slice(r+1).trim();return t[i]=s,t},{})}function mw(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function yd(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(c){return yd(c)}),i=Object.keys(e.attributes||{}).reduce(function(c,l){var u=e.attributes[l];switch(l){case"class":c.class=mw(u);break;case"style":c.style=pw(u);break;default:c.attrs[l]=u}return c},{attrs:{},class:{},style:{}});n.class;var s=n.style,a=s===void 0?{}:s,o=uw(n,hw);return Ji(e.tag,vt(vt(vt({},t),{},{class:i.class,style:vt(vt({},i.style),a)},i.attrs),o),r)}var _d=!1;try{_d=!0}catch{}function gw(){if(!_d&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Rs(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ne({},e,t):{}}function vw(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},Ne(t,"fa-".concat(e.size),e.size!==null),Ne(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),Ne(t,"fa-pull-".concat(e.pull),e.pull!==null),Ne(t,"fa-swap-opacity",e.swapOpacity),Ne(t,"fa-bounce",e.bounce),Ne(t,"fa-shake",e.shake),Ne(t,"fa-beat",e.beat),Ne(t,"fa-fade",e.fade),Ne(t,"fa-beat-fade",e.beatFade),Ne(t,"fa-flash",e.flash),Ne(t,"fa-spin-pulse",e.spinPulse),Ne(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Al(e){if(e&&Fi(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(ya.icon)return ya.icon(e);if(e===null)return null;if(Fi(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var bw=Da({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,i=Ie(function(){return Al(t.icon)}),s=Ie(function(){return Rs("classes",vw(t))}),a=Ie(function(){return Rs("transform",typeof t.transform=="string"?ya.transform(t.transform):t.transform)}),o=Ie(function(){return Rs("mask",Al(t.mask))}),c=Ie(function(){return cw(i.value,vt(vt(vt(vt({},s.value),a.value),o.value),{},{symbol:t.symbol,title:t.title}))});fn(c,function(u){if(!u)return gw("Could not find one or more icon(s)",i.value,o.value)},{immediate:!0});var l=Ie(function(){return c.value?yd(c.value.abstract[0],{},r):null});return function(){return l.value}}}),yw={prefix:"fas",iconName:"bars",icon:[448,512,["navicon"],"f0c9","M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"]},_w={prefix:"fas",iconName:"user",icon:[448,512,[128100,62144],"f007","M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"]},ww={prefix:"fas",iconName:"star",icon:[576,512,[11088,61446],"f005","M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z"]},Ew={prefix:"fas",iconName:"right-to-bracket",icon:[512,512,["sign-in-alt"],"f2f6","M217.9 105.9L340.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L217.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1L32 320c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM352 416l64 0c17.7 0 32-14.3 32-32l0-256c0-17.7-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32l64 0c53 0 96 43 96 96l0 256c0 53-43 96-96 96l-64 0c-17.7 0-32-14.3-32-32s14.3-32 32-32z"]},Iw={prefix:"fas",iconName:"headset",icon:[512,512,[],"f590","M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z"]},kw={prefix:"fas",iconName:"person-walking-dashed-line-arrow-right",icon:[640,512,[],"e553","M208 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM123.7 200.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 19.3-65.5 9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L281 232.7l-15.3-36.8C248.5 154.8 208.3 128 163.7 128c-22.8 0-45.3 4.8-66.1 14l-8 3.5c-32.9 14.6-58.1 42.4-69.4 76.5l-2.6 7.8c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l2.6-7.8c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5zm-30 135.1L68.7 398 9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L116.3 441c4.6-4.6 8.2-10.1 10.6-16.1l14.5-36.2-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6zM550.6 153.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L530.7 224H384c-17.7 0-32 14.3-32 32s14.3 32 32 32H530.7l-25.4 25.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l80-80c12.5-12.5 12.5-32.8 0-45.3l-80-80zM392 0c-13.3 0-24 10.7-24 24V72c0 13.3 10.7 24 24 24s24-10.7 24-24V24c0-13.3-10.7-24-24-24zm24 152c0-13.3-10.7-24-24-24s-24 10.7-24 24v16c0 13.3 10.7 24 24 24s24-10.7 24-24V152zM392 320c-13.3 0-24 10.7-24 24v16c0 13.3 10.7 24 24 24s24-10.7 24-24V344c0-13.3-10.7-24-24-24zm24 120c0-13.3-10.7-24-24-24s-24 10.7-24 24v48c0 13.3 10.7 24 24 24s24-10.7 24-24V440z"]},Aw={prefix:"fas",iconName:"eye",icon:[576,512,[128065],"f06e","M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z"]},Tw={prefix:"fas",iconName:"user-secret",icon:[448,512,[128373],"f21b","M224 16c-6.7 0-10.8-2.8-15.5-6.1C201.9 5.4 194 0 176 0c-30.5 0-52 43.7-66 89.4C62.7 98.1 32 112.2 32 128c0 14.3 25 27.1 64.6 35.9c-.4 4-.6 8-.6 12.1c0 17 3.3 33.2 9.3 48H45.4C38 224 32 230 32 237.4c0 1.7 .3 3.4 1 5l38.8 96.9C28.2 371.8 0 423.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7c0-58.5-28.2-110.4-71.7-143L415 242.4c.6-1.6 1-3.3 1-5c0-7.4-6-13.4-13.4-13.4H342.7c6-14.8 9.3-31 9.3-48c0-4.1-.2-8.1-.6-12.1C391 155.1 416 142.3 416 128c0-15.8-30.7-29.9-78-38.6C324 43.7 302.5 0 272 0c-18 0-25.9 5.4-32.5 9.9c-4.8 3.3-8.8 6.1-15.5 6.1zm56 208H267.6c-16.5 0-31.1-10.6-36.3-26.2c-2.3-7-12.2-7-14.5 0c-5.2 15.6-19.9 26.2-36.3 26.2H168c-22.1 0-40-17.9-40-40V169.6c28.2 4.1 61 6.4 96 6.4s67.8-2.3 96-6.4V184c0 22.1-17.9 40-40 40zm-88 96l16 32L176 480 128 288l64 32zm128-32L272 480 240 352l16-32 64-32z"]},Cw={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},xw=Cw,Sw={prefix:"fas",iconName:"xmark",icon:[384,512,[128473,10005,10006,10060,215,"close","multiply","remove","times"],"f00d","M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"]},Ow={prefix:"fas",iconName:"check",icon:[448,512,[10003,10004],"f00c","M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z"]},Pw={prefix:"fas",iconName:"circle-xmark",icon:[512,512,[61532,"times-circle","xmark-circle"],"f057","M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c9.4-9.4 24.6-9.4 33.9 0l47 47 47-47c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9l-47 47 47 47c9.4 9.4 9.4 24.6 0 33.9s-24.6 9.4-33.9 0l-47-47-47 47c-9.4 9.4-24.6 9.4-33.9 0s-9.4-24.6 0-33.9l47-47-47-47c-9.4-9.4-9.4-24.6 0-33.9z"]},Rw=Pw;ow.add(Tw,yw,kw,Rw,ww,Iw,Sw,xw,Ow,Aw,_w,Ew);qp(x_).use(Le).use(m0).component("font-awesome-icon",bw).mount("#app");export{it as F,Ft as G,Ha as T,Vf as _,Sn as a,$ as b,Te as c,Nw as d,G as e,Le as f,so as g,$e as h,Mw as i,Uw as j,cp as k,Fu as m,_e as o,lh as r,Fw as s,Dt as t,sm as u,Lw as v,Dw as w};
