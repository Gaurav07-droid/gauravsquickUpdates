import { parentEl, welMssg, input } from "./config.js   ";
import { LoadRender } from "./controller.js";

export const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long..Try Again!`));
    }, s * 1000);
  });
};

export const checkInput = function () {
  if (!input.value) {
    welMssg.textContent = "Invalid search⛔! Try again";
  } else {
    welMssg.textContent = `Getting results Please wait...`;
    LoadRender(`${input.value}`);
    input.value = "";
  }
};

export const clear = function () {
  parentEl.innerHTML = "";
};

export const checkData = function (data) {
  if (data.length === 0) {
    parentEl.innerHTML = "";
    welMssg.textContent = `Coudn't find anything for your search!Please try again`;
  }
  // alert("Does not find anything for you search!Try again");
};
