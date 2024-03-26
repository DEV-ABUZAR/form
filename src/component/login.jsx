import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';

function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
    
    <div className="main container  ">
        
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="boder">
        <Row className="mb-3 inputs">
            <div className="logo">
                <img src="./logo.png" alt="" width={150} />
            </div>
        <div className="head">
        <h1 >Login</h1>
    </div>
          <Form.Group as={Col} md="4" controlId="flexvalidationCustom01">
            <Form.Label>Email</Form.Label>
            <Form.Control
              required
              type="email"
              placeholder="Email"
              
            />
           
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Password</Form.Label>
            <Form.Control
              required
              type="password"
              placeholder="password"
             
            />
            
          </Form.Group>
          <Button type="submit" style={{width:'30%', marginTop:'2%', backgroundColor:'#2cb1bc' , border:'none'}}>Login</Button>
        </Row>
        </div>
      </Form>
    </div>
    </>
  );
}

export default Login;
