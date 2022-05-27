/*In the name f kindly generous ALLAH
Thanks ALLAH*/


class SmartChoice extends Choice{
    constructor(question){
        super(null)

        this.question = question
        let resName = 'result0936371602174'
        let result0936371602174 = ''
        let resFrom
        resFrom = /confirm\((.*)\)/g
        question = question.replaceAll(resFrom,resName+" += ( $1 + \"\\n\" )")
        resFrom = /console\s*?\.log\((.*)\)/g
        question = question.replaceAll(resFrom,resName+" += ( $1 + \"\\n\" )")
        resFrom = /alert\((.*)\)/g
        question = question.replaceAll(resFrom,resName+" += ( $1 + \"\\n\" )")

        // console.log("#"+question)
        // console.log('eval',eval(question))
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