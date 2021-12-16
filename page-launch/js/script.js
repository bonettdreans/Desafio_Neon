
/* Formatting the value field */
document.getElementById("txtValue").addEventListener("change", function(){
    this.value = parseFloat(this.value).toFixed(2);
});


/* Funcionalidade dos checkbox */
var inputs = $('[type="radio"]');
inputs.on('click', function() {
    inputs.get().forEach(function(el) {
        el.checked = el == this && this.checked;
    }, this);
});


/* Consumindo a api beckend para enviar os dados de lançamento */
let url = `https://app-asuma.herokuapp.com`
const postLaunch = (launch) => {
    fetch(`${url}/api/launch/`)
    .then(x => x.text())
    .then(JSON.parse)
};

const getData = () => {
    const cep = '05103060';
    searchCep(cep);
}

const postForm = () => {
    let field = document.getElementById("cep").value;
    if(field.match(/^[0-9]{8}$/)) {
        searchCep(field);
        field = "";
    }
}