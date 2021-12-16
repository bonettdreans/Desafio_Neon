function envioLogin() {
  event.preventDefault();
  // const URL = "https://app-asuma.herokuapp.com";
  // const endPoint = "/api/login";

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

fetch('https://app-asuma.herokuapp.com/api/login', 
  {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({email, password })
    }).then(response => response.json())
      .then(data => {
      console.log(data);
      window.localStorage.setItem('token', data.token);
    });
}


function cadastroUser(){
event.preventDefault();

const name = document.getElementById("nameCadastro").value;
const email = document.getElementById("emailCadastro").value;
const password = document.getElementById("passwordCadastro").value;
    console.log(name, email, password);

    fetch('https://app-asuma.herokuapp.com/api/register', 
  {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({name, email, password })
    }).then(response => response.json())
      .then(data => {
      console.log(data);
      window.localStorage.setItem('token', data.token);
      });
}