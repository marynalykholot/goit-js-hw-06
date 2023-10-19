// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

const buttonPlus = document.querySelector('button[ data-action="increment"]');
const buttonMin = document.querySelector('button[ data-action="decrement"]');
const value = document.querySelector("#value");
let counterValue = 0;
buttonPlus.addEventListener("click", switchButton1);
buttonMin.addEventListener("click", switchButton2);

function switchButton1(evt) {
  counterValue += 1;
  value.textContent = counterValue;
}

function switchButton2(evt) {
  counterValue -= 1;
  value.textContent = counterValue;
}
