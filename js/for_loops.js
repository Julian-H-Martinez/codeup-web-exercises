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
    /**
     * Use a for loop and the code from the previous lessons to generate 10 random numbers between 20 and 200 and
     * output to the console whether each number is odd or even. For example:

     123 is odd
     80 is even
     24 is even
     199 is odd
     ...
     */
    for(var i = 1; i <= 10; i++){
        var randoNum = Math.floor(Math.random()*200+20);
        var thisIs = randoNum % 2 == 0 ? `${randoNum} is even`:`${randoNum} is odd`;
        console.log(thisIs);
    }
    /**
     *Create a for loop that uses console.log to create the output shown below.
     1
     22
     333
     4444
     55555
     666666
     7777777
     88888888
     999999999
     */
    for (var i = 1; i < 10; i++){
        var output = '';
        for (var j = 0; j < i; j++){
            output = output + i.toString();
        }
        console.log(output);
    }
    /**
    var str = "";
    for (var i = 1; i <= 9; i++){
        for(var j = 1; g <= h; g++){
            str += h;
        }
        str += "\n";
    }
    console.log(str);
    */

     /**
     * Create a for loop that uses console.log to create the output shown below.

     100
     95
     90
     85
     ...5
     */
    for(var i = 100; i > 0; i -= 5){
        console.log(i);
    }
})();
