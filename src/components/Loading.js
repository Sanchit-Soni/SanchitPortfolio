import "../CSS/loading.css";
import { Fade } from "react-reveal";

import React, { Component } from "react";

import { Redirect } from "react-router-dom";

class Loading extends Component {
  state = {
    redirect: false,
  };

  componentDidMount() {
    this.id = setTimeout(() => this.setState({ redirect: true }), 2500);
  }

  componentWillUnmount() {
    clearTimeout(this.id);
  }

  render() {
    return this.state.redirect ? (
      <Redirect to="/home" />
    ) : (
      <div>
        <Fade>
          <div className="loader-container">
            <h1 className="loading-text" data-text="Loading.">
              Loading.
            </h1>
          </div>
        </Fade>
      </div>
    );
  }
}

export default Loading;
