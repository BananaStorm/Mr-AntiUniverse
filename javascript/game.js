const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;
const aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

let Game = {
	states : [],
	currentState : null,
	renderer : null,

	init(){
		this.renderer = new THREE.WebGLRenderer( { antialias: true } );
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT);		
	}

	update(){
		requestAnimationFrame( this.update() );

		this.currentState.update();

		this.renderer.render( this.currentState.scene, this.currentState.camera );
	}

}