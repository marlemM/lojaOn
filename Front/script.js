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

  window.addEventListener('scroll', function() {
    var button = document.getElementById('whatsapp-button');
    if (button) {
      var windowHeight = window.innerHeight || document.documentElement.clientHeight;
      var buttonHeight = button.offsetHeight;
      var scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;
  
      if (scrollPosition > windowHeight - buttonHeight) {
        button.style.bottom = '20px';
      } else {
        button.style.bottom = (windowHeight - scrollPosition - buttonHeight + 20) + 'px';
      }
    }
  });
  
  
  