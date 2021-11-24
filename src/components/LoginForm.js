import React from "react";
import { Form, Button, Card } from "react-bootstrap";

function LoginForm() {
    return ( 
        <>
            <Card>
                <Card.Body>
                    <Card.Header> Please Login</Card.Header>
                    
                    <Form align="center">
                        <Form.Group className="mb-3" controlId="email">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control  type="email" placeholder="name@example.com"/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"/>
                        </Form.Group>
                        <Button inline variant="primary" type="submit">
                                    Sign up
                        </Button>  
                    </Form>
                </Card.Body>
            </Card>
        </>
     );
}

export default LoginForm;