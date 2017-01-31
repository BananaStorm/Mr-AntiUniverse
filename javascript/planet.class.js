class Planet extends GameObject {
	constructor(geometry, material){
		super(geometry, material);

		this.health = 100;

		// this.radius = radius;
		this.orbitSize = 200;

		this.rotationSpeed = {
			x: 0.001,
			y: 0.002
		}

		this.weapon = null;

	}
}