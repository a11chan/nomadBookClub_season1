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
