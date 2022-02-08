import React, { Component } from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import "./App.scss";
import SuccessModal from "./SuccessModal";

class App extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    dateOfBirth: "",
    gender: "",
    isModalShown: false,
    isValid: false,
  };

  handleChange = (value) => {
    this.setState({
      firstName: value.firstName,
      lastName: value.lastName,
      email: value.email,
      phone: value.phone,
      address: value.address,
      city: value.city,
      state: value.state,
      dateOfBirth: value.dateOfBirth,
      gender: value.gender,
    });
  };

  missingValue = (initializer) => {
    if (
      initializer.firstName.length &&
      initializer.lastName.length &&
      initializer.email.length &&
      initializer.phone.length &&
      initializer.address.length &&
      initializer.city.length &&
      initializer.state.length &&
      initializer.dateOfBirth.length
    ) {
      this.setState({ isValid: true });
      setTimeout(() => {
        this.setState({ isValid: false });
      }, 2000);
    }
  };

  validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "First name should be at least 2 characters")
      .max(15, "First name should be at most 15 characters")
      .required("First name is required"),

    lastName: Yup.string()
      .min(2, "Last name should be at least 2 characters")
      .max(15, "Last name should be at most 15 characters")
      .required("Last name is required"),

    email: Yup.string()
      .email("Invalid Email Address")
      .required("Email is required"),

    phone: Yup.string()
      .min(11, "Phone number should be at least 11 characters")
      .max(14, "Phone number should be at most 14 characters")
      .required("Phone number is required"),

    address: Yup.string().required("Home Address is required"),

    city: Yup.string().required("City is required"),

    state: Yup.string().required("State is required"),

    zipCode: Yup.number(),

    dateOfBirth: Yup.date().required("Your date of birth is required"),

    gender: Yup.string().required(),
  });

  render() {
    return (
      <div className="app">
        <h1 className="app__header">Voters Registration Form</h1>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            address: "",
            city: "",
            state: "",
            zipCode: "",
            isSubmitting: true,
          }}
          validationSchema={this.validationSchema}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            setTimeout(() => {
              console.log(values);
              setSubmitting(true);
              resetForm();
              setSubmitting(false);
            }, 4000);
          }}
        >
          {({
            values,
            handleChange,
            errors,
            touched,
            handleBlur,
            handleSubmit,
          }) => {
            return (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="app__form"
                autoComplete="off"
              >
                <div className="app__form--names">
                  <div className="formGroup">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      placeholder="First Name"
                      type="text"
                      name="firstName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstName}
                    />
                    <span className="errMsg">
                      {
                        errors.firstName &&
                          touched.firstName &&
                          errors.firstName
                        //if errors.firstName && touched.firstName, then display error.firstName
                      }
                    </span>
                  </div>

                  <div className="formGroup">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      placeholder="Last Name"
                      type="lastName"
                      name="lastName"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastName}
                    />
                    <span className="errMsg">
                      {
                        errors.lastName && touched.lastName && errors.lastName
                        //if errors.lastName && touched.lastName, then display error.lastName
                      }
                    </span>
                  </div>
                </div>

                <div className="formGroup app__form--email">
                  <label htmlFor="email">Email Address</label>
                  <input
                    placeholder="Email Address"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <span className="errMsg">
                    {
                      errors.email && touched.email && errors.email
                      //if errors.email && touched.email, then display error.email
                    }
                  </span>
                </div>

                <div className="formGroup app__form--address">
                  <label htmlFor="address">Home Address</label>
                  <input
                    placeholder="Home Address"
                    type="text"
                    name="address"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.address}
                  />
                  <span className="errMsg">
                    {
                      errors.address && touched.address && errors.address
                      //if errors.address && touched.address, then display error.address
                    }
                  </span>
                </div>

                <div className="app__form--city">
                  <div className="formGroup">
                    <label htmlFor="city">City</label>
                    <input
                      placeholder="City"
                      type="text"
                      name="city"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.city}
                    />
                    <span className="errMsg">
                      {
                        errors.city && touched.city && errors.city
                        //if errors.city && touched.city, then display error.city
                      }
                    </span>
                  </div>

                  <div className="formGroup">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      placeholder="Phone Number"
                      type="text"
                      name="phone"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.phone}
                    />
                    <span className="errMsg">
                      {
                        errors.phone && touched.phone && errors.phone
                        //if errors.phone && touched.phone, then display error.phone
                      }
                    </span>
                  </div>
                </div>

                <div className="app__form--state">
                  <div className="formGroup">
                    <label htmlFor="state">State</label>
                    <input
                      placeholder="State"
                      type="text"
                      name="state"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.state}
                    />
                    <span className="errMsg">
                      {
                        errors.state && touched.state && errors.state
                        //if errors.state && touched.state, then display error.state
                      }
                    </span>
                  </div>

                  <div className="formGroup app__form--date-date">
                    <label htmlFor="dateOfBirth">Date of Birth</label>
                    <input
                      type="date"
                      name="dateOfBirth"
                      onChange={handleChange}
                      onBlur={handleBlur}
                    />
                    <span className="errMsg">
                      {
                        errors.dateOfBirth &&
                          touched.dateOfBirth &&
                          errors.dateOfBirth
                        //if errors.dateOfBirth && touched.dateOfBirth, then display error.dateOfBirth
                      }
                    </span>
                  </div>
                </div>

                <div className="app__form--gender">
                  <h3 htmlFor="gender">Gender</h3> 
                  <div className="app__form--gender-gender">
                    <label htmlFor="male" className="checkmarkContainer">
                      Male
                      <input type="radio" id="male" name="gender" />
                      <span className="checkmark"></span>
                    </label>

                    <label htmlFor="female" className="checkmarkContainer">
                      Female
                      <input type="radio" id="female" name="gender" />
                      <span className="checkmark"></span>
                    </label>
                    <span className="errMsg">
                      {
                        errors.gender && touched.gender && errors.gender
                        //if errors.gender && touched.gender, then display error.gender
                      }
                    </span>
                  </div>
                </div>

                <div className="app__form--button">
                  <button
                    type="submit"
                    className="btn-primary"
                    onClick={() => {
                      this.missingValue(values);
                    }}
                  >
                    Submit
                  </button>
                </div>
                {this.state.isValid ? <SuccessModal /> : null}
              </form>
            );
          }}
        </Formik>
      </div>
    );
  }
}

export default App;
