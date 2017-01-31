const SCREEN_WIDTH = window.innerWidth;
const SCREEN_HEIGHT = window.innerHeight;
const aspect = SCREEN_WIDTH / SCREEN_HEIGHT;

let Game = {
	
	states : [],
	currentState : null,
	renderer : null,
	physics: Physics,

	init(){
		
		console.log('coucou');
		let container = document.createElement( 'div' );
		document.body.appendChild( container );

		this.renderer = new THREE.WebGLRenderer( { antialias: true } );
		this.renderer.setPixelRatio( window.devicePixelRatio );
		this.renderer.setSize( SCREEN_WIDTH, SCREEN_HEIGHT);

		document.body.appendChild( this.renderer.domElement );
	},

	update(){

		requestAnimationFrame( this.update() );
		this.currentState.update();
		this.renderer.render( this.currentState.scene, this.currentState.camera );
	},

	addState(state){
		this.states.push(state);
		return state;
	},

	getStateByName(string){
		for (let i = 0; i < this.states.length; i++) {
			let s = this.states[i]
			if (s.name == string) {
				return s;
			}
		}
	},

	launchState(name){
		let s = this.getStateByName(name);
		s.init();
		this.currentState = s;
	},
}