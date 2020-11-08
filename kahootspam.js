
const Kahoot = require("kahoot.js-updated")



class KahootMan {
    constructor(name, PIN){
    this.bot = new Kahoot()
    this.name = name
    this.bot.join(PIN, this.name)
    this.on_join = function(){
        console.log("Joined " + this.name)
    }
    this.on_question = function(question){
        console.log("Questioned")
        question.answer(0)
    }
    this.bot.on("Joined", this.on_join)
    this.bot.on("QuestionStart", this.on_question)

    }
    
}

var tailstring = ""
var users = []
function spam(PIN, Name, Amount){
    for (i = 0; i < Amount; i++)
    {
        var name = Name + tailstring
        users.push(new KahootMan(name + tailstring, PIN))
        tailstring += " "
    }
}






