let navIcon = document.querySelector('.mobile-manue');
let homeSection = document.querySelector('#home');
let header = document.querySelector('.header');
let nav = document.querySelector('nav');
var navheight = nav.getBoundingClientRect().height;

var sectionAll = document.querySelectorAll('section');
var AllNavitem = document.querySelectorAll('.manue li');

var projectFilter = document.querySelector('.project-filter');
var projectFilterlink = document.querySelectorAll('.project-filter-link');
var projectFilterItem = document.querySelectorAll('.project-item');
// mobile naviation-start
navIcon.addEventListener('click',()=>{
    navIcon.classList.toggle('active');
});
AllNavitem.forEach((e)=>{
    e.addEventListener('click',()=>{
        navIcon.classList.remove('active');
    });
})
// mobile naviation-end
// sticky navigation-start
let  observer = (entris)=>{
    const [entry] = entris;
    if (!entry.isIntersecting) {
        header.classList.add('sticky');
    }
    else{
        header.classList.remove('sticky');  
    }
}

const Headerobserve = new IntersectionObserver(observer,{
    root:null,
    threshold:0,
    rootMargin:`-${navheight}px`
});
Headerobserve.observe(homeSection);
// sticky navigation-end
// nav Item hilight color-start
window.addEventListener('scroll',()=>{
    let currunt = '';
    sectionAll.forEach(section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
            currunt = section.getAttribute('id');
        }
    });
    AllNavitem.forEach(li =>{
        li.classList.remove('active');
        if (li.classList.contains(currunt)) {
            li.classList.add('active');
        }
    });
});
// nav Item hilight color-end
// Project filter-start
projectFilter.addEventListener('click',(e)=>{
    const clicked = e.target.closest(".project-filter-link");
    if (!clicked) {
      return;
    }
    projectFilterlink.forEach((e)=>{
        e.classList.remove('active');
    })
    if (clicked) {
    clicked.classList.add('active');
    }
    var manueClicked = clicked.getAttribute('data-project');
    projectFilterItem.forEach((filter)=>{
        var projectData = filter.getAttribute('data-project');
        if (projectData === manueClicked || manueClicked === 'all') {
            filter.classList.remove('hide');
            filter.classList.add('show');
        }
        else{
            filter.classList.remove('show');
            filter.classList.add('hide');
        }
    });
});
// Project filter-end
// Client Slider-start
let sliders = document.querySelectorAll('.slider-items');
let slider = document.querySelector('.slider-items');
let btnLeft = document.querySelector('.slider__btn--left');
let btnRight = document.querySelector('.slider__btn--right');
let sliderControler = document.querySelector('.slider-contorler');

let curSlide = 0;
const maxSlide = sliders.length;
const goToSlide = (slide)=>{
    sliders.forEach((s,i)=>{
        s.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
}
goToSlide(0);
const nextSlide = function(){
    if (curSlide === maxSlide - 1) {
        curSlide = 0;
    }
    else{
        curSlide++;
    }
    goToSlide(curSlide);
}
btnRight.addEventListener('click',nextSlide);
const prevSlide = function(){
    if (curSlide === 0) {
        curSlide = maxSlide -1;
    }
    else{
        curSlide--;
    }
    goToSlide(curSlide);
}
btnLeft.addEventListener('click',prevSlide);
document.addEventListener('keydown',(e){
    if (e.key === 'ArrowLeft') {
        prevSlide();
    }
    e.key === 'ArrowRight' && nextSlide();
});
// Client Slider-end

