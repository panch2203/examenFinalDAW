import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import {action} from "@ember/object";

export default class AppIndexController extends Controller {;
  @tracked car;

  @action async onChange(index){
  	this.car= await this.store.findRecord('car', index);
    console.log(this.car.brand);
  }

  @action
	async onSubmit (brand, color, wheels, price, id) {
    await this.store.findRecord('car', id).then((car)=>{
				car.set("brand", brand);
        car.set("color", color);
        car.set("wheels", wheels);
        car.set("price", price);
				car.save();
		});
	}

}
