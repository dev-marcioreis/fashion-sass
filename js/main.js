const menu = document.querySelector('.nav__list')
const openMenuBtn = document.querySelector('.open-btn')
const closeMenuBtn = document.querySelector('.close-btn')

openMenuBtn.addEventListener('click', () => {
    menu.classList.add('active')
    openMenuBtn.style.display = 'none'
    closeMenuBtn.style.display = 'block'
})

const closeMenu = () => {
    menu.classList.remove('active')
    openMenuBtn.style.display = 'block'
    closeMenuBtn.style.display = 'none'
}

closeMenuBtn.addEventListener('click', closeMenu)


if(window.innerWidth < 1024) {
    document.querySelectorAll('.nav__list .nav__link').forEach(headerMenu => {
        headerMenu.addEventListener('click', () => {
            closeMenu()
        })
    })
}

