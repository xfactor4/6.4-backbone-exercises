$(document).ready(function(){
  /*I am appending my exercise-e.html to the container in my index.html
     My file structure goes from exercises-e folder to exercise-e.html
  */
  $('#container').append(JST['exercises-e/exercise-e']())
});
