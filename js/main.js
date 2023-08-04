// Variables
const tarjeta = document.querySelector("#tarjeta");
const btnAbrirForm = document.querySelector("#btnAbrirFor");
const form = document.querySelector("#formTarjeta");
const numeroTarjeta = document.querySelector("#tarjeta .numero");
const nombreTarjeta = document.querySelector("#tarjeta .nombre");
const logoMarca = document.querySelector("#logoMarca");
const firma = document.querySelector("#tarjeta .firma p");
const mesExpiracion = document.querySelector("#tarjeta .mes");
const yearExpiracion = document.querySelector("#tarjeta .year");
const ccv = document.querySelector("#tarjeta .ccv");

//  voltea tarjeta
const mostrarFrente = () =>{
    if(tarjeta.classList.contains("active")){
        tarjeta.classList.remove("active");
    }
}


// para que se active el evento rotandolo
tarjeta.addEventListener("click", () => {
    tarjeta.classList.toggle("active");
});
// Para que rote el btn
btnAbrirForm.addEventListener("click", () =>{
    btnAbrirForm.classList.toggle("active");
    form.classList.toggle("active");
});

// Meses dinamicos 
for(let i = 1; i <= 12 ; i++ ){
    let option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    form.selectMes.appendChild(option);
}

// años dinamicos 
const yearActual = new Date().getFullYear();

for(let i = yearActual; i <= yearActual + 8 ; i++){
    let option = document.createElement("option");
    option.value = i;
    option.innerText = i;
    form.selectYear.appendChild(option);
}

// entrada de n° tarjeta
form.inputNumero.addEventListener("keyup", (evt) =>{
    let valorInput = evt.target.value;
    // con esto guardamos y remplazamos para que se leea el elemento 
    form.inputNumero.value = valorInput
    // delet space 
    .replace(/\s/g , "")
    //delet string
    .replace(/\D/g , "")
    // add numbers space
    .replace(/([0-9]{4})/g, "$1 ")
    // delet finish space
    .trim();

    numeroTarjeta.textContent = valorInput;

    if(valorInput == ""){
        numeroTarjeta.textContent = "##### ##### #### ####";

        logoMarca.innerHTML = "";
    }
 // aca agregamos la imagen de visa, master
    if(valorInput[0] == 4){
// este elimina el contenido y luego pone contenido dle logo
        logoMarca.innerHTML = "";
// busca la imagen 
        const imagen = document.createElement("img");
        imagen.src = "img/visa.png";
        logoMarca.appendChild(imagen);
    }else if( valorInput[0] == 5){
        logoMarca.innerHTML = "";

        const imagen = document.createElement("img");
        imagen.src = "img/mastercard.png";
        logoMarca.appendChild(imagen);
    }

    // Fucnion que voltee la tarjeta
    mostrarFrente();
});

// nombre de tarjeta

form.inputNombre.addEventListener("keyup", (e) =>{
    let valorInput = e.target.value;

    form.inputNumero.value = valorInput.replace(/[0-9]/g, "");
    nombreTarjeta.textContent = valorInput;
    firma.textContent = valorInput;

    if(valorInput == ""){
        nombreTarjeta.textContent = "pepito";
    }
    mostrarFrente();
});

// Mes
form.selectMes.addEventListener("change", (evt) =>{
    mesExpiracion.textContent = evt.target.value;   
    mostrarFrente();
})

// año
form.selectYear.addEventListener("change", (evt) =>{
    yearExpiracion.textContent = evt.target.value.slice(2);   
    mostrarFrente();
})

// ccv
form.inputCCV.addEventListener("keyup", () => {
    if(!tarjeta.classList.contains("active")){
        tarjeta.classList.toggle("active");
    }

    form.inputCCV.value = form.inputCCV.value
    .replace(/\s/g , "")
    .replace(/\D/g, "");

    ccv.textContent = form.inputCCV.value;

});