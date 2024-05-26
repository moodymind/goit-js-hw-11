import{S as m,i as l}from"./assets/vendor-8c59ed88.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&i(n)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();function d(s){const o="https://pixabay.com/api/",t=new URLSearchParams({key:"44068350-6653723470485442d70381dc3",q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}),i=`${o}?${t}`;return fetch(i).then(e=>e.json())}const f=document.querySelector(".gallery");function p(s){const o=s.map(t=>`<li class='image-card'>
            <a href="${t.largeImageURL}" class="gallery-link">
            <img src="${t.webformatURL}" alt="${t.tags}" loading="lazy" class="gallery-image">
            </a>
            <div class="info">
            <p class="info-item">
            <b>Likes: ${t.likes}</b>
            </p>
            <p class="info-item">
            <b>Views: ${t.views}</b>
            </p>
            <p class="info-item">
            <b>Comments: ${t.comments}</b>
            </p>
            <p class="info-item">
            <b>Downloads: ${t.downloads}</b>
            </p>
            </div>
            </li>`).join("");f.innerHTML=o}function y(){new m(".gallery, a",{captionsData:"alt",captionDelay:250,overlay:!0,overlayOpacity:.8}).refresh()}const c=document.querySelector(".image-search-form"),h=document.querySelector(".gallery"),u=document.querySelector(".loading-indicator");c.addEventListener("submit",s=>{s.preventDefault(),h.innerHTML="";const o=s.target.elements.inputSearch.value.trim();if(!o){l.error({title:"Error",message:"The search field cannot be empty. Please enter your query.",position:"topRight"});return}g(),d(o).then(t=>{t.hits.length?setTimeout(()=>{p(t.hits),y(),a()},2e3):(l.error({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FAFAFB",color:"#EF4040",position:"topRight"}),a())}).catch(t=>{a()}),c.reset()});function g(){u.style.display="block"}function a(){u.style.display="none"}
//# sourceMappingURL=commonHelpers.js.map
