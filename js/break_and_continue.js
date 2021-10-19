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
    /**
     * var userNum;
     * while(true){
     *     userNum = parseInt(prompt("Give me an odd number, between 1 & 50!"));
     *     if(userNum >= 1 && userNum <= 50 && userNum % 2 !==0){
     *     break;
     *     }
     * }
     *
     * for(var b = 1; b <= 50; b++){
     *     if(b % 2 === 0){
     *         continue;
     *     }
     *     if(b === userNum){
     *         console.log("We don't talk about " + userNum + "around these parts...");
     *         continue;
     *     }
     *     console.log("Here's an odd number: " + b);
     * }
     */
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


