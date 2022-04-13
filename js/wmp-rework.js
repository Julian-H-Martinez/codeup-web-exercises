"use strict";
$(document).ready(function (){
    //  FORMATS TO MAKE API CALL
    // //  Format 1
    //  GET weather (endpoint)
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: WEATHER_KEY,
        // q: "San Antonio, US",
        //  SEARCH CITY BY id
        // id: 4726206,
        //  SEARCH BY lon & lat
        lat: 29.423017,
        lon: -98.48527,
        //  CHANGING FROM KELVIN TO IMPERIAL
        units: "imperial"
    }).done(function(data){
        console.log(data);
    });

    //  GET forecast (endpoint)
    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: WEATHER_KEY,
        // q: "San Antonio, US",
        //  SEARCH CITY BY id
        // id: 4726206,
        //  SEARCH BY lon & lat
        lat: 29.423017,
        lon: -98.48527,
        //  CHANGING FROM KELVIN TO IMPERIAL
        units: "imperial"
    }).done(function(data){
        console.log('5 day forecast', data);    //  returns forecast for 3 hour increments per day for 5 days
    });

    //  GET one call (endpoint)
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: WEATHER_KEY,
        // q: "San Antonio, US",
        //  SEARCH CITY BY id
        // id: 4726206,
        //  SEARCH BY lon & lat
        lat: 29.423017,
        lon: -98.48527,
        //  CHANGING FROM KELVIN TO IMPERIAL
        units: "imperial"
    }).done(function(data){
        console.log('The entire response: ', data);
        console.log('Diving in - here is current information: ', data.current);
        console.log('A step further - information for tomorrow: ', data.daily[1]);
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