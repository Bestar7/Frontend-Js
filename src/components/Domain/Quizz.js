
class Question {
    constructor(question,choices,answer){
        this.question = question;
        this.choices = choices;
        this.answer = answer;
    }
}
GoodAnswer(choice);{
    if (choice === this.answer) return true;
    return false;
}

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

class Quizz{
    constructor(questions){
        this.questions = Question
        this.score = 0;
        this.currentQuestion = 0;
    }
    getCurrentQuestion(){
        return this.Question[this.Question];
    }
    /*guess(answer){
        if (this.getCurrentQuestion().GoodAnswer(answer))
    }*/
}