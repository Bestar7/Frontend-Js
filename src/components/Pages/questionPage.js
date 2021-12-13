import { Redirect } from "../Router/Router";

let questionHTML=
`<div class="quizz">
  <h1>Ze question</h1>
        
  <h2 id="question"><h2>

  <div class="choices">
    <button type="button" id="answer01" class="btn btn-light">
    </button>
            
    <button type="button" id="answer02" class="btn btn-light">
    </button>
            
    <button type="button" id="answer03" class="btn btn-light">
    </button>
            
    <button type="button" id="answer04" class="btn btn-light">
    </button>
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
  pageDiv.innerHTML = questionHTML;
}
  
function setLinks(){
  /*
  const response = document.querySelector("#answer01");
  response.addEventListener("click", () => {
    Redirect("/");
  });
  */
}

export default QuestionPage;