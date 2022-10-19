var mixer = mixitup('.mixituppp');

$('.team_slick').slick({
    slidesToShow:3,
    slidesToScroll:1,
    arrows:false,
    dots:true,
    centerMode: true,
    centerPadding:"0px",
    autoplay:true,
    autoplaySpeed:1000,
    speed: 1000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  });

  $('.slick-Customer').slick({
    slidesToShow:3,
    slidesToScroll:1,
    arrows:false,
    dots:true,
    autoplay:true,
    autoplaySpeed:1100,
    speed: 1100,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
    ]
  });