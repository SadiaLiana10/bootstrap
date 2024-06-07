$(function(){
  
$('.your-class').slick({
  infinite: true,
    dots: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,

         prevArrow:'<span class="left"><i class="fa-solid fa-arrow-left"></i></span>',
        nextArrow:'<span class="right"><i class="fa-solid fa-arrow-right"></i></span>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows:false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows:false
        }
      }
    ]
  });
    
});
