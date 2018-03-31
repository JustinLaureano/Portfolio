
var windowWidth = window.innerWidth;

// console.log(windowWidth);

if (windowWidth > 450) {
    window.sr = ScrollReveal();

    // Portfolio
    sr.reveal('.sr-top', {
        duration: 1000,
        origin: 'top',
        distance: '50px',
    });
    
    sr.reveal('.sr-bottom', {
        duration: 1000,
        origin: 'bottom',
        distance: '50px',
    });
    
    sr.reveal('.sr-left', {
        duration: 1000,
        origin: 'left',
        distance: '50px',
    });

    sr.reveal('.sr-right', {
        duration: 1000,
        origin: 'right',
        distance: '50px',
    });

    sr.reveal('.sr-left-delay', {
        duration: 1000,
        delay: 500,
        origin: 'left',
        distance: '50px',
    });

    sr.reveal('.sr-left-sequence', {
        duration: 1000,
        origin: 'left',
        distance: '400px',
        opacity: 1,
        scale: 1,
    }, 50);

    sr.reveal('.sr-about-sequence', {
        duration: 1200,
        origin: 'left',
        distance: '300px',
        opacity: 1,
        scale: 1,
    }, 50);

    sr.reveal('.sr-font-sequence', {
        duration: 1500,
        origin: 'left',
        distance: '70vw',
        opacity: 1,
        scale: 1,
        viewFactor: 0.1,
    }, 100);

    sr.reveal('.sr-intro-sequence', {
        duration: 1500,
        origin: 'left',
        distance: '70vw',
        opacity: 1,
        scale: 1,
    }, 100);

    sr.reveal('.sr-laptop-right', {
        duration: 1300,
        delay: 300,
        origin: 'right',
        distance: '90vw',
        opacity: 1,
        scale: 1,
        easing: 'ease-out',
    });

    sr.reveal('.sr-phone-showcase', {
        duration: 2000,
        origin: 'bottom',
        distance: '70vw',
        opacity: 1,
        scale: 1,
        viewFactor: 0.2,
    }, 300);
    

    
    // The Gathering
    // index
    sr.reveal('.base-header', {
    duration: 2000,
    origin: 'top'
    });
    sr.reveal('#welcome-left', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#welcome-right', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    sr.reveal('#private-stamp', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#private-text', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    sr.reveal('#artwork', {
    duration: 2000,
    origin: 'bottom',
    });
    sr.reveal('.hor-rule', {
    duration: 2000,
    origin: 'top',
    });
    sr.reveal('.hours-of-op', {
    duration: 2000,
    origin: 'bottom',
    });
    sr.reveal('.address', {
    duration: 2000,
    origin: 'bottom',
    distance: '500px'
    });
    sr.reveal('#carousel-container', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    sr.reveal('#hero-image', {
    duration: 2000,
    delay: 800,
    origin: 'top',
    distance: '200px'
    });
    sr.reveal('#event-list', {
    duration: 2000,
    delay: 1000,
    origin: 'bottom',
    distance: '200px'
    });
    sr.reveal('#footer', {
    duration: 2000,
    origin: 'bottom',
    distance: '200px'
    });
    
    // eat
    sr.reveal('#eat-intro', {
    duration: 2000,
    origin: 'bottom',
    });
    sr.reveal('#eat-dinner-left', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#eat-dinner-right', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    sr.reveal('#eat-lunch-left', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#eat-lunch-right', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    sr.reveal('#eat-private-left', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#eat-private-right', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    
    // drink
    sr.reveal('#drink-intro', {
    duration: 2000,
    origin: 'bottom',
    });
    sr.reveal('#drink-wine-left', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#drink-wine-right', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    sr.reveal('#drink-whiskey-left', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#drink-whiskey-right', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    sr.reveal('#drink-cocktail-left', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#drink-cocktail-right', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    
    // shop
    sr.reveal('#shop-intro', {
    duration: 2000,
    origin: 'bottom',
    });
    sr.reveal('#shop-gift-basket-left', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#shop-gift-basket-right', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    sr.reveal('#shop-wine-left', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#shop-wine-right', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    sr.reveal('#shop-giftcard-left', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#shop-giftcard-right', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    
    // listen
    sr.reveal('#listen-intro', {
    duration: 2000,
    origin: 'bottom',
    });
    sr.reveal('.listen-event-image', {
    duration: 2000,
    origin: 'bottom'
    });
    sr.reveal('.listen-event-text', {
    duration: 2000,
    delay: 200,
    origin: 'top',
    distance: '150px'
    });
    
    // about
    sr.reveal('#about-intro', {
    duration: 2000,
    origin: 'bottom',
    });
    sr.reveal('#about-history-left', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#about-history-right', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    sr.reveal('#about-gathering-left', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#about-gathering-right', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    sr.reveal('#about-wine-left', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#about-wine-right', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    sr.reveal('#about-patio-left', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#about-patio-right', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    sr.reveal('#about-anvil-left', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#about-anvil-right', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    
    // menus
    sr.reveal('.menu-nav', {
    duration: 2000,
    origin: 'bottom',
    });
    sr.reveal('#menu-all', {
    duration: 2000,
    origin: 'bottom',
    });
    
    // private events
    sr.reveal('.full', {
    duration: 2000,
    origin: 'bottom',
    });
    sr.reveal('.box-button', {
    duration: 2000,
    delay: 200,
    origin: 'bottom',
    });
    sr.reveal('.private-event-about', {
    duration: 2000,
    origin: 'bottom',
    });
    sr.reveal('#private-event-gathering-left', {
    duration: 2000,
    origin: 'bottom',
    });
    sr.reveal('#private-event-gathering-right', {
    duration: 2000,
    origin: 'bottom',
    });
    sr.reveal('#private-event-wine-left', {
    duration: 2000,
    origin: 'bottom',
    });
    sr.reveal('#private-event-wine-right', {
    duration: 2000,
    origin: 'bottom',
    });
    sr.reveal('#private-event-anvil-left', {
    duration: 2000,
    origin: 'bottom',
    });
    sr.reveal('#private-event-anvil-right', {
    duration: 2000,
    origin: 'bottom',
    });
    sr.reveal('#private-event-patio-left', {
    duration: 2000,
    origin: 'bottom',
    });
    sr.reveal('#private-event-patio-right', {
    duration: 2000,
    origin: 'bottom',
    });
    
    // reservations
    sr.reveal('#reservation-intro', {
    duration: 2000,
    origin: 'bottom',
    });
    sr.reveal('#reservation-left', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#reservation-right', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    
    // contact
    sr.reveal('#contact-intro', {
    duration: 2000,
    origin: 'bottom',
    });
    sr.reveal('#contact-gathering-left', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#contact-gathering-right', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    sr.reveal('#contact-wine-left', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#contact-wine-right', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
    sr.reveal('#contact-anvil-left', {
    duration: 2000,
    origin: 'left',
    distance: '800px'
    });
    sr.reveal('#contact-anvil-right', {
    duration: 2000,
    origin: 'right',
    distance: '800px'
    });
};



