/* this is my model which is a constructor which will dictate the form of how my
data is displayed.  Ex. I want to get the "title" and "thoughts" for my blog posts
so I have set defaults to show me what the user entered in title and thoughts
*/


var BlogPost = Backbone.Model.extend({
      defaults:
        {
        title: "",
        content: "",
      },

/* my validate function (also called a noop) is a function I want to run so that
the user cannot not submit empty data.  I want this function to run automatically
so that anytime a user tries to click submit without filling in any data it will
not allow them to submit anything until they do. _isEmpty is an underscore function
that checks if the length of the property is zero.  If the lenght of the property
of title or thoughts is not zero it will store that data.
*/

validate: function(attributes){
  if(_.isEmpty(attributes)){
    alert("You haven't written anything yet!");
  }  else {
    return undefined;
  }
}

});

//Here I am exporting my defaults of my variable BlogPost


export default BlogPost;
