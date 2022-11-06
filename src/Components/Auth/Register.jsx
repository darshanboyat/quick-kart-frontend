import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from 'react-router-dom'

export default function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => {

  };

  return (
    <Container>
      <Row>
        <Col style={{ boxShadow: '0px 0px 10px cyan', marginTop: 20, marginLeft: 80 }}>
          <div className="d-flex" style={{ textAlign: 'center', justifyContent: 'center', flexDirection: 'column' }}>
            <h1 className='mt-2'>Sign Up</h1>
            <div className="underline mb-4"></div>
          </div>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Form.Group className=" mt-2 mb-3" controlId="formBasicEmail" style={{ textAlign: 'left' }}>
              <Form.Label>Name</Form.Label>
              <Form.Control type="text" placeholder="Enter yout name" {...register("name", { required: true })} />
              {errors.name && <h6 style={{ color: 'red', fontSize: 10, marginTop: 5 }}>Name is required!</h6>}
            </Form.Group>

            <Form.Group className=" mt-2 mb-3" controlId="formBasicEmail" style={{ textAlign: 'left' }}>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter yout email address" {...register("email", { required: true })} />
              {errors.email && <h6 style={{ color: 'red', fontSize: 10, marginTop: 5 }}>Email is required!</h6>}
            </Form.Group>

            <Form.Group className=" mt-2 mb-3 d-flex" controlId="formBasicEmail" style={{ textAlign: 'left' }}>
              <Form.Group className=" mt-2 mb-3" controlId="formBasicEmail" style={{ textAlign: 'left' }}>
                <Form.Label>Phone</Form.Label>
                <Form.Control type="number" placeholder="Enter phone number" {...register("phone", { required: true })} />
                {errors.email && <h6 style={{ color: 'red', fontSize: 10, marginTop: 5 }}>Contact number is required!</h6>}
              </Form.Group>
              <Form.Group className=" mt-2 mb-3 d-flex" controlId="formBasicEmail" style={{ textAlign: 'left', flexDirection: 'column', marginLeft: 100}}>
                <Form.Label>Gender</Form.Label>
                <select {...register("gender", { required: true })}>
                  <option disabled selected>Select Gender</option>
                  <option value="female">female</option>
                  <option value="male">male</option>
                  <option value="other">other</option>
                </select>
                {errors.email && <h6 style={{ color: 'red', fontSize: 10, marginTop: 5 }}>Gender is required!</h6>}
              </Form.Group>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail" style={{ textAlign: 'left' }}>
              <Form.Label>Address</Form.Label>
              <Form.Control type="text-area" placeholder="Enter your permanent address" {...register("email", { required: true })} />
              {errors.email && <h6 style={{ color: 'red', fontSize: 10, marginTop: 5 }}>Address is required!</h6>}
            </Form.Group>


            <Form.Group className="mb-3" controlId="formBasicPassword" style={{ textAlign: 'left' }}>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" {...register("password", { required: true })} />
              {errors.password && <h6 style={{ color: 'red', fontSize: 10, marginTop: 5 }}>Password is required!</h6>}
              <div className="dflex mt-2" style={{ justifyContent: 'space-between', width: 500 }}>
                <Link to='/' >Forgot Password ?</Link>
                <Link to='/auth/login' className="ml-4" style={{ paddingLeft: 130 }}>Already have an account ?</Link>
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