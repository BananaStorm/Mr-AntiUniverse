class PowerUp extends GameObject {
	
	constructor(geometry, material){
		
		super(geometry, material);

	}

	spawn(origin){
		this.reset(origin.x-100,origin.y,origin.z-100);
	}

}

class Repel extends PowerUp{
	
	constructor(geometry,material){
		super(geometry,material);
		
	}

	onCollide(){
		console.log('Repel Collide');
	}
}

class Clean extends PowerUp{
	
	constructor(geometry,material){
		super(geometry,material);
	}

	onCollide(){
		console.log('Clean Collide');
	}
}