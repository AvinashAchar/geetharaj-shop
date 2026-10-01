import { useEffect, useState } from "react";
export default function ScrollProgress() {
  const [width,setWidth]=useState(0);
  useEffect(()=>{const f=()=>{const h=document.documentElement.scrollHeight-window.innerHeight;setWidth(h>0?(window.scrollY/h)*100:0)};window.addEventListener("scroll",f,{passive:true});f();return()=>window.removeEventListener("scroll",f)},[]);
  return <div className="scroll-progress" style={{width:`${width}%`}} />;
}