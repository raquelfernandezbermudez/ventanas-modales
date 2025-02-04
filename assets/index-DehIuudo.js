(function(){const l=document.createElement("link").relList;if(l&&l.supports&&l.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function u(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=u(e);fetch(e.href,o)}})();document.querySelector("#app").innerHTML=`
    <button class="show-modal">Show modal 1</button>
		<button class="show-modal">Show modal 2</button>
		<button class="show-modal">Show modal 3</button>
		<div class="modal hidden">
		<button class="close-modal">&times;</button>
		<h1>I'm a modal window 😍</h1>
		<p>
		Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
		tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
		veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
		commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
		velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
		occaecat cupidatat non proident, sunt in culpa qui officia deserunt
		mollit anim id est laborum.
		</p>
		</div>
		<div class="overlay hidden"></div>
`;const n=document.querySelector(".modal"),s=document.querySelector(".overlay"),d=document.querySelector(".close-modal"),a=document.querySelectorAll(".show-modal");console.log("btnsOpenModal");console.log(a);console.log("btnCloseModal");console.log(d);console.log("overlay");console.log(s);console.log("modal");console.log(n);const m=function(){n.classList.remove("hidden"),s.classList.remove("hidden")},r=function(){n.classList.add("hidden"),s.classList.add("hidden")};a.forEach(t=>t.addEventListener("click",m));d.addEventListener("click",r);s.addEventListener("click",r);const p=t=>{t.key==="Escape"&&!n.classList.contains("hidden")&&r()};document.addEventListener("keydown",p);
