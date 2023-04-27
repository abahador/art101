// index.js - Lab 6 Arrays and Objects
// Author: Amanda Bahadori 
// Date: 4/27/2023

// Define Variables
myTransport = [" Toyota Corolla ", " Bike ", " Bus."]

// Create an object for my main ride
myMainRide = {
  make: "Toyota",
  model: "Corolla",
  color: "Gray",
  year: 2004,
  age: function() {
      return 2023 - this.year;
  }
}

// Output 
document.writeln("Getting around: " + myTransport + "<br>");

// Write an object to the document 
document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");