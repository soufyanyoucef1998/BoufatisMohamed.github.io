let boxes = document.querySelector('.skills');
let boxes1 = document.querySelector('.experience');
window.addEventListener('scroll',()=>{
   if(window.scrollY >= boxes.offsetTop - 100){
     
      boxes.classList.remove('skills')
      boxes.classList.add('sections1')

     
   }else if(window.scrollY >= boxes1.offsetTop - 200){
      boxes1.classList.remove('experience')
      boxes1.classList.add('sections2')
   }
})

