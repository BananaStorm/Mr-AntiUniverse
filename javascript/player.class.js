class Player extends GameObject {
	
	constructor(geometry, material){
		super(geometry, material);

		this.target;

		this.maxSpeed = 1;

		this.entryControls = [];

		this.overheated = 0;
		this.maxOverheated = 100;

		this.angle = -90*Math.PI/180;
		this.shield = 100;
		this.angle = 0;
		this.bulletManager = new BulletManager(100);
		
		this.bulletManager.populate(200,
			
			new THREE.SphereGeometry(  4, 1, 4  ),
			new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } )

		);

		this.powerUps = [];

		this.fire = true;

	}

	update(){

		if (this.entryControls['ArrowRight']) this.angle += 0.02; //deplacement droit
		if (this.entryControls['ArrowLeft']) this.angle -= 0.02; //depalcement gauche
		
		this.position.x = this.target.position.x + Math.cos(this.angle) * this.target.orbitSize;//deplacement autour de la planete
		this.position.z = this.target.position.z + Math.sin(this.angle) * this.target.orbitSize;//Attraction vers la planete
		this.lookAt(this.target.position);
		Game.overheatedBar.geometry = new THREE.RingGeometry( 50, 40, 15, 1, Math.PI/2, Math.PI* this.overheated/this.maxOverheated );
	
		if (this.entryControls[' ']) {//Pression d'espace

			if (this.overheated > this.maxOverheated) return; // Si on est en surchauffe on quitte la fonction

			// physics.toCollide.push([bullet,Game.planet,()=>{
			// 	bullet.kill();
			// 	Game.planet.health-=10;

			// }]);

			this.bulletManager.fire(this.position, this.angle, 5);

			this.overheated += 5;
			
		}else{

			this.overheated--;
			if (this.overheated<1) this.overheated = 1;
		}
	}
}