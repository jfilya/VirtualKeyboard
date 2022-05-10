const bodyHtmlFile = document.querySelector("body");
const h1 = document.createElement("h1");
bodyHtmlFile.append(h1);

class Fullness {
  constructor() {
    this.title = "RSS Keyboard by Julia Filippova";
    this.windows = "THE OPERATING SYSTEM: WINDOWS";
    this.language = "Press left Ctrl+ALT to switch language";
  }
}

const fullness = new Fullness();

h1.innerHTML = fullness.title;
const text = document.createElement("textarea");
bodyHtmlFile.append(text);

const keyboard = document.createElement("div");
keyboard.className = "keyboard";
bodyHtmlFile.append(keyboard);

const OS = document.createElement("p");
OS.innerHTML = fullness.windows;
bodyHtmlFile.append(OS);

const press = document.createElement("p");
press.innerHTML = fullness.language;
bodyHtmlFile.append(press);

const KeyboardCode = ["Backquote", "Digit1", "Digit2", "Digit3", "Digit4", "Digit5", "Digit6", "Digit7", "Digit8", "Digit9", "Digit0", "Minus", "Equal", "Backspace", "Tab", "KeyQ", "KeyW", "KeyE", "KeyR", "KeyT", "KeyY", "KeyU", "KeyI", "KeyO", "KeyP", "BracketLeft", "BracketRight", "Backslash", "Delete", "CapsLock", "KeyA", "KeyS", "KeyD", "KeyF", "KeyG", "KeyH", "KeyJ", "KeyK", "KeyL", "Semicolon", "Quote", "Enter", "ShiftLeft", "KeyZ", "KeyX", "KeyC", "KeyV", "KeyB", "KeyN", "KeyM", "Comma", "Period", "Slash", "ArrowUp", "ShiftRight", "ControlLeft", "MetaLeft", "AltLeft", "Space", "AltRight", "ArrowLeft", "ArrowDown", "ArrowRight", "ControlRight"];

const EngLow = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"];

const RusLow = ["ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter", "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ".", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"];

const EngUp = ["`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "[", "]", "\\", "Del", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'", "Enter", "Shift", "Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"];

const RusUp = ["Ё", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace", "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "\\", "Del", "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter", "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ".", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"];

const EngShift = ["`", "!", "@", "#", "$", "%", "^", "＆", "*", "(", ")", "_", "+", "Backspace", "Tab", "Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "{", "}", "|", "Del", "CapsLock", "A", "S", "D", "F", "G", "H", "J", "K", "L", ":", "\"", "Enter", "Shift", "Z", "X", "C", "V", "B", "N", "M", "<", ">", "?", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"];

const RusShift = ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace", "Tab", "Й", "Ц", "У", "К", "Е", "Н", "Г", "Ш", "Щ", "З", "Х", "Ъ", "/", "Del", "CapsLock", "Ф", "Ы", "В", "А", "П", "Р", "О", "Л", "Д", "Ж", "Э", "Enter", "Shift", "Я", "Ч", "С", "М", "И", "Т", "Ь", "Б", "Ю", ",", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"];

const EngShiftCaps = ["`", "!", "@", "#", "$", "%", "^", "＆", "*", "(", ")", "_", "+", "Backspace", "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "Del", "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Shift", "z", "x", "c", "v", "b", "n", "m", "<", ">", "?", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"];

const RusShiftCaps = ["Ё", "!", "\"", "№", ";", "%", ":", "?", "*", "(", ")", "_", "+", "Backspace", "Tab", "й", "ц", "у", "к", "е", "н", "г", "ш", "щ", "з", "х", "ъ", "\\", "Del", "CapsLock", "ф", "ы", "в", "а", "п", "р", "о", "л", "д", "ж", "э", "Enter", "Shift", "я", "ч", "с", "м", "и", "т", "ь", "б", "ю", ",", "↑", "Shift", "Ctrl", "Win", "Alt", " ", "Alt", "←", "↓", "→", "Ctrl"];

