// Open Weather key = 0070b8ab6dd4e3def57ef272ddea5c19
var city;
var lat;
var lon;
var days = 5;
var APIKey = "0070b8ab6dd4e3def57ef272ddea5c19";
var input = document.getElementById("search-city");

// var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" +"&appid=" +APIKey;
// var queryURL = https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=" + API key 
// "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" + "&appid=" + APIKey; 
var imageToday = document.getElementById("imageToday");
var maxToday = document.getElementById("maxToday");
var minToday = document.getElementById("minToday");
var windToday = document.getElementById("windToday");
var humidityToday = document.getElementById("humidityToday");
var searchButton = document.getElementById("search-button");
var dateDay1 = document.getElementById("dateDay1");
var tempDay1 = document.getElementById("tempDay1");
var iconDay1 = document.getElementById("iconDay1");
var windDay1 = document.getElementById("windDay1");
var humidityDay1 = document.getElementById("humidityDay1");

var dateDay2 = document.getElementById("dateDay2");
var tempDay2 = document.getElementById("tempDay2");
var iconDay2 = document.getElementById("iconDay2");
var windDay2 = document.getElementById("windDay2");
var humidityDay2 = document.getElementById("humidityDay2");
"http://api.openweathermap.org/data/2.5/forecast/daily?q=" + city + "&cnt=" + days + "appid=" + APIKey;

// api.openweathermap.org/data/2.5/forecast/daily?q={city}&cnt={5}&appid={APIKey}

searchButton.addEventListener("click", function(){
    city = input.value.trim();
    localStorage.setItem(input, city);
    localStorage.getItem(input, city);
    
    getAPI();
})

function getAPI() {
    input.value="";
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial" +"&appid=" +APIKey;

    fetch(queryURL)
    .then (function(res) {
        return res.json()
    })
    .then (function(data) {
        console.log(data);
        console.log("MinTemp = " + data.main.temp_min);
        console.log("MaxTemp = " + data.main.temp_max);
        console.log("WindSpeed = " + data.wind.speed);
        console.log("Humidity = " + data.main.humidity); 
        lat = data.coord.lat;
        lon = data.coord.lon;
        
        // console.log("PictureIconId = " + data.weather.icon);
        // var card = document.createElement(p1);
        // // imageToday.src = "http://openweathermap.org/img/wn/" + data.weather[0].icon + "@2x.png";    
        // imageToday.innerHTML = " http://openweathermap.org/img/wn/10d@2x.png";
        minToday.textContent = "Minimum Temp= " + data.main.temp_min + " degrees"; 
        windToday.textContent = "Wind Speed= " + data.wind.speed + " mph"; 
        humidityToday.textContent = "Humidity= " + data.main.humidity + "%"; 
//         // pictureIcon data.weather.icon;
// console.log(pictureIcon.textContent);

        // var minTemp = document.createElement('h2');

        // minTemp.textContent = data.main.temp_min;
        // // card-text.appendChild(minTemp);
        // console.log(maxToday);
getOneCall();
    });
}
function getOneCall() {
 var query5URL = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&units=imperial" + "&appid=" + APIKey;
fetch(query5URL)
    .then (function(res) {
        return res.json()
    })
    .then (function(data) {
        console.log(data);
        for (i=0; i<data.length; i++);
        dateDay1.textContent = new Date (data.daily[1].dt * 1000);
        tempDay1.textContent = "Max Temp: " + data.daily[1].temp.max;
        windDay1.textContent = "Wind Speed: " + data.daily[1].wind_speed + " mph";
        humidityDay1.textContent = "Humidity: " + data.daily[1].humidity + " %";

        dateDay2.textContent = new Date (data.daily[2].dt * 1000);
        tempDay2.textContent = "Max Temp: " + data.daily[2].temp.max;
        windDay2.textContent = "Wind Speed: " + data.daily[2].wind_speed + " mph";
        humidityDay2.textContent = "Humidity: " + data.daily[2].humidity + " %";

        dateDay3.textContent = new Date (data.daily[3].dt * 1000);
        tempDay3.textContent = "Max Temp: " + data.daily[3].temp.max;
        windDay3.textContent = "Wind Speed: " + data.daily[3].wind_speed + " mph";
        humidityDay3.textContent = "Humidity: " + data.daily[3].humidity + " %";

        dateDay4.textContent = new Date (data.daily[4].dt * 1000);
        tempDay4.textContent = "Max Temp: " + data.daily[4].temp.max;
        windDay4.textContent = "Wind Speed: " + data.daily[4].wind_speed + " mph";
        humidityDay4.textContent = "Humidity: " + data.daily[4].humidity + " %";

        dateDay5.textContent = new Date (data.daily[5].dt * 1000);
        tempDay5.textContent = "Max Temp: " + data.daily[5].temp.max;
        windDay5.textContent = "Wind Speed: " + data.daily[5].wind_speed + " mph";
        humidityDay5.textContent = "Humidity: " + data.daily[5].humidity + " %";
    });
}

