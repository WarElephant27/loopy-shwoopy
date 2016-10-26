$(document).ready( function() {

// CONTENT-BASED SCROLL TRIGGERS //
//////////////////////////////////
var viewport = $(window).outerHeight();

$(window).scroll(function() {
    
  var gridTxt = $(".grid-text");
  var gridTxtLoc = gridTxt.offset().top;

  var scrollPosition = window.scrollY;
    

  var triggerPositionIn = gridTxtLoc;
  var triggerPositionOut = gridTxtLoc + viewport;

  console.log('scroll position ' + scrollPosition);
  console.log('grid-text offset ' + gridTxtLoc);
  console.log('trigger in ' + triggerPositionIn);
  console.log('trigger out ' + triggerPositionOut)

  if( scrollPosition > triggerPositionIn && scrollPosition < triggerPositionOut) {
    console.log('you made it');
    //$('.grid > div').removeClass('hidden').addClass('grid-animate');
  }

  else if( scrollPosition > triggerPositionOut) {
    //$('.grid > div').addClass('hidden');
  } 
});


}); //end document.ready function