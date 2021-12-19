import { Redirect } from "../Router/Router.js";
import { getSession, setSession } from "../Utils/Session.js";

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
  if (!getSession())
    pageDiv.innerHTML = connexionHTML;
  else
    pageDiv.innerHTML = joinSalonHTML + newSalonHTML;
}

function setLinks(){
  //connexionHTML
  if (document.querySelector("#connexion")!=null){
    const connexion = document.querySelector("#connexion").getElementsByTagName("form")[0];
    connexion.addEventListener("submit", (f) => {
      f.preventDefault();
      onLogin(connexion);
    });
  
    const creerCompte = document.querySelector("#connexion").getElementsByTagName("a")[0];
    creerCompte.addEventListener("click", () => {
      Redirect("/register");
    });
  }
  
  //joinSalonHTML
  if (document.querySelector("#joinSalon")!=null){
    const joinSalon = document.querySelector("#joinSalon").getElementsByTagName("form")[0];
    joinSalon.addEventListener("submit", (f) => {
      f.preventDefault();
      onJoinSalon(joinSalon);
    });
  }

  //newSalonHTML
  if (document.querySelector("#newSalon")!=null){
    const newSalon = document.querySelector("#newSalon").getElementsByTagName("button")[0];
    newSalon.addEventListener("click", () => {
      creerSalon();
    });
  }
}

function creerSalon(){
  if (!"user is not connected"){ //TODO
    console.log("veuillez vous connecter");
  }
  Redirect("/salonModo");
}

function onJoinSalon(form){
  let codeSalon = {code:form.querySelector('[name="codeSalon"]').value};

  fetch("/api/salons/addplayer/"+getSession().username+"/"+codeSalon, { // TODO
    method: "POST",
    body: JSON.stringify(codeSalon),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    if (!response.ok)
      throw new Error("Error code : " + response.status + " : " + response.statusText);
      else Redirect("/questionPage");
    return response.json();
  });
}

function onLogin(form) {
  let username = form.querySelector('[name="email"]').value;
  let password = form.querySelector('[name="password"]').value;

  let user = {username:username, password:password};

  setSession(user);

  fetch("/api/users/login", {
    method: "POST",
    body: JSON.stringify(user),
    headers: {
      "Content-Type": "application/json",
    },
  })
  .then((response) => {
    if (!response.ok)
      throw new Error("Error code : " + response.status + " : " + response.statusText);
    return response.json();
  });
};

export default HomePage;