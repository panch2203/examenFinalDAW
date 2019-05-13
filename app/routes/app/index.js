import Route from '@ember/routing/route';
import { hash } from 'rsvp';

export default class AppIndexRoute extends Route {
  model(){
		return hash({
					cars: this.store.findAll('car')					
		})
	}
}
