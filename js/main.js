// Variables
const tarjeta = document.querySelector("#tarjeta");
const btnAbrirForm = document.querySelector("#btnAbrirFor");
const form = document.querySelector("#formTarjeta");
const numeroTarjeta = document.querySelector("#tarjeta .numero");
const nombreTarjeta = document.querySelector("#tarjeta .nombre");
const logoMarca = document.querySelector("#logoMarca");

// const closetarjeta = document.querySelector("");

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
        const imagen = document.createElement("img");
        imagen.src = "img/visa.png";
        logoMarca.appendChild(imagen);
    }
})