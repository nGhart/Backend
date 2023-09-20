import './signupForm.scss';
import React from 'react';
import Form from 'react-bootstrap/Form';
import authStore from '../../stores/authStore';
import { Link, useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const SignupForm = () => {
  const store = authStore();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    await store.signup();
    navigate('/login');
  };
  return (
    <div>
      <h1 className="font2">Sign up</h1>

      <Form onSubmit={handleSignup}>
        <Container>
          <Row>
            <Form.Group className="mb-1 box1" controlId="formBasicName">
              <Form.Label>Business Name</Form.Label>
              <Form.Control
                required
                onChange={store.updateSignupForm}
                type="text"
                name="name"
                value={store.signupForm.name}
              />
            </Form.Group>
            <Col xs={12} className="box1">
              <Form.Group className="mb-1 " controlId="formBasicEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  required
                  onChange={store.updateSignupForm}
                  type="email"
                  name="email"
                  value={store.signupForm.email}
                />
              </Form.Group>
              <Form.Group className="mb-1 " controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  onChange={store.updateSignupForm}
                  type="password"
                  name="password"
                  value={store.signupForm.password}
                />
              </Form.Group>
            </Col>
            <Col className="box1">
              <Form.Group className="mb-1 " controlId="formBasicNumber">
                <Form.Label>Number</Form.Label>
                <Form.Control
                  onChange={store.updateSignupForm}
                  type="text"
                  name="number1"
                  value={store.signupForm.number1}
                />
              </Form.Group>
              <Form.Group className="mb-1 " controlId="formBasicNumber">
                <Form.Label>Number 2</Form.Label>
                <Form.Control
                  onChange={store.updateSignupForm}
                  type="text"
                  name="number2"
                  value={store.signupForm.number2}
                />
                <Form.Text>Optional</Form.Text>
              </Form.Group>
            </Col>

            <Form.Group className="mb-1  box1" controlId="formBasicEmail">
              <Form.Label>Building Address</Form.Label>
              <Form.Control
                onChange={store.updateSignupForm}
                type="text"
                name="building"
                value={store.signupForm.building}
              />
            </Form.Group>

            <Col xs={12} className="box1">
              <Form.Group className="mb-1 " controlId="formBasicEmail">
                <Form.Label>P O Box</Form.Label>
                <Form.Control
                  onChange={store.updateSignupForm}
                  type="text"
                  name="pobox"
                  value={store.signupForm.pobox}
                />
              </Form.Group>
              <Form.Group className="mb-1 " controlId="formBasicEmail">
                <Form.Label>Street Name</Form.Label>
                <Form.Control
                  onChange={store.updateSignupForm}
                  type="text"
                  name="street"
                  value={store.signupForm.street}
                />
              </Form.Group>
            </Col>
            <Col className="box1">
              <Form.Group className="mb-1 " controlId="formBasicEmail">
                <Form.Label>City</Form.Label>
                <Form.Control
                  onChange={store.updateSignupForm}
                  type="text"
                  name="city"
                  value={store.signupForm.city}
                />
              </Form.Group>
              <Form.Group className="mb-1 " controlId="formBasicEmail">
                <Form.Label>Country</Form.Label>
                <Form.Control
                  onChange={store.updateSignupForm}
                  type="text"
                  name="country"
                  value={store.signupForm.country}
                />
              </Form.Group>
            </Col>
            <Form.Group className="mb-1 box1" controlId="formBasicEmail">
              <Form.Label>Logo</Form.Label>
              <Form.Control
                onChange={store.updateSignupForm}
                type="text"
                name="letterhead"
                value={store.signupForm.letterhead}
              />
            </Form.Group>
            {/* <Form.Group className="position-relative mb-1 ">
          <Form.Label>Logo</Form.Label>
          <Form.Control
            type="file"
            required
            name="file"
            onChange={store.updateSignupForm}
            // isInvalid={!!errors.file}
          />
          <Form.Control.Feedback type="invalid" tooltip>
            {/* {errors.file}
          </Form.Control.Feedback>
        </Form.Group> */}

            <button className="formButtons" type="submit">
              Sign Up
            </button>
          </Row>
        </Container>
      </Form>
    </div>
  );
};

export default SignupForm;
