/**
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
*/
const navbarList = document.getElementById('navbar__list');
const sections = document.querySelectorAll('section');

/**
 * End Global Variables
 * Start Helper Functions
*/

// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

/**
 * End Helper Functions
 * Begin Main Functions
*/

// Build the navigation bar
const sectionNames = ['Section 1', 'Section 2', 'Section 3', 'Section 4'];

sectionNames.forEach((sectionName, index) => {
    const listItem = document.createElement('li');
    const anchor = document.createElement('a');

    anchor.setAttribute('href', `#section${index + 1}`);
    anchor.classList.add('menu__link');
    anchor.textContent = sectionName;

    listItem.appendChild(anchor);
    navbarList.appendChild(listItem);
});

// Scroll to section on link click
navbarList.addEventListener('click', (event) => {
    event.preventDefault();

    const targetSectionId = event.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetSectionId);

    window.scrollTo({
        top: targetSection.offsetTop,
        behavior: 'smooth'
    });
});

/**
 * End Main Functions
 * Begin Events
*/

// Set sections as active
document.addEventListener('scroll', () => {
    sections.forEach((section, index) => {
        const navItem = navbarList.children[index].children[0];

        if (isInViewport(section)) {
            section.classList.add('your-active-class');
            navItem.classList.add('active');
        } else {
            section.classList.remove('your-active-class');
            navItem.classList.remove('active');
        }
    });
});

//set hiding nav bar while not scrolling
document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar__list');

    window.addEventListener('scroll', () => {
        // Check if the user has scrolled down
        if (window.scrollY > 50) {
            document.body.classList.add('navbar-visible');
            document.body.classList.remove('navbar-hidden');
        } else {
            document.body.classList.add('navbar-hidden');
            document.body.classList.remove('navbar-visible');
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    window.addEventListener('scroll', () => {
        // Check if the user has scrolled below the fold
        if (window.scrollY > window.innerHeight / 2) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });
});

// Function to scroll to the top with smooth animation
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

