var At=Object.defineProperty,Mt=Object.defineProperties;var yt=Object.getOwnPropertyDescriptors;var rt=Object.getOwnPropertySymbols;var _t=Object.prototype.hasOwnProperty,Ot=Object.prototype.propertyIsEnumerable;var ot=(r,c,a)=>c in r?At(r,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[c]=a,R=(r,c)=>{for(var a in c||(c={}))_t.call(c,a)&&ot(r,a,c[a]);if(rt)for(var a of rt(c))Ot.call(c,a)&&ot(r,a,c[a]);return r},C=(r,c)=>Mt(r,yt(c));import{r as E,j as S,a as T,c as vt,R as Dt}from"./index.fafe8bdb.js";const I=Symbol(),ut=r=>!!r[I],bt=r=>!r[I].c,N=r=>{var c,a;(a=(c=r[I]).c)==null||a.call(c)},k=(r,c)=>{const a=r[I].o,u=c[I].o;return a===u||r===u||ut(a)&&k(a,c)},st=r=>{const c={o:r,c:null},a=new Promise(u=>{c.c=()=>{c.c=null,u()},r.then(c.c,c.c)});return a[I]=c,a};var Pt=Object.defineProperty,xt=Object.defineProperties,Rt=Object.getOwnPropertyDescriptors,ct=Object.getOwnPropertySymbols,Ct=Object.prototype.hasOwnProperty,It=Object.prototype.propertyIsEnumerable,it=(r,c,a)=>c in r?Pt(r,c,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[c]=a,Vt=(r,c)=>{for(var a in c||(c={}))Ct.call(c,a)&&it(r,a,c[a]);if(ct)for(var a of ct(c))It.call(c,a)&&it(r,a,c[a]);return r},Tt=(r,c)=>xt(r,Rt(c));const U=r=>"init"in r,Y="r",q="w",H="c",K="s",at="h",Bt="n",Nt="l",Ut="a",kt="m",Lt=r=>{const c=new WeakMap,a=new WeakMap,u=new Map;let f,A;if(({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&(f=new Set,A=new Set),r)for(const[t,e]of r){const o={v:e,r:0,d:new Map};({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&(Object.freeze(o),U(t)||console.warn("Found initial value for derived atom which can cause unexpected behavior",t)),c.set(t,o)}const g=new WeakMap,_=(t,e,o)=>{let s=g.get(e);s||(s=new Map,g.set(e,s)),o.then(()=>{s.get(t)===o&&(s.delete(t),s.size||g.delete(e))}),s.set(t,o)},m=t=>{const e=new Set,o=g.get(t);return o&&(g.delete(t),o.forEach((s,i)=>{N(s),e.add(i)})),e},M=new WeakMap,h=t=>{let e=M.get(t);return e||(e=new Map,M.set(t,e)),e},w=(t,e)=>{if(t){const o=h(t);let s=o.get(e);return s||(s=w(t.p,e),s&&("p"in s&&s.p.then(()=>o.delete(e)),o.set(e,s))),s}return c.get(e)},P=(t,e,o)=>{if(({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&Object.freeze(o),t)h(t).set(e,o);else{const s=c.get(e);c.set(e,o),u.has(e)||u.set(e,s)}},x=(t,e=new Map,o)=>{if(!o)return e;const s=new Map;let i=!1;return o.forEach(n=>{var d;const l=((d=w(t,n))==null?void 0:d.r)||0;s.set(n,l),e.get(n)!==l&&(i=!0)}),e.size===s.size&&!i?e:s},V=(t,e,o,s,i)=>{const n=w(t,e);if(n){if(i&&(!("p"in n)||!k(n.p,i)))return n;"p"in n&&N(n.p)}const d={v:o,r:(n==null?void 0:n.r)||0,d:x(t,n==null?void 0:n.d,s)};return!n||!("v"in n)||!Object.is(n.v,o)?(++d.r,d.d.has(e)&&(d.d=new Map(d.d).set(e,d.r))):d.d!==n.d&&(d.d.size!==n.d.size||!Array.from(d.d.keys()).every(l=>n.d.has(l)))&&Promise.resolve().then(()=>{D(t)}),P(t,e,d),d},p=(t,e,o,s,i)=>{const n=w(t,e);if(n){if(i&&(!("p"in n)||!k(n.p,i)))return n;"p"in n&&N(n.p)}const d={e:o,r:(n==null?void 0:n.r)||0,d:x(t,n==null?void 0:n.d,s)};return P(t,e,d),d},y=(t,e,o,s)=>{const i=w(t,e);if(i&&"p"in i){if(k(i.p,o))return i;N(i.p)}_(t,e,o);const n={p:o,r:(i==null?void 0:i.r)||0,d:x(t,i==null?void 0:i.d,s)};return P(t,e,n),n},B=(t,e,o,s)=>{if(o instanceof Promise){const i=st(o.then(n=>{V(t,e,n,s,i),D(t)}).catch(n=>{if(n instanceof Promise)return ut(n)?n.then(()=>{v(t,e,!0)}):n;p(t,e,n,s,i),D(t)}));return y(t,e,i,s)}return V(t,e,o,s)},mt=(t,e)=>{const o=w(t,e);if(o){const s=Tt(Vt({},o),{i:o.r});P(t,e,s)}else({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&console.warn("[Bug] could not invalidate non existing atom",e)},v=(t,e,o)=>{if(!o){const i=w(t,e);if(i&&(i.r!==i.i&&"p"in i&&!bt(i.p)||(i.d.forEach((n,d)=>{if(d!==e)if(!a.has(d))v(t,d);else{const l=w(t,d);l&&l.r===l.i&&v(t,d)}}),Array.from(i.d).every(([n,d])=>{const l=w(t,n);return l&&"v"in l&&l.r===d}))))return i}const s=new Set;try{const i=e.read(n=>{s.add(n);const d=n===e?w(t,n):v(t,n);if(d){if("e"in d)throw d.e;if("p"in d)throw d.p;return d.v}if(U(n))return n.init;throw new Error("no atom init")});return B(t,e,i,s)}catch(i){if(i instanceof Promise){const n=st(i);return y(t,e,n,s)}return p(t,e,i,s)}},J=(t,e)=>v(e,t),wt=t=>{let e=a.get(t);return e||(e=$(t)),e},F=(t,e)=>!e.l.size&&(!e.t.size||e.t.size===1&&e.t.has(t)),ht=t=>{const e=a.get(t);e&&F(t,e)&&W(t)},j=(t,e)=>{const o=a.get(e);o==null||o.t.forEach(s=>{s!==e&&(mt(t,s),j(t,s))})},Q=(t,e,o)=>{let s=!0;const i=(l,b)=>{const O=v(t,l);if("e"in O)throw O.e;if("p"in O){if(b!=null&&b.unstable_promise)return O.p.then(()=>i(l,b));throw({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&console.info("Reading pending atom state in write operation. We throw a promise for now.",l),O.p}if("v"in O)return O.v;throw({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&console.warn("[Bug] no value found while reading atom in write operation. This is probably a bug.",l),new Error("no value found")},n=(l,b)=>{let O;if(l===e){if(!U(l))throw new Error("atom not writable");m(l).forEach(nt=>{nt!==t&&B(nt,l,b)}),B(t,l,b),j(t,l)}else O=Q(t,l,b);return s||D(t),O},d=e.write(i,n,o);return s=!1,t=void 0,d},z=(t,e,o)=>{const s=Q(o,t,e);return D(o),s},Et=t=>!!t.write,$=(t,e)=>{const o={t:new Set(e&&[e]),l:new Set};if(a.set(t,o),({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&A.add(t),v(void 0,t).d.forEach((i,n)=>{const d=a.get(n);d?d.t.add(t):n!==t&&$(n,t)}),Et(t)&&t.onMount){const i=d=>z(t,d),n=t.onMount(i);n&&(o.u=n)}return o},W=t=>{var e;const o=(e=a.get(t))==null?void 0:e.u;o&&o(),a.delete(t),({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&A.delete(t);const s=w(void 0,t);s?s.d.forEach((i,n)=>{if(n!==t){const d=a.get(n);d&&(d.t.delete(t),F(n,d)&&W(n))}}):({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&console.warn("[Bug] could not find atom state to unmount",t)},X=(t,e,o)=>{const s=new Set(e.d.keys());o==null||o.forEach((i,n)=>{if(s.has(n)){s.delete(n);return}const d=a.get(n);d&&(d.t.delete(t),F(n,d)&&W(n))}),s.forEach(i=>{const n=a.get(i);n?n.t.add(t):a.has(t)&&$(i,t)})},D=t=>{if(t){h(t).forEach((o,s)=>{if(o!==c.get(s)){const i=a.get(s);i==null||i.l.forEach(n=>n(t))}});return}for(;u.size;){const e=Array.from(u);u.clear(),e.forEach(([o,s])=>{const i=w(void 0,o);i&&i.d!==(s==null?void 0:s.d)&&X(o,i,s==null?void 0:s.d);const n=a.get(o);n==null||n.l.forEach(d=>d())})}({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&f.forEach(e=>e())},St=t=>{h(t).forEach((o,s)=>{const i=c.get(s);(o.r>((i==null?void 0:i.r)||0)||"v"in o&&o.r===(i==null?void 0:i.r)&&o.d!==(i==null?void 0:i.d))&&(c.set(s,o),o.d!==(i==null?void 0:i.d)&&X(s,o,i==null?void 0:i.d))})},Z=(t,e)=>{e&&St(e),D(void 0)},tt=(t,e)=>{const s=wt(t).l;return s.add(e),()=>{s.delete(e),ht(t)}},et=(t,e)=>{for(const[o,s]of t)U(o)&&(B(e,o,s),j(e,o));D(e)};return({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?{[Y]:J,[q]:z,[H]:Z,[K]:tt,[at]:et,[Bt]:t=>(f.add(t),()=>{f.delete(t)}),[Nt]:()=>A.values(),[Ut]:t=>c.get(t),[kt]:t=>a.get(t)}:{[Y]:J,[q]:z,[H]:Z,[K]:tt,[at]:et}},Ft=(r,c)=>({s:c?c(r).SECRET_INTERNAL_store:Lt(r)}),G=new Map,lt=r=>(G.has(r)||G.set(r,E.exports.createContext(Ft())),G.get(r));let jt=0;function ft(r,c){const a=`atom${++jt}`,u={toString:()=>a};return typeof r=="function"?u.read=r:(u.init=r,u.read=f=>f(u),u.write=(f,A,g)=>A(u,typeof g=="function"?g(f(u)):g)),c&&(u.write=c),u}function zt(r,c){const a=lt(c),{s:u}=E.exports.useContext(a),f=E.exports.useCallback(M=>{const h=u[Y](r,M);if("e"in h)throw h.e;if("p"in h)throw h.p;if("v"in h)return h.v;throw new Error("no atom value")},[u,r]),[[A,g,_],m]=E.exports.useReducer(E.exports.useCallback((M,h)=>{const w=f(h);return Object.is(M[1],w)&&M[2]===r?M:[h,w,r]},[f,r]),void 0,()=>{const h=f(void 0);return[void 0,h,r]});return _!==r&&m(void 0),E.exports.useEffect(()=>{const M=u[K](r,m);return m(void 0),M},[u,r]),E.exports.useEffect(()=>{u[H](r,A)}),E.exports.useDebugValue(g),g}function $t(r,c){const a=lt(c),{s:u,w:f}=E.exports.useContext(a);return E.exports.useCallback(g=>{if(({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!("write"in r))throw new Error("not writable atom");const _=m=>u[q](r,g,m);return f?f(_):_()},[u,f,r])}function L(r,c){return"scope"in r&&(console.warn("atom.scope is deprecated. Please do useAtom(atom, scope) instead."),c=r.scope),[zt(r,c),$t(r,c)]}const pt=ft(!1),gt=ft({first:{id:null,src:null},second:{id:null,src:null}});var Wt="/two-playground/assets/back.0038ef8c.png";function Gt({card:r,turned:c,clickable:a,deg:u}){const[f,A]=L(pt),[g,_]=L(gt),m=()=>{c||!a||(_(f?C(R({},g),{first:r}):C(R({},g),{second:r})),A(!f))};return S("div",{className:"transition-all",style:{transform:`rotate(${u}deg)`},children:T("div",{className:c?"card-style flipped-style":"card-style normal-style",children:[S("img",{src:r.src,alt:"card front",className:"frontface card-image"}),S("img",{src:Wt,alt:"card back",className:"backface card-image",onClick:m})]})})}var Yt="/two-playground/assets/card01.a58c6d8f.png",qt="/two-playground/assets/card02.42071d83.png",Ht="/two-playground/assets/card03.eb6771b3.png",Kt="/two-playground/assets/card04.7323b70f.png",Jt="/two-playground/assets/card05.8253d8be.png",Qt="/two-playground/assets/card06.384b7b7f.png",Xt="/two-playground/assets/card07.607e7372.png",Zt="/two-playground/assets/card08.59bbab8e.png",te="/two-playground/assets/card09.e3c3eb9d.png";const dt=[{src:Yt},{src:qt},{src:Ht},{src:Kt},{src:Jt},{src:Qt},{src:Xt},{src:Zt},{src:te}];var ee="/two-playground/assets/circle.28d6d1f8.svg",ne="/two-playground/assets/shuffle.a016e8e2.svg";function re({rounds:r,message:c,shuffleCards:a}){return T("div",{className:"flex justify-between absolute bottom-6 left-[10%] w-4/5",children:[T("p",{className:"flex",children:[S("span",{className:"mr-4",children:S("img",{src:ee,alt:""})}),S("span",{className:"mr-2",children:r}),"rounds"]}),S("p",{children:c}),T("button",{onClick:a,className:"flex",children:[S("span",{className:"mr-4",children:S("img",{src:ne,alt:""})}),"Shuffle"]})]})}function oe(){const[r,c]=E.exports.useState([]),[a,u]=E.exports.useState(0),[f,A]=E.exports.useState(!0),[g,_]=L(pt),[m,M]=L(gt),[h,w]=E.exports.useState(),P=1e3,x=()=>(Math.random()-.5)*12,V=()=>{const p=[...dt,...dt].sort(()=>Math.random()-.5).map(y=>C(R({},y),{id:Math.random(),matched:!1,deg:x()}));c(p),u(0),w("")};return E.exports.useEffect(()=>{m.first===null||m.second===null||(A(!1),m.first.src===m.second.src?(c(p=>p.map(y=>y.src===m.first.src?C(R({},y),{matched:!0}):y)),M({first:null,second:null}),A(!0)):(u(a+1),setTimeout(()=>{c(p=>p.map(y=>y.id===m.first.id||y.id===m.second.id?C(R({},y),{deg:x()}):y)),M({first:null,second:null}),A(!0)},P)))},[g]),E.exports.useEffect(()=>{if(r.length!==0){for(let p=0;p<r.length;p++)if(r[p].matched===!1)return;a<r.length?w("Congratulations! Do you want to play again? \u{1F449}"):w("Hmm...Do you want to play again? \u{1F449}")}},[r]),E.exports.useEffect(()=>{V()},[]),T("div",{className:"pt-8 text-white",children:[S("h1",{className:"text-center text-16 mb-6",children:"TYPEFINDER"}),S("div",{className:"grid grid-cols-6 gap-x-8 gap-y-3 w-3/5 mx-auto",children:r.map(p=>S(Gt,{card:p,turned:m.first==p||m.second==p||p.matched,clickable:f,deg:p.deg},p.id))}),S(re,{rounds:a,message:h,shuffleCards:V})]})}function se(){return S("section",{className:"bg-[#1f1f1f] w-full min-h-screen",children:S(oe,{})})}vt.createRoot(document.getElementById("card-root")).render(S(Dt.StrictMode,{children:S(se,{})}));
