// Напиши скрипт, який під час набору тексту в інпуті
//  input#name-input (подія input), підставляє його поточне значення
//   в span#name-output. Якщо інпут порожній,
//  у спані повинен відображатися рядок "Anonymous".

const inputRow = document.querySelector("#name-input");
const inputRow2 = document.querySelector("#name-output");

inputRow.addEventListener("input", inputOn);
function inputOn(evt) {
  inputRow2.textContent = evt.currentTarget.value;
  if (evt.currentTarget.value === "") {
    inputRow2.textContent = "Anonymous";
  }
}
