import { Redirect } from "../Router/Router";

let idSalon;

const formHTML = 
`<div id="form">
  <form method="post">
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
  const newSalon = document.querySelector("#form").getElementsByTagName("button");
  newSalon[0].addEventListener("click", () => {
    Redirect("/");
  });
}

export default SalonModo;
