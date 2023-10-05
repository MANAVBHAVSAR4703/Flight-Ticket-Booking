import React,{useEffect,useState} from 'react'
import { Link,useNavigate,useLocation } from 'react-router-dom'
import { Form,Row,Col,Button,Container,ListGroup } from 'react-bootstrap'
import { useDispatch,useSelector } from 'react-redux'
import { login } from '../actions/useractions'
import Loader from './Loader';
import Messageloginscreen from './Messageloginscreen';
function LoginScreen() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const dispatch = useDispatch()
    const location=useLocation()
    const redirect = location.search ? location.search.split('=')[1] : '/'
    const userLogin = useSelector(state => state.userLogin)
    const { error, loading, userInfo } = userLogin
    const navigate=useNavigate()
    useEffect(() => {
        if (userInfo) {
            navigate(redirect)
        }
    }, [navigate, userInfo, redirect])

    const submitHandler = (e) => {
        e.preventDefault()
        dispatch(login(email, password))
    }

    return (<>{loading?<Loader/>:
    <div className='container'>
    <ListGroup variant="primary" style={{border:"2px solid black"}} >
        <ListGroup.Item>
        <Container>
        <Row className="justify-content-md-center">
            <Col xs={12} md={6}>
            <h1 style={{color:"black"}} >Sign In</h1>
            {error && <Messageloginscreen >{error}</Messageloginscreen>}
            
            <Form onSubmit={submitHandler}>

                <Form.Group controlId='email' className="pt-3">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                        type='email'
                        placeholder='Enter Email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>


                <Form.Group controlId='password' className="pt-3 pb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type='password'
                        placeholder='Enter Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    >
                    </Form.Control>
                </Form.Group>

                <Button type='submit' className='btn-dark' >
                    Sign In
                </Button>
            </Form>

            <Row className='py-3'>
                <Col>
                    New Customer? <Link
                        to={redirect ? `/register?redirect=${redirect}` : '/register'}>
                        <strong style={{color:'blue'}}>Register</strong>
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

export default LoginScreen