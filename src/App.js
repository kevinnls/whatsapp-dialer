import React from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const utils = require("intl-tel-input/build/js/utils");

class App extends React.Component {
  handleSubmit = this.handleSubmit.bind(this);

  render() {
    return (
      <React.Fragment>
        <header className="center">
          <h1>quasapp</h1> <p>the quick convo start for WhatsApp </p>
        </header>
        <p className="center">This page has no affiliation with WhatsApp</p>
        <div className="center">
          <form onSubmit={this.handleSubmit}>
            <input id="phone" type="text" />
            <input type="submit" value="idk" />
          </form>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    const phoneField = document.getElementById("phone");
    this.iti = intlTelInput(phoneField, { utilsScript: utils });
  }
  handleSubmit(event) {
    event.preventDefault();
    let number = this.iti.getNumber().slice(1);
    window.location = `//wa.me/${number}`;
  }
}

export default App;
