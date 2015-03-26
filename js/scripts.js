// If JavaScript is enabled remove 'no-js' class and give 'js' class
jQuery('html').removeClass('no-js').addClass('js');


// When DOM is fully loaded
jQuery(document).ready(function($) {
  "use strict";


/* --------------------------------------------------------	
	 External Links
   --------------------------------------------------------	*/	

	  $(window).load(function() {
			$('a[rel=external]').attr('target','_blank');	
		});

/* --------------------------------------------------------	
	 Tooltips
   --------------------------------------------------------	*/	

    $('body').tooltip({
        delay: { show: 300, hide: 0 },
        selector: '[data-toggle=tooltip]:not([disabled])'
    });
    
/* --------------------------------------------------------	
	 Back To Top
   --------------------------------------------------------	*/	
    
		$('.back-to-top').click(function () {
			$('body,html').animate({
				scrollTop: 0
			}, 800);
			return false;
		}); 
    

/* --------------------------------------------------------	
	 Dynamic Progress Bar
   --------------------------------------------------------	*/
  
    $(window).load(function(){    
      $('.bar').css('width',  function(){ return ($(this).attr('data-percentage')+'%')});
    });
    
/* --------------------------------------------------------	
	 Back To Top Button
   --------------------------------------------------------	*/	

	(function() {   
  		$('<a id="back-to-top"></a>').appendTo($('body'));

			$(window).scroll(function() {
				if($(this).scrollTop() != 0) {
					$('#back-to-top').fadeIn();	
				} else {
					$('#back-to-top').fadeOut();
				}
			});
			
			$('#back-to-top').click(function() {
				$('body,html').animate({scrollTop:0},800);
			});	        
	})();  

/* --------------------------------------------------------	
	 Responsive Navigation
   --------------------------------------------------------	*/	

  jQuery('header nav').meanmenu({
    meanMenuClose: "X", // single character you want to represent the close menu button
    meanMenuCloseSize: "22px", // set font size of close button
    meanMenuOpen: "<span /><span /><span />", // text/markup you want when menu is closed
    meanRevealPosition: "right", // left right or center positions
    meanRevealPositionDistance: "0", // Tweak the position of the menu
    meanRevealColour: "", // override CSS colours for the reveal background
    meanRevealHoverColour: "", // override CSS colours for the reveal hover
    meanScreenWidth: "979", // set the screen width you want meanmenu to kick in at
    meanNavPush: "", // set a height here in px, em or % if you want to budge your layout now the navigation is missing.
    meanShowChildren: true, // true to show children in the menu, false to hide them
    meanExpandableChildren: true, // true to allow expand/collapse children
    meanExpand: "+", // single character you want to represent the expand for ULs
    meanContract: "-", // single character you want to represent the contract for ULs
    meanRemoveAttrs: false // true to remove classes and IDs, false to keep them
  });

//Move Nav
 
$(window).scroll(function(){ 
 if ($(this).scrollTop() > 50){ 
	$('.navbar').addClass("navbar-move");
  $('.navbar .nav > li > a').addClass("menu-scroll-a");
  $('.logo').addClass("navbar-move");
 } 
 else{
	$('.navbar').removeClass("navbar-move");
  $('.navbar .nav > li > a').removeClass("menu-scroll-a");
  $('.logo').removeClass("navbar-move");
 }
}); 


 
  
/* --------------------------------------------------------	
	 Parallax
   --------------------------------------------------------	*/	


  
    var detectmob = false;	
    if(navigator.userAgent.match(/Android/i)
      || navigator.userAgent.match(/webOS/i)
      || navigator.userAgent.match(/iPhone/i)
      || navigator.userAgent.match(/iPad/i)
      || navigator.userAgent.match(/iPod/i)
      || navigator.userAgent.match(/BlackBerry/i)
      || navigator.userAgent.match(/Windows Phone/i)) {							
        detectmob = true;
    }
    
    if (detectmob === true) {
      $( '.parallax' ).each(function(){
    			$(this).addClass('parallax-mobile');
    	});
    }
    else {
        $( '#parallax-one' ).parallax();
        $( '#parallax-two' ).parallax();
        $( '#parallax-three' ).parallax();
    }  
  


});
