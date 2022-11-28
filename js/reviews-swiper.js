var swiper = new Swiper(".reviews-carousel", {
    // loop: true,
    slidesPerView: 3,
    spaceBetween: 60,
    loop: true,
    allowTouchMove: false,
    breakpoints: {
        0: {
            slidesPerView: 1
        },
        600: {
            slidesPerView: 'auto'
        },
        1024: {
            slidesPerView: 'auto'
        }
    }
});

document.getElementsByClassName('swiper-btn-prev')[0].addEventListener('click', () => {swiper.slidePrev()})
document.getElementsByClassName('swiper-btn-next')[0].addEventListener('click', () => {swiper.slideNext()})