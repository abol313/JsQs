class Choice{
    constructor(answer){
        this.answer=answer
    }

    getAnswer(){
        return thos.answer
    }
    
    checkAnswer(answer,strictly=false){
        if(!strictly)
            return this.answer.replaceAll(/\s/g,'') == answer.replaceAll(/\s/g,'') 

        return this.answer == answer
    }
}