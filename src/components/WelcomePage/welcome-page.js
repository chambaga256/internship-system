import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import styles from "./welcomePage.css";
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default class WelcomePage extends Component{
    render(){
        return(
            <Container className={styles.main}>
                <Card className={styles.card}>
                    <Jumbotron fluid>
                        <Container className={styles.Header}>
                            <h1 className="display-6">Stratcom Company Limited</h1>
              
                        <Col>
                            <Row>
                                <Col md={6}>
                                    <Button variant="success" bg="block">
                                    <Link to={"/login"} style={{ textDecoration: "none", color: "white" }} className="btn btn-lg">Login</Link>
                                    </Button>
                                </Col>
                                <Col md={6}>
                                    <Button variant="success" bg="block">
                                    <Link to={"/register"} style={{ textDecoration: "none", color: "white" }} className="btn btn-lg">Register Now</Link>
                                    </Button>
                                </Col>
                            </Row>
                        </Col>
                        </Container>
                    </Jumbotron>
                </Card>
            </Container>
        );
    }
}