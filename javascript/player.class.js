class Player extends GameObject {
	
	constructor(geometry, material){
		super(geometry, material);

		this.target;

		this.maxSpeed = 1;

		this.entryControls = [];

		this.shield = 100;
		this.angle = 0;

		this.powerUps = [];
	}

	update(){

		this.angle += 0.01;
		this.position.x = this.target.position.x + Math.cos(this.angle) * this.target.orbitSize;
		this.position.z = this.target.position.z + Math.sin(this.angle) * this.target.orbitSize;
		this.lookAt(this.target.position);
	}
}