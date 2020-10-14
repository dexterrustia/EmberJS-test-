import Controller from '@ember/controller';
import { action } from '@ember/object'

export default class IndexController extends Controller { 

  @action addRecord() {
    const user = { 
      name: 'Dexter',
      username: 'cordex',
      email: 'cordertex@gmail.com',
      phone: '234234234',
      website: 'wbsdf.com', 

    }
    console.log(user)
    this.store.createRecord('user', user)
    console.log('CONTROLLER => this is fired!');
    console.log(user) 
  } 

}
