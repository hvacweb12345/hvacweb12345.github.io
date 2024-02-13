(function ($) {

  "use strict";


  $(document).ready(function () {



    //testimonial swiper

    var swiper = new Swiper(".testimonial-swiper", {
      slidesPerView: 3,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1400: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }
    });

    window.addEventListener("load", (event) => {
      //isotope
      $('.isotope-container').isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'masonry',
      });



      // Initialize Isotope
      var $container = $('.isotope-container').isotope({
        // options
        itemSelector: '.item',
        layoutMode: 'masonry',
      });

      $(document).ready(function () {
        //active button
        $('.filter-button').click(function () {
          $('.filter-button').removeClass('active');
          $(this).addClass('active');
        });
      });

      // Filter items on button click
      $('.filter-button').click(function () {
        var filterValue = $(this).attr('data-filter');
        if (filterValue === '*') {
          // Show all items
          $container.isotope({ filter: '*' });
        } else {
          // Show filtered items
          $container.isotope({ filter: filterValue });
        }
      });

    });



  });


})(jQuery);
document.addEventListener("DOMContentLoaded", function() {
  var residentialDropdown = document.getElementById("residentialDropdown");
  var commercialDropdown = document.getElementById("commercialDropdown");
  var residentialMenu = document.getElementById("residentialMenu");
  var commercialMenu = document.getElementById("commercialMenu");
  var servicesDropdown = document.getElementById("servicesDropdown");

  residentialDropdown.addEventListener("click", function(event) {
      event.preventDefault();
      residentialMenu.classList.toggle("show");
      commercialMenu.classList.remove("show");
  });

  commercialDropdown.addEventListener("click", function(event) {
      event.preventDefault();
      commercialMenu.classList.toggle("show");
      residentialMenu.classList.remove("show");
  });

  // Close residential and commercial menus when services dropdown link is clicked
  servicesDropdown.addEventListener("click", function(event) {
      if (!residentialMenu.classList.contains("show") && !commercialMenu.classList.contains("show")) {
          return; // No need to close if neither menu is open
      }
      residentialMenu.classList.remove("show");
      commercialMenu.classList.remove("show");
  });

  // Close dropdowns when clicking outside
  document.addEventListener("click", function(event) {
      if (!event.target.matches('#residentialDropdown') && !event.target.matches('#commercialDropdown')) {
          residentialMenu.classList.remove("show");
          commercialMenu.classList.remove("show");
      }
  });
});
