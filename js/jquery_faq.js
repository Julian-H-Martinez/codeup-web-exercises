"use strict";
$(document).ready(function () {
    //  TODO: addClass invisible to all 'dd' elements
    $('dd').addClass('invisible');

    //  TODO: add click event for button to flip from hidden to not-hidden on descriptions
    $('#hide').click(function(e){
        e.preventDefault();
        $('dd').toggleClass('invisible')
        $('#hide').html('Hide Description')

    })
    //  Bonus:
    //  TODO: add click event to highlight each 'dt'
    //  NOTE: $(this) key, will allow you to click on individual elements
    $('dt').click(function(e){
        e.preventDefault();
        $(this).toggleClass('highligthed')
    })


})