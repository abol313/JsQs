class SmartChoice extends Choice{
    constructor(question){
        super(null)

        this.question = question
        let resName = 'result0936371602174'
        let result0936371602174 = ''
        let resFrom = /console\s*?\.log\((.*)\)/g
        question = question.replaceAll(resFrom,resName+" += ( $1 + \"\\n\" )")
        // console.log("#"+question)
        eval(question)
        this.setAnswer(result0936371602174)
    }
    
    getQuestion(){
        return this.question
    }

    setQuestion(question){
        this.question = question
        return this
    }
}