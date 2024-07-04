const startBtn = document.querySelector("#start");
const stopBtn = document.querySelector("#stop");
const body = document.querySelector("body");

const generateRandomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
};

let interval;
const start = () => {
  if (!interval) {
    interval = setInterval(() => {
      body.style.backgroundColor = generateRandomColor();
    }, 1000);
  }
};

const stop = () => {
  clearInterval(interval);
  interval = null;
};

startBtn.addEventListener("click", function () {
  start();
});

stopBtn.addEventListener("click", function () {
  stop();
});
