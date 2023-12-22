const main = document.querySelector(".main");

main.addEventListener("click", (ev) => {
  ev.stopPropagation();
  if (ev.target.closest(".ball")) {
    console.log("ball!");
  }
});
