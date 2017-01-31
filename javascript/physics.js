Physics = {

	toCollide : [],

	update(){
		for (var i = 0; i < game.currentState.scene.length; i++) {
			
			let item = this.game.currentState.scene[i];

			if (item.velocity){
				item.position.x += item.velocity.x;
				item.position.y += item.velocity.y;
				item.position.z += item.velocity.z;
			}

			if (item.rotationSpeed){
				item.rotation.x += item.rotationSpeed.x;
				item.rotation.y += item.rotationSpeed.y;
				item.rotation.z += item.rotationSpeed.z;
			}

			for (var i = 0; i < this.toCollide.length; i++) {
				this.checkCollide(this.toCollide[i][0],this.toCollide[i][1]);
			}

		}
	}

	checkCollide(obj1,obj2){

	}

}