// ("use strict")
// console.error("Hello JS!");
// let num = 10;
// console.log("Число: " + num * 2);

// let num1 = "1";
// let num2 = "-20";
// num1++;
// num1+=10; //прибивляем число

// console.log(Number(num1) + Number(num2));

// console.log(Math.PI);
// console.log(Math.E);
// console.log(Math.max(1,5,-1,0,1.1, 6,6,2));

// if(num1 >= 15 && (true || true)){
//     console.log("num1 >= 15");
// }
// else if (num == 16){
//     console.log("num1 == 15");
// }
// else{
//     console.log("num1 > 16");
// }

// let str_0 = "word1";

// switch(str_0){
//     case 2: 
//         console.log("Выбран 2");
//         break;
//     case "word": 
//         console.log("Выбран word");
//         break;
//     default:
//         console.log("Нет такого значения")
//     }

// let arr = new Array(1, 0, true, "word", false); //или []
// console.log(arr); //arr[2]
// console.log(arr.length);

// let arr2d = new Array(new Array(1, 2, 3), new Array(4, 5, 6), new Array(7, 8, 9)); //[[], [], []]
// console.log("Элемент [1][1]: " + arr2d[1][1]);
// arr2d[1][1] = 100;

// console.log("Начало циклов");
// for(let i=0; i < 4; i++){
//     console.log(i);
// }

// for(let i=100; i > 1; i /= 2){
//     console.log(i);
// }


// let j = 10;
// while(j > 0){
//     if (j % 3 == 0){
//         console.log(j);
//     }
//     j--;
// }
// let k = 20;
// do{
//     if(k % 3 > 0){
//         console.log(k)
//         // break;
//         // continue;
//     }
//     k--;
// } while(k > 10);

// console.log("Конец циклов");

// for(let el in arr){ //for(let i = 0; i < arr.length; i++)
//     console.log(arr[el]);
// }

// // alert("Будьте осторожны!");
// // let agree_bool = confirm("Вы сейчас дома?");
// // console.warn(agree_bool);

// // let age = prompt("Сколько Вам лет?", 18);

// // функции

// function about(name){
//     console.log("Привет " + name);
// }

// about("Мир!");

// function sum_arr(arr){
//     let sum = 0;
//     for(i in arr){
//         sum+=arr[i];
//     }
//     return sum;
// }


// let arr1 = [1,2,3,4,5];
// console.log("сумма: " + sum_arr(arr1));

// let counter = 0;
// function onClickButton(element){
//     counter++;
//     // console.log(element.id);

//     element.innerHTML = "Счетчик: " + counter;

//     element.style.background = "white";
//     element.style.color = "blue";

//     element.style.cssText = "border-radius: 5px; border: 0; font-size: 24px";
// }

// function onInput(el){
//     console.log(el.value);
// }

let text = document.getElementById("text-main");

text.innerHTML = "12345";

let spans = document.getElementsByTagName('span');

for(let i = 0; i < spans.length; i++){
    console.log(spans[i].innerHTML);
    spans[i].innerHTML = "span_" + (i**10);
}



























