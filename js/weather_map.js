"use strict";
$(document).ready(function () {
    var name = $('#name');
    var temp = $('.temp');
    var listOfDays = $('#listOfDays');
    var newArrayOfDays = []
    mapboxgl.accessToken = MAPBOX_KEY;

    // $.get("http://api.openweathermap.org/data/2.5/weather", {
    //     APPID: WEATHER_KEY,
    //     q:     "San Antonio, US",
    //     units: "imperial",
    // }).done(function(data) {
    //     console.log(data);
    //     console.log(typeof data);
    //     var nameValue = data.name;
    //     // console.log(nameValue);
    //     var tempValue = data.main.temp;
    //     // console.log(tempValue);
    //     name.html = nameValue;
    //     // $("#weather_icon").attr("src", `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
    //     // $('#card #name').html(`${nameValue}`);
    //     // $('#card .temp').html(`Today's Temperature is: ${tempValue}`);
    // });

    $.get("http://api.openweathermap.org/data/2.5/onecall", {
        APPID: WEATHER_KEY,
        lat: 29.423017,
        lon: -98.48527,
        units: "imperial"
    }).done(function (data) {
        var currentDayTemp = data.current.temp;
        console.log(currentDayTemp);

        var arrOfDays = data.daily;
        console.log(arrOfDays);

        var formattedDate = new Date(arrOfDays[2].dt * 1000)

        // var singleDayTemp = arrOfDays[3].temp.day;
        // console.log(singleDayTemp);

        var weatherIcon = data.current.weather[0].icon;
        // console.log(weatherIcon);
        console.log('The entire response:', data);
        console.log('Diving in - here is current information: ', data.current);
        console.log('A step further - information for tomorrow: ', data.daily[1]);
        $("#weather_icon").attr("src", `http://openweathermap.org/img/w/${weatherIcon}.png`);
        // $('#card #name').html(`${currentDayTemp}`);
        // $('#card .temp').html(`Tomorrow's Temperature is: ${singleDayTemp}`);
        // displayDay(arrOfDays);
        displayDayTemp(arrOfDays);
        // console.log(formattedDate);
        arrOfDays.forEach(function (day) {
            var obj = new Object({
                'temp': day.temp.day,
                'date': day.dt,
                'icon': weatherIcon
            })
            // console.log(obj);
            newArrayOfDays.push(obj)
        })
        // console.log(newArrayOfDays);
        displayDays(newArrayOfDays)
    });

    // function to display temp and date (date is UNIX and will correct later)
    function displayDays(arr) {
        arr.forEach(function (day) {
            console.log(day.temp);
            console.log(day.date);
            console.log(day.icon);
            $('#listOfDays').append(`
                <div class="card">
                    <div class="card-body d-flex flex-column align-items-center">
<!--                        <img id="weather_icon" src="" alt="weather icon" height="50px" width="50px">-->
                        <h5 class="card-title text-center">${day.temp}</h5>
                        <p class="card-text text-center">${day.date}</p>
                    </div>
                </div>`)
        })
    }

    /**
     <!--                    -->
     <!--                    <h5 class="card-title text-center" id="name1">Today's Weather Report</h5>-->
     <!--                    <p class="card-text temp text-center">Info on today's weather</p>-->
     <!--                </div>-->
     <!--            </div>-->
     <!--        </div>-->
     */



    function displayDayTemp(arr) {
        arr.forEach(function (day) {
            // console.log(day.temp.day);
            name.html(`<h5 class = "card-title text-center">${day.temp.day}</h5>`);
        })
        return arr;
    }

//    class="card-title text-center"

//    MAP(s) BELOW
    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        zoom: 10,
        center: [-98.493629, 29.424122]
    });

    geocode("San Antonio, TX", MAPBOX_KEY).then(function (result) {
        console.log(result);
        map.setCenter(result);
        map.setZoom(8.7);
    });


})