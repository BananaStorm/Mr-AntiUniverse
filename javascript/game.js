const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;
const aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

let Game = {

	renderer : null,
	camera : null,
	scene : null,
	physics: null,
	start: 0,

	init(){
		
	// create container div
		let container = document.createElement( 'div' );
		document.body.appendChild( container );

	// create renderer
		this.renderer = new THREE.WebGLRenderer( { antialias: true } );
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT);

		this.self = this;

		document.body.appendChild( this.renderer.domElement );

	// create scene
		this.scene  = new THREE.Scene();

	// create physics
		this.physics = new Physics(this);

	// create camera
		this.camera =  new THREE.OrthographicCamera( SCREEN_WIDTH / - 2, SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, SCREEN_HEIGHT / - 2, 1, 1000 );
	
	// add camera to scene
		this.scene.add(this.camera);
	
	// camera position
		this.camera.position.y = -400;

		this.startingTime = Date.now();
		create();

	// launch update()
		this.update();
	},

	update(){

		requestAnimationFrame( Game.update );
		Game.physics.process();

	// update instances
		for (let i = 0; i < Game.scene.children.length; i++) {
			if (Game.scene.children[i].update) Game.scene.children[i].update();
		}	
		
		update();
	// render
		Game.renderer.render( Game.scene, Game.camera );

	},

	time(){
		return Date.now() - this.startingTime
	}
}