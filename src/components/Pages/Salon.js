import HomePage from "./HomePage";
import { Redirect } from "../Router/Router";

/**
 * Render the NewPage :
 * Just an example to demonstrate how to use the router to "redirect" to a new page
 */

 let idSalon;
function Salon() {
  // SET BASIC PAGE
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = "hey";

  // CREATION BOUTTONS
  const submit = document.createElement("button");
  submit.innerHTML = "Go back to HomePage from salon";
  submit.className = "btn btn-primary";

  // COMPORTEMENT DES BOUTTONS
  submit.addEventListener("click", () => {
    Redirect("/");
  });
  pageDiv.appendChild(submit);
}

export default Salon;
