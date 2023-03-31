let inputCity = document.querySelector('.lname');
let btnCity = document.querySelector('.inputCity');


let switchTheme = document.querySelector('.switchTheme');

let yearM = document.querySelector('.year');
let time = document.querySelector('.nowTime');

let leftpanel = document.querySelector('.block001_leftpanel');

let primeDate = document.querySelector('.frame');

let primeWeather_Time = document.querySelector('.primeTime');
let showLocation = document.querySelector('.display');
let primeWeather_location = document.querySelector('.citylocation');
let primeWeather_temp = document.querySelector('.weather');
let primeWeather_description = document.querySelector('.weatherdescription');
let btnLocation = document.querySelector('.showlocationBtn');


let border_001 = document.querySelector('.w002_s001_b001');
let border_002 = document.querySelector('.w002_s001_b002');
let border_003 = document.querySelector('.w002_s002_b001');
let border_004 = document.querySelector('.w002_s002_b002');

let primeWeather_WindSpeed = document.querySelector('.weatherinfo_002_date_001');
let primeWeather_Humidity = document.querySelector('.weatherinfo_002_date_002');
let primeWeather_Pressure = document.querySelector('.weatherinfo_002_date_003');
let primeWeather_Visibility = document.querySelector('.weatherinfo_002_date_004');

let dayWeekSunday = document.querySelector('.section_002_block002_001');
let dayWeekMonday = document.querySelector('.section_002_block002_002');
let dayWeekTuesday = document.querySelector('.section_002_block002_003');
let dayWeekWednesday = document.querySelector('.section_002_block002_004');
let dayWeekThursday = document.querySelector('.section_002_block002_005');
let dayWeekFriday = document.querySelector('.section_002_block002_006');
let dayWeekSaturday = document.querySelector('.section_002_block002_007');

let dayWeekSunday_date = document.querySelector('.section_002_block002_date_001');
let dayWeekMonday_date = document.querySelector('.section_002_block002_date_002');
let dayWeekTuesday_date = document.querySelector('.section_002_block002_date_003');
let dayWeekWednesday_date = document.querySelector('.section_002_block002_date_004');
let dayWeekThursday_date = document.querySelector('.section_002_block002_date_005');
let dayWeekFriday_date = document.querySelector('.section_002_block002_date_006');
let dayWeekSaturday_date = document.querySelector('.section_002_block002_date_007');

let dayWeekSunday_img = document.querySelector('.section_002_block002_img_001');
let dayWeekMonday_img = document.querySelector('.section_002_block002_img_002');
let dayWeekTuesday_img = document.querySelector('.section_002_block002_img_003');
let dayWeekWednesday_img = document.querySelector('.section_002_block002_img_004');
let dayWeekThursday_img = document.querySelector('.section_002_block002_img_005');
let dayWeekFriday_img = document.querySelector('.section_002_block002_img_006');
let dayWeekSaturday_img = document.querySelector('.section_002_block002_img_007');


let table = document.querySelector('.dinamic_table');



// function getDate (lat, lon, city, cityName) {



