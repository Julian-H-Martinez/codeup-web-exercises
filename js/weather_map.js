"use strict";
$(document).ready(function(){
    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: WEATHER_KEY,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
        // console.log('The entire response:', data);
        // console.log('Diving in - here is current information: ', data.current);
        // console.log('A step further - information for tomorrow: ', data.daily[1]);
    });












})