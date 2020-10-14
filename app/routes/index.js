import Route from '@ember/routing/route'; 

export default class IndexRoute extends Route { 
  model() {
    const users = this.store.findAll('user');
    console.log(users); 
    return { users }; 
  } 
}
