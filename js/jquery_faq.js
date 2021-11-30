"use strict";
$(document).ready(function () {
    //  TODO: addClass invisible to all 'dd' elements
    $('dd').addClass('invisible');

    //  TODO: add click event for button to flip from hidden to not-hidden on descriptions
    $('#hide').click(function (e) {
        e.preventDefault();
        $('dd').toggleClass('invisible')
        $('#hide').html('Hide Description')

    })
    //  Bonus:
    //  TODO: add click event to highlight each 'dt'
    //  NOTE: $(this) key, will allow you to click on individual elements
    $('dt').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('highligthed')
    })

    //  TODO: add click event to button so that each li item background is yellow
    $('#yellowBkg').click(function () {
        // e.preventDefault();
        $('ul').each(function(index){
            if(index >= 0){
                $(this).children().last().toggleClass('highligthed2')
            }
        })
    })

    //  TODO: add click event to h3 so that <li>s will be bolded to font-weight: bold
    $('h3').click(function(){
        $(this).next().children().toggleClass('boldedFont')
    })

    //  TODO: add click event to li so that first li of parent ul should have blue font
    $('li').click(function(){
        $(this).parent().children().first().toggleClass('blueFont');
    })

    /**
     * Walkthrough with David on last problem
     * $("li").click(function(){
     *     $(this).parent().children().first().toggleClass("className")
     * }
     */

})