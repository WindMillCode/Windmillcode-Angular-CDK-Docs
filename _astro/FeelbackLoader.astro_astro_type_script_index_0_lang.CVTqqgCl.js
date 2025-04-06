async function V(e,...t){return t.length>0&&(e=`${e}?$p=${JSON.stringify(t)}`),await P(fetch(e,{method:"GET"}))}async function M(e,...t){return await P(fetch(e,{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify(t)}))}async function P(e){if(e=await e,e.status>=400)throw new Error("[feelback] API error");if(e.status!==204)return await e.json()}var w={get:V,post:M};function N(e,t){if(!e||e==="$auto")return typeof window<"u"?window.location.href:"/";if(e==="$path"){let a=typeof window<"u"?window.location:void 0;return a?`${a.origin}${a.pathname}`:"/"}return e}var x="fbs-store";function L(e){return"contentId"in e?e.contentId:`${e.contentSetId}/${N(e.key)}`}var U=class{constructor(e){if(this.feelbacks=void 0,e??="local",typeof window>"u"&&(e="memory"),e==="local")this.storage=window.localStorage;else if(e==="session")this.storage=window.sessionStorage;else{let t=()=>{};this.storage={getItem:t,setItem:t,removeItem:t,clear:t,key:t,length:0}}this.load()}add(e){let t=L(e.target),a=(this.feelbacks??=[]).findIndex(n=>n.key===t);a>=0&&this.feelbacks.splice(a,1),this.feelbacks.push({key:t,value:e.value,expire:e.expireIn&&e.expireIn>0?Math.floor(Date.now()/1e3)+e.expireIn:void 0,feelbackId:e.feelbackId,revokeToken:e.revokable?.token,revokeExpire:e.revokable?.expireAt&&Math.floor(new Date(e.revokable.expireAt).getTime()/1e3)||void 0}),this.save()}clear(){this.feelbacks?.splice(0,this.feelbacks.length),this.storage.removeItem(x)}remove(e){let t=typeof e=="string"?this.feelbacks?.findIndex(a=>a.feelbackId===e):(e=L(e),this.feelbacks?.findIndex(a=>a.key===e));t!==void 0&&t>=0&&(this.feelbacks.splice(t,1),this.save())}getValue(e){return this.getFeelback(e)?.value}isRevokable(e){return!!this.getRevocable(e)}getRevocable(e){let t=this.getFeelback(e);if(t&&t.revokeToken&&!(t.revokeExpire&&t.revokeExpire<Date.now()/1e3))return{feelbackId:t.feelbackId,revokeToken:t.revokeToken}}load(e){if(this.feelbacks&&!e)return;let t;try{t=JSON.parse(this.storage.getItem(x))||[]}catch{t=[]}this.feelbacks=t.filter(a=>!a.expire||a.expire>Date.now()/1e3),t.length!==this.feelbacks.length&&this.save()}save(){try{this.storage.setItem(x,JSON.stringify(this.feelbacks))}catch{}}getFeelback(e){let t=typeof e=="string"?this.feelbacks?.find(a=>a.feelbackId===e):(e=L(e),this.feelbacks?.find(a=>a.key===e));if(t&&t.expire&&t.expire<Date.now()/1e3){this.remove(t.feelbackId);return}return t}},S,$;function R(e){return e??=$||"local",S&&$===e?S:($=e,S=new U(e))}var F="https://api.feelback.dev/v0";async function q(e){let{endpoint:t=F,store:a="local",revokable:n=!0,value:i,metadata:o,expireIn:c=3600}=e,r="contentId"in e?{contentId:e.contentId}:{contentSetId:e.contentSetId,key:N(e.key)},l=a&&a!=="none"&&R(a)||void 0,f=n&&l?.getRevocable(r)||void 0,s=f?await w.post(`${t}/feelbacks/edit`,{...f,value:i}):await w.post(`${t}/feelbacks/create`,{...r,value:i,context:o,revokable:n});l?.add({...s,target:r,value:i,expireIn:c})}async function G(e){let{endpoint:t=F,feelbackId:a}=e,n=e.revokeToken,i=R();if(!n){let o=i.getRevocable(a);if(!o)throw new Error("Cannot revoke feelback");n=o.revokeToken}await w.post(`${t}/feelbacks/remove`,{feelbackId:a,revokeToken:n}),i.remove(a)}async function W(e){let{endpoint:t=F}=e,a="contentId"in e?e.contentId:{contentSetId:e.contentSetId,key:N(e.key)};return await w.get(`${t}/feelbacks/getAggregates`,a)}function C(e,...t){console.warn(`[Feelback] ${e}`,...t)}function T(e,t){e instanceof Error&&(t=e,e=t?.message),console.error(`[Feelback] ${e}`,t)}function X(e){if(typeof window===void 0||typeof window.document===void 0)return;let t=e?.endpoint,a=R(e?.store);new Set([...b(document,"[data-feelback]"),...b(document,"[data-feelback-set]"),...b(document,"[data-feelback-content]")]).forEach(r=>{let l=z(r);if(!l)return;let f=l.contentId?{contentId:l.contentId}:{contentSetId:l.contentSetId,key:l.key};switch(l.component||"buttons"){case"buttons":n(r,f,l);break;case"form":i(r,f,l);break;default:return C("Unknown component: %s",l.component)}b(r,"[data-behavior-action],[data-feelback-action]").forEach(s=>{switch(s.getAttribute("data-behavior-action")||s.getAttribute("data-feelback-action")){case"switch":return u.switch.setup(r,s);case"popup":return u.popup.setup(r,s);case"dialog":return u.dialog.setup(r,s);case"toggle-class":return u.toggleClass.setup(r,s);case"set-field":return u.setField.setup(r,s)}})});function n(r,l,f){let s=a.getValue(l),v=a.isRevokable(l),p=c(r,l,f),k=[...b(r,"[data-feelback-value]").values()].map(d=>[d.getAttribute("data-feelback-value"),d]);k.forEach(([d,I])=>{if(j(s,d)&&m.activate(k,d),s!==void 0&&!v){m.disableItem(I);return}I.addEventListener("click",_=>{let O=a.getRevocable(l),D=a.getValue(l);j(D,d)?O&&(o(r,1e3),G({endpoint:t,feelbackId:O.feelbackId}).then(()=>{m.deactivate(k,d),h.delta(p,d,-1),r.dispatchEvent(new Event("feedback-removed",{bubbles:!0}))},A=>{T("Cannot remove feelback",A)})):(o(r,1e3),q({endpoint:t,...l,value:d}).then(()=>{m.activate(k,d),f.behavior==="switch"&&u.switch.run({container:r,autoCancel:a.isRevokable(l)}),h.delta(p,String(D??"0"),-1),h.delta(p,d,1),r.dispatchEvent(new CustomEvent("feedback-sent",{detail:{...l,value:d},bubbles:!0}))},A=>{T("Cannot send feelback",A)}))})})}function i(r,l,f){let s=b(r,".feelback-form");s&&s.forEach(v=>{v.addEventListener("submit",p=>{p.preventDefault(),p.stopPropagation();let{value:k,metadata:d}=K(v)||{};k&&(o(r,1e3),q({endpoint:t,...l,value:k,metadata:d}).then(()=>{u.switch.run({container:r}),f.behavior==="dialog"&&u.dialog.closeActive?.(),r.dispatchEvent(new CustomEvent("feelback-sent",{detail:{...l,value:k},bubbles:!0}))},I=>{T("Cannot send feelback",I)}))})})}function o(r,l){r.style.pointerEvents="none",setTimeout(()=>{r.style.pointerEvents=""},l)}function c(r,l,f){if(!f.showCount)return[];let s=[...b(r,"[data-feelback-count]").values()].map(v=>[v.getAttribute("data-feelback-count"),v.getAttribute("data-feelback-count-index"),v]);return s.length<1?[]:(W({...l,endpoint:t}).then(v=>{s.forEach(([,p,k])=>{h.setItem(k,v?.[Number(p)])})},()=>{}),s)}}function z(e){let t=e.getAttribute("data-feelback");if(typeof t=="string")try{return JSON.parse(t)}catch{C("Invalid config for element",e);return}let a,n=e.getAttribute("data-feelback-set");if(n)a={contentSetId:n,key:e.getAttribute("data-feelback-key")||void 0};else{let i=e.getAttribute("data-feelback-content");i&&(a={contentId:i})}if(a)try{return{...a,component:e.getAttribute("data-feelback-component"),revokable:e.getAttribute("data-feelback-revokable")!=="false",behavior:e.getAttribute("data-feelback-behavior")||void 0}}catch{C("Invalid attributes for element",e);return}}function j(e,t){return e==null?!1:e===t||typeof e=="object"&&e?.value===t}var h={delta(e,t,a){let[,,n]=e.find(([i])=>i===t)||[];n&&h.set(e,t,Number(n.textContent)+a)},set(e,t,a){e.forEach(([n,,i])=>{n===t&&h.setItem(i,a)})},setItem(e,t){e.textContent=(t||0).toFixed().toString(),e.setAttribute("data-feelback-count-value",(t||0).toString())}},m={activate(e,t){e.forEach(([a,n])=>{a===t?n.classList.add("active"):n.classList.remove("active","disabled")})},deactivate(e,t){e.forEach(([a,n])=>{a===t&&n.classList.remove("active","disabled")})},disableItem(e){e.classList.add("disabled")}},u={switch:{setup(e,t){let a=t.hasAttribute("data-behavior-source")?y(t.getAttribute("data-behavior-source"),t?.parentElement,e):t,n=y(t.getAttribute("data-behavior-target"),t?.parentElement,e);n&&t.addEventListener("click",i=>{u.switch.run({container:e,sideA:a,sideB:n}),g(i)})},run({container:e,sideA:t,sideB:a,autoCancel:n}){let i=y(t||"[data-behavior-switch-side='a']",e),o=y(a||"[data-behavior-switch-side='b']",e);if(!i||!o)return;let c=i.style.display;i.style.display="none",o.style.display="block",n&&setTimeout(()=>{o.style.display="none",i.style.display=c},5e3)}},toggleClass:{setup(e,t){let a=H(t.getAttribute("data-behavior-target"),t?.parentElement,e);if(!a||a.length===0)return;let n=t.getAttribute("data-behavior-value")?.trim();if(!n)return;let i=["on","off"],o=n.split(/,|;/).map(c=>c.split(":")).filter(([c])=>i.includes(c));t.addEventListener("click",c=>{u.toggleClass.run({container:e,target:a,directives:o}),g(c)})},run({container:e,target:t,directives:a}){Array.isArray(t)||(t=[t]),t.forEach(n=>{a.forEach(([i,o])=>{i==="on"?n.classList.contains(o)||n.classList.add(o):i==="off"&&n.classList.contains(o)&&n.classList.remove(o)})})}},popup:{setup(e,t){let a=J(t.getAttribute("data-behavior-target")||".popup",t?.parentElement,e);a&&t.addEventListener("click",n=>{u.popup.run({source:t,target:a}),g(n)})},run({source:e,target:t}){t.style.display="block",t.style.top=e.offsetTop-(t.getBoundingClientRect().height-e.getBoundingClientRect().height)/2+"px",t.style.left=e.offsetLeft+"px",document.addEventListener("click",()=>{t.style.display="none"},{once:!0,capture:!1})}},dialog:{closeActive:void 0,setup(e,t){let a=J(t.getAttribute("data-behavior-target")||".dialog",t?.parentElement,e);if(!a)return;a.remove();let n=document.createElement("div");n.classList.add("feelback-style"),n.append(a),document.body.append(n),t.addEventListener("click",i=>{u.dialog.run({source:t,target:a}),g(i)})},run({source:e,target:t}){t.style.display="block";let a=[...b(t,"[data-behavior-action='cancel']")];a.forEach(r=>{r.addEventListener("click",o)});let n=E(t,".content"),i=r=>{n?.contains(r.target)||o(r)};document.addEventListener("click",i,{capture:!0}),u.dialog.closeActive=c;function o(r){g(r),c()}function c(){t.style.display="none",document.removeEventListener("click",i,{capture:!0}),a.forEach(r=>r.removeEventListener("click",o))}}},setField:{setup(e,t){let a=t.closest("[data-feelback-type='button-group']");if(!a)return;let n=E(a,"[data-feelback-field]"),i=[...b(a,":scope>button")].map(r=>[r.getAttribute("data-feelback-value"),r]),o=B(a.getAttribute("data-reveal"),e),c=t.getAttribute("data-feelback-value");t.addEventListener("click",r=>{m.activate(i,c),n&&(n.value=c),o.forEach(l=>l.classList.remove("hidden")),g(r)})}}};function E(e,t){return e.querySelector(t)||void 0}function b(e,t){return e.querySelectorAll(t)}function g(e){e.preventDefault(),e.stopPropagation()}function J(e,...t){return e===":container"?t[t.length-1]||void 0:y(e,...t)}function H(e,...t){return e===":container"?[t[t.length-1]||void 0].filter(a=>!!a):B(e,...t)}function y(e,...t){if(typeof e!="string")return e||void 0;for(let a of t)if(a){let n=E(a,e);if(n)return n}}function B(e,...t){if(!e)return[];if(typeof e!="string")return Array.isArray(e)?e:[e];for(let a of t)if(a){let n=b(a,e);if(n.length)return[...n.values()]}return[]}function K(e){let t=e.getAttribute("data-feelback-type")==="form-single",a=[...b(e,"[data-feelback-field]")],n,i;for(let o of a){let c=Y(o);if(c){if(c?.$error)return;Object.entries(c).forEach(([r,l])=>{r.startsWith("#")?i={...i,[r.substring(1)]:l}:n={...n,[r]:l}})}}if(!(!n||Object.keys(n).length===0))return t&&(n=Object.values(n).pop()),{value:n,metadata:i}}function Y(e){let t=e.getAttribute("data-feelback-field")||e.name;if(e.hasAttribute("data-feelback-metadata")&&(t="#"+e.getAttribute("data-feelback-metadata")),!t)return;if(e.tagName==="INPUT"){let n=e,i=n.value.trim()||void 0,o=n.required;return i?!i&&o?{$error:"required"}:{[t]:i}:void 0}if(e.tagName==="FIELDSET"&&(e.classList.contains("feelback-radio-group")||e.getAttribute("data-feelback-type")==="radio-group")){let n=e.hasAttribute("data-required"),i=e.querySelector("input[type='radio']:checked"),o=i?.value;return t=t||i?.name||"",!o&&n?{$error:"required"}:!o||!t?void 0:{[t]:o}}if(e.tagName==="TEXTAREA"){let n=e.value.trim()||void 0;return n?{[t]:n}:void 0}if(e.getAttribute("data-feelback-type")==="button-group")return{[t]:E(e,"button.active")?.getAttribute("data-feelback-value")};let a=e.getAttribute("data-feelback-value");if(a)return{[t]:a}}X({endpoint:void 0});
