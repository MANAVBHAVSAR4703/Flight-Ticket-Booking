import React, { useEffect, useState } from 'react'
import { Table,Container,Col,Card,Row,Alert} from 'react-bootstrap'
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import {ListFlight} from '../actions/flightactions'
import './profile.css'
import Loader from './Loader'
const Profile = () => {
  const userLogin=useSelector((state)=>state.userLogin)
  const{userInfo}=userLogin
  const [data,setdata]=useState([])
  const dispatch=useDispatch()
  const flightList=useSelector(state=>state.flightList)
  const {error,loading,flights}=flightList

  useEffect(()=>{
    dispatch(ListFlight())
  },[dispatch])
useEffect(()=>{
  axios.get(`/api/mybooked/${userInfo._id}`).then((res) => {
    if (res.data) {
      setdata(res.data);
    } else {
      setdata(null);
    }
  })
},[userInfo._id])

// alert(JSON.stringify(data))
  return (<>
  {!data || !userInfo?error?<Alert className='alert alert-danger'>{error}</Alert>:loading?<Loader/>:"":
  <Container>
   
   <Container>
      <Row className="justify-content-center">
        <Col md={4}>
          <Card>
            <Card.Header className="bg-primary text-white text-center">User Profile</Card.Header>
            <Card.Body>
              <div className="text-center mt-3">
                <h2>{userInfo.name}</h2>
                <h5>Email: {userInfo.email}</h5>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <br></br>
    <br></br>
      {data.length!==0 && <Container>
      <br></br>
      <Container style={{justifyContent:'center'}}>
        <Row className='justify-content-center'><Col md={10}  className='style3d'>
          <div className='table-responsive'>
          <Table striped size='sm' variant='flush'>
            <thead>
              <tr>
                <th colSpan={4}><h3 align='center'>Tickets Booked</h3></th> 
              </tr> 
              <tr>
              <th>
                  <p align='center' className="d-md-table-cell">Seat</p>
                </th>
                <th>
                  <p align='center' className="d-md-table-cell">Name</p>
                </th>
                <th>
                  <p align='center' className="d-md-table-cell">Age</p>
                </th>
                <th>
                  <p align='center' className="d-md-table-cell">Flight</p>
                </th>
              </tr>
            </thead>
            <tbody>
              {data?.map((i) => (
                <tr>
                  <td>
                    <p className="d-md-table-cell">{i.seat}</p>
                  </td>
                  <td>
                    <p className="d-md-table-cell">{i.name}</p>
                  </td>
                  <td>
                    <p className="d-md-table-cell">{i.age}</p>
                  </td>
                  
                  <td>
                    <p className="d-md-table-cell">
                        {flights.map((j) => {
                          if (j.id === i.flight) {
                            return <span key={j.id}>{j.name}</span>; // You should provide a unique "key" prop when rendering a list of elements.
                          }
                          return null; // Return null for non-matching flights.
                        })}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table></div></Col></Row></Container>
          </Container>}
    </Container>}</>
  )
}

export default Profile