$( document ).ready(function() {
  console.log( "poop!" );


$( ".landing-content" ).mousemove(function( event ) {
  var pageCoords = event.pageX + "°" + ", " + event.pageY + "°";
  var clientCoords = "( " + event.clientX + ", " + event.clientY + " )";
  $( "span" ).first().text(  pageCoords );
  // $( "span" ).last().text( clientCoords );
});


});

