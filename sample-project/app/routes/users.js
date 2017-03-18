import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model() {
    let self = this
    return new Promise(function(resolve) {
      self.get('ajax').request('http://jsonplaceholder.typicode.com/users', {
        method: 'GET'
      }).then(function(users) {
        resolve(users)
      })
    })
  }
});
