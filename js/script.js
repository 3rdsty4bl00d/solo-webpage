/*=================================
|   |   |   Preloader--------------
===================================*/
$(window).on('load', function () {
    //window on load method
    //is going to make sure
    //the page is fully loaded
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});
/*=================================
|   |   |   Owl carousel-----------
===================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }
    });
});
/*=================================
|   |   |   Progress Bar-----------
===================================*/
$(function () {
    $("#progress-elements").waypoint(function () {
        $(".progress-bar").each(function () {
            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);
        });
        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});
/*=================================
|   |   |   Responsive tabs--------
===================================*/
$(function () {
    $("#services-tabs").responsiveTabs({
        animation: 'slide'
    });
});
/*=================================
|   |   |   Portfolio--------------
===================================*/
$(window).on('load', function () {
    // initialize isotope
    $("#isotope-container").isotope({
    });
    //filter items on button click
    $("#isotope-filters").on('click', 'button', function () {
        //get filter value
        var filterValue = $(this).attr('data-filter');
        $("#isotope-container").isotope({
            filter: filterValue
        });
        //active button
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/*=================================
|   |   |   Magnific popup---------
===================================*/
$(function () {
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });
});

/*=================================
|   |   |   Testimonials-----------
===================================*/

$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']/*,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }*/
    });
});

/*=================================
|   |   |   Stat-------------------
===================================*/

/*The below jQuery code is true only when no script tag is added
  to the html code.
  
  But I will use the jQuery.counterup.js plugin
  to animate my stat number,
  because it lets me animate float numbers too.
  
  where as the plugin lets me to animate
  even float, double number
  
  and the interesting part is 
  it will also let me animate time.
  
  how cool is that
*/

/*$(function () {
    $(".counter").each(function() {
        $(this).prop('counter',0).animate({
            Counter:$(this).text()
        },{
            duration: 4000,
            easing: 'swing',
            step:function(now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});*/

$(function () {
    $(".counter").counterUp({
        delay: 10,
        time: 3000
    });
});

/*=================================
|   |   |   clients----------------
===================================*/

$(function () {
    $("clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']/*,
        responsive: {
            // breakpoint from 0 up
            0: {
                items: 1
            },
            // breakpoint from 480 up
            480: {
                items: 2
            }
        }*/
    });
});

/*google map*/
$(window).on('load', function () {
    //map variables
   var addressString = 'Aloknagar, Kathmandu, Nepal';
    var myLatlng = {lat: 27.6847671, lng: 85.3358666};
    //render map
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 4,
        center: myLatlng
    });
    //add marker
    var marker = new google.maps.Marker({
       position: myLatlng,
        map: map
    });
});






























