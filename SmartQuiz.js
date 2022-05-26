class SmartQuiz extends Quiz{
    constructor(question,mainChoiceIndex=0){
        super(null,mainChoiceIndex)
        this.question = question
        this.magicPattern = /\$(?<type>.*?)\{(?<content>.*?)\}/g
        this.title = "Smart Quiz"
        this.prepareChoices()
    }

    prepareChoices(){
        let choiceIndex = 0
        let questions=[],q,pq
        while(q = this.exeAll(choiceIndex))
            if(pq===undefined || !q.checkAnswer(pq.answer)){
                //console.log(q)
                questions.push(pq=q)
                choiceIndex++
            }
        this.setChoices(questions)
        this.setDescription(this.getMainChoice().getQuestion())
        return this
    }

    exeAll(choiceIndex){
        let pattern = this.magicPattern
        //return pattern.exec('$int{3:4|5:3}')
        let match
        let question = this.question
        // console.group("executing magic..."+question)

        while( match = pattern.exec(question) ){
            let magic = match[0]
            let type = match.groups.type
            let content = match.groups.content
            let holder = this.exeMagic(type,content,choiceIndex)
            if(holder===undefined)return undefined
            question = this.stringReplaceAmong(
                    question,
                    match.index,
                    match.index+magic.length-1,
                    holder
                )
            // console.log(`${question} type:${type} content:${content} exec:${this.exeMagic(type,content,choiceIndex)}`)
            pattern.lastIndex = match.index 
        }
        // console.groupEnd()

        return new SmartChoice(question);
    }

    exeMagic(type,content,choiceIndex=0){
        let contents = content.split("|")
        if(contents.length <= choiceIndex) return undefined
        let executer = 
            "exe"+
            type.substr(0,1).toUpperCase() + type.substr(1) +
            "Choice"
        let rawChoice = contents[choiceIndex]
        return  eval(`this.${executer}('${rawChoice}')`)
    }

    exeIntChoice(rawChoice){
        let [min,max] = rawChoice.split(":").map(v=>+v)
        return min + Math.floor( Math.random() * (max-min+1) )
    }

    exeStringChoice(rawChoice){
        return this.shuffle([...rawChoice],0).join("")
    }
    
    exeListChoice(rawChoice){
        let options = rawChoice.slice(1,-1).split(",")
        return this.shuffle(options)[0]
    }

    shuffle(arr,count=1){
        if(count<=0)count += arr.length 
        return arr.sort(()=>Math.random()-.5).slice(0,count)
    }
    stringReplaceAmong(str,startIndex,endIndex,replacement){
        return str.slice(0,startIndex)+replacement+str.slice(endIndex+1)
    }
}


let question = `
console.log('$string{a|ab|abc|abcd}')
for(let i = 0 ; i < $int{3:5|1:4|3:4|5:5} ; i++){
    console.log(i)
}
`