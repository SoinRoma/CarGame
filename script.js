const score = document.querySelector(".score");
const start = document.querySelector(".start");
const gameArea = document.querySelector(".gameArea");
const car = document.createElement("div");

car.classList.add("car");

start.addEventListener("click", startGame);
document.addEventListener("keydown", startRun);
document.addEventListener("keyup", stopRun);

const keys = {
  KeyW: false,
  KeyS: false,
  KeyA: false,
  KeyD: false,
};

const setting = {
  start: false,
  score: 0,
  speed: 3,
};

function startGame() {
  start.classList.add("hide");
  setting.start = true;
  gameArea.appendChild(car);
  requestAnimationFrame(playGame);
}

function playGame() {
  console.log("Play Game");
  if (setting.start) {
    requestAnimationFrame(playGame);
  }
}

function startRun(event) {
  event.preventDefault();
  keys[event.key] = true;
  console.log(event);
}

function stopRun(event) {
  event.preventDefault();
  keys[event.key] = false;
  console.log(event);
}
