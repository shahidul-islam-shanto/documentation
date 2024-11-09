(function (window, document, $) {
  "use strict";

  //variables
  var _window = $(window),
    _document = $(document),
    _body = $("body");

  //SMOOTHSCROLL
  var smoothScroll = function (e) {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      var $f = target.offset().top,
        $g = $f - 40,
        $y;

      if (target.length) {
        $("#section-featured_work").is(target) ? ($y = $g) : ($y = $f);
        $("html, body").animate(
          {
            scrollTop: $y,
          },
          1000,
          "easeInOutExpo"
        );
        return !1;
      }
    }
  };

  _document.on("click", ".page-scroll", smoothScroll);

  _document.on("keyup", ".search-input", function () {
    var value = $(this).val().toLowerCase();
    $(".side-header ol *").filter(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
    });
  });

  _document.on("click", ".toggle-navbar", function (e) {
    $(".sideber-area").toggleClass("show");
  });

  _document.on("click", function (e) {
    if (
      !$(".sideber-area *").is(e.target) &&
      !$(".toggle-navbar *").is(e.target)
    ) {
      $(".sideber-area").removeClass("show");
    }
  });

  var stickToTop = function () {
    var _sideNav = $(".sideber-area"),
      _backToTop = $(".back-to-top");

    _window.on("scroll", function () {
      if (_window.scrollTop() > 200) {
        _sideNav.addClass("stick-to-top");
        _backToTop.addClass("show");
      } else {
        _sideNav.removeClass("stick-to-top");
        _backToTop.removeClass("show");
      }
    });
  };

  //   _scrollSpy();
  stickToTop();
})(window, document, jQuery);

// Pour le smoth scroll
$(document).ready(function () {
  //Pour afficher le bouton
  var offset = 120;
  var duration = 500;
  $(window).scroll(function () {
    if (jQuery(this).scrollTop() > offset) {
      $(".back-to-top").fadeIn(duration);
    } else {
      $(".back-to-top").fadeOut(duration);
    }
  });

  //Pour le smoth scroll
  $(function () {
    $("a[href*=#]:not([href=#])").click(function () {
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        if (target.length) {
          $("html,body").animate(
            {
              scrollTop: target.offset().top,
            },
            500
          );
          return false;
        }
      }
    });
  });
});

//navber
const iconClick = document.getElementById("toggle");
const close = document.getElementById("close");
const nav = document.querySelector(".sideber-area");

iconClick.addEventListener("click", function () {
  nav.classList.add("active");
});

close.addEventListener("click", function () {
  nav.classList.remove("active");
});
