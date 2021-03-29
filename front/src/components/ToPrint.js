import React from "react";
import ReactToPrint from "react-to-print";
import Barcode from "react-barcode";
//import InputField from "../components/common/InputField";
import TextField from "@material-ui/core/TextField";

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
      <Component key={i + startingValue} value={i + startingValue} />
    ));

    return (
      <table>
        <tbody>
          <tr>
            <td>{componentsToRender}</td>
          </tr>
        </tbody>
      </table>
    );
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
        />
      </div>
    );
  }
}

export default ToPrint;
