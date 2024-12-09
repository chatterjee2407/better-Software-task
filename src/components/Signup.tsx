import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as yup from "yup";
import "../index.scss"; // Use provided CSS

interface SignUpValues {
  email: string;
  password: string;
  confirmPassword: string;
}

// Helper to determine password strength
const getPasswordStrength = (password: string): string => {
  if (!password) return "";
  if (password.length < 6) return "Weak";
  if (/[A-Z]/.test(password) && /\d/.test(password)) return "Strong";
  return "Medium";
};

const SignUp: React.FC = () => {
  const [successMessage, setSuccessMessage] = useState<string>("");

  // Validation schema for the SignUp form
  const signUpValidationSchema = yup.object({
    email: yup.string().email("Invalid email format").required("Email is required"),
    password: yup.string().required("Password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")], "Passwords must match")
      .required("Confirm Password is required"),
  });

  return (
    <div className="form">
      <h1>Sign Up</h1>
      <Formik
        initialValues={{ email: "", password: "", confirmPassword: "" }}
        validationSchema={signUpValidationSchema}
        onSubmit={(values: SignUpValues, { resetForm }) => {
          setSuccessMessage("Sign Up Successful");
          resetForm();
        }}
      >
        {({ values }) => (
          <Form>
            <div className="field-wrap">
              <label htmlFor="email" className={values.email ? "active" : ""}>
                Email:
              </label>
              <Field type="email" name="email" aria-label="Email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div className="field-wrap">
              <label htmlFor="password" className={values.password ? "active" : ""}>
                Password:
              </label>
              <Field type="password" name="password" aria-label="Password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <div>
              Password Strength: <strong>{getPasswordStrength(values.password)}</strong>
            </div>

            <div className="field-wrap">
              <label htmlFor="confirmPassword" className={values.confirmPassword ? "active" : ""}>
                Confirm Password:
              </label>
              <Field type="password" name="confirmPassword" aria-label="Confirm Password" />
              <ErrorMessage name="confirmPassword" component="div" className="error" />
            </div>

            <button type="submit" className="button button-block">
              Sign Up
            </button>
          </Form>
        )}
      </Formik>
      {successMessage && <div aria-live="polite">{successMessage}</div>}
    </div>
  );
};

export default SignUp;
