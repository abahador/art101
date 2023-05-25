// index.js - lab 13
// Author: Amanda bahadori
// Date: 5/24/2023

maxFactors = 4;
//Values for page
//input fields
// returns object
function getFactorObj(){
  var factorObj = {};
  for (var factor=0; factor<maxFactors; factor++){
    numId = "num" + factor;
    textId = "text" + factor;
    numValue = $("#" + numId).val();
    textValue = $("#" + textId).val();
    console.log(factor + ") num:", numValue, "text:", textValue)
    //if value is blank
    if (numValue && textValue){
      factorObj[numValue] = textValue;
    }
  }
  return factorObj;
}
//for factors
//iterate through max num
function fizzBuzz(maxnum, factorObj) {
  for(var i=1; i<=maxnum; i++){
    var outputStr = '';
    for(var factor in factorObj){
      if(i%factor==0){
        outputStr += factorObj[factor];
    }
  }
//Output to index
  if(outputStr){
    outputStr = ": " + outputStr + "!";
  }
  $("#output").append(i.toString() + outputStr+ "</br>");
  }
}

//sort button
$("#button").click(function() {
  var max = $("#maxnum").val();
  if(!max){
    reportError("Must give a maximum number!");
  }
  var factorObj = getFactorObj();
  console.log("factorObj:", factorObj);
  if (Object.keys(factorObj).length ===0){
    reportError("You must provide at least one feactor and text");
    return;
  }
  fizzBuzz(max, factorObj);
})


