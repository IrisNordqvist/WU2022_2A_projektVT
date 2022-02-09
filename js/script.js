const nav = document.getElementById('nav-links')
const burger = document.getElementById('burger')

function toggleMenu() {
    nav.classlist.toggle('nav-active')
    burger.classList.toggle('crossed_line')
}

burger.addEventListener('click', toggleMenu)