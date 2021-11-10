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

    // for(var i = 1; i <= 100; i++){
    //     if (i % 15 === 0){
    //         console.log("FizzBuzz");
    //     }else if(i % 5 === 0){
    //         console.log("Buzz");
    //     }else if(i % 3 === 0){
    //         console.log("Fizz");
    //     }else{
    //         console.log(i);
    //     }
    // }
    /**
     * Warmups
     Create a function named secondToLast that accepts an array as an argument and will return the second to last element of the array.
     */
    // function secondToLast(arr){
    //     return arr[arr.length-2];
    // }
    //
    // console.log(secondToLast([1, 43, 23, 65, 420]));
    /**
     * Warmups
     Write a function named ‘moveToEnd’ that takes in an array, and returns the array with the original first index moved to the last index of the array.

     Example:
     moveToEnd([1, 2, 3, 4]) 		  // returns [2, 3, 4, 1];
     moveToEnd([‘roll’, ‘rock’, ‘and’]  // returns [‘rock’, ‘and’, ‘roll’];
     */
    // function moveToEnd(arr){
    //     var elemRemoved = arr.shift();
    //     arr.push(elemRemoved);
    //     return arr;
    // }
    //
    // console.log(moveToEnd([1, 2, 3, 4])); 		  // returns [2, 3, 4, 1];
    // console.log(moveToEnd(["roll", "rock", "and"]));

    /**
     * function moveToEnd(arr){
     *     var removedElem = arr.shift();
     *     arr.push(removedElem);
     *     return arr;
     * }
     */

    /**
     * Warmup
     Visit https://www.pokemon.com/us/pokedex/ and select one of your favorite pokemon (it can be whatever you choose) and
     create an object variable to represent the chosen pokemon. The more information you have, the better!
     We will be using this for lecture today.
     */

    var ursaringPokemon = {
        id: 217,
        name: "Ursaring",
        height: {
            feet: 5,
            inches: 11,
        },
        description: ['In the forests inhabited by Ursaring, it is said that there are many streams and towering trees where they gather food.' +
        ' This Pokémon walks through its forest gathering food every day.', '']
    }

    var medititePokemon = {
        id: 307,
        name: "Meditite",
        height: {
            feet: 2,
            inches: 0,
        },
        description: ['Meditite heightens its inner energy through meditation. ' +
            'It survives on just one berry a day. Minimal eating is another aspect of this Pokémon’s training.',
            'Meditite undertakes rigorous mental training deep in the mountains. However, whenever it meditates, ' +
            'this Pokémon always loses its concentration and focus. As a result, its training never ends.'],
    }
    var copperajahPokemon = {
        id: 879,
        name: "Copperajah",
        height: {
            feet: 9,
            inches: 10,
        },
        description: ['They came over from another region long ago and worked together with humans. Their green skin is resistant to water.',
            'These Pokémon live in herds. Their trunks have incredible grip strength, strong enough to crush giant rocks into powder.'],
    }
    var throhPokemon = {
        id: 538,
        name: "Throh",
        height: {
            feet: 4,
            inches: 3,
        },
        description: ['It performs throwing moves with first-rate skill. Over the course of many battles, ' +
        'Throh’s belt grows darker as it absorbs its wearer’s sweat.', 'They train in groups of five. Any member that can’t keep up will discard' +
        ' its belt and leave the group.'],
    }
    var inteleonPokemon = {
        id: 818,
        name: "Inteleon",
        height: {
            feet: 6,
            inches: 3,
        },
        description: ['It has many hidden capabilities, such as fingertips that can shoot water and a membrane on its back that it can use to' +
        ' glide through the air.', 'Its nictitating membranes let it pick out foes’ weak points so it can precisely blast them with water that' +
        ' shoots from its fingertips at Mach 3.'],
    }
    var eldegossPokemon = {
        id: 830,
        name: "Eldegoss",
        height: {
            feet: 1,
            inches: 8,
        },
        description: ['The seeds attached to its cotton fluff are full of nutrients. It spreads them on the wind so that plants and other Pokémon' +
        ' can benefit from them.', 'The cotton on the head of this Pokémon can be spun into a glossy, gorgeous yarn—a Galar regional specialty.'],
    }
    var cameruptPokemon = {
        id: 323,
        name: "Camerupt",
        height: {
            feet: 6,
            inches: 3,
        },
        description: ['Camerupt has a volcano inside its body. Magma of 18,000 degrees Fahrenheit courses through its body. Occasionally, the' +
        ' humps on this Pokémon’s back erupt, spewing the superheated magma.', 'The humps on Camerupt’s back are formed by a transformation of its' +
        ' bones. They sometimes blast out molten magma. This Pokémon apparently erupts often when it is enraged.'],
    }
    var roggenrolaPokemon = {
        id: 524,
        name: "Roggenrola",
        height: {
            feet: 1,
            inches: 4,
        },
        description: ['It’s as hard as steel, but apparently a long soak in water will cause it to soften a bit.', 'When it detects a noise, it' +
        ' starts to move. The energy core inside it makes this Pokémon slightly warm to the touch.'],
    }
    /**
     * Warmups
     Create a function that accepts an array as an argument, and that returns an array of objects that have a nationality property of “Canadian”.
     */
    //  Use the following array:
        var wrestlers = [
            {
                name: "Bret Hart",
                nationality: "Canadian"
            }, {
                name: "Shawn Michaels",
                nationality: "American"
            }, {
                name: "Christian Cage",
                nationality: "Canadian"
            }, {
                name: "Keiji Mutoh",
                nationality: "Japanese"
            }, {
                name: "Eddy Guerrero",
                nationality: "American"
            }, {
                name: "Owen Hart",
                nationality: "Canadian"
            }
        ];
    function canukWrestler(array){
        var canukWrestlers = [], i;
        for(i = 0; i < array.length; i++){
            if(array[i].nationality !== 'Canadian'){
                continue;
            }
            canukWrestlers.push(array[i]);
        }
        return canukWrestlers;
    }

    /**
     * David's Solution
     * function filterForCanadians(arr){
     *     var bucket = [];
     *     arr.forEach(function (element){
     *         if(element.nationality === 'Canadian'){
     *             bucket.push(element);
     *         }
     *     });
     *     return bucket;
     * }
     */

    // console.log(canukWrestler(wrestlers));

    // var groceries = [
    //     {
    //         name: "carrots",
    //         quantity: 5
    //     },{
    //         name: "yams",
    //         quantity: 50
    //     },{
    //         name: "oranges",
    //         quantity: 9
    //     },{
    //         name: "onions",
    //         quantity: 2
    //     },{
    //         name: "cucumbers",
    //         quantity: 6
    //     },{
    //         name: "potatoes",
    //         quantity: 8
    //     }
    // ];
    /**
     * Morning Warmup:
     Create a function that takes in an array of objects, and returns the object with the highest quantity property.

     Ex. getHighestQuantityObject(groceries)//returns {name: “yams”, quantity: 50};
     */
