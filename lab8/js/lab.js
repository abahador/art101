// index.js - Anon Functions & Callback
// Author: Amanda bahadori
// Date: 5/4/2023

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
    function isEven(x){
      return (x % 2 == 0);
    }

    // split string to array 
    console.log("Is 1 even? ", isEven(1));
    console.log("Is 2 even? ", isEven(2));
    
    //sort the array
    array = [100, 81, 4, 16, 144, 10000]
    console.log("my array", array);

    var result = array.map(isEven);
    //join array back to string
    console.log("Test of evenness of array:", result);

    var result = array.map(function(x){
      return x ** 0.5;
    })
    // return results;
    console.log("Squareroot of array:", result);
    //var outputEl = document.getElementById("output"); 
//mapResults = (array) + "<br>" + (array) + "<br>"
//outputEl.innerHTML = mapResults;
