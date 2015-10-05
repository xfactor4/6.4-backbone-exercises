import MainView from 'exercise-a/views/mainA-view';
/* Here I am creating a variable (CreateView) to extend my MainView attributes.
I this variable for my view a form tag and a class name to style.  The template
will display what is in my exercise-a.hbs.  I also created events so that when
the user clicks sumbit it will create a post.
*/
var CreateView = MainView.extend({
      tagName: 'form',
      className: 'create-view',

     template: JST['exercises-a/exercise-a'],

     events: {
       'submit' : 'createPost'
     },

/*I have to create a function for my createPost so that when the user clicks
submit it will create a post.  I gave it a preventDefault so that it will not
continue to refresh the page.  My next expression (this.collection.create()) is
what will create the actually post that the user inputs. Inside of this function
I am calling another function to actually get the information that I want from
the user.
*/

     createPost: function(e){
       e.preventDefault();
       this.collection.create(this.getInfo());
       this.$('input[type=text], textarea').val('');
     },

     getInfo: function(){
       var info = {};
       var results = this.$el.serializeArray();
       results.forEach(function(obj){
         info[obj.name] = obj.value;
       });
       return info;
     },
});

export default CreateView;
