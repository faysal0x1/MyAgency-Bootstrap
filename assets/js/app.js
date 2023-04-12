import AOS from 'aos';
import 'aos/dist/aos.css';
import $ from '../../node_modules/jquery/dist/jquery';


$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('nav').addClass('navbar-scrolled');
  } else {
    $('nav').removeClass('navbar-scrolled');
  }
});




$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 10,
  //   stagePadding: 50,
  responsiveClass: true,
  autoplay: true,
  nav: false,
  dots: false,
  responsive: {
    0: {
      items: 1,
      //   nav: true,
    },
    600: {
      items: 3,
      //   nav: false,
    },
    1000: {
      items: 3,
      //   nav: true,
      //   loop: false,
    },
    1400: {
      items: 8,
      //   nav: true,
      //   loop: false,
    },
  },
});

// Portfolio Page

$(document).ready(function () {
  $(".filter-button").click(function () {
    var value = $(this).attr("data-filter");

    if (value == "all") {
      //$('.filter').removeClass('hidden');
      $(".filter").show("1000");
    } else {
      //            $('.filter[filter-item="'+value+'"]').removeClass('hidden');
      //            $(".filter").not('.filter[filter-item="'+value+'"]').addClass('hidden');
      $(".filter")
        .not("." + value)
        .hide("3000");
      $(".filter")
        .filter("." + value)
        .show("3000");
    }
  });

  if ($(".filter-button").removeClass("active")) {
    $(this).removeClass("active");
  }
  $(this).addClass("active");
});

// AOS ANIMAte
AOS.init({
  duration: 1200,
})