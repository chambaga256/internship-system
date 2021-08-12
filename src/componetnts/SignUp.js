import React, { useState, useEffect } from "react";
import "./SignUp.css";
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Box, FormControl } from '@material-ui/core';
import Input from '@material-ui/core/Input'


import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css';
import {Component} from "react"
class   SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="signup">
            <div className="signup__area">
              <div className="signup__details">
                <div className="signup__image">
      
                  <div className="signup__imageArea"
                    style={{
                      backgroundSize: "cover",
                      backgroundImage: `url(${'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'})`,
                      height: "40vh",
                      width: "100%",
                      opacity: 0.8,
                      borderRadius: "20px 20px 0 0px",
                      zIndex: -1
      
                    }}
                  >
                    <div className="signup__imageAreaCreate">
                     
                    
                    
      
                      <h2>Create An Account</h2>
      
      
                    </div>
      
                  </div>
      
      
                </div>
                <div className="signup__detail">
      
                  {/*signup form */}
            
                    <Formik>
                      
                        <Box>
                          <Form className="app__form">
                            {/*firstname */}
                            <FormControl className="signup__firstName">
                              <Input name="firstName"
                                
                                fullWidth={true}
                                className="mobile__viewFirstName"
                            
                                
                                placeholder="enter first Name"
                                size="small"
                                label="FirstName" />
                                    </FormControl>
                            {/*last name */}
                            <FormControl className="signup__secondName">
                              <Input name="lastName"
                                
                                
                        
                                placeholder="enter last Name"
                                size="small"
                                label="Last Name" />
      
            
      
      
      
                            </FormControl>
      
                            {/*email */}
                            <FormControl className="signup__email">
                              <Input 
                                name="email"
                                type="email"
                            
                                label="Email"
                                placeholder="enter email"
                                size="small"
                              />
                            
                                
                            </FormControl>
      
                            {/*signup phonenumber */}
                            <FormControl className="signup__phoneNumber">
                              <PhoneInput
                                country={'ug'}
                                value="phone"
                                inputStyle ={{
                                  width:"100%"
                                }}
                                containerClass="signup__phone"
                            
                                onlyCountries={["ug"]}
                                inputProps={{
                                  name: 'phone',
                                  required: true,
                                  placeholder:"Phone"
      
                                  
                                }}
                               
                              />
                            </FormControl>
                            <FormControl className="signup__password">
      
                              {/*password */}
                              <Input
                                name="password"
                                
                                label="Password"
                                size="small"
                                type="password"

                            
                                placeholder="enter password" />
                              
                            
                            </FormControl>
                            {/*confirm password */}
      
                            <FormControl className="signup__confirmPassword">
                              <Input 
                                name="confirmPassword"
                                type="confirmPassword"
                                size="small"
                                label="confirm Password"
                                placeholder="confirm password"  />
                              
                        
                            </FormControl>
      
                            <FormControl className="signup__button">
                              <Button
                            
                                variant="contained"
                                
                                color="primary">Register</Button>
      
                            </FormControl>
      
                            <div className="signup__haveAccount">
                              <h6>Already Have an Account?
                <Link to="/mars/login">
                                  <span>login</span>
                                </Link>
                              </h6>
      
                              <Link to="/" style={{ textDecoration: "none" }}>
                                <Button
                                  type="button"
                                  variant="contained"
      
                                  style={{
                                    margin: "10px 50px",
                                  }}
                                  color="primary">Back</Button>
                              </Link>
      
                            </div>
      
      
                          </Form>
      
      
                        </Box>
                    
                        </Formik>
                  
      
                  {/*signup form */}
      
                </div>
              </div>
            </div>
      
          </div>
      

        );
    }
}
 
export default SignUp ;