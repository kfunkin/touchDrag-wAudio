window.onload = function() {

  //select object to drag
  var mainLogo = document.getElementById('logo');

  //listen to the touchmove event, every time it fires, grab location of
  //of the touch then assign to pinkCircle

  mainLogo.addEventListener('touchmove', function(ev) {
    //grab location of the touch
    var touchLocation = ev.targetTouches[0];
    //assign pinkCircle new coordinates based on the touch
    mainLogo.style.left = touchLocation.pageX + 'px';
    mainLogo.style.top = touchLocation.pageY + 'px';
  })

  mainLogo.addEventListener('touchend', function(ev) {
    //current pinkCircle position when dropped
    var x = parseInt(mainLogo.style.left);
    var y = parseInt(mainLogo.style.top);
    //check to see if that position meets constraints so object
    //doesn't move off canvas/artwork area so use pixel dimensions of device
    // designing for (could make it snap back to orininal position, so could
    //enter original position from stylesheet?)
    if (x < 5 || x > 1000) {
      mainLogo.style.left = '50px';
      mainLogo.style.top = '50px';
    }
    if (y < 5 || y > 1000) {
      mainLogo.style.left = '50px';
      mainLogo.style.top = '50px';
    }
  })

  var redOverlay = document.getElementById('overlay1');

  redOverlay.addEventListener('touchmove', function(ev){
    var touchLocation = ev.targetTouches[0];
    redOverlay.style.left = touchLocation.pageX + 'px';
    redOverlay.style.top = touchLocation.pageY + 'px';
  })

  redOverlay.addEventListener('touchend', function(ev){
    var x = parseInt(redOverlay.style.left);
    var y = parseInt(redOverlay.style.top);
    if (x < 5 || x > 1000){
      redOverlay.style.left = '50px';
      redOverlay.style.top = '50px';
    }
    if (y < 5 || y > 1000){
      redOverlay.style.left = '50px';
      redOverlay.style.top = '50px';
    }
  })

}
//function audioPlay(){
  //var audio = new Audio("StutteryEdit2.mp3");
  //audio.play();
//}
//now I need to work out how to make a variable that will grab all elements
// instead of writing out all of this code for each element!!
var jupiter = new Audio();
jupiter.src = "Jupiter2018.mp3";
