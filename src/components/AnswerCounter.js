import React from 'react'
import { Button } from 'reactstrap';

export const AnswerCounter = (props) => {
  return (
    <div >

      <Button className="button" color="warning">{props.description}:{props.count}</Button>
    </div>
  )
}
