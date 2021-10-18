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
})();


