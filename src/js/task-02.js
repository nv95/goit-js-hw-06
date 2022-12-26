const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientNewEl = document.getElementById("ingredients");

const elements = ingredients.map((ingredient) => {
  const newliEl = document.createElement("li");
  newliEl.classList.add("item");
  newliEl.textContent = ingredient;
  return newliEl;
});

console.log(elements);
ingredientNewEl.append(...elements);
