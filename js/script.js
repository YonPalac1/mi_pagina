document.getElementById('btn').addEventListener("click",openMenu);
	myNav = document.getElementById("myNav");

	function openMenu(){
		let btnOpen = document.getElementById("btn");
		myNav.classList.toggle("active");
		btnOpen.classList.toggle("active");
	}