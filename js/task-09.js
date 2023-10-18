// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль
//  по кліку на button.change-color і виводить значення кольору в span.color.
//  Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const ranDom = document.querySelector('.widget');
const btn = document.querySelector('.change-color');
const textColor = document.querySelector('.color');
btn.addEventListener ('click',randomBgclr);

function randomBgclr (evt) {
 const resalt= document.body.style.backgroundColor = getRandomHexColor();
textColor.textContent = resalt;
};




function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
