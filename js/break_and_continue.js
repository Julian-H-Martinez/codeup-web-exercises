"use strict";
(function (){
    var numPick = parseFloat(prompt("Pick an odd number from 1-50."));
    var isOdd = (numPick % 2 !== 0);
    while(!isOdd){
        numPick = parseFloat(prompt("Silly guy/gal, enter an odd number."));
        if(numPick % 2 !== 0){
            break;
        }
    }
    alert(`Thanks for selecting ${numPick}, which is an odd number!`)
    console.log(`Number to skip is: ${numPick}`);
    for(var i = 1; i < 50; i++){
        if(i % 2 === 0){
            continue;
        }else if(i == numPick){
            console.log(`Yikes! Skipping Number: ${numPick}`);
            continue;
        }
        console.log(`Here is an odd number: ${i}`);
    }
})();


