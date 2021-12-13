import { Redirect } from "../Router/Router";

let questions=`
<div class="container">
    <div class="quizz">

        <h1>Ze question</h1>
        
        <h2 id="question"><h2>

        <div class ="choices">

            <button type="button" id="answer01" class="btn btn btn-light">
            <p id="choice01"></p>
            </button>
            
            <button type="button" id="answer02" class="btn btn btn-light">
            <p id="choice01"></p>
            </button>
            
            <button type="button" id="answer03" class="btn btn btn-light">
            <p id="choice01"></p>
            </button>
            
            <button type="button" id="answer04" class="btn btn btn-light">
            <p id="choice01"></p>
            </button>
            
        <div>
    </div>
</div>
`;

function QuestionPage() {
  setBasicPage();
  setLinks();
}
  
function setBasicPage() {
  document.title = 'Questions';
  // SET BASIC PAGE
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = formHTML;
}
  
function setLinks(){
  /*
  const newSalon = document.querySelector("#form").getElementsByTagName("button");
  newSalon[0].addEventListener("click", () => {
    Redirect("/");
  });
  */
}

export default QuestionPage;