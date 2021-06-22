/*_Function  support browser webp css_*/
@@include('main/_burger.js');

@@include('main/_scroll-animation.js');

@@include('vendors/owl.carousel.min.js');



let headerInnerHeight = querSell('.header__inner').offsetHeight;
let contactFormInput = document.querySelector('.subscribe__input');
let contactFormLable = document.querySelector('.subscribe__label');


// resize page
window.addEventListener("resize", resizePage)
resizePage()

function resizePage(){

   if(window.innerWidth >= 992 && querSell('.sidebar').classList.contains('manu-active')){
        querSell('.sidebar').classList.remove('manu-active');
        querSell('.container-body').classList.remove('contant-active');
    } 

    if(window.innerWidth < 992 ) querSell('.header').style.height = `${headerInnerHeight}px`;
    else if(window.innerWidth > 992) querSell('.header').style.height = `0`; 
    

}




// input focus 
contactFormInput.onfocus =  function(){
    contactFormLable.style.opacity = "0";
}

contactFormInput.onblur =  function(){
    if(contactFormInput.value == "") contactFormLable.style.opacity = "1";
    else{
        contactFormLable.style.opacity = "1"
        contactFormInput.value = '';
    } 
   
}




$(document).ready(function(){

    // owl-carousel 
    $(".partners-carosel.owl-carousel").owlCarousel({
            items: 1,
        }
       
    );

    // Counter number 
    $('.counter__number').counterUp({
        delay: 10,
        time: 1200
    })

 


    //  button scroll up
    let btn = $('#button');

    $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
        btn.addClass('show');
    } else {
        btn.removeClass('show');
    }
    });

    btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '400');
    });
    
});
