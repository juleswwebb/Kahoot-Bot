from kahoot import client
from random import choice, randint
import threading


class KahootMan:
  def __init__(self, name, PIN):
    self.bot = client()
    self.name = name
    self.bot.join(PIN, self.name)
    self.bot.on("ready", self.on_join)
    self.bot.on("QuestionStart",self.on_question)
    
  def on_join(self):
    print(f"joined {self.name}")
    
  def on_question(question):
    print("questioned")
    question.answer(0)
    
def spam(PIN, Name, Amount):
  for i in range(Amount):
    name = f"{Name}" + "\ufeff" * i
    name = "\ufeff".join(name)
    #.join(chr(randint(0,15000)) for i in range(randint(50,100)))
    KahootMan(name, PIN)

def thread_spam(PIN, Name, Amount, Threads):
  Amount = Amount // Threads
  Threads = [threading.Thread(target=spam,args=(PIN,"\ufeff"*i + Name, Amount)) for i in range(Threads)]
  for i in range(len(Threads)):
    Threads[i].start()

thread_spam(3793774, "\ufeff", 50, 10)

while True:
  pass
