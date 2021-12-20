const dataLS = JSON.parse(localStorage.getItem('client'));
const token = localStorage.getItem('token')
const id = dataLS.user.client_id
console.log("Perfect")
fetch(`https://app-secontrole.herokuapp.com/api/client/${id}/launch/`, {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${token}`,
      },
    }).then(response => response.json())
      .then(data => mostrarData(data))
      .catch((error) => console.log("Erro:" + error))
        const mostrarData = (data) => {
        console.log(data)
        let nomeUsuario = ''
            nomeUsuario += `${data.data.name}`
            document.getElementById("name_perfil").innerHTML = "Olá, " + nomeUsuario;

        let balance = data.data.valor[0];
        let totalamount = balance.reduce((sum, value) => (typeof value.amount == "number" ? sum + value.amount : sum), 0);
          
          document.getElementById("saldo").innerHTML = "R$  " + totalamount ;
};

function ateLogo(event) {
  window.localStorage.clear('token');
  window.localStorage.clear('client');
  console.log("limpo o Local Store")
}