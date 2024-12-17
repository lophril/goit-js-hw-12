import{a as g,i as l,S as b}from"./assets/vendor-DEenWwFD.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();const v="47124764-867379346a6bcd25da110daf2",w="https://pixabay.com/api/",E=15;async function m(t,r=1){const i={key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:E};try{return(await g.get(w,{params:i})).data}catch(o){throw new Error(o.message)}}function L(t){return t.map(({webformatURL:r,largeImageURL:i,tags:o,likes:e,views:s,comments:n,downloads:f})=>`<li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${r}"
              alt="${o}"
              width="360"
            />
          </a>
          <div class="thumb-block">
            <div class="block">
              <h2 class="tittle">Likes</h2>
              <p class="amount">${e}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Views</h2>
              <p class="amount">${s}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${n}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${f}</p>
            </div>
          </div>
        </li>`).join("")}const S=document.querySelector(".js-search"),y=document.querySelector(".gallery"),a=document.querySelector(".loader"),d=document.querySelector(".btn-load");let c=1,u="",h=0;a.style.display="none";d.style.display="none";S.addEventListener("submit",P);d.addEventListener("click",$);async function P(t){if(t.preventDefault(),y.innerHTML="",c=1,a.style.display="block",d.style.display="none",u=t.target.elements.search.value.trim(),!u){l.error({title:"Error",message:"Please enter a valid search query."}),a.style.display="none";return}try{const r=await m(u,c);h=r.totalHits,r.hits.length?(p(r.hits),d.style.display="block"):l.error({title:"Error",message:"No images match your query. Try again!"})}catch(r){l.error({title:"Error",message:`Something went wrong: ${r.message}`})}finally{a.style.display="none"}}async function $(){a.style.display="block",c+=1;try{const t=await m(u,c);p(t.hits),c*15>=h&&(d.style.display="none",l.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})),k()}catch(t){l.error({title:"Error",message:`Something went wrong: ${t.message}`})}finally{a.style.display="none"}}function p(t){y.insertAdjacentHTML("beforeend",L(t)),new b(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function k(){const{height:t}=y.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
