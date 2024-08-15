alert("certainly!Here are 10 multiple-choice questions about JavaScript,Select only 1 option.Let's Begin.");
const quizData = [
    {
        question: "Which operator is used to assign a value to a variable?",
        a: "=",
        b: "*",
        c: "-",
        d: "+",
        correct: "a",
    },
    {
        question: "Is Javascript case-sensitive?",
        a: "No",
        b: "Yes",
        c: "Both",
        d: "Neither",
        correct: "b",
    },
    {
        question: "Which keyword is used to define a class in JavaScript?",
        a: "class",
        b: "function",
        c: "object",
        d: "id",
        correct: "a",
    },
    {
        question: "Which method is used to remove whitespace from both ends of a string in JavaScript?",
        a: "trim",
        b: "strip",
        c: "remove",
        d: "add",
        correct: "a",
    },
    {
        question: "Which operator is used to compare both value and type in JavaScript?",
        a: "==",
        b: "===",
        c: "==!",
        d: "===!",
        correct: "b",
    },
];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')

let currentquiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    dselectAnswers()

const currentQuizData = quizData[currentquiz]

questionEl.innerText = currentQuizData.question
a_text.innerText = currentQuizData.a
b_text.innerText = currentQuizData.b
c_text.innerText = currentQuizData.c
d_text.innerText = currentQuizData.d
}

function   dselectAnswers() {
answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventsListener('click', () => {
    const answer = getSelected()
    if(answer) {
        if(answer === quizData[currentquiz].correct) {
            score++
        }

        currentquiz++

        if(currentquiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHtml = '
            <h2>you answered ${score}/${quizData.length} questions correctly</h2>

            <button onclick="location.reload()">Reload</button>
            '
        }
    }
})