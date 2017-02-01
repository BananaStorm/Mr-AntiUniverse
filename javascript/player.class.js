class Player extends GameObject {
	
	constructor(geometry, material){
		super(geometry, material);

		this.target;

		this.maxSpeed = 1;
		this.acceleration = 0.018;

		this.entryControls = [];

		this.heat = 0;
		this.maxHeat = 90;

		this.angle = -90*Math.PI/180;
		this.shield = 100;
		this.angle = 0;
		this.bulletManager = new BulletManager(100);

		this.hitbox = this.add(new GameObject(
			
			new THREE.SphereGeometry(  6, 8, 8  ),
			new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } )
		));

		Game.scene.add(this.hitbox);
		
		let playerBullets = this.bulletManager.populate(200,
			
			new THREE.SphereGeometry(  4, 1, 4  ),
			new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } )

		);

		Game.physics.addCollisionGroup(this.hitbox, "player");

		Game.physics.addCollisionGroup(playerBullets, "playerBullets");

		this.powerUps = [];

		this.fire = true;

	}

	update(){

		if (this.entryControls['ArrowRight']) this.angle += this.acceleration; //deplacement droit
		if (this.entryControls['ArrowLeft']) this.angle -= this.acceleration; //depalcement gauche
		
		this.position.x = this.target.position.x + Math.cos(this.angle) * this.target.orbitSize;//deplacement autour de la planete
		this.position.z = this.target.position.z + Math.sin(this.angle) * this.target.orbitSize;//Attraction vers la planete
		
		this.hitbox.position.x = this.position.x;
		this.hitbox.position.z = this.position.z;
		this.lookAt(this.target.position);
		Game.heatBar.geometry = new THREE.RingGeometry( 320, 400, 15, 1, utils.degToRad(225), - this.heat*(Math.PI/2)/this.maxHeat );
	
		if (this.entryControls[' ']) {//Pression d'espace

			if (this.heat > this.maxHeat) return; // Si on est en surchauffe on quitte la fonction

			if (this.bulletManager.fire(this.position, this.angle, 5) ) this.heat += 5;
			
		}else{

			this.heat--;
			if (this.heat<1) this.heat = 1;
		}
	}
}