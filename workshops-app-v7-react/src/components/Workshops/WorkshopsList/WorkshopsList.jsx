import React, { useEffect } from "react";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getWorkshops } from "../../../services/workshops";
import { Link } from "react-router-dom";
import { LOADING, LOADED, ERROR } from "../../../actions/constants";
import {
    loadWorkshops,
    nextPage as nextPageAC,
} from "../../../actions/creators";

const WorkshopsList = () => {
    const dispatch = useDispatch();
    const { status, workshops, error, page } = useSelector(
        (state) => state.workshopsList
    );

    const nextPage = () => {
        // action 4 : { type: 'NEXT_PAGE' }
        dispatch(nextPageAC());
    };

    useEffect(() => {
        // this kick starts the loading process -> loading -> loaded / error
        // How this works: Thunk middleware will make sure that when a function is dispatched, the function gets executed (loadWorkshops( page ) returns a function, and this this function will be executed)
        dispatch(loadWorkshops(page));
    }, [page]);

    return (
        <Container className="my-5">
            <Row>
                <Col>
                    <h1>Workshops List</h1>
                    <hr />
                </Col>
            </Row>
            {status === LOADING && (
                <Alert variant="info">
                    We are fetching workshops. Hang on.
                </Alert>
            )}
            {status === LOADED && (
                <>
                    <Button variant="primary mb-3" onClick={nextPage}>
                        Go to next page
                    </Button>
                    <Row xs={1} md={2} lg={3}>
                        {workshops.map((workshop) => (
                            <Col key={workshop.id}>
                                {/*{} -> set textContent*/}
                                <h2>
                                    <Link to={`/workshops/${workshop.id}`}>
                                        {workshop.name}
                                    </Link>
                                </h2>
                                <hr />
                                {/* this way sets innerHTML - HTML tags are interpreted */}
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: workshop.description,
                                    }}
                                ></p>
                            </Col>
                        ))}
                    </Row>
                </>
            )}
            {status === ERROR && (
                <Alert variant="danger">{error.message}</Alert>
            )}
        </Container>
    );
};

export default WorkshopsList;
