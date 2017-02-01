class Player extends GameObject {
	
	constructor(geometry, material){
		super(geometry, material);

		this.target;

		this.maxSpeed = 1;

		this.entryControls = [];

		this.shield = 100;
		this.angle = 0;

		this.powerUps = [];

		this.fire = true;

	}

	update(){

		if (this.entryControls['ArrowRight']) this.angle += 0.02;
		if (this.entryControls['ArrowLeft']) this.angle -= 0.02;
		
		this.position.x = this.target.position.x + Math.cos(this.angle) * this.target.orbitSize;
		this.position.z = this.target.position.z + Math.sin(this.angle) * this.target.orbitSize;
		this.lookAt(this.target.position);

		if (this.entryControls[' ']) {
			if (!this.fire) return;

			let bullet = new Bullet(
				new THREE.SphereGeometry(  4, 1, 4  ),
				new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } )
			);

			physics.toCollide.push([bullet,Game.planet,()=>{
				bullet.kill();
				Game.planet.health-=10;

			}]);

			bullet.fire(this.position, this.angle, 5);
			console.log(bullet.velocity);
			this.fire = false;

			setTimeout(()=>{
				this.fire = true;
			},100);
		};
	}
}