import HomePage from "./HomePage";
import { Redirect } from "../Router/Router";

/**
 * Render the NewPage :
 * Just an example to demonstrate how to use the router to "redirect" to a new page
 */

 let idSalon;
 
 let pageHtml=`
  <div class= "row mx-0 text-center">
    <div class="col-md-4 mt-2"> 
      <h1 id="titleSalon" class= "display-2 mb-2 mb-md-5 text-center">Ze Question</h1>
    </div>
  </div>
  `

  let form=`<div class="row mx-0 text-center">
  <div class="col-md-4"></div>
  <div class="col-md-4 mt-2">
      <h1 id="form" class="display-2 mb-2 mb-md-5 text-center">Form : </h1>
      <form method="post" >
        <div class="row justify-content-center">
            <div class="col-xs-4">
                <div class="row justify-content-center" style="padding-top:10px;">
                    <input class="form-control" id="pseudo" type="text" name="name" placeholder="Pseudo">
                </div>
            </div>
        </div>
        <div class="row justify-content-center">
            <div class="col-xs-3 col-md-5 col-sm-4" >
                <div class="row justify-content-center" style="padding-top:10px;">
                    <button class="btn btn-primary" type="submit" id="btnChatPage">Prêt</button>
                </div>
            </div>
        </div>
    </form>
    
  </div>
</div>`;

let liste=``;
    
 for (let index = 0; index < 4; index++) {
  liste += `<li> index </li>`;
}   




function Salon() {
  // Deal with your NewPage content here
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = pageHtml+form+ liste;
  // create a login form
  const submit = document.createElement("input");
  submit.value = "Go back to HomePage from salon";
  // Example on how to use Bootstrap to style a Button
  submit.className = "btn btn-secondary mt-3";
  // Example on how to add an event handler : when the button is clicked, redirect
  // to the HomePage
  submit.addEventListener("click", () => {
    Redirect("/");
  });
  pageDiv.appendChild(submit);
  
}

export default Salon;
