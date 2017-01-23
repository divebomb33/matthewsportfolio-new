//Preloader
        $(window).on('load', function() { // makes sure the whole site is loaded 
            $('#status').fadeOut(); // will first fade out the loading animation 
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
            $('body').delay(350).css({'overflow':'visible'});
        })

		

$(document).ready(function() {
    $('a[href="#navbar-more-show"], .navbar-more-overlay').on('click', function(event) {
		event.preventDefault();
		$('body').toggleClass('navbar-more-show');
		if ($('body').hasClass('navbar-more-show'))	{
			$('a[href="#navbar-more-show"]').closest('li').addClass('active');
		}else{
			$('a[href="#navbar-more-show"]').closest('li').removeClass('active');
		}
		return false;
	});
});
		
//Change to active class on nav items on mobile when clicking on new li element		
$(".isStuck .nav a").on("click", function(){
   $(".isStuck .nav").find(".active").removeClass("active");
   $(this).parent().addClass("active");
});


//Close mobile nav when clicking outside of element
$(document).click(function (event) {
    var clickover = $(event.target);
    var $navbar = $(".navbar-collapse");               
    var _opened = $navbar.hasClass("in");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {      
        $navbar.collapse('hide');
    }
});
		
		
//Initialize Carousels and set speed of each
	$('#myCarousel').carousel({
    	interval:   6000
	});

	$('#myCarousel-2').carousel({
    	interval:   6000
	});


	$('#myCarousel-3').carousel({
    	interval:   6000
	});

	$('#myCarousel-4').carousel({
    	interval:   6000
	});

	$('#myCarousel-5').carousel({
    	interval:   6000
	});
		


//content tab functionality
var TabBlock = {
  s: {
    animLen: 200
  },
  
  init: function() {
    TabBlock.bindUIActions();
    TabBlock.hideInactive();
  },
  
  bindUIActions: function() {
    $('.tabBlock-tabs').on('click', '.tabBlock-tab', function(){
      TabBlock.switchTab($(this));
    });
  },
  
  hideInactive: function() {
    var $tabBlocks = $('.tabBlock');
    
    $tabBlocks.each(function(i) {
      var 
        $tabBlock = $($tabBlocks[i]),
        $panes = $tabBlock.find('.tabBlock-pane'),
        $activeTab = $tabBlock.find('.tabBlock-tab.is-active');
      
      $panes.hide();
      $($panes[$activeTab.index()]).show();
    });
  },
  
  switchTab: function($tab) {
    var $context = $tab.closest('.tabBlock');
    
    if (!$tab.hasClass('is-active')) {
      $tab.siblings().removeClass('is-active');
      $tab.addClass('is-active');
   
      TabBlock.showPane($tab.index(), $context);
    }
   },
  
  showPane: function(i, $context) {
    var $panes = $context.find('.tabBlock-pane');
   
    $panes.slideUp(TabBlock.s.animLen);
    $($panes[i]).slideDown(TabBlock.s.animLen);
  }
};

$(function() {
  TabBlock.init();
});


//Development -Hide/Show link functionality
$(document).ready(function(){
    $(".show_all_link").click(function(){
        $(".hidden_dev").fadeIn(1000);
		$(".show_all_link").hide();
		$(".close_all_link").show();		
    });	
});

$(document).ready(function(){
    $(".close_all_link").click(function(){
        $(".hidden_dev").fadeOut(500);
		$(".close_all_link").hide();
		$(".show_all_link").show();		
    });	
});

//Testimonials -Hode/Show full testimonial functionality
$(document).ready(function(){
    $("#testimonial_1").click(function(){
        $(".full-testimonial-1").fadeIn(200);
		$("#testimonial_1").hide();
		$("#testimonial-hr-1").hide();
		$("#close_1").show();
    });

    $("#close_1").click(function(){
		$(".full-testimonial-1").fadeOut(500);
		$("#testimonial-hr-1").show();
		$("#close_1").hide();
		$("#testimonial_1").show();
    });	
	
});
	
$(document).ready(function(){
    $("#testimonial_2").click(function(){
        $(".full-testimonial-2").fadeIn(200);
		$("#testimonial_2").hide();
		$("#testimonial-hr-2").hide();
		$("#close_2").show();
    });

    $("#close_2").click(function(){
		$(".full-testimonial-2").fadeOut(500);
		$("#testimonial-hr-2").show();
		$("#close_2").hide();
		$("#testimonial_2").show();
    });	
	
});
	
$(document).ready(function(){
    $("#testimonial_3").click(function(){
        $(".full-testimonial-3").fadeIn(200);
		$("#testimonial_3").hide();
		$("#testimonial-hr-3").hide();
		$("#close_3").show();
    });

    $("#close_3").click(function(){
		$(".full-testimonial-3").fadeOut(500);
		$("#testimonial-hr-3").show();
		$("#close_3").hide();
		$("#testimonial_3").show();
    });	
	
});
	
$(document).ready(function(){
    $("#testimonial_4").click(function(){
        $(".full-testimonial-4").fadeIn(200);
		$("#testimonial_4").hide();
		$("#testimonial-hr-4").hide();
		$("#close_4").show();
    });

    $("#close_3").click(function(){
		$(".full-testimonial-4").fadeOut(500);
		$("#testimonial-hr-4").show();
		$("#close_4").hide();
		$("#testimonial_4").show();
    });	
	
});

