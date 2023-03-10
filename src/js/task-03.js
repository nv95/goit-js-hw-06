const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galerryRef = document.querySelector(".gallery");

const newImagesRef = images
  .map(
    (image) =>
      `<li class="gallery__list-item"> <img src ='${image.url}' alt ='${image.alt}' class = "gallery__img-item " width=400 > </img>  </li>`
  )
  .join("");

galerryRef.insertAdjacentHTML("afterbegin", newImagesRef);

// const newImagesRef = images.map((image) => {
//   let newElref = galerryRef.insertAdjacentHTML(
//     "afterbegin",
//     `<li> <img src ='${image.url}' alt ='${image.alt}' width=400 > </img>  </li>`
//   );
//   return newElref;
// });
