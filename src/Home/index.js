import React from "react";
import { AiFillPlayCircle, AiOutlineCloudSync } from "react-icons/ai";
import { connect } from "react-redux";

import "./style.css";
import Header from "../Header";
import Hero from "../Hero";
import { Link } from "react-router-dom";
import Plans from "../Plans";
import Footer from "../Footer";

function Home(props) {
  return (
    <div id="main">
      <div id="content">
        <Header />
        <Hero />
        <section className="index-about my-5">
          <div className="container">
            <div className="row" style={{ flexWrap: "wrap-reverse" }}>
              <div
                className="col-md-6"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  minHeight: "400px",
                }}
              >
                <AiFillPlayCircle
                  style={{ color: "orange", fontSize: "100px" }}
                />
              </div>
              <div
                className="col-md-6"
                style={{
                  display: "flex",
                  alignItems: "start",
                  justifyContent: "center",
                  flexDirection: "column",
                }}
              >
                <h6>WHO WE ARE?</h6>
                <h1
                  style={{
                    // textAlign: "left !important",
                    display: "block",
                  }}
                  className="my-3 custom-h1"
                >
                  What is CloudX?
                </h1>
                <p>
                  Working with coworkers, customers and partners has never been
                  simpler. With CloudX, not only can you securely share files,
                  you can also create, edit and review documents with others
                  {/* in real time  */} from anywhere, on any device. From
                  simplifying the way you manage your content to empowering
                  global teams, CloudX helps you work smarter than ever before.
                </p>
                <Link to="/" className="mt-5 btn btn-lg custom-button">
                  MORE
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="index-benefits py-5">
          <div className="container">
            <h6 className="text-center">OUR BENEFITS</h6>
            <h1 className="text-center my-2 custom-h1">
              More than just sharing and storage
            </h1>
            <p className="text-center my-4">
              We are more than just sharing and storage.Take a look at the top
              features to make your life simple and easy.
            </p>

            <div className="row">
              <div className="col-6 col-md-3 my-1">
                <div className="feature-badge">
                  <AiOutlineCloudSync style={{ fontSize: "40px" }} />
                </div>
                <h5 className="text-center">Playing files online</h5>
              </div>
              <div className="col-6 col-md-3 my-1">
                <div className="feature-badge">
                  <AiOutlineCloudSync style={{ fontSize: "40px" }} />
                </div>
                <h5 className="text-center">No file size limit</h5>
              </div>
              <div className="col-6 col-md-3 my-1">
                <div className="feature-badge">
                  <AiOutlineCloudSync style={{ fontSize: "40px" }} />
                </div>
                <h5 className="text-center">Set passwords for file transfer</h5>
              </div>
              <div className="col-6 col-md-3 my-1">
                <div className="feature-badge">
                  <AiOutlineCloudSync style={{ fontSize: "40px" }} />
                </div>
                <h5 className="text-center">Tripple backups</h5>
              </div>
            </div>

            <div className="mt-4  text-center">
              <Link to="/register" className="btn btn-lg custom-button">
                FREE SIGN UP
              </Link>
            </div>
          </div>
        </section>
        <section className="index-needs my-5">
          <div className="container">
            <h6 className="text-center">POWERFUL & SIMPLE</h6>
            <h1 className="text-center my-3 custom-h1">
              Handles all of your file needs
            </h1>
            <p className="text-center my-4">
              File storage made easy – including powerful features you won’t
              find anywhere else. Whether you’re sharing photos, videos, audio,
              or docs, MediaFire can simplify your workflow.
            </p>
            <div className="row my-5">
              <div className="col-md-3 my-2 text-center">
                <img src="/cloudc.png" alt="cloud" width="60%" />
                <h4 className="my-3">Share</h4>
                <p>
                  Share through email, link, or social network. Unlimited
                  downloads. No wait times.
                </p>
              </div>
              <div className="col-md-3 my-2 text-center">
                <img src="/icon13.png" alt="cloud" width="60%" />
                <h4 className="my-3">Collaborate</h4>
                <p>
                  Store and share any file type. Share folders of project files.
                  Easily email large files
                </p>
              </div>
              <div className="col-md-3 my-2 text-center">
                <img src="/icon14.png" alt="cloud" width="60%" />
                <h4 className="my-3">Store</h4>
                <p>
                  10GB for free. Up to 50GB free with bonuses. Store all your
                  photos, audio, and videos.
                </p>
              </div>
              <div className="col-md-3 my-2 text-center">
                <img src="/icon15.png" alt="cloud" width="60%" />
                <h4 className="my-3">Access</h4>
                <p>
                  Always have your important files with you. Never forget your
                  work at home.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="index-plan py-5">
          <div className="container">
            <h6 className="text-center">CHOOSE YOUR PLAN</h6>
            <h1 className="text-center my-3 custom-h1">
              Choose a plan that's right for you.
            </h1>
            <Plans />
          </div>
        </section>
        <section className="index-cta py-5">
          <div className="container">
            <div className="row">
              <div className="col-md-6 mt-3 text-center">
                <img
                  src="/cloud-storage.png"
                  width="100%"
                  alt="cloud-storage"
                />
              </div>
              <div className="col-md-6 mt-3">
                <h6>SIGN UP FOR FREE</h6>
                <h1 className="mt-3 custom-h1">Get started for</h1>
                <h1 className="mb-3 custom-h1">FREE</h1>
                <h6
                  className="mb-2"
                  style={{ color: "#fff", fontSize: "25px", fontWeight: "200" }}
                >
                  File storage made easy including powerful features you won’t
                  find anywhere else.
                </h6>
                <h6
                  className="mb-2"
                  style={{ color: "#fff", fontSize: "25px", fontWeight: "200" }}
                >
                  Access all your documents anywhere,on any device. Whether
                  you're sharing photos, videos, audio, or docs.
                </h6>

                <Link to="/register" className="btn btn-lg custom-button mt-3">
                  FREE SIGN UP
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className="index-testimonials py-5">
          <div className="container">
            <h6 className="text-center">TESTIMONIALS</h6>
            <h1 className="text-center my-3 custom-h1">
              Over 50 million people trust us
            </h1>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}

const mapDispatchToProps = (state) => {
  return {};
};

export default connect(mapDispatchToProps)(Home);
