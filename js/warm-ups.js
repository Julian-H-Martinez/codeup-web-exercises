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
    var hadBreakfast = Boolean(Math.round(Math.random()));

    var hadBreadfastMessage = hadBreakfast ? 'I had a steak omelette with vegetables and salsa!!! Delish!' :
        'No, I fast until lunch time. Or at least I try to. Hahahahaha!!!';
    console.log(hadBreakfast);
    console.log(hadBreadfastMessage);
}) ();