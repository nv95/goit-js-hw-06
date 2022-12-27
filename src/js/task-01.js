// const ulRef = document.querySelector("#categories");
// const liRef = ulRef.querySelectorAll(".item");

// console.log("Number of categories:", liRef.length);

// const listOneEl = liRef[0].querySelector("h2");
// console.log("Category:", listOneEl.textContent);

// const listOneUlEl = liRef[0].querySelectorAll("ul>li");
// console.log("Elements:", listOneUlEl.length);

// const listTwoEl = liRef[1].querySelector("h2");
// console.log("Category:", listTwoEl.textContent);

// const listTwoUlEl = liRef[1].querySelectorAll("ul>li");
// console.log("Elements:", listTwoUlEl.length);

// const listThreeEl = liRef[2].querySelector("h2");
// console.log("Category:", listThreeEl.textContent);

// const listThreeUlEl = liRef[2].querySelectorAll("ul>li");
// console.log("Elements:", listThreeUlEl.length);

const catrgoriesRef = document.querySelectorAll(".item");
console.log("Number of categories:", catrgoriesRef.length);

catrgoriesRef.forEach((item) => {
  const title = item.firstElementChild.textContent;
  const elements = item.lastElementChild.children.length;

  console.log("Category:", title);
  console.log("Elements:", elements);
});
