import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "./Login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <div className="row Login">
        <div class="col-4"></div>
        <div class="col-4 ">
        <div class="bg-white mx-3 shadow-lg rounded">
            <div>
            <div
            className="mx-5 mt-5 mb-3"
            style={{ color: "#2F51FF", "fontWeight":"bolder" ,"fontSize":"2rem"}}
          >
            Log In
          </div>
            </div>
            <Form onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                <Form.Label style={{"fontWeight":"bolder"}}>Email</Form.Label>
                <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                <Form.Label className="mt-2" style={{"fontWeight":"bolder"}}>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </Form.Group>
                <Button className="my-3" block size="lg" type="submit" disabled={!validateForm()}>
                Login
                </Button>
            </Form>
      </div>
      <div class="col-4"></div>
      </div>
    </div>
  );
}