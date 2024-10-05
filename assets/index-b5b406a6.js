(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))s(l);new MutationObserver(l=>{for(const r of l)if(r.type==="childList")for(const u of r.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(l){const r={};return l.integrity&&(r.integrity=l.integrity),l.referrerPolicy&&(r.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?r.credentials="include":l.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(l){if(l.ep)return;l.ep=!0;const r=n(l);fetch(l.href,r)}})();function A(){}function Le(e){return e()}function Se(){return Object.create(null)}function M(e){e.forEach(Le)}function Oe(e){return typeof e=="function"}function oe(e,t){return e!=e?t==t:e!==t||e&&typeof e=="object"||typeof e=="function"}function Fe(e){return Object.keys(e).length===0}function V(e){return e??""}function i(e,t){e.appendChild(t)}function T(e,t,n){e.insertBefore(t,n||null)}function E(e){e.parentNode&&e.parentNode.removeChild(e)}function He(e,t){for(let n=0;n<e.length;n+=1)e[n]&&e[n].d(t)}function _(e){return document.createElement(e)}function x(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}function I(e){return document.createTextNode(e)}function k(){return I(" ")}function S(e,t,n,s){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n,s)}function c(e,t,n){n==null?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function ze(e){return Array.from(e.childNodes)}function ge(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function Ee(e,t){e.value=t??""}let Y;function Z(e){Y=e}function Ce(){if(!Y)throw new Error("Function called outside component initialization");return Y}function Ae(e){Ce().$$.on_mount.push(e)}function Be(e){Ce().$$.after_update.push(e)}const X=[],xe=[],se=[],Te=[],Re=Promise.resolve();let me=!1;function Ue(){me||(me=!0,Re.then(Me))}function he(e){se.push(e)}const de=new Set;let le=0;function Me(){const e=Y;do{for(;le<X.length;){const t=X[le];le++,Z(t),je(t.$$)}for(Z(null),X.length=0,le=0;xe.length;)xe.pop()();for(let t=0;t<se.length;t+=1){const n=se[t];de.has(n)||(de.add(n),n())}se.length=0}while(X.length);for(;Te.length;)Te.pop()();me=!1,de.clear(),Z(e)}function je(e){if(e.fragment!==null){e.update(),M(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(he)}}const re=new Set;let qe;function q(e,t){e&&e.i&&(re.delete(e),e.i(t))}function Q(e,t,n,s){if(e&&e.o){if(re.has(e))return;re.add(e),qe.c.push(()=>{re.delete(e),s&&(n&&e.d(1),s())}),e.o(t)}else s&&s()}function W(e){e&&e.c()}function P(e,t,n,s){const{fragment:l,after_update:r}=e.$$;l&&l.m(t,n),s||he(()=>{const u=e.$$.on_mount.map(Le).filter(Oe);e.$$.on_destroy?e.$$.on_destroy.push(...u):M(u),e.$$.on_mount=[]}),r.forEach(he)}function G(e,t){const n=e.$$;n.fragment!==null&&(M(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function Pe(e,t){e.$$.dirty[0]===-1&&(X.push(e),Ue(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}function ie(e,t,n,s,l,r,u,g=[-1]){const f=Y;Z(e);const o=e.$$={fragment:null,ctx:[],props:r,update:A,not_equal:l,bound:Se(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(f?f.$$.context:[])),callbacks:Se(),dirty:g,skip_bound:!1,root:t.target||f.$$.root};u&&u(o.root);let a=!1;if(o.ctx=n?n(e,t.props||{},(d,m,...p)=>{const w=p.length?p[0]:m;return o.ctx&&l(o.ctx[d],o.ctx[d]=w)&&(!o.skip_bound&&o.bound[d]&&o.bound[d](w),a&&Pe(e,d)),m}):[],o.update(),a=!0,M(o.before_update),o.fragment=s?s(o.ctx):!1,t.target){if(t.hydrate){const d=ze(t.target);o.fragment&&o.fragment.l(d),d.forEach(E)}else o.fragment&&o.fragment.c();t.intro&&q(e.$$.fragment),P(e,t.target,t.anchor,t.customElement),Me()}Z(f)}class ue{$destroy(){G(this,1),this.$destroy=A}$on(t,n){if(!Oe(n))return A;const s=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return s.push(n),()=>{const l=s.indexOf(n);l!==-1&&s.splice(l,1)}}$set(t){this.$$set&&!Fe(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Ge(e){let t,n,s;return{c(){t=x("svg"),n=x("path"),c(n,"d","M96 64c0-17.7 14.3-32 32-32H448h64c70.7 0 128 57.3 128 128s-57.3 128-128 128H480c0 53-43 96-96 96H192c-53 0-96-43-96-96V64zM480 224h32c35.3 0 64-28.7 64-64s-28.7-64-64-64H480V224zM32 416H544c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32z"),c(t,"class",s=V(e[2]?"playing":"paused")+" svelte-rdkrq4"),c(t,"xmlns","http://www.w3.org/2000/svg"),c(t,"height","1em"),c(t,"width","1em"),c(t,"viewBox","0 0 640 512")},m(l,r){T(l,t,r),i(t,n)},p(l,r){r&4&&s!==(s=V(l[2]?"playing":"paused")+" svelte-rdkrq4")&&c(t,"class",s)},d(l){l&&E(t)}}}function Ve(e){let t,n,s;return{c(){t=x("svg"),n=x("path"),c(n,"d","M96 320c-53 0-96-43-96-96c0-42.5 27.6-78.6 65.9-91.2C64.7 126.1 64 119.1 64 112C64 50.1 114.1 0 176 0c43.1 0 80.5 24.3 99.2 60c14.7-17.1 36.5-28 60.8-28c44.2 0 80 35.8 80 80c0 5.5-.6 10.8-1.6 16c.5 0 1.1 0 1.6 0c53 0 96 43 96 96s-43 96-96 96H96zm-6.8 52c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L89.2 372zm160 0c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3L249.2 372zm124.9 64.6L409.2 372c1.3-2.5 3.9-4 6.8-4s5.4 1.5 6.8 4l35.1 64.6c4.1 7.5 6.2 15.8 6.2 24.3v3c0 26.5-21.5 48-48 48s-48-21.5-48-48v-3c0-8.5 2.1-16.9 6.2-24.3z"),c(t,"class",s=V(e[2]?"playing":"paused")+" svelte-rdkrq4"),c(t,"xmlns","http://www.w3.org/2000/svg"),c(t,"height","1em"),c(t,"viewBox","0 0 512 512")},m(l,r){T(l,t,r),i(t,n)},p(l,r){r&4&&s!==(s=V(l[2]?"playing":"paused")+" svelte-rdkrq4")&&c(t,"class",s)},d(l){l&&E(t)}}}function De(e){let t,n,s;return{c(){t=x("svg"),n=x("path"),c(n,"d","M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z"),c(t,"class",s=V(e[2]?"playing":"paused")+" svelte-rdkrq4"),c(t,"xmlns","http://www.w3.org/2000/svg"),c(t,"height","1em"),c(t,"viewBox","0 0 512 512")},m(l,r){T(l,t,r),i(t,n)},p(l,r){r&4&&s!==(s=V(l[2]?"playing":"paused")+" svelte-rdkrq4")&&c(t,"class",s)},d(l){l&&E(t)}}}function Ke(e){let t,n,s,l,r,u;function g(a,d){if(a[0]==="fire")return De;if(a[0]==="rain")return Ve;if(a[0]==="coffe")return Ge}let f=g(e),o=f&&f(e);return{c(){t=_("div"),n=_("p"),o&&o.c(),s=k(),l=_("input"),c(n,"class","icon svelte-rdkrq4"),c(l,"type","range"),c(l,"min","0"),c(l,"max","100"),l.value=e[1],c(l,"step","1"),c(l,"class","range w-full svelte-rdkrq4"),c(t,"class","flex flex-row space-between gap-4 mb-4 w-full svelte-rdkrq4")},m(a,d){T(a,t,d),i(t,n),o&&o.m(n,null),i(t,s),i(t,l),r||(u=[S(n,"click",e[4]),S(l,"input",e[3])],r=!0)},p(a,[d]){f===(f=g(a))&&o?o.p(a,d):(o&&o.d(1),o=f&&f(a),o&&(o.c(),o.m(n,null))),d&2&&(l.value=a[1])},i:A,o:A,d(a){a&&E(t),o&&o.d(),r=!1,M(u)}}}function Je(e,t,n){let{icon:s}=t,{sfx:l}=t,r,u=0,g=!1;Ae(()=>(r=new Audio(`./${l}.wav`),r.loop=!0,r.volume=u/100,()=>{r.pause(),r=null}));function f(a){n(1,u=a.target.value),r&&(r.volume=u/100)}function o(){r&&(g?r.pause():r.play().catch(a=>{console.error("Audio playback failed:",a)}),n(2,g=!g))}return e.$$set=a=>{"icon"in a&&n(0,s=a.icon),"sfx"in a&&n(5,l=a.sfx)},[s,u,g,f,o,l]}class pe extends ue{constructor(t){super(),ie(this,t,Je,Ke,oe,{icon:0,sfx:5})}}function Xe(e){let t,n;return{c(){t=x("svg"),n=x("path"),c(n,"d","M73 39c-14.8-9.1-33.4-9.4-48.5-.9S0 62.6 0 80V432c0 17.4 9.4 33.4 24.5 41.9s33.7 8.1 48.5-.9L361 297c14.3-8.7 23-24.2 23-41s-8.7-32.2-23-41L73 39z"),c(t,"xmlns","http://www.w3.org/2000/svg"),c(t,"height","1em"),c(t,"viewBox","0 0 384 512")},m(s,l){T(s,t,l),i(t,n)},d(s){s&&E(t)}}}function Ze(e){let t,n;return{c(){t=x("svg"),n=x("path"),c(n,"d","M48 64C21.5 64 0 85.5 0 112V400c0 26.5 21.5 48 48 48H80c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H48zm192 0c-26.5 0-48 21.5-48 48V400c0 26.5 21.5 48 48 48h32c26.5 0 48-21.5 48-48V112c0-26.5-21.5-48-48-48H240z"),c(t,"xmlns","http://www.w3.org/2000/svg"),c(t,"height","1em"),c(t,"viewBox","0 0 320 512")},m(s,l){T(s,t,l),i(t,n)},d(s){s&&E(t)}}}function Qe(e){let t,n,s,l,r,u,g,f,o,a,d,m,p,w,h,y,$,D,ee,F,ae,K=e[7][e[0]]+"",te,v,H,z,B,be,J,ve,L,R,we,U,ye,j,N,fe,ke;function $e(b,C){return b[3]===b[5].RUNNING?Ze:Xe}let ne=$e(e),O=ne(e);return R=new pe({props:{icon:"fire",sfx:"fire"}}),U=new pe({props:{icon:"rain",sfx:"rain"}}),j=new pe({props:{icon:"coffe",sfx:"caffe"}}),{c(){t=_("section"),n=_("div"),s=_("div"),l=_("button"),r=I("Focus time"),g=k(),f=_("button"),o=I("Short break"),d=k(),m=_("button"),p=I("Long break"),h=k(),y=_("div"),$=_("p"),D=I(e[1]),ee=k(),F=_("p"),ae=I("It's "),te=I(K),v=I(" time"),H=k(),z=_("div"),B=_("button"),O.c(),be=k(),J=_("button"),J.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M463.5 224H472c13.3 0 24-10.7 24-24V72c0-9.7-5.8-18.5-14.8-22.2s-19.3-1.7-26.2 5.2L413.4 96.6c-87.6-86.5-228.7-86.2-315.8 1c-87.5 87.5-87.5 229.3 0 316.8s229.3 87.5 316.8 0c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0c-62.5 62.5-163.8 62.5-226.3 0s-62.5-163.8 0-226.3c62.2-62.2 162.7-62.5 225.3-1L327 183c-6.9 6.9-8.9 17.2-5.2 26.2s12.5 14.8 22.2 14.8H463.5z"></path></svg>',ve=k(),L=_("section"),W(R.$$.fragment),we=k(),W(U.$$.fragment),ye=k(),W(j.$$.fragment),c(l,"role","tab"),c(l,"class",u="tab "+(e[4]===e[6].FOCUS?"tab-active":"")),c(f,"role","tab"),c(f,"class",a="tab "+(e[4]===e[6].REST&&e[2]===ce?"tab-active":"")),c(m,"role","tab"),c(m,"class",w="tab "+(e[4]===e[6].REST&&e[2]===_e?"tab-active":"")),c(s,"role","tablist"),c(s,"class","tabs tabs-boxed m-4 bg-base-300"),c($,"class","text-[3em] font-bold"),c(F,"class","text-[1.2rem]"),c(y,"class","flex flex-col items-center"),c(B,"class","btn btn-primary"),c(J,"class","btn btn-primary"),c(z,"class","clock--options m-4 svelte-1mdbfju"),c(L,"class","sfx w-full flex flex-col justify-center p-4"),c(n,"class","card clock my-4 rounded-xl svelte-1mdbfju"),c(t,"class","w-full flex justify-center my-4")},m(b,C){T(b,t,C),i(t,n),i(n,s),i(s,l),i(l,r),i(s,g),i(s,f),i(f,o),i(s,d),i(s,m),i(m,p),i(n,h),i(n,y),i(y,$),i($,D),i(y,ee),i(y,F),i(F,ae),i(F,te),i(F,v),i(n,H),i(n,z),i(z,B),O.m(B,null),i(z,be),i(z,J),i(n,ve),i(n,L),P(R,L,null),i(L,we),P(U,L,null),i(L,ye),P(j,L,null),N=!0,fe||(ke=[S(l,"click",e[10]),S(f,"click",e[11]),S(m,"click",e[12]),S(B,"click",e[9]),S(J,"click",e[13])],fe=!0)},p(b,[C]){(!N||C&16&&u!==(u="tab "+(b[4]===b[6].FOCUS?"tab-active":"")))&&c(l,"class",u),(!N||C&20&&a!==(a="tab "+(b[4]===b[6].REST&&b[2]===ce?"tab-active":"")))&&c(f,"class",a),(!N||C&20&&w!==(w="tab "+(b[4]===b[6].REST&&b[2]===_e?"tab-active":"")))&&c(m,"class",w),(!N||C&2)&&ge(D,b[1]),(!N||C&1)&&K!==(K=b[7][b[0]]+"")&&ge(te,K),ne!==(ne=$e(b))&&(O.d(1),O=ne(b),O&&(O.c(),O.m(B,null)))},i(b){N||(q(R.$$.fragment,b),q(U.$$.fragment,b),q(j.$$.fragment,b),N=!0)},o(b){Q(R.$$.fragment,b),Q(U.$$.fragment,b),Q(j.$$.fragment,b),N=!1},d(b){b&&E(t),O.d(),G(R),G(U),G(j),fe=!1,M(ke)}}}const ce=5,_e=15;function We(e,t,n){var s=(v=>(v[v.INITIALIZED=0]="INITIALIZED",v[v.RUNNING=1]="RUNNING",v[v.PAUSED=2]="PAUSED",v))(s||{}),l=(v=>(v[v.FOCUS=0]="FOCUS",v[v.REST=1]="REST",v))(l||{});const r=25;let u=null,g=0,f=`${r.toString()}:00`,o=null,a=r,d=0,m=0;const p={0:"Focus",1:"Rest"},w=new Audio("./notification.wav"),h=(v,H)=>{clearInterval(u),n(1,f=`${v.toString().padStart(2,"0")}:00`),n(3,d=0),n(0,g=H),o=v*60,n(2,a=v),n(4,m=H)},y=v=>{h(v,g)},$=()=>{switch(d){case 0:u=setInterval(ee,1e3),w.play(),n(3,d=1);break;case 1:n(3,d=2);break;case 2:w.play(),n(3,d=1);break}};function D(){if(w.play(),g===0){n(0,g=1),h(ce,g),document.title=`(${f}) Focus Garden | ${p[g]}`,$();return}n(0,g=0),document.title=`(${f}) Focus Garden | ${p[g]}`,h(r,g)}function ee(){if(o<=0){D();return}if(d===2)return;o--;const v=Math.floor(o/60),H=o-v*60;n(1,f=`${v.toString().padStart(2,"0")}:${H.toString().padStart(2,"0")}`)}return Ae(()=>{document.title=`(${f}) Focus Garden | ${p[g]}`,h(r,g)}),Be(()=>{document.title=`(${f}) Focus Garden | ${p[g]}`}),[g,f,a,d,m,s,l,p,y,$,()=>h(r,0),()=>h(ce,1),()=>h(_e,1),()=>y(a)]}class Ye extends ue{constructor(t){super(),ie(this,t,We,Qe,oe,{})}}function Ne(e,t,n){const s=e.slice();return s[10]=t[n],s[12]=n,s}function Ie(e){let t,n,s,l,r,u=e[10].text+"",g,f,o,a,d,m,p;function w(){return e[5](e[12])}function h(){return e[6](e[12])}return{c(){t=_("li"),n=_("input"),l=k(),r=_("span"),g=I(u),o=k(),a=_("button"),a.textContent="delete",d=k(),c(n,"type","checkbox"),n.checked=s=e[10].done,c(n,"class","checkbox mr-2"),c(r,"class",f=e[10].done?"line-through text-gray-500":""),c(a,"class","btn btn-error ml-auto"),c(t,"class","flex items-center mb-2 w-full")},m(y,$){T(y,t,$),i(t,n),i(t,l),i(t,r),i(r,g),i(t,o),i(t,a),i(t,d),m||(p=[S(n,"change",w),S(a,"click",h)],m=!0)},p(y,$){e=y,$&1&&s!==(s=e[10].done)&&(n.checked=s),$&1&&u!==(u=e[10].text+"")&&ge(g,u),$&1&&f!==(f=e[10].done?"line-through text-gray-500":"")&&c(r,"class",f)},d(y){y&&E(t),m=!1,M(p)}}}function et(e){let t,n,s,l,r,u,g,f,o,a,d=e[0],m=[];for(let p=0;p<d.length;p+=1)m[p]=Ie(Ne(e,d,p));return{c(){t=_("div"),n=_("section"),s=_("ul");for(let p=0;p<m.length;p+=1)m[p].c();l=k(),r=_("form"),u=_("input"),g=k(),f=_("button"),f.textContent="Add +",c(s,"class","flex flex-col gap-2 w-full"),c(u,"type","text"),c(u,"placeholder","Add new todo"),c(u,"class","input input-bordered w-full mb-2"),c(f,"class","btn btn-primary"),c(r,"class","flex flex-col"),c(n,"class","card p-4 w-full gap-4"),c(t,"class","bg-base-200 flex flex-col items-center rounded-lg")},m(p,w){T(p,t,w),i(t,n),i(n,s);for(let h=0;h<m.length;h+=1)m[h].m(s,null);i(n,l),i(n,r),i(r,u),Ee(u,e[1]),i(r,g),i(r,f),o||(a=[S(u,"input",e[7]),S(u,"keypress",e[8]),S(f,"click",e[2])],o=!0)},p(p,[w]){if(w&25){d=p[0];let h;for(h=0;h<d.length;h+=1){const y=Ne(p,d,h);m[h]?m[h].p(y,w):(m[h]=Ie(y),m[h].c(),m[h].m(s,null))}for(;h<m.length;h+=1)m[h].d(1);m.length=d.length}w&2&&u.value!==p[1]&&Ee(u,p[1])},i:A,o:A,d(p){p&&E(t),He(m,p),o=!1,M(a)}}}function tt(e,t,n){let s=JSON.parse(localStorage.getItem("tasks"))||[],l="";const r=()=>{localStorage.setItem("tasks",JSON.stringify(s))},u=()=>{l.trim()&&(n(0,s=[...s,{text:l,done:!1}]),n(1,l=""),r())},g=p=>{n(0,s[p].done=!s[p].done,s),r()},f=p=>{n(0,s=s.filter((w,h)=>h!==p)),r()},o=p=>g(p),a=p=>f(p);function d(){l=this.value,n(1,l)}return[s,l,u,g,f,o,a,d,p=>p.key==="Enter"&&u()]}class nt extends ue{constructor(t){super(),ie(this,t,tt,et,oe,{})}}function lt(e){let t,n,s,l,r,u,g,f,o,a;return u=new Ye({}),o=new nt({}),{c(){t=_("main"),n=_("header"),n.innerHTML='<p class="font-bold text-xl">🌱 Focus Garden</p>',s=k(),l=_("div"),r=_("section"),W(u.$$.fragment),g=k(),f=_("div"),W(o.$$.fragment),c(n,"class","flex p-4 m-4 bg-base-200 rounded-lg justify-center"),c(r,"class","bg-base-200 rounded-lg shadow"),c(l,"class","p-4"),c(f,"class","p-4"),c(t,"class","flex flex-col justify-center")},m(d,m){T(d,t,m),i(t,n),i(t,s),i(t,l),i(l,r),P(u,r,null),i(t,g),i(t,f),P(o,f,null),a=!0},p:A,i(d){a||(q(u.$$.fragment,d),q(o.$$.fragment,d),a=!0)},o(d){Q(u.$$.fragment,d),Q(o.$$.fragment,d),a=!1},d(d){d&&E(t),G(u),G(o)}}}class st extends ue{constructor(t){super(),ie(this,t,null,lt,oe,{})}}new st({target:document.getElementById("app")});