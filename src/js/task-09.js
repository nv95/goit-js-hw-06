function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const backgroundColorRef = document.querySelector("body");
console.log(backgroundColorRef);

const textRef = document.querySelector(".color");
console.log(textRef);

const changeColorBtnRef = document.querySelector(".change-color");
console.log(changeColorBtnRef);

changeColorBtnRef.addEventListener("click", onChangeColor);

function onChangeColor() {
  const randomColor = getRandomHexColor();
  backgroundColorRef.style.backgroundColor = randomColor;
  textRef.textContent = randomColor;
}
