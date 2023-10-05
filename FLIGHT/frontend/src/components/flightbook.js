import React, { useState,useEffect } from 'react'
import { Button, Col, Container, ListGroup, ListGroupItem,Row } from 'react-bootstrap'
import {useParams} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {listFlightDetails} from '../actions/flightactions'
import Loader from './Loader'
import { Alert } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'


const Flightbook = () => {
const navigate=useNavigate()
const userLogin = useSelector(state => state.userLogin)
const { userInfo}=userLogin
const [selected_seats,setselected_seats]=useState([])
// const SaveSeat=useSelector(state=>state.SaveSeat)
// const {booked}=SaveSeat
let {id}=useParams()
const dispatch=useDispatch()
const flightDetails=useSelector(state=>state.flightDetails)
const {error,loading,flight}=flightDetails


useEffect(()=>{
    dispatch(listFlightDetails(id))
},[dispatch,id])

let t_seats=[ "A1","A2","A3","A4","A5","B1","B2","B3","B4","B5","C1","C2","C3","C4","C5"]
function checkboxf(e)
{
    if (selected_seats.indexOf(e)!==-1)
    {
        let index=selected_seats.indexOf(e)
        selected_seats.splice(index,1)
        setselected_seats([...selected_seats])
       
    }
    else{
        setselected_seats([...selected_seats,e])
    }


}
function booktickethandler()
{
    if(userInfo)
    {
        if (selected_seats){
        localStorage.setItem("selected_seats",JSON.stringify(selected_seats))
        }
        navigate(`/${id}/book`)
    }
    else
    {
        navigate('/login')
    }

}
console.log(selected_seats)
return (<>
<Container className='style3d'>
{loading?<Loader></Loader>:error?<Alert variant='danger'>{error}</Alert>:
<div className='row'>
    <ListGroup className='col-md-6'>
        <ListGroupItem style={{fontWeight:'bold',textAlign:'center'}} variant='dark'><h1>Flight detail</h1></ListGroupItem>
        <ListGroupItem><p className='flight-heading'>Name: <span className='flight-detail'>{flight.name}</span></p></ListGroupItem>
        <ListGroupItem><p className='flight-heading'>From: <span className='flight-detail'>{flight.froml}</span></p></ListGroupItem>
        <ListGroupItem><p className='flight-heading'>To: <span className='flight-detail'>{flight.tol}</span></p></ListGroupItem>
        <ListGroupItem><p className='flight-heading'>Date: <span className='flight-detail'>{flight.date}</span></p></ListGroupItem>
        <ListGroupItem><p className='flight-heading'>Departure: <span className='flight-detail'>{flight.departure}</span></p></ListGroupItem>
     </ListGroup>
    <ListGroup className='col-md-6 pb-3'>
        <ListGroupItem variant='dark'><h1>Select Seats</h1></ListGroupItem>
        {flight.booked_seats && <ListGroupItem style={{paddingBottom:'4%'}}><Row>{t_seats.map((j)=>
        {
            return(<Col md={1}>
            <label>
            <input type="checkbox" value={j}  onChange={(e)=>{checkboxf(e.target.value)}}
            checked={flight.booked_seats.find(item => item.seat === j)?true:null}
            disabled={flight.booked_seats.find(item => item.seat === j)?true:null}
            /><span style={{fontWeight:'bold'}}>{j}</span></label></Col>)
        })}</Row></ListGroupItem>}
       
        <ListGroupItem variant='dark'><p className='flight-heading'>{"A->First class"} <span className='flight-detail'>₹{flight.fprice}</span></p></ListGroupItem>
        <ListGroupItem variant='dark'><p className='flight-heading'>{"B->Business class"} <span className='flight-detail'>₹{flight.bprice} </span></p></ListGroupItem>
        <ListGroupItem variant='dark'><p className='flight-heading'>{"C->Economy class"} <span className='flight-detail'>₹{flight.eprice}  </span></p></ListGroupItem>
    </ListGroup>
    <br></br>
    <br></br>
    <ListGroup>
    <ListGroupItem  style={{fontWeight:'bold',textAlign:'center'}} variant='dark'><h5><h1>Selected Seats</h1></h5></ListGroupItem>
    <ListGroupItem><Row>{selected_seats.map((i)=>(<Col md={1} xs={1} style={{paddingRight:'10px'}}>{i}</Col>))}</Row></ListGroupItem>
    </ListGroup>
    {selected_seats.length===0?<div></div>:<Button onClick={booktickethandler} className='btn pt-2'>Book Tickets </Button>}
    
</div>}
</Container>
    </>
)
}
export default Flightbook;