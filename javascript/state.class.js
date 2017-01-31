class State(){
	constructor(name){
		this.name = name;
		this.scene = null;
		this.camera = null;
	}

	init(){
		this.scene  = new THREE.Scene();
		this.camera =  new THREE.OrthographicCamera( SCREEN_WIDTH / - 2, SCREEN_WIDTH / 2, SCREEN_HEIGHT / 2, SCREEN_HEIGHT / - 2, 1, 1000 );
		this.camera.position.y = -400;
	}

	update(){
		for (var i = 0; i < this.scene.children.length; i++) {
			if (this.scene.children[i].update) this.scene.children[i].update();
		}
	}
}