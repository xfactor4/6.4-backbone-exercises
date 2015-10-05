import ContactPostCollection from 'exercise-b/models/contact-collection';
import CreateViewB from 'exercise-b/views/createB-view';



$(document).ready(function(){
  /*I am appending my exercise-b.html to the container in my index.html
     My file structure goes from exercises-b folder to exercise-b.html
  */



  var ContactPosts = new ContactPostCollection();

  var createviewB = new CreateViewB({collection: ContactPosts});
  $('#container').append(createviewB.render().el);

});
