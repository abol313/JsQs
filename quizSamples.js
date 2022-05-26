let buttonsEl = document.querySelectorAll(".q_cont .choices .choice")
let titleEl = document.querySelector(".q_cont .question .title")
let descriptionEl = document.querySelector(".q_cont .question .description")

function checkCallback(isCorrect, button) {
    normalizeChoiceButtons()
    toggleChoiceButton(isCorrect,button)

}
function toggleChoiceButton(isCorrect, button) {

    button.classList.remove("correct_choice")
    button.classList.remove("incorrect_choice")
    button.classList.add(isCorrect ? "correct_choice" : "incorrect_choice")
}
function normalizeChoiceButtons() {
    buttonsEl.forEach(button => {
        button.classList.remove("correct_choice")
        button.classList.remove("incorrect_choice")
    })
}
let choices = [
    new Choice("a"),
    new Choice("h"),
    new Choice("e"),
    new Choice("d")
]
let quiz = new Quiz(choices, 1)
    .setTitle("Which of these are true?")
    .setDescription("console.log([...'hello'][0])");

quiz.renderChoicesUI(titleEl, descriptionEl, buttonsEl, checkCallback)