
/*
document.addEventListener("DOMContentLoaded", function(){
    alert('Ви можете переглядати фото натискаючи на стрілки!')
})
*/

/*CUPCAKES__________________________________________________________________________*/



const sliderLine1 = document.querySelector('.cupcakes-slider-line');
let offset1 = 0;
const next1 = document.querySelector('.cupcakes-next');
const prev1 = document.querySelector('.cupcakes-prev');
const cupcakeDots = document.querySelector('.cupcakes-dots');
const cupcakeDotsChildren = cupcakeDots.children;

document.querySelector('.cupcakes-next').addEventListener('click', function(){
    offset1 = offset1 + 370 ;

    if (offset1 > 1110){
        offset1 = 0
    }    

    sliderLine1.style.left = -offset1 + 'px';
});


document.querySelector('.cupcakes-prev').addEventListener('click', function(){
    offset1 = offset1 - 370 ;

    if (offset1 < 0){
        offset1 = 1110
    }    
    
    sliderLine1.style.left = -offset1 + 'px';
});


document.querySelector('.cupcakes-next').addEventListener('click', function(){
    
    if(offset1 == 0){
        cupcakeDotsChildren[1].classList.remove('active');
        cupcakeDotsChildren[2].classList.remove('active');
        cupcakeDotsChildren[3].classList.remove('active');

        cupcakeDotsChildren[0].classList.add('active');
    }
    if(offset1 == 370){
        cupcakeDotsChildren[0].classList.remove('active');
        cupcakeDotsChildren[2].classList.remove('active');
        cupcakeDotsChildren[3].classList.remove('active');

        cupcakeDotsChildren[1].classList.add('active');
    }
    if(offset1 == 740){
        cupcakeDotsChildren[0].classList.remove('active');
        cupcakeDotsChildren[1].classList.remove('active');
        cupcakeDotsChildren[3].classList.remove('active');

        cupcakeDotsChildren[2].classList.add('active');
    }
    if(offset1 == 1110){
        cupcakeDotsChildren[0].classList.remove('active');
        cupcakeDotsChildren[1].classList.remove('active');
        cupcakeDotsChildren[2].classList.remove('active');

        cupcakeDotsChildren[3].classList.add('active');
    }
})


document.querySelector('.cupcakes-prev').addEventListener('click', function(){
    
    if(offset1 == 0){
        cupcakeDotsChildren[1].classList.remove('active');
        cupcakeDotsChildren[2].classList.remove('active');
        cupcakeDotsChildren[3].classList.remove('active');

        cupcakeDotsChildren[0].classList.add('active');
    }
    if(offset1 == 370){
        cupcakeDotsChildren[0].classList.remove('active');
        cupcakeDotsChildren[2].classList.remove('active');
        cupcakeDotsChildren[3].classList.remove('active');

        cupcakeDotsChildren[1].classList.add('active');
    }
    if(offset1 == 740){
        cupcakeDotsChildren[0].classList.remove('active');
        cupcakeDotsChildren[1].classList.remove('active');
        cupcakeDotsChildren[3].classList.remove('active');

        cupcakeDotsChildren[2].classList.add('active');
    }
    if(offset1 == 1110){
        cupcakeDotsChildren[0].classList.remove('active');
        cupcakeDotsChildren[1].classList.remove('active');
        cupcakeDotsChildren[2].classList.remove('active');

        cupcakeDotsChildren[3].classList.add('active');
    }
})





/*TOY-CAKES__________________________________________________________________________*/


const sliderLine2 = document.querySelector('.toy-slider-line');
let offset2 = 0;
const next2 = document.querySelector('.toy-next');
const prev2 = document.querySelector('.toy-prev');
const toyDots = document.querySelector('.toy-dots');
const toyDotsChildren = toyDots.children;

document.querySelector('.toy-next').addEventListener('click', function(){
    offset2 = offset2 + 370 ;

    if (offset2 > 1850){
        offset2 = 0
    }    

    sliderLine2.style.left = -offset2 + 'px';
});


document.querySelector('.toy-prev').addEventListener('click', function(){
    offset2 = offset2 - 370 ;

    if (offset2 < 0){
        offset2 = 1850
    }    
    
    sliderLine2.style.left = -offset2 + 'px';
});


