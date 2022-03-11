var reducedMotionQuery = false;
var scrollBehavior = "smooth";


if (!(document.documentMode)) {
    if (typeof window.matchMedia === "function") {
        reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    }

    // Check if the media query matches or is not available.
    if (!reducedMotionQuery || reducedMotionQuery.matches) {
        scrollBehavior = "auto";
    }
}




const toUp = document.querySelector('.to-up');
toUp.addEventListener('click', function(){
    if(window.scrollY >= 0){
        window.scroll({
            top:  mediaQuery,
            left: 0,
            behavior: scrollBehavior
        });
        
    }

})




//DETAILS-TEXT_______________________________________

const btnDetailStart = document.querySelector('.start-btn');
const p1DetailsStart = document.querySelector('.p-start1');
const p2DetailsStart = document.querySelector('.p-start2');
const startWrapper = document.querySelector('.start-wrapper');
const bubles1 = document.querySelector('.bubles');



btnDetailStart.addEventListener('click', function moreContent(){
    p2DetailsStart.classList.toggle('active');
    btnDetailStart.classList.toggle('clicked')
    startWrapper.classList.toggle('active');
    bubles1.classList.toggle('active');

    if(btnDetailStart.innerHTML == "менше"){
        btnDetailStart.innerHTML = "більше"
    } else {
        btnDetailStart.innerHTML = "менше"
    }
});

const btnDetailAboutMe = document.querySelector('.about-me-btn');
const p1DetailsAboutMe = document.querySelector('.about-me-p1');
const p2DetailsAboutMe = document.querySelector('.about-me-p2');
const aboutMe = document.querySelector('.about-me')

btnDetailAboutMe.addEventListener('click', function moreContent(){
    p2DetailsAboutMe.classList.toggle('active');
    btnDetailAboutMe.classList.toggle('clicked');
    aboutMe.classList.toggle('active');
    document.querySelector('.about-me-text-wrapper').classList.toggle('active')

    if(btnDetailAboutMe.innerHTML == "менше"){
        btnDetailAboutMe.innerHTML = "більше"
    } else {
        btnDetailAboutMe.innerHTML = "менше"
    }
});


const btnDetailAboutCake = document.querySelector('.about-cake-btn');
const p1DetailsAboutCake = document.querySelector('.about-cake-p1');
const p2DetailsAboutCake = document.querySelector('.about-cake-p2');
const aboutCake = document.querySelector('.about-cake')

btnDetailAboutCake.addEventListener('click', function moreContent(){
    p2DetailsAboutCake.classList.toggle('active');
    btnDetailAboutCake.classList.toggle('clicked');
    aboutCake.classList.toggle('active');
    document.querySelector('.about-cake-text-wrapper').classList.toggle('active')

    if(btnDetailAboutCake.innerHTML == "менше"){
        btnDetailAboutCake.innerHTML = "більше"
    } else {
        btnDetailAboutCake.innerHTML = "менше"
    }
});




//SLIDER-ABOUT-ME_________________________________________
let offset1 = 0;
const sliderLine = document.querySelector('.about-me-slider-line');

document.querySelector('.about-me-slider-btn-next').addEventListener('click', function(){
    offset1 = offset1 + 426;
    if(offset1 > 1704){
        offset1 = 0
    }
    sliderLine.style.left = -offset1 + 'px';

});

document.querySelector('.about-me-slider-btn-prev').addEventListener('click', function(){
    offset1 = offset1 - 426;
    if(offset1 < 0){
        offset1 = 1704;
    }
    sliderLine.style.left = -offset1 + 'px';
});
//SLIDER-HOW-TO-ORDER_________________________________________

let offset2 = 0;
const sliderLine2 = document.querySelector('.how-to-order-slider-line');

document.querySelector('.how-to-order-btn-next').addEventListener('click', function(){
    offset2 = offset2 + 426;
    if(offset2 > 852){
        offset2 = 0
    }
    sliderLine2.style.left = -offset2 + 'px';

});

document.querySelector('.how-to-order-btn-prev').addEventListener('click', function(){
    offset2 = offset2 - 426;
    if(offset2 < 0){
        offset2 = 852;
    }
    sliderLine2.style.left = -offset2 + 'px';
});



//HREFS_________________________________________


const domain = document.querySelector('.tab1-href');

domain.addEventListener('click', function(){
    document.location.href = "https://irynabovtachbakery.github.io/home/"
})

const tab2 = document.querySelector('.tab2');
const tab2Hrefs = tab2.children;

tab2Hrefs[1].addEventListener('click', function(){
    document.location.href = "https://irynabovtachbakery.github.io/home/"
});

tab2Hrefs[2].addEventListener('click', function(){
    document.location.href = "nachunki.html"
});

tab2Hrefs[3].addEventListener('click', function(){
    document.location.href = "torty.html"
});

tab2Hrefs[4].addEventListener('click', function(){
    document.location.href = "zamovlenya.html"
});

const facebook = document.querySelector('.facebook');

facebook.addEventListener('click', function(){

    let url = "https://www.facebook.com/iryna.bovtach.bakery"

   window.open(url,'_blank')
})

const instagram = document.querySelector('.instagram');

instagram.addEventListener('click', function(){

    let url = "https://www.instagram.com/iryna_bovtach_bakery/";

    window.open(url,'_blank')

})





/*MEDIA__________________________________________________________________*/



  const mediaQuery = window.matchMedia('(max-width: 768px)')
  if (mediaQuery.matches) {
    let offset1 = 0;
    const sliderLine = document.querySelector('.about-me-slider-line');
    
    document.querySelector('.about-me-slider-btn-next').addEventListener('click', function(){
        offset1 = offset1 + 820;
        if(offset1 > 3280){
            offset1 = 0
        }
        sliderLine.style.left = -offset1 + 'px';
    
    });
    
    document.querySelector('.about-me-slider-btn-prev').addEventListener('click', function(){
        offset1 = offset1 - 820;
        if(offset1 < 0){
            offset1 = 3280;
        }
        sliderLine.style.left = -offset1 + 'px';
    });







    let offset2 = 0;
    const sliderLine2 = document.querySelector('.how-to-order-slider-line');
    
    document.querySelector('.how-to-order-btn-next').addEventListener('click', function(){
        offset2 = offset2 + 820;
        if(offset2 > 1640){
            offset2 = 0
        }
        sliderLine2.style.left = -offset2 + 'px';
    
    });
    
    document.querySelector('.how-to-order-btn-prev').addEventListener('click', function(){
        offset2 = offset2 - 820;
        if(offset2 < 0){
            offset2 = 1640;
        }
        sliderLine2.style.left = -offset2 + 'px';
    });

  }








  const menuIcon = document.querySelector('.menu-icon');

  menuIcon.addEventListener('click', function openMenu(){
    document.querySelector('.mobile-modal').classList.toggle('active');

    document.body.classList.toggle('active');
    
    menuIcon.classList.toggle('active');



      
      

      
  })





