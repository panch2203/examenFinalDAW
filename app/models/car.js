import DS from 'ember-data';
const { Model, attr } = DS;

export default class CarModel extends Model {
  @attr('string') brand;
  @attr('string') color;
  @attr('number') wheels;
  @attr('string') price;
  @attr('string') img_url;
}
