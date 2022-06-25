const dir = $("html").attr("dir");
/* Container Offsets */
const containerLeftOffest = $('.container').offset().left;
if (dir === 'rtl') {
    $('.container-left').css('margin-right', containerLeftOffest + 'px');
    $('.container-right').css('margin-left', containerLeftOffest + 'px');
} else {
    $('.container-left').css('margin-left', containerLeftOffest + 'px');
    $('.container-right').css('margin-right', containerLeftOffest + 'px');
}

var swiper = new Swiper(".swiper-header", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var swiper = new Swiper(".swiper-services", {
    slidesPerView: 5,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".swiper-partners", {
    slidesPerView: 4,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

  var swiper = new Swiper(".swiper-customer", {
    slidesPerView: 2,
    spaceBetween: 170,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
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