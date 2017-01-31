class Planet extends GameObject {
	constructor(geometry, material){
		super(geometry, material);

		this.health = 100;

		// this.radius = radius;
		this.orbitSize = 300;

		this.rotationSpeed = {
			x: 0.01,
			y: 0.02
		}

		this.weapon = null;

	}

	update(){
		this.rotation.x += this.rotationSpeed.x;
		this.rotation.y += this.rotationSpeed.y;
		if (this.orbitSize<0) location.reload(); 
		this.orbitSize -= 0.15;

	}
}