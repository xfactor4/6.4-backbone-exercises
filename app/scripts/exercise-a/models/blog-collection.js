
//Here I am importing my variable BlogPost which holds my models defaults

import BlogPost from 'exercise-a/models/blog';

/* this variable creates what I will collect.  I will be collecting the title
and thoughts of the blog post which are stored in my models defaults variable
BlogPost. The url is the server that I will store the users data in. I will also
use this url to fetch the data I need for other things I want to do with it.
*/
var BlogPostCollection = Backbone.Collection.extend({
         model: BlogPost,
         url: 'http://tiny-lasagna-server.herokuapp.com/collections/GR'
});



/* I am exporting my variable BlogPostCollection to use in my main javascript file
which is a.js in this case
*/
export default BlogPostCollection;
