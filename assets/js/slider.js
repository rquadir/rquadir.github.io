!(function ($) {
  "use strict";

  // Intro carousel
  var heroCarousel = $("#heroCarousel");
  var heroCarouselIndicators = $("#hero-carousel-indicators");
  heroCarousel
    .find(".carousel-inner")
    .children(".carousel-item")
    .each(function (index) {
      index === 0
        ? heroCarouselIndicators.append(
            "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
              index +
              "' class='active'></li>"
          )
        : heroCarouselIndicators.append(
            "<li data-bs-target='#heroCarousel' data-bs-slide-to='" +
              index +
              "'></li>"
          );
    });

  heroCarousel.on("slid.bs.carousel", function (e) {
    $(this).find("h2").addClass("animate__animated animate__fadeInDown");
    $(this)
      .find("p, .btn-get-started")
      .addClass("animate__animated animate__fadeInUp");
  });
})(jQuery);
