"use strict"
let x = +prompt("Մուտքագրեք առաջին արժեքը");
while(x+x-x !== x){
 x = +prompt("Մուտքագրվող արժեքը պետք է լինի թիվ");
}console.log(`x = ${x}`)

let action = prompt("Գործողության տեսակը");
while(1>0){
if( action == "+" || action == "-" || action == "/" || action == "*"|| action == "%"){
        break}
                     else  {
                        action = prompt(`Նման գործողություն հնարավոր չէ՜
                     Մուտքագրեք հետևյալ գործողություններից մեկը։
                     (+, -, *, /, % )`)
                     }
                     } ;
console.log(action)

let y = +prompt("Մուտքագրեք երկրորդ արժեքը");
while( y + y - y !== y){
    y = +prompt("Մուտքագրվող արժեքը պետք է լինի թիվ");
}console.log(`y = ${y}`)

let result = 0;
switch(action){
    case "+":
        result = x + y;
     break
     case "-":
        result = x - y;
        break;
        case "*":
            result = x * y;
            break;
            case "/":
                result = x / y;
                break;
                case "%":
                    result = (x * y) / 100
}alert(`${x} ${action} ${y} = ${result}`)