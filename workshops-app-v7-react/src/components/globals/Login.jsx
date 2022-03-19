import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { login as loginSvc } from "../../services/auth";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const login = async (event) => {
        event.preventDefault();

        const credentials = {
            email,
            password,
        };

        console.log(credentials);

        try {
            await loginSvc(credentials);

            // internally calls history's pushState() - i.e. change the URL without a page refresh
            navigate("/workshops");
        } catch (error) {
            // Please handle the error in better way and show some message
            alert(error.message);
        }
    };

    return (
        <Container className="my-5">
            <h1>Login</h1>
            <hr />
            <Form onSubmit={login}>
                <Form.Group className="mb-3" controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                        type="text"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </Container>
    );
};

export default LoginPage;
