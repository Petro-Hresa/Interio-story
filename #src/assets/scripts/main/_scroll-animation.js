
const animItems = document.querySelectorAll('.scroll-animation');
const counterNumbers = document.querySelectorAll('.counter__number');
const speed = 200;

// last-project start function
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


// scroll animation
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

            }else{

              
                if(!animItem.classList.contains("animate-none")){
                    animItem.classList.remove("animation-active");
                }
                
                
            }
        }

     
    }

    // offset page 
    function offset(element){
        const rect = element.getBoundingClientRect();
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;

        return {top: rect.top + scrollTop , left: rect.Left + scrollLeft};
    }
}








       
