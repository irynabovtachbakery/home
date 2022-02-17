const domain = document.querySelector('.tab1-href');

domain.addEventListener('click', function(){
    document.location.href = "https://bakeryiryna.github.io/home"
})

const tab2 = document.querySelector('.tab2');
const tab2Hrefs = tab2.children;

tab2Hrefs[1].addEventListener('click', function(){
    document.location.href = "https://bakeryiryna.github.io/home"
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