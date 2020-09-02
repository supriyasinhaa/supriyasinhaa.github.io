const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
menuToggle.addEventListener('click', () => {
    if (nav.className != 'active') { nav.className = 'active'; } else { nav.className = ''; }
});