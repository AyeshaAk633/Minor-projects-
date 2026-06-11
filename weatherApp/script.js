const API_Key = "7b821cd0b9ae785866d657ee30c41a8c"

const input = document.getElementById("city");
const button = document.getElementById("btn");
const cityName = document.getElementById("city-name");
const temp = document.getElementById("temp");
const condition = document.getElementById("condition");

async function getweather(city){
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`
  
  try{
    let response = await fetch(url)

    let data = await response.json()

    console.log(data)
    cityName.innerText = data.name + ", " + data.sys.country

    temp.innerText = data.main.temp + "°C" 

    condition.innerText = " ☁️" + data.weather[0].main

    document.getElementById("wind").innerHTML = `<div>Wind : ${data.wind.speed}</div>`

    document.getElementById("humidity").innerHTML = `<div>Humidity : ${data.main.humidity}%</div>`

    document.getElementById("visibility").innerHTML = `<div>Visibility : ${data.visibility}</div>`

    document.getElementById("pressure").innerHTML = `<div>pressure : ${data.main.pressure}</div>`
    
  }catch(error ){
    console.log("Error fetching")
  }
}

