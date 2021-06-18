/*_Function  support browser webp css_*/
@@include('main/_burger.js');
@@include('main/_last-works.js');
@@include('main/_scroll-animation.js');

@@include('vendors/owl.carousel.min.js');


const grid = document.querySelector('.grid');

window.setTimeout(function(){

    const msnry = new LastWorksGrid( grid, {

        responsive:{
          0:{
              columns: 1,
              gap: 20
          },
      
          576:{
              columns: 2,
              gap: 20
          },
      
          1400:{
              columns: 3,
              gap: 40
          }
      
        }
      });


}, 100)



let headerInnerHeight = querSell('.header__inner').offsetHeight;


window.addEventListener("resize", resizePage)
resizePage()

function resizePage(){
   if(window.innerWidth >= 992 && querSell('.sidebar').classList.contains('manu-active')){
        querSell('.sidebar').classList.remove('manu-active');
        querSell('.container-body').classList.remove('contant-active');
    } 

    if(window.innerWidth < 992 ){
      
        console.log(headerInnerHeight)
        querSell('.header').style.height = `${headerInnerHeight}px`;
    }else if(window.innerWidth > 992){
        querSell('.header').style.height = `0`; 
    }

}





$(document).ready(function(){

    $(".partners-carosel.owl-carousel").owlCarousel({
            items: 1,
        }
       
    );

    // setTimeout(function(){
    //     window.scrollTo(0, 0);
    // }, 1);
});

window.onload = function(){
    document.body.scrollTop = 0;
}