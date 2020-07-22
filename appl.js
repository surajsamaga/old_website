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

navSlide();
btnscroll();
