const dayOfTheWeek = document.querySelector(".day-of-the-week");
const currentUTCTime = document.querySelector(".utc-time");

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log("anneyng");

window.addEventListener("load", getCurrentDayOfTheWeek);
window.addEventListener("load", getCurrentUTCTime);

function getCurrentDayOfTheWeek() {
  let dayInNumber = new Date().getUTCDay();
  dayOfTheWeek.innerText = daysOfTheWeek[dayInNumber];
}

function getCurrentUTCTime() {
  let timeInMs = new Date().getTime();
  currentUTCTime.innerText = timeInMs;
}
