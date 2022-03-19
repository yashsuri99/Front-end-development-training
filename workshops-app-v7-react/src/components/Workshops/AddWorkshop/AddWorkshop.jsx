import axios from "axios";
import React, { useRef, useState } from "react";
import {
    Form,
    Button,
    Container,
    Toast,
    ToastContainer,
} from "react-bootstrap";

const AddWorkshop = () => {
    // for every input we create a state variable to hold the current value
    // we will "control" the input value using the state - therefore we need to update the state when user tries to provide input
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");
    const [status, setStatus] = useState("");
    const [error, setError] = useState(null);

    const resetForm = () => {
        setName("");
        setDescription("");
        setStartDate("");
        setEndDate("");
    };

    const addNewWorkshop = async (event) => {
        event.preventDefault();

        const workshop = {
            name,
            description,
            startDate,
            endDate,
        };

        console.log(workshop);

        try {
            const response = await axios.post(
                `https://workshops-server.herokuapp.com/workshops`,
                workshop,
                {
                    headers: {
                        "Content-Type": "application/json",
                    },
                }
            );
            const newWorkshop = response.data;

            resetForm();
            // alert(
            //     `Workshop with name = ${newWorkshop.name} and id=${newWorkshop.id} has been created`
            // );
            setStatus("SUCCESS");
        } catch (error) {
            // alert(error.message);
            setStatus("ERROR");
            setError(error);
        }
    };

    return (
        <Container className="my-5">
            <h1>Add a workshop</h1>
            <hr />
            <div
                aria-live="polite"
                aria-atomic="true"
                style={{
                    minHeight: "200px",
                    width: "300px",
                    position: "fixed",
                    top: 10,
                    right: 10,
                }}
            >
                <ToastContainer position="top-end" className="p-3">
                    <Toast
                        show={status === "ERROR"}
                        onClose={() => setStatus("")}
                        bg="danger"
                    >
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Error</strong>
                        </Toast.Header>
                        <Toast.Body>
                            Something went wrong when adding workshop -{" "}
                            {error?.message}
                        </Toast.Body>
                    </Toast>
                    <Toast
                        show={status === "SUCCESS"}
                        bg="success"
                        onClose={() => setStatus("")}
                    >
                        <Toast.Header>
                            <img
                                src="holder.js/20x20?text=%20"
                                className="rounded me-2"
                                alt=""
                            />
                            <strong className="me-auto">Yay!</strong>
                        </Toast.Header>
                        <Toast.Body>Added workshop successfully</Toast.Body>
                    </Toast>
                </ToastContainer>
            </div>
            <Form onSubmit={addNewWorkshop}>
                <Form.Group className="mb-3" controlId="name">
                    {/* <label htmlFor=""></label> */}
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="The workshop's name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        as="textarea"
                        placeholder="A few lines about the workshop"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="startDate">
                    <Form.Label>Start date</Form.Label>
                    <Form.Control
                        type="date"
                        value={startDate}
                        onChange={(event) => setStartDate(event.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="endDate">
                    <Form.Label>End date</Form.Label>
                    <Form.Control
                        type="date"
                        value={endDate}
                        onChange={(event) => setEndDate(event.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add workshop
                </Button>
            </Form>
        </Container>
    );
};

export default AddWorkshop;
