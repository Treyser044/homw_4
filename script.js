/*let num = +prompt('son xyon min')

/*if(num % 2){
    console.log('toq son');
    
}else{
    console.log('juft son');
    
}

if(num == 50 )*/


let name = prompt('Ismingizni kiriting');
let letter = prompt('Bironta harf kiriting');

let nameLower = name.toLowerCase();
let letterLower = letter.toLowerCase();

if (nameLower.includes(letterLower)) {
    alert(name + " isminig ichida " + letter + " harfi mavjud");
} 
else if(letter.length !== 1){
    alert("iltimos bitta harif kiriting")
}

else {
    alert(name + " isminig ichida " + letter + " harfi mavjud emas");
  
}
