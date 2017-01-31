

Game.init();


let mainState = Game.addState(new State('game', {init: init, update: update}));

Game.currentState = Game.getStateByName('game');
Game.self.currentState = Game.getStateByName('game');

Game.update();

function init(){
	spaceship = new GameObject(
		new THREE.BoxGeometry( 8, 8, 16 ), 
		new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } ) 
	)
	this.scene.add( spaceship );
}

function update(){
	this.camera.lookAt(spaceship);
}

Game.launchState('game');