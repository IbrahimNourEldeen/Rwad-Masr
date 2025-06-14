const questions=[
    {
        question:'which is the largest animal in the world?',
        answers:[
            {text:'Shark',correct:false},
            {text:'Blue whale',correct:true},
            {text:'Elephant',correct:false},
            {text:'Giraffe',correct:false},
        ]
    },
    {
        question:'which is the smallest continent in the world?',
        answers:[
            {text:'Asia',correct:false},
            {text:'Africa',correct:false},
            {text:'Australia',correct:true},
            {text:'Arctic',correct:false},
        ]
    },
    {
        question:'which is the largest desert in the world?',
        answers:[
            {text:'Antractica',correct:true},
            {text:'Kalahari',correct:false},
            {text:'Sahara',correct:false},
            {text:'Gobi',correct:false},
        ]
    },
    {
        question:'which is the Smallest contry in the world?',
        answers:[
            {text:'Bhutan',correct:false},
            {text:'Nepal',correct:false},
            {text:'Shri Lanka',correct:false},
            {text:'Vatican city',correct:true},
        ]
    },
    {
        question:'which is the smallest continent in the world?',
        answers:[
            {text:'Asia',correct:false},
            {text:'Australia',correct:true},
            {text:'Africa',correct:false},
            {text:'Arctic',correct:false},
        ]
    }
];



const question=document.getElementById('question')
const answerBox=document.querySelectorAll('#ans-btn')
const answers=document.querySelectorAll('#ans-btn .btn')
const nextBtn=document.getElementById('next-btn')
const quiz=document.getElementById('quiz')
const result=document.getElementById('result')

let currentQuestionIndex=0;
let score=0;


function startQuiz(){   
    ShawQuestion();
    showAnswer();
}
function ShawQuestion(){
    let currentQuestion=questions[currentQuestionIndex];
    question.innerHTML=`${currentQuestionIndex+1}. ${currentQuestion.question}`
    
}
function showAnswer(){
    let currentQuestion=questions[currentQuestionIndex]
    
    answers[0].innerHTML=`A. ${currentQuestion.answers[0].text}`
    answers[1].innerHTML=`B. ${currentQuestion.answers[1].text}`
    answers[2].innerHTML=`C. ${currentQuestion.answers[2].text}`
    answers[3].innerHTML=`D. ${currentQuestion.answers[3].text}`
    check(currentQuestion)
}

function check(currentQuestion){
    nextBtn.style.display='none'
    answers.forEach(ans=>{
        ans.addEventListener('click',()=>{
            nextBtn.style.display='block'
            currentQuestion.answers.forEach((an)=>{
                if(ans.textContent.includes(an.text) && an.correct===true){
                    ans.style.backgroundColor='green'
                    ans.style.color='white'
                    score++;
                    answers.forEach(ans=>{ans.setAttribute('disabled',false)})
                }
                else if(ans.textContent.includes(an.text) && an.correct===false){
                    ans.style.backgroundColor='red'
                    ans.style.color='white'
                    ans.setAttribute('disabled',false)
                    answers.forEach(ans=>{
                        currentQuestion.answers.forEach((an)=>{
                            if(ans.textContent.includes(an.text) && an.correct===true){
                                ans.style.backgroundColor='green'
                                ans.style.color='white'
                            }
                        })
                        ans.setAttribute('disabled',false)
                    })
                }
                ans.setAttribute('disabled',false)
            })
            
        })
    })
}
result.style.display='none'
startQuiz()||nextBtn.addEventListener('click',()=>{
    if(currentQuestionIndex<questions.length-1){
        currentQuestionIndex+=1
        startQuiz()
    }
    else{
        quiz.style.display='none'
        result.style.display='block'
        if(score===6)
            score=5
        result.innerHTML=`Score ${score} / 5`
    }
    answers.forEach((ans)=>{
        ans.style.backgroundColor='transparent'
        ans.style.color='black'
        ans.removeAttribute('disabled',false)
    })
    
})
