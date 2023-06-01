// index.js - lab 14
// Author: Amanda bahadori
// Date: 5/31/2023

// Using the core $.ajax() method
function getStuff(){$.ajax({
    // The URL for the request (from the api docs)
    url:"https://catfact.ninja/fact",
     // Whether this is a POST or GET request
    type:"GET",
    // The data to send (will be converted to a query string)
    data:{},
    
    })
    //   all the action goes in here
    .done(function(data){
    console.log(data.fact)
    $("#output").html(data.fact);
    })
    }
    $("button").click(getStuff);