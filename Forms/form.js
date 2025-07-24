const questions =   [{
    question: "Q1: HTML Stands For:",
    options: ["Hypertext Markdown Language", "Hypertext Markup Language", "Hyperspeed Markdown Language"],
    correctAnswer: ["Hypertext Markup Language"]


},{
    question: "Q2: What are some files you would use with an HTML file?",
    options: ["a js file", "a css file", "None of the above"],
    correctAnswer: ["a js file", "a css file"]
},{
    question: "Q3: Is JavaScript only for web development? (true or false)",
    correctAnswer:["false"]
},{
    question: "Q4: How many different commands in HTML?",
    correctAnswer: ["145"]
}
// Add more questions
];

const quizForm = document.getElementById('quiz-form');
const resultsDiv = document.getElementById('results');
quizForm.addEventListener('submit', function(event) {
    event.preventDefault(); 
    let score = 4
for (let i = 0; i < questions.length; i++) {
    let q = questions[i]; 
    let inputName = `q${i}`; // so thatc u dont hav to write eauch question separate 
    const correctAnswer = q.correctAnswer; 



if (q.correctAnswer.length === 1){
    

    const selectedAnswer = document.querySelector(`input[name="${inputName}"]:checked`) //would make it not an array anymore 

    if (selectedAnswer) { 

        const userAnswer = selectedAnswer.value;

        if (userAnswer === correctAnswer[0]) {
            score = score     
        } else {
            score = score - 1
        }
    } else {
        resultsDiv.innerText = "Please select an answer.";
    }
}
else {
    const selectedAnswer = document.querySelectorAll(`input[name="${inputName}"]:checked`)

    if (selectedAnswer.length> 0) {
        

        const userAnswers = Array.from(selectedAnswer).map(e1 => e1.value)
        
        const userSorted = [...userAnswers].sort() // [... makes a copy]
        const correctSorted = [...correctAnswer].sort()

        if (JSON.stringify(userSorted) === JSON.stringify(correctSorted)) {
            score = score   
        } else {
            score = score - 1
        }
    } else {
        resultsDiv.innerText = "Please select an answer.";
    }}}
resultsDiv.textContent = `Your score is ${score} out of 4!!`});;
 // new commands and functions i found from w3 and stackoverflow : JSON.stringify, querySelectorAll, for loop for counting indcies, .sort() to makes thigns the same order 