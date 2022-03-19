import React, { useState, useEffect } from "react";
import { Container, Row, Col, Alert, Image } from "react-bootstrap";
import { getWorkshopById } from "../../../services/workshops";
import { useParams } from "react-router-dom";

const WorkshopDetails = () => {
    const [status, setStatus] = useState("LOADING");
    const [workshop, setWorkshop] = useState(null);
    const [error, setError] = useState(null);

    const { id } = useParams();

    const fetchWorkshopById = async () => {
        setStatus("LOADING");

        try {
            const workshop = await getWorkshopById(id);

            setWorkshop(workshop);
            setStatus("LOADED");
            setError(null);
        } catch (error) {
            setStatus("ERROR");
            setError(error);
        }
    };

    useEffect(
        () => {
            fetchWorkshopById();
        },
        [] // run the effect only on page load
    );

    return (
        <Container className="my-5">
            {status === "LOADING" && (
                <Alert variant="info">
                    We are fetching workshop details. Hang on.
                </Alert>
            )}
            {status === "LOADED" && (
                <>
                    <Row>
                        <Col>
                            <h1>{workshop.name}</h1>
                            <hr />
                        </Col>
                    </Row>
                    <Row>
                        <Col xs={12} lg={4}>
                            <Image
                                fluid={true}
                                src={workshop.imageUrl}
                                alt={workshop.name}
                            />
                        </Col>
                        <Col xs={12} lg={8}>
                            <h2>{workshop.name}</h2>
                            <div
                                dangerouslySetInnerHTML={{
                                    __html: workshop.description,
                                }}
                            ></div>
                        </Col>
                    </Row>
                </>
            )}
            {status === "ERROR" && (
                <Alert variant="danger">{error.message}</Alert>
            )}
        </Container>
    );
};

export default WorkshopDetails;
