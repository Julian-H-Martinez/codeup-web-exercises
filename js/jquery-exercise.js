"use strict";
$(document).ready(function(){
    //  all jQuery methods will be sitting in .ready

    /**
     * Id Selectors

     // Create content in your HTML file using at least the following elements: h1, p, ul, li, div.
     // Add several attributes to your elements; you will need both id and class attributes.
     // Use jQuery to select an element by the id. Alert the contents of the element.
     // Update the jQuery code to select and alert a different id.
     // Use the same id on 2 elements. How does this change the jQuery selection? Only one alert fires
     // Remove the duplicate id. Each id should be unique on that page.
      */
    // var mainHeader = $('#mainHeader');
    // var card1 = $('#cardBox1');
    // alert(mainHeader.html());
    // alert(card1.html());

    /**
     * Class Selectors

     // Remove your custom jQuery code from previous exercises.
     // Update your code so that at least 3 different elements have the same class named codeup.
     // Using jQuery, create a border around all elements with the class codeup that is 1 pixel wide and red.
     // Remove the class from one of the elements. Refresh and test that the border has been removed.
     // Give another element an id of codeup. Does this element get a border now? No
     */
    // var codeup = $('.codeup');
    // codeup.css('border', '1px solid red')

    /**
     * Element Selectors

     // Remove your custom jQuery code from previous exercises.
     // Using jQuery, set the font-size of all li elements to 20px.
     Craft selectors that highlight all the h1, p, and li elements.
     Create a jQuery statement to alert the contents of your h1 element(s).
     */
    // var listsFont = $('li');
    // listsFont.css({
    //     'font-size': '20px'
    // })
    // var headers = $('h1');
    // var paras = $('p');
    // var lists = $('li');
    // alert($(headers).html());

    /**
     * Multiple Selectors

     Combine your selectors that highlight all the h1, p, and li elements.
     */
    // $('h1, p, li')
    /**
     * Use the file jquery_exercises.html for these exercises. Commit your changes to GitHub.

     // Remove your custom jQuery code from previous exercises.
     // Add jQuery code that will change the background color of an h1 element when clicked.
     // Make all paragraphs have a font size of 18px when they are double clicked.
     // Set all li text color to red when the mouse is hovering; reset to black when it is not.
     */
    $('h1').click(function(){
        $('h1').css('background-color', 'blue');
    });
    $('p').dblclick(function(){
        $('p').css('font-size', '18px');
    });
    $('li').hover(
        function(){
        $('li').css('color', 'red');
        },
        function(){
            $('li').css('color', 'black');
        })
});