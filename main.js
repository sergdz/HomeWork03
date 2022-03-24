

let a  = Number (prompt("Введите первое число!" ));

let b =  prompt("Введите действие");

let c = Number (prompt( "Введите второе число"));
            

let result;






if (b === "+") {
    result = a + c;
    alert(result)
    
}





if (b === "/") {
    result = a / c;
    alert (result);
    
    
}




if (b === "-") {
    result = a - c;
    alert (result);
    
}



if ( b === "*") {
    result = a * c;
    alert (result);
    
}

if ( b !== "+" && b !== "-" && b !== "/" && b !== "*" ) {
    result = alert("Не верный символ")
}








    
