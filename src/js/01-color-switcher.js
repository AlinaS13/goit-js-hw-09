const startBtn = document.querySelector('[data-start]');
const stopBtn = document.querySelector('[data-stop]');

let timerId = null;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

stopBtn.disabled = true;
startBtn.addEventListener('click', () => {
  timerId = setInterval(() => {
    stopBtn.disabled = false;
    startBtn.disabled = true;
    const colorResult = getRandomHexColor();
    document.body.style.background = colorResult;
  }, 1000);
});

stopBtn.addEventListener('click', () => {
  stopBtn.disabled = true;
  startBtn.disabled = false;
  clearInterval(timerId);
});
