// const inputElem = document.getElementById("name-input");
// console.log(inputElem);
// const spanElem = document.getElementById("name-output");
// console.log(spanElem);

const refs = {
  inputElem: document.getElementById("name-input"),
  spanElem: document.getElementById("name-output"),
};

refs.inputElem.addEventListener("input", onInputChange);

function onInputChange(event) {
  if ((refs.spanElem.textContent = event.currentTarget.value)) {
    return;
  }
  refs.spanElem.textContent = "Anonymous";
}
