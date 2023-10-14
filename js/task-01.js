const itemElm = document.querySelectorAll(".item");
console.dir(`Number of categories: ${itemElm.length}`);
itemElm.forEach((item) => {
  console.dir(`Category: ${item.firstElementChild.textContent}`);
  console.dir(`Elements: ${item.lastElementChild.children.length}`);


});