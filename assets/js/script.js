
window.addEventListener('scroll', (event) => {
    if(window.scrollY > 50) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }
});

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    dots:false,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});


// for product price colour red if product is in sale
// Array.from(document.querySelectorAll('strike')).forEach((strike) => {
//     if (strike.nextElementSibling) {
//         strike.nextElementSibling.style.color = "red";
//     }
// });

