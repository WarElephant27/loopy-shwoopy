$(document).ready( function() {

// CONTENT-BASED SCROLL TRIGGERS //
//////////////////////////////////
var viewport = $(window).outerHeight();

$(window).scroll(function() {
    
  var gridTxt = $(".grid-text");
  var gridTxtLoc = gridTxt.offset().top;
  var scrollPosition = window.scrollY;
    

  var triggerPositionIn = viewport - 10;
  var triggerPositionOut = viewport - 10;

  console.log('viewport h ' + viewport); 
  console.log('scroll position ' + scrollPosition);
  console.log('grid-text offset ' + gridTxtLoc);
  console.log('trigger position ' + triggerPositionIn);

  if( scrollPosition > triggerPositionIn) {
    console.log('you made it');
    $('.grid').removeClass('hidden');
  }

  else if( scrollPosition > triggerPositionOut) {
    $('.grid').addClass('hidden');
  } 
});


}); //end document.ready function