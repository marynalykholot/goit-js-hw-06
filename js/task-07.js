// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input)
//  і змінює інлайн-стиль span#text, оновлюючи властивість font-size.
//  В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inpCntrl = document.querySelector('#font-size-control');
const textFieldRef = document.querySelector("#text");
inpCntrl.addEventListener('input',augmentationText);
// console.dir(textFieldRef);


function augmentationText(evt){
    textFieldRef.style.fontSize = `${inpCntrl.value}px`;
};