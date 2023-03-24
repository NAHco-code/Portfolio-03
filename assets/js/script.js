
// Responsive Mobile Menu
const toggleButton = document.querySelector('.nav').children[1];
const burger = document.querySelector('.nav').children[2];
const nav2 = document.querySelector('.nav-2');

toggleButton.addEventListener('click', () => {
	burger.classList.toggle('active');
});
nav2.addEventListener('click', () => {
	burger.classList.toggle('active');
});

// Email Button on Contact page
const emailButton1 = document.querySelector('div.contact-btn-wrapper a#email-btn1');
const emailButton2 = document.querySelector('div.contact-btn-wrapper a#email-btn3');
const emailButton3 = document.querySelector('div.contact-btn-wrapper a#email-btn5');
const emailText = `kathrynxwilk@gmail.com`;
const buttonText = `Email`;

const replaceBtnText = (emailButton) => {
	emailButton.innerText = emailText;
	emailButton.style.fontSize = '0.7rem';
	emailButton.style.color = 'rgb(181, 243, 255)';
	emailButton.style.backgroundColor = 'rgb(155, 185, 213)';
	emailButton.style.fontWeight = '600';
	emailButton.style.lineHeight = '1rem';
};
const replaceEmailText = (emailButton) => {
	emailButton.innerText = buttonText;
	emailButton.style.fontSize = '1rem';
	emailButton.style.color = 'rgb(36, 190, 221)';
	emailButton.style.backgroundColor = 'rgb(227, 235, 244)';
};
const replaceBtnText2 = (emailButton) => {
	emailButton.innerText = emailText;
	emailButton.style.fontSize = '0.7rem';
	emailButton.style.color = 'rgb(36, 190, 221)';
	emailButton.style.backgroundColor = 'rgb(227, 235, 244)';
	emailButton.style.fontWeight = '600';
	emailButton.style.lineHeight = '1rem';

};
const replaceEmailText2 = (emailButton) => {
	emailButton.innerText = buttonText;
	emailButton.style.fontSize = '1rem';
	emailButton.style.color = 'rgb(181, 243, 255)';
	emailButton.style.backgroundColor = 'rgb(155, 185, 213)';
};

const toggleButtonText = (emailButton) => {
	emailButton.addEventListener('click', () => {
		if (emailButton.innerText == emailText) {
			replaceEmailText(emailButton);
		}
		else if (emailButton.innerText == buttonText) {
			replaceBtnText(emailButton);
		}
		else {
			console.log(emailButton)
		}
	})
}
const toggleButtonText2 = (emailButton) => {
	emailButton.addEventListener('click', () => {
		if (emailButton.innerText == emailText) {
			replaceEmailText2(emailButton);
		}
		else if (emailButton.innerText == buttonText) {
			replaceBtnText2(emailButton);
		}
		else {
			console.log(emailButton)
		}
	})
}

toggleButtonText(emailButton1);
toggleButtonText2(emailButton2);
toggleButtonText(emailButton3);
