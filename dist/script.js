const burger=document.getElementById("burger"),ul=document.querySelector("ul.nav"),x=document.querySelector("button.toggleX"),li=document.querySelector("ul.nav li");burger.addEventListener("click",(()=>{ul.classList.toggle("show")})),burger.addEventListener("click",(()=>{x.classList.toggle("open"),burger.classList.toggle("openclose")})),x.addEventListener("click",(()=>{burger.classList.toggle("openclose"),x.classList.toggle("open"),ul.classList.toggle("show")})),li.addEventListener("click",(()=>{window.innerWidth<1024&&(burger.classList.toggle("openclose"),x.classList.toggle("open"),ul.classList.toggle("show"))}));