// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex - 1].style.display = "block";
//   dots[slideIndex - 1].className += " active";
// }

// $(".slider-for").slick({
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   arrows: false,
//   fade: true,
//   asNavFor: ".slider-nav",
// });
// $(".slider-nav").slick({
//   slidesToShow: 3,
//   slidesToScroll: 1,
//   asNavFor: ".slider-for",
//   dots: true,
//   focusOnSelect: true,
// });

// $("a[data-slide]").click(function (e) {
//   e.preventDefault();
//   var slideno = $(this).data("slide");
//   $(".slider-nav").slick("slickGoTo", slideno - 1);
// });


// silder //

new Swiper('.winter-offrer-slider',{
  slidesPerView: 3,
  spaceBetween: 20,
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    1028: {
      slidesPerView: 3,
      spaceBetween: 30
  },
    1920: {
      slidesPerView: 3,
      spaceBetween: 30
  },
    clickable: true,
  },
  pagination: {
        el: ".swiper-pagination",
       clickable: true,
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
})
