import axios from "axios";
import React, { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

const AddWorkshop = () => {
    // for every input we create a state variable to hold the current value
    // we will "control" the input value using the state - therefore we need to update the state when user tries to provide input
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [startDate, setStartDate] = useState("");
    const [endDate, setEndDate] = useState("");

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

            alert(
                `Workshop with name = ${newWorkshop.name} and id=${newWorkshop.id} has been created`
            );
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <Container className="my-5">
            <h1>Add a workshop</h1>
            <hr />
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
