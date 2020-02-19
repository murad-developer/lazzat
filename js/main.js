var toggleButton = document.querySelector('.menu');
var navList = document.querySelector('.nav_list');
toggleButton.addEventListener('click', function(){
	navList.classList.toggle('active');
});
