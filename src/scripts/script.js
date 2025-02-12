var myCarousel = document.querySelector("#carouselExampleIndicators");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000,
  ride: "carousel",
});

document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", function () {
      document.querySelectorAll(".nav-link").forEach((el) => {
        el.style.color = "#6C757D";
        el.style.fontWeight = "400";
      });

      this.style.color = "white";
      this.style.fontWeight = "bold";
    });
  });