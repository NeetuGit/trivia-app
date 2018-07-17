import React, {Component} from 'react'
import { questionsJson } from './questions';
import { Question } from './Question';
import { PlayAgain } from './PlayAgain';
import { AnswerList } from './AnswerList';
import {AnswerCounter} from './AnswerCounter'


class Quiz extends Component
{
  constructor(props) {
    console.log("hi")
   super(props)
   this.state =Quiz.initState()
 }

 static initState = () => ({
      correctAnswers: 0,
      wrongAnswers: 0,
      currentQuestionIndex: 0,
      maxQuestionCount: 10,
      gameOver: null,
     questionsJson:'questionsJson'
  })

  getCurrentQuestion = () => questionsJson[this.state.currentQuestionIndex];

  checkAnswer = (answerText) => {
    console.log(this.state.gameOver)
    if (this.state.gameOver !== null) {
      return;
    }

    this.setState(prevState => {
         if (this.getCurrentQuestion().correctAnswer === answerText) {
           return { correctAnswers: prevState.correctAnswers + 1 }
         }
         return { wrongAnswers: prevState.wrongAnswers + 1}
   })
   if (this.state.currentQuestionIndex === this.state.maxQuestionCount - 1) {
     this.setState(() => ({gameOver: true}));
     return;
   }

   this.setState(prevState => ({currentQuestionIndex: prevState.currentQuestionIndex + 1}));
 }

 restart = () => {
    this.setState(Quiz.initState());
  }

render(){
  return(
    <div className="row">
          <div className="col-6 text-center">
            <br />
            {this.state.gameOver
              ? <PlayAgain restart={this.restart} />
              : <Question text={this.getCurrentQuestion().question} />}
            <br /><br />
            <AnswerList answers={this.getCurrentQuestion().answers}
                        checkAnswer={this.checkAnswer}
                        isGameOver={this.state.gameOver}/>
          </div>
          <div className="col-6">
            <br /><br /><br />
            <AnswerCounter description="Correct" count={this.state.correctAnswers}/>
            <br /><br /><br /><br />
            <AnswerCounter description="Incorrect" count={this.state.wrongAnswers}/>
          </div>
        </div>
  )
}
}
export default Quiz;
