const dataLS = JSON.parse(localStorage.getItem('client'));
const token = localStorage.getItem('token')
const id = dataLS.user.client_id
console.log("Perfect")

fetch(`https://app-asuma.herokuapp.com/api/client/${id}/launch/`, {
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
  let dataComplete = data.data.valor[0];
    //console.log(data.data.valor[0])
  let body = ''
        for (let i = 0; i < dataComplete.length; i++){
      body += `<tr><td/>${dataComplete[i].date}<td/>${dataComplete[i].type_launch}<td/>${dataComplete[i].title_launch}<td/>${dataComplete[i].amount}`;     
        
        }
          document.getElementById("data").innerHTML = body;
         document.getElementById("data").classList.add("columnsneg")
  var balance = data.data.valor[0];
  var totalamount = balance.reduce((sum, value) => (typeof value.amount == "number" ? sum + value.amount : sum), 0);
          document.getElementById("saldo").innerHTML = "R$  " + totalamount;
          console.log(totalamount)
};