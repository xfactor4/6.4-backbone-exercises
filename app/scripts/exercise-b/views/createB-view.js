import MainViewB from 'exercise-b/views/mainB-view';


var CreateViewB = MainViewB.extend({

     tagName: 'form',

    template: JST['exercises-b/exercise-b'],

      events: {
        'submit' : 'createContact'
      },

      createContact: function(e){
      e.preventDefault();
      this.collection.create(this.getContact());
      this.$('input[type=text], input[type=email], input[type=tel]').val('');
    },

      getContact: function(){
      var contactInfo = {};
      var contactResults = this.$el.serializeArray();
      contactResults.forEach(function(obj){
        contactInfo[obj.name] = obj.value;
      });
           return contactInfo;

    },

});


export default CreateViewB;
