import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import WelcomePage from "./components/WelcomePage/welcome-page";
import LandingPage from "./components/LandingPage/landing-page";
import Apply from "./components/ApplyPage/apply";
import Dashboard from "./components/Dashboard/dashboard";
import Courses from "./components/CoursesPage/courses";
import Login from "./components/LoginPage/login";
import Register from "./components/RegistrationPage/register";
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <Navbar collapseOnSelect expand="lg" bg="light" text="dark" variant="light" fixed="top">
            <Container>
              <Nav>
                <Link to={"/home"} className="nav-link">
                  <b className="brand">Internship@Stratcom</b>
                </Link>
              </Nav>

              <Nav className="justify-content-end">
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav>
                  <Nav>
                    <Link to={"/apply"} className="nav-link">
                      Apply
                    </Link>
                  </Nav>
                  <Nav>
                    <Link to={"/dashboard"} className="nav-link">
                      Dashboard
                    </Link>
                  </Nav>
                  <Nav>
                    <Link to={"/courses"} className="nav-link">
                      Courses
                    </Link>
                  </Nav>
                </Nav>
              </Navbar.Collapse>
              </Nav>
            </Container>
          </Navbar><br /><br /><br />
        </header>

        <Container>
          <Row>
            <Col md={12}>
              <div className="wrapper">
                <Switch>
                  <Route exact path="/" component={WelcomePage} />
                  <Route path="/login" component={Login} />
                  <Route path="/register" component={Register} />
                  <Route exact path="/home" component={LandingPage} />
                  <Route path="/apply" component={Apply} />
                  <Route path="/dashboard" component={Dashboard} />
                  <Route path="/courses" component={Courses} />
                </Switch>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Router>
  );
}

export default App;