document.querySelector('.toy-next').addEventListener('click', function(){
    
    if(offset2 == 0){
        toyDotsChildren[1].classList.remove('active');
        toyDotsChildren[2].classList.remove('active');
        toyDotsChildren[3].classList.remove('active');
        toyDotsChildren[4].classList.remove('active');
        toyDotsChildren[5].classList.remove('active');

        toyDotsChildren[0].classList.add('active');
    }
    if(offset2 == 370){
        toyDotsChildren[0].classList.remove('active');
        toyDotsChildren[2].classList.remove('active');
        toyDotsChildren[3].classList.remove('active');
        toyDotsChildren[4].classList.remove('active');
        toyDotsChildren[5].classList.remove('active');

        toyDotsChildren[1].classList.add('active');
    }
    if(offset2 == 740){
        toyDotsChildren[0].classList.remove('active');
        toyDotsChildren[1].classList.remove('active');
        toyDotsChildren[3].classList.remove('active');
        toyDotsChildren[4].classList.remove('active');
        toyDotsChildren[5].classList.remove('active');

        toyDotsChildren[2].classList.add('active');
    }
    if(offset2 == 1110){
        toyDotsChildren[0].classList.remove('active');
        toyDotsChildren[1].classList.remove('active');
        toyDotsChildren[2].classList.remove('active');
        toyDotsChildren[4].classList.remove('active');
        toyDotsChildren[5].classList.remove('active');

        toyDotsChildren[3].classList.add('active');
    }
    if(offset2 == 1480){
        toyDotsChildren[0].classList.remove('active');
        toyDotsChildren[1].classList.remove('active');
        toyDotsChildren[2].classList.remove('active');
        toyDotsChildren[3].classList.remove('active');
        toyDotsChildren[5].classList.remove('active');

        toyDotsChildren[4].classList.add('active');
    }
    if(offset2 == 1850){
        toyDotsChildren[0].classList.remove('active');
        toyDotsChildren[1].classList.remove('active');
        toyDotsChildren[2].classList.remove('active');
        toyDotsChildren[3].classList.remove('active');
        toyDotsChildren[4].classList.remove('active');

        toyDotsChildren[5].classList.add('active');
    }
})

document.querySelector('.toy-prev').addEventListener('click', function(){
    
    if(offset2 == 0){
        toyDotsChildren[1].classList.remove('active');
        toyDotsChildren[2].classList.remove('active');
        toyDotsChildren[3].classList.remove('active');
        toyDotsChildren[4].classList.remove('active');
        toyDotsChildren[5].classList.remove('active');

        toyDotsChildren[0].classList.add('active');
    }
    if(offset2 == 370){
        toyDotsChildren[0].classList.remove('active');
        toyDotsChildren[2].classList.remove('active');
        toyDotsChildren[3].classList.remove('active');
        toyDotsChildren[4].classList.remove('active');
        toyDotsChildren[5].classList.remove('active');

        toyDotsChildren[1].classList.add('active');
    }
    if(offset2 == 740){
        toyDotsChildren[0].classList.remove('active');
        toyDotsChildren[1].classList.remove('active');
        toyDotsChildren[3].classList.remove('active');
        toyDotsChildren[4].classList.remove('active');
        toyDotsChildren[5].classList.remove('active');

        toyDotsChildren[2].classList.add('active');
    }
    if(offset2 == 1110){
        toyDotsChildren[0].classList.remove('active');
        toyDotsChildren[1].classList.remove('active');
        toyDotsChildren[2].classList.remove('active');
        toyDotsChildren[4].classList.remove('active');
        toyDotsChildren[5].classList.remove('active');

        toyDotsChildren[3].classList.add('active');
    }
    if(offset2 == 1480){
        toyDotsChildren[0].classList.remove('active');
        toyDotsChildren[1].classList.remove('active');
        toyDotsChildren[2].classList.remove('active');
        toyDotsChildren[3].classList.remove('active');
        toyDotsChildren[5].classList.remove('active');

        toyDotsChildren[4].classList.add('active');
    }
    if(offset2 == 1850){
        toyDotsChildren[0].classList.remove('active');
        toyDotsChildren[1].classList.remove('active');
        toyDotsChildren[2].classList.remove('active');
        toyDotsChildren[3].classList.remove('active');
        toyDotsChildren[4].classList.remove('active');

        toyDotsChildren[5].classList.add('active');
    }

})

