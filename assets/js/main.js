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

  //   _scrollSpy();
  //   stickToTop();
})(window, document, jQuery);

//
const iconClick = document.getElementById("toggle");
const close = document.getElementById("close");
const nav = document.querySelector(".sideber-area");

iconClick.addEventListener("click", function () {
  nav.classList.add("active");
});

close.addEventListener("click", function () {
  nav.classList.remove("active");
});
