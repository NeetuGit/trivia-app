import React from 'react'
import {Button} from 'reactstrap'

export const Question = (props) => {
  return (
     <Button color="danger" style={{fontSize:24, fontWeight:'bold'}}>
        {props.text}

     </Button>
  )
}
