
/* Formatting the value field */
document.getElementById("txtValue").addEventListener("change", function(){
    this.value = parseFloat(this.value).toFixed(2);
});

const dataLS = JSON.parse(localStorage.getItem('client'));
const token = localStorage.getItem('token')
const client_id = dataLS.user.client_id


async function lancamento() {
  const amount = document.getElementById("txtValue").value;
  const date = document.getElementById("txtDate").value;
  const title_launch = document.getElementById("txtDeposit").value;
  const type_launch = document.getElementById("txtSelect").value;
  const token = localStorage.getItem('token')

    console.log(amount, date, title_launch, type_launch, client_id)
    console.log(JSON.stringify({amount, date, title_launch , type_launch, client_id}))
await fetch('https://app-asuma.herokuapp.com/api/launch/', 
  {
    method: 'POST',
    mode: "cors",
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'authorization': `Bearer ${token}`
      },
      body: JSON.stringify({ amount, date, title_launch , type_launch, client_id })
    }).then(response => response.json())
      .then(data => {
        console.log(data);
        console.log('estoy aqui')
        if(data){
          window.location.href = "#"
        } else {
          window.location.href = "#"
          }
    });
}
function valorNegatiboCheckbox() {
    var check = document.getElementsByName("btn-check"); 

    for (var i=0;i<check.length;i++){ 
        if (check[i].checked == true){ 
           var valorNegativo = document.getElementById("txtValue");
const check = () => {
  if (!valorNegativo.validity.valid) valorNegativo.value = 0;
  if (+valorNegativo.value > 0) valorNegativo.value *= -1;
  }
valorNegativo.addEventListener('input', check);
valorNegativo.addEventListener('blur', check);

        }  else {
           
        }
    }
}
const dataLSS = JSON.parse(localStorage.getItem('client'));
const tokens = localStorage.getItem('token')
const id = dataLSS.user.client_id

fetch(`https://app-asuma.herokuapp.com/api/client/${id}/launch/`, {
      method: 'GET',
      mode: 'cors',
      cache: 'default',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${tokens}`,
      },
    }).then(response => response.json())
      .then(data => mostrarData(data))
      .catch((error) => console.log("Erro:" + error))
        let mostrarData = (data) => {
        
        let balance = data.data.valor[0];
        let totalamount = balance.reduce((sum, value) => (typeof value.amount == "number" ? sum + value.amount : sum), 0);
          
          document.getElementById("saldo").innerHTML = "R$  " + totalamount ;
};

function ateLogo(event) {
  window.localStorage.clear('token');
  window.localStorage.clear('client');
  console.log("limpo o Local Store")
}