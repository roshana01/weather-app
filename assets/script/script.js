const inputElem = document.querySelector(".inputElem");
const daysWeek = document.querySelector(".days-week");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const PmAm = document.querySelector(".pm-am");
const cityCountry = document.querySelector(".city_country");
const tempNum = document.querySelector(".tempNum");
const iconImg = document.querySelector(".icon");
const windSpeed = document.querySelector(".speed");
const windDir = document.querySelector(".wind-dir");
const humidity = document.querySelector(".humidity");
const feels = document.querySelector(".feels");
const maxTemp = document.querySelector(".max-temp");
const minTemp = document.querySelector(".min-temp");

let weeks = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];

//    !this is seteup for clock

window.addEventListener("load", () => {
    let timeDate = new Date();
    let dayDate = timeDate.getDay();
    let hoursDate = timeDate.getHours();
    let minutesDate = timeDate.getMinutes();

    if (hoursDate > 12) {
        let hoursPM = hoursDate - 12;
        hour.innerHTML = `${hoursPM} :`;

        PmAm.innerHTML = "PM";
    } else {
        let hoursAM = hoursDate;
        hour.innerHTML = `${hoursAM} :`;
        PmAm.innerHTML = "AM";
    }
    minute.innerHTML = minutesDate;
    daysWeek.innerHTML = weeks[dayDate];

    setInterval(() => {
        let timeDate = new Date();
        let minutesDate = timeDate.getMinutes();
        minute.innerHTML = minutesDate;
    }, 5000);
});

// ! seteup search box

inputElem.addEventListener("keyup", async (ev) => {
    //
    // console.log(ev.target.value);
    if (ev.keyCode === 13) {
        let inputVal = ev.target.value;
        await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=3c0a403646fd939d503b4573507f5a6a`
        )
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                let Country = data.sys.country;
                let City = data.name;
                let Temp = Math.floor(data.main.temp - 273.15);
                cityCountry.innerHTML = `${Country} - ${City}`;
                tempNum.innerHTML = Temp;
                let iconName = data.weather[0].main.toLowerCase();
                iconImg.innerHTML = "";
                console.log(iconName);
                if ((data.weather[0].id > 701) & (data.weather[0].id < 781)) {
                    let html = `<img src="./assets/icon/haze.png" alt=""/>`;
                    iconImg.insertAdjacentHTML("beforeend", html);
                } else {
                    let html = `<img src="./assets/icon/${iconName}.png" alt="" />`;
                    iconImg.insertAdjacentHTML("beforeend", html);
                }
                // !chart footer

                let speed = Math.floor(data.wind.speed);
                windSpeed.innerHTML = `Speed : ${speed} km/h`;
                let deg = data.wind.deg;
                windDir.innerHTML = `Wind direction :${deg}°`;
                let humidityWeather = data.main.humidity;
                humidity.innerHTML = `Humidity : ${humidityWeather}%`;
                let feel = Math.floor(data.main.feels_like - 273.15);
                feels.innerHTML = `Feels like : ${feel}°`;
                let TempMax = Math.floor(data.main.temp_max - 273.15);
                maxTemp.innerHTML = `Max Temp: ${TempMax}°`;
                let TempMin = Math.floor(data.main.temp_min - 273.15);
                minTemp.innerHTML = `Min Temp: ${TempMin}°`;
                let chartValue = [speed, humidityWeather, Temp];
                updateChart(chartValue);
            });
        inputElem.value = "";

        //! setUp line chart
        fetch(
            `https://api.openweathermap.org/data/2.5/forecast?q=${inputVal}&appid=3c0a403646fd939d503b4573507f5a6a`
        )
            .then((res) => {
                console.log(res);
                return res.json();
            })
            .then((data) => {
                let newDataArr = new Array();
                let d = new Date();
                let newTimeArr = [];
                for (let i = 0; i < 8; i++) {
                    let tepmDays = Math.floor(data.list[i].main.temp - 273.15);
                    newDataArr.push(tepmDays);

                    let dt = data.list[i].dt;
                    d.setTime(dt * 1000);
                    let resultTume = `${d.getHours()} :00`;
                    newTimeArr.push(resultTume);
                    console.log(newTimeArr);
                }
                updateChartLine(newDataArr, newTimeArr);
            });
    }
});
