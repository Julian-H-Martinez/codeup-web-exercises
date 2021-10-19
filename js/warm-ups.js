"use strict";
(function (){
    //  Write a function that returns the number 7
    // function isSeven(input){
    //     return 7;
    // }
    // console.log(isSeven());
    //
    // //  boolean of false action will not happen
    // if(false){
    //     console.log('Am I seen?');
    // }

    /**
     * The following code will set the variable hadBreakfast to a random boolean value.
     * Copy and paste the following code into your warmups JS file:
     var hadBreakfast = Boolean(Math.round(Math.random()));
     Write a ternary expression to set a variable of hadBreakfastMessage to a string expressing whether or
     not you have had breakfast. You will use the variable hadBreakfast as your condition.
     * @type {boolean}
     */
    // var hadBreakfast = Boolean(Math.round(Math.random()));
    //
    // var hadBreadfastMessage = hadBreakfast ? 'I had a steak omelette with vegetables and salsa!!! Delish!' :
    //     'No, I fast until lunch time. Or at least I try to. Hahahahaha!!!';
    // console.log(hadBreakfast);
    // console.log(hadBreadfastMessage);

    /**
     * Write a function called ‘typeCheck’ that takes an input and returns a string of the data type entered.
     * If the data type is a string, return the string “Haha, it’s a string of string!”
     *
     Tests:
     typeCheck(‘’)
     typeCheck(isNaN());
     typeCheck(!false * 3);
     typeCheck(4 + ‘4’);
     */
    // function typeCheck(input){
    //     if(typeof input === 'string'){
    //         return `Ha Ha, this is a string!`
    //     }else{
    //         return typeof input;
    //     }
    // }
    // console.log(typeCheck(''));
    // console.log(typeCheck(isNaN()));
    // console.log(typeCheck(!false * 3));
    // console.log(typeCheck(4 + '4'));

    /**
     * Warmups
     - When writing code to test our tests in TDD it’s important to put
     yourself in the mindset of a (junior) web developer.
     This will help you in ensuring that our tests are fully comprehensive.
     When writing code with tests provided to me, it’s important for me to
     write code:
     A. With minimal effectiveness so as to green all the tests.
     B. With full functionality so as to ensure my function works as intended
     $$$ C. Both $$$
     */

    /**
     * Warmups
     * Write a program that console.logs the numbers from 1 to 100.
     * But for multiples of three console.log “Fizz” instead of the number and for the multiples of five console.log “Buzz”.
     * For numbers which are multiples of both three and five console.log “FizzBuzz”.
     */

    for(var i = 1; i <= 100; i++){
        if (i % 15 === 0){
            console.log("FizzBuzz");
        }else if(i % 5 === 0){
            console.log("Buzz");
        }else if(i % 3 === 0){
            console.log("Fizz");
        }else{
            console.log(i);
        }
    }

}) ();