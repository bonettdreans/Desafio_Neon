/* Função para deixar valor com 2 casas decimais */
// document.getElementById("txtValue").addEventListener("change", function () {
//     this.value = parseFloat(this.value).toFixed(2);
// });
/* Função para efeito de ocultar saldo */
// function mostrarOcultar() {
//     let saldo = document.getElementById("saldo");
//     let btn = document.getElementById('bma');
//     let olho = document.getElementById('olhoaberto');
//     if (saldo.type == "text") {
//         console.log(saldo.type);
//         console.log(btn.id);
//         saldo.type = "password";
//         olho.src = '../front-end/assets/icons/eye-slash.svg';
//     } else if (saldo.type == "password") {
//         console.log(saldo.type);
//         console.log(btn.id);
//         saldo.type = "text";
//         olho.src = '../front-end/assets/icons/eye.svg'; 
//     }
// }
/* Função para limitar lançamentos até 3 meses antes */
function decimas(n){
    return n > 9 ? "" + n: "0" + n;
}
function getDate(m) {
    let data = new Date();
    let diffAno = 0;
    let mesAnterior = data.getMonth() - (m === undefined ? 1 : m - 1);
    if (mesAnterior < 1) {
        mesAnterior = mesAnterior + 12;
        diffAno = -1;
    }
    mesAnterior = decimas(mesAnterior);
    let diaAnterior = decimas(data.getDate());
    return (data.getFullYear() + diffAno) + '-' + mesAnterior + '-' + diaAnterior;
}
document.querySelector('input[name=data]').setAttribute("min", getDate(3));
document.querySelector('input[name=data]').valueAsDate = new Date();