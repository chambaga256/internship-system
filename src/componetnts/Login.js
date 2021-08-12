import { Component } from "react";
import React, { useState , useEffect} from "react";
import "./Login.css";
import {  Link, useLocation} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { TextField, Box, FormControl,In } from '@material-ui/core';
import * as Yup from 'yup'
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input'

class  Login extends Component {
    
    render() { 
        return (

            <div className="login">
            <div className="login__area">
              <div className="login__details">
                <div className="login__image">
                  
                  <div className="login__imageArea"
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
                    <div className="login__imageAreaCreate">
                    <h2>Login</h2>
      
      
                    </div>
                  
                    
                  </div>
      
                  
                </div>
                <div className="login__detail">
                  
       {/*signup form */}
       <Formik
       
       ini
       
      >
       {
         ({ errors, touched }) => (
           <Box>
               <Form className="app__formLogin">
              
      
             {/*email */}
             <FormControl className="login__email">
               <Input
                 name="email"
                 type="email"
                 variant="contained"
                 
                 
                 label="Email"
                 placeholder="enter email"
                 size="small"
                  />
               {errors.email && touched.email &&
                 <ErrorMessage name="email" component="span" className="error" />}
             </FormControl>
      
             <FormControl className="login__password">
      
               {/*password */}
               <Input
                 name="password"
                 as={TextField}
                 label="Password"
                 size="small"
                 type="password "
                 placeholder="password"    
            
                 />
                     
               
                 
             </FormControl>
             
               <FormControl className="login__button">
               <Button
                 
                 variant="contained"
                 color="primary">Login</Button>
      
             </FormControl>
              
              <div className="login__haveAccount">
              <h6>Dont Have  An account? 
                
                  <span>Register</span>
            
              </h6>
              
                

                
      
      
              </div>
      
              
      
           </Form>
             
            
           </Box>)
       }
      
      </Formik>
      
      {/*signup form */}
      
                </div>
              </div>
            </div>
      
          </div>
      
      
          )
      
      
         
    }
}
 
export default Login ;