function create(){

//PLAYER	
	Game.spaceship = new Player(
		new THREE.BoxGeometry( 8, 8, 16 ), 
		new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } ) 
	)
	Game.scene.add( Game.spaceship );

// PLANET
	Game.planet = new Planet(
		new THREE.SphereGeometry(  48, 16, 8  ),
		new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } )
	);
	Game.scene.add( Game.planet );

	Game.spaceship.target = Game.planet;

// UI
	
	Game.overheatedBar = new THREE.Mesh(
		new THREE.RingGeometry( 50, 40, 15, 1, Math.PI/2, Math.PI ),
		new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true })
	);	

	Game.scene.add( Game.overheatedBar );

	Game.overheatedBar.position.x = -200;
	Game.overheatedBar.rotation.x = 90*Math.PI/180;

	console.log(Game.overheatedBar.geometry)
}
function update(){
	
	Game.camera.lookAt(Game.planet.position);
	physics.update();
	
}

Game.init();
