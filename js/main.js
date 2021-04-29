let navIcon = document.querySelector('.mobile-manue');
let homeSection = document.querySelector('#home');
let header = document.querySelector('.header');
let nav = document.querySelector('nav');
var navheight = nav.getBoundingClientRect().height;

var sectionAll = document.querySelectorAll('section');
var AllNavitem = document.querySelectorAll('.manue li');

let projectFilterlink = document.querySelectorAll('.project-filter-link');
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
projectFilterlink.forEach((e)=>{
    console.log(e);
    e.addEventListener('click',()=>{
       
    });
});
// Project filter-end


