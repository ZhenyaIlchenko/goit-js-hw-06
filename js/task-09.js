function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  body: document.querySelector("body"),
  span: document.querySelector(".color"),
  button: document.querySelector(".change-color"),
};

const handleClick = () => {
  const randomColor = getRandomHexColor();
  refs.body.style.backgroundColor = randomColor;
  refs.span.textContent = randomColor;
};

refs.button.addEventListener("click", handleClick);
handleClick();
