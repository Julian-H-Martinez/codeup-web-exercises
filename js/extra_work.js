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

     var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
     removeAll(bugs, "ant") should return ["mosquito", "scorpion",   "mosquito", "typo", "reference error", "type error"]
     removeAll(bugs, "mosquito") should return ["ant", "scorpion", "ant",   "ant", "typo", "reference error", "type error"]
     removeAll(bugs, "roach") should return the original array b/c "roach" has no occurrances.
     */
    /**
     * Not completed! Need to figure out how to remove all instances of a value in an array
     * Pressing pause before I throw this computer ---- JK / JK
     * When I return I will start from scratch and baby step it
     * Don't forget to console log
     * Don't forget to use GOOGLE!!!
     * You're almost there!!!!
     */
    // function removeAll(array, value){
    //     console.log(array);
    //     var indexToRemove = allIndexesOf(array, value), i, j;
    //     console.log(indexToRemove);
    //     //  if statement to show if value is in array
    //     //  if greater than -1(which is what's returned when index does not exist) then complete action
    //     //  creating for loop to remove all indexes of values
    //     for (i = 0; i < array.length; i++){
    //         for(j = 0; j < indexToRemove.length; j++){
    //             if(i === indexToRemove[j]){
    //                 console.log(array[i] + " I am at index " + i + "!");
    //                 //  action needed to remove value at index
    //                 array.splice(array[i], 1);
    //         }
    //
    //         }
    //     }
    //     return array;
    // }
    // var bugs = ["mosquito", "ant", "scorpion", "ant", "ant", "mosquito", "typo", "reference error", "type error"];
    // console.log(bugs);
    // console.log(removeAll(bugs, "ant"));         //  should return ["mosquito", "scorpion",   "mosquito", "typo", "reference error", "type error"]
    // console.log(bugs);
    // console.log(removeAll(bugs, "mosquito"));    //  should return ["ant", "scorpion", "ant",   "ant", "typo", "reference error", "type error"]
    // console.log(removeAll(bugs, "roach"));       //  should return the original array b/c "roach" has no occurrences.
    //////////////////////////////---FUNCTIONS---/////////////////////////////////////
    /**
     * Make a function named isOdd(number)
     */
    function isOdd(num){
        return num % 2 !== 0;
    }
    // console.log(isOdd(3));
    // console.log(isOdd(36));
    // console.log(isOdd(23));
})();