const inputElem = document.querySelector(".inputElem");
const daysWeek = document.querySelector(".days-week");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const PmAm = document.querySelector(".pm-am");
const cityCountry = document.querySelector(".city_country");
const tempNum = document.querySelector(".tempNum");
const iconImg = document.querySelector(".icon");

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

inputElem.addEventListener("keyup", (ev) => {
    //
    // console.log(ev.target.value);
    if (ev.keyCode === 13) {
        let inputVal = ev.target.value;
        fetch(
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
                let iconName = data.weather[0].main;
                iconImg.innerHTML = "";
                console.log(iconName);
                if ((data.weather[0].id > 701) & (data.weather[0].id < 781)) {
                    let html = `<img src="./assets/icon/Haze.png" alt=""/>`;
                    iconImg.insertAdjacentHTML("beforeend", html);
                } else {
                    let html = `<img src="./assets/icon/${iconName}.png" alt="" />`;
                    iconImg.insertAdjacentHTML("beforeend", html);
                }
            });
        inputElem.value = "";
    }
});

// ! seteup chart weather
