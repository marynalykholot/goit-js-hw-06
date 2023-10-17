// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur),
//  перевіряє його вміст щодо правильної кількості введених символів.

//  Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті
//   data-length.

// Якщо введена правильна кількість символів, то border інпуту стає зеленим,
//  якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid,
//  які ми вже додали у вихідні файли завдання.

const textInput= document.querySelector('#validation-input');
// const dataInput= document.querySelector('[data-length]');
textInput.addEventListener("blur",validationInput );


function validationInput(evt){
   if (evt.currentTarget.value.length !== Number(textInput.dataset.length)) {
     
     textInput.classList.add("invalid");
      textInput.classList.remove("valid");

   } else if(evt.currentTarget.value.length === Number(textInput.dataset.length)){
    textInput.classList.add("valid");
    textInput.classList.remove("invalid");
   }
    
}
