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
