// nav stick
let nav = document.querySelector('.navbar');
window.onscroll = function () {
    if (document.documentElement.scrollTop > 50) {
        nav.classList.add('header-scrolled');
    } else {
        nav.classList.remove('header-scrolled');
    }
};
// nav hide on refresh or new page loading
let navBar = document.querySelectorAll('nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');
navBar.forEach(function (e) {
    e.addEventListner('click', function () {
        navCollapse.classList.remove('show');
    })
});
// nav close by clicking outside of navbar elements
document.addEventListener('click', function(event) {                              // Add an event listener to the document
    let navBar = document.querySelector('.navbar-collapse');                      // Get the navbar element
    if (!navBar.contains(event.target) && navBar.classList.contains('show')) {    // Check if the click event occurred outside of the navbar
      navBar.classList.remove('show');                                            // Close the navbar by removing the 'show' class
    }
});
