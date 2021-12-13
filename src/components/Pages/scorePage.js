import { Redirect } from "../Router/Router";

let HTML = `<p>hello salon</p>`;

function ScorePage() {
    setBasicPage();
    setLinks();
}
  
function setBasicPage() {
  document.title = 'Score';
  // SET BASIC PAGE
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = HTML;
}

function setLinks(){
  /*
  const newSalon = document.querySelector("#form").getElementsByTagName("button");
  newSalon[0].addEventListener("click", () => {
    Redirect("/");
  });
  */
}

export default ScorePage;