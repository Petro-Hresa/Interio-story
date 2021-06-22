

// class LastWorksGrid{

//   constructor(element, options = {}){
//     this.containerNode = element;
//     this.childrenNodes = element.children;

//     this.childrenData = Array.from( this.childrenNodes ).map(( childNode ) => ({ childNode }));
    
//     this.settings = {

//       responsive: options.responsive || {

//         0: {
//           gap: 10,
//           columns: 3
//         }

//       }

//     };

//     this.settingsSizes = Object.keys( this.settings.responsive ).map((item) => Number(item)).sort((a, b) => a - b);
    
//     this.resize = this.resize.bind(this);

//     this.setEvents();
//     this.setParameters();

//   }
    
//   setEvents(){

//     this.debouncedResize = debounce(this.resize);
//     window.addEventListener('resize', this.debouncedResize);

//   }


//   resize(){

//     this.setParameters();
//   }

//   setParameters(){

//     const containerWidth = this.containerNode.offsetWidth;
//       this.setCurrentSettings(containerWidth);

//       const widthItem = (containerWidth - this.settings.gap * (this.settings.columns - 1)) / this.settings.columns;
//       this.setWidth(widthItem);

//       this.childrenData = this.childrenData.map((child)=>({
//         ...child,
//         height: child.childNode.offsetHeight

//       }));

//       this.setSizeContainer();
//       this.setPosition(widthItem);

//   }

//   setCurrentSettings(containerWidth){

//     let currentSize = 0;
//     this.settingsSizes.forEach((size)=>{
//       if(containerWidth >= size) currentSize = size;
//     })

//     this.settings.columns = this.settings.responsive[currentSize].columns;
//     this.settings.gap = this.settings.responsive[currentSize].gap;

//   }

//   setWidth(widthItem){
//     this.childrenData.forEach((child) => child.childNode.style.width = `${widthItem}px`);
//   }


//   setSizeContainer(){

//     const heightColumns = new Array(this.settings.columns).fill(0);
//     this.childrenData.forEach((child , i) =>{

//       heightColumns[i % this.settings.columns] += child.height + this.settings.gap;

//     })

//     const maxHeightColumn = heightColumns.reduce((acc , size) => (size > acc) ? size : acc);
//     this.containerNode.style.height = `${maxHeightColumn - this.settings.gap}px`;

//   }

//   setPosition(widthItem){
//     const topSets = new Array(this.settings.columns).fill(0);
//     this.childrenData = this.childrenData.map(( child , i ) => {
//       const indexColumn = i % this.settings.columns;
//       const left = indexColumn * widthItem +this.settings.gap * indexColumn;
//       const top = topSets[indexColumn];
//       topSets[indexColumn] += child.height + this.settings.gap;

//       return {
//         ...child,
//         left,
//         top
//       }
//     })

//     this.childrenData.forEach((child)=>{
//       child.childNode.style.transform = `translate3d(${child.left}px, ${child.top}px, 0)`;
//     })

//   }

// }



// // helpers for resize in 100ms
// function debounce( func ,  time = 10 ){
//   let timer;
//   return function(event){
      
//     clearTimeout(timer);
//     timer = setTimeout(func, time, event)

//   }
// }


