"use strict";
(function(){
    ////////////////////////////---DOM---////////////////////////////
    /**
     * Dom Events
     When a user hits the "g" key, the background of the page should turn purple.
     Every time the enter key is pressed, increment and display a counter that shows the total number of times the enter key has been pressed.
     When someone types 1, 2, 3 in a row, show an alert that says "You get a 50% discount!".
     */

    ///////////////////////////---ARRAYS---///////////////////////////
    /**
     * Define a function named allIndexesOf that takes in two arguments.
     * The first argument should be the array to search and the second argument should be the value you want to search for.
     * If the item does not exist in the provided array, return an empty array.
     *
     * StackOverflow: https://stackoverflow.com/questions/20798477/how-to-find-index-of-all-occurrences-of-element-in-array#:~:text=indexOf()%20method%20has%20an,%3B%20while%20((i%20%3D%20arr.

     Given:
     var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
     allIndexesOf(fruits, "apple") should return the array [0, 3]
     allIndexesOf(fruits, "guava") should return the array []
     allIndexesOf(fruits, "pineapple") should return [4]
     */

    function allIndexesOf(a, b){
        var arrOfIndex = [], i;
        for(i = 0; i < a.length; i++){
            if(a[i] === b){
                arrOfIndex.push(i);
            }
        }
        return arrOfIndex;
    }
    // var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
    // console.log(allIndexesOf(fruits, "apple"));      //  should return the array [0, 3]
    // console.log(allIndexesOf(fruits, "guava"));      //  should return the array []
    // console.log(allIndexesOf(fruits, "pineapple"));  //  should return [4]

    /**
     * Define a function named removeAll(array, value) that takes in two arguments.
     * The first argument should be an array and the second argument should be a value you wish to remove

     cite: https://stackoverflow.com/questions/5767325/how-can-i-remove-a-specific-item-from-an-array
     */
    function removeAll(arr, value){
        var runner = 0;
        while(runner < arr.length){
            if(arr[runner] === value){
                arr.splice(runner, 1);
            }else{
                ++runner;
            }
        }
        return arr;
    }

    // var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
    // console.log(removeAll(bugs, "ant"));        //  should return ["mosquito", "scorpion", "mosquito", "typo", "reference error", "type error"]
    // console.log(removeAll(bugs, "mosquito"));   //  should return ["ant", "scorpion", "ant", "ant", "typo", "reference error", "type error"]
    // console.log(removeAll(bugs, "roach"));      //  should return the original array b/c "roach" has no occurrances.

    /** Make a function called randomIntBetween(min, max) that returns a random number between the min and the max. */
    //  note that max is not inclusive so will need to add one if you want a certain number inclusive
    function randomIntBetween(min, max){
        return Math.floor(Math.random()*(max - min)+min);
    }
    // console.log(randomIntBetween(10, 22));
    /** Make a function called coinFlip() that returns either 0 or 1, randomly */
    function coinFlip(){
        return randomIntBetween(0, 2);
    }
    // console.log(coinFlip());
    /** Make a function called twoDice() that returns the sum of rolling two six sided dice */
    function twoDice(){
        var dice1 = randomIntBetween(1, 7), dice2 = randomIntBetween(1, 7);
        return `${dice1} + ${dice2} = ${dice1 + dice2}`;
    }
    // console.log(twoDice());
    /** Make a function called twentySidedDie() that returns a random integer between 1 and 20 */
    function twentySideDie(){
        return randomIntBetween(1, 21);
    }
    // console.log(twentySideDie());
    /** Make a function called twelveSidedDie() that returns a random integer between 1 and 12 */
    function twelveSidedDie(){
        return randomIntBetween(1, 13);
    }
    // console.log(twelveSidedDie());
    /** Make a function called tetrahedron() that returns a random integer between 1 and 4 */
    function tetrahedron(){
        return randomIntBetween(1, 5);
    }
    // console.log(tetrahedron());
    /** Make a function called rollDie() that returns an integer between 1 and 6 */
    function rollDie(){
        return randomIntBetween(1, 7);
    }
    /** Make a function called listOfRolls(num) that takes in a number containing how many 6-sided dice rolls you want to make. The listOfRolls
     *  function should return an array of that length, where each element of the array is the result of the rollDie function */
    function listOfRolls(num){
        var bucket = [], i=0;
        while(i < num){
            var dieRoll = rollDie()
            bucket.push(dieRoll)
            ++i;
        }
        return bucket;
    }
    // console.log(listOfRolls(3));    //  should return an array of 3 random numbers
    // console.log(listOfRolls(5));    //  should return an array of 5 random numbers
    // console.log(listOfRolls(7));    //  should return an array of 7 random numbers
    /** Make a function called listOfRollsFromDieFunc(numberOfRolls, diceFunction) */
    /**
     This function should take in two arguments:
     The first argument is the number of rolls you want to make.
     The second argument is a function that contains the function definition for the type of die you want to roll.
     For example, if we call listOfDieRollsFromDieFunc(1, tetrahedron), then the function will return an array containing one value that is the
     result of calling the tetrahedron function.
     */
    //  currently the function is keeping same number throughout the loop
    //  will need to continue working to see where
    //  add some logs to better identify what's happening
    //  still getting same number
    //  able to get function to work; when calling a function we will need the () in order for the function to be invoked
    //  otherwise the function will run only once or not at all
    //  added () to dieFunc on ln123 diceRoll = dieFunc() which invokes the function and runs accordingly
    function listOfRollsFromDieFunc(numberOfRolls, dieFunc){
        var bucket = [], i=0, diceRoll;
        while(i < numberOfRolls){
            diceRoll = dieFunc();
            bucket.push(diceRoll);
            ++i;
        }
        return bucket;
    }

    // console.log(listOfRollsFromDieFunc(3, tetrahedron));
    // console.log(listOfRollsFromDieFunc(7, twelveSidedDie));
    // console.log(listOfRollsFromDieFunc(5, twentySideDie));



    //////////////////////////////---FUNCTIONS---/////////////////////////////////////
    /**
     * Make a function named isOdd(number)
     */
    function isOdd(num){
        return num % 2 !== 0;
    }
    /**
     * Make a function named isEven(number)
     */
    function isEven(num){
        return !isOdd(num);
    }
    /**
     * Make a function named identity(input) that returns the input exactly as provided.
     */
    function identity(input){
        return input;
    }
    /**
     * Make a function named isFive(input)
     */
    function isFive(input){
        return input == 5;
    }
    /**
     * Make a function named addFive(input) that adds five to some input.
     */
    function addFive(input){
        return parseFloat(input) + 5;
    }
    /**
     * Make a function named isMultipleOfFive(input)
     */
    function isMultipleOfFive(input){
        return parseFloat(input) % 5 == 0;
    }
    // console.log(isMultipleOfFive(155));
    // console.log(isMultipleOfFive("155"));
    // console.log(isMultipleOfFive(18));
    // console.log(isMultipleOfFive(-425));
    // console.log(addFive(5));
    // console.log(addFive('5'));
    // console.log(addFive('hello world'));
    // console.log(isFive(5));
    // console.log(isFive(-5));
    // console.log(isFive('-5'));
    // console.log(isFive(33));
    // console.log(isFive('hello world'));
    // console.log(identity(2));
    // console.log(identity('Hello World'));
    // console.log(identity(true));
    // console.log(isEven(3));
    // console.log(isEven(22));
    // console.log(isEven('23'));
    // console.log(isOdd(3));
    // console.log(isOdd(36));
    // console.log(isOdd(23));
})();