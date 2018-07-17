import React from 'react'
import { Button } from 'reactstrap';

export const Answer = (props) => {
  return (
    <Button color="info" className="answer" onClick={() => props.checkAnswer(props.text)} disabled={props.isGameOver}>
      {props.text}
    </Button>
  )
}
