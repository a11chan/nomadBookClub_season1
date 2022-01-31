# nomadBookClub_season1

#### [노개북](https://nomadcoders.co/community/book-club) 1기 리팩터링 과제


##### 수정전
~~~javascript
const merry = document.querySelector(".js-clock");

function getClock() {
const christmas = new Date("2021, 12, 25");
const date = new Date();
const timeGap = christmas - date;

const xDay = Math.floor(timeGap / (1000 * 60 * 60 * 24));
const xHours = Math.floor(
(timeGap - xDay * 1000 * 60 * 60 * 24) / (1000 * 60 * 60)
);
const xMinutes = Math.floor((timeGap % (60 * 60 * 1000)) / (60 * 1000));
const xSeconds = Math.floor((timeGap % (60 * 1000)) / 1000);

const day = String(xDay).padStart(2, "0");
const hours = String(xHours).padStart(2, "0");
const minutes = String(xMinutes).padStart(2, "0");
const seconds = String(xSeconds).padStart(2, "0");

merry.innerText = `${day}d ${hours}h ${minutes}m ${seconds}s`;
}

getClock();
setInterval(getClock, 1000);
~~~


##### 수정후
~~~javascript
function showClock() {
    const xMas = new Date("2022, 12, 25");
    let today = new Date();
    let timesLeft = xMas - today;
    let dayTimes = 1000*60*60*24
    let hourTimes = 1000*60*60
    let minuteTimes = 1000*60

    let daysLeft = Math.floor(timesLeft / dayTimes);
    let hoursLeft = Math.floor((timesLeft - daysLeft*dayTimes) / hourTimes);
    let minutesLeft = Math.floor((timesLeft % hourTimes) / minuteTimes );
    let secondsLeft = Math.floor((timesLeft % minuteTimes) / 1000);

    let dayPrint = String(daysLeft).padStart(2, "0");
    let hourPrint = String(hoursLeft).padStart(2, "0");
    let minutePrint = String(minutesLeft).padStart(2, "0");
    let secondPrint = String(secondsLeft).padStart(2, "0");

    let clockPrint = document.querySelector(".js-clock");
    clockPrint.innerText =
        `${dayPrint}d ${hourPrint}h ${minutePrint}m ${secondPrint}s`;
}

showClock();
setInterval(showClock, 1000);
~~~
