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

	Game.physics.collide("playerBullets", "planet", function(o1, o2) {
		o1.kill();
		o2.health -= 5;
	});

	Game.physics.collide("shield", "planetBullets", function(o1, o2) {
		//o1.kill();
		o2.kill();
	});


	Game.physics.collide("player", "planetBullets", function(o1, o2) {

		console.log('coucou');
		o1.gameObject.kill(()=>{
			window.location.reload();
		});
		o1.kill();	

	});

	Game.physics.collide('player', 'planet', function(o1, o2) {
		o1.gameObject.kill(()=>{
			window.location.reload();
		});
		o1.kill();
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

	console.log(Game.heatBar.geometry)
}

function update(){
	
	let avgX = Game.planet.position.x+Game.spaceship.position.x/5;
	let avgY = Game.planet.position.y+Game.spaceship.position.y/5;
	let avgZ = Game.planet.position.z+Game.spaceship.position.z/5;
	
	let average = new THREE.Vector3(avgX, avgY, avgZ);

	Game.camera.lookAt(average);
	Game.camera.rotation.z = 0;
	physics.update();
	
}

Game.init();
