import React, { useEffect, useState } from 'react'
import {Card, Container,Row,Col,Form} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {ListFlight} from '../actions/flightactions'
import { Alert } from 'react-bootstrap'
import Loader from '../components/Loader'
import '../App.css'
const Flight = () => {
  const dispatch=useDispatch()
  const flightList=useSelector(state=>state.flightList)
  const {error,loading,flights}=flightList
  const [flightfilter,setflightfilter]=useState([])
  useEffect(()=>{
    dispatch(ListFlight())
  },[dispatch])
 
  const filter=()=>{
      if(formData.to==='' && formData.from==='')
      {
        setflightfilter([...flights])
      }
      setflightfilter(flights?.filter(f=>f.tol.toLowerCase().includes(formData.to.toLowerCase()) && f.froml.toLowerCase().includes(formData.from.toLowerCase())))
      
  }
  
  const [formData, setFormData] = useState({
    to: '',
    from: '',
    departureDate: '',
  });

  useEffect(()=>{
    filter()
  })


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (<>
      <Container className='style3dform'><h3 >Flight Search Form</h3>
      <br></br>
    
      <Form onSubmit={handleSubmit} className='my-form'>
        <Row>

          <Col>
            <Form.Group controlId="from">
              <Form.Label>From:</Form.Label>
              <Form.Control
                type="text"
                name="from"
                value={formData.from}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Group controlId="to">
              <Form.Label>To:</Form.Label>
              <Form.Control
                type="text"
                name="to"
                value={formData.to}
                onChange={handleChange}
                required
              />
            </Form.Group>
          </Col>
        </Row>

      </Form>
    </Container>
    <br></br>
    <br></br>
    <h3 style={{paddingLeft:'1%'}}>Flights</h3>
    <br></br>
  {loading?<Loader/>:error?<Alert variant='danger'>{error}</Alert>:<Row className='my-flights'>
    {flightfilter.length!==0?flightfilter.map((i)=>{
  return(<>
   
    <Col xs={12} md={5} lg={3}>
    <Link to={`flight/${i.id}`}  style={{textDecoration:'none'}}>
   <Card className="flight-card style3d" style={{margin:'5px'}}> 
      <Card.Body>
        <Card.Title className="flight-name" align='center'>{i.name}</Card.Title>
        <Card.Text>
          <strong>From:</strong> {i.froml}
        </Card.Text>
        <Card.Text>
          <strong>To:</strong> {i.tol}
        </Card.Text>
        <Card.Text>
          <strong>Date:</strong> {i.date.toString().slice(0,10).split("-").reverse().join("-")}
        </Card.Text>
        <Card.Text>
          <strong>Departure:</strong> {i.departure}
        </Card.Text>
      </Card.Body>
    </Card></Link></Col></>)}):
  <Alert >No data</Alert>}
   </Row>
  }
   
  </>)
}

export default Flight