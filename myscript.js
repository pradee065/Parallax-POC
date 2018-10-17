$(document).ready(function () {
  var foreground_image_url = $('.convert_image').find("img");
  if (foreground_image_url.length > 1) {
      for (var i = 0; i < foreground_image_url.length; i++) {
          var currentImageSrc = $(foreground_image_url[i]).attr('src');
          $($(foreground_image_url[i])[0]).parent().css("background-image", "url(" + currentImageSrc + ")");
          $($(foreground_image_url[i])[0]).hide();
      }
  } else {
      var foreground_image_url = $('.convert_image').find("img").first().attr('src')
      $(".convert_image").css("background-image", "url(" + foreground_image_url + ")");
      $('.convert_image').find("img").first().hide();
  }

$(".srvc-strategy").click(function(){
  $('.container.srvc-container').animate({top: '250px'}, 1000, function(){
     
          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
});   
  

});

//   //Add smooth scrolling to all links
//   $("a").on('click', function(event) {

//     // Make sure this.hash has a value before overriding default behavior
//     if (this.hash !== "") {
//       // Prevent default anchor click behavior
//       $("")
//       event.preventDefault();

//       // Store hash
//       var hash = this.hash;

//       // Using jQuery's animate() method to add smooth page scroll
//       // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//       $('html, body').animate({
//         scrollTop: $(hash).offset().top
//       }, 1000, function(){
   
//         // Add hash (#) to URL when done scrolling (default click behavior)
//         window.location.hash = hash;
//       });
//     } // End if


    
//   });


$(window).scroll(function () {
    $('.animation-test1').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            //alert(1);
            $(this).addClass("slideRight");
            $(".srvc-learnmore").addClass("bounceIn");
        } else {
            //alert(2);
            $(this).removeClass("slideRight");
            $(".srvc-learnmore").removeClass("bounceIn");
        }
    });

    $('.animation-test2').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(this).addClass("fadeInLeft");
            $(".srvc-learnmore").addClass("rubberBand");
        } else {
            $(this).removeClass("fadeInLeft");
            $(this).removeClass("rubberBand");
        }
    });


    $('.animation-test3').each(function () {
        var imagePos = $(this).offset().top;
        var imageHeight = $(this).height();
        var topOfWindow = $(window).scrollTop();

        if (imagePos < topOfWindow + imageHeight && imagePos + imageHeight > topOfWindow) {
            $(".col-md-7").addClass("bounceInLeft");
            $(".col-md-5").addClass("bounceInRight");
        } else {
            $(".col-md-7").removeClass("bounceInLeft");
            $(".col-md-5").removeClass("bounceInRight");
        }
    });
});




  