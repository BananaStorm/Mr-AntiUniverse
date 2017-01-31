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

		for (let i = 0; i < game.currentState.scene.length; i++) {
			
			let item = this.game.currentState.scene[i];

			if (item.velocity){
				item.position.x += item.velocity.x;
				item.position.y += item.velocity.y;
				item.position.z += item.velocity.z;
			}

			for (let j = 0; j < this.toCollide.length; j++) {

				if (Array.isArray(this.toCollide[j][0])) {

					for (let k = 0; k < this.toCollide[j][0].length; k++) {
						this.checkCollide(this.toCollide[i][0][k],this.toCollide[i][1]);
					}	

				}else if (Array.isArray(this.toCollide[j][1])){

					for (let k = 0; k < this.toCollide[j][1].length; k++) {
						this.checkCollide(this.toCollide[i][0],this.toCollide[i][1][k]);
					}	


				}else if (Array.isArray(this.toCollide[j][0]) && Array.isArray(this.toCollide[j][1])) {

					for (let k = 0; k < this.toCollide[j][0].length; k++) {
						for (let l = 0; l < this.toCollide[j][1].length; l++) {
							this.checkCollide(toCollide[j][0][k],this.toCollide[j][1][l])
						}
						
					}

				}else{
					this.checkCollide(this.toCollide[i][0],this.toCollide[i][1]);
				}
			}

		}
	},

	checkCollide(obj1,obj2,callback){

		let obj1X = obj1.position.x;
		let obj1Width = obj1.geometry.parameters.width;
		let obj1Y = obj1.position.y;
		let obj1Height = obj1.geometry.parameters.height;

		let obj2X = obj2.position.x;
		let obj2Width = obj2.geometry.parameters.width;
		let obj2Y = obj2.position.y;
		let obj2Height = obj2.geometry.parameters.height;

		let vx = (obj1X + (obj1Width/2)) - (obj2X + (obj2Width/2));
		let vy = (obj1Y + (obj1Height/2)) - (obj2Y + (obj2Height/2));

		let hWidth = (obj1Width/2) + (obj2Width/2);
		let hHeight = (obj1Height/2) + (obj2Height/2);

		let colDir = null;

		if (Math.abs(vx) < hWidth && Math.abs(vy) < hHeight) {

			if ((hWidth - Math.abs(vx)) > (hHeight - Math.abs(vy))) {
				if (vy > 0) {
					colDir = 'b';
				}else{
					colDir = 't';
				}			
			} else {
				if (vx > 0) {
					colDir = 'r';
				}else{
					colDir = 'l';
				}	
			}
			
			if (typeof callback === 'function') callback(colDir);
		}
	}
}