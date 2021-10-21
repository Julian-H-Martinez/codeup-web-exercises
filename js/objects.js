(function() {
    "use strict";

    /**
     * TODO:
     * Create an object with firstName and lastName properties that are strings
     * with your first and last name. Store this object in a variable named
     * `person`.
     *
     * Example:
     *  > console.log(person.firstName) // "Rick"
     *  > console.log(person.lastName) // "Sanchez"
     */
    var person = {};
    console.log(person.firstName = "Julian");
    console.log(person.lastName = "Martinez");
    /**
     * TODO:
     * Add a sayHello method to the person object that returns a greeting using
     * the firstName and lastName properties.
     * console.log the returned message to check your work
     *
     * Example
     * > console.log(person.sayHello()) // "Hello from Rick Sanchez!"
     */
    person.sayHello = function(){
        return `What's happening ${person.firstName} ${person.lastName}!`;
    }
    console.log(person.sayHello());
    /** TODO:
     * HEB has an offer for the shoppers that buy products amounting to more than $200.
     * If a shopper spends more than $200, they get a 12% discount.
     * Write a JS program, using conditionals, that logs to the browser, how much Ryan, Cameron and George need to pay.
     * We know that Cameron bought $180, Ryan $250 and George $320.
     * Your program will have to display a line with the name of the person, the amount before the discount, the discount, if any, and the amount
     * after the discount.
     *
     * Uncomment the lines below to create an array of objects where each object
     * represents one shopper. Use a foreach loop to iterate through the array,
     * and console.log the relevant messages for each person
     */

    var shoppers = [
        {name: 'Cameron', amount: 180},
        {name: 'Ryan', amount: 250},
        {name: 'George', amount: 320}
    ];
    shoppers.forEach(function(shopper) {
        if (shopper.amount > 200) {
            var discountAmt = shopper.amount * 0.12;
            var amtAfterDiscount = shopper.amount - discountAmt;
            console.log(`${shopper.name}\nAmount Before Discount: ${shopper.amount}\nYour Discount Is: ${discountAmt}\nYour Total After Discount: ${amtAfterDiscount}`);
        } else {
            console.log(`${shopper.name}\nAmount Before Discount: ${shopper.amount}\nYour Discount Is: $0\nYour Total After Discount: ${shopper.amount}`);
        }
    });

    /** TODO:
     * Create an array of objects that represent books and store it in a
     * variable named `books`. Each object should have a title and an author
     * property. The author property should be an object with properties
     * `firstName` and `lastName`. Be creative and add at least 5 books to the
     * array
     *
     * Example:
     * > console.log(books[0].title) // "The Salmon of Doubt"
     * > console.log(books[0].author.firstName) // "Douglas"
     * > console.log(books[0].author.lastName) // "Adams"
     */
    var books = [
        {
            title:"Extraordinary Ownership",
            author:{
                firstName:"Jocko",
                lastName:"Willink"
            }
        },
        {
            title:"The Five Love Languages",
            author:{
                firstName: "Gary",
                lastName: "Chapman"
            }
        },
        {
            title:"Think Like A Monk",
            author:{
                firstName: "Jay",
                lastName: "Shetty"
            }
        },
        {
            title:"The Sicilian",
            author:{
                firstName: "Mario",
                lastName: "Puzo"
            }
        },
        {
            title:"You Were Made to Make a Difference",
            author:{
                firstName: "Max",
                lastName: "Lucado"
            }
        },
    ];
    console.log(books[0].title);
    console.log(books[0].author.firstName);
    console.log(books[0].author.lastName);
    /**
     * TODO:
     * Loop through the books array and output the following information about
     * each book:
     * - the book number (use the index of the book in the array)
     * - the book title
     * - author's full name (first name + last name)
     *
     * Example Console Output:
     *
     *      Book # 1
     *      Title: The Salmon of Doubt
     *      Author: Douglas Adams
     *      ---
     *      Book # 2
     *      Title: Walkaway
     *      Author: Cory Doctorow
     *      ---
     *      Book # 3
     *      Title: A Brief History of Time
     *      Author: Stephen Hawking
     *      ---
     *      ...
     */
    books.forEach(function(book, index){
        console.log(`Book #${index + 1}\nTitle: ${book.title}\nAuthor: ${book.author.firstName} ${book.author.lastName}`)
    })
    /**
     * Bonus:
     * - Create a function named `createBook` that accepts a title and author
     *   name and returns a book object with the properties described
     *   previously. Refactor your code that creates the books array to instead
     *   use your function.
     */

    /**
     * Working on createBook function;
     * need to remove lines 164-167
     * believe I may have figured it out
     * possibly need to have showInfo inside createBook function
     * @param title
     * @param author
     */

    function createBook(title, author){
        var splitName = author.split(' ');
        var books = {
            title: title,
            author: {
                firstName: splitName[0],
                lastName: splitName[splitName.length-1]
            }
        }

        this.title = title;
        this.author.firstName = splitName[0];
        this.author.lastName = splitName[splitName.length-1];
        this.showBookInfo = function(){
            return `${this.title} written by ${this.authorFirstName} ${this.authorLastName}!`;
        }

    }
    // var book1 = books("Goodnight Moon", "Margaret Brown");
    // console.log(book1.showBookInfo());
    // console.log(createBook("Goodnight Moon", "Margaret Brown"));
    // console.log(createBook("The Very Hungry Caterpillar", "Eric Carle"));
    // console.log(createBook("Where the Wild Things Are", "Maurice Sendak"));
    // console.log(createBook("The Cat in the Hat", "Dr. Seuss"));
    // console.log(createBook("Charlotte's Web", "E.B. Hello White"));
    // console.log(bookInventory);
    /**
     * Create a function named `showBookInfo` that accepts a book object and
     * outputs the information described above. Refactor your loop to use your
     * `showBookInfo` function.
     */


})();