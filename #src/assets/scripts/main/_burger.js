let querSell = x => document.querySelector(x);

// click putton burger
(function(){

	querSell('.header__border-burger').addEventListener('click', function(){
          querSell('.sidebar').classList.toggle('sidebar-active');
          querSell('.container-body').classList.toggle('contant-active');
          querSell('.body').classList.toggle('lock');

        if(querSell('.sidebar').classList.contains('sidebar-active'))querSell('.header__inner').classList.add('inner-transform');
        else querSell('.header__inner').classList.remove('inner-transform');
        
     
	});

})()



// scroll fixed
let lastScroll = 150;
const scrollPosition = ()=>  window.pageYOffset;
const containHeight =()=> querSell('.header__inner').classList.contains("header-active");

window.addEventListener("scroll", function(){


    // Scrill down
        if(scrollPosition() >= lastScroll && !containHeight()){
            querSell('.header__inner').classList.add('header-active');


        }else if(scrollPosition() <= lastScroll && containHeight()){
            
            querSell('.header__inner').classList.remove('header-active');
        
        };
        
        lastScroll = scrollPosition();
   
})