// Задача №1  Создайте функцию, которая возвращает ваше имя. Имя вводится с input
const getName = document.getElementById('return');

getName.onclick = function(){
    const name = document.getElementById('name').value;
    function returnName() {
        return `Ваше имя: ${name}`
    }

    const zadacha1 = document.getElementById('zadacha1');
    zadacha1.innerHTML = returnName();
}
    
// Задача №2 Создайте функцию, которая принимает 2 числа и возвращает большее число из двух, либо любое из них если они равны.

const sravnit = document.getElementById('sravnit');

sravnit.onclick = function(){
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    
    function returnBigValue() {
        let chislo;
        (value1 > value2) ? chislo = value1 : (value1 < value2) ? chislo = value2 : chislo = value1;
        return `Большее число: ${chislo}`
    }

    const zadacha2 = document.getElementById('zadacha2');
    zadacha2.innerHTML = returnBigValue();
}

// Задача №3 Создайте функцию, которая возвращает случайное число в указанном диапазоне. 
// Диапазон указывает пользователь с помощью двух переменных, которые передаются функции в качестве параметров.

const generete = document.getElementById('generete');

generete.onclick = function(){
    const start = document.getElementById('start').value;
    const end = document.getElementById('end').value;

    function random (min, max) {
        return `Случайное число в диапозоне от ${start} до ${end}: ${Math.floor(Math.random() * (max - min + 1) + 1)}`;
    }

    const zadacha3 = document.getElementById('zadacha3');
    zadacha3.innerHTML = random(start, end);
}