
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
    }
    endQuizz(){
        return this.currentQuestion >= questions.length;
    }

}

// create quizz
let quizz = new Quizz(questions)

console.log(quizz);