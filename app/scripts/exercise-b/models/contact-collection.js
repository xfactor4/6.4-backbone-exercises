import ContactPost from 'exercise-b/models/contact';

var ContactPostCollection = Backbone.Collection.extend({
          model: ContactPost,
          url: 'http://tiny-lasagna-server.herokuapp.com/collections/GRContacts'
});



export default ContactPostCollection;
