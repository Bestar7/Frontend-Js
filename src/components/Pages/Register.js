/**
 * Render the HomePage
 */

 import { Redirect } from "../Router/Router";

const Register = () => { 
  // SET BASIC PAGE
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = "register";

  // CREATION BOUTTONS
  const valider = document.createElement("button");
  const annuler = document.createElement("button");
  valider.innerHTML = "Valider";
  annuler.innerHTML = "Annuler";
  valider.className = "btn btn-primary";
  annuler.className = "btn btn-primary";
  
  // COMPORTEMENT DES BOUTTONS
  valider.addEventListener("click", onRegister);
  annuler.addEventListener("click", () => {
    Redirect("/");
  });
  pageDiv.appendChild(annuler);
  pageDiv.appendChild(valider);
};



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