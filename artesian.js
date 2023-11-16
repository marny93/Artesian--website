const nav = document.querySelector('.navigation')
const navItem = document.querySelectorAll('.navigation__nav')
const navBtn = document.querySelector('.navigation__button')
const navList = document.querySelector('.navigation__list')
const navItems = document.querySelectorAll('.navigation__item')
const allNavItems = document.querySelectorAll('.navigation__link')
const navCheckbox = document.getElementById('navi-toggle')

const handleNav = () => {
	navList.classList.toggle('.navigation__item:active')
	allNavItems.forEach(link => {
		link.addEventListener('click', () => {
			navCheckbox.checked = false
		})
	})
}

navBtn.addEventListener('click', handleNav)
