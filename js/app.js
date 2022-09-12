$('.slider__inner').slick({
  arrows: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  cssEase: 'linear',
  prevArrow: '<button type="button" class="slick-prev"><img src="img/slider/arrow-prev.svg" alt=""></button>',
  nextArrow: '<button type="button" class="slick-next"><img src="img/slider/arrow-next.svg" alt=""></button>',
})

const list = document.querySelectorAll('.team__btn')
  list.forEach(item =>{ 
  item.addEventListener('click', (e) =>{
  list.forEach(el=>{ el.classList.remove('team__btn--active'); });
  item.classList.add('team__btn--active')
  })
})