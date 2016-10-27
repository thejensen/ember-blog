import Ember from 'ember';

export default Ember.Component.extend({
  addNewPost: false,
  actions: {
    postFormShow() {
      this.set('addNewPost', true);
    },
    cancel() {
      this.set('addNewPost', false);
    },
    savePost() {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        partners: this.get('partners'),
        song: this.get('song'),
        image: this.get('image')
      };
      this.set('addNewPost', false);
      this.sendAction('savePost', params)
    }
  }
});
