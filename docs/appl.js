// nav bar slider 
const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav = document.querySelector('.nav-content');
	const navItems = document.querySelectorAll('.nav-content li');
	
	// on click do something
	burger.addEventListener('click', () => {
		// toggle to nav-active class to show the <ul>
		nav.classList.toggle('nav-active');
		
		// animate the links
		navItems.forEach((link, index) => {
			if(link.style.animation){
				link.style.animation = '';
			}
			else{
				link.style.animation = `navFade 0.5s ease forwards ${index/5 + 0.5}s`;
			}
		});
		burger.classList.toggle('clickburger');
	});
}

// scroll to top button
function btnscroll(){
	const btnscroll = document.querySelector("#topbtn");
	btnscroll.addEventListener("click", function(){
		window.scrollTo({
			top: 0,
			left: 0,
			behavior: "smooth"
		});
	});
};

// nav bar style change
function navScroll(){
	let mainNavLinks = document.querySelectorAll("nav ul li a");
	let mainSections = document.querySelectorAll(".overlay");

	let lastId;
	let cur = [];
	
	window.addEventListener("scroll", event => {
		let fromTop = window.scrollY;
		mainNavLinks.forEach(link => {
			let section = document.querySelector(link.hash);

			if(section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop){
				link.classList.add("current");
			}
			else{
				link.classList.remove("current");
			}
			
		});
	});
};

// downbtn scroll
function downbtnScroll(){
	const downbtn = document.querySelector("#downbtn");
	const scrollMarker = document.querySelector("#About");
	const targetTop = scrollMarker.offsetHeight;
	downbtn.addEventListener("click", function(){
		window.scrollTo({
			top:targetTop,
			left:0,
			behavior:"smooth"
		});
	});
};


navSlide();
btnscroll();
navScroll();
downbtnScroll();
