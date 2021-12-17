
/* Formatting the value field */
document.getElementById("txtValue").addEventListener("change", function(){
    this.value = parseFloat(this.value).toFixed(2);
});

function  lancamento() {
  //event.preventDefault();

  const amount = document.getElementById("txtValue").value;
  const date = document.getElementById("txtDate").value;
  const title_launch = document.getElementById("txtDeposit").value;
  const type_launch = document.getElementById("txtSelect").value;
  const token = localStorage.getItem('token')
    console.log(token);

console.log(amount, date, title_launch, type_launch)

fetch('https://app-asuma.herokuapp.com/api/launch/', 
  {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
         'authorization': `Bearer ${token}`
      },
      body: JSON.stringify({amount, date, title_launch, type_launch })
    }).then(response => response.json())
      .then(data => {
      console.log(data);
        if(data){
          window.location.href = "#"
        } else {
          window.location.href = "#"
          }
    });
}