/*GIRL-CAKES__________________________________________________________________________*/


const sliderLine3 = document.querySelector('.girl-cake-slider-line');
let offset3 = 0;
const next3 = document.querySelector('.girl-cake-next');
const prev3 = document.querySelector('.girl-cake-prev');
const girlDots = document.querySelector('.girl-dots');
const girlDotsChildren = girlDots.children;

document.querySelector('.girl-cake-next').addEventListener('click', function(){
    offset3 = offset3 + 370 ;

    if (offset3 > 1850){
        offset3 = 0
    }    

    sliderLine3.style.left = -offset3 + 'px';
});


document.querySelector('.girl-cake-prev').addEventListener('click', function(){
    offset3 = offset3 - 370 ;

    if (offset3 < 0){
        offset3 = 1850
    }    
    
    sliderLine3.style.left = -offset3 + 'px';
});

document.querySelector('.girl-cake-next').addEventListener('click', function(){
    
    if(offset3 == 0){
        girlDotsChildren[1].classList.remove('active');
        girlDotsChildren[2].classList.remove('active');
        girlDotsChildren[3].classList.remove('active');
        girlDotsChildren[4].classList.remove('active');
        girlDotsChildren[5].classList.remove('active');

        girlDotsChildren[0].classList.add('active');
    }
    if(offset3 == 370){
        girlDotsChildren[0].classList.remove('active');
        girlDotsChildren[2].classList.remove('active');
        girlDotsChildren[3].classList.remove('active');
        girlDotsChildren[4].classList.remove('active');
        girlDotsChildren[5].classList.remove('active');

        girlDotsChildren[1].classList.add('active');
    }
    if(offset3 == 740){
        girlDotsChildren[0].classList.remove('active');
        girlDotsChildren[1].classList.remove('active');
        girlDotsChildren[3].classList.remove('active');
        girlDotsChildren[4].classList.remove('active');
        girlDotsChildren[5].classList.remove('active');

        girlDotsChildren[2].classList.add('active');
    }
    if(offset3 == 1110){
        girlDotsChildren[0].classList.remove('active');
        girlDotsChildren[1].classList.remove('active');
        girlDotsChildren[2].classList.remove('active');
        girlDotsChildren[4].classList.remove('active');
        girlDotsChildren[5].classList.remove('active');

        girlDotsChildren[3].classList.add('active');
    }
    if(offset3 == 1480){
        girlDotsChildren[0].classList.remove('active');
        girlDotsChildren[1].classList.remove('active');
        girlDotsChildren[2].classList.remove('active');
        girlDotsChildren[3].classList.remove('active');
        girlDotsChildren[5].classList.remove('active');

        girlDotsChildren[4].classList.add('active');
    }
    if(offset3 == 1850){
        girlDotsChildren[0].classList.remove('active');
        girlDotsChildren[1].classList.remove('active');
        girlDotsChildren[2].classList.remove('active');
        girlDotsChildren[3].classList.remove('active');
        girlDotsChildren[4].classList.remove('active');

        girlDotsChildren[5].classList.add('active');
    }
})

document.querySelector('.girl-cake-prev').addEventListener('click', function(){
    
    if(offset3 == 0){
        girlDotsChildren[1].classList.remove('active');
        girlDotsChildren[2].classList.remove('active');
        girlDotsChildren[3].classList.remove('active');
        girlDotsChildren[4].classList.remove('active');
        girlDotsChildren[5].classList.remove('active');

        girlDotsChildren[0].classList.add('active');
    }
    if(offset3 == 370){
        girlDotsChildren[0].classList.remove('active');
        girlDotsChildren[2].classList.remove('active');
        girlDotsChildren[3].classList.remove('active');
        girlDotsChildren[4].classList.remove('active');
        girlDotsChildren[5].classList.remove('active');

        girlDotsChildren[1].classList.add('active');
    }
    if(offset3 == 740){
        girlDotsChildren[0].classList.remove('active');
        girlDotsChildren[1].classList.remove('active');
        girlDotsChildren[3].classList.remove('active');
        girlDotsChildren[4].classList.remove('active');
        girlDotsChildren[5].classList.remove('active');

        girlDotsChildren[2].classList.add('active');
    }
    if(offset3 == 1110){
        girlDotsChildren[0].classList.remove('active');
        girlDotsChildren[1].classList.remove('active');
        girlDotsChildren[2].classList.remove('active');
        girlDotsChildren[4].classList.remove('active');
        girlDotsChildren[5].classList.remove('active');

        girlDotsChildren[3].classList.add('active');
    }
    if(offset3 == 1480){
        girlDotsChildren[0].classList.remove('active');
        girlDotsChildren[1].classList.remove('active');
        girlDotsChildren[2].classList.remove('active');
        girlDotsChildren[3].classList.remove('active');
        girlDotsChildren[5].classList.remove('active');

        girlDotsChildren[4].classList.add('active');
    }
    if(offset3 == 1850){
        girlDotsChildren[0].classList.remove('active');
        girlDotsChildren[1].classList.remove('active');
        girlDotsChildren[2].classList.remove('active');
        girlDotsChildren[3].classList.remove('active');
        girlDotsChildren[4].classList.remove('active');

        girlDotsChildren[5].classList.add('active');
    }
})


