
import { Button } from "bootstrap";
import { Redirect } from "../Router/Router";


/**
* 
* Render the HomePage
*/
let test=`
<div class="container d-flex justify-content-center">
  <div id="home" class="flex-center">
    
    <div id="connexion">
      <form id="form">
        <input type="email" placeholder="email" name="email" type="text"/>
        <input type="password" placeholder="Mot de passe" name="password"/>
        <input type="submit" class="btn btn-primary" value="Se connecter"></input>    <!--TODO btn type submit-->
        <a href="#" class="btn btn-primary" data-uri="/register">Creer une compte</a>
      </form>
    </div>
    <br>

    <div id="joinSalon" class="flex-center">
      <form>
        <input type = "text" placeholder="code salon" name="codeSalon"/>
        <input type="submit" class="btn btn-primary" value="Joindre salon"></input>   <!--TODO btn type submit-->
      </form>
    </div>
    <br>

    <div id="newSalon" class="flex-center">
      <button type="button" class="btn btn-primary" href="#" data-uri="/salon">Creer un salon</button>
    </div>
    <br>

    <div id="jouer" class="flex-center">
      <button type="button" class="btn btn-primary" href="#" data-uri="/salonModo">Jouer</button>
    </div>
    <br>

  </div>
</div>`;

function HomePage() {
    document.title = 'Ze Question';
    // SET BASIC PAGE
    const pageDiv = document.querySelector("#page");
    pageDiv.innerHTML = test;
  }
  
  export default HomePage;