$(document).ready(function() {
    $('.carousel').slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 2000,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });
  });
  
  function scrollToProducts() {
    const productsSection = document.getElementById("products-section");
    productsSection.scrollIntoView({ behavior: "smooth", block: "start" });
    event.preventDefault(); // Evita o comportamento padrão do link
  }
  
  