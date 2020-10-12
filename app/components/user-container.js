import Component from '@glimmer/component';
import {tracked} from '@glimmer/tracking';
import { action } from '@ember/object'
import {inject as service} from '@ember/service'

export default class UserContainerComponent extends Component {
  @service('user') users;

  @tracked fullName = '';
  @tracked userName = '';
  @tracked email = ''; 
  @tracked phone = '';
  @tracked website = ''; 

  @tracked isEdit = false;

  @action handleChange(e){ 
    const prop = e.target.id;
    // console.log(e.target.value);
    // console.log(e.target.id) 
    this[prop] = e.target.value; 

  }

  @action saveUser(e) {
    e.preventDefault();
    const user = {
      name: this.fullName,
      username: this.userName,
      email: this.email,
      phone: this.phone,
      website: this.website,
    }
    console.log(user);
    this.users.add(user); 
  }

  @action showUserInfo(user){
    console.log('this is  fired!')
    this.fullName = user.fullName;
    this.userName = user.userName;
    this.email = user.email;
    this.phone = user.phone;
    this.website = user.website;
  }

}
