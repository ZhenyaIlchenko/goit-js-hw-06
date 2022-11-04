const refs = {
  inputSize: document.querySelector("#font-size-control"),
  text: document.querySelector("#text"),
};

refs.inputSize.addEventListener("input", onInputChange);

function onInputChange(event) {
  refs.text.style.fontSize = event.currentTarget.value + "px";
  console.log(refs.text.style.fontSize);
}
