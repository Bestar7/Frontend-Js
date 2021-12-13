import { Redirect } from "../Router/Router";

import { Button as BootstrapButton} from "bootstrap";


/**
* 
* Render the HomePage
*/
let connexionHTML = 
`<div id="connexion">
  <form id="form">
    <input type="email" placeholder="email" name="email" type="text"/>
    <input type="password" placeholder="Mot de passe" name="password"/>
    <input type="submit" class="btn btn-primary" value="Se connecter"></input>    <!--TODO-->
    <a class="btn btn-primary" data-uri="/register">Creer une compte</a>
  </form>
</div>
<br>`;

let joinSalonHTML = 
`<div id="joinSalon" class="flex-center">
  <form>
    <input type = "text" placeholder="code salon" name="codeSalon"/>
    <input type="submit" class="btn btn-primary" value="Joindre salon"></input>    <!--TODO-->
  </form>
</div>
<br>`;

let newSalonHTML = 
`<div id="newSalon" class="flex-center">
  <button type="button" class="btn btn-primary" href="#" data-uri="/salonModo">Creer un salon</button>
</div>
<br>`;

let jouerHTML = 
`<div id="jouer" class="flex-center">
  <button type="button" class="btn btn-primary">Prêt</button>    <!--TODO-->
</div>
<br>`;

function HomePage() {
  setBasicPage();
  setLinks();
}

function setBasicPage() {
  document.title = 'Ze Question';
  // SET BASIC PAGE
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = connexionHTML + joinSalonHTML + newSalonHTML + jouerHTML;
  console.log("set page done");
}

function setLinks(){
  const creerCompte = document.querySelector("#connexion").getElementsByTagName("a");
  creerCompte[0].addEventListener("click", () => {
    Redirect("/register");
  });

  const newSalon = document.querySelector("#newSalon").getElementsByTagName("button");
  newSalon[0].addEventListener("click", () => {
    creerSalon();
  });

  console.log("setLinks done");
}

function creerSalon(){
  if (!"user is not connected"){
    console.log("veuillez vous connecter");
  }
  Redirect("/salonModo");
}
  
export default HomePage;