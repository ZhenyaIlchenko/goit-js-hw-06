const refs = {
  inputSize: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};
// refs.text.style.fontSize = refs.inputSize.value + "px";
refs.inputSize.value = 16;

refs.inputSize.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.text.style.fontSize = event.currentTarget.value + "px";
  console.log(refs.text.style.fontSize);
}
