let buttonsEl = document.querySelectorAll(".q_cont .choices .choice")
let titleEl = document.querySelector(".q_cont .question .title")
let descriptionEl = document.querySelector(".q_cont .question .description")

let toggelable = true
function checkCallback(isCorrect, button) {
    if (!toggelable) return

    normalizeChoiceButtons()
    toggleChoiceButton(isCorrect, button)
    toggelable = false
    setTimeout(() => {
        if (isCorrect) {
            nextQuiz()
        } else {
            reQuiz()
            normalizeChoiceButtons()
        }
        toggelable = true
    }, 1000)


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

function makeQuiz(title, description, correctChoice, ...choices) {
    let quiz
    if (choices.length === 0)
        quiz = new SmartQuiz(description, correctChoice).setTitle(title)
    else {
        choices = choices.map(choice => new Choice(choice))
        quiz = new Quiz(choices, correctChoice).setDescription(description).setTitle(title)
    }
    quiz.renderChoicesUI(
        titleEl,
        descriptionEl,
        buttonsEl,
        checkCallback
    )
    return quiz
}


/*quizzes*/
let quizNow


function passQuizObj(quizObj) {
    return makeQuiz(
        quizObj.title,
        quizObj.description,
        quizObj.correctChoice,
        ...quizObj.choices
    )
}
function nextQuiz() {
    if (quizQueue.length === 0) return
    passQuizObj(quizNow = quizQueue.shift())
}

function reQuiz() {
    passQuizObj(quizNow)
}




let quizQueue = []

quizQueue.push(
    {
        title:
            'What will be the output?'
        , description:
            `let text = "$string{abcdef|abdef|abef|abd}"
            console.log( [...text].sort().join("") )
            `
        , choices:
            []
        , correctChoice: 0
    }
)

quizQueue.push(
    {
        title:
            'Where is used spread operator?'
        , description:
            `let arr = [1,'5','f',6,5]
            //...arr
            `
        , choices:
            [
                'for unpacking arrays',
                'for unpacking objects',
                'for unpacknig both objects and arrays',
                'there is no spread operator'
            ]
        , correctChoice: 2

    }
)

quizQueue.push(
    {
        title:
            'What order it will be sorted?'
        , description:
            `let numbers = [1,10,54,'4',553,'53']
            numbers = numbers.sort((a,b)=>b-a)
            `
        , choices:
            [
                'ascending',
                'descendind',
                'both',
                'will not be sorted'
            ]
        , correctChoice: 1
    }
)

quizQueue.push(
    {
        title:
            'What is the main difference between below for loops?'
        , description:
            `let letters = [...'abcd']

            for(let x of letters) console.log(x)
            for(let x in letters) console.log(x)
            `
        , choices:
            [
                '1: for..in is used to iterate keys',
                '2: for..of is used to iterate values',
                '3: 1&2 options are true',
                '4: both are same'
            ]
        , correctChoice: 2
    }
)

quizQueue.push(
    {
        title:
            'What will be the output?'
        , description:
            `console.log( '$string{cdefg|cdefg|cdefg|cdefg}'.split('$list{[/,~,@,#]|[/,~,@,#]|[/,~,@,#]|[/,~,@,#]}') )
            `
        , choices:
            [

            ]
        , correctChoice: 3
    }
)

quizQueue.push(
    {
        title:
            'What will be the output'
        , description:
            `let a=$int{1:20|1:20|1:20|1:20};
            let b=$int{1:20|1:20|1:20|1:20};
            [a,b] = [b-a,a-b];
            console.log(a-b);
            `
        , choices:
            [

            ]
        , correctChoice: 1
    }
)

quizQueue.push(
    {
        title:
            'What will be the output?'
        , description:
            `let number = $int{1111111:99999999|1111111:99999999|1111111:99999999|1111111:99999999}
            console.log( [...(''+number)].sort( (a,b)=>b-a )[0] )
            `
        , choices:
            [

            ]
        , correctChoice: 0
    }
)

quizQueue.push(
    {
        title:
            'Where is used optional chaining and why?'
        , description:
            `console?.log(10)//a
            console.?log(10)//b
            `
        , choices:
            [
                '//a : to prevent error for nullish method',
                '//b : to prevent error for nullish reference',
                '//a : to prevent error for nullish reference',
                '//b : to prevent error for nullish method',
            ]
        , correctChoice: 2
    }
)

quizQueue.push(
    {
        title:
            'This action is such as ...'
        , description:
            `let arr = ['a',2,1,4,3]
            arr = arr.sort( ()=>Math.random()-.5 )
            `
        , choices:
            [
                'shuffling',
                'sorting in random order (asc/desc)',
                'ascending order',
                'descending order'
            ]
        , correctChoice: 0
    }
)

/*
quizQueue.push(
    {
        title:
            ''
        ,description:
            ` 
            `
        ,choices:
            [

            ]
        ,correctChoice:0
    }
)
*/

nextQuiz()