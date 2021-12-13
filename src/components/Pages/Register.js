/**
 * Render the HomePage
 */

 import { Redirect } from "../Router/Router";

const Register = () => { 
  document.title = 'Register';
  // SET BASIC PAGE
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = "register";

  // CREATE FORM
  const formRegister = document.createElement("form");
  formRegister.action = ""; // TODO
  // add email
  const email = document.createElement("input");
  email.setAttribute('type',"text");
  email.setAttribute('name',"email");
  formRegister.appendChild(email);

  //add password
  const password = document.createElement("input");
  password.setAttribute('type',"text");
  password.setAttribute('name',"password");
  formRegister.appendChild(password);

  //add submit
  const creerCompte = document.createElement("input");
  creerCompte.setAttribute('type',"submit");
  creerCompte.setAttribute('value',"Creer un compte");
  formRegister.appendChild(creerCompte);

  //add cancel
  const annuler = document.createElement("button");
  annuler.innerHTML = "Annuler";
  annuler.addEventListener("click", () => {
    Redirect("/"); // TODO
  });
  formRegister.appendChild(annuler);
  
  // append form
  pageDiv.appendChild(formRegister);
};



////  TODO UTILISER ET VERIFIER CECI
let username ="";
let password="";
const onRegister = (e) => {
    e.preventDefault();
    let user = {
        username: document.getElementById("name").value,
    };
   // console.log("User : "+user.username);
    fetch("/api/users/chat", {
        method: "POST",
        body: JSON.stringify(user), // body data type must match "Content-Type" header
        headers: {
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
            if (!response.ok) throw new Error("Error code : " + response.status + " : " + response.statusText);
            return response.json();
        })
        .then((data) => onUserRegistration(data))
        .catch((err) => onError(err));
};
export default Register;