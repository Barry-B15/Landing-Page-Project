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
document.querySelector('#navbar__list').innerHTML =
    `<li class="menu_link active"><a  href="#section1">Section 1</a></li> 
    <li class="menu_link"><a href="#section2"> Section 2 </a></li>
    <li class="menu_link"><a href="#section3"> Section 3 </a></li>
    <li class="menu_link"><a href="#section4"> Section 4 </a></li>`;

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

//=====================================================================
// Add Some data
//=====================================================================

const blowfish = [`Blowfish is very popular in Japan. 
        It is among the most expensive dishes at sushi places.
        I feel it is necessary for us to know a few facts about this fish.`];

const toAdd = `<p class="blowfish">According to <strong>National Geographic</strong> 
        <blockquote cite="https://kids.nationalgeographic.com/animals/fish/pufferfish/"> 
        Pufferfish can inflate into a ball shape to evade predators. 
        Also known as blowfish, these clumsy swimmers fill their elastic 
        stomachs with huge amounts of water (and sometimes air) and blow 
        themselves up to several times their normal size.

        </blockquote> <blockquote> 
        Some pufferfish species also have spines on their skin to ward off 
        predators. Even if a predator gobbles up a puffer before it 
        inflates, it won't enjoy the snack. Most pufferfish contain a 
        toxic substance that makes them foul tasting and potentially 
        deadly to other fish. The toxin is deadly to humans. 
        There is enough poison in one pufferfish to kill 30 adult humans, 
        and there is no known antidote.</blockquote> 
         <span class="puffer-source"> <br>
        Now we can understand why it costs so much; it takes years of training for the chef
        to get the skills to completely remove the poison and 
        to get a license to prepare this special creature for diners.</p>
        `
    // select the section
const sectOne = document.querySelector('#section1 .landing__container');

// change the header to reflect data
sectOne.innerHTML = "<h2>Blowfish</h2>";

// add a paragraph to section1
sectOne.insertAdjacentHTML('beforeEnd', '<p>' + blowfish + '</p>');

//adding more to an existing text on the page
sectOne.insertAdjacentHTML('beforeEnd', toAdd);


const remora = {
    name: 'Remora',
    species: '8 species',
    fact: `Remoras don't live in shallow waters, they are found 
            around 328 feet deep in the ocean and their sizes can 
            nge between 0.98 - 2.95 feet in length. 
            Remora are nicknamed sharksucker or suckerfish as they use their 
            suckers to suck on to larger fish for most of their journeys.`,
    classification: "fish",
    habitat: 'ocean',
    weight: 'a common remora can reach a max weight of 1.1kg (2.4lbs)',
    status: 'not on endangered list',
    kingdom: 'Animalia',
    superfamily: 'Percoidea',
    scientificName: 'Echeneidae',
    diet: "carnivore",
    habitat: 'ocean',
    info: `<p>According to <strong>National Geographic</strong> 
        <blockquote cite=" https://www.nationalgeographic.com/science/phenomena/2013/07/17/what-good-is-half-a-sucker/">
        THE REMORA IS so ridiculous that no one would try to make it up. The top of its head is a giant, flat suction cup. It uses 
        the cup to lock onto the bodies of bigger animals, such as 
        sharks, sea turtles, and whales. As the big animal swims for 
        miles in search of a meal, the remora hangs on for the ride. 
        When its host finds a victim, the remora detaches and feasts 
        on the remains. It sometimes cleans its host’s body and mouth 
        of parasites, and then clamps its head back on for another 
        ride.</blockquote>`
};

