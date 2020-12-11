import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Dashboard from "./Dashboard";
import Audio from "./Dashboard/Audio";
import Photo from "./Dashboard/Photo";
import Document from "./Dashboard/Document";
import Video from "./Dashboard/Video";
import Billing from "./Dashboard/Billing";
import Resources from "./Dashboard/Resources";
import Account from "./Dashboard/Account";
import About from "./About";
import Features from "./Features";
import Pricing from "./Pricing";
import Contact from "./Contact";
import { connect } from "react-redux";

function App(props) {
  console.log(props.auth);
  const { auth } = props;
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route
          path="/dashboard"
          render={() => (auth ? <Dashboard /> : <Redirect to="/login" />)}
        />
        <Route
          path="/audios"
          render={() => (auth ? <Audio /> : <Redirect to="/login" />)}
        />
        <Route
          path="/photos"
          render={() => (auth ? <Photo /> : <Redirect to="/login" />)}
        />
        <Route
          path="/documents"
          render={() => (auth ? <Document /> : <Redirect to="/login" />)}
        />
        <Route
          path="/videos"
          render={() => (auth ? <Video /> : <Redirect to="/login" />)}
        />
        <Route
          path="/billing"
          render={() => (auth ? <Billing /> : <Redirect to="/login" />)}
        />
        <Route
          path="/resources"
          render={() => (auth ? <Resources /> : <Redirect to="/login" />)}
        />
        <Route
          path="/my-account"
          render={() => (auth ? <Account /> : <Redirect to="/login" />)}
        />
        <Route
          path="/about-us"
          render={() => (auth ? <About /> : <Redirect to="/login" />)}
        />
        <Route path="/features" component={Features} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/contact-us" component={Contact} />
      </Switch>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    auth: state.persist.auth,
  };
};

export default connect(mapStateToProps)(App);
