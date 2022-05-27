/*In the name f kindly generous ALLAH
Thanks ALLAH*/


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
        normalizeChoiceButtons()
        if (isCorrect) {
            nextQuiz()
        } else {
            reQuiz()
        }
        toggelable = true
    }, 100)


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
    if (quizQueue.length === 0) {
        alert('ended. thank you to enjoy ;)')
        return
    }
    return passQuizObj(quizNow = quizQueue.shift())
}

function reQuiz() {
    return passQuizObj(quizNow)
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
                'descending',
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

quizQueue.push(
    {
        title:
            'What will be the out put?'
        ,description:
            `const userData = [
                ['username','miki'],
                ['age',22]
            ];

            const obj = Object.fromEntries(userData)
            console.log(obj)

            //Elias kibret
            `
        ,choices:
            [
                "[{username: 'miki'}, {age: 22}]",
                "{username: 'miki', age: 22}",
                "[[username,'miki'], [age,22]]",
                "{{username: 'miki'}, {age: 22}}",
               
            ]
        ,correctChoice:1
    }
)

quizQueue.push(
    {
        title:
            'What does it?'
        ,description:
            `history.back();
            //or
            history.go(-1)
            `
        ,choices:
            [
                "go back to previous page",
                "go back to previous history",
                "go back to last page",
                "go back to last history",
            ]
        ,correctChoice:0
    }
)

quizQueue.push(
    {
        title:
            'What will be the output?'
        ,description:
            `const props = [
                {name:'$list{[John,Ali,Muhammad,Faxel]|[John,Ali,Muhammad,Faxel]|[John,Ali,Muhammad,Faxel]|[John,Ali,Muhammad,Faxel]}',age:$int{20:50|20:50|20:50|20:50}},
                {name:'$list{[John,Ali,Muhammad,Faxel]|[John,Ali,Muhammad,Faxel]|[John,Ali,Muhammad,Faxel]|[John,Ali,Muhammad,Faxel]}',age:$int{20:50|20:50|20:50|20:50}},
                {name:'$list{[John,Ali,Muhammad,Faxel]|[John,Ali,Muhammad,Faxel]|[John,Ali,Muhammad,Faxel]|[John,Ali,Muhammad,Faxel]}',age:$int{20:50|20:50|20:50|20:50}}
            ]

            const [,{name},] = props

            console.log(name)
            
            //Yonus
            `
        ,choices:
            [

            ]
        ,correctChoice:0
    }
)

quizQueue.push(
    {
        title:
            'Why to use this below?'
        ,description:
            `let language = (navigator.languages && navigator.languages[0]) ||
            navigator.language || navigator.userLanguage;
            console.log(language)

            //Elias kibret
            `
        ,choices:
            [
                'to get the language of user',
                'to get the language of browserUI',
                'to get the preferred language of user',
                'to get the language of server'
            ]
        ,correctChoice:1
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
//passQuizObj(quizQueue[1])
nextQuiz()
