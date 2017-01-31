class Player extends GameObject {
	constructor(geometry, material){
		super(geometry, material);

		this.maxSpeed = 1;

		this.entryControls = [];

		this.shield = 100;

		this.powerUps = [];
	}
}