function getDate (lat, lon, city, cityName) {


    let key = '';

    if (city === false) {
        cityName = '';
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&cnt=3&appid=${key}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            sortObj(json);
            func001(json);
        })
    } else if (city === true) {
        // cityName = tashkent;
        fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${key}`)
        .then(response => response.json())
        .then(json => {
            console.log(json);
            sortObj(json);
            func001(json);
        })
    } else {
        console.log('Incorrect Date!!!');
    }

};




// getDate(41.2646, 69.2163, false, '');



function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        showLocation.innerHTML = "Geolocation is not supported by this browser.";
    }


}

function showPosition(position) {
    let latitude = position.coords.latitude
    let longitude = position.coords.longitude;

    showLocation.innerHTML = `Location - ${latitude}:${longitude}`;

    getDate(latitude, longitude, false, '');
}

function sortObj(json) {

  primeWeather_location.innerHTML = `${json.city.name}`;

    if (json.name == undefined) {
      console.log('Place not found!');
      fetchindicator(false);
    } else {
      console.log('Find place...');
      fetchindicator(true);
    }
  
  primeWeather_temp.innerHTML = `${Math.trunc(Number((json.list[0].main.temp) - 273))}&#176;`;
  primeWeather_description.innerHTML = `${(json.list[0]['weather'][0]['description'])}`;

  primeWeather_WindSpeed.innerHTML = `${json.list[0].wind.speed} km/h`;
  primeWeather_Humidity.innerHTML = `${json.list[0].main.humidity} %`;
  primeWeather_Pressure.innerHTML = `${json.list[0].main.pressure} hpa`;
  primeWeather_Visibility.innerHTML = `${json.list[0].visibility}`;

  let date = new Date();
  let dayWeek = date.getDay();


    dayWeekSunday_date.innerHTML = `${Math.trunc(Number((json.list[0].main.temp) - 277))}&#176;`;
    dayWeekSunday_img.src = `http://openweathermap.org/img/w/${(json.list[0].weather[0].icon)}.png`;

    dayWeekMonday_date.innerHTML = `${Math.trunc(Number((json.list[0].main.temp) - 271))}&#176;`;
    dayWeekMonday_img.src = `http://openweathermap.org/img/w/${(json.list[0].weather[0]['icon'])}.png`;

    dayWeekTuesday_date.innerHTML = `${Math.trunc(Number((json.list[0].main.temp) - 269))}&#176;`;
    dayWeekTuesday_img.src = `http://openweathermap.org/img/w/${(json.list[0].weather[0].icon)}.png`;

    dayWeekWednesday_date.innerHTML = `${Math.trunc(Number((json.list[0].main.temp) - 275))}&#176;`;
    dayWeekWednesday_img.src = `http://openweathermap.org/img/w/${(json.list[0].weather[0]['icon'])}.png`;

    dayWeekThursday_date.innerHTML = `${Math.trunc(Number((json.list[0].main.temp) - 272))}&#176;`;
    dayWeekThursday_img.src = `http://openweathermap.org/img/w/${(json.list[0].weather[0].icon)}.png`;

    dayWeekFriday_date.innerHTML = `${Math.trunc(Number((json.list[0].main.temp) - 274))}&#176;`;
    dayWeekFriday_img.src = `http://openweathermap.org/img/w/${(json.list[0].weather[0]['icon'])}.png`;

    dayWeekSaturday_date.innerHTML = `${Math.trunc(Number((json.list[0].main.temp) - 273))}&#176;`;
    dayWeekSaturday_img.src = `http://openweathermap.org/img/w/${(json.list[0].weather[0].icon)}.png`;



}

function setDate() {
    let date = new Date();
    let year = date.getFullYear();

    let month = date.getMonth();

    if (month == 0) {
      month = 'January';
    } else if (month == 1) {
      month = 'February';
    } else if (month == 2) {
      month = 'March';
    } else if (month == 3) {
      month = 'April';
    } else if (month == 4) {
      month = 'May';
    } else if (month == 5) {
      month = 'June';
    } else if (month == 6) {
      month = 'July';
    } else if (month == 7) {
      month = 'August';
    } else if (month == 8) {
      month = 'September';
    } else if (month == 9) {
      month = 'October';
    } else if (month == 10) {
      month = 'November';
    } else if (month == 11) {
      month = 'December';
    } else {
      month = 'Incorrect Date';
    }

    yearM.innerHTML = `${month} ${year}`;

    let day = date.getDate();

    let dayWeek = date.getDay();

    if (dayWeek == 0) {
      dayWeek = 'Sunday';
      dayWeekSunday.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(30,233,255,1) 35%, rgba(0,212,255,1) 100%)";
    } else if (dayWeek == 1) {
      dayWeek = 'Monday';
      dayWeekMonday.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(30,233,255,1) 35%, rgba(0,212,255,1) 100%)";
    } else if (dayWeek == 2) {
      dayWeek = 'Tuesday';
      dayWeekTuesday.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(30,233,255,1) 35%, rgba(0,212,255,1) 100%)";
    } else if (dayWeek == 3) {
      dayWeek = 'Wednesday';
      dayWeekWednesday.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(30,233,255,1) 35%, rgba(0,212,255,1) 100%)";
    } else if (dayWeek == 4) {
      dayWeek = 'Thursday';
      dayWeekThursday.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(30,233,255,1) 35%, rgba(0,212,255,1) 100%)";
    } else if (dayWeek == 5) {
      dayWeek = 'Friday';
      dayWeekFriday.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(30,233,255,1) 35%, rgba(0,212,255,1) 100%)";
    } else if (dayWeek == 6) {
      dayWeek = 'Saturday';
      dayWeekSaturday.style.background = "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(30,233,255,1) 35%, rgba(0,212,255,1) 100%)";
    } else {
      dayWeek = 'Incorrect Date';
    }


    time.innerHTML = `${dayWeek}, ${month} ${day}, ${year}`;

    let hour = date.getHours();
    let minute = date.getMinutes();

    primeWeather_Time.innerHTML = `Today, ${hour}:${minute}`;

}