const filling = () => {
  let block = "";
  for (let i = 0; i < EngLow.length; i += 1) {
    if (i === 14 || i === 29 || i === 42 || i === 55) {
      block += "<div class='clear'></div>";
    }
    block += `<div class ='btn ${KeyboardCode[i]}' data="${KeyboardCode[i]}">
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
    keyboard.innerHTML = block;
  }
}
filling();

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
  if (event.code === "Delete" || event.code === "Backspace") {
    return true;
  } if (event.code === "AltRight") {
    event.preventDefault();
  }
  return false;
}
let flag = false;
let s = true;
let element;
let note;
document.addEventListener("keydown", (event) => {
  text.focus();
  document.querySelector(`.keyboard .btn[data="${event.code}"]`).classList.add("active");
  if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
    s = false;
    if (document.querySelector(".keyboard .btn[data=\"CapsLock\"]").classList.contains("capsActive")) {
      UpShiftCaps.forEach((e) => {
        e.classList.remove("none");
      });
      upShift.forEach((e) => {
        e.classList.add("none");
      });
      up.forEach((e) => {
        e.classList.add("none");
      });
      low.forEach((e) => {
        e.classList.add("none");
      });
    } else {
      upShift.forEach((e) => {
        e.classList.add("none");
      });
      low.forEach((e) => {
        e.classList.add("none");
      });
      upShift.forEach((e) => {
        e.classList.remove("none");
      });
    }
  }
  if (event.code === "CapsLock" && s) {
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
  element = (document.querySelector(`.keyboard .btn[data="${event.code}"]`)).getAttribute("data");
  note = (document.querySelector(`.keyboard .btn[data="${event.code}"]`));
  if (element.includes("Key") || element.includes("Digit") || element.includes("Space") || element.includes("Arrow") || element.includes("Backquote") || element.includes("Minus") || element.includes("Equal") || element.includes("Bracket") || element.includes("Backslash") || element.includes("Semicolon") || element.includes("Quote") || element.includes("Comma") || element.includes("Period") || element.includes("Slash")) {
    if (!eng[0].classList.contains("none")) {
      if (!low[0].classList.contains("none")) {
        text.setRangeText(note.childNodes[1].childNodes[1].innerHTML, text.selectionStart, text.selectionEnd, "end");
      }
      if (!up[0].classList.contains("none")) {
        text.setRangeText(note.childNodes[1].childNodes[3].innerHTML, text.selectionStart, text.selectionEnd, "end");
      }
      if (!upShift[0].classList.contains("none")) {
        text.setRangeText(note.childNodes[1].childNodes[5].innerHTML, text.selectionStart, text.selectionEnd, "end");
      }
      if (!UpShiftCaps[0].classList.contains("none")) {
        text.setRangeText(note.childNodes[1].childNodes[7].innerHTML, text.selectionStart, text.selectionEnd, "end");
      }
    } else
    if (!ru[0].classList.contains("none")) {
      if (!low[0].classList.contains("none")) {
        text.setRangeText(note.childNodes[3].childNodes[1].innerHTML, text.selectionStart, text.selectionEnd, "end");
      }
      if (!up[0].classList.contains("none")) {
        text.setRangeText(note.childNodes[3].childNodes[3].innerHTML, text.selectionStart, text.selectionEnd, "end");
      }
      if (!upShift[0].classList.contains("none")) {
        text.setRangeText(note.childNodes[3].childNodes[5].innerHTML, text.selectionStart, text.selectionEnd, "end");
      }
      if (!UpShiftCaps[0].classList.contains("none")) {
        text.setRangeText(note.childNodes[3].childNodes[7].innerHTML, text.selectionStart, text.selectionEnd, "end");
      }
    }
  }
  if (element.includes("Tab")) {
    text.setRangeText("    ", text.selectionStart, text.selectionEnd, "end");
  }
  if (element.includes("Enter")) {
    text.setRangeText("\n", text.selectionStart, text.selectionEnd, "end");
  }
});

document.addEventListener("keyup", (event) => {
  document.querySelector(`.keyboard .btn[data="${event.code}"]`).classList.remove("active");
  if (event.code === "ShiftLeft" || event.code === "ShiftRight") {
    s = true;
    if (document.querySelector(".keyboard .btn[data=\"CapsLock\"]").classList.contains("capsActive")) {
      UpShiftCaps.forEach((e) => {
        e.classList.add("none");
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
  if (event.code === "ControlLeft") {
    flag = false;
  }
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
          text.setRangeText(event.childNodes[1].childNodes[1].innerHTML, text.selectionStart, text.selectionEnd, "end");
        }
        if (!up[0].classList.contains("none")) {
          text.setRangeText(event.childNodes[1].childNodes[3].innerHTML, text.selectionStart, text.selectionEnd, "end");
        }
        if (!upShift[0].classList.contains("none")) {
          text.setRangeText(event.childNodes[1].childNodes[5].innerHTML, text.selectionStart, text.selectionEnd, "end");
        }
        if (!UpShiftCaps[0].classList.contains("none")) {
          text.setRangeText(event.childNodes[1].childNodes[7].innerHTML, text.selectionStart, text.selectionEnd, "end");
        }
      } else
      if (!ru[0].classList.contains("none")) {
        if (!low[0].classList.contains("none")) {
          text.setRangeText(event.childNodes[3].childNodes[1].innerHTML, text.selectionStart, text.selectionEnd, "end");
        }
        if (!up[0].classList.contains("none")) {
          text.setRangeText(event.childNodes[3].childNodes[3].innerHTML, text.selectionStart, text.selectionEnd, "end");
        }
        if (!upShift[0].classList.contains("none")) {
          text.setRangeText(event.childNodes[3].childNodes[5].innerHTML, text.selectionStart, text.selectionEnd, "end");
        }
        if (!UpShiftCaps[0].classList.contains("none")) {
          text.setRangeText(event.childNodes[3].childNodes[7].innerHTML, text.selectionStart, text.selectionEnd, "end");
        }
      }
    }
    if (get === "Tab") {
      text.setRangeText("    ", text.selectionStart, text.selectionEnd, "end");
    }
    if (get === "Enter") {
      text.setRangeText("\n", text.selectionStart, text.selectionEnd, "end");
    }
    if (get === "Backspace") {
      if (text.selectionStart === text.selectionEnd) {
        text.setRangeText("", text.selectionStart - 1, text.selectionEnd);
      } else {
        text.setRangeText("", text.selectionStart, text.selectionEnd);
      }
    }
    if (get === "Delete") {
      text.setRangeText("", text.selectionStart, text.selectionEnd + 1);
    }
    return true;
  })
  event.addEventListener("mouseup", () => {
    text.focus();
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
