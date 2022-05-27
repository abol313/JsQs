In the name of kindly generous ALLAH
Thanks ALLAH

thank you ;)

# JsQs
# Quiz
# SmartQuiz
Javascript Question (a bit but beaty + ai)

I were thinking about a Quiz that rendered by system, i got to a result that can to make a machine such as programming languages that procceses specified tasks.

Made a <strong>Quiz</strong> and <strong>Choice</strong> classes for normal Quizzing...
for make a new Choice you required :
+answer:string (the choice as text that you want to show)


structure>> new Choice(answer)

ex>> let choiceA = new Choice('a. 10')
ex>> let choiceB = new Choice('b. 20')
ex>> let choiceC = new Choice('c. 30')
ex>> let choiceD = new Choice('d. 40')

for make a new quiz you required :
+title:string (of quiz)
+description:string (original detail of quiz (question))
+choices:array of Choice
<i>mainChoiceIndex is optional (default=0) and says the correct choice as its index among of choices passed to <strong>Quiz</strong> constructor</i>

structure>>new Quiz(choices,mainChoiceIndex=0)

ex>> let choiceA = new Choice('a. 1')
ex>> let choiceB = new Choice('b. 2')
ex>> let choiceC = new Choice('c. 3')
ex>> let choiceD = new Choice('d. 4')
ex>> let choices = [choiceA, choiceB, choiceC, choiceD]
ex>> let quiz = new Quiz(choices,2)

there are methods in <strong>Quiz</strong> :
+setTitle(title)
+getTitle()
+setDescription(description)
+getDescription()
+getChoice(index)
+getMainChoice() //related to mainChoiceIndex
+renderChoicesUI(titleEl,descriptionEl,choicesEls,answerCallback) //it gets related elements to drop on their innertext and callbacks for buttons(choicesEl)...

<hr/>

But another idea dropped that SmartQuizzzz...!!!
Made a <strong>SmartQuiz</strong> and <strong>SmartChoice</strong> classes for magic Quizzing...

This required just to:
+title
+description/question (that will be proccessed based on it)
<i>mainChoiceIndex is optional (default=0) and says the correct choice as its index among of choices passed to <strong>Quiz</strong> constructor</i>

<strong>Note ! it is smart, so will set the its choices automaticly based on the question processes </strong>

structure>> new SmartQuiz(question,mainChoiceIndex=0)

ex>> let question = 'console.log( $int{1:10|1:10|1:10|1:10} )'
ex>> let title = 'What will be the output?'
ex>> let smartQuiz = new SmartQuiz(question) //will process...
ex>> smartQuiz.setTitle(title)



