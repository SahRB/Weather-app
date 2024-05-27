const apikey="e7f0d75e9cd31da0d8988ebe21161a6d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input")
const searchBtn = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")

async function checkWeather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data =await response.json();

    console.log(data);
    document.querySelector(".city").innerHTML= data.name;
    document.querySelector(".temp").innerHTML= Math.round(data.main.temp)  + "°C" ;
    document.querySelector(".humidity").innerHTML= data.main.humidity +"%";
    document.querySelector(".wind").innerHTML= data.wind.speed +"km/h";

    if(data.weather[0].main =="Clouds"){
            weatherIcon.src="assets/images/cloud.png"
    }else if(data.weather[0].main =="Clear"){
        weatherIcon.src="assets/images/clear.png"
    }else if(data.weather[0].main =="Rain"){
    weatherIcon.src="assets/images/rain.png"
    }else if(data.weather[0].main =="Drizzle"){
    weatherIcon.src="assets/images/drizzle.png"
    }else if(data.weather[0].main =="Mist"){
        weatherIcon.src="assets/images/mist.png"
    }else if(data.weather[0].main =="Snow"){
        weatherIcon.src="assets/images/snow.png"
    }
    document.querySelector(".weather").style.display ="block";
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value)
})

