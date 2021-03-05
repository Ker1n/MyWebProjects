function ibg() {
  var ibg = document.querySelectorAll(".ibg");
  for (var i = 0; i < ibg.length; i++) {
    if (ibg[i].querySelector("img")) {
      ibg[i].style.backgroundImage =
        "url(" + ibg[i].querySelector("img").getAttribute("src") + ")";
    }
  }
}
ibg();

var iconMenu = document.querySelector(".icon-menu");
var menuBody = document.querySelector(".menu__body");

iconMenu.addEventListener("click", () => { 
  iconMenu.classList.toggle("active"),
  menuBody.classList.toggle("active")
  document.body.classList.toggle("active")
});



if($('.slider__body').length>0){
	$('.slider__body').slick({
		//autoplay: true,
		//infinite: false,
		dots: true,
		arrows: false,
		accessibility:false,
		slidesToShow:1,
		autoplaySpeed: 3000,
		adaptiveHeight:true,
		nextArrow:'<button type="button" class="slick-next"></button>',
		prevArrow:'<button type="button" class="slick-prev"></button>',
		responsive: [{
			breakpoint: 768,
			settings: {}
		}]
	});
}