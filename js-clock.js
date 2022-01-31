function showClock() {
    const xMas = new Date("2022, 12, 25");
    let today = new Date();
    let timesLeft = xMas - today;
    let dayTimes = 1000*60*60*24
    let hourTimes = 1000*60*60
    let minuteTimes = 1000*60

    let daysLeft = Math.floor(timesLeft / dayTimes);
    let hoursLeft = Math.floor((timesLeft % dayTimes) / hourTimes);
    let minutesLeft = Math.floor((timesLeft % hourTimes) / minuteTimes);
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
