import { Redirect } from "../Router/Router";
import Quizz from "../Domain/Quizz";

function QuestionPage() {
    document.title = 'Questions';
    const pageDiv = document.querySelector("#page");
    pageDiv.innerHTML = questions;
}

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

export default QuestionPage;