/*WOMANS1__________________________________________________________________________*/


const sliderLine4 = document.querySelector('.woman-slider1-line');
let offset4 = 0;
const next4 = document.querySelector('.woman1-next');
const prev4 = document.querySelector('.woman1-prev');
const woman1Dots = document.querySelector('.woman1-dots');
const woman1DotsChildren = woman1Dots.children;

document.querySelector('.woman1-next').addEventListener('click', function(){
    offset4 = offset4 + 486 ;

    if (offset4 > 1458){
        offset4 = 0
    }    

    sliderLine4.style.left = -offset4 + 'px';
});


document.querySelector('.woman1-prev').addEventListener('click', function(){
    offset4 = offset4 - 486 ;

    if (offset4 < 0){
        offset4 = 1458
    }    
    
    sliderLine4.style.left = -offset4 + 'px';
});


document.querySelector('.woman1-next').addEventListener('click', function(){
    
    if(offset4 == 0){
        woman1DotsChildren[1].classList.remove('active');
        woman1DotsChildren[2].classList.remove('active');
        woman1DotsChildren[3].classList.remove('active');

        woman1DotsChildren[0].classList.add('active');
    }
    if(offset4 == 486){
        woman1DotsChildren[0].classList.remove('active');
        woman1DotsChildren[2].classList.remove('active');
        woman1DotsChildren[3].classList.remove('active');

        woman1DotsChildren[1].classList.add('active');
    }
    if(offset4 == 972){
        woman1DotsChildren[0].classList.remove('active');
        woman1DotsChildren[1].classList.remove('active');
        woman1DotsChildren[3].classList.remove('active');

        woman1DotsChildren[2].classList.add('active');
    }
    if(offset4 == 1458){
        woman1DotsChildren[0].classList.remove('active');
        woman1DotsChildren[1].classList.remove('active');
        woman1DotsChildren[2].classList.remove('active');

        woman1DotsChildren[3].classList.add('active');
    }
});

document.querySelector('.woman1-prev').addEventListener('click', function(){
    
    if(offset4 == 0){
        woman1DotsChildren[1].classList.remove('active');
        woman1DotsChildren[2].classList.remove('active');
        woman1DotsChildren[3].classList.remove('active');

        woman1DotsChildren[0].classList.add('active');
    }
    if(offset4 == 486){
        woman1DotsChildren[0].classList.remove('active');
        woman1DotsChildren[2].classList.remove('active');
        woman1DotsChildren[3].classList.remove('active');

        woman1DotsChildren[1].classList.add('active');
    }
    if(offset4 == 972){
        woman1DotsChildren[0].classList.remove('active');
        woman1DotsChildren[1].classList.remove('active');
        woman1DotsChildren[3].classList.remove('active');

        woman1DotsChildren[2].classList.add('active');
    }
    if(offset4 == 1458){
        woman1DotsChildren[0].classList.remove('active');
        woman1DotsChildren[1].classList.remove('active');
        woman1DotsChildren[2].classList.remove('active');

        woman1DotsChildren[3].classList.add('active');
    }
});


/*WOMANS2__________________________________________________________________________*/


const sliderLine5 = document.querySelector('.woman-slider2-line');
let offset5 = 0;
const next5 = document.querySelector('.woman2-next');
const prev5 = document.querySelector('.woman2-prev');
const woman2Dots = document.querySelector('.woman2-dots');
const woman2DotsChildren = woman2Dots.children;

document.querySelector('.woman2-next').addEventListener('click', function(){
    offset5 = offset5 + 486 ;

    if (offset5 > 1458){
        offset5 = 0
    }    

    sliderLine5.style.left = -offset5 + 'px';
});


document.querySelector('.woman2-prev').addEventListener('click', function(){
    offset5 = offset5 - 486 ;

    if (offset5 < 0){
        offset5 = 1458
    }    
    
    sliderLine5.style.left = -offset5 + 'px';
});

document.querySelector('.woman2-next').addEventListener('click', function(){
    
    if(offset5 == 0){
        woman2DotsChildren[1].classList.remove('active');
        woman2DotsChildren[2].classList.remove('active');
        woman2DotsChildren[3].classList.remove('active');

        woman2DotsChildren[0].classList.add('active');
    }
    if(offset5 == 486){
        woman2DotsChildren[0].classList.remove('active');
        woman2DotsChildren[2].classList.remove('active');
        woman2DotsChildren[3].classList.remove('active');

        woman2DotsChildren[1].classList.add('active');
    }
    if(offset5 == 972){
        woman2DotsChildren[0].classList.remove('active');
        woman2DotsChildren[1].classList.remove('active');
        woman2DotsChildren[3].classList.remove('active');

        woman2DotsChildren[2].classList.add('active');
    }
    if(offset5 == 1458){
        woman2DotsChildren[0].classList.remove('active');
        woman2DotsChildren[1].classList.remove('active');
        woman2DotsChildren[2].classList.remove('active');

        woman2DotsChildren[3].classList.add('active');
    }
});


document.querySelector('.woman2-prev').addEventListener('click', function(){
    
    if(offset5 == 0){
        woman2DotsChildren[1].classList.remove('active');
        woman2DotsChildren[2].classList.remove('active');
        woman2DotsChildren[3].classList.remove('active');

        woman2DotsChildren[0].classList.add('active');
    }
    if(offset5 == 486){
        woman2DotsChildren[0].classList.remove('active');
        woman2DotsChildren[2].classList.remove('active');
        woman2DotsChildren[3].classList.remove('active');

        woman2DotsChildren[1].classList.add('active');
    }
    if(offset5 == 972){
        woman2DotsChildren[0].classList.remove('active');
        woman2DotsChildren[1].classList.remove('active');
        woman2DotsChildren[3].classList.remove('active');

        woman2DotsChildren[2].classList.add('active');
    }
    if(offset5 == 1458){
        woman2DotsChildren[0].classList.remove('active');
        woman2DotsChildren[1].classList.remove('active');
        woman2DotsChildren[2].classList.remove('active');

        woman2DotsChildren[3].classList.add('active');
    }
});


/*MANS1*/


const sliderLine6 = document.querySelector('.man-slider1-line');
let offset6 = 0;
const next6 = document.querySelector('.man1-next');
const prev6 = document.querySelector('.man1-prev');
const man1Dots = document.querySelector('.man1-dots');
const man1DotsChildren = man1Dots.children;

document.querySelector('.man1-next').addEventListener('click', function(){
    offset6 = offset6 + 370 ;

    if (offset6 > 1480){
        offset6 = 0
    }    

    sliderLine6.style.left = -offset6 + 'px';
});


document.querySelector('.man1-prev').addEventListener('click', function(){
    offset6 = offset6 - 370 ;

    if (offset6 < 0){
        offset6 = 1480
    }    
    
    sliderLine6.style.left = -offset6 + 'px';
});
document.querySelector('.man1-next').addEventListener('click', function(){
    
    if(offset6 == 0){
        man1DotsChildren[1].classList.remove('active');
        man1DotsChildren[2].classList.remove('active');
        man1DotsChildren[3].classList.remove('active');
        man1DotsChildren[4].classList.remove('active');

        man1DotsChildren[0].classList.add('active');
    }
    if(offset6 == 370){
        man1DotsChildren[0].classList.remove('active');
        man1DotsChildren[2].classList.remove('active');
        man1DotsChildren[3].classList.remove('active');
        man1DotsChildren[4].classList.remove('active');

        man1DotsChildren[1].classList.add('active');
    }
    if(offset6 == 740){
        man1DotsChildren[0].classList.remove('active');
        man1DotsChildren[1].classList.remove('active');
        man1DotsChildren[3].classList.remove('active');
        man1DotsChildren[4].classList.remove('active');

        man1DotsChildren[2].classList.add('active');
    }
    if(offset6 == 1110){
        man1DotsChildren[0].classList.remove('active');
        man1DotsChildren[1].classList.remove('active');
        man1DotsChildren[2].classList.remove('active');
        man1DotsChildren[4].classList.remove('active');

        man1DotsChildren[3].classList.add('active');
    }
    if(offset6 == 1480){
        man1DotsChildren[0].classList.remove('active');
        man1DotsChildren[1].classList.remove('active');
        man1DotsChildren[2].classList.remove('active');
        man1DotsChildren[3].classList.remove('active');

        man1DotsChildren[4].classList.add('active');
    }
});

