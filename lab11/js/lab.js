// index.js - lab 11
// Author: Amanda bahadori
// Date: 5/17/2023

//$("sectionbox.append")("<button class='btn btn-secondary highlight-button'>Toggle Highlight</button>");
$(".sectionbox").append("<button class='btn btn-secondary highlight-button'>Toggle Highlight</button>")

$(".highlight-button").click(function(){
    $(this).parent().toggleClass("special");
})


//append a label for each section
//$("challenge").append("<label id=challenge-label-id for=challenge-label>CHALLENGE</label>");
//$("problems").append("<label >PROBLEMS</label>");
//$("cresults").append("<label >RESULTS</label>");

//append a button for each section
//$("challenge").append("<button id=challenge-button name=challenge-label></button>");
//$("problems").append("<button >press me</button>");
//$("results").append("<button >press me</button>");

// click event to each button
//$("challenge-button").click(function() {
  //  $("challenge").toggleClass("special");
//})

//$("problems-button").click(function() {
    //$("problems").toggleClass("special");
//})

//$("results-button").click(function() {
   // $("results").toggleClass("special");
//})

