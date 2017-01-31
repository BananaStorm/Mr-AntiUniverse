class GameObject extends THREE.Mesh {
	
	constructor(geometry, material){

		super(geometry, material);
		this.velocity = new Vector3();

	}

	update(){

	}
}