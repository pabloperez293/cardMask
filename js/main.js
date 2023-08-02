const tarjeta = document.querySelector("#tarjeta");
const btnAbrirForm = document.querySelector("#btnAbrirFor");
const form = document.querySelector("#formTarjeta");

// para que se active el evento
tarjeta.addEventListener("click", () => {
    tarjeta.classList.toggle("active");
});
// Para que rote el btn
btnAbrirForm.addEventListener("click", () =>{
    btnAbrirForm.classList.toggle("active");
    form.classList.toggle("active");
})
// 
