


// let current = 0;
// for  (var i = 0; i < document.links.length; i++) {
//     if (document.links[i].href === document.URL) {
//         current = i;
//     }
// }
// document.links[current].className = 'current';

console.log(document.links)

console.log(document.URL)

const toggleNav = document.querySelector('.close-open')

const openNav = document.querySelector('.open-nav')

const closeNav = document.querySelector('.close-nav')

const header = document.querySelector('header')

const navBar = document.querySelector('.nav-bar')

const ul = document.querySelector('ul')
toggleNav.addEventListener('click', () => {
    if (header.getBoundingClientRect().width === 0){
       

        header.style.width = '100%'
        
        toggleNav.style.right = '1rem'
       
        toggleNav.style.transform = 'rotateY(180deg)';
        
        openNav.style.opacity= '0'
        closeNav.style.opacity= '1'
        navBar.style.opacity= '1'
        

    }else{
        header.style.width = '0'
        toggleNav.style.transform = 'rotateY(-180deg)';
        openNav.style.transition = 'opacity 1s ease-in'
        openNav.style.opacity= '1'
        closeNav.style.opacity= '0'
        toggleNav.style.right = '21rem'
        navBar.style.opacity= '0'
       
    }
})

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }

  window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();




// Get all sections that have an ID defined
const sections = document.querySelectorAll(".page-section");

// Add an event listener listening for scroll
window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
  
  // Get current scroll position
  let scrollY = window.pageYOffset;
  
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute("id");
    
    /*
    - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
    - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    */
    if (
      scrollY > sectionTop &&
      scrollY <= sectionTop + sectionHeight
    ){
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.add("current-page");
    } else {
      document.querySelector(".navigation a[href*=" + sectionId + "]").classList.remove("current-page");
    }
  });
}