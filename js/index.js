// Future
// Nicer alert
// Game font / ui?
// Submit a question

// Set all questions
var questions = Array("sound/winner1.mp3", "sound/winner2.mp3", "sound/winner3.mp3", "sound/winner4.mp3");

// Set all awnsers
var allAwnsers = [{
  firstAwnser: "ང",
  secondAwnser: "ཁ",
  thirdAwnser: "ག",
  fourthAwnser: "ཀ"
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
var audioQuiz = document.getElementById('audio');
var audioFile = questions[Math.floor(Math.random()* questions.length)];
    // audioQuiz.src = "me";


window.onload = function randomHole(questions) {
  var questions = Array("sound/winner1.mp3", "sound/winner2.mp3", "sound/winner3.mp3", "sound/winner4.mp3");
  const idx = Math.floor(Math.random() * questions.length);
  const question = questions[idx];
return  audioQuiz.src = question;
  }
  var ans = document.getElementById('ans');
  for (var i = ans.children.length; i >= 0; i--) {
    var lastAns ;
     answer =   ans.appendChild(ans.children[Math.random() * i | 0]);
     console.log(answer);
     lastAns = answer;

  }
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
}
  // Update question number
  (function updateQuestionNumber() {
    questionNumber++;
    var QuestionNumberDom = document.getElementById('questionNumber');
  //  QuestionNumberDom.innerHTML = questionNumber;
    return questionNumber;
  })();

  // update Options
  (function updateOptions() {
    updateOptionsCounter++;

    var awnser1 = document.getElementById('awnser1');
    var awnser2 = document.getElementById('awnser2');
    var awnser3 = document.getElementById('awnser3');
    var awnser4 = document.getElementById('awnser4');

    // awnser1.innerHTML = allAwnsers[updateOptionsCounter].firstAwnser;
    // awnser2.innerHTML = allAwnsers[updateOptionsCounter].secondAwnser;
    // awnser3.innerHTML = allAwnsers[updateOptionsCounter].thirdAwnser;
    // awnser4.innerHTML = allAwnsers[updateOptionsCounter].fourthAwnser;
  })();



// Check for the correct awnser then show next question
function checkAwnser(awnseredQuestion) {
  var awnserd = awnseredQuestion.innerHTML;

  if (awnserd === "ང") {
    console.log('correct!');

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
