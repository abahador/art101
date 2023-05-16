// index.js - Functions
// Author: Amanda bahadori
// Date: 5/3/2023

// Constants

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function sortUserName () {
    var userName = window.prompt("HI! Give me a name and I'll fix it!");
    console.log("userName =", userName);

    // split string to array 
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    
    //sort the array
    var nameArraySort = nameArray.sort();
    console.log("nameArraySort =", nameArraySort);

    //join array back to string
    var nameSorted = nameArraySort.join('');
    console.log("nameSorted =", nameSorted);

    // return results;
    return nameSorted;
  }
  
// output
//document.writeln("I fixed your name: ",
    //sortUserName(), "</br>");
  