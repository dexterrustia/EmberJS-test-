import Component from '@glimmer/component';
import {inject as service} from '@ember/service'
import { action } from '@ember/object'

export default class UserUserListComponent extends Component {
  @service('user') users;

  @action deleteUser(user) {
    console.log(user)
    this.users.remove(user) 
  }
 
}
