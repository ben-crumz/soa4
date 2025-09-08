const referenceElement = document.getElementById('header-reference');
const targetElement = document.getElementById('header-target');

// console.log(referenceElement.offsetHeight);
// console.log(targetElement.offsetHeight);

targetElement.style.height = referenceElement.clientHeight + 'px';

// console.log(targetElement.offsetHeight);



function openHamburgerMenu() {
    const hamburgerMenu = document.getElementById('hamburger-expanded');
    hamburgerMenu.style.display = "block";
    console.log('Test');
}
function closeHamburgerMenu() {
    const hamburgerMenu = document.getElementById('hamburger-expanded');
    hamburgerMenu.style.display = "block";
    console.log('Test');
}