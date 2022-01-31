function showClock() {
    const xMas = new Date("2021, 12, 25");
    let today = new Date();
    let timesLeft = xMas - today;
    let perDay = 1000*60*60*24
    let perHour = 1000*60*60
    let perMinute = 1000*60

    let daysLeft = Math.floor(timesLeft / perDay);
    let hoursLeft = Math.floor((timesLeft % perDay) / perHour);
    let minutesLeft = Math.floor((timesLeft % perHour) / perMinute );
    let secondsLeft = Math.floor((timesLeft % perMinute) / 1000);

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
