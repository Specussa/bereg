// start height
let oldWidth = window.innerWidth;
const docheight = document.documentElement
docheight.style.setProperty('--height', `${window.innerHeight}px`);
const appHeight = () => {
  var newWidth = window.innerWidth;
  if (newWidth != oldWidth) {
    docheight.style.setProperty('--height', `${window.innerHeight}px`);
  }
  oldWidth = window.innerWidth;
}
window.addEventListener('resize', appHeight);
appHeight();
// end height

// start scroll
// scroll = new LocomotiveScroll({el: document.querySelector('[data-scroll-container]'),smooth:true,getDirection: true,scrollFromAnywhere: true,breakpoint: 0,lerp:0.05,mobile: {breakpoint: 0,smooth: true,inertia: 1,},tablet: {breakpoint: 0,smooth: true,inertia: 1,},smartphone: {breakpoint: 0,smooth: true,inertia: 1,}})
scroll = new LocomotiveScroll({el: document.querySelector('[data-scroll-container]'),smooth: true,getDirection: true,scrollFromAnywhere: true,breakpoint: 0,inertia: 0,tablet: {breakpoint: 0,smooth: false,inertia: 0,}})
new ResizeObserver(() => scroll.update()).observe(document.querySelector("[data-scroll-container]"));

const hn_scroll = document.querySelector('.header__nav_scroll');
const hc_scroll = document.querySelector('.header__consultation_scroll');
const cp_scroll = document.querySelector('.career_popup__scroll');
const fp_scroll = document.querySelector('.feedback_popup__scroll');
const gp_scroll = document.querySelector('.generation_popup__scroll');

// Scrollbar.init(hn_scroll);
// Scrollbar.init(hc_scroll);
// if (cp_scroll) {Scrollbar.init(cp_scroll);}
// if (fp_scroll) {Scrollbar.init(fp_scroll);}
// if (gp_scroll) {Scrollbar.init(gp_scroll);}

const header = document.querySelector('.header');
const projecttop = document.querySelector('.project_top');
const projecttopinfo = document.querySelector('.project_top__info');

if(projecttop && 
  projecttop.style.background !=  "rgb(255, 255, 255)" && 
  projecttop.style.background !=  "rgb(255, 251, 239)" && 
  projecttop.style.background !=  "rgb(233, 249, 249)" && 
  projecttop.style.background !=  "rgb(255, 248, 246)" && 
  projecttop.style.background !=  "var(--bg)"){
  header.classList.add('header__transparent');
  header.classList.add('project_top__white');
  projecttopinfo.classList.add('project_top__white');
} else if (projecttop && projecttop.style.background ==  "var(--bg)") {
  header.classList.add('project_top__bg');
  projecttopinfo.classList.add('project_top__bg');
}

const showreelbutton = document.querySelector('.showreel__button');
const showreel = document.querySelector('.showreel');
const pbbutton = document.querySelector('.project_banner__button');
const pbinview = document.querySelector('.project_banner__inview');
if (!document.querySelector('.has-scroll-smooth')) {
  let parallaxscrollY;
  parallaxscrollY = window.scrollY;
  if (showreel) {
    showreelbutton.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${parallaxscrollY - (document.querySelector('[data-persistent]').offsetTop - window.innerHeight)}, 0, 1)`;
  }
  if (pbbutton) {
    pbbutton.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${parallaxscrollY - (document.querySelector('[data-persistent]').offsetTop - window.innerHeight)}, 0, 1)`;
  }
}

