const screen = document.querySelector("body");
const h1 = document.createElement("h1");
screen.appendChild(h1);

h1.innerHTML = "RSS Keyboard by Julia Filippova";
const text = document.createElement("textarea")
screen.appendChild(text);

const keyboard = document.createElement("div");
keyboard.className = "keyboard";
screen.appendChild(keyboard);

const OS = document.createElement("p");
OS.innerHTML = "THE OPERATING SYSTEM: WINDOWS"
screen.appendChild(OS);

const press = document.createElement("p");
press.innerHTML = "Press left CTRL+ALT to switch language "
screen.appendChild(press);

const keyboardArray = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "Shift", "Ctrl", "Alt", "_", "Alt", "←", "↓", "→", "Ctrl"];

// let caps;
const init = () => {
  let out = "";
  for (let i = 0; i < keyboardArray.length; i += 1) {
    if (i === 14 || i === 28 || i === 41 || i === 54) {
      out += "<div class='clear'></div>";
    }
    out += `<div class ='btn' data="${keyboardArray[i]}"> ${keyboardArray[i]} </div>`;
    keyboard.innerHTML = out;
    // if (keyboardArray[i] === "CapsLock") {
    //   caps = keyboardArray[i];
    // }
  }
}
init();

document.onkeydown = (event) => {
  document.querySelectorAll(".keyboard .btn").forEach((el) => {
    el.classList.remove("active");
  });
  document.querySelector(`.keyboard .btn[data="${event.key}"]`).classList.add("active");
}

document.querySelectorAll(".keyboard .btn").forEach((el) => {
  el.addEventListener("click", () => {
    document.querySelectorAll(".keyboard .btn").forEach((element) => {
      element.classList.remove("active");
    });
    el.classList.add("active");
  });
});
