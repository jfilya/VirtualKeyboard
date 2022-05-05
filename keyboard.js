const bodyHtmlFile = document.querySelector("body");
const h1 = document.createElement("h1");
bodyHtmlFile.append(h1);

h1.innerHTML = "RSS Keyboard by Julia Filippova";
const text = document.createElement("textarea");
text.setAttribute("maxlength", "0")
bodyHtmlFile.append(text);

const keyboard = document.createElement("div");
keyboard.className = "keyboard";
bodyHtmlFile.append(keyboard);

const OS = document.createElement("p");
OS.innerHTML = "THE OPERATING SYSTEM: WINDOWS"
bodyHtmlFile.append(OS);

const press = document.createElement("p");
press.innerHTML = "Press left Ctrl+ALT to switch language"
bodyHtmlFile.append(press);

const KeyboardCode = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"];

const EngLow = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"];

const RusLow = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter", "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"];

const EngUp = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "Del", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter", "Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"];

const RusUp = ["Ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "\\", "Del", "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter", "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"];

const EngShift = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "{", "|", "Del", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter", "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"];

const RusShift = ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace", "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del", "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter", "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"];

const EngShiftCaps = ["`", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"];

const RusShiftCaps = ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter", "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"];

const init = () => {
  let out = "";
  for (let i = 0; i < EngLow.length; i += 1) {
    if (i === 14 || i === 29 || i === 42 || i === 55) {
      out += "<div class='clear'></div>";
    }
    out += `<div class ='btn ${KeyboardCode[i]}' data="${KeyboardCode[i]}">
      <div class="Eng">
        <span class="low">${EngLow[i]}</span>
        <span class="Up none">${EngUp[i]}</span>
        <span class="UpShift none">${EngShift[i]}</span>
        <span class="UpShiftCaps none">${EngShiftCaps[i]}</span>
      </div>
      <div class="Rus none">
        <span class="low">${RusLow[i]}</span>
        <span class="Up none">${RusUp[i]}</span>
        <span class="UpShift none">${RusShift[i]}</span>
        <span class="UpShiftCaps none">${RusShiftCaps[i]}</span>
      </div>
    </div>`;
    keyboard.innerHTML = out;
  }
}
init();

const array = [];
const eng = document.querySelectorAll(".Eng");
const ru = document.querySelectorAll(".Rus");
const up = document.querySelectorAll(".Up");
const low = document.querySelectorAll(".low");
const upShift = document.querySelectorAll(".UpShift");
const UpShiftCaps = document.querySelectorAll(".UpShiftCaps");
let lang;
if (localStorage.getItem("lang") === "ru") {
  ru.forEach((e) => {
    e.classList.remove("none");
  });
  eng.forEach((e) => {
    e.classList.add("none");
  });
}

document.onkeydown = (event) => {
  if (event.code === "AltLeft" || event.code === "AltRight" || event.code === "Tab" || event.code === "MetaLeft" || event.code === "ShiftLeft" || event.code === "ShiftRight") {
    return false;
  }
  return true;
}
let flag = false;
let simbol;
document.addEventListener("keydown", (event) => {
  document.querySelector(`.keyboard .btn[data="${event.code}"]`).classList.add("active");
  if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
    if (document.querySelector(".keyboard .btn[data=\"CapsLock\"]").classList.contains("capsActive")) {
      UpShiftCaps.forEach((e) => {
        e.classList.toggle("none");
      });
      upShift.forEach((e) => {
        e.classList.add("none");
      });
      up.forEach((e) => {
        e.classList.add("none");
      });
    } else {
      upShift.forEach((e) => {
        e.classList.toggle("none");
      });
      low.forEach((e) => {
        e.classList.toggle("none");
      });
    }
  }
  if (event.code === "CapsLock") {
    up.forEach((e) => {
      e.classList.toggle("none");
    });
    low.forEach((e) => {
      e.classList.toggle("none");
    });
    document.querySelector(".keyboard .btn[data=\"CapsLock\"]").classList.toggle("capsActive");
  }
  if (event.code === "ControlLeft") {
    flag = true;
  }
  if (event.code === "AltLeft" && flag) {
    eng.forEach((e) => {
      e.classList.toggle("none");
    });
    ru.forEach((e) => {
      e.classList.toggle("none");
    });
    if (eng[0].classList.contains("none")) {
      lang = "ru";
    } else
    if (ru[0].classList.contains("none")) {
      lang = "en";
    }
    localStorage.setItem("lang", lang);
  }
  if (event.code !== "ControlLeft") {
    flag = false;
  }
});

document.addEventListener("keyup", (event) => {
  document.querySelectorAll(".keyboard .btn").forEach((el) => {
    el.classList.remove("active");
  });
  if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
    if (document.querySelector(".keyboard .btn[data=\"CapsLock\"]").classList.contains("capsActive")) {
      UpShiftCaps.forEach((e) => {
        e.classList.toggle("none");
      });
      upShift.forEach((e) => {
        e.classList.add("none");
      });
      up.forEach((e) => {
        e.classList.remove("none");
      });
    } else {
      upShift.forEach((e) => {
        e.classList.toggle("none");
      });
      low.forEach((e) => {
        e.classList.toggle("none");
      });
    }
  }
  document.querySelectorAll(".keyboard .btn").forEach((el) => {
    el.classList.remove("active");
  });
});

