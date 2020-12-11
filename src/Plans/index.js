import { useState } from "react";
import { Link } from "react-router-dom";

import "./style.css";

function Plans(props) {
  const [initialTerm, setInitialTerm] = useState(true);
  const handleTerm = function () {
    if (initialTerm === true) {
      setInitialTerm(false);
    } else {
      setInitialTerm(true);
    }
  };
  return (
    <div className="plans">
      <span id="plan-term-btns" className="mt-3 mb-2">
        <span
          onClick={handleTerm}
          className={`btn plan-term-btn ${initialTerm ? `active-plan` : null}`}
        >
          Monthly
        </span>
        <span
          onClick={handleTerm}
          className={`btn plan-term-btn ${initialTerm ? null : `active-plan`}`}
        >
          Yearly
        </span>
      </span>

      {initialTerm ? (
        <section className="plan-cards">
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="plan-card">
                <div className="plan-card-header">
                  <h4>Starter</h4>
                </div>
                <div className="plan-card-body">
                  <h1 className="my-4">Free</h1>
                  <h6>
                    Secure file sharing and collaboration. Ideal for individuals
                    and small teams.
                  </h6>
                  <h6>Up to 20GB Storage</h6>
                  <h6>50GB Download link traffic</h6>
                </div>
                <div className="plan-card-footer">
                  <Link
                    className="btn btn-sm custom-button plan-signin-btn"
                    to="/"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="plan-card">
                <div className="plan-card-header">
                  <h4>Business</h4>
                </div>
                <div className="plan-card-body">
                  <h1 className="my-4">
                    $3.99
                    <span>
                      <small
                        style={{
                          color: "#000",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        /MO
                      </small>
                    </span>
                  </h1>
                  <h6>
                    Core sync and share capabilities, advanced security,
                    customisation and reporting.
                  </h6>
                  <h6>500GB Storage</h6>
                  <h6>500GB Download link traffic</h6>
                </div>
                <div className="plan-card-footer">
                  <Link
                    className="btn btn-sm custom-button plan-tryit-btn mr-2"
                    to="/"
                  >
                    Try It
                  </Link>{" "}
                  <Link
                    className="btn btn-sm custom-button plan-signin-btn ml-2"
                    to="/"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="plan-card">
                <div className="plan-card-header">
                  <h4>Enterprise</h4>
                </div>
                <div className="plan-card-body">
                  <h1 className="my-4">
                    $7.99
                    <span>
                      <small
                        style={{
                          color: "#000",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        /MO
                      </small>
                    </span>
                  </h1>
                  <h6>
                    Content management with premier account and content security
                    and workflow automation.
                  </h6>
                  <h6>2TB Storage</h6>
                  <h6>2TB Download link traffic</h6>
                </div>
                <div className="plan-card-footer">
                  <Link
                    className="btn btn-sm custom-button plan-tryit-btn mr-2"
                    to="/"
                  >
                    Try It
                  </Link>{" "}
                  <Link
                    className="btn btn-sm custom-button plan-signin-btn ml-2"
                    to="/"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="plan-cards">
          <div className="row mt-4">
            <div className="col-md-4">
              <div className="plan-card">
                <div className="plan-card-header">
                  <h4>Special</h4>
                </div>
                <div className="plan-card-body">
                  <h1 className="my-4">
                    $99.99
                    <span>
                      <small
                        style={{
                          color: "#000",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        /YR
                      </small>
                    </span>
                  </h1>
                  <h6>
                    Secure file sharing and collaboration. Ideal for individuals
                    and small teams.
                  </h6>
                  <h6>10TB Storage</h6>
                  <h6>10TB Download link traffic</h6>
                </div>
                <div className="plan-card-footer">
                  <Link
                    className="btn btn-sm custom-button plan-signin-btn"
                    to="/"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="plan-card">
                <div className="plan-card-header">
                  <h4>Premium</h4>
                </div>
                <div className="plan-card-body">
                  <h1 className="my-4">
                    $144.99
                    <span>
                      <small
                        style={{
                          color: "#000",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        /YR
                      </small>
                    </span>
                  </h1>
                  <h6>
                    Core sync and share capabilities, advanced security,
                    customisation and reporting.
                  </h6>
                  <h6>20TB Storage</h6>
                  <h6>20TB Download link traffic</h6>
                </div>
                <div className="plan-card-footer">
                  <Link
                    className="btn btn-sm custom-button plan-tryit-btn mr-2"
                    to="/"
                  >
                    Try It
                  </Link>{" "}
                  <Link
                    className="btn btn-sm custom-button plan-signin-btn ml-2"
                    to="/"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="plan-card">
                <div className="plan-card-header">
                  <h4>Exclusive</h4>
                </div>
                <div className="plan-card-body">
                  <h1 className="my-4">
                    $199.99
                    <span>
                      <small
                        style={{
                          color: "#000",
                          fontSize: "12px",
                          fontWeight: "bold",
                        }}
                      >
                        /YR
                      </small>
                    </span>
                  </h1>
                  <h6>
                    Content management with premier account and content security
                    and workflow automation.
                  </h6>
                  <h6>Free Storage</h6>
                  <h6>Unlimited Download link traffic</h6>
                </div>
                <div className="plan-card-footer">
                  <Link
                    className="btn btn-sm custom-button plan-tryit-btn mr-2"
                    to="/"
                  >
                    Try It
                  </Link>{" "}
                  <Link
                    className="btn btn-sm custom-button plan-signin-btn ml-2"
                    to="/"
                  >
                    Sign Up
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}

export default Plans;
