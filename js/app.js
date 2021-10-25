//Open navigation menu
const navBtn = document.querySelector('.header__navigation-toggle')
const mobileMenu = document.querySelector('.header__nav-menu')

const openMobileMenu = () => {
    mobileMenu.classList.toggle('active')
}

navBtn.addEventListener('click', openMobileMenu)