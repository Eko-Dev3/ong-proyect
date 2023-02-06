$(document).ready( function(){
/* get form voluntario */

$.post("./voluntario.html", function(data) {
    $(".unetecomovoluntario").html(data);
  });
})