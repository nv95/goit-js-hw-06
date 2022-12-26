const inputRef = document.getElementById("font-size-control");
const spanRef = document.getElementById("text");

// console.log(inputRef);
// console.log(spanRef);

inputRef.addEventListener("input", onInputRef);

function onInputRef(event) {
  spanRef.style.fontSize = inputRef.value + "px";
}
