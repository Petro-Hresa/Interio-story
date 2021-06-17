let querSell = x => document.querySelector(x);

(function(){

	querSell('.header__border-burger').addEventListener('click', function(){
          querSell('.sidebar').classList.toggle('manu-active');
          querSell('.container-body').classList.toggle('contant-active');

        if(querSell('.sidebar').classList.contains('manu-active')){
        //   querSell('.header__inner').classList.add('contant-active');
        }
       
     
	});

})()






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