const navigation = document.querySelector(".navbar__container");
const burgerBtn = document.querySelector(".burger");
const burgerBars = document.querySelector(".burger__box-bar");

const handleNav = params => {
	navigation.classList.toggle("navbar__container--active");
	burgerBars.classList.toggle("burger__box-bar--active");
};

burgerBtn.addEventListener("click", handleNav);
