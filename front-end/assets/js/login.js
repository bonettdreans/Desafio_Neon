console.clear();

const password = document.getElementById("password");
const email = document.getElementById("email");
const form = document.getElementById("form_login")
const warningsEmailLogin = document.getElementById("warningsEmailLogin");
const warningsPasswordLogin = document.getElementById("warningsPasswordLogin");

form.addEventListener("submit", (event) => {
  validation(event)
})

async function validation(event){

const expresion = /\w+@\w+\.+[a-z]/;

  if (password.value === null || password.value === "") {
    password.classList.add("warningsInput")
    warningsPasswordLogin.innerHTML = `<p/>⚠️ Senha não pode ser vazia`;
  } else {
    warningsPasswordLogin.innerHTML = ""
    password.classList.remove("warningsInput")
  }
  if (password.value.length < 6 || password.value.length > 20) {
    password.classList.add("warningsInput")
    warningsPasswordLogin.innerHTML = `<p/>⚠️ Senha precisa ter no mínimo 6 e no máximo 10 carácteres`;
  } else {
    warningsPasswordLogin.innerHTML = ""
    password.classList.remove("warningsInput")
  }
  if (email.value === null || email.value == "") {
    email.classList.add("warningsInput")
    warningsEmailLogin.innerHTML = `<p/>⚠️ Email não pode ser vazio`;
    return false;
  } else {
    warningsEmailLogin.innerHTML = ""
    email.classList.remove("warningsInput")
  }
  if (!expresion.test(email.value)) {
    email.classList.add("warningsInput")
    warningsEmailLogin.innerHTML = `<p/>⚠️ Digite um email válido`;
    return false;
  } else {
    warningsEmailLogin.innerHTML = ""
    email.classList.remove("warningsInput")
  }
 await envioLogin(event)
  document.getElementById("form_login").reset()

}
const nameCadastro = document.getElementById("nameCadastro")
const passwordCadastro = document.getElementById("passwordCadastro");
const repPasswordCadastro = document.getElementById("repPasswordCadastro")
const emailCadastro = document.getElementById("emailCadastro");
const formCadastro = document.getElementById("formCadastro")
const warningsNameCadastro = document.getElementById("warningsNameCadastro");
const warningsEmailCadastro = document.getElementById("warningsEmailCadastro");
const warningsPasswordCadastro = document.getElementById("warningsPasswordCadastro");



formCadastro.addEventListener("submit", (event) => {
  validarCadastro(event)
})


async function validarCadastro(event){
  
const expresion = /\w+@\w+\.+[a-z]/;
  const msgErro = [];
  if (nameCadastro.value === null || nameCadastro.value === "") {
    nameCadastro.classList.add("warningsInput")
    warningsNameCadastro.innerHTML = `⚠️ Nome não pode ser vazio`;
  } else {
    warningsNameCadastro.innerHTML = ""
    nameCadastro.classList.remove("warningsInput")
  }
  if (passwordCadastro.value === null || passwordCadastro.value === "") {
    passwordCadastro.classList.add("warningsInput")
    warningsPasswordCadastro.innerHTML = `⚠️ Senha não pode ser vazia`;
  } else {
    warningsPasswordCadastro.innerHTML = ""
    passwordCadastro.classList.remove("warningsInput")
  }
  if (passwordCadastro.value.length < 6 || passwordCadastro.value.length > 18) {
    passwordCadastro.classList.add("warningsInput")
    warningsPasswordCadastro.innerHTML = `⚠️ Senha precisa ter no mínimo 6 e no máximo 10 carácteres`;
  } else {
    warningsPasswordCadastro.innerHTML = ""
    passwordCadastro.classList.remove("warningsInput")
  }
  if (repPasswordCadastro.value === null || repPasswordCadastro.value === "") {
    repPasswordCadastro.classList.add("warningsInput")
    warningsPasswordCadastro.innerHTML = `⚠️Senha não pode ser vazia`;

  } else {
    warningsPasswordCadastro.innerHTML = ""
    repPasswordCadastro.classList.remove("warningsInput")
  }
  if (repPasswordCadastro.value.length < 6 || repPasswordCadastro.value.length > 20) {
    repPasswordCadastro.classList.add("warningsInput")
    warningsPasswordCadastro.innerHTML = `⚠️ Senha precisa ter no mínimo 6 e no máximo 10 carácteres`;
  } else {
    warningsPasswordCadastro.innerHTML = ""
    repPasswordCadastro.classList.remove("warningsInput")
  }
   if (passwordCadastro.value != repPasswordCadastro.value) {
    passwordCadastro.classList.add("warningsInput")
    repPasswordCadastro.classList.add("warningsInput")
    warningsPasswordCadastro.innerHTML = `⚠️ Senhas diferentes`;
   } else {
     warningsPasswordCadastro.innerHTML = ""
     repPasswordCadastro.classList.remove("warningsInput")     
  }
  if (emailCadastro.value === null || emailCadastro.value == "") {
    emailCadastro.classList.add("warningsInput")
    warningsEmailCadastro.innerHTML = `⚠️ Email não pode ser vazio`;
  } else {
    warningsEmailCadastro.innerHTML = ""
    emailCadastro.classList.remove("warningsInput")
  }
  if (!expresion.test(emailCadastro.value)) {
    emailCadastro.classList.add("warningsInput")
    warningsEmailCadastro.innerHTML = `⚠️ Digite um email válido`;
  } else {
    warningsEmailCadastro.innerHTML = ""
    emailCadastro.classList.remove("warningsInput")
  }
  await cadastroUser(event)
  document.getElementById("formCadastro").reset()

}

async function  envioLogin(event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

await fetch('http://localhost:8000/api/login', 
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
        window.localStorage.setItem('client', JSON.stringify(data))
        if(data){
          window.location.href = "http://127.0.0.1:5501/front-end/home.html"
        } else {
          window.location.href = "http://127.0.0.1:5501/index.html"
        }
    });
}
async function cadastroUser(event){
event.preventDefault();

const name = document.getElementById("nameCadastro").value;
const email = document.getElementById("emailCadastro").value;
const password = document.getElementById("passwordCadastro").value;
    console.log(name, email, password);

 await fetch('http://localhost:8000/api/register', 
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
        window.localStorage.setItem('client', JSON.stringify(data))
      });
}