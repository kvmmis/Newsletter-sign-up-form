const newsletterBody = document.querySelector('.newsletter__body');
const popup = document.querySelector('.popup');
const singupBox = document.querySelector('.newsletter__singup-box');
const inputEmail = document.querySelector('#email');
const submitButton = document.querySelector('.newsletter__submitBtn');
const closeButton = document.querySelector('.popup__closeBtn');

const checkMail = email => {
	const re =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	if (re.test(email.value)) {
		newsletterBody.classList.toggle('active');
		popup.classList.toggle('popup-active');
	} else {
		singupBox.classList.add('error');
		inputEmail.value = '';
	}
};

const closePopup = () => {
	popup.classList.add('popup-active');
	newsletterBody.classList.add('active');
	singupBox.classList.remove('error');
	inputEmail.value = '';
};

submitButton.addEventListener('click', e => {
	e.preventDefault(); // nie robi reloadu strony po kliknieciu
	checkMail(email);
});

closeButton.addEventListener('click', closePopup);
inputEmail.addEventListener('keydown', e => {
	if (e.keyCode == 13) {
		e.preventDefault();
		checkMail(email);
	}
});
