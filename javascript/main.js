const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;
const aspect = SCREEN_WIDTH / SCREEN_HEIGHT;


let renderer,
	planet,
	ring,
	camera,
	spaceship,
	scene,
	angle = 0,
	velocity = 0,
	ringVelocity = 0.015,
	arrowLeft = false,
	arrowRight = false;

function init(){
	
	let container = document.createElement( 'div' );
	document.body.appendChild( container );
	
	scene  = new THREE.Scene();
	camera =  new THREE.OrthographicCamera( SCREEN_WIDTH / - 2, SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, SCREEN_HEIGHT / - 2, 1, 1000 );
	camera.position.y = -400;

// PLANET
	planet = new THREE.Mesh(
		new THREE.SphereBufferGeometry(  48, 16, 8  ),
		new THREE.MeshBasicMaterial( { color: 0xffffff, wireframe: true } )
	);
	scene.add( planet );

// RING
	ring = new THREE.Mesh( 
		new THREE.RingGeometry( 58, 70, 8, 1, 0, 3 ), 
		new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } ) 
	);
	ring.rotation.x = 90*Math.PI/180;
	scene.add( ring );

// PLAYER
	spaceship = new GameObject(
			new THREE.BoxGeometry( 8, 8, 16 ), 
			new THREE.MeshBasicMaterial( { color: 0xffff00, wireframe: true } ) 
	)
	scene.add( spaceship );
	spaceship.position.x = 300;

// CONTROLS
	document.addEventListener('keydown', function(e){
		if (e.key == 'ArrowLeft') {
			arrowLeft = true;
		}
		if (e.key == 'ArrowRight') {
			arrowRight = true;
		}
	});
	
	document.addEventListener('keyup', function(e){
		if (e.key == 'ArrowLeft') {
			arrowLeft = false;
		}
		if (e.key == 'ArrowRight') {
			arrowRight = false;
		}
	});

	renderer = new THREE.WebGLRenderer( { antialias: true } );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	
	document.body.appendChild( renderer.domElement );

}


let radius = 200;

function animate() {

	requestAnimationFrame( animate );
	camera.lookAt(planet.position);
	planet.rotation.y += 0.01;
	planet.rotation.x += 0.01;

	if (arrowLeft) {
		velocity -= 0.001;
	}
	if (arrowRight) {
		velocity += 0.001;
	}
	
	angle += velocity;

	if (!arrowRight && !arrowLeft) {
		if (velocity > 0) {
			velocity -= 0.001
		} else if (velocity < 0) {
			velocity += 0.001
		}
	}
	

	spaceship.position.x = planet.position.x + Math.cos(angle)*radius;
	spaceship.position.z = planet.position.z + Math.sin(angle)*radius;

	spaceship.lookAt(planet.position);
	//sring.rotation.z += 0.002;
	console.log(-spaceship.rotation.y, ring.rotation.z, -spaceship.rotation.y - ring.rotation.z);

	renderer.render( scene, camera );
}

init();
animate();



function update(){

}