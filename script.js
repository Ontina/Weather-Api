
let button = document.getElementById("btn")
button.onclick = function(){
  let search = document.querySelector(".search-bar").value

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3d2b62d8872a9d84d9f746dd36269bbf`)
  .then((res) => res.json())
  .then((res) => {
    document.getElementById("weather").style.visibility = "visible";
    
    document.querySelector(".city").innerText = `Weather in ${search}`
    document.querySelector(".temp").innerText = `${Math.round(res.main.temp -273.15)}°C`
    document.querySelector(".description").innerText = res.weather[0].description
    document.querySelector(".humidity").innerText = `humidity: ${res.main.humidity}%`
    document.querySelector(".wind").innerText = `wind speed: ${res.wind.speed} km/h`
    document.querySelector(".country").innerText = res.sys.country
  })
  .catch((err) => console.log(err))  
}

let input = document.querySelector(".search-bar")
input.onchange = function(e){
  let search = e.target.value

  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=3d2b62d8872a9d84d9f746dd36269bbf`)
  .then((res) => res.json())
  .then((res) => {
    document.getElementById("weather").style.visibility = "visible";
    document.getElementById("loading").style.display = "none";
    document.querySelector(".city").innerText = `Weather in ${search}`
    document.querySelector(".temp").innerText = `${Math.round(res.main.temp -273.15)}°C`
    document.querySelector(".description").innerText = res.weather[0].description
    document.querySelector(".humidity").innerText = `humidity: ${res.main.humidity}%`
    document.querySelector(".wind").innerText = `wind speed: ${res.wind.speed} km/h`
    document.querySelector(".country").innerText = res.sys.country
  })
  .catch((err) => console.log(err))  
}






