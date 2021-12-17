const desRec = document.getElementById("btn1");
const txtValue = document.getElementById("txtValue");
const txtDate = document.getElementById("txtDate");
const txtDeposit = document.getElementById("txtDeposit");
const select = document.getElementById("selected");
const errorValue = document.getElementById("errorValue");
const errorDate = document.getElementById("errorDate");
const errorDeposit = document.getElementById("errorDeposit");

form.addEventListener("submit", e => {e.preventDefault()

const msgError = [];    
    if(txtValue.value === null || txtValue.value === "") {
        txtValue.classList.add("errorValue")
        errorValue.innerHTML = `</p>Campo obrigatório`;
    } else {
        errorValue.classList.remove("errorInput")
    }

})