// index.js - lab 10
// Author: Amanda bahadori
// Date: 5/10/2023

function sortUserName (userName) {
    // split string to array 
    if(typeof userName != "string")
    {
        console.log("convert to string");
        String(userName);
    }
    var nameArray = userName.split('');
    console.log("nameArray =", nameArray);
    
    //sort the array
    nameArray.sort();
    //console.log("nameArraySort =", nameArraySort);

    //join array back to string
    var nameSorted = nameArray.join('');
    console.log("nameSorted =", nameSorted);

    // return results;
    return nameSorted;
}
//get div & assign var
var divEl = document.getElementById("output");
var buttonEl = document.getElementById("my-button");
buttonEl.addEventListener("click", function(){
var inputEl = document.getElementById("user-name");
var sortedname = sortUserName(inputEl.value);
divEl.innerHTML = "<br>Given username: " + inputEl.value + "<br><br>Sorted username: " + sortedname;
});
// output

//document.writeln("I fixed your name: ",
    //sortUserName(), "</br>");
  