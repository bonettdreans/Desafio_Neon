
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
