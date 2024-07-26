import{S as p,i as u}from"./assets/vendor-8c59ed88.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();function f(s){return s.map(({webformatURL:i,largeImageURL:r,tags:o,likes:e,views:t,comments:n,downloads:d})=>`<li class="gallery-item">
          <a class="gallery-link" href="${r}">
            <img
              class="gallery-image"
              src="${i}"
              alt="${o}"
            />
          </a>
          <div class="description-container">
            <div class="description">
              <h2 class="description-title">Likes</h2>
              <p class="description-amount">${e}</p>
            </div>
            <div class="description">
              <h2 class="description-title">Views</h2>
              <p class="description-amount">${t}</p>
            </div>
            <div class="description">
              <h2 class="description-title">Comments</h2>
              <p class="description-amount">${n}</p>
            </div>
            <div class="description">
              <h2 class="description-title">Downloads</h2>
              <p class="description-amount">${d}</p>
            </div>
          </div>
        </li>`).join("")}function h(s){const i="https://pixabay.com/api/",r="45109614-503c0802e6fcda244df0afcb5";s.includes(" ")&&s.replace(/\s+/g,"+");const o=new URLSearchParams({key:r,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${i}?${o}`).then(e=>{if(!e.ok)throw new Error(e.statusText);return e.json()})}const l=document.querySelector(".search"),a=document.querySelector(".gallery"),c=document.querySelector(".loader"),m=new p(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250});c.style.display="none";l.addEventListener("submit",y);function y(s){s.preventDefault(),a.innerHTML="",c.style.display="block";const i=s.target.elements.search.value;h(i).then(r=>{c.style.display="none",r.hits.length||u.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a.insertAdjacentHTML("beforeend",f(r.hits)),m.refresh(),l.reset()}).catch(r=>{c.style.display="none",console.log(r)})}
//# sourceMappingURL=commonHelpers.js.map
