/*!
 * fastshell
 * Fiercely quick and opinionated front-ends
 * https://HosseinKarami.github.io/fastshell
 * @author Hossein Karami
 * @version 1.0.5
 * Copyright 2016. MIT licensed.
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
