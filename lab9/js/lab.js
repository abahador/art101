// index.js - Anon Functions & Callback
// Author: Amanda bahadori
// Date: 5/4/2023

// Constants

// Functions

    // get element output
    var outputEL = document.getElementById("output");

    // Create new element 
    var new1EL = document.createElement("p");
    new1EL.innerHTML = "What color do kittens love the most?";

    var new2EL = document.createElement("p");
    new2EL.innerHTML = "Purrple!";

    //add to output
    outputEL.appendChild(new1EL);
    outputEL.appendChild(new2EL);

    //Css changes
    new2EL.style.fontSize = "50px";

    var contentEL = document.getElementById("content");
    contentEL.style.color = "purple";

    contentEL.style.backgroundColor = "lavender";
    
