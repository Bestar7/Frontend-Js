import { Redirect } from "../Router/Router.js";

const createAccountHTML = 
`<div id="createAccount">
  <form>
    <input type="email" name="email" placeholder="Email" required>
    <input type="password" name="password" placeholder="Mot de passe" required>
    <input type="submit" class="btn btn-primary" value="Prêt">
    <button type="button" class="btn btn-primary" href="#" data-uri="/">Annuler</button>
  </form>
</div>`;

function Register(){
  setBasicPage();
  setLinks();
};

function setBasicPage(){
  document.title = 'Register';
  // SET BASIC PAGE
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = createAccountHTML;
}

function setLinks(){
  const createAccount = document.querySelector("#createAccount").getElementsByTagName("form")[0];
  createAccount.addEventListener("submit", (f) => {
    f.preventDefault();
    console.log("createAccount");
  });

  const annuler = document.querySelector("#createAccount").getElementsByTagName("button")[0];
  annuler.addEventListener("click", () => {
    Redirect("/");
  });
}



////  TODO UTILISER ET VERIFIER CECI
let username = "";
let password = "";
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