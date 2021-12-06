import React from "react";
import Profile from "./Profile";
import logo from "../logo.jpg"
export default class Home extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Profile />
      </div>
    );
  }
}
