const apiKey = "e88a6dde6f910d5d036c01d38b10d552";
const searchValue = document.querySelector(".search-box");
const city = document.querySelector(".city");
const date = document.querySelector(".date");
const temp = document.querySelector(".temp");
const weather = document.querySelector(".weather");
const hiLow = document.querySelector(".hi-low");
reset();


document.addEventListener('keypress', function (e) {
	let value;
    if (e.key === 'Enter') {
    	//CLEAR UI
    	reset();


    	
    	if(searchValue.value){
    		value = searchValue.value;

    		//GET DATA
    		getWeather(value);


    		//clearSearchField]
    		clearText();





    	}
    	else{
    		alert("No value");
    	}
    	
      // code for enter
    }
});
















const getWeather = async function(query){
	let res = await fetch(`https:api.openweathermap.org/data/2.5/weather?q=${query}&appid=${apiKey}&units=metric`);
	try{
		data = await res.json();
		let newTemp = data.main.temp;
		let newCity =`${data.name},${data.sys.country}`;
		let newMinMax = `${data.main.temp_max} C / ${data.main.temp_min} C`;
		let newWeather = data.weather[0].description;
		newWeather=newWeather.toUpperCase();
		//UPDATE UI
		temp.textContent = newTemp+" C";
		city.textContent = newCity;
		hiLow.textContent =newMinMax;
		weather.textContent =newWeather;





	}catch(err){
		alert("ERROR!.Try AGAin");

	}

	
}




function clearText(){
	searchValue.value ="";

}
function reset(){
		temp.textContent = "";
		city.textContent = "";
		hiLow.textContent ="";
		weather.textContent ="";


}

function dateBuilder (d) {
  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  let day = days[d.getDay()];
  let date = d.getDate();
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${day} ${date} ${month} ${year}`;
}