import React,{useEffect,useState} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import { Alert, Container, Table,Row,Col,Card} from 'react-bootstrap';
import { listFlightDetails } from '../actions/flightactions';
import { useParams,useNavigate} from 'react-router-dom';
import { PayPalButton } from 'react-paypal-button-v2'
import Loader from './Loader';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import { jsPDF } from 'jspdf';

//sb-5mjyk27287097@personal.example.com
//foodorder
const PaymentPage = () => {

    const userLogin = useSelector(state => state.userLogin)
    const { userInfo}=userLogin
    const [sdkReady, setSdkReady] = useState(false)
    let { id } = useParams();
    const dispatch = useDispatch();
    const flightDetails = useSelector((state) => state.flightDetails);
    const { error, loading, flight } = flightDetails;
    const navigate=useNavigate()
    const addPayPalScript = () => {
        const script = document.createElement('script')
        script.type = 'text/javascript'
        script.src = 'https://www.paypal.com/sdk/js?client-id=AfRHaP6G8Cf10KYGTuCopdPbCg1F8aiBAS040dgvTDzAaBPyART33IsvUT95ABM0Jev9fb80n8tRWnO_'
        script.async = true
        script.onload = () => {
            setSdkReady(true)
        }
        document.body.appendChild(script)
    }
    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }
        dispatch(listFlightDetails(id));
        if (!window.paypal) {
            addPayPalScript()
        } else {
            setSdkReady(true)
        }
      }, [userInfo,navigate,dispatch,id]);
    
    
 const passengerdetails=JSON.parse(localStorage.getItem('passenger_details'))
 const total=JSON.parse(localStorage.getItem('total'))
async function successPaymentHandler()
{
    
    toast.success("Ticket Booked.",{autoClose:5000})
    await axios.post(
        `/api/book/`,
        {"flight":id,"passenger_details":passengerdetails,"user":userInfo._id},
        {
            headers: {
                'Content-type': 'application/json'
            }
        }
    
    )
    const doc = new jsPDF();


    doc.setFont('helvetica');
    doc.setFontSize(14);
    


    passengerdetails.forEach((passenger, index) => {
   
        doc.text(`Online Ticket - Passenger ${index + 1}`, 105, 10, 'center');
        
        doc.text(`Flight: ${flight.name}`, 20, 20);
        doc.text(`From: ${flight.froml}`, 20, 30);
        doc.text(`To: ${flight.tol}`, 20, 40);
        doc.text(`Date: ${flight.date}`, 20, 50);
        doc.text(`Departure Time: ${flight.departure}`, 20, 60);
    
        doc.text(`Passenger Name: ${passenger[1]}`, 20, 70);
        doc.text(`Seat: ${passenger[0]}`, 20, 80);
        doc.text(`Age: ${passenger[2]}`, 20, 90);      
        doc.addPage()
    });
    
  
      doc.save(`Online_Ticket ${flight.name}.pdf`);


    localStorage.removeItem('selected_seats')
    localStorage.removeItem('passenger_details')
    localStorage.removeItem('total')
    setTimeout(()=>{navigate('/')},5000)
    
}


  return (<>
    {loading?<Loader/>:error?<Alert variant='danger'>{error}</Alert>:
    <Container id='pdf'>
        <ToastContainer className="toastcontainer" style={{height:'5px',width:'300px'}}/>
        <Container>
      <Row className="justify-content-center"  style={{paddingTop:'2%'}}>
        <Col md={5}>
          <Card>
            <Card.Header className="bg-primary text-white text-center">Flight Details</Card.Header>
            <Card.Body>
              <div>
                <h5>Name: {flight.name}</h5>
                <h5>From: {flight.froml}</h5>
                <h5>To: {flight.tol}</h5>
                <h5>Departure Date: {flight.date}</h5>
                <h5>Total Price: ₹{total}</h5>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
     
      <Row className='justify-content-center'>
        <Col md={8} className='style3d'>
      <div className='table-responsive'>
          <Table bordered striped  size='sm' variant='flush'>
            <thead>
                <tr>
                    <th colspan='3'><h3  align='center'>Payment Details</h3></th>
                </tr>
              <tr>
                <th>
                  <h5 align='center'  className="d-md-table-cell">Seats</h5>
                </th>
                <th>
                  <h5 align='center'  className="d-md-table-cell">Details</h5>
                </th>
                <th>
                  <h5 align='center'  className="d-md-table-cell">Price</h5>
                </th>
              </tr>
            </thead>
            <tbody>
              {passengerdetails?.map(([seat, passengername, passengerage]) => (
                <tr key={seat}>
                  <td>
                    <p>{seat}</p>
                  </td>
                  <td>
                    <p align='center'  className="d-md-table-cell">
                      Name: {passengername}
                      <br />
                      Age: {passengerage}
                    </p>
                  </td>
                  <td>
                    <p  align='center' className="d-md-table-cell">
                      ₹
                      {seat[0] === 'A'
                        ? flight.fprice
                        : seat[0] === 'B'
                        ? flight.bprice
                        : flight.eprice}
                    </p>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
          </div>
          </Col>
          </Row>
          <br></br>
          <br></br>
        <Row style={{justifyContent:'center'}}>
            <Col md={5}>
          {!sdkReady ? (
                <Loader />
            ) : (
                flightDetails.length === 0?"":<PayPalButton
                amount={total}
                onSuccess={successPaymentHandler}/>
            )}
            </Col>
        </Row>
      
    </Container>}
  </>);
};

export default PaymentPage;
