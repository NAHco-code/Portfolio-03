const toggleButton = document.querySelector('.nav').children[1]
const nav2 = document.querySelector('.nav').children[2]
// const navListItems = document.querySelectorAll('.navbar-li')
// const navLinks = document.querySelectorAll('.navbar-links')
const emailButton = document.querySelector('#email-btn')

// console.log(nav2)
// console.log(navListItems)
// console.log(navLinks)
// Responsive Mobile Menu
toggleButton.addEventListener('click', () => {
	nav2.classList.toggle('active');
});
// navListItems.addEventListener('click', () => {
// 	nav2.classList.toggle('active');
// });
// navLinks.addEventListener('click', () => {
// 	nav2.classList.toggle('active');
// });

const emailText = `<a class="contact-links" href="mailto:kathrynxwilk@gmail.com">
kathrynxwilk@gmail.com
</a>`
const buttonText = `<a class="contact-links" href="mailto:kathrynxwilk@gmail.com">
Email
</a>`


emailButton.addEventListener('click', () => {

	if (emailButton.innerHTML == emailText) {
		emailButton.innerHTML = buttonText;
		emailButton.style.fontSize = '1rem';
		emailButton.style.color = 'rgb(220, 249, 255)';
		emailButton.style.backgroundColor = 'rgb(227, 235, 244)';
	}
	else {
		emailButton.innerHTML = emailText;
		emailButton.style.fontSize = '0.75rem';
		emailButton.style.color = ' rgb(181, 243, 255)';
		emailButton.style.backgroundColor = 'rgb(155, 185, 213)';
		emailButton.style.fontWeight = '600';
		emailButton.style.lineHeight = '1rem';
	}
})
