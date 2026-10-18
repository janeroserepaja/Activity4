const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const questions = [
    {
        question: "What does HTML stand for?",
        choices: [
            "A. Hyper Text Markup Language",
            "B. High Tech Modern Language",
            "C. Home Tool Markup Language",
            "D. Hyper Transfer Machine Language"
        ],
        answer: "A"
    },
    {
        question: "Which language is used to style web pages?",
        choices: [
            "A. Java",
            "B. CSS",
            "C. Python",
            "D. SQL"
        ],
        answer: "B"
    },
    {
        question: "Which keyword declares a variable that can be reassigned?",
        choices: [
            "A. const",
            "B. static",
            "C. let",
            "D. fixed"
        ],
        answer: "C"
    },
    {
        question: "What is the result of 5 + 3?",
        choices: [
            "A. 6",
            "B. 7",
            "C. 8",
            "D. 9"
        ],
        answer: "C"
    },
    {
        question: "Which symbol is used for strict equality in JavaScript?",
        choices: [
            "A. =",
            "B. ==",
            "C. !=",
            "D. ==="
        ],
        answer: "D"
    }
];

let currentQuestion = 0;
let score = 0;

function startQuiz() {
    console.log("\n===== JAVASCRIPT QUIZ GAME =====");
    console.log("Answer each question by typing A, B, C, or D.\n");
    askQuestion();
}

function askQuestion() {
    if (currentQuestion >= questions.length) {
        showResults();
        return;
    }

    const item = questions[currentQuestion];

    console.log(`\nQuestion ${currentQuestion + 1}: ${item.question}`);

    item.choices.forEach((choice) => {
        console.log(choice);
    });

    rl.question("Your answer: ", (input) => {
        const answer = input.trim().toUpperCase();

        if (!["A", "B", "C", "D"].includes(answer)) {
            console.log("Invalid answer. Please enter A, B, C, or D.");
            askQuestion();
            return;
        }

        if (answer === item.answer) {
            console.log("Correct!");
            score++;
        } else {
            console.log(`Incorrect! The correct answer is ${item.answer}.`);
        }

        currentQuestion++;
        askQuestion();
    });
}

function showResults() {
    const percentage = (score / questions.length) * 100;

    console.log("\n===== QUIZ RESULTS =====");
    console.log(`Total Questions: ${questions.length}`);
    console.log(`Correct Answers: ${score}`);
    console.log(`Wrong Answers: ${questions.length - score}`);
    console.log(`Final Score: ${percentage}%`);

    if (percentage >= 80) {
        console.log("Excellent work!");
    } else if (percentage >= 60) {
        console.log("Good effort! Keep practicing.");
    } else {
        console.log("Keep studying and try again!");
    }

    rl.question("\nWould you like to play again? (yes/no): ", (answer) => {
        if (answer.trim().toLowerCase() === "yes") {
            currentQuestion = 0;
            score = 0;
            startQuiz();
        } else {
            console.log("Thanks for playing!");
            rl.close();
        }
    });
}

startQuiz();