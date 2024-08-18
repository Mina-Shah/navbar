// classlist - shows/gets all classes
// contains - check classList for specific class
// add - add class
// remove - remove class
// toggle - toggle class

const navToggle = document.querySelector('.nav-toggle');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
    // if (links.classList.contains('show-links')) {
    //     links.classList.remove('show-links')
    // } else {
    //     links.classList.add('show-links')
    // } 
    links.classList.toggle('show-links');
})

//The toggle() method toggles between hide() and show() for the selected elements.
//The Classlist in JavaScript property allows you to powerfully manipulate the classes(the group of HTML elements) attached to an HTML Element.