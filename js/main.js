("use strict")
console.error("Hello JS!");
let num = 10;
console.log("Число: " + num * 2);

let num1 = "1";
let num2 = "-20";
num1++;
num1+=10; //прибивляем число

console.log(Number(num1) + Number(num2));

console.log(Math.PI);
console.log(Math.E);
console.log(Math.max(1,5,-1,0,1.1, 6,6,2));

if(num1 >= 15 && (true || true)){
    console.log("num1 >= 15");
}
else if (num == 16){
    console.log("num1 == 15");
}
else{
    console.log("num1 > 16");
}

let str_0 = "word1";

switch(str_0){
    case 2: 
        console.log("Выбран 2");
        break;
    case "word": 
        console.log("Выбран word");
        break;
    default:
        console.log("Нет такого значения")
    }

let arr = new Array(1, 0, true, "word"); //или []

