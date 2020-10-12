import Controller from '@ember/controller';
import { action } from '@ember/object'

export default class IndexController extends Controller {
  @action testAction(user) {
    console.log('CONTROLLER => this is fired!');
    console.log(user)
  }

}
