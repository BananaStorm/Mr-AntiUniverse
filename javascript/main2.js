function create(){
	
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

}

function update(){
	
	Game.camera.lookAt(Game.planet.position);
	
}

Game.init();
