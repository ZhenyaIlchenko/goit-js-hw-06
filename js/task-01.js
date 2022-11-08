const listEl = document.querySelectorAll(".item");
console.log("Number of categories:", listEl.length);

listEl.forEach((element) => {
  // console.log("Category:", element.querySelector("h2").textContent);
  // console.log("Elements:", element.querySelectorAll("li").length);

  console.log("Category:", element.firstElementChild.textContent);
  console.log("Elements:", element.lastElementChild.children.length);

  // let ul = element.lastElementChild;
  // let ulChildren = ul.children;
  // // let ulChildrenLength = ulChildren.length;
  // console.log("Elements:", ulChildrenLength);
});
