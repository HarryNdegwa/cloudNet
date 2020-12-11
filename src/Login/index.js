import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { connect } from "react-redux";
import { loginThunkAction } from "../redux/actions/authActions";

import "./style.css";

const loginSchema = Yup.object().shape({
  email: Yup.string().email().required("Required!"),
  password: Yup.string().required("Required!"),
  // rememberMe: Yup.bool(),
});

function Login(props) {
  const { loginLoading, loginError } = props;
  return (
    <div className="login">
      <div className="login-header-wrapper">
        <div className="container">
          <Link to="/">
            <h1>CloudX</h1>
          </Link>
          <Link to="/register">Register</Link>
        </div>
      </div>
      <div>
        <div className="row">
          <div className="my-5 mx-auto auth-form-wrapper">
            <h1
              className="text-center mt-5 mb-4"
              style={{ fontWeight: "bolder" }}
            >
              LOGIN
            </h1>
            <Formik
              initialValues={{
                email: "",
                password: "",
                // , rememberMe: false
              }}
              validationSchema={loginSchema}
              onSubmit={(values) => {
                // console.log(values);
                const payload = { ...values };
                payload.username = values.email;
                delete payload.password;
                payload.password = values.password;
                delete payload.email;
                props.loginThunkAction(payload);
              }}
            >
              {({ errors, touched }) => (
                <Form className="form-group login-form">
                  <p className="form-error my-2">{loginError}</p>
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
                  {/* <section className="d-flex align-items-center my-2">
                    <Field type="checkbox" name="rememberMe" />
                    <span className="ml-2">Remember Me</span>
                  </section> */}

                  {loginLoading ? (
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
                    <button
                      className="my-3 btn btn-block auth-btn"
                      type="submit"
                    >
                      Login
                    </button>
                  )}
                </Form>
              )}
            </Formik>

            <p className="text-center">
              Not a member?{" "}
              <Link to="/register" className="login-register-link">
                Sign up now
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loginLoading: state.auth.loginLoading,
    loginError: state.auth.loginError,
  };
};

export default connect(mapStateToProps, { loginThunkAction })(Login);
