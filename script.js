/*==================scroll section active link ===============*/
let section = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a'); 

window.scroll=() => {
    section.forEach(sec=> {
        let top= window.scrollY;
        let offset= sec.offseTop - 150;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links=> {
                links.classList.remove('active');
                document.querySelector ('header nav a [href*='+id+']').classList.add('active');
            });
        };
    });
    /*==================sticky navbar ===============*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY> 100);
};


 /*==================scroll reveal ===============*/
 ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { original: 'top' });
ScrollReveal().reveal('.home-img, .gallery-box, .contact form', { original: 'bottom' });
ScrollReveal().reveal('.home-content h1, .heading', { original: 'left' });
ScrollReveal().reveal('.home-content p, .info-content', { original: 'right' });