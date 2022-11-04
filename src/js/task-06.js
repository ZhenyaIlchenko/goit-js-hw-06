const inputEl = document.querySelector("#validation-input");
// console.log(inputEl);

const symbols = Number(inputEl.dataset.length);
console.log(symbols);

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  console.log(event.currentTarget.value.length);
  if (event.currentTarget.value.length === symbols) {
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.add("invalid");
  }
}
