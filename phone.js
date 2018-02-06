tabs = ["dialer","contact-list","add-contact","gestures"];
// Sets the initial tabPosition to 0 (dialer)
tabPosition = 0;

$(document).ready(function() {  // do when document is loaded
    switchTabs(tabPosition)
});



// I updated all the button clicks so they now use the switchTabs() function
$("#dialer").click(function() { // when the "dialer" button is clicked
  switchTabs(0)
});

$("#contact-list").click(function() { // when the "contact-list" button is clicked
  switchTabs(1)
});

$("#add-contact").click(function() { // when the "add-contact" button is clicked
  switchTabs(2)
});

$("#gestures").click(function() { // when the "gestures" button is clicked
  switchTabs(3)
});

// When you click a button, add that number into the dialer
$("#1").click(function() {
  $("#dial-number").val($("#dial-number").val() + "1")
}
);
$("#2").click(function() {
  $("#dial-number").val($("#dial-number").val() + "2")
}
);
$("#3").click(function() {
  $("#dial-number").val($("#dial-number").val() + "3")
}
);
$("#4").click(function() {
  $("#dial-number").val($("#dial-number").val() + "4")
}
);
$("#5").click(function() {
  $("#dial-number").val($("#dial-number").val() + "5")
}
);
$("#6").click(function() {
  $("#dial-number").val($("#dial-number").val() + "6")
}
);
$("#7").click(function() {
  $("#dial-number").val($("#dial-number").val() + "7")
}
);
$("#8").click(function() {
  $("#dial-number").val($("#dial-number").val() + "8")
}
);
$("#9").click(function() {
  $("#dial-number").val($("#dial-number").val() + "9")
}
);
$("#0").click(function() {
  $("#dial-number").val($("#dial-number").val() + "0")
}
);
$("#star").click(function() {
  $("#dial-number").val($("#dial-number").val() + "*")
}
);
$("#pound").click(function() {
  $("#dial-number").val($("#dial-number").val() + "#")
}
);

// When you click "Clear", reset the dialer field
$("#clear").click(function() {
  $("#dial-number").val("")
}
);
/*
// Mouse down in gesture area
$("#gesture-box-1").mousedown(function() {
  $("#gestures-output").val("mouse down")
}
);
// Mouse up in gesture area
$("#gesture-box-1").mouseup(function() {
  $("#gestures-output").val("mouse up")
}
);
*/
/*
// Mouse is hovering (before down and up click)
$("#gesture-box-1").hover(function() {
  $("#gestures-output").val("hover")
}
);
*/

// Mouse leaves gesture area
$("#gesture-box-1").mouseleave(function() {
  $("#gestures-output").val("ready")
}
);

// Detect left or right swipe
downX = 0;
downY = 0;

$("#gesture-box-1").mousedown(function(event) {

  downX = event.pageX;
  downY = event.pageY;

  $("#gestures-output").val("mouse down")
}
);

$("#gesture-box-1").mouseup(function(event) {
  upX = event.pageX;
  upY = event.pageY;

  if ((upX - downX) > 20) {
    $("#gestures-output").val("swipe right")
  }
  else if ((upX - downX) < -20) {
    $("#gestures-output").val("swipe left")
  }
  else if((upY - downY) > 20){
    $("#gestures-output").val("swipe down")
  }
  else if((upY - downY) < -20){
    $("#gestures-output").val("swipe up")
  }
  else {
    $("#gestures-output").val("mouse up")
  }
}
);

// This function switches tabs based on tabPosition.
// tabPosition 0 = dialer; 1 = contacts; 2 = add contacts; 3 = gestures

function switchTabs(tabPosition) {
  if (tabPosition == 0){
    // Show dialer tab and hide others
      $("#dialer-content").show(); // show the "dialer-content"
      $("#contact-list-content").hide(); // hide the contact-list-content in the starting state
      $("#add-contact-content").hide(); // hide the add-contact-content in the starting state
      $("#gestures-content").hide(); // hide the gestures-content
      $("#dialer").addClass("active"); // switch to active style
      $("#contact-list").removeClass("active"); // remove active style from all others
      $("#add-contact").removeClass("active"); // remove active style from all others
      $("#gestures").removeClass("active"); // remove active style from all others
      tabPosition = 0; // reset tabPosition (just in case)
  }
  if (tabPosition == 1){
    // Show Contact List tab and hide others
      $("#dialer-content").hide(); // hide the "dialer-content"
      $("#contact-list-content").show(); // show the contact-list-content in the starting state
      $("#add-contact-content").hide(); // hide the add-contact-content in the starting state
      $("#gestures-content").hide(); // hide the gestures-content
      $("#dialer").removeClass("active"); // switch to active style
      $("#contact-list").addClass("active"); // remove active style from all others
      $("#add-contact").removeClass("active"); // remove active style from all others
      $("#gestures").removeClass("active"); // remove active style from all others
      tabPosition = 1;
  }
  if (tabPosition == 2){
    // Show Add Contact tab and hide others
      $("#dialer-content").hide(); // hide the "dialer-content"
      $("#contact-list-content").hide(); // hide the contact-list-content in the starting state
      $("#add-contact-content").show(); // show the add-contact-content in the starting state
      $("#gestures-content").hide(); // hide the gestures-content
      $("#dialer").removeClass("active"); // switch to active style
      $("#contact-list").removeClass("active"); // remove active style from all others
      $("#add-contact").addClass("active"); // remove active style from all others
      $("#gestures").removeClass("active"); // remove active style from all others
      tabPosition = 2;

  }
  if (tabPosition == 3){
    // Show Gestures tab and hide others
      $("#dialer-content").hide(); // hide the "dialer-content"
      $("#contact-list-content").hide(); // hide the contact-list-content in the starting state
      $("#add-contact-content").hide(); // hide the add-contact-content in the starting state
      $("#gestures-content").show(); // show the gestures-content
      $("#gestures-output").val("ready") // clear the gesture status box
      $("#dialer").removeClass("active"); // switch to active style
      $("#contact-list").removeClass("active"); // remove active style from all others
      $("#add-contact").removeClass("active"); // remove active style from all others
      $("#gestures").addClass("active"); // remove active style from all others
      tabPosition = 3;
  }
}

// This listens for key strokes and updates tab position based on the direction
// It then calls the tabPosition() function to update the content
document.addEventListener('keypress', (event) => {
const keyName = event.key;
if (keyName == "ArrowLeft"){
  tabPosition = tabPosition-1;
  if (tabPosition == -1){
    tabPosition = 3
  }
  switchTabs(tabPosition)
}
if (keyName == "ArrowRight"){
  tabPosition = tabPosition+1;
  if (tabPosition == 4){
    tabPosition = 0
  }
  switchTabs(tabPosition)
}
});

// Switching tabs with the gesture nav
$("#gesture-box-2").mousedown(function(event) {

  downX = event.pageX;
  downY = event.pageY;

}
);

$("#gesture-box-2").mouseup(function(event) {
  upX = event.pageX;
  upY = event.pageY;

    // Navigate to the left on a right swipe
  if ((upX - downX) > 20) {
    tabPosition = tabPosition-1;
    if (tabPosition == -1){
      tabPosition = 3
    }
    switchTabs(tabPosition)
  }
  // Navigate to the right on a left swipe
  else if ((upX - downX) < -20) {
    tabPosition = tabPosition+1;
    if (tabPosition == 4){
      tabPosition = 0
    }
    switchTabs(tabPosition)
  }

}
);
