let a = Number(prompt("Введите первое число!"));
let b = prompt("Введите действие");
let c = Number(prompt("Введите второе число"));
let result;

if(b === "+" ) {
    result = a + c;
   console.log(`Результат ${a + b + c} = ${result}`)

} else if(b === "/") {
    result = a / c;
    console.log(`Результат ${a + b + c} = ${result}`)


} else if(b === "-") {
    result = a - c;
    console.log(`Результат ${a + b + c} = ${result}`)

} else if(b === "*") {
    result = a * c;
    console.log(`Результат ${a + b + c} = ${result}`)

} else {
     alert("Не верный символ")
}

