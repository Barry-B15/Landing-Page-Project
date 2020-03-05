/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
 */
 //1. Build menu 
document.querySelector('#navbar__list').innerHTML =
    `<li class="menu_link active_class"><a  href="#section1">Section 1</a></li> 
    <li class = "menu_link"><a href = "#section2"> Section 2 </a></li >
    <li class = "menu_link" ><a href = "#section3"> Section 3 </a></li > `;

/**
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */
//2. my test Declare variables
const navbarToggler = document.querySelector('.navbar__toggler');
const navbarMenu = document.querySelector('.navbar__menu ul');
const navbarLinks = document.querySelectorAll('.navbar__menu a');

/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event
//3. My test
//navbarToggler.addEventListener("click", navbarTogglerClick);
navbarToggler.addEventListener("click", navbarTogglerClick);
// above line moved to the smooth scroll func as seen in stackoverflow

function navbarTogglerClick() {
	navbarToggler.classList.toggle("open-navbar-toggler");
	navbarMenu.classList.toggle("open");	
}



for (let i = 0; i < navbarLinks.length; i++) {
		navbarLinks[i].addEventListener("click", navbarLinkClick);
	}



function navbarLinkClick(event) {
	smoothScroll(event);

	if (navbarMenu.classList.contains("open")) {
		navbarToggler.click();
	}
}

function smoothScroll(event) {
	event.preventDefault(); // met 1.2, 2
    const targetId = event.currentTarget.getAttribute("href") === "#" ? "header" : event.currentTarget.getAttribute("href"); // method 3
    const targetPosition = document.querySelector(targetId).offsetTop; // we need to know the current position
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 3000; //(define duration instead using a number in our if statement and giving it an init val) // duration can be adjusted
    let start = null;

    window.requestAnimationFrame(step); //1st step, call request  animation frame

    function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        //def the animation
        //window.scrollTo(0, distance * (progress / duration) + startPosition);  // change to ff 
        window.scrollTo(0, easeOutQuart(progress, startPosition, distance, duration)); // above is replaced with the linear func
        if (progress < duration)
            window.requestAnimationFrame(step);
    }

    console.log(event.currentTarget);
}

//easing function from gizma.com
function easeOutQuart(t, b, c, d) {
    t /= d;
    t--;
    return -c * (t * t * t * t - 1) + b;
};
//source: Youtube Coding Journey
// https://www.youtube.com/watch?v=hPT1SSHptWA

/**
 * End Main Functions
 * Begin Events
 * 
 */

/*//1. Build menu 
document.querySelector('#navbar__list').innerHTML =
    `<li class="menu_link active_class"><a  href="#section1">Section 1</a></li> 
    <li class = "menu_link"><a href = "#section2"> Section 2 </a></li >
    <li class = "menu_link" ><a href = "#section3"> Section 3 </a></li > `;*/

// Scroll to section on link click

// Set sections as active