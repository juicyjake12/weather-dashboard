
var weather = {
    fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=df430eaf4efe581c905ef93ff158bf76")
            .then((response) => response.json())
            .then((data) => this.displayWeather(data));
    },
    //display weather/weather types
    displayWeather: function (data) {
        const { temp, humidity } = data.main;
        const { name } = data;
        const { speed } = data.wind;
        const { icon, description } = data.weather[0];
        document.querySelector("#description").innerText = description;
        document.querySelector("#temp").innerText = temp + "f";
        document.querySelector("#icon").src = "https://openweathermap.org/img/wn/" + icon + "@2x.png";
        document.querySelector("#wind").innerText = "wind speed: " + speed + "mph";
        document.querySelector("#city").innerText = "weather in " + name;
        document.querySelector("#humidity").innerText = "humidity level:" + humidity + "%";
    },
    //searchbox function to find city
    search: function () {
        this.fetchWeather(document.querySelector(".searchbox").value);
    },
};

document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
});

//local storage 


