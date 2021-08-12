import React, { Component } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import styles from "./landingPage.css";
import { Link } from "react-router-dom";

export default class LandingPage extends Component {
  render() {
    return (
      <Container className={styles.main}>
        <Card className={styles.card}>
          <Jumbotron fluid>
            <Container className={styles.Header}>
              <h1 className="display-6">Welcome to Internship@Stratcom!</h1>
              <p className={styles.Message}>
                This is an online platform that lets you apply for field
                attachment or internship at Stratcom Company Limited, Uganda.
              </p>
              <Button variant="success" bg="block">
                <Link to={"/apply"} style={{ textDecoration: "none", color: "white" }} className="btn btn-lg">
                  Apply Now
                </Link>
              </Button>
            </Container>
          </Jumbotron>
        </Card>
      </Container>
    );
  }
}
