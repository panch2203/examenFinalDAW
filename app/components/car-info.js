import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class CarInfoComponent extends Component {

  @tracked brand;
  @tracked color;
  @tracked wheels;
  @tracked price;

	@action
	handleBrand(text) {
		this.brand = text;
	}
  @action
	handleColor(text) {
		this.color = text;
	}
  @action
	handleWheel(text) {
		this.wheels = text;
	}
  @action
	handlePrice(text) {
		this.price = text;
	}
  @action
	async handleSubmit(index) {
		let brand = this.text;
    let color = this.color;
    let wheels = this.wheels;
    let price = this.price;
		let req = await this.args.handleSubmit(brand, color, wheels, price, index);
		this.brand = "";
    this.color = "";
    this.wheels = "";
    this.price = "";
	}
}
