const slides = document.querySelectorAll('.slide');

slides.forEach((slide) =>{
    slide.addEventListener('click',()=>{
        clearActiveClass();
        slide.classList.add('active');
    })
})



function clearActiveClass(){
    slides.forEach((slide)=>{
        slide.classList.remove('active')
    })
}

function randomTiv(max){
    return Math.round(Math.random()*max)
}

const index = randomTiv(slides.length-1);
slides[index].classList.add('active')


  