let state = 'mainMenu';

function create(){

//PLAYER	
	Game.spaceship = new Player(
		new THREE.BoxGeometry( 8, 8, 16 ), 
		new THREE.MeshBasicMaterial( { color: 0xff00aa, wireframe: true } ) 
	)
	Game.scene.add( Game.spaceship );


// PLANET
	Game.planet = new Planet(
		new THREE.SphereGeometry(  48, 16, 8  ),
		new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } )
	);
	Game.scene.add( Game.planet );

//PowerUp
	Game.powerUpManager = new PowerUpManager(300, 500, Game.scene);

	Game.powerUpManager.powerUpClass.push(
		new Repel(
			new THREE.SphereGeometry( 10, 10, 10 ), 
			new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } ) 
		),

		new Clean(
			new THREE.SphereGeometry( 10, 10, 10 ), 
			new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } ) 
		)
	);

	let powerUp = Game.powerUpManager.populate(10);
	
	Game.physics.addCollisionGroup(powerUp, "powerUp");

	Game.physics.collide("player", "powerUp", function(o1, o2) {
		o2.effect();
		o2.kill();
	});

//Collide
	Game.physics.collide("playerBullets", "planet", function(o1, o2) {
		o1.kill();
		o2.health -= 5;
	});

	Game.physics.collide("shield", "planetBullets", function(o1, o2) {
			o2.kill();
	});


	Game.physics.collide("player", "planetBullets", function(o1, o2) {
		o1.gameObject.kill();
		o1.kill();	
		Game.gameOver()
	});

	Game.physics.collide('player', 'planet', function(o1, o2) {
		o1.gameObject.kill();
		o1.kill();
		Game.gameOver()
	})

	Game.spaceship.target = Game.planet;

// UI
	
	Game.heatBar = new THREE.Mesh(
		new THREE.RingGeometry( 96, 128, 15, 1, Math.PI/2, Math.PI ),
		new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true })
	);	

	Game.scene.add( Game.heatBar );

	Game.heatBar.position.x = 0;
	Game.heatBar.rotation.x = 90*Math.PI/180;

}

function update(){
	
		let avgX = Game.planet.position.x+Game.spaceship.position.x/5;
		let avgY = Game.planet.position.y+Game.spaceship.position.y/5;
		let avgZ = Game.planet.position.z+Game.spaceship.position.z/5;
		
		let average = new THREE.Vector3(avgX, avgY, avgZ);

		Game.powerUpManager.spawn({
			x : Game.planet.position.x + Math.cos(this.angle) * Game.planet.orbitSize,
			z : Game.planet.position.z + Math.sin(this.angle) * Game.planet.orbitSize,
			y:0

		});

		Game.camera.lookAt(average);
		Game.camera.rotation.z = 0;
}

Game.init();
