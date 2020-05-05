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
//1. Build menu dynamically
const navMenu = document.querySelector('.navbar__menu'); // from my scroll Work #myList
const menuList = navMenu.querySelector('#navbar__list');
const navSections = document.getElementsByTagName('section');

for (let i = 1; i <= navSections.length; i++) {
    const menuItems = document.createElement('li');
    menuItems.setAttribute('class', 'menu_link');

    const htmlToAdd = '<a href="#section' + i + '">Section ' + i + '</a>';

    if (navSections[i] == navSections[1]) {
        menuItems.setAttribute('class', 'menu_link active')
        menuItems.insertAdjacentHTML('afterBegin', htmlToAdd);
    } else {
        menuItems.insertAdjacentHTML('afterBegin', htmlToAdd);
    }
    menuList.appendChild(menuItems);
}

/**
 * Define Global Variables
 * 
 */
//2. my test Declare variables
const navbarToggler = document.querySelector('.navbar__toggler');
const navbarMenu = document.querySelector('.navbar__menu ul');
const navbarLinks = document.querySelectorAll('.navbar__menu a');

//=====================================================================
// Add Some data with JS
//=====================================================================

const barracuda = {
    image: '<figure><img src="images/barracuda2.jpg"><figcaption>Barracuda showing some sharp teeth </figcaption> </figure>',
    scientificName: 'sphyraena',
    diet: 'carnivore',
    species: '20 species?',
    weight: 'can reach about 47kg?',
    habitat: 'coaster waters, ocean',
    classification: 'Animalia',
    Phylum: 'Chordata',
    Class: 'Actinopterygii',
    kingdom: 'Perciformes',
    Family: 'Sphyraenidae',
    superfamily: 'Sphyraena',

    fact: ` Behavior and Diet:
    Barracudas are ferocious, opportunistic predators, relying on surprise and short bursts of speed, up to 27 mph(43 km / h), to overtake their prey.

    Adults of most species are more or less solitary,
    while young and half - grown fish frequently congregate. Barracudas prey primarily on fish(which may include some as large as themselves).They kill and consume larger prey by tearing chunks of flesh.Barracuda are competitive species and often are seen competing against mackerel, needle fish and sometimes even dolphins for prey.

    Barracuda feed on an array of prey including fish such as jacks, grunts, groupers, snappers, small tunas, mullets, killifishes, herrings, and anchovies by simply biting them in half.They also seem to consume smaller species of sustenance that are in front of them.`,

    info: ` Barracuda are snake - like in appearance, with prominent, sharp - edged, fang - like teeth, much like piranha, all of different sizes, set in sockets of their large jaws. They have large, pointed heads with an underbite in many species.Their gill covers have no spines and are covered with small scales. Their two dorsal fins are widely separated, with the anterior fin having five spines, and the posterior fin having one spine and 9 soft rays. The posterior dorsal fin is similar in size to the anal fin and is situated above it. The lateral line is prominent and extends straight from head to tail. The spinous dorsal fin is placed above the pelvic fins and is normally retracted in a groove. The caudal fin is moderately forked with its posterior edged double - curved and is set at the end of a stout peduncle. The pectoral fins are placed low on the sides. Its swim bladder is large.

    <p class="source">
    Source: "https: //study.com/academy/lesson/barracuda-lesson-for-kids.html" ,
             https: //kids.kiddle.co/Barracuda
    </p>
    <p class="image-src">Image source: https://i.ytimg.com/vi/VOc_yE-LC-w/hqdefault.jpg</p>`
};


function animalFunFacts(animal) {
    const cardHTML =
        `<div class="description">
        <p class="fact"> ${animal.fact}</p>
        <p class="image">${animal.image}</p>
        <ul class="details">
            <li><strong>Scientific Name</strong>: ${animal.scientificName}</li>
            <li><strong>Species</strong>: ${animal.species}</li>
            <li><strong>Classification</strong>: ${animal.classification}</li>
            <li><strong>Diet</strong>: ${animal.diet}</li>
            <li><strong>Weight</strong>: ${animal.weight}</li>
            <li><strong>Habitat</strong>: ${animal.habitat}</li>
            <li><strong>Scientific Kingdom</strong>: ${animal.kingdom}</li>
            <li><strong>Super Family</strong>: ${animal.superfamily}</li>
        </ul>
        <p class="brief">${animal.info}</p>
        
    </div>`;

    return cardHTML;
}

//add to Section 4 data with js
// this may not be a requirement but I am adding this just as a demo how to add data with js
const sectFour = document.querySelector('#section4 .landing__container'); // get the setion container
sectFour.innerHTML = '<h2>BARRACUDA'; // Change the header
sectFour.insertAdjacentHTML('beforeEnd', animalFunFacts(barracuda)); // insert the data

//===============End of main Content data==============================================

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

/*//1. Build menu */

// Scroll to section on link click

// Set sections as active
const topMenuNav = document.getElementById("navbar__list");
const menuItems = topMenuNav.getElementsByClassName("menu_link");
for (let i = 0; i < menuItems.length; i++) {
    menuItems[i].addEventListener("click", function() {
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}

// Add class 'active' to section when near top of viewport
/*Highlight active section on scroll */
const section1 = document.querySelector('#section1');
const section2 = document.querySelector('#section2');
const section3 = document.querySelector('#section3');
const section4 = document.querySelector('#section4');

const mainSections = document.querySelector('body main');
const sections = mainSections.getElementsByTagName('section');

const active = document.getElementsByTagName('a#section1');

const bgColors = ['rgba(0, 0, 0, 0.1', 'rgba(0, 0, 0, 0.2', 'rgba(0, 0, 0, 0.3', 'rgba(0,0,0,0.4)'];
// This colors for the active sections
const inViewPort = ['Section 1', 'Section 2', 'Section 3', 'Section 4']

const activeClass = window.addEventListener('scroll', () => {

    for (let i = 0; i < sections.length; i++) {

        const elem = sections[i].getBoundingClientRect();

        if (elem.top < window.innerHeight && elem.top <= 0) {
            this.console.log(sections[i]);
            sections[i].classList.add('active-class');
            sections[i].style.background = bgColors[i];
        }
    }
});

// Hightlight the active section /scrolled To section on the navigation bar

const links = document.querySelectorAll('.menu_link');

function changeLinkState() {
    let index = sections.length;

    while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
    links.forEach((link) => link.classList.remove('active'));
    links[index].classList.add('active');
}
changeLinkState();
window.addEventListener('scroll', changeLinkState);