
          // Question and answer

const quizData = [
  {
      question: "javascript is an ----------- language?",
      a: "object_oriented",
      b: "object_based",
      c: "procedural",
      d: "All of the above",
      correct: "a",
  },
  {
      question: "How to stop an interval timer in Javascript?",
      a: "clearTimer",
      b: "clearInterval",
      c: "intervalOver",
      d: "None of the above",
      correct: "b",
  },
  {
      question: "Arrays in JavaScript are defined by which of the following statements?",
      a: "It is an odered list of values",
      b: "It is an odered list of objects",
      c: "It is an odered list of string",
      d: "It is an odered list of functions",
      correct: "a",
  },
  {
      question: "Which of the following is not javascript data types?",
      a: "Null type",
      b: "Number Type",
      c: "undefined type",
      d: "All of the above",
      correct: "d",
  },
  {
    question: "Which of the following scoping type does JavaScript use?",
    a: "Sequential",
    b: "segmental",
    c: "Lexical",
    d: "Literal",
    correct: "c",
  },
  {
    question: "Which of the following methods/operation does javascript use instead of == and !=?",
    a: "JavaScript uses bitwise checking",
    b: "sJavaScript uses === and !== instead",
    c: "JavaScript uses equals() and notequals() instead",
    d: "JavaScript uses equalto()",
    correct: "b",
  },
  {
    question: "Which of the following is not a framework?",
    a: "javascript .NET",
    b: "javascript",
    c: "cocoa js",
    d: "jquery",
    correct: "b",
  },
  {
    question: "Q8:The keyword or the property that you use to refer to an object through which they were invoked is _________?",
    a: "form",
    b: "to",
    c: "this",
    d: "object",
    correct: "c",
  },
  {
    question: "What are the three important manipulations done in a for loop on a loop variable?",
    a: "Updation, Incrementation, Initialization",
    b: "Initialization,Testing, Updationl",
    c: "Initialization,Testing, Incrementation",
    d: "Testing, Updation, Testing",
    correct: "b",
  },
  {
    question: "The pop() method of the array does which of the following task?",
    a: "decrements the total length by 1",
    b: "increments the total length by 1",
    c: "prints the first element but no effect on the length",
    d: "updates the element",
    correct: "a",
  },
];



// document 




const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_option = document.getElementById('a_option')
const b_option = document.getElementById('b_option')
const c_option = document.getElementById('c_option')
const d_option = document.getElementById('d_option')
const submitBtn = document.getElementById('submit')



  //  loadquiz 



let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
  deselectAnswers()
  const currentQuizData = quizData[currentQuiz]
  questionEl.innerText = currentQuizData.question
  a_option.innerText = currentQuizData.a
  b_option.innerText = currentQuizData.b
  c_option.innerText = currentQuizData.c
  d_option.innerText = currentQuizData.d
}
function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
      if(answerEl.checked) {
          answer = answerEl.id
      }
  })
  return answer
}


      // button 


      
submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
     if(answer === quizData[currentQuiz].correct) {
         score++
     }
     currentQuiz++
     if(currentQuiz < quizData.length) {
         loadQuiz()
     } else {
         quiz.innerHTML = `
         <h2>You answered ${score}/${quizData.length} questions correctly</h2>
         <button onclick="location.reload()">Reload</button>
         `
     }
  }
})