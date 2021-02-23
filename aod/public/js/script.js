function ibg() {
  let ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg();

let iconMenu = document.querySelector(".icon-menu");
let menuBody = document.querySelector(".menu__body");

iconMenu.addEventListener("click", () => { 
  iconMenu.classList.toggle("active"),
  menuBody.classList.toggle("active")
  document.body.classList.toggle("active")
});



// $('.icon-menu').click(function(event) {
// 	$(this).toggleClass('active');
// 	$('.menu__body').toggleClass('active');
// 	$('body').toggleClass('lock');
// });