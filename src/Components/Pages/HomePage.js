import { Redirect } from "../Router/Router.js";

const connexionHTML = 
`<div id="connexion">
  <form>
    <input type="email" placeholder="email" name="email" type="text" required/>
    <input type="password" placeholder="Mot de passe" name="password" required/>
    <input type="submit" class="btn btn-primary" value="Se connecter"></input>    <!--TODO-->
    <a class="btn btn-primary" data-uri="/register">Creer une compte</a>
  </form>
</div>
<br>`;

const joinSalonHTML = 
`<div id="joinSalon">
  <form>
    <input type="text" placeholder="code salon" name="codeSalon" required/>
    <input type="submit" class="btn btn-primary" value="Joindre salon">    <!--TODO-->
  </form>
</div>
<br>`;

const newSalonHTML = 
`<div id="newSalon">
  <button type="button" class="btn btn-primary" href="#" data-uri="/salonModo">Creer un salon</button>
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
  pageDiv.innerHTML = connexionHTML + joinSalonHTML + newSalonHTML;
}

function setLinks(){
  //connexionHTML
  const connexion = document.querySelector("#connexion").getElementsByTagName("form")[0];
  connexion.addEventListener("submit", (f) => {
    f.preventDefault();
    console.log("connexion");
  });

  const creerCompte = document.querySelector("#connexion").getElementsByTagName("a")[0];
  creerCompte.addEventListener("click", () => {
    Redirect("/register");
  });
  
  //joinSalonHTML
  const joinSalon = document.querySelector("#joinSalon").getElementsByTagName("form")[0];
  joinSalon.addEventListener("submit", (f) => {
    f.preventDefault();
    console.log("joinSalon");
  });

  //newSalonHTML
  const newSalon = document.querySelector("#newSalon").getElementsByTagName("button")[0];
  newSalon.addEventListener("click", () => {
    creerSalon();
  });
}

function creerSalon(){
  if (!"user is not connected"){
    console.log("veuillez vous connecter");
  }
  Redirect("/salonModo");
}

export default HomePage;