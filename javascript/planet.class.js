class Planet extends GameObject {
	constructor(geometry, material, radius){
		super(geometry, material);

		this.health = 100;

		this.radius = radius;

		this.rotationSpeed = {
			x: 0.001,
			y: 0.002
		}

		this.weapon = null;

	}
}