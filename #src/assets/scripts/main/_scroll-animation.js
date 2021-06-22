
const animItems = document.querySelectorAll('.scroll-animation');
const counterNumbers = document.querySelectorAll('.counter__number');
const speed = 200;

let flag = false;


setTimeout(function(){

    let projectsItem =  document.querySelectorAll('.grid-item');
    let lastProjectsLink = document.querySelectorAll('.last-projects__link')
    if(window.innerHeight > 1000 ){

        lastProjectsLink.forEach(item =>{
            item.classList.add("animation-active");
    
        })
    }

    projectsItem.forEach(project =>{
        project.classList.add("animation-active");

    })
    
},60)



if(animItems.length > 0){
   
    window.addEventListener('scroll' , animationForScroll )

    animationForScroll();


    function animationForScroll(){
       
        for (let i = 0; i < animItems.length; i++){

            const animItem = animItems[i];
            const animItemsHeight = animItem.offsetHeight;
        

            const animItemsOffset = offset(animItem).top;
            const animStart = 1.2;

            let animItemPoint = window.innerHeight - animItemsHeight - animStart;

            if(animItemsHeight > window.innerHeight){

              animItemPoint = window.innerHeight - animItemsHeight - animStart;

           

            }

            if((pageYOffset > animItemsOffset - animItemPoint ) && pageYOffset < (animItemsOffset + animItemsHeight ) ){

                animItem.classList.add("animation-active");

                if(animItem.classList.contains("counter__number") && animItem.classList.contains("animation-active") && flag == false ){
                    // console.log(animItem)
                    // counterStart()  
                    flag = true
                
                }

                // if(number.classList.contains("animation-active")){
                   
                // }

             

            }else{

              
                if(!animItem.classList.contains("animate-none")){

       
                   
                    animItem.classList.remove("animation-active");
                }
                
                
            }
        }

     
    }

    function offset(element){
        const rect = element.getBoundingClientRect();
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        return {top: rect.top + scrollTop , left: rect.Left + scrollLeft};
    }
}







//  function counterStart(){
    // counterNumbers.forEach(number => { 
    //     console.log(number)
    
    //     const updateCount = () =>{
    //         // console.log(number)
    //         const numberTarget = +number.getAttribute('data-target');
    //         const numberInnerText = +number.innerText;
           
    //         const increment =  Math.round(numberTarget / speed);
               
    //         if(numberInnerText < numberTarget ){
    //             //   console.log(increment)
    //             number.innerText = numberInnerText + increment;
    //             setTimeout(updateCount, 1)

    //         }else number.innerText = numberTarget;
    //     }

       

    //     })
        // updateCount(); 
    // }              
        
    // counterStart() 
    
        

    		// jQuery Count To
		// if ( plugins.counter.length ) {
		// 	for ( var i = 0; i < plugins.counter.length; i++ ) {
		// 		var
		// 			counter = $(plugins.counter[i]),
		// 			initCount = function () {
		// 				var counter = $(this);
		// 				if ( !counter.hasClass( "animated-first" ) && isScrolledIntoView( counter ) ) {
		// 					counter.countTo({
		// 						refreshInterval: 40,
		// 						speed: counter.attr("data-speed") || 1000,
		// 						from: 0,
		// 						to: parseInt( counter.text(), 10 )
		// 					});
		// 					counter.addClass('animated-first');
		// 				}
		// 			};

		// 		$.proxy( initCount, counter )();
		// 		$window.on( "scroll", $.proxy( initCount, counter ) );
		// 	}
		// }

	// });
        
       
