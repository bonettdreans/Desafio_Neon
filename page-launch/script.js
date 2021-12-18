
/* Formatting the value field */
// document.getElementById("txtValue").addEventListener("change", function(){
//     this.value = parseFloat(this.value).toFixed(2);
// });
const dataLS = JSON.parse(localStorage.getItem('client'));
const token = localStorage.getItem('token')
const client_id = dataLS.user.client_id

console.log(client_id)
console.log(token);

async function lancamento() {
  //event.preventDefault();

  const form = document.getElementById('form')
  const amount = document.getElementById("txtValue").value;
  const date = document.getElementById("txtDate").value;
  const title_launch = document.getElementById("txtDeposit").value;
  const type_launch = document.getElementById("txtSelect").value;
  //const client_id = document.getElementById("id_cliente").value
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