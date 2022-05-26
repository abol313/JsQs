class SmartChoice extends Choice{
    constructor(question){
        this.question = question

        let resName = 'result0936371602174'
        let result0936371602174 = ''
        let resFrom = /console\s*?\.log\((.*)\)/g
        question = question.replaceAll(resFrom,resName+" += ( $1 + \"\\n\" )")
        // console.log("#"+question)
        eval(question)
        this.answer = result0936371602174
        super(this.answer)
    }
    
    getQuestion(){
        return this.question
    }
}