
const inputCard = document.querySelector("#inputCard");
const inputDate = document.querySelector("#inputDate");
const inputCVV = document.querySelector("#inputCVV");

const name = document.querySelector("#name");

const maskNumber = " ####-####-####-####";
const maskDate = "##-##";
const maskCVV = "###";

let current = "";
// Arreglso vacios
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];

// teclas de nuestro teclado
inputCard.addEventListener("keydown", (evt) =>{
    if(evt.key === "tab"){
        return;
    }
    evt.preventDefault(); //
    handleInput(maskNumber, evt.key, cardNumber); //va a pedir el numero, con la clave y la tarjeta
    inputCard.value = cardNumber.join("");
});

inputDate.addEventListener("keydown", (e) =>{
    if(e.key === "tab"){
        return;
    }
    e.preventDefault();
    handleInput(maskDate, e.key, dateNumber);
    inputDate.value = dateNumber.join("");
    // en este caso va a tomar los arr
});

inputCVV.addEventListener("keydown", (evt) => {
    if(evt.key === "tab"){
        return;
    }
    evt.preventDefault();
    handleInput(maskCVV, evt.key, cvvNumber);
    inputCVV.value = cvvNumber.join("");
});




// recibo las mask y ya defino mis numeros linea 27
function handleInput(mask, key, arr){
    let numbers =["0","1","2","3","4","5","6","7","8","9"];
// simulan quitar un caracter
    if(key === "Backspace" && arr.length > 0){
       arr.pop();
       return;
    }
// validamos si la tecla ingresada exite en el let de number de ahi medimos con el lenght
    if(numbers.includes(key) && arr.length +1 <= mask.length){
        if(mask[arr.length] === "-" || mask[arr.length] === "/"){
            arr.push(mask[arr.length], key);
        }else{
            arr.push(key);
        }
    }
}
