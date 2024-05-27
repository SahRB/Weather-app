const apikey="e7f0d75e9cd31da0d8988ebe21161a6d";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=italy";

async function checkWeather(){
    const response = await fetch(apiUrl + `&appid=${apikey}`);
    var data =await response.json();

    console.log(data);

}
checkWeather();