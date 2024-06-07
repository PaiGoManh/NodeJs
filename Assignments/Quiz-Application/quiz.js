document.addEventListener('DOMContentLoaded', () => {
    const quizContainer = document.getElementById('quiz-container');
    const nextBtn = document.getElementById('next-btn');
    const submitBtn = document.getElementById('submit-btn');
    const result = document.getElementById('result');
    const scoreDisplay = document.getElementById('score');

    const questions = [
        {
            question: "The data in a blockchain gets stored in",
            choices: ["Blocks", "List", "Stack", "Queue"],
            answer: 0
        },
        {
            question: "Which blockchain platform is known for enabling smart contracts?",
            choices: ["Bitcoin","Ethereum","Ripple","Litecoin"],
            answer: 1
        },
        {
            question: "What is a 'smart contract'?",
            choices: [
                "A contract that is written in plain language",
                "A self-executing contract with the terms of the agreement directly written into code",
                "A legally binding document that must be signed",
                "A digital representation of a physical contract"
            ],
            answer: 1
        }
    ];

    let currentQuestionIndex = 0;
    let score = 0;

    function showQuestion(question) {
        quizContainer.innerHTML = `
            <div>
                <p class="text-lg">${question.question}</p>
                ${question.choices.map((choice, index) => `
                    <label class="block mt-2">
                        <input type="radio" name="answer" value="${index}">
                        ${choice}
                    </label>
                `).join('')}
            </div>
        `;
    }

    function showNextQuestion() {
        const selectedAnswer = document.querySelector('input[name="answer"]:checked');
        if (selectedAnswer) {
            if (parseInt(selectedAnswer.value) === questions[currentQuestionIndex].answer) {
                score++;
            }
            currentQuestionIndex++;
            if (currentQuestionIndex < questions.length) {
                showQuestion(questions[currentQuestionIndex]);
            } else {
                showResults();
            }
        } else {
            alert("Please select an answer.");
        }
    }

    function showResults() {
        quizContainer.classList.add('hidden');
        nextBtn.classList.add('hidden');
        submitBtn.classList.remove('hidden');
        result.classList.remove('hidden');
        scoreDisplay.textContent = `${score} out of ${questions.length}`;
    }

    nextBtn.addEventListener('click', showNextQuestion);
    submitBtn.addEventListener('click', () => {
        alert("Quiz submitted!");
    });

    showQuestion(questions[currentQuestionIndex]);
    nextBtn.classList.remove('hidden');
});
