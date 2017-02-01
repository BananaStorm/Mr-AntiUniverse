class Physics {
	
	constructor(game){
		this.game = game;
	}
	
	process(){
		for (let i = 0; i < this.game.scene.children.length; i++) {
			let o = this.game.scene.children[i];
			
			if (o.velocity && o.position){
				o.position.x += o.velocity.x;
				o.position.y += o.velocity.y;
				o.position.z += o.velocity.z;
			}
		}
	}
}

physics = {

	toCollide : [],

	update(){			
			for (let j = 0; j < this.toCollide.length; j++) {
				if (Array.isArray(this.toCollide[j][0])) {

					for (let k = 0; k < this.toCollide[j][0].length; k++) {
						this.checkCollide(this.toCollide[j][0][k],this.toCollide[j][1],this.toCollide[j][2]);
					}	

				}else if (Array.isArray(this.toCollide[j][1])){

					for (let k = 0; k < this.toCollide[j][1].length; k++) {
						this.checkCollide(this.toCollide[j][0],this.toCollide[j][1][k],this.toCollide[j][2]);
					}	


				}else if (Array.isArray(this.toCollide[j][0]) && Array.isArray(this.toCollide[j][1])) {

					for (let k = 0; k < this.toCollide[j][0].length; k++) {
						for (let l = 0; l < this.toCollide[j][1].length; l++) {
							this.checkCollide(toCollide[j][0][k],this.toCollide[j][1][l],this.toCollide[j][2])
						}
						
					}

				}else{
					this.checkCollide(this.toCollide[j][0],this.toCollide[j][1],this.toCollide[j][2]);
				}
			}
	},

	checkCollide(obj1,obj2,callback){
		//Si un objet est mort on stop la fonction
		if (!obj1.alive || !obj2.alive) return;

		//On calcule la distance entre les 2 objets;
		let distance = Math.sqrt(Math.pow((obj2.position.x-obj1.position.x),2) + 
					   Math.pow((obj2.position.z-obj1.position.z),2));

		// Si elle est inférieur au radius du 2nd objet, il y a collison
		if (distance<(obj2.geometry.parameters.radius+obj1.geometry.parameters.radius) && typeof callback === 'function') callback();
	}
}