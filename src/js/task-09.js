function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundColorRef = document.querySelector("body");
console.log("🚀 ~ file: task-09.js:6 ~ backgroundColorRef", backgroundColorRef);

const textRef = document.querySelector(".color");
console.log("🚀 ~ file: task-09.js:8 ~ textRef", textRef);

const changeColorBtnRef = document.querySelector(".change-color");
console.log("🚀 ~ file: task-09.js:12 ~ changeColorBtnRef", changeColorBtnRef);

changeColorBtnRef.addEventListener("click", () => {
  console.log("click");
  backgroundColorRef.style.backgroundColor = getRandomHexColor();
  textRef.textContent = getRandomHexColor();
});
