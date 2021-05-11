"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]); if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var navIcon = document.querySelector('.mobile-manue');
var homeSection = document.querySelector('#home');
var header = document.querySelector('.header');
var nav = document.querySelector('nav');
var navheight = nav.getBoundingClientRect().height;
var sectionAll = document.querySelectorAll('section');
var AllNavitem = document.querySelectorAll('.manue li');
var projectFilter = document.querySelector('.project-filter');
var projectFilterlink = document.querySelectorAll('.project-filter-link');
var projectFilterItem = document.querySelectorAll('.project-item'); // All-Navigation-item-start

var allNavitem = document.querySelector('.manue');
allNavitem.addEventListener('click', function (e) {
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
}); // All-Navigation-item-end
// home-action-btn-clicked-to-scroll-start

var home_action_btn = document.querySelector('.action-conaitner');
home_action_btn.addEventListener('click', function (e) {
  e.preventDefault();
  var action_target = e.target.closest('a');
  var action_btn = action_target.getAttribute('href');

  if (!action_target || action_btn == null) {
    return false;
  }

  if (action_btn !== '#') {
    document.querySelector(action_btn).scrollIntoView({
      behavior: "smooth"
    });
  }
}); // home-action-btn-clicked-to-scroll-end
// mobile naviation-start

navIcon.addEventListener('click', function () {
  navIcon.classList.toggle('active');
});
AllNavitem.forEach(function (e) {
  e.addEventListener('click', function () {
    navIcon.classList.remove('active');
  });
}); // mobile naviation-end
// sticky navigation-start

var observer = function observer(entris) {
  var _entris = _slicedToArray(entris, 1),
      entry = _entris[0];

  if (!entry.isIntersecting) {
    header.classList.add('sticky');
  } else {
    header.classList.remove('sticky');
  }
};

var Headerobserve = new IntersectionObserver(observer, {
  root: null,
  threshold: 0,
  rootMargin: "-".concat(navheight, "px")
});
Headerobserve.observe(homeSection); // sticky navigation-end
// nav Item hilight color-start

window.addEventListener('scroll', function () {
  var currunt = '';
  sectionAll.forEach(function (section) {
    var sectionTop = section.offsetTop;
    var sectionHeight = section.clientHeight;

    if (pageYOffset >= sectionTop - sectionHeight / 2) {
      currunt = section.getAttribute('id');
    }
  });
  AllNavitem.forEach(function (li) {
    li.classList.remove('active');

    if (li.classList.contains(currunt)) {
      li.classList.add('active');
    }
  });
}); // nav Item hilight color-end
// Scroll-to Bottom-start

var scrollFeature = document.querySelector('.scroll-fature');
var FeatureSection = document.querySelector('#feature');
scrollFeature.addEventListener('click', function () {
  FeatureSection.scrollIntoView({
    behavior: 'smooth'
  });
}); // Scroll-to Bottom-end
// Project filter-start

projectFilter.addEventListener('click', function (e) {
  var clicked = e.target.closest('.project-filter-link');

  if (!clicked) {
    return;
  }

  projectFilterlink.forEach(function (e) {
    e.classList.remove('active');
  });

  if (clicked) {
    clicked.classList.add('active');
  }

  var manueClicked = clicked.getAttribute('data-project');
  projectFilterItem.forEach(function (filter) {
    var projectData = filter.getAttribute('data-project');

    if (projectData === manueClicked || manueClicked === 'all') {
      filter.classList.remove('hide');
      filter.classList.add('show');
    } else {
      filter.classList.remove('show');
      filter.classList.add('hide');
    }
  });
}); // Project filter-end
// Client Slider-start

var sliders = document.querySelectorAll('.slider-items');
var slider = document.querySelector('.slider-items');
var btnLeft = document.querySelector('.slider__btn--left');
var btnRight = document.querySelector('.slider__btn--right');
var sliderControler = document.querySelector('.slider-contorler');

var creatDots = function creatDots() {
  sliders.forEach(function (_, i) {
    sliderControler.insertAdjacentHTML('beforeend', "<span class=\"controler-dot\" data-dot=\"".concat(i, "\"></span>"));
  });
};

creatDots();

var acivetDot = function acivetDot(slide) {
  document.querySelectorAll('.controler-dot').forEach(function (dot) {
    return dot.classList.remove('active');
  });
  document.querySelector(".controler-dot[data-dot=\"".concat(slide, "\"]")).classList.add('active');
};

acivetDot(0);
var curSlide = 0;
var maxSlide = sliders.length;

var goToSlide = function goToSlide(slide) {
  sliders.forEach(function (s, i) {
    s.style.transform = "translateX(".concat(100 * (i - slide), "%)");
  });
};

goToSlide(0);

var nextSlide = function nextSlide() {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }

  goToSlide(curSlide);
  acivetDot(curSlide);
};

btnRight.addEventListener('click', nextSlide);

var prevSlide = function prevSlide() {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }

  goToSlide(curSlide);
  acivetDot(curSlide);
};

btnLeft.addEventListener('click', prevSlide);
document.addEventListener('keydown', function (e) {
  if (e.key === 'ArrowLeft') {
    prevSlide();
  }

  e.key === 'ArrowRight' && nextSlide();
});
sliderControler.addEventListener('click', function (e) {
  if (e.target.classList.contains('controler-dot')) {
    var dot = e.target.dataset.dot;
    goToSlide(dot);
    acivetDot(dot);
  }
});
setInterval(nextSlide, 8000); // Client Slider-end
// Skill Progressbar-start

var progess = document.querySelectorAll('.progess');
progess.forEach(function (e) {
  var persent = e.dataset.progress;
  e.style.width = "".concat(persent, "%");
}); // Skill Progressbar-end
// project-counter-animation-start

var section_Project_counter = document.querySelector('.project-counter');

var project_observ = function project_observ(entris, ovserver) {
  var _entris2 = _slicedToArray(entris, 1),
      entry = _entris2[0];

  if (entry.isIntersecting) {
    section_Project_counter.classList.add('slide-down'); // Project-Counter-start

    var project_count = document.querySelectorAll('.project-count');
    var spreed = 1000;
    project_count.forEach(function (counter) {
      var updateCount = function updateCount() {
        var target = +counter.dataset.project;
        var count = +counter.innerText;
        var inc = target / spreed;

        if (count < target) {
          counter.innerText = Math.ceil(count + inc);
          setTimeout(updateCount, 1);
        } else {
          count.innerText = target;
        }
      };

      updateCount(); // Project-Counter-end
    });
    ovserver.unobserve(entry.target);
  }
};

var projectOvser = new IntersectionObserver(project_observ, {
  root: null,
  threshold: 0.1
});
projectOvser.observe(section_Project_counter); // project-counter-animation-end
// scrollToTop-start

var btn_scroll_top = document.querySelector('.scroll-to-top');
btn_scroll_top.addEventListener('click', function (e) {
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
});

function Scroll() {
  window.addEventListener('scroll', function () {
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
} else {
  btn_scroll_top.style.display = 'none';
} // scrollToTop-end


var year = document.querySelector('.year');
year.innerText = new Date().getFullYear();