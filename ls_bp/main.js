const swiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    },
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    scrollbar: {
      el: '.swiper-scrollbar',
    },
    slidesPerView: 3,
    
    spaceBetween: 25, 
    
    freeMode: true,
    
    breakpoints: { 
      320: { 
        slidesPerView: 1,
      },
      480: { 
        slidesPerView: 2,
      },
      992: { 
        slidesPerView: 3,
      }
    } 
  });