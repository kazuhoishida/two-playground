var Et=Object.defineProperty,St=Object.defineProperties;var vt=Object.getOwnPropertyDescriptors;var st=Object.getOwnPropertySymbols;var yt=Object.prototype.hasOwnProperty,Mt=Object.prototype.propertyIsEnumerable;var ct=(n,a,i)=>a in n?Et(n,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[a]=i,R=(n,a)=>{for(var i in a||(a={}))yt.call(a,i)&&ct(n,i,a[i]);if(st)for(var i of st(a))Mt.call(a,i)&&ct(n,i,a[i]);return n},k=(n,a)=>St(n,vt(a));import{r as w,j as m,a as C,c as bt,R as Ot}from"./index.a74d0062.js";const V=Symbol(),ut=n=>!!n[V],_t=n=>!n[V].c,L=n=>{var a,i;(i=(a=n[V]).c)==null||i.call(a)},j=(n,a)=>{const i=n[V].o,l=a[V].o;return i===l||n===l||ut(i)&&j(i,a)},at=n=>{const a={o:n,c:null},i=new Promise(l=>{a.c=()=>{a.c=null,l()},n.then(a.c,a.c)});return i[V]=a,i};var It=Object.defineProperty,xt=Object.defineProperties,Dt=Object.getOwnPropertyDescriptors,it=Object.getOwnPropertySymbols,Pt=Object.prototype.hasOwnProperty,Ct=Object.prototype.propertyIsEnumerable,dt=(n,a,i)=>a in n?It(n,a,{enumerable:!0,configurable:!0,writable:!0,value:i}):n[a]=i,Rt=(n,a)=>{for(var i in a||(a={}))Pt.call(a,i)&&dt(n,i,a[i]);if(it)for(var i of it(a))Ct.call(a,i)&&dt(n,i,a[i]);return n},kt=(n,a)=>xt(n,Dt(a));const F=n=>"init"in n,H="r",K="w",Q="c",X="s",lt="h",Vt="n",Nt="l",Tt="a",Bt="m",Jt=n=>{const a=new WeakMap,i=new WeakMap,l=new Map;let p,E;if(({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&(p=new Set,E=new Set),n)for(const[t,e]of n){const o={v:e,r:0,d:new Map};({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&(Object.freeze(o),F(t)||console.warn("Found initial value for derived atom which can cause unexpected behavior",t)),a.set(t,o)}const h=new WeakMap,v=(t,e,o)=>{let s=h.get(e);s||(s=new Map,h.set(e,s)),o.then(()=>{s.get(t)===o&&(s.delete(t),s.size||h.delete(e))}),s.set(t,o)},y=t=>{const e=new Set,o=h.get(t);return o&&(h.delete(t),o.forEach((s,c)=>{L(s),e.add(c)})),e},S=new WeakMap,u=t=>{let e=S.get(t);return e||(e=new Map,S.set(t,e)),e},A=(t,e)=>{if(t){const o=u(t);let s=o.get(e);return s||(s=A(t.p,e),s&&("p"in s&&s.p.then(()=>o.delete(e)),o.set(e,s))),s}return a.get(e)},_=(t,e,o)=>{if(({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&Object.freeze(o),t)u(t).set(e,o);else{const s=a.get(e);a.set(e,o),l.has(e)||l.set(e,s)}},I=(t,e=new Map,o)=>{if(!o)return e;const s=new Map;let c=!1;return o.forEach(r=>{var d;const f=((d=A(t,r))==null?void 0:d.r)||0;s.set(r,f),e.get(r)!==f&&(c=!0)}),e.size===s.size&&!c?e:s},B=(t,e,o,s,c)=>{const r=A(t,e);if(r){if(c&&(!("p"in r)||!j(r.p,c)))return r;"p"in r&&L(r.p)}const d={v:o,r:(r==null?void 0:r.r)||0,d:I(t,r==null?void 0:r.d,s)};return!r||!("v"in r)||!Object.is(r.v,o)?(++d.r,d.d.has(e)&&(d.d=new Map(d.d).set(e,d.r))):d.d!==r.d&&(d.d.size!==r.d.size||!Array.from(d.d.keys()).every(f=>r.d.has(f)))&&Promise.resolve().then(()=>{D(t)}),_(t,e,d),d},J=(t,e,o,s,c)=>{const r=A(t,e);if(r){if(c&&(!("p"in r)||!j(r.p,c)))return r;"p"in r&&L(r.p)}const d={e:o,r:(r==null?void 0:r.r)||0,d:I(t,r==null?void 0:r.d,s)};return _(t,e,d),d},N=(t,e,o,s)=>{const c=A(t,e);if(c&&"p"in c){if(j(c.p,o))return c;L(c.p)}v(t,e,o);const r={p:o,r:(c==null?void 0:c.r)||0,d:I(t,c==null?void 0:c.d,s)};return _(t,e,r),r},x=(t,e,o,s)=>{if(o instanceof Promise){const c=at(o.then(r=>{B(t,e,r,s,c),D(t)}).catch(r=>{if(r instanceof Promise)return ut(r)?r.then(()=>{O(t,e,!0)}):r;J(t,e,r,s,c),D(t)}));return N(t,e,c,s)}return B(t,e,o,s)},U=(t,e)=>{const o=A(t,e);if(o){const s=kt(Rt({},o),{i:o.r});_(t,e,s)}else({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&console.warn("[Bug] could not invalidate non existing atom",e)},O=(t,e,o)=>{if(!o){const c=A(t,e);if(c&&(c.r!==c.i&&"p"in c&&!_t(c.p)||(c.d.forEach((r,d)=>{if(d!==e)if(!i.has(d))O(t,d);else{const f=A(t,d);f&&f.r===f.i&&O(t,d)}}),Array.from(c.d).every(([r,d])=>{const f=A(t,r);return f&&"v"in f&&f.r===d}))))return c}const s=new Set;try{const c=e.read(r=>{s.add(r);const d=r===e?A(t,r):O(t,r);if(d){if("e"in d)throw d.e;if("p"in d)throw d.p;return d.v}if(F(r))return r.init;throw new Error("no atom init")});return x(t,e,c,s)}catch(c){if(c instanceof Promise){const r=at(c);return N(t,e,r,s)}return J(t,e,c,s)}},g=(t,e)=>O(e,t),M=t=>{let e=i.get(t);return e||(e=G(t)),e},T=(t,e)=>!e.l.size&&(!e.t.size||e.t.size===1&&e.t.has(t)),wt=t=>{const e=i.get(t);e&&T(t,e)&&Y(t)},$=(t,e)=>{const o=i.get(e);o==null||o.t.forEach(s=>{s!==e&&(U(t,s),$(t,s))})},Z=(t,e,o)=>{let s=!0;const c=(f,P)=>{const b=O(t,f);if("e"in b)throw b.e;if("p"in b){if(P!=null&&P.unstable_promise)return b.p.then(()=>c(f,P));throw({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&console.info("Reading pending atom state in write operation. We throw a promise for now.",f),b.p}if("v"in b)return b.v;throw({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&console.warn("[Bug] no value found while reading atom in write operation. This is probably a bug.",f),new Error("no value found")},r=(f,P)=>{let b;if(f===e){if(!F(f))throw new Error("atom not writable");y(f).forEach(ot=>{ot!==t&&x(ot,f,P)}),x(t,f,P),$(t,f)}else b=Z(t,f,P);return s||D(t),b},d=e.write(c,r,o);return s=!1,t=void 0,d},W=(t,e,o)=>{const s=Z(o,t,e);return D(o),s},ht=t=>!!t.write,G=(t,e)=>{const o={t:new Set(e&&[e]),l:new Set};if(i.set(t,o),({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&E.add(t),O(void 0,t).d.forEach((c,r)=>{const d=i.get(r);d?d.t.add(t):r!==t&&G(r,t)}),ht(t)&&t.onMount){const c=d=>W(t,d),r=t.onMount(c);r&&(o.u=r)}return o},Y=t=>{var e;const o=(e=i.get(t))==null?void 0:e.u;o&&o(),i.delete(t),({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&E.delete(t);const s=A(void 0,t);s?s.d.forEach((c,r)=>{if(r!==t){const d=i.get(r);d&&(d.t.delete(t),T(r,d)&&Y(r))}}):({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&console.warn("[Bug] could not find atom state to unmount",t)},tt=(t,e,o)=>{const s=new Set(e.d.keys());o==null||o.forEach((c,r)=>{if(s.has(r)){s.delete(r);return}const d=i.get(r);d&&(d.t.delete(t),T(r,d)&&Y(r))}),s.forEach(c=>{const r=i.get(c);r?r.t.add(t):i.has(t)&&G(c,t)})},D=t=>{if(t){u(t).forEach((o,s)=>{if(o!==a.get(s)){const c=i.get(s);c==null||c.l.forEach(r=>r(t))}});return}for(;l.size;){const e=Array.from(l);l.clear(),e.forEach(([o,s])=>{const c=A(void 0,o);c&&c.d!==(s==null?void 0:s.d)&&tt(o,c,s==null?void 0:s.d);const r=i.get(o);r==null||r.l.forEach(d=>d())})}({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&p.forEach(e=>e())},At=t=>{u(t).forEach((o,s)=>{const c=a.get(s);(o.r>((c==null?void 0:c.r)||0)||"v"in o&&o.r===(c==null?void 0:c.r)&&o.d!==(c==null?void 0:c.d))&&(a.set(s,o),o.d!==(c==null?void 0:c.d)&&tt(s,o,c==null?void 0:c.d))})},et=(t,e)=>{e&&At(e),D(void 0)},rt=(t,e)=>{const s=M(t).l;return s.add(e),()=>{s.delete(e),wt(t)}},nt=(t,e)=>{for(const[o,s]of t)F(o)&&(x(e,o,s),$(e,o));D(e)};return({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"?{[H]:g,[K]:W,[Q]:et,[X]:rt,[lt]:nt,[Vt]:t=>(p.add(t),()=>{p.delete(t)}),[Nt]:()=>E.values(),[Tt]:t=>a.get(t),[Bt]:t=>i.get(t)}:{[H]:g,[K]:W,[Q]:et,[X]:rt,[lt]:nt}},Ut=(n,a)=>({s:a?a(n).SECRET_INTERNAL_store:Jt(n)}),q=new Map,ft=n=>(q.has(n)||q.set(n,w.exports.createContext(Ut())),q.get(n));let Lt=0;function pt(n,a){const i=`atom${++Lt}`,l={toString:()=>i};return typeof n=="function"?l.read=n:(l.init=n,l.read=p=>p(l),l.write=(p,E,h)=>E(l,typeof h=="function"?h(p(l)):h)),a&&(l.write=a),l}function Ft(n,a){const i=ft(a),{s:l}=w.exports.useContext(i),p=w.exports.useCallback(S=>{const u=l[H](n,S);if("e"in u)throw u.e;if("p"in u)throw u.p;if("v"in u)return u.v;throw new Error("no atom value")},[l,n]),[[E,h,v],y]=w.exports.useReducer(w.exports.useCallback((S,u)=>{const A=p(u);return Object.is(S[1],A)&&S[2]===n?S:[u,A,n]},[p,n]),void 0,()=>{const u=p(void 0);return[void 0,u,n]});return v!==n&&y(void 0),w.exports.useEffect(()=>{const S=l[X](n,y);return y(void 0),S},[l,n]),w.exports.useEffect(()=>{l[Q](n,E)}),w.exports.useDebugValue(h),h}function jt(n,a){const i=ft(a),{s:l,w:p}=w.exports.useContext(i);return w.exports.useCallback(h=>{if(({BASE_URL:"/two-playground/",MODE:"production",DEV:!1,PROD:!0}&&"production")!=="production"&&!("write"in n))throw new Error("not writable atom");const v=y=>l[K](n,h,y);return p?p(v):v()},[l,p,n])}function z(n,a){return"scope"in n&&(console.warn("atom.scope is deprecated. Please do useAtom(atom, scope) instead."),a=n.scope),[Ft(n,a),jt(n,a)]}const gt=pt(!1),mt=pt({first:{id:null,src:null},second:{id:null,src:null}});var zt="/two-playground/assets/back.0038ef8c.png",$t="/two-playground/assets/back-JA.6cbb38aa.png";function Wt({card:n,isEnglish:a,turned:i,clickable:l,deg:p}){const[E,h]=z(gt),[v,y]=z(mt),S=()=>{i||!l||(y(E?k(R({},v),{first:n}):k(R({},v),{second:n})),h(!E))};return m("div",{className:"transition-all",style:{transform:`rotate(${p}deg)`},children:C("div",{className:i?"card-style flipped-style":"card-style normal-style",children:[m("img",{src:n.src,alt:"card front",className:"frontface card-image"}),m("img",{src:a?zt:$t,alt:"card back",className:"backface card-image",onClick:S})]})})}var Gt="/two-playground/assets/card01.a58c6d8f.png",Yt="/two-playground/assets/card02.42071d83.png",qt="/two-playground/assets/card03.eb6771b3.png",Ht="/two-playground/assets/card04.7323b70f.png",Kt="/two-playground/assets/card05.8253d8be.png",Qt="/two-playground/assets/card06.384b7b7f.png",Xt="/two-playground/assets/card07.607e7372.png",Zt="/two-playground/assets/card08.59bbab8e.png",te="/two-playground/assets/card09.e3c3eb9d.png",ee="/two-playground/assets/JA-1.4d311f2f.png",re="/two-playground/assets/JA-2.3c16e4cf.png",ne="/two-playground/assets/JA-3.9fc195cd.png",oe="/two-playground/assets/JA-4.9dc624da.png",se="/two-playground/assets/JA-5.995f17d0.png",ce="/two-playground/assets/JA-6.71cde765.png",ae="/two-playground/assets/JA-7.3853b5f1.png",ie="/two-playground/assets/JA-8.c8e2eba2.png",de="/two-playground/assets/JA-9.06c8a15e.png";const le=[{src:Gt},{src:Yt},{src:qt},{src:Ht},{src:Kt},{src:Qt},{src:Xt},{src:Zt},{src:te}],ue=[{src:ee},{src:re},{src:ne},{src:oe},{src:se},{src:ce},{src:ae},{src:ie},{src:de}];var fe="/two-playground/assets/circle.28d6d1f8.svg",pe="/two-playground/assets/shuffle.a016e8e2.svg";function ge({rounds:n,shuffleCards:a}){return C("div",{className:"flex justify-between absolute bottom-6 left-[10%] w-4/5",children:[C("p",{className:"flex",children:[m("span",{className:"mr-4",children:m("img",{src:fe,alt:""})}),m("span",{className:"mr-2",children:n}),"rounds"]}),C("button",{onClick:a,className:"flex",children:[m("span",{className:"mr-4",children:m("img",{src:pe,alt:""})}),"Shuffle"]})]})}var me="/two-playground/assets/deck.fb427b97.svg";function we(){const[n,a]=w.exports.useState(!0),[i,l]=w.exports.useState([]),[p,E]=w.exports.useState(0),[h,v]=w.exports.useState(!0),[y,S]=z(gt),[u,A]=z(mt),[_,I]=w.exports.useState(),B=1e3,[J,N]=w.exports.useState(!1),x=()=>(Math.random()-.5)*12,U=()=>{const g=n?le:ue,M=[...g,...g].sort(()=>Math.random()-.5).map(T=>k(R({},T),{id:Math.random(),matched:!1,deg:x()}));l(M),E(0),I("")};w.exports.useEffect(()=>{u.first===null||u.second===null||(v(!1),u.first.src===u.second.src?(l(g=>g.map(M=>M.src===u.first.src?k(R({},M),{matched:!0}):M)),A({first:null,second:null}),v(!0)):(E(p+1),setTimeout(()=>{l(g=>g.map(M=>M.id===u.first.id||M.id===u.second.id?k(R({},M),{deg:x()}):M)),A({first:null,second:null}),v(!0)},B)))},[y]),w.exports.useEffect(()=>{if(i.length!==0){for(let g=0;g<i.length;g++)if(i[g].matched===!1)return;setTimeout(()=>{p<i.length/2?I("Congratulations! You can try another card deck \u{1F448}"):I("Hmm...You can try another card deck \u{1F448}"),N(!0)},1e3)}},[i]);const O=()=>{a(!n)};return w.exports.useEffect(()=>{U()},[n]),C("div",{className:"pt-8 text-white",children:[m("h1",{className:"text-center text-16 mb-6",children:"TYPEFINDER"}),C("div",{className:"fixed left-6 top-1/2 -translate-y-1/2 cursor-pointer flex items-center",onClick:O,children:[m("img",{src:me,alt:"deck"}),m("span",{className:"text-12 ml-2",children:n?"\u6B27\u6587":"\u548C\u6587"})]}),m("div",{className:"grid grid-cols-6 gap-x-8 gap-y-3 w-3/5 mx-auto",children:i.map(g=>m(Wt,{card:g,isEnglish:n,turned:u.first==g||u.second==g||g.matched,clickable:h,deg:g.deg},g.id))}),m(ge,{rounds:p,message:_,shuffleCards:U}),_&&J&&C("div",{className:"fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg border-4 border-black text-black",children:[m("div",{className:"absolute top-2 right-2 underline",onClick:()=>N(!1),children:"close"}),m("p",{className:"px-[4vw] py-[6vh] text-black",children:_})]})]})}function he(){return m("section",{className:"bg-[#1f1f1f] w-full min-h-screen",children:m(we,{})})}bt.createRoot(document.getElementById("card-root")).render(m(Ot.StrictMode,{children:m(he,{})}));