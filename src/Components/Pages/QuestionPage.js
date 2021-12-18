import { Redirect } from "../Router/Router.js";

let questionHTML=
`<div class="quizz">
  <h1>Ze question</h1>
        
  <h2 id="question"></h2>

  <div class="choices">
    <button type="button" id="answer01" class="btn btn-light">
    <p id="choice0"></p> 
    </button>
            
    <button type="button" id="answer02" class="btn btn-light">
    <p id="choice1"></p> 
    </button>
            
    <button type="button" id="answer03" class="btn btn-light">
    <p id="choice2"></p> 
    </button>
            
    <button type="button" id="answer04" class="btn btn-light">
    <p id="choice3"></p>  
    </button>
  </div>
</div>
`;

function QuestionPage() {
  setBasicPage();
  quizzApp();
}
  
function setBasicPage() {
  document.title = 'Questions';
  // SET BASIC PAGE
  const pageDiv = document.querySelector("#page");
  pageDiv.innerHTML = questionHTML;
}


// question constructor 
class Question {
  constructor(question,choices,answer){
      this.question = question;
      this.choices = choices;
      this.answer = answer;
  }
  GoodAnswer(choice){
      return choice === this.answer;
  }
}

// create questions 
let questions = [
  new Question (
      "Quelle est la pils la plus consommée en Belgique ?",
      ["Jupiler","Carapils","Maes","Stella Artois"],
      "Jupiler"),
  new Question (
      "Comment s'appelle ma mère ?",
      ["Julie","Sophie","Manu","Stephanie"],
      "Stephanie"),
  new Question (
      "Comment s'appelle Guillaume ?",
      ["Guillaume","Pas Guillaume","Question Piège","j'sais po"],
      "Guillaume"),
  new Question (
      "Quelle est mon fruit préférer ?",
      ["Orange","Mandarine","Orange Portugal","Orange Valencia"],
      "Jupiler")

];
console.log(questions);
// Quizz constructor 
class Quizz{
  constructor(questions){
      this.questions = questions
      this.score = 0;
      this.afond = 0;
      this.currentQuestion = 0;
  }
  getCurrentQuestion(){
      return this.questions[this.currentQuestion];
  }
  guess(answer){
      if (this.getCurrentQuestion().GoodAnswer){
          score++;
      }else{
          afond++;
      }
      this.currentQuestion++;
  }
  endQuizz(){
      return this.currentQuestion >= questions.length;
  }

}

// create quizz
let quizz = new Quizz(questions);

 // all methodes about the quizz
 const display = {
  elementShown : function(id,text){
    let element = document.getElementById(id);
    element.innerHTML = text;
  },
  quizzEnded : function(){
    let quizzEndedHTML = `
      <h1> Quizz terminé </h1>
      <h3>Votre score est de : ${quizz.score} / ${quizz.questions.length}</h3>
      <h3>Vous devez prendre ${quizz.afond} afond(s) !</h3>`;

      this.elementShown("question", quizzEndedHTML);
      
  },
  question : function(){
    this.elementShown("question",quizz.getCurrentQuestion().question)
  },
  choices : function(){
    let choices = quizz.getCurrentQuestion().choices;

    const guessHandler = (id,guess) => {
      document.getElementById(id).onclick = function(){
        quizz.guess(guess);
        quizzApp();
      }
    }
    for (let i = 0; i<choices.length; i++){
      this.elementShown("choice" + i, choices[i]);
    }
  }
}

//logic quizz
const quizzApp = () => {
  
    display.question();
    display.choices();
    
  
}

export default QuestionPage;