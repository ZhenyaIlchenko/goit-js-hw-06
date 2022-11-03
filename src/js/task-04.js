const refs = {
  value: document.querySelector("#value"),
  decrement: document.querySelector('button[data-action="decrement"]'),
  increment: document.querySelector('button[data-action="increment"]'),
};
// console.log(refs);

let counterValue = 15;

const render = () => {
  refs.value.textContent = counterValue;
};

const doDecrement = () => {
  counterValue -= 1;
  render();
};

const doIncrement = () => {
  counterValue += 1;
  render();
};

render();

refs.decrement.addEventListener("click", doDecrement);
refs.increment.addEventListener("click", doIncrement);
