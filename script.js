
window.addEventListener('DOMContentLoaded', () => {
  // Initialize Swiper
  const swiper = new Swiper('.clients-swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {
      0: { slidesPerView: 2 },
      576: { slidesPerView: 3 },
      768: { slidesPerView: 4 },
      992: { slidesPerView: 5 },
    },
  });

  // Cookie popup logic
  const cookiePopup = document.getElementById('cookiePopup');
  const cookieChoice = localStorage.getItem('cookieConsent');

  if (!cookieChoice) {
    cookiePopup.style.display = 'block';
  } else {
    cookiePopup.style.display = 'none';
  }
});

function acceptCookies() {
  localStorage.setItem('cookieConsent', 'accepted');
  hideCookiePopup();
  console.log('Cookies accepted.');
  // Optionally initialize analytics here
}

function declineCookies() {
  localStorage.setItem('cookieConsent', 'declined');
  hideCookiePopup();
  console.log('Cookies declined.');
}

function hideCookiePopup() {
  const cookiePopup = document.getElementById('cookiePopup');
  cookiePopup.style.display = 'none';
}
