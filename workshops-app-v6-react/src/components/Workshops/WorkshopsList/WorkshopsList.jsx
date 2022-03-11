import React, { Component } from "react";
import { Container, Row, Col, Alert, Button } from "react-bootstrap";
import axios from "axios";

class WorkshopsList extends Component {
    state = {
        status: "LOADING",
        workshops: [],
        error: null,
        page: 1,
    };

    // nameRef = React.createRef();

    nextPage = () => {
        this.setState((state) => {
            return {
                page: state.page + 1,
            };
        });
    };

    previousPage = () => {
        this.setState((state) => {
            return {
                page: state.page - 1,
            };
        });
    };

    render() {
        const { workshops, status, error } = this.state;

        return (
            <Container className="my-5">
                <Row>
                    <Col>
                        <h1>Workshops List</h1>
                        <hr />
                    </Col>
                </Row>
                {status === "LOADING" && (
                    <Alert variant="info">
                        We are fetching workshops. Hang on.
                    </Alert>
                )}
                {status === "LOADED" && (
                    <>
                        <Button
                            variant="primary mb-3 "
                            onClick={this.previousPage}
                        >
                            Go to previous page
                        </Button>
                        <Button
                            variant="primary mb-3 mx-3"
                            onClick={this.nextPage}
                        >
                            Go to next page
                        </Button>
                        <Row xs={1} md={2} lg={3}>
                            {workshops.map((workshop) => (
                                <Col key={workshop.id}>
                                    {/*{} -> set textContent*/}
                                    <h2>{workshop.name}</h2>
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
                {status === "ERROR" && (
                    <Alert variant="danger">{error.message}</Alert>
                )}
            </Container>
        );
    }

    async fetchWorkshopForPage() {
        this.setState({
            status: "LOADING",
        });

        try {
            const response = await axios.get(
                `https://workshops-server.herokuapp.com/workshops?_page=${this.state.page}`
            );
            const workshops = response.data;
            this.setState({
                workshops,
                status: "LOADED",
                error: null,
            });
        } catch (error) {
            this.setState({
                status: "ERROR",
                error,
            });
        }
    }

    // should we go ahead with render and cdu?
    shouldComponentUpdate(newProps, newState) {
        console.log("shouldComponentUpdate");
        return true; // or false (do not render, do not call cdu)
    }

    // end of mounting phase - called only once
    async componentDidMount() {
        console.log("componentDidMount");

        this.fetchWorkshopForPage();
    }

    // componentDidUpdate -> called after state change
    async componentDidUpdate(oldProps, oldState) {
        console.log("old props and old state : ", oldProps, oldState);
        console.log("new props and new state : ", this.props, this.state);

        if (oldState.page !== this.state.page) {
            this.fetchWorkshopForPage();
        }
    }

    // before unmounting begins
    componentWillUnmount() {
        console.log("componentWillUnmount");
    }
}

export default WorkshopsList;
