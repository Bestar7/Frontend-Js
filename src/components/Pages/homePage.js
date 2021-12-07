
import { Redirect } from "../Router/Router";


/**
 * 
 * Render the HomePage
 */
 let test=`<div class="container">
 <div id="home" class="flex-column flex-center">
     <h1> ZE QUESTION</h1>
     <a href="/register.html" class="btn"> Creer une compte</a>
     <div id="form">
         <label id="email"> </label>
         <input type="email" placeholder ="email" name="email" type="text"/>
         <label id="password" ></label>
         <input type="password" placeholder="Mot de passe " name="password"/>
         <a href="/login.html" class="btn"> Se connecter</a>
 
     </div> 
     <div id="newSalon">
     <a class="nav-link" href="#" data-uri="/salon">Creer salon</a>     </div>
      <div id="joinSalon">
        <label id="codesalon" > Rejoindre un salon : </label>
        <input type = "text" placeholder="code salon" name="codeSalon"/>
        <a href="/joinsalon.html" class="btn"> Joindre salon</a>
        </div>
     </div> 
 </div>
 </div>`;
function HomePage() {
    // SET BASIC PAGE
    const pageDiv = document.querySelector("#page");
    pageDiv.innerHTML = test;

    // CREATE BUTTONS
    const btnSalon = document.createElement("button");
    const register = document.createElement("button");
    btnSalon.innerHTML = "Go back to Salon from Home";
    register.innerHTML = "Créer un compte";
    btnSalon.className = "btn btn-primary";
    register.className = "btn btn-primary";

    // COMPORTEMENT DES BUTTONS
    btnSalon.addEventListener("click", () => {
      Redirect("/salon");
    });
    register.addEventListener("click",() => {
        Redirect("/register");
    });
    pageDiv.appendChild(btnSalon);
    pageDiv.appendChild(register);

  }
  
  export default HomePage;
  