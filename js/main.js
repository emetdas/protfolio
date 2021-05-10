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
// All-Navigation-item-start
var allNavitem = document.querySelector('.manue');
allNavitem.addEventListener('click',(e)=>{
  e.preventDefault();
  var link_target = e.target.closest('li a');
  var href = link_target.getAttribute('href');
  if (!link_target || href == null) {
    return false;
  }
  if (href !== '#') {
    document.querySelector(href).scrollIntoView({
      behavior: "smooth"
   });
  }
});
// All-Navigation-item-end
// home-action-btn-clicked-to-scroll-start
let home_action_btn = document.querySelectorAll('.btn-action-home');
home_action_btn.forEach((e)=>{
  e.addEventListener('click',(e)=>{
    e.preventDefault();
    var action_btn = home_action_btn.getAttribute('href');
    if (!action_btn || action_btn == null) {
      return false;
    }
    if (action_btn !== '#') {
      document.querySelector(action_btn).scrollIntoView({
        behavior: "smooth"
     });
    }
  });
})
// home-action-btn-clicked-to-scroll-end
// mobile naviation-start
navIcon.addEventListener('click', () => {
  navIcon.classList.toggle('active');
});
AllNavitem.forEach((e) => {
  e.addEventListener('click', () => {
    navIcon.classList.remove('active');
  });
});
// mobile naviation-end
// sticky navigation-start
let observer = (entris) => {
  const [entry] = entris;
  if (!entry.isIntersecting) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

const Headerobserve = new IntersectionObserver(observer, {
  root: null,
  threshold: 0,
  rootMargin: `-${navheight}px`,
});
Headerobserve.observe(homeSection);
// sticky navigation-end
// nav Item hilight color-start
window.addEventListener('scroll', () => {
  let currunt = '';
  sectionAll.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      currunt = section.getAttribute('id');
    }
  });
  AllNavitem.forEach((li) => {
    li.classList.remove('active');
    if (li.classList.contains(currunt)) {
      li.classList.add('active');
    }
  });
});
// nav Item hilight color-end
// Scroll-to Bottom-start
var scrollFeature = document.querySelector('.scroll-fature');
var FeatureSection = document.querySelector('#feature');
scrollFeature.addEventListener('click', () => {
  FeatureSection.scrollIntoView({ behavior: 'smooth' });
});
// Scroll-to Bottom-end
// Project filter-start
projectFilter.addEventListener('click', (e) => {
  const clicked = e.target.closest('.project-filter-link');
  if (!clicked) {
    return;
  }
  projectFilterlink.forEach((e) => {
    e.classList.remove('active');
  });
  if (clicked) {
    clicked.classList.add('active');
  }
  var manueClicked = clicked.getAttribute('data-project');
  projectFilterItem.forEach((filter) => {
    var projectData = filter.getAttribute('data-project');
    if (projectData === manueClicked || manueClicked === 'all') {
      filter.classList.remove('hide');
      filter.classList.add('show');
    } else {
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

let creatDots = function () {
  sliders.forEach((_, i) => {
    sliderControler.insertAdjacentHTML(
      'beforeend',
      `<span class="controler-dot" data-dot="${i}"></span>`
    );
  });
};
creatDots();
const acivetDot = function (slide) {
  document
    .querySelectorAll('.controler-dot')
    .forEach((dot) => dot.classList.remove('active'));
  document
    .querySelector(`.controler-dot[data-dot="${slide}"]`)
    .classList.add('active');
};

acivetDot(0);
let curSlide = 0;
const maxSlide = sliders.length;
const goToSlide = (slide) => {
  sliders.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};
goToSlide(0);
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
  acivetDot(curSlide);
};
btnRight.addEventListener('click', nextSlide);
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
  acivetDot(curSlide);
};
btnLeft.addEventListener('click', prevSlide);
document.addEventListener('keydown', (e) => {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  }
  e.key === 'ArrowRight' && nextSlide();
});

sliderControler.addEventListener('click', (e) => {
  if (e.target.classList.contains('controler-dot')) {
    const { dot } = e.target.dataset;
    goToSlide(dot);
    acivetDot(dot);
  }
});
setInterval(nextSlide, 8000);
// Client Slider-end
// Skill Progressbar-start
let progess = document.querySelectorAll('.progess');
progess.forEach((e) => {
  var persent = e.dataset.progress;
  e.style.width = `${persent}%`;
});
// Skill Progressbar-end
// project-counter-animation-start
let section_Project_counter = document.querySelector('.project-counter');
let project_observ = (entris, ovserver) => {
  let [entry] = entris;
  if (entry.isIntersecting) {
    section_Project_counter.classList.add('slide-down');
    // Project-Counter-start
    let project_count = document.querySelectorAll('.project-count');
    let spreed = 1000;
    project_count.forEach((counter) => {
      const updateCount = () => {
        const target = +counter.dataset.project;
        const count = +counter.innerText;
        const inc = target / spreed;
        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 1);
        } else {
          count.innerText = target;
        }
      };
      updateCount();
    // Project-Counter-end
    });
    ovserver.unobserve(entry.target);
  }
};
let projectOvser = new IntersectionObserver(project_observ, {
  root: null,
  threshold: 0.1,
});
projectOvser.observe(section_Project_counter);
// project-counter-animation-end

// scrollToTop-start
let btn_scroll_top = document.querySelector('.scroll-to-top');
btn_scroll_top.addEventListener('click',(e)=>{
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});
function Scroll() {
  window.addEventListener('scroll',()=>{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      btn_scroll_top.classList.add('active');
    } else {
      btn_scroll_top.classList.remove('active');
    }
  });
}
Scroll();
if (window.innerWidth > 764) {
  btn_scroll_top.style.display = 'bolock';
}
else{
  btn_scroll_top.style.display = 'none';
}
// scrollToTop-end


