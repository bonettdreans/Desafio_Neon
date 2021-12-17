function mostrarOcultar() {
    let saldo = document.getElementById("saldo");
    let btn = document.getElementById('bma');
    let olho = document.getElementById('olhoaberto');
    if (saldo.type == "text") {
        console.log(saldo.type);
        console.log(btn.id);
        saldo.type = "password";
        olho.src = '../front-end/assets/icons/eye-slash.svg';
    } else if (saldo.type == "password") {
        console.log(saldo.type);
        console.log(btn.id);
        saldo.type = "text";
        olho.src = '../front-end/assets/icons/eye.svg'; 
    }
}