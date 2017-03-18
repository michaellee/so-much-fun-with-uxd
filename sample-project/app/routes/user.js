import Ember from 'ember';

export default Ember.Route.extend({
  ajax: Ember.inject.service(),
  model(params) {
    let self = this
    return new Promise(function(resolve) {
      self.get('ajax').request('http://jsonplaceholder.typicode.com/users/' + params.id, {
        method: 'GET'
      }).then(function(user) {
        resolve(user)
      })
    })
  }
});
