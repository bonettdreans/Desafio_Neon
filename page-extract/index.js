const options = {
  method: "GET",
  mode: "cors",
  cache: "default",
};
const id = getUrl.get('id')
const url = `http://localhost:8000/client/${id}`

console.log(`${url}/${id}`)
  fetch(`${url}/${id}`, options)
    .then(response => response.json())
    .then(data => mostrarData(data))
    .catch((error) => console.log("Erro:" + error))
const mostrarData = (data) => {
  let dataComplete = data.data.valor;
    console.log(data.data.valor)
  let body = ''
        for (let i = 0; i < dataComplete.length; i++){
      body += `<tr><td/>${dataComplete[i].title_launch}<td/>${dataComplete[i].amount}<td/>${dataComplete[i].date}<td/>Edit    Delete <tr>`;     
        }
  document.getElementById("data").innerHTML = body;
  let nomeUsuario = ''
  nomeUsuario += `${data.data.name}`
  document.getElementById("nomePerfil").innerHTML = nomeUsuario;

  var balance = data.data.valor;
  var totalamount = balance.reduce((sum, value) => (typeof value.amount == "number" ? sum + value.amount : sum), 0);
  console.log(totalamount);
  document.getElementById("saldo").innerHTML = "R$  " + totalamount ;
};