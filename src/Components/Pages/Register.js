import { Redirect } from "../Router/Router.js";
import { setSession } from "../Utils/Session.js";

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
    onRegister(createAccount);
  });

  const annuler = document.querySelector("#createAccount").getElementsByTagName("button")[0];
  annuler.addEventListener("click", () => {
    Redirect("/");
  });
}



function onRegister(form) {
  let username = form.querySelector('[name="email"]').value;
  let password = form.querySelector('[name="password"]').value;

  let user = {username:username, password:password};

  fetch("/api/users/register/", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    if (response.status != 200)
      throw new Error("Error code : " + response.status + " : " + response.statusText);
    else{
      setSession(user);
      Redirect("/");
    }
    return response.json();
  });
};

export default Register;