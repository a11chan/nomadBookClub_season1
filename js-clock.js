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
