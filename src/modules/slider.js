const slider = () => {
    const swiper = new Swiper('.swiper', {
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        spaceBetween: 30,
        centeredSlides: true,
        effect: "fade",
        speed: 1000,
        autoplay: {
          delay: 2500,
          disableOnInteraction: false,
        },
        loop: true,
    })
}

slider()