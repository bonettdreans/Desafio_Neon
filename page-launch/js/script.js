
/* Formatting the value field */
document.getElementById("txtValue").addEventListener("change", function(){
    this.value = parseFloat(this.value).toFixed(2);
});



/* Funcionalidade dos checkbox */
var inputs = $('[type="checkbox"]');
inputs.on('click', function() {
    inputs.get().forEach(function(el) {
        el.checked = el == this && this.checked;
    }, this);
});



/* Consumindo a api beckend para enviar os dados de lançamento */
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
    if(field.match(/^[0-9]{8}$/)) {
        searchCep(field);
        field = "";
    }
}

console.log(postForm())