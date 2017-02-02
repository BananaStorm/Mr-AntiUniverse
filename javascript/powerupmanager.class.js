class PowerUpManager{
	
	constructor(spawnTimer, scene){
		this.pool = [];
		this.spawnTimer = spawnTimer;
		this.nextPowerUp = 5000;
		this.parent = scene;
	}
	
	populate(nb){
		
		for (let i = 0; i < nb; i++) {
			let index = Math.round(Math.random());
			let newPowerUp = new Repel(
				new THREE.SphereGeometry( 10, 10, 10 ), 
				new THREE.MeshBasicMaterial( { color: 0x00ff00, wireframe: true } ) 
			);
			newPowerUp.kill();
			this.pool.push(newPowerUp);
		}

		return this.pool;
	}

	getPowerUp(){
		for (let i = 0; i < this.pool.length; i++) {
			let b = this.pool[i];
			if (!b.alive) {
				return b;
			}
		}
	}

	spawn(origin){
		if (Game.time() > this.nextPowerUp) {
			this.getPowerUp().spawn(origin);
			this.nextPowerUp = Game.time() + this.spawnTimer*(Math.random()+0.5);
			return true;
		}
		else {
			return false;
		}
	}
}