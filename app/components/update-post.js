import Ember from 'ember';

export default Ember.Component.extend({
  updatePostForm: false,
  actions: {
    updatePostForm() {
      this.set('updatePostForm', true);
    },
    update(post) {
      var params = {
        title: this.get('title'),
        content: this.get('content'),
        partners: this.get('partners'),
        song: this.get('song'),
        image: this.get('image')
      };
      this.set('updatePostForm', false);
      this.sendAction('update', post, params);
    }
  }
});
