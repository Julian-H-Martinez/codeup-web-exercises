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

    // $.get('https://pokeapi.co/api/v2/pokemon/charmander').done(function(data){
    //     console.log(data);
    // })

    // $.ajax('https://pokeapi.co/api/v2/pokemon/charmander').done(function(data, status, jqXhr){
    //     alert("AJAX call completed successfully!");
    //     console.log("Request status: " + status);
    //     console.log("Data returned from server: ");
    //     console.log(data);
    //     console.log("This is jqXhr: ", jqXhr);
    // })

    // $.ajax('https://pokeapi.co/api/v2/pokemon/charmander')
    //     .done(function(data, status, jqXhr){
    //         alert("Everything went great! Check out the server's response in the console.");
    //         console.log(data);
    //     })
    //     .fail(function (jqXhr, status, error){
    //         alert("There was an error! Check the console for details");
    //         //  custom error message
    //         // let errMessage = "No known address!"
    //         console.log("Response status: " + status);
    //         // console.log("Error object: " + errMessage);
    //         console.log("Error object: " + error);
    //     })
    //     .always(function(){
    //         alert("This function always runs!");
    //     })
    function onSuccess(data, status, jqXhr){
        alert("Everything went great! Check out the server's response in the console!!!");
        console.log(data);
    }
    function onFail(jqXhr, status, error){
        alert("There was an error! Check the console for details");
        let errMessage = "Please check url. Thanks!";
        console.log("Response status: " + status);
        console.log("Error object: " + error);
        console.log(errMessage);
    }
    function stopLoadingAnimation(){
        alert("Load has been complete! Animation is donzo!!!");
        console.log("Successfully uploaded");
    }
    $.ajax("https://pokeapi.co/api/v2/pokemon/charmnder")
        .done(onSuccess)
        .fail(onFail)
        .always(stopLoadingAnimation);

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
    //  easiest way to manipulate AJAX options
    //  passing js object as 2nd argument
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