/*!

 */
(function ($, window, document, undefined) {

  'use strict';

  $(function () {
    // FastShell
  });


// Dropdown Notification
$(".js-dropdown").click(function () {
  $(".dropdown-wrap").toggleClass("show");
  $(".profile-menu").removeClass("show");
}); 

// Close Dropdown
$(".close-js").click(function () {
  $(".dropdown-wrap").removeClass("show");
  $(".edit-message").removeClass("show");
  $(".add-message").removeClass("show");
});

// Close Dropdown Notification when click outside of container
$(document).click(function (e) {
  if (!$(e.target).parents().andSelf().is(".js-dropdown")) {
    $(".dropdown-wrap").removeClass("show");
  }
});

$(".dropdown-wrap").click(function (e) {
    e.stopPropagation();
});

// Dropdown Profile Menu
$(".js-profile-menu").click(function () {
  $(".profile-menu").toggleClass("show");
  $(".dropdown-wrap").removeClass("show");
}); 

// Close Profile menu when click outside of container
$(document).click(function (e) {
  if (!$(e.target).parents().andSelf().is(".js-profile-menu")) {
    $(".profile-menu").removeClass("show");
  }
});

$(".js-profile-menu").click(function (e) {
    e.stopPropagation();
});

// add and remove radius on Tab content
$('.tablinks').on( "click", function() {
  if ($(".tablinks:first").hasClass("active") || $(".tablinks:last").hasClass("active")) {
    $(".tabcontent").addClass("tab-content-radius");
  } 
  else {
    $(".tabcontent").removeClass("tab-content-radius");
  };   
});

// Edit Message
$(".tabcontent-btn__edit").click(function () {
  $(".edit-message").toggleClass("show");
});

// Dropdown for mobile tab menu
$(".tab-menu-mobile__select-title").click(function () {
  $(".tab-menu-mobile__list-wrap").toggleClass("show-block");
  $(".tab-menu-mobile__overall").toggleClass("show-block");
});

// Close Edit message container when click outside of container
$(document).click(function (e) {
  if (!$(e.target).parents().andSelf().is(".tabcontent-btn__edit")) {
      $(".edit-message").removeClass("show");
  }
});

$(".edit-message").click(function (e) {
    e.stopPropagation();
});

// Add Message
$(".tabcontent-btn__add").click(function () {
  $(".add-message").toggleClass("show");
});

// Switch Pprofile
$(".switch-profile-link").click(function () {
  $(".switch-profile__list").toggleClass("show");
  $(".switch-profile-link__icon-img").toggleClass("rotate");
});

// Mobile Menu

$(function() {
  
  // Toggle Nav on Click
  $('.toggle-nav').click(function() {
      // Calling a function in case you want to expand upon this.
      toggleNav();
  });
});

function toggleNav() {
  if ($('.wrap').hasClass('show-nav')) {
      // Do things on Nav Close
      $('.wrap').removeClass('show-nav');
  } else {
      // Do things on Nav Open
      $('.wrap').addClass('show-nav');
  }

  //$('#site-wrapper').toggleClass('show-nav');
}

// Add class when widnow resize
(function($) {
    var $window = $(window),
        $html = $('html');

    function resize() {
        if ($window.width() < 990) {
            return $html.addClass('mobile');
        }

        $html.removeClass('mobile');
    }

    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);


})(jQuery, window, document);

//Tab Menu
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();
