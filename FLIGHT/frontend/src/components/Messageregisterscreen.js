import React from 'react'
import { Alert } from 'react-bootstrap'
function Messageregisterscreen(props) {
  return (
    <Alert  variant="danger">{props.mes?`${props.mes}`:`Account with email exists`}</Alert>
  )
}

export default Messageregisterscreen