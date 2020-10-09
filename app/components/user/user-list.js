import Component from '@glimmer/component';
import {inject as service} from '@ember/service'

export default class UserUserListComponent extends Component {
  @service('user') users;
}
