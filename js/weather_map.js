"use strict";
$(document).ready(function(){
    mapboxgl.accessToken = MAPBOX_KEY;
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

//    MAP(s) BELOW
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 10,
        center:[-98.493629, 29.424122]
    });

    geocode("San Antonio, TX", MAPBOX_KEY).then(function (result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(8.7);
    });









})