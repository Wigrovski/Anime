const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed: 1000,
    effect: 'fade',

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        dynamicBullets: true,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
})