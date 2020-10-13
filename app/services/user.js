import { A } from '@ember/array'
import Service,{inject as service} from '@ember/service';
import {tracked} from '@glimmer/tracking' 

export default class UserService extends Service {
  @service store;
  @tracked user = { 
    id: '',
    name: '',
    username: '',
    email: '',
    phone: '',
    website: '',
  };
  @tracked isEdit = false;

  @tracked userList = [ ]; 
  
  clearUser(){ 
    this.user = { 
      id: '',
      name: '',
      username: '',
      email: '',
      phone: '',
      website: '',
    }; 
  }

  update(){
    console.log('update is fired')
    console.log(this.user) 
    this.userList =this.userList.map(u => {
      if(u.id === this.user.id){
        return this.user;
      }
      return u
    })
    this.clearUser();
  }

  add(){
    console.log('add is fired')
    console.log(`this is fired ${JSON.stringify(this.user)}`) 
    this.clearUser();
  }

  remove(user){ 
    console.log('remove is fired')
    this.userList.removeObject(user);
  } 
  
}
