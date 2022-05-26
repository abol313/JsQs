class Quiz{
    constructor(choices,mainChoiceIndex=0){
        this.choices=choices
        this.mainChoiceIndex = mainChoiceIndex
        this.title = "Quiz"
        this.description = "Description"
    }

    setTitle(title){
        this.title = title
        return this
    }
    getTitle(){
        return this.title
    }

    setDescription(description){
        this.description = description
        return this
    }
    getDescription(){
        return this.description
    }

    setChoices(choices){
        this.choices = choices
        return this
    }
    getChoice(index){
        return this.choices[index]
    }

    getMainChoice(){
        return this.getChoice(this.mainChoiceIndex)
    }
    getMainChoiceIndex(){
        return this.mainChoiceIndex
    }   

    setMainChoiceIndex(mainChoiceIndex){
        this.mainChoiceIndex = mainChoiceIndex
        return this
    }

    //answerCallback as answerCallback(isMainChoice,element)
    renderChoicesUI(titleEl,descriptionEl,choicesEls,answerCallback){
        for(let i = 0; i < choicesEls.length & i < this.choices.length; i++){

            let buttonEl = choicesEls[i]
            let choice = this.choices[i]
            buttonEl.innerText = choice.getAnswer()
            titleEl.innerText = this.getTitle()
            descriptionEl.innerText = this.getDescription()

            buttonEl.addEventListener("click",()=>answerCallback(i === this.mainChoiceIndex,buttonEl))
        }
        return this
    }


}