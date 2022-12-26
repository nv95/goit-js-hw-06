const counterValue = {
  value: 0,
  decremen() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};
const btnRef = document.getElementById("counter");

const decrementBtn = btnRef.children[0];
const incrementBtn = btnRef.children[2];
const valueRef = document.getElementById("value");

console.log(decrementBtn);
console.log(incrementBtn);
console.log(valueRef);

decrementBtn.addEventListener("click", function () {
  console.log("click dek");
  counterValue.decremen();

  valueRef.textContent = counterValue.value;
});
incrementBtn.addEventListener("click", function () {
  console.log("click ink");
  counterValue.increment();
  valueRef.textContent = counterValue.value;
});
