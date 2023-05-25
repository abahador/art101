// index.js - lab 11
// Author: Amanda bahadori
// Date: 5/17/2023

//$("sectionbox.append")("<button class='btn btn-secondary highlight-button'>Toggle Highlight</button>");
$("#challenge").append("<button id='highlight-button'>Toggle Highlight</button>")
$("#problems").append("<button id='highlight-buttons'>Toggle Highlight</button>")
$("#results").append("<button id='highlight-buttonss'>Toggle Highlight</button>")

$("#highlight-button").click(function(){
    $(this).parent().toggleClass("special");
})

$("#highlight-buttons").click(function(){
    $(this).parent().toggleClass("special");
})

$("#highlight-buttonss").click(function(){
    $(this).parent().toggleClass("special");
})
