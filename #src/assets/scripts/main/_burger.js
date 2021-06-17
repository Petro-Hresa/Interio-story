let querSell = x => document.querySelector(x);

(function(){

	querSell('.header__border-burger').addEventListener('click', function(){
          querSell('.sidebar').classList.toggle('manu-active');
          querSell('.container-body').classList.toggle('contant-active');
     
	});

})()



document.getWindowX =  function(event){
    return  console.log(window.screenLeft)
}

$(document).ready(function(){
   $(window).scroll(function(){
   

   })

})

