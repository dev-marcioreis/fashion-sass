const menu = document.querySelector('.nav__list')
const openMenuBtn = document.querySelector('.open-btn')
const closeMenuBtn = document.querySelector('.close-btn')

openMenuBtn.addEventListener('click', () => {
    menu.classList.add('active')
    openMenuBtn.style.display = 'none'
    closeMenuBtn.style.display = 'block'
})

closeMenuBtn.addEventListener('click', () => {
    menu.classList.remove('active')
    closeMenuBtn.style.display = 'none'
    openMenuBtn.style.display = 'block'
})
