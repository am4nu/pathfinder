
$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop()>50) {

            $('.navbar').addClass('solid');
        }
        else
        {
            $('.navbar').removeClass('solid');
        }
    });



    $(document).click(function (event){

        var clickover=$(event.target);
        var opened =$(".navbar-collapse").hasClass("show");
        if (opened === true && !clickover.hasClass("navbar-toggler")){
        $(".navbar-toggler").click();

        }
    });




    // Add scrollspy to <body>
    //$('body').scrollspy({target: ".navbar", offset: 50});   
  
    // Add smooth scrolling on all links inside the navbar
    $("a").on('click', function(event) {
      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();
  
        // Store hash
        var hash = this.hash;
  
        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
          scrollTop: $(hash).offset().top
        }, 700, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      }  // End if
    });
$("#team-slider").owlCarousel(
{

  items:3,
  autoplay:true,
  smartspeed:700,
  loop:true,
  autplayHowerPause:true,
  responsive:
  {
    0:{
       items:1
    },
    576:{
      items:2
    },
    768: {

      items:3
    }
  }
});

 
  
if($(window).width() <=320){

  window.location.href = "error/error.html";
}

    if ( $(window).width() <=720) {      
      $(".hero-image").css({"height": "30rem"});
      
    } 

  if ( $(window).width()>720 && $(window).width()<1080) {      
    $(".hero-image").css({"height": "80rem"});
    
  } 
  if ( $(window).width() >=720) // for the pathfinder name logo on navbar
  {
    $(".roun2").css({"height":"4rem","width":"16rem"});
  }


});