//     function highestQtyItem(array){
//         console.log(array[0]);
//         return 'Highest qty item is groceries.name and there is groceries.qty.'
//     }
// //  Need to finish function. Create a variable as your 'bucket' to represent obj in arr.
//     console.log(highestQtyItem(groceries));


    /**
     * Morning Warmup:
     Write a function named ‘sortByName’ that takes in an array of objects, and
     returns an array of objects in alphabetical order based on the name property.
     */
    // var products = [
    //     {
    //         name: 'Playstation 5',
    //         price: 599.99
    //     }, {
    //         name: 'Logitech Wireless Mouse',
    //         price: 23.99
    //     }, {
    //         name: 'Macbook Pro',
    //         price: 1099.99
    //     }, {
    //         name: 'GoPro HERO10',
    //         price: 399.99
    //     }, {
    //         name: '12" & 6" Metal Ruler Set',
    //         price: 5.99
    //     }]
    //
    // function sortByName(arr){
    //     return arr.sort((a, b) => {
    //         let fa = a.firstName.toLowerCase(),
    //             fb = b.firstName.toLowerCase();
    //
    //         if (fa < fb) {
    //             return -1;
    //         }
    //         if (fa > fb) {
    //             return 1;
    //         }
    //         return 0;
    //     });
    // }
    // products.forEach((e) => {
    //     console.log(`${e.firstName} ${e.lastName}`);
    // });
    /**
     * Jay's Walkthrough
     * function sortByName(arr){
     *     return arr.sort(function(a, b){
     *         var aLower = a.name.toLowercase();
     *         var bLower = b.name.toLowercase();
     *         if(aLower < bLower){
     *          return -1;  // determines ascending and descending
     *         }else if(aLower > bLower){
     *          return 1;
     *         }else{
     *          return 0
     *         }
     *     });
     * }
     * console.log(sortByName(products));
     */
    /**
     * Tue 11.09 Warm-Up
     * Morning Warmup:
     Write a function in JavaScript that takes in an array of objects and returns the object with the lowest height property.
     Consider the following array to test your code.

     */
    var bBallPlayers = [
        {
            name: "Hakeem Olajuwon",
            height: 213
        }, {
            name: "Muggsy Bogues",
            height: 160
        }, {
            name: "Chris Paul",
            height: 183
        }, {
            name: "Bol Bol",
            height: 218
        }, {
            name: "Moochie Norris",
            height: 185
        }, {
            name: "Manu Ginobili",
            height: 198
        }
    ];
    function smallFry(arr) {
        var somePlayer = {
            name: 'likeMike',
            height: Number.MAX_VALUE
        };
        arr.forEach(function (e) {
            if (e.height < somePlayer.height) {
                somePlayer = e;
            }
        })
        return somePlayer;
    }

    console.log(smallFry(bBallPlayers));
    /**
     * David's Walk-through
     * function findShortest(arr){
     *     var holdThis = {height: Number.MAX_VALUE};
     *     arr.forEach(function(e){
     *         if(e.height < holdThis.height){
     *         holdThis = e;
     *         }
     *     });
     *     return holdThis
     * }
     * console.log(findShortest(bBallPlayers);
     */
    /**
     * Wed, 11.10 Warm-up
     * Morning Warmup:
     * Name your character object, and complete the attack method.
     * The attack method should use the myCharacter weapon object to deal damage to the enemy objects hit points.
     * When the attack method has been executed, the hit points of the enemy object should reflect the damage done in the console.
     */
    var myCharacter = {
        name: 'Ol_Head',
        hitPoints: 100,
        class: 'Warrior',
        abilities: {
            attack: function(obj) {
                //  add a console log sentence of what's happening
                obj.hitPoints -= myCharacter.weapon.damage;
                //  add a console log of hitPoints
                return obj;
            },
        },
        magicPoints: 0,
        weapon: {
            name: 'Silver Sabre',
            damage: 16,
            type: 'sword'
        }
    }
    var enemy = {
        name: 'Savage Orc',
        hitPoints: 100,
        class: 'Warrior',
        magicPoints: 0,
    }
    console.log(myCharacter.abilities.attack(enemy));
}) ();