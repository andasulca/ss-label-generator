import React from "react";
import ReactToPrint from "react-to-print";
import Barcode from "react-barcode";
import TextField from "@material-ui/core/TextField";
import logo from "../assets/images/logo.png";

class ComponentToPrint extends React.Component {
  render() {
    const startingValue = this.props.data.nextbox.nextbox;

    const components = [];
    for (
      let j = startingValue;
      j < startingValue + parseInt(this.props.data.topicBox);
      j++
    ) {
      components.push(Barcode);
    }
    const componentsToRender = components.map((Component, i) => (
      <div className="with-logo">
        <div className="logo-div">
          <img src={logo} alt="Logo" className="logo-barcode" />
        </div>
        <div className="id-div">
          <h3 className="client-id">{this.props.clientID}</h3>
        </div>
        <div className="barcode">
          <Component
            width={4}
            key={i + startingValue}
            value={i + startingValue}
          />
        </div>
      </div>
    ));

    return <div className="barcode-container">{componentsToRender}</div>;
  }
}

class ToPrint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topicBox: null,
      nextbox: this.props.nextbox[0],
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    return (
      <div>
        <TextField
          name="topicBox"
          value={this.state.topicBox}
          onChange={this.handleChange}
          label={"Uzlīmju skaits"}
        />
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => this.componentRef}
        />
        <ComponentToPrint
          ref={(el) => (this.componentRef = el)}
          data={this.state}
          clientID={this.props.clientID}
        />
      </div>
    );
  }
}

export default ToPrint;
