const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: false,
    breakpoints: {
        768: {
            slidesPerView: 2.5,
        },
        992: {
            slidesPerView: 3.5,
        }
    }
});

const exploreBtn = document.getElementById('explore-button')

exploreBtn.onclick = () => {
  window.location.href = '/portfolio/';
}