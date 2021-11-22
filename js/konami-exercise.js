"use strict";
$(document).ready(function () {

    //  creating a bucket for users key input
    var userInputKC = [];
    //  variable for the actual konami code (converted to str)
    var contraCodeStr = "3838404037393739666513";
    var contraCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65, 13];
    //  creating var for mainbody selector
    var mainBody = $('#mainBody');
    var wrongStart = $('.wrongStart');
    var dancing = $('.dancing');
    var dksFalse = $('.false');
    var tooMany = $('.tooMany');
    var header = $('h1');

    $(document).keydown(function (event) {
        // console.log(event.keyCode);     //  38,38,40,40,37,39,37,39,66,65,13
        userInputKC.push(event.keyCode);
        // console.log(userInputKC.join(""));
        if (userInputKC[0] !== 38) {
            wrongStart.html('starting off all wrong GUY!').css({
                'color': 'red',
                'font-size': '36px',
            });
            dksFalse.css({
                'display': 'flex',
                'margin': '0 auto'
            })
            mainBody.css('background-color', 'red')
        }
        if (userInputKC.length > contraCode.length) {
            tooMany.css({
                'display': 'flex',
                'margin': '0 auto'
            })
            mainBody.css('background-color', 'orange')
            // alert('too many characters bruh')
        }
        if (userInputKC.join("") === contraCodeStr) {
            // console.log('it finally worked');
            console.log(userInputKC.length);
            mainBody.css('background-color', 'green');
            dancing.css({
                'background-image': 'img/mgsDance.gif',
                'display': 'flex',
                'margin': '0 auto'
            })
            header.css({
                'font-family': 'Permanent Marker cursive'
            })
            // alert("You have added 30 lives!");
        }
    });
})