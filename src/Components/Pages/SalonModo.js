import { Redirect } from "../Router/Router.js";

let idSalon;
let checkboxes = "";

const formHTML = 
`<div id="form">
  <form>
    <legend>Veuillez entrer votre pseudo pour cette partie</legend>
    <input type="text" name="pseudo" placeholder="Pseudo" required>
    <input type="submit" class="btn btn-primary" value="Prêt">
    <button type="button" class="btn btn-primary" href="#" data-uri="/">Annuler</button>
  </form>
</div>`;
const codeHTML = `<h2 id="id"></h2>`;
const themesDebutHTML = 
`<div id="themes">
<form>
  <legend>Quels thématiques voulez-vous ?</legend>`;
const themesFinHTML = 
`</form>
</div>`;

function SalonModo() {
  setBasicPage();
  setLinks();
  creerCodeSalon();
  creerTheme();
}

function creerCodeSalon(){
  fetch("/api/salons", {
    method: "POST",
    body: null,
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    if (!response.ok)
      throw new Error("Error code : " + response.status + " : " + response.statusText);
    let resp = response.json();
    idSalon = resp.id;
    document.getElementById("id").innerText = "Code du salon : "+idSalon;
    return resp;
  }).catch((response) =>{
    console.log("Error code : " + response.status + " : " + response.statusText);
  });
}

function creerTheme(){
  fetch("/api/questions/", {
    method: "POST",
    body: null,
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    if (!response.ok)
      throw new Error("Error code : " + response.status + " : " + response.statusText);
    let resp = response.json();
    let themes = resp.themes;
    for (i=0; i<themes.length ; i++){
      checkboxes += 
      `<input class="form-check-input" type="checkbox" id="theme`+i+`">
      <label class="form-check-label" for="theme`+i+`">`+themes[i]+`</label>`
    }
    
    return resp;
  }).catch((response) =>{
    console.log("Error code : " + response.status + " : " + response.statusText);
  });

  
}

function setBasicPage() {
  document.title = 'Salon Administrateur';
  // SET BASIC PAGE
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = formHTML+codeHTML+themesDebutHTML+checkboxes+themesFinHTML;
}

function setLinks(){
  const pret = document.querySelector("#form").getElementsByTagName("form")[0];
  pret.addEventListener("submit", (f) => {
    f.preventDefault();
    console.log("pret");
    Redirect("/questionPage");
  });
  
  const annuler = document.querySelector("#form").getElementsByTagName("button")[0];
  annuler.addEventListener("click", () => {
    Redirect("/");
  });
}

export default SalonModo;
