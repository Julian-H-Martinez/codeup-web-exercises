"use strict";
$(document).ready(function (){
    //  FORMATS TO MAKE API CALL
    // //  Format 1
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: WEATHER_KEY,
        q: "San Antonio, US",
        //  CHANGING FROM KELVIN TO IMPERIAL
        units: "imperial"
    }).done(function(data){
        console.log(data);
    });

    // //  Format 2
    // $.ajax({
    //     url: "http://api.openweathermap.org/data/2.5/weather",
    //     type: "GET",
    //     data: {
    //         APPID: WEATHER_KEY,
    //         q: "San Antonio, US"
    //     }
    // }).done(function(data){
    //     console.log(data);
    // });

    // //  Format 3
    // $.ajax("http://api.openweathermap.org/data/2.5/weather", {
    //     data: {
    //         APPID: WEATHER_KEY,
    //         q: "San Antonio, US"
    //     }
    // }).done(function(data){
    //     console.log(data);
    // })

    // //  Format 4
    // $.get("http://api.openweathermap.org/data/2.5/weather?APPID=" + WEATHER_KEY + "&q=San+Antonio,+US").done(function(data){
    //     console.log(data);
    // });
})