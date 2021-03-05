$(document).ready(function() { 
    $('.slider').slick({ 
        arrows: false,
        dots: false,
        adaptiveHeight: false,
        slidesToShow:2,
        slidesToScroll: 1,
        speed: 1200,
        easing: 'ease', //transition css
        infinite: true,
        initialSlide: 0,
        autoplay: false,
        autoplaySpeed: 500, //base: 3000ms
        pauseOnFocus: false,
        pauseOnClick: false,
        pauseOnHover: false,
        draggable:false, // on/off swipe by cursor on pc
        swipe: false, // on/off swipe by cursor on phone
        touchThresshold:10,
        touchMove: false, 
        centerMode: false,
        variableWidth: false,
        rows: 1,
    });
})
