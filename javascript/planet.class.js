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
		//Si l'entitée est morte on stop l'update;
		if (!this.alive) return

		//Si l'entitée n'as plus d'hp on la tue et on sort de la fonction
		if (this.health<=0){
			this.kill();
			return
		}

		this.rotation.x += this.rotationSpeed.x;
		this.rotation.y += this.rotationSpeed.y;
		this.orbitSize -= 0.15;

	}
}