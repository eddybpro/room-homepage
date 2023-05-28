const menuBtn = document.querySelector('.menu'),
closeBtn = document.querySelector('.close'),
navLinksBox = document.querySelector('.nav-list'),
links = document.querySelectorAll('.nav-list li'),
imgSlides = document.querySelectorAll('.img-slide-box'),
nextBtn = document.querySelector('.next'),
prevBtn = document.querySelector('.prev'),
txtSlides = document.querySelectorAll('.txt-slide-box');

let index = 0;

menuBtn.addEventListener('click',navFn);
closeBtn.addEventListener('click',navFn);
links.forEach(link =>{
    link.addEventListener('click',navFn);
})

function navFn(){
    menuBtn.classList.toggle('none');
    closeBtn.classList.toggle('none');
    navLinksBox.classList.toggle('none');
    document.querySelector('main').classList.toggle('filter');
}

imgSlides.forEach((slide, idx)=>{
    slide.style.left=`${idx * 100}%`;
})

txtSlides.forEach((slide, idx)=>{
    slide.style.left=`${idx * 100}%`;
})

nextBtn.addEventListener('click', ()=>{
    index++;
    if(index > 2)index=0;
    slideFn();
})

prevBtn.addEventListener('click', ()=>{
    index--;
    if(index < 0)index=2;
    slideFn();
})

function slideFn(){
    imgSlides.forEach(slide=>{
        slide.style.transform= `translateX(-${index * 100}%)`;
    })

    txtSlides.forEach(slide=>{
        slide.style.transform= `translateX(-${index * 100}%)`;
    })
}


































