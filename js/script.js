const main = document.querySelector(".main");
const ball = document.querySelector(".ball");

let arrTimer = [];

main.addEventListener("click", (ev) => {
  ev.stopPropagation();
  if (ev.target.closest(".ball")) {
    function topRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);

      const randomTopValue = Math.floor(Math.random() * (max - min + 1)) + min;
      ball.style.top = `${randomTopValue}px`;
    }
    topRandom(1, 600);

    function leftRandom(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);

      const randomLeftValue = Math.floor(Math.random() * (max - min + 1)) + min;
      ball.style.left = `${randomLeftValue}px`;
    }
    leftRandom(30, 1300);

    function timer() {
      const start = Date.now();

      renderTime(1000);
    }
    timer();

    function renderTime(milliseconds) {
      const objTime = {
        id: arrTimer.length,
        text: "passed:",
      };

      const wrapper = document.querySelector(".time_wrapper");
      const item = document.createElement("div");

      item.innerHTML = ` 
    <div id="${objTime.id}" class="time_item">
      <span class="time_title">${objTime.text}</span>

      <span class="time">${milliseconds} ms</span>
    </div>`;

      wrapper.append(item);
      arrTimer.push(objTime);

      if (arrTimer.length === 5) {
        // arrTimer = arrTimer[arrTimer.length - 1]//
        arrTimer = [];
        wrapper.innerHTML = "";
      }
    }
  }
});
