var MainView = Backbone.View.extend({
/* I am rendering a function which will provide my view template with my
model data and will update this.el with new HTML. render is also a noop
*/
    render: function (){
      this.$el.html(this.template());
      return this;
    }

});

export default MainView;
