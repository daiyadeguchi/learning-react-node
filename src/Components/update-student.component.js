import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import StudentForm from "./StudentForm";

const EditStudent = (props) => {
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    rollno: "",
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const onSubmit = (studentObject) => {
    axios
      .put("http://localhost:4000/students/update-student/" + id, studentObject)
      .then((res) => {
        if (res.status === 200) {
          alert("Student successfully updated");
          navigate("/student-list");
        } else Promise.reject();
      })
      .catch((err) => alert("Something went wrong y'all"));
  };

  useEffect(() => {
    axios
      .get("http://localhost:4000/students/update-student/" + id)
      .then((res) => {
        const { name, email, rollno } = res.data;
        setFormValues({ name, email, rollno });
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <StudentForm
      initialValues={formValues}
      onSubmit={onSubmit}
      enableReinitialize>
      Update Student
    </StudentForm>
  );
};

export default EditStudent;