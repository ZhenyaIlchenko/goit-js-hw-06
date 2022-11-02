const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const allIngr = document.querySelector("#ingredients");
console.log(allIngr);

const allItemEl = (elem) => {
  const itemEl = document.createElement("li");
  itemEl.classList.add("item");
  itemEl.textContent = elem;
  console.log(itemEl);
  return itemEl;
};
const listEl = ingredients.map((ingredient) => allItemEl(ingredient));
console.log(listEl);

allIngr.append(...listEl);
console.log(allIngr);
