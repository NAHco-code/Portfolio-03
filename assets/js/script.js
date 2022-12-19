const toggleButton = document.querySelector('.nav').children[1]
const nav2 = document.querySelector('.nav').children[2]
const navLinks = document.querySelectorAll('.navbar-links')

// console.log(toggleButton)
// console.log(nav2)
// console.log(navLinks)

toggleButton.addEventListener('click', () => {
	nav2.classList.toggle('active');
});

// if active, once a navlink is clicked, toggle again
// navLinks.addEventListener('click', () => {
// 	nav2.classList.toggle('active')
// })
