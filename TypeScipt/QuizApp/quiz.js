var Quiz = /** @class */ (function () {
    function Quiz(questions) {
        this.questions = questions;
        this.currIdx = 0;
        this.score = 0;
        this.selectedAnswer = null;
    }
    Quiz.prototype.displayQuestion = function () {
        var _this = this;
        var queArea = document.getElementById("queArea");
        if (!queArea) {
            console.error("quizContainer not found!");
            return;
        }
        queArea.innerHTML = ""; // Clear the previous question content
        var currQuestion = this.questions[this.currIdx];
        var q = document.createElement("p");
        q.innerHTML = "<h3>".concat(this.currIdx + 1, ". ").concat(currQuestion.question, "</h3>");
        queArea.appendChild(q);
        currQuestion.choices.forEach(function (choice) {
            var button = document.createElement("button");
            button.textContent = choice;
            button.classList.add("choice-btn");
            button.addEventListener("click", function () {
                _this.selectedAnswer = choice;
                _this.enableNextButton(); // Enable the next button when an answer is selected
            });
            queArea.appendChild(button);
            queArea.appendChild(document.createElement("br"));
        });
        // Create the Next or Submit button dynamically
        var nextButton = document.createElement("button");
        nextButton.textContent = this.currIdx === this.questions.length - 1 ? "Submit" : "Next";
        nextButton.disabled = true; // Start with the button disabled
        nextButton.classList.add("next-btn");
        nextButton.addEventListener("click", function () { return _this.handleAnswer(); });
        queArea.appendChild(nextButton);
    };
    Quiz.prototype.enableNextButton = function () {
        var nextButton = document.querySelector(".next-btn");
        if (nextButton && this.selectedAnswer) {
            nextButton.disabled = false; // Enable the next button if an answer is selected
        }
    };
    Quiz.prototype.handleAnswer = function () {
        if (!this.selectedAnswer) {
            alert("Please select an answer before proceeding.");
            return;
        }
        var correctAnswer = this.questions[this.currIdx].correctAnswer;
        if (this.selectedAnswer === correctAnswer) {
            this.score++;
        }
        this.currIdx++;
        if (this.currIdx < this.questions.length) {
            this.selectedAnswer = null;
            this.displayQuestion(); // Display the next question
        }
        else {
            this.showResults(); // Show results at the end of the quiz
        }
    };
    Quiz.prototype.showResults = function () {
        var queArea = document.getElementById("queArea");
        if (!queArea)
            return;
        queArea.innerHTML = "<h2>Quiz Completed!</h2>\n                             <p>Your Score: ".concat(this.score, " / ").concat(this.questions.length, "</p>");
    };
    Quiz.prototype.loadQuestion = function () {
        this.displayQuestion();
    };
    return Quiz;
}());
var quizQuestions = [
    {
        "question": "What is TypeScript?",
        "choices": ["A) A database management system", "B) A superset of JavaScript", "C) A CSS framework", "D) A Python library"],
        "correctAnswer": "B) A superset of JavaScript"
    },
    {
        "question": "Which keyword is used to define a variable in TypeScript?",
        "choices": ["A) let", "B) var", "C) const", "D) All of the above"],
        "correctAnswer": "D) All of the above"
    },
    {
        "question": "How do you specify the type of a variable in TypeScript?",
        "choices": ["A) let num: number = 10;", "B) let num = number 10;", "C) let num -> number = 10;", "D) let num = 10:number;"],
        "correctAnswer": "A) let num: number = 10;"
    },
    {
        "question": "Which file extension is used for TypeScript files?",
        "choices": ["A) .js", "B) .ts", "C) .tsx", "D) Both B & C"],
        "correctAnswer": "D) Both B & C"
    },
    {
        "question": "How do you compile a TypeScript file?",
        "choices": ["A) tsc filename.ts", "B) node filename.ts", "C) typescript filename.ts", "D) compile filename.ts"],
        "correctAnswer": "A) tsc filename.ts"
    },
    {
        "question": "Which of the following is a valid TypeScript interface declaration?",
        "choices": ["A) interface Person { name: string; age: number; }", "B) interface Person = { name: string, age: number }", "C) interface Person : { name: string; age: number; }", "D) interface { name: string; age: number; }"],
        "correctAnswer": "A) interface Person { name: string; age: number; }"
    },
    {
        "question": "What does TypeScript use to provide optional properties in an interface?",
        "choices": ["A) ?", "B) !", "C) #", "D) *"],
        "correctAnswer": "A) ?"
    },
    {
        "question": "What is the purpose of TypeScript's 'never' type?",
        "choices": ["A) Represents values that will never occur", "B) Represents null values", "C) Represents undefined values", "D) Represents an empty object"],
        "correctAnswer": "A) Represents values that will never occur"
    },
    {
        "question": "How do you define a function with a return type in TypeScript?",
        "choices": ["A) function add(a: number, b: number): number { return a + b; }", "B) function add(a, b): number { return a + b; }", "C) function add(a: number, b: number) -> number { return a + b; }", "D) function add(a: number, b: number) { return a + b: number; }"],
        "correctAnswer": "A) function add(a: number, b: number): number { return a + b; }"
    },
    {
        "question": "What is the purpose of TypeScript's 'readonly' keyword?",
        "choices": ["A) Prevents reassignment of a property", "B) Allows properties to be writable", "C) Defines a getter function", "D) Converts the value to uppercase"],
        "correctAnswer": "A) Prevents reassignment of a property"
    }
];
var quiz = new Quiz(quizQuestions);
document.addEventListener("DOMContentLoaded", function () { return quiz.loadQuestion(); });
