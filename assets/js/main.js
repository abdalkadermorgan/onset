const dir = $("html").attr("dir");
/* Container Offsets */
const containerLeftOffest = $(".container").offset().left;
if (dir === "rtl") {
  $(".container-left").css("margin-right", containerLeftOffest + "px");
  $(".container-right").css("margin-left", containerLeftOffest + "px");
} else {
  $(".container-left").css("margin-left", containerLeftOffest + "px");
  $(".container-right").css("margin-right", containerLeftOffest + "px");
}

var swiper = new Swiper(".swiper-header", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

var swiper = new Swiper(".swiper-services", {
  slidesPerView: 2,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    992: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
    1400: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".swiper-partners", {
  slidesPerView: 1,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
    1400: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".swiper-customer", {
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    992: {
      slidesPerView: 1,
      spaceBetween: 50,
    },
    1400: {
      slidesPerView: 2,
      spaceBetween: 50,
    },
  },
});

var swiper = new Swiper(".swiper-business", {
  slidesPerView: 3,
  grid: {
    rows: 3,
  },
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

jQuery(document).ready(function ($) {
  window.onscroll = () => {
    const scroll = window.scrollY;
    fixedMenu(scroll);
  };

  function fixedMenu(scroll) {
    const headerScroll = document.querySelector(".navbar");
    const documentBody = document.querySelector("body");

    if (scroll > 300) {
      documentBody.classList.add("ft");
      headerScroll.classList.add("fixed-top");
    } else {
      documentBody.classList.remove("ft");
      headerScroll.classList.remove("fixed-top");
    }
  }
});
