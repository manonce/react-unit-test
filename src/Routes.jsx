import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export class Home extends Component {
  render() {
    return <div>Home Page</div>;
  }
}

export const News = props => {
  const { location } = props;
  return <div>News Feed {location.pathname}</div>;
};

export class NoMatch extends Component {
  render() {
    return <div>404 page</div>;
  }
}

class Routes extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/news" component={News} />
            <Route exact path="/news/techdomain" component={News} />
            <Route component={NoMatch} />
            <Link to="/">Home page</Link>
            <br />
            <Link to="/news">News page</Link>
            <br />
            <Link to="/news/techdomain">News page for techdomain </Link>
          </div>
        </Router>
      </div>
    );
  }
}

export default Routes;