document.querySelectorAll(".keyboard .btn").forEach((event) => {
  event.addEventListener("mousedown", () => {
    const get = event.getAttribute("data");
    if (get === "ShiftLeft" || get === "ShiftRight") {
      if (document.querySelector(".keyboard .btn[data=\"CapsLock\"]").classList.contains("capsActive")) {
        UpShiftCaps.forEach((e) => {
          e.classList.toggle("none");
        });
        upShift.forEach((e) => {
          e.classList.add("none");
        });
        up.forEach((e) => {
          e.classList.add("none");
        });
      } else {
        upShift.forEach((e) => {
          e.classList.toggle("none");
        });
        low.forEach((e) => {
          e.classList.toggle("none");
        });
      }
    }
    if (get === "CapsLock") {
      up.forEach((e) => {
        e.classList.toggle("none");
      });
      low.forEach((e) => {
        e.classList.toggle("none");
      });
      document.querySelector(".keyboard .btn[data=\"CapsLock\"]").classList.toggle("capsActive");
    }
    if (get.includes("Key") || get.includes("Digit") || get.includes("Space") || get.includes("Arrow") || get.includes("Backquote") || get.includes("Minus") || get.includes("Equal") || get.includes("Bracket") || get.includes("Backslash") || get.includes("Semicolon") || get.includes("Quote") || get.includes("Comma") || get.includes("Period") || get.includes("Slash")) {
      if (!eng[0].classList.contains("none")) {
        if (!low[0].classList.contains("none")) {
          simbol = event.childNodes[1].childNodes[1].innerHTML
        }
        if (!up[0].classList.contains("none")) {
          simbol = event.childNodes[1].childNodes[3].innerHTML
        }
        if (!upShift[0].classList.contains("none")) {
          simbol = event.childNodes[1].childNodes[5].innerHTML
        }
        if (!UpShiftCaps[0].classList.contains("none")) {
          simbol = event.childNodes[1].childNodes[7].innerHTML
        }
      } else
      if (!ru[0].classList.contains("none")) {
        if (!low[0].classList.contains("none")) {
          simbol = event.childNodes[3].childNodes[1].innerHTML
        }
        if (!up[0].classList.contains("none")) {
          simbol = event.childNodes[3].childNodes[3].innerHTML
        }
        if (!upShift[0].classList.contains("none")) {
          simbol = event.childNodes[3].childNodes[5].innerHTML
        }
        if (!UpShiftCaps[0].classList.contains("none")) {
          simbol = event.childNodes[3].childNodes[7].innerHTML
        }
      }
    }
    array.push(simbol);
    if (get === "Tab") {
      array.push("    ");
    }
    if (get === "Enter") {
      array.push("\n");
    }
    if (get === "Backspace") {
      array.splice(array.length - 2, 2);
    } else simbol = "";
    text.innerHTML = array.join("");
    return true;
  })
  event.addEventListener("mouseup", () => {
    const get = event.getAttribute("data");
    if (get === "ShiftLeft" || get === "ShiftRight") {
      if (document.querySelector(".keyboard .btn[data=\"CapsLock\"]").classList.contains("capsActive")) {
        UpShiftCaps.forEach((e) => {
          e.classList.toggle("none");
        });
        upShift.forEach((e) => {
          e.classList.add("none");
        });
        up.forEach((e) => {
          e.classList.remove("none");
        });
      } else {
        upShift.forEach((e) => {
          e.classList.toggle("none");
        });
        low.forEach((e) => {
          e.classList.toggle("none");
        });
      }
    }
  })
});
