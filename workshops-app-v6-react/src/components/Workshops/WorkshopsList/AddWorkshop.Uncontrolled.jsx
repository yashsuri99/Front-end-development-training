import axios from "axios";
import React, { useRef } from "react";
import { Form, Button, Container } from "react-bootstrap";

const AddWorkshop = () => {
    const nameRef = useRef();
    const descriptionRef = useRef();
    const startDateRef = useRef();
    const endDateRef = useRef();

    const addNewWorkshop = async (event) => {
        event.preventDefault();

        const workshop = {
            name: nameRef.current.value,
            description: descriptionRef.current.value,
            startDate: startDateRef.current.value,
            endDate: endDateRef.current.value,
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
                        ref={nameRef}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        as="textarea"
                        placeholder="A few lines about the workshop"
                        ref={descriptionRef}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="startDate">
                    <Form.Label>Start date</Form.Label>
                    <Form.Control type="date" ref={startDateRef} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="endDate">
                    <Form.Label>End date</Form.Label>
                    <Form.Control type="date" ref={endDateRef} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add workshop
                </Button>
            </Form>
        </Container>
    );
};

export default AddWorkshop;
