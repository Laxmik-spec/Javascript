function showTime() {
  const currentTime = new Date();
  console.log(currentTime);
  const time = `${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;

  document.getElementById("time").innerText = time;
}

const interval = setInterval(showTime,1000);

const button = document.getElementById("stop-time");

button.addEventListener("click", () => {
  clearInterval(interval);
  document.getElementById("time").innerText = "Timer Stopped";
});
