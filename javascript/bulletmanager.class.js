class BulletManager{
	
	constructor(scene, array, fireRate){
		this.pool = array || [];
		this.fireRate;
		this.parent = scene;
	};
	
	populate(nb, geometry, material){
		for (let i = 0; i < nb; i++) {
			let bullet = new Bullet(geometry, material);
		}
	};

	getBullet(){
		for (let i = 0; i < this.pool.length; i++) {
			let b = this.pool[i];
			if (!b.alive) {
				return b;
			}
		}
	}

	fire(origin){
		this.getBullet.fire();
	};
}