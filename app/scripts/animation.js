$(document).ready( function() {

//set global vars
var lastTrigger = 0;
var i = 1;

////////////////////////////
// FLIPBOOK SCROLL EFFECT //
///////////////////////////

//use scroll as function trigger
window.onscroll = scrollFunction;

//'do stuff when scrolled' function
function scrollFunction() { 
  
  // track scroll and get img array
  var scrollPos = window.scrollY;
  var thisImg = $('.flip-img')[i];
  var imgCount = $('.flip-img').length;
  
  console.log(i)
  console.log('scrollPos ' + scrollPos);
  console.log('lastTrigger' + lastTrigger);
  
  //scrolling down - check if scroll position is at next trigger position
  var triggerDown = lastTrigger + 50;
  var triggerUp = lastTrigger - 50;
  
  if(scrollPos >= triggerDown)  {
    
    //reset trigger position, remove hidden class
    lastTrigger = scrollPos;
    $(thisImg).removeClass('hidden');
    
    if (i < imgCount) {
    i = i+1;
    }
    
    else if (i == imgCount) {
      i = imgCount;
    }
   }
  
    //scrolling up - check if scroll position is at next trigger position
  else if((scrollPos <= triggerUp)) {
    
    //reset trigger position, add hidden class
    lastTrigger = scrollPos;
    $(thisImg).addClass('hidden');
      
    if(i > 1) {
      i = i-1;
    }
    
  }
  
}


}); //end document.ready
