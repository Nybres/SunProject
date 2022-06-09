const nav = document.querySelector(".navbar");
const navigation = document.querySelector(".navbar__container");
const links = document.querySelectorAll(".navbar__link");
const burgerBtn = document.querySelector(".burger");
const burgerBars = document.querySelector(".burger__box-bar");

const form = document.getElementById("form");
const username = document.getElementById("name");
const surname = document.getElementById("surname");
const email = document.getElementById("email");
const phone = document.getElementById("phone");

const handleNav = params => {
	nav.classList.toggle("navbar--active");
	navigation.classList.toggle("navbar__container--active");
	burgerBars.classList.toggle("burger__box-bar--active");

	links.forEach(link => {
		link.addEventListener("click", () => {
			nav.classList.remove("navbar--active");
			navigation.classList.remove("navbar__container--active");
			burgerBars.classList.remove("burger__box-bar--active");
		});
	});
};

const validateFields = () => {
	const usernameValue = username.value.trim();
	const surnameValue = surname.value.trim();
	const emailValue = email.value.trim();
	const phoneValue = phone.value.trim();

	if (usernameValue === "") {
		setError(username);
	} else {
		setSucces(username);
	}

	if (surnameValue === "") {
		setError(surname);
	} else {
		setSucces(surname);
	}

	if (emailValue === "") {
		setError(email);
	} else if (!checkEmail(emailValue)) {
		email.classList.add("contact__form-input--error");
	} else {
		setSucces(email);
	}

	if (phoneValue === "") {
		setError(phone);;
	} else if (!checkPhone(phoneValue)) {
		phone.classList.add("contact__form-input--error");
	} else {
		setSucces(phone);
	}
};

const setError = field => {
	field.classList.remove("contact__form-input--succes");
	field.classList.add("contact__form-input--error");
	field.nextElementSibling.classList.remove("contact__form-label--move");
};

const setSucces = field => {
	field.classList.remove("contact__form-input--error");
	field.classList.add("contact__form-input--succes");
	field.nextElementSibling.classList.add("contact__form-label--move");
};

const checkEmail = email => {
	const regular =
		/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

	return regular.test(String(email).toLowerCase());
};

const checkPhone = phone => {
	const regularPhone = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{3})$/;

	return regularPhone.test(phone);
};

form.addEventListener("submit", e => {
	e.preventDefault();
	validateFields();
});

burgerBtn.addEventListener("click", handleNav);
