import { Redirect } from "../Router/Router";

/**
 * TODO copier et modifier Salon.js pour que ça corresponde 
 */

let idSalon;

let form = 
`<div>
  <div>
    <h1 id="form">Form : </h1>
    <form method="post">
      <input class="form-control" type="text" name="pseudo" placeholder="Pseudo">
      <input type="submit" class="btn btn-primary" value="Prêt">
    </form>
  </div>
</div>`;

let liste=``;
 for (let index = 0; index < 4; index++) {
  liste += `<li>index</li>`;
}   




function SalonModo() {
  setBasicPage();
}

function setBasicPage() {
  document.title = 'Salon Administrateur';
  // SET BASIC PAGE
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = form;
  console.log("set page done");
}

export default SalonModo;
