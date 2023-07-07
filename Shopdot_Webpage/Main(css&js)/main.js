//------------Change background color on scroll------------//
const header = document.getElementById('header');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        header.classList.add('scroll-header')
    } else {
        header.classList.remove('scroll-header')
    }
};


//------------SWIPER PRODUCTS------------//
let swiperProducts = new Swiper(".products__container", {
    spaceBetween: 32,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        1024: {
          spaceBetween: 72,
        },
      },
});


//------------ACTIVE LINK OF NAV ON SCROLL------------//
const sections = document.querySelectorAll('section[id]');

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((link) => {
    const  sectionHeight = link.offsetHeight,
           sectionTop = link.offsetTop - 58,
           sectionId = link.getAttribute('id'),
           sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
    
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionsClass.classList.add('active-link')
    } else {
      sectionsClass.classList.remove('active-link')
    }
  })
};
window.addEventListener('scroll', scrollActive);


//------------SHOW THE BOTTOM ARROW AT FOR TOP------------//
// const arrowBtn = document.getElementById('scroll-up');
// window.onscroll = function () {
//   if (document.documentElement.scrollTop > 1500) {
//     arrowBtn.classList.add('show-scroll__btn')
//   } else {
//     arrowBtn.classList.remove('show-scroll__btn')
//   }
// };
// window.addEventListener('scroll', arrowBtn);

const scrollUp = () => {
  const scrollUp = document.getElementById('scroll-up');
  this.scrollY >= 1500 ? scrollUp.classList.add('show-scroll__btn') : scrollUp.classList.remove('show-scroll__btn')
};
window.addEventListener('scroll', scrollUp);


//------------DARK & LIGHT THEME------------//
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

const selectedTheme = localStorage.getItem('selected-theme') // previously selected topic (if user selected)
const selectedicon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light' // we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

if (selectedTheme) {                                                                // we validate if the user previously chose a topic
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)  // if thd validation is fullfilled, we ask what the issue was to know if we activated or deactivated the dark
  themeButton.classList[selectedicon=== 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

themeButton.addEventListener('click', () => {            // Active/deactivated the theme manually with the dutton
  document.body.classList.toggle(darkTheme)             // add or remove the dark/icon theme
  themeButton.classList.toggle(iconTheme)
  localStorage.setItem('selected-theme', getCurrentTheme())    // we save the theme and the current icon that the user chose
  localStorage.setItem('selected-icon', getCurrentTheme())
})


//------------SCROLLREVEAL JS------------//
const sr = ScrollReveal({
  origin: 'top',
  distance: '60px',
  duration: 2500,
  delay: 400,
  // reset: true
})

sr.reveal(`.home__data, .products__container, .footer__container, .footer__info`)
sr.reveal(`.home__images`,{delay: 600, origin: 'bottom'})
sr.reveal(`.new__card, .brand__img`,{interval: 100})
sr.reveal(`.collection__explore:nth-child(1)`,{origin: 'right'})
sr.reveal(`.collection__explore:nth-child(2)`,{origin: 'left'})