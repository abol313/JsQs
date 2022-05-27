In the name of kindly generous ALLAH
Thanks ALLAH

thank you ;)

# JsQs
# Quiz
# SmartQuiz
Javascript Question (a bit but beaty + ai)

I were thinking about a Quiz that rendered by system, i got to a result that can to make a machine such as programming languages that procceses specified tasks.

Made a <strong>Quiz</strong> and <strong>Choice</strong> classes for normal Quizzing...</br>
for make a new Choice you required :</br>
+answer:string (the choice as text that you want to show)</br>
</br>
</br>
structure>> new Choice(answer)</br>
</br>
ex>> let choiceA = new Choice('a. 10')</br>
ex>> let choiceB = new Choice('b. 20')</br>
ex>> let choiceC = new Choice('c. 30')</br>
ex>> let choiceD = new Choice('d. 40')</br>
</br>
for make a new quiz you required :</br>
+title:string (of quiz)</br>
+description:string (original detail of quiz (question))</br>
+choices:array of Choice</br>
<i>mainChoiceIndex is optional (default=0) and says the correct choice as its index among of choices passed to <strong>Quiz</strong> constructor</i></br>

structure>>new Quiz(choices,mainChoiceIndex=0)</br>
</br>
ex>> let choiceA = new Choice('a. 1')</br>
ex>> let choiceB = new Choice('b. 2')</br>
ex>> let choiceC = new Choice('c. 3')</br>
ex>> let choiceD = new Choice('d. 4')</br>
ex>> let choices = [choiceA, choiceB, choiceC, choiceD]</br>
ex>> let quiz = new Quiz(choices,2)</br>

there are methods in <strong>Quiz</strong> :
+setTitle(title)</br>
+getTitle()</br>
+setDescription(description)</br>
+getDescription()</br>
+getChoice(index)</br>
+getMainChoice() //related to mainChoiceIndex</br>
+renderChoicesUI(titleEl,descriptionEl,choicesEls,answerCallback) //it gets related elements to drop on their innertext and callbacks for buttons(choicesEl)...</br>

<hr/>

But another idea dropped that SmartQuizzzz...!!!
Made a <strong>SmartQuiz</strong> and <strong>SmartChoice</strong> classes for magic Quizzing...

This required just to:
+title</br>
+description/question (that will be proccessed based on it)</br>
<i>mainChoiceIndex is optional (default=0) and says the correct choice as its index among of choices passed to <strong>Quiz</strong> constructor</i></br>

<strong>Note ! it is smart, so will set the its choices automaticly based on the question processes </strong></br>

structure>> new SmartQuiz(question,mainChoiceIndex=0)</br>

ex>> let question = 'console.log( $int{1:10|1:10|1:10|1:10} )'</br>
ex>> let title = 'What will be the output?'</br>
ex>> let smartQuiz = new SmartQuiz(question) //will process...</br>
ex>> smartQuiz.setTitle(title)</br>


<hr/>
#Question in smart<br/>
#Magic<br/>
Magics are in these formats:<br/>
<strong>$type{choice1|choice2|choice3|choice4|...}</strong><br/>
<strong>Note! all of Magics in question must have same number of choices</strong><br/>
<br/>
#Type<br/>
there is only yet these formats and their own action:<br/>
$int //choice: |min:max| (inclusive) returns a random integer<br/>
$string //choice: |abcd| returns a shuffled string<br/>
$list //choice: |[a,v,43,43]| returns a random value separated by comma<br/>
<br/>
<strong>Note! each choice will get processed different!</strong><br/>
<br/>
<br/>
<hr/>
