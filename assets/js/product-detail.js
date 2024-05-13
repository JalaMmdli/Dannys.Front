$(".cake-img").slick({
  vertical: true,
  verticalSwiping: true,
  dots: false,
  autoplay: true,
  arrows: false,
  infinite: true,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 3,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 5,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        vertical: false,
        slidesToShow: 5,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

const images = document.querySelectorAll(".sliderImg");
const mainImage = document.querySelector(".mainImg");

images.forEach((image) => {
  image.addEventListener("click", (e) => {
    e.preventDefault();
    mainImage.src=image.src;
  });
});
