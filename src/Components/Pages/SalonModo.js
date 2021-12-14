import { Redirect } from "../Router/Router.js";

let idSalon;

const formHTML = 
`<div id="form">
  <form>
    <legend>Veuillez entrer votre pseudo pour cette partie</legend>
    <input type="text" name="pseudo" placeholder="Pseudo">
    <input type="submit" class="btn btn-primary" value="Prêt">
    <button type="button" class="btn btn-primary" href="#" data-uri="/">Annuler</button>
  </form>
</div>`;

function SalonModo() {
  setBasicPage();
  setLinks();
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
  });
  
  const annuler = document.querySelector("#form").getElementsByTagName("button")[0];
  annuler.addEventListener("click", () => {
    Redirect("/");
  });
}

export default SalonModo;
