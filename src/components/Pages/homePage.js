
import { Redirect } from "../Router/Router";


/**
* 
* Render the HomePage
*/
let test=`
<div class="container d-flex justify-content-center">
  <div id="home" class="flex-column flex-center">
    <div id="connexion">
      <form id="form">
        <label id="email"> </label>
        <input type="email" placeholder="email" name="email" type="text"/>
        <label id="password"></label>
        <input type="password" placeholder="Mot de passe" name="password"/>
        <a href="/login.html" class="btn btn-primary">Se connecter</a>
        <a href="/register.html" class="btn btn-primary">Creer une compte</a>
      </form>
    </div>
    <br>

    <div id="joinSalon">
      <form>
        <input type = "text" placeholder="code salon" name="codeSalon"/>
        <a href="/joinsalon.html" class="btn btn-primary"> Joindre salon</a>
        </div>
        </form>
    </div>
    <br>

    <div id="joinSalon">
      <button type="button" class="btn btn-primary" href="#" data-uri="/salon">Jouer</button>
    </div>
    <br>

    <div id="newSalon">
           
    </div>
    <br>

    

    
    
  </div>
</div>`;
function HomePage() {
    document.title = 'Ze Question';
    // SET BASIC PAGE
    const pageDiv = document.querySelector("#page");
    pageDiv.innerHTML = test;

    // CREATE BUTTONS
    //const btnCreateSalon = document.createElement("button");
    const btnSalon = document.createElement("button");
    const register = document.createElement("button");
    //btnCreateSalon.innerHTML = "Creer un salon";
    btnSalon.innerHTML = "Go back to Salon from Home";
    register.innerHTML = "Créer un compte";
    //btnCreateSalon.className = "btn btn-primary";
    btnSalon.className = "btn btn-primary";
    register.className = "btn btn-primary";

    // COMPORTEMENT DES BUTTONS
    /*
    btnCreateSalon.addEventListener("click", () => {
      Redirect("/salonModo");
    });
    document.createElement("newSalon").appendChild(btnCreateSalon);
    */
    btnSalon.addEventListener("click", () => {
      Redirect("/salon");
    });
    pageDiv.appendChild(btnSalon);
    register.addEventListener("click",() => {
        Redirect("/register");
    });
    pageDiv.appendChild(register);

  }
  
  export default HomePage;