import{d as i,a as n}from"./common-utils.kbeL0RFV.js";let c=i(".toggle-right-side-bar-btn");function g(){let r=n(".right-sidebar-panel.sl-container *:not(.toggle-right-side-bar-btn)");r.forEach(t=>{t.style.width="auto"});let a=i(".right-sidebar-container"),o=a.querySelectorAll("nav")[1],s=i("body");const l=t=>{t instanceof Event&&(t=sessionStorage.getItem("rightSideBarCollapsed")==="true"),t?(a.style.width="",r.forEach(e=>{e.style.display=""}),[o].forEach(e=>{e.style.opacity="1"}),s.classList.remove("right-side-bar-collapsed")):(a.style.width="50px",r.forEach(e=>{e.style.display="none"}),[o].forEach(e=>{e.style.opacity="0"}),s.classList.add("right-side-bar-collapsed")),sessionStorage.setItem("rightSideBarCollapsed",t?"false":"true")};c.addEventListener("click",l);let d=sessionStorage.getItem("rightSideBarCollapsed")==="true";l(!d)}document.addEventListener("DOMContentLoaded",()=>{g()});
