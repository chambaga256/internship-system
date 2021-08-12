import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Login extends Component {
  render() {
    return (
      <form>
        <h3>Access Your Account</h3>

        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
          />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
          />
        </div>

        <div className="form-group">
          <div className="custom-control custom-checkbox">
            <input
              type="checkbox"
              className="custom-control-input"
              id="customCheck1"
            />&nbsp;&nbsp;
            <label className="custom-control-label" htmlFor="customCheck1">
              Remember me
            </label>
          </div>
        </div>

        <br />
        <button type="submit" className="btn btn-success btn-block btn-lg">
          Submit
        </button>
        <p className="forgot-password text-right">
          Forgot <Link to={"/forgot-password"}>password?</Link>
        </p>
      </form>
    );
  }
}