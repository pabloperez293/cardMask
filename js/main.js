
const inputCard = document.querySelector("#inputCard");
const inputDate = document.querySelector("#inputDate");
const inputCVV = document.querySelector("#inputCVV");

const maskNumber = " ####-####-####-####";
const maskDate = "##-##";
const maskCVV = "###";

let current = "";
let cardNumber = [];
let dateNumber = [];
let cvvNumber = [];

inputCard.addEventListener("keydown", (evt) =>{
    if(evt.key === "tab"){
        return;
    }
    evt.preventDefault(); //
    handleInput(maskNumber, evt.key, cardNumber); //va a pedir el numero, con la clave y la tarjeta
    inputCard.value = cardNumber.join("");
});
