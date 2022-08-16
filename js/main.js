var navbarPic = document.querySelector(".navbar__pic");
var navbarToogleList = document.querySelector(".navbar__toogle__list");

navbarPic.addEventListener("click",function(){
    navbarToogleList.classList.toggle("navbar__toogle__list_row")
})