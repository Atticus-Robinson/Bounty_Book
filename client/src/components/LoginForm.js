// see SignupForm.js for comments
import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';



import Auth from "../utils/auth";


const LoginForm = (props) => {
  const [userFormData, setUserFormData] = useState({ email: "", password: "" });
  const form = useRef();
  const [loginUser, { error }] = useMutation(LOGIN_USER);
  const [validated] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserFormData({ ...userFormData, [name]: value });
  };

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // checks validity of form befor moving on
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    try {
      const { data } = await loginUser({
        variables: { ... userFormData },
      });
      const token = JSON.stringify({ data });
      console.log(token);
      Auth.login(data.loginUser.token);
    } catch (err) {
      console.error(err);
      setShowAlert(true);
      console.log('here we are')
    }


  };

  return (
    <div className="login-form">
      <Form
        ref={form}
        className="form"
        noValidate
        validated={validated}
        onSubmit={handleFormSubmit}
      >
        <Alert
          dismissible
          onClose={() => setShowAlert(false)}
          show={showAlert}
          variant="danger"
        >
          UH OH! Please check your credentials, and try again.
        </Alert>
        <Form.Group>
          <h3 className="access-title">Login</h3>
          <Form.Label htmlFor="email">Email</Form.Label>
          <Form.Control
            type="text"
            placeholder="Your email"
            name="email"
            onChange={handleInputChange}
            value={userFormData.email}
            required
          />
          <Form.Control.Feedback type="invalid">
            Email is required!
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group>
          <Form.Label htmlFor="password">Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Your password"
            name="password"
            onChange={handleInputChange}
            value={userFormData.password}
            required
          />
          <Form.Control.Feedback type="invalid">
            Password is required!
          </Form.Control.Feedback>
        </Form.Group>
        <button
          disabled={!(userFormData.email && userFormData.password)}
          type="submit"
          className="btn"
        >
          Submit
        </button>
      </Form>
    </div>
  );
};

export default LoginForm;
