import { Link } from "react-router-dom";
import "./style.css";

function Hero(props) {
  return (
    <div className="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6 hero-text">
            <h1 className="my-2 custom-h1">
              Secure cloud storage for your files.
            </h1>
            <h6>
              All your photos,videos,music and documents everywhere with you.
            </h6>
            <Link to="/" className="btn mt-4 btn-lg custom-button">
              Get Started
            </Link>
          </div>
          <div className="col-md-6">
            <img src="/cloud.png" width="100%" alt="cloud" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
