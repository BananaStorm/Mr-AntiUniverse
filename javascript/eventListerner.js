document.getElementById('play').addEventListener('click',()=>{
	state = 'main';
	document.getElementById('mainMenu').style.display = 'none';
},false);

document.getElementById('replay').addEventListener('click',()=>{
	state = 'main';
	create();
	document.getElementById('gameOver').style.display = 'none';
},false);