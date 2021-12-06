/**
 * Render the HomePage
 */

 import { Redirect } from "../Router/Router";

const Register = () => { 
  const pageDiv = document.querySelector("#page");

  pageDiv.innerHTML = "register";

  // create a login form
  const valider = document.createElement("input");

  const annuler = document.createElement("input");
  annuler.value = "Annuler";
  valider.value="Valider"
  // Example on how to use Bootstrap to style a Button
  annuler.className = "btn btn-secondary mt-3";
  valider.className = "btn btn-secondary mt-3";
  // Example on how to add an event handler : when the button is clicked, redirect
  // to the HomePage
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