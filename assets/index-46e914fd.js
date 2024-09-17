(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const l of r)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(r){const l={};return r.integrity&&(l.integrity=r.integrity),r.referrerPolicy&&(l.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?l.credentials="include":r.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(r){if(r.ep)return;r.ep=!0;const l=n(r);fetch(r.href,l)}})();function M(){}function he(t,e){for(const n in e)t[n]=e[n];return t}function be(t){return t()}function me(){return Object.create(null)}function j(t){t.forEach(be)}function de(t){return typeof t=="function"}function T(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function ke(t){return Object.keys(t).length===0}function Me(t,...e){if(t==null)return M;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Ce(t,e,n){t.$$.on_destroy.push(Me(e,n))}function le(t,e,n,s){if(t){const r=$e(t,e,n,s);return t[0](r)}}function $e(t,e,n,s){return t[1]&&s?he(n.ctx.slice(),t[1](s(e))):n.ctx}function oe(t,e,n,s){if(t[2]&&s){const r=t[2](s(n));if(e.dirty===void 0)return r;if(typeof r=="object"){const l=[],u=Math.max(e.dirty.length,r.length);for(let o=0;o<u;o+=1)l[o]=e.dirty[o]|r[o];return l}return e.dirty|r}return e.dirty}function ie(t,e,n,s,r,l){if(r){const u=$e(e,n,s,l);t.p(u,r)}}function ce(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let s=0;s<n;s++)e[s]=-1;return e}return-1}function X(t){return t??""}function m(t,e){t.appendChild(e)}function v(t,e,n){t.insertBefore(e,n||null)}function w(t){t.parentNode&&t.parentNode.removeChild(t)}function b(t){return document.createElement(t)}function A(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function O(t){return document.createTextNode(t)}function L(){return O(" ")}function Le(){return O("")}function D(t,e,n,s){return t.addEventListener(e,n,s),()=>t.removeEventListener(e,n,s)}function Se(t){return function(e){return e.stopPropagation(),t.call(this,e)}}function Ee(t){return function(e){e.target===this&&t.call(this,e)}}function a(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Ie(t){return Array.from(t.childNodes)}function ee(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}let J;function Z(t){J=t}function we(){if(!J)throw new Error("Function called outside component initialization");return J}function ve(t){we().$$.on_mount.push(t)}function xe(t){we().$$.after_update.push(t)}function Ne(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(s=>s.call(this,e))}const K=[],te=[],W=[],ue=[],qe=Promise.resolve();let fe=!1;function Fe(){fe||(fe=!0,qe.then(ye))}function ae(t){W.push(t)}function Ae(t){ue.push(t)}const se=new Set;let Q=0;function ye(){const t=J;do{for(;Q<K.length;){const e=K[Q];Q++,Z(e),ze(e.$$)}for(Z(null),K.length=0,Q=0;te.length;)te.pop()();for(let e=0;e<W.length;e+=1){const n=W[e];se.has(n)||(se.add(n),n())}W.length=0}while(K.length);for(;ue.length;)ue.pop()();fe=!1,se.clear(),Z(t)}function ze(t){if(t.fragment!==null){t.update(),j(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(ae)}}const Y=new Set;let B;function Oe(){B={r:0,c:[],p:B}}function He(){B.r||j(B.c),B=B.p}function C(t,e){t&&t.i&&(Y.delete(t),t.i(e))}function S(t,e,n,s){if(t&&t.o){if(Y.has(t))return;Y.add(t),B.c.push(()=>{Y.delete(t),s&&(n&&t.d(1),s())}),t.o(e)}else s&&s()}function Te(t,e){const n={},s={},r={$$scope:1};let l=t.length;for(;l--;){const u=t[l],o=e[l];if(o){for(const f in u)f in o||(s[f]=1);for(const f in o)r[f]||(n[f]=o[f],r[f]=1);t[l]=o}else for(const f in u)r[f]=1}for(const u in s)u in n||(n[u]=void 0);return n}function Pe(t,e,n,s){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,s===void 0&&n(t.$$.ctx[r]))}function x(t){t&&t.c()}function E(t,e,n,s){const{fragment:r,after_update:l}=t.$$;r&&r.m(e,n),s||ae(()=>{const u=t.$$.on_mount.map(be).filter(de);t.$$.on_destroy?t.$$.on_destroy.push(...u):j(u),t.$$.on_mount=[]}),l.forEach(ae)}function I(t,e){const n=t.$$;n.fragment!==null&&(j(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Re(t,e){t.$$.dirty[0]===-1&&(K.push(t),Fe(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(t,e,n,s,r,l,u,o=[-1]){const f=J;Z(t);const c=t.$$={fragment:null,ctx:[],props:l,update:M,not_equal:r,bound:me(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(f?f.$$.context:[])),callbacks:me(),dirty:o,skip_bound:!1,root:e.target||f.$$.root};u&&u(c.root);let i=!1;if(c.ctx=n?n(t,e.props||{},(d,p,...h)=>{const _=h.length?h[0]:p;return c.ctx&&r(c.ctx[d],c.ctx[d]=_)&&(!c.skip_bound&&c.bound[d]&&c.bound[d](_),i&&Re(t,d)),p}):[],c.update(),i=!0,j(c.before_update),c.fragment=s?s(c.ctx):!1,e.target){if(e.hydrate){const d=Ie(e.target);c.fragment&&c.fragment.l(d),d.forEach(w)}else c.fragment&&c.fragment.c();e.intro&&C(t.$$.fragment),E(t,e.target,e.anchor,e.customElement),ye()}Z(f)}class U{$destroy(){I(this,1),this.$destroy=M}$on(e,n){if(!de(n))return M;const s=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return s.push(n),()=>{const r=s.indexOf(n);r!==-1&&s.splice(r,1)}}$set(e){this.$$set&&!ke(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Ue(t){let e;const n=t[3].default,s=le(n,t,t[2],null);return{c(){s&&s.c()},m(r,l){s&&s.m(r,l),e=!0},p(r,l){s&&s.p&&(!e||l&4)&&ie(s,n,r,r[2],e?oe(n,r[2],l,null):ce(r[2]),null)},i(r){e||(C(s,r),e=!0)},o(r){S(s,r),e=!1},d(r){s&&s.d(r)}}}function Be(t){let e;return{c(){e=O(t[0])},m(n,s){v(n,e,s)},p(n,s){s&1&&ee(e,n[0])},i:M,o:M,d(n){n&&w(e)}}}function je(t){let e,n,s,r,l,u;const o=[Be,Ue],f=[];function c(i,d){return i[0]?0:1}return n=c(t),s=f[n]=o[n](t),{c(){e=b("button"),s.c(),a(e,"class","btn btn-primary")},m(i,d){v(i,e,d),f[n].m(e,null),r=!0,l||(u=D(e,"click",function(){de(t[1])&&t[1].apply(this,arguments)}),l=!0)},p(i,[d]){t=i;let p=n;n=c(t),n===p?f[n].p(t,d):(Oe(),S(f[p],1,1,()=>{f[p]=null}),He(),s=f[n],s?s.p(t,d):(s=f[n]=o[n](t),s.c()),C(s,1),s.m(e,null))},i(i){r||(C(s),r=!0)},o(i){S(s),r=!1},d(i){i&&w(e),f[n].d(),l=!1,u()}}}function Ge(t,e,n){let{$$slots:s={},$$scope:r}=e,{label:l=null}=e,{onClick:u=null}=e;return t.$$set=o=>{"label"in o&&n(0,l=o.label),"onClick"in o&&n(1,u=o.onClick),"$$scope"in o&&n(2,r=o.$$scope)},[l,u,r,s]}class V extends U{constructor(e){super(),R(this,e,Ge,je,T,{label:0,onClick:1})}}function Ve(t){let e;return{c(){e=b("footer"),e.innerHTML='<p><a href="https://scostadavid.github.io" target="_blank" rel="noreferrer noopener">© 2024 - scostadavid</a></p>',a(e,"class","app__footer svelte-1x5xl13")},m(n,s){v(n,e,s)},p:M,i:M,o:M,d(n){n&&w(e)}}}class De extends U{constructor(e){super(),R(this,e,null,Ve,T,{})}}const G=[];function Xe(t,e=M){let n;const s=new Set;function r(o){if(T(t,o)&&(t=o,n)){const f=!G.length;for(const c of s)c[1](),G.push(c,t);if(f){for(let c=0;c<G.length;c+=2)G[c][0](G[c+1]);G.length=0}}}function l(o){r(o(t))}function u(o,f=M){const c=[o,f];return s.add(c),s.size===1&&(n=e(r)||M),o(t),()=>{s.delete(c),s.size===0&&(n(),n=null)}}return{set:r,update:l,subscribe:u}}function Ke(){const t=localStorage.getItem("coins");return t?parseInt(t,10):0}const _e=Xe(Ke());_e.subscribe(t=>{localStorage.setItem("coins",t)});function Ze(t){let e,n,s,r,l,u,o,f,c;return{c(){e=b("header"),n=b("h1"),n.innerHTML=`🌱 Focus
    <span class="text-success">Garden</span>`,s=L(),r=b("nav"),l=b("div"),u=b("p"),o=O("🪙 "),f=O(t[0]),a(n,"class","svelte-q2rzk"),a(u,"class","text-lg font-bold"),a(u,"title",c=t[0]+" coins"),a(l,"class","border border-btn-primary rounded-xl p-2"),a(r,"class","header-configs"),a(e,"class","my-4 flex flex-row justify-between items-center self-center w-[500px] svelte-q2rzk")},m(i,d){v(i,e,d),m(e,n),m(e,s),m(e,r),m(r,l),m(l,u),m(u,o),m(u,f)},p(i,[d]){d&1&&ee(f,i[0]),d&1&&c!==(c=i[0]+" coins")&&a(u,"title",c)},i:M,o:M,d(i){i&&w(e)}}}function Je(t,e,n){let s;return Ce(t,_e,r=>n(0,s=r)),[s]}class Qe extends U{constructor(e){super(),R(this,e,Je,Ze,T,{})}}const We=t=>({}),pe=t=>({});function Ye(t){let e,n,s,r,l,u,o,f,c;const i=t[3].header,d=le(i,t,t[2],pe);l=new V({props:{label:"X",onClick:t[5]}});const p=t[3].default,h=le(p,t,t[2],null);return{c(){e=b("dialog"),n=b("div"),s=b("div"),d&&d.c(),r=L(),x(l.$$.fragment),u=L(),h&&h.c(),a(s,"class","modal__header-slot svelte-xgqopf"),a(n,"class","svelte-xgqopf"),a(e,"class","svelte-xgqopf")},m(_,k){v(_,e,k),m(e,n),m(n,s),d&&d.m(s,null),m(s,r),E(l,s,null),m(n,u),h&&h.m(n,null),t[6](e),o=!0,f||(c=[D(n,"click",Se(t[4])),D(e,"close",t[7]),D(e,"click",Ee(t[8]))],f=!0)},p(_,[k]){d&&d.p&&(!o||k&4)&&ie(d,i,_,_[2],o?oe(i,_[2],k,We):ce(_[2]),pe);const N={};k&2&&(N.onClick=_[5]),l.$set(N),h&&h.p&&(!o||k&4)&&ie(h,p,_,_[2],o?oe(p,_[2],k,null):ce(_[2]),null)},i(_){o||(C(d,_),C(l.$$.fragment,_),C(h,_),o=!0)},o(_){S(d,_),S(l.$$.fragment,_),S(h,_),o=!1},d(_){_&&w(e),d&&d.d(_),I(l),h&&h.d(_),t[6](null),f=!1,j(c)}}}function et(t,e,n){let{$$slots:s={},$$scope:r}=e,{showModal:l}=e,u;function o(p){Ne.call(this,t,p)}const f=()=>u.close();function c(p){te[p?"unshift":"push"](()=>{u=p,n(1,u)})}const i=()=>n(0,l=!1),d=()=>u.close();return t.$$set=p=>{"showModal"in p&&n(0,l=p.showModal),"$$scope"in p&&n(2,r=p.$$scope)},t.$$.update=()=>{t.$$.dirty&3&&u&&l&&u.showModal()},[l,u,r,s,o,f,c,i,d]}class tt extends U{constructor(e){super(),R(this,e,et,Ye,T,{showModal:0})}}function nt(t){let e,n,s,r,l,u,o,f;return{c(){e=b("div"),n=b("p"),s=O(t[0]),r=L(),l=b("p"),u=O("It's "),o=O(t[1]),f=O(" time"),a(n,"class","timer__label svelte-ha9j3w"),a(l,"class","timer__mode-label svelte-ha9j3w"),a(e,"class","timer bg-base-300 my-4 rounded-xl svelte-ha9j3w")},m(c,i){v(c,e,i),m(e,n),m(n,s),m(e,r),m(e,l),m(l,u),m(l,o),m(l,f)},p(c,[i]){i&1&&ee(s,c[0]),i&2&&ee(o,c[1])},i:M,o:M,d(c){c&&w(e)}}}function st(t,e,n){let{time:s}=e,{currentModeLabel:r}=e;return t.$$set=l=>{"time"in l&&n(0,s=l.time),"currentModeLabel"in l&&n(1,r=l.currentModeLabel)},[s,r]}class rt extends U{constructor(e){super(),R(this,e,st,nt,T,{time:0,currentModeLabel:1})}}function lt(t){let e,n,s;return{c(){e=A("svg"),n=O("! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc."),s=A("path"),a(s,"d","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"height","1em"),a(e,"viewBox","0 0 384 512")},m(r,l){v(r,e,l),m(e,n),m(e,s)},d(r){r&&w(e)}}}function ot(t){let e,n;return{c(){e=A("svg"),n=A("path"),a(n,"d","M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"height","1em"),a(e,"viewBox","0 0 320 512")},m(s,r){v(s,e,r),m(e,n)},d(s){s&&w(e)}}}function it(t){let e;function n(l,u){return l[3]===l[4].RUNNING?ot:lt}let s=n(t),r=s(t);return{c(){r.c(),e=Le()},m(l,u){r.m(l,u),v(l,e,u)},p(l,u){s!==(s=n(l))&&(r.d(1),r=s(l),r&&(r.c(),r.m(e.parentNode,e)))},d(l){r.d(l),l&&w(e)}}}function ct(t){let e,n;return{c(){e=A("svg"),n=A("path"),a(n,"d","M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"height","1em"),a(e,"viewBox","0 0 512 512")},m(s,r){v(s,e,r),m(e,n)},p:M,d(s){s&&w(e)}}}function ut(t){let e,n,s,r,l,u,o,f,c,i,d,p,h,_,k,N;r=new V({props:{label:"Focus",onClick:t[11]}}),u=new V({props:{label:"Short break",onClick:t[12]}}),f=new V({props:{label:"Long break",onClick:t[13]}});const q=[{currentModeLabel:t[7][t[0]],time:t[1]}];let z={};for(let g=0;g<q.length;g+=1)z=he(z,q[g]);return i=new rt({props:z}),h=new V({props:{onClick:t[10],$$slots:{default:[it]},$$scope:{ctx:t}}}),k=new V({props:{onClick:t[14],$$slots:{default:[ct]},$$scope:{ctx:t}}}),{c(){e=b("section"),n=b("div"),s=b("div"),x(r.$$.fragment),l=L(),x(u.$$.fragment),o=L(),x(f.$$.fragment),c=L(),x(i.$$.fragment),d=L(),p=b("div"),x(h.$$.fragment),_=L(),x(k.$$.fragment),a(s,"class","clock--modes svelte-1yaswsq"),a(p,"class","clock--options svelte-1yaswsq"),a(n,"class","clock svelte-1yaswsq"),a(e,"class","pomodoro my-8 svelte-1yaswsq")},m(g,F){v(g,e,F),m(e,n),m(n,s),E(r,s,null),m(s,l),E(u,s,null),m(s,o),E(f,s,null),m(n,c),E(i,n,null),m(n,d),m(n,p),E(h,p,null),m(p,_),E(k,p,null),N=!0},p(g,[F]){const $=F&131?Te(q,[{currentModeLabel:g[7][g[0]],time:g[1]}]):{};i.$set($);const H={};F&2097160&&(H.$$scope={dirty:F,ctx:g}),h.$set(H);const P={};F&4&&(P.onClick=g[14]),F&2097152&&(P.$$scope={dirty:F,ctx:g}),k.$set(P)},i(g){N||(C(r.$$.fragment,g),C(u.$$.fragment,g),C(f.$$.fragment,g),C(i.$$.fragment,g),C(h.$$.fragment,g),C(k.$$.fragment,g),N=!0)},o(g){S(r.$$.fragment,g),S(u.$$.fragment,g),S(f.$$.fragment,g),S(i.$$.fragment,g),S(h.$$.fragment,g),S(k.$$.fragment,g),N=!1},d(g){g&&w(e),I(r),I(u),I(f),I(i),I(h),I(k)}}}const ge=5,ft=15;function at(t,e,n){var s=(y=>(y[y.INITIALIZED=0]="INITIALIZED",y[y.RUNNING=1]="RUNNING",y[y.PAUSED=2]="PAUSED",y))(s||{}),r=(y=>(y[y.FOCUS=0]="FOCUS",y[y.REST=1]="REST",y))(r||{});const l=25;let u=null,o=0,f=`${l.toString()}:00`,c=null,i=l,d=0;const p={0:"Focus",1:"Rest"},h=new Audio("./notification.wav"),_=(y,ne)=>{clearInterval(u),n(1,f=`${y.toString().padStart(2,"0")}:00`),n(3,d=0),n(0,o=ne),c=y*60,n(2,i=y)},k=y=>{_(y,o)},N=()=>{switch(d){case 0:u=setInterval(g,1e3),h.play(),n(3,d=1);break;case 1:n(3,d=2);break;case 2:h.play(),n(3,d=1);break}};function q(){_e.update(y=>y+1)}function z(){if(h.play(),o===0){n(0,o=1),q(),_(ge,o),document.title=`(${f}) Focus Garden | ${p[o]}`,N();return}n(0,o=0),document.title=`(${f}) Focus Garden | ${p[o]}`,_(l,o)}function g(){if(c<=0){z();return}if(d===2)return;c--;const y=Math.floor(c/60),ne=c-y*60;n(1,f=`${y.toString().padStart(2,"0")}:${ne.toString().padStart(2,"0")}`)}return ve(()=>{document.title=`(${f}) Focus Garden | ${p[o]}`,_(l,o)}),xe(()=>{document.title=`(${f}) Focus Garden | ${p[o]}`}),[o,f,i,d,s,r,l,p,_,k,N,()=>_(l,r.FOCUS),()=>_(ge,r.REST),()=>_(ft,r.REST),()=>k(i)]}class dt extends U{constructor(e){super(),R(this,e,at,ut,T,{})}}function _t(t){let e,n,s;return{c(){e=A("svg"),n=A("path"),a(n,"d","M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"),a(e,"class",s=X(t[2]?"playing":"paused")+" svelte-rdkrq4"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"height","1em"),a(e,"width","1em"),a(e,"viewBox","0 0 640 512")},m(r,l){v(r,e,l),m(e,n)},p(r,l){l&4&&s!==(s=X(r[2]?"playing":"paused")+" svelte-rdkrq4")&&a(e,"class",s)},d(r){r&&w(e)}}}function mt(t){let e,n,s;return{c(){e=A("svg"),n=A("path"),a(n,"d","M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96H96zm-6.8 52c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L89.2 372zm160 0c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L249.2 372zm124.9 64.6L409.2 372c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3z"),a(e,"class",s=X(t[2]?"playing":"paused")+" svelte-rdkrq4"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"height","1em"),a(e,"viewBox","0 0 512 512")},m(r,l){v(r,e,l),m(e,n)},p(r,l){l&4&&s!==(s=X(r[2]?"playing":"paused")+" svelte-rdkrq4")&&a(e,"class",s)},d(r){r&&w(e)}}}function pt(t){let e,n,s;return{c(){e=A("svg"),n=A("path"),a(n,"d","M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"),a(e,"class",s=X(t[2]?"playing":"paused")+" svelte-rdkrq4"),a(e,"xmlns","http://www.w3.org/2000/svg"),a(e,"height","1em"),a(e,"viewBox","0 0 512 512")},m(r,l){v(r,e,l),m(e,n)},p(r,l){l&4&&s!==(s=X(r[2]?"playing":"paused")+" svelte-rdkrq4")&&a(e,"class",s)},d(r){r&&w(e)}}}function gt(t){let e,n,s,r,l,u;function o(i,d){if(i[0]==="fire")return pt;if(i[0]==="rain")return mt;if(i[0]==="coffe")return _t}let f=o(t),c=f&&f(t);return{c(){e=b("div"),n=b("p"),c&&c.c(),s=L(),r=b("input"),a(n,"class","icon svelte-rdkrq4"),a(r,"type","range"),a(r,"min","0"),a(r,"max","100"),r.value=t[1],a(r,"step","1"),a(r,"class","range w-full svelte-rdkrq4"),a(e,"class","flex flex-row space-between gap-4 mb-4 w-full svelte-rdkrq4")},m(i,d){v(i,e,d),m(e,n),c&&c.m(n,null),m(e,s),m(e,r),l||(u=[D(n,"click",t[4]),D(r,"input",t[3])],l=!0)},p(i,[d]){f===(f=o(i))&&c?c.p(i,d):(c&&c.d(1),c=f&&f(i),c&&(c.c(),c.m(n,null))),d&2&&(r.value=i[1])},i:M,o:M,d(i){i&&w(e),c&&c.d(),l=!1,j(u)}}}function ht(t,e,n){let{icon:s}=e,{sfx:r}=e,l,u=0,o=!1;ve(()=>(l=new Audio(`./${r}.wav`),l.loop=!0,l.volume=u/100,()=>{l.pause(),l=null}));function f(i){n(1,u=i.target.value),l&&(l.volume=u/100)}function c(){l&&(o?l.pause():l.play().catch(i=>{console.error("Audio playback failed:",i)}),n(2,o=!o))}return t.$$set=i=>{"icon"in i&&n(0,s=i.icon),"sfx"in i&&n(5,r=i.sfx)},[s,u,o,f,c,r]}class re extends U{constructor(e){super(),R(this,e,ht,gt,T,{icon:0,sfx:5})}}function bt(t){let e,n,s,r,l,u,o,f,c;return{c(){e=b("h3"),e.textContent="Timer",n=L(),s=b("input"),r=L(),l=b("input"),u=L(),o=b("input"),f=L(),c=b("h3"),c.textContent="SFX",a(s,"type","number"),a(s,"min","1"),a(s,"max","60"),s.value="25",a(l,"type","number"),a(l,"min","1"),a(l,"max","60"),l.value="05",a(o,"type","number"),a(o,"min","1"),a(o,"max","60"),o.value="15"},m(i,d){v(i,e,d),v(i,n,d),v(i,s,d),v(i,r,d),v(i,l,d),v(i,u,d),v(i,o,d),v(i,f,d),v(i,c,d)},p:M,d(i){i&&w(e),i&&w(n),i&&w(s),i&&w(r),i&&w(l),i&&w(u),i&&w(o),i&&w(f),i&&w(c)}}}function $t(t){let e;return{c(){e=b("h2"),e.textContent="Settings",a(e,"slot","header")},m(n,s){v(n,e,s)},p:M,d(n){n&&w(e)}}}function wt(t){let e,n,s,r,l,u,o,f,c,i,d,p,h,_,k,N,q,z;s=new Qe({}),l=new dt({}),f=new re({props:{icon:"fire",sfx:"fire"}}),i=new re({props:{icon:"rain",sfx:"rain"}}),p=new re({props:{icon:"coffe",sfx:"caffe"}});function g($){t[1]($)}let F={$$slots:{header:[$t],default:[bt]},$$scope:{ctx:t}};return t[0]!==void 0&&(F.showModal=t[0]),_=new tt({props:F}),te.push(()=>Pe(_,"showModal",g,t[0])),q=new De({}),{c(){e=b("main"),n=b("div"),x(s.$$.fragment),r=L(),x(l.$$.fragment),u=L(),o=b("section"),x(f.$$.fragment),c=L(),x(i.$$.fragment),d=L(),x(p.$$.fragment),h=L(),x(_.$$.fragment),N=L(),x(q.$$.fragment),a(o,"class","sfx w-full flex flex-col justify-center p-4"),a(n,"class","max-w-xl"),a(e,"class","app items-center svelte-1n0cbnu")},m($,H){v($,e,H),m(e,n),E(s,n,null),m(n,r),E(l,n,null),m(n,u),m(n,o),E(f,o,null),m(o,c),E(i,o,null),m(o,d),E(p,o,null),m(n,h),E(_,n,null),m(n,N),E(q,n,null),z=!0},p($,[H]){const P={};H&4&&(P.$$scope={dirty:H,ctx:$}),!k&&H&1&&(k=!0,P.showModal=$[0],Ae(()=>k=!1)),_.$set(P)},i($){z||(C(s.$$.fragment,$),C(l.$$.fragment,$),C(f.$$.fragment,$),C(i.$$.fragment,$),C(p.$$.fragment,$),C(_.$$.fragment,$),C(q.$$.fragment,$),z=!0)},o($){S(s.$$.fragment,$),S(l.$$.fragment,$),S(f.$$.fragment,$),S(i.$$.fragment,$),S(p.$$.fragment,$),S(_.$$.fragment,$),S(q.$$.fragment,$),z=!1},d($){$&&w(e),I(s),I(l),I(f),I(i),I(p),I(_),I(q)}}}function vt(t,e,n){let{showModal:s=!1}=e;function r(l){s=l,n(0,s)}return t.$$set=l=>{"showModal"in l&&n(0,s=l.showModal)},[s,r]}class yt extends U{constructor(e){super(),R(this,e,vt,wt,T,{showModal:0})}}new yt({target:document.getElementById("app")});