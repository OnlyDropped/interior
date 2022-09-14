$('.slider__inner').slick({
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: 'linear',
  prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow-next.svg" alt=""></button>',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        arrows: false,
        centerMode: true,
      }
    },
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
        arrows: false,
        centerMode: false,
      }
    }
  ] 
})

const list = document.querySelectorAll('.team__btn')
  list.forEach(item =>{ 
  item.addEventListener('click', (e) =>{
  list.forEach(el=>{ el.classList.remove('team__btn--active'); });
  item.classList.add('team__btn--active')
  })
})

$('.articles__slider').slick({
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: 'linear',
  prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow-next.svg" alt=""></button>',
  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 2,
        arrows: false,
        centerMode: true,
      }
    },
    {
      breakpoint: 376,
      settings: {
        slidesToShow: 1,
        arrows: false,
        centerMode: true,
      }
    }
  ]
})

$(".header-top__menu").click(function() {
  $(this).toggleClass("on");
  $('.header-top__wrapper').toggleClass('header-top__wrapper--show');
  $(".main-mnu").slideToggle();
  return false;
});
