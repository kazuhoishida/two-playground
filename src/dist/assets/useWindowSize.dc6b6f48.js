import{r as n}from"./index.fafe8bdb.js";function s(){function e(){return{width:window.innerWidth,height:window.innerHeight}}const[t,r]=n.exports.useState(e);return n.exports.useEffect(()=>{function i(){r(e())}return window.addEventListener("resize",i),()=>window.removeEventListener("resize",i)},[]),t}export{s as u};