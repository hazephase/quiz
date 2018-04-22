// Future
// Nicer alert
// Game font / ui?
// Submit a question

// Set all questions
var questions = ["1", "2", "3", "4"];

// Set all awnsers
var allAwnsers = [{
  firstAwnser: "Variable",
  secondAwnser: "Length",
  thirdAwnser: "Number",
  fourthAwnser: "Boolean"
}, {
  firstAwnser: "Increments",
  secondAwnser: "Double adding",
  thirdAwnser: "Double positive",
  fourthAwnser: "Updates a boolean"
}, {
  firstAwnser: "+",
  secondAwnser: "*",
  thirdAwnser: "|",
  fourthAwnser: "/"
}, {
  firstAwnser: "Not this one",
  secondAwnser: "Nah",
  thirdAwnser: "Nope",
  fourthAwnser: "Pick this one"
}];

// Set all correct awnsers
var correctAwnsers = ["Length", "Increments", "|", "Pick this one"];

// Set current score, question and awnser
var scorePoints = 0;
var correctAwnserNumber = 0;
var updateOptionsCounter = 0;
var updateQuestionsCounter = 0;
var questionNumber = 1;
var totalQuestions = questions.length;

// Get DOM elements
var score = document.getElementById('score');
var question = document.getElementById('question');

function updateScore() {
  scorePoints += 10;
  score.innerHTML = scorePoints;
};

// Update current question
function nextQuestion() {

  // Increment
  correctAwnserNumber++;

  // Update question number
  (function updateQuestionNumber() {
    questionNumber++;
    var QuestionNumberDom = document.getElementById('questionNumber');
    QuestionNumberDom.innerHTML = questionNumber;
    return questionNumber;
  })();

  // update Options
  (function updateOptions() {
    updateOptionsCounter++;

    var awnser1 = document.getElementById('awnser1');
    var awnser2 = document.getElementById('awnser2');
    var awnser3 = document.getElementById('awnser3');
    var awnser4 = document.getElementById('awnser4');

    awnser1.innerHTML = allAwnsers[updateOptionsCounter].firstAwnser;
    awnser2.innerHTML = allAwnsers[updateOptionsCounter].secondAwnser;
    awnser3.innerHTML = allAwnsers[updateOptionsCounter].thirdAwnser;
    awnser4.innerHTML = allAwnsers[updateOptionsCounter].fourthAwnser;
  })();

  // update question counter
  (function updateQuestions() {
    updateQuestionsCounter++;

    question.innerHTML = questions[updateQuestionsCounter];
  })();
}

// Check for the correct awnser then show next question
function checkAwnser(awnseredQuestion) {
  var awnserd = awnseredQuestion.innerHTML;

  if (awnserd == correctAwnsers[correctAwnserNumber]) {
    alert('jah');

    // Check for last question then end the quiz
    if (questionNumber == totalQuestions) {
      updateScore();
      alert('You got ' + scorePoints + ' points');
    } else {
      nextQuestion();
      updateScore();
    }
  } else {
    alert('nah');
    nextQuestion();
  }
}
