"use strict";

//open weather api call url is only http, why work in both? 
//why isn't piedmont park showing up? 
//how to not display keys in code
//errors when map initally tries to 
//mobile functionality, texting picnic details to friends? 
//not using ajax
//$ is for things not there in the initial page load
//es6 friendly? 
//2 spaces vs 4 spaces

var map;
var infowindow;

function getGeoCodingData(zipCode, callback) {
  let geocodingGetURL = 'https://maps.googleapis.com/maps/api/geocode/json';
  const q = {
        address: zipCode,
        key: 'AIzaSyCNUQkYJVOfS9CDDo82v5zYLACw7hyclb4'
    }
  $.getJSON(geocodingGetURL, q , callback);
}

function getWeatherInfo(zipCode, callback) {
  let openWeatherURL = 'https://api.openweathermap.org/data/2.5/forecast?APPID=3b395129c2dab3fcfb25aa3331f82ca9'
  const q = {
      key: '3b395129c2dab3fcfb25aa3331f82ca9',
      zip: zipCode, 
      units: 'imperial'
    }
  $.getJSON(openWeatherURL, q, callback);
}

function displayMap(data) {
  let returnedGeocodeInfo = data;
  let latitude = returnedGeocodeInfo.results[0].geometry.location.lat;
  let longitude = returnedGeocodeInfo.results[0].geometry.location.lng;
  $('#map').removeClass('hidden');
  initMap(latitude,longitude);
}

function displayWeather(data) {
  let returnedWeatherInfo = data;
  console.log(data);
  $('#weather').html(
      `<p>now:</p>
      <p class= "weather-description">${returnedWeatherInfo.list[0].weather[0].main}</p>
      <img class="weather-pic" src="http://openweathermap.org/img/w/${returnedWeatherInfo.list[1].weather[0].icon}.png">
      <p class="weather-temp">${returnedWeatherInfo.list[0].main.temp} &#8457;</p>
      <hr>
      <p>tomorrow:</p>
      <p class= "weather-description">${returnedWeatherInfo.list[1].weather[0].main}</p>
      <img class="weather-pic" src="http://openweathermap.org/img/w/${returnedWeatherInfo.list[2].weather[0].icon}.png">
      <p class="weather-temp">${returnedWeatherInfo.list[1].main.temp} &#8457;</p>
      

`);
    
    //for result loop through and do the following: main, icon, high, low, windspeed, and either day of week or date
    //format and display results *on hard touch with iphone? scroll over with web app? 
    //simple view in circle with day and icon and temp, then when clicked or hard touched the other informaotin comes up
    //when mobile, just diplay first two letters of day and icon, and scoot the things when the viewport is smaller
    
}


function initMap(a, b) {
    
  var city = {lat: a, lng: b};

  map = new google.maps.Map(document.getElementById('map'), {
    center: city,
    zoom: 13
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: city,
    radius: 500,
    type: ['park']
  }, defineMarkerLocations);
}

function defineMarkerLocations(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  console.log(place);
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}


function zipToData() {
    $('#zip-code-submit-button').on('click', function() {
        event.preventDefault();
        let zipCode = $('#user-zip-code').val();
        $('#map').addClass("slideRight");
        $('#weather').addClass("slideLeft");
        getGeoCodingData(zipCode, displayMap);
        getWeatherInfo(zipCode, displayWeather);
    });
}

$(zipToData);