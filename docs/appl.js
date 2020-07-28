// navbar on mobile devices:
function navSlide(){
	const hamburger = document.querySelector('.hamburger');
	const navLinks = document.querySelector('.nav-links');
	const links = document.querySelectorAll('.nav-links li');


	hamburger.addEventListener('click', () =>{
		navLinks.classList.toggle('open');
		links.forEach(link =>{
			link.classList.toggle('fade');
		});
	});
};

function topbtnScroll(){
	const topbtn = document.querySelector('#topbtn');
	topbtn.addEventListener('click', function(){
		window.scrollTo({
			top:0,
			left:0,
			behavior:'smooth'
		});
	});
};

function downbtnScroll(){
	const downbtn = document.querySelector('#downbtn');
	const target = document.querySelector('#About');

	downbtn.addEventListener('click', function(){
		window.scrollTo({
			top:target.offsetHeight,
			left:0,
			behavior:'smooth'
		});
	});
};

function burgerAnimate(){
    const burger = document.querySelector('.hamburger');
    let open =false;
    burger.addEventListener('click', () => {
        if(!open){
            burger.classList.add('open');
            open = true;
        }
        else{
            burger.classList.remove('open');
            open = false;
        }
    });

};

navSlide();
topbtnScroll();
downbtnScroll();
burgerAnimate();
