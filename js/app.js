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

/**
 * Define Global Variables
 * 
 */


/**
 * End Global Variables
 * Start Helper Functions
 * 
 */



/**
 * End Helper Functions
 * Begin Main Functions
 * 
 */



// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
 */

// Build menu 
document.querySelector('#navbar__list').innerHTML =
    `<li class="menu_link active_class"><a  href="#section1">Section 1</a></li> 
    <li class = "menu_link"><a href = "#section2"> Section 2 </a></li >
    <li class = "menu_link" ><a href = "#section3"> Section 3 </a></li > `;

// Scroll to section on link click

// Set sections as active