function fetchindicator(status) {
  if (status == true) {
    return true;
  } else {
    return false;
  }
}

function inputLocation() {
  
  getDate('', '', true, `${inputCity.value}`);
    
  if (inputCity.value | fetchindicator == true) {
    showLocation.innerHTML = "Just minute";
    console.log(`${inputCity.value}`);
  } else {
    showLocation.innerHTML = "404. Opps! This location Could Not Be Found!";
  }
  
  
}

btnCity.addEventListener("click", inputLocation);


setDate();

btnLocation.addEventListener("click", getLocation);

leftpanel.classList.remove("block001_leftpanel");
leftpanel.classList.add("leftpanelB");

inputCity.style.animation = "";
btnCity.style.animation = "";
primeDate.style.animation = "";
border_001.style.animation = "";
border_002.style.animation = "";
border_003.style.animation = "";
border_004.style.animation = "";

function changeTheme() {

    if (localStorage.getItem('myKey')) {
      localStorage.removeItem("myKey");
      inputCity.style.animation = "textInput 2s linear infinite";
      btnCity.style.animation = "textInput 2s linear infinite";
      leftpanel.classList.add("block001_leftpanel");
      primeDate.style.animation = "border 5s linear infinite";
      border_001.style.animation = "border 5s linear infinite";
      border_002.style.animation = "border 5s linear infinite";
      border_003.style.animation = "border 5s linear infinite";
      border_004.style.animation = "border 5s linear infinite";
      document.body.setAttribute('dark', '');
    } else {
      localStorage.setItem('myKey', 'myValue');
      inputCity.style.animation = "";
      btnCity.style.animation = "";
      leftpanel.classList.remove("block001_leftpanel");
      leftpanel.classList.add("leftpanelB");
      primeDate.style.animation = "";
      border_001.style.animation = "";
      border_002.style.animation = "";
      border_003.style.animation = "";
      border_004.style.animation = "";
      document.body.removeAttribute('dark');
    }
}

switchTheme.addEventListener("click", changeTheme);


function func001(element) {

  

  
  for (let i = 0; i < (element.list).length; i++) {
    console.log(element.list[i]);

    let prime_cell = document.createElement('tr');

    let cell_001 = document.createElement('td');
    let cell_002 = document.createElement('td');
    let cell_003 = document.createElement('td');
    let cell_004 = document.createElement('td');

    cell_001.style.border = "2px dashed #1e9bff";
    cell_002.style.border = "2px dashed #1e9bff";
    cell_003.style.border = "2px dashed #1e9bff";
    cell_004.style.border = "2px dashed #1e9bff";


    cell_001.innerHTML = `${Math.trunc(Number((element.list[i].main.temp) - 273))}&#176;`;

    cell_002.innerHTML = element.list[i].weather[0].description;

    let image = document.createElement('img');
    image.src = `http://openweathermap.org/img/w/${(element.list[i].weather[0].icon)}.png`;
    
    cell_003.append(image);

    cell_004.innerHTML = element.list[i].dt_txt;

    prime_cell.append(cell_001, cell_002, cell_003, cell_004);

    table.append(prime_cell);
  };
  
};


