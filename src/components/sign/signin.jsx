import React from 'react';
import { Formik, Form } from 'formik';
import { TextField } from './TextField';
import * as Yup from 'yup';
import Navbar from '../Navbar';
import Footer from '../Footer';
import 'bootstrap/dist/css/bootstrap.css';
import img1 from './rocket.png'
import { Link } from 'react-router-dom';


const SignIn = () => {
   const validate = Yup.object({  
    email: Yup.string()
      .email('Email is invalid')
      .required('Email is required'),
    password: Yup.string()
      .required('Password is required'),
    })
  return (

    
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      onSubmit={values => {
        console.log(values)
      }}
    >
      {formik => (
        <div>
          <div> <Navbar color="black" isAbsolute={false} /></div>

          <div className="container mt-3">
      <div className="row">
        <div className="col-md-5">
          <h1 className="my-4 font-weight-bold .display-4">Sign in</h1>
          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="password" name="password" type="password" />
            <button className="btn btn-dark mt-3" type="submit">Login</button>
            <button className="btn btn-danger mt-3 ml-3" ><Link to="/signup" >register</Link></button>
          </Form>
          
        </div>
        <div className="col-md-7">
      <img  src={img1} />
    </div>
        </div>
      </div>
      <div> <Footer/></div>
    </div>
      )}
    </Formik>
  )
}
    
     
export default SignIn;