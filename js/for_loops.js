"use strict";
(function (){
    /**
     * Create a function named showMultiplicationTable that accepts a number and
     * console.logs the multiplication table for that number (just multiply by the numbers 1 through 10)

     For example, showMultiplicationTable(7) should output

     7 x 1 = 7
     7 x 2 = 14
     7 x 3 = 21
     */
    function showMultiplicationTable (num){
        for(var i = 1; i <= 10; i++){
            console.log(`${num} x ${i} = ${num*i}`);
        }
    }
    showMultiplicationTable(7);
    // showMultiplicationTable(3);
    // showMultiplicationTable(9);
})();