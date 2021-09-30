 var readlineSync = require("readline-sync");

var score = 0;
var userName = readlineSync.question("you are ? ");

console.log("welcome " + userName + " lets play ");

// play function
var questions = [{
  question: "Where do I live? ",
  answer: "malaypur"
},
{
  question: "what's my Favorite Dish? ",
  answer: "nothing"
},
{
  question: "Who's My Favorite superhero? ",
  answer: "none"
}]

function play (question, answer){
  var userAnswer = readlineSync.question(question);

  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("right");
    score = score+10;
  }
  else{
    console.log("you're Wrong")
    score = score-5;
  }
  console.log("your Score", score);
  console.log("---------");
}



//loop
for (var i=0; i<questions.length; i++){
  currentQuestion = questions[i];
  play(currentQuestion.question , currentQuestion.answer);
}
console.log("YEH! you SCORED: ", score)