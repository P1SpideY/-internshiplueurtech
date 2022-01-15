$(document).ready(() => {
    $('#nav-toggle').click(() => {
      $(".nav-item").toggle(100);
      $(".nav-link").toggle(100);
    });
 });

 const mainCarousel = new Carousel(document.querySelector("#mainCarousel"), {
  Dots: false,
});

const navCarousel = new Carousel(document.querySelector("#navCarousel"), {
  Sync: {
    target: mainCarousel,
  },
  Dots: false,
  Navigation: false,

  infinite: false,
  center: true,
  slidesPerPage: 1,
});