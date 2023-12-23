const main = document.querySelector(".main");
const ball = document.querySelector(".ball");

main.addEventListener("click", (ev) => {
  ev.stopPropagation();
  if (ev.target.closest(".ball")) {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      const randomValue = Math.floor(Math.random() * (max - min + 1)) + min;
      ball.style.top = `${randomValue}px`;
    }

    getRandomInt(1, 600);
  }
});
