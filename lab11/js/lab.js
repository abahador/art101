// index.js - lab 11
// Author: Amanda bahadori
// Date: 5/17/2023

//$("sectionbox.append")("<button class='btn btn-secondary highlight-button'>Toggle Highlight</button>");
$(".sectionbox").append("<button class='btn btn-secondary highlight-button'>Toggle Highlight</button>")

$(".highlight-button").click(function(){
    $(this).parent().toggleClass("special");
})
