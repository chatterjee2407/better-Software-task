import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "../index.scss"; // Use provided CSS

interface LoginValues {
  email: string;
  password: string;
  rememberMe: boolean;
}

const Login: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Validation schema for the Login form
  const loginValidationSchema = yup.object({
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string().required("Password is required"),
    rememberMe: yup.boolean(),
  });

  return (
    <div className="form">
      <h1>Login</h1>
      <Formik
        initialValues={{ email: "", password: "", rememberMe: false }}
        validationSchema={loginValidationSchema}
        onSubmit={(values: LoginValues, { resetForm }) => {
          if (values.rememberMe) {
            localStorage.setItem("rememberedEmail", values.email);
          }
          setSuccessMessage("Login Successful");
          resetForm();
        }}
      >
        {({ setFieldValue, values }) => (
          <Form>
            <div className="field-wrap">
              <label htmlFor="email" className={values.email ? "active" : ""}>
                Email:
              </label>
              <Field type="email" name="email" aria-label="Email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="field-wrap">
              <label
                htmlFor="password"
                className={values.password ? "active" : ""}
              >
                Password:
              </label>
              <Field type="password" name="password" aria-label="Password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div className="checkbox-wrap">
              <Field
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
                onChange={(e) => setFieldValue("rememberMe", e.target.checked)}
              />
              <label htmlFor="rememberMe" className="checkbox-label">
                Remember Me
              </label>
            </div>

            <button type="submit" className="button button-block">
              Login
            </button>
          </Form>
        )}
      </Formik>
      {successMessage && <div aria-live="polite">{successMessage}</div>}
    </div>
  );
};

export default Login;