document.querySelector('.man1-prev').addEventListener('click', function(){
    
    if(offset6 == 0){
        man1DotsChildren[1].classList.remove('active');
        man1DotsChildren[2].classList.remove('active');
        man1DotsChildren[3].classList.remove('active');
        man1DotsChildren[4].classList.remove('active');

        man1DotsChildren[0].classList.add('active');
    }
    if(offset6 == 370){
        man1DotsChildren[0].classList.remove('active');
        man1DotsChildren[2].classList.remove('active');
        man1DotsChildren[3].classList.remove('active');
        man1DotsChildren[4].classList.remove('active');

        man1DotsChildren[1].classList.add('active');
    }
    if(offset6 == 740){
        man1DotsChildren[0].classList.remove('active');
        man1DotsChildren[1].classList.remove('active');
        man1DotsChildren[3].classList.remove('active');
        man1DotsChildren[4].classList.remove('active');

        man1DotsChildren[2].classList.add('active');
    }
    if(offset6 == 1110){
        man1DotsChildren[0].classList.remove('active');
        man1DotsChildren[1].classList.remove('active');
        man1DotsChildren[2].classList.remove('active');
        man1DotsChildren[4].classList.remove('active');

        man1DotsChildren[3].classList.add('active');
    }
    if(offset6 == 1480){
        man1DotsChildren[0].classList.remove('active');
        man1DotsChildren[1].classList.remove('active');
        man1DotsChildren[2].classList.remove('active');
        man1DotsChildren[3].classList.remove('active');

        man1DotsChildren[4].classList.add('active');
    }
});

/*MANS2*/


const sliderLine7 = document.querySelector('.man-slider2-line');
let offset7 = 0;
const next7 = document.querySelector('.man2-next');
const prev7 = document.querySelector('.man2-prev');
const man2Dots = document.querySelector('.man2-dots');
const man2DotsChildren = man2Dots.children;

document.querySelector('.man2-next').addEventListener('click', function(){
    offset7 = offset7 + 370 ;

    if (offset7 > 1480){
        offset7 = 0
    }    

    sliderLine7.style.left = -offset7 + 'px';
});


document.querySelector('.man2-prev').addEventListener('click', function(){
    offset7 = offset7 - 370 ;

    if (offset7 < 0){
        offset7 = 1480
    }    
    
    sliderLine7.style.left = -offset7 + 'px';
});

document.querySelector('.man2-next').addEventListener('click', function(){
    
    if(offset7 == 0){
        man2DotsChildren[1].classList.remove('active');
        man2DotsChildren[2].classList.remove('active');
        man2DotsChildren[3].classList.remove('active');
        man2DotsChildren[4].classList.remove('active');

        man2DotsChildren[0].classList.add('active');
    }
    if(offset7 == 370){
        man2DotsChildren[0].classList.remove('active');
        man2DotsChildren[2].classList.remove('active');
        man2DotsChildren[3].classList.remove('active');
        man2DotsChildren[4].classList.remove('active');

        man2DotsChildren[1].classList.add('active');
    }
    if(offset7 == 740){
        man2DotsChildren[0].classList.remove('active');
        man2DotsChildren[1].classList.remove('active');
        man2DotsChildren[3].classList.remove('active');
        man2DotsChildren[4].classList.remove('active');

        man2DotsChildren[2].classList.add('active');
    }
    if(offset7 == 1110){
        man2DotsChildren[0].classList.remove('active');
        man2DotsChildren[1].classList.remove('active');
        man2DotsChildren[2].classList.remove('active');
        man2DotsChildren[4].classList.remove('active');

        man2DotsChildren[3].classList.add('active');
    }
    if(offset7 == 1480){
        man2DotsChildren[0].classList.remove('active');
        man2DotsChildren[1].classList.remove('active');
        man2DotsChildren[2].classList.remove('active');
        man2DotsChildren[3].classList.remove('active');

        man2DotsChildren[4].classList.add('active');
    }
});


