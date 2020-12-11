import { Link } from "react-router-dom";
import "./style.css";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { registerThunkAction } from "../redux/actions/authActions";

const registerSchema = Yup.object().shape({
  firstName: Yup.string().required("Required!"),
  lastName: Yup.string().required("Required!"),
  email: Yup.string().email().required("Required!"),
  password: Yup.string()
    .min(8, "Must be more than 8 characters.")
    .required("Required!"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Passwords must match"
  ),
});

function Register(props) {
  const { registerLoading, registerError } = props;

  return (
    <div className="register">
      <div className="register-header-wrapper">
        <div className="container">
          <Link to="/">
            <h1>CloudX</h1>
          </Link>
          <Link to="/login">Login</Link>
        </div>
      </div>
      <div className="row">
        <div className="my-5 mx-auto auth-form-wrapper">
          <h1
            className="text-center mt-5 mb-4"
            style={{ fontWeight: "bolder" }}
          >
            REGISTER
          </h1>

          <Formik
            initialValues={{
              firstName: "",
              lastName: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            validationSchema={registerSchema}
            onSubmit={(values) => {
              props.registerThunkAction(values);
            }}
          >
            {({ errors, touched }) => (
              <Form className="register-form form-group">
                <p className="form-error my-2">{registerError}</p>
                <label htmlFor="firstName">FirstName</label>
                <Field name="firstName" type="text" className="form-control" />
                {errors.firstName && touched.firstName ? (
                  <p className="form-error">{errors.firstName}</p>
                ) : null}
                <label htmlFor="lastName">LastName</label>
                <Field name="lastName" type="text" className="form-control" />
                {errors.lastName && touched.lastName ? (
                  <p className="form-error">{errors.lastName}</p>
                ) : null}
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" className="form-control" />
                {errors.email && touched.email ? (
                  <p className="form-error">{errors.email}</p>
                ) : null}
                <label htmlFor="password">Password</label>
                <Field
                  name="password"
                  type="password"
                  className="form-control"
                />
                {errors.password && touched.password ? (
                  <p className="form-error">{errors.password}</p>
                ) : null}
                <label htmlFor="confirmPassword">Confirm Password</label>
                <Field
                  name="confirmPassword"
                  type="password"
                  className="form-control"
                />
                {errors.confirmPassword && touched.confirmPassword ? (
                  <p className="form-error">{errors.confirmPassword}</p>
                ) : null}

                {registerLoading ? (
                  <button
                    className="btn btn-block mt-2 auth-btn"
                    type="button"
                    disabled
                  >
                    <span
                      className="spinner-border spinner-border-sm"
                      role="status"
                      aria-hidden="true"
                    ></span>
                  </button>
                ) : (
                  <button className="my-3 btn btn-block auth-btn" type="submit">
                    Register
                  </button>
                )}
              </Form>
            )}
          </Formik>

          <p className="text-center mb-4">
            ALready a member?{" "}
            <Link to="/login" className="login-register-link">
              Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    registerLoading: state.auth.registerLoading,
    registerError: state.auth.registerError,
  };
};

export default connect(mapStateToProps, { registerThunkAction })(Register);
