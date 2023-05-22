// index.js - lab 12
// Author: Amanda bahadori
// Date: 5/22/2023

//sort function for houses

function sortHat(str) {
  len = str.length;
  mod = len % 4;
  if(mod == 0){
      return "Gryffindor";
  }
  else if(mod == 1){
      return "Slytherine";
  }
  else if(mod == 2){
      return "Ravenclaw";
  }
  else if(mod == 3){
      return "Hufflepuff";
  }
}

//sort button
$("#button").click(function() {
  var name = $("#input").val();
  var house = sortHat(name);
  newText = "<p>Welcome " + name + ", the sorting hat has put you into " + house + ".</p>";
  $("#output").html(newText);
});


