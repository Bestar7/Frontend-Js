import { Redirect } from "../Router/Router.js";

let idSalon;

const formHTML = 
`<div id="form">
  <form>
    <legend>Veuillez entrer votre pseudo pour cette partie</legend>
    <input type="text" name="pseudo" placeholder="Pseudo" required>
    <input type="submit" class="btn btn-primary" value="Prêt">
    <button type="button" class="btn btn-primary" href="#" data-uri="/">Annuler</button>
  </form>
</div>`;

function SalonModo() {
  creerCodeSalon();
  setBasicPage();
  setLinks();
}

function creerCodeSalon(){
  fetch("/api/salons/", {
    method: "POST",
    body: null,
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    if (!response.ok)
      throw new Error("Error code : " + response.status + " : " + response.statusText);
    return response.json();
  });
}

function setBasicPage() {
  document.title = 'Salon Administrateur';
  // SET BASIC PAGE
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = formHTML;
}

function setLinks(){
  const pret = document.querySelector("#form").getElementsByTagName("form")[0];
  pret.addEventListener("submit", (f) => {
    f.preventDefault();
    console.log("pret");
    Redirect("/QuestionPage");
  });
  
  const annuler = document.querySelector("#form").getElementsByTagName("button")[0];
  annuler.addEventListener("click", () => {
    Redirect("/");
  });
}

export default SalonModo;
