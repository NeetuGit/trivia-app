import React from 'react'
import {Answer} from './Answer'

export const AnswerList = (props) => {
  return (
    <div style={{display: 'inline-block'}}>
      {props.answers.map(answerText =>
                         <Answer text={answerText}
                                 checkAnswer={props.checkAnswer}
                                 isGameOver={props.isGameOver}/>)}
    </div>
  )
}
