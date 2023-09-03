import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, FormControl, Button } from "react-bootstrap";

const StudentForm = (props) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string()
      .email("You have enter an invalid email address")
      .required("Required"),
    rollno: Yup.number()
      .positive("Invalid roll number")
      .integer("Invalid roll number")
      .required("Required"),
  });
  return (
    <div className="form-wrapper">
      <Formik {...props} validationSchema={validationSchema}>
        <Form>
          <FormGroup>
            <a>Name:</a>
            <Field name="name" type="text" className="form-control" />
            <ErrorMessage name="name" className="d-block invalid-feedback" component="span"/>
          </FormGroup>
          <FormGroup>
            <a>Email:</a>
            <Field name="email" type="text" className="form-control" />
            <ErrorMessage name="email" className="d-block invalid-feedback" component="span" />
          </FormGroup>
          <FormGroup>
            <a>Rollno.:</a>
            <Field name="rollno" type="number" className="form-control" />
            <ErrorMessage name="rollno" className="d-block invalid-feedback" component="span" />
          </FormGroup>
          <Button variant="danger" size="lg" block="block" type="submit">
            {props.children}
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default StudentForm;