const T="_top";class b extends HTMLElement{constructor(){super(),this._current=this.querySelector('a[aria-current="true"]'),this.minH=parseInt(this.dataset.minH||"2",10),this.maxH=parseInt(this.dataset.maxH||"3",10);const e=[...this.querySelectorAll("a")],t=n=>{if(n instanceof HTMLHeadingElement){if(n.id===T)return!0;const d=n.tagName[1];if(d){const c=parseInt(d,10);if(c>=this.minH&&c<=this.maxH)return!0}}return!1},i=n=>{if(!n)return null;const d=n;for(;n;){if(t(n))return n;for(n=n.previousElementSibling;n?.lastElementChild;)n=n.lastElementChild;const c=i(n);if(c)return c}return i(d.parentElement)},o=n=>{for(const{isIntersecting:d,target:c}of n){if(!d)continue;const m=i(c);if(!m)continue;const h=e.find(p=>p.hash==="#"+encodeURIComponent(m.id));if(h){this.current=h;break}}},r=document.querySelectorAll("main [id], main [id] ~ *, main .content > *");let s;const l=()=>{s&&s.disconnect(),s=new IntersectionObserver(o,{rootMargin:this.getRootMargin()}),r.forEach(n=>s.observe(n))};l();const u=window.requestIdleCallback||(n=>setTimeout(n,1));let g;window.addEventListener("resize",()=>{s&&s.disconnect(),clearTimeout(g),g=setTimeout(()=>u(l),200)})}set current(e){e!==this._current&&(this._current&&this._current.removeAttribute("aria-current"),e.setAttribute("aria-current","true"),this._current=e)}getRootMargin(){const e=document.querySelector("header")?.getBoundingClientRect().height||0,t=this.querySelector("summary")?.getBoundingClientRect().height||0,i=e+t+32,o=i+53,r=document.documentElement.clientHeight;return`-${i}px 0% ${o-r}px`}}customElements.define("starlight-toc",b);class L extends b{set current(e){super.current=e;const t=this.querySelector(".display-current");t&&(t.textContent=e.textContent)}constructor(){super();const e=this.querySelector("details");if(!e)return;const t=()=>{e.open=!1};e.querySelectorAll("a").forEach(i=>{i.addEventListener("click",t)}),window.addEventListener("click",i=>{e.contains(i.target)||t()}),window.addEventListener("keydown",i=>{if(i.key==="Escape"&&e.open){const o=e.contains(document.activeElement);if(t(),o){const r=e.querySelector("summary");r&&r.focus()}}})}}customElements.define("mobile-starlight-toc",L);class k extends HTMLElement{constructor(){super(),this.btn=this.querySelector("button"),this.btn.addEventListener("click",()=>this.toggleExpanded());const e=this.closest("nav");e&&e.addEventListener("keyup",t=>this.closeOnEscape(t))}setExpanded(e){this.setAttribute("aria-expanded",String(e)),document.body.toggleAttribute("data-mobile-menu-expanded",e)}toggleExpanded(){this.setExpanded(this.getAttribute("aria-expanded")!=="true")}closeOnEscape(e){e.code==="Escape"&&(this.setExpanded(!1),this.btn.focus())}}customElements.define("starlight-menu-button",k);class x extends HTMLElement{constructor(){super();const e=this.querySelector("select");e&&e.addEventListener("change",t=>{t.currentTarget instanceof HTMLSelectElement&&(window.location.pathname=t.currentTarget.value)})}}customElements.define("starlight-lang-select",x);const q="modulepreload",A=function(a){return"/Windmillcode-Angular-CDK-Docs/"+a},y={},C=function(e,t,i){let o=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const r=document.querySelector("meta[property=csp-nonce]"),s=r?.nonce||r?.getAttribute("nonce");o=Promise.all(t.map(l=>{if(l=A(l),l in y)return;y[l]=!0;const u=l.endsWith(".css"),g=u?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${g}`))return;const n=document.createElement("link");if(n.rel=u?"stylesheet":q,u||(n.as="script",n.crossOrigin=""),n.href=l,s&&n.setAttribute("nonce",s),document.head.appendChild(n),u)return new Promise((d,c)=>{n.addEventListener("load",d),n.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${l}`)))})}))}return o.then(()=>e()).catch(r=>{const s=new Event("vite:preloadError",{cancelable:!0});if(s.payload=r,window.dispatchEvent(s),!s.defaultPrevented)throw r})};class H extends HTMLElement{constructor(){super();const e=this.querySelector("button[data-open-modal]"),t=this.querySelector("button[data-close-modal]"),i=this.querySelector("dialog"),o=this.querySelector(".dialog-frame"),r=c=>{("href"in(c.target||{})||document.body.contains(c.target)&&!o.contains(c.target))&&l()},s=c=>{i.showModal(),document.body.toggleAttribute("data-search-modal-open",!0),this.querySelector("input")?.focus(),c?.stopPropagation(),window.addEventListener("click",r)},l=()=>i.close();e.addEventListener("click",s),e.disabled=!1,t.addEventListener("click",l),i.addEventListener("close",()=>{document.body.toggleAttribute("data-search-modal-open",!1),window.removeEventListener("click",r)}),window.addEventListener("keydown",c=>{(c.metaKey===!0||c.ctrlKey===!0)&&c.key==="k"&&(i.open?l():s(),c.preventDefault())});let u={};try{u=JSON.parse(this.dataset.translations||"{}")}catch{}const d=this.dataset.stripTrailingSlash!==void 0?c=>c.replace(/(.)\/(#.*)?$/,"$1$2"):c=>c;window.addEventListener("DOMContentLoaded",()=>{(window.requestIdleCallback||(m=>setTimeout(m,1)))(async()=>{const{PagefindUI:m}=await C(async()=>{const{PagefindUI:h}=await import("./ui-core.CFrVRioS.js");return{PagefindUI:h}},[]);new m({element:"#starlight__search",baseUrl:"/Windmillcode-Angular-CDK-Docs",bundlePath:"/Windmillcode-Angular-CDK-Docs".replace(/\/$/,"")+"/pagefind/",showImages:!1,translations:u,showSubResults:!0,processResult:h=>{h.url=d(h.url),h.sub_results=h.sub_results.map(p=>(p.url=d(p.url),p))}})})})}}customElements.define("site-search",H);const v="starlight-theme",S=a=>a==="auto"||a==="dark"||a==="light"?a:"auto",w=()=>S(typeof localStorage<"u"&&localStorage.getItem(v));function I(a){typeof localStorage<"u"&&localStorage.setItem(v,a==="light"||a==="dark"?a:"")}const M=()=>matchMedia("(prefers-color-scheme: light)").matches?"light":"dark";function E(a){StarlightThemeProvider.updatePickers(a),document.documentElement.dataset.theme=a==="auto"?M():a,I(a)}matchMedia("(prefers-color-scheme: light)").addEventListener("change",()=>{w()==="auto"&&E("auto")});class P extends HTMLElement{constructor(){super(),E(w()),this.querySelector("select")?.addEventListener("change",e=>{e.currentTarget instanceof HTMLSelectElement&&E(S(e.currentTarget.value))})}}customElements.define("starlight-theme-select",P);class f extends HTMLElement{static#t=new Map;#e;constructor(){super();const e=this.querySelector('[role="tablist"]');if(this.tabs=[...e.querySelectorAll('[role="tab"]')],this.panels=[...this.querySelectorAll(':scope > [role="tabpanel"]')],this.#e=this.dataset.syncKey,this.#e){const t=f.#t.get(this.#e)??[];t.push(this),f.#t.set(this.#e,t)}this.tabs.forEach((t,i)=>{t.addEventListener("click",o=>{o.preventDefault();const r=e.querySelector('[aria-selected="true"]');o.currentTarget!==r&&this.switchTab(o.currentTarget,i)}),t.addEventListener("keydown",o=>{const r=this.tabs.indexOf(o.currentTarget),s=o.key==="ArrowLeft"?r-1:o.key==="ArrowRight"?r+1:o.key==="Home"?0:o.key==="End"?this.tabs.length-1:null;s!==null&&this.tabs[s]&&(o.preventDefault(),this.switchTab(this.tabs[s],s))})})}switchTab(e,t,i=!0){if(!e)return;const o=i?this.getBoundingClientRect().top:0;this.tabs.forEach(s=>{s.setAttribute("aria-selected","false"),s.setAttribute("tabindex","-1")}),this.panels.forEach(s=>{s.hidden=!0});const r=this.panels[t];r&&(r.hidden=!1),e.removeAttribute("tabindex"),e.setAttribute("aria-selected","true"),i&&(e.focus(),f.#n(this,e.innerText),window.scrollTo({top:window.scrollY+(this.getBoundingClientRect().top-o)}))}static#n(e,t){const i=e.#e;if(!i||!t)return;const o=f.#t.get(i);if(o)for(const r of o){if(r===e)continue;const s=r.tabs.findIndex(l=>l.innerText===t);s!==-1&&r.switchTab(r.tabs[s],s,!1)}}}customElements.define("starlight-tabs",f);export{C as _};
