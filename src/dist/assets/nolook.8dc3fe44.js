import{r,a as o,j as e,c as d,R as m}from"./index.fafe8bdb.js";import{g as i}from"./index.2d9ac2c0.js";import{N as f}from"./NolookSidebarLeft.f77a508c.js";var h="/two-playground/assets/kv@2x.51cf5720.webp";function v(){const[t,u]=r.exports.useState({mouseX:0,mouseY:0}),s=r.exports.useRef(),a=r.exports.useRef(),l=r.exports.useRef();return r.exports.useEffect(()=>{const n=c=>{u({x:c.clientX,y:c.clientY})};return window.addEventListener("mousemove",n),()=>window.removeEventListener("mousemove",n)},[]),r.exports.useEffect(()=>{s.current==null||l.current==null||a.current==null||(i.to(s.current,{duration:.6,x:t.x/8,y:t.y/8}),i.to(l.current,{duration:.8,delay:.05,x:t.x/8,y:t.y/8}),i.to(a.current,{duration:.3,x:t.x/22,y:t.y/22}))},[t]),o("div",{className:"bg-white min-h-screen mt-[10vh] relative",children:[o("div",{className:"w-[40vw] h-[70vh] ml-[40vw] relative",children:[e("div",{className:"bg-[#f4c443] absolute top-0 left-0 z-0 w-full h-full block",ref:l}),e("div",{className:"overflow-hidden w-full h-full",children:e("div",{style:{backgroundImage:`url(${h})`,backgroundSize:"cover"},className:"absolute top-0 left-0 w-full h-full",ref:s})})]}),e("div",{className:"ml-[10vw] absolute top-[30%] left-[8%] z-0 mix-blend-difference text-white",ref:a,children:o("h1",{className:"text-[7vw] leading-[1.2] font-semibold",children:["AVOID",e("br",{}),"THE PATHS",e("br",{}),"YOU'VE",e("br",{}),"ALREADY",e("br",{}),"TAKEN"]})})]})}var b="/two-playground/assets/arrow.93c62e14.svg",g="/two-playground/assets/hamburger.f399887b.svg";function p(){return o("div",{className:"fixed top-0 right-0 z-10 h-screen",children:[e("a",{href:"/",className:"block w-[37px] h-[16px] absolute top-20 right-10",children:e("img",{src:g,alt:""})}),e("a",{href:"/",className:"block w-[37px] h-[16px] absolute bottom-10 right-10",children:e("img",{src:b,alt:""})})]})}function x(){return o("div",{className:"bg-white",children:[e(f,{}),e(v,{}),e(p,{})]})}d.createRoot(document.getElementById("nolook-root")).render(e(m.StrictMode,{children:e(x,{})}));