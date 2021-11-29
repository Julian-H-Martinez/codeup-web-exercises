"use strict";
$(document).ready(function () {
    $('dd').addClass('invisible');

    $('#hide').click(function(e){
        e.preventDefault();
        $('dd').toggleClass('invisible')

    })

})