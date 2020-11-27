$(document).ready(function () {
  // Cancel The Default Action of The Anchor Link.
  $('a').click(function (event) {
    event.preventDefault();
  });
  // Mobile Nav-bar
  $('.mobile-btn').click(function () {
    $('nav').slideToggle();
    if (window.innerWidth < 767) {
      $('.head-form').slideToggle();
    }
    $(this).toggleClass('close-sign');
  })
  // Drop Down List
  $('.nav-bar-item').click(function () {
    if (window.innerWidth < 991) {
      $(this).children('.drop-down-list').slideToggle();
      $(this).toggleClass('black');
    }
  })
  // Hide Mobile Nav-bar When Resize
  $(window).resize(function () {
    if (window.innerWidth < 768) {
      $('.head-form').hide();
    } else if (window.innerWidth > 767) {
      $('.head-form').show();
    }
    if (window.innerWidth < 991) {
      $('.mobile-btn').removeClass('close-sign');
      $('nav').hide();
    } else if (window.innerWidth > 991) {
      $('nav').show();
    }
  });
  // Swiper
  var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 2500,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  // Show More Button
  $('.latest-activity-button').click(function () {
    $('.latest-activity-box.hide').toggleClass('show');
  })
  // Toggle Class Fixed to Navbar
  if ($(window).scrollTop() > 60) {
    $('header .top-bar-container, .buddy').addClass('fixed');
  } else {
    $('header .top-bar-container, .buddy').removeClass('fixed');
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() > 60) {
      $('header .top-bar-container, .buddy').addClass('fixed');
    } else {
      $('header .top-bar-container, .buddy').removeClass('fixed');
    }
  });
  // Show Go To Top Icon
  if ($(window).scrollTop() > 100) {
    $('.go-to-top').fadeIn();
  } else {
    $('.go-to-top').fadeOut();
  }
  $(window).scroll(function () {
    if ($(window).scrollTop() > 100) {
      $('.go-to-top').fadeIn();
    } else {
      $('.go-to-top').fadeOut();
    }
  });
  // Remove Class Fixed from Navbar
  $('.go-to-top').click(function () {
    $(window).scrollTop(0);
  })
});