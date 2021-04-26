let navIcon = document.querySelector('.mobile-manue');
let homeSection = document.querySelector('.home');
let header = document.querySelector('.header');
let nav = document.querySelector('nav');
// mobile naviation-start
navIcon.addEventListener('click',()=>{
    navIcon.classList.toggle('active');
});
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
    rootMargin:`-${100}px`
});
Headerobserve.observe(homeSection);
// sticky navigation-end