$(document).ready(function(){
    $("#testimonial_5").click(function(){
        $(".full-testimonial-5").fadeIn(200);
		$("#testimonial_5").hide();
		$("#testimonial-hr-5").hide();
		$("#close_5").show();
    });

    $("#close_5").click(function(){
		$(".full-testimonial-5").fadeOut(500);
		$("#testimonial-hr-5").show();
		$("#close_5").hide();
		$("#testimonial_5").show();
    });	
	
});
	
$(document).ready(function(){
    $("#testimonial_6").click(function(){
        $(".full-testimonial-6").fadeIn(200);
		$("#testimonial_6").hide();
		$("#testimonial-hr-6").hide();
		$("#close_6").show();
    });

    $("#close_6").click(function(){
		$(".full-testimonial-6").fadeOut(500);
		$("#testimonial-hr-6").show();
		$("#close_6").hide();
		$("#testimonial_6").show();
    });	
	
});
	
$(document).ready(function(){
    $("#testimonial_7").click(function(){
        $(".full-testimonial-7").fadeIn(200);
		$("#testimonial_7").hide();
		$("#testimonial-hr-7").hide();
		$("#close_7").show();
    });

    $("#close_7").click(function(){
		$(".full-testimonial-7").fadeOut(500);
		$("#testimonial-hr-7").show();
		$("#close_7").hide();
		$("#testimonial_7").show();
    });	
	
});

$(document).ready(function(){
    $("#testimonial_8").click(function(){
        $(".full-testimonial-8").fadeIn(200);
		$("#testimonial_8").hide();
		$("#testimonial-hr-8").hide();
		$("#close_8").show();
    });

    $("#close_8").click(function(){
		$(".full-testimonial-8").fadeOut(500);
		$("#testimonial-hr-8").show();
		$("#close_8").hide();
		$("#testimonial_8").show();
    });	
	
});
	
$(document).ready(function(){
    $("#testimonial_9").click(function(){
        $(".full-testimonial-9").fadeIn(200);
		$("#testimonial_9").hide();
		$("#testimonial-hr-9").hide();
		$("#close_9").show();
    });

    $("#close_9").click(function(){
		$(".full-testimonial-9").fadeOut(500);
		$("#testimonial-hr-9").show();
		$("#close_9").hide();
		$("#testimonial_9").show();
    });	
	
});
	
$(document).ready(function(){
    $("#testimonial_10").click(function(){
        $(".full-testimonial-10").fadeIn(200);
		$("#testimonial_10").hide();
		$("#testimonial-hr-10").hide();
		$("#close_10").show();
    });

    $("#close_10").click(function(){
		$(".full-testimonial-10").fadeOut(500);
		$("#testimonial-hr-10").show();
		$("#close_10").hide();
		$("#testimonial_10").show();
    });	
	
});


$('body').scrollspy({ target: '.navmenu' });

// When we click on the LI
$("ul.qcontrols li").click(function(){
  // If this isn't already active
  if (!$(this).hasClass("active")) {
    // Remove the class from anything that is active
    $("ul.qcontrols li.active").removeClass("active");
    // And make this active
    $(this).addClass("active");
  }
});


//WOW Scroll Spy
var wow = new WOW({
    //disabled for mobile
    mobile: false
});
wow.init();

jQuery(document).ready(function( $ ) {
        $('.circle').circleProgress({
        value: 0.70,
        startAngle: 4.75,
        size: 200,
        fill: { gradient: ["#FFFFFF"] }
      });
        $('.two').circleProgress({
          value: 0.75,
        });
        $('.three').circleProgress({
          value: 0.50,
        });
        $('.four').circleProgress({
          value: 0.90,
        });

   //Clients carousel Slider
    $('#clients-carousel').owlCarousel({
        navigation: false, // Show next and prev buttons
        slideSpeed: 400,
        paginationSpeed: 800,
        autoPlay: true,
        pagination : false,
        items : 4,
        itemsCustom : false,
        itemsDesktop : [1199,4],
        itemsDesktopSmall : [980,3],
        itemsTablet: [768,2],
        itemsTabletSmall: false,
        itemsMobile : [479,1],
    });
       $('#menu').click(function(){
       $('#menu').not(this).removeClass("active");
       $(this).toggleClass("active");
      });

  });

  
//ScrollTop
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



//initiating jQuery
jQuery(function($) {
  $(document).ready( function() {
    //enabling stickUp on the '.navbar-wrapper' class for mobile nav
   $('.navbar-wrapper').stickUp();
  });
});

//Enable viewport checker to look for carousel in viewport before it starts 
$(document).ready(function(){
    $('.carousel').carousel('pause');
    $('.carousel').viewportChecker({
        offset: 200,  
        callbackFunction: function(elem){
            setTimeout(function(){
                $('.carousel').carousel('');
            },500);
        }
    });

});

//Initialize lightbox and its settings
new lightbox().init();

    lightbox.option({
      'showImageNumberLabel': false,
      'fitImagesInViewport': true,
      'wrapAround': true
    })

/*jasny bootsrap extra to format phone number in input field*/
$('.inputmask').inputmask({
  mask: '9-999-999-9999'
})

