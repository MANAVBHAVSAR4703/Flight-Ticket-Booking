import React, { useEffect, useState} from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Alert, Button, Container, Table,Row,Col } from 'react-bootstrap';
import { listFlightDetails } from '../actions/flightactions';
import Loader from './Loader';

const Book = () => {
  let { id } = useParams();
  var str = JSON.parse(localStorage.getItem('selected_seats'));
  const dispatch = useDispatch();
  const flightDetails = useSelector((state) => state.flightDetails);
  const { error, loading, flight } = flightDetails;
  var total = 0;
  const [passengername, setPassengername] = useState('');
  const [passengerage, setPassengerage] = useState(0);
  const [passengerdetails, setPassengerdetails] = useState([]);
const navigate=useNavigate()
  useEffect(() => {
    dispatch(listFlightDetails(id));
  }, [dispatch,id]);
  str.map((i)=>{
    if(i[0]==="A")
    {total=total+parseFloat(flight.fprice)}
    if(i[0]==="B")
    {total=total+parseFloat(flight.bprice)}
    if(i[0]==="C")
    {total=total+parseFloat(flight.eprice)}
    return null
})
  function detailhandler(e,seat) 
  {
    
    if(passengername!=='' && passengerage!=='')
    {
        e.preventDefault()
        setPassengerdetails([...passengerdetails, [seat, passengername, passengerage]]);
        setPassengername('');
        setPassengerage(0);
    }
    else{
        alert('Enter data in proper order')
    }

  }

  console.log(passengerdetails);

  function payhandler() {
    localStorage.setItem('passenger_details',JSON.stringify(passengerdetails))
    localStorage.setItem('total',JSON.stringify(total))
    navigate(`/${id}/payment`)
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <>
          <Container>
            <h5>NOTE:Enter Data In Sequetial Order</h5>
            <br></br>
            <div className='table-responsive'>
            <Table bordered striped border={'10px solid black'} size="sm">
              <thead>
                <tr>
                  <th>
                    <h5 align="center">Seats</h5>
                  </th>
                  <th>
                    <h5 align="center">ENTER PASSENGER DETAILS</h5>
                  </th>
                  <th>
                    <h5 align="center">Price</h5>
                  </th>
                </tr>
              </thead>
              <tbody>
                {str.map((i) => {
                  return (
                    <>
                      <tr>
                        <td className="d-md-table-cell">
                          <p style={{color:'black'}}>{i}</p>
                        </td>
                        <td className="d-md-table-cell">
                          <form align="center" onSubmit={(e)=>detailhandler(e,i)}>
                            <Row>
                                <Col md={4}>
                            <input
                             className="d-md-table-cell"
                             style={{width:'80%',height:'80%'}}
                              type="text"
                              onChange={(e) => setPassengername(e.target.value)}
                              placeholder="Name"
                              required
                              disabled={passengerdetails.some((item) => item[0] === i)}
                            ></input>{' '}</Col>
                            <Col md={4}><input
                             className="d-md-table-cell"
                              type="number"
                              style={{width:'80%',height:'80%'}}
                              onChange={(e) => setPassengerage(e.target.value)}
                              placeholder="Age"
                              required
                              disabled={passengerdetails.some((item) => item[0] === i)}
                            ></input></Col>
                            <Col md={4}><Button
                             className="btn btn-dark"
                            type='submit'
                            style={{width:'80%',height:'80%'}}
                              hidden={passengerdetails.some((item) => item[0] === i)}
                            >
                              Add
                            </Button></Col></Row>
                          </form>
                        </td>
                        <td className="d-md-table-cell">
                          <p style={{color:'black'}}> ₹{i[0] === 'A' ? flight.fprice : i[0] === 'B' ? flight.bprice : flight.eprice}</p>
                        </td>
                      </tr>
                    </>
                  );
                })}
              </tbody>
            </Table></div>
            <br></br>
            <br></br>
            <Button
              className="btn btn-dark"
              style={{ width: '100%', justifyContent: 'space-between' }}
              onClick={(e)=>{payhandler(e)}}
              disabled={passengerdetails.length!==str.length}
            >
              Proceed To Pay ₹{total}
            </Button>
          </Container>
        </>
      )}
    </>
  );
};

export default Book;
