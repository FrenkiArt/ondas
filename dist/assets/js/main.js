(()=>{"use strict";function e(e){e.preventDefault(),e.target.closest(".link-read-more__wrapper").classList.add("open")}function t(e){const t=e.target.closest(".bullet"),o=document.querySelectorAll(".invest-cart__pagination .bullet"),n=document.querySelectorAll(".invest-cart");let c=0;o.forEach(((e,o)=>{e==t?(c=o,e.classList.add("active")):e.classList.remove("active")})),n.forEach(((e,t)=>{t==c?e.classList.add("active"):e.classList.remove("active")})),window.ivestToggler&&clearTimeout(window.ivestToggler)}function o(e){document.querySelector(".nav-btn").classList.remove("open"),document.querySelector(".header").classList.remove("open")}window.onresize=()=>{setTimeout((()=>{console.log(window.innerWidth)}),1)},document.querySelector(".link-read-more")&&document.querySelectorAll(".link-read-more").forEach((t=>{t.addEventListener("click",e)})),document.querySelector(".invest-cart__pagination")&&(document.querySelectorAll(".invest-cart__pagination .bullet").forEach((e=>{e.addEventListener("click",t)})),function e(t){const o=document.querySelectorAll(".invest-cart__pagination .bullet"),n=o.length-1;let c=t||0;window.ivestToggler=setTimeout((()=>{c>n&&(c=0),o[c].click(),c++,e(c),window.ivestToggler>1e3&&clearTimeout(window.ivestToggler)}),5e3)}()),document.querySelector(".nav-btn")&&(document.querySelector(".nav-btn").addEventListener("click",(function(e){document.querySelector(".nav-btn").classList.toggle("open"),document.querySelector(".header").classList.toggle("open")})),document.querySelectorAll(".navigation a").forEach((e=>{e.addEventListener("click",o)})))})();
//# sourceMappingURL=main.js.map