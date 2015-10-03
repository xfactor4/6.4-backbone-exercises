
/*
my document function allows the page to load before running my .
next I am appending all of my applications into my html by calling application
which will watch all the handlebars I will link .  If I wanted to append a specific page here I
would need to put in the file structure to the hbs page I want. I have to have
a class or #id to append my hbs to in this case it is the container div.
*/

$(document).ready(function(){
  $('#container').append(JST.application());

});
