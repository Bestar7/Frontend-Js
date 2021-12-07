
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
         <button type="button" class="btn btn-danger homepage_play_button mt-5" href="#" data-uri="/salon">Jouer</button>
         </div>
     </div> 
 </div>
 </div>`;
 function HomePage() {
    // Deal with your NewPage content here
    const pageDiv = document.querySelector("#page");
    pageDiv.innerHTML = test;
    // create a login form
    const btnSalon = document.createElement("input");
    btnSalon.value = "Go back to Salon from Home";
    // Example on how to use Bootstrap to style a Button
    btnSalon.className = "btn btn-secondary mt-3";
    // Example on how to add an event handler : when the button is clicked, redirect
    // to the HomePage
    btnSalon.addEventListener("click", () => {
      Redirect("/salon");
    });
    pageDiv.appendChild(btnSalon);

    const register = document.createElement("input");
    register.value="Créer un compte";
    register.className="btn btn-secondary mt-3";
    register.addEventListener("click",() => {
        Redirect("/register");
    });
    pageDiv.appendChild(register);

  }
  
  export default HomePage;
  