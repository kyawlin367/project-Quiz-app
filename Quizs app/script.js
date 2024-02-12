const questions = [
    {
        question:"Which is largest animal in the world?",
        answers: [
            { text: "Shark", correct: false},
            { text: "Blue whale", correct: true},
            { text: "Elephant", correct: false},
            { text: "Giraffe", correct: false},

        ]
    },
    {
        question:"Who is the prettiest on the earth?",
        answers: [
            { text: "Ei Phoung", correct: true},
            { text: "Phway Phway", correct: false},
            { text: "Kyaw Lin Soe", correct: false},
            { text: "Hein Thet Oo", correct: false},

        ]
    },
    {
        question:"Who is the tallest on the earth?",
        answers: [
            { text: "Koh Koh", correct: false},
            { text: "Ei Phoung", correct: false},
            { text: "Kyaw Lin Soe", correct: true},
            { text: "Hein Thet Oo", correct: false},

        ]
    },
    {
        question:"Who is the dirtiest on the earth?",
        answers: [
            
            { text: "Koh Koh", correct: false},
            { text: "Ei Phoung", correct: true},
            { text: "Kyaw Lin Soe", correct: false},
            { text: "Hein Thet Oo", correct: false},

        ]
    },
    {
        question:"Who is the shoutest on the earth?",
        answers: [
            
            { text: "Koh Koh", correct: false},
            { text: "Ei Phoung", correct: true},
            { text: "Kyaw Lin Soe", correct: false},
            { text: "Hein Thet Oo", correct: false},

        ]
    },
    {
        question:"Who is the silent on the earth?",
        answers: [
            
            { text: "Ei Phoung", correct: false},
            { text: "Phway Phway", correct: false},
            { text: "Kyaw Lin Soe", correct: true},
            { text: "Hein Thet Oo", correct: false},

        ]
    },
    {
        question:"Who is the laziest on the earth?",
        answers: [
            
            { text: "Koh Koh", correct: false},
            { text: "Ei Phoung", correct: true},
            { text: "Kyaw Lin Soe", correct: false},
            { text: "Hein Thet Oo", correct: false},

        ]
    },
    {
        question:"Who is the best-natured on the earth?",
        answers: [
            
            { text: "Koh Koh", correct: false},
            { text: "Ei Phoung", correct: false},
            { text: "Kyaw Lin Soe", correct: true},
            { text: "Hein Thet Oo", correct: false},

        ]
    }
]

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answerbtn");
const nextBtn = document.getElementById("nextbtn");

let questionIndex = 0;
let score = 0;
 
function startQuiz(){
    questionIndex = 0;
    score = 0;
   nextBtn.innerHTML = "NEXT"
    showquestion();
}

function showquestion(){
    resetState();
    let currentquestion = questions[questionIndex];
    let currentnumber = questionIndex + 1;
    questionElement.innerHTML = currentnumber + "." + currentquestion.question;
     
    currentquestion.answers.forEach(answer => {
        const Btn = document.createElement("button");
        Btn.innerHTML = answer.text;
        Btn.classList.add("btn");
        answerBtn.appendChild(Btn);
        if(answer.correct){
            Btn.dataset.correct = answer.correct;
        }
        Btn.addEventListener("click",selectAnswer);

    });
}

function selectAnswer(e){
    const selectBTn = e.target;
    const iscorrect = selectBTn.dataset.correct === "true";
    if(iscorrect){
        selectBTn.classList.add("correct");
        score ++;
    }else{
        selectBTn.classList.add("incorrect");
    }

    Array.from(answerBtn.children).forEach(button =>{

       
        if(button.dataset.correct === "true"){
            button.classList.add("correct");

        }
        button.disabled = true;
    })
    nextBtn.style.display = "block";

}



function showScore(){
    resetState();
    questionElement.innerHTML = `Your score is ${score} out of ${questions.length} !`;
    nextBtn.innerHTML = "Play Again";
    nextBtn.style.display = "block";
}

function handle(){
    questionIndex ++;
    if(questionIndex < questions.length){
        showquestion();
    }else{
      showScore();
    }
}




nextBtn.addEventListener("click",()=>{
    if(questionIndex < questions.length){
        handle();
    }else{
     startQuiz();
    }
})

function resetState(){
    nextBtn.style.display ="none";
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
   
}

startQuiz();

/*const lenght = 5;

const low = "abc";
const up = "ABC";
const num = "0123";

function create(){
    let pass = "";
    pass += up[Math.floor(Math.random() * up.length)];
    console.log(pass);
    pass += low[Math.floor(Math.random() * low.length)];
    pass += num[Math.floor(Math.random() * num.length)];

}*/
