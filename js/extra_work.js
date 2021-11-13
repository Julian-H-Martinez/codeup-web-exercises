"use strict";
(function(){
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

     Given:
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