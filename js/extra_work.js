"use strict";
(function(){
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
    var fruits = ["apple", "banana", "orange", "apple", "pineapple"];
    console.log(allIndexesOf(fruits, "apple"));      //  should return the array [0, 3]
    console.log(allIndexesOf(fruits, "guava"));      //  should return the array []
    console.log(allIndexesOf(fruits, "pineapple"));  //  should return [4]
})();