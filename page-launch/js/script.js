document.getElementById("txtValue").addEventListener("change", function(){
    this.value = parseFloat(this.value).toFixed(2);
});


const fields = document.querySelectorAll("[required]")

// console.log(fields)

function customValidation(event) {

    // Elimando o bubble
    // event.preventDefault()

    const field = event.target

    // lógica para tratar erros
   function verifyErrors() {
       let foundError = false;
    
       for(let error in field.validity) {
           // Se não for customError, verifica se tem erro
        //    if(error != "customError" && field.validity[error]) {
            if(field.validity[error]) {
            foundError = error
           }
       }

       return foundError;
   }

   const error = verifyErrors()
   console.log("Error Exists: ", error)

//    const spanError = field.parentNode.querySelector("span.error")

//    if(error) {
//        spanError.classList.add("active")
//        spanError.innerHTML = "Campo Obrigatório"

//    } else {
//        spanError.classList.remove("active")
//        spanError.innerHTML = ""

//    }


   if(error) {
       // trocar mensagem de erro
    field.setCustomValidity("Esse campo é obrigatório")
   } else {
    field.setCustomValidity("")
   }
}

for(let field of fields) {
    field.addEventListener("invalid", customValidation)
}

document.querySelector("form").addEventListener("submit", event => {
    console.log("enviar o formulario")

    event.preventDefault()
})