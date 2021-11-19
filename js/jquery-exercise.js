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
    // codeup.css('border', 'solid 1px red')

    /**
     * Element Selectors

     // Remove your custom jQuery code from previous exercises.
     // Using jQuery, set the font-size of all li elements to 20px.
     Craft selectors that highlight all the h1, p, and li elements.
     Create a jQuery statement to alert the contents of your h1 element(s).
     */
    var listsFont = $('li');
    listsFont.css({
        'font-size': '20px'
    })
    var multipleSelectors = $('h1', 'p', 'li')
    alert($('h1').html());

    /**
     * Multiple Selectors

     Combine your selectors that highlight all the h1, p, and li elements.
     */
});