import{r as o,a as s,j as e,c as i,R as m}from"./index.a74d0062.js";import{g as c}from"./index.2d9ac2c0.js";import{u}from"./useMousePos.01321cd7.js";var d="/two-playground/assets/kv@2x.51cf5720.webp";function f(){const r=u(),l=o.exports.useRef(),t=o.exports.useRef(),a=o.exports.useRef();return o.exports.useEffect(()=>{!l.current||!a.current||!t.current||(c.to(l.current,{duration:.6,x:r.x/8,y:r.y/8}),c.to(a.current,{duration:.8,delay:.05,x:r.x/8,y:r.y/8}),c.to(t.current,{duration:.3,x:r.x/22,y:r.y/22}))},[r]),s("div",{className:"bg-white min-h-screen mt-[10vh] relative",children:[s("div",{className:"w-[40vw] h-[70vh] ml-[40vw] relative",children:[e("div",{className:"bg-[#f4c443] absolute top-0 left-0 z-0 w-full h-full block",ref:a}),e("div",{className:"overflow-hidden w-full h-full",children:e("div",{style:{backgroundImage:`url(${d})`,backgroundSize:"cover"},className:"absolute top-0 left-0 w-full h-full",ref:l})})]}),e("div",{className:"ml-[10vw] absolute top-[30%] left-[8%] z-0 mix-blend-difference text-white",ref:t,children:s("h1",{className:"text-[7vw] leading-[1.2] font-semibold",children:["AVOID",e("br",{}),"THE PATHS",e("br",{}),"YOU'VE",e("br",{}),"ALREADY",e("br",{}),"TAKEN"]})})]})}function h(){const r=[{name:"SERVICE",url:"/"},{name:"SERVICE",url:"/"},{name:"SERVICE",url:"/"},{name:"SERVICE",url:"/"},{name:"SERVICE",url:"/"}],l=[{name:"Instagram",url:"/"},{name:"Instagram",url:"/"},{name:"Instagram",url:"/"}];return s("div",{className:"fixed h-screen z-10",children:[s("div",{className:"absolute top-0 left-10",children:[e("h1",{className:"mb-12 text-28 whitespace-nowrap font-semibold",children:"Nolook inc."}),e("ul",{className:"",children:r.map(({name:t,url:a},n)=>e("li",{className:"mb-2",children:e("a",{href:a,className:"uppercase font-medium",children:t})},`${a}-${n}`))})]}),e("ul",{className:"absolute bottom-14 left-10 -translate-y-[100%]",children:l.map(({name:t,url:a},n)=>e("li",{className:"mb-2",children:e("a",{href:a,className:"font-medium",children:t})},`${a}-${n}`))})]})}var b="/two-playground/assets/arrow.93c62e14.svg",p="/two-playground/assets/hamburger.f399887b.svg";function g(){return s("div",{className:"fixed top-0 right-0 z-10 h-screen",children:[e("a",{href:"/",className:"block w-[37px] h-[16px] absolute top-20 right-10",children:e("img",{src:p,alt:""})}),e("a",{href:"/",className:"block w-[37px] h-[16px] absolute bottom-10 right-10",children:e("img",{src:b,alt:""})})]})}function v(){return s("div",{className:"bg-white",children:[e(h,{}),e(f,{}),e(g,{})]})}i.createRoot(document.getElementById("nolook-root")).render(e(m.StrictMode,{children:e(v,{})}));