scroll.on('scroll', (args) => {
  const headerprogress = document.querySelector('.header__progress_bar');
  if (document.querySelector('.has-scroll-smooth')) {
    var scrollY = Math.round(args["scroll"]["y"]);
    var scrollH = Math.round(args["limit"]["y"]);
    let scrollheader = Math.round((scrollY / scrollH) * 100);
    headerprogress.style.flexBasis = scrollheader + '%';
  } else {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    let documentHeight = Math.max(
      window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
    );
    let scrollpage = Math.round((scrollTop / (documentHeight - windowHeight)) * 100);
    headerprogress.style.flexBasis = scrollpage + '%';
    
    let parallaxscrollY;
    parallaxscrollY = window.scrollY
    if (showreel) {
      let showreelmaxHeight = Number(window.getComputedStyle(document.querySelector('.showreel__inview')).maxHeight.replace('px', ''));
      if (parallaxscrollY <= (document.querySelector('[data-persistent]').offsetTop + showreelmaxHeight)) {
        showreelbutton.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${parallaxscrollY - (document.querySelector('[data-persistent]').offsetTop - window.innerHeight)}, 0, 1)`;
        showreelbutton.style.transition = `transform 0.1s linear`;
      }
    }
    if (pbbutton) {
        let pbmaxHeight = Number(window.getComputedStyle(document.querySelector('.project_banner__inview')).maxHeight.replace('px', ''));
        if (parallaxscrollY <= (document.querySelector('[data-persistent]').offsetTop + pbmaxHeight)) {
        pbbutton.style.transform = `matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, ${parallaxscrollY - (document.querySelector('[data-persistent]').offsetTop - window.innerHeight)}, 0, 1)`;
        pbbutton.style.transition = `transform 0.1s linear`;
      }
    }
  }
  document.documentElement.setAttribute('scroll', `${Math.round(args["scroll"]["y"])}`);

  if(projecttop && 
    projecttop.style.background !=  "rgb(255, 255, 255)" && 
    projecttop.style.background !=  "rgb(255, 251, 239)" && 
    projecttop.style.background !=  "rgb(233, 249, 249)" && 
    projecttop.style.background !=  "rgb(255, 248, 246)" && 
    projecttop.style.background !=  "var(--bg)"){
    if (Math.round(args["scroll"]["y"]) <= 50) {
      header.classList.add('header__transparent');
    } else {
      header.classList.remove('header__transparent');
    }
  }
});
// end scroll

// start cursor
document.addEventListener("DOMContentLoaded", () => {
  const cursor = document.querySelector(".cursor");
  const cursorBlock = cursor.querySelector(".cursor__block");
  const a = document.querySelectorAll('a');
  const button = document.querySelectorAll('button');
  const label = document.querySelectorAll('label');
  const hslanguageicon = document.querySelectorAll('.header__set_language_icon');
  const sinview = document.querySelectorAll('.showreel__inview');
  const cursorgrab = document.querySelectorAll('.c-scrollbar_thumb');
  const buttonnext = document.querySelectorAll('.swiper-button-next');
  const buttonprev = document.querySelectorAll('.swiper-button-prev');
  const sliders = document.querySelectorAll(".swiper-wrapper");

  document.addEventListener('mousemove', function(e){
    let ctx = e.clientX;
    let cty = e.clientY;
    if (ctx > (document.body.offsetWidth - 5) || cty > (document.body.offsetHeight - 5) || ctx < 5 || cty < 5) {
      cursor.classList.add('leave')
    } else {
      cursor.classList.remove('leave')
    }
  });
  
  function moveCursor(event) {
    var cursorX = event.clientX + "px";
    var cursorY = event.clientY + "px";
    cursor.style.transform = `translate3d(${cursorX}, ${cursorY}, 0)`;
  }

  document.onmousemove = (event) => {
    moveCursor(event);
  };

  document.onpointermove = (event) => {
    moveCursor(event);
  };

  document.addEventListener('mousedown', function(){
    cursor.classList.add('active')
  });

  document.addEventListener('mouseup', function(){
    cursor.classList.remove('active')
  });
  
  sinview.forEach(item => {
    item.onmouseenter = () => {
      cursor.classList.add("cursor__showreel");
    };
    item.onmouseleave = () => {
      cursor.classList.remove("cursor__showreel");
      cursorBlock.classList.remove("active");
    };
    item.onpointerdown = () => {
      cursorBlock.classList.add("active");
    }
    item.onpointerup = () => {
      cursorBlock.classList.remove("active");
    };
  })
  if (!document.querySelector(".price__swiper")) {
    sliders.forEach(item => {
      item.onmouseenter = () => {
        cursor.classList.add("cursor__slider");
      };
      item.onmouseleave = () => {
        cursor.classList.remove("cursor__slider");
        cursorBlock.classList.remove("active");
      };
      item.onpointerdown = () => {
        cursorBlock.classList.add("active");
      }
      item.onpointerup = () => {
        cursorBlock.classList.remove("active");
      };
    })
  }

  a.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  button.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  hslanguageicon.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  label.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  cursorgrab.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  buttonnext.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })

  buttonprev.forEach(item => {
    item.addEventListener('mouseover', () => {
      cursor.classList.add('hover');
    });
    item.addEventListener('mouseleave', () => {
      cursor.classList.remove('hover');
    });
  })
});
// end cursor

// start year
const year = document.querySelector('.footer__year');
if(!year){} else {
  const currentYear = new Date().getFullYear();
  year.insertAdjacentText('beforebegin', currentYear);
  year.remove();
}
// end year

// start domen
const domen = document.querySelector('.domen');
if(domen){
  let domens = document.querySelectorAll(".domen");
  for (let i = 0; i < domens.length; i++) {
    domens[i].innerText = window.location.hostname;
  }
}
// end domen

const overlay = document.querySelector('.overlay');
const menu = document.querySelector('.header__nav');
const burger = document.querySelector('.header__burger');
const menuItemActive = document.getElementsByClassName("header__nav_item active");

// button header__burger
burger.addEventListener('click', function() {
  if (burger.classList.contains("active")) {
    overlay.classList.remove("active");
    menu.classList.remove("active");
    burger.classList.remove("active");
    header.classList.remove("active");
    document.body.style.overflow = null;
    document.body.style.height = null;
    // for (var i = 0; i < menuItemActive.length; i++) {
    //   menuItemActive[i].children[1].style.maxHeight = null;
    //   menuItemActive[i].children[1].classList.remove("active");
    //   menuItemActive[i].classList.remove("active");
    // }
    scroll.start();
  } else {
    overlay.classList.add("active");
    menu.classList.add("active");
    burger.classList.add("active");
    header.classList.add("active");
    document.body.style.overflow = "hidden";
    document.body.style.height = "100vh";
    // for (var i = 0; i < menuItemActive.length; i++) {
    //   menuItemActive[i].children[1].style.maxHeight = null;
    //   menuItemActive[i].children[1].classList.remove("active");
    //   menuItemActive[i].classList.remove("active");
    // }
    header.classList.remove("hidden");
    scroll.stop();
  }
})
// end header__burger