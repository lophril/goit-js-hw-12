import{a as b,i as l,S as v}from"./assets/vendor-DEenWwFD.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();const w="47124764-867379346a6bcd25da110daf2",E="https://pixabay.com/api/",L=15;async function h(t,s=1){const n={key:w,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:s,per_page:L};try{return(await b.get(E,{params:n})).data}catch(o){throw new Error(o.message)}}function S(t){return t.map(({webformatURL:s,largeImageURL:n,tags:o,likes:e,views:r,comments:i,downloads:g})=>`<li class="gallery-item">
          <a class="gallery-link" href="${n}">
            <img
              class="gallery-image"
              src="${s}"
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
              <p class="amount">${r}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Comments</h2>
              <p class="amount">${i}</p>
            </div>
            <div class="block">
              <h2 class="tittle">Downloads</h2>
              <p class="amount">${g}</p>
            </div>
          </div>
        </li>`).join("")}const P=document.querySelector(".js-search"),y=document.querySelector(".gallery"),a=document.querySelector(".loader"),d=document.querySelector(".btn-load");let c=1,u="",m=0;const p=15;a.style.display="none";d.style.display="none";P.addEventListener("submit",$);d.addEventListener("click",k);async function $(t){if(t.preventDefault(),y.innerHTML="",c=1,a.style.display="block",d.style.display="none",u=t.target.elements.search.value.trim(),!u){l.error({title:"Error",message:"Please enter a valid search query."}),a.style.display="none";return}try{const s=await h(u,c);m=s.totalHits,s.hits.length?(f(s.hits),m>p&&(d.style.display="block")):l.error({title:"Error",message:"No images match your query. Try again!"})}catch(s){l.error({title:"Error",message:`Something went wrong: ${s.message}`})}finally{a.style.display="none"}}async function k(){a.style.display="block",c+=1;try{const t=await h(u,c);f(t.hits),c*p>=m&&(d.style.display="none",l.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})),q()}catch(t){l.error({title:"Error",message:`Something went wrong: ${t.message}`})}finally{a.style.display="none"}}function f(t){y.insertAdjacentHTML("beforeend",S(t)),new v(".gallery a",{captions:!0,captionsData:"alt",captionDelay:250}).refresh()}function q(){const{height:t}=y.firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
