import React,{useEffect,useState} from 'react'
import { Link,useNavigate,useLocation } from 'react-router-dom'
import { Form,Row,Col,Button,Container,ListGroup } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { register } from '../actions/useractions'
import Loader from './Loader';
import Messageregisterscreen from './Messageregisterscreen';

function Registerscreen() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setconfirmPassword] = useState('')
    const[message,setMessage]=useState("")

    const dispatch = useDispatch()
    const location=useLocation()
    const redirect = location.search ? location.search.split('=')[1] : '/'

    const userRegister = useSelector(state => state.userRegister)
    const { error, loading, userInfo } = userRegister
    const navigate=useNavigate()
    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])
    const submitHandler = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage('Confirm Password does not match')
        } else {
            setMessage("")
            dispatch(register(name, email, password))
        }
    }
  return (<>{loading?<Loader/>:
  <div className='container'>
  <ListGroup variant="primary" style={{border:"2px solid black"}} >
      <ListGroup.Item>
      <Container>
      <Row className="justify-content-md-center">
          <Col xs={12} md={6}>
          <h1 style={{color:"black"}}>Register</h1>
          {error && <Messageregisterscreen mes={message}>{error}</Messageregisterscreen>}
          <Form onSubmit={submitHandler}>

<Form.Group controlId='name' className="pt-3 ">
    <Form.Label>Name</Form.Label>
    <Form.Control
        required
        type='name'
        placeholder='Enter name'
        value={name}
        onChange={(e) => setName(e.target.value)}
    >
    </Form.Control>
</Form.Group>

<Form.Group controlId='email' className="pt-3">
    <Form.Label>Email Address</Form.Label>
    <Form.Control
        required
        type='email'
        placeholder='Enter Email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
    >
    </Form.Control>
</Form.Group>

<Form.Group controlId='password' className="pt-3">
    <Form.Label>Password</Form.Label>
    <Form.Control
        required
        type='password'
        placeholder='Enter Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
    >
    </Form.Control>
</Form.Group>

<Form.Group controlId='passwordConfirm' className="pt-3 pb-3">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control
        required
        type='password'
        placeholder='Confirm Password'
        value={confirmPassword}
        onChange={(e) => setconfirmPassword(e.target.value)}
    >
    </Form.Control>
</Form.Group>

<Button type='submit' className='btn-dark'>
    Register
</Button>

</Form>
<Row className='py-3'>
                <Col>
                    Have an Account? <Link style={{color:'blue'}}
                        to={redirect ? `/login?redirect=${redirect}` : '/login'}>
                        Sign In
                        </Link>
                </Col>
            </Row>
          </Col>
        </Row>
    </Container>
    </ListGroup.Item>
    </ListGroup>
    </div>}</>
  )
}

export default Registerscreen