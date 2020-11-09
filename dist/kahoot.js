const Kahoot = require("kahoot.js-updated")

function rand(min, max) {
    let randomNum = Math.random() * (max - min) + min
    return Math.round(randomNum)
 }

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
        question.answer(rand(0,3))
    }
    this.bot.on("Joined", this.on_join)
    this.bot.on("QuestionStart", this.on_question)

    }
    
}

module.exports = function(){
    var PIN = document.getElementById("PIN").value
    var Name = document.getElementById("name").value
    var Amount = document.getElementById("quantity").value
    var tailstring = ""
    var users = []
    console.log(PIN)
    console.log(Name)
    console.log(Amount)
    for (i = 0; i < Amount; i++)
    {
        var name = Name + tailstring
        users.push(new KahootMan(name + tailstring, PIN))
        tailstring += " "
    }
}
