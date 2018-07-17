import React from 'react'
import { Button } from 'reactstrap';

export const PlayAgain = (props) => {
  return (
    <div>
     <Button color="danger" style={{fontSize:24, fontWeight:'bold'}}>Game Over ! </Button>
     <Button color="success" style={{fontSize:24, fontWeight:'bold'}} onClick={props.restart}>Play Again</Button>
    </div>
  )
}
