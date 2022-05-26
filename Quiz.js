class Quiz{
    construct(choices,mainChoiceIndex=0){
        this.choices=choices
        this.mainChoiceIndex = mainChoiceIndex
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

    getChoice(index){
        return this.choices[index]
    }

    getMainChoice(){
        return this.getChoice(this.mainChoiceIndex)
    }

    //answerCallback as answerCallback(element,isMainChoice)
    renderChoicesUI(titleEl,descriptionEl,choicesEls,answerCallback){
        for(let i = 0; i < choicesButtons & i < this.choices.length; i++){
            let buttonEl = choicesEls[i]
            let choice = this.choices[i]
            buttonEl.innerText = choice.answer
            titleEl.innerText = this.getTitle()
            descriptionEl.innerText = this.getDescription()

            buttonEl.addEventListener("click",function(){ answerCallback(this,i === this.mainChoiceIndex) })
        }
        return this
    }


}