(()=>{"use strict";function e(){const e=document.getElementById("projects"),t=document.createElement("div");t.setAttribute("id","project");const d=document.createElement("div");d.setAttribute("id","projectHead");const n=document.createElement("div");n.setAttribute("id","projectBody");const c=document.createElement("div");c.setAttribute("id","priorityBox");const s=document.createElement("div");s.classList.add("priority"),c.appendChild(s),c.style.margin="0";const i=document.createElement("h1");i.classList.add("projectName"),i.innerText="Your project";const a=document.createElement("div");a.classList.add("settings");const o=document.createElement("div"),l=document.createElement("div"),r=document.createElement("div");o.classList.add("dot"),l.classList.add("dot"),r.classList.add("dot"),a.appendChild(o),a.appendChild(l),a.appendChild(r);const p=document.createElement("div");p.classList.add("toDo");const m=document.createElement("div");m.setAttribute("id","priorityBox");const u=document.createElement("div");u.classList.add("priority"),m.appendChild(u);const E=document.createElement("h1");E.classList.add("title"),E.innerText="Your Task";const h=document.createElement("h3");h.classList.add("date"),h.innerText="28.03";const v=document.createElement("div");v.classList.add("settings");const C=document.createElement("div"),L=document.createElement("div"),y=document.createElement("div");return C.classList.add("dot"),L.classList.add("dot"),y.classList.add("dot"),v.appendChild(C),v.appendChild(L),v.appendChild(y),p.appendChild(m),p.appendChild(E),p.appendChild(h),p.appendChild(v),d.appendChild(c),d.appendChild(i),d.appendChild(a),n.appendChild(p),t.appendChild(d),t.appendChild(n),e.appendChild(t),d}!function(){const e=document.getElementById("close"),t=document.getElementById("checkList");e.addEventListener("click",(e=>{t.style.display="none"})),e.addEventListener("mouseover",(t=>{e.style.backgroundColor="khaki"})),e.addEventListener("mouseleave",(t=>{e.style.backgroundColor="gray"}))}(),e();const t=document.getElementById("addProject");t.addEventListener("click",(()=>{e()})),t.addEventListener("mouseover",(()=>{t.style.border="white 3px solid",t.style.color="white"})),t.addEventListener("mouseleave",(()=>{t.style.border="black 3px solid",t.style.color="black"}));const d=document.getElementById("projects");d.addEventListener("click",(()=>{d.contains("Your project")&&function(e){const t=document.createElement("div");t.classList.add("toDo");const d=document.createElement("div");d.setAttribute("id","priorityBox");const n=document.createElement("div");n.classList.add("priority"),d.appendChild(n);const c=document.createElement("h1");c.classList.add("title"),c.innerText="Your Task";const s=document.createElement("h3");s.classList.add("date"),s.innerText="28.03";const i=document.createElement("div");i.classList.add("settings");const a=document.createElement("div"),o=document.createElement("div"),l=document.createElement("div");a.classList.add("dot"),o.classList.add("dot"),l.classList.add("dot"),i.appendChild(a),i.appendChild(o),i.appendChild(l),t.appendChild(d),t.appendChild(c),t.appendChild(s),t.appendChild(i),(void 0).target.parentElement.parentElement.nextSibling.appendChild(t)}()}))})();