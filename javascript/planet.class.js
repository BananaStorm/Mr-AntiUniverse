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
		
		this.bulletManagers = [];
		for (let i = 0; i < 8; i++) {
			
			let bm = new BulletManager(100);
			
			bm.populate(200, 	
				new THREE.SphereGeometry(  4, 1, 4  ),
				new THREE.MeshBasicMaterial( { color: 0x0000ff, wireframe: true } )
			);

			this.bulletManagers.push(bm);
		}

	}

	update(){
		//Si l'entitée est morte on stop l'update;
		if (!this.alive) return

		//Si l'entitée n'as plus d'hp on la tue et on sort de la fonction
		if (this.health<=0){
			this.kill();
			return
		}


		for (let i = 0; i < this.bulletManagers.length; i++) {
			let bm = this.bulletManagers[i];
			bm.fire(this.position, utils.degToRad(i*45), 2);
			bm.rotation = utils.degToRad(Math.sin(index)*10);
			index += 1;
		}

		this.rotation.x += this.rotationSpeed.x;
		this.rotation.y += this.rotationSpeed.y;
		this.orbitSize -= 0.15;

	}
}

let index = 0;