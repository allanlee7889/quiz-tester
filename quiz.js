console.log("Loaded");
console.clear();
/* global $ */
/* exports isGameOver, whoWon, playTurn, restart, currentQuestion, correctAnswer, numberOfAnswers */

// A constructor function allows us to easily make question objects
function Question (prompt, answers, correctAnswerIndex) {
  this.prompt = prompt
  this.choices = answers
  this.correctChoice = correctAnswerIndex
}

// using the new keyword and the constructor we can create questions for the quiz
var question1 = new Question('What is the first name of Russia's President Putin?', ['Valentin', 'Valeriy', 'Vladimir', 'Vladivar'], 2)
var question2 = new Question('Whom did George W. Bush defeat in the elections of November 2004?
', ['Al Gore', 'Arnold Schwarzenegger', 'John Kerry', 'Rudy Giuliani'], 2)
var question3 = new Question('Which Stock Exchange's activity is reflected by the Nikkei index?', ['Hong Kong', 'Manila', 'Singapore', 'Tokyo'], 3)
var question4 = new Question('The railway station of Marne-la-Vallee-Chessy is the terminus for travellers to which resort?', ['Chamonix', 'Disneyland Resort Paris', 'Meribel', 'Val d'Isere'], 1)
var question5 = new Question('Which Italian city is served by Marco Polo International Airport?', ['Bologna', 'Florence', 'Genoa', 'Venice'], 3)
var question6 = new Question('What would you find under the icing of a Christmas Cake?', ['Buttercream', 'Jam', 'Marzipan', 'Pastry'], 2)
var question7 = new Question('Pablo Picasso was born in 1881 in which Spanish city?', ['Madrid', 'Malaga', 'Marbella', 'Murcia'], 1)
var question8 = new Question('According to KFC, Colonel Sanders' 'secret recipe' contains how many herbs and spices?', ['9', '10', '11', '12'], 2)
var question9 = new Question('Triton is the largest moon of which planet?', ['Jupiter', 'Saturn', 'Uranus', 'Neptune'], 3)
var question10 = new Question('Madrid lost out to Rio de Janeiro on Friday in the bidding to host the 2016 Olympics. Which other European city was one of the seven original applicants?', ['Berlin', 'Oslo', 'Prague', 'Vienna'], 2)

// we can create an object to represent all of the settings and scores for the quiz
var quiz = {
  currentQuestion: 0,
  questions: [question1, question1, question1, question1],
  isGameOver: false,
  player1Points: 0,
  player2Points: 0
}

// numberOfQuestions should return an integer that is the number of questions in a game
function numberOfQuestions () {
  return quiz.questions.length
}

// currentQuestion should return an integer that is the zero-based index of the current question in the quiz
function currentQuestion () {
  return quiz.currentQuestion
}

// correctAnswer should return an integer that is the zero-based index the correct answer for the currrent question
function correctAnswer () {
  return quiz.questions[quiz.currentQuestion].correctChoice
}

// numberOfAnswers should return an integer that is the number of choices for the current question
function numberOfAnswers () {
  return quiz.questions[quiz.currentQuestion].choices.length
}

// playTurn should take a single integer, which specifies which choice the current player wants to make. It should return a boolean true/false if the answer is correct.
function playTurn (choice) {
  if (quiz.isGameOver) {
    return false
  }
  var correct = false
  if (choice === quiz.questions[quiz.currentQuestion].correctChoice) {
    correct = true
    if (quiz.currentQuestion % 2) {
      quiz.player2Points++
    } else {
      quiz.player1Points++
    }
  }
  ++quiz.currentQuestion
  if (quiz.currentQuestion === numberOfQuestions()) { 
    quiz.isGameOver = true
  }
  return correct
}

// isGameOver should return a true or false if the quiz is over.
function isGameOver () {
  return quiz.isGameOver
}

// whoWon should return 0 if the game is not yet finished, 1 or 2 depending on which player won, else 3 if the game is a draw.
function whoWon () {
  if (!quiz.isGameOver) return 0
  if (quiz.player1Points > quiz.player2Points) return 1
  if (quiz.player1Points < quiz.player2Points) return 2
  return 3
}

// restart should restart the game so it can be played again.
function restart () {
  quiz.currentQuestion = 0
  quiz.isGameOver = false
  quiz.player1Points = 0
  quiz.player2Points = 0
}

// a function to update the display whenever the data changes
function updateDisplay () {
  if (isGameOver()) {
    $('h1').text(' gameover. winner is ' + whoWon())
  } else {
    $('h1').text(quiz.currentQuestion + ') ' + quiz.questions[quiz.currentQuestion].prompt)
    // hard coded display, only has 4 answers at a time. Each is displayed as a button, so can use the order (eg) that they appear in the dom to select them
    $('button').eq(0).text(quiz.questions[quiz.currentQuestion].choices[0])
    $('button').eq(1).text(quiz.questions[quiz.currentQuestion].choices[1])
    $('button').eq(2).text(quiz.questions[quiz.currentQuestion].choices[2])
    $('button').eq(3).text(quiz.questions[quiz.currentQuestion].choices[3])
  }
  // update player scores regardless
  $('h3').eq(0).text('Player1: ' + quiz.player1Points)
  $('h3').eq(1).text('Player2: ' + quiz.player2Points)
}

// the jQuery ready function will add click listeners once the dom is loaded
$(function () {
  $('button').click(function () {
    // if gameover then restart else log a player turn
    if (isGameOver()) {
      restart()
    } else {
      // can use jquery index() to find the position of this element in relation to its siblings. works as only answers are in this container
      playTurn($(this).index())
    }
    updateDisplay()
  })
  // update the display for the first time
  updateDisplay()
})
