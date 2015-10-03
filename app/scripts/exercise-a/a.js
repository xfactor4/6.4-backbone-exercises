//I am importing my variable BlogCollection which will hold my collection of posts

import BlogPostCollection from 'exercise-a/models/blog-collection';
import CreateView from 'exercise-a/views/createA-view';



$(document).ready(function(){

/* BlogPosts is now an instanceof BlogPostCollection with this variable.  By doing this
I have passed all the properties and methods from BlogPosts by the extend call into
my BlogPostCollection
*/

 var BlogPosts = new BlogPostCollection();



  /* I created the variable createView to make an instanceof CreateView to pass
  my collection of BlogPosts into one variable.  Then I appended all of these
  into the container in my html page.
  */

  var createView = new CreateView({collection: BlogPosts});
  $('#container').append(createView.render().el);

});
