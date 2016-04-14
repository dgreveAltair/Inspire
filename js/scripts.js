$(document).ready(function(){
  

/*
Set active link on click
 $(".navbar-nav a").click(function() {  //use a class, since your ID gets mangled
    $(".navbar-nav a").removeClass("active"); 

    $(this).addClass("active");      //add the class to the clicked element
  });
*/



$("#company-icons a").hover(function(){
    $(this).find('img').attr("src", function(index, attr){
        return attr.replace(".png", "-hover.png");
    });
}, function(){
    $(this).find('img').attr("src", function(index, attr){
        return attr.replace("-hover.png", ".png");
    });
});




// Demo gallery slideshow
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:15,
    nav:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
})



  //hide box
new WOW().init();

// http://manos.malihu.gr/page-scroll-to-id/


$("a[href*='#'], a[href*='#top'], a[href*='#product'], a[href*='#features'], a[href*='#demo'], a[href*='#pricing'], a[href*='#company'], a[href*='#access']").mPageScroll2id({
    offset:50
});



// When resizing the browser window is breaks the responsive owl carousel. This will auto refresh the page to clean things up
var w = 0;
$( window ).load( function(){
    w = $( window ).width();
});

$( window ).resize( function(){

    // wait a second before refreshing the page
    setTimeout( function()
      {
            if( w != $( window ).width() ){
            console.log('window resized..');
            this.location.reload(false);
            w = $( window ).width();
            delete w;
            }

      }, 2000);

});








//http://jsfiddle.net/apougher/ydcMQ/
// Turn off on mobile
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).stop().fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).stop().fadeOut("fast");
    });



//----------------------End Document
});