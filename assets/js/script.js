
const startButton = document.getElementById('start-btn');
const nextButton = document.getElementById('next-btn');

const questionContainerElement = document.getElementById('question-container');

const questionElement = document.getElementById('question');
const answerButtonsElement = document.getElementById('answer-buttons');

let shuffledQuestions, currentQuestionIndex;


nextButton.addEventListener('click', () => {
  currentQuestionIndex++;
  setNextQuestion();
})

startButton.addEventListener('click', startGame);


function startGame() {
  console.log("started");
  var fiveMinutes = 60 * 5,
        display = document.querySelector('#time');
    startTimer(fiveMinutes, display);
  startButton.classList.add('hide');
  shuffledQuestions = questions.sort(() => Math.random() - .5);
  currentQuestionIndex = 0;
  questionContainerElement.classList.remove('hide');
  setNextQuestion();

  

function setNextQuestion() {
  showQuestion(shuffledQuestions[currentQuestionIndex]);
  resetState();
}

function resetState() {
  //clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}


function selectAnswer(){

  

}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function () {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? "0" + minutes : minutes;
      seconds = seconds < 10 ? "0" + seconds : seconds;

      display.textContent = minutes + ":" + seconds;

      if (--timer < 0) {
          timer = duration;
      }
 
      

/***********************************
 * 
 * Questions section
 */
const questions = [
  {
    question: 'What is a group of Whales called?',
    answers: [
      { text: 'school', correct: false },
      { text: 'pod', correct: true },
      { text: 'swarm', correct: false},
      { text: 'pride', correct: false},
    ]
  },
  {
    question: 'A group of horses is called?',
    answers: [
      { text: 'string', correct: true },
      { text: 'herd', correct: false },
      { text: 'corral', correct: false },
      { text: 'gathering', correct: false }
    ]
  },
  {
    question: 'A group of deer is a?',
    answers: [
      { text: 'herd', correct: false },
      { text: 'mob', correct: true },
      { text: 'flock', correct: false },
      { text: 'pack', correct: false }
    ]
  },
  {
    question: 'A group of turkeys is a?',
    answers: [
      { text: 'gang', correct: false },
      { text: 'chapter', correct: false },
      { text: 'raffle', correct: true},
      { text: 'flock', correct: false},
    ]
  },
  {
    question: 'A group of prisoners is a?',
    answers: [
      { text: 'gang', correct: true },
      { text: 'shift', correct: false },
      { text: 'rabble', correct: false},
      { text: 'mob', correct: false},
    ]
  },
  {
    question: 'A group of nuns is a?',
    answers: [
      { text: 'babble', correct: true },
      { text: 'parish', correct: false },
      { text: 'convent', correct: false},
      { text: 'superfluity', correct: false},
    ]
  }

]