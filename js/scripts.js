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





// Add some invisible elements with Bootstrap CSS visibile utility classes
$( "body" ).append( "<div style='visibility:hidden;' class='viewport-check'><span class='visible-xs-block'></span><span class='visible-sm-block'></span><span class='visible-md-block'></span><span class='visible-lg-block'></span></div>" );

// Checks if the span is set to display blcok via CSS
function checkIfBlock (target) {
    var target = $(target).css('display') == 'block';
    return target;
}

// Set some variables to use with the if checks below
var mediaQueryXs = checkIfBlock('.viewport-check .visible-xs-block');
var mediaQuerySm = checkIfBlock('.viewport-check .visible-sm-block');
var mediaQueryMd = checkIfBlock('.viewport-check .visible-md-block');
var mediaQueryLg = checkIfBlock('.viewport-check .visible-lg-block');

// Debug
console.log("extra small " + mediaQueryXs);
console.log("small " + mediaQuerySm);
console.log("medium " + mediaQueryMd);
console.log("large " + mediaQueryLg);

// Now check if the media query is enabled then add a unique class to the body tag

// Are you extra-small?
if ( mediaQueryXs == true ) {
        $("body").toggleClass( "media-query-xs" );
}

// Are you small?
if ( mediaQuerySm == true ) {
        $("body").toggleClass( "media-query-sm" );
}

// Are you medium?
if ( mediaQueryMd == true ) {
        $("body").toggleClass( "media-query-md" );
}

// Are you large?
if ( mediaQueryLg == true ) {
        $("body").toggleClass( "media-query-lg" );
}





if ( !mediaQueryXs == true ) {

    //http://jsfiddle.net/apougher/ydcMQ/
    // Turn off on mobile
    $(".dropdown").hover(
        function() { $('.dropdown-menu', this).stop().fadeIn("fast");
        },
        function() { $('.dropdown-menu', this).stop().fadeOut("fast");
    });

}







//----------------------End Document
});