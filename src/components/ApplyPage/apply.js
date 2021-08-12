import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import styles from "./applyPage.css";

export default class Apply extends Component {
  render() {
    return (
      <Container className={styles.main}>
        <Card className={styles.card}>
          <Jumbotron fluid>
            <Container className={styles.Header}>
                <b className="display-6">Application Form</b><br />
              <Form>
                  <br />
                <Form.Group className="mb-3" controlId="formGroupName">
                  <Form.Label>Full Names</Form.Label>
                  <Form.Control type="text" placeholder="Enter your name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRegno">
                  <Form.Label>Registration Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your registration number"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter your email" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRegno">
                  <Form.Label>Current Course</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your current course"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRegno">
                  <Form.Label>University</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter your current university"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRegno">
                  <Form.Label>Intership Course</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter an internship course of your choice"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formGroupRegno">
                  <Form.Label>Gender</Form.Label>
                  <Form.Control type="text" placeholder="Enter your gender" />
                </Form.Group>
                <br />
                <Button variant="success" bg="block">
                  <Link
                    to={"/apply"}
                    style={{ textDecoration: "none", color: "white" }}
                    className="btn btn-lg"
                  >
                    Submit Form
                  </Link>
                </Button>
              </Form>
            </Container>
          </Jumbotron>
        </Card>
        <br /> <br />
      </Container>
    );
  }
}