document.querySelector('.man2-prev').addEventListener('click', function(){
    
    if(offset7 == 0){
        man2DotsChildren[1].classList.remove('active');
        man2DotsChildren[2].classList.remove('active');
        man2DotsChildren[3].classList.remove('active');
        man2DotsChildren[4].classList.remove('active');

        man2DotsChildren[0].classList.add('active');
    }
    if(offset7 == 370){
        man2DotsChildren[0].classList.remove('active');
        man2DotsChildren[2].classList.remove('active');
        man2DotsChildren[3].classList.remove('active');
        man2DotsChildren[4].classList.remove('active');

        man2DotsChildren[1].classList.add('active');
    }
    if(offset7 == 740){
        man2DotsChildren[0].classList.remove('active');
        man2DotsChildren[1].classList.remove('active');
        man2DotsChildren[3].classList.remove('active');
        man2DotsChildren[4].classList.remove('active');

        man2DotsChildren[2].classList.add('active');
    }
    if(offset7 == 1110){
        man2DotsChildren[0].classList.remove('active');
        man2DotsChildren[1].classList.remove('active');
        man2DotsChildren[2].classList.remove('active');
        man2DotsChildren[4].classList.remove('active');

        man2DotsChildren[3].classList.add('active');
    }
    if(offset7 == 1480){
        man2DotsChildren[0].classList.remove('active');
        man2DotsChildren[1].classList.remove('active');
        man2DotsChildren[2].classList.remove('active');
        man2DotsChildren[3].classList.remove('active');

        man2DotsChildren[4].classList.add('active');
    }
});


/*WEDDING*/


const sliderLine8 = document.querySelector('.wedding-slider-line');
let offset8 = 0;
const next8 = document.querySelector('.wedding-next');
const prev8 = document.querySelector('.wedding-prev');
const weddingDots = document.querySelector('.wedding-dots');
const weddingDotsChildren = weddingDots.children;

document.querySelector('.wedding-next').addEventListener('click', function(){
    offset8 = offset8 + 370 ;

    if (offset8 > 740){
        offset8 = 0
    }    

    sliderLine8.style.left = -offset8 + 'px';
});


document.querySelector('.wedding-prev').addEventListener('click', function(){
    offset8 = offset8 - 370 ;

    if (offset8 < 0){
        offset8 = 740
    }    
    
    sliderLine8.style.left = -offset8 + 'px';
});

document.querySelector('.wedding-next').addEventListener('click', function(){
    
    if(offset8 == 0){
        weddingDotsChildren[1].classList.remove('active');
        weddingDotsChildren[2].classList.remove('active');


        weddingDotsChildren[0].classList.add('active');
    }
    if(offset8 == 370){
        weddingDotsChildren[0].classList.remove('active');
        weddingDotsChildren[2].classList.remove('active');


        weddingDotsChildren[1].classList.add('active');
    }
    if(offset8 == 740){
        weddingDotsChildren[0].classList.remove('active');
        weddingDotsChildren[1].classList.remove('active');


        weddingDotsChildren[2].classList.add('active');
    }

});

document.querySelector('.wedding-prev').addEventListener('click', function(){
    
    if(offset8 == 0){
        weddingDotsChildren[1].classList.remove('active');
        weddingDotsChildren[2].classList.remove('active');


        weddingDotsChildren[0].classList.add('active');
    }
    if(offset8 == 370){
        weddingDotsChildren[0].classList.remove('active');
        weddingDotsChildren[2].classList.remove('active');


        weddingDotsChildren[1].classList.add('active');
    }
    if(offset8 == 740){
        weddingDotsChildren[0].classList.remove('active');
        weddingDotsChildren[1].classList.remove('active');


        weddingDotsChildren[2].classList.add('active');
    }

});