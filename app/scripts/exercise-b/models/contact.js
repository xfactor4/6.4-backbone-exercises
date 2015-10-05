var ContactPost = Backbone.Model.extend({
      defaults: {
        name: "",
        email: "",
        phone: "",
        address: "",
      },

  validate: function(attributes){
    if(_.isEmpty(attributes)){
      alert("You haven't filled in the form");
    }  else {
      return undefined;
    }
  }
});


export default ContactPost;
