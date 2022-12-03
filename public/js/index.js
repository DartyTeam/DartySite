const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoplay: {
        delay: 3000,
    },
    effect: "cards",
    cardsEffect: {
        perSlideOffset: 32,
        perSlideRotate: 0,
        slideShadows: false,
    },
    grabCursor: true,
    loopedSlidesLimit: false,
  });