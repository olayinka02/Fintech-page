import { render } from '@testing-library/react';
import React, { useState } from 'react';


import { Modal, Container, Col, Row, Button, Form } from 'react-bootstrap';






function Formbody(props) {
    return (
      <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            client Form.
          </Modal.Title>
         
        </Modal.Header>
        <Modal.Body className="show-grid">
          <Container>
            <Row>
            <Col md={12} sm={12}>
            <Form>
              <Form.Group controlId="formBasicEmail">
                <Form.Label>Name:</Form.Label>
                <Form.Control size="sm" type="email" placeholder="Enter your business name" />
               
                <Form.Label>Email address</Form.Label>
                <Form.Control size="sm" type="email" placeholder="Enter email" />

                <Form.Label>Business Description</Form.Label>
                <Form.Control size="sm" type="email" placeholder="give a short description about your business" />

                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control size="sm" type="password" placeholder="Password" />
                <Form.Text className="text-muted">
                  input 4 digit as your code to track your businesses
                </Form.Text>
              </Form.Group>
              
              <Button variant="outline-danger" type="submit">
                Submit
              </Button>
            </Form>
            </Col>
            </Row>
  
            <Row>
             
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success"  onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function App() {
     
          const [modalShow, setModalShow] =useState(false);
  
    return (
      <>

        <Container fluid style={{width:'100%'}}>
            <div className="formbody">
              <center  >
              <h2 style={{color:'white'}}>Be Our Client</h2>
                <Button   variant="danger"  onClick={() => setModalShow(true)}>Open Form</Button>
              </center>

            </div>
          </Container>
          

       
        <Formbody show={modalShow} onHide={() => setModalShow(false)} />
      </>
    );
  }
  
  render(<App />);
  
export default Formbody;