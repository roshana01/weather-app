const inputElem = document.querySelector(".inputElem");
const daysWeek = document.querySelector(".days-week");
const hour = document.querySelector(".hour");
const minute = document.querySelector(".minute");
const PmAm = document.querySelector(".pm-am");

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
    }, 60000);
});
