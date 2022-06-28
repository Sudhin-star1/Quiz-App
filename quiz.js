//*******************************************************************************
const questions = [
    {
        question: "What nut is used to make marzipan?",
        a: "Almonds",
        b:"Apple",
        c:"PineApple",
        d:"Pista",
        ans: "a"
    }, 

    {
        question: "What is the full form of BBC?",
        a: "Bristish Broadcasting Camera",
        b:"British Broadcasting Company",
        c:"British BroadCasting Communication",
        d:"British Broadcasting Corporation",
        ans: "d"
    },

    {
        question: "How many days in leap year?",
        a: 364,
        b: 365,
        c: 366,
        d: "Saturday",
        ans: "c"
    },

    {
        question: "What sport did Fred Perry play?",
        a: "Rugby",
        b:"Tennis",
        c:"Soccer",
        d:"Hockey",
        ans: "b"
    }
];

//**********************************************************************


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');

const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;
const getCheckedAnswer = () => {
    let answer;
    answers.forEach((element) => {
        if(element.checked){
             answer = element.id;
        }
    });
    return answer;
}

const loadQuestions = () => {
    question.innerHTML = questions[questionCount].question;
}

loadQuestions();

const loadOptions = () => {

    option1.innerHTML = questions[questionCount].a;
    option2.innerHTML = questions[questionCount].b;
    option3.innerHTML = questions[questionCount].c;
    option4.innerHTML = questions[questionCount].d;
}

loadOptions();

submit.addEventListener('click', () => {
    const CheckedAnswer = getCheckedAnswer();
    if(CheckedAnswer === questions[questionCount].ans){
        ++score;
    }
    questionCount++;
    if(questionCount < questions.length){
        loadQuestions();
        loadOptions();
    }
    else{
        showScore.innerHTML = `
            <h3>Your Score is ${score}/${questionCount}</h3>
            <div class = "scoreAreaButtons">
                <button id="btn" onclick = "location.reload()">Play Again</button>
            </div>
        `;

        showScore.classList.remove('scorearea');
    }
});

