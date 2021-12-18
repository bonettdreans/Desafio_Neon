// document.getElementById("txtValue").addEventListener("change", function () {
//     this.value = parseFloat(this.value).toFixed(2);
// });

// var inputs = $('[type="checkbox"]');
// inputs.on('click', function () {
//     inputs.get().forEach(function (el) {
//         el.checked = el == this && this.checked;
//     }, this);
// });

let url = `https://app-asuma.herokuapp.com/`
const postLaunch = (launch) => {
    fetch(`${url}/api/launch/`)
        .then(x => x.text())
        .then(JSON.parse)
};
const getValue = () => {
    const value = '';
    console.log(value);
};
const postForm = () => {
    let field = document.getElementById("txtValue").value;
    if (field.match(/^[0-9]{8}$/)) {
        searchCep(field);
        field = "";
    }
}
console.log(postForm())

const desRec = document.getElementById("btn1");
const txtValue = document.getElementById("txtValue");
const txtDate = document.getElementById("txtDate");
const txtDeposit = document.getElementById("txtDeposit");
const select = document.getElementById("selected");
const errorValue = document.getElementById("errorValue");
const errorDate = document.getElementById("errorDate");
const errorDeposit = document.getElementById("errorDeposit");

form.addEventListener("submit", e => {
    e.preventDefault()

    const msgError = [];
    if (txtValue.value === null || txtValue.value === "") {
        txtValue.classList.add("errorValue")
        errorValue.innerHTML = `</p>Campo obrigatório`;
    } else {
        errorValue.classList.remove("errorInput")
    }

})