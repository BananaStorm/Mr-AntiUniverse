class Bullet extends GameObject {
	
	constructor(geometry, material){
		
		super(geometry, material);
	}

	fire(scene, origin, rotation, speed){
		
		this.reset(scene, origin.x, origin.y, origin.z);
		this.rotation.y = rotation;
		let vel = utils.velocityFromRotation(rotation, speed);
	}
}