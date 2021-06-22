
const animItems = document.querySelectorAll('.scroll-animation');
const counterNumbers = document.querySelectorAll('.counter__number');
const speed = 200;


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

                if(animItem.classList.contains("counter__number") && animItem.classList.contains("animation-active") ){

                
                }

             

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





 function counterStart(){
counterNumbers.forEach(number => { 

           

    const updateCount = () =>{
        const numberTarget = +number.getAttribute('data-target');
        const numberInnerText = +number.innerText;

        const increment =  Math.round(numberTarget / speed);

        if(numberInnerText < numberTarget ){
            number.innerText = numberInnerText + increment;
            setTimeout(updateCount, 1)

        }else number.innerText = numberTarget;
    }

    updateCount()

       

    })
        
}              
        
            
        
       
