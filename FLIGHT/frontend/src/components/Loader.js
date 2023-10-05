import React from 'react'
import { Spinner } from 'react-bootstrap'
const Loader = () => {
  return (
    <Spinner animation='border' role='status' style={{height:'100px',width:'100px',margin:'auto',display:'block',paddingTop:'50px'}}>
    </Spinner>
  )
}

export default Loader