import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function App({setLogin}) {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = new useNavigate()
    const onSubmit = (data) => {
            setLogin(true)
            navigate('/')
        }

    return (
        <Container>
            <Row>
                <Col style={{ boxShadow: '0px 0px 10px cyan', marginTop: 20, marginLeft: 80 }}>
                    <div className="d-flex" style={{ textAlign: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <h1 className='mt-2'>Sign In</h1>
                        <div className="underline mb-4"></div>
                    </div>
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mt-4 mb-3" controlId="formBasicEmail" style={{ textAlign: 'left' }}>
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" {...register("email", {required: true})}/>
                            {errors.email && <h6 style={{ color: 'red', fontSize: 10, marginTop: 5 }}>Email is required!</h6>}
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword" style={{ textAlign: 'left' }}>
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" {...register("password", {required: true})}/>
                            {errors.password && <h6 style={{ color: 'red', fontSize: 10, marginTop: 5 }}>Email is required!</h6>}

                            <div className="mt-3" style={{ justifyContent: 'space-between', width: 500 }}>
                                <Link to='/forget' >Forgot Password ?</Link>
                                <Link to='/auth/register' className="ml-4" style={{ paddingLeft: 140 }}>Don't have an account ?</Link>
                            </div>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}