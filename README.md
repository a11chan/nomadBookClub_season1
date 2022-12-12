# 노마드 개발자 북클럽 1기 리팩터링 과제

:pushpin: [북클럽 스터디 정리](https://www.notion.so/allchan/DONE-cbaa5ddd21534a7297aa9e21d3facf5b)

:pushpin: X-Mas Timer : https://codesandbox.io/s/gracious-agnesi-q8053?file=/index.js

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


##### 수정후(1차)
~~~javascript
function showClock() {
    const xMas = new Date("2022, 12, 25");
    let today = new Date();
    let timesLeft = xMas - today;
    let day = hour*24
    let hour = minute*60
    let minute = 1000*60

    let daysLeft = Math.floor(timesLeft / day);
    let hoursLeft = Math.floor((timesLeft % day) / hour);
    let minutesLeft = Math.floor((timesLeft % hour) / minute);
    let secondsLeft = Math.floor((timesLeft % minute) / 1000);

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

##### 수정후(2차)
~~~javascript
function showTimer() {
    let timesLeft = getTimesLeft();
    let eachLeftTime = getEachLeftTime(timesLeft);
    let timerNumbers = document.querySelector(".js-clock");
    timerNumbers.innerText = getTimeString(eachLeftTime);
}

function getTimesLeft(){
    const xMas = new Date("2022, 12, 25");
    let today = new Date();
    return xMas - today
};

function getEachLeftTime (timesLeft) {
    let minute = 1000*60
    let hour = minute*60
    let day = hour*24

    let daysLeft = Math.floor(timesLeft / day);
    let hoursLeft = Math.floor((timesLeft % day) / hour);
    let minutesLeft = Math.floor((timesLeft % hour) / minute);
    let secondsLeft = Math.floor((timesLeft % minute) / 1000);
    return {daysLeft, hoursLeft, minutesLeft, secondsLeft}
}

function getTimeString ({daysLeft, hoursLeft, minutesLeft, secondsLeft}){
    let dayString = String(daysLeft).padStart(2, "0");
    let hourString = String(hoursLeft).padStart(2, "0");
    let minuteString = String(minutesLeft).padStart(2, "0");
    let secondString = String(secondsLeft).padStart(2, "0");    
    return `${dayString}d ${hourString}h ${minuteString}m ${secondString}s`;
};

showTimer();
setInterval(showTimer, 1000);
~~~
