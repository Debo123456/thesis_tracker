// Agency Theme JavaScript

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs
    $('body').scrollspy({
        target: '.navbar-fixed-top',
        offset: 51
    });

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').click(function(){
            $('.navbar-toggle:visible').click();
    });

    // Offset for Main Navigation
    $('#mainNav').affix({
        offset: {
            top: 100
        }
    })

})(jQuery); // End of use strict

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return true;
        }
    }
    return false;
}

$(document).ready(function() {
  if(!checkCookie("student")){
    setCookie("student", "password", 5);
  }

  if(!checkCookie("coordinator")){
    setCookie("coordinator", "password", 5);
  }

  console.log(getCookie("student"));

  $(".login button").on("click", function(){
    id = $("input[name='id']").val();
    password = $("input[name='password']").val();
    console.log(id + " " + password);

    if(checkCookie(id)) {
      if(getCookie(id) == password){
        if(id == "student") {
          $('html, body').stop().animate({
              scrollTop: ($("#student-dash").offset().top)
          }, 1250, 'easeInOutExpo');
        }
        else if(id == "coordinator"){
          $('html, body').stop().animate({
              scrollTop: ($("#thesis-search").offset().top)
          }, 1250, 'easeInOutExpo');
        }

      }
    }

  })

  $(".thesis-layout-thesis").on("click", function(){
    $('html, body').stop().animate({
        scrollTop: ($("#coordinator-dash").offset().top)
    }, 1250, 'easeInOutExpo');
  })

  $('html, body').stop().animate({
      scrollTop: ($("#page-top").offset().top)
  }, 1250, 'easeInOutExpo');
});
