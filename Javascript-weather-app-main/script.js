const button = document.getElementById("search-button");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityTemp = document.getElementById("city-temp");

async function getData(city) {
  
  const promise = await fetch(`http://api.weatherapi.com/v1/current.json?key=2de4a26f34334a6587251345232709&q=${city}&aqi=no`)
  return await promise.json();
  
};


button.addEventListener("click", async () => {
  const city = document.getElementById("city-input").value; 
  const result = await getData(city);
  cityName.innerText = `${result.location.name}, ${result.location.region},${result.location.country}`;
  cityTime.innerText = `${result.location.localtime}`;
  cityTemp.innerText = `${result.current.temp_c} °C`;
});