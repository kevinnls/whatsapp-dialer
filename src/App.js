import React from "react";
import intlTelInput from "intl-tel-input";
import "intl-tel-input/build/css/intlTelInput.css";

const utils = require("intl-tel-input/build/js/utils");

class App extends React.Component {
  handleSubmit = this.handleSubmit.bind(this);
  handleChange = this.handleChange.bind(this);

  render() {
    return (
      <React.Fragment>
        <header className="center">
          <h1>quasapp</h1> <p>the quick convo start for WhatsApp </p>
        </header>
        <p className="center">This page has no affiliation with WhatsApp</p>
        <div className="center">
          <form onSubmit={this.handleSubmit}>
            <input id="phone" type="text" onChange={this.handleChange} />
            <input type="submit" id="submit-button" disabled value="Enter Number" />
          </form>
        </div>
      </React.Fragment>
    );
  }
  componentDidMount() {
    const phoneField = document.getElementById("phone");
    this.iti = intlTelInput(phoneField, { utilsScript: utils });
  }
  handleChange(event){
    this.number = this.iti.getNumber();
    if(this.iti.isValidNumber()){
  document.getElementById("submit-button").disabled = false;
  document.getElementById("submit-button").value = "Start Chat";
    }
  }
  handleSubmit(event) {
    event.preventDefault();
    window.location = `https://api.whatsapp.com/send/?phone=${this.number}`;
  }
}

export default App;
