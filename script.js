/*<!--In the name of kindly generous ALLAH-->
<!--Thanks ALLAH-->*/

const qTitle = document.querySelector(".q_cont .title")
const qDescription = document.querySelector(".q_cont .description")
const qLang = document.querySelector(".q_cont .lang")
const qChoicesUl = document.querySelector(".q_cont .choices ul")

function setTitle(title){
    qTitle.innerText=title
}
function setDescription(description){
    qDescription.innerText=description
}
function setLanguage(language){
    qLang.innerText=language
}
function setChoices(choices){
    qChoicesUl.innerHTML = "<li>"+choices.join("</li><li>")+"</li>"
}

function ask(qDet){
    // qDet = {
    //     title:"title",
    //     description:"description",
    //     language:"language",
    //     trueChoice:"one",
    //     choices:[
    //         "one",
    //         "two",
    //         "three",
    //         "four"
    //     ],
    //     isRenderable:false
    // }

}
