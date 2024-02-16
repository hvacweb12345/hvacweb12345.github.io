(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

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


// Function to toggle active class on click for mobile
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', event => {
        const isActive = item.classList.contains('active');
        document.querySelectorAll('.nav-item').forEach(item => {
            item.classList.remove('active');
        });
        if (!isActive) {
            item.classList.add('active');
        }
    });
});
document.addEventListener("DOMContentLoaded", function() {
    // Get the services dropdown toggle and menu
    var servicesDropdownToggle = document.getElementById("servicesDropdown");
    var servicesDropdownMenu = document.querySelector("#servicesDropdown + .dropdown-menu");

    // Add a click event listener to the document
    document.addEventListener("click", function(event) {
        // Check if the click target is outside the services dropdown toggle and menu
        if (!event.target.closest("#servicesDropdown") && !event.target.closest(".dropdown-menu")) {
            servicesDropdownMenu.classList.remove("show");
        }
    });

    // Add a click event listener to the services dropdown toggle
    servicesDropdownToggle.addEventListener("click", function(event) {
        // Toggle the 'show' class on the dropdown menu
        servicesDropdownMenu.classList.toggle("show");
    });

    
});

document.addEventListener('DOMContentLoaded', function() {
    // Function to toggle the visibility of the residential dropdown submenu
    function toggleResidentialMenu() {
        var residentialMenu = document.getElementById('residentialMenu');
        var commercialMenu = document.getElementById('commercialMenu');
        if (residentialMenu.classList.contains('show')) {
            residentialMenu.classList.remove('show');
        } else {
            residentialMenu.classList.add('show');
            // Close the commercial menu if it's open
            if (commercialMenu.classList.contains('show')) {
                commercialMenu.classList.remove('show');
            }
        }
    }

    // Function to toggle the visibility of the commercial dropdown submenu
    function toggleCommercialMenu() {
        var commercialMenu = document.getElementById('commercialMenu');
        var residentialMenu = document.getElementById('residentialMenu');
        if (commercialMenu.classList.contains('show')) {
            commercialMenu.classList.remove('show');
        } else {
            commercialMenu.classList.add('show');
            // Close the residential menu if it's open
            if (residentialMenu.classList.contains('show')) {
                residentialMenu.classList.remove('show');
            }
        }
    }

    // Function to close both dropdown submenus
    function closeDropdownMenus() {
        var residentialMenu = document.getElementById('residentialMenu');
        var commercialMenu = document.getElementById('commercialMenu');
        residentialMenu.classList.remove('show');
        commercialMenu.classList.remove('show');
    }

    // Add event listener to the Residential dropdown toggle
    document.getElementById('residentialDropdown').addEventListener('click', toggleResidentialMenu);

    // Add event listener to the Commercial dropdown toggle
    document.getElementById('commercialDropdown').addEventListener('click', toggleCommercialMenu);

    // Add event listener to close dropdown submenus when clicking outside
    document.addEventListener('click', function(event) {
        var dropdowns = document.getElementsByClassName('dropdown-menu');
        for (var i = 0; i < dropdowns.length; i++) {
            var dropdownMenu = dropdowns[i];
            if (dropdownMenu.classList.contains('show') && !event.target.closest('.nav-item.dropdown')) {
                dropdownMenu.classList.remove('show');
            }
        }
    });

    // Add event listener to close both dropdown submenus when Services button is clicked
    document.getElementById('servicesDropdown').addEventListener('click', function() {
        closeDropdownMenus();
        // Close the Services dropdown itself
        document.getElementById('servicesDropdown').classList.remove('show');
    });
});

