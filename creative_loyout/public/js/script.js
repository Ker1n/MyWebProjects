$(function () {
	$(window).scroll(function() {
	    $('.fadeIn-Down').each(function(){
	        let imagePos = $(this).offset().top;

	        let topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDown");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.fadeIn-Up').each(function(){
	        let imagePos = $(this).offset().top;

	        let topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUp");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.note-1').each(function(){
	        let imagePos = $(this).offset().top;

	        let topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInDownBig");
	        }
	    });
	});$(window).scroll(function() {
	    $('.note-2').each(function(){
	        let imagePos = $(this).offset().top;

	        let topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRightBig");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.note-3').each(function(){
	        let imagePos = $(this).offset().top;

	        let topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInUpBig");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.note-4').each(function(){
	        let imagePos = $(this).offset().top;

	        let topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeftBig");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.fadeIn-Left').each(function(){
	        let imagePos = $(this).offset().top;

	        let topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInLeft");
	        }
	    });
	});
	$(window).scroll(function() {
	    $('.fadeIn-Right').each(function(){
	        let imagePos = $(this).offset().top;

	        let topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeInRight");
	        }
	    });
	});
		$(window).scroll(function() {
	    $('.fade-In').each(function(){
	        let imagePos = $(this).offset().top;

	        let topOfWindow = $(window).scrollTop();
	        if (imagePos < topOfWindow+650) {
	            $(this).addClass("fadeIn");
	        }
	    });
	});
})
jQuery(document).ready(function() {
		jQuery("a.scrollto").click(function () {
				elementClick = jQuery(this).attr("href")
				destination = jQuery(elementClick).offset().top;
				jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
				return false;
		});
});
let validateForms = function (selector, rules, successModal, yaGoal) {
    new window.JustValidate (selector, { 
        rules: rules,
        submitHandler: function (form) { 
            
        }
    })
}