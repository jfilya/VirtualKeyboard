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

const keyboardArray = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "Shift", "Ctrl", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"];

const init = () => {
  let out = "";
  for (let i = 0; i < keyboardArray.length; i += 1) {
    if (i === 14 || i === 28 || i === 41 || i === 54) {
      out += "<div class='clear'></div>";
    }
    if (i === 41 || i === 55) {
      out += `<div class ='btn ${keyboardArray[i]}Left' data="${keyboardArray[i]}Left">${keyboardArray[i]}</div>`;
    } else if (i === 53 || i === 57) {
      out += `<div class ='btn ${keyboardArray[i]}Right' data="${keyboardArray[i]}Right">${keyboardArray[i]}</div>`;
    } else {
      out += `<div class ='btn ${keyboardArray[i]}' data="${keyboardArray[i]}">${keyboardArray[i]}</div>`;
    }
    keyboard.innerHTML = out;
  }
}
init();

// const caps = document.querySelector(".keyboard .btn[data='CapsLock']");
// const bs = document.querySelector(".keyboard .btn[data='Backspace']");
// const enter = document.querySelector(".keyboard .btn[data='Enter']");

const array = [];

document.onkeydown = (event) => {
  document.querySelectorAll(".keyboard .btn").forEach((el) => {
    el.classList.remove("active");
  });
  if (event.code === "ShiftLeft") {
    document.querySelector(".ShiftLeft").classList.add("active");
  }
  if (event.code === "ShiftRight") {
    document.querySelector(".ShiftRight").classList.add("active");
  } else {
    document.querySelector(`.keyboard .btn[data="${event.key}"]`).classList.add("active");
  }
  if (event.key === "Backspace") {
    array.pop();
  } else if (event.key === "Tab") {
    array.push("    ")
  } else if (event.key === "CapsLock" || event.key === "Backspace" || event.key === "Enter" || event.key === "Shift" || event.key === "Ctrl" || event.key === "Alt") {
    array.push("");
  } else {
    array.push(event.key);
  }
  text.innerHTML = array.join("");
}
document.onkeyup = () => {
  document.querySelectorAll(".keyboard .btn").forEach((el) => {
    el.classList.remove("active");
  });
}

document.querySelectorAll(".keyboard .btn").forEach((el) => {
  el.addEventListener("click", () => {
    // document.querySelectorAll(".keyboard .btn").forEach((element) => {
    //   element.classList.remove("active");
    // });
    // el.classList.add("active");
    if (el.innerHTML === "Backspace") {
      array.pop();
    } else if (el.innerHTML === "Tab") {
      array.push("    ")
    } else if (el.innerHTML === "CapsLock" || el.innerHTML === "Backspace" || el.innerHTML === "Enter" || el.innerHTML === "Shift" || el.innerHTML === "Ctrl" || el.innerHTML === "Alt" || el.innerHTML === "↑" || el.innerHTML === "←" || el.innerHTML === "↓" || el.innerHTML === "→") {
      array.push("");
    } else {
      array.push(el.innerHTML);
    }
    text.innerHTML = array.join("");
  });
});
