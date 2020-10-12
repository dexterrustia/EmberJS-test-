import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import { action } from '@ember/object'
import {inject as service} from '@ember/service'

export default class UserContainerComponent extends Component {
  @service('user') users; 

  @tracked isEdit = false;

  @action handleChange(e){ 
    const prop = e.target.id;
    // console.log(e.target.value);
    // console.log(e.target.id) 
    this.users.user[prop] = e.target.value; 
    console.log('this.users.user[prop] =>'+this.users.user[prop]);

  }

  @action saveUser(e) {
    e.preventDefault(); 
    //console.log(user);
    (this.users.isEdit) ? this.users.update() :  this.users.add();  
  } 

  @action clearUser(){
    this.users.isEdit = false;
    this.users.clearUser();
  }

}
