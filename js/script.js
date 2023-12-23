const main = document.querySelector(".main");
const ball = document.querySelector(".ball");

main.addEventListener("click", (ev) => {
  ev.stopPropagation();
  if (ev.target.closest(".ball")) {
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      const randomTopValue = Math.floor(Math.random() * (max - min + 1)) + min;

      ball.style.top = `${randomTopValue}px`;
    }

    getRandomInt(1, 600);

    function leftRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);

      const randomLeftValue = Math.floor(Math.random() * (max - min + 1)) + min;
      ball.style.left = `${randomLeftValue}px`;
    }

    leftRandom(1, 1300);
  }
});
