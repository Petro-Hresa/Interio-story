const animItems = document.querySelectorAll('.scroll-animation');

if(animItems.length > 0){
   
    window.addEventListener('scroll' , animationForScroll )
    window.addEventListener('reload', animationForScroll )
    animationForScroll();
    function animationForScroll(){
       
        for (let i = 0; i < animItems.length; i++){

            const animItem = animItems[i];
            const animItemsHeight = animItem.offsetHeight;

            const animItemsOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemsHeight - animStart;

            if(animItemsHeight > window.innerHeight){

              animItemPoint = window.innerHeight - animItemsHeight - animStart;

            }

            if((pageYOffset > animItemsOffset - animItemPoint ) && pageYOffset < (animItemsOffset + animItemsHeight ) ){

                animItem.classList.add("animation-active");

            }else{

                if(!animItem.classList.contains("animate-none"))animItem.classList.remove("animation-active");
                
                
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