const seahorse = {
    name: 'seahorse',
    scientificName: 'Syngnathidae',
    species: 'about 50 known species',
    classification: 'Fish',
    status: 'Data Deficient or Vulnerable, depending on species',
    lifespan: '(in wild): 3 years',
    weight: '200g',
    size: '2- 35cm',
    topSpeed: '150cm per hour',
    diet: 'Carnivore',
    habitat: 'Ocean,  coral reefs, coastal waters',
    fact: `Seahorse have a neck, unlike other fish. They also have a backbone, but no ribs, 
        instead they have rings that go all the way down into their tail.
        Sea horses have 3 main fins to help them swim and steer. 
        They are one fin on their back and one small fin on each side of their head. 
        Seahorse also have a 4th fin under their belly for stability control. 
        Their fins help them stabilize their body in the water.
        The seahorse male is also known to carry the babies.`,
    info: `<p>According to <strong>National Geographic</strong> </p>
        <blockquote cite="https://www.natgeokids.com/nz/discover/animals/sea-life/seahorse-facts/">  
        Seahorses are tiny fish that are named for the shape of their head, which looks like the 
        head of ... yup, you guessed it -a tiny horse. There are around 36 seahorse species, which are 
        found in tropical and temperate coastal waters where they swim upright among seaweed and other plants.
        </blockquote>
        <blockquote>
        Seahorses' bodies are covered in tiny, spiny plates, all the way 
        from their head down to their curled, flexible tail. The tail can grasp objects, 
        which comes in handy when these cool critters want to anchor themselves to vegetation. 
        To move forward through the water, seahorses use their dorsal fin (back fin). 
        To move up and down, they adjust the volume of air in a tiny pocket inside their body, 
        called a 'swim bladder'.
    <blockquote>
    <p> Source: https://www.natgeokids.com/nz/discover/animals/sea-life/seahorse-facts/ </p>`
};

const barracuda = {
    image: ' <img src="">',
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

    facts: ` Behavior and Diet: https: //kids.kiddle.co/Barracuda
    Barracudas are ferocious, opportunistic predators, relying on surprise and short bursts of speed, up to 27 mph(43 km / h), to overtake their prey.

    Adults of most species are more or less solitary,
    while young and half - grown fish frequently congregate.Barracudas prey primarily on fish(which may include some as large as themselves).They kill and consume larger prey by tearing chunks of flesh.Barracuda are competitive species and often are seen competing against mackerel, needle fish and sometimes even dolphins for prey.

    Barracuda feed on an array of prey including fish such as jacks, grunts, groupers, snappers, small tunas, mullets, killifishes, herrings, and anchovies by simply biting them in half.They also seem to consume smaller species of sustenance that are in front of them.`,

    info: ` Barracuda are snake - like in appearance, with prominent, sharp - edged, fang - like teeth, much like piranha, all of different sizes, set in sockets of their large jaws.They have large, pointed heads with an underbite in many species.Their gill covers have no spines and are covered with small scales.Their two dorsal fins are widely separated, with the anterior fin having five spines, and the posterior fin having one spine and 9 soft rays.The posterior dorsal fin is similar in size to the anal fin and is situated above it.The lateral line is prominent and extends straight from head to tail.The spinous dorsal fin is placed above the pelvic fins and is normally retracted in a groove.The caudal fin is moderately forked with its posterior edged double - curved and is set at the end of a stout peduncle.The pectoral fins are placed low on the sides.Its swim bladder is large.
    <p>
    The barracuda 's long, thin body makes it an excellent swimmer, up to 25 mph, which is about the speed a car drives on a quiet, neighborhood street. The giant mouth filled with many uneven razor-sharp teeth also makes it a great hunter, like a tiger! Its fangs are in a strong bottom jaw that juts outs farther than the upper jaw, giving it a frightening look.
    </p>
    <p>
    The long and slender body of the barracuda makes it a fast swimmer.
    barracuda
    Barracuda are dark green, blue, or grayish - brown and have stripes on top of their bodies, like a tiger, too!Their bellies are always white.Young barracuda can even turn different colors and patterns to blend in with their surroundings.
    </p>
    <p>
    Many types of barracuda are small, up to 18 inches, which is about as long as your arm.But the great barracuda is three times that size and can grow up to six feet long and weigh 110 pounds.That 's as big as an adult human!</p>
    <p>Source: "https: //study.com/academy/lesson/barracuda-lesson-for-kids.html"</p>`
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

//add to Section 2 data
const sectTwo = document.querySelector('#section2 .landing__container');
sectTwo.innerHTML = '<h2>REMORA';
sectTwo.insertAdjacentHTML('beforeEnd', animalFunFacts(remora));

//add to section 3 data
const sectThree = document.querySelector('#section3 .landing__container');
sectThree.innerHTML = "<h2>SEAHORSE";
sectThree.insertAdjacentHTML('beforeEnd', animalFunFacts(seahorse));

const sectFour = document.querySelector('#section4 .landing__container');
sectFour.innerHTML = '<h2>Barracuda';
sectFour.insertAdjacentHTML('beforeEnd', animalFunFacts(